# CloudAZ BigQuery Billing Explorer Dashboard

Ứng dụng giao diện trực quan (Web UI Dashboard) để truy vấn, xem log và phân tích dữ liệu bảng chi phí Google Workspace Reseller:
`billing-data-cloudaz-resell.CloudAZ_GWS_billing_ds.reseller_billing_detailed_export_v1`

---

## 📂 Cấu trúc File

### Backend — Query Files
#### 🔹 `queries-gcp.js` — GCP Billing Queries
Chứa các query chuyên biệt cho GCP Billing Analysis:
- **Project Level Query**: Tổng hợp chi phí theo từng Project (~621 dòng)
- **Billing Account Level Query**: Tổng hợp chi phí theo từng Billing Account (~94 dòng)
- **Verification Query**: Kiểm tra tính chính xác dữ liệu
- **4 GCP Preset Queries**: Các query thường dùng (Recent Records, Top SKU, Top Customers, Monthly Trend)

#### 🔹 `queries-gws.js` — Google Workspace Queries
Chứa các query chuyên biệt cho Google Workspace Flex Billing:
- **GWS Flex — Tất cả dòng cước**: Lấy toàn bộ dòng (Commitment + Usage)
- **GWS Flex — Chỉ Usage**: Lấy riêng dòng Usage/Flex

#### 🔹 `server.js`
Tích hợp cả 2 file query (`queries-gcp.js` + `queries-gws.js`) và cung cấp REST API:
- `GET /api/presets` - Tất cả preset queries (GCP + GWS)
- `GET /api/queryGCP` - Chỉ GCP queries
- `GET /api/queryGWS` - Chỉ GWS queries
- `POST /api/query` - Thực thi SQL query trên BigQuery

### Frontend — HTML Pages
#### 🔹 `public/index.html` — 🏠 Trang chủ Landing Page
Trang mở đầu cho phép chọn loại query:
- 2 nút lớn để chuyển hướng đến GCP hoặc GWS
- Giao diện đẹp, responsive

#### 🔹 `public/index-gcp.html` — GCP Billing Dashboard
Dashboard chuyên biệt cho GCP queries:
- **Nguồn dữ liệu**: 
  - Project: `billing-data-cloudaz-resell`
  - Dataset: `CloudAZ_Billing_Detailed_Dataset`
  - Bảng: `gcp_billing_export_resource_v1_01AF45_CC490F_EEF29A`
- **Dropdown "Loại Bảng"** với 3 tùy chọn:
  1. 📈 **Project Level** — Chi tiết theo từng Project
  2. 🏢 **Billing Account Level** — Tổng hợp theo Billing Account
  3. ✓ **Verification** — Kiểm tra dữ liệu (so sánh 2 bảng)
- **Month picker** duy nhất: Chọn 1 tháng (YYYY-MM)
  - Tự động tính từ ngày 1 đến ngày cuối cùng của tháng đó
  - Mặc định: Tháng hiện tại
- Bảng hiển thị kết quả với cột:
  - Project Level: Project, Project ID, Project number, List cost, Negotiated savings, Discounts, Promotions & others, Subtotal
  - Billing Account Level: Subaccount ID, List cost, Negotiated savings, Discounts, Promotions & others, Subtotal
- Thống kê (thời gian, số dòng, dữ liệu quét, cache)
- Chức năng tìm kiếm, export JSON/CSV
- Nút quay lại trang chủ

#### 🔹 `public/index-gws.html` — GWS Flex Dashboard
Dashboard chuyên biệt cho GWS queries:
- Date picker để chọn khoảng thời gian
- Toggle để chọn loại dữ liệu (Tất cả / Chỉ Usage / Chỉ Commitment)
- Bảng hiển thị kết quả
- Thống kê (thời gian, số dòng, dữ liệu quét, tổng amount)
- Chức năng tìm kiếm, export JSON/CSV
- Nút quay lại trang chủ

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
