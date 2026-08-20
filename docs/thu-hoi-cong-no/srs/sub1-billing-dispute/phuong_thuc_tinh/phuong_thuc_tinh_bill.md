# Hướng Dẫn & Phương Thức Tính Bill Chi Tiết Cho Từng Dịch Vụ

Tài liệu này tổng hợp công thức, quy tắc nghiệp vụ và luồng xử lý tính toán billing hàng tháng đối với các dịch vụ Cloud Resale (GCP, GMP, GWS) tại công ty.

Để thuận tiện cho việc tra cứu và quản lý, phương thức tính bill chi tiết đã được tách riêng cho từng dịch vụ dưới đây:

### 📑 Danh Sách Tài Liệu Chi Tiết:

1.  **Dịch vụ GCP (Google Cloud Platform)**:
    *   *Chi tiết tại*: [phuong_thuc_tinh_bill_gcp.md](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/phuong_thuc_tinh/phuong_thuc_tinh_bill_gcp.md)
    *   *Đặc điểm*: Phức tạp nhất; xử lý riêng Gemini API, chiết khấu discount riêng từng khách, các loại Credit Promotion và các loại thuế phí (VAT nhà thầu, Phí dịch vụ).

2.  **Dịch vụ GMP (Google Marketing Platform)**:
    *   *Chi tiết tại*: [phuong_thuc_tinh_bill_gmp.md](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/phuong_thuc_tinh/phuong_thuc_tinh_bill_gmp.md)
    *   *Đặc điểm*: Không có Credit, không có Gemini API; phí dịch vụ cố định; một billing link có thể chứa nhiều project của nhiều khách hàng khác nhau.

3.  **Dịch vụ GWS (Google Workspace)**:
    *   *Chi tiết tại*: [phuong_thuc_tinh_bill_gws.md](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/phuong_thuc_tinh/phuong_thuc_tinh_bill_gws.md)
    *   *Đặc điểm*: Tính theo domain; phân biệt rõ gói Flex (lượng dùng thực tế tháng) và Committed (gói trả trước); yêu cầu lọc bỏ dòng Commit thủ công trên file Excel trước khi upload lên CM.
