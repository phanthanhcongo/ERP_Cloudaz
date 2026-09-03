# Wireframe & Chuẩn Giao diện chung (Sprint 1)

## 1. Danh sách màn hình

| # | Màn hình | Vai trò | File chi tiết | Trạng thái |
|---|---|---|---|---|
| 1 | Danh sách Cước & ĐNTT | Kế toán | `Wireframe_DanhSachCuoc.md` | ✅ Đã đặc tả |
| 2 | Quản lý Chuyển phát | HCNS (`HRA`) | Dùng chung `Wireframe_DanhSachCuoc.md` | ✅ Đã đặc tả — xem §4 |
| 3 | Dashboard Công nợ & Phê duyệt | Sales AM (`Sales`) | `Wireframe_SalesAM.md` | ✅ Đã đặc tả |
| 4 | Thực thi Khóa/Mở dịch vụ | Phòng Mua (`Procurement`) | `Wireframe_PhongMua.md` | ✅ Đã đặc tả |
| 5 | Xử lý Pháp lý | Pháp lý (`Legal`) | `Wireframe_PhapLy.md` | ✅ Đã đặc tả |
| 6 | Executive Dashboard & Audit Trail | KTT / CEO / CFO | `Wireframe_BanQuanLy.md` | ✅ Đã đặc tả |
| 7 | Chi tiết Khách hàng & Người liên hệ | Kế toán | `Wireframe_DanhSachCuoc.md` §8 | ✅ Đã đặc tả |

**Danh sách popup nhập liệu** *(nằm trong các màn hình trên, không phải màn hình riêng)*

| Popup | Ở đâu | AC |
|---|---|---|
| Xác nhận / Loại khỏi luồng | DanhSachCuoc §5 | BD-09 AC1b |
| Cấu hình hạn TT & lãi phạt | DanhSachCuoc §6 | BD-09 AC8 |
| Chuyển phát bản cứng (3 bước) | DanhSachCuoc §7 | DC-03 AC1–AC3 |
| Thêm/Sửa người liên hệ | DanhSachCuoc §8.2 | BD-09 AC9 |
| Tất toán | DanhSachCuoc §9 | DC-05 AC4 |
| Log Call | SalesAM §4 | DC-06 AC2 |
| Duyệt / Từ chối khóa DV | SalesAM §5 | DC-07 AC2 |
| Xác nhận Khóa / Mở Console | PhongMua §3 | DC-08 AC2 |
| Xác nhận đã gửi Công văn *(3 đường: bưu điện / email / cả hai)* | PhapLy §1b | DC-09 AC2b |
| Soạn Công văn | PhapLy §2 | DC-09 AC2 |
| Hộp thư chờ gửi — Kế toán *(thư nhắc nợ)* | DanhSachCuoc §9b | DC-04 AC10 |
| Hộp thư chờ gửi — Pháp lý *(công văn)* | PhapLy §1c | DC-09 AC2c |
| Bỏ thư nháp *(kèm lý do)* | DanhSachCuoc §9b | DC-04 AC10 |

> **Hộp thư chờ gửi là một màn hình, hai phạm vi.** Cùng endpoint `GET /debts/emails/drafts`, nhưng **lọc cứng theo quyền của actor**: `debt:send_email` thấy thư nhắc nợ, `debt:legal` thấy thư công văn. Badge đếm theo phạm vi đã lọc, để con số luôn đúng bằng số việc người đó làm được.

**Lưu ý:** các file wireframe là **mockup dạng bảng và text**, không phải bản vẽ pixel. Chúng đặc tả *dữ liệu nào hiển thị ở đâu và bấm nút thì gọi API nào* — đủ để dev dựng màn hình theo design system sẵn có của ERP. Nếu cần bản vẽ Figma thì đó là việc riêng của designer, không chặn dev backend.

---

## 2. Chuẩn chung — áp dụng cho **tất cả** màn hình

Phần này thay cho việc lặp lại các quy tắc giống nhau trong từng file.

### 2.1 Bảng dữ liệu (Data Grid)

| Hạng mục | Quy định |
|---|---|
| Phân trang | 30 dòng/trang (khớp mặc định `size=30` của API). Cho chọn 30 / 50 / 100 |
| Sắp xếp mặc định | `ngay_x` tăng dần (khoản gấp nhất lên đầu). Màn hình Pháp lý và Phòng Mua sắp theo số ngày trễ giảm dần |
| Chọn nhiều dòng | Checkbox đầu dòng + checkbox chọn tất cả ở header. Thanh thao tác hàng loạt hiện ra khi có ≥1 dòng được chọn |
| Cột tiền | Canh phải, phân cách hàng nghìn, không hiện số thập phân nếu bằng 0 (`40.500.000`) |
| Cột ngày | `dd/mm/yyyy`. Chưa có giá trị thì hiện `--/--/----`, **không** hiện ô trống |
| Giữ trạng thái lọc | Lưu bộ lọc + trang hiện tại vào URL query để chia sẻ link và F5 không mất |

### 2.2 Bốn trạng thái bắt buộc của mọi màn hình danh sách

| Trạng thái | Hiển thị |
|---|---|
| **Đang tải** | Skeleton đúng số dòng của trang, không dùng spinner toàn màn hình |
| **Rỗng — chưa có dữ liệu** | Icon + câu dẫn + nút hành động. VD tab "Chờ xác nhận": *"Chưa có khoản nợ nào chờ xác nhận. Bấm 🔄 Đồng bộ dữ liệu CM để lấy ĐNTT kỳ này."* |
| **Rỗng — do lọc** | *"Không có kết quả khớp bộ lọc"* + nút **Xóa bộ lọc**. Khác hẳn trường hợp trên |
| **Lỗi tải** | *"Không tải được dữ liệu"* + nút **Thử lại** + mã lỗi nhỏ để hỗ trợ kỹ thuật tra cứu |

### 2.3 Kiểm tra dữ liệu nhập (Validation)

| Nguyên tắc | Chi tiết |
|---|---|
| Thời điểm | Kiểm tra khi rời khỏi ô nhập (`on blur`), không kiểm tra khi đang gõ từng ký tự |
| Vị trí báo lỗi | Ngay dưới ô nhập, chữ đỏ, kèm viền đỏ quanh ô |
| Nút Lưu | `disabled` khi form còn lỗi hoặc thiếu trường bắt buộc |
| Chống bấm 2 lần | Bấm Lưu → nút chuyển sang trạng thái đang xử lý, chặn bấm lại tới khi có phản hồi |
| Lỗi từ server | Map mã lỗi nghiệp vụ sang câu tiếng Việt — xem §2.4 |

**Bảng validation các trường hay dùng:**

| Trường | Luật | Thông báo lỗi |
|---|---|---|
| `email` (contact) | Đúng định dạng, không trùng trong cùng khách hàng | "Email không hợp lệ" / "Email này đã tồn tại" |
| `penalty_rate` | > 0. **Không có trần** — nhập theo điều khoản HĐ | Lỗi nếu ≤ 0: "Lãi suất phải lớn hơn 0".<br>Nếu > 1%/ngày: **cảnh báo mềm**, không chặn — *"Bạn đang nhập {x}%/ngày, cao bất thường. Vui lòng kiểm tra lại điều khoản hợp đồng."* + hộp thoại xác nhận |
| `payment_term_days` | Số nguyên 1–90 | "Số ngày ân hạn phải từ 1 đến 90" |
| `paid_at` | Không ở tương lai | "Ngày thanh toán không được ở tương lai" |
| `paid_amount` | ≥ tổng phải thu | "Còn thiếu {X} VNĐ — chưa đủ điều kiện tất toán" |
| `reason` (từ chối khóa) | ≥ 20 ký tự | "Vui lòng ghi rõ lý do bảo lãnh (tối thiểu 20 ký tự)" |
| `tracking_code` | Bắt buộc khi chuyển `POSTED` | "Vui lòng nhập mã vận đơn" |

### 2.4 Thông báo lỗi từ API

Toast đỏ góc trên bên phải, tự tắt sau 5 giây, riêng lỗi chặn nghiệp vụ thì hiện dạng hộp thoại phải bấm đóng.

Mã lỗi khớp `ERP_API.md` §0.5 — tiền tố `FIN_DEBT_` theo quy ước `apperror.CodeFIN…` của codebase.

| HTTP | `code` | Câu hiển thị cho người dùng |
|---|---|---|
| 422 | `FIN_DEBT_NO_RECIPIENT` | "Khách hàng chưa có email liên hệ. Vui lòng bổ sung trước khi gửi thư." |
| 422 | `FIN_DEBT_HARDCOPY_NOT_DELIVERED` | "Chưa xác nhận phát bản cứng thành công nên chưa gửi được email ĐNTT." |
| 422 | `FIN_DEBT_MISSING_CONFIG` | "Chưa cấu hình hạn thanh toán hoặc lãi phạt cho khoản nợ này." |
| 422 | `FIN_DEBT_NOT_CONFIRMED` | "Khoản nợ chưa được xác nhận đưa vào luồng." |
| 422 | `FIN_DEBT_INSUFFICIENT_PAYMENT` | "Số tiền thực thu chưa đủ. Còn thiếu {shortfall} VNĐ." |
| 422 | `FIN_DEBT_MISSING_LEGAL_INFO` | "Thiếu thông tin pháp lý của khách hàng (người đại diện, MST, mã KH). Vui lòng bổ sung ở màn hình chi tiết khách hàng." |
| 400 | `FIN_DEBT_INVALID_PAID_DATE` | "Ngày thanh toán không được ở tương lai." |
| 400 | `FIN_DEBT_REJECT_REASON_REQUIRED` | "Vui lòng ghi rõ lý do bảo lãnh (tối thiểu 20 ký tự)." |
| 403 | `FIN_DEBT_SALES_APPROVAL_REQUIRED` | "Yêu cầu chưa được Sales AM phê duyệt." |
| 403 | `FORBIDDEN_ROLE` | "Bạn không có quyền thực hiện thao tác này."<br>*Riêng trong Hộp thư chờ gửi:* "Thư này chỉ Pháp lý được gửi." |
| 409 | `FIN_DEBT_ALREADY_SETTLED` | "Khoản nợ này đã được tất toán." |
| 409 | `FIN_DEBT_INVALID_TRANSITION` | "Trạng thái đã thay đổi, không thực hiện được thao tác này." |
| 409 | `FIN_DEBT_LEGAL_DOC_NOT_SENT` | "Chưa xác nhận đã gửi công văn nên chưa thể khởi kiện." |
| 409 | `FIN_DEBT_STALE_VERSION` | "Người khác vừa cập nhật khoản nợ này. Vui lòng tải lại và thao tác lại." — xem §2.9 |
| 409 | `FIN_DEBT_DUPLICATE_EMAIL` | "Email này đã tồn tại cho khách hàng." |
| 422 | `FIN_DEBT_LAST_TO_CONTACT` | "Đây là người nhận chính duy nhất. Thêm người nhận TO khác trước khi tắt." |
| 429 | `FIN_DEBT_EMAIL_RATE_LIMIT` | "Hôm nay đã gửi email cho khách hàng này rồi. Mỗi ngày chỉ gửi tối đa 1 lần."<br>*Chỉ áp cho thư nhắc nợ — thư công văn không bị giới hạn này.* |

### 2.5 Hộp thoại xác nhận

Bắt buộc có với mọi thao tác **không hoàn tác được**: tất toán, duyệt/từ chối khóa dịch vụ, xác nhận đã khóa/mở Console, xác nhận đã gửi công văn, khởi kiện, loại bản ghi khỏi luồng.

Hộp thoại nêu rõ **hệ quả**, không chỉ hỏi "bạn có chắc không". Ví dụ: *"Xác nhận tất toán khoản nợ 40.500.000 đ của Công ty TNHH B? Hệ thống sẽ dừng tính lãi, dừng gửi email nhắc nợ và tự động tạo yêu cầu mở lại dịch vụ."*

### 2.6 Khu vực Thông báo 🔔

Mọi màn hình dùng chung chuông thông báo trên thanh điều hướng ERP (đã có sẵn):
- Badge số chưa đọc lấy từ `GET /api/v1/notifications/unread-count`
- Danh sách từ `GET /api/v1/notifications`, lọc `ref_type = 'DEBT'` để hiện riêng thông báo công nợ
- Bấm 1 thông báo → đánh dấu đã đọc (`PUT /:id/read`) và điều hướng tới khoản nợ theo `ref_id`
- Loại thông báo theo từng vai trò: xem `ERP_Platform_Integration.md` §4.4

### 2.7 Phân quyền trên giao diện

Không có quyền thì **ẩn hẳn nút**, không hiện nút xám. Backend vẫn phải kiểm tra lại quyền — giao diện chỉ là lớp tiện lợi, không phải lớp bảo mật.

### 2.8 Hiển thị dữ liệu cá nhân

Email và số điện thoại người liên hệ hiển thị dạng che trên grid (`ke***@epic.vn`, `090****567`). Chỉ màn hình chi tiết khách hàng mới hiện đầy đủ và mỗi lần xem đều ghi audit — xem `NFR_Sprint1.md` §4.

### 2.9 Khóa lạc quan — mọi popup sửa dữ liệu phải gửi `lock_version`

`debts` có cột `lock_version` (`Database_Schema.md` §7). **Mọi lời gọi `PATCH` thay đổi khoản nợ đều bắt buộc gửi kèm** giá trị đang giữ:

```json
{ "lock_version": 7, "...": "..." }
```

**Áp dụng cho 6 popup:** Cấu hình (§6 DanhSachCuoc), Chuyển phát 3 bước (§7), Tất toán (§9), Duyệt/Từ chối khóa DV (SalesAM §5), Xác nhận Khóa/Mở Console (PhongMua §3), Xác nhận đã gửi Công văn (PhapLy §1b).

**Frontend phải làm:**
1. Lưu `lock_version` nhận được từ `GET /debts` hoặc `GET /debts/:id`, gửi lại nguyên vẹn khi submit.
2. Nhận `409 FIN_DEBT_STALE_VERSION` → hiện hộp thoại: *"Người khác vừa cập nhật khoản nợ này. Vui lòng tải lại và thao tác lại."* kèm nút **Tải lại**. **Không** tự động ghi đè, **không** tự retry.
3. Sau khi lưu thành công, cập nhật `lock_version` mới từ response.

**Vì sao cần:** Kế toán và Sales AM cùng mở một khoản nợ là chuyện hằng ngày. Không có khóa này thì người bấm sau âm thầm ghi đè thao tác của người bấm trước — mà đây là dữ liệu tiền bạc, ghi đè nhầm không ai phát hiện ra.

### 2.11 Kích thước màn hình

Ưu tiên desktop ≥ 1366px. Dưới 1024px chuyển bảng sang dạng thẻ (card) theo dòng. Sprint 1 **không** hỗ trợ điện thoại — người dùng đều làm việc trên máy tính văn phòng.

---

## 3. Từ ngữ dùng thống nhất

| Thuật ngữ | Dùng | Không dùng |
|---|---|---|
| Đề nghị thanh toán | ĐNTT | "hóa đơn", "invoice" |
| Ngày X | Ngày X (hạn thanh toán) | "due date", "deadline" |
| Tất toán | Tất toán | "thanh lý", "đóng nợ" |
| Khóa dịch vụ | Khóa / Mở dịch vụ | "suspend/unsuspend" trên giao diện |
| Nợ gốc / Lãi phạt | Nợ gốc / Lãi phạt | "principal/penalty" |

---

## 4. Màn hình HCNS (số 2) — dùng chung màn hình Kế toán

HCNS **không có màn hình riêng** — dùng `Wireframe_DanhSachCuoc.md` với **bộ lọc mặc định** `hardcopy_status IN ('STAMPED','POSTED')` và chỉ thấy 2 nút thao tác `[🚚 Đã gửi bưu điện]`, `[✅ Xác nhận đã phát]` (popup tại DanhSachCuoc §7.2 và §7.3).

Lý do: dữ liệu hiển thị giống hệt màn hình Kế toán, chỉ khác bộ lọc và tập nút. Làm màn hình riêng chỉ nhân đôi công bảo trì mà không thêm giá trị. Cơ chế ẩn/hiện nút đã có sẵn qua `allowed_actions[]` (`ERP_API.md` §0.8) — HCNS mang role `HRA` có permission `debt:delivery` nên chỉ nhận về 2 action đó.

---

## 5. Phạm vi giao diện Sprint 1 — đã đủ

Các màn hình và popup liệt kê ở §1 phủ hết mọi thao tác được nhắc trong Backlog. **Không còn màn hình hay popup nào thiếu.**

Hai việc **tùy chọn**, không chặn dev:

- [ ] Bản vẽ Figma — nếu tổ chức yêu cầu bản vẽ pixel. Các file wireframe hiện tại đã đủ để dev dựng theo design system sẵn có của ERP.
- [ ] Màn hình cấu hình Biểu mẫu (`document_templates`, DC-05 AC1) — Sprint 1 có thể vận hành bằng seed sẵn bộ template + endpoint `PUT /document-templates/:id`. Chỉ cần màn hình khi Admin muốn tự sửa nội dung thư mà không nhờ dev.
