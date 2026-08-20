# ĐÁNH GIÁ KHẢ THI TRIỂN KHAI CR-02

## Đối chiếu tài liệu CR-02 v2 với source code module `fin` (ERP)

**Ngày lập:** 07/08/2026
**Tài liệu nguồn:** `CR-02_ModuleTinhGiaVonDuAn_v2.md`
**Codebase:** `erp/backend/internal/modules/fin/` + `erp/frontend/src/routes/(app)/(fin)/`
**Nền tảng hiện tại:** EPIC fin gốc (phase 295–307) + CR-01 conversion (phase 339–356), đã release **v1.21.0**

***

## 0. KẾT LUẬN NHANH

| Nhóm | Số điểm | Ý nghĩa |
| --- | --- | --- |
| 🔴 **Tier A — CHẶN, phải chốt lại nghiệp vụ** | **6** | Tài liệu CR đang **mâu thuẫn trực tiếp** với business rule đã implement + có test. Không thể code cho tới khi khách chốt lại. |
| 🟠 **Tier B — CHẶN thiết kế, phải bổ sung đặc tả** | **7** | Nghiệp vụ đã rõ nhưng CR thiếu chi tiết mà lập trình viên bắt buộc phải biết để viết code. |
| 🟡 **Tier C — Không chặn, cần ghi nhận vào CR** | **9** | Code phải đổi kiến trúc / phá test cũ. Nên ghi vào CR để không bị coi là hồi quy. |

**Đánh giá tổng thể:** tài liệu CR-02 v2 **chưa đủ để bắt đầu coding**. 6 điểm Tier A là blocker cứng — trong đó **A1 (mâu thuẫn BR-03 về contingency)** và **A2 (role "IT" không tồn tại trong hệ thống)** là nghiêm trọng nhất, vì chúng làm sai lệch toàn bộ ma trận phân quyền tại CR-15.

Về khối lượng: CR-02 chạm vào **9/12 bảng** của module, thay đổi **contract của calc engine**, thêm **1 trạng thái** vào state machine 6-trạng-thái, và **đảo ngược 1 invariant bảo mật** đã được test ở mức byte. Đây là quy mô tương đương EPIC gốc, không phải "conversion" nhẹ như CR-01.

***

## 1. 🔴 TIER A — CHẶN CODING, PHẢI CHỐT LẠI NGHIỆP VỤ

### A1. Sales xem được % Contingency — mâu thuẫn trực tiếp với BR-03 đang chạy production

| | |
| --- | --- |
| **CR nói gì** | CR-11 mục 2.1: *"% Contingency của từng loại hình dịch vụ: **hiển thị cho Sales** (không phải số liệu nhạy cảm về lương)"*. CR-15 bảng mục 6: hàng "% Contingency theo loại hình dịch vụ" = ✔ cho cả **Sales, Techlead, IT/PIC**. |
| **Code nói gì** | **BR-03** (`docs/fin/project-cost/BRD.md:104`): *"Sales và IT **không** được xem % Contingency ở màn báo giá"*. Đã implement: `ProjectCostMaskedDTO` **không khai báo** `contingency_pct` (`project_cost_handler.go:57-76`). Frontend render `<Badge>Hidden</Badge>` (`project-costs/[id]/+page.svelte:376`). |
| **Test khoá lại** | `backend/tests/fin_project_cost_test.go:1438` — `TestProjectCostAPI_Masking_Contingency`; `fin_security_sweep_test.go` (census 51 route, chống lộ contingency qua raw JSON). |
| **Mức độ** | 🔴 Đây **không phải làm rõ, mà là ĐẢO NGƯỢC một business rule** đang chạy production. |

**Cần chốt:** CR-02 có chính thức **thay thế BR-03** không? Nếu có, cần ghi rõ trong CR: *"BR-03 bị bãi bỏ — Sales và IT/PIC được xem % Contingency"*, đồng thời chấp nhận sửa/xoá test `TestProjectCostAPI_Masking_Contingency` và cập nhật security sweep.

**Đề xuất phương án trung dung:** Sales owner được xem contingency (vì cần hiểu cấu thành giá vốn để đặt giá bán), IT/PIC vẫn **không** xem (giữ BR-03 cho nhánh kỹ thuật). Phương án này ít phá vỡ nhất nhưng khác với bảng CR-15 đang viết.

***

### A2. Actor "IT / PIC estimate" — role `IT` KHÔNG TỒN TẠI trong hệ thống production

| | |
| --- | --- |
| **CR nói gì** | CR-15 định nghĩa 4 nhóm actor, trong đó **"IT / PIC estimate"** là một cột độc lập trong bảng phân quyền. CR-16 sinh **Bản C** riêng cho nhóm này. |
| **Code nói gì** | Migration production `000168_fin_module_scaffold.up.sql:18-25` seed **6 role fin**: `Sales, CSO, CIO, CEO, CFO, HRA`. **Không có `IT`.** Role `IT` chỉ tồn tại trong **test fixtures** (`backend/tests/fixtures.go:78`) và cố ý được tạo **với 0 permission** để làm negative case. |
| **Thực tế** | "PIC estimate" trong hệ thống là **record-role**, không phải global role — xác định bằng `fin_project_cost_pics.member_id = actor.member_id` (`service/project_cost_transitions.go:10-15`, `service/record_authz.go:21-42`). Một người có thể là PIC ở báo giá này và không là gì ở báo giá khác. |
| **Mức độ** | 🔴 Toàn bộ CR-15/CR-16 đang phân quyền theo một actor **không tồn tại**. |

**Cần chốt:** "IT / PIC estimate" ánh xạ sang cái gì trong hệ thống thật?

**Đề xuất:** định nghĩa lại theo cấu trúc đang có — *"actor không giữ `project_cost:price:read` VÀ có record-role `pic` hoặc `tech_lead` trên báo giá đó"*. Tức phân quyền theo **permission + record-role**, không theo tên role. Nếu doanh nghiệp thật sự cần một role tên "IT" thì phải bổ sung yêu cầu tạo role + grant matrix (một hạng mục riêng, chưa có trong CR).

***

### A3. Ma trận masking hiện chỉ có **1 trục permission** — CR-15 cần thêm trục **OWNER**

| | |
| --- | --- |
| **CR nói gì** | CR-15 mục 1 + [Chốt Đ4-G7]: Sales **owner** xem được Giá bán/PnL; Sales **khác không** xem được. |
| **Code nói gì** | Toàn bộ quyết định masking nằm ở **đúng 1 hàm**: `project_cost_handler.go:100-102` — `hasFullAccess(c) = middleware.HasPermission(c, "fin_cost:read")`. Đây là check **thuần permission từ JWT**, **không biết gì về record**. |
| **Hệ quả** | Không thể diễn đạt "Sales A xem được báo giá của A nhưng không xem được của B" bằng cơ chế hiện tại. Đặc biệt nghiêm trọng ở endpoint **List/Grid** (`project_cost_handler.go:176-188`) — phải mask **theo từng dòng**, ảnh hưởng cả phân trang. |
| **Mức độ** | 🔴 Thay đổi kiến trúc phân quyền, không phải thêm field. |

**Cần chốt 3 điểm:**

1. Tạo permission mới (đề xuất `project_cost:price:read`) grant cho `Sales, CEO, CFO, CSO, CIO` — hay tái dùng `fin_cost:read` (hiện chỉ 4 leadership, Sales cố ý không có)?
2. Trên **Grid danh sách**, Sales owner nhìn thấy cột Giá bán/PnL — vậy với các dòng **không phải của mình** thì hiển thị gì? (ô trống / ẩn cả cột / lọc chỉ hiện báo giá của mình?)
3. "Owner" xác định bằng `created_by` (user) hay bằng record-role `creator`? Nếu Sales A nghỉ việc và bàn giao báo giá cho Sales B thì sao — hiện **không có cơ chế đổi owner** (chỉ có reassign Tech lead và reassign PIC).

***

### A4. Actor bấm "Tính lại" ở Price Setting là **Sales** — mâu thuẫn permission hiện tại

| | |
| --- | --- |
| **CR nói gì** | CR-11 mục 2.5: ở Price Setting, actor quyết định "Tính lại" là **Sales**. Ở Waiting Approval là CEO/CFO/CSO/CIO (giữ BR-19). |
| **Code nói gì** | `router_fin.go:134` — `POST /project-costs/:id/recalculate` gate bằng `AuthorizePermission("project_cost:recalculate")`. Permission này được grant **duy nhất cho CSO** (`000177_fin_project_cost_versions.up.sql:34`) — hẹp hơn cả `project_cost:approve` (4 role). Service `Recalculate` (`project_cost_service.go:821-851`) **không phân nhánh theo status**. |
| **Mức độ** | 🔴 Hiện tại **CEO/CFO/CIO cũng không bấm được "Tính lại"**, chứ chưa nói tới Sales. |

**Cần chốt:**

1. BR-19 hiện tại thực chất chỉ là **CSO**, không phải 4 leadership như tài liệu CR-11 mục 3 đang mô tả. CR có mở rộng thành 4 actor không, hay giữ CSO?
2. Ở Price Setting, **Sales nào** được bấm — chỉ owner hay mọi Sales?
3. CSO có được bấm "Tính lại" khi báo giá đang ở Price Setting không (tức 2 actor cùng có quyền ở cùng một bước)?

***

### A5. Reject ở Waiting Approval — CR nói 4 actor, code chỉ cho **CSO/CIO**

| | |
| --- | --- |
| **CR nói gì** | CR-11 mục 5: *"Nếu **CSO/CIO/CEO/CFO** reject ở Waiting Approval..."* |
| **Code nói gì** | `project_cost:reject_final` được grant **chỉ cho CSO và CIO** (`000176_fin_project_costs_approval.up.sql:31`). Route `router_fin.go:136`. Đây là **bất đối xứng có chủ ý** của BRD gốc: Chốt = 4 actor (OR), Reject = 2 actor. |
| **Mức độ** | 🔴 Nếu đây là thay đổi nghiệp vụ thì phải chốt; nếu là lỗi diễn đạt thì phải sửa CR. |

**Cần chốt:** giữ nguyên bất đối xứng (Chốt 4 / Reject 2) hay mở Reject cho cả CEO/CFO?

***

### A6. Sửa % Contingency riêng cho từng báo giá — khi có **N loại hình dịch vụ** thì sửa cái nào?

| | |
| --- | --- |
| **CR nói gì** | CR-03 mục 4 + [Chốt Đ4-G6]: CEO/CFO/CSO/CIO sửa contingency riêng cho từng báo giá, từ Techlead Review đến trước Done. |
| **Code nói gì** | `fin_project_costs.contingency_pct NUMERIC(5,2)` — **đúng 1 giá trị / báo giá** (`000174:17`). Endpoint `PUT /project-costs/:id/contingency` (`project_cost_service.go:720-770`) — nhận **1 số**. Event `contingency_updated` ghi **1 dòng**. Ràng buộc lifecycle hiện tại: **chỉ sửa được khi status = `waiting_approval`** (`:744-750`), khác với CR đang ghi "từ Techlead Review". |
| **Vấn đề** | Sau CR-02, 1 báo giá có **N contingency** (mỗi loại hình dịch vụ 1 giá trị). CR **không nói** người duyệt sửa được từng cái riêng hay sửa đồng loạt, UI ra sao, event log ghi thế nào. |
| **Mức độ** | 🔴 Không code được nếu không chốt. |

**Cần chốt:** (a) sửa từng loại hình dịch vụ riêng hay 1 giá trị chung ghi đè tất cả; (b) khoảng thời gian được sửa — CR ghi "từ Techlead Review", code hiện chỉ cho ở `waiting_approval`, nay có thêm bước Price Setting ở giữa; (c) mỗi lần sửa ghi bao nhiêu event.

***

## 2. 🟠 TIER B — CHẶN THIẾT KẾ, PHẢI BỔ SUNG ĐẶC TẢ

### B1. Import template droplist "TÊN nhân sự" — không resolve được khi **trùng tên**

- **CR-09 mục 5** [Chốt Đ1-C12]: template có droplist **tên nhân sự**, người nhập chọn tên; khách đã **từ chối** phương án mã nhân viên.
- **Vấn đề:** hệ thống phải map `tên → member_id`. Nếu công ty có 2 người trùng tên (rất phổ biến với tên Việt), hệ thống **không thể xác định đúng người**. Cột `pic_member_id` là FK bắt buộc (`000174:50`).
- **Cần bổ sung:** quy tắc hiển thị trong droplist để đảm bảo duy nhất. Đề xuất: `"Nguyễn Văn A (NV001)"` hoặc `"Nguyễn Văn A — Phòng Kỹ thuật"` — vẫn là "chọn theo tên" đúng tinh thần khách yêu cầu nhưng resolve được. Cần khách xác nhận định dạng.
- **Ghi chú kỹ thuật:** Excel data validation dạng inline list giới hạn 255 ký tự → phải dùng hidden sheet + named range. Đã có pattern sẵn ở `handler/cost_import_handler.go` (`Import` + `Template`).

### B2. Sales là "1 PIC chính thức" — thiếu đặc tả khi Sales **không có dữ liệu member/lương**

- **CR-07 mục 4** yêu cầu chi phí nhân sự của Sales tính theo lương thực tế; CR chỉ ghi *"nếu thiếu, hệ thống cảnh báo tại bước Techlead Review"*.
- **Thực tế code:** `Sales` là **user role**, còn PIC là **member** (bảng `members`). Calc engine đọc lương qua `compRepo.GetRowByMemberID` (`cost_calc_gatherer.go:60-66`). `member_compensations.member_id` là UNIQUE FK — **không có row thì không có rate**.
- **Cần bổ sung:** (a) chặn ở đâu — chặn tạo báo giá, chặn submit, hay chỉ cảnh báo lúc approve? (b) mã lỗi nghiệp vụ (kiểu `FIN_0004` hiện có cho thiếu dữ liệu chi phí tháng); (c) nếu Sales không có `members` record thì xử lý ra sao — đây là **ràng buộc dữ liệu tổ chức**, không chỉ là code.

### B3. Export ở trạng thái nào? Hiện **chỉ cho phép khi Done**

- **Code:** `exportQuote` chặn cứng `status != done` → **409 `FIN_NOT_DONE`** (`project_cost_handler.go:285-288`). Nút export trên FE chỉ hiện khi Done (`[id]/+page.svelte:263`).
- **CR-16** mô tả nội dung file nhưng **không nói** Sales có được export ở bước **Price Setting** / **Waiting Approval** không — trong khi đây chính là lúc Sales cần file để trao đổi nội bộ/gửi khách.
- **Cần bổ sung:** danh sách trạng thái cho phép export, cho từng nhóm actor.

### B4. Rate ngày/giờ trên **Grid danh sách** — hiển thị bộ nào cho ai?

- **Code:** Grid có cột `final_daily_rate`, `final_hourly_rate` (`project-costs/+page.svelte:25-33`) — hiện **là rate theo GIÁ VỐN**.
- **CR-11 mục 4** định nghĩa **2 bộ rate** (theo giá vốn / theo giá bán). CR-15 mục 5 cấm IT/PIC xem rate theo giá bán.
- **Cần bổ sung:** Grid hiển thị 2 cột riêng hay 1 cột đổi ý nghĩa theo actor? Nếu 1 cột đổi ý nghĩa thì **cùng một báo giá, hai người sẽ thấy hai con số khác nhau dưới cùng một tiêu đề cột** — rủi ro hiểu nhầm nghiêm trọng khi đối chiếu số liệu.

### B5. Phạm vi snapshot khi Done (CR-17) — hiện snapshot **không chứa nội dung công việc**

- **Code:** `input_snapshot` chỉ chứa **dữ liệu đầu vào tính toán** (params, contingency, headcount, window months, lương từng PIC, task lines dạng `{manday, pic_member_id}`) — `cost_calc_input.go:73-83`. **Không** có `task_description`, **không** có tên category, **không** có tên báo giá.
- **CR-17 mục 1** liệt kê 7 nhóm số liệu phải khoá, đều là số liệu tài chính — nhưng mục 4 lại nói *"Mọi màn hình xem lại và file export của báo giá Done đều đọc từ snapshot đã khoá"*, mà file export **có nội dung công việc và tên PIC**.
- **Cần bổ sung:** snapshot có phải mở rộng để chứa cả nội dung công việc + tên PIC + tên loại hình dịch vụ không? (Nếu có, đây là thay đổi cấu trúc snapshot → ảnh hưởng `TestCalculate_SnapshotReproducesResult` và toàn bộ version log.)

### B6. Manday dòng thuê ngoài do Techlead nhập — thiếu đặc tả **luồng dữ liệu**

- **[Chốt Đ4-G4]** đã chốt Techlead nhập Manday tại bước assign, được ghi đè giá trị cũ.
- **Vấn đề chưa rõ:** ở bước **Estimate**, PIC/Sales có được sửa Manday của dòng đã đánh dấu thuê ngoài không? Nếu có thì sửa xong giá vốn tính lại thế nào (Techlead đã approve rồi)? Nếu không thì dòng đó phải bị khoá — nhưng hiện `canManageTasks` (`ProjectCostDetailPageModel.svelte.ts:206-208`) là gate ở cấp **toàn bộ bảng task**, không có gate cấp dòng.
- **Cần bổ sung:** quy tắc khoá/mở ở **cấp dòng công việc** cho dòng thuê ngoài.

### B7. Loại hình dịch vụ **trùng tên giữa 2 Line** — ảnh hưởng unique constraint đang có

- **CR-02 mục 2** [Chốt Đ1-C1]: 2 Line được phép có loại hình trùng tên; trong cùng 1 Line thì phải duy nhất.
- **Code:** `fin_service_categories` có `ux_fin_service_categories_lower_name` — **UNIQUE trên `LOWER(name)` toàn bảng** (`000170:17-18`). Sau CR-02, constraint này phải đổi thành `UNIQUE (parent_id, LOWER(name))`.
- **Vấn đề chưa rõ:** với **Line sản phẩm (level 1)**, tên có phải duy nhất toàn hệ thống không? CR chỉ nói về level 2.
- **Cần bổ sung:** quy tắc unique cho level 1.

***

## 3. 🟡 TIER C — KHÔNG CHẶN, NHƯNG PHẢI GHI NHẬN VÀO CR

### C1. CR-16 **phá vỡ invariant bảo mật** "export masking by construction"

Đây là điểm rủi ro kỹ thuật lớn nhất của CR-02.

- **Hiện tại:** export **cố ý không branch theo role** (`project_cost_handler.go:269-271`). Service export **không bao giờ đọc** `PersonnelCost` / `IndirectCost` / `ContingencyPct` / `InputSnapshot` (`service/project_cost_export.go:61-65`). Masking vì thế đúng **by construction** (chứng minh ở mức byte — `.gsd/phases/356/SUMMARY.md:14`), không phụ thuộc vào logic phân quyền chạy đúng.
- **CR-16** yêu cầu **3 biến thể theo actor** → buộc phải đưa branching vào service export, tức **hạ cấp** từ "an toàn theo cấu trúc" xuống "an toàn theo logic".
- **Test sẽ vỡ:** `TestExport_MaskedForAllRoles` (`handler/project_cost_export_handler_test.go:220`), `service/project_cost_export_test.go` (4 test), và census `fin_security_sweep_test.go` (51 route).
- **Nên ghi vào CR:** đây là thay đổi có chủ ý, kèm yêu cầu bù đắp — **test byte-level cho từng biến thể A/B/C** để giữ mức đảm bảo tương đương.

### C2. Quy tắc làm tròn CR-05 mục 4 **đảo ngược** nguyên tắc hiện tại của calc engine

- **Hiện tại:** `roundMoney` (half-up) áp cho **mỗi output độc lập**, và **không bao giờ derive lại từ một output đã round** (`cost_calc_service.go:135-139`, quyết định D-303-R1/D-303-B, AC-303-9). Có test `TestCalculate_SnapshotReproducesResult` (`cost_calc_service_test.go:556`).
- **CR-05 mục 4** yêu cầu ngược lại: làm tròn **từng loại hình dịch vụ** rồi **cộng các số đã làm tròn** để ra tổng.
- **Nên ghi vào CR:** *"CR-05 mục 4 thay thế AC-303-9; giá vốn tổng nay được cộng từ các giá trị đã làm tròn"*, để không bị đội QC coi là hồi quy.

### C3. Danh sách thay đổi schema (ước lượng, migration bắt đầu từ **000273**)

| # | Thay đổi | Bảng |
| --- | --- | --- |
| 1 | Thêm `parent_id` + đổi unique thành `(parent_id, LOWER(name))` | `fin_service_categories` |
| 2 | Thêm `contingency_pct` theo category | `fin_service_categories` (hoặc bảng riêng) |
| 3 | **Bảng nối mới** `fin_project_cost_service_types` (báo giá ↔ N loại hình dịch vụ) | mới |
| 4 | Thêm `parent_id`, `sort_order`, `service_type_id`, `is_outsourced` | `fin_project_cost_tasks` |
| 5 | **Bảng mới** `fin_vendors` (tên, `markup_pct`, `active`) | mới |
| 6 | **Bảng mới** `fin_project_cost_outsourcing` (task ↔ vendor, chi phí trả đối tác, `markup_pct` snapshot) | mới |
| 7 | Thêm `description` (5.000 ký tự), `total_selling_price`, `pnl_pct`, `final_daily_rate_selling`, `final_hourly_rate_selling` | `fin_project_costs` |
| 8 | **Bảng mới** breakdown giá vốn/giá bán/PnL theo loại hình dịch vụ | mới |
| 9 | Mở CHECK `status` → thêm `price_setting` | `fin_project_costs` |
| 10 | Mở CHECK `event_type` (13 → ~16): `+price_submitted`, `+price_updated`, `+recalculated_by_sales` | `fin_project_cost_events` |
| 11 | Mở CHECK `trigger_type` (10 → ~11): `+price_setting_required` | `fin_project_cost_notifications` |
| 12 | Thêm CHECK `manday > 0 AND manday % 0.5 = 0` | `fin_project_cost_tasks` |
| 13 | Thêm index `(project_cost_id)` — hiện **chưa có**, sẽ thành nút thắt khi task phân cấp | `fin_project_cost_tasks`, `_events` |

⇒ **9/12 bảng hiện có bị chạm + 4 bảng mới.**

### C4. State machine: 6 → 7 trạng thái

`service/project_cost_transitions.go:30-43` là ma trận hard-code (quyết định kiến trúc D-301-2: không dùng bảng). Thêm `price_setting` giữa `review` và `waiting_approval` phải sửa: ma trận transition, `PROJECT_COST_STATUS_ORDER` (FE, `ProjectCostDetailPageModel.svelte.ts:17-24`), `stepLabels` (`[id]/+page.svelte:46`), filter Grid, CHECK constraint DB, và `project_cost_matrix_loadbearing_test.go`.

### C5. Đổi tên "Review" → "Techlead Review" (CR-08) chạm 5 nơi

Hằng số `ProjectCostStatusReview = "review"` (giá trị DB **giữ nguyên**, chỉ đổi nhãn hiển thị): `stepLabels` FE, badge Grid, filter status, `workToDo` trong Lark card (`notification_drain_job.go:199-210`), và nhãn trong file export.

### C6. Validation Manday & độ dài Task/Sub-task — hiện **hoàn toàn chưa có**

- `manday NUMERIC(6,1)` cho phép 0,5 nhưng **không có validation nào ở service/handler** (không check `> 0`, không check bội số 0,5) — DTO truyền thẳng `*float64` (`handler/project_cost_handler.go:436`).
- `task_description TEXT` — **không giới hạn độ dài**. CR-09 yêu cầu Task 100 / Sub-task 1.000 ký tự.
- ⇒ Cần bổ sung validator ở cả 3 tầng (DB CHECK, service, FE).

### C7. Định dạng tiền (CR-12) — 3 chỗ hiện đang bỏ sót

CR-12 mô tả đúng vấn đề. Vị trí cụ thể trong code:

| Chỗ | File:line | Hiện trạng |
| --- | --- | --- |
| Grid danh sách báo giá | `project-costs/+page.svelte:114` | render số thô, **không import `formatVND`** |
| File export Excel/PDF | `service/project_cost_export.go:79-82`, `:132-138` | ghi số thô |
| Thẻ Lark | `service/notification_drain_job.go:183-194` | `formatRate` chỉ chống ký hiệu khoa học, **không có dấu phân cách nghìn** |

Helper đã có sẵn: `formatVND` (`frontend/src/lib/utils/format.ts:101`). Backend **chưa có** helper tương đương → phải viết mới cho export + Lark.

### C8. Deep link (CR-13) — đã có `APP_BASE_URL` nhưng **đọc sai nguồn**

`deepLinkURL` (`notification_drain_job.go:172-178`) đọc **trực tiếp `os.Getenv("APP_BASE_URL")`** thay vì `config.AppBaseURL` đã load, fallback `http://localhost:5183`. Env đã cấu hình đúng ở `installation/.env.production:28` (`http://erp.cloudaz.io`) và `.env.sit:25`. ⇒ Sửa nhẹ, không nghẽn.

### C9. Export hiện in **`PIC Member ID` (số)** thay vì tên

`project_cost_export.go:92, 97, 146`. CR-16 yêu cầu tên nhân sự → cần join `members`. Không nghẽn nhưng phải nhớ.

***

## 4. NHỮNG ĐIỂM CR-02 ĐÃ KHỚP TỐT VỚI CODE (không cần lo)

| CR | Nền tảng đã có |
| --- | --- |
| CR-01 (breakdown chi phí gián tiếp theo khoản mục) | `fin_cost_categories` + `fin_monthly_costs` + `fin_monthly_cost_activations` đã hỗ trợ đầy đủ ở mức tháng |
| CR-05 (phân bổ chi phí gián tiếp theo tỷ lệ Manday) | Engine tính đã tách bạch, pure function, test property-based sẵn (`cost_calc_service_test.go:160`) |
| CR-11 (cơ chế Chốt OR + chống race) | Đã có optimistic lock `lock_version` + test race `fin_project_cost_test.go:959` |
| CR-11 (cảnh báo drift ở bước mới) | `driftEligible = hasSnapshot && status != done` (`drift.go:37-39`) — **tự động** áp dụng cho `price_setting`, không cần sửa |
| CR-13 (thông báo) | Outbox pattern + drain job + retry cap đã chạy ổn định; thêm trigger mới là việc nhẹ |
| CR-17 (khoá số liệu Done) | Đã có `input_snapshot` + `fin_project_cost_versions` + `done` là terminal state |
| CR-09 (import file) | **Chưa có** cho task, nhưng đã có **2 pattern hoàn chỉnh** để sao chép: `cost_import_handler.go` và member import |

***

## 5. KHUYẾN NGHỊ

### 5.1. Thứ tự xử lý

1. **Chốt 6 điểm Tier A với khách hàng** — đặc biệt **A1** và **A2**, vì chúng quyết định lại toàn bộ bảng phân quyền CR-15, kéo theo CR-16 và CR-14 mục 5.
2. **Bổ sung 7 điểm Tier B vào tài liệu CR** — đội phát triển có thể tự soạn phương án đề xuất, khách chỉ xác nhận (giống cách đã làm với mục G).
3. **Ghi 9 điểm Tier C vào CR dưới dạng "thay đổi kiến trúc có chủ ý"** — đặc biệt C1 và C2, để QC không coi là hồi quy.

### 5.2. Về cách chia phase

CR-01 conversion được chia 18 phase atomic (1 CR ≈ 1 phase) và chạy trơn tru. CR-02 **không chia được như vậy** vì có phụ thuộc dây chuyền:

```
Category 2 cấp (CR-02)
   └─> Contingency theo loại hình (CR-03)
         └─> Chọn nhiều loại hình khi tạo báo giá (CR-04)
               └─> Task gắn loại hình dịch vụ (CR-04/CR-09)
                     └─> Công thức giá vốn theo loại hình (CR-05)  ← [MONEY]
                           └─> Bước Price Setting + giá bán + PnL (CR-11)  ← [MONEY]
                                 └─> Phân quyền Giá bán/PnL (CR-15)
                                       └─> File export 3 biến thể (CR-16)
```

Nhánh **độc lập**, có thể làm song song ngay: CR-06 (Description), CR-08 (đổi tên bước), CR-12 (format tiền), CR-13 (link thông báo), CR-14 (highlight UI), CR-10 (vendor — chỉ phụ thuộc CR-04).

### 5.3. Cảnh báo về khối lượng

Có **3 hạng mục [MONEY]** (đụng trực tiếp con số tiền): CR-05, CR-11, và phần phân bổ giá bán. Theo tiền lệ CR-01, mỗi hạng mục [MONEY] cần phase riêng với verification chặt. Cộng với việc CR-02 chạm 9/12 bảng và đảo 1 invariant bảo mật, **quy mô thực tế tương đương EPIC gốc (13 phase), không phải conversion nhẹ**. Nên đặt kỳ vọng tiến độ theo hướng này ngay từ đầu.

### 5.4. Nợ kỹ thuật cần dọn kèm

| Nợ | Vị trí | Ảnh hưởng tới CR-02 |
| --- | --- | --- |
| BRD.md lỗi thời (BR-14 đã bị CR-05b thay hoàn toàn) | `docs/fin/project-cost/BRD.md:115` | CR-02 tham chiếu BRD → dễ dẫn chiếu sai |
| Rounding không nhất quán: `fin` dùng half-up, `hr` dùng truncate cho **cùng công thức rate** | `hr/entity/compensation.go:39-48` vs `service/cost_calc_input.go:66` | CR-05 mục 4 siết quy tắc làm tròn → nên thống nhất luôn |
| Thẻ Lark hiển thị **giờ UTC**, chưa convert giờ VN | `.gsd/phases/355/VERIFICATION.md:22` (nợ F2 của CR-01) | CR-13 sửa thông báo → tiện tay dọn |
| `fin_project_cost_tasks` **không có index** trên `project_cost_id` | `000174:45-57` | Task phân cấp 2 cấp + import hàng loạt sẽ làm lộ vấn đề này |
| Masking project-cost khoá trên `fin_cost:read` (4 role) trong khi masking monthly-cost đã tách sang `fin_cost:read_detail` (2 role) — **2 chuẩn khác nhau trong cùng module** | `project_cost_handler.go:101` vs `cost_handler.go:126` | CR-15 thêm trục thứ 3 → nên chuẩn hoá cả 3 cùng lúc |

***

## 6. PHỤ LỤC — BẢNG ĐỐI CHIẾU NHANH TỪNG MỤC CR

| Mục CR | Nền tảng code hiện có | Đánh giá |
| --- | --- | --- |
| CR-01 Chi phí gián tiếp theo khoản mục | ✅ Có đủ 3 bảng | Khả thi ngay |
| CR-02 Category 2 cấp | ❌ 1 cấp, unique toàn bảng | Cần migration + B7 |
| CR-03 Contingency theo loại hình | ❌ 1 giá trị/báo giá | Cần migration + **A6** |
| CR-04 Chọn nhiều loại hình dịch vụ | ❌ FK đơn, không có bảng nối | Cần bảng nối |
| CR-05 Công thức giá vốn theo loại hình | ⚠️ Engine tốt nhưng contract rounding ngược | **C2** |
| CR-06 Description 5.000 ký tự | ❌ Chưa có cột | Đơn giản |
| CR-07 Sales bắt buộc estimate | ⚠️ Sales là user role, PIC là member | **B2** |
| CR-08 Đổi tên bước | ✅ Chỉ đổi nhãn | Đơn giản, **C5** |
| CR-09 Import Task/Sub-task 2 cấp | ❌ Chưa có import; task 1 cấp | Có pattern sẵn + **B1**, **C6** |
| CR-10 Thuê ngoài | ❌ Không có vendor | 2 bảng mới + **B6** |
| CR-11 Price Setting + giá bán + PnL | ❌ Schema thuần cost-only | Nặng nhất + **A4**, **A5** |
| CR-12 Format tiền VND | ⚠️ Có helper FE, thiếu 3 chỗ | **C7** |
| CR-13 Thông báo + link | ⚠️ Outbox tốt, link đọc sai nguồn | **C8** |
| CR-14 Highlight UI | ✅ Thuần FE | Đơn giản |
| CR-15 Phân quyền Giá bán/PnL | ❌ Masking 1 trục, không biết record | **A1**, **A2**, **A3** |
| CR-16 Export 3 biến thể | ⚠️ Đã có export nhưng masking by construction | **C1**, **B3**, **B4**, **C9** |
| CR-17 Khoá số liệu Done | ✅ Đã có snapshot + version log | **B5** |

***

*Tài liệu đánh giá khả thi — lập ngày 07/08/2026, dựa trên khảo sát trực tiếp source code nhánh hiện hành của repo `erp` (đã release v1.21.0).*
