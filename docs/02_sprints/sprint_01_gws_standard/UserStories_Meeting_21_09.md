# User Stories — Tổng hợp từ Meeting PO 18/09 & 21/09/2026

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Thu Hồi Công Nợ |
| **Nguồn** | Meeting PO 18/09 & 21/09/2026 (transcript) |
| **Phạm vi** | Hoàn thiện luồng ngang GWS Standard + chuẩn bị Flex/GCP |
| **Tổng số User Stories** | **13 User Stories** (7 cải tiến + 4 sửa lỗi + 2 kế hoạch) |

---

## BẢNG TỔNG HỢP

| STT | Mã US | Ưu tiên | Bộ phận | Tên ngắn | Deadline |
|---|---|---|---|---|---|
| 1 | **CFG-01** | P0 | Kế toán / Admin | Cấu hình mail người nhận theo sản phẩm | Tuần 22-26/09 |
| 2 | **CFG-02** | P0 | Kế toán / Admin | Tab cấu hình kịch bản mail (template settings) | Tuần 22-26/09 |
| 3 | **CFG-03** | P0 | Kế toán / Admin | Cấu hình lead user assign theo sản phẩm | Tuần 22-26/09 |
| 4 | **CFG-04** | P0 | Kế toán | Auto CC sale + sale leader trong mail nhắc nợ | Tuần 22-26/09 |
| 5 | **CFG-05** | P0 | Admin | Phân quyền HCNS (Hạnh) + deploy production | 21/09 (ngay) |
| 6 | **FIX-01** | P1 | Dev | Sửa tên customer hiển thị không khớp ĐNTT | Tuần 22-26/09 |
| 7 | **FIX-02** | P1 | Dev | Mail TO cho phép nhiều người nhận | Tuần 22-26/09 |
| 8 | **FIX-03** | P1 | Dev | Bỏ hiển thị x+4/x+15/x+30 trên form tạo mail | Tuần 22-26/09 |
| 9 | **FIX-04** | P1 | Dev | Hạn thanh toán Standard mặc định theo CM | Tuần 22-26/09 |
| 10 | **FIX-05** | P1 | Dev / Kế toán | Lãi phạt đi theo hợp đồng thay vì mặc định 0.05% | Tuần 22-26/09 |
| 11 | **FLOW-01** | P1 | Dev | Suspend gửi thẳng C-admin, bỏ bước sale approve | Trong sprint |
| 12 | **PLAN-01** | P2 | Kế toán / Dev | Triển khai GWS Flex (billing + công nợ) | 02/10/2026 |
| 13 | **PLAN-02** | P2 | Kế toán / Dev | Triển khai GCP — tích hợp BigQuery + billing | Sau T10 |

---

## CHI TIẾT USER STORIES

---

### 1. CFG-01: Cấu hình mail người nhận theo sản phẩm

* **Feature:** Cấu hình hệ thống công nợ
* **Bộ phận:** Kế toán doanh thu / Quản trị viên
* **Ưu tiên:** P0 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán trưởng, tôi muốn cấu hình danh sách người nhận mail thông báo theo từng sản phẩm/dịch vụ (VD: Google Workspace → chị Hằng; các dịch vụ khác → anh Sơn + Hằng Bé), để mỗi người chỉ nhận mail liên quan đến sản phẩm mình phụ trách, tránh bị ngập mail không liên quan.

* **Ngữ cảnh từ PO:**
  - Hiện tại hệ thống gửi mail cho tất cả kế toán → PO muốn phân theo dịch vụ.
  - VD: dịch vụ Google → chỉ chị Hằng nhận. Dịch vụ khác (video) → anh Sơn + Hằng Bé nhận.
  - PO muốn đỡ nhiều mail cho mọi người.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Trong trang Parameters (hoặc Settings), có giao diện cấu hình "Mail Recipients by Product". Mỗi sản phẩm (`debt_product_configs`) có một danh sách user được assign nhận mail.
    * Endpoint: `GET /api/v1/fin/debt-product-configs/:id/mail-recipients` — lấy danh sách người nhận.
    * Endpoint: `PUT /api/v1/fin/debt-product-configs/:id/mail-recipients` — cập nhật danh sách người nhận.
  - **AC2:** Mỗi người nhận gồm: `user_id`, `email`, `role` (accountant / hr / legal / c-level), `is_active`. Admin có thể thêm/bớt/tắt người nhận cho từng sản phẩm.
  - **AC3:** Khi khoản nợ đồng bộ về từ CM, hệ thống tự động lookup `product_name` → lấy danh sách mail recipients tương ứng → gán vào `debt_mail_recipients` của khoản nợ đó.
  - **AC4:** Các mail thông báo trạng thái (đóng dấu, giao thành công, nhắc nợ...) chỉ gửi cho những người trong danh sách recipients của sản phẩm tương ứng, không gửi cho toàn bộ kế toán.
  - **AC5:** Nếu sản phẩm chưa cấu hình recipients, fallback về danh sách mặc định (toàn bộ kế toán có role `accountant`).

---

### 2. CFG-02: Tab cấu hình kịch bản mail (template settings)

* **Feature:** Cấu hình hệ thống công nợ
* **Bộ phận:** Kế toán doanh thu / Quản trị viên
* **Ưu tiên:** P0 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán trưởng, tôi muốn có một tab "Cấu hình kịch bản" trong trang Parameters để xem, sửa tiêu đề mặc định và nội dung các mail template (giao thành công, nhắc trước hạn, nhắc đúng hạn, nhắc quá hạn...), để kế toán có thể tự điều chỉnh nội dung mail mà không cần nhờ dev sửa code.

* **Ngữ cảnh từ PO:**
  - PO muốn kế toán tự chỉnh template, không phải vào code.
  - Tiêu đề mail đầu tiên sửa được; các mail sau giữ nguyên tiêu đề để chung luồng Gmail.
  - Tiêu đề mặc định Commit: "NEW – [Tên khách] – Thanh toán dịch vụ Google Workspace theo phụ lục [số phụ lục]".
  - Standard khác Commit: Standard bắt đầu bằng mail đề nghị thanh toán, Commit bắt đầu bằng mail đối soát chi phí.
  - Nội dung sửa được theo mẫu, kế toán có thể upload template riêng.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Trang Parameters có tab mới "Kịch bản mail" (Mail Scenarios). Tab liệt kê tất cả kịch bản mail hiện có:
    * Giao thành công (`REMINDER_DELIVERED`)
    * Nhắc trước hạn (`REMINDER_X_MINUS_2`, `REMINDER_X_MINUS_1`)
    * Nhắc đúng hạn (`REMINDER_X`)
    * Nhắc quá hạn (`REMINDER_X_PLUS_1`)
    * Cảnh báo khóa dịch vụ (`SUSPEND_WARNING_X_PLUS_4`)
  - **AC2:** Mỗi kịch bản hiển thị: tên kịch bản, tiêu đề mặc định (subject template), nội dung mẫu (body template), danh sách biến có sẵn (VD: `[customer_name]`, `[contract_number]`, `[ngay_x]`...).
  - **AC3:** Admin có thể sửa tiêu đề mặc định và nội dung template.
    * Endpoint: `GET /api/v1/fin/mail-templates` — lấy danh sách templates.
    * Endpoint: `PATCH /api/v1/fin/mail-templates/:templateKey` — cập nhật subject/body template.
  - **AC4:** Tiêu đề mail đầu tiên trong luồng sửa được tự do. Các mail reply sau tự động prepend "RE: " + tiêu đề đầu tiên (giữ chung luồng Gmail).
  - **AC5:** Template phân biệt theo sản phẩm: Commit có tiêu đề theo phụ lục, Standard theo đề nghị thanh toán. Hệ thống lưu template riêng cho từng `product_type` nếu cần.
  - **AC6:** Có nút "Xem trước" (Preview) để kế toán xem mail mẫu với dữ liệu demo trước khi lưu.

---

### 3. CFG-03: Cấu hình lead user assign theo sản phẩm

* **Feature:** Cấu hình hệ thống công nợ
* **Bộ phận:** Kế toán doanh thu / Quản trị viên
* **Ưu tiên:** P0 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Quản trị viên, tôi muốn cấu hình danh sách "lead users" cho từng sản phẩm, để khi khoản nợ đồng bộ về từ CM, hệ thống tự động assign khoản nợ cho đúng người phụ trách sản phẩm đó thay vì gán cho toàn bộ phòng kế toán.

* **Ngữ cảnh từ PO:**
  - PO muốn khi khoản nợ đồng bộ về, tự động assign cho đúng lead user theo sản phẩm.
  - Chỉ những người được cấu hình mới thấy và xử lý khoản nợ của sản phẩm đó.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Trong `debt_product_configs`, thêm trường `assigned_users` (danh sách user_id). Giao diện cho phép admin thêm/bớt user cho từng sản phẩm.
    * Endpoint: `PUT /api/v1/fin/debt-product-configs/:id/assigned-users` — cập nhật danh sách.
  - **AC2:** Khi sync khoản nợ từ CM, hệ thống lookup `product_name` → tìm `debt_product_configs` tương ứng → gán `assigned_users` vào khoản nợ.
  - **AC3:** Grid khoản nợ filter theo `assigned_users` — user chỉ thấy khoản nợ được assign cho mình (trừ admin thấy tất cả).

---

### 4. CFG-04: Auto CC sale + sale leader trong mail nhắc nợ

* **Feature:** Cấu hình gửi mail công nợ
* **Bộ phận:** Kế toán doanh thu
* **Ưu tiên:** P0 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn hệ thống tự động CC sale phụ trách (sale owner) và sale leader khi gửi mail nhắc nợ cho khách hàng, để sale nắm được tình hình công nợ và chủ động nhắc khách hàng thanh toán.

* **Ngữ cảnh từ PO:**
  - Mặc định CC sale owner + sale leader.
  - Cần hỏi thêm C-admin (sale.admin@cloudlet.io) có muốn nhận CC hay không.
  - Sale chỉ nhận thông tin (CC), không approve mail.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Khi tạo mail nhắc nợ (trước hạn, đúng hạn, quá hạn), hệ thống tự động thêm vào CC:
    * `sale_owner` (email sale phụ trách, lấy từ `DEBTS.sale_owner`)
    * `sale_leader` (email sale leader, lấy từ cấu hình hoặc user role)
  - **AC2:** Trên form tạo mail, trường CC hiển thị sẵn danh sách auto-CC. Kế toán có thể thêm/bớt CC trước khi gửi.
  - **AC3:** Cấu hình auto-CC lưu trong `debt_product_configs` cho từng sản phẩm. Admin chỉnh sửa tại trang Parameters.
  - **AC4 (Pending — chờ PO xác nhận):** Hỏi C-admin xem mail `sale.admin@cloudlet.io` có muốn nhận CC cho tất cả mail nhắc nợ không. Nếu có → thêm vào auto-CC mặc định.

---

### 5. CFG-05: Phân quyền HCNS (Hạnh) + deploy production

* **Feature:** Phân quyền người dùng
* **Bộ phận:** Quản trị viên
* **Ưu tiên:** P0 — **Ngay 21/09**
* **Mô tả chi tiết (User Story Detail):**
  > Là một Quản trị viên, tôi muốn phân quyền cho nhân viên HCNS (Hạnh) để thao tác trên luồng chuyển phát bản cứng (nhận bản cứng, xác nhận giao thành công/thất bại, nhập mã vận đơn), đồng thời hướng dẫn sử dụng và deploy lên production ngay trong ngày.

* **Ngữ cảnh từ PO:**
  - PO yêu cầu triển khai production ngay hôm nay (21/09).
  - Kế toán sẽ chuyển đề nghị thanh toán cho HCNS ngay chiều nay.
  - Cần hướng dẫn Hạnh cách sử dụng giao diện.
  - Hạnh thao tác: nhận bản cứng từ kế toán → gửi bưu điện → nhập mã đơn → xác nhận giao thành công/thất bại.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Tạo tài khoản user cho Hạnh (HCNS) trên production với role `HR` (hoặc tương đương).
  - **AC2:** Role HR có quyền:
    * Xem danh sách khoản nợ ở trạng thái `STAMPED` (đã đóng dấu, chờ gửi).
    * Thực hiện `PATCH /api/v1/fin/debts/:id/delivery/post` (nhập mã vận đơn, chuyển trạng thái POSTED).
    * Thực hiện `PATCH /api/v1/fin/debts/:id/delivery/deliver` (xác nhận giao thành công, nhập ngày nhận + người nhận).
    * Thực hiện report giao thất bại (deliver fail) và gửi lại.
  - **AC3:** Deploy bản hiện tại lên production.
  - **AC4:** Gửi hướng dẫn sử dụng cho Hạnh (giao diện HCNS: danh sách chờ gửi, cách nhập mã đơn, cách xác nhận giao thành công/thất bại).

---

### 6. FIX-01: Sửa tên customer hiển thị không khớp ĐNTT

* **Feature:** Sửa lỗi hiển thị
* **Bộ phận:** Dev
* **Ưu tiên:** P1 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn tên khách hàng trên khoản nợ hiển thị đúng tên trên đề nghị thanh toán (ĐNTT) từ CM, để khi gửi mail nhắc nợ tên khách hàng không bị sai.

* **Ngữ cảnh từ PO:**
  - Tên customer trên khoản nợ đang bị lệch so với tên trên ĐNTT (VD: hiển thị tên viết tắt thay vì tên đầy đủ).
  - Ảnh hưởng đến mail gửi khách: nếu tên sai → khách phản hồi tiêu cực.
  - PO chấp nhận tên hiển thị sai ở mức "xem" (kế toán tải file vẫn check lại), nhưng trong mail gửi khách phải đúng.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Tên customer trên grid khoản nợ và trong mail template lấy từ trường `customer.name` trên ĐNTT (payment request) của CM, không lấy từ `customer.name` chung.
  - **AC2:** Nếu cùng customer có nhiều ĐNTT với tên hiển thị khác nhau (do thay đổi pháp nhân), lấy tên theo ĐNTT tương ứng với khoản nợ đó.

---

### 7. FIX-02: Mail TO cho phép nhiều người nhận

* **Feature:** Sửa lỗi gửi mail
* **Bộ phận:** Dev
* **Ưu tiên:** P1 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn trường TO (người nhận chính) trên form gửi mail cho phép điền nhiều email, để tôi có thể gửi mail nhắc nợ đến nhiều đầu mối của khách hàng cùng lúc.

* **Ngữ cảnh từ PO:**
  - Hiện tại trường TO chỉ cho nhập 1 email → PO muốn TO cho nhiều người (giống CC).
  - PO xác nhận: TO nhiều người, CC cũng nhiều người.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Trường TO trên form gửi mail chuyển từ single input sang multi-input (chip/tag style, tương tự CC).
  - **AC2:** Validate: mỗi email trong TO phải đúng format. Tối thiểu 1 email trong TO.
  - **AC3:** API `POST /api/v1/fin/debts/:id/send-email` chấp nhận mảng email cho trường `to` (thay vì string đơn).
  - **AC4:** Mail gửi đi header `To:` chứa tất cả email đã nhập, cách nhau bằng dấu phẩy.

---

### 8. FIX-03: Bỏ hiển thị x+4/x+15/x+30 trên form tạo mail

* **Feature:** Cải thiện giao diện
* **Bộ phận:** Dev
* **Ưu tiên:** P1 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn form tạo mail nhắc nợ không hiển thị các mốc ngày x+4, x+15, x+30, để giao diện gọn gàng hơn và tránh nhầm lẫn — thông tin mốc cưỡng chế chỉ cần hiện ở dashboard, không cần trên mail.

* **Ngữ cảnh từ PO:**
  - PO xác nhận: "Không cần đâu, không cần đâu" — không cần hiển thị x+4/x+15/x+30 trên form mail.
  - Chỉ giữ lại thông tin cần thiết: ngày đến hạn (ngày X), trạng thái (trước hạn / đúng hạn / quá hạn).

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Form tạo mail nháp (MailTemplateDrawer / MailTemplateCard) không hiển thị các mốc x+4, x+15, x+30.
  - **AC2:** Giữ lại: ngày đến hạn thanh toán (ngày X), số ngày quá hạn (nếu có), trạng thái khoản nợ.

---

### 9. FIX-04: Hạn thanh toán Standard mặc định theo CM

* **Feature:** Đồng bộ dữ liệu CM
* **Bộ phận:** Dev
* **Ưu tiên:** P1 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn hạn thanh toán của khoản nợ Google Workspace Standard tự động lấy từ ngày thanh toán trên CM (thay vì tính theo ngày giao phát + N ngày), để tôi không phải nhập tay và hạn thanh toán luôn chính xác theo hợp đồng.

* **Ngữ cảnh từ PO:**
  - Google Workspace Standard: hạn thanh toán = ngày thanh toán trên CM (mặc định, không cần nhập).
  - Google Workspace Flex: hạn thanh toán = ngày giao phát thành công + payment_term_days (theo thỏa thuận khách).
  - Commit: thanh toán theo kỳ hàng tháng, ngày thanh toán cố định (VD: mùng 10 mỗi tháng), lấy từ CM.
  - Quá ngày thanh toán → vẫn tính lãi bình thường theo mặc định.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Với sản phẩm `product_type = 'GWS_STANDARD'` hoặc `'GWS_COMMIT'`:
    * `ngay_x` = ngày thanh toán từ CM (`payment_request.payment_due_date` hoặc field tương đương).
    * Không phụ thuộc `delivered_at` + `payment_term_days`.
  - **AC2:** Với sản phẩm `product_type = 'GWS_FLEX'`:
    * Giữ nguyên logic hiện tại: `ngay_x = delivered_at + payment_term_days`.
    * `payment_term_days` do kế toán nhập (VD: khách hẹn 3 ngày sau nhận bản cứng).
  - **AC3:** Trên grid khoản nợ, cột "Hạn thanh toán" hiển thị đúng ngày theo logic từng product_type.
  - **AC4:** Khi sync khoản nợ Standard/Commit từ CM, `ngay_x` tự động fill từ CM, không yêu cầu kế toán nhập.

---

### 10. FIX-05: Lãi phạt đi theo hợp đồng thay vì mặc định 0.05%

* **Feature:** Tính lãi chậm thanh toán
* **Bộ phận:** Dev / Kế toán
* **Ưu tiên:** P1 — Tuần 22-26/09
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn hệ thống tự động áp dụng tỉ lệ lãi phạt chậm thanh toán theo từng hợp đồng (VD: HĐ A = 0.5%/ngày, HĐ B = 1%/ngày) thay vì mặc định 0.05% cho tất cả, để số tiền lãi tính ra đúng theo thỏa thuận trong hợp đồng.

* **Ngữ cảnh từ PO:**
  - Hiện mặc định 0.05% cho tất cả → sai vì mỗi hợp đồng có tỉ lệ khác nhau.
  - PO muốn: hệ thống gợi ý con số, kế toán xác nhận lại.
  - Kế toán sẽ điền penalty_rate cho từng hợp đồng, hệ thống tự nhân.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** `penalty_rate` lưu ở cấp `DEBTS` (đã có) nhưng giá trị mặc định lấy từ `CONTRACTS.default_penalty_rate` (nếu có) thay vì hardcode 0.05%.
  - **AC2:** Khi khoản nợ mới đồng bộ, `penalty_rate` tự động fill từ hợp đồng tương ứng. Kế toán có thể override cho từng khoản nợ cụ thể.
  - **AC3:** Trên giao diện chi tiết khoản nợ, hiển thị rõ tỉ lệ lãi đang áp dụng và nguồn (từ hợp đồng hay kế toán nhập tay).
  - **AC4:** Job tính lãi hàng ngày sử dụng `penalty_rate` của từng khoản nợ, không dùng giá trị mặc định chung.

---

### 11. FLOW-01: Suspend gửi thẳng C-admin, bỏ bước sale approve

* **Feature:** Thay đổi luồng khóa dịch vụ
* **Bộ phận:** Dev
* **Ưu tiên:** P1 — Trong sprint
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn khi gửi yêu cầu tạm dừng dịch vụ (suspend) thì gửi thẳng cho C-admin phê duyệt mà không cần qua bước sale approve, để quy trình nhanh hơn. Sale chỉ nhận thông báo CC.

* **Ngữ cảnh từ PO:**
  - Luồng cũ: Kế toán → Sale approve → C-admin thực hiện.
  - Luồng mới: Kế toán → C-admin approve & thực hiện. Sale chỉ CC nhận thông tin.
  - Sale vai trò: (1) nhận CC mail nhắc nợ để nhắc khách, (2) nhận CC thông báo suspend.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Khi kế toán nhấn "Yêu cầu tạm dừng dịch vụ" (`POST /api/v1/fin/debts/:id/suspend-request`), hệ thống gửi yêu cầu trực tiếp đến C-admin (role `procurement` hoặc admin), bỏ qua bước sale approve.
  - **AC2:** Mail thông báo suspend request gửi TO: C-admin, CC: sale owner + sale leader + kế toán.
  - **AC3:** C-admin nhận và approve/reject trên giao diện. Sau khi approve, thực hiện suspend trên Google Console.
  - **AC4:** Bỏ UI phê duyệt suspend trên dashboard Sales AM (hoặc chuyển thành view-only thông báo).
  - **AC5:** Audit trail ghi nhận đúng luồng mới: kế toán → c-admin (không có bước sale).

---

### 12. PLAN-01: Triển khai GWS Flex (billing + công nợ)

* **Feature:** Mở rộng sản phẩm GWS Flex
* **Bộ phận:** Kế toán / Dev
* **Ưu tiên:** P2 — Deadline: **02/10/2026**
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn hệ thống hỗ trợ luồng công nợ cho sản phẩm Google Workspace Flex tương tự GWS Standard/Commit (đồng bộ khoản nợ, gửi đề nghị thanh toán, nhắc nợ), để tôi có thể xử lý công nợ Flex từ đầu tháng 10.

* **Ngữ cảnh từ PO:**
  - Mùng 2/10 kế toán bắt đầu làm Flex — chưa đến 1 ngày công việc.
  - Flex không có đối soát, không có giao phát bản cứng.
  - Luồng Flex: gửi đề nghị thanh toán → nhắc nợ luôn (đơn giản hơn Standard).
  - Cần hoàn thiện Commit trước, fix bug xong rồi mới triển khai Flex.
  - Backend đã sync được data Flex từ CM rồi, chỉ cần bổ sung luồng UI.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Khoản nợ Flex đồng bộ đúng từ CM (đã có) với `product_name = 'GWS Flex'`.
  - **AC2:** Luồng Flex không có bước đóng dấu và giao phát bản cứng. Sau khi confirm khoản nợ → tạo mail đề nghị thanh toán trực tiếp → nhắc nợ.
  - **AC3:** Hạn thanh toán Flex: `ngay_x = delivered_at + payment_term_days` (kế toán nhập payment_term_days theo thỏa thuận khách).
  - **AC4:** Template mail Flex sử dụng chung template nhắc nợ (trước hạn, đúng hạn, quá hạn) với Standard.
  - **AC5:** Flex không có bước đối soát — bỏ qua.

---

### 13. PLAN-02: Triển khai GCP — tích hợp BigQuery + billing

* **Feature:** Mở rộng sản phẩm GCP
* **Bộ phận:** Kế toán / Dev
* **Ưu tiên:** P2 — Sau tháng 10
* **Mô tả chi tiết (User Story Detail):**
  > Là một Kế toán, tôi muốn hệ thống tự động lấy dữ liệu cước GCP từ BigQuery, nhóm theo pháp nhân, import vào CM và gen đề nghị thanh toán, để tôi không phải copy dữ liệu thủ công từ Google Console sang Excel rồi import tay.

* **Ngữ cảnh từ PO:**
  - GCP là sản phẩm nhiều khách nhất (~70-80 khách/tháng), ưu tiên hơn ZiMap (~30-40 khách).
  - Quy trình hiện tại (thủ công): Google Console → filter → copy vào Excel → import CM → gen ĐNTT → kéo về ERP.
  - Luồng tự động hóa: BigQuery → ERP xử lý nhóm data → gọi API import CM → gọi API gen ĐNTT → kéo về ERP.
  - BigQuery đã tích hợp sẵn trong ERP.
  - Phụ thuộc nhiều vào CM (hợp đồng, gen ĐNTT).
  - Cần user story chi tiết — PO chưa có spec.

* **Tiêu chí nghiệm thu (Acceptance Criteria / DoD):**
  - **AC1:** Kết nối BigQuery để lấy billing data GCP theo billing account + project.
  - **AC2:** Nhóm data theo pháp nhân (legal entity), tạo 2 bảng tương tự kế toán đang làm trên Excel.
  - **AC3:** Gọi API import dữ liệu vào CM.
  - **AC4:** Gọi API gen đề nghị thanh toán trên CM.
  - **AC5:** Kéo ĐNTT về ERP, vào luồng công nợ chung (đã có).
  - **AC6 (Cần spec chi tiết):** Công thức tính cước GCP: `(Total - Gemini) * (1 - Discount) + Gemini + VAT + PDV - Credit` — cần confirm lại với PO.

---

## CÁC HẠNG MỤC CHƯA CHỐT (Pending PO Decision)

| # | Hạng mục | Trạng thái | Ai quyết | Deadline |
|---|---|---|---|---|
| 1 | Mail gửi từ đâu: `accountant@` hay tạo mail công nợ riêng? | PO trao đổi anh Sơn | PO (chị Hằng) | Trước 01/10 |
| 2 | C-admin (`sale.admin@cloudlet.io`) có muốn nhận CC mail nhắc nợ? | Cần hỏi C-admin | C-admin | Tuần này |
| 3 | Xóa hàng loạt gen data trên CM: ERP xóa CM hay CM cho xóa hàng loạt? | Cần trao đổi team CM (anh Phong) | Dev + CM | Chưa xác định |
| 4 | User story chi tiết cho GCP billing | PO chưa có spec | PO | Trước triển khai |
