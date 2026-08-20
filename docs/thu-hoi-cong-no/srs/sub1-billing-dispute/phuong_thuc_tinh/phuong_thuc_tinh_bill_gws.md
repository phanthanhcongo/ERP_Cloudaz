# Phương Thức Tính Bill Dịch Vụ GWS (Google Workspace)

GWS được quản lý theo **Domain** thay vì theo khách hàng cá nhân. Quy trình lấy bill chia thành 2 loại hợp đồng: Flex và Committed.

---

## 1. GWS Flex (Usage-based - Tính theo lượng dùng hàng tháng)

### A. Chỉ Số Đầu Vào
*   Tải duy nhất một file **CSV tổng** từ Workspace Console. File này chứa danh sách toàn bộ các domain và số tiền tiêu tương ứng của tháng cần tính.

### B. Quy Trình Xử Lý Thủ Công
1.  Chuyển đổi định dạng file CSV tải về sang định dạng Excel (`.xls` hoặc `.xlsx`).
2.  **Loại bỏ dòng Commit**: Đối với những domain vừa sử dụng gói Flex vừa Committed (hiện cả 2 dòng trên cùng 1 domain), kế toán phải tìm và **xóa dòng Commit bằng tay**, chỉ giữ lại dòng Flex.
3.  Upload file Excel đã lọc lên hệ thống CM.

### C. Đối Soát & Xuất Hóa Đơn
*   CM tự động ánh xạ domain về mã khách hàng và sinh bảng đối soát chi phí.
*   Kế toán xuất hóa đơn trực tiếp cho khách dựa trên số liệu của CM mà không cần đối soát lại (tin tưởng hệ thống).

---

## 2. GWS Committed (License-based - Trả trước theo năm/kỳ hạn)

### A. Đặc Thù Nghiệp Vụ
*   Khách hàng ký hợp đồng committed (thường là committed 3 năm). Google ghi nhận committed 3 năm đó trên hệ thống của họ.
*   **Thanh toán hãng**: Công ty mình trả tiền hàng tháng cho Google theo đúng lượng committed đã đăng ký.
*   **Thu khách**: Khách hàng thanh toán cho công ty mình theo năm hoặc theo kỳ (quý/6 tháng...) tùy thuộc vào thỏa thuận đã ký trên hợp đồng riêng.

### B. Xử Lý Billing Hàng Tháng
*   Không tính lượng committed này vào billing phát sinh hàng tháng của khách hàng (đã được lọc bỏ khỏi file Flex tải về trước khi tính toán).
