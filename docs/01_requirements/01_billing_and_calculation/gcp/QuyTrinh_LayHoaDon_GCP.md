# Quy trình lấy hóa đơn GCP (Google Cloud Platform)

## 1. Quyền hạn yêu cầu (Permissions)
Để xem và tải hóa đơn, tài khoản cần được cấp một trong các vai trò IAM sau trên **Cloud Billing account**:
*   **Billing Account Viewer** (Người xem tài khoản thanh toán - `roles/billing.viewer`)
*   **Billing Account Administrator** (Quản trị viên tài khoản thanh toán - `roles/billing.admin`)

> [!IMPORTANT]
> * Các vai trò trên bắt buộc phải được gán ở cấp **Billing Account (Tài khoản thanh toán)**, gán ở cấp Project sẽ không có quyền truy cập hóa đơn.
> * Nếu tài khoản đã có vai trò IAM ở trên nhưng vẫn không thấy hóa đơn, cần kiểm tra và thêm tài khoản đó vào **Google Payments profile (Hồ sơ thanh toán Google)** liên kết với Billing Account đó.

## 2. Các bước thực hiện trên Console (UI Steps)
1.  Đăng nhập vào [Google Cloud console](https://console.cloud.google.com/).
2.  Mở menu điều hướng (Navigation menu) và chọn **Billing** (Thanh toán).
3.  Nếu có nhiều tài khoản thanh toán, chọn **Go to linked billing account** hoặc chọn tài khoản thanh toán cần xuất hóa đơn từ danh sách.
4.  Tại menu bên trái, chọn **Documents** (tài liệu) hoặc **Invoices** (Hóa đơn).
5.  Danh sách các hóa đơn gần nhất sẽ hiển thị. Bạn có thể sử dụng bộ lọc thời gian để tìm các hóa đơn cũ hơn.
6.  Chọn các hóa đơn cần tải và nhấn nút **Download selected** (Tải xuống mục đã chọn), hoặc nhấp vào từng hóa đơn và tải về dưới định dạng **PDF** hoặc **CSV**.
7.  **Chụp ảnh màn hình (Screenshot):** Chụp lại màn hình console thể hiện chi tiết phần chi phí sử dụng thực tế của từng khách hàng để làm bằng chứng đối soát gửi kèm sau này.
8.  **Cập nhật số liệu:** Điền số liệu thực tế vừa lấy từ console vào sheet tính toán cước chung của kế toán.

## 3. Lấy chi tiết sử dụng theo SKU/Project (Cost Table) & Upload CRM
Hóa đơn PDF chính của Google chỉ hiển thị tổng số tiền. Để lấy chi tiết phân bổ chi phí theo từng Project và Billing Account để đẩy lên CRM:
1. Trong menu **Billing**, chọn **Cost Table** (Bảng chi phí).
2. Chọn đúng Billing Account của GCP Reseller và chọn kỳ cước (tháng) tương ứng với hóa đơn.
3. **Cấu hình tùy chọn tích chọn (Checkbox) xuất dữ liệu:**
   - **BỎ TÍCH:** `Reseller Margin` (để ra số chi phí thực tế).
   - **BẮT BUỘC GIỮ TÍCH:** `Negotiated Savings` (tùy chọn chiết khấu riêng, không bỏ mục này).
   - **BẮT BUỘC GIỮ TÍCH:** `Credit` / `Promotions & other credits`.
4. Xuất 2 bảng dữ liệu Excel/CSV:
   - Bảng 1: Nhóm theo **Project ID / Project Number** (cấp dự án).
   - Bảng 2: Nhóm theo **Sub-Account / Billing ID** (cấp tài khoản thanh toán).
5. **Tiền xử lý file Excel trước khi Upload lên CRM:**
   - Xóa các dòng tiêu đề thừa ở trên cùng file Excel.
   - Xóa cột `% so với tháng trước` (cột hiển thị tỷ lệ tăng/giảm ở ngoài cùng bên phải).
6. Nhấp vào nút **Download CSV/Excel** ở góc trên bảng để lưu file về máy tính và tiến hành Upload 2 file lên CRM.

> [!TIP]
> Song song với luồng Upload Excel thủ công hiện tại, đối với đối tác quản lý số lượng lớn dự án, Google khuyến nghị cấu hình xuất dữ liệu thanh toán tự động sang **BigQuery** (**Billing export > BigQuery export**).

