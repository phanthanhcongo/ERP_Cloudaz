# Tài liệu Phân rã Tính năng (Functional Decomposition)
## Hệ thống Billing và Thu hồi Công nợ CloudAZ

Dựa trên sơ đồ quy trình nghiệp vụ tổng quát (End-to-End), các tính năng của hệ thống được phân rã thành 7 nhóm mô-đun chức năng chính dưới đây, phân bổ theo độ ưu tiên triển khai (MVP - Phase 1 và Phase 2).

---

### Mô-đun 1: Tích hợp & Đồng bộ dữ liệu Cước (Billing Data Integration)
*   **[F1.1] Cấu hình API kết nối Console Hãng (P0):** Màn hình cho phép quản trị viên cấu hình thông tin kết nối API (AWS Billing API, GCP Billing Export, Azure Consumption API...) của từng nhà cung cấp.
*   **[F1.2] Job đồng bộ dữ liệu sử dụng tự động (P0):** Hệ thống tự động quét dữ liệu tiêu dùng của khách hàng hàng ngày/hàng tháng theo lịch hẹn (Cron job).
*   **[F1.3] Quản lý dữ liệu cước thô (P1):** Kho lưu trữ dữ liệu cước thô (raw data) đã tải về để phục vụ đối soát khi cần thiết.

---

### Mô-đun 2: Tính cước & Quản lý Biểu giá (Billing & Pricing Engine)
*   **[F2.1] Quản lý chính sách giá & Chiết khấu (P0):** Cấu hình công thức tính cước cho từng khách hàng (Giá gốc của Hãng + % Markup phí quản lý, hoặc theo đơn giá cố định trong hợp đồng, tỷ giá quy đổi USD/VND áp dụng).
*   **[F2.2] Tính toán hóa đơn dự kiến - Draft Bill (P0):** Tự động tính toán tổng số tiền cước khách hàng phải trả sau khi áp dụng các chính sách chiết khấu/phụ thu.
*   **[F2.3] Điều chỉnh cước thủ công (P0):** Màn hình dành cho Kế toán để chỉnh sửa/điều chỉnh số liệu cước dự kiến trước khi gửi khách hàng (áp dụng các trường hợp đặc biệt).

---

### Mô-đun 3: Cổng xác nhận & Đối soát cước (Dispute & Statement Portal)
*   **[F3.1] Gửi email duyệt cước tự động (P0):** Tự động gửi email kèm bảng tính cước chi tiết (statement) và link duyệt cước có gắn token bảo mật cho Khách hàng.
*   **[F3.2] Trang xác nhận cước dành cho Khách hàng (P0):** Trang web tĩnh cho phép khách hàng xem chi tiết cước và bấm chọn:
    *   `[Xác nhận đúng chi phí]`
    *   `[Phản hồi sai lệch cước]` + Nhập lý do sai lệch.
*   **[F3.3] Quản lý phản hồi lệch cước (P0):** Gửi cảnh báo lệch cước cho Sales AM phụ trách. Màn hình quản lý trạng thái đối soát cước (Đang đối soát ➔ Đã duyệt lại ➔ Chờ gửi lại).

---

### Mô-đun 4: Quản lý Hóa đơn & Đồng bộ phần mềm HĐĐT (Invoicing & ERP Integration)
*   **[F4.1] Đẩy yêu cầu xuất hóa đơn (P1):** Sau khi khách xác nhận bill OK, hệ thống tự động đẩy dữ liệu sang phần mềm hóa đơn (qua API) để tạo hóa đơn nháp.
*   **[F4.2] Ghi nhận & Cập nhật hóa đơn (P0):** Kế toán nhập số hóa đơn, ngày phát hành (Ngày 0) và tải file PDF hóa đơn lên (nếu làm thủ công), hoặc hệ thống tự động đồng bộ số hóa đơn từ phần mềm HĐĐT về ERP.
*   **[F4.3] Tự động gửi email hóa đơn điện tử (P0):** Hệ thống tự động gửi email đính kèm hóa đơn điện tử cho khách hàng và tính toán ngày đến hạn (Ngày X).

---

### Mô-đun 5: Theo dõi chuyển phát ĐNTT giấy (Post Tracking)
*   **[F5.1] Màn hình cập nhật bưu tá của HCNS (P0):** Form đơn giản dành cho HCNS để nhập mã vận đơn chuyển phát nhanh ĐNTT bản cứng và cập nhật "Ngày phát thành công".
*   **[F5.2] Tự động đồng bộ trạng thái vận đơn (P2):** Kết nối API với đối tác chuyển phát (Viettel Post, GHTK...) để tự động cập nhật ngày phát thành công mà HCNS không cần nhập tay.

---

### Mô-đun 6: Theo dõi Công nợ & Nhắc nợ tự động (Debt Tracking & Reminders)
*   **[F6.1] Dashboard quản lý công nợ (P0):** Màn hình hiển thị danh sách khách hàng phân loại theo các giai đoạn nợ (Đã gửi bill ➔ Chờ xuất HĐ ➔ Trong hạn ➔ Quá hạn mốc 1 ➔ Quá hạn mốc 2...).
*   **[F6.2] Công cụ gửi mail nhắc nợ tự động (P0):** Tự động gửi email theo template tương ứng khi đến ngày:
    *   *Ngày X - 2:* Email Alert đính kèm hóa đơn.
    *   *Ngày X + 1:* Email Warning quá hạn thanh toán (remind lặp lại mỗi ngày).
*   **[F6.3] Cảnh báo phối hợp nội bộ (P0):** Tự động gửi thông báo qua Slack/Teams/Email cho Sales AM phụ trách khi khách của họ chuyển sang trạng thái quá hạn.

---

### Mô-đun 7: Xử lý Dừng dịch vụ & Pháp lý (Suspension & Legal Management)
*   **[F7.1] Yêu cầu dừng dịch vụ (P0):** Tự động gửi email yêu cầu dừng dịch vụ cho Phòng Mua vào ngày X + 4.
*   **[F7.2] Quản lý trạng thái Khóa/Mở dịch vụ (P0):** 
    *   Phòng Mua có nút bấm xác nhận `[Đã khóa]` trên hệ thống để chuyển trạng thái Khách hàng thành "Đã dừng dịch vụ".
    *   Nếu khách thanh toán sau khi khóa ➔ Hệ thống báo Phòng Mua mở lại dịch vụ và ghi nhận nút `[Đã mở lại]`.
*   **[F7.3] Kiểm tra quy tắc cọc lần 2 (P1):** Hệ thống tự kiểm tra nếu khách hàng đã bị khóa dịch vụ từ 2 lần trở lên ➔ Cảnh báo cho Sales AM yêu cầu khách đặt cọc trước khi Phòng Mua kích hoạt lại dịch vụ.
*   **[F7.4] Chuyển tiếp hồ sơ Legal (P1):** Tự động gửi thông báo cho Legal soạn công văn chấm dứt HĐ (Ngày X + 15) và thực hiện thủ tục đơn phương chấm dứt HĐ (Ngày X + 30).
