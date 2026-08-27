# Yêu cầu Phi chức năng (NFR) — Sprint 1 Thu hồi Công nợ

**Ngày:** 2026-08-27

> Các mục đánh **[ĐÃ CHỐT]** là quyết định của PO. Các mục đánh **[ĐỀ XUẤT]** là phương án tôi khuyến nghị, cần PO duyệt trước khi code.

---

## 1. Phạm vi & thời điểm đồng bộ dữ liệu CM — [ĐÃ CHỐT]

**Đồng bộ toàn bộ** từ response của các endpoint `get all`, tại **2 thời điểm**:

| Thời điểm | Cách kích hoạt | Phạm vi |
|---|---|---|
| Kế toán bấm "🔄 Đồng bộ dữ liệu CM" | Thủ công | Toàn bộ payment-request của kỳ cước đang chọn |
| Bên CM bấm **Gen ĐNTT** | Tự động | Bản ghi ĐNTT vừa sinh |

**Không cần webhook, không cần CM sửa gì.** CM đã có sẵn chức năng Gen ĐNTT và endpoint `GET /api/payment-request/all` trả về kết quả. Việc của ERP chỉ là **lấy response và map sang mô hình dữ liệu của mình** — quan hệ một chiều, ERP chủ động kéo.

| Thời điểm | Cách kích hoạt |
|---|---|
| Kế toán bấm "🔄 Đồng bộ dữ liệu CM" | Thủ công — đây là đường chính |
| Job `debt_cm_sync` (đề xuất, 07:45 hàng ngày) | Tự động kéo trước các job nghiệp vụ buổi sáng |

Job 07:45 là **đề xuất**, không bắt buộc: nó chỉ tiết kiệm cho Kế toán một cú bấm mỗi sáng. Nếu PO thấy thừa thì bỏ, luồng thủ công vẫn đủ. Sau khi sync xong, job gọi lại `DebtPenaltyJob.RunOnce` phòng trường hợp có khoản nợ mới đồng bộ về đã quá hạn sẵn — chạy lại trong cùng ngày là vô hại nhờ `UNIQUE (debt_id, calculated_date)`.

**Quy tắc chung cho cả 2 thời điểm:** upsert theo `dntt_cm_id`, **không ghi đè** dữ liệu Kế toán đã nhập tay (`penalty_rate`, `sync_status`, `CUSTOMERS.rep_name`…). Bản ghi mới luôn khởi tạo `sync_status = PENDING_REVIEW`.

**Quy mô dự kiến:** ~vài trăm khách hàng/kỳ cước → không cần phân trang hay xử lý theo lô ở Sprint 1. Nhưng nếu response CM > 1.000 bản ghi thì phải ghi DB theo lô 500 dòng để tránh transaction quá dài.

---

## 2. Gọi CM thất bại — [ĐỀ XUẤT]

### 2.1 Thử lại (retry)

**Đề xuất: 3 lần, exponential backoff 2s → 4s → 8s**, chỉ thử lại với lỗi **tạm thời**:

| Loại lỗi | Xử lý |
|---|---|
| Timeout, `502`, `503`, `504`, lỗi mạng | ✅ Thử lại tối đa 3 lần |
| `401 Unauthorized` | Xin JWT mới 1 lần rồi thử lại 1 lần. Vẫn lỗi → dừng |
| `400`, `403`, `404` | ❌ Không thử lại — lỗi logic, thử lại cũng vô ích |
| `500` | ✅ Thử lại (có thể do lỗi nhất thời bên CM) |

**Timeout mỗi lần gọi:** 30 giây. Tổng thời gian một lần đồng bộ không quá 5 phút.

### 2.2 Khi hết lượt thử

- **Không rollback toàn bộ.** Đồng bộ chạy theo từng bản ghi: bản nào thành công thì giữ, bản nào lỗi thì gom vào mảng `warnings` của response (đã có sẵn trong `ERP_API.md` mục *Đồng bộ dữ liệu CM*).
- Ghi 1 bản ghi `debt_events` với `action_type = 'CM_SYNC_FAILED'`.
- Gửi notification `DEBT_SYNC_FAILED` cho Kế toán và Admin.
- Màn hình hiện banner: *"Đồng bộ hoàn tất với N lỗi — [Xem chi tiết]"*, có nút thử lại chỉ những bản ghi lỗi.

### 2.3 Cache JWT của CM

Token CM có hạn 4 giờ (`API.md` §Overview). Cache trong bộ nhớ, tự xin lại khi còn dưới 10 phút là hết hạn — tránh gọi `/authen/login` mỗi lần đồng bộ.

---

## 3. Gửi email thất bại — [ĐỀ XUẤT]

Đây là rủi ro nghiêm trọng nhất về mặt pháp lý: **email nhắc nợ là bằng chứng trước tòa**. Không được im lặng nuốt lỗi.

### 3.1 Mô hình xử lý

Dùng **nguyên cơ chế đã có** trong codebase (`ticket/entity/ticket_reminder_outbox.go`), không viết mới: job quét chỉ **enqueue** trong vùng khóa; `DebtReminderDrainJob` với advisory lock riêng mới thực sự gửi. Một sự kiện enqueue vào 3 nơi — `debt_email_logs`, `debt_reminder_outbox` (Lark), `notifications` (nền tảng).

| Kết quả | `status` | Hành động |
|---|---|---|
| Gửi thành công | `sent` | Đọc lại `Message-ID` từ Gmail, lưu `message_id`, `sent_at`, `from_email`; **làn `REMINDER`** tăng `email_sent_count`, cập nhật `last_email_sent_date` |
| Lỗi tạm thời (timeout, quá tải, `5xx`) | `failed` → drain job thử lại | **3 lần**, cách nhau 5 / 15 / 60 phút |
| Lỗi vĩnh viễn (địa chỉ không tồn tại, MIME sai) | `failed` (hết lượt) | Enqueue `DEBT_EMAIL_FAILED` cho **người duyệt đúng làn** |
| Không có người nhận (`To` rỗng) | `skipped` | Không tính là lỗi hệ thống — cảnh báo đỏ trên grid |
| Trùng trong ngày | `skipped` | Đúng theo luật 1 email/ngày *(chỉ làn `REMINDER`)* |

**Kênh độc lập nhau:** `EMAIL` lỗi không kéo theo `LARK` và `INAPP` — người phụ trách vẫn nhận được thông tin.

### 3.1b Phân loại lỗi Gmail API — ba rổ, ba cách xử

Gộp cả ba vào một rổ "thử lại 3 lần" là sai: lỗi cấu hình thử lại bao nhiêu cũng hỏng, còn lỗi hạn mức thì tiêu hết lượt thử một cách oan uổng.

| Mã Gmail API | Nghĩa | Xử |
|---|---|---|
| `429` · `403 rateLimitExceeded` · `403 userRateLimitExceeded` | Vượt hạn mức tạm thời | Backoff mũ (1/2/4/8 phút, tối đa 30), **KHÔNG** tính vào 3 lần thử |
| `500` · `503` · timeout mạng | Google lỗi tạm thời | Thử lại theo lịch 5 / 15 / 60 phút |
| `400 invalidArgument` · `400 failedPrecondition` | MIME sai, địa chỉ sai định dạng | `failed` **ngay lần đầu** — thử lại vô ích, tốn 3 chu kỳ chờ |
| `403 unauthorized_client` · `401` | Domain-wide delegation chưa cấp hoặc bị thu hồi | `failed` ngay + báo **Admin**, không báo Kế toán |
| `413` | Đính kèm vượt 25 MB | `failed` ngay, báo người duyệt kèm dung lượng thực tế |

**Vì sao `429` không tính vào lượt thử:** vượt hạn mức nghĩa là *"gửi lại sau thì được"*, không phải *"thư này hỏng"*. Tính vào lượt thử thì một đợt cao điểm sẽ đốt hết 3 lượt trong 80 phút rồi báo Kế toán "không gửi được" — trong khi chỉ cần chờ.

**Vì sao lỗi cấu hình báo Admin chứ không báo Kế toán:** `unauthorized_client` là việc của Admin Workspace, Kế toán không làm gì được. Báo nhầm người thì mỗi sáng họ nhận cảnh báo về thứ ngoài tầm tay, và sẽ ngừng đọc — đúng lúc có lỗi thật thì bỏ qua.

### 3.2 Bốn nguyên tắc bắt buộc

1. **Thất bại không được làm hỏng nghiệp vụ.** Cron gửi 50 mail, mail thứ 7 lỗi thì 43 mail còn lại vẫn phải gửi. Không dùng một transaction bọc cả vòng lặp.
2. **Thử lại không được phá luật 1 email/ngày.** Lần thử lại tính là **cùng một** lần gửi, không tăng `email_sent_count`.
3. **Thất bại phải nhìn thấy được.** Cột "Trạng thái Mail" trên grid Kế toán hiện thêm trạng thái `⚠️ Gửi lỗi` kèm tooltip lý do, có nút gửi lại thủ công.
4. **Thử lại không được tạo thư thứ hai.** Bản ghi đã ở `queued` thì compare-and-swap ở `ERP_API.md` §6.1d đã chặn; drain job chỉ được gửi lại **đúng bản ghi đó**, không tạo dòng mới. Tạo dòng mới là khách nhận hai thư giống nhau và `sequence_step` thủng lỗ.

### 3.3 Email nội bộ

Với email nội bộ (`SUSPEND_REJECTED`, `LEGAL_NOTIFY_X_PLUS_15`, `SUE_NOTIFY_X_PLUS_30`, `SUSPEND_RESULT`, `DRAFT_PENDING_DIGEST`), nếu email lỗi thì **notification in-app và Lark vẫn phải tới** — không để mất thông tin chỉ vì một kênh chết.

### 3.4 Thư công văn — làn `LEGAL`

Thư kèm PDF công văn (`mail_track = 'LEGAL'`) chịu thêm ba ràng buộc:

1. **Không đọc được file PDF thì không gửi.** `failed` ngay, `last_error` ghi rõ đường dẫn, và **không** lật `legal_status`. Gửi thư công văn mà thiếu file đính kèm là gửi thư rỗng cho khách đang bị đòi nợ.
2. **Gửi lỗi thì công văn vẫn ở `PREPARING`** nếu `delivery_method = 'EMAIL'`. Trạng thái chỉ tiến khi thư thực sự đi.
3. **Báo lỗi cho Pháp lý, không phải Kế toán.** `DEBT_EMAIL_FAILED` chọn người nhận theo `mail_track` — mỗi ngày chậm là mốc `grace_period_days` lùi một ngày, người cần biết là người xử lý được.

---

## 4. Dữ liệu cá nhân trong `customer_contacts` — [ĐỀ XUẤT]

Bảng này chứa họ tên, email, số điện thoại, chức vụ của nhân sự bên khách hàng → là **dữ liệu cá nhân** theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.

### 4.1 Đề xuất cho Sprint 1

| Vấn đề | Phương án |
|---|---|
| **Ai được xem** | Chỉ role có `debt:read`. Sales chỉ thấy contact của khách mình phụ trách (ép ở tầng query, giống `sale_owner`) |
| **Che giấu khi hiển thị** | Danh sách grid che một phần: `ke***@epic.vn`, `090****567`. Chỉ màn hình chi tiết khách hàng mới hiện đầy đủ, và **mỗi lần xem đầy đủ đều ghi audit**.<br>**Cách làm:** service che ngay trong chuỗi trả về, dùng **một DTO duy nhất** — không áp dụng mẫu Full/Masked DTO của `project_cost`. Lý do: `project_cost` phải giấu bằng *cấu trúc vắng mặt* vì lương có thể suy ngược từ tổng chi phí; email liên hệ không có rủi ro suy ngược nào nên che chuỗi là đủ, và đỡ nhân đôi DTO. |
| **Xóa** | **Không xóa cứng.** Đặt `is_active = false`. Lý do: email đã gửi cho ai là bằng chứng pháp lý, xóa đi là mất chứng cứ |
| **Khách yêu cầu xóa dữ liệu** | Ẩn danh hóa thay vì xóa: `contact_name = 'Đã ẩn theo yêu cầu'`, `phone = NULL`, giữ `email` vì gắn với lịch sử gửi thư. Thao tác này chỉ Admin làm được và ghi audit |
| **Không ghi log** | **Cấm ghi email/SĐT vào log ứng dụng** ở mức `INFO`. `debt_email_logs.to_emails` là ngoại lệ có chủ đích (bằng chứng pháp lý), được bảo vệ bằng phân quyền |
| **Xuất dữ liệu** | Excel/PDF xuất ra có chứa contact thì phải ghi audit ai xuất, lúc nào |
| **Thời hạn lưu** | Giữ theo vòng đời hợp đồng + 5 năm (khớp thời hiệu khởi kiện hợp đồng thương mại). Sau đó ẩn danh hóa |

### 4.2 Việc cần làm ngoài phạm vi kỹ thuật

Cần bổ sung điều khoản trong hợp đồng với khách hàng cho phép CloudAZ xử lý dữ liệu liên hệ phục vụ mục đích thanh toán. Đây là việc của Pháp lý, **không phải** của dev — nhưng nếu thiếu thì tính năng có rủi ro tuân thủ.

---

## 5. Hiệu năng — [ĐỀ XUẤT]

| Chỉ tiêu | Mục tiêu | Ghi chú |
|---|---|---|
| `GET /debts` (30 dòng) | < 500ms | Đã có index `idx_debts_status_ngayx`, `idx_debts_sale_owner` |
| Dashboard KPI | < 1s | Nếu chậm thì cache 5 phút — số liệu công nợ không cần tức thời |
| Đồng bộ CM (~500 bản ghi) | < 2 phút | Ghi DB theo lô |
| Job tính lãi 00:05 (~1.000 khoản nợ) | < 5 phút | Index `idx_debts_cron_open` phục vụ trực tiếp truy vấn này. Chạy lúc 00:05 nên không tranh tài nguyên với người dùng |
| Cron gửi mail | ~10 mail/phút | Không gửi ồ ạt để tránh bị đánh dấu spam |

**Quy mô dự kiến năm đầu:** ~500 khách hàng × 12 kỳ cước = ~6.000 dòng `debts`/năm. Rất nhỏ — không cần phân vùng bảng, không cần cache phức tạp.

---

## 6. Background job — [ĐỀ XUẤT]

**Danh sách 6 job và giờ chạy: xem `ERP_API.md` §0.9** — nơi duy nhất giữ bảng đó. Phần dưới đây chỉ nói về **yêu cầu phi chức năng** của chúng.

**Tính lãi chạy 00:05 — ngay khi sang ngày mới**, không chờ giờ hành chính. Lãi chậm trả tính theo ngày lịch, qua 0h là khách nợ thêm một ngày nên số dư phải tăng ngay. Để tới 08:00 thì suốt 8 tiếng đầu ngày mọi dashboard, mọi email và cả công văn pháp lý xuất trong khoảng đó đều hiển thị **thiếu một ngày lãi**. Chọn 00:05 thay vì 00:00 để chắc chắn ngày đã lật hẳn theo múi giờ, tránh lỗi sát mốc.

**Thứ tự bắt buộc trong giờ hành chính:** sinh yêu cầu khóa (08:25) → gửi mail (08:30). Email nhúng số tiền lãi và trạng thái khóa, chạy sai thứ tự thì khách nhận số liệu cũ.

| Yêu cầu | Quy định |
|---|---|
| Cấu hình giờ chạy | Lưu trong bảng `background_jobs` (`poll_interval_seconds`, `batch_size`, `enabled`), **hot-reload không cần deploy** |
| Múi giờ | `Asia/Ho_Chi_Minh` cho toàn bộ mốc nghiệp vụ |
| Idempotent | Bắt buộc. `debt_penalty_logs` đã có `UNIQUE (debt_id, calculated_date)` chặn ở tầng DB |
| Chạy nhiều instance | Dùng advisory lock của PostgreSQL (`pg_try_advisory_lock`) để chỉ 1 instance chạy mỗi job |
| Chạy bù khi server chết | Cron so `calculated_date` với hôm nay; nếu thiếu ngày thì **tính bù đủ số ngày quá hạn** (công thức dựa trên `days_overdue` nên không sai số) |
| Ngày lễ / cuối tuần | **Vẫn chạy.** Mốc X và lãi phạt tính theo ngày lịch, không theo ngày làm việc — đúng như hợp đồng thương mại |
| Giám sát | Mỗi lần chạy ghi 1 dòng kết quả (số bản ghi xử lý, số lỗi). Job không chạy quá 24h → cảnh báo Admin |

---

## 7. Nhật ký & Giám sát — [ĐỀ XUẤT]

- Mỗi request gán `request_id`, ghi kèm vào mọi dòng log của request đó.
- Log lời gọi sang CM: URL, mã trạng thái, thời gian phản hồi. **Không log body** chứa dữ liệu khách hàng.
- Mọi thay đổi trạng thái nghiệp vụ ghi `debt_events`; nền tảng đã tự ghi `activity_logs` cho request mutating.
- Cảnh báo cho Admin khi: đồng bộ CM lỗi, > 5 email lỗi trong ngày, cron không chạy đúng lịch.

---

## 8. Tổng hợp việc cần PO duyệt

| # | Vấn đề | Đề xuất của tôi |
|---|---|---|
| 1 | ~~CM báo sang ERP khi Gen ĐNTT bằng cách nào?~~ | **Đã chốt: không cần.** ERP chủ động gọi `GET /api/payment-request/all` và map response. Tùy chọn thêm job `debt_cm_sync` 07:45 |
| 2 | Retry gọi CM | 3 lần, backoff 2/4/8s, chỉ retry lỗi tạm thời |
| 3 | Retry gửi mail | 3 lần, cách 5/15/60 phút; không tăng `email_sent_count` |
| 4 | Xóa dữ liệu liên hệ | Không xóa cứng, chỉ `is_active = false`; khách yêu cầu xóa thì ẩn danh hóa |
| 5 | Che email/SĐT trên grid | Có che, xem đầy đủ thì ghi audit |
| 6 | Thời hạn lưu dữ liệu | Vòng đời HĐ + 5 năm |
| 7 | Cron chạy ngày lễ/cuối tuần | Vẫn chạy — theo ngày lịch |
| 8 | Điều khoản xử lý dữ liệu cá nhân trong hợp đồng | Cần Pháp lý bổ sung |
