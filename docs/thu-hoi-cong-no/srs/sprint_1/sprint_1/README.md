# Sprint 1 — Thu hồi Công nợ GWS Standard · Chỉ mục tài liệu

**Cập nhật:** 2026-08-27 · **Trạng thái:** ✅ Sẵn sàng giao dev

Đọc file này trước để biết cần mở file nào — **không cần nạp cả 15 file vào context**.

---

## Cần trả lời câu hỏi gì → đọc file nào

| Câu hỏi | File | Mục |
|---|---|---|
| Sprint này làm gì? Tiêu chí nghiệm thu? | **`Sprint1_Backlog_GWS_Standard.md`** | Toàn bộ — 10 US, 58 AC |
| Thứ tự dựng, nút thắt phụ thuộc | `Sprint1_Backlog_GWS_Standard.md` | 🔧 Thứ tự triển khai |
| Bảng nào, cột gì, kiểu dữ liệu, index | **`Database_Schema.md`** | §2–14 |
| Migration chạy theo thứ tự nào | `Database_Schema.md` | §17 |
| Dữ liệu nào sync từ CM, nào nhập tay | `Database_Schema.md` | §18 |
| Endpoint nào, request/response ra sao | **`ERP_API.md`** | §1–10 |
| Frontend hiện nút nào khi nào | `ERP_API.md` | §0.8 `allowed_actions` |
| Job chạy lúc mấy giờ | `ERP_API.md` | §0.9 — **nguồn duy nhất** |
| Mã lỗi và câu tiếng Việt tương ứng | `ERP_API.md` §0.5 + `wireFrame/UI_Wireframes.md` §2.4 |
| API của hệ thống CM (bên ngoài) | `API.md` | Toàn bộ |
| ERP đã có sẵn gì (auth, role, Lark, notification) | **`ERP_Platform_Integration.md`** | §2–5 |
| Nội dung email/công văn gửi khách | `mailTemplate/Templates.md` | Toàn bộ |
| Thư nào vào chung luồng, ai được duyệt gửi | **`Database_Schema.md`** | mục *Hai làn thư* — **nguồn duy nhất** |
| Gửi mail bằng gì, cấu hình ra sao | **`ERP_Platform_Integration.md`** | mục *Kênh 1 — Email* — **nguồn duy nhất** |
| Render biến `{{.customer_name}}` thế nào | `Template_Rendering_Spec.md` | §2–6 |
| Retry, bảo mật dữ liệu cá nhân, hiệu năng | `NFR_Sprint1.md` | §2–7 |
| Màn hình trông ra sao | `wireFrame/Wireframe_*.md` | theo vai trò |
| Chuẩn UI chung (validation, empty state, lỗi) | `wireFrame/UI_Wireframes.md` | §2 |
| Vì sao lại quyết như vậy? | **README này** | Mục "Quyết định đã chốt" bên dưới |

---

## Gợi ý nạp context theo vai

| Vai | Nạp file |
|---|---|
| **Backend dev** | Backlog + `Database_Schema.md` + `ERP_API.md` + `ERP_Platform_Integration.md` |
| **Frontend dev** | Backlog + `ERP_API.md` + toàn bộ `wireFrame/` |
| **QA** | Backlog (AC là test case) + `wireFrame/UI_Wireframes.md` §2.4 |
| **BA / PO** | Backlog + README này |
| **DevOps** | `NFR_Sprint1.md` + `ERP_API.md` §0.9 |

---

## 15 file (14 tài liệu + README), mỗi file một vai trò

**Yêu cầu (1)** — `Sprint1_Backlog_GWS_Standard.md`

**Kỹ thuật (5)** — `Database_Schema.md` · `ERP_API.md` · `API.md` · `ERP_Platform_Integration.md` · `Template_Rendering_Spec.md`

**Phi chức năng (1)** — `NFR_Sprint1.md`

**Giao diện (6)** — `wireFrame/UI_Wireframes.md` (chuẩn chung) + 5 wireframe theo vai trò

**Nội dung (1)** — `mailTemplate/Templates.md`

**Chỉ mục + nhật ký quyết định (1)** — `README.md` (file này)

---

## Quyết định đã chốt (2026-08-27)

Ghi lại **vì sao** quyết như vậy — các file đặc tả chỉ ghi kết quả, không ghi phương án đã bị loại.

| # | Vấn đề | Quyết định |
|---|---|---|
| 1 | Sản phẩm "GWS Committed" là gì | Chính là **GWS Standard** (engine `calculateGwsStandard`). Lọc theo `product.name`, **không** dùng `productId` vì CM không expose endpoint tra cứu |
| 2 | Lọc "ĐNTT đã hoàn thành" bên CM | Trường `status` **không tồn tại** bên CM → ERP kéo hết về rồi tự quản bằng cột `debts.sync_status` (`PENDING_REVIEW` → Kế toán rà → `CONFIRMED`/`EXCLUDED`) |
| 3 | Email khách hàng lấy từ đâu | CM không lưu → bảng **`customer_contacts`** nhập tay. Thiếu contact `TO` thì **chặn gửi** (`422`) |
| 4 | `payment_term_days` ở cấp nào | Cấp **Hợp đồng** (`contracts`). `debts` không giữ bản sao |
| 5 | Hóa đơn VAT / MISA | **Cắt khỏi Sprint 1.** Hồ sơ đóng ở `debt_status = PAID` |
| 6 | Ai xác nhận tiền về | Kế toán / KTT qua `PATCH /debts/:id/settle` |
| 7 | Thanh toán thiếu | **Bắt buộc thu đủ 100%.** Không hỗ trợ partial payment — thiếu thì giữ `OVERDUE`, lãi chạy tiếp |
| 8 | Đơn vị `penalty_rate` | Tỉ lệ thập phân/ngày (`0.0005` = 0.05%/ngày). **Không giới hạn trần** — nhập theo điều khoản HĐ. Vượt 1%/ngày chỉ cảnh báo mềm |
| 9 | Tần suất nhắc nợ | **Tối đa 1 email/ngày/khoản nợ**, tính chung mọi template, áp cả cron lẫn gửi tay |
| 10 | Khi nào thành `OVERDUE` | `today > ngay_x`, **không phải `>=`** — ngày X là hạn chót, khách có trọn ngày đó. Job 00:05 ngày X+1 mới lật, `days_overdue = 1` |
| 11 | Lãi phạt sau khi Legal chốt công văn | **Chạy tiếp tới khi `PAID`.** `locked_penalty` chỉ là ảnh chụp để in văn bản, không dừng job. Áp dụng cả khi đang `SUED` |
| 12 | Sales AM từ chối khóa DV | Bắt buộc lý do ≥20 ký tự + ngày khách cam kết trả. Gửi email Kế toán/KTT/Trưởng phòng Sales, hiện công khai trên Audit Trail. Cron không tạo lại trong cùng kỳ cước |
| 13 | Email Trưởng phòng Sales | Map từ **cây tổ chức ERP**: `sale_owner` → `members.department_id` → `departments.manager_member_id` |
| 14 | Nhãn `legal_status` | Tách thêm **`SENT`**: `PREPARING` (đã lập, chưa gửi) → `SENT` → `SUED`. Chỉ khởi kiện khi `SENT` |
| 15 | `customers.address` | Chấp nhận **một địa chỉ chung mỗi khách** (không tách theo pháp nhân). Chỉ `tax_code` gắn đúng hợp đồng. Khách nhiều pháp nhân thì Pháp lý sửa tay trong bản nháp công văn |
| 16 | Khối lượng Sprint | **Làm trọn 10 US trong 1 sprint**, không tách 1a/1b. Bù lại chốt thứ tự triển khai để không nghẽn phụ thuộc |
| 17 | Gom luồng thư theo `debt_id`, không thêm cột `thread_id` | Một khoản nợ = một luồng đã là ràng buộc cứng. Cột `thread_id` luôn bằng `debt_id` là **nguồn sự thật thứ hai** có thể lệch; `gmail_thread_id` đã tồn tại nên thêm nữa thành ba tên cho một khái niệm |
| 18 | `sequence_step` gán lúc **gửi**, không phải lúc soạn nháp | Nháp `expired`/`cancelled` không chiếm số → `sequence_step` luôn bằng đúng vị trí thật trong chuỗi `References`. Gán lúc soạn thì chuỗi thủng lỗ. **Không giới hạn số bước** |
| 19 | Chống gửi trùng bằng **compare-and-swap**, không bằng khóa tổ hợp | `UPDATE … WHERE id = ? AND send_status = 'draft'`; `rowcount = 0` thì dừng. Chặn ở tầng DB nên không phụ thuộc việc tính đúng số thứ tự — hai người cùng bấm gửi hay worker retry đều chỉ ra một thư |
| 20 | `References` dựng lúc gửi bằng truy vấn, cột `references_chain` chỉ lưu vết | Nguồn sự thật là các hàng `sent`. Lưu sẵn chuỗi thì có hai nguồn, lệch nhau ngay khi có thư gửi lỗi rồi gửi lại. Quá 20 ID thì giữ **ID đầu + 19 ID gần nhất** |
| 21 | Ba lý do "không gửi" tách bạch | `expired` = job 00:05 tự dọn nháp quá ngày · `skipped` = hệ thống chặn (thiếu contact, vi phạm luật 1 thư/ngày) · `cancelled` = **người duyệt chủ động bỏ**, bắt buộc lý do ≥10 ký tự, ghi `EMAIL_CANCELLED` |
| 22 | **Hai làn thư, một luồng** — cột `mail_track` | Công văn pháp lý gửi khách **cũng nằm chung luồng** với email nhắc nợ. Nhưng làn `LEGAL` khác làn `REMINDER` ở 4 điểm: chỉ `debt:legal` được duyệt · miễn hạn mức 1 thư/ngày · không cập nhật 3 cột đếm · nháp không hết hạn cuối ngày. Dùng **cột tường minh** thay vì suy từ `attachment_legal_action_id IS NOT NULL` — thư pháp lý không đính kèm ở Sprint sau sẽ âm thầm rơi vào làn nhắc nợ |
| 23 | Công văn gửi khách qua 3 đường | `delivery_method` = `POST` / `EMAIL` / `BOTH`. Nhánh `POST`/`BOTH` bắt buộc `tracking_code` và lật `SENT` ngay. **Nhánh `EMAIL` giữ `PREPARING` cho tới khi thư đi thật** — thư còn trong hộp nháp thì khách chưa nhận được gì, lật `SENT` sớm là mở nút khởi kiện khi chưa hề thông báo |
| 24 | Bất biến thay cho danh sách | Viết *"mọi email gửi khách đều qua `debt_email_logs`, không có đường thứ hai; email nội bộ không bao giờ vào luồng khách"* thay vì liệt kê template nào vào luồng. Sprint sau thêm template chỉ việc chọn `mail_track` |

**Ba lỗi kỹ thuật tự phát hiện khi áp quyết định #22–24** — ghi lại vì cùng một dạng: một luật mới lẻn vào chỗ cũ bằng đường vòng.

- **`uq_email_per_debt_day` chặn thẳng công văn.** Index phủ cả `draft`/`queued`/`sent` không phân làn → sáng gửi thư nhắc nợ, chiều tạo nháp công văn là dính `23505 unique_violation`. Không phải lỗi 429 lịch sự mà là lỗi hệ thống, khó lần ra. Xử bằng `AND mail_track = 'REMINDER'` trong predicate.
- **Thư công văn ghi vào `last_email_sent_date`.** Hôm sau `DebtReminderSweepJob` nhìn vào tưởng đã nhắc rồi và bỏ soạn nháp — hai làn vốn độc lập lại dính nhau. Xử bằng cách khoanh 3 cột đếm chỉ thuộc làn `REMINDER`.
- **`DebtDraftExpireJob` dọn cả nháp công văn.** `locked_penalty` là ảnh chụp đã chốt, in trên giấy đã ký; cho `expired` là bắt Pháp lý soạn lại công văn mỗi sáng trong khi `document_number` đã phát hành.

| 25 | **Gửi bằng Gmail API, không phải SMTP** | Quyết định #24 đòi đọc lại `Message-ID` thật, mà `smtp.gmail.com` chỉ trả `250 OK`. Chốt: `gmail/v1` + **service account với domain-wide delegation**, mạo danh hòm thư dùng chung `congno@cloudaz.cc`. Không dùng OAuth2 refresh token (gắn với một người, người đó nghỉ việc là token chết giữa lúc job đang chạy), không dùng tài khoản cá nhân (nghỉ việc là cả luồng thư ra khỏi tầm kiểm soát công ty) |
| 26 | Lỗi Gmail chia **ba rổ**, không gộp một | `429`/`rateLimitExceeded` → backoff, **không tính lượt thử** *(vượt hạn mức nghĩa là gửi lại được, không phải thư hỏng)* · `5xx`/timeout → thử lại 5/15/60 phút · `400 invalidArgument`, `403 unauthorized_client` → **hỏng ngay lần đầu**, thử lại vô ích. Lỗi cấu hình báo **Admin**, không báo Kế toán — họ không làm gì được và sẽ ngừng đọc cảnh báo |
| 27 | `debt_email_logs.from_email` | Lưu địa chỉ **thực tế đã gửi**. Hôm nay chỉ một hòm thư nên có vẻ thừa, nhưng bằng chứng trước tòa phải tự đủ trong một dòng, không phải tra file config phiên bản nào chạy tháng 9/2026 |

**Cái bẫy Gmail phải kiểm trên môi trường thật:** Gmail **ghi đè `Message-ID`** của thư gửi qua nó. Lưu ID tự sinh thì `In-Reply-To` của thư kế tiếp trỏ vào ID không tồn tại — **luồng vỡ trong khi log vẫn báo gửi thành công**. Bắt buộc đọc lại `Message-ID` từ response API sau khi gửi. Không unit test nào bắt được lỗi này.

**Hai lỗi vòng tròn từng suýt lọt** — ghi lại để không tái diễn khi mở rộng:

- **`IN_TERM → OVERDUE` không ai lật.** Job tính lãi, job khóa DV và email X+1 đều lọc `OVERDUE`, mà không AC nào set trạng thái đó. Hệ thống sẽ **im lặng không làm gì**, không crash, không log lỗi — chỉ là tiền không về. Xử bằng `DebtPenaltyJob` bước 1.
- **`NONE → WAITING_SALES` không ai set.** Tương tự, nút "Duyệt Khóa" của Sales AM sẽ không bao giờ hiện. Xử bằng `DebtSuspendRequestJob`.

Bài học chung: **mỗi giá trị enum phải có đúng một tác nhân đưa vào và một tác nhân đưa ra.** Thêm trạng thái mới thì rà lại điều này trước tiên.

---

## Checklist khi sửa tài liệu

Bộ tài liệu này đã lệch nhau bốn lần trong quá trình soạn. Nguyên nhân luôn giống nhau: sửa một quy ước ở file nguồn rồi quên lan sang các file khác. Ba quy tắc để không lặp lại:

**1. Sửa quy ước ở đâu thì grep ngay tên cũ trên toàn thư mục.** Không đợi rà cuối. Đổi tên bảng, tên cột, tên endpoint, mã lỗi, giá trị enum — grep trước khi đóng việc.

**2. Không viết số đếm trong văn xuôi.** Câu "danh mục 22 giá trị", "migration 13 bảng", "5 job" chắc chắn sẽ sai ở lần sửa tiếp theo. Viết "danh mục `action_type`", "migration toàn bộ bảng nghiệp vụ". Ai cần đếm thì đếm ở bảng gốc. Ngoại lệ duy nhất: số US và số AC ở header Backlog, vì đó là cam kết sprint.

**3. Trỏ chéo bằng tên mục, không bằng số.** `"xem ERP_API.md mục Background job"` bền hơn `"§0.9"` — số mục đổi mỗi lần chèn thêm phần, tên thì hiếm khi đổi.

**Sáu lượt grep khi rà soát tổng thể** — đọc *toàn bộ* kết quả mỗi lượt, đừng lọc theo tên cũ mình nhớ:

```
tên bảng / cột   → mọi `TABLE.field`, đối chiếu Database_Schema.md
enum             → mọi giá trị VIẾT_HOA trong backtick
endpoint         → /api/v1/fin/
mã lỗi           → `4xx MÃ_LỖI`
action_type      → action_type =
tham chiếu chéo  → .md §
```

---

## Nguyên tắc chống lệch tài liệu

Mỗi thông tin chỉ có **một nơi làm chủ**. Nơi khác cần thì trỏ tới, không chép lại:

| Thông tin | Nơi làm chủ |
|---|---|
| Lịch chạy job | `ERP_API.md` §0.9 |
| Luật hai làn thư (`mail_track`) | `Database_Schema.md` mục *Hai làn thư* |
| Hạ tầng gửi mail | `ERP_Platform_Integration.md` mục *Kênh 1 — Email* |
| Mốc X+4 / X+15 / X+30 | Bảng `debt_product_configs` (dữ liệu, không phải hằng số) |
| Cấu trúc bảng và ràng buộc | `Database_Schema.md` |
| Danh sách endpoint | `ERP_API.md` |
| Nội dung thư | `mailTemplate/Templates.md` |
| Quyết định nghiệp vụ | README này, mục "Quyết định đã chốt" |

Các file đã gộp/thay thế và **đã xóa**: `Database_ERD.md`, `Database_Schema_DDL.md`, `Remediation_Plan_Sprint1.md`, `Review_Findings_Sprint1.md`, `BRD_GWS_Committed_2026-08-25.md`, `Sprint1_Backlog_Google_Committed.md`.
