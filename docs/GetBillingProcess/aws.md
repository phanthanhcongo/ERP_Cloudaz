# Quy trình lấy hóa đơn AWS (Amazon Web Services)

## 1. Quyền hạn yêu cầu (Permissions)
AWS đã loại bỏ các quyền IAM cũ (`aws-portal:*`). Để xem, tải hóa đơn và cấu hình export, tài khoản IAM hoặc Role cần được phân các quyền chi tiết (fine-grained IAM actions) thuộc các nhóm dịch vụ sau:

*   **Xem hóa đơn (Invoices):**
    *   `billing:ViewInvoice` (Xem chi tiết hóa đơn)
    *   `billing:ViewBilling` (Xem thông tin thanh toán tổng quan)
*   **Quản lý cấu hình Export (Cost and Usage Report - CUR):**
    *   `bcm-data-exports:CreateExport`
    *   `bcm-data-exports:GetExport`
    *   `bcm-data-exports:ListExports`
    *   `cur:PutReportDefinition` (Dành cho các phiên bản CUR 1.0 cũ)
*   **Quyền trên S3 (Nơi lưu trữ file billing export):**
    *   `s3:GetBucketPolicy`, `s3:PutBucketPolicy` (Để AWS ghi dữ liệu vào bucket)
    *   `s3:ListBucket`, `s3:GetObject` (Để hệ thống ERP đọc và lấy file)

> [!IMPORTANT]
> **Kích hoạt IAM Access:** Mặc định, các tài khoản IAM (kể cả có quyền Admin) sẽ KHÔNG thể truy cập trang Billing nếu tài khoản Root (Root User) chưa kích hoạt tính năng **"Activate IAM Access"** trong phần Account Settings của AWS Billing Console.

---

## 2. Các bước thực hiện trên Console (UI Steps)
Để tải hóa đơn định kỳ hàng tháng cho mục đích đối soát thủ công:
1.  Đăng nhập vào [AWS Management Console](https://console.aws.amazon.com/).
2.  Tìm kiếm dịch vụ **Billing and Cost Management** hoặc truy cập trực tiếp [AWS Billing Console](https://console.aws.amazon.com/billing/home).
3.  Tại menu bên trái, chọn **Invoices** (Hóa đơn).
4.  Chọn khoảng thời gian (Date range - tháng cần kết xuất).
5.  AWS hiển thị danh sách các khoản phí theo từng dịch vụ của tài khoản hiện tại (hoặc tất cả các Member Accounts nếu là tài khoản Master/Payer của AWS Organization).
6.  Chọn tab **AWS invoices** để tải bản PDF chính thức (nhấp vào **Summary PDF** để tải hóa đơn tổng).
7.  **Chụp ảnh màn hình (Screenshot):** Chụp lại phần tóm tắt chi phí sử dụng của từng Member Account thuộc AWS Organization (nếu chạy mô hình Reseller) làm cơ sở đối soát.
8.  **Tải chi tiết (CSV):** Nhấp vào nút **Download CSV** (chọn *Charges by service* hoặc *Charges by account*) để lấy bảng kê chi tiết sử dụng.

---

## 3. Lấy chi tiết sử dụng theo Account (Cost Table / AWS Organization)
Hóa đơn PDF của AWS chỉ hiển thị tổng tiền cần thanh toán cho toàn bộ AWS Organization. Đối với nhà cung cấp dịch vụ hoặc đối tác quản lý nhiều tài khoản khách hàng:
1.  Đảm bảo bạn đang đăng nhập bằng tài khoản **Management Account (Payer)** của Organization.
2.  Trong menu **Billing**, chọn **Bills** hoặc **Invoices**.
3.  Tại phần chi tiết, lọc hoặc nhóm theo cột **Account ID** để xem lượng tiêu dùng thực tế của từng tài khoản thành viên (tương ứng với từng khách hàng).
4.  Nhấp **Download CSV > Charges by account** để xuất file Excel chi tiết phân bổ.

> [!TIP]
> **Tự động hóa lấy cước:** AWS khuyến nghị cấu hình **AWS Data Exports** để xuất định kỳ dữ liệu **Cost and Usage Report (CUR) 2.0** sang Amazon S3 dưới định dạng Parquet (tối ưu hóa cho query Athena) hoặc CSV (dễ parse bằng script) thay vì tải thủ công.
