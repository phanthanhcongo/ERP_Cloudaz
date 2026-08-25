# Product Backlog — Billing & Debt Collection (Consolidated Version)

| Thông tin | Giá trị |
|---|---|
| **Dự án** | ERP CloudAZ — Module Tính Cước, Đối Soát & Thu hồi Công nợ |
| **Ngày** | 2026-08-20 (Tách GWS Flex/Committed & AWS/DigitalOcean riêng biệt, 12 Features, 30 User Stories, 361 DoD Items) |
| **Nguồn** | BRD_Billing_Dispute_2026-08-20.md v3.0, BRD_Debt_Collection_2026-08-20.md v1.0 |
| **Tổng số Epics Lớn** | **2 Epics** (Module Tính Cước & Module Thu Hồi Công Nợ) |
| **Tổng số Features Lớn** | **12 Features** (Tách riêng GWS Flex, GWS Committed, AWS, DigitalOcean) |
| **Tổng số User Stories** | **30 User Stories** (20 Billing & 10 Debt Collection) |
| **Tổng số DoD Items** | **361 Tiêu chí nghiệm thu (Checklist)** |

### Ánh xạ phân cấp ERP (hạ cấp)

> Root trên ERP là **Epic** "Xây dựng module Tính toán và Thu hồi công nợ" (`path=000002`, `type_id=189`).
> **Cấp nhỏ nhất trên cây WBS ERP là User Story (`type_id=190`)** — Không tạo các node Task con lặt vặt bên dưới. Mọi chi tiết nghiệp vụ được đính kèm trực tiếp dưới dạng **DoD Checklist**:

| Phân cấp Backlog (Tài liệu) | Cấu trúc Cây WBS ERP | ERP Type | type_id |
|---|---|---|---:|
| Root Module | **Epic Root (`000002`)** | Epic | `189` |
| Feature Lớn (Nhóm CN 01 → 12) | **Feature Node (Cấp 1)** | Task | `188` |
| **User Story (BD-01 → DC-10)** | **User Story Node (CẤP NHỎ NHẤT)** | Task | `190` |
| Tiêu chí nghiệm thu (AC / DoD) | **DoD Checklist Item** | Definition of Done | *API DoD* |

---

## EPIC 1: MODULE TÍNH CƯỚC & ĐỐI SOÁT CHI PHÍ (BILLING & DISPUTE)

---

### FEATURE 01: Quản lý & Tính cước Google Cloud (GCP) — BD-01 đến BD-04 (4 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 01 | Epic 1: Billing & Dispute | Feature 01: Quản lý & Tính cước Google Cloud (GCP) | Tự động kết nối, lấy & lưu trữ dữ liệu cước GCP theo mã thanh toán & dự án | Là một Kế toán doanh thu, tôi muốn hệ thống tự động kết nối trang quản trị cước Google Cloud để lấy, đọc và lưu trữ dữ liệu cước theo tháng (~70-80 khách, ~94 mã thanh toán, ~600+ dự án), để quản lý cước tập trung. | AC1: Hệ thống tự động kết nối trang cước Google Cloud cho từng khách GCP.<br>AC2: Tách và đọc chính xác dữ liệu chi tiết từng dự án và dữ liệu tổng theo mã thanh toán.<br>AC3: Lưu trữ song song dữ liệu tổng hợp theo mã thanh toán (~94 dòng) và chi tiết theo dự án (~600+ dòng).<br>AC4: Xử lý thông báo khi trang quản trị cước tạm thời không kết nối được. |
| BD - 02 | Epic 1: Billing & Dispute | Feature 01: Quản lý & Tính cước Google Cloud (GCP) | Tự động phát hiện, tách chi phí Gemini API & quản lý luồng khuyến mại Credit GCP | Là một Kế toán doanh thu, tôi muốn hệ thống tự động phát hiện, tách riêng chi phí Gemini API và quản lý luồng xét duyệt, phân bổ khuyến mại Credit cho khách GCP, để tính cước chính xác và minh bạch. | AC1: Tự động phát hiện & tách riêng chi phí Gemini API khỏi tổng cước sử dụng (không áp dụng giảm giá chung).<br>AC2: Tự động phát hiện các khoản khuyến mại Credit trên trang cước của từng khách GCP.<br>AC3: Xuất danh sách khách có credit trong tháng gửi Ban Giám Đốc/Sales xác nhận quyền sở hữu (khách hay công ty).<br>AC4: Hỗ trợ phân chia credit giữa khách hàng và công ty theo thỏa thuận.<br>AC5: Bật cảnh báo nếu khoản credit chưa được xác nhận trước khi gửi bảng tính cước. |
| BD - 03 | Epic 1: Billing & Dispute | Feature 01: Quản lý & Tính cước Google Cloud (GCP) | Tự động tính cước GCP theo chính sách hợp đồng | Là một Kế toán doanh thu, tôi muốn hệ thống tính cước GCP tự động theo công thức nghiệp vụ: Số tiền thu khách = (Tổng dùng - Gemini) × (1 - Tỷ lệ giảm giá%) + Gemini + Thuế GTGT hãng + Phí dịch vụ - Credit đã duyệt, để không phải tính tay thủ công. | AC1: Tính chính xác tổng cước sử dụng của khách.<br>AC2: Tách riêng dịch vụ Gemini không áp dụng giảm giá.<br>AC3: Tính đúng thuế GTGT đầu ra theo quy định hợp đồng.<br>AC4: Tính chính xác phí dịch vụ và trừ giá trị credit đã phê duyệt. |
| BD - 04 | Epic 1: Billing & Dispute | Feature 01: Quản lý & Tính cước Google Cloud (GCP) | Cấu hình ánh xạ các điều khoản hợp đồng GCP | Là một Quản trị viên, tôi muốn hệ thống ánh xạ đúng các điều khoản hợp đồng GCP (mã thanh toán, danh sách dự án, tỷ lệ giảm giá, mức thuế GTGT, thuế nhà thầu, tỷ giá) vào công thức tính cước, để đảm bảo tính đúng cho từng khách. | AC1: Ánh xạ đúng mã thanh toán của hợp đồng.<br>AC2: Ánh xạ đúng danh sách các dự án thuộc hợp đồng.<br>AC3: Ánh xạ chính xác tỷ lệ giảm giá, mức thuế và tỷ giá áp dụng. |

---

### FEATURE 02: Quản lý & Tính cước Google Marketing (GMP) — BD-05 đến BD-06 (2 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 05 | Epic 1: Billing & Dispute | Feature 02: Quản lý & Tính cước Google Marketing (GMP) | Tự động lấy dữ liệu & tính cước GMP từ trang quản trị chung | Là một Kế toán doanh thu, tôi muốn hệ thống tự động lấy dữ liệu cước GMP từ trang quản trị chung và tính cước tự động theo công thức hợp đồng (không áp dụng Credit & Gemini API), để tiết kiệm thời gian xử lý. | AC1: Lấy dữ liệu cước tự động từ trang quản trị GMP chung (chứa nhiều dự án).<br>AC2: Tự động nhận biết dịch vụ GMP không áp dụng Credit & Gemini API.<br>AC3: Tính cước GMP tự động: Số tiền thu khách = Cước USD × (1 - Tỷ lệ giảm giá%) + Phí dịch vụ. |
| BD - 06 | Epic 1: Billing & Dispute | Feature 02: Quản lý & Tính cước Google Marketing (GMP) | Cấu hình ánh xạ các điều khoản hợp đồng GMP | Là một Quản trị viên, tôi muốn hệ thống ánh xạ đúng các điều khoản hợp đồng GMP (mã thanh toán, mã dự án, tỷ lệ giảm giá, thuế GTGT, thuế nhà thầu) vào công thức tính cước. | AC1: Ánh xạ đúng mã thanh toán hợp đồng GMP.<br>AC2: Ánh xạ đúng danh sách dự án GMP.<br>AC3: Ánh xạ chính xác các tham số giảm giá và thuế phí. |

---

### FEATURE 03: Quản lý & Tính cước Google Workspace Flexible (GWS Flex) — BD-07 đến BD-08 (2 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 07 | Epic 1: Billing & Dispute | Feature 03: Quản lý & Tính cước GWS Flex | Tự động xử lý dữ liệu cước, loại bỏ cước Committed & tính cước GWS Flex theo đơn giá phân bổ ngày | Là một Kế toán doanh thu, tôi muốn hệ thống tự động tải file cước GWS Flex, loại bỏ dòng cước Committed dùng trùng và tính cước tự động theo đơn giá phân bổ số ngày sử dụng thực tế, để số tiền chính xác từng tên miền. | AC1: Đọc và xử lý chính xác dữ liệu cước chi tiết theo tên miền, số lượng tài khoản và thời gian sử dụng.<br>AC2: Tự động loại bỏ dữ liệu gói GWS Committed khi tên miền dùng song song 2 gói Flex và Commit.<br>AC3: Tính cước Flex theo đơn giá sản phẩm và phân bổ theo số ngày sử dụng thực tế (đơn giá ngày = đơn giá tháng / số ngày trong tháng).<br>AC4: Hỗ trợ quy tắc tính cước GWS Flex cũ cho các kỳ cước trước tháng 02/2024. |
| BD - 08 | Epic 1: Billing & Dispute | Feature 03: Quản lý & Tính cước GWS Flex | Cấu hình ánh xạ các điều khoản hợp đồng GWS Flex | Là một Quản trị viên, tôi muốn hệ thống ánh xạ đúng các điều khoản hợp đồng GWS Flex (tên miền, gói dịch vụ, số lượng tài khoản) vào công thức tính cước. | AC1: Ánh xạ đúng tên miền đăng ký hợp đồng.<br>AC2: Ánh xạ đúng gói dịch vụ linh hoạt.<br>AC3: Ánh xạ đúng đơn giá và số lượng tài khoản. |

---

### FEATURE 04: Quản lý & Tính cước Google Workspace Committed (GWS Committed) — BD-09 (1 User Story)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 09 | Epic 1: Billing & Dispute | Feature 04: Quản lý & Tính cước GWS Committed | Quản lý danh sách đến hạn, tra cứu hợp đồng & tự động sinh ĐNTT hàng loạt cho GWS Committed | Là một Kế toán doanh thu, tôi muốn dễ dàng xem danh sách các khách hàng dùng gói Google Workspace Cam kết (Committed) sắp đến đợt thanh toán, mở xem thông tin hợp đồng để đối chiếu khi cần và bấm xuất hàng loạt file Đề nghị thanh toán (Word hoặc PDF), để kịp thời gửi chứng từ thu tiền cho khách đúng hạn mà không phải soạn thủ công từng file. | AC1: Kết nối thành công danh sách khách hàng GWS Committed đến hạn thanh toán từ hệ thống CM.<br>AC2: Tự động sinh và tải về hàng loạt Đề nghị thanh toán (.docx/PDF) cho danh sách khách được chọn.<br>AC3: Xem chi tiết thông tin hợp đồng, thời hạn, số lượng tài khoản và file đính kèm từ hệ thống CM (tra cứu hợp đồng là để đối chiếu khi cần). |

---

### FEATURE 05: Quản lý & Lấy cước AWS (Amazon Web Services) — BD-10 (1 User Story)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 10 | Epic 1: Billing & Dispute | Feature 05: Quản lý & Lấy cước AWS | Tự động lấy dữ liệu cước AWS từ hệ thống cước của hãng | Là một Kế toán doanh thu, tôi muốn hệ thống kết nối tự động với hệ thống cước AWS để lấy dữ liệu chi phí hàng tháng, để quản lý tập trung dịch vụ AWS trên ERP. | AC1: Kết nối lấy dữ liệu cước tự động từ hệ thống cước AWS.<br>AC2: Lấy đầy đủ dữ liệu chi phí theo tháng.<br>AC3: Dữ liệu được chuẩn hóa về định dạng dùng chung trên ERP. |

---

### FEATURE 06: Quản lý & Lấy cước DigitalOcean — BD-11 (1 User Story)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 11 | Epic 1: Billing & Dispute | Feature 06: Quản lý & Lấy cước DigitalOcean | Tự động lấy dữ liệu cước DigitalOcean từ hệ thống cước của hãng | Là một Kế toán doanh thu, tôi muốn hệ thống kết nối tự động với hệ thống cước DigitalOcean để lấy dữ liệu chi phí hàng tháng, để quản lý tập trung dịch vụ DigitalOcean trên ERP. | AC1: Kết nối lấy dữ liệu cước tự động từ hệ thống cước DigitalOcean.<br>AC2: Lấy đầy đủ dữ liệu chi phí theo tháng.<br>AC3: Dữ liệu được chuẩn hóa về định dạng dùng chung trên ERP. |

---

### FEATURE 07: Quản lý Quy đổi tỷ giá, Bảng đối soát & Xử lý lệch cước — BD-12 đến BD-20 (9 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| BD - 12 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Quy đổi tiền tệ, tỷ giá hợp đồng & quy tắc tính thuế/làm tròn cước | Là một Kế toán doanh thu, tôi muốn hệ thống cho phép nhập tỷ giá ngoại tệ, tính thuế GTGT/thuế nhà thầu (10% hoặc KCT, tính trên gross) và làm tròn tiền Việt chính xác đến hàng đồng, để số tiền chuẩn xác. | AC1: Áp dụng tỷ giá bán chuyển khoản Techcombank ngày cuối tháng (hoặc cấu hình riêng theo hợp đồng).<br>AC2: Số tiền thu khách VND quy đổi và làm tròn chính xác đến hàng đơn vị (đồng).<br>AC3: Hỗ trợ quy tắc tính thuế GTGT (10%) và thuế nhà thầu trên tổng doanh thu (gross).<br>AC4: Hỗ trợ đánh dấu các dịch vụ Không chịu thuế (KCT). |
| BD - 13 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Tự động sinh & gộp bảng đối soát chi phí dạng Excel/PDF | Là một Kế toán doanh thu, tôi muốn hệ thống tự động sinh bảng đối soát cước dạng Excel/PDF từ mẫu chuẩn, hỗ trợ gộp nhiều dự án, nhiều mã thanh toán và hỗ trợ khách hàng chia nhiều pháp nhân công ty con. | AC1: Tự động sinh file Excel/PDF từ mẫu chuẩn lưu trữ trên hệ thống.<br>AC2: Tự động cộng tổng gộp nhiều dự án và nhiều mã thanh toán thuộc cùng 1 khách hàng.<br>AC3: Hỗ trợ lập bảng cước riêng, gửi riêng và xuất HĐ riêng cho khách hàng chia nhiều pháp nhân công ty con. |
| BD - 14 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Tính năng điều chỉnh số liệu cước & so khớp tự động với file tính tay | Là một Kế toán doanh thu, tôi muốn hệ thống cho phép sửa số liệu trực tiếp trên bảng đối soát (tự động ghi log) và so khớp tự động với file tính tay của kế toán để highlight các dòng lệch số. | AC1: Cho phép kế toán chỉnh sửa số liệu trực tiếp trên bảng đối soát và tự động ghi nhật ký lịch sử.<br>AC2: Tự động so khớp từng dòng giữa hệ thống và file tính tay của kế toán, highlight các dòng chênh lệch. |
| BD - 15 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Gửi thông báo cước, theo dõi chốt cước & tự động chuyển trạng thái xuất hóa đơn | Là một Kế toán doanh thu, tôi muốn hệ thống tự động gửi email bảng cước kèm screenshot, gửi riêng theo từng dịch vụ, tự động nhắc/chốt cước sau 2+1 ngày và chuyển trạng thái xuất HĐ sau chốt. | AC1: Gửi email bảng đối soát kèm hình ảnh minh chứng lượng dùng cước cho khách.<br>AC2: Gửi riêng email cước cho từng dịch vụ (GWS -> GCP -> GMP) theo thời điểm chốt cước.<br>AC3: Tự động gửi email nhắc nhở sau 2 ngày và tự động chốt cước sau 1 ngày nhắc nhở.<br>AC4: Ghi nhận xác nhận cước qua email phản hồi hoặc chuyển khoản thanh toán.<br>AC5: Chuyển trạng thái xuất hóa đơn VAT ngay sau khi chốt cước. |
| BD - 16 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Xử lý phản hồi lệch cước, phát hành hóa đơn điều chỉnh & bù trừ kỳ sau | Là một Kế toán doanh thu, tôi muốn hệ thống cho phép chỉnh sửa gửi lại bảng cước khi khách báo lệch, phát hành hóa đơn điều chỉnh VAT (tăng/giảm) hoặc bù trừ tiền lệch vào kỳ cước sau. | AC1: Cho phép kế toán chỉnh sửa bảng cước và gửi lại khi khách phản hồi lệch.<br>AC2: Xử lý riêng dịch vụ bị lệch cước, các dịch vụ khác vẫn hoàn tất chốt cước bình thường.<br>AC3: Lập biên bản điều chỉnh & phát hành hóa đơn điều chỉnh VAT (tăng/giảm) sau xuất hóa đơn.<br>AC4: Cho phép bù trừ số tiền chênh lệch cước vào kỳ tính cước tiếp theo.<br>AC5: Lưu trữ đầy đủ lịch sử quá trình xử lý phản hồi lệch cước. |
| BD - 17 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Quản lý cấu hình chính sách hợp đồng, phụ lục cước & nhiều pháp nhân | Là một Quản trị viên, tôi muốn cấu hình chính sách giảm giá/thuế/phí cho từng hợp đồng, cập nhật khi có phụ lục mới, hỗ trợ 1 hợp đồng nhiều pháp nhân và thông báo cho kế toán khi hợp đồng thay đổi. | AC1: Cấu hình chi tiết tỷ lệ giảm giá, phí dịch vụ, mức thuế GTGT cho từng hợp đồng.<br>AC2: Cập nhật chính sách cước khi khách hàng ký phụ lục hợp đồng mới.<br>AC3: Cấu hình hợp đồng quản lý nhiều pháp nhân hoặc thay đổi thông tin pháp nhân.<br>AC4: Tự động gửi thông báo cho kế toán khi hợp đồng/phụ lục có sự thay đổi. |
| BD - 18 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Quản lý lịch trình cước, cảnh báo tiến độ hãng & chốt cước ưu tiên | Là một Kế toán doanh thu, tôi muốn hệ thống quản lý timeline tính cước từng dịch vụ, cảnh báo khi cước hãng về trễ, hỗ trợ gửi mail xin lùi ngày và cấu hình chốt cước ưu tiên cho khách đặc thù. | AC1: Quản lý lịch trình tính cước theo từng loại dịch vụ (GWS 1-3, GCP 1-6, GMP 6-10).<br>AC2: Cảnh báo khi dữ liệu cước hãng về chậm và hỗ trợ gửi email xin lùi ngày gửi cước.<br>AC3: Xử lý cước cho khách hàng ngưng sử dụng dịch vụ giữa tháng.<br>AC4: Cấu hình lịch chốt cước ưu tiên cho các khách hàng đặc thù. |
| BD - 19 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Lưu trữ tập trung, tra cứu & sao lưu dữ liệu cước lịch sử | Là một Quản lý/Kế toán, tôi muốn hệ thống lưu trữ tập trung dữ liệu cước lịch sử, hỗ trợ tra cứu theo khách hàng/hợp đồng/kỳ cước (xuất Excel) và hỗ trợ sao lưu dữ liệu định kỳ. | AC1: Lưu trữ tập trung và an toàn toàn bộ dữ liệu cước lịch sử của tất cả dịch vụ.<br>AC2: Tra cứu lịch sử tính cước theo khách hàng, hợp đồng và kỳ cước (cho tải Excel).<br>AC3: Xuất bản sao lưu dữ liệu cước lịch sử định kỳ. |
| BD - 20 | Epic 1: Billing & Dispute | Feature 07: Quy đổi tỷ giá & Bảng đối soát cước | Nhật ký kiểm toán (Audit Trail) thao tác cước, phân quyền & báo cáo kiểm toán | Là một Quản lý/Kế toán trưởng, tôi muốn hệ thống ghi nhật ký audit trail cho mọi thao tác cước, phân quyền chặt chẽ theo vai trò và tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng. | AC1: Tự động ghi nhật ký kiểm toán (Audit Trail) cho mọi thao tác tính toán & chỉnh sửa cước.<br>AC2: Phân quyền chi tiết chức năng tính cước theo vai trò người dùng (Kế toán, Sales, Admin).<br>AC3: Tự động sinh báo cáo kiểm toán dữ liệu cước hàng tháng cho Kế toán trưởng. |

---

## EPIC 2: MODULE THU HỒI CÔNG NỢ (DEBT COLLECTION)

---

### FEATURE 08: Xuất Hóa đơn VAT, ĐNTT & Chuyển phát bản cứng — DC-01 đến DC-03 (3 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| DC - 01 | Epic 2: Debt Collection | Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát | Ký phát hành hóa đơn VAT sau thanh toán & Đồng bộ số hóa đơn | Là một Kế toán doanh thu, tôi muốn sau khi khách hàng đã thanh toán thành công, tôi tiến hành cắm USB Token để ký số phát hành chính thức hóa đơn điện tử trên MISA và đồng bộ số hóa đơn, file PDF về ERP để hoàn tất hồ sơ thu nợ. | AC1: Nhận thông báo xác nhận khách đã thanh toán thành công để kích hoạt trạng thái cho phép ký phát hành hóa đơn.<br>AC2: Hỗ trợ kế toán cắm USB Token để ký phát hành chính thức hóa đơn điện tử từ HĐ nháp đã đẩy trên MISA từ trước.<br>AC3: Tự động đồng bộ số hóa đơn điện tử chính thức và tải file PDF hóa đơn đã ký từ MISA về ERP để lưu trữ và tất toán hồ sơ công nợ. |
| DC - 02 | Epic 2: Debt Collection | Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát | Lập Bộ chứng từ ĐNTT & Đẩy hóa đơn nháp lên MISA | Là một Kế toán doanh thu, tôi muốn từ dữ liệu cước đã chốt (hoặc dữ liệu CM) để tự động đẩy hóa đơn nháp lên MISA nhằm ghi nhận công nợ dự kiến và gộp Bộ chứng từ ĐNTT bàn giao cho Hành chính nhân sự đi gửi. | AC1: Tự động kết xuất dữ liệu cước và gọi API đẩy thông tin tạo Hóa đơn nháp (Draft Invoice) trên phần mềm MISA để theo dõi công nợ dự kiến.<br>AC2: Ghép HĐ nháp vừa tạo với file ĐNTT từ CM (hoặc sinh tự động) tạo Bộ chứng từ thu nợ.<br>AC3: Hỗ trợ gộp nhiều hợp đồng / dịch vụ của cùng 1 khách hàng vào một bộ hồ sơ ĐNTT.<br>AC4: Quản lý danh sách email đại diện nhận thông báo công nợ của khách hàng. |
| DC - 03 | Epic 2: Debt Collection | Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát | Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X | Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email. | AC1: Kế toán in bản cứng ĐNTT, trình ký đóng dấu đỏ công ty và bấm xác nhận trên hệ thống để gửi thông báo cho HCNS sang nhận thư.<br>AC2: HCNS nhận phong bì thư, gửi chuyển phát và cập nhật mã vận đơn / xác nhận ngày khách nhận bản cứng thành công.<br>AC3: Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng.<br>AC4: **Ràng buộc bắt buộc:** Nút gửi email ĐNTT điện tử CHỈ ĐƯỢC MỞ KHÓA khi HCNS bấm xác nhận khách đã nhận bản cứng thành công (cảnh báo nếu quá 48h chưa có cập nhật). |

---

### FEATURE 09: Tự động Nhắc nợ quá hạn, Lãi phạt & Dashboard Sales AM — DC-04 đến DC-06 (3 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| DC - 04 | Epic 2: Debt Collection | Feature 09: Nhắc nợ quá hạn & Sales AM | Cảnh báo trước hạn & tự động nhắc nợ quá hạn | Là một Kế toán doanh thu, tôi muốn khách hàng nhận email thông báo nhắc nợ trước 2 ngày khi sắp đến hạn thanh toán và tự động nhận email đôn đốc hàng ngày khi đã quá hạn (có thông báo rõ các mốc dừng dịch vụ và hủy hợp đồng), để hỗ trợ khách thanh toán đúng hạn. | AC1: Tự động gửi email cảnh báo trước hạn vào Ngày X-2 (CC Sales AM).<br>AC2: Tự động kích hoạt luồng nhắc nợ khi quá Ngày X chưa thanh toán.<br>AC3: Tự động gửi email nhắc nợ hàng daily cho khách quá hạn (từ Ngày X+1).<br>AC4: Soạn nội dung email nhắc nợ đầy đủ: nợ gốc, lãi chậm, mốc dừng DV (X+4), mốc hủy HĐ (X+30).<br>AC5: Hỗ trợ luồng nhắc nợ tự động riêng cho GWS Committed. |
| DC - 05 | Epic 2: Debt Collection | Feature 09: Nhắc nợ quá hạn & Sales AM | Cấu hình luồng nhắc nợ & tính lãi chậm thanh toán | Là một Kế toán doanh thu / Quản lý, tôi muốn duyệt trước nội dung email nhắc nợ (hoặc chuyển Sales AM duyệt) trước khi gửi cho khách và tự động tính tiền lãi chậm thanh toán cộng dồn hàng ngày theo hợp đồng, để đôn đốc công nợ chính xác. | AC1: Cấu hình luồng duyệt email nhắc nợ: gửi tự động hoặc tạo nháp gửi Sales AM duyệt trước.<br>AC2: Tự động tính lãi chậm thanh toán cộng dồn hàng ngày = `nợ gốc × (lãi suất/365) × số ngày quá hạn`.<br>AC3: Cấu hình tỷ lệ % lãi chậm thanh toán riêng cho từng hợp đồng. |
| DC - 06 | Epic 2: Debt Collection | Feature 09: Nhắc nợ quá hạn & Sales AM | Dashboard công nợ & nhật ký đôn đốc cho Sales AM | Là một Sales Quản lý tài khoản (Sales AM), tôi muốn xem danh sách các khách hàng quá hạn do mình phụ trách và ghi nhận lại lịch sử đôn đốc (gọi điện, nhắn tin, ngày khách hẹn trả tiền), để phối hợp với Kế toán theo dõi và thu hồi nợ. | AC1: Dashboard công nợ dành riêng cho Sales AM hiển thị danh sách khách quá hạn thuộc quyền quản lý.<br>AC2: Cung cấp giao diện cho Sales AM ghi nhận nhật ký đôn đốc khách (gọi điện/chat, ngày hẹn trả tiền). |

---

### FEATURE 10: Quy trình Dừng & Khôi phục Dịch vụ trên Console hãng — DC-07 đến DC-08 (2 User Stories)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| DC - 07 | Epic 2: Debt Collection | Feature 10: Dừng & Khôi phục Dịch vụ | Quy trình cảnh báo & phê duyệt Dừng dịch vụ | Là một Kế toán / Sales AM, tôi muốn nhận thông báo cảnh báo khi khách quá hạn 4 ngày và chỉ thực hiện dừng dịch vụ khi có phê duyệt xác nhận chính thức từ Sales AM, để tránh dừng nhầm dịch vụ của khách hàng quan trọng. | AC1: Gửi email cảnh báo dừng dịch vụ đến khách hàng vào Ngày X+4.<br>AC2: Tạo yêu cầu dừng dịch vụ gửi Sales AM phê duyệt (từ chối bắt buộc ghi lý do commercial).<br>AC3: **Ràng buộc cứng:** Chặn tuyệt đối thao tác dừng dịch vụ nếu chưa có xác nhận từ Sales AM. |
| DC - 08 | Epic 2: Debt Collection | Feature 10: Dừng & Khôi phục Dịch vụ | Thực thi Dừng & Khôi phục Dịch vụ trên trang quản trị dịch vụ hãng | Là một Nhân viên Phòng Mua (Procurement), tôi muốn nhận yêu cầu sau khi Sales AM đã duyệt dừng/mở dịch vụ, thao tác tạm khóa hoặc mở lại dịch vụ trên trang quản trị của Google/hãng và thông báo kết quả cho các bên liên quan. | AC1: Tự động chuyển task cho Phòng Mua sau khi Sales AM đã xác nhận dừng DV.<br>AC2: Phòng Mua thực thi Suspend/Unsuspend trên trang quản trị dịch vụ hãng và cập nhật trạng thái lên ERP.<br>AC3: Tự động gửi email thông báo kết quả dừng/khôi phục DV cho Kế toán, Sales AM, Legal.<br>AC4: Ghi lịch sử dừng DV: tự động yêu cầu khách đặt cọc trước khi khôi phục nếu bị dừng lần 2. |

---

### FEATURE 11: Quy trình Pháp lý & Đơn phương Chấm dứt Hợp đồng — DC-09 (1 User Story)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| DC - 09 | Epic 2: Debt Collection | Feature 11: Quy trình Pháp lý | Quy trình Xử lý Pháp lý & Chấm dứt Hợp đồng | Là một Nhân viên Pháp lý (Legal), tôi muốn xem danh sách khách hàng quá hạn cần lập công văn (mốc X+15) và mốc chấm dứt hợp đồng (mốc X+30), để lập công văn theo mẫu và làm thủ tục đơn phương chấm dứt hợp đồng hoặc khởi kiện đúng quy định. | AC1: Giao diện danh sách dành riêng cho bộ phận Pháp lý (Legal) xem các khách hàng quá hạn chạm mốc X+15 (cần lập công văn) và mốc X+30 (cần chấm dứt HĐ / khởi kiện).<br>AC2: Mẫu công văn pháp lý tự động điền (tên khách hàng, số hợp đồng, tổng nợ gốc, tiền lãi phạt) để Legal duyệt và xuất file (Word/PDF) gửi bản cứng/email cho khách.<br>AC3: Kích hoạt nút thực hiện đơn phương chấm dứt hợp đồng trên hệ thống và ghi nhận trạng thái hồ sơ khởi kiện vào mốc Ngày X+30. |

---

### FEATURE 12: Nhật ký Kiểm toán Audit Trail & Executive Dashboard Công nợ — DC-10 (1 User Story)

| ID | Epic Lớn | Feature Lớn | User Story (Short Desc) | User Story (Detail) | Acceptance Criteria |
|---|---|---|---|---|---|
| DC - 10 | Epic 2: Debt Collection | Feature 12: Audit Trail & Dashboard | Audit Trail & Executive Dashboard Công nợ | Là một Kế toán trưởng / Ban Quản lý, tôi muốn xem báo cáo tổng quan tình hình công nợ quá hạn của toàn công ty, tra cứu lịch sử thao tác của các bộ phận và nhận cảnh báo khi khách hàng chạm các mốc nợ khẩn cấp, để chỉ đạo xử lý kịp thời. | AC1: Nhật ký kiểm toán (Audit Trail) lưu trữ toàn bộ lịch sử quy trình thu hồi công nợ.<br>AC2: Executive Dashboard hiển thị tổng nợ quá hạn, số khách nợ, phân loại theo mốc giai đoạn.<br>AC3: Cảnh báo tự động đến các bên liên quan khi khách chạm các mốc khẩn cấp (X+4, X+15, X+30). |

---

## Phân bổ theo 2 Epics Lớn & 12 Features

| Module / Epic Lớn | Feature Lớn | Dải ID | Số US | Mô tả phạm vi |
|---|---|---|---:|---|
| **Epic 1: Billing & Dispute** | Feature 01: Quản lý & Tính cước GCP | BD-01 → BD-04 | 4 | Ingestion, Gemini API & Credit Promotion, Pricing GCP, Contract Mapping |
| | Feature 02: Quản lý & Tính cước GMP | BD-05 → BD-06 | 2 | Ingestion & Pricing GMP, Contract Mapping |
| | Feature 03: Quản lý & Tính cước GWS Flex | BD-07 → BD-08 | 2 | Ingestion & Pricing Flex (Proration ngày) |
| | Feature 04: Quản lý & Tính cước GWS Committed | BD-09 | 1 | Tách riêng Line GWS Committed (Danh sách đến hạn CM, ĐNTT Docs, HĐ) |
| | Feature 05: Quản lý cước AWS | BD-10 | 1 | Tách riêng Line cước AWS |
| | Feature 06: Quản lý cước DigitalOcean | BD-11 | 1 | Tách riêng Line cước DigitalOcean |
| | Feature 07: Tỷ giá, Bảng cước & Dispute | BD-12 → BD-20 | 9 | Tỷ giá, Thuế GTGT/KCT, Timeline đối soát, Gen XLSX/PDF, Repair data, Dispute Handling, Storage & Audit |
| **Epic 2: Debt Collection** | Feature 08: Hóa đơn VAT, ĐNTT & Chuyển phát | DC-01 → DC-03 | 3 | Xuất HĐ VAT bên MISA (Ký số), ĐNTT & Chuyển phát (DC-03 Mail Lock) |
| | Feature 09: Nhắc nợ quá hạn & Sales AM | DC-04 → DC-06 | 3 | Cảnh báo trước hạn, Nhắc nợ tự động & Lãi phạt, Dashboard Sales AM |
| | Feature 10: Dừng & Khôi phục Dịch vụ | DC-07 → DC-08 | 2 | Duyệt Dừng DV (Sales AM), Thực thi Dừng/Mở DV Console (Phòng Mua) |
| | Feature 11: Quy trình Pháp lý | DC-09 | 1 | Quy trình Pháp lý, Công văn & Đơn phương chấm dứt HĐ/Khởi kiện |
| | Feature 12: Audit Trail & Dashboard | DC-10 | 1 | Audit Trail toàn quy trình & Executive Dashboard Công nợ |
| **TỔNG CỘNG** | **2 Epics Lớn** | **BD-01 → DC-10** | **30** | **2 Epics Lớn, 12 Features Lớn, 30 User Stories, Giữ nguyên 100% 361 tiêu chí DoD** |
