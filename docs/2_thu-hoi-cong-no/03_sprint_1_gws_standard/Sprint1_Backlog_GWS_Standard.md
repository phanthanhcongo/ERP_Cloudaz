# Kế hoạch Sprint 1 — Luồng Ngang Google Workspace Standard (Horizontal Slice)

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Tính Cước, Đối Soát & Thu Hồi Công Nợ |
| **Phạm vi Sprint** | **Sprint 1: Full Luồng Ngang Google Workspace Standard (GWS Standard)** |
| **Ngày lập** | 2026-08-25 |
| **Tổng số User Stories** | **10 User Stories** |
| **Tổng số DoD Items** | **58 Tiêu chí nghiệm thu (Checklist)** |
| **Tệp tài liệu gốc** | `ProductBacklog_Billing_Debt_Collection_2026-08-20.md` |

---

## 🎯 MỤC TIÊU SPRINT 1
Xây dựng và kiểm thử thông suốt **100% Quy trình Thu hồi Công nợ liên phòng ban** cho sản phẩm **Google Workspace Standard (GWS Standard)** từ khâu nhận dữ liệu cước CM, đóng dấu đỏ phát bản cứng ĐNTT HCNS (ràng buộc khóa Mail), nhắc nợ tự động, Sales AM duyệt dừng dịch vụ, Phòng Mua khóa Console Google, Pháp lý xử lý công văn/khởi kiện và Executive Dashboard tổng quan.

### 🚫 NGOÀI PHẠM VI SPRINT 1 (Out of Scope)

Các hạng mục sau **được chốt loại khỏi Sprint 1**, sẽ xem xét ở Sprint sau:

| Hạng mục | Lý do loại | Ảnh hưởng |
|---|---|---|
| **Ký phát hành Hóa đơn VAT điện tử qua MISA** (cắm USB Token, kéo PDF & số hóa đơn về ERP) | Chưa có US, chưa có bảng `INVOICES` trong ERD, chưa có đặc tả tích hợp API MISA | Sprint 1 **không** đóng hồ sơ bằng hóa đơn VAT. Hồ sơ công nợ kết thúc ở bước Kế toán xác nhận đã thu đủ tiền (`debt_status = PAID`) |
| **Tạo hóa đơn nháp MISA để theo dõi nợ** | Cùng lý do trên | Việc theo dõi nợ trong Sprint 1 dựa hoàn toàn vào bảng `DEBTS` của ERP, không đối chiếu MISA |

---

## 🔧 THỨ TỰ TRIỂN KHAI TRONG SPRINT

Sprint 1 làm **trọn 10 US trong một đợt** (PO chốt, không tách 1a/1b). Nhưng chuỗi phụ thuộc nghiệp vụ là có thật — làm sai thứ tự thì nhiều US không test được vì thiếu dữ liệu đầu vào. Thứ tự dựng:

| Đợt | Nội dung | Vì sao phải trước |
|---|---|---|
| **1. Nền** | Migration toàn bộ bảng nghiệp vụ, seed role + permission, seed `debt_product_configs` + bộ template | Mọi thứ khác đứng trên đây |
| **2. Nhập liệu** | BD-09: sync CM → `PENDING_REVIEW` → Kế toán xác nhận `CONFIRMED`; nhập `payment_term_days`, `penalty_rate`, `customer_contacts` | **Không có `CONFIRMED` thì không US nào chạy được** — mọi API và job đều chặn bằng `422 FIN_DEBT_NOT_CONFIRMED` |
| **3. Mốc Ngày X** | DC-03: đóng dấu → gửi bưu điện → xác nhận phát → sinh `ngay_x`, `IN_TERM` | `ngay_x` là gốc của mọi mốc X+N phía sau |
| **4. Đồng hồ** | DC-05 AC2: job 00:05 lật `IN_TERM → OVERDUE` + cộng lãi | **Không có `OVERDUE` thì DC-04, DC-07, DC-09 đều đứng im** |
| **5. Nhắc nợ** | DC-04 + DC-05 còn lại: template, outbox, drain job, tất toán | Cần `ngay_x` và `OVERDUE` để có gì mà nhắc |
| **6. Cưỡng chế** | DC-06, DC-07, DC-08: dashboard Sales, duyệt khóa X+4, thực thi Console | Cần khoản nợ đã `OVERDUE` ≥ 4 ngày để test |
| **7. Pháp lý & Báo cáo** | DC-09, DC-10 | Cần dữ liệu quá hạn ≥ 15 ngày và cần các US trên sinh `debt_events` để dashboard có gì hiển thị |

**Hai nút thắt đáng chú ý** — nếu chậm ở đây thì cả sprint nghẽn theo:

1. **Đợt 2** — `sync_status = CONFIRMED` là cổng vào duy nhất. Chưa xong thì 8 US còn lại không có dữ liệu để chạy thử.
2. **Đợt 4** — job lật `IN_TERM → OVERDUE`. Chưa xong thì không cách nào tạo được khoản nợ quá hạn để test DC-04/07/09.

**Gợi ý cho QA:** chuẩn bị sẵn script seed dữ liệu giả với `ngay_x` lùi về quá khứ (X-1, X+5, X+16, X+31) để test các mốc mà không phải chờ thật 30 ngày.

---

## 📊 BẢNG TỔNG HỢP 10 USER STORIES TRONG SPRINT 1

| STT | Mã US | ERP Node ID | Bộ phận phụ trách | Tên ngắn User Story | Tóm tắt phạm vi |
|---|---|---:|---|---|---|
| 1 | **BD-09** | `1639` | Kế toán doanh thu | Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Standard | Kết nối danh sách CM, tự động sinh ĐNTT hàng loạt, xem chi tiết hợp đồng |
| 2 | **BD-20** | `1653` | Kế toán trưởng / Admin | Audit Trail & Phân quyền cước | Ghi nhật ký kiểm toán mọi thao tác cước & phân quyền vai trò người dùng |
| 3 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & xác định Ngày X | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ Xác định Ngày X khi phát thành công ➔ Mở khóa gửi Mail ĐNTT |
| 4 | **DC-04** | `1659` | Kế toán & Sales AM | Cảnh báo X-2 & Nhắc nợ daily | Bắn email cảnh báo trước hạn X-2 (CC AM) & tự động nhắc nợ daily từ Ngày X+1 |
| 5 | **DC-05** | `1660` | Kế toán & Sales AM | Duyệt mail nhắc nợ, Lãi phạt & Tất toán | Duyệt trước email nhắc nợ, tính lãi chậm thanh toán cộng dồn daily & xác nhận thanh toán đóng hồ sơ |
| 6 | **DC-06** | `1661` | Sales AM | Dashboard công nợ Sales AM | Dashboard công nợ khách quá hạn do AM quản lý & form ghi nhật ký đôn đốc |
| 7 | **DC-07** | `1663` | Kế toán & Sales AM | Duyệt Dừng Dịch vụ Ngày X+4 | Cron sinh yêu cầu tại X+4, cảnh báo & **ràng buộc phê duyệt bắt buộc từ Sales AM** trước khi dừng DV |
| 8 | **DC-08** | `1664` | Phòng Mua (Procurement) | Thực thi Dừng/Mở Console Google | Phòng Mua thực thi Suspend/Unsuspend trên Google Admin Console, tự sinh yêu cầu mở khóa sau tất toán & yêu cầu cọc |
| 9 | **DC-09** | `1666` | Pháp lý (Legal) | Quy trình Pháp lý & Hủy Hợp đồng | Giao diện danh sách X+15/X+30, soạn công văn X+15 & đơn phương hủy HĐ/khởi kiện X+30 |
| 10 | **DC-10** | `1668` | Ban Quản Lý / KTT | Executive Dashboard & Audit Trail | Dashboard tổng quan nợ quá hạn toàn công ty & Audit Trail quy trình công nợ |

---

## 📝 CHI TIẾT 10 USER STORIES & CHÍNH SÁCH NGHIỆM THU (DOD)

### 1. BD-09 (ERP Node ID: 1639)
* **Feature:** Feature 04: Quản lý & Tính cước Google Workspace Standard (GWS Standard)
* **Bộ phận:** Kế toán doanh thu
* **Tên ngắn:** `BD-09: Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Standard`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu, tôi muốn dễ dàng xem danh sách các khách hàng dùng gói Google Workspace Standard (GWS Standard) sắp đến đợt thanh toán, mở xem thông tin hợp đồng để đối chiếu khi cần và bấm xuất hàng loạt file Đề nghị thanh toán (Word hoặc PDF), để kịp thời gửi chứng từ thu tiền cho khách đúng hạn mà không phải soạn thủ công từng file.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán bấm nút "Đồng bộ dữ liệu CM" → Hệ thống gọi `POST /api/authen/login` lấy JWT, sau đó gọi `GET /api/payment-request/all` với `startDate/endDate` tương ứng kỳ cước hiện tại → Lấy DS ĐNTT từ CM.
    * **Không truyền `status`:** hệ thống CM **không có** trường trạng thái để ERP lọc "ĐNTT đã hoàn thành". ERP kéo về toàn bộ payment-request của kỳ cước rồi tự quản lý bằng cột `DEBTS.sync_status` (xem AC1b).
    * **Lọc theo tên dịch vụ (không dùng `productId`):** ERP **không** truyền `productId` sang CM (CM không expose endpoint lấy productId — `GET /api/product/selection` đã bỏ). Thay vào đó, sau khi nhận response, ERP lọc local theo trường `product.name` trong từng payment-request, so khớp với danh sách tên dịch vụ được cấu hình cho Sprint 1: `"GWS Standard"`.
    * Danh sách tên dịch vụ này là **cấu hình động** (không hardcode), để các Sprint sau bổ sung thêm `"GWS Flex"`, `"AWS"`, `"GCP"`… mà không cần sửa code.
    * Giá trị `product.name` sau khi lọc được lưu thẳng vào `DEBTS.product_name`; `paymentRequest.productId` vẫn được lưu vào `DEBTS.product_id` để đối chiếu ngược về CM khi cần.
  - **AC1b (Cột trạng thái đồng bộ do ERP tự quản):** Vì CM không cung cấp trường trạng thái để lọc, ERP tự quản lý bằng `DEBTS.sync_status`:
    * Mọi bản ghi mới đồng bộ về khởi tạo `sync_status = PENDING_REVIEW`, hiển thị ở tab **"Chờ xác nhận"** trên grid Kế toán.
    * Kế toán đối chiếu số tiền / kỳ cước / file ĐNTT, chọn 1 hoặc nhiều dòng rồi bấm `[✅ Xác nhận đưa vào luồng]` → `PATCH /api/v1/fin/debts/sync-status` (`sync_status = CONFIRMED`). Bấm `[🚫 Loại khỏi luồng]` (kèm lý do) → `sync_status = EXCLUDED`.
    * **Ràng buộc cứng:** chỉ bản ghi `sync_status = CONFIRMED` mới được đóng dấu ĐNTT, tính Ngày X, gửi email, tính lãi phạt và sinh yêu cầu khóa dịch vụ. Mọi API và cronjob nghiệp vụ đều kiểm tra điều kiện này trước, vi phạm → `422 FIN_DEBT_NOT_CONFIRMED`.
    * Đồng bộ lại nhiều lần **không** ghi đè `sync_status` của bản ghi đã `CONFIRMED` / `EXCLUDED` (upsert theo `dntt_cm_id`).
  - **AC2:** Với mỗi payment-request từ AC1, hệ thống gọi `GET /api/payment-request/presigned?key=<document.key>` để lấy presigned URL download file .docx → Lưu thông tin file vào bảng `DOCUMENTS` local ERP.
  - **AC3:** Hệ thống gọi `GET /api/contract/allNotPaging` + `GET /api/contract/:id` cho từng contractId của payment-request để lấy `contract_number` (từ `legal[].contract_code`), `sign_date` (từ `legal[].sign_date`) → map vào `CONTRACTS.contract_number`, `CONTRACTS.sign_date`. Đồng thời gọi `GET /api/common/allDataSelect` để lấy `legalEntity.taxNumber` → map vào `CONTRACTS.tax_code`.
  - **AC4:** Hệ thống gọi `GET /api/customer/allNotPaging` để lấy `customer.id`, `customer.name` → map vào `CUSTOMERS.id`, `CUSTOMERS.customer_name`. Gọi `GET /api/customer/:id` để lấy `legalEntity.address` → gợi ý cho `CUSTOMERS.address` (Kế toán xác nhận trước khi lưu).
  - **AC5:** Hệ thống gọi `GET /api/user/allNotPaging` để lấy danh sách user → map `sale_owner` (email) phục vụ phân quyền màn hình Sales AM.
  - **AC6:** Hệ thống map các field từ CM response sang bảng `DEBTS` theo mapping tại `wireFrame/Wireframe_DanhSachCuoc.md` mục 6.1: `paymentRequest._id` → `dntt_cm_id`, `product.name` → `product_name`, `paymentRequest.usageDate` → `billing_cycle`, `sale_owner` → `sale_owner`, `customerId` → `customer_id`, `contractIds[0]` → `contract_id`. Field `total_principal` được map trực tiếp từ trường `totalPrinciple` trong API response từ CM.
  - **AC7:** Kế toán chọn 1+ dòng, bấm "Tải file ĐNTT" → Hệ thống dùng presigned URL đã lưu để tải file .docx về máy. Mỗi file hiển thị đúng tên gốc từ CM (`document.name`).
  - **AC8:** Lần đầu sử dụng, Kế toán nhập 2 tham số cấu hình qua **2 endpoint khác nhau**:
    * `payment_term_days` (số ngày được nợ) → lưu ở bảng `CONTRACTS`, nhập qua `PATCH /api/v1/fin/contracts/:id`. Đây là **nguồn duy nhất** để tính `ngay_x`; `DEBTS` không giữ bản sao.
    * `penalty_rate` (% lãi phạt/ngày) → lưu ở bảng `DEBTS`, nhập qua `PATCH /api/v1/fin/debts/:id/config`. Lưu dạng **tỉ lệ thập phân/ngày** (0.05%/ngày → `0.0005`).
      **Không giới hạn trần** — Kế toán nhập theo đúng điều khoản phạt của hợp đồng đã ký, hệ thống chỉ chặn giá trị ≤ 0. Vượt 1%/ngày thì cảnh báo mềm và hỏi lại, không chặn lưu.
  - **AC9 (Người liên hệ nhận thư):** Vì CM không lưu email khách hàng, Kế toán phải nhập danh sách người liên hệ trên ERP trước khi hệ thống được phép gửi bất kỳ email nào:
    * Màn hình chi tiết khách hàng có khu vực "Người liên hệ nhận thư" → `GET /api/v1/fin/customers/:id/contacts`, thêm mới bằng `POST /api/v1/fin/customers/:id/contacts`, sửa bằng `PATCH /api/v1/fin/customer-contacts/:contactId`, tắt bằng `PATCH /api/v1/fin/customer-contacts/:contactId` (`is_active = false`).
    * Mỗi bản ghi gồm `contact_name`, `email` (bắt buộc, validate định dạng), `phone`, `position`, `recipient_role` (`TO` / `CC`), `is_primary`.
    * Mỗi khách hàng phải có **đúng 1** contact `is_primary = true` và **ít nhất 1** contact `recipient_role = TO` đang `is_active`.
  - **AC10 (Ràng buộc cứng — chặn gửi khi thiếu người nhận):** Mọi lời gọi `POST /api/v1/fin/debts/:id/send-email` đều kiểm tra danh sách `To` dựng theo quy tắc tại `Database_Schema.md` §4. Nếu rỗng → trả `422 FIN_DEBT_NO_RECIPIENT`, **không gửi**, không tăng `email_sent_count`. Grid Kế toán hiển thị cảnh báo đỏ *"Chưa cấu hình email liên hệ"* ở cột **Alert & Luồng xử lý** (dùng chung ô cảnh báo với *"Thiếu cấu hình lãi & hạn nợ"*).

---

### 2. BD-20 (ERP Node ID: 1653)
* **Feature:** Feature 07: Quy đổi tỷ giá, Bảng đối soát & Xử lý lệch cước
* **Bộ phận:** Kế toán trưởng / Quản trị viên
* **Tên ngắn:** `BD-20: Nhật ký kiểm toán (Audit Trail) thao tác cước, phân quyền & báo cáo kiểm toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Quản lý/Kế toán trưởng, tôi muốn hệ thống ghi nhật ký audit trail cho mọi thao tác cước, phân quyền chặt chẽ theo vai trò và tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Mọi thao tác (sync CM, đóng dấu, gửi mail, duyệt khóa...) đều tự động ghi 1 bản ghi vào `debt_events`. Audit trail hiển thị được timeline của từng khoản nợ qua `GET /api/v1/fin/debts/:id/events`.
  - **AC2 (Phân quyền — kiểm chứng được):** Module dùng lại cơ chế `roles` / `permissions` / `role_permissions` sẵn có của ERP. Seed 4 role mới (`Accountant`, `Chief Accountant`, `Procurement`, `Legal`) và 11 permission theo quy ước `debt:action` — DDL đầy đủ tại `Database_Schema.md` §15.
    * **Given** một user chỉ có role `Procurement`, **When** gọi `PATCH /api/v1/fin/debts/:id/settle`, **Then** nhận `403 FORBIDDEN_ROLE` và không có thay đổi nào trong DB.
    * **Given** một user role `Sales` (Sales AM), **When** gọi `GET /api/v1/fin/debts` không truyền `sale_owner`, **Then** kết quả **chỉ** chứa khoản nợ có `sale_owner` = email của chính user đó — backend ép ở tầng query, không tin filter từ client.
    * **Given** user role `Admin`, **Then** bỏ qua mọi kiểm tra permission (hành vi sẵn có của nền tảng).
    * Ma trận role ↔ permission đầy đủ: `ERP_Platform_Integration.md` §3.4.
  - **AC3:** Hệ thống gọi `GET /api/v1/fin/debts/events` để render global audit trail trên Executive Dashboard.

---

### 3. DC-03 (ERP Node ID: 1669)
* **Feature:** Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát bản cứng — *(Sprint 1 chỉ triển khai phần **ĐNTT & Chuyển phát bản cứng**; phần Hóa đơn VAT/MISA nằm ngoài phạm vi, xem mục "Ngoài phạm vi Sprint 1")*
* **Bộ phận:** Kế toán doanh thu & Hành chính nhân sự (HCNS)
* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán in bản cứng ĐNTT, trình ký đóng dấu đỏ → bấm nút "Đã đóng dấu" → gọi `PATCH /api/v1/fin/debts/:id/delivery/stamp` (hardcopy_status=STAMPED). Hệ thống ghi audit log và gửi notification cho HCNS sang nhận thư đi gửi bưu điện.
    * **Ràng buộc:** chỉ thao tác được khi `sync_status = CONFIRMED` (BD-09 AC1b), vi phạm → `422 FIN_DEBT_NOT_CONFIRMED`.
  - **AC2:** HCNS nhận phong bì, gửi chuyển phát → nhập mã vận đơn → gọi `PATCH /api/v1/fin/debts/:id/delivery/post` (hardcopy_status=POSTED, tracking_code). Khi khách nhận được → bấm xác nhận → gọi `PATCH /api/v1/fin/debts/:id/delivery/deliver` (hardcopy_status=DELIVERED, delivered_at, **receiver_name** — người ký nhận, dùng cho biến `[receiver_name]` trong template mail).
  - **AC3:** Khi `PATCH /api/v1/fin/debts/:id/delivery/deliver` được gọi, hệ thống đọc `CONTRACTS.payment_term_days` (đã nhập ở BD-09 AC8) qua liên kết `DEBTS.contract_id`, tự động tính `ngay_x = delivered_at + payment_term_days`, cập nhật `debt_status=IN_TERM` và ghi `debt_events` với `action_type = 'NGAY_X_SET'`.
  - **AC4:** **Ràng buộc:** Nút "Gửi email ĐNTT" chỉ enabled khi `hardcopy_status=DELIVERED`. Gọi `POST /api/v1/fin/debts/:id/send-email` → nếu chưa deliver thì trả về `422 FIN_DEBT_HARDCOPY_NOT_DELIVERED`. Cảnh báo nếu quá 48h chưa có cập nhật.

---

### 4. DC-04 (ERP Node ID: 1659)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-04: Cảnh báo trước hạn & tự động nhắc nợ quá hạn`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu, tôi muốn khách hàng nhận email thông báo nhắc nợ trước 2 ngày khi sắp đến hạn thanh toán và tự động nhận email đôn đốc hàng ngày khi đã quá hạn (có thông báo rõ các mốc dừng dịch vụ và hủy hợp đồng), để hỗ trợ khách thanh toán đúng hạn.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Thực hiện luồng gửi email đôn đốc trước hạn (countdown) tự động kể từ khi nhận bản cứng:
    Việc gửi do **`DebtReminderSweepJob`** (Go background job, chạy 08:30) thực hiện — job **chỉ enqueue**, không gọi HTTP. Drain job riêng mới thực sự gửi. Xem `ERP_API.md` mục *Background job*.

    * Kể từ ngày nhận bản cứng (tại ngày `ngay_x - CONTRACTS.payment_term_days` hoặc ngay khi cập nhật `DELIVERED`) cho đến hết ngày X-3: enqueue template `REMINDER_DELIVERED`.
    * Vào Ngày X-2: enqueue `REMINDER_X_MINUS_2`.
    * Vào Ngày X-1: enqueue `REMINDER_X_MINUS_1`.
    * Vào Đúng Ngày X: enqueue `REMINDER_X`.
    * *(Tất cả email trên đều gửi trực tiếp đến Khách hàng và CC cho Sales AM phụ trách)*
    * **Ràng buộc tần suất — tối đa 1 email/ngày cho mỗi khoản nợ:** Backend kiểm tra trước khi gửi, nếu khoản nợ đó **đã có email gửi đi trong ngày hôm nay** thì bỏ qua, trả `429 FIN_DEBT_EMAIL_RATE_LIMIT`. Áp dụng cho **toàn bộ** email của luồng công nợ (trước hạn, quá hạn, cảnh báo khóa), tính chung một hạn mức — kể cả khi nhiều điều kiện cùng khớp trong 1 ngày, hoặc Kế toán gửi tay sau khi cron đã gửi tự động.
    * **Thứ tự ưu tiên khi nhiều template cùng khớp trong một ngày:** `SUSPEND_WARNING_X_PLUS_4` > `REMINDER_X_PLUS_1` > `REMINDER_X` > `REMINDER_X_MINUS_1` > `REMINDER_X_MINUS_2` > `REMINDER_DELIVERED`. Chỉ template ưu tiên cao nhất được gửi.
  - **AC2:** Từ ngày `ngay_x + 1` (`debt_status=OVERDUE`), `DebtReminderSweepJob` quét danh sách quá hạn hàng ngày và enqueue template `REMINDER_X_PLUS_1` (xem `mailTemplate/reminder_x_plus_1.gohtml`). Nếu template cấu hình `approval_mode = MANUAL` thì job **chỉ tạo nháp**, Kế toán duyệt rồi bấm gửi tay qua `POST /api/v1/fin/debts/:id/send-email`.
  - **AC3:** Hệ thống lên danh sách nhắc nợ hàng ngày để Kế toán duyệt gửi cho khách quá hạn (từ ngày `ngay_x + 1`).
  - **AC4:** Nội dung email render từ template: `[customer_name]`, `[total_principal]`, `[total_penalty]`, các mốc X+N.
  - **AC5 (Kịch bản kiểm thử đầu-cuối luồng nhắc nợ):** Viết lại ở dạng Given/When/Then để QA kiểm chứng được:
    * **Given** một khoản nợ GWS Standard có `sync_status = CONFIRMED`, `payment_term_days = 7`, `penalty_rate = 0.0005`, có ít nhất 1 contact `recipient_role = TO`, và HCNS xác nhận phát bản cứng ngày `01/09`
    * **When** hệ thống chạy cron 08:30 mỗi ngày từ `01/09` đến `12/09`
    * **Then** khách nhận đúng **1 email mỗi ngày**, đúng template theo mốc:

      | Ngày | Template | Kiểm chứng |
      |---|---|---|
      | 01/09 – 05/09 | `REMINDER_DELIVERED` | `ngay_x = 08/09`; mỗi ngày đúng 1 bản ghi `debt_email_logs` với `send_status = 'sent'` |
      | 06/09 | `REMINDER_X_MINUS_2` | |
      | 07/09 | `REMINDER_X_MINUS_1` | |
      | 08/09 | `REMINDER_X` | `debt_status` vẫn là `IN_TERM`, `total_penalty = 0` |
      | 09/09 | `REMINDER_X_PLUS_1` | `debt_status` chuyển `OVERDUE`; `total_penalty > 0` |
      | 12/09 | `SUSPEND_WARNING_X_PLUS_4` | `suspend_status` chuyển `WAITING_SALES` lúc 08:25 |

    * **And** toàn bộ email nằm trong **1 luồng thư duy nhất** — mọi email từ email thứ hai trở đi có header `In-Reply-To` trỏ về `Message-ID` của thư **liền trước** và `References` chứa cả chuỗi từ thư gốc (AC6)
    * **And** nếu Kế toán bấm tất toán ngày `10/09` thì **không** còn email nào được gửi từ `11/09` trở đi, và `total_penalty` giữ nguyên giá trị của ngày `10/09`
    * **And** nếu khách hàng chưa có contact `TO` thì không email nào được gửi, `debt_email_logs.send_status = 'skipped'`, grid hiện cảnh báo đỏ "Chưa cấu hình email liên hệ"
  - **AC6: Luồng thư duy nhất cho trọn kỳ thu tiền — ràng buộc cứng.**

    **Phạm vi luồng:** một luồng thư = **một khoản nợ** = một khách hàng × một kỳ cước × một hợp đồng.

    > **Bất biến — viết một lần, áp cho cả Sprint sau:**
    >
    > Mọi email **gửi khách hàng** về khoản nợ này đều phải qua `debt_email_logs` và đúng trình tự threading — **không trừ template nào, không có đường gửi thứ hai.** Thêm template gửi khách ở Sprint sau chỉ việc chọn `mail_track`, không cần sửa luật nào khác.
    >
    > Email **nội bộ** (`LEGAL_NOTIFY_X_PLUS_15`, `SUE_NOTIFY_X_PLUS_30`, `SUSPEND_REJECTED`, `SUSPEND_RESULT`, `DRAFT_PENDING_DIGEST`) **không bao giờ** vào luồng của khách — nội dung trong đó là trao đổi nội bộ về việc chuẩn bị hồ sơ kiện.

    | Thứ tự | Template | Làn | Giai đoạn |
    |---|---|---|---|
    | 1 | `REMINDER_DELIVERED` | `REMINDER` | Giao hồ sơ *(email gốc thread)* |
    | 2 | `REMINDER_X_MINUS_2` · `REMINDER_X_MINUS_1` · `REMINDER_X` | `REMINDER` | Đếm ngược trước hạn |
    | 3 | `REMINDER_X_PLUS_1` | `REMINDER` | Nhắc quá hạn, lặp hằng ngày |
    | 4 | `SUSPEND_WARNING_X_PLUS_4` | `REMINDER` | Cảnh báo khóa DV |
    | 5 | **`LEGAL_DOC_COVER`** | **`LEGAL`** | **Thư ngỏ kèm PDF công văn đã ký** |
    | 6 | `SUSPEND_NOTICE_CUSTOMER` | `REMINDER` | Đã khóa dịch vụ |
    | 7 | `UNSUSPEND_NOTICE_CUSTOMER` | `REMINDER` | Đã khôi phục dịch vụ |
    | 8 | `PAYMENT_CONFIRMED` | `REMINDER` | Tất toán *(email đóng thread)* |

    Khách mở hộp thư chỉ thấy **một cuộc hội thoại** chứa trọn quá trình — kể cả công văn pháp lý — thay vì mươi email rời rạc trùng tiêu đề. Khách không cãi được *"tôi không nhận được thông báo nào"*.

    **Hai làn, một luồng.** Làn `REMINDER` do job soạn và Kế toán duyệt; làn `LEGAL` do Pháp lý soạn và **chỉ Pháp lý** duyệt. Hai làn có luật phân quyền, hạn mức và hết hạn khác nhau nhưng nằm chung một luồng thư. Bảng luật đầy đủ: `Database_Schema.md` mục *Hai làn thư*.

    * **Công văn không bị hạn mức 1 thư/ngày.** Ngày X+15 khách có thể nhận cả `REMINDER_X_PLUS_1` buổi sáng lẫn công văn khi Pháp lý bấm gửi — hai làn độc lập, cùng nằm trong một hội thoại.
    * **Tiêu đề công văn là `Re: [thread_subject]`.** Giá trị pháp lý nằm ở nội dung và chữ ký trong PDF đính kèm, không ở tiêu đề email.

    **Cách cài đặt — CloudAZ dùng Gmail, phải thỏa đủ 3 điều kiện của Google:**

    | Điều kiện Gmail | Cột lưu | Cách làm |
    |---|---|---|
    | `Subject` khớp | `DEBT_COLLECTIONS.thread_subject` | Thư đầu render tiêu đề rồi **lưu lại**; thư sau dùng `"Re: " + thread_subject` |
    | Header `In-Reply-To` | `DEBT_EMAIL_LOGS.parent_message_id` | `Message-ID` của thư liền trước trong luồng |
    | Header `References` | dựng lúc gửi từ các hàng `sent`, lưu vết ở `references_chain` | Chuỗi `Message-ID` theo `sequence_step`; quá 20 ID thì giữ **ID đầu + 19 ID gần nhất** |
    | Vị trí trong luồng | `DEBT_EMAIL_LOGS.sequence_step` | Gán **lúc gửi** = `MAX+1` của các hàng `sent` cùng `debt_id`. **Không giới hạn số bước** |
    | Đúng `threadId` | `gmail_thread_id` | Lưu `threadId` Gmail trả về, truyền lại ở các thư sau |

    * **Lấy tiêu đề từ cột, KHÔNG render lại từ template.** Admin có quyền sửa `document_templates` bất cứ lúc nào — sửa xong thì tiêu đề render ra khác tiêu đề cũ, Gmail tách luồng mà không ai biết nguyên nhân.
    * **Mỗi template có `subject` riêng nhưng chỉ dùng cho email nội bộ.** Email gửi khách luôn dùng `thread_subject`. Nếu để mỗi thư dùng tiêu đề của template mình — `REMINDER_DELIVERED` và `REMINDER_X_PLUS_1` vốn khác hẳn nhau — thì luồng vỡ ngay từ thư thứ hai.
    * `thread_subject` chỉ ghi được khi `first_email_message_id IS NULL`. Đã gửi thư đầu là **khóa vĩnh viễn**.
    * **`Message-ID` phải đọc lại từ response của Gmail.** Gmail **ghi đè** ID tự sinh — lưu ID tự sinh thì `In-Reply-To` thư sau trỏ vào ID không tồn tại, luồng vỡ trong khi log vẫn báo gửi thành công. Chỉ phát hiện được khi kiểm trên Gmail thật.
    * **Chống gửi trùng bằng compare-and-swap** `UPDATE … WHERE id = ? AND send_status = 'draft'`; `rowcount = 0` thì dừng. Hai người cùng bấm gửi, hoặc worker retry, đều chỉ ra một thư.
    * **`sequence_step` gán lúc gửi, không phải lúc soạn nháp** — nháp `expired`/`cancelled` không chiếm số, nên `sequence_step` luôn khớp vị trí thật trong `References`.

    Chi tiết cột và trình tự 7 bước gửi: `Database_Schema.md` mục *Ba cơ chế bảo đảm luồng thư đúng chuẩn RFC* và *Trình tự gửi một thư*.

    **Ba chốt chặn không cho lệch:**
    1. Popup xem trước hiện tiêu đề **chỉ đọc**, không có nút sửa.
    2. `PATCH /emails/drafts/:id` chỉ nhận `body`; gửi kèm `subject` → `400`.
    3. Trước khi gửi, kiểm `subject == "Re: " + thread_subject` → sai thì `409`. Chốt cuối phòng lỗi lập trình.

    **Mức độ khẩn cấp không nằm ở tiêu đề.** Bỏ `[KHẨN]` / `[CẢNH BÁO]` khỏi Subject, chuyển thành dòng đầu thân thư in đậm có màu, cộng header `Importance: high` + `X-Priority: 1`. Gmail hiện dấu quan trọng và lấy dòng đầu thân thư làm đoạn xem trước ngay cạnh tiêu đề — thực tế dễ thấy hơn tiền tố trong Subject.

    **Kiểm thử bắt buộc trên Gmail thật.** Việc thư có nằm chung luồng hay không **không unit test được** — phải gửi đủ 7 loại thư cho một khoản nợ rồi mở Gmail của khách xem có đúng **một** cuộc hội thoại không.

    **Không gộp chung thread giữa các kỳ cước.** Kỳ 08/2026 và kỳ 09/2026 của cùng khách là **hai luồng riêng** — vì mỗi kỳ có Ngày X, số tiền và vòng đời riêng. Gộp lại thì khách không phân biệt được đang nói về kỳ nào.

    **Email nội bộ** (`SUSPEND_REJECTED`, `SUSPEND_RESULT`, `LEGAL_NOTIFY_X_PLUS_15`, `SUE_NOTIFY_X_PLUS_30`) **không** nằm trong thread của khách — người nhận khác nhau hoàn toàn.
  - **AC7 (Người nhận):** Danh sách `To` / `CC` của mọi email trong US này được dựng từ bảng `CUSTOMER_CONTACTS` theo quy tắc tại `Database_Schema.md` §4 (`To` = contact `recipient_role = TO`; `CC` = contact `recipient_role = CC` + email Sales AM từ `DEBTS.sale_owner`). Nếu `To` rỗng → `422 FIN_DEBT_NO_RECIPIENT`, không gửi (xem BD-09 AC10).
  - **AC8 (Điều kiện dừng nhắc nợ):** Mọi cronjob gửi email trong US này **bỏ qua** các khoản nợ có `debt_status = PAID` hoặc `paid_at != null`. Khách đã thanh toán không nhận thêm bất kỳ email nhắc nợ nào kể từ thời điểm Kế toán bấm tất toán.
  - **AC10 (Soạn nháp — người duyệt mới gửi): HỆ THỐNG KHÔNG TỰ GỬI EMAIL CHO KHÁCH.**

    Mọi email gửi khách hàng đều đi qua **hai bước tách rời**:

    | Bước | Ai làm | Kết quả |
    |---|---|---|
    | **1. Soạn nháp** | `DebtReminderSweepJob` 08:30 | Tạo bản ghi `debt_email_logs` với `send_status = 'draft'`, đã render sẵn `subject` + `body` với số liệu của ngày hôm đó |
    | **2. Duyệt và gửi** | **Kế toán** *(email nhắc nợ)* · **Legal** *(email pháp lý)* | Bấm gửi → `queued` → drain job đẩy đi → `sent` |

    **Vì sao không cho máy tự gửi:** email nhắc nợ mang số tiền và mốc pháp lý gửi thẳng tới khách hàng doanh nghiệp. Một con số sai hoặc một khách đang có thỏa thuận riêng với Sales mà vẫn bị đòi nợ tự động là sự cố thật, không phải lỗi kỹ thuật. Người ký tên chịu trách nhiệm phải nhìn trước khi thư rời khỏi hệ thống.

    **Màn hình "Hộp thư chờ gửi"** *(tab mới trên grid Kế toán — xem `Wireframe_DanhSachCuoc.md` mục Tab "Hộp thư chờ gửi")*:
    * Danh sách nháp của ngày hôm nay, nhóm theo giai đoạn (`stage_label`)
    * Mỗi dòng: khách hàng · hợp đồng · loại thư · tổng nợ · nút `[👁️ Xem trước]`
    * **Chọn nhiều dòng bằng checkbox → `[📤 Gửi các thư đã chọn]`** — gọi `POST /api/v1/fin/debts/emails/send-batch`
    * Nút `[📤 Gửi tất cả]` cho trường hợp đã rà xong toàn bộ

    **Xem trước và sửa:** bấm `[👁️ Xem trước]` mở popup hiển thị đúng nội dung sẽ gửi, người duyệt **sửa được phần thân** (`body`) trước khi gửi. **Không sửa được Subject** — vì Subject quyết định việc thư có nằm đúng luồng hay không (AC6).

    **Ghi nhận trách nhiệm:** khi bấm gửi, hệ thống ghi `approved_by` = email người duyệt và `approved_at`. Ràng buộc ở tầng DB chặn mọi bản ghi `queued`/`sent` mà không có `approved_by`.

    **Nháp hết hạn theo ngày:** nháp không được gửi trong ngày `prepared_for` sẽ chuyển `expired` lúc 00:05 hôm sau, và job soạn nháp mới với số liệu cập nhật. *Lý do: nháp đã render sẵn tiền lãi tính đến ngày soạn — để qua hôm sau mới gửi là gửi con số sai.*

    **Chủ động bỏ một nháp:** người duyệt bấm `[🚫 Bỏ thư này]`, nhập lý do ≥ 10 ký tự → `PATCH /debts/emails/drafts/:id/cancel`, thư chuyển `cancelled`, ghi `debt_events` (`EMAIL_CANCELLED`). Dùng khi khách vừa hứa trả hoặc nội dung đã lỗi thời. **Ba trạng thái không-gửi phân biệt rạch ròi:** `expired` = job tự dọn · `skipped` = hệ thống chặn (thiếu contact, vi phạm luật 1 thư/ngày) · `cancelled` = **người quyết định, có lý do, có tên**.

    **Gửi trùng bị chặn ở tầng DB:** chuyển `draft` → `queued` bằng compare-and-swap `WHERE id = ? AND send_status = 'draft'`. Hai người cùng bấm gửi một danh sách, hoặc worker retry sau timeout, đều chỉ ra đúng một thư — bản ghi thứ hai nhận `rowcount = 0` và dừng.

    **Hệ quả vận hành:** không ai vào duyệt thì **không email nào được gửi ngày hôm đó**. Đây là đánh đổi có chủ ý — an toàn hơn nhưng đòi hỏi thao tác mỗi ngày. Hệ thống bù bằng **3 lớp nhắc việc**:

    | Lớp | Khi nào | Hình thức |
    |---|---|---|
    | **Badge đỏ** trên tab "Hộp thư chờ gửi" | Cả ngày, ngay khi vào màn hình | Số thư chờ duyệt |
    | **Banner đầu grid** | Sáng: **cam** *"Có N thư chờ duyệt gửi hôm nay"*<br>**Sau 16:00: đỏ** *"Còn N thư chưa gửi. Nháp hết hạn lúc 00:05 — sau đó phải chờ tới sáng mai."* | Cảnh báo tăng dần theo giờ |
    | **Email `DRAFT_PENDING_DIGEST`** 08:35 | Ngay sau khi job soạn nháp xong | Xem AC12 |

  - **AC12 (Email nhắc duyệt hằng ngày):** 08:35 mỗi sáng, sau khi `DebtReminderSweepJob` chạy xong, hệ thống gửi template `DRAFT_PENDING_DIGEST` **theo từng làn**: Kế toán doanh thu nhận bản đếm làn `REMINDER`, Phòng Pháp lý nhận bản đếm làn `LEGAL`. Cùng template, khác người nhận và khác số đếm.
    * **Gộp hai thông tin trong một thư:** số thư chờ duyệt **hôm nay** (chia theo giai đoạn), và danh sách thư **hôm qua chưa duyệt đã hết hạn** kèm tên khách hàng, hợp đồng, số ngày quá hạn. *(Bản của Pháp lý không có phần thứ hai — nháp làn `LEGAL` không hết hạn; thay vào đó nêu số ngày công văn đã nằm chờ, vì mỗi ngày chậm là mốc khởi kiện lùi một ngày.)*
    * **CC Kế toán trưởng** khi số thư hết hạn hôm qua **≥ 5**, hoặc khi **bỏ sót từ ngày thứ 2 liên tiếp** — để việc bỏ quên nhiều ngày không nằm im ở một người.
    * **Chỉ gửi khi có việc.** Không có nháp chờ duyệt và không có thư hết hạn thì không gửi. *Lý do: thư rỗng gửi mỗi sáng sẽ khiến người ta ngừng đọc, đúng lúc cần đọc nhất thì bỏ qua.*
    * Thư nêu rõ hậu quả: *"N khách hàng đã không nhận được thư nhắc nợ hôm qua"* — với các khoản sắp tới mốc khóa dịch vụ hoặc mốc pháp lý, thiếu một lần nhắc có thể ảnh hưởng tới cơ sở pháp lý khi đối chất.

  - **AC11 (Email pháp lý do Legal duyệt):** Thư thuộc luồng pháp lý cũng theo cơ chế nháp ở AC10, nhưng **người duyệt là Phòng Pháp lý**, không phải Kế toán. Phân biệt bằng `mail_track` + permission: `debt:send_email` cho làn `REMINDER`, **`debt:legal` cho làn `LEGAL`** — chi tiết cách áp ở cả 4 endpoint tại DC-09 AC2c.
    * `LEGAL_DOC_COVER` — thư ngỏ gửi khách kèm PDF công văn, `mail_track = LEGAL`, **nằm chung luồng thư** của khách (AC6).
    * `LEGAL_NOTIFY_X_PLUS_15`, `SUE_NOTIFY_X_PLUS_30` — email **nội bộ**, tiêu đề riêng, **không** vào luồng của khách.
    * `LEGAL_X_15` — công văn `template_type = LEGAL_DOC`, xuất PDF chứ không phải email.

  - **AC9 (Ba kênh thông báo — áp dụng cho toàn bộ Sprint 1):** Mọi chỗ tài liệu ghi "gửi thông báo" / "đẩy notification" cho **người dùng nội bộ** đều hiểu là **3 kênh**, dùng nguyên cơ chế ERP đã có, không viết mới:
    * **In-app** — `notif.Create(...)`, hiện ở chuông 🔔 sẵn có của ERP
    * **Lark** — `lark.SendCard(...)`, dùng chung credentials và `LarkNotifier` của nền tảng
    * **Email** — chỉ với các sự kiện đã có template (`SUSPEND_REJECTED`, `LEGAL_NOTIFY_X_PLUS_15`, `SUE_NOTIFY_X_PLUS_30`, `SUSPEND_RESULT`)

    **Hai khuôn gửi:** hành động do **người dùng bấm nút** thì gọi thẳng trong service (theo `ticket_service.go:309,324`); **job nền quét hàng loạt** thì enqueue vào `debt_reminder_outbox` rồi drain job riêng gửi — vì job chạy trong advisory lock, gọi Lark đồng bộ sẽ giữ lock suốt thời gian chờ mạng.

    **Bốn quy tắc bắt buộc:** không tự thông báo cho chính mình (`target == actor` thì bỏ qua) · fire-and-forget, lỗi thông báo không làm hỏng nghiệp vụ · Lark degrade-only · lấy email người nhận qua `userRepo.GetByID`.

    Danh mục `notifications.type`, người nhận và nội dung: `ERP_Platform_Integration.md` mục *Danh mục thông báo* và *Cách gửi*.

---

### 5. DC-05 (ERP Node ID: 1660)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Kế toán doanh thu & Sales AM / Quản lý
* **Tên ngắn:** `DC-05: Cấu hình luồng nhắc nợ, tính lãi chậm thanh toán & Tất toán`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán doanh thu / Quản lý, tôi muốn duyệt trước nội dung email nhắc nợ trước khi gửi cho khách, tự động tính tiền lãi chậm thanh toán cộng dồn hàng ngày theo hợp đồng và xác nhận khi khách đã thanh toán để đóng hồ sơ công nợ.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kế toán cấu hình luồng duyệt email (tự động gửi / tạo nháp để Kế toán duyệt và gửi) → lưu vào `DOCUMENT_TEMPLATES.approval_mode` qua `PUT /api/v1/fin/document-templates/:id`. Kế toán sẽ là người trực tiếp duyệt và thực hiện gửi email.
  - **AC2 (Chuyển trạng thái quá hạn & cộng lãi ngay khi sang ngày mới):** Job **`DebtPenaltyJob`** chạy lúc **00:05 hàng ngày** — ngay khi qua ngày mới, không chờ đến giờ hành chính. Job làm **hai việc, theo đúng thứ tự**:

    **Bước 1 — Chuyển trạng thái:** quét mọi khoản nợ có `sync_status = CONFIRMED`, `debt_status = IN_TERM`, `paid_at IS NULL` và `today > ngay_x` → chuyển `debt_status = OVERDUE`, ghi `debt_events` (`action_type = BECAME_OVERDUE`).
    *Đây là **bước duy nhất** đưa `IN_TERM → OVERDUE`. Thiếu nó thì toàn bộ chuỗi quá hạn không bao giờ khởi động: job tính lãi, job sinh yêu cầu khóa và email `REMINDER_X_PLUS_1` đều lọc theo `debt_status = OVERDUE`.*

    **Ranh giới ngày X — điều kiện là `today > ngay_x`, KHÔNG phải `>=`.** Ngày X là **hạn chót**, khách có trọn ngày hôm đó để trả. Sang 00:05 của ngày X+1 mới tính là quá hạn.

    | Ngày | `debt_status` | `days_overdue` | `total_penalty` |
    |---|---|---|---|
    | X-1 | `IN_TERM` | — | `0` |
    | **X** (hạn chót) | `IN_TERM` | — | `0` |
    | **X+1** (00:05) | **`OVERDUE`** | `1` | `penalty_rate × 1 × total_principal` |
    | X+2 (00:05) | `OVERDUE` | `2` | `penalty_rate × 2 × total_principal` |

    Khớp với DC-04 AC1: ngày X vẫn gửi `REMINDER_X` (giọng nhắc nhở, chưa có lãi), từ X+1 mới gửi `REMINDER_X_PLUS_1` (có số tiền phạt). Dùng nhầm `>=` sẽ tính khách quá hạn ngay trong ngày hạn chót — vừa sai hợp đồng vừa mất uy tín khi khách đã chuyển tiền đúng hạn.

    **Bước 2 — Cộng lãi:** với mọi khoản `debt_status = OVERDUE` và `paid_at IS NULL`:
    ```
    days_overdue       = today - ngay_x
    daily_amount       = penalty_rate × total_principal
    accumulated_amount = penalty_rate × days_overdue × total_principal
    ```
    Insert `DEBT_PENALTY_LOGS`, cập nhật `DEBTS.total_penalty = accumulated_amount`.

    **Vì sao 00:05 chứ không phải 08:00:** lãi chậm trả tính theo **ngày lịch** theo hợp đồng. Qua 0h là khách đã nợ thêm một ngày — số dư phải phản ánh đúng ngay lúc đó, không phải chờ tới giờ làm việc. Nếu để 08:00 thì suốt 8 tiếng đầu ngày mọi màn hình, dashboard và cả công văn pháp lý xuất trong khoảng đó đều hiển thị số tiền **thiếu một ngày lãi**.
    Chọn 00:05 thay vì 00:00 để chắc chắn ngày đã lật hẳn theo múi giờ `Asia/Ho_Chi_Minh`, tránh lỗi sát mốc.

    **Chạy bù & idempotent:** công thức tính theo `days_overdue` tuyệt đối, không cộng dồn tăng dần — nên server chết vài ngày rồi chạy lại vẫn ra đúng số. `UNIQUE (debt_id, calculated_date)` chặn ghi trùng ở tầng DB.

    **Chạy lại sau khi đồng bộ:** `DebtCMSyncJob` (07:45) gọi lại `DebtPenaltyJob.RunOnce` sau khi sync xong, phòng trường hợp có khoản nợ mới đồng bộ về đã quá hạn sẵn. Chạy lại trong cùng ngày là vô hại nhờ ràng buộc `UNIQUE` ở trên.
  - **AC3:** Kế toán cấu hình `penalty_rate` riêng cho từng khoản nợ qua `PATCH /api/v1/fin/debts/:id/config`. Lưu dạng tỉ lệ thập phân/ngày (0.05%/ngày → `0.0005`).
  - **AC4 (Xác nhận thanh toán & Tất toán):** Kế toán bấm nút `[💲 Tất toán]` trên grid → popup nhập:
    * `paid_at` (DatePicker, mặc định hôm nay, **không được lớn hơn ngày hiện tại**)
    * `paid_amount` (số tiền thực thu)
    * Ảnh UNC / minh chứng chuyển khoản (upload, tùy chọn)
    * Ghi chú (tùy chọn)

    Bấm Lưu → gọi `PATCH /api/v1/fin/debts/:id/settle` → hệ thống set `DEBTS.paid_at`, `DEBTS.paid_amount`, `DEBTS.debt_status = PAID`, ghi 1 bản ghi `debt_events` (`action_type = SETTLED`) kèm `file_url` ảnh UNC và ghi chú.

    **Gửi email xác nhận cho khách:** sau khi lưu thành công, hệ thống gửi template `PAYMENT_CONFIRMED` (Templates mục 10) cho khách hàng, CC Sales AM — nêu ngày nhận tiền, số tiền, phần gốc và phần lãi, và xác nhận **lãi ngừng phát sinh** kể từ `paid_at`. Email này **kết thúc luồng thư** của khoản nợ, vẫn giữ header `In-Reply-To` để nằm chung thread.
    *Không có email này thì luồng thư kết thúc đột ngột: khách bị nhắc nợ mỗi ngày, trả tiền xong thì im lặng, và không có bằng chứng CloudAZ đã ghi nhận khoản thanh toán.*

    **Ràng buộc:**
    * **Bắt buộc thu đủ 100%:** nếu `paid_amount < total_principal + total_penalty` → trả `422 FIN_DEBT_INSUFFICIENT_PAYMENT` kèm `shortfall` (số tiền còn thiếu), **không** cho tất toán. Hệ thống **không hỗ trợ thanh toán một phần (partial payment)** trong Sprint 1 — khoản nợ giữ nguyên `OVERDUE`, lãi phạt tiếp tục cộng dồn cho tới khi thu đủ.
    * Popup hiển thị sẵn số tiền phải thu và **disable nút Lưu** khi `paid_amount` chưa đủ, kèm dòng cảnh báo *"Còn thiếu X VNĐ — chưa đủ điều kiện tất toán"*.
    * Chỉ role Kế toán / Kế toán trưởng được gọi (vi phạm → `403`); nếu `debt_status` đã là `PAID` → `409 FIN_DEBT_ALREADY_SETTLED`.
  - **AC5 (Điều kiện dừng tính lãi):** Cronjob **`DebtPenaltyJob`** (Go background job, không phải HTTP endpoint) **bỏ qua** mọi bản ghi có `debt_status = PAID` hoặc `paid_at != null`. Tiền lãi phạt dừng cộng dồn tại `paid_at`; `DEBTS.total_penalty` giữ nguyên giá trị chốt tại thời điểm tất toán và không bị cron ghi đè về sau.
    * **Đây là điều kiện dừng duy nhất.** Khoản nợ đã chuyển Pháp lý (`legal_status = PREPARING` / `SENT` / `SUED`) **vẫn tiếp tục tính lãi bình thường** — `DEBT_LEGAL_ACTIONS.locked_penalty` chỉ là ảnh chụp tại ngày ký công văn để in vào văn bản, không làm dừng cron.
    * Hệ quả: sau khi phát hành công văn, số dư nợ thực tế sẽ lớn hơn con số ghi trong công văn theo từng ngày. Đúng nghiệp vụ — công văn đã ghi rõ *"tính đến ngày `[legal_publish_date]`"*.

---

### 6. DC-06 (ERP Node ID: 1661)
* **Feature:** Feature 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM
* **Bộ phận:** Sales AM (Quản lý tài khoản)
* **Tên ngắn:** `DC-06: Dashboard công nợ & nhật ký đôn đốc cho Sales AM`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Sales Quản lý tài khoản (Sales AM), tôi muốn xem danh sách các khách hàng quá hạn do mình phụ trách và ghi nhận lại lịch sử đôn đốc (gọi điện, nhắn tin, ngày khách hẹn trả tiền), để phối hợp với Kế toán theo dõi và thu hồi nợ.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Dashboard gọi `GET /api/v1/fin/debts?debt_status=OVERDUE&sale_owner=<current_user>` để lấy danh sách khách quá hạn của Sales AM đang đăng nhập. Kèm KPI cards từ `GET /api/v1/fin/debts/summary`. **Backend ép điều kiện `sale_owner` ở tầng query**, không tin filter từ client.
  - **AC2:** Sales AM bấm "Log Call" → popup ghi nhận hình thức, nội dung → gọi `POST /api/v1/fin/debts/:id/call-logs`. Lịch sử cũ hiển thị qua `GET /api/v1/fin/debts/:id/call-logs`.

---

### 7. DC-07 (ERP Node ID: 1663)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Kế toán doanh thu & Sales AM
* **Tên ngắn:** `DC-07: Quy trình cảnh báo & phê duyệt Dừng dịch vụ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán / Sales AM, tôi muốn nhận thông báo cảnh báo khi khách quá hạn 4 ngày và chỉ thực hiện dừng dịch vụ khi có phê duyệt xác nhận chính thức từ Sales AM, để tránh dừng nhầm dịch vụ của khách hàng quan trọng.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Vào ngày `ngay_x + suspend_milestone_days` (mặc định X+4), job **`DebtReminderSweepJob`** enqueue template `SUSPEND_WARNING_X_PLUS_4` (xem `mailTemplate/suspend_warning_x_plus_4.gohtml`). Email gửi đến khách hàng, CC Sales AM và Trưởng phòng Sales.
    * **Nguồn email Trưởng phòng Sales:** lấy từ **cây tổ chức trong hệ thống ERP**, không hardcode và không cấu hình rời. Đường truy 5 bước:
      ```
      DEBTS.sale_owner (email) → users.email → users.id
        → members.email  (liên kết 1-1, migration 000075_strict_user_member_link)
        → members.department_id           ⚠️ department_id ở bảng MEMBERS, không phải USERS
        → departments.manager_member_id   ⚠️ cột là manager_member_id, không phải manager_user_id
        → members.email của trưởng phòng
      ```
      Nếu Sales AM chưa được gán phòng ban hoặc phòng ban chưa có trưởng phòng → **vẫn gửi email** cho các người nhận còn lại, đồng thời ghi warning vào `debt_events` và hiện cảnh báo cho Admin (không được chặn cả email chỉ vì thiếu CC).
  - **AC2:** Sales AM vào dashboard → thấy nút "Duyệt Khóa" / "Từ chối". Bấm "Duyệt" → gọi `PATCH /api/v1/fin/debts/:id/suspend/approve` (suspend_status=WAITING_PROCUREMENT).
    **Bấm "Từ chối"** → gọi `PATCH /api/v1/fin/debts/:id/suspend/reject` (suspend_status=NONE). Vì đây là hành động **bảo lãnh cho khách nợ tiếp**, Sales AM phải chịu trách nhiệm minh bạch:
    * `reason` (lý do bảo lãnh) là trường **bắt buộc**, tối thiểu 20 ký tự — thiếu hoặc quá ngắn → `400 FIN_DEBT_REJECT_REASON_REQUIRED`.
    * Popup yêu cầu chọn thêm **ngày khách cam kết trả** → lưu vào cột **`DEBTS.promised_payment_date`** (không nhét vào ghi chú dạng chữ). Nhờ có cột riêng, Sales AM lọc được danh sách *"khách đã hứa trả mà quá ngày vẫn chưa trả"*, và chỉ số này vào bảng lịch sử thanh toán ở DC-08 AC4.
      Ràng buộc: phải **sau ngày hôm nay**. Khách hứa lại lần nữa thì ghi đè giá trị cũ, lịch sử các lần hứa trước vẫn còn nguyên trong `debt_events`.
    * Lý do được lưu vào `debt_events.description` và **hiển thị công khai** ở: dòng mở rộng của grid Kế toán, cột "Đôn đốc" màn hình Sales AM, và Global Audit Trail của Executive Dashboard.
    * Hệ thống gửi email thông báo tới **Kế toán, Kế toán trưởng và Trưởng phòng Sales** (template `SUSPEND_REJECTED`), nội dung nêu rõ: khách hàng, số nợ, người từ chối, lý do, ngày khách cam kết trả.
  - **AC3:** **Ràng buộc cứng:** Mọi API thay đổi suspend_status đều kiểm tra: nếu chưa có approve từ Sales AM thì không cho chuyển sang WAITING_PROCUREMENT. Trả về `403 FIN_DEBT_SALES_APPROVAL_REQUIRED` nếu vi phạm.
  - **AC4 (Sinh yêu cầu duyệt khóa tại mốc X+4):** Cronjob hàng ngày lúc **08:25** (chạy **trước** cron gửi mail ở AC1) gọi **`DebtSuspendRequestJob`** (Go background job). Job quét các khoản nợ thỏa **đồng thời**: `sync_status = CONFIRMED`, `debt_status = OVERDUE`, `today >= ngay_x + debt_product_configs.suspend_milestone_days` *(mặc định 4 — **đọc từ cấu hình, cấm hardcode**)*, `suspend_status = NONE`, `paid_at = null`.
    * Với mỗi bản ghi khớp: set `suspend_status = WAITING_SALES`, ghi `debt_events` (`action_type = SUSPEND_REQUEST_CREATED`), đẩy notification cho Sales AM phụ trách (`DEBTS.sale_owner`).
    * Đây là **bước duy nhất** đưa `suspend_status` từ `NONE` sang `WAITING_SALES` — nếu thiếu, nút "Duyệt Khóa" ở màn hình Sales AM (AC2) sẽ không bao giờ xuất hiện, và tab "Chờ duyệt khóa DV" trên màn hình Kế toán luôn rỗng.
  - **AC5 (Tính idempotent của cron):** Cron chạy lại nhiều lần trong ngày **không** tạo yêu cầu trùng:
    * Bỏ qua bản ghi đã ở `WAITING_SALES`, `WAITING_PROCUREMENT`, `SUSPENDED`, `WAITING_UNSUSPEND`, `UNSUSPENDED`.
    * Bản ghi đã bị Sales AM `reject` (AC2) thì **không tạo lại trong cùng kỳ cước** `billing_cycle` — tránh vòng lặp duyệt–từ chối vô hạn mỗi sáng. Muốn khóa lại phải do Kế toán/KTT yêu cầu thủ công (có lý do bảo lãnh của Sales AM làm căn cứ đối chất).

---

### 8. DC-08 (ERP Node ID: 1664)
* **Feature:** Feature 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng
* **Bộ phận:** Phòng Mua (Procurement)
* **Tên ngắn:** `DC-08: Thực thi Dừng & Khôi phục Dịch vụ trên trang quản trị dịch vụ hãng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Phòng Mua (Procurement), tôi muốn nhận yêu cầu sau khi Sales AM đã duyệt dừng/mở dịch vụ, thao tác tạm khóa hoặc mở lại dịch vụ trên trang quản trị của Google/hãng và thông báo kết quả cho các bên liên quan.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Khi `suspend_status=WAITING_PROCUREMENT`, màn hình Phòng Mua gọi `GET /api/v1/fin/debts?suspend_status=WAITING_PROCUREMENT` để hiển thị danh sách yêu cầu khóa.
  - **AC2:** Phòng Mua thao tác khóa trên Google Admin Console → quay lại ERP bấm "Xác nhận đã Khóa" → gọi `PATCH /api/v1/fin/debts/:id/suspend/execute` (suspend_status=SUSPENDED), có thể đính kèm ảnh chụp màn hình Google Admin làm bằng chứng (upload qua `POST /api/v1/fin/debts/uploads`, lưu vào `debt_events.file_url`). Tương tự cho mở: gọi `PATCH /api/v1/fin/debts/:id/unsuspend/execute` (suspend_status=UNSUSPENDED).
  - **AC3 (Gửi 2 email — nội bộ và khách hàng):** Sau khi execute, service gọi `POST /api/v1/fin/debts/:id/send-email` **hai lần** — mỗi lần 1 thư nên gửi đồng bộ (đường nhanh, xem `ERP_API.md` §6.1 bước 5), trả `sent_at` ngay trong response:
    * **Nội bộ** — template `SUSPEND_RESULT` (Templates mục 7), gửi Kế toán, Sales AM, Legal.
    * **Khách hàng** — template `SUSPEND_NOTICE_CUSTOMER` khi khóa (Templates mục 8) hoặc `UNSUSPEND_NOTICE_CUSTOMER` khi mở (mục 9), gửi khách, CC Sales AM.

    **Vì sao phải có email cho khách:** trước đó khách chỉ nhận cảnh báo X+4 nói *"sẽ bị khóa kể từ ngày…"*. Khóa thật mà không báo thì khách phát hiện qua việc dịch vụ ngừng hoạt động — vừa mất uy tín vừa phát sinh khiếu nại không đáng có. Email khóa nêu rõ **lãi vẫn tiếp tục chạy** trong thời gian khóa.

    Email cho khách nằm **chung luồng thư** với các email nhắc nợ trước đó (DC-04 AC6).
  - **AC4 (Lịch sử thanh toán — người quyết, không phải máy chặn):** Khi mở popup xác nhận mở khóa, màn hình Phòng Mua gọi `GET /api/v1/fin/customers/:id/payment-history` và **hiển thị tóm tắt lịch sử thanh toán của khách hàng** để người thao tác tự quyết có yêu cầu đặt cọc hay không.

    **Hệ thống KHÔNG tự chặn.** Trước đây tài liệu quy định "suspend >= 2 lần thì bắt buộc đặt cọc" — bỏ luật cứng này. Lý do: ngưỡng 2 lần là con số tùy tiện, không tính tới khoảng cách thời gian (khách bị khóa 2 lần cách nhau 3 năm khác hẳn 2 lần trong 3 tháng), cũng không tính tới giá trị hợp đồng. Quyết định thương mại này thuộc về Kế toán trưởng, không nên hardcode.

    **Tóm tắt hiển thị** (tính trên **toàn bộ khoản nợ của khách hàng**, không phải riêng khoản đang mở):

    | Chỉ số | Cách tính |
    |---|---|
    | Số lần bị khóa dịch vụ | `COUNT(debt_events)` `action_type = 'SUSPENDED'` JOIN `debts` theo `customer_id` |
    | Lần khóa gần nhất | `MAX(created_at)` của các sự kiện trên |
    | Số kỳ đã trả trễ / tổng số kỳ | `COUNT(debts WHERE paid_at > ngay_x)` / `COUNT(debts WHERE debt_status = 'PAID')` |
    | Số ngày trễ trung bình | `AVG(paid_at - ngay_x)` với các kỳ đã tất toán |
    | Số lần hứa trả rồi không trả | `COUNT(debts WHERE promised_payment_date IS NOT NULL AND (paid_at IS NULL OR paid_at > promised_payment_date))` |
    | Tổng nợ đang mở | `SUM(total_principal + total_penalty) WHERE debt_status <> 'PAID'` |

    **Ghi chú bắt buộc:** popup có ô ghi chú, người thao tác nhập lý do nếu mở khóa cho khách có lịch sử xấu. Ghi vào `debt_events` (`action_type = UNSUSPEND_REQUESTED`).

    *(Luật cứng "khóa ≥ 2 lần thì bắt buộc đặt cọc" cùng mã lỗi tương ứng đã bị bỏ khỏi đặc tả.)*
  - **AC5 (Tự động sinh yêu cầu mở khóa sau khi tất toán):** Khi `PATCH /api/v1/fin/debts/:id/settle` (DC-05 AC4) thực thi thành công, hệ thống kiểm tra `suspend_status` của khoản nợ:
    * Nếu `suspend_status = SUSPENDED` → **tự động** gọi nội bộ `PATCH /api/v1/fin/debts/:id/unsuspend/request`, chuyển sang `WAITING_UNSUSPEND`, ghi `debt_events` (`action_type = UNSUSPEND_REQUESTED`, `action_by = System`), đẩy yêu cầu lên tab "Đang yêu cầu Mở khóa" của màn hình Phòng Mua và gửi thông báo cho Phòng Mua.
    * Nếu `suspend_status = NONE` / `UNSUSPENDED` → bỏ qua, không làm gì.
    * Đây là **bước duy nhất** đưa `suspend_status` sang `WAITING_UNSUSPEND` — nếu thiếu, khách đã trả tiền vẫn bị khóa dịch vụ vĩnh viễn vì Phòng Mua không nhận được yêu cầu mở.
  - **AC6 (Vòng đời `suspend_status` — bảng đối chiếu):** Mọi chuyển trạng thái phải có đúng 1 tác nhân và 1 endpoint:

    | Từ | Sang | Tác nhân | Endpoint |
    |---|---|---|---|
    | `NONE` | `WAITING_SALES` | Cron X+4 | **`DebtSuspendRequestJob`** (Go background job) (DC-07 AC4) |
    | `WAITING_SALES` | `WAITING_PROCUREMENT` | Sales AM duyệt | `PATCH /api/v1/fin/debts/:id/suspend/approve` |
    | `WAITING_SALES` | `NONE` | Sales AM từ chối | `PATCH /api/v1/fin/debts/:id/suspend/reject` |
    | `WAITING_PROCUREMENT` | `SUSPENDED` | Phòng Mua | `PATCH /api/v1/fin/debts/:id/suspend/execute` |
    | `SUSPENDED` | `WAITING_UNSUSPEND` | Hệ thống (sau `/settle`) | `PATCH /api/v1/fin/debts/:id/unsuspend/request` (AC5) |
    | `WAITING_UNSUSPEND` | `UNSUSPENDED` | Phòng Mua | `PATCH /api/v1/fin/debts/:id/unsuspend/execute` |

---

### 9. DC-09 (ERP Node ID: 1666)
* **Feature:** Feature 11: Quy trình Pháp lý & Đơn phương Chấm dứt Hợp đồng
* **Bộ phận:** Pháp lý (Legal)
* **Tên ngắn:** `DC-09: Quy trình Xử lý Pháp lý & Chấm dứt Hợp đồng`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Nhân viên Pháp lý (Legal), tôi muốn xem danh sách khách hàng quá hạn cần lập công văn (mốc X+15) và mốc chấm dứt hợp đồng (mốc X+30), để lập công văn theo mẫu và làm thủ tục đơn phương chấm dứt hợp đồng hoặc khởi kiện đúng quy định.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Màn hình Legal có các tab lọc kết hợp `legal_status` + `ngay_x` để **không chồng lấn**:

    | Tab | Điều kiện lọc |
    |---|---|
    | Tất cả quá hạn | `debt_status = OVERDUE` |
    | Chạm mốc X+15 (Cần lập Công văn) | **Chưa có bản ghi `debt_legal_actions` nào** (`NOT EXISTS`) **và** `ngay_x_lte = today-15` |
    | Đã lập, chờ gửi | `legal_status = PREPARING` |
    | Chạm mốc X+30 (Chuẩn bị Khởi kiện) | `legal_status = SENT` **và** `ngay_x_lte = today-30` |
    | Đang khởi kiện | `legal_status = SUED` |

  - **AC2:** Legal bấm "Soạn Công văn" → hệ thống gọi `GET /api/v1/fin/document-templates?template_code=LEGAL_X_15` lấy template (xem `mailTemplate/legal_x_15.gohtml`), fill biến `[customer_name]`, `[contract_number]`, `[total_principal]`, `[total_penalty]`, `[legal_locked_penalty]` từ DB. Legal duyệt → bấm "Lưu & Xuất PDF" → gọi `POST /api/v1/fin/debts/:id/legal-documents` (**legal_status=PREPARING**, file_url, document_number, publish_date, termination_date, locked_penalty). Trạng thái `PREPARING` nghĩa là **"Đã lập công văn, chưa gửi"**.
    * Nếu thiếu `rep_name` / `rep_address` / `customer_code` / `tax_code` → `422 FIN_DEBT_MISSING_LEGAL_INFO`.
  - **AC2b (Gửi công văn — ba đường):** Legal bấm `[📮 Xác nhận đã gửi]` → chọn `delivery_method` → gọi `PATCH /api/v1/fin/debts/:id/legal-documents/:legalId/send`, ghi audit log.

    | `delivery_method` | Bắt buộc nhập | `legal_status` | Thư điện tử |
    |---|---|---|---|
    | `POST` — chỉ bưu điện | `sent_at` + `tracking_code` | → `SENT` ngay | — |
    | `BOTH` — cả hai *(khuyến nghị)* | `sent_at` + `tracking_code` | → `SENT` ngay | tạo nháp `LEGAL_DOC_COVER` song song |
    | `EMAIL` — chỉ email | — | **giữ `PREPARING`** | tạo nháp; gửi xong mới lật `SENT` |

    * **Given** Legal chọn `EMAIL` hoặc `BOTH`, **when** hệ thống tạo nháp, **then** nháp có `mail_track = 'LEGAL'`, `template_code = 'LEGAL_DOC_COVER'`, đính kèm PDF công văn đã ký, `subject = "Re: " + thread_subject` — **nằm chung luồng thư nhắc nợ** (DC-04 AC6).
    * **Given** khách chưa có contact `TO`, **when** Legal chọn `EMAIL`/`BOTH`, **then** `422 FIN_DEBT_NO_RECIPIENT`.
    * **Vì sao nhánh `EMAIL` chưa lật `SENT` ngay:** bản mềm là bằng chứng duy nhất trong nhánh này, mà thư còn nằm trong hộp nháp thì khách **chưa nhận được gì**. Lật `SENT` sớm là mở nút `[Hủy HĐ & Kiện]` trong khi khách chưa hề được thông báo.
    * Vòng đời: *(chưa có bản ghi — hiển thị "Mới")* → `PREPARING` (Đã lập công văn, chưa gửi) → `SENT` (Đã gửi Công văn) → `SUED` (Đang khởi kiện).
      **Enum `legal_status` không có giá trị `NONE`** — chưa lập công văn thì bảng `debt_legal_actions` chưa có dòng nào (xem `Database_Schema.md` §11).
    * **Ràng buộc:** chỉ cho `[Hủy HĐ & Kiện]` (AC3) khi `legal_status = SENT` — chưa gửi công văn thì không đủ căn cứ khởi kiện. Vi phạm → `409 FIN_DEBT_LEGAL_DOC_NOT_SENT`.
    * Mốc đếm `grace_period_days` (số ngày gia hạn trước khi kiện) tính từ **`sent_at`** — là mốc **sớm hơn** giữa ngày bưu điện và ngày email đi, không tính từ `publish_date`.
  - **AC2c (Chỉ Pháp lý được gửi thư công văn):** Thư làn `LEGAL` đòi quyền **`debt:legal`**, áp ở **cả 4 endpoint** hộp thư — `GET /debts/emails/drafts` (lọc danh sách), `PATCH /drafts/:id` (sửa thân thư), `PATCH /drafts/:id/cancel` (bỏ nháp), `POST /emails/send-batch` (gửi). Thiếu một điểm là vòng qua được.
    * **Given** actor chỉ có `debt:send_email` *(Kế toán)*, **when** gọi `GET /debts/emails/drafts`, **then** danh sách **không chứa** thư làn `LEGAL` và badge đếm không tính chúng.
    * **Given** actor chỉ có `debt:send_email`, **when** gửi `send-batch` kèm id của thư làn `LEGAL`, **then** dòng đó vào `failed[]` với `FORBIDDEN_ROLE`, **các thư còn lại vẫn gửi bình thường**.
    * **Vì sao phải lọc ở `GET` chứ không chỉ chặn ở `POST`:** Kế toán thấy badge "23 thư chờ duyệt", bấm `[Gửi tất cả]`, nhận 2 dòng lỗi mỗi ngày mà không hiểu vì sao. Lọc từ đầu thì badge luôn đúng bằng số việc họ làm được.
    * **Nháp làn `LEGAL` không hết hạn cuối ngày.** `DebtDraftExpireJob` chỉ dọn làn `REMINDER`. `locked_penalty` trong công văn là ảnh chụp đã chốt, in trên giấy đã ký — không đổi theo ngày, không cần soạn lại.
    * `DRAFT_PENDING_DIGEST` đếm và gửi **theo từng làn**: Kế toán nhận *"Có N thư nhắc nợ chờ duyệt"*, Pháp lý nhận *"Có M công văn chờ gửi"*.
  - **AC3:** Job **`DebtLegalNotifyJob`** (Go background job, 08:30 hàng ngày, **chỉ enqueue** không gọi HTTP): vào ngày `ngay_x + legal_notice_milestone_days` (mặc định X+15) enqueue template `LEGAL_NOTIFY_X_PLUS_15` cho Phòng Pháp lý (CC Kế toán trưởng, Sales AM, Ban Giám đốc). Vào ngày `ngay_x + legal_sue_milestone_days` (mặc định X+30), enqueue template `SUE_NOTIFY_X_PLUS_30` (xem `mailTemplate/sue_notify_x_plus_30.gohtml`) cho Ban Giám đốc và Phòng Pháp lý. Legal bấm "Khởi kiện" → gọi `PATCH /api/v1/fin/debts/:id/legal-documents/:legalId/sue` (legal_status=SUED). Hệ thống ghi audit log.
    * **Lưu ý:** `debt_status` **giữ nguyên `OVERDUE`** khi bị kiện, và lãi phạt **vẫn tiếp tục cộng dồn** (xem DC-05 AC5).

  - **AC4 (Văn bản chấm dứt hợp đồng — ngoài phạm vi hệ thống):** Hệ thống **không sinh** văn bản đơn phương chấm dứt hợp đồng. Đây là văn bản pháp lý do Phòng Pháp lý tự soạn ngoài ERP.
    * ERP chịu trách nhiệm **cảnh báo đúng lúc**: email `SUE_NOTIFY_X_PLUS_30` ở mốc X+30 liệt kê rõ 3 việc Pháp lý phải làm — soạn văn bản chấm dứt, gửi bản cứng và giữ mã vận đơn làm bằng chứng, rồi quay lại ERP bấm "Hủy HĐ & Kiện".
    * ERP chịu trách nhiệm **ghi nhận kết quả**: `termination_date` và `legal_status = SUED`.
    * **Vì sao phải cảnh báo rõ như vậy:** email nhắc nợ mốc X+1 đã thông báo trước với khách rằng CloudAZ *"sẽ đơn phương chấm dứt Hợp đồng và khởi kiện tại Tòa án"* ở mốc X+30. Nếu Pháp lý quên gửi văn bản chấm dứt thì việc chấm dứt **không có hiệu lực pháp lý** — khách có căn cứ phản bác trước tòa là chưa từng nhận thông báo. Email cảnh báo này là chốt kiểm soát duy nhất cho bước thủ công đó.

---

### 10. DC-10 (ERP Node ID: 1668)
* **Feature:** Feature 12: Nhật ký Kiểm toán Audit Trail & Executive Dashboard Công nợ
* **Bộ phận:** Ban Quản Lý / Kế toán trưởng
* **Tên ngắn:** `DC-10: Audit Trail & Executive Dashboard Công nợ`
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán trưởng / Ban Quản lý, tôi muốn xem báo cáo tổng quan tình hình công nợ quá hạn của toàn công ty, tra cứu lịch sử thao tác của các bộ phận và nhận cảnh báo khi khách hàng chạm các mốc nợ khẩn cấp, để chỉ đạo xử lý kịp thời.
* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Dashboard gọi `GET /api/v1/fin/debts/events` để render timeline toàn hệ thống. Mỗi dòng hiển thị: thời gian, người thực hiện, hành động, mô tả.
  - **AC2:** Dashboard gọi `GET /api/v1/fin/debts/dashboard/kpi` để hiển thị 5 thẻ KPI (tổng nợ, nợ quá hạn, lãi phạt, khách bị khóa, khách bị kiện). Gọi `GET /api/v1/fin/debts/dashboard/top-debt` cho bảng xếp hạng top 10. Gọi `GET /api/v1/fin/debts/dashboard/charts` cho biểu đồ phân bổ.
  - **AC3:** Dashboard gọi `GET /api/v1/fin/debts/dashboard/alerts` để hiển thị cảnh báo (alert banner) khi phát hiện khoản nợ chạm mốc dựa trên `ngay_x`:
    Ba mốc **đọc từ `debt_product_configs`**, không hardcode — nhãn hiển thị sinh động theo cấu hình:
    - `ngay_x + suspend_milestone_days` (mặc định 4): banner đỏ "Khách hàng đến mốc X+4 — cần Sales AM duyệt khóa DV".
    - `ngay_x + legal_notice_milestone_days` (mặc định 15): banner cam "Khách hàng đến mốc X+15 — Pháp lý cần soạn công văn".
    - `ngay_x + legal_sue_milestone_days` (mặc định 30): banner đỏ "Khách hàng đến mốc X+30 — chuẩn bị hồ sơ khởi kiện".

    Người dùng bấm vào banner để chuyển đến màn hình xử lý tương ứng. Endpoint này **chỉ đọc** — hệ thống không tự động gửi email hay thực thi hành động.
