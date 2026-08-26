# Mockup: Màn Hình Thực Thi Khóa Dịch Vụ (Phòng Mua - Procurement)

Giao diện chuyên trách cho Phòng Mua để thực hiện tác vụ Mở/Khóa Console trên Google Workspace dựa trên yêu cầu đã được duyệt từ Kế toán và Sales.

---

## 1. Bộ lọc (Filter)

**Tabs trạng thái nhanh:**
👉 `[Tất cả] | [Đang yêu cầu Khóa] | [Đang yêu cầu Mở khóa]`

```text
[ 🔍 Tìm tên khách hàng / Mã HĐ... ]
```

## 2. Bảng Danh sách Yêu cầu

Hệ thống chỉ hiển thị các khoản nợ có `suspend_status` nằm trong nhóm: `WAITING_PROCUREMENT`, `SUSPENDED`, `WAITING_UNSUSPEND`.

| Khách hàng / Hợp đồng | Sản phẩm | Tình trạng Nợ | Trạng thái Yêu cầu (`suspend_status`) | Hạn chót xử lý | Thao tác |
|---|---|---|---|---|---|
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Plus | Quá hạn 5 ngày | 🔴 **Yêu cầu KHÓA dịch vụ**<br>*(Sales Nguyễn Văn A đã duyệt)* | Hôm nay | `[Xác nhận Đã Khóa]` |
| **Công ty XYZ**<br>HĐ: GWS-2590 | GWS Standard | Đã tất toán | 🟢 **Yêu cầu MỞ KHÓA**<br>*(Kế toán đã xác nhận tiền vào)* | ASAP | `[Xác nhận Đã Mở]` |
| **Tập đoàn Adflex**<br>HĐ: ADFLEX-04 | GWS Resell | Quá hạn 20 ngày | ⚫ Đã bị khóa (SUSPENDED) | -- | `[Xem lịch sử]` |

---

## 3. Popup: Xác nhận thực thi (Khóa / Mở)
Vì hệ thống ERP không chọc API tự động khóa Google, nhân viên Phòng Mua phải mở tab mới (Google Admin Console) để thực hiện thao tác thủ công. Sau đó quay lại ERP để xác nhận.

**Popup UI (Xác nhận Khóa):**
- **Lưu ý:** Vui lòng thực hiện khóa (Suspend) dịch vụ GWS của khách hàng **Công ty TNHH B** trên Google Admin trước khi bấm xác nhận.
- **Hình ảnh bằng chứng (Tùy chọn):** `[ Nút tải ảnh chụp màn hình Google Admin lên ]`
- **Ghi chú thêm:** `[ Textarea ]`
- `[ Xác nhận hoàn tất Khóa ]` ➔ Trạng thái chuyển thành `SUSPENDED`. Dòng chữ cảnh báo gửi mail/thông báo sang cho Khách hàng & Sales.

**Popup UI (Xác nhận Mở):**
- **Lưu ý:** Vui lòng thực hiện khôi phục (Restore) dịch vụ GWS của khách hàng **Công ty XYZ** trên Google Admin.
- `[ Xác nhận hoàn tất Mở ]` ➔ Trạng thái chuyển thành `UNSUSPENDED`. Dòng chữ cảnh báo gửi mail/thông báo sang cho Khách hàng & Sales.

---

## 4. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Element / Column | Database Field (`DEBTS` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Tabs lọc nhanh** | `suspend_status` | - **Đang yêu cầu Khóa:** `suspend_status = WAITING_PROCUREMENT`<br>- **Đang yêu cầu Mở khóa:** `suspend_status = WAITING_UNSUSPEND` |
| **Khách hàng / Hợp đồng** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP (đã đồng bộ) |
| **Sản phẩm** | `DEBTS.product_name` | Hiển thị Tên gói dịch vụ lưu sẵn trong ERP |
| **Tình trạng Nợ** | `debt_status` | Hiển thị "Đã tất toán" hoặc "Quá hạn N ngày" (tính từ `ngay_x`) |
| **Trạng thái Yêu cầu** | `suspend_status` | Hiển thị `WAITING_PROCUREMENT` (Yêu cầu khóa), `WAITING_UNSUSPEND` (Yêu cầu mở), `SUSPENDED` (Đã khóa) |
| **Hạn chót xử lý** | Derived từ `DEBTS.updated_at` | Hạn chót = `updated_at` của trạng thái chờ + 24 giờ. Quá hạn thì cảnh báo đỏ |
| **Popup Xác nhận Khóa (Submit)** | `DEBTS.suspend_status` & `DEBT_AUDIT_LOGS` | - Cập nhật `suspend_status = SUSPENDED`<br>- Tạo 1 bản ghi `DEBT_AUDIT_LOGS` chứa ảnh đính kèm (URL lưu vào `DEBT_AUDIT_LOGS.file_url`) và lý do |
| **Popup Xác nhận Mở (Submit)** | `DEBTS.suspend_status` & `DEBT_AUDIT_LOGS` | - Cập nhật `suspend_status = UNSUSPENDED`<br>- Tạo 1 bản ghi `DEBT_AUDIT_LOGS` xác nhận mở khóa |

