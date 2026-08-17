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

## 3. Quy trình thực tế dành cho Reseller (CloudAZ - Partner Sales Console)
Đối với kế toán CloudAZ quản lý dịch vụ Google Workspace Flex của nhiều khách hàng:
1.  Đăng nhập vào [Partner Sales Console](https://partner.cloud.google.com/).
2.  Đi tới phần **Billing** (Thanh toán) hoặc **Reports** (Báo cáo).
3.  Tải xuống file CSV chứa chi tiết sử dụng cước hàng tháng của tất cả các khách hàng (GWS Flex billing CSV).
4.  Chuyển đổi file CSV tải được sang dạng file Excel.
5.  Đẩy file Excel này lên hệ thống CM nội bộ để sinh bảng tổng hợp chi phí tự động gửi khách hàng.

