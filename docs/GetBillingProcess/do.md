# Quy trình lấy hóa đơn DigitalOcean (DO)

## 1. Quyền hạn yêu cầu (Permissions)
Để xem và tải hóa đơn trên DigitalOcean, tài khoản cần được phân vai trò (Team Role) tương ứng trên **Team Account**:
*   **Owner** (Chủ sở hữu - có toàn quyền quản trị và thanh toán).
*   **Biller** (Người thanh toán - chỉ có quyền xem, quản lý thông tin thanh toán và tải hóa đơn, không có quyền can thiệp vào tài nguyên kỹ thuật).

> [!IMPORTANT]
> Tài khoản có vai trò **Member** sẽ không thể nhìn thấy trang Billing và không có quyền tải hóa đơn.

---

## 2. Các bước thực hiện trên Console (UI Steps)
Để tải hóa đơn định kỳ hàng tháng cho mục đối soát thủ công:
1.  Đăng nhập vào [DigitalOcean Control Panel](https://cloud.digitalocean.com/).
2.  Nếu tài khoản của bạn nằm trong nhiều Team, hãy chọn đúng **Team Account** cần lấy hóa đơn từ menu chuyển đổi ở góc trên bên trái.
3.  Tại thanh điều hướng bên trái, chọn **Billing** (Thanh toán).
4.  Cuộn xuống phần **Billing History** (Lịch sử thanh toán).
5.  Danh sách các hóa đơn của các tháng trước sẽ hiển thị. Nhấp vào hóa đơn của tháng cần đối soát.
6.  Nhấp vào nút **Download** bên cạnh hóa đơn và chọn định dạng tải về:
    *   **PDF:** Để làm chứng từ lưu trữ tài chính chính thức.
    *   **CSV:** Để lấy dữ liệu chi tiết dạng bảng (giúp copy/paste hoặc import vào bảng tính Excel đối soát).
7.  **Chụp ảnh màn hình (Screenshot):** Chụp lại bảng phân bổ chi tiết sử dụng trên web (nếu cần làm bằng chứng đối soát).

---

## 3. Giải pháp tự động hóa qua API / CLI (Programmatic Access)
Khác với GCP và AWS chủ yếu dựa vào cơ chế Data Export tự động đổ về Data Warehouse (BigQuery/S3), DigitalOcean hỗ trợ trích xuất hóa đơn trực tiếp qua API chính thức cực kỳ đơn giản. Hệ thống ERP của CloudAZ có thể tự động hóa hoàn toàn bằng Cronjob:

### Cách 3.1: Sử dụng DigitalOcean CLI (doctl)
Nếu viết script tự động hóa dạng shell script, có thể dùng công cụ `doctl`:
1.  Liệt kê danh sách hóa đơn để lấy `UUID`:
    ```bash
    doctl invoice list
    ```
2.  Tải hóa đơn chi tiết dạng CSV theo UUID:
    ```bash
    doctl invoice csv <INVOICE-UUID> billing_detail.csv
    ```
3.  Tải hóa đơn dạng PDF:
    ```bash
    doctl invoice pdf <INVOICE-UUID> invoice.pdf
    ```

### Cách 3.2: Tích hợp trực tiếp qua API (Khuyên dùng cho ERP Backend)
ERP Backend (NodeJS/Python) có thể gọi các API Endpoint chính thức của DigitalOcean bằng cách sử dụng **Personal Access Token** có quyền đọc (Read-only):

1.  **Lấy danh sách hóa đơn:**
    *   `GET https://api.digitalocean.com/v2/customers/my/invoices`
    *   API trả về danh sách JSON chứa thông tin tổng quát và `invoice_uuid` của từng tháng.
2.  **Tải file cước chi tiết (CSV):**
    *   `GET https://api.digitalocean.com/v2/customers/my/invoices/{invoice_uuid}/csv`
    *   Trả về nội dung file CSV chi tiết lượng sử dụng của từng tài nguyên (Droplets, Volumes, Spaces...) để ERP parse trực tiếp vào Database.
3.  **Tải file hóa đơn (PDF):**
    *   `GET https://api.digitalocean.com/v2/customers/my/invoices/{invoice_uuid}/pdf`
    *   Trả về file PDF để ERP lưu trữ và gửi email tự động cho khách hàng.
