# CloudAZ BigQuery Billing Explorer Dashboard

Ứng dụng giao diện trực quan (Web UI Dashboard) để truy vấn, xem log và phân tích dữ liệu bảng chi phí Google Workspace Reseller:
`billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`

---

## 1. Tính năng nổi bật
- **Live Terminal Execution Log**: Ghi log chi tiết từng bước (kết nối Client, tạo Job ID, thời gian phản hồi ms, dung lượng data scan MB).
- **Preset Queries dựng sẵn**:
  1. Xem 15 dòng mới nhất (Lọc 7 ngày gần nhất).
  2. Top dịch vụ & SKU phát sinh chi phí cao nhất (30 ngày).
  3. Top khách hàng (Billing Account) chi phí cao nhất.
  4. Thống kê chi phí theo từng kỳ hoá đơn (Invoice Month).
- **Trình soạn thảo SQL linh hoạt**: Cho phép chỉnh sửa câu query trực tiếp với phím tắt `Ctrl + Enter`.
- **Xem dữ liệu trực quan**:
  - Chế độ **Bảng (Table)**: Tìm kiếm realtime, highlight số tiền/chi phí, format timestamp.
  - Chế độ **JSON Raw**: Copy nhanh toàn bộ dữ liệu.
  - **Xuất file CSV**: Để mở và phân tích trên Microsoft Excel / Google Sheets.
- **Quản lý Key thông minh**: Hỗ trợ copy file vào thư mục `credentials/` hoặc dán trực tiếp nội dung JSON ngay trên giao diện web.

---

## 2. Hướng dẫn khởi chạy

### Cách 1: Click đúp vào file
Click đúp chuột vào file `start.bat` trong thư mục này. Trình duyệt sẽ tự động mở `http://localhost:3000`.

### Cách 2: Chạy bằng dòng lệnh
Mở terminal trong thư mục `TestBigQuery`:
```bash
node server.js
```
Truy cập: `http://localhost:3000`

---

## 3. Cấu hình Key Service Account
Để app có quyền đọc BigQuery:
1. Đặt file JSON Service Account đã tải từ GCP vào:
   `credentials/service-account.json`
2. Hoặc mở giao diện web lên, bấm nút **⚙️ Cấu hình Key** ở góc trên bên phải và dán nội dung file JSON vào.
