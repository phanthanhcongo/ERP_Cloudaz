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
>
> **Hệ quả bắt buộc:** hồ sơ công nợ và thời hiệu khởi kiện hợp đồng thương mại cần lưu lâu hơn 12 tháng, nên **ERP phải lưu bản sao hóa đơn ngay khi tải về**. Không được coi Admin Console là kho lưu trữ đối soát.

## 3. Quy trình thực tế dành cho Reseller (CloudAZ - Partner Sales Console)
Đối với đối tác bán lại (Reseller) quản lý dịch vụ Google Workspace Flex của nhiều khách hàng:
1.  Đăng nhập vào [Partner Sales Console](https://partner.cloud.google.com/).
2.  Đi tới phần **Billing** (Thanh toán) hoặc **Reports** (Báo cáo) để truy cập thông tin cước.
3.  Tải xuống báo cáo chi tiết tháng dưới dạng CSV (**Monthly Detail Report**).
    *   *Cách thay thế:* Bạn cũng có thể tải file này từ **Google Payments Center**.
    *   ⚠️ *Kênh **SFTP của Google** (`partnerupload.google.com`, cổng `19321`, thư mục `invoices`) — **chưa xác minh được**. Rà soát 2026-09-03 không tìm thấy tài liệu chính thống nào của Google Workspace / Channel Services xác nhận kênh này áp dụng cho hóa đơn reseller Workspace (tham chiếu tìm được thuộc tài liệu sản phẩm khác). **Cần Partner Manager của Google xác nhận trước khi dựa vào.***
4.  Chuyển đổi file CSV tải được sang dạng file Excel.
5.  Đẩy file Excel này lên hệ thống CM nội bộ để sinh bảng tổng hợp chi phí tự động gửi khách hàng.

> [!TIP]
> Google cũng cung cấp tính năng tự động xuất dữ liệu thanh toán kênh đối tác (**Channel Services billing data export**) sang **BigQuery** để phục vụ việc tự động hóa đối soát và tích hợp hệ thống ở quy mô lớn. **Đây là phương án TO-BE đã chốt** — cũng là đường duy nhất Google còn hỗ trợ sau khi `CloudChannelReportsService` bị deprecated.
>
> · Cách cấu hình: [setup_bigquery_export.md](../GCP/setup_bigquery_export.md) Phần 3 và Phần 4
> · Yêu cầu nghiệp vụ & giải pháp chi tiết: [BRD Tính cước GWS Flex](BRD_TinhCuoc_GWS_Flex_2026-09-03.md)
> · Phân tích hai phương án: [GiaiPhap_KyThuat_LayDuLieu_GWS.md](GiaiPhap_KyThuat_LayDuLieu_GWS.md)
