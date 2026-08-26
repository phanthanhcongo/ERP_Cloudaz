# Kế hoạch Sprint 1 — Luồng Ngang Google Committed (Horizontal Slice)

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Tính Cước, Đối Soát & Thu Hồi Công Nợ |
| **Phạm vi Sprint** | **Sprint 1: Full Luồng Ngang Google Committed (GWS Committed)** |
| **Ngày lập** | 2026-08-25 |
| **Tổng số User Stories** | **11 User Stories** |
| **Tổng số DoD Items** | **36 Tiêu chí nghiệm thu (Checklist)** |
| **Tệp tài liệu gốc** | `ProductBacklog_Billing_Debt_Collection_2026-08-20.md` |

---

## 🎯 MỤC TIÊU SPRINT 1
Xây dựng và kiểm thử thông suốt **100% Quy trình Thu hồi Công nợ liên phòng ban** cho sản phẩm **Google Workspace Cam kết (GWS Committed)** từ khâu nhận dữ liệu cước CM, tạo hóa đơn nháp MISA để theo dõi nợ, đóng dấu đỏ phát bản cứng ĐNTT HCNS (ràng buộc khóa Mail), nhắc nợ tự động, Sales AM duyệt dừng dịch vụ, Phòng Mua khóa Console Google, khách hàng thanh toán xong mới ký phát hành Hóa đơn VAT điện tử chính thức, Pháp lý xử lý công văn/khởi kiện và Executive Dashboard tổng quan.

---

## 📊 BẢNG TỔNG HỢP 11 USER STORIES TRONG SPRINT 1

| STT | Mã US | ERP Node ID | Bộ phận phụ trách | Tên ngắn User Story | Tóm tắt phạm vi |
|---|---|---:|---|---|---|
| 1 | **BD-09** | `1639` | Kế toán doanh thu | Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Committed | Kết nối danh sách CM, tự động sinh ĐNTT hàng loạt, xem chi tiết hợp đồng |
| 2 | **BD-20** | `1653` | Kế toán trưởng / Admin | Audit Trail & Phân quyền cước | Ghi nhật ký kiểm toán mọi thao tác cước & phân quyền vai trò người dùng |
| 4 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & xác định Ngày X | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ Xác định Ngày X khi phát thành công ➔ Mở khóa gửi Mail ĐNTT |
| 5 | **DC-04** | `1659` | Kế toán & Sales AM | Cảnh báo X-2 & Nhắc nợ daily | Bắn email cảnh báo trước hạn X-2 (CC AM) & tự động nhắc nợ daily từ Ngày X+1 |
| 6 | **DC-05** | `1660` | Kế toán & Sales AM | Duyệt mail nhắc nợ & Lãi phạt | Duyệt trước email nhắc nợ & tính tiền lãi chậm thanh toán cộng dồn daily |
| 7 | **DC-06** | `1661` | Sales AM | Dashboard công nợ Sales AM | Dashboard công nợ khách quá hạn do AM quản lý & form ghi nhật ký đôn đốc |
| 8 | **DC-07** | `1663` | Kế toán & Sales AM | Duyệt Dừng Dịch vụ Ngày X+4 | Cảnh báo X+4 & **ràng buộc phê duyệt bắt buộc từ Sales AM** trước khi dừng DV |
| 9 | **DC-08** | `1664` | Phòng Mua (Procurement) | Thực thi Dừng/Mở Console Google | Phòng Mua thực thi Suspend/Unsuspend trên Google Admin Console & yêu cầu cọc |
| 10 | **DC-09** | `1666` | Pháp lý (Legal) | Quy trình Pháp lý & Hủy Hợp đồng | Giao diện danh sách X+15/X+30, soạn công văn X+15 & đơn phương hủy HĐ/khởi kiện X+30 |
| 11 | **DC-10** | `1668` | Ban Quản Lý / KTT | Executive Dashboard & Audit Trail | Dashboard tổng quan nợ quá hạn toàn công ty & Audit Trail quy trình công nợ |

---

## 📝 CHI TIẾT 11 USER STORIES & CHÍNH SÁCH NGHIỆM THU (DOD)

### 1. BD-09 (ERP Node ID: 1639)
* **Feature:** Feature 04: Quản lý & Tính cước Google Workspace Committed (GWS Committed)
* **Bộ phận:** Kế toán doanh thu
* **Tên ngắn:** `BD-09: Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Committed`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu, tôi muốn dễ dàng xem danh sách các khách hàng dùng gói Google Workspace Cam kết (Committed) sắp đến đợt thanh toán, mở xem thông tin hợp đồng để đối chiếu khi cần và bấm xuất hàng loạt file Đề nghị thanh toán (Word hoặc PDF), để kịp thời gửi chứng từ thu tiền cho khách đúng hạn mà không phải soạn thủ công từng file.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kết nối thành công danh sách khách hàng GWS Committed đến hạn thanh toán từ hệ thống CM.
  - **AC2:** Tự động sinh và tải về hàng loạt Đề nghị thanh toán (.docx/PDF) cho danh sách khách được chọn.
  - **AC3:** Xem chi tiết thông tin hợp đồng, thời hạn, số lượng tài khoản và file đính kèm từ hệ thống CM (tra cứu hợp đồng là để đối chiếu khi cần).



### 3. BD-20 (ERP Node ID: 1653)
* **Feature:** Feature 07: Quy đổi tỷ giá, Bảng đối soát & Xử lý lệch cước
* **Bộ phận:** Kế toán trưởng / Quản trị viên
* **Tên ngắn:** `BD-20: Nhật ký kiểm toán (Audit Trail) thao tác cước, phân quyền & báo cáo kiểm toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Quản lý/Kế toán trưởng, tôi muốn hệ thống ghi nhật ký audit trail cho mọi thao tác cước, phân quyền chặt chẽ theo vai trò và tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Tự động ghi nhật ký kiểm toán (Audit Trail) cho mọi thao tác tính toán & chỉnh sửa cước.
  - **AC2:** Phân quyền chi tiết chức năng tính cước theo vai trò người dùng (Kế toán, Sales, Admin).
  - **AC3:** Tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng cho Kế toán trưởng.

---

### 4. DC-03 (ERP Node ID: 1669)
* **Feature:** Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát bản cứng
* **Bộ phận:** Kế toán doanh thu & Hành chính nhân sự (HCNS)
* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán in bản cứng ĐNTT, trình ký đóng dấu đỏ công ty và bấm xác nhận trên hệ thống để gửi thông báo cho HCNS sang nhận thư.
  - **AC2:** HCNS nhận phong bì thư, gửi chuyển phát và cập nhật mã vận đơn / xác nhận ngày khách nhận bản cứng thành công.
  - **AC3:** Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng.
  - **AC4:** **Ràng buộc bắt buộc:** Nút gửi email ĐNTT điện tử CHỈ ĐƯỢC MỞ KHÓA khi HCNS bấm xác nhận khách đã nhận bản cứng thành công (cảnh báo nếu quá 48h chưa có cập nhật).

---

### 5. DC-04 (ERP Node ID: 1659)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-04: Cảnh báo trước hạn & tự động nhắc nợ quá hạn`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu, tôi muốn khách hàng nhận email thông báo nhắc nợ trước 2 ngày khi sắp đến hạn thanh toán và tự động nhận email đôn đốc hàng ngày khi đã quá hạn (có thông báo rõ các mốc dừng dịch vụ và hủy hợp đồng), để hỗ trợ khách thanh toán đúng hạn.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Hệ thống cảnh báo và Kế toán duyệt gửi email trước hạn vào Ngày X-2 (CC Sales AM).
  - **AC2:** Tự động kích hoạt luồng nhắc nợ khi quá Ngày X chưa thanh toán.
  - **AC3:** Hệ thống lên danh sách nhắc nợ hàng ngày để Kế toán duyệt gửi cho khách quá hạn (từ Ngày X+1).
  - **AC4:** Soạn nội dung email nhắc nợ đầy đủ: nợ gốc, lãi chậm, mốc dừng DV (X+4), mốc hủy HĐ (X+30).
  - **AC5:** Hỗ trợ luồng nhắc nợ tự động riêng cho GWS Committed.

---

### 6. DC-05 (ERP Node ID: 1660)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM / Quản lý
* **Tên ngắn:** `DC-05: Cấu hình luồng nhắc nợ & tính lãi chậm thanh toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu / Quản lý, tôi muốn duyệt trước nội dung email nhắc nợ (hoặc chuyển Sales AM duyệt) trước khi gửi cho khách và tự động tính tiền lãi chậm thanh toán cộng dồn hàng ngày theo hợp đồng, để đôn đốc công nợ chính xác.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Cấu hình luồng duyệt email nhắc nợ: gửi tự động hoặc tạo nháp gửi Sales AM duyệt trước.
  - **AC2:** Tự động tính lãi chậm thanh toán = `% lãi trả chậm quy định theo hợp đồng × số ngày trả chậm × nợ gốc (tiền cước phải trả kỳ đó)`.
  - **AC3:** Cấu hình tỷ lệ % lãi chậm thanh toán riêng cho từng hợp đồng.

---

### 7. DC-06 (ERP Node ID: 1661)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Sales AM (Quản lý tài khoản)
* **Tên ngắn:** `DC-06: Dashboard công nợ & nhật ký đôn đốc cho Sales AM`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Sales Quản lý tài khoản (Sales AM), tôi muốn xem danh sách các khách hàng quá hạn do mình phụ trách và ghi nhận lại lịch sử đôn đốc (gọi điện, nhắn tin, ngày khách hẹn trả tiền), để phối hợp với Kế toán theo dõi và thu hồi nợ.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Dashboard công nợ dành riêng cho Sales AM hiển thị danh sách khách quá hạn thuộc quyền quản lý.
  - **AC2:** Cung cấp giao diện cho Sales AM ghi nhận nhật ký đôn đốc khách (gọi điện/chat, ngày hẹn trả tiền).

---

### 8. DC-07 (ERP Node ID: 1663)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-07: Quy trình cảnh báo & phê duyệt Dừng dịch vụ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Sales AM, tôi muốn nhận thông báo cảnh báo khi khách quá hạn 4 ngày và chỉ thực hiện dừng dịch vụ khi có phê duyệt xác nhận chính thức từ Sales AM, để tránh dừng nhầm dịch vụ của khách hàng quan trọng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Gửi email cảnh báo dừng dịch vụ đến khách hàng vào Ngày X+4.
  - **AC2:** Tạo yêu cầu dừng dịch vụ gửi Sales AM phê duyệt (từ chối bắt buộc ghi lý do commercial).
  - **AC3:** **Ràng buộc cứng:** Chặn tuyệt đối thao tác dừng dịch vụ nếu chưa có xác nhận từ Sales AM.

---

### 9. DC-08 (ERP Node ID: 1664)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Phòng Mua (Procurement)
* **Tên ngắn:** `DC-08: Thực thi Dừng & Khôi phục Dịch vụ trên trang quản trị dịch vụ hãng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Phòng Mua (Procurement), tôi muốn nhận yêu cầu sau khi Sales AM đã duyệt dừng/mở dịch vụ, thao tác tạm khóa hoặc mở lại dịch vụ trên trang quản trị của Google/hãng và thông báo kết quả cho các bên liên quan.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Tự động chuyển task cho Phòng Mua sau khi Sales AM đã xác nhận dừng DV.
  - **AC2:** Phòng Mua thực thi Suspend/Unsuspend trên trang quản trị dịch vụ hãng và cập nhật trạng thái lên ERP.
  - **AC3:** Hệ thống sinh thư nháp, nhân sự duyệt gửi email thông báo kết quả dừng/khôi phục DV cho Kế toán, Sales AM, Legal.
  - **AC4:** Ghi lịch sử dừng DV: tự động yêu cầu khách đặt cọc trước khi khôi phục nếu bị dừng lần 2.

---


### 11. DC-09 (ERP Node ID: 1666)
* **Feature:** Feature 11: Quy trình Pháp lý & Đơn phương Chấm dứt Hợp đồng
* **Bộ phận:** Pháp lý (Legal)
* **Tên ngắn:** `DC-09: Quy trình Xử lý Pháp lý & Chấm dứt Hợp đồng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Pháp lý (Legal), tôi muốn xem danh sách khách hàng quá hạn cần lập công văn (mốc X+15) và mốc chấm dứt hợp đồng (mốc X+30), để lập công văn theo mẫu và làm thủ tục đơn phương chấm dứt hợp đồng hoặc khởi kiện đúng quy định.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Giao diện danh sách dành riêng cho bộ phận Pháp lý (Legal) xem các khách hàng quá hạn chạm mốc X+15 (cần lập công văn) và mốc X+30 (cần chấm dứt HĐ / khởi kiện).
  - **AC2:** Mẫu công văn pháp lý tự động điền (tên khách hàng, số hợp đồng, tổng nợ gốc, tiền lãi phạt) để Legal duyệt và xuất file (Word/PDF) gửi bản cứng/email cho khách.
  - **AC3:** Kích hoạt nút thực hiện đơn phương chấm dứt hợp đồng trên hệ thống và ghi nhận trạng thái hồ sơ khởi kiện vào mốc Ngày X+30.

---

### 12. DC-10 (ERP Node ID: 1668)
* **Feature:** Feature 12: Nhật ký Kiểm toán Audit Trail & Executive Dashboard Công nợ
* **Bộ phận:** Ban Quản Lý / Kế toán trưởng
* **Tên ngắn:** `DC-10: Audit Trail & Executive Dashboard Công nợ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán trưởng / Ban Quản lý, tôi muốn xem báo cáo tổng quan tình hình công nợ quá hạn của toàn công ty, tra cứu lịch sử thao tác của các bộ phận và nhận cảnh báo khi khách hàng chạm các mốc nợ khẩn cấp, để chỉ đạo xử lý kịp thời.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Nhật ký kiểm toán (Audit Trail) lưu trữ toàn bộ lịch sử quy trình thu hồi công nợ.
  - **AC2:** Executive Dashboard hiển thị tổng nợ quá hạn, số khách nợ, phân loại theo mốc giai đoạn.
  - **AC3:** Cảnh báo tự động đến các bên liên quan khi khách chạm các mốc khẩn cấp (X+4, X+15, X+30).
