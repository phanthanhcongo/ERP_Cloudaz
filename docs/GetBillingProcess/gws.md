# Quy trình lấy hóa đơn GWS (Google Workspace Flex)

## 1. Quyền hạn yêu cầu (Permissions)
Để truy cập thông tin hóa đơn Google Workspace, tài khoản của bạn cần có quyền:
*   **Super Admin** (Quản trị viên cấp cao) hoặc có quyền quản lý thanh toán (**Billing**).

## 2. Các bước thực hiện trên Admin Console (UI Steps)
1.  Đăng nhập vào [Google Admin console](https://admin.google.com).
2.  Mở menu điều hướng (Navigation menu) và đi tới **Billing** (Thanh toán) > **Payment accounts** (Tài khoản thanh toán).
3.  Tìm gói đăng ký Google Workspace tương ứng. Nhấp vào **View invoices** (Xem hóa đơn) bên cạnh gói đăng ký đó.
4.  Lọc khoảng thời gian tương ứng để tìm hóa đơn cần tải.
5.  Nhấp vào số hóa đơn hoặc biểu tượng **Download** (Tải xuống), chọn định dạng **PDF** hoặc **CSV** để lưu về máy.

> [!NOTE]
> Bảng điều khiển Admin Console chỉ lưu trữ lịch sử hóa đơn tối đa 12 tháng gần nhất. Để lấy các hóa đơn cũ hơn, bạn cần liên hệ với bộ phận hỗ trợ của Google Workspace.

## 3. Quy trình thực tế dành cho Reseller (CloudAZ - Partner Sales Console)
Đối với đối tác bán lại (Reseller) quản lý dịch vụ Google Workspace Flex của nhiều khách hàng:
1.  Đăng nhập vào [Partner Sales Console](https://partner.cloud.google.com/).
2.  Đi tới phần **Billing** (Thanh toán) hoặc **Reports** (Báo cáo) để truy cập thông tin cước.
3.  Tải xuống báo cáo chi tiết tháng dưới dạng CSV (**Monthly Detail Report**).
    *   *Cách thay thế:* Bạn cũng có thể tải file này từ **Google Payments Center** hoặc cấu hình tự động tải qua hệ thống **SFTP của Google** (`partnerupload.google.com`, cổng `19321`, thư mục `invoices`).
4.  Chuyển đổi file CSV tải được sang dạng file Excel.
5.  Đẩy file Excel này lên hệ thống CM nội bộ để sinh bảng tổng hợp chi phí tự động gửi khách hàng.

> [!TIP]
> Google cũng cung cấp tính năng tự động xuất dữ liệu thanh toán kênh đối tác (**Channel Services billing data export**) sang **BigQuery** để phục vụ việc tự động hóa đối soát và tích hợp hệ thống ở quy mô lớn.

