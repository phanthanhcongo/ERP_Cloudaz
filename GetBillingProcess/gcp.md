# Quy trình lấy hóa đơn GCP (Google Cloud Platform)

## 1. Quyền hạn yêu cầu (Permissions)
Để xem và tải hóa đơn, tài khoản cần được cấp một trong các vai trò IAM sau trên **Cloud Billing account**:
*   **Billing Account Viewer** (Người xem tài khoản thanh toán)
*   **Billing Account Administrator** (Quản trị viên tài khoản thanh toán)

## 2. Các bước thực hiện trên Console (UI Steps)
1.  Đăng nhập vào [Google Cloud console](https://console.cloud.google.com/).
2.  Mở menu điều hướng (Navigation menu) và chọn **Billing** (Thanh toán).
3.  Nếu có nhiều tài khoản thanh toán, chọn **Go to linked billing account** hoặc chọn tài khoản thanh toán cần xuất hóa đơn từ danh sách.
4.  Tại menu bên trái, chọn **Documents** hoặc **Invoices**.
5.  Danh sách các hóa đơn gần nhất sẽ hiển thị. Bạn có thể sử dụng bộ lọc thời gian để tìm các hóa đơn cũ hơn.
6.  Nhấp vào hóa đơn cần tải, chọn định dạng **PDF** hoặc **CSV** và nhấn **Download** (Tải xuống).
7.  **Chụp ảnh màn hình (Screenshot):** Chụp lại màn hình console thể hiện chi tiết phần chi phí sử dụng thực tế của từng khách hàng để làm bằng chứng đối soát gửi kèm sau này.
8.  **Cập nhật số liệu:** Điền số liệu thực tế vừa lấy từ console vào sheet tính toán cước chung của kế toán.


## 3. Lấy chi tiết sử dụng theo SKU/Project (Cost Table)
Hóa đơn PDF chính của Google chỉ hiển thị tổng số tiền. Để lấy chi tiết phân bổ chi phí theo từng Project, Service, hoặc SKU:
1.  Trong menu **Billing**, chọn **Cost Table** (Bảng chi phí).
2.  Chọn khoảng thời gian tương ứng với hóa đơn.
3.  Chọn các cột dữ liệu cần thiết (Project ID, Service description, SKU, Cost...).
4.  Nhấn nút **Export** (Xuất bản) để tải file dưới dạng **CSV**.
