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
  - **AC1:** Kế toán bấm nút "Đồng bộ dữ liệu CM" → Hệ thống gọi `POST /api/authen/login` lấy JWT, sau đó gọi `GET /api/payment-request/all` với filter `productId=GWS_COMMITTED_ID`, `status=COMPLETED`, `startDate/endDate` tương ứng kỳ cước hiện tại → Lấy DS ĐNTT đã hoàn thành từ CM.
  - **AC2:** Với mỗi payment-request từ AC1, hệ thống gọi `GET /api/payment-request/presigned?key=<document.key>` để lấy presigned URL download file .docx → Lưu thông tin file vào bảng `documents` local ERP.
  - **AC3:** Hệ thống gọi `GET /api/contract/allNotPaging` + `GET /api/contract/:id` cho từng contractId của payment-request để lấy `contract_number` (từ `legal[].contract_code`), `sign_date` (từ `legal[].sign_date`) → map vào `CONTRACTS.contract_number`, `CONTRACTS.sign_date`. Đồng thời gọi `GET /api/common/allDataSelect` để lấy `legalEntity.taxNumber` → map vào `CONTRACTS.tax_code`.
  - **AC4:** Hệ thống gọi `GET /api/customer/allNotPaging` để lấy `customer.id`, `customer.name` → map vào `CUSTOMERS.id`, `CUSTOMERS.customer_name`. Gọi `GET /api/customer/:id` để lấy `legalEntity.address` → gợi ý cho `CUSTOMERS.address` (Kế toán xác nhận trước khi lưu).
  - **AC5:** Hệ thống gọi `GET /api/user/allNotPaging` để lấy danh sách user → map `sale_owner` (email) phục vụ phân quyền màn hình Sales AM.
  - **AC6:** Hệ thống map các field từ CM response sang bảng `DEBTS` theo mapping tại `AI_docs/Database_ERD.md` mục 6.1: `paymentRequest._id` → `dntt_cm_id`, `product.name` → `product_name`, `paymentRequest.usageDate` → `billing_cycle`, `sale_owner` → `sale_owner`, `customerId` → `customer_id`, `contractIds[0]` → `contract_id`. Field `total_principal` tạm thời parse từ nội dung file .docx đã download (do CM chưa expose field này).
  - **AC7:** Kế toán chọn 1+ dòng, bấm "Tải file ĐNTT" → Hệ thống dùng presigned URL đã lưu để tải file .docx về máy. Mỗi file hiển thị đúng tên gốc từ CM (`document.name`).
  - **AC8:** Lần đầu sử dụng, Kế toán nhập `payment_term_days` (số ngày được nợ) vào `CONTRACTS` và `penalty_rate` (% lãi phạt/ngày) vào `DEBTS` qua `PATCH /api/debts/:id/config`.



### 3. BD-20 (ERP Node ID: 1653)
* **Feature:** Feature 07: Quy đổi tỷ giá, Bảng đối soát & Xử lý lệch cước
* **Bộ phận:** Kế toán trưởng / Quản trị viên
* **Tên ngắn:** `BD-20: Nhật ký kiểm toán (Audit Trail) thao tác cước, phân quyền & báo cáo kiểm toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Quản lý/Kế toán trưởng, tôi muốn hệ thống ghi nhật ký audit trail cho mọi thao tác cước, phân quyền chặt chẽ theo vai trò và tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Mọi thao tác (sync CM, đóng dấu, gửi mail, duyệt khóa...) đều tự động ghi 1 bản ghi vào `DEBT_AUDIT_LOGS`. Audit trail hiển thị được timeline của từng khoản nợ qua `GET /api/debts/:id/audit-logs`.
  - **AC2:** Phân quyền chi tiết chức năng tính cước theo vai trò người dùng (Kế toán, Sales, Admin).
  - **AC3:** Hệ thống gọi `GET /api/audit-logs` để render global audit trail trên Executive Dashboard.

---

### 4. DC-03 (ERP Node ID: 1669)
* **Feature:** Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát bản cứng
* **Bộ phận:** Kế toán doanh thu & Hành chính nhân sự (HCNS)
* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán in bản cứng ĐNTT, trình ký đóng dấu đỏ → bấm nút "Đã đóng dấu" → gọi `PATCH /api/debts/:id/delivery/stamp` (hardcopy_status=STAMPED). Hệ thống ghi audit log.
  - **AC2:** HCNS nhận phong bì, gửi chuyển phát → nhập mã vận đơn → gọi `PATCH /api/debts/:id/delivery/post` (hardcopy_status=POSTED, tracking_code). Khi khách nhận được → bấm xác nhận → gọi `PATCH /api/debts/:id/delivery/deliver` (hardcopy_status=DELIVERED, delivered_at).
  - **AC3:** Khi `PATCH /api/debts/:id/delivery/deliver` được gọi, hệ thống đọc `CONTRACTS.payment_term_days` (đã nhập ở BD-09 AC8) qua liên kết `DEBTS.contract_id`, tự động tính `ngay_x = delivered_at + payment_term_days` và cập nhật `debt_status=IN_TERM`.
  - **AC4:** **Ràng buộc:** Nút "Gửi email ĐNTT" chỉ enabled khi `hardcopy_status=DELIVERED`. Gọi `POST /api/debts/:id/send-email` → nếu chưa deliver thì trả về lỗi. Cảnh báo nếu quá 48h chưa có cập nhật.

---

### 5. DC-04 (ERP Node ID: 1659)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-04: Cảnh báo trước hạn & tự động nhắc nợ quá hạn`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu, tôi muốn khách hàng nhận email thông báo nhắc nợ trước 2 ngày khi sắp đến hạn thanh toán và tự động nhận email đôn đốc hàng ngày khi đã quá hạn (có thông báo rõ các mốc dừng dịch vụ và hủy hợp đồng), để hỗ trợ khách thanh toán đúng hạn.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Thực hiện luồng gửi email đôn đốc trước hạn (countdown) tự động kể từ khi nhận bản cứng:
    * Kể từ ngày nhận bản cứng (tại ngày `ngay_x - CONTRACTS.payment_term_days` hoặc ngay khi cập nhật `DELIVERED`) cho đến hết ngày X-3: Hệ thống tự động gọi `POST /api/debts/:id/send-email` với template `REMINDER_DELIVERED` vào lúc 08:30 hàng ngày.
    * Vào Ngày X-2: Hệ thống tự động gọi `POST /api/debts/:id/send-email` với template `REMINDER_X_MINUS_2` vào lúc 08:30.
    * Vào Ngày X-1: Hệ thống tự động gọi `POST /api/debts/:id/send-email` với template `REMINDER_X_MINUS_1` vào lúc 08:30.
    * Vào Đúng Ngày X: Hệ thống tự động gọi `POST /api/debts/:id/send-email` với template `REMINDER_X` vào lúc 08:30.
    * *(Tất cả email trên đều gửi trực tiếp đến Khách hàng và CC cho Sales AM phụ trách)*
  - **AC2:** Từ ngày `ngay_x + 1` (`debt_status=OVERDUE`), cronjob kiểm tra danh sách quá hạn hàng ngày. Kế toán duyệt → gọi `POST /api/debts/:id/send-email` với template `REMINDER_X_PLUS_1` (xem `mailTemplate/Templates.md` mục 2).
  - **AC3:** Hệ thống lên danh sách nhắc nợ hàng ngày để Kế toán duyệt gửi cho khách quá hạn (từ ngày `ngay_x + 1`).
  - **AC4:** Nội dung email render từ template: `[customer_name]`, `[total_principal]`, `[total_penalty]`, các mốc X+N.
  - **AC5:** Hỗ trợ luồng nhắc nợ tự động riêng cho GWS Committed.
  - **AC6: Ràng buộc kỹ thuật về Luồng Mail (Email Threading):** Tất cả các email gửi cho khách hàng liên quan đến cùng một khoản nợ (từ thông báo nhận bản cứng `REMINDER_DELIVERED`, các email đếm ngược trước hạn, email nhắc nợ quá hạn `REMINDER_X_PLUS_1`, đến email cảnh báo dừng dịch vụ `SUSPEND_WARNING_X_PLUS_4`) bắt buộc phải nằm chung trong **một luồng mail duy nhất (single thread)**. 
    * Backend cần lưu lại `Message-ID` của email đầu tiên được gửi đi (`REMINDER_DELIVERED`) vào trường `DEBT_COLLECTIONS.first_email_message_id`.
    * Các email gửi đi tiếp theo cho khoản nợ đó phải set header `In-Reply-To` và `References` trỏ về `Message-ID` của email đầu tiên, đồng thời tiêu đề email (Subject) phải giữ nguyên cấu trúc hoặc có tiền tố `Re:` (ví dụ: `Re: Thông báo bàn giao hồ sơ thanh toán cước tháng...`) để các trình quản lý thư (Gmail, Outlook...) nhóm chung vào 1 luồng duy nhất cho khách dễ theo dõi.

---

### 6. DC-05 (ERP Node ID: 1660)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM / Quản lý
* **Tên ngắn:** `DC-05: Cấu hình luồng nhắc nợ & tính lãi chậm thanh toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu / Quản lý, tôi muốn duyệt trước nội dung email nhắc nợ trước khi gửi cho khách và tự động tính tiền lãi chậm thanh toán cộng dồn hàng ngày theo hợp đồng, để đôn đốc công nợ chính xác.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán cấu hình luồng duyệt email (tự động gửi / tạo nháp để Kế toán duyệt và gửi) → lưu vào `DOCUMENT_TEMPLATES` qua `PUT /api/document-templates/:id`. Kế toán sẽ là người trực tiếp duyệt và thực hiện gửi email.
  - **AC2:** Cronjob hàng ngày gọi `POST /api/cron/calculate-penalty`. Công thức: `penalty_amount = penalty_rate × days_overdue × total_principal`. Insert vào `DEBT_PENALTY_LOGS`, cập nhật `DEBTS.total_penalty`.
  - **AC3:** Kế toán cấu hình `penalty_rate` riêng cho từng hợp đồng qua `PATCH /api/debts/:id/config`.

---

### 7. DC-06 (ERP Node ID: 1661)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Sales AM (Quản lý tài khoản)
* **Tên ngắn:** `DC-06: Dashboard công nợ & nhật ký đôn đốc cho Sales AM`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Sales Quản lý tài khoản (Sales AM), tôi muốn xem danh sách các khách hàng quá hạn do mình phụ trách và ghi nhận lại lịch sử đôn đốc (gọi điện, nhắn tin, ngày khách hẹn trả tiền), để phối hợp với Kế toán theo dõi và thu hồi nợ.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Dashboard gọi `GET /api/debts?debt_status=OVERDUE&sale_owner=<current_user>` để lấy danh sách khách quá hạn của Sales AM đang đăng nhập. Kèm KPI cards từ `GET /api/debts/summary`.
  - **AC2:** Sales AM bấm "Log Call" → popup ghi nhận hình thức, nội dung → gọi `POST /api/debts/:id/call-logs`. Lịch sử cũ hiển thị qua `GET /api/debts/:id/call-logs`.

---

### 8. DC-07 (ERP Node ID: 1663)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-07: Quy trình cảnh báo & phê duyệt Dừng dịch vụ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Sales AM, tôi muốn nhận thông báo cảnh báo khi khách quá hạn 4 ngày và chỉ thực hiện dừng dịch vụ khi có phê duyệt xác nhận chính thức từ Sales AM, để tránh dừng nhầm dịch vụ của khách hàng quan trọng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Vào ngày `ngay_x + 4`, cronjob gọi `POST /api/debts/:id/send-email` với template `SUSPEND_WARNING_X_PLUS_4` (xem `mailTemplate/Templates.md` mục 3). Email gửi đến khách hàng, CC Sales AM và Trưởng phòng Sales.
  - **AC2:** Sales AM vào dashboard → thấy nút "Duyệt Khóa" / "Từ chối". Bấm "Duyệt" → gọi `PATCH /api/debts/:id/suspend/approve` (suspend_status=WAITING_PROCUREMENT). Bấm "Từ chối" → gọi `PATCH /api/debts/:id/suspend/reject` (kèm lý do, suspend_status=NONE).
  - **AC3:** **Ràng buộc cứng:** Mọi API thay đổi suspend_status đều kiểm tra: nếu chưa có approve từ Sales AM thì không cho chuyển sang WAITING_PROCUREMENT. Trả về 403 nếu vi phạm.

---

### 9. DC-08 (ERP Node ID: 1664)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Phòng Mua (Procurement)
* **Tên ngắn:** `DC-08: Thực thi Dừng & Khôi phục Dịch vụ trên trang quản trị dịch vụ hãng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Phòng Mua (Procurement), tôi muốn nhận yêu cầu sau khi Sales AM đã duyệt dừng/mở dịch vụ, thao tác tạm khóa hoặc mở lại dịch vụ trên trang quản trị của Google/hãng và thông báo kết quả cho các bên liên quan.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Khi `suspend_status=WAITING_PROCUREMENT`, màn hình Phòng Mua gọi `GET /api/debts?suspend_status=WAITING_PROCUREMENT` để hiển thị danh sách yêu cầu khóa.
  - **AC2:** Phòng Mua thao tác khóa trên Google Admin Console → quay lại ERP bấm "Xác nhận đã Khóa" → gọi `PATCH /api/debts/:id/suspend/execute` (suspend_status=SUSPENDED). Tương tự cho mở: gọi `PATCH /api/debts/:id/unsuspend/execute` (suspend_status=UNSUSPENDED).
  - **AC3:** Sau khi execute, hệ thống gọi `POST /api/debts/:id/send-email` với template `SUSPEND_RESULT` (xem `mailTemplate/Templates.md` mục 7). Email gửi thông báo kết quả cho Kế toán, Sales AM, Legal.
  - **AC4:** Khi gọi `PATCH /api/debts/:id/unsuspend/request`, hệ thống kiểm tra số lần suspend trong lịch sử → nếu >= 2 thì yêu cầu khách đặt cọc trước khi mở.

---


### 11. DC-09 (ERP Node ID: 1666)
* **Feature:** Feature 11: Quy trình Pháp lý & Đơn phương Chấm dứt Hợp đồng
* **Bộ phận:** Pháp lý (Legal)
* **Tên ngắn:** `DC-09: Quy trình Xử lý Pháp lý & Chấm dứt Hợp đồng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Pháp lý (Legal), tôi muốn xem danh sách khách hàng quá hạn cần lập công văn (mốc X+15) và mốc chấm dứt hợp đồng (mốc X+30), để lập công văn theo mẫu và làm thủ tục đơn phương chấm dứt hợp đồng hoặc khởi kiện đúng quy định.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Màn hình Legal gọi `GET /api/debts?debt_status=OVERDUE&ngay_x_lte=<today-15>` để lấy DS khách quá hạn >= X+15. Tab "Chuẩn bị kiện" filter `ngay_x_lte=<today-30>`.
  - **AC2:** Legal bấm "Soạn Công văn" → hệ thống gọi `GET /api/document-templates?template_code=LEGAL_X_15` lấy template (xem `mailTemplate/Templates.md` mục 5), fill biến `[customer_name]`, `[contract_number]`, `[total_principal]`, `[total_penalty]`, `[legal_locked_penalty]` từ DB. Legal duyệt → bấm "Lưu & Xuất PDF" → gọi `POST /api/debts/:id/legal-documents` (legal_status=PREPARING, file_url, publish_date, termination_date, locked_penalty).
  - **AC3:** Vào ngày `ngay_x + 30`, cronjob gửi email nội bộ với template `SUE_NOTIFY_X_PLUS_30` (xem `mailTemplate/Templates.md` mục 6) cho Ban Giám đốc và Phòng Pháp lý. Legal bấm "Khởi kiện" → gọi `PATCH /api/debts/:id/legal-documents/:legalId/sue` (legal_status=SUED). Hệ thống ghi audit log.

---

### 12. DC-10 (ERP Node ID: 1668)
* **Feature:** Feature 12: Nhật ký Kiểm toán Audit Trail & Executive Dashboard Công nợ
* **Bộ phận:** Ban Quản Lý / Kế toán trưởng
* **Tên ngắn:** `DC-10: Audit Trail & Executive Dashboard Công nợ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán trưởng / Ban Quản lý, tôi muốn xem báo cáo tổng quan tình hình công nợ quá hạn của toàn công ty, tra cứu lịch sử thao tác của các bộ phận và nhận cảnh báo khi khách hàng chạm các mốc nợ khẩn cấp, để chỉ đạo xử lý kịp thời.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Dashboard gọi `GET /api/audit-logs` để render timeline toàn hệ thống. Mỗi dòng hiển thị: thời gian, người thực hiện, hành động, mô tả.
  - **AC2:** Dashboard gọi `GET /api/dashboard/kpi` để hiển thị 5 thẻ KPI (tổng nợ, nợ quá hạn, lãi phạt, khách bị khóa, khách bị kiện). Gọi `GET /api/dashboard/top-debt` cho bảng xếp hạng top 10. Gọi `GET /api/dashboard/charts` cho biểu đồ phân bổ.
  - **AC3:** Dashboard hiển thị cảnh báo (alert banner) khi phát hiện khoản nợ chạm mốc dựa trên `ngay_x`:
    - `ngay_x + 4`: banner đỏ "Khách hàng đến mốc X+4 — cần Sales AM duyệt khóa DV".
    - `ngay_x + 15`: banner cam "Khách hàng đến mốc X+15 — Pháp lý cần soạn công văn".
    - `ngay_x + 30`: banner đỏ "Khách hàng đến mốc X+30 — chuẩn bị hồ sơ khởi kiện".
    Người dùng bấm vào banner để chuyển đến màn hình xử lý tương ứng. Hệ thống không tự động gửi email hay thực thi hành động.
