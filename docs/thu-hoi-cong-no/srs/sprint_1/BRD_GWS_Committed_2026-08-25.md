# TÀI LIỆU YÊU CẦU NGHIỆP VỤ
**Business Requirements Document (BRD)**

**Dự án:** ERP CloudAZ - GWS Committed Debt Collection  
**Ngày:** 2026-08-25  
**Phiên bản:** 1.0  

---

## Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
|---|---|---|---|
| 1.0 | 2026-08-25 | BA / AI Agent | Khởi tạo tài liệu từ Sprint 1 Backlog |

---

## 1. Vấn đề Hiện tại
Quy trình tính cước, đối soát và thu hồi công nợ hiện tại của CloudAZ đối với dịch vụ Google Workspace (GWS) Committed đang diễn ra rời rạc, phụ thuộc nhiều vào thao tác thủ công của Kế toán. Việc nhắc nợ qua email, tính toán tiền lãi phạt chậm trả, và các thủ tục phối hợp liên phòng ban (Kế toán, Sales AM, Phòng mua, Pháp lý) trong việc dừng dịch vụ (Suspend) hoặc khởi kiện còn thiếu công cụ theo dõi tập trung, dẫn đến rủi ro sai sót thời hạn, thất thoát doanh thu và trải nghiệm khách hàng không đồng nhất.

## 2. Giải pháp Đề xuất
Xây dựng hệ thống Thu hồi công nợ (Debt Collection) tập trung trên ERP CloudAZ. Hệ thống sẽ tích hợp tự động với API của CM để lấy dữ liệu cước, tự động hóa hoàn toàn quy trình tính lãi và gửi email nhắc nợ định kỳ. Thiết lập cơ chế ràng buộc chặt chẽ (Hard Constraints) giữa các phòng ban: Ngày hạn thanh toán (Ngày X) chỉ được xác định khi Hành chính nhân sự xác nhận đã phát ĐNTT thành công; chặn thao tác dừng dịch vụ của Phòng Mua nếu Sales AM chưa phê duyệt; và chỉ phát hành hóa đơn VAT sau khi đã thu tiền thành công.

## 3. Hệ thống bị Ảnh hưởng
- Hệ thống CM (Cloud Management): Cung cấp API cước và sinh bản Đề nghị thanh toán (ĐNTT).
- Phần mềm Kế toán MISA: Tích hợp API để Kế toán ký số và xuất hóa đơn điện tử VAT.
- Google Admin Console: Nền tảng thực thi thao tác Suspend/Unsuspend dịch vụ GWS của khách hàng.
- Hệ thống ERP CloudAZ: Đóng vai trò trung tâm xử lý, lưu trữ Audit Trail và phân quyền luồng công việc.

## 4. Giả định / Phụ thuộc
- Dịch vụ GWS Committed có quy trình đóng gói và tính cước cố định, nên được ưu tiên triển khai trong Sprint 1.
- Bản cứng ĐNTT là tài liệu bắt buộc để làm căn cứ tính Ngày X theo hợp đồng thương mại hiện hành của công ty.
- Các tài khoản tích hợp API (MISA, Google Admin) đã được cung cấp đủ quyền truy cập (Tokens/Credentials).

## 5. Yêu cầu Nghiệp vụ

### 5.1 Tích hợp & Quản lý Cước
- **5.1.1** Hệ thống cho phép Kế toán nhận dữ liệu cước đã chốt và bộ chứng từ ĐNTT tự động từ hệ thống CM qua API.
- **5.1.2** Kế toán có thể thiết lập hệ thống tự động gửi email bảng cước (kèm screenshot) và chốt cước sau 2+1 ngày.
- **5.1.3** Hệ thống tự động ghi nhật ký kiểm toán (Audit Trail) cho toàn bộ thao tác tính toán, phân quyền chặt chẽ giữa Kế toán trưởng và Admin.

### 5.2 Quy trình Đóng dấu & Chuyển phát ĐNTT
- **5.2.1** Kế toán có thể xác nhận trên hệ thống sau khi đã in bản cứng ĐNTT và đóng dấu đỏ công ty.
- **5.2.2** Hệ thống gửi thông báo tự động cho Hành chính nhân sự (HCNS) sang nhận thư để gửi bưu điện.
- **5.2.3** HCNS có thể cập nhật mã vận đơn và ngày khách nhận bản cứng thành công.
- **5.2.4** Hệ thống tự động tính và khóa mốc hạn thanh toán (Ngày X) dựa trên ngày nhận thực tế cộng với thời hạn thanh toán trong hợp đồng.
- **5.2.5** Hệ thống tự động mở khóa nút gửi ĐNTT qua Email sau khi trạng thái bản cứng được xác nhận phát thành công.

### 5.3 Tự động hóa Nhắc nợ & Phạt Lãi
- **5.3.1** Hệ thống tự động gửi email nhắc nợ cảnh báo trước hạn vào đúng Ngày X-2 (CC cho Sales AM).
- **5.3.2** Hệ thống tự động tính tiền lãi chậm thanh toán cộng dồn hàng ngày theo hợp đồng.
- **5.3.3** Hệ thống tự động gửi email nhắc nợ liên tục mỗi ngày từ Ngày X+1 (kèm thông tin lãi phạt và mốc khóa dịch vụ).
- **5.3.4** Sales AM có thể theo dõi danh sách khách hàng quá hạn qua Dashboard Công nợ chuyên biệt và ghi nhận nhật ký đôn đốc.

### 5.4 Tạm Dừng & Khôi phục Dịch vụ (Suspend/Unsuspend)
- **5.4.1** Hệ thống tự động tạo task yêu cầu dừng dịch vụ chuyển cho Sales AM khi khách hàng chạm mốc X+4.
- **5.4.2** Sales AM có thể phê duyệt hoặc từ chối (kèm lý do commercial) yêu cầu dừng dịch vụ trên hệ thống.
- **5.4.3** Hệ thống tự động chuyển task thực thi cho Phòng Mua sau khi Sales AM phê duyệt dừng.
- **5.4.4** Phòng Mua thực thi khóa Google Admin Console và cập nhật trạng thái lên hệ thống ERP, kích hoạt email báo cáo kết quả.

### 5.5 Xử lý Pháp lý & Chấm dứt Hợp đồng
- **5.5.1** Nhân viên Pháp lý (Legal) có thể xem danh sách báo động các khách hàng chạm mốc lập công văn (X+15) và mốc chấm dứt hợp đồng (X+30).
- **5.5.2** Hệ thống tự động điền các trường dữ liệu nợ gốc, lãi phạt vào mẫu công văn pháp lý chuẩn.
- **5.5.3** Legal có thể kích hoạt nút Đơn phương chấm dứt hợp đồng tại mốc X+30 để lưu hồ sơ khởi kiện.

### 5.6 Ký Phát hành Hóa đơn VAT (Sau Thanh toán)
- **5.6.1** Hệ thống nhận thông báo trạng thái khách hàng thanh toán thành công để mở khóa tính năng xuất hóa đơn.
- **5.6.2** Kế toán có thể cắm USB Token để ký phát hành Hóa đơn điện tử chính thức trên MISA.
- **5.6.3** Hệ thống tự động kéo bản PDF Hóa đơn và số hóa đơn từ MISA về ERP để tất toán hồ sơ công nợ.

### 5.7 Executive Dashboard
- **5.7.1** Ban Quản lý/KTT có thể xem Dashboard tổng quan tình hình công nợ toàn công ty (tổng nợ, phân tầng thời gian nợ).

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

| Mã | Vấn đề cần xác nhận | Trạng thái |
|---|---|---|
| Q1 | Bảng cước ĐNTT đẩy từ hệ thống CM qua API đã đảm bảo tỷ giá hối đoái chốt hàng tháng chưa, hay cần quy đổi thêm trên ERP? | **Đã chốt**: Giữ nguyên mọi số liệu 100% theo CM đẩy sang, không quy đổi hay tính toán lại. |
