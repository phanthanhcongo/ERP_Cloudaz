# Tổng Hợp Trao Đổi Nghiệp Vụ dưới dạng User Story

Tài liệu này hệ thống hóa các yêu cầu nghiệp vụ đối với hệ thống ERP mới dưới dạng User Story chuẩn Agile (`As a... I want... So that...` / `Là một... Tôi muốn... Để...`).

---

## 1. Phân Hệ Billing & Đối Soát Chi Phí

### U1. Tự động thu thập Gemini API Usage
*   **User Story**: Là một **Kế toán Billing**, tôi muốn hệ thống tự động thu thập lượng dùng Gemini API của từng khách hàng từ hệ thống hãng, để tôi không phải truy cập thủ công vào từng console và lọc theo Service.
*   **Tiêu chí nghiệm thu (AC)**:
    *   Hệ thống tự động tách riêng dòng chi phí Gemini API.
    *   Không áp dụng discount của GCP Reseller đối với phần Gemini API (trừ khi có điều khoản đặc biệt).
    *   Gộp Gemini API vào lượng dùng thông thường nếu tổng giá trị quá nhỏ (< $0.07).

### U2. Phát hiện Promotion Credit tự động
*   **User Story**: Là một **Kế toán Billing**, tôi muốn hệ thống tự động phát hiện và cảnh báo các khách hàng đang có Promotion Credit hoạt động trên Console, để tôi có thể chuyển danh sách sang cho Sales/CEO xác nhận phân bổ mà không cần check thủ công từng account.

### U3. Import 2 bảng dữ liệu GCP/GMP
*   **User Story**: Là một **Kế toán Billing**, tôi muốn hệ thống ERP mới hỗ trợ import 2 bảng dữ liệu xuất từ Console (Project và Billing ID) giống như hệ thống CM cũ, để hệ thống tự động tính toán chi phí và giảm thời gian thao tác thủ công.
*   **Tiêu chí nghiệm thu (AC)**:
    *   Bảng Project: Group by project, lọc theo tháng (bill_period), bỏ tích reseller margin.
    *   Bảng Billing ID: Group by SubAccount, lọc theo tháng (bill_period), bỏ tích reseller margin.

### U4. Import dữ liệu GWS Flex theo Domain
*   **User Story**: Là một **Kế toán Billing**, tôi muốn hệ thống cho phép upload file Excel chuyển đổi từ CSV tổng của Google Workspace, để hệ thống tự động phân bổ chi phí theo domain và lập bảng đối soát gửi khách hàng.
*   **Tiêu chí nghiệm thu (AC)**:
    *   Hệ thống hỗ trợ kế toán lọc bỏ các dòng GWS Committed trước khi upload số liệu GWS Flex.

---

## 2. Phân Hệ Quản Lý Công Nợ & Email Nhắc Nợ

### U5. Gộp hóa đơn nhiều dịch vụ tránh spam
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống tự động gộp toàn bộ hóa đơn của các dịch vụ khác nhau (GCP, GMP, GWS...) của cùng một khách hàng vào một bảng tổng hợp duy nhất khi gửi mail nhắc nợ, để tránh spam khách hàng và đảm bảo khách chỉ nhận tối đa 1 mail nhắc nợ mỗi ngày.

### U6. Tự động gửi mail nhắc nợ cho dịch vụ Committed
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống có luồng gửi mail nhắc nợ tự động đối với các gói dịch vụ GWS Committed, để giảm thiểu việc theo dõi và gửi mail thủ công định kỳ.

### U7. Tự động tính lãi phạt trả chậm
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống tự động tính toán số tiền lãi phạt trả chậm dựa trên số ngày quá hạn và cộng dồn vào tổng số tiền phải thu trên email nhắc nợ, để tôi không phải tính toán thủ công bằng tay.

### U8. Quản lý hạn thanh toán linh hoạt
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống cho phép cấu hình hạn thanh toán (Due Date) riêng biệt cho từng hóa đơn theo thỏa thuận trên hợp đồng của từng khách hàng, để theo dõi nợ quá hạn một cách chính xác.

---

## 3. Phân Hệ Pháp Lý & Dừng Dịch Vụ (Legal & Procurement)

### U9. Tạo template công văn thu nợ động
*   **User Story**: Là một **Nhân viên Pháp chế (Legal)**, tôi muốn hệ thống cung cấp các template công văn nhắc nợ/chấm dứt dịch vụ tự động điền thông tin hợp đồng của từng khách hàng, để tôi có thể nhanh chóng chuẩn bị hồ sơ pháp lý.

### U10. Kết hợp gửi công văn bản cứng và email
*   **User Story**: Là một **Nhân viên Pháp chế (Legal)**, tôi muốn hệ thống hỗ trợ quy trình ghi nhận gửi công văn song song qua bưu điện (bản cứng) và email, để tránh thất lạc thông tin trong trường hợp khách hàng thay đổi địa chỉ công ty mà chưa cập nhật hợp đồng.

### U11. Phê duyệt dừng dịch vụ liên phòng ban
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống chặn việc dừng dịch vụ trực tiếp và yêu cầu phải có bước xác nhận từ phía bộ phận Sales trước khi gửi yêu cầu sang phòng Mua, để tránh làm gián đoạn dịch vụ và ảnh hưởng đến dữ liệu/ưu đãi của khách hàng khi chưa thống nhất phương án xử lý.

### U12. Cảnh báo dừng dịch vụ tự động
*   **User Story**: Là một **Kế toán Công nợ**, tôi muốn hệ thống tự động gửi email cảnh báo dừng dịch vụ trước khi lệnh dừng thực tế được thực thi, để khách hàng có thời gian chuẩn bị thanh toán và tránh rủi ro mất mát dữ liệu.

---

## 4. Phân Quyền & Quy Trình Nội Bộ (Sales & Admin)

### U13. Phân quyền xem dữ liệu khách hàng
*   **User Story**: Là một **Nhân viên Sales (AM)**, tôi muốn chỉ xem được thông tin công nợ, billing và khách hàng thuộc quyền quản lý của mình trên hệ thống, để bảo mật dữ liệu và tập trung vào các khách hàng phụ trách.

### U14. Quy trình duyệt email nhắc nợ (Vấn đề cần thống nhất thêm)
*   **User Story (Sale AM mong muốn)**: Là một **Sale AM**, tôi muốn hệ thống tự động gửi email nhắc nợ đến khách hàng mà không cần qua bước phê duyệt trung gian để đẩy nhanh tiến độ thu hồi nợ.
*   **User Story (Bộ phận Sales chung mong muốn)**: Là một **Nhân viên Sales**, tôi muốn hệ thống chỉ tạo bản nháp email nhắc nợ và hiển thị để tôi kiểm tra/xác nhận trước khi gửi đi, để đảm bảo kiểm soát tốt mối quan hệ với khách hàng quan trọng.
*   *Đề xuất*: ERP cần hỗ trợ cấu hình tùy chọn duyệt/gửi tự động dựa trên phân loại nhóm khách hàng hoặc mức độ nghiêm trọng của nợ quá hạn.