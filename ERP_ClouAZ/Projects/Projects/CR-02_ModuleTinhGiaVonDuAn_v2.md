# CHANGE REQUEST — CR-02 (v2)

## Module Tính Giá Vốn Dự Án

**Liên quan tài liệu gốc:** [BRD_Module_TinhGiaVonDuAn.md](http://BRD_Module_TinhGiaVonDuAn.md) (v1) + [CR-01_ModuleTinhGiaVonDuAn_v2.md](http://CR-01_ModuleTinhGiaVonDuAn_v2.md)
**Loại CR:** Business rule change + New feature + Thay đổi luồng duyệt
**Phạm vi:** Cấu hình hệ thống (Category, Contingency, Chi phí gián tiếp, Vendor thuê ngoài), màn hình Tạo/Estimate báo giá, bước Price Setting, luồng duyệt final, phân quyền dữ liệu thương mại, file export

**Phiên bản này (v2)** đã cập nhật theo toàn bộ quyết định nghiệp vụ đã chốt tại:

- `CR-02-Cac-diem-can-lam-ro-nghiep-vu.md` (Đợt 1 — 20 câu, ngày 22/07/2026)
- `CR-02-Cac-diem-can-lam-ro-Dot-2.md` (Đợt 2 — 12 câu, ngày 23/07/2026)
- Các điểm chốt bổ sung Đợt 3 (phân quyền Giá bán/PnL, cơ chế nhập 1 Tổng giá bán, nội dung file export)
- **Đợt 4 — 8 điểm hệ quả** do đội phát triển đề xuất, khách hàng đã chốt "Đồng ý với tất cả" ngày 07/08/2026 (chi tiết tại **mục G**)
- **Đợt 5 — 19 điểm phát sinh khi đối chiếu tài liệu với SOURCE CODE thực tế** của module `fin` (đã release v1.21.0), khách hàng chốt ngày 10/08/2026 (chi tiết tại **mục H**)
- **Đợt 6 — mở rộng phạm vi: 1 báo giá cho NHIỀU Line sản phẩm**, khách hàng chốt ngày 11/08/2026 (chi tiết tại **mục J**)

Các đoạn được đánh dấu **[Chốt Đ1-Cx]**, **[Chốt Đ2-Cx]**, **[Chốt Đ3-Cx]**, **[Chốt Đ4-Gx]**, **[Chốt Đ5-xx]**, **[Chốt Đ6-x]** là nội dung bổ sung/thay đổi so với bản CR-02 v1, tương ứng với câu hỏi đã được trả lời.

> **Trạng thái tài liệu:** đã chốt đầy đủ nghiệp vụ VÀ đã đối chiếu với source code hiện hành — **không còn điểm nào đang treo chờ xác nhận**, đủ điều kiện chuyển sang giai đoạn thiết kế/coding.
>
> Đội phát triển đọc thêm **mục I — Ghi chú triển khai kỹ thuật** (danh sách thay đổi schema, invariant bị thay thế, test bị ảnh hưởng) trước khi bắt đầu.

***

## MỤC LỤC — 19 MỤC CHIA THEO 4 PHẦN

> **[Chốt Đ7]** Tài liệu được sắp xếp lại theo **4 đầu mục triển khai** để đội phát triển dễ chia việc. Nội dung nghiệp vụ **không thay đổi** — chỉ đổi thứ tự và cách nhóm.
> Kèm theo tài liệu này có **`CR-02_BanDoTrienKhai.md`** — bản đồ triển khai gọn cho từng phần (phạm vi, phụ thuộc, dữ liệu chạm tới, danh sách AC, tiêu chí hoàn thành).

### PHẦN 1 — CẤU HÌNH HỆ THỐNG *(4 mục)*

| Mã | Nội dung | Loại |
| --- | --- | --- |
| CR-01 | Chi phí gián tiếp: tính chi tiết theo từng khoản mục | Business rule change |
| CR-02 | Category 2 cấp: Line sản phẩm + Loại hình dịch vụ | Business rule change |
| CR-03 | Contingency cấu hình theo từng loại hình dịch vụ | Business rule change |
| CR-03B | Cấu hình Vendor thuê ngoài (tab cấu hình hệ thống) | New feature |

### PHẦN 2 — TẠO & ESTIMATE BÁO GIÁ THEO LINE SẢN PHẨM VÀ LOẠI HÌNH DỊCH VỤ *(6 mục)*

| Mã | Nội dung | Loại |
| --- | --- | --- |
| CR-04 | Chọn category khi tạo báo giá (**nhiều Line sản phẩm**, nhiều loại hình dịch vụ) | Business rule change |
| **CR-05** | **Công thức tính giá vốn cuối cùng theo hạng mục tính giá** | **Business rule change · [TIỀN]** |
| CR-06 | Mô tả nội dung công việc khi tạo báo giá (bỏ đính kèm file) | New feature |
| CR-07 | Sales bắt buộc tham gia estimate, được tính là 1 PIC | New feature |
| CR-09 | Import Task/Sub-task, phân cấp 2 level | New feature |
| CR-10 | Dự án có thuê ngoài | New feature |

### PHẦN 3 — LUỒNG TRẠNG THÁI VÀ PHÊ DUYỆT BÁO GIÁ *(6 mục)*

| Mã | Nội dung | Loại |
| --- | --- | --- |
| CR-08 | Đổi tên bước "Review" → "Techlead Review" | UI text change |
| **CR-11** | **Bước "Price Setting": Sales nhập 1 Tổng giá bán, hệ thống phân bổ & tính PnL** | **Business rule change · [TIỀN]** |
| CR-13 | Cập nhật nội dung & link thông báo kết quả duyệt final | Business rule change + Bug fix |
| CR-15 | Phân quyền xem Giá bán & PnL (dữ liệu thương mại) | New — Đợt 3 |
| CR-17 | Khoá số liệu báo giá sau khi Done | New — Đợt 2 |
| CR-18 | Phạm vi hiển thị báo giá theo actor & chuyển người phụ trách (owner) | New — Đợt 5 |

### PHẦN 4 — GIAO DIỆN *(3 mục)*

| Mã | Nội dung | Loại |
| --- | --- | --- |
| CR-12 | Chuẩn hóa triệt để định dạng số tiền VND | Bug fix (UI) |
| CR-14 | Làm nổi bật hiển thị Giá vốn, Giá bán, PnL | UI enhancement |
| CR-16 | Nội dung file export báo giá theo phân quyền actor | New — Đợt 3 |

> **Ghi chú về cách xếp nhóm:** CR-15 và CR-18 là quy tắc **phân quyền**, xếp vào Phần 3 vì gắn với actor ở từng bước của luồng. CR-16 (file export) xếp vào Phần 4 vì là **đầu ra người dùng nhận được** — nhưng quy tắc phân quyền của nó bắt nguồn từ CR-15, và việc lọc dữ liệu **phải làm ở tầng server**.

***

## PHẦN 1 — CẤU HÌNH HỆ THỐNG

> **Phạm vi:** thiết lập dữ liệu nền của module, làm tiền đề cho mọi báo giá tạo sau đó. Gồm 4 mục: **CR-01, CR-02, CR-03, CR-03B**.
> **Đặc điểm:** không đụng tới bản ghi báo giá; có thể triển khai độc lập và sớm nhất.

### CR-01 — Chi phí gián tiếp: tính chi tiết theo từng khoản mục

**Loại:** Business rule change — bổ sung cho BR-15
**Hiện trạng:** Chi phí gián tiếp tháng hiện tại chỉ tính 1 con số tổng duy nhất = (trung bình cộng chi phí 3 tháng gần nhất của 10 danh mục / headcount active tại tháng hiện tại).

**Yêu cầu:**

1. Tính chi phí gián tiếp theo **từng mã khoản mục** (3–12): Chi phí gián tiếp của khoản mục = (trung bình cộng chi phí 3 tháng gần nhất của khoản mục đó / headcount active tại tháng hiện tại).
2. Tổng chi phí gián tiếp tháng = tổng của chi phí gián tiếp từng khoản mục — **giá trị tổng không đổi** so với cách tính cũ, đây chỉ là bổ sung breakdown chi tiết theo khoản mục để hiển thị, không thay đổi kết quả cuối cùng.
3. Công thức chi phí gián tiếp áp dụng cho 1 báo giá (BR-15: `× số PIC unique của dự án`) **giữ nguyên**, áp dụng nhân hệ số này ở bước tổng hợp cuối (sau khi đã cộng breakdown từng khoản mục), không nhân riêng lẻ theo từng khoản mục trước khi cộng.
4. **[Chốt Đ2-C3] Số liệu chi phí gián tiếp của báo giá đã Done được khoá tại thời điểm chốt.** Khi mở lại xem chi tiết báo giá đã Done, hệ thống hiển thị đúng số liệu đã khoá, **không** tính lại theo chi phí gián tiếp hiện hành (xem CR-17).

**Ví dụ (theo dữ liệu tháng 4–6, tính cho tháng 7):**

| Khoản mục | T4 | T5 | T6 | Chi phí gián tiếp dự kiến T7 |
| --- | --- | --- | --- | --- |
| Khoản mục 3 | 15tr | 5tr | 10tr | 10tr |
| Khoản mục 4 | 21tr | 10tr | 20tr | 17tr |
| **Tổng** | | | | **27tr** |

> *Ghi chú:* ví dụ trên minh họa bước **trung bình cộng 3 tháng** với giả định headcount active = 1 để dễ theo dõi. Trong thực tế mỗi con số ở cột cuối còn phải **chia cho headcount active của tháng hiện tại** theo đúng công thức tại mục 1.

**Acceptance Criteria:**

- **AC-CR01-01**: Given dữ liệu chi phí 3 tháng gần nhất của các khoản mục 3–12, When hệ thống tính chi phí gián tiếp dự kiến tháng hiện tại, Then hiển thị breakdown chi phí theo từng khoản mục và tổng chi phí gián tiếp (tổng phải khớp với cách tính cũ nếu dùng cùng bộ dữ liệu).
- **AC-CR01-02**: Given báo giá có N PIC unique, When hệ thống tính chi phí gián tiếp áp dụng cho báo giá đó, Then công thức vẫn nhân tổng chi phí gián tiếp với N (theo BR-15), không đổi.
- **AC-CR01-03**: Given 1 báo giá đã Done từ tháng trước và chi phí gián tiếp tháng hiện tại đã thay đổi, When user mở lại chi tiết báo giá đó, Then breakdown chi phí gián tiếp hiển thị đúng số liệu đã khoá tại thời điểm chốt, không đổi theo số hiện tại.

***

### CR-02 — Category 2 cấp: Line sản phẩm (level 1) + Loại hình dịch vụ (level 2)

**Loại:** Business rule change — thay thế cấu trúc Category trong BRD (mục Entity Danh mục dịch vụ)
**Hiện trạng:** Category chỉ set up 1 level.

**Yêu cầu:**

1. Cho phép cấu hình Category theo 2 cấp:
    - **Level 1** (cấp cha): Line sản phẩm — ví dụ: Google Cloud, Google Workspace.
    - **Level 2** (cấp con): Loại hình dịch vụ triển khai thuộc line sản phẩm đó — ví dụ: Triển khai hạ tầng, Migration.
2. **[Chốt Đ1-C1] Loại hình dịch vụ (level 2) được quản lý RIÊNG theo từng Line sản phẩm — không dùng chung danh mục toàn hệ thống.**
    - Hai Line khác nhau **được phép có loại hình dịch vụ trùng tên** (VD: "Migration" của Google Cloud và "Migration" của Google Workspace) nhưng đây là **2 bản ghi độc lập**, cấu hình % contingency độc lập, thống kê số liệu độc lập.
    - Trong phạm vi **cùng 1 Line sản phẩm**, tên loại hình dịch vụ phải là **duy nhất** (không cho trùng tên trong cùng cha).
    - **[Chốt Đ5-B7]** Tên **Line sản phẩm (level 1)** phải **duy nhất toàn hệ thống** — không cho 2 Line trùng tên. Cả 2 quy tắc unique đều **không phân biệt hoa thường** (case-insensitive), nhất quán với ràng buộc đang có trên danh mục dịch vụ.
3. Một line sản phẩm **có thể không có** loại hình dịch vụ con nào (level 2 rỗng) — trường hợp này khi tạo báo giá không bắt buộc chọn level 2 (xem chi tiết ở CR-04).
4. **Migration dữ liệu cũ:** toàn bộ category 1 cấp hiện có được coi là **level 1**; không tự sinh level 2 cho các category này (level 2 để trống, bổ sung thủ công sau nếu cần).
5. **[Chốt Đ1-C3]** Báo giá cũ đã gắn category 1 cấp: tiếp tục hiển thị đúng category đó ở **level 1**, level 2 để trống — **không gán ngược** loại hình dịch vụ cho báo giá cũ, không đụng dữ liệu lịch sử.
6. Quyền tạo/sửa/toggle Active-Inactive của cả level 1 và level 2 giữ nguyên theo BR-29: CSO/CFO/CEO/CIO, không xóa cứng, chỉ toggle trạng thái; dropdown khi tạo báo giá mới chỉ hiển thị các level đang ACTIVE.
7. **[Chốt Đ2-C4] Quy tắc khi toggle INACTIVE 1 Line sản phẩm (level 1):**
    - Toàn bộ **loại hình dịch vụ con** thuộc Line đó **tự động bị ẩn** khỏi danh sách chọn khi tạo báo giá **MỚI** (kể cả các loại hình con vẫn đang ở trạng thái ACTIVE).
    - Trạng thái ACTIVE/INACTIVE của từng loại hình con **không bị ghi đè** trong dữ liệu — khi bật lại Line cha, các loại hình con quay lại đúng trạng thái trước đó.
    - **Các báo giá cũ** đã gắn Line/loại hình dịch vụ này **vẫn hiển thị và vận hành bình thường** (kể cả báo giá đang dở dang giữa luồng) — không ảnh hưởng dữ liệu lịch sử; các hạng mục thuộc Line bị tắt **vẫn tính giá vốn và vẫn xuất hiện trong breakdown theo Line** như bình thường.
    - **[Chốt Đ6-1] Trên cây chọn 2 cấp khi tạo báo giá mới (CR-04 mục 1):** Line INACTIVE bị ẩn **cả nhánh** (Line và toàn bộ loại hình con), nhưng **các Line ACTIVE khác vẫn chọn được bình thường trong cùng báo giá đó** — việc tắt 1 Line không cản trở việc tạo báo giá nhiều Line.

**Acceptance Criteria:**

- **AC-CR02-01**: Given CSO đang cấu hình Category, When tạo mới 1 category level 1 "Google Cloud", Then có thể thêm nhiều category level 2 trực thuộc (VD: "Triển khai hạ tầng", "Migration").
- **AC-CR02-02**: Given hệ thống đã migrate dữ liệu, When xem lại các category cũ (1 cấp), Then các category này hiển thị đúng ở level 1, không có level 2 con nào được tự sinh.
- **AC-CR02-03**: Given 1 báo giá cũ đã gắn category 1 cấp trước đây, When xem lại báo giá đó, Then category hiển thị ở level 1 như cũ, level 2 để trống, không lỗi hiển thị.
- **AC-CR02-04**: Given Line "Google Cloud" và Line "Google Workspace" đều có loại hình dịch vụ tên "Migration", When CSO cấu hình % contingency cho từng cái, Then hai giá trị được lưu độc lập, không ảnh hưởng lẫn nhau.
- **AC-CR02-05**: Given CSO cố tạo 2 loại hình dịch vụ cùng tên "Migration" trong cùng Line "Google Cloud", When lưu, Then hệ thống báo lỗi trùng tên trong cùng Line sản phẩm.
- **AC-CR02-07**: Given đã tồn tại Line sản phẩm "Google Cloud", When CSO tạo Line mới tên "google cloud", Then hệ thống báo lỗi trùng tên Line sản phẩm (không phân biệt hoa thường).
- **AC-CR02-06**: Given Line "Google Cloud" bị chuyển INACTIVE, When Sales tạo báo giá mới, Then cả Line "Google Cloud" và toàn bộ loại hình dịch vụ con của nó không xuất hiện trên cây chọn, **nhưng Sales vẫn chọn được các Line ACTIVE khác trong cùng báo giá đó**; các báo giá cũ gắn Line này vẫn xem/chạy luồng bình thường.

***

### CR-03 — Contingency cấu hình theo từng loại hình dịch vụ

**Loại:** Business rule change — thay thế BR-02
**Hiện trạng:** Chỉ cấu hình 1 % contingency chung cho toàn bộ dự án.

**Yêu cầu:**

1. Cho phép cấu hình % contingency **riêng theo từng cặp (line sản phẩm level 1 + loại hình dịch vụ level 2)** — ví dụ: Triển khai hạ tầng của Google Cloud = 10%, Migration của Google Workspace = 8%.
2. **Điều kiện xuất hiện trong dropdown (kiểm tra theo TỪNG loại hình dịch vụ, không theo cả Line):** một loại hình dịch vụ (level 2) đang ACTIVE chỉ xuất hiện trong danh sách chọn khi tạo báo giá (CR-04) nếu **chính nó đã được cấu hình % contingency**. Loại hình dịch vụ chưa cấu hình bị ẩn khỏi lựa chọn cho đến khi được cấu hình; các loại hình dịch vụ khác trong cùng Line **không** bị ảnh hưởng.
3. Với line sản phẩm không có level 2 (theo CR-02, mục 3), cấu hình contingency áp dụng trực tiếp cho line sản phẩm đó ở level 1.
4. Contingency default này vẫn có thể sửa riêng cho từng báo giá cụ thể (giữ tinh thần BR-02), không ảnh hưởng giá trị default chung.

    **[Chốt Đ5-A6] Quy tắc sửa contingency riêng cho báo giá — thay thế hoàn toàn [Chốt Đ4-G6]:**

    > **[Chốt Đ6-1] Cách đọc mục này:** mọi chỗ ghi *"loại hình dịch vụ"* trong mục 4 này đọc là **"hạng mục tính giá"** theo định nghĩa tại CR-04 — bao gồm cả trường hợp hạng mục là **chính Line sản phẩm** (khi Line không có loại hình con). Các mục 1–3 và 5–6 của CR-03 nói về **cấu hình danh mục** nên vẫn dùng đúng từ "loại hình dịch vụ".

    - **Sửa theo TỪNG hạng mục tính giá.** Một báo giá chọn N hạng mục thì có **N giá trị contingency độc lập**; người sửa chọn đúng hạng mục cần sửa (hiển thị theo quy ước `Line / Loại hình dịch vụ`, hoặc chỉ tên Line nếu hạng mục là chính Line) và nhập % mới cho riêng hạng mục đó. **Không** có thao tác "sửa 1 giá trị chung ghi đè tất cả".
    - **Actor & thời điểm được sửa:**

    | Bước | Actor được sửa |
    | --- | --- |
    | Price Setting | **Sales owner** hiện hành (xem định nghĩa tại CR-15) |
    | Waiting Approval | **CEO / CFO / CSO / CIO** |
    | Mọi bước khác (New, Pending Tech lead, Estimate, Techlead Review, Done) | **Không ai** — trường ở chế độ read-only |

    - **Hệ quả mỗi lần sửa:** hệ thống ghi **1 event `contingency_updated`** (kèm tên hạng mục theo quy ước `Line / Loại hình`, giá trị cũ/mới, người sửa, thời điểm) và **tính lại toàn bộ số tiền của báo giá ngay trong cùng transaction**: giá vốn của loại hình dịch vụ đó → tổng giá vốn final → Rate ngày/giờ theo giá vốn → PnL (nếu đã có Tổng giá bán).
    - **Phân biệt với "Tính lại" (CR-11 mục 2.5):** sửa contingency **chỉ tính lại bằng dữ liệu đầu vào đã khoá trong snapshot** (lương PIC, headcount, chi phí gián tiếp giữ nguyên như lần tính gần nhất) — **không** lấy dữ liệu mới từ hệ thống. Chỉ nút **"Tính lại"** mới nạp lại dữ liệu đầu vào hiện hành.
    - **Tổng giá bán không bị ảnh hưởng** khi sửa contingency — Sales đã nhập bao nhiêu thì giữ nguyên, chỉ PnL thay đổi theo giá vốn mới.
    - Sau khi Done, giá trị bị khoá theo CR-17.
5. **[Chốt Đ1-C2] Migration/khởi tạo dữ liệu khi go-live (BẮT BUỘC — tránh gián đoạn nghiệp vụ):**
    - Tại thời điểm triển khai CR-02, hệ thống **tự động gán mức % contingency đang dùng hiện tại** (giá trị contingency chung của BR-02 cũ) cho **tất cả** loại hình dịch vụ (level 2) đang ACTIVE, và cho tất cả Line sản phẩm không có level 2.
    - Nhờ đó ngay sau khi go-live, **không có** loại hình dịch vụ nào bị ẩn khỏi dropdown vì "chưa cấu hình contingency"; việc điều chỉnh % riêng cho từng loại hình được CSO/CFO/CEO/CIO làm dần sau đó.
    - Quy tắc "chưa cấu hình → ẩn khỏi dropdown" ở mục 2 vẫn áp dụng cho các loại hình dịch vụ **tạo mới sau go-live**.
6. **[Chốt Đ5 — bổ sung] Xử lý BÁO GIÁ ĐANG DỞ DANG tại thời điểm go-live** (bổ sung cho mục 5, vốn chỉ xử lý dữ liệu cấu hình):
    - Các báo giá **chưa Done** đang nằm giữa luồng tại thời điểm triển khai CR-02 được xử lý như sau:
        - **Line sản phẩm:** giữ nguyên category cũ, coi là level 1 (theo CR-02 mục 4).
        - **Loại hình dịch vụ:** để **trống** — báo giá tiếp tục vận hành theo nhánh "line sản phẩm không có level 2" (CR-04 mục 2), không bắt người dùng chọn bổ sung giữa chừng.
        - **% Contingency:** giá trị 1-con-số hiện có của báo giá được **giữ nguyên và áp cho toàn bộ báo giá** — tương đương trường hợp báo giá chỉ có **đúng 1 hạng mục tính giá, và hạng mục đó chính là Line** (nhánh [Chốt Đ6-3]), cho ra **đúng kết quả giá vốn như trước khi go-live** (CR-05 mục 3).
        - **[Chốt Đ6-1] Hệ quả trên giao diện mới:** báo giá migrate có đúng 1 hạng mục ⇒ breakdown theo Line chỉ có **1 nhóm duy nhất**, và PnL ở cả 3 mức (hạng mục / Line / tổng) **trùng nhau** — không phát sinh chênh lệch, không cần xử lý đặc biệt.
        - **Dòng công việc:** giữ nguyên ở 1 cấp, coi toàn bộ là Sub-task; không tự sinh Task cha.
        - **Tổng giá bán / PnL:** để trống. Khi báo giá đi tới bước Price Setting mới, Sales owner nhập như báo giá bình thường.
    - **Nguyên tắc bất biến:** việc go-live CR-02 **không được làm thay đổi bất kỳ con số giá vốn nào** của báo giá đang dở dang. Cần có kiểm thử đối chiếu trước/sau migration cho nhóm báo giá này.
    - **Chủ sở hữu (owner):** báo giá cũ lấy **người tạo** làm Sales owner mặc định (CR-18).

**Acceptance Criteria:**

- **AC-CR03-01**: Given line sản phẩm "Google Cloud" có 2 loại hình dịch vụ ACTIVE là "Triển khai hạ tầng" (đã cấu hình 10%) và "Migration" (chưa cấu hình), When Sales tạo báo giá và chọn line sản phẩm "Google Cloud", Then dropdown loại hình dịch vụ chỉ hiển thị "Triển khai hạ tầng", ẩn "Migration" cho đến khi được cấu hình % contingency.
- **AC-CR03-02**: Given báo giá đã tạo với contingency default theo cấu hình, When actor có quyền sửa contingency riêng cho báo giá đó, Then giá trị default chung không bị thay đổi.
- **AC-CR03-03**: Given hệ thống vừa go-live CR-02 và chưa ai kịp cấu hình contingency theo loại hình, When Sales tạo báo giá mới, Then mọi loại hình dịch vụ ACTIVE đều hiển thị trong dropdown với % contingency = mức chung đang dùng trước khi go-live.
- **AC-CR03-04**: Given CSO tạo mới 1 loại hình dịch vụ sau go-live và chưa cấu hình % contingency, When Sales tạo báo giá, Then loại hình dịch vụ mới này bị ẩn khỏi dropdown.
- **AC-CR03-05**: Given báo giá có 2 loại hình dịch vụ (10% và 8%) đang ở bước Price Setting, When Sales owner sửa contingency của loại hình dịch vụ thứ nhất thành 12%, Then chỉ giá vốn của loại hình đó được tính lại, loại hình thứ hai giữ nguyên 8%, tổng giá vốn và PnL cập nhật ngay, Tổng giá bán giữ nguyên, và hệ thống ghi 1 event `contingency_updated`.
- **AC-CR03-06**: Given báo giá đang ở bước Estimate hoặc Techlead Review, When bất kỳ actor nào mở chi tiết, Then trường % contingency ở chế độ read-only, không có nút sửa.
- **AC-CR03-07**: Given lương của 1 PIC vừa thay đổi trong hệ thống và báo giá đang ở Waiting Approval, When CSO sửa contingency, Then giá vốn được tính lại **chỉ theo % contingency mới** với dữ liệu lương cũ đã khoá trong snapshot (không tự động nạp lương mới); muốn cập nhật lương mới thì phải bấm riêng nút "Tính lại".
- **AC-CR03-08**: Given tập báo giá đang dở dang trước khi go-live CR-02, When chạy migration và tính lại, Then **mọi con số giá vốn giữ nguyên tuyệt đối** so với trước migration; loại hình dịch vụ để trống; % contingency cũ được áp cho toàn báo giá.
- **AC-CR03-09**: Given 1 báo giá cũ đang ở bước Estimate tại thời điểm go-live, When PIC tiếp tục estimate và đi hết luồng, Then báo giá chạy bình thường theo nhánh "không có loại hình dịch vụ", tới Price Setting thì Sales owner nhập Tổng giá bán như báo giá mới.

***

### CR-03B — Cấu hình Vendor thuê ngoài

**Loại:** New feature — bổ sung tab mới trong khu vực **Cấu hình hệ thống**, đứng cạnh Category và Contingency
**Hiện trạng:** Hệ thống chưa có bất kỳ khái niệm vendor/đối tác thuê ngoài nào.

> Mục này tách riêng khỏi CR-10 theo đề nghị của khách hàng: **cấu hình hệ thống** và **nghiệp vụ báo giá** là hai phạm vi khác nhau, cần mô tả độc lập để dễ triển khai và phân quyền.

**Yêu cầu:**

1. Bổ sung tab **"Vendor thuê ngoài"** trong khu vực Cấu hình hệ thống, cùng nhóm quyền với Category/Contingency: **CSO / CFO / CEO / CIO**.
2. **Các trường của 1 vendor:**

| # | Trường | Bắt buộc | Ràng buộc |
| --- | --- | :---: | --- |
| 1 | Tên vendor | ✔ | Duy nhất toàn hệ thống, không phân biệt hoa thường |
| 2 | **% phí công ty (markup)** | ✔ | Số ≥ 0 và ≤ 100, tối đa 2 chữ số thập phân |
| 3 | Trạng thái | ✔ | ACTIVE / INACTIVE, mặc định ACTIVE |
| 4 | Ghi chú | ✘ | Tối đa 500 ký tự |

3. **Quản lý vòng đời:** chỉ **toggle Active/Inactive**, **không xoá cứng** — áp dụng nguyên tắc quản lý danh mục giống BR-29/CR-02.
    - Vendor INACTIVE **không xuất hiện** trong danh sách chọn khi Techlead đánh dấu "Thuê ngoài" cho báo giá mới.
    - Các báo giá cũ đã gắn vendor INACTIVE **vẫn hiển thị bình thường**, không ảnh hưởng dữ liệu lịch sử.
4. **[Chốt Đ1-C13] % phí là cố định theo vendor**, được áp tự động khi Techlead chọn — Techlead không sửa tay % này cho từng dự án (xem CR-10 mục 3).
5. **Ảnh hưởng khi sửa % phí của vendor đang được dùng:**
    - Báo giá **đang dở dang** (chưa Done): giữ nguyên % đã lấy tại thời điểm Techlead nhập — vì đây là số liệu đã tham gia vào giá vốn đang chờ duyệt.
    - Báo giá **tạo mới sau đó**: dùng % mới.
    - Báo giá đã **Done**: bất biến theo CR-17.
6. Mỗi thao tác tạo/sửa/toggle vendor được ghi vào **activity log** kèm người thực hiện và giá trị cũ/mới, nhất quán với cách quản lý Category và Tham số chung hiện có.

**Acceptance Criteria:**

- **AC-CR03B-01**: Given CSO đang ở tab "Vendor thuê ngoài", When CSO thêm vendor "Công ty ABC" với % phí = 15, Then vendor được lưu ở trạng thái ACTIVE và xuất hiện trong danh sách chọn khi Techlead đánh dấu "Thuê ngoài".
- **AC-CR03B-02**: Given đã tồn tại vendor "Công ty ABC", When CSO tạo vendor tên "công ty abc", Then hệ thống báo lỗi trùng tên vendor.
- **AC-CR03B-03**: Given tab Vendor, When user quan sát danh sách, Then **không có** nút Xoá — chỉ có toggle Active/Inactive.
- **AC-CR03B-04**: Given vendor "Công ty ABC" bị chuyển INACTIVE, When Techlead đánh dấu 1 dòng công việc là "Thuê ngoài" ở báo giá mới, Then vendor này không xuất hiện trong dropdown; các báo giá cũ đã gắn vendor này vẫn xem được bình thường.
- **AC-CR03B-05**: Given báo giá X đang ở Waiting Approval có dòng thuê ngoài với vendor % phí = 15, When CSO đổi % phí của vendor đó thành 20, Then báo giá X giữ nguyên 15%, báo giá tạo mới sau đó dùng 20%.
- **AC-CR03B-06**: Given nhân sự không thuộc nhóm CSO/CFO/CEO/CIO, When truy cập tab Vendor thuê ngoài, Then bị từ chối truy cập (kể cả gọi thẳng API).

***

## PHẦN 2 — TẠO & ESTIMATE BÁO GIÁ THEO LINE SẢN PHẨM VÀ LOẠI HÌNH DỊCH VỤ

> **Phạm vi:** từ lúc Sales tạo báo giá đến khi đội kỹ thuật estimate xong và tính ra giá vốn. Gồm 6 mục: **CR-04, CR-05, CR-06, CR-07, CR-09, CR-10**.
> **Đặc điểm:** đây là phần **nặng nhất và rủi ro nhất** — chứa 1 hạng mục đụng trực tiếp con số tiền (CR-05). Phụ thuộc hoàn toàn vào Phần 1.

### CR-04 — Chọn category khi tạo báo giá (nhiều Line sản phẩm, nhiều loại hình dịch vụ)

**Loại:** Business rule change — thay thế phần chọn Category trong FR-04/BRD
**Hiện trạng:** Khi tạo báo giá chỉ chọn 1 category (do category chưa phân cấp).

> ### 📌 KHÁI NIỆM NỀN: "HẠNG MỤC TÍNH GIÁ"
>
> Từ **[Chốt Đ6-1]** trở đi, tài liệu dùng thống nhất khái niệm **"hạng mục tính giá"** (gọi tắt: **hạng mục**) — đây là **đơn vị nhỏ nhất mà hệ thống tính giá vốn, phân bổ giá bán và tính PnL**. Một hạng mục là **một trong hai**:
>
> | Trường hợp | Hạng mục tính giá là | Contingency lấy từ |
> | --- | --- | --- |
> | Line sản phẩm **có** loại hình dịch vụ con | **Cặp (Line + Loại hình dịch vụ)** | Cấu hình của chính loại hình dịch vụ đó |
> | Line sản phẩm **không có** loại hình dịch vụ con | **Chính Line sản phẩm đó** | Cấu hình đặt thẳng ở Line (CR-03 mục 3) |
>
> **[Chốt Đ6-3]** Một báo giá **được phép trộn cả hai trường hợp** — ví dụ chọn "Google Cloud / Triển khai hạ tầng", "Google Cloud / Migration" và "Dịch vụ tư vấn" (Line không có con) trong cùng 1 báo giá. Bộ máy tính toán xử lý mọi hạng mục **theo cùng một cách**, không phân biệt hạng mục đó đến từ cấp 1 hay cấp 2.
>
> **[Chốt Đ6-2] Quy ước hiển thị tên hạng mục:** luôn hiển thị dạng **`Line sản phẩm / Loại hình dịch vụ`** — ví dụ `Google Cloud / Migration`. Với hạng mục là chính Line thì hiển thị **`Tên Line`**. Quy ước này bắt buộc áp dụng ở **mọi nơi**: dropdown chọn, bảng công việc, droplist trong file import, breakdown giá vốn/PnL, file export và nội dung thông báo.
>
> **Lý do:** hai Line khác nhau được phép có loại hình dịch vụ **trùng tên** (theo [Chốt Đ1-C1]). Trước đây không gây nhầm lẫn vì mỗi báo giá chỉ có 1 Line; nay một báo giá có thể chứa cả `Google Cloud / Migration` lẫn `Google Workspace / Migration`, nên **bắt buộc** phải ghép tên Line vào để phân biệt.

**Yêu cầu:**

1. **[Chốt Đ6-1] Một báo giá được chọn NHIỀU Line sản phẩm (level 1).** ⛔ Quy tắc cũ *"mỗi báo giá chỉ 1 Line, cần nhiều Line thì tạo nhiều báo giá riêng"* ([Chốt Đ1-C4]) **bị bãi bỏ**.
    - Bắt buộc chọn **ít nhất 1** Line sản phẩm; không giới hạn số Line tối đa.
    - Giao diện chọn theo dạng **cây 2 cấp**: liệt kê các Line ACTIVE, mở rộng ra các loại hình dịch vụ con đủ điều kiện; người dùng tick chọn nhiều mục ở cả hai cấp.
2. Với **mỗi Line sản phẩm đã chọn**:
    - Nếu Line đó **có** loại hình dịch vụ (level 2) ACTIVE và đã cấu hình đủ contingency (theo CR-03) → **bắt buộc chọn ít nhất 1** loại hình dịch vụ của Line đó, được phép chọn **nhiều**.
    - Nếu Line đó **không có** loại hình dịch vụ con nào → bản thân Line trở thành **1 hạng mục tính giá**, bỏ qua bước chọn level 2.
    - Không được phép chọn 1 Line mà **không** chọn loại hình dịch vụ nào trong khi Line đó có loại hình con — hệ thống chặn submit.
3. Phần Estimate (Task/Sub-task, Manday, PIC) phải **gắn từng dòng công việc với đúng 1 HẠNG MỤC TÍNH GIÁ** trong số các hạng mục đã chọn cho báo giá đó (không có dòng công việc "chung", không gắn hạng mục nào).
    - **[Chốt Đ1-C5]** Nếu 1 công việc trên thực tế phục vụ nhiều hạng mục, **người nhập phải tách thành nhiều dòng**, mỗi dòng gắn 1 hạng mục kèm Manday tương ứng. Hệ thống không hỗ trợ 1 dòng gắn nhiều hạng mục.
4. **[Chốt Đ2-C5] KHOÁ danh sách hạng mục ngay sau khi tạo báo giá.**
    - Danh sách Line sản phẩm và loại hình dịch vụ được chốt tại bước **Tạo mới** và **KHÔNG được phép thêm/bớt** ở bất kỳ bước nào sau đó (Pending Tech lead, Estimate, Techlead Review, Price Setting, Waiting Approval) — kể cả Sales owner lẫn Techlead.
    - Nếu thực sự cần thay đổi, Sales phải **tạo báo giá mới**.
    - Trên UI, sau khi báo giá đã submit, control chọn Line/Loại hình dịch vụ hiển thị ở chế độ **read-only** (disable), không phải ẩn đi.
5. **[Chốt Đ2-C6] Hạng mục đã chọn nhưng không có dòng công việc nào gắn vào:**
    - Khi nhân sự (Sales owner hoặc PIC) bấm **Complete** ở bước Estimate, nếu tồn tại hạng mục đã chọn nhưng **không có Sub-task nào** gắn vào, hệ thống hiển thị **cảnh báo** (popup confirm) liệt kê rõ tên các hạng mục đang trống (theo quy ước `Line / Loại hình`).
    - Nhân sự có 2 lựa chọn:
        - **Xác nhận hoàn thành** → luồng tiếp tục bình thường; các hạng mục trống **bị bỏ qua khi tính giá vốn** (không phát sinh chi phí, không xuất hiện trong breakdown giá vốn/PnL).
        - **Quay lại chỉnh sửa** → đóng cảnh báo, nhân sự tiếp tục nhập liệu.
    - Hệ thống **không chặn** báo giá vì lý do này.
    - **[Chốt Đ6-1]** Nếu **toàn bộ** hạng mục của một Line đều trống, Line đó cũng bị bỏ qua khỏi breakdown theo Line (CR-11 mục 2.3).

**Acceptance Criteria:**

- **AC-CR04-01**: Given Sales tạo báo giá mới và chọn line sản phẩm "Google Cloud" (có 2 loại hình dịch vụ ACTIVE đã đủ contingency), When Sales cố gắng submit mà chưa chọn loại hình dịch vụ nào của Line đó, Then hệ thống chặn submit và báo lỗi bắt buộc chọn ít nhất 1 loại hình dịch vụ.
- **AC-CR04-07**: Given Sales tạo báo giá mới, When Sales chọn đồng thời "Google Cloud / Triển khai hạ tầng", "Google Cloud / Migration" và "Google Workspace / Migration", Then hệ thống chấp nhận và báo giá có **3 hạng mục tính giá** thuộc **2 Line sản phẩm**.
- **AC-CR04-08**: Given báo giá chứa cả `Google Cloud / Migration` và `Google Workspace / Migration`, When người nhập mở dropdown gắn hạng mục cho dòng công việc, Then thấy 2 mục riêng biệt có tên đầy đủ kèm Line, không bị nhầm là 1.
- **AC-CR04-09**: Given Line "Dịch vụ tư vấn" không có loại hình dịch vụ con, When Sales chọn Line này cùng với "Google Cloud / Migration" trong cùng 1 báo giá, Then hệ thống chấp nhận; báo giá có 2 hạng mục, trong đó 1 hạng mục là chính Line "Dịch vụ tư vấn" với contingency lấy từ cấu hình của Line.
- **AC-CR04-02**: Given báo giá đã chọn 2 loại hình dịch vụ "Triển khai hạ tầng" và "Migration", When PIC/Sales thêm 1 dòng công việc, Then dòng công việc đó bắt buộc phải gắn với 1 trong 2 loại hình dịch vụ đã chọn.
- **AC-CR04-03**: Given line sản phẩm "X" không có loại hình dịch vụ con nào, When Sales chọn line sản phẩm "X", Then hệ thống không yêu cầu chọn thêm level 2, cho phép tiếp tục tạo báo giá bình thường.
- **AC-CR04-04**: Given báo giá đã submit và đang ở bước Estimate, When Sales hoặc Techlead mở chi tiết báo giá, Then trường Line sản phẩm và Loại hình dịch vụ ở trạng thái read-only, không có nút thêm/bớt loại hình dịch vụ.
- **AC-CR04-05**: Given báo giá chọn 2 loại hình dịch vụ nhưng chỉ có Sub-task gắn vào 1 loại hình, When PIC bấm Complete, Then hệ thống hiển thị cảnh báo nêu rõ loại hình dịch vụ đang trống và cho phép chọn "Xác nhận hoàn thành" hoặc "Quay lại chỉnh sửa".
- **AC-CR04-06**: Given PIC đã xác nhận hoàn thành ở tình huống AC-CR04-05, When hệ thống tính giá vốn, Then loại hình dịch vụ trống không xuất hiện trong breakdown giá vốn và không phát sinh chi phí; các bước sau vẫn chạy bình thường.

***

### CR-05 — Cập nhật công thức tính giá vốn cuối cùng theo loại hình dịch vụ

**Loại:** Business rule change — thay thế BR-17, liên quan CR-03, CR-04, CR-10, CR-11
**Hiện trạng:** Giá vốn cuối cùng = (Chi phí nhân sự + Chi phí gián tiếp) × (1 + % Contingency) — tính 1 lần cho toàn bộ báo giá với 1 % contingency chung.

> **[Chốt Đ6-1] Cách đọc mục này sau khi cho phép nhiều Line sản phẩm:** mọi chỗ ghi *"loại hình dịch vụ i"* trong CR-05 nay đọc là **"hạng mục tính giá i"** theo định nghĩa tại CR-04. **Công thức và thuật toán KHÔNG thay đổi một dòng nào** — vì đơn vị tính vốn đã là cấp 2 (hoặc cấp 1 khi Line không có con), và mỗi hạng mục vốn đã có % contingency độc lập. Việc mở rộng sang nhiều Line chỉ làm **tăng số phần tử trong tập hạng mục**, không đổi bản chất phép tính.

**Yêu cầu:**

1. Vì mỗi hạng mục tính giá trong 1 báo giá có thể có % contingency khác nhau (CR-03), công thức tính lại như sau, áp dụng cho từng hạng mục `i` mà báo giá đã chọn **và có phát sinh dòng công việc**:
    - **Chi phí nhân sự_i** = Σ (Rate ngày theo lương của từng PIC × Manday của các dòng công việc **nội bộ** thuộc loại hình dịch vụ i) — theo phân bổ dòng công việc ở CR-04.
        - **[Chốt Đ2-C2]** Sales tham gia estimate cũng được tính vào Chi phí nhân sự với **Rate ngày theo lương thực tế của Sales** trong hệ thống, giống mọi nhân sự khác (xem CR-07).
        - Các dòng công việc **thuê ngoài không** đi qua công thức này (xem CR-10).
    - **Chi phí gián tiếp_i** = Tổng chi phí gián tiếp của báo giá (theo BR-15/CR-01) **phân bổ theo số PIC unique quy đổi riêng của loại hình dịch vụ i** trên tổng số PIC unique quy đổi của cả báo giá.
        - **[Chốt Đ1-C6] Trường hợp 1 PIC tham gia nhiều loại hình dịch vụ** (VD: PIC A vừa có dòng công việc thuộc "Triển khai hạ tầng" vừa có dòng thuộc "Migration"): không tính PIC đó trọn vẹn cho cả 2 loại hình dịch vụ (tránh đếm trùng); phần đóng góp của PIC này được **phân bổ theo tỷ lệ Manday** PIC đó có ở từng loại hình dịch vụ so với tổng Manday PIC đó trong báo giá (không chia đều).
        - **[Chốt Đ2-C1] Dòng công việc thuê ngoài KHÔNG được phân bổ chi phí gián tiếp:** vendor thuê ngoài **không** được tính là "1 đầu người" (không cộng vào số PIC unique), và Manday của dòng thuê ngoài **không** tham gia vào việc tính tỷ lệ phân bổ chi phí gián tiếp. Chi phí gián tiếp chỉ phân bổ dựa trên nhân sự nội bộ.
    - **Giá vốn nội bộ_i** = (Chi phí nhân sự_i + Chi phí gián tiếp_i) × (1 + % Contingency_i).
    - **Giá vốn_i** = Giá vốn nội bộ_i + Chi phí thuê ngoài của loại hình dịch vụ i (nếu có — cộng thẳng, **không** nhân % Contingency, theo CR-10).
2. **Giá vốn cuối cùng của báo giá** = Σ (Giá vốn_i của tất cả hạng mục có phát sinh công việc).
2b. **[Chốt Đ6-1] Giá vốn theo từng Line sản phẩm** = Σ (Giá vốn_i của các hạng mục **thuộc Line đó**).
    - Đây thuần tuý là **một cấp cộng gom bổ sung để hiển thị**, không phải một phép tính mới: không có contingency riêng ở cấp Line, không làm tròn lại ở cấp Line.
    - Với hạng mục là chính Line (Line không có loại hình con), Giá vốn theo Line = Giá vốn của chính hạng mục đó.
    - Quan hệ bảo toàn: **Σ (Giá vốn theo từng Line) = Giá vốn cuối cùng của báo giá** — không phát sinh chênh lệch, vì chỉ cộng lại các số đã làm tròn ở cấp hạng mục (mục 4).
3. Nếu báo giá chỉ có 1 hạng mục và không có thuê ngoài, công thức thu gọn về đúng công thức hiện tại (BR-17), không thay đổi kết quả.
4. **[Chốt Đ1-C7] Quy tắc làm tròn:**
    - Hệ thống tính giá vốn **riêng cho từng loại hình dịch vụ**, làm tròn **đến hàng đơn vị (đồng)** ở từng loại hình, rồi **cộng các con số đã làm tròn** để ra tổng.
    - Ưu tiên **khớp từng dòng người dùng nhìn thấy** — tức là tổng hiển thị luôn = tổng cộng đúng các con số breakdown đang hiển thị.
    - **Chấp nhận chênh lệch làm tròn không đáng kể** (1–2 đồng) so với cách tính gộp một lần. **Không** cần cơ chế bù trừ số dư đối với **Giá vốn** (vì giá vốn được cộng lên từ các thành phần).
    - **[Chốt Đ4-G8] Ngoại lệ — Giá bán phân bổ (CR-11 mục 2.2):** vì Tổng giá bán là con số **do Sales nhập trực tiếp** rồi chia xuống từng loại hình dịch vụ, tổng các Giá bán phân bổ **bắt buộc phải khớp tuyệt đối** với con số Sales nhập. Do đó **có** áp dụng cơ chế dồn số dư làm tròn vào loại hình dịch vụ có Manday lớn nhất. Đây là khác biệt có chủ đích so với cách xử lý Giá vốn.
5. **[Chốt Đ1-C16] Tổng Manday của báo giá** = Σ Manday của **tất cả** dòng công việc, **bao gồm cả dòng thuê ngoài**. Đây là mẫu số dùng để tính Rate ngày/Rate giờ final (xem CR-11, mục 4).
    - Lưu ý phân biệt rõ với mục 1: Manday thuê ngoài **có** tính vào Tổng Manday (để ra đơn giá ngày/giờ), nhưng **không** tham gia phân bổ chi phí gián tiếp.

**Ví dụ minh họa cách phân bổ khi có PIC trùng:** Báo giá có 3 PIC: A, B chỉ làm "Triển khai hạ tầng"; C chỉ làm "Migration"; D làm cả 2, với Manday của D là 6 ngày ở "Triển khai hạ tầng" và 4 ngày ở "Migration" (tỷ lệ 60%/40%). Khi đó, số PIC unique quy đổi cho "Triển khai hạ tầng" = A + B + (D × 60%) = 2,6; cho "Migration" = C + (D × 40%) = 1,4. Chi phí gián tiếp được phân bổ theo tỷ lệ 2,6 : 1,4 trên tổng chi phí gián tiếp của báo giá.

**Acceptance Criteria:**

- **AC-CR05-01**: Given báo giá chọn 2 loại hình dịch vụ với % contingency khác nhau (10% và 8%), When Techlead approve, Then hệ thống hiển thị breakdown giá vốn riêng theo từng loại hình dịch vụ và tổng giá vốn cuối cùng là tổng của 2 giá vốn thành phần (đã bao gồm chi phí thuê ngoài nếu có).
- **AC-CR05-02**: Given báo giá chỉ chọn 1 loại hình dịch vụ và không có thuê ngoài, When hệ thống tính giá vốn, Then kết quả giống hệt công thức BR-17 cũ.
- **AC-CR05-03**: Given báo giá có 1 PIC tham gia dòng công việc ở cả 2 loại hình dịch vụ với Manday khác nhau ở mỗi loại, When hệ thống phân bổ Chi phí gián tiếp, Then đóng góp của PIC đó vào số PIC unique quy đổi của từng loại hình dịch vụ được chia theo đúng tỷ lệ Manday của PIC đó ở từng loại hình dịch vụ (không đếm trọn 1 PIC cho cả 2 phía).
- **AC-CR05-04**: Given báo giá có 3 PIC nội bộ và 1 dòng công việc thuê ngoài, When hệ thống tính Chi phí gián tiếp, Then số PIC unique dùng để phân bổ = 3 (dòng thuê ngoài không được tính là 1 đầu người), và Manday của dòng thuê ngoài không tham gia tỷ lệ phân bổ chi phí gián tiếp.
- **AC-CR05-05**: Given cùng báo giá ở AC-CR05-04, When hệ thống tính Tổng Manday, Then Tổng Manday **bao gồm** Manday của dòng thuê ngoài.
- **AC-CR05-06**: Given báo giá có nhiều loại hình dịch vụ với số lẻ khi làm tròn, When user xem chi tiết, Then tổng giá vốn hiển thị đúng bằng tổng cộng các giá vốn thành phần đang hiển thị trên màn hình (không lệch so với phép cộng thủ công của người dùng).
- **AC-CR05-07**: Given Sales có tham gia estimate với 3 Manday, When hệ thống tính Chi phí nhân sự, Then phần của Sales = Rate ngày theo lương thực tế của Sales × 3, và Sales được tính là 1 PIC unique khi phân bổ chi phí gián tiếp.
- **AC-CR05-08**: Given báo giá có 3 hạng mục thuộc 2 Line sản phẩm, When hệ thống tính giá vốn, Then hiển thị giá vốn theo từng hạng mục, giá vốn cộng gom theo từng Line, và tổng giá vốn báo giá; **tổng giá vốn = tổng của 2 con số theo Line = tổng của 3 con số theo hạng mục**, không lệch.
- **AC-CR05-09**: Given báo giá trộn 1 hạng mục cấp 2 (`Google Cloud / Migration`, contingency 8%) và 1 hạng mục là chính Line (`Dịch vụ tư vấn`, contingency 12%), When hệ thống tính giá vốn, Then mỗi hạng mục áp đúng % contingency của mình, và bộ máy xử lý cả hai theo cùng một cách.
- **AC-CR05-10**: Given 1 PIC tham gia dòng công việc thuộc 2 hạng mục **ở 2 Line khác nhau**, When hệ thống phân bổ chi phí gián tiếp, Then vẫn chia theo tỷ lệ Manday của PIC đó ở từng hạng mục — quy tắc không đổi khi hạng mục nằm khác Line.

***

### CR-06 — Mô tả nội dung công việc khi tạo báo giá (KHÔNG đính kèm file)

**Loại:** New feature — **[Chốt Đ1-C8] thay đổi so với CR-02 v1: bỏ hoàn toàn chức năng upload file đính kèm**
**Hiện trạng:** Khi khởi tạo báo giá, Sales không thể ghi chú thêm về dự án để cung cấp dữ liệu cho người estimate.

**Yêu cầu:**

1. Bổ sung **1 ô nhập Description** (mô tả nội dung công việc / thông tin transfer cho đội estimate) trên màn hình tạo báo giá.
    - **Không** triển khai chức năng đính kèm file (upload) ở CR này.
    - Sales nhập toàn bộ nội dung cần transfer trực tiếp vào ô này, hoặc **dán link tài liệu** (Google Drive, SharePoint...) nếu tài liệu nằm ngoài hệ thống.
2. **Giới hạn ký tự: 5.000 ký tự.** Cho phép xuống dòng (multi-line). Hệ thống hiển thị bộ đếm ký tự còn lại và chặn nhập vượt giới hạn.
3. **Quyền chỉnh sửa:** Trong giai đoạn Sales đang tạo báo giá (**trước khi submit cho Techlead**), Sales được phép chỉnh sửa các thông tin đã tạo và cập nhật Description tự do.
4. Sau khi đã submit cho Techlead, Description chuyển sang chế độ **read-only** đối với Sales — vẫn hiển thị cho Techlead/PIC tham khảo khi estimate.
5. **[Chốt Đ1-C9] Quyền xem Description:** tất cả actor **trong luồng của báo giá đó** đều xem được — Sales (người tạo), Techlead, các PIC được assign, và lãnh đạo duyệt (CEO/CFO/CSO/CIO).
6. **[Chốt Đ1-C9]** Description **vẫn xem được sau khi báo giá đã Done** (phục vụ tra cứu), ở chế độ read-only với mọi actor.

**Acceptance Criteria:**

- **AC-CR06-01**: Given Sales đang ở bước tạo báo giá (chưa submit), When Sales nhập nội dung mô tả công việc (kể cả link tài liệu, có xuống dòng), Then dữ liệu được lưu và hiển thị lại đúng định dạng khi Techlead/PIC mở báo giá để estimate.
- **AC-CR06-02**: Given báo giá đã submit cho Techlead, When Sales xem lại Description, Then Sales chỉ xem được (read-only), không sửa/xóa được nữa.
- **AC-CR06-03**: Given Sales nhập Description vượt quá 5.000 ký tự, When Sales nhập tới ký tự thứ 5.001, Then hệ thống chặn nhập thêm và hiển thị cảnh báo giới hạn.
- **AC-CR06-04**: Given báo giá đã chuyển sang Done, When Sales/Techlead/PIC/lãnh đạo mở lại chi tiết báo giá, Then vẫn xem được đầy đủ nội dung Description (read-only).
- **AC-CR06-05**: Given màn hình tạo/chi tiết báo giá, When user quan sát khu vực mô tả, Then **không** có nút upload/đính kèm file nào (chức năng này không nằm trong phạm vi CR-02).

***

### CR-07 — Sales bắt buộc tham gia estimate và được tính là 1 PIC chính thức

**Loại:** New feature — liên quan BR-22
**Hiện trạng:** Sau khi tạo báo giá, Sales chỉ submit cho Techlead để Techlead assign PIC estimate; Sales (người tạo báo giá, người sẽ follow dự án) chưa có quyền tự estimate.

**Yêu cầu:**

1. Khi tạo báo giá, **trước khi submit cho Techlead**, Sales **bắt buộc** tự estimate Task/Sub-task và Manday (dùng chung cơ chế Task/Sub-task ở CR-09) rồi mới submit.
    - **[Chốt Đ1-C10]** Đây là **bắt buộc, không phải tùy chọn** — vì Sales cũng bỏ effort thực tế và effort đó **được tính vào chi phí nhân sự của dự án**.
    - Hệ thống chặn submit lên Techlead nếu Sales chưa có ít nhất 1 Sub-task do Sales phụ trách kèm Manday > 0.
2. Nội dung Sales estimate ban đầu này **tự động trở thành dữ liệu khởi tạo** cho các PIC được Techlead assign sau đó.
    - **[Chốt Đ1-C11]** PIC được quyền **sửa và bổ sung** trên nền nội dung Sales đã nhập; nội dung Sales nhập **không bị mất/ghi đè trắng** — dữ liệu được giữ và chỉnh sửa tiếp. Mọi thay đổi được ghi nhận trong version log/history theo cơ chế hiện có.
3. Sau khi submit cho Techlead và Techlead đã assign PIC xong (báo giá chuyển sang bước Estimate), **Sales tiếp tục được estimate/chỉnh sửa** nội dung công việc và Manday ở bước này, song song với các PIC khác.
4. **Sales được tính là 1 PIC chính thức** tại bước Estimate:
    - Sales cũng phải bấm **Complete** giống các PIC khác.
    - Điều kiện chuyển bước Estimate → Techlead Review (BR-22) **bắt buộc bao gồm cả Sales đã Complete** (không chỉ các PIC do Techlead assign).
    - **[Chốt Đ2-C2]** Chi phí nhân sự phần Sales tính theo **lương thực tế của Sales** trong hệ thống, dùng đúng công thức Rate ngày theo lương như mọi nhân sự khác (BR-16). Không áp mức giá quy ước riêng.
    - Sales được tính là **1 PIC unique** khi phân bổ chi phí gián tiếp (CR-05).
5. **[Chốt Đ5-B2] Điều kiện dữ liệu bắt buộc — CHẶN NGAY TỪ BƯỚC TẠO BÁO GIÁ:**
    - Vì Sales bắt buộc tham gia estimate và được tính chi phí nhân sự, tài khoản Sales phải tồn tại trong **danh sách nhân sự (members)** và **có dữ liệu lương** trong hệ thống.
    - Nếu tài khoản đang đăng nhập có quyền Sales nhưng **chưa có bản ghi nhân sự tương ứng**, hệ thống **chặn ngay thao tác tạo báo giá** (không cho vào màn hình tạo, hoặc chặn khi bấm Lưu) kèm thông báo rõ ràng: *"Tài khoản của bạn chưa được liên kết với hồ sơ nhân sự. Vui lòng liên hệ bộ phận nhân sự để bổ sung trước khi tạo báo giá."*
    - Áp dụng quy tắc tương tự nếu nhân sự đó **chưa có dữ liệu lương**.
    - **Lý do chọn chặn sớm:** chặn ngay tại điểm vào giúp các bước sau (Estimate, Techlead Review, tính giá vốn) **không bao giờ** gặp tình huống thiếu dữ liệu lương giữa chừng — tránh báo giá bị kẹt ở giữa luồng.
    - Việc kiểm tra này áp dụng cho **người tạo báo giá**, thực hiện ở **tầng server** (không chỉ ẩn nút ở giao diện).

**Acceptance Criteria:**

- **AC-CR07-01**: Given Sales đang tạo báo giá (chưa submit), When Sales nhập Task/Sub-task/Manday rồi submit cho Techlead, Then dữ liệu này hiển thị sẵn cho các PIC được Techlead assign sau đó.
- **AC-CR07-02**: Given báo giá đã chuyển sang bước Estimate với Techlead đã assign PIC, When kiểm tra điều kiện chuyển sang Techlead Review, Then hệ thống yêu cầu **cả Sales và tất cả PIC** đã Complete mới cho phép chuyển bước.
- **AC-CR07-03**: Given Sales chưa Complete phần estimate của mình dù các PIC khác đã Complete, When hệ thống kiểm tra điều kiện chuyển bước, Then báo giá vẫn giữ nguyên ở bước Estimate.
- **AC-CR07-04**: Given Sales chưa nhập bất kỳ Sub-task nào do mình phụ trách, When Sales bấm submit cho Techlead, Then hệ thống chặn submit và báo lỗi yêu cầu Sales estimate phần việc của mình trước.
- **AC-CR07-05**: Given PIC được assign mở báo giá có sẵn nội dung Sales đã nhập, When PIC sửa nội dung 1 Sub-task và thêm Sub-task mới, Then nội dung gốc của Sales vẫn được giữ (chỉ thay đổi phần PIC chủ động sửa), và thay đổi được ghi vào history.
- **AC-CR07-06**: Given Sales có 3 Manday trong báo giá và có lương trong hệ thống, When hệ thống tính giá vốn, Then chi phí nhân sự của Sales = Rate ngày theo lương thực tế của Sales × 3 Manday, và Sales được đếm là 1 PIC unique.
- **AC-CR07-07**: Given tài khoản có quyền Sales nhưng chưa có bản ghi nhân sự tương ứng, When bấm "Tạo báo giá", Then hệ thống chặn và hiển thị thông báo yêu cầu liên kết hồ sơ nhân sự; kể cả khi gọi thẳng API cũng bị từ chối.
- **AC-CR07-08**: Given tài khoản Sales đã có hồ sơ nhân sự nhưng **chưa có dữ liệu lương**, When bấm "Tạo báo giá", Then hệ thống chặn với thông báo tương tự.
- **AC-CR07-09**: Given tài khoản Sales đã đủ cả hồ sơ nhân sự và dữ liệu lương, When đi hết luồng tới bước tính giá vốn, Then không phát sinh bất kỳ lỗi thiếu dữ liệu lương nào.

***

### CR-09 — Import Task/Sub-task, phân cấp 2 level

**Loại:** New feature — thay thế phần nhập nội dung công việc trong FR-06
**Hiện trạng:** PIC phải add từng nội dung công việc thủ công, không phân cấp, không xuống dòng được, giới hạn 255 ký tự.

**Yêu cầu:**

1. Cho phép PIC (và Sales owner, theo CR-07) **import** nội dung công việc từ file, bao gồm các cột: **Số thứ tự, Nội dung công việc, Manday, PIC, Hạng mục tính giá**.
    - **[Chốt Đ6-2]** Cột **"Hạng mục tính giá"** là **bắt buộc** với mọi dòng Sub-task (theo CR-04 mục 3, không có dòng công việc "chung"). Nếu báo giá chỉ có đúng 1 hạng mục, hệ thống **tự điền sẵn** để người nhập không phải chọn.
2. Phân cấp nội dung công việc thành 2 level:
    - **Task** (cấp cha, tương ứng dòng đánh số dạng "1.", "2."... không có số hạng con): giới hạn **100 ký tự**, **không** được xuống dòng.
    - **Sub-task** (cấp con, dạng "1.1", "1.2"...): giới hạn **1.000 ký tự**, **được phép** xuống dòng.
3. Manday và PIC được nhập ở cấp **Sub-task** (Task là dòng nhóm/tiêu đề, không có Manday/PIC riêng — Tổng Manday của Task = tổng Manday các Sub-task con).
4. **Quy tắc đánh số & cấu trúc file import:**
    - **Task** được đánh số dạng số nguyên tăng dần (1, 2, 3...) — đại diện cho 1 nhóm/hạng mục công việc lớn, không có Manday/PIC riêng (VD: "1. Tư vấn giải pháp và thiết kế kiến trúc").
    - **Sub-task** được đánh số dạng `<số Task cha>.<số thứ tự>` (VD: 1.1, 1.2, 1.3...) — là các đầu việc chi tiết trực thuộc Task cha, mỗi Sub-task có Manday, PIC và Hạng mục tính giá riêng.
    - File import có cấu trúc bảng phẳng với các cột: **Số thứ tự**, **Nội dung công việc**, **Manday**, **PIC**, **Hạng mục tính giá**. Hệ thống dựa vào định dạng số thứ tự để tự phân loại dòng là Task (số nguyên, bỏ trống Manday/PIC) hay Sub-task (số thập phân dạng x.y, bắt buộc có Manday/PIC).
5. **[Chốt Đ1-C12] Template file import chuẩn:**
    - Hệ thống cung cấp **file mẫu (template) cho tải về** từ màn hình Import.
    - Cột **"PIC / Người phụ trách"** trong template phải là **dropdown (data validation droplist) chứa danh sách TÊN nhân sự** — người nhập chọn tên mình/tên đồng nghiệp từ droplist, **không gõ tay**, không dùng mã nhân viên. Droplist có thêm giá trị đặc biệt **"Thuê ngoài"** (chi tiết Vendor/chi phí do Techlead nhập sau — CR-10 mục 4).
    - **[Chốt Đ5-B1] Định dạng giá trị trong droplist: `Tên nhân sự (Email Lark)`** — ví dụ: `Nguyễn Văn A (a.nv@lark.com)`.
        - Lý do: tên nhân sự Việt Nam rất dễ trùng; email Lark là **định danh duy nhất** đã có sẵn trong hệ thống, đảm bảo ánh xạ chính xác về đúng một người.
        - Hệ thống **ánh xạ theo phần email** trong ngoặc, không ánh xạ theo phần tên — nếu ai đó sửa tay phần tên nhưng giữ đúng email thì vẫn import thành công.
        - Nếu dòng import có email không khớp nhân sự nào đang ACTIVE, hoặc sai định dạng, hệ thống **báo lỗi dòng đó** và không import dòng lỗi.
    - Danh sách trong droplist được sinh động theo danh sách nhân sự active tại thời điểm tải template.
    - Cột **"Hạng mục tính giá"** (trước đây gọi là "Loại hình dịch vụ") cũng là droplist, chỉ chứa các hạng mục đã được chọn cho báo giá đó. **[Chốt Đ6-2]** Giá trị trong droplist hiển thị theo quy ước **`Line sản phẩm / Loại hình dịch vụ`** — ví dụ `Google Cloud / Migration`; với hạng mục là chính Line thì chỉ hiển thị tên Line. Điều này bắt buộc vì 1 báo giá nay có thể chứa nhiều Line, và hai Line được phép có loại hình dịch vụ trùng tên.
    - Nếu dòng import có giá trị PIC không khớp danh sách nhân sự (VD: file cũ, sửa tay), hệ thống báo lỗi dòng đó và không import dòng lỗi.
6. Vẫn giữ chức năng nhập tay từng dòng (không bắt buộc phải import) cho các báo giá nhỏ, ít task.
7. **[Chốt Đ2-C12] Quy ước nhập liệu:**
    - **Manday cho phép nhập nửa ngày** — bước nhảy **0,5** (VD: 0,5 / 1 / 1,5 / 2...). Hệ thống báo lỗi với các giá trị không phải bội số của 0,5, và với giá trị ≤ 0.
    - **Mỗi Sub-task chỉ có đúng 1 PIC phụ trách** (giữ nguyên như hiện tại). Nếu cần nhiều người, tách thành nhiều Sub-task.
    - **1 Task được phép không có Sub-task con** (Task chỉ là tiêu đề nhóm) — không chặn.
    - Tuy nhiên, nếu **toàn bộ báo giá không có Sub-task nào**, hệ thống **cảnh báo** khi bấm Complete.
8. **[Chốt Đ5-B6] MA TRẬN QUYỀN SỬA NỘI DUNG CÔNG VIỆC THEO BƯỚC** (phát biểu tường minh — đây là quy tắc nền mà CR-10 mục 4 và CR-17 mục 4 dựa vào):

| Bước | Sales owner | Techlead của BG | PIC được assign | Lãnh đạo |
| --- | :---: | :---: | :---: | :---: |
| **New** (chưa submit) | Sửa **mọi dòng** | — | — | ✘ |
| **Pending Tech lead** | ✘ (read-only) | Sửa **dòng thuê ngoài**; đánh dấu thuê ngoài; assign PIC | ✘ | ✘ |
| **Estimate** | Sửa **dòng nội bộ do mình phụ trách** | Sửa **dòng thuê ngoài** | Sửa **dòng nội bộ do mình phụ trách** | ✘ |
| **Techlead Review** | ✘ | ✘ | ✘ | ✘ |
| **Price Setting** | ✘ | ✘ | ✘ | ✘ |
| **Waiting Approval** | ✘ | ✘ | ✘ | ✘ |
| **Done** | ✘ | ✘ | ✘ | ✘ |

- **Nguyên tắc chốt:** toàn bộ **nội dung công việc (Task/Sub-task), Manday, PIC và hạng mục tính giá gắn với từng dòng** bị **khoá vĩnh viễn ngay khi báo giá rời bước Estimate**. Từ bước Techlead Review trở đi **không ai** sửa được nữa, kể cả lãnh đạo.
- Nếu cần sửa nội dung công việc sau khi đã qua Techlead Review, con đường duy nhất là **Techlead reject** (báo giá quay về Estimate) hoặc **lãnh đạo reject** ở Waiting Approval (báo giá quay về Pending Tech lead).
- Quy tắc này là **cơ sở cho quyết định không mở rộng snapshot** tại CR-17 mục 4: vì dữ liệu đã bị khoá, số liệu đang lưu chính là số liệu tại thời điểm chốt.
- Gate phải thực hiện ở **tầng server**, và ở **cấp từng dòng công việc** (không phải cấp toàn bảng) — vì trong cùng bước Estimate, dòng nội bộ và dòng thuê ngoài có chủ thể sửa khác nhau.

**Acceptance Criteria:**

- **AC-CR09-01**: Given file import có 1 dòng Task dài 150 ký tự, When PIC import file, Then hệ thống báo lỗi dòng đó vượt giới hạn 100 ký tự, không import dòng lỗi.
- **AC-CR09-02**: Given file import có Sub-task chứa nội dung nhiều dòng (multi-line) trong 1 ô, When import, Then nội dung xuống dòng được giữ nguyên định dạng khi hiển thị trên hệ thống.
- **AC-CR09-03**: Given báo giá có nhiều hạng mục tính giá, When import file không điền cột Hạng mục tính giá cho 1 dòng Sub-task, Then hệ thống báo lỗi dòng đó, yêu cầu bổ sung hạng mục trước khi import.
- **AC-CR09-15**: Given báo giá chứa cả `Google Cloud / Migration` và `Google Workspace / Migration`, When tải template và mở droplist cột Hạng mục tính giá, Then thấy 2 giá trị riêng biệt có kèm tên Line; When import file đã chọn đúng, Then mỗi dòng được gán đúng hạng mục tương ứng.
- **AC-CR09-04**: Given file import có dòng số thứ tự "2" (không có Manday/PIC) và dòng "2.1" (có Manday/PIC), When hệ thống đọc file, Then dòng "2" được nhận diện là Task, dòng "2.1" được nhận diện là Sub-task trực thuộc Task "2".
- **AC-CR09-05**: Given PIC tải template từ hệ thống, When mở file và click vào ô cột "PIC", Then xuất hiện droplist với các giá trị dạng `Tên nhân sự (Email Lark)` (kèm giá trị "Thuê ngoài"); cột "Hạng mục tính giá" cũng là droplist, chỉ chứa các hạng mục đã chọn cho báo giá, hiển thị theo quy ước `Line / Loại hình dịch vụ`.
- **AC-CR09-10**: Given công ty có 2 nhân sự cùng tên "Nguyễn Văn A", When tải template, Then droplist hiển thị 2 dòng riêng biệt phân biệt bằng email; When import, Then hệ thống gán đúng người theo email.
- **AC-CR09-11**: Given file import có ô PIC ghi email không tồn tại hoặc nhân sự đã INACTIVE, When import, Then hệ thống báo lỗi dòng đó và không import dòng lỗi.
- **AC-CR09-12**: Given báo giá đã chuyển sang bước Techlead Review, When Sales owner / Techlead / PIC / lãnh đạo thử sửa hoặc xoá bất kỳ dòng công việc nào (qua giao diện hoặc gọi thẳng API), Then thao tác bị từ chối.
- **AC-CR09-13**: Given báo giá đang ở bước Estimate với PIC P1 và P2, When P1 thử sửa dòng công việc do P2 phụ trách, Then thao tác bị từ chối; When P1 sửa dòng của chính mình, Then thành công.
- **AC-CR09-14**: Given báo giá bị lãnh đạo reject ở Waiting Approval và quay về Pending Tech lead rồi sang Estimate, When PIC mở bảng công việc, Then sửa được trở lại các dòng của mình.
- **AC-CR09-06**: Given file import có dòng Sub-task ghi Manday = 0,3, When import, Then hệ thống báo lỗi dòng đó (Manday phải là bội số của 0,5 và lớn hơn 0).
- **AC-CR09-07**: Given file import có Manday = 1,5 ở 1 Sub-task, When import, Then dòng đó được import thành công và hiển thị đúng 1,5 Manday.
- **AC-CR09-08**: Given Sales đang tạo báo giá và mới chỉ nhập các dòng Task tiêu đề, chưa có Sub-task nào, When Sales bấm submit cho Techlead, Then hệ thống chặn submit và cảnh báo báo giá chưa có đầu việc nào (nhất quán với CR-07 mục 1).
- **AC-CR09-09**: Given 1 Task chỉ là tiêu đề nhóm và không có Sub-task con, nhưng báo giá vẫn có Sub-task ở các Task khác, When import/lưu, Then hệ thống chấp nhận, không báo lỗi.

***

### CR-10 — Dự án có thuê ngoài

**Loại:** New feature
**Hiện trạng:** Bước Techlead assign chỉ có option assign cho nhân sự nội bộ.

> **[Chốt Đ6-1] Cách đọc mục này:** mọi chỗ ghi *"loại hình dịch vụ"* trong CR-10 đọc là **"hạng mục tính giá"** theo định nghĩa tại CR-04.

**Yêu cầu:**

1. Bổ sung thêm option **"Thuê ngoài"** khi Techlead assign, áp dụng ở cấp độ **từng dòng Sub-task** (song song với việc assign PIC nội bộ cho các dòng khác trong cùng báo giá). Techlead đánh dấu từ bước **Pending Tech lead** và còn sửa được đến hết bước **Estimate** — xem quy tắc khoá đầy đủ ở mục 4.
2. Danh sách vendor và % phí được quản lý ở tab cấu hình riêng — **xem đặc tả đầy đủ tại CR-03B**.
3. **[Chốt Đ1-C13] % phí công ty (markup) là cố định theo từng vendor**, được lấy tự động khi Techlead chọn vendor — **Techlead không nhập/sửa tay % này** cho từng dự án. Muốn đổi % thì sửa ở tab cấu hình Vendor (áp dụng cho các báo giá tạo mới sau đó; báo giá đang dở dang giữ % đã lấy tại thời điểm nhập).
4. Khi 1 dòng công việc được đánh dấu "Thuê ngoài", Techlead là người trực tiếp nhập:
    - Chọn **Vendor** từ danh sách đã cấu hình (% phí tự động lấy theo vendor, read-only).
    - **Chi phí phải trả cho đối tác thuê ngoài** (nhập tay, theo báo giá của vendor cho dự án cụ thể).
    - **[Chốt Đ2-C7]** Giai đoạn này chi phí trả đối tác **chỉ nhập theo VND**. Không hỗ trợ nhập nguyên tệ ngoại tệ + quy đổi tỷ giá ở CR này (bổ sung sau nếu phát sinh nhu cầu).
    - **[Chốt Đ4-G4] Manday của dòng thuê ngoài:** do **Techlead nhập** (không phải Sales/PIC). Nếu dòng công việc đó vốn đã có Manday do Sales/PIC nhập trước, Techlead được **ghi đè** cho đúng khối lượng thực tế thuê ngoài. Manday này vẫn tuân thủ quy ước bước nhảy 0,5 (CR-09 mục 7).
    - **[Chốt Đ5-B6] Quy tắc khoá ở CẤP DÒNG cho dòng thuê ngoài — phát biểu thống nhất:**

        > **Techlead của báo giá được đánh dấu "Thuê ngoài" và nhập Vendor / Chi phí trả đối tác / Manday kể từ lúc assign (bước Pending Tech lead), và tiếp tục sửa được đến hết bước Estimate. Từ bước Techlead Review trở đi, dòng thuê ngoài bị khoá hoàn toàn.**

        - **Chỉ Techlead được chỉ định của chính báo giá đó** mới được nhập/sửa các trường này. Sales owner và các PIC **không sửa được** dòng thuê ngoài, dù đang ở bước Estimate.
        - Sau khi báo giá rời bước Estimate, **không ai sửa được nữa — kể cả Techlead**.
        - Hệ quả: **không tồn tại tình huống phải tính lại giá vốn vì dòng thuê ngoài thay đổi sau khi đã duyệt.**
        - Trên giao diện: dòng thuê ngoài ở chế độ **read-only với actor không phải Techlead của báo giá**, và read-only với **mọi actor** từ bước Techlead Review trở đi. Đây là gate ở **cấp từng dòng công việc**, không phải gate cấp toàn bộ bảng (xem ma trận đầy đủ tại CR-09 mục 8).
    - **Cột PIC của dòng thuê ngoài:** hệ thống hiển thị nhãn **"Thuê ngoài — <Tên Vendor>"** với actor được xem thông tin vendor (CEO/CFO/CSO/CIO và Techlead của chính báo giá đó), và nhãn **"Thuê ngoài"** (không kèm tên vendor) với các actor còn lại (Sales owner, PIC). Không để trống cột PIC.
    - Trong **template import** (CR-09 mục 5), droplist cột PIC bổ sung giá trị đặc biệt **"Thuê ngoài"** để người nhập đánh dấu trước; thông tin Vendor / chi phí / Manday vẫn do Techlead nhập bổ sung sau.
5. **Công thức:** Chi phí thuê ngoài tính vào giá vốn = Chi phí trả đối tác × (1 + % phí công ty của vendor đã chọn).
6. **[Chốt Đ1-C14]** Chi phí thuê ngoài **KHÔNG** nhân thêm % Contingency — % dự phòng chỉ áp cho phần chi phí nội bộ. Chi phí thuê ngoài được cộng **thẳng** vào giá vốn của loại hình dịch vụ tương ứng (xem CR-05, mục 1).
7. Chi phí thuê ngoài **không** đi qua công thức Chi phí nhân sự (BR-16, không dùng Rate lương nội bộ × Manday); dòng công việc thuê ngoài vẫn hiển thị dưới dạng 1 Sub-task bình thường trong danh sách công việc.
8. **[Chốt Đ1-C16] Manday của dòng thuê ngoài VẪN được tính vào Tổng Manday** của báo giá — vì báo giá cuối cùng phải thể hiện được Đơn giá ngày/giờ final = Tổng giá vốn (hoặc Tổng giá bán) / Tổng Manday.
9. **[Chốt Đ2-C1]** Dòng thuê ngoài **không** được phân bổ chi phí gián tiếp và vendor **không** tính là 1 PIC unique (xem CR-05, mục 1).
10. **[Chốt Đ1-C15]** Chi phí trả đối tác do Techlead nhập **không cần bước duyệt riêng** ở giai đoạn này — lãnh đạo vẫn nhìn thấy và kiểm soát khoản này khi duyệt giá cuối ở bước Waiting Approval. (Có thể bổ sung bước kiểm soát chặt hơn ở CR sau nếu cần.)
11. **Masking:** **Sales owner và PIC** không xem được breakdown chi phí thuê ngoài (Vendor, chi phí trả đối tác, % phí công ty) — áp dụng nguyên tắc masking giống Chi phí nhân sự/Chi phí gián tiếp (BR-25): chỉ **CEO/CFO/CSO/CIO** xem được toàn bộ. Sales owner chỉ thấy **tổng giá vốn** theo từng loại hình dịch vụ (theo CR-11, mục 2.1).
    - **[Chốt Đ4-G3] Ngoại lệ Techlead:** Techlead là người trực tiếp nhập nên **xem được các dòng thuê ngoài do chính mình nhập** trong phạm vi báo giá mình phụ trách (Vendor, chi phí trả đối tác, % phí). Techlead **không** có quyền xem breakdown chi phí nhân sự/chi phí gián tiếp.

**Acceptance Criteria:**

- **AC-CR10-01**: Given CSO đang cấu hình tab "Vendor thuê ngoài" (CR-03B), When CSO thêm mới 1 vendor kèm % phí, Then vendor đó xuất hiện trong danh sách chọn khi Techlead đánh dấu "Thuê ngoài" cho 1 dòng công việc.
- **AC-CR10-10**: Given báo giá đang ở bước Estimate và có 1 dòng đã đánh dấu "Thuê ngoài", When Sales owner hoặc PIC khác mở bảng công việc, Then dòng thuê ngoài ở chế độ read-only (không sửa được Manday/Vendor/chi phí), trong khi các dòng nội bộ của họ vẫn sửa bình thường.
- **AC-CR10-11**: Given báo giá đã chuyển sang Techlead Review, When chính Techlead của báo giá đó mở bảng công việc, Then dòng thuê ngoài ở chế độ read-only, không sửa được nữa; gọi thẳng API sửa cũng bị từ chối.
- **AC-CR10-02**: Given Techlead đang assign PIC cho báo giá (bước Pending Tech lead), When Techlead chọn option "Thuê ngoài" cho 1 dòng công việc và chọn Vendor, Then hệ thống tự động lấy % phí theo vendor đã chọn ở chế độ read-only, Techlead chỉ nhập thêm Chi phí trả đối tác (VND) và Manday.
- **AC-CR10-12**: Given báo giá đã sang bước Estimate, When Techlead của báo giá đó sửa Manday/Vendor/chi phí của dòng thuê ngoài, Then thao tác thành công và giá vốn được tính lại.
- **AC-CR10-03**: Given dòng công việc thuê ngoài đã nhập chi phí, When Sales owner hoặc PIC xem chi tiết báo giá, Then không thấy số liệu Vendor/Chi phí trả đối tác/% phí công ty; When CEO/CFO/CSO/CIO xem, Then thấy đầy đủ; When Techlead phụ trách báo giá đó xem, Then thấy các dòng thuê ngoài của báo giá mình phụ trách.
- **AC-CR10-08**: Given Techlead đánh dấu 1 dòng công việc là "Thuê ngoài", When Techlead nhập Vendor + chi phí + Manday, Then Manday do Techlead nhập được ghi nhận (ghi đè giá trị cũ nếu có) và phải là bội số của 0,5.
- **AC-CR10-09**: Given báo giá có dòng thuê ngoài, When Sales owner hoặc PIC xem danh sách công việc, Then cột PIC của dòng đó hiển thị nhãn "Thuê ngoài" (không kèm tên Vendor); When CEO/CFO/CSO/CIO hoặc Techlead của báo giá đó xem, Then hiển thị "Thuê ngoài — <Tên Vendor>".
- **AC-CR10-04**: Given báo giá có cả dòng nội bộ và dòng thuê ngoài, When hệ thống tính giá vốn cuối cùng, Then chi phí thuê ngoài được cộng thẳng vào giá vốn của loại hình dịch vụ tương ứng, không bị nhân với % Contingency.
- **AC-CR10-05**: Given Techlead đang nhập chi phí trả đối tác, When Techlead nhập giá trị, Then ô nhập chỉ nhận VND (không có lựa chọn loại tiền tệ khác), định dạng hiển thị `x.xxx.xxx`.
- **AC-CR10-06**: Given báo giá có dòng thuê ngoài 5 Manday và 15 Manday nội bộ, When hệ thống tính Tổng Manday và Rate ngày final, Then Tổng Manday = 20 và Rate ngày final = Tổng giá trị tương ứng / 20.
- **AC-CR10-07**: Given CSO đổi % phí của 1 vendor sau khi 1 báo giá đã nhập chi phí thuê ngoài với vendor đó, When mở lại báo giá đang dở dang, Then báo giá giữ nguyên % đã lấy tại thời điểm nhập; báo giá tạo mới sau đó dùng % mới.

***

## PHẦN 3 — LUỒNG TRẠNG THÁI VÀ PHÊ DUYỆT BÁO GIÁ

> **Phạm vi:** các bước của luồng, ai được làm gì ở mỗi bước, thông báo, và khoá dữ liệu khi kết thúc. Gồm 6 mục: **CR-08, CR-11, CR-13, CR-15, CR-17, CR-18**.
> **Đặc điểm:** chứa 1 hạng mục đụng con số tiền (CR-11) và toàn bộ quy tắc phân quyền. CR-08 và CR-18 làm được song song ngay; phần còn lại phụ thuộc Phần 2.

### CR-08 — Đổi tên bước "Review" → "Techlead Review"

**Loại:** Bug fix / UI text change
**Hiện trạng:** Bước Techlead review lại nội dung đã estimate đang hiển thị tên là **"Review"** — dễ gây nhầm với các bước duyệt khác trong luồng.
**Yêu cầu:** Đổi tên bước "Review" (Techlead review lại nội dung đã estimate của đội dev) thành **"Techlead Review"** — áp dụng nhất quán trên toàn bộ hệ thống: Stepper, thông báo (Notify), lịch sử/version log, filter trạng thái trên Grid danh sách dự án, file export, v.v. Không thay đổi logic nghiệp vụ của bước này (vẫn là Techlead review/approve/reject theo BR-07, BR-28).

**Acceptance Criteria:**

- **AC-CR08-01**: Given báo giá đang ở bước vốn tên "Review", When xem Stepper/Grid danh sách/thông báo/file export liên quan, Then tên hiển thị là "Techlead Review" ở mọi nơi, không còn nơi nào hiển thị tên "Review" cũ.

***

### CR-11 — Bước "Price Setting": Sales nhập 1 Tổng giá bán, hệ thống phân bổ & tính PnL

**Loại:** Business rule change — thay đổi luồng trạng thái, thay thế 1 phần BR-24/BR-18/BR-19
**Hiện trạng:** Sau khi có giá vốn final (Techlead approve xong), báo giá chuyển thẳng sang "Waiting approval" để CSO duyệt giá.

> **[Chốt Đ3-C2] Thay đổi lớn so với CR-02 v1:** Sales **KHÔNG** nhập giá bán riêng cho từng loại hình dịch vụ nữa. Sales chỉ nhập **1 Tổng giá bán duy nhất** cho cả báo giá; hệ thống **tự động phân bổ** về từng loại hình dịch vụ theo **tỷ lệ Manday** để phục vụ PnL breakdown.

**Yêu cầu:**

**0. Trạng thái luồng báo giá sau CR này:**

`Tạo mới → Pending Tech lead → Estimate → Techlead Review → **Price Setting** (mới) → Waiting Approval → Done`

Cần cập nhật lại toàn bộ Stepper, Grid danh sách dự án (cột Trạng thái/filter) và các Notify liên quan (CR-14 của CR-01) cho khớp với bước mới này.

**1. Chuyển bước:** Sau khi Techlead approve (giá vốn final đã tính xong theo CR-05), báo giá chuyển sang bước mới **"Price Setting"** (thay cho việc vào thẳng Waiting Approval như hiện tại). Sales nhận thông báo cần nhập giá bán.

**2. Tại bước Price Setting — Actor: Sales owner**

**2.0. Các thao tác Sales owner thực hiện tại bước này:**

| # | Thao tác | Mục tham chiếu |
| --- | --- | --- |
| 1 | Xem giá vốn final đủ 3 mức: toàn báo giá + theo từng Line + theo từng hạng mục | 2.1 |
| 2 | **Sửa % Contingency riêng cho từng hạng mục tính giá** | **CR-03 mục 4** |
| 3 | Nhập/sửa **Tổng giá bán** (1 ô duy nhất) | 2.2 |
| 4 | Bấm **"Tính lại"** khi có cảnh báo thay đổi dữ liệu đầu vào | 2.5 |
| 5 | **Submit** lên CSO | 2.7 |

**2.1. [Chốt Đ1-C17] Phạm vi dữ liệu giá vốn Sales owner được xem:**

- Sales owner **được xem giá vốn final đủ 3 mức**: theo **từng hạng mục tính giá**, cộng gom theo **từng Line sản phẩm**, và **Tổng giá vốn final của cả báo giá** (đủ để đánh giá và tính lãi/lỗ).
- Sales owner **KHÔNG** được xem chi tiết cấu thành giá vốn: Chi phí nhân sự (lương), Chi phí gián tiếp (breakdown khoản mục), Chi phí thuê ngoài (Vendor / chi phí trả đối tác / % phí). Giữ nguyên nguyên tắc masking BR-25.
- **[Chốt Đ5-A1]** % Contingency của từng loại hình dịch vụ: **hiển thị cho Sales owner** (không phải số liệu nhạy cảm về lương), và Sales owner còn **sửa được** ở bước này theo CR-03 mục 4. **Techlead và PIC KHÔNG xem được** % Contingency (xem CR-15).

**2.2. [Chốt Đ3-C2] Nhập giá bán — chỉ 1 ô Tổng giá bán:**

- Sales nhập **duy nhất 1 trường "Tổng giá bán"** cho cả báo giá (bắt buộc, > 0).
- **Không** có ô nhập giá bán theo từng loại hình dịch vụ.
- Hệ thống **tự động phân bổ** Tổng giá bán về từng **hạng mục tính giá** theo **tỷ lệ Manday**:

    > **Giá bán phân bổ_i = Tổng giá bán × (Manday của hạng mục i / Tổng Manday toàn báo giá)**

    - **[Chốt Đ6-1]** Phân bổ thực hiện **một lần, phẳng theo hạng mục** — **không** phân bổ 2 cấp (không chia về Line trước rồi mới chia xuống hạng mục). Cách này cho kết quả chính xác hơn và tránh sai số làm tròn cộng dồn qua 2 lần chia.
    - Manday dùng để phân bổ **bao gồm cả Manday của dòng thuê ngoài** (nhất quán với CR-05 mục 5 và CR-10 mục 8).
    - Hạng mục không có công việc nào (Manday = 0) → Giá bán phân bổ = 0, không hiển thị trong breakdown PnL.
    - Áp dụng quy tắc làm tròn đến hàng đơn vị theo CR-05 mục 4; tổng các Giá bán phân bổ hiển thị phải bằng đúng Tổng giá bán Sales nhập. Chênh lệch làm tròn (nếu có) được **dồn vào hạng mục có Manday lớn nhất**.
    - **[Chốt Đ6-1] Quy tắc phá hoà khi nhiều hạng mục cùng Manday lớn nhất:** dồn vào hạng mục **đứng đầu theo thứ tự hiển thị chuẩn** — sắp xếp Line theo thứ tự người dùng chọn khi tạo báo giá, trong mỗi Line sắp xếp loại hình dịch vụ theo thứ tự cấu hình trong danh mục. Quy tắc này bắt buộc phải **xác định (deterministic)**: cùng một bộ dữ liệu đầu vào luôn cho ra cùng một kết quả phân bổ, không phụ thuộc thứ tự truy vấn cơ sở dữ liệu.

**2.3. [Chốt Đ3-C2] Công thức PnL — [Chốt Đ6-1] breakdown 2 cấp:**

Hệ thống hiển thị PnL ở **3 mức**, từ chi tiết tới tổng quát:

| Mức | Công thức | Ghi chú |
| --- | --- | --- |
| **1. Theo từng hạng mục tính giá** | (Giá bán phân bổ_i − Giá vốn final_i) / Giá bán phân bổ_i | Chi tiết nhất; nhãn hiển thị theo quy ước `Line / Loại hình` |
| **2. Theo từng Line sản phẩm** | (Σ Giá bán phân bổ của các hạng mục thuộc Line − Σ Giá vốn final của các hạng mục thuộc Line) / Σ Giá bán phân bổ của các hạng mục thuộc Line | **Mức mới**, phục vụ lãnh đạo theo dõi hiệu quả từng dòng sản phẩm |
| **3. Tổng toàn báo giá** | (Tổng giá bán − Tổng giá vốn final) / Tổng giá bán | Mức dùng để xét ngưỡng cảnh báo lãi thấp (mục 2.4) |

- **Cấp Line là cộng gom thuần tuý** — cộng các con số **đã làm tròn** ở cấp hạng mục, không tính lại từ đầu, không làm tròn thêm lần nữa. Nhờ đó tổng theo Line luôn khớp tuyệt đối với tổng báo giá.
- **Giao diện:** breakdown hiển thị dạng bảng nhóm — mỗi Line là một nhóm có dòng tổng riêng, bên trong liệt kê các hạng mục thuộc Line đó. Nếu báo giá chỉ có 1 Line thì cấp nhóm này vẫn hiển thị nhưng không gây rườm rà (1 nhóm duy nhất).
- Line mà **toàn bộ** hạng mục đều không có công việc → **không hiển thị** trong breakdown (tránh chia cho 0).

**2.4. [Chốt Đ1-C18][Chốt Đ2-C9] Cảnh báo lãi thấp:**

- Khi **PnL tổng < 20%**, hệ thống hiển thị **cảnh báo** ngay tại màn hình Price Setting khi Sales nhập giá bán (cảnh báo realtime khi giá trị thay đổi).
- Cảnh báo **KHÔNG chặn** — Sales vẫn submit được.
- **Cho phép trường hợp lỗ (PnL âm)**, nhưng cảnh báo phải hiển thị rõ ràng, phân biệt rõ 2 mức: *lãi thấp (0% ≤ PnL < 20%)* và *lỗ (PnL < 0)*.
- **[Chốt Đ2-C9]** Cảnh báo này hiển thị cho **cả Sales** (khi nhập giá ở Price Setting) **và lãnh đạo CEO/CFO/CSO/CIO** (khi duyệt ở Waiting Approval) — để lãnh đạo cân nhắc trước khi Chốt.
- Ngưỡng 20% là **tham số cấu hình được** ở khu vực Cấu hình hệ thống (quyền CSO/CFO/CEO/CIO), không hard-code.

**2.5. [Chốt Đ1-C20] Cảnh báo thay đổi dữ liệu đầu vào tại Price Setting:**

- Nếu trong lúc này có cảnh báo thay đổi dữ liệu đầu vào (tỷ giá/lương/headcount/chi phí gián tiếp... theo BR-18), **[Chốt Đ5-A4] actor duy nhất được bấm "Tính lại" ở bước Price Setting là Sales owner hiện hành**.
    - **CSO/CIO/CEO/CFO KHÔNG tham gia bấm "Tính lại" ở bước này** — kể cả khi họ mở được báo giá. Nút "Tính lại" không hiển thị với họ tại Price Setting.
    - Các Sales khác (không phải owner) cũng không bấm được.
- **Sau khi Sales bấm "Tính lại":** hệ thống tính lại giá vốn final, **GIỮ NGUYÊN Tổng giá bán Sales đã nhập** (không xoá trắng, không bắt Sales nhập lại), và **tự động tính lại PnL** theo giá vốn mới.
- Sales **vẫn được phép chủ động sửa Tổng giá bán** ở bước này sau khi tính lại (giá bán không bị khoá).

**2.6. [Chốt Đ2-C11] Sales KHÔNG có quyền trả lại (Reject) về Techlead ở bước Price Setting.**

- Ở bước này Sales chỉ có 2 hành động: **Lưu nháp** và **Submit lên CSO**.
- Không có nút "Trả lại Techlead". Nếu Sales thấy giá vốn bất thường, xử lý ngoài hệ thống (trao đổi trực tiếp với Techlead) hoặc chờ lãnh đạo Reject ở bước duyệt.

**2.7.** Sau khi hoàn tất, Sales owner submit thông tin (Tổng giá bán + breakdown giá bán phân bổ theo hạng mục và theo Line + PnL đủ 3 mức) lên CSO.

**3. Bước "Waiting Approval"**

- CSO/CEO/CFO/CIO xem chi tiết các khoản mục chi phí (breakdown giá vốn đầy đủ), Tổng giá bán, giá bán phân bổ **theo hạng mục và theo Line**, PnL **đủ 3 mức (hạng mục / Line / tổng)** để duyệt. Mức **theo Line** đặc biệt phục vụ nhóm này — giúp đánh giá hiệu quả từng dòng sản phẩm trong cùng 1 báo giá.
- **Cơ chế duyệt giữ nguyên BR-24**: 4 actor CEO/CFO/CSO/CIO đều có quyền "Chốt", theo cơ chế OR (1 người chốt là đủ).
- **[Chốt Đ1-C19] Thay đổi về thông báo:** khi vào bước Waiting Approval, hệ thống chỉ gửi thông báo cho **CSO** (không gửi cho CIO nữa) — khác với luồng hiện tại đang gửi cho cả CSO và CIO. CIO **vẫn giữ nguyên quyền duyệt/Chốt**, chỉ là không nhận thông báo tự động.
- **[Chốt Đ2-C8] Lãnh đạo KHÔNG được sửa trực tiếp Tổng giá bán** ở bước Waiting Approval. Với giá bán chỉ có 2 hành động: **Chốt** hoặc **Trả lại (Reject)** kèm lý do — trong đó **Reject chỉ dành cho CSO/CIO**, xem mục 5. Muốn đổi giá → Reject để Sales owner chỉnh (giữ rõ trách nhiệm ai là người đặt giá).
- Lãnh đạo **vẫn sửa được % Contingency** theo từng loại hình dịch vụ ở bước này (CR-03 mục 4) — đây là ngoại lệ duy nhất, vì contingency là tham số giá vốn chứ không phải giá bán.
- **[Chốt Đ5-A4]** Nếu tiếp tục phát sinh thay đổi dữ liệu đầu vào ở bước Waiting Approval (sau khi Sales đã submit), cảnh báo + nút **"Tính lại"** hiển thị cho **cả 4 actor CEO/CFO/CSO/CIO** — **mở rộng** so với hiện trạng (trước đây chỉ CSO). Sales **không** bấm được ở bước này.
    - **Thông báo giữ nguyên:** khi vào bước Waiting Approval, hệ thống **vẫn chỉ gửi thông báo cho CSO** — việc mở rộng quyền "Tính lại" cho 4 actor **không kéo theo** mở rộng danh sách nhận thông báo.
    - Tổng giá bán vẫn được giữ nguyên khi tính lại, chỉ PnL được cập nhật theo giá vốn mới.

**4. [Chốt Đ1-C16] Rate ngày / Rate giờ final**

- **Tổng Manday** = Σ Manday tất cả dòng công việc, **bao gồm dòng thuê ngoài** (CR-05 mục 5).
- **Rate ngày final (theo giá bán)** = Tổng giá bán / Tổng Manday — *dữ liệu thương mại, áp dụng phân quyền CR-15.*
- **Rate giờ final (theo giá bán)** = Rate ngày final (theo giá bán) / 8.
- **Rate ngày final (theo giá vốn)** = Tổng giá vốn final / Tổng Manday.
- **Rate giờ final (theo giá vốn)** = Rate ngày final (theo giá vốn) / 8.
- Số giờ/ngày công (8) là tham số cấu hình hệ thống, không hard-code.
- **[Chốt Đ5-B4] Hiển thị trên Grid danh sách báo giá:** Grid dùng **rate theo GIÁ BÁN** (thay cho rate theo giá vốn đang hiển thị hiện nay).
    - Với **Techlead/PIC** (không có quyền xem giá bán — CR-15), **cột này bị ẩn hoàn toàn**, không thay thế bằng rate theo giá vốn (tránh tình huống cùng một tiêu đề cột nhưng hai người thấy hai con số khác nhau).
    - Rate theo giá bán **chỉ có giá trị từ bước Price Setting trở đi** (sau khi Sales nhập Tổng giá bán). Các báo giá chưa tới bước đó hiển thị **"Chưa xác định"** — nhất quán với cách hiển thị null hiện có trên Grid.
    - Rate theo **giá vốn** vẫn hiển thị đầy đủ ở **màn chi tiết báo giá** cho mọi actor (theo bảng phân quyền CR-15).

**5. [Chốt Đ2-C10] Reject ở Waiting Approval**

- **[Chốt Đ5-A5] Chỉ CSO và CIO có quyền Reject** ở bước Waiting Approval — **giữ nguyên** bất đối xứng của BR-24/BR-27 hiện hành: **Chốt = 4 actor** (CEO/CFO/CSO/CIO, cơ chế OR), **Reject = 2 actor** (CSO/CIO). CEO/CFO xem và Chốt được nhưng **không** Reject được.
- Khi CSO hoặc CIO **reject**: báo giá quay về **"Pending Tech lead"** — giữ nguyên theo BR-27, không thay đổi. Techlead nhận thông báo kèm lý do.
- **Tổng giá bán Sales đã nhập trước đó được GIỮ LẠI** (không xoá trắng). Khi báo giá đi lại vòng luồng và quay về Price Setting, Sales owner thấy sẵn giá bán cũ và chỉnh tiếp nếu cần.
- **[Chốt Đ5 — bổ sung] % Contingency đã sửa riêng theo từng loại hình dịch vụ cũng được GIỮ LẠI**, không reset về giá trị default của cấu hình hệ thống. Lý do: nhất quán với cách xử lý Tổng giá bán — mọi quyết định đã ra ở vòng trước đều được bảo toàn để người dùng không phải nhập lại.
    - Nếu vòng estimate lại **phát sinh thêm loại hình dịch vụ mới** thì không thể xảy ra, vì danh sách loại hình dịch vụ đã bị khoá từ lúc tạo báo giá (CR-04 mục 4).
    - Nếu 1 loại hình dịch vụ **trở nên không có công việc nào** sau vòng estimate lại, contingency của nó vẫn được lưu nhưng không tham gia tính toán (CR-04 mục 5).
- PnL được tính lại tự động theo giá vốn mới sau vòng estimate lại.

**Acceptance Criteria:**

- **AC-CR11-01**: Given Techlead vừa approve xong 1 báo giá có 2 loại hình dịch vụ, When hệ thống chuyển bước, Then báo giá chuyển sang "Price Setting" (không vào thẳng Waiting Approval), và Sales nhận được thông báo cần nhập giá bán.
- **AC-CR11-02**: Given Sales đang ở bước Price Setting với báo giá có 2 loại hình dịch vụ (Manday lần lượt 30 và 20, tổng 50), When Sales nhập Tổng giá bán = 500.000.000, Then hệ thống hiển thị Giá bán phân bổ = 300.000.000 cho loại hình 1 và 200.000.000 cho loại hình 2, kèm PnL từng loại và PnL tổng tính đúng công thức.
- **AC-CR11-03**: Given màn hình Price Setting, When Sales quan sát khu vực nhập giá, Then chỉ có **duy nhất 1 ô "Tổng giá bán"**, không có ô nhập giá bán theo từng loại hình dịch vụ.
- **AC-CR11-04**: Given Sales đang ở bước Price Setting, When Sales xem thông tin giá vốn, Then chỉ thấy Tổng giá vốn final theo từng loại hình dịch vụ + Tổng giá vốn final của báo giá; không thấy Chi phí nhân sự, Chi phí gián tiếp, Chi phí thuê ngoài chi tiết.
- **AC-CR11-05**: Given Sales nhập Tổng giá bán dẫn tới PnL tổng = 12%, When hệ thống tính, Then hiển thị cảnh báo "lãi thấp (<20%)" nhưng vẫn cho phép Submit.
- **AC-CR11-06**: Given Sales nhập Tổng giá bán thấp hơn Tổng giá vốn (PnL âm), When hệ thống tính, Then hiển thị cảnh báo mức "lỗ" rõ ràng, vẫn cho phép Submit.
- **AC-CR11-07**: Given báo giá có PnL tổng = 12% đã submit, When CEO/CFO/CSO/CIO mở màn hình Waiting Approval, Then cảnh báo lãi thấp cũng hiển thị cho lãnh đạo.
- **AC-CR11-08**: Given dữ liệu chi phí đầu vào thay đổi trong lúc báo giá đang ở Price Setting, When hệ thống phát hiện thay đổi, Then hiển thị cảnh báo và nút "Tính lại" **chỉ cho Sales owner**; When CSO/CIO/CEO/CFO mở cùng báo giá đó, Then thấy cảnh báo nhưng **không có** nút "Tính lại"; gọi thẳng API cũng bị từ chối.
- **AC-CR11-09**: Given Sales đã nhập Tổng giá bán và sau đó bấm "Tính lại" giá vốn, When hệ thống tính lại xong, Then Tổng giá bán Sales nhập được giữ nguyên, PnL được tính lại theo giá vốn mới, và Sales vẫn sửa được Tổng giá bán nếu muốn.
- **AC-CR11-10**: Given Sales đang ở bước Price Setting, When Sales xem các nút hành động, Then chỉ có "Lưu nháp" và "Submit", **không** có nút trả lại Techlead.
- **AC-CR11-11**: Given Sales đã submit giá bán, When báo giá chuyển sang Waiting Approval, Then chỉ **CSO** nhận được thông báo (CIO không nhận thông báo ở bước này), nhưng CIO vẫn mở và Chốt được báo giá.
- **AC-CR11-12**: Given báo giá đang ở Waiting Approval, When CSO hoặc CIO xem màn hình duyệt, Then Tổng giá bán ở chế độ read-only và có các nút "Chốt", "Trả lại (Reject)", "Tính lại"; When CEO hoặc CFO xem, Then chỉ có "Chốt" và "Tính lại", **không** có "Trả lại (Reject)".
- **AC-CR11-13**: Given báo giá đang ở Waiting Approval, When 1 trong 4 actor CEO/CFO/CSO/CIO bấm "Chốt", Then báo giá chuyển "Done" theo đúng cơ chế OR như BR-24, không đổi.
- **AC-CR11-14**: Given báo giá đang ở Waiting Approval và phát sinh thay đổi dữ liệu đầu vào (VD: lương PIC), When **bất kỳ ai trong CEO/CFO/CSO/CIO** mở báo giá, Then đều thấy cảnh báo và bấm được nút "Tính lại"; Sales owner thì không.
- **AC-CR11-15**: Given báo giá đang ở Waiting Approval, When CSO **hoặc CIO** reject (kèm lý do), Then trạng thái quay về "Pending Tech lead" (theo BR-27), Techlead nhận thông báo kèm lý do, và Tổng giá bán Sales đã nhập vẫn được lưu.
- **AC-CR11-20**: Given báo giá đang ở Waiting Approval, When **CEO hoặc CFO** mở màn hình duyệt, Then thấy nút "Chốt" và nút "Tính lại" nhưng **không** thấy nút "Trả lại (Reject)"; gọi thẳng API reject cũng bị từ chối.
- **AC-CR11-21**: Given Grid danh sách báo giá, When Sales owner hoặc CEO/CFO/CSO/CIO xem, Then cột Rate ngày/giờ hiển thị **rate theo giá bán**; When Techlead/PIC xem, Then cột này **không xuất hiện**.
- **AC-CR11-22**: Given báo giá đang ở bước Estimate (chưa có Tổng giá bán), When Sales owner xem Grid, Then cột rate theo giá bán hiển thị "Chưa xác định".
- **AC-CR11-16**: Given báo giá bị reject và đã đi lại vòng luồng tới Price Setting, When Sales owner mở màn hình, Then ô Tổng giá bán đã có sẵn giá trị nhập lần trước, cho phép chỉnh sửa.
- **AC-CR11-23**: Given báo giá có contingency đã sửa riêng (12% và 9%) rồi bị reject ở Waiting Approval, When báo giá quay lại bước Price Setting, Then vẫn giữ đúng 12% và 9%, không reset về giá trị default của cấu hình hệ thống.
- **AC-CR11-17**: Given báo giá có tổng Manday 50 (gồm 5 Manday thuê ngoài) và Tổng giá bán 500.000.000, When hệ thống tính Rate ngày final theo giá bán, Then kết quả = 10.000.000 (chia cho 50, có tính Manday thuê ngoài), Rate giờ final = 1.250.000.
- **AC-CR11-18**: Given báo giá có 3 loại hình dịch vụ và phân bổ giá bán phát sinh số lẻ khi làm tròn, When user xem breakdown, Then tổng các Giá bán phân bổ hiển thị đúng bằng Tổng giá bán Sales đã nhập.
- **AC-CR11-19**: Given báo giá có 1 hạng mục đã chọn nhưng không có công việc nào (Manday = 0), When hệ thống phân bổ giá bán, Then hạng mục đó không xuất hiện trong bảng breakdown PnL (không hiển thị dòng PnL chia cho 0).
- **AC-CR11-24**: Given báo giá có 3 hạng mục thuộc 2 Line và Tổng giá bán = 1.000.000.000, When Sales owner xem breakdown, Then thấy đủ 3 mức: PnL từng hạng mục, PnL từng Line, PnL tổng; và **tổng giá bán phân bổ của 2 Line = 1.000.000.000** đúng bằng con số đã nhập.
- **AC-CR11-25**: Given báo giá nhiều Line, When kiểm tra cách phân bổ giá bán, Then hệ thống phân bổ **một lần phẳng theo hạng mục** (không chia về Line trước rồi mới chia xuống), và số dư làm tròn được dồn vào hạng mục có Manday lớn nhất.
- **AC-CR11-26**: Given báo giá có PnL tổng = 25% nhưng 1 Line có PnL = 5%, When Sales owner/lãnh đạo xem màn hình, Then **không** hiển thị cảnh báo lãi thấp (ngưỡng chỉ xét PnL tổng).
- **AC-CR11-27**: Given báo giá có 1 Line mà toàn bộ hạng mục đều không có công việc, When xem breakdown PnL, Then Line đó không xuất hiện trong bảng.

***

### CR-13 — Cập nhật nội dung & link thông báo kết quả duyệt final

**Loại:** Business rule change + Bug fix — bổ sung/sửa cho CR-14 của CR-01 (Loại 2 — Thông báo kết quả)
**Hiện trạng:**

- Nội dung thông báo kết quả khi báo giá được chốt (Done) chưa nêu rõ các trường cần có theo yêu cầu mới.
- Link trong thông báo đang trỏ cứng về `localhost`, không khớp với môi trường thực tế đang triển khai (dev/staging/production).

**Yêu cầu:**

1. Nội dung thông báo "Loại 2 — Thông báo kết quả" (theo CR-14 của CR-01) khi báo giá chuyển sang **Done**, gửi tới Sales, bổ sung đầy đủ các trường:
    - Tên báo giá
    - **[Chốt Đ6-1] Danh sách Line sản phẩm** — liệt kê đầy đủ nếu báo giá có nhiều Line
    - **Danh sách hạng mục tính giá** — hiển thị theo quy ước `Line / Loại hình dịch vụ` ([Chốt Đ6-2])
    - Tổng Manday
    - Rate ngày final
    - Rate giờ final
2. **[Chốt Đ3-C1] Phân quyền nội dung thông báo:** thông báo gửi tới **Sales và lãnh đạo (CEO/CFO/CSO/CIO)** hiển thị Rate ngày/giờ final **theo giá bán**. Nếu thông báo được gửi tới **Techlead/PIC**, các trường mang tính thương mại (Tổng giá bán, PnL, Rate theo giá bán) **không** được đưa vào nội dung — xem CR-15.
3. **Fix link điều hướng:** button/link trong thông báo phải trỏ đúng theo **domain/URL của môi trường đang chạy** (tự động lấy theo cấu hình môi trường triển khai thực tế — dev/staging/production), không hard-code `localhost`; áp dụng cho tất cả các loại thông báo (Loại 1 và Loại 2 theo CR-14 của CR-01), không riêng thông báo Done.
4. **Bổ sung thông báo cho bước Price Setting** (bước mới ở CR-11): khi báo giá chuyển sang Price Setting, gửi thông báo cho **Sales owner hiện hành** yêu cầu nhập giá bán, kèm link điều hướng đúng môi trường. Nếu báo giá đã được chuyển owner (CR-18 mục 18.2) thì thông báo gửi cho **owner mới**, không gửi cho người tạo gốc.

**Acceptance Criteria:**

- **AC-CR13-01**: Given báo giá có 2 Line sản phẩm và 3 hạng mục tính giá vừa được chốt (Done), When Sales owner nhận thông báo kết quả, Then nội dung hiển thị đầy đủ: Tên báo giá, cả 2 Line sản phẩm, cả 3 hạng mục (theo quy ước `Line / Loại hình`), Tổng Manday, Rate ngày final, Rate giờ final.
- **AC-CR13-02**: Given hệ thống đang chạy ở môi trường staging/production, When user click vào button/link trong bất kỳ thông báo nào, Then hệ thống điều hướng đúng tới domain của môi trường đang chạy, không còn trường hợp trỏ về `localhost`.
- **AC-CR13-03**: Given Techlead vừa approve báo giá, When hệ thống chuyển sang Price Setting, Then Sales nhận thông báo yêu cầu nhập giá bán kèm link mở đúng báo giá đó.
- **AC-CR13-04**: Given Techlead/PIC nằm trong danh sách nhận thông báo của 1 báo giá đã Done, When Techlead/PIC mở thông báo, Then nội dung không chứa Tổng giá bán và PnL.

***

### CR-15 — Phân quyền xem Giá bán & PnL

**Loại:** New — Business rule (phân quyền dữ liệu) — **[Chốt Đ3-C1]**, cập nhật theo **[Chốt Đ5-A1]** và **[Chốt Đ5-A2]**
**Bối cảnh:** Giá bán và PnL là **dữ liệu thương mại MỚI** xuất hiện từ CR-02. Sales là người nhập, lãnh đạo xem khi duyệt. Nhân sự kỹ thuật vốn đã bị masking chi phí chi tiết theo BR-25 — cần chốt rõ họ có được xem Giá bán/PnL không.

> **[Chốt Đ5-A2] Đính chính quan trọng về cách gọi actor.** Bản trước của tài liệu dùng cụm **"IT"** như một nhóm actor độc lập. Đây là **cách diễn đạt chưa chính xác**: hệ thống **không có và sẽ không tạo** role tên `IT`. Cụm "IT" trước đây chỉ đang ám chỉ **người phụ trách estimate (PIC)**.
>
> Từ bản này trở đi, phân quyền được định nghĩa theo **quyền hệ thống + vai trò trên từng báo giá (record-role)**, **không theo tên role**:
>
> - **Sales owner** — **người phụ trách báo giá hiện hành**. Mặc định là người tạo ra báo giá; có thể thay đổi qua chức năng chuyển người phụ trách (CR-18 mục 18.2). Ở mọi nơi khác trong tài liệu, cụm "Sales owner" luôn hiểu là **owner hiện hành**, không phải người tạo gốc.
> - **Lãnh đạo** — nhóm giữ quyền xem toàn bộ dữ liệu tài chính: CEO / CFO / CSO / CIO.
> - **Techlead** — người được chỉ định làm tech lead của **chính báo giá đó**.
> - **PIC** — người nằm trong danh sách phụ trách estimate của **chính báo giá đó**.
>
> Một người có thể là PIC ở báo giá này và không có vai trò gì ở báo giá khác. **Danh sách role hiện có của hệ thống giữ nguyên, không thêm role mới.**

**Yêu cầu:**

1. **Chỉ Sales owner và lãnh đạo CEO/CFO/CSO/CIO** được xem **Giá bán** (Tổng giá bán, Giá bán phân bổ theo hạng mục và theo Line) và **PnL** (cả 3 mức: theo hạng mục, theo Line, tổng).
    - **[Chốt Đ4-G7] Phạm vi "Sales owner":** quyền xem áp dụng cho **Sales owner hiện hành của báo giá đó**. Các Sales khác **không** xem được Giá bán/PnL của báo giá không phải của mình.
    - **[Chốt Đ5-A1]** Sales owner **cố định theo suốt vòng đời báo giá** — không đổi theo bước, không đổi khi reassign Techlead/PIC. **Ngoại lệ duy nhất:** chức năng chuyển người phụ trách báo giá có kiểm soát tại CR-18 mục 18.2 (chỉ lãnh đạo thực hiện, có ghi log).
    - Lãnh đạo CEO/CFO/CSO/CIO xem được **mọi** báo giá.
2. **Techlead và PIC KHÔNG được xem** các trường thương mại sau: **Tổng giá bán, Giá bán phân bổ (mọi mức), PnL (mọi mức), Rate ngày/giờ final theo giá bán, cảnh báo lãi thấp/lỗ**. Phần công việc / số ngày công (Manday) của họ giữ nguyên như trước CR-02. Các trường còn lại áp dụng đúng theo **bảng phân quyền tại mục 6** bên dưới.
    - **[Chốt Đ5-A1] % Contingency:** **Sales owner ĐƯỢC xem** (vì cần hiểu cấu thành giá vốn để quyết định giá bán, và theo CR-03 mục 4 còn được sửa ở bước Price Setting). **Techlead và PIC KHÔNG xem được.**
    - ⚠ Đây là **thay đổi có chủ ý so với BR-03** của BRD gốc (*"Sales và IT không được xem % Contingency"*). BR-03 nay được **thu hẹp phạm vi**: chỉ còn áp dụng cho Techlead/PIC, **không** còn áp dụng cho Sales owner. Xem mục I-2 về ảnh hưởng tới test hiện có.
3. **Phạm vi áp dụng:** quy tắc này áp dụng ở **mọi điểm chạm** trong hệ thống:
    - Màn hình chi tiết báo giá (mọi bước của luồng).
    - Màn hình Price Setting, Waiting Approval.
    - Grid danh sách báo giá (cột Giá bán, cột PnL, cột Rate theo giá bán — CR-11 mục 4).
    - Nội dung thông báo (Notify) — theo CR-13 mục 2.
    - File export Excel/PDF — theo CR-16.
    - API/response trả về cho client: **không** trả các trường Giá bán/PnL cho actor không có quyền (masking phải làm ở tầng server, không chỉ ẩn ở UI).
4. **Cách ẩn:** ẩn hoàn toàn cột/ô (không render), không hiển thị placeholder dạng `***` hay ô trống — theo CR-14 mục 5.
4b. **[Chốt Đ5-A2] Cách hiện thực phân quyền — 2 trục kết hợp:**
    - **Trục 1 — Quyền hệ thống:** bổ sung một quyền mới dành riêng cho dữ liệu thương mại (đề xuất tên `project_cost:price:read`), cấp cho các role **Sales, CEO, CFO, CSO, CIO**.
        - Không tái sử dụng quyền xem chi phí hiện có, vì quyền đó cố ý **không** cấp cho Sales (Sales bị masking breakdown giá vốn theo BR-25) — hai phạm vi dữ liệu khác nhau, phải tách quyền.
    - **Trục 2 — Vai trò trên bản ghi:** với actor thuộc role Sales, hệ thống kiểm tra thêm **actor có phải owner của chính báo giá đó không**. Chỉ owner mới thấy Giá bán/PnL.
    - **Công thức quyết định:** `Xem được Giá bán/PnL = (có project_cost:price:read) VÀ (thuộc nhóm lãnh đạo HOẶC là owner của báo giá)`.
    - Cả 2 trục đều phải kiểm tra ở **tầng server** khi dựng response, không chỉ ẩn ở giao diện.
5. **[Chốt Đ4-G1] Suy luận ngược (chống rò rỉ gián tiếp):** vì Rate ngày/giờ final **theo giá bán** = Tổng giá bán / Tổng Manday (và Tổng Manday thì Techlead/PIC vẫn xem được), actor không có quyền xem Giá bán cũng **không** được xem Rate ngày/giờ theo giá bán.
    - Ở **màn hình chi tiết báo giá** và **file export**: với Techlead/PIC, trường "Rate ngày/giờ final" hiển thị là **Rate theo giá vốn**.
    - Ở **Grid danh sách**: cột rate **bị ẩn hoàn toàn** với Techlead/PIC (không thay thế bằng rate theo giá vốn) — theo [Chốt Đ5-B4], xem CR-11 mục 4.
6. **Bảng phân quyền tổng hợp (dữ liệu tài chính của báo giá):**

| Trường dữ liệu | Sales owner | CEO/CFO/CSO/CIO | Techlead (của BG đó) | PIC (của BG đó) |
| --- | :---: | :---: | :---: | :---: |
| Nội dung công việc (Task/Sub-task), Manday, PIC | ✔ | ✔ | ✔ | ✔ |
| Description báo giá (CR-06) | ✔ | ✔ | ✔ | ✔ |
| **% Contingency theo từng hạng mục tính giá** | ✔ | ✔ | ✘ | ✘ |
| Chi phí nhân sự (chi tiết theo lương) | ✘ | ✔ | ✘ | ✘ |
| Chi phí gián tiếp (breakdown khoản mục) | ✘ | ✔ | ✘ | ✘ |
| Chi phí thuê ngoài (Vendor / chi phí trả đối tác / % phí) | ✘ | ✔ | Nhập & xem dòng của BG mình phụ trách | ✘ |
| Danh sách **Line sản phẩm** và **hạng mục tính giá** của báo giá | ✔ | ✔ | ✔ | ✔ |
| **Giá vốn final theo từng hạng mục tính giá** | ✔ | ✔ | ✔ | ✔ |
| **Giá vốn final theo từng Line sản phẩm** *(cộng gom — [Chốt Đ6-1])* | ✔ | ✔ | ✔ | ✔ |
| **Tổng giá vốn final của báo giá** | ✔ | ✔ | ✔ | ✔ |
| Rate ngày/giờ final **theo giá vốn** | ✔ | ✔ | ✔ | ✔ |
| **Tổng giá bán** | ✔ | ✔ | ✘ | ✘ |
| **Giá bán phân bổ theo từng hạng mục tính giá** | ✔ | ✔ | ✘ | ✘ |
| **Giá bán phân bổ theo từng Line sản phẩm** *(cộng gom)* | ✔ | ✔ | ✘ | ✘ |
| **PnL — cả 3 mức: theo hạng mục, theo Line, tổng** | ✔ | ✔ | ✘ | ✘ |
| Rate ngày/giờ final **theo giá bán** | ✔ | ✔ | ✘ | ✘ |
| Cảnh báo lãi thấp / lỗ | ✔ | ✔ | ✘ | ✘ |

**Bảng quyền THAO TÁC (bổ sung, tổng hợp từ các mục CR khác):**

| Thao tác | Sales owner | CEO/CFO/CSO/CIO | Techlead (của BG đó) | PIC (của BG đó) |
| --- | :---: | :---: | :---: | :---: |
| Nhập/sửa Tổng giá bán (bước Price Setting) | ✔ | ✘ | ✘ | ✘ |
| Sửa % Contingency **theo từng hạng mục** ở **Price Setting** | ✔ | ✘ | ✘ | ✘ |
| Sửa % Contingency **theo từng hạng mục** ở **Waiting Approval** | ✘ | ✔ | ✘ | ✘ |
| Bấm "Tính lại" ở **Price Setting** | ✔ | ✘ | ✘ | ✘ |
| Bấm "Tính lại" ở **Waiting Approval** | ✘ | ✔ (cả 4) | ✘ | ✘ |
| **Chốt** (Waiting Approval → Done) | ✘ | ✔ (cả 4, cơ chế OR) | ✘ | ✘ |
| **Trả lại / Reject** ở Waiting Approval | ✘ | **Chỉ CSO, CIO** | ✘ | ✘ |
| Nhập/sửa dòng **thuê ngoài** (chỉ ở bước Estimate) | ✘ | ✘ | ✔ | ✘ |

> **Ghi chú:**
> - **[Chốt Đ5-A2]** "Techlead" và "PIC" trong 2 bảng trên là **vai trò trên chính báo giá đang xem**, không phải role hệ thống. Cùng một người có thể ✔ ở báo giá này và không có quyền gì ở báo giá khác.
> - Nếu 1 người **kiêm nhiều vai trò** (VD: vừa là Techlead của báo giá vừa thuộc nhóm lãnh đạo) thì áp **quyền cao nhất** trong các vai trò đang giữ.
> - **[Chốt Đ4-G2]** Techlead/PIC **được** xem Tổng giá vốn final (của báo giá và theo từng loại hình dịch vụ) nhưng **không** xem được cấu thành giá vốn.
> - **[Chốt Đ5-A1]** So với bản trước: dòng "% Contingency" đổi từ ✔ toàn bộ thành **chỉ Sales owner + lãnh đạo**.
> - Dòng "PIC" ở bảng thứ nhất là ✔ cho mọi actor, nhưng **nhãn hiển thị của dòng thuê ngoài khác nhau theo actor** — xem CR-10 mục 4.
> - Hai bảng trên chỉ áp dụng cho actor **đã có quyền truy cập báo giá đó** theo CR-18. Actor không liên quan tới báo giá thì không mở được, nên không đặt ra vấn đề che trường.

**Acceptance Criteria:**

- **AC-CR15-01**: Given báo giá đã có Tổng giá bán và PnL, When PIC của báo giá đó mở chi tiết, Then không thấy Tổng giá bán, Giá bán phân bổ, PnL ở bất kỳ khu vực nào trên màn hình.
- **AC-CR15-02**: Given PIC đang xem chi tiết báo giá, When kiểm tra response API trả về, Then response **không chứa** các trường Tổng giá bán / Giá bán phân bổ / PnL / Rate theo giá bán (masking ở tầng server).
- **AC-CR15-03**: Given Grid danh sách báo giá, When Sales owner hoặc CEO/CFO/CSO/CIO xem, Then thấy cột Giá bán và PnL; When Techlead/PIC xem, Then hai cột này không xuất hiện.
- **AC-CR15-04**: Given PIC mở chi tiết báo giá đã Done, When xem trường "Rate ngày final", Then giá trị hiển thị là Rate tính theo Tổng giá vốn, không phải theo Tổng giá bán.
- **AC-CR15-05**: Given Sales owner mở chi tiết báo giá, When xem breakdown chi phí, Then thấy Tổng giá vốn theo từng loại hình dịch vụ và % Contingency, nhưng **không** thấy Chi phí nhân sự / Chi phí gián tiếp / Chi phí thuê ngoài chi tiết (BR-25 giữ nguyên).
- **AC-CR15-06**: Given báo giá có cảnh báo lãi < 20%, When Techlead hoặc PIC mở báo giá, Then không thấy cảnh báo này.
- **AC-CR15-07**: Given báo giá do Sales A tạo, When **Sales B** (cùng role Sales, có `project_cost:price:read`) truy cập báo giá đó, Then **không** thấy Tổng giá bán/PnL — kiểm tra cả trên giao diện lẫn response API.
- **AC-CR15-08**: Given báo giá có 2 loại hình dịch vụ với % contingency 10% và 8%, When Techlead hoặc PIC mở chi tiết, Then **không** thấy giá trị % contingency của bất kỳ loại hình nào; When Sales owner mở, Then thấy đủ cả 2 giá trị.
- **AC-CR15-09**: Given 1 người vừa là Techlead của báo giá vừa giữ role CFO, When mở báo giá đó, Then thấy đầy đủ dữ liệu theo quyền lãnh đạo (áp quyền cao nhất).
- **AC-CR15-10**: Given hệ thống sau khi triển khai CR-02, When kiểm tra danh sách role, Then **không** có role mới nào tên `IT` được tạo thêm.

***

### CR-17 — Khoá số liệu báo giá sau khi Done

**Loại:** Business rule — **[Chốt Đ2-C3]**
**Bối cảnh:** Chi phí gián tiếp, lương, tỷ giá thay đổi theo thời gian. Báo giá đã chốt phải giữ nguyên số liệu để đảm bảo nhất quán khi tra cứu về sau.

**Yêu cầu:**

1. Khi báo giá chuyển sang trạng thái **Done**, hệ thống **snapshot (khoá) toàn bộ số liệu** tại thời điểm chốt, bao gồm:
    - Chi phí nhân sự (rate lương từng PIC tại thời điểm chốt)
    - Chi phí gián tiếp (tổng + breakdown theo khoản mục)
    - % Contingency áp dụng cho từng **hạng mục tính giá**
    - Chi phí thuê ngoài (vendor, chi phí trả đối tác, % phí)
    - Giá vốn final **theo từng hạng mục** + tổng báo giá
    - Tổng giá bán, Giá bán phân bổ **theo từng hạng mục**, PnL
    - ⚠️ **Không** snapshot các con số ở **cấp Line** — chúng được cộng gom khi đọc từ cấp hạng mục (I.3b mục 3), nên luôn tái lập được chính xác và không có nguy cơ lệch hai nguồn.
    - Tổng Manday, Rate ngày/giờ final
2. **Báo giá đã Done KHÔNG thay đổi bất kỳ số liệu nào** về sau, bất kể dữ liệu nguồn (lương, chi phí gián tiếp, tỷ giá, % contingency cấu hình, % phí vendor) có thay đổi.
3. Cơ chế cảnh báo thay đổi dữ liệu đầu vào (BR-18/BR-19) và nút "Tính lại" **không áp dụng** cho báo giá đã Done. % Contingency cũng không sửa được nữa (CR-03 mục 4).
4. **[Chốt Đ5-B5] Phạm vi snapshot — KHÔNG mở rộng sang nội dung công việc:**
    - Snapshot **chỉ chứa số liệu tài chính và dữ liệu đầu vào tính toán** như liệt kê ở mục 1. **Không** bổ sung nội dung Task/Sub-task, tên PIC, tên loại hình dịch vụ vào snapshot.
    - **Lý do:** hệ thống đã có sẵn quy tắc **khoá nội dung công việc và PIC ngay khi báo giá rời bước Estimate** — từ Techlead Review trở đi không ai sửa được nữa (CR-10 mục 4 với dòng thuê ngoài, và quy tắc chung của luồng). Vì vậy dữ liệu đang lưu trong bảng công việc **chính là** dữ liệu tại thời điểm chốt; đọc trực tiếp là đủ, không cần nhân bản vào snapshot.
    - **Hệ quả cho màn hình xem lại và file export:** số liệu **tài chính** đọc từ snapshot đã khoá; **nội dung công việc, Manday, tên PIC, tên Line và tên hạng mục tính giá** đọc trực tiếp từ dữ liệu hiện hành của báo giá.
    - Quyết định này giúp **không phải thay đổi cấu trúc snapshot hiện có**, tránh ảnh hưởng tới toàn bộ version log và cơ chế tái lập kết quả tính toán đang chạy ổn định.

**Acceptance Criteria:**

- **AC-CR17-01**: Given báo giá đã Done tháng trước, When lương 1 PIC trong báo giá đó được cập nhật ở tháng này, Then mở lại báo giá vẫn thấy đúng số liệu chi phí/giá vốn/PnL tại thời điểm chốt, không thay đổi.
- **AC-CR17-02**: Given báo giá đã Done, When user mở chi tiết, Then không hiển thị cảnh báo thay đổi dữ liệu đầu vào và không có nút "Tính lại".
- **AC-CR17-03**: Given báo giá đã Done và % contingency cấu hình đã bị đổi sau đó, When export file báo giá đó, Then file thể hiện đúng % contingency và giá vốn tại thời điểm chốt.
- **AC-CR17-04**: Given báo giá đã Done, When kiểm tra cấu trúc snapshot, Then snapshot **không** chứa nội dung Task/Sub-task hay tên PIC — các thông tin này được đọc trực tiếp từ dữ liệu báo giá và vẫn hiển thị đúng như lúc chốt (vì đã bị khoá sửa từ sau bước Estimate).
- **AC-CR17-05**: Given báo giá đã Done, When bất kỳ actor nào thử sửa nội dung công việc / Manday / PIC qua giao diện hoặc gọi thẳng API, Then bị từ chối.

***

### CR-18 — Phạm vi hiển thị báo giá theo actor & chuyển người phụ trách (owner)

**Loại:** New — Business rule (phân quyền truy cập bản ghi) — **[Chốt Đ5-A3]**
**Hiện trạng:** Mọi tài khoản có quyền xem báo giá đều nhìn thấy **toàn bộ** báo giá trên hệ thống (dữ liệu nhạy cảm đã bị masking, nhưng danh sách thì không giới hạn). Nhân sự kỹ thuật (Techlead/PIC) hiện **không** vào được màn hình danh sách, chỉ mở được chi tiết qua đường dẫn trong thông báo Lark.

**Yêu cầu:**

#### 18.1. Phạm vi nhìn thấy báo giá

1. **Lãnh đạo CEO / CFO / CSO / CIO: xem được TOÀN BỘ báo giá** trên hệ thống, ở mọi trạng thái — không giới hạn.
2. **Mọi actor còn lại: chỉ xem được báo giá CÓ LIÊN QUAN TỚI MÌNH**, tức thoả **ít nhất một** điều kiện:
    - là **Sales owner hiện hành** của báo giá đó, hoặc
    - là **Techlead** được chỉ định cho báo giá đó, hoặc
    - nằm trong **danh sách PIC** được assign cho báo giá đó.
3. **Diễn giải theo từng bước của luồng:**

| Bước | Ai nhìn thấy báo giá |
| --- | --- |
| New (chưa gửi Techlead) | Sales owner + lãnh đạo. **Các Sales khác không thấy.** |
| Pending Tech lead | Sales owner + Techlead được chỉ định + lãnh đạo |
| Estimate → Techlead Review | Sales owner + Techlead + toàn bộ PIC được assign + lãnh đạo |
| Price Setting → Waiting Approval → Done | như trên (danh sách người liên quan đã cố định) |

4. **Phạm vi áp dụng:** quy tắc lọc này áp dụng cho **cả màn hình danh sách (Grid) lẫn màn hình chi tiết**, và phải thực hiện ở **tầng server**:
    - Grid: actor không liên quan **không thấy dòng đó xuất hiện** trong danh sách (lọc ở truy vấn, không phải ẩn ở giao diện) — bộ đếm và phân trang cũng phải phản ánh đúng số lượng đã lọc.
    - Chi tiết: actor không liên quan truy cập thẳng đường dẫn báo giá sẽ **bị từ chối**, không phải "xem được nhưng bị che số".
5. **[Chốt Đ5-Q1] Techlead và PIC được cấp quyền vào màn hình danh sách báo giá** để tự tra cứu các báo giá mình phụ trách, thay vì chỉ vào được qua đường dẫn trong thông báo Lark như hiện nay.
    - Menu "Báo giá dự án" hiển thị cho họ; danh sách chỉ chứa báo giá liên quan tới họ theo mục 2.
    - Các cột dữ liệu thương mại trong danh sách vẫn bị ẩn theo CR-15 (Giá bán, PnL, Rate theo giá bán).
6. Nếu actor không liên quan tới báo giá nào, màn hình danh sách hiển thị **danh sách rỗng** kèm thông báo phù hợp — không báo lỗi.

#### 18.2. Chuyển người phụ trách báo giá (chuyển owner)

Bổ sung để xử lý tình huống Sales owner nghỉ việc hoặc chuyển bộ phận — nếu không, toàn bộ báo giá của người đó sẽ không Sales nào khác nhìn thấy được nữa.

1. Bổ sung chức năng **"Chuyển người phụ trách báo giá"**, đặt cùng khu vực với các chức năng chuyển Tech lead / chuyển PIC đã có sẵn trong màn quản lý nhân sự.
2. **Quyền thực hiện:** **CEO / CFO / CSO / CIO**. Sales **không** tự chuyển báo giá của mình cho người khác.
3. **Người nhận** phải là nhân sự đang ACTIVE và có quyền tạo báo giá (tức thuộc nhóm Sales).
4. **Phạm vi áp dụng:** chỉ chuyển được báo giá **chưa Done**. Báo giá đã Done bị khoá theo CR-17.
5. **Hệ quả sau khi chuyển:**
    - Người nhận trở thành **Sales owner mới** — có toàn bộ quyền của owner theo CR-15 (xem/sửa Giá bán, PnL, % Contingency ở Price Setting, bấm "Tính lại" ở Price Setting).
    - Người cũ **mất quyền** truy cập báo giá đó (trừ khi vẫn còn vai trò Techlead/PIC trên chính báo giá đó).
    - Hệ thống ghi **1 event `owner_reassigned`** kèm người cũ, người mới, người thực hiện, thời điểm.
    - Người nhận **được gửi thông báo** về việc tiếp nhận báo giá, kèm đường dẫn mở đúng báo giá đó.
6. **Thông tin "người tạo ban đầu" được giữ nguyên** trong lịch sử để phục vụ truy vết — chuyển owner **không** ghi đè dấu vết người tạo gốc.

**Acceptance Criteria:**

- **AC-CR18-01**: Given báo giá do Sales A tạo, đang ở bước New, When Sales B mở màn hình danh sách, Then không thấy báo giá đó; When Sales B truy cập thẳng đường dẫn chi tiết, Then bị từ chối.
- **AC-CR18-02**: Given cùng báo giá đó, When CEO/CFO/CSO/CIO mở màn hình danh sách, Then thấy báo giá bình thường.
- **AC-CR18-03**: Given báo giá đã chuyển sang bước Estimate với Techlead T và PIC P1, P2, When T hoặc P1 mở màn hình danh sách báo giá, Then thấy báo giá đó trong danh sách; When PIC P3 (không được assign) mở danh sách, Then không thấy.
- **AC-CR18-04**: Given Techlead/PIC đang xem màn hình danh sách, When quan sát các cột, Then không có cột Giá bán, PnL và Rate theo giá bán (theo CR-15).
- **AC-CR18-05**: Given một nhân sự không liên quan tới bất kỳ báo giá nào, When mở màn hình danh sách báo giá, Then thấy danh sách rỗng kèm thông báo phù hợp, không phải màn hình lỗi.
- **AC-CR18-06**: Given hệ thống có 100 báo giá, trong đó Sales A liên quan 7 báo giá, When Sales A mở danh sách, Then bộ đếm tổng số và phân trang phản ánh đúng 7 bản ghi (không phải 100).
- **AC-CR18-07**: Given báo giá do Sales A tạo đang ở Price Setting, When CSO chuyển người phụ trách sang Sales B, Then Sales B nhập/sửa được Tổng giá bán và bấm được "Tính lại"; Sales A không còn truy cập được báo giá đó; hệ thống ghi 1 event `owner_reassigned` và gửi thông báo cho Sales B.
- **AC-CR18-08**: Given báo giá đã Done, When CSO thử chuyển người phụ trách, Then bị từ chối.
- **AC-CR18-09**: Given Sales A đang là owner của báo giá, When chính Sales A thử chuyển báo giá sang Sales B, Then bị từ chối vì không đủ quyền.
- **AC-CR18-10**: Given báo giá đã đổi owner từ Sales A sang Sales B, When xem lịch sử báo giá, Then vẫn tra được thông tin Sales A là người tạo ban đầu.

***

## PHẦN 4 — GIAO DIỆN

> **Phạm vi:** cách trình bày số liệu cho người dùng, trên màn hình và trong file xuất ra. Gồm 3 mục: **CR-12, CR-14, CR-16**.
> **Đặc điểm:** không tạo ra số liệu mới, chỉ quyết định **hiển thị thế nào và cho ai**. CR-12 và CR-14 làm được sớm; CR-16 phải chờ Phần 2 và Phần 3 xong.
>
> ⚠️ **Lưu ý quan trọng cho đội phát triển:** tuy xếp vào nhóm "Giao diện", việc **lọc/che dữ liệu ở CR-16 vẫn phải thực hiện ở tầng server** khi sinh file — không được chỉ ẩn cột ở phía trình duyệt. Quy tắc phân quyền gốc nằm ở **CR-15 (Phần 3)**.

### CR-12 — Chuẩn hóa triệt để định dạng số tiền VND (rà soát bổ sung cho CR-11 của CR-01)

**Loại:** Bug fix (UI) — bổ sung, làm rõ phạm vi cho CR-11 của CR-01 (chưa được thực hiện triệt để)
**Hiện trạng:** Vẫn còn một số nơi hiển thị số tiền chưa đúng chuẩn `x.xxx.xxx`, ví dụ:

- Cột **Rate ngày** và **Rate giờ** trên Grid danh sách báo giá.
- Bảng **so sánh giá trị cũ/mới** khi có cảnh báo thay đổi dữ liệu đầu vào (BR-18/BR-19, version log).

**Yêu cầu:**

1. Rà soát lại **toàn bộ** các trường hiển thị số tiền VND trên mọi màn hình (không riêng 3 màn hình đã nêu ở CR-11 của CR-01), bao gồm nhưng không giới hạn:
    - Grid danh sách báo giá: cột Rate ngày, Rate giờ, Giá vốn, Giá bán, Tổng giá vốn.
    - **[Chốt Đ6-1] Cột "Line sản phẩm" trên Grid** nay chứa **nhiều giá trị**: hiển thị tên Line đầu tiên kèm chỉ báo số lượng còn lại (ví dụ `Google Cloud +2`), có tooltip liệt kê đầy đủ. Bộ lọc theo Line đổi ngữ nghĩa từ "bằng" sang **"có chứa Line X"** — báo giá xuất hiện nếu chứa ít nhất 1 hạng mục thuộc Line được lọc.
    - Bảng so sánh giá trị cũ/mới (khi cảnh báo "Tính lại" — cả ở Price Setting lẫn Waiting Approval theo CR-11).
    - Chi tiết breakdown giá vốn theo từng hạng mục và theo Line (CR-05), Chi phí thuê ngoài (CR-10), Giá bán phân bổ (CR-11).
    - Nội dung file export Excel/PDF (CR-16) và nội dung thông báo (Notify).
2. Tất cả các nơi trên đều phải dùng đúng định dạng `x.xxx.xxx` (dấu chấm phân cách hàng nghìn), nhất quán như CR-11 của CR-01 đã yêu cầu — CR này chỉ nhằm đảm bảo áp dụng triệt để, không có ngoại lệ nào bị bỏ sót.
3. **PnL** hiển thị dạng phần trăm, làm tròn **1 chữ số thập phân** (VD: `18,5%`), dùng dấu phẩy làm dấu thập phân, nhất quán ở mọi màn hình và file export.
4. **Manday** hiển thị tối đa 1 chữ số thập phân (VD: `1,5`), do quy ước bước nhảy 0,5 ở CR-09 mục 7.

**Acceptance Criteria:**

- **AC-CR12-01**: Given Grid danh sách báo giá, When xem cột Rate ngày/Rate giờ của bất kỳ báo giá nào (kể cả báo giá cũ), Then số tiền hiển thị đúng định dạng `x.xxx.xxx`.
- **AC-CR12-02**: Given báo giá đang có cảnh báo thay đổi dữ liệu đầu vào, When xem bảng so sánh giá trị cũ/mới, Then cả giá trị cũ và mới đều hiển thị đúng định dạng `x.xxx.xxx`.
- **AC-CR12-03**: Given màn hình Price Setting/Waiting Approval và file export, When xem giá trị PnL, Then hiển thị dạng `xx,x%` nhất quán ở mọi nơi.
- **AC-CR12-04**: Given Sub-task có Manday 1,5, When xem trên mọi màn hình và file export, Then hiển thị `1,5` (không phải `1.5` hay `2`).
- **AC-CR12-05**: Given báo giá có 3 Line sản phẩm, When xem Grid danh sách, Then cột Line hiển thị dạng rút gọn kèm chỉ báo số lượng và tooltip đầy đủ; When lọc theo Line thứ 3, Then báo giá này vẫn xuất hiện trong kết quả.

***

### CR-14 — Làm nổi bật hiển thị Giá vốn, Giá bán, PnL

**Loại:** UI enhancement — áp dụng cho các màn hình có hiển thị Giá vốn/Giá bán/PnL (Price Setting, Waiting Approval, chi tiết báo giá, Grid danh sách báo giá)
**Hiện trạng:** Giá vốn, Giá bán, PnL đang hiển thị cùng kiểu chữ (font weight, size, màu) như các nhãn/số liệu thông thường khác, chưa có điểm nhấn để người dùng dễ tập trung vào các chỉ số quan trọng nhất.

**Yêu cầu:**

1. Riêng 3 chỉ số **Giá vốn (cuối cùng)**, **Giá bán**, và **PnL** (ở mọi mức: theo hạng mục, theo Line, và tổng — theo CR-11), khi hiển thị trên bất kỳ màn hình nào trong phạm vi báo giá, phải được định dạng nổi bật hơn các trường số liệu khác:
    - **In đậm (bold)**.
    - **Cỡ chữ lớn hơn** so với các trường số liệu/nhãn xung quanh (VD: Chi phí nhân sự, Chi phí gián tiếp, Contingency...).
    - **Màu chữ đậm/tương phản** (khác với màu chữ mặc định của các số liệu phụ, để tách biệt rõ ràng — màu cụ thể do đội thiết kế UI quyết định, miễn đảm bảo độ tương phản nổi bật hơn hẳn phần còn lại).
2. Áp dụng nhất quán ở mọi nơi 3 chỉ số này xuất hiện: màn Price Setting, Waiting Approval, chi tiết báo giá (mọi bước), và cột tương ứng trên Grid danh sách báo giá.
3. Các số liệu breakdown khác (Chi phí nhân sự, Chi phí gián tiếp, Chi phí thuê ngoài, % Contingency...) giữ nguyên định dạng hiển thị bình thường như hiện tại, không thay đổi.
4. **PnL TỔNG có cảnh báo (< 20% hoặc âm — CR-11 mục 2.4)** hiển thị thêm màu cảnh báo (VD: cam cho lãi thấp, đỏ cho lỗ) kèm icon cảnh báo, vẫn giữ kiểu in đậm/cỡ lớn ở mục 1.
    - **[Chốt Đ4-G5]** Ngưỡng cảnh báo **chỉ áp dụng cho PnL tổng của báo giá** — **không** áp cho PnL theo Line, cũng **không** áp cho PnL theo hạng mục (chỉ mang tính tham khảo breakdown), vì giá bán từng hạng mục là con số phân bổ tự động theo Manday chứ không phải do Sales đặt trực tiếp.
5. **[Chốt Đ3-C1]** Với actor không có quyền xem Giá bán/PnL (Techlead/PIC — CR-15), các ô này **không hiển thị** (ẩn hoàn toàn, không hiển thị dạng `***` hay ô trống), tránh gợi ý về sự tồn tại của số liệu.

**Acceptance Criteria:**

- **AC-CR14-01**: Given màn hình Price Setting đang hiển thị Giá vốn, Giá bán, PnL cùng các số liệu breakdown khác, When user xem màn hình, Then 3 chỉ số Giá vốn/Giá bán/PnL hiển thị in đậm, cỡ chữ lớn hơn và màu nổi bật hơn rõ rệt so với các số liệu breakdown còn lại.
- **AC-CR14-02**: Given Grid danh sách báo giá có cột Giá vốn/Giá bán, When xem Grid, Then các cột này áp dụng cùng kiểu định dạng nổi bật như trên chi tiết báo giá.
- **AC-CR14-03**: Given báo giá có PnL = 12%, When xem màn hình Price Setting/Waiting Approval, Then PnL hiển thị màu cảnh báo kèm icon, vẫn in đậm cỡ lớn.
- **AC-CR14-04**: Given Techlead/PIC mở chi tiết báo giá, When xem màn hình, Then cột/ô Giá bán và PnL không xuất hiện trên giao diện.

***

### CR-16 — Nội dung file export báo giá theo phân quyền actor

**Loại:** Business rule change — bổ sung/thay thế cho CR-16 của CR-01 (chức năng xuất file báo giá) — **[Chốt Đ3-C3]**
**Hiện trạng:** File xuất báo giá (Excel/PDF) từ CR-01 chỉ có tổng giá trị + đơn giá. Nay báo giá có thêm Giá bán và PnL.
**Quy tắc phân quyền gốc:** xem **CR-15 (Phần 3)** — mục này chỉ mô tả cách áp quy tắc đó vào file xuất ra.

**Yêu cầu:**

1. **File export là tài liệu NỘI BỘ** (không phải bản gửi thẳng cho khách hàng) — thể hiện **đầy đủ** số liệu để lãnh đạo/Sales rà soát. Phạm vi CR này **không** bao gồm việc tạo thêm bản rút gọn dành riêng cho khách hàng.
1b. **[Chốt Đ5-B3] Điều kiện trạng thái: CHỈ export được khi báo giá đã ở trạng thái `Done`** — áp dụng cho **mọi actor**, không có ngoại lệ.
    - Ở các bước trước đó (kể cả Price Setting và Waiting Approval, khi Sales đã có Tổng giá bán và PnL), nút export **không hiển thị**; gọi thẳng API export cũng bị từ chối với thông báo rõ ràng rằng báo giá chưa được chốt.
    - Đây là **giữ nguyên** hành vi hiện có của hệ thống, không thay đổi.
    - Lý do: file export mang tính tài liệu chính thức; chỉ số liệu đã được lãnh đạo Chốt mới được phép xuất ra ngoài hệ thống.
2. **Có 4 biến thể file, sinh tự động theo quyền của actor đang export:**

| # | Trường | Bản A — Lãnh đạo (CEO/CFO/CSO/CIO) | Bản B — Sales owner | Bản C1 / C2 — Techlead / PIC (của BG đó) |
| --- | --- | :---: | :---: | :---: |
| 1 | Tên báo giá | ✔ | ✔ | ✔ |
| 2 | **Danh sách Line sản phẩm** — liệt kê đầy đủ nếu có nhiều | ✔ | ✔ | ✔ |
| 3 | **Danh sách hạng mục tính giá** — theo quy ước `Line / Loại hình dịch vụ` | ✔ | ✔ | ✔ |
| 4 | **Tổng giá vốn cuối cùng** + breakdown **theo Line** và **theo từng hạng mục** | ✔ | ✔ | ✔ |
| 5a | Breakdown **Chi phí nhân sự** và **Chi phí gián tiếp** (theo khoản mục) | ✔ | ✘ | ✘ / ✘ |
| 5b | Breakdown **Chi phí thuê ngoài** (Vendor / chi phí trả đối tác / % phí) | ✔ | ✘ | **✔ (Techlead) / ✘ (PIC)** |
| 6 | **Tổng giá bán cuối cùng** + Giá bán phân bổ **theo Line** và **theo từng hạng mục** (CR-11) | ✔ | ✔ | ✘ |
| 7 | **PnL** đủ 3 mức: theo hạng mục + theo Line + tổng | ✔ | ✔ | ✘ |
| 8 | **Rate ngày final / Rate giờ final theo giá bán** | ✔ | ✔ | ✘ |
| 9 | **Rate ngày final / Rate giờ final theo giá vốn** | ✔ | ✔ | ✔ |
| 10 | Nội dung công việc — đầy đủ cấu trúc Task / Sub-task 2 cấp, giữ đúng số thứ tự và xuống dòng | ✔ | ✔ | ✔ |
| 11 | **Manday** theo từng Sub-task + tổng Manday (bao gồm dòng thuê ngoài) | ✔ | ✔ | ✔ |
| 12 | **PIC — hiển thị TÊN nhân sự, KHÔNG hiển thị ID/mã** (dòng thuê ngoài hiển thị theo CR-10 mục 4) | ✔ | ✔ | ✔ |

> **[Chốt Đ5-H5-4 · sửa đổi] Vì dòng 5b khác nhau giữa Techlead và PIC, "Bản C" tách thành 2 biến thể:**
>
> | Biến thể | Áp dụng cho | Khác biệt |
> | --- | --- | --- |
> | **Bản C1** | **Techlead** của chính báo giá đó | **CÓ** breakdown chi phí thuê ngoài (dòng 5b) |
> | **Bản C2** | **PIC** của báo giá đó | **KHÔNG** có breakdown chi phí thuê ngoài |
>
> ⇒ Tổng cộng hệ thống sinh **4 biến thể: A / B / C1 / C2**.

3. **Giải thích khác biệt giữa các bản:**
    - **Bản A (lãnh đạo)** = đầy đủ nhất, có cả breakdown cấu thành giá vốn (dòng 5a + 5b) để kiểm soát khoản chi thực tế, nhất quán với quyền masking BR-25/CR-10 mục 11.
    - **Bản B (Sales owner)** = giống Bản A nhưng **ẩn toàn bộ breakdown cấu thành giá vốn** (chỉ thấy tổng giá vốn) — nhất quán với [Chốt Đ1-C17]. Sales **không phải owner** thì không truy cập được báo giá nên không sinh file (CR-18).
    - **Bản C1 (Techlead)** = bỏ số liệu thương mại (Tổng giá bán, Giá bán phân bổ, PnL, Rate theo giá bán) theo [Chốt Đ3-C1]/CR-15, **nhưng GIỮ breakdown chi phí thuê ngoài** — vì Techlead chính là người nhập các số liệu này và cần file để đối chiếu với vendor. Nhất quán với quyền xem trên giao diện tại [Chốt Đ4-G3].
    - **Bản C2 (PIC)** = như Bản C1 nhưng **bỏ thêm** breakdown chi phí thuê ngoài. PIC không tham gia vào khoản chi này.
    - **[Chốt Đ4-G1]** Cả C1 và C2 bỏ **Rate ngày/giờ theo giá bán** (ngoài Tổng giá bán và PnL) nhằm **chống suy luận ngược** — vì Tổng giá bán = Rate ngày theo giá bán × Tổng Manday, mà Tổng Manday thì Techlead/PIC vẫn xem được. Nếu giữ trường này, Tổng giá bán sẽ bị lộ gián tiếp.
    - **[Chốt Đ5-C1] Yêu cầu bù đắp bảo mật:** vì file export nay **phân nhánh theo actor** (khác với cơ chế cũ vốn an toàn theo cấu trúc), bắt buộc bổ sung **kiểm thử ở mức byte cho từng biến thể A/B/C1/C2** — quét nội dung file đã sinh và khẳng định các trường bị cấm **không xuất hiện dưới bất kỳ dạng nào** (kể cả nhãn cột, ô trống, siêu dữ liệu, hay sheet ẩn).
4. **Cơ chế thực hiện:** hệ thống **không** cho người dùng chọn biến thể file. Nội dung file được sinh **tự động theo quyền của actor đang thực hiện export** (theo bảng phân quyền CR-15). Việc lọc trường phải làm ở **tầng server khi sinh file**, không phải ẩn cột ở client.
5. **Định dạng:** mọi số tiền trong file theo chuẩn `x.xxx.xxx`, PnL theo dạng `xx,x%`, Manday tối đa 1 chữ số thập phân — theo CR-12.
6. **Ghi log export:** mỗi lần export ghi lại người export, thời điểm, báo giá và **biến thể bản đã sinh (A / B / C1 / C2)** để phục vụ truy vết.
7. Áp dụng cho **cả 2 định dạng Excel và PDF** đang có từ CR-01.

**Acceptance Criteria:**

- **AC-CR16-01**: Given báo giá đã Done với 3 hạng mục thuộc 2 Line sản phẩm, When Sales owner export file Excel, Then file chứa (Bản B): Tên báo giá, **danh sách 2 Line sản phẩm**, **danh sách 3 hạng mục theo quy ước `Line / Loại hình`**, Tổng giá vốn cuối cùng kèm breakdown **theo Line và theo hạng mục**, Tổng giá bán cuối cùng kèm phân bổ **theo Line và theo hạng mục**, PnL **đủ 3 mức**, Rate ngày/giờ final theo giá bán và theo giá vốn, nội dung công việc Task/Sub-task, Manday, PIC theo tên — **và không có** breakdown cấu thành giá vốn (Chi phí nhân sự / Chi phí gián tiếp / Chi phí thuê ngoài).
- **AC-CR16-02**: Given cùng báo giá đó, When **PIC** export file, Then file (Bản C2) **không có** Tổng giá bán, Giá bán phân bổ, PnL, Rate theo giá bán và **không có** breakdown chi phí thuê ngoài.
- **AC-CR16-03**: Given cùng báo giá đó, When **CEO/CFO/CSO/CIO** export file, Then file (Bản A) có thêm breakdown cấu thành giá vốn: Chi phí nhân sự, Chi phí gián tiếp theo khoản mục, và Chi phí thuê ngoài (Vendor / chi phí trả đối tác / % phí).
- **AC-CR16-04**: Given file export bất kỳ, When xem cột PIC, Then hiển thị **tên nhân sự**, không phải ID/mã nhân viên; riêng dòng thuê ngoài hiển thị theo quy ước tại CR-10 mục 4.
- **AC-CR16-05**: Given báo giá có Sub-task nội dung nhiều dòng, When export ra Excel/PDF, Then nội dung xuống dòng được giữ nguyên và cấu trúc Task/Sub-task 2 cấp thể hiện rõ theo số thứ tự (1, 1.1, 1.2...).
- **AC-CR16-06**: Given báo giá có dòng thuê ngoài, When **Sales owner hoặc PIC** export file, Then dòng thuê ngoài xuất hiện như 1 Sub-task bình thường và Manday của nó được tính vào tổng Manday, nhưng **không** lộ Vendor / chi phí trả đối tác / % phí. (Techlead của báo giá đó thì **có** — xem AC-CR16-13.)
- **AC-CR16-07**: Given người dùng export file, When kiểm tra màn hình export, Then không có tùy chọn chọn biến thể bản — hệ thống tự sinh theo quyền của người export.
- **AC-CR16-08**: Given 1 lần export vừa thực hiện, When kiểm tra log hệ thống, Then có bản ghi gồm người export, thời điểm, báo giá, và biến thể bản (A/B/C1/C2) đã sinh.
- **AC-CR16-09**: Given cả 2 định dạng Excel và PDF, When export với cùng actor, Then nội dung và mức độ phân quyền giống hệt nhau giữa 2 định dạng.
- **AC-CR16-10**: Given báo giá đang ở bước Price Setting hoặc Waiting Approval (đã có Tổng giá bán và PnL), When Sales owner hoặc CEO/CFO/CSO/CIO mở chi tiết, Then **không** có nút export; When gọi thẳng API export, Then bị từ chối vì báo giá chưa Done.
- **AC-CR16-11**: Given báo giá do Sales A tạo và đã Done, When **Sales B** export báo giá đó, Then bị từ chối truy cập (theo CR-18) — không sinh ra file nào.
- **AC-CR16-12**: Given cùng 1 báo giá đã Done, When sinh lần lượt cả 4 biến thể A/B/C1/C2 ở cả 2 định dạng, Then quét nội dung file ở **mức byte** cho thấy: Bản B không chứa dấu vết nào của Chi phí nhân sự / Chi phí gián tiếp / thông tin Vendor; Bản C1 không chứa dấu vết nào của Tổng giá bán / Giá bán phân bổ / PnL / Rate theo giá bán / Chi phí nhân sự / Chi phí gián tiếp; Bản C2 ngoài ra còn không chứa thông tin Vendor — kể cả trong nhãn cột, ô trống, siêu dữ liệu file và sheet ẩn.
- **AC-CR16-13**: Given **Techlead của chính báo giá đó** export file, Then nhận **Bản C1** — **CÓ** breakdown chi phí thuê ngoài (Vendor / chi phí trả đối tác / % phí), nhất quán với quyền xem trên giao diện tại [Chốt Đ4-G3]; nhưng **không có** Tổng giá bán, PnL, Rate theo giá bán, Chi phí nhân sự và Chi phí gián tiếp.

***

## E. BẢNG TRUY VẾT QUYẾT ĐỊNH → VỊ TRÍ TRONG TÀI LIỆU

### Đợt 1 (20 câu — 22/07/2026)

| Câu | Nội dung quyết định | Vị trí trong tài liệu |
| --- | --- | --- |
| 1 | Loại hình dịch vụ quản lý RIÊNG theo từng Line | CR-02 mục 2, AC-CR02-04/05 |
| 2 ★ | Go-live tự gán % contingency hiện tại cho mọi loại hình ACTIVE | CR-03 mục 5, AC-CR03-03/04 |
| 3 | Báo giá cũ giữ nguyên, không gán ngược loại hình | CR-02 mục 5, AC-CR02-03 |
| ~~4~~ | ⛔ ~~1 báo giá = 1 Line; nhiều Line → tạo nhiều báo giá~~ — **ĐÃ BỊ BÃI BỎ bởi [Chốt Đ6-1]**: nay 1 báo giá được chọn nhiều Line sản phẩm | CR-04 mục 1, mục J |
| 5 | Công việc dùng chung nhiều loại hình → tách dòng | CR-04 mục 3, AC-CR04-02 |
| 6 ★ | Chi phí gián tiếp chia theo tỷ lệ Manday khi PIC làm nhiều loại hình | CR-05 mục 1, AC-CR05-03 |
| 7 ★ | Chấp nhận chênh lệch làm tròn, làm tròn đến hàng đơn vị | CR-05 mục 4, AC-CR05-06 |
| 8 | Bỏ đính kèm file, chỉ Description 5.000 ký tự | CR-06 mục 1–2, AC-CR06-03/05 |
| 9 | Người trong luồng xem được Description, kể cả sau khi Done | CR-06 mục 5–6, AC-CR06-04 |
| 10 | Sales BẮT BUỘC estimate và bấm Complete | CR-07 mục 1 & 4, AC-CR07-04 |
| 11 | PIC được sửa/bổ sung, không mất nội dung Sales | CR-07 mục 2, AC-CR07-05 |
| 12 | Template import có droplist TÊN nhân sự ở cột PIC | CR-09 mục 5, AC-CR09-05 |
| 13 | % phí cố định theo vendor, tự áp | CR-10 mục 3, AC-CR10-02/07 |
| 14 ★ | Thuê ngoài KHÔNG cộng % contingency | CR-10 mục 6, AC-CR10-04 |
| 15 | Chi phí trả đối tác không cần duyệt riêng | CR-10 mục 10 |
| 16 | Manday thuê ngoài VẪN tính vào tổng Manday | CR-05 mục 5, CR-10 mục 8, CR-11 mục 4, AC-CR10-06 |
| 17 ★ | Sales xem TỔNG giá vốn từng loại hình, không lộ cấu thành | CR-11 mục 2.1, AC-CR11-04, CR-15 bảng phân quyền |
| 18 | Cảnh báo (không chặn) khi lãi < 20% | CR-11 mục 2.4, AC-CR11-05 |
| 19 | Waiting Approval chỉ gửi thông báo cho CSO | CR-11 mục 3, AC-CR11-11 |
| 20 | Giữ giá bán khi tính lại; Sales vẫn sửa được | CR-11 mục 2.5, AC-CR11-09 |

### Đợt 2 (12 câu — 23/07/2026)

| Câu | Nội dung quyết định | Vị trí trong tài liệu |
| --- | --- | --- |
| 1 ★ | Không phân bổ chi phí gián tiếp cho thuê ngoài; vendor không tính là đầu người | CR-05 mục 1, CR-10 mục 9, AC-CR05-04 |
| 2 ★ | Chi phí nhân sự Sales dùng lương thực tế | CR-07 mục 4, CR-05 mục 1, AC-CR07-06 |
| 3 | Báo giá Done khoá toàn bộ số liệu | CR-17, CR-01 mục 4 |
| 4 | Tắt Line cha → ẩn cả con khỏi lựa chọn mới; báo giá cũ không đổi | CR-02 mục 7, AC-CR02-06 |
| 5 | KHÔNG cho thêm/bớt loại hình dịch vụ sau khi tạo | CR-04 mục 4, AC-CR04-04 |
| 6 | Loại hình trống → cảnh báo khi Complete, xác nhận thì bỏ qua | CR-04 mục 5, AC-CR04-05/06 |
| 7 | Chi phí thuê ngoài chỉ nhập VND | CR-10 mục 4, AC-CR10-05 |
| 8 ★ | Lãnh đạo chỉ Chốt/Reject, không sửa giá bán | CR-11 mục 3, AC-CR11-12 |
| 9 | Cảnh báo lãi thấp hiển thị cho cả Sales & lãnh đạo; cho phép lỗ | CR-11 mục 2.4, AC-CR11-06/07 |
| 10 ★ | Reject → giữ lại giá bán đã nhập | CR-11 mục 5, AC-CR11-15/16 |
| 11 | Sales KHÔNG được trả lại Techlead ở Price Setting | CR-11 mục 2.6, AC-CR11-10 |
| 12 | Manday bước 0,5; 1 Sub-task 1 PIC; Task được rỗng, cảnh báo nếu cả báo giá rỗng | CR-09 mục 7, AC-CR09-06/07/08 |

### Đợt 3 (3 điểm bổ sung)

| Câu | Nội dung quyết định | Vị trí trong tài liệu |
| --- | --- | --- |
| 1 ★ | Chỉ Sales + CEO/CFO/CSO/CIO xem Giá bán & PnL; Techlead/PIC không xem | **CR-15** (toàn bộ), CR-14 mục 5, CR-13 mục 2 |
| 2 | Sales nhập 1 Tổng giá bán duy nhất; hệ thống phân bổ theo tỷ lệ Manday | **CR-11 mục 2.2–2.3**, AC-CR11-02/03/18 |
| 3 ★ | File export đầy đủ cho Sales/lãnh đạo; bản Techlead/PIC bỏ Tổng giá bán & PnL; PIC theo tên | **CR-16** (toàn bộ) |

***

## F. TỔNG HỢP THAY ĐỔI SO VỚI CR-02 v1

Các mục **thay đổi bản chất** (cần đọc kỹ nếu đã đọc bản v1):

1. **CR-06** — Bỏ hoàn toàn chức năng upload file đính kèm; thay bằng 1 ô Description 5.000 ký tự.
2. **CR-07** — Sales **bắt buộc** (không còn tùy chọn) tham gia estimate; chi phí nhân sự của Sales tính theo lương thực tế.
3. **CR-11 mục 2.2** — Sales nhập **1 Tổng giá bán duy nhất**, không nhập theo từng loại hình dịch vụ; hệ thống phân bổ theo tỷ lệ Manday.
4. **CR-11 mục 2.6** — Bỏ khả năng Sales trả lại Techlead ở bước Price Setting.
5. **CR-04 mục 4** — Khoá danh sách loại hình dịch vụ ngay sau khi tạo báo giá (không cho thêm/bớt về sau).
6. **CR-05** — Làm rõ: thuê ngoài không nhận phân bổ chi phí gián tiếp nhưng Manday vẫn vào tổng Manday; quy tắc làm tròn đến hàng đơn vị.
7. **CR-15, CR-16, CR-17, CR-18** — 4 mục hoàn toàn mới (phân quyền Giá bán/PnL, nội dung file export theo actor, khoá số liệu sau Done, phạm vi hiển thị & chuyển owner).
8. **[Chốt Đ6-1] Một báo giá cho NHIỀU Line sản phẩm** — bãi bỏ ràng buộc "1 báo giá = 1 Line". Bổ sung khái niệm **"hạng mục tính giá"** làm đơn vị tính thống nhất, và **breakdown 3 mức** (hạng mục → Line → tổng) cho cả giá vốn, giá bán phân bổ và PnL. Xem mục J.

***

## G. ĐỢT 4 — CÁC ĐIỂM HỆ QUẢ ĐÃ ĐƯỢC CHỐT

8 điểm dưới đây là **hệ quả logic** phát sinh khi triển khai các quyết định Đợt 1–3, do đội phát triển đề xuất và đã được **khách hàng chốt "Đồng ý với tất cả" (ngày 07/08/2026)**. Từ đây các điểm này có giá trị ràng buộc như mọi quyết định khác, được đánh dấu **[Chốt Đ4-Gx]** tại vị trí tương ứng trong tài liệu.

| # | Điểm | Quyết định | Vị trí trong tài liệu |
| --- | --- | --- | --- |
| G1 | Techlead/PIC có được xem **Rate ngày/giờ theo giá bán** không? | **KHÔNG** — vì Tổng giá bán = Rate ngày theo giá bán × Tổng Manday; để lộ Rate theo giá bán là để lộ gián tiếp Tổng giá bán. Techlead/PIC chỉ thấy Rate theo giá vốn. | CR-15 mục 5, CR-16 mục 3, bảng CR-15 mục 6 |
| G2 | Techlead/PIC có được xem **Tổng giá vốn final** không? | **CÓ** — bao gồm cả breakdown tổng giá vốn theo từng loại hình dịch vụ. Vẫn **không** xem được cấu thành (chi phí nhân sự / gián tiếp / thuê ngoài). | CR-15 bảng mục 6, CR-16 mục 2 dòng 4 |
| G3 | **Techlead** có được xem chi phí thuê ngoài do chính mình nhập không? | **CÓ** — trong phạm vi báo giá mình phụ trách. Techlead vẫn **không** xem được chi phí nhân sự / chi phí gián tiếp. | CR-10 mục 11, AC-CR10-03 |
| G4 | **Ai nhập Manday** cho dòng thuê ngoài, và cột PIC hiển thị gì? | **Techlead** nhập Manday tại bước assign (được ghi đè giá trị cũ nếu có). Cột PIC hiển thị "Thuê ngoài — \<Tên Vendor\>" với CEO/CFO/CSO/CIO, và "Thuê ngoài" với các actor còn lại. Template import bổ sung giá trị "Thuê ngoài" vào droplist cột PIC. | CR-10 mục 4, CR-09 mục 5, AC-CR10-08/09 |
| G5 | Cảnh báo lãi thấp áp cho **PnL tổng** hay cả **PnL từng loại hình**? | Chỉ áp cho **PnL tổng** của báo giá — vì giá bán từng loại hình là con số phân bổ tự động theo Manday, không phải do Sales đặt trực tiếp. | CR-14 mục 4, CR-11 mục 2.4 |
| ~~G6~~ | ~~**Actor & thời điểm** được sửa % contingency riêng cho từng báo giá?~~ | ⛔ **ĐÃ BỊ THAY THẾ HOÀN TOÀN bởi [Chốt Đ5-A6]** — xem mục H.1. Phương án cũ (CEO/CFO/CSO/CIO, từ Techlead Review đến trước Done) **không còn hiệu lực**. Phương án hiện hành: sửa theo **từng loại hình dịch vụ**; Price Setting do **Sales owner**, Waiting Approval do **4 lãnh đạo**; các bước khác read-only. | CR-03 mục 4 |
| G7 | Sales **khác** có xem được Giá bán/PnL của báo giá không phải của mình? | **KHÔNG** — quyền xem Giá bán/PnL gắn với **Sales là owner của báo giá**. Lãnh đạo CEO/CFO/CSO/CIO xem được mọi báo giá. | CR-15 mục 1 |
| G8 | Cơ chế **dồn số dư làm tròn** cho Giá bán phân bổ (khác cách xử lý Giá vốn)? | **CÓ dồn số dư** vào **hạng mục tính giá** có Manday lớn nhất (kèm quy tắc phá hoà theo thứ tự hiển thị chuẩn — [Chốt Đ6-1]), để tổng các Giá bán phân bổ luôn khớp tuyệt đối con số Sales nhập. Giá vốn thì **không** dồn số dư (chấp nhận lệch 1–2 đồng). | CR-05 mục 4, CR-11 mục 2.2 |

**Acceptance Criteria bổ sung cho Đợt 4:**

- **AC-G1-01**: Given Techlead/PIC mở chi tiết hoặc export báo giá, When xem trường Rate ngày/giờ final, Then giá trị là Rate theo giá vốn; không có bất kỳ trường Rate nào tính theo giá bán trên UI, trong file export và trong response API.
- **AC-G2-01**: Given Techlead/PIC mở chi tiết báo giá có 2 loại hình dịch vụ, When xem khu vực giá vốn, Then thấy Tổng giá vốn final của báo giá và của từng loại hình dịch vụ, nhưng không thấy Chi phí nhân sự / Chi phí gián tiếp / Chi phí thuê ngoài.
- **AC-G3-01**: Given Techlead A đã nhập 1 dòng thuê ngoài cho báo giá X, When Techlead A mở báo giá X, Then xem được Vendor / chi phí trả đối tác / % phí của dòng đó; When Techlead A mở báo giá Y không do mình phụ trách, Then không xem được các trường này.
- **AC-G5-01**: Given báo giá có PnL tổng = 25% nhưng PnL của 1 loại hình dịch vụ = 5%, When Sales/lãnh đạo xem màn hình, Then **không** hiển thị cảnh báo lãi thấp (ngưỡng chỉ xét PnL tổng).
- ~~**AC-G6-01**~~: ⛔ **Đã bị thay thế bởi AC-CR03-05 / AC-CR03-06 / AC-CR03-07** theo [Chốt Đ5-A6]. Không dùng AC này để kiểm thử.
- **AC-G7-01**: Given báo giá do Sales A tạo, When Sales B (khác) mở báo giá đó, Then không thấy Tổng giá bán và PnL.
- **AC-G8-01**: Given báo giá có 3 hạng mục với Manday 7 / 7 / 6 và Tổng giá bán = 100.000.000, When hệ thống phân bổ, Then tổng 3 con số Giá bán phân bổ hiển thị đúng bằng 100.000.000; vì hạng mục thứ nhất và thứ hai **cùng có Manday lớn nhất (7)**, phần dư được dồn vào **hạng mục thứ nhất** theo thứ tự hiển thị chuẩn.
- **AC-G8-02**: Given cùng bộ dữ liệu ở AC-G8-01, When chạy lại phép phân bổ nhiều lần, Then kết quả **luôn giống hệt nhau** (thuật toán xác định, không phụ thuộc thứ tự truy vấn dữ liệu).

***

## H. ĐỢT 5 — ĐỐI CHIẾU TÀI LIỆU VỚI SOURCE CODE THỰC TẾ

Sau khi hoàn tất Đợt 4, đội phát triển đã **khảo sát trực tiếp source code** module `fin` hiện hành (đã release v1.21.0) và đối chiếu với tài liệu CR-02. Kết quả phát hiện **19 điểm** cần chốt lại hoặc bổ sung — trong đó có những điểm tài liệu đang **mâu thuẫn trực tiếp** với business rule đang chạy production.

Toàn bộ 19 điểm đã được khách hàng chốt ngày **10/08/2026**. Chi tiết khảo sát và luận cứ nằm ở tài liệu riêng: `CR-02_DanhGia-Kha-Thi-Trien-Khai.md`.

### H.1. Nhóm A — Mâu thuẫn nghiệp vụ với code đang chạy

| # | Vấn đề | Quyết định | Vị trí trong tài liệu |
| --- | --- | --- | --- |
| A1 | Tài liệu cho Sales/PIC xem % Contingency, nhưng **BR-03 đang chạy production cấm điều này** | **Sales owner ĐƯỢC xem** (và sửa ở Price Setting); **Techlead/PIC KHÔNG**. BR-03 thu hẹp phạm vi, chỉ còn áp cho nhánh kỹ thuật. Owner mặc định là người tạo, cố định suốt vòng đời, chỉ đổi qua CR-18 mục 18.2. | CR-15 mục 2 + bảng mục 6, CR-11 mục 2.1, CR-03 mục 4 |
| A2 | Actor **"IT" không tồn tại** trong hệ thống — chỉ có trong dữ liệu test, với 0 quyền | "IT" là cách gọi chưa chính xác của **PIC**. **Không tạo role mới**, giữ nguyên danh sách role hiện có. Phân quyền theo **quyền hệ thống + vai trò trên bản ghi**. | CR-15 (toàn bộ), CR-16 mục 3 |
| A3 | Masking hiện chỉ có 1 trục (quyền hệ thống), không diễn đạt được "Sales owner" | Lãnh đạo xem **mọi** báo giá; các actor khác **chỉ xem báo giá liên quan tới mình** (owner / Techlead / PIC). Áp dụng cho cả danh sách lẫn chi tiết. | **CR-18** (mục mới) |
| A4 | Nút "Tính lại" hiện **chỉ CSO** bấm được — tài liệu ghi 4 lãnh đạo, và muốn giao cho Sales ở Price Setting | **Price Setting:** chỉ Sales owner. **Waiting Approval:** mở rộng cho **cả 4** CEO/CFO/CSO/CIO. Thông báo **vẫn chỉ gửi CSO**. | CR-11 mục 2.5 và mục 3 |
| A5 | Tài liệu ghi 4 actor Reject, code chỉ cho **CSO/CIO** | **Giữ nguyên bất đối xứng:** Chốt = 4 actor (OR), **Reject = chỉ CSO/CIO**. | CR-11 mục 5, AC-CR11-20 |
| A6 | Contingency hiện là **1 giá trị/báo giá**; sau CR-02 có N loại hình dịch vụ thì sửa cái nào? | Sửa **theo từng loại hình dịch vụ**. Price Setting: Sales owner sửa. Waiting Approval: 4 lãnh đạo sửa. Mỗi lần ghi event và **tính lại toàn bộ giá**. | CR-03 mục 4 |

### H.2. Nhóm B — Thiếu đặc tả để code

| # | Vấn đề | Quyết định | Vị trí |
| --- | --- | --- | --- |
| B1 | Droplist "tên nhân sự" không resolve được khi **trùng tên** | Định dạng **`Tên nhân sự (Email Lark)`**, ánh xạ theo **email**. | CR-09 mục 5 |
| B2 | Sales là quyền hệ thống, PIC là hồ sơ nhân sự — thiếu dữ liệu thì sao? | **Chặn ngay tại bước tạo báo giá** nếu tài khoản chưa có hồ sơ nhân sự/lương. Các bước sau không còn rủi ro. | CR-07 mục 5 |
| B3 | Export ở trạng thái nào? | **Chỉ khi Done**, áp dụng cho mọi actor. Giữ nguyên hành vi hiện có. | CR-16 mục 1b |
| B4 | Grid hiển thị rate theo giá vốn hay giá bán? | **Theo giá bán**; **ẩn hoàn toàn** cột này với Techlead/PIC. Báo giá chưa tới Price Setting hiển thị "Chưa xác định". | CR-11 mục 4 |
| B5 | Snapshot có phải mở rộng chứa nội dung công việc? | **Không mở rộng.** Nội dung công việc/PIC đã bị khoá sửa từ sau bước Estimate nên đọc trực tiếp là đủ. | CR-17 mục 4 |
| B6 | Ai được sửa Manday dòng thuê ngoài, ở bước nào? | **Chỉ Techlead của báo giá đó, chỉ ở bước Estimate.** Sau khi duyệt là khoá. Không phát sinh tình huống phải tính lại giá vốn. | CR-10 mục 4 |
| B7 | Tên Line sản phẩm (level 1) có phải duy nhất? | **Có** — duy nhất toàn hệ thống, không phân biệt hoa thường. | CR-02 mục 2 |

### H.3. Nhóm Q — Hệ quả phát sinh từ chính các quyết định trên

| # | Vấn đề | Quyết định | Vị trí |
| --- | --- | --- | --- |
| Q1 | Techlead/PIC hiện **không vào được màn hình danh sách** (chỉ vào chi tiết qua link Lark) — nhưng A3 nói họ "nhìn thấy báo giá của mình" | **Cấp quyền vào màn hình danh sách** cho Techlead/PIC, lọc theo vai trò trên bản ghi. | CR-18 mục 18.1.5 |
| Q2 | Grid rate theo giá bán: Techlead/PIC bị cấm xem, và báo giá chưa tới Price Setting thì trống | **1 cột duy nhất theo giá bán, ẩn hẳn với Techlead/PIC**; chưa có giá bán thì hiển thị "Chưa xác định". | CR-11 mục 4 |
| Q3 | Sales owner nghỉ việc → báo giá của họ **không Sales nào khác nhìn thấy**, hệ thống chưa có cơ chế chuyển owner | **Bổ sung chức năng "Chuyển người phụ trách báo giá"**, quyền CEO/CFO/CSO/CIO. | CR-18 mục 18.2 |

### H.4. Nhóm C — Thay đổi kiến trúc có chủ ý (đã được chấp thuận)

| # | Nội dung | Quyết định |
| --- | --- | --- |
| C1 | CR-16 buộc file export phải phân nhánh theo actor, **phá vỡ** cơ chế bảo mật "an toàn theo cấu trúc" hiện có | **Chấp thuận là thay đổi có chủ ý**, kèm yêu cầu bù đắp: **bổ sung kiểm thử ở mức byte cho từng biến thể A/B/C1/C2** để giữ nguyên mức đảm bảo an toàn. |
| C2 | CR-05 mục 4 **đảo ngược** nguyên tắc làm tròn hiện tại của bộ máy tính toán | **Chấp thuận.** Ghi rõ trong tài liệu: quy tắc mới thay thế quy tắc cũ, để đội kiểm thử không coi là lỗi hồi quy. |
| C3 | Cấu hình vendor thuê ngoài đang nằm lẫn trong mục nghiệp vụ | **Tách thành mục riêng CR-03B** trong khu vực Cấu hình hệ thống. |

### H.5. Các khoảng trống được vá thêm khi rà soát chéo tài liệu

4 điểm dưới đây **không nằm trong danh sách khách hàng đã trả lời**, mà được phát hiện khi rà soát chéo tính nhất quán của chính tài liệu sau khi cập nhật Đợt 5. Đội phát triển đã chọn phương án theo nguyên tắc nhất quán với các quyết định đã có. Nếu khách hàng thấy chưa phù hợp, xin phản hồi.

| # | Khoảng trống | Phương án đã chọn | Vị trí |
| --- | --- | --- | --- |
| H5-1 | **Ma trận "ai sửa được nội dung công việc ở bước nào"** chưa từng được phát biểu tường minh, dù CR-10 và CR-17 đều dựa vào nó | Bổ sung bảng đầy đủ theo 7 bước × 4 nhóm actor. Nguyên tắc chốt: nội dung công việc **khoá vĩnh viễn ngay khi rời bước Estimate**. | **CR-09 mục 8** |
| H5-2 | Khi báo giá bị **Reject**, đã chốt giữ lại Tổng giá bán — nhưng chưa nói **% contingency đã sửa riêng** có giữ không | **Giữ lại**, không reset về default — nhất quán với cách xử lý Tổng giá bán. | CR-11 mục 5 |
| H5-3 | Chưa có quy tắc xử lý **báo giá đang dở dang giữa luồng** tại thời điểm go-live (CR-03 mục 5 chỉ xử lý dữ liệu cấu hình) | Giữ nguyên category cũ ở cấp 1, loại hình dịch vụ để trống, contingency 1-con-số áp cho toàn báo giá. **Bất biến: không con số giá vốn nào được thay đổi.** | **CR-03 mục 6** |
| H5-4 | File export của **Techlead** có breakdown thuê ngoài không (trên giao diện Techlead xem được)? | ✅ **CÓ** *(khách hàng chốt lại ngày 10/08/2026 — đảo so với phương án đội phát triển đề xuất ban đầu)*. File export **nhất quán với quyền xem trên giao diện** ([Chốt Đ4-G3]): Techlead là người nhập số liệu thuê ngoài nên cần file để đối chiếu với vendor. **Hệ quả:** "Bản C" tách thành **Bản C1 (Techlead — có breakdown thuê ngoài)** và **Bản C2 (PIC — không có)**; tổng số biến thể file tăng từ 3 lên **4**. | CR-16 mục 2, 3 |

***

## I. GHI CHÚ TRIỂN KHAI KỸ THUẬT

Mục này dành riêng cho đội phát triển — không phải nội dung nghiệp vụ cần khách hàng duyệt.

### I.1. Các invariant/quy tắc cũ bị thay thế

| Quy tắc cũ | Thay bằng | Nguồn |
| --- | --- | --- |
| **BR-03** — "Sales và IT không được xem % Contingency" | Chỉ còn áp dụng cho **Techlead/PIC**. Sales owner được xem **và sửa**. | [Chốt Đ5-A1] · CR-15 mục 2 |
| Nguyên tắc làm tròn: mỗi giá trị tiền được làm tròn **độc lập**, không bao giờ cộng từ số đã làm tròn | Giá vốn tổng nay **cộng từ các giá trị đã làm tròn** của từng loại hình dịch vụ | [Chốt Đ1-C7] · CR-05 mục 4 |
| Riêng **Giá bán phân bổ**: không bù trừ số dư | **Có bù trừ** — dồn số dư vào loại hình dịch vụ có Manday lớn nhất | [Chốt Đ4-G8] · CR-11 mục 2.2 |
| File export **không phân nhánh theo actor** (an toàn theo cấu trúc) | Phân nhánh **4 biến thể A/B/C1/C2** theo quyền người export | [Chốt Đ3-C3] · CR-16 |
| Danh sách báo giá trả về **toàn bộ** bản ghi cho mọi người có quyền xem | Lọc theo **vai trò trên bản ghi**; chỉ lãnh đạo thấy toàn bộ | [Chốt Đ5-A3] · CR-18 |
| Quyền "Tính lại" thuộc về **một mình CSO** | Waiting Approval: **cả 4 lãnh đạo**; Price Setting: **Sales owner** | [Chốt Đ5-A4] · CR-11 |
| Contingency: **1 giá trị/báo giá**, chỉ sửa được ở bước duyệt cuối | **N giá trị** theo loại hình dịch vụ; sửa được ở Price Setting và Waiting Approval | [Chốt Đ5-A6] · CR-03 |

### I.1b. Danh sách thay đổi cấu trúc dữ liệu (ước lượng)

| # | Thay đổi | Đối tượng | Phục vụ mục |
| --- | --- | --- | --- |
| 1 | Thêm cột **cấp cha** cho danh mục dịch vụ; đổi ràng buộc trùng tên thành "duy nhất trong phạm vi cấp cha", đồng thời giữ ràng buộc duy nhất cho cấp 1 | Danh mục dịch vụ | CR-02 |
| 2 | Thêm cột **% contingency** theo từng loại hình dịch vụ | Danh mục dịch vụ (hoặc bảng cấu hình riêng) | CR-03 |
| 3 | **Bảng nối mới**: báo giá ↔ N **hạng mục tính giá**, kèm **% contingency riêng của báo giá** cho từng hạng mục. ⚠️ Khoá ngoại phải trỏ được tới danh mục dịch vụ ở **CẢ cấp 1 lẫn cấp 2** (vì hạng mục có thể là chính Line khi Line không có con — [Chốt Đ6-3]). Danh sách Line của báo giá **suy ra từ tập hạng mục**, không cần bảng nối riêng cho Line. | Mới | CR-03 mục 4, CR-04 |
| 4 | Thêm cột **dòng cha** (phân cấp Task/Sub-task), **thứ tự sắp xếp**, **hạng mục tính giá của dòng** (trỏ tới bảng nối ở mục 3), **cờ thuê ngoài** | Bảng công việc | CR-04, CR-09, CR-10 |
| 5 | **Bảng mới**: danh sách vendor (tên, % phí, trạng thái, ghi chú) | Mới | CR-03B |
| 6 | **Bảng mới**: thông tin thuê ngoài theo từng dòng công việc (vendor, chi phí trả đối tác, % phí đã chốt tại thời điểm nhập) | Mới | CR-10 |
| 7 | Thêm cột **Description** (5.000 ký tự), **Tổng giá bán**, **PnL tổng**, **Rate ngày/giờ theo giá bán**, **người phụ trách hiện hành (owner)** | Báo giá | CR-06, CR-11, CR-18 |
| 8 | **Bảng mới**: breakdown giá vốn / giá bán phân bổ / PnL **theo từng hạng mục tính giá**. Cấp Line **không lưu** — cộng gom khi đọc (I.3b mục 3). | Mới | CR-05, CR-11 |
| 9 | Mở rộng danh sách **trạng thái hợp lệ** → thêm `Price Setting` | Báo giá | CR-11 |
| 10 | Mở rộng danh sách **loại sự kiện** → thêm sự kiện nhập/sửa giá bán, tính lại bởi Sales, **chuyển owner** | Nhật ký sự kiện | CR-11, CR-18 |
| 11 | Mở rộng danh sách **loại thông báo** → thêm thông báo yêu cầu nhập giá bán và thông báo tiếp nhận báo giá | Bảng thông báo | CR-13, CR-18 |
| 12 | Thêm ràng buộc **Manday > 0 và là bội số của 0,5**; giới hạn độ dài Task 100 / Sub-task 1.000 ký tự | Bảng công việc | CR-09 |
| 13 | Bổ sung **chỉ mục** cho các cột dùng để lọc danh sách theo người xem (owner, tech lead, danh sách PIC) và chỉ mục còn thiếu trên bảng công việc / nhật ký sự kiện | Nhiều bảng | CR-18, hiệu năng |

⇒ **9 bảng hiện có bị chạm + 4 bảng mới.** Cần script migration kèm **kiểm thử đối chiếu số liệu trước/sau** cho nhóm báo giá đang dở dang (CR-03 mục 6).

### I.2. Kiểm thử hiện có sẽ bị ảnh hưởng

| Nhóm kiểm thử | Ảnh hưởng | Việc cần làm |
| --- | --- | --- |
| Masking % Contingency | Sales owner nay **được** xem → kịch bản cũ sai | Viết lại: Sales owner thấy, Techlead/PIC không thấy |
| Rà soát bảo mật toàn bộ đường dẫn API | Thêm nhiều đường dẫn mới (vendor, giá bán, chuyển owner, danh sách đã lọc) | Cập nhật danh sách kiểm đếm |
| Export "che số liệu như nhau cho mọi vai trò" | Nay có 4 biến thể khác nhau | Thay bằng 4 bộ kiểm thử mức byte cho A/B/C1/C2 |
| Tái lập kết quả tính toán từ snapshot | Công thức đổi theo hạng mục tính giá | Mở rộng kịch bản cho báo giá **nhiều Line, nhiều hạng mục, có trộn cấp** |
| Ma trận chuyển trạng thái | Thêm bước Price Setting | Bổ sung các nhánh chuyển bước mới |
| Danh sách báo giá | Nay bị lọc theo người xem | Bổ sung kịch bản cho từng nhóm actor |
| Migration dữ liệu | Báo giá đang dở dang phải giữ nguyên con số | Bổ sung kiểm thử đối chiếu trước/sau migration (CR-03 mục 6), **kèm ca kiểm thử báo giá migrate hiển thị đúng trên giao diện breakdown 3 mức mới** |
| Bộ máy tính toán | Nay xử lý tập hạng mục **trộn cấp 1 và cấp 2**, thuộc nhiều Line | Bổ sung kịch bản: trộn cấp; 2 hạng mục trùng tên loại hình ở 2 Line; **bảo toàn tổng** (Σ theo Line = tổng báo giá) cho cả giá vốn lẫn giá bán phân bổ; phá hoà khi Manday bằng nhau |

### I.3. Điểm cần lưu ý khi hiện thực

1. **Toàn bộ masking và lọc dữ liệu phải nằm ở tầng server.** Yêu cầu này lặp lại ở CR-15, CR-16 và CR-18 — không được chỉ ẩn ở giao diện, vì dữ liệu vẫn lộ khi gọi thẳng API.
2. **Phân biệt rõ 2 thao tác tính lại:**
    - *Sửa contingency* → tính lại **bằng dữ liệu đầu vào đã khoá** (không nạp lương/chi phí mới).
    - *Nút "Tính lại"* → **nạp lại toàn bộ dữ liệu đầu vào hiện hành**.
3. **Danh sách báo giá bị lọc theo người xem** → cần bảo đảm hiệu năng khi số lượng báo giá lớn (bổ sung chỉ mục cho các cột dùng để lọc: người tạo/owner, tech lead, và bảng danh sách PIC).
4. **Bảng công việc nay cần khoá ở CẤP DÒNG**, không chỉ cấp toàn bảng — do dòng thuê ngoài có quy tắc riêng (CR-10 mục 4).
5. **Ba hạng mục đụng trực tiếp con số tiền** (CR-05, CR-11, phân bổ giá bán) nên tách phase riêng với kiểm thử chặt, theo đúng tiền lệ của CR-01.
6. **Quy tắc khoá nội dung công việc** (CR-09 mục 8) là **nền tảng** cho quyết định không mở rộng snapshot ở CR-17. Nếu khi hiện thực phát hiện quy tắc này không giữ được, phải quay lại xem xét CR-17 mục 4.
7. **Nợ kỹ thuật nên dọn kèm:** cập nhật lại tài liệu BRD cho khớp code hiện tại; thống nhất quy tắc làm tròn giữa module nhân sự và module tài chính; sửa hiển thị giờ trong thẻ thông báo về múi giờ Việt Nam; bổ sung chỉ mục còn thiếu cho bảng công việc.

### I.3b. [Chốt Đ6] Ghi chú riêng cho việc mở rộng nhiều Line sản phẩm

1. **Bộ máy tính toán KHÔNG đổi.** Đơn vị tính vốn đã là cấp 2; mở rộng sang nhiều Line chỉ làm tăng số phần tử trong tập hạng mục. Không cần sửa công thức, không cần sửa cách phân bổ chi phí gián tiếp, không cần sửa quy tắc làm tròn.
2. **Quan hệ báo giá ↔ danh mục:** bảng nối đã dự kiến ở I.1b mục 3 phải cho phép trỏ tới **cả cấp 1 lẫn cấp 2** (vì hạng mục có thể là chính Line khi Line không có con). Không cần bảng nối riêng cho Line — danh sách Line của báo giá **suy ra được** từ tập hạng mục.
3. **Cấp Line là cấp hiển thị, không phải cấp lưu trữ.** Giá vốn/giá bán/PnL theo Line được **cộng gom khi đọc** từ số liệu cấp hạng mục, không lưu thành cột riêng — tránh rủi ro hai nguồn số liệu lệch nhau.
4. **Tên hiển thị `Line / Loại hình`** nên được sinh ở **một chỗ duy nhất** (một hàm dùng chung) rồi tái sử dụng cho dropdown, bảng công việc, template import, breakdown, export và thông báo. Nếu mỗi nơi tự ghép chuỗi sẽ phát sinh sai lệch.
5. **Kiểm thử bắt buộc bổ sung:** báo giá **trộn** hạng mục cấp 2 và hạng mục cấp 1; báo giá có 2 hạng mục **trùng tên loại hình** ở 2 Line khác nhau; kiểm tra **bảo toàn tổng** (tổng theo Line = tổng báo giá) cho cả giá vốn lẫn giá bán phân bổ.
6. **Hoàn toàn không ảnh hưởng** tới: CR-06, CR-07, CR-08, CR-18 và toàn bộ **cơ chế** phân quyền.
7. **Chỉ đổi nhãn / bổ sung mức Line** (không đổi logic): CR-10 (đổi cách gọi sang "hạng mục"), CR-14 (ngưỡng cảnh báo không áp cho PnL theo Line), CR-15 (bảng phân quyền bổ sung dòng cấp Line), CR-17 (snapshot lưu ở cấp hạng mục, không lưu cấp Line).

### I.4. Thứ tự triển khai đề xuất

**Nhánh phụ thuộc dây chuyền** (phải làm tuần tự):

```
CR-02 Category 2 cấp
  └─> CR-03 Contingency theo loại hình
        └─> CR-04 Chọn nhiều loại hình khi tạo báo giá
              └─> CR-09 Task gắn hạng mục tính giá
                    └─> CR-05 Công thức giá vốn theo loại hình      ← [TIỀN]
                          └─> CR-11 Price Setting + giá bán + PnL   ← [TIỀN]
                                └─> CR-15 Phân quyền Giá bán/PnL
                                      └─> CR-16 File export 4 biến thể
```

**Nhánh độc lập** (làm song song ngay từ đầu): CR-03B (cấu hình vendor), CR-06 (Description), CR-08 (đổi tên bước), CR-14 (làm nổi bật số liệu), CR-18 (phạm vi hiển thị & chuyển owner).

**[Chốt Đ6-1] Cập nhật phụ thuộc sau khi mở rộng nhiều Line:**

- **CR-12** (định dạng tiền) nay **phụ thuộc CR-04** — vì cột Line trên Grid trở thành nhiều giá trị và bộ lọc đổi ngữ nghĩa sang "có chứa". Phần định dạng số tiền thuần tuý vẫn làm song song được; chỉ phần cột Line phải chờ CR-04.
- **CR-13** (thông báo) nay **phụ thuộc CR-04** — vì nội dung thông báo phải liệt kê danh sách Line và tên hạng mục ghép. Phần sửa đường dẫn điều hướng vẫn làm song song được.
- **CR-10** (thuê ngoài) phụ thuộc CR-03B và CR-04, không phụ thuộc nhánh giá bán.

***

## J. ĐỢT 6 — MỞ RỘNG: MỘT BÁO GIÁ CHO NHIỀU LINE SẢN PHẨM

**Ngày chốt:** 11/08/2026. Đây là **mở rộng phạm vi nghiệp vụ**, không phải làm rõ — nó **bãi bỏ** quyết định Đợt 1 Câu 4.

### J.1. Nội dung thay đổi

| # | Nội dung | Quyết định |
| --- | --- | --- |
| **Đ6-1** | 1 báo giá được chọn **nhiều Line sản phẩm**, mỗi Line nhiều loại hình dịch vụ | Bãi bỏ ràng buộc "1 báo giá = 1 Line". Bổ sung khái niệm **"hạng mục tính giá"** làm đơn vị tính thống nhất. PnL breakdown thành **3 mức**: hạng mục → Line → tổng. |
| **Đ6-2** | Hai Line được phép có loại hình dịch vụ **trùng tên** | Mọi nơi hiển thị tên hạng mục theo quy ước **`Line / Loại hình dịch vụ`**. |
| **Đ6-3** | Trộn Line-có-loại-hình-con và Line-không-có-con trong cùng 1 báo giá | **Cho phép**. Hạng mục tính giá có thể là cặp (Line + loại hình) hoặc chính Line. |

### J.1b. Bảng truy vết Đợt 6 → vị trí trong tài liệu

| # | Nội dung | Vị trí |
| --- | --- | --- |
| Đ6-1 | Định nghĩa "hạng mục tính giá" | **CR-04** (khối khái niệm nền) |
| Đ6-1 | Bỏ ràng buộc 1 Line; cây chọn 2 cấp | CR-04 mục 1–2, AC-CR04-07/08/09 |
| Đ6-1 | Công thức giá vốn không đổi + cộng gom theo Line | CR-05 (ghi chú cách đọc) + mục 2b, AC-CR05-08/09/10 |
| Đ6-1 | Contingency sửa theo từng hạng mục | CR-03 mục 4 (ghi chú cách đọc) |
| Đ6-1 | Phân bổ giá bán phẳng theo hạng mục + quy tắc phá hoà làm tròn | CR-11 mục 2.2, AC-CR11-25, AC-G8-01/02 |
| Đ6-1 | PnL breakdown 3 mức | CR-11 mục 2.3, AC-CR11-24/26/27 |
| Đ6-1 | Ngưỡng cảnh báo chỉ áp PnL tổng | CR-11 mục 2.4, CR-14 mục 4 |
| Đ6-1 | Bảng phân quyền bổ sung cấp Line | CR-15 mục 6 |
| Đ6-1 | Snapshot lưu ở cấp hạng mục, không lưu cấp Line | CR-17 mục 1 & 4 |
| Đ6-1 | Grid: cột Line nhiều giá trị, lọc "có chứa" | CR-12 mục 1, AC-CR12-05 |
| Đ6-1 | Thông báo liệt kê danh sách Line | CR-13 mục 1, AC-CR13-01 |
| Đ6-1 | Export: breakdown theo Line + theo hạng mục | CR-16 mục 2, AC-CR16-01 |
| Đ6-1 | Tắt Line cha trên cây chọn nhiều Line | CR-02 mục 7, AC-CR02-06 |
| Đ6-1 | Migration báo giá dở dang → 1 hạng mục = chính Line | CR-03 mục 6 |
| Đ6-2 | Quy ước hiển thị `Line / Loại hình dịch vụ` | CR-04 (khối khái niệm nền), CR-09 mục 5, AC-CR09-15 |
| Đ6-3 | Cho phép trộn hạng mục cấp 1 và cấp 2 | CR-04 (khối khái niệm nền), AC-CR04-09, AC-CR05-09 |
| Đ6 | Ghi chú kỹ thuật riêng | **I.3b** |

### J.2. Đánh giá tác động — phần lớn KHÔNG đổi

| Mục CR | Tác động |
| --- | --- |
| **CR-05** Công thức giá vốn | ✅ **Không đổi một dòng nào.** Chỉ bổ sung 1 cấp cộng gom theo Line để hiển thị (mục 2b). |
| **CR-03** Contingency | ✅ Không đổi — vốn đã cấu hình theo cặp (Line + loại hình dịch vụ). |
| **CR-11** Phân bổ giá bán | ✅ Cách phân bổ không đổi (vẫn phẳng theo hạng mục, tỷ lệ Manday). Chỉ thêm mức PnL theo Line. |
| **CR-06, CR-07, CR-08, CR-18** | ✅ Hoàn toàn không ảnh hưởng. |
| **CR-10, CR-14, CR-15, CR-17** | 🏷️ Chỉ đổi nhãn ("loại hình dịch vụ" → "hạng mục tính giá") và bổ sung mức Line vào bảng phân quyền / phạm vi snapshot. Không đổi logic. |
| **CR-04** Chọn category | 🔧 Đổi nhiều nhất — bỏ ràng buộc 1 Line, giao diện chọn dạng cây 2 cấp. |
| **CR-09** Import | 🔧 Cột đổi tên thành "Hạng mục tính giá", droplist hiển thị kèm tên Line. |
| **CR-12** Grid | 🔧 Cột Line chứa nhiều giá trị; bộ lọc đổi từ "bằng" sang "có chứa". |
| **CR-13** Thông báo | 🔧 Liệt kê danh sách Line thay vì 1 Line. |
| **CR-16** Export | 🔧 Breakdown thêm cấp Line; nhãn hạng mục kèm tên Line. |
| **Cấu trúc dữ liệu** | 🔧 Bảng nối báo giá ↔ danh mục phải trỏ được tới **cả cấp 1 lẫn cấp 2**. Không cần bảng mới. |

### J.3. Vì sao tác động nhỏ

Kiến trúc CR-02 vốn đã đặt **đơn vị tính giá ở cấp 2 (loại hình dịch vụ)**, và theo [Chốt Đ1-C1], loại hình dịch vụ vốn đã được quản lý **riêng theo từng Line** — tức bản thân nó đã là một cặp (Line + loại hình) có contingency độc lập. Vì vậy việc cho phép chọn hạng mục thuộc nhiều Line **không tạo ra khái niệm mới nào cho bộ máy tính toán**; nó chỉ nới rộng tập hợp được phép chọn.

Phần việc thật sự phát sinh nằm ở **giao diện chọn**, **cách đặt nhãn hiển thị** (do khả năng trùng tên) và **một cấp cộng gom để hiển thị** — đều là công việc trình bày, không đụng tới logic tiền.

### J.4. Khuyến nghị về thời điểm

Thay đổi này **phải được chốt trước khi bắt đầu coding**. Nếu triển khai sau khi CR-02 đã lên production, chi phí cao hơn nhiều: phải sửa cấu trúc dữ liệu đang chạy, viết migration cho báo giá đã tạo, và sửa lại toàn bộ giao diện đã hoàn thiện. Ở thời điểm hiện tại, chi phí gia tăng là **nhỏ** vì mọi thứ còn trên giấy.

***

*Tài liệu CR-02 v2 — cập nhật ngày 11/08/2026.*

*Đã cover toàn bộ: **20 câu Đợt 1** + **12 câu Đợt 2** + **3 điểm chốt Đợt 3** + **8 điểm hệ quả Đợt 4** (mục G) + **19 điểm đối chiếu source code Đợt 5** (mục H.1–H.4) + **4 khoảng trống vá thêm khi rà soát chéo** (mục H.5) + **3 điểm mở rộng nhiều Line sản phẩm Đợt 6** (mục J), kèm **ghi chú triển khai kỹ thuật** (mục I).*

***Trạng thái: ĐỦ ĐIỀU KIỆN CHUYỂN SANG CODING** — không còn điểm nghiệp vụ nào treo, và mọi mâu thuẫn với hệ thống đang chạy đều đã được chốt hướng xử lý.*

**Lưu ý khi đọc tài liệu:** một số quyết định của các đợt trước đã bị thay thế bởi đợt sau. Các quyết định **không còn hiệu lực** được đánh dấu ⛔ ngay tại chỗ. Khi có mâu thuẫn giữa hai mục, **quyết định của đợt sau luôn thắng**. Danh sách hiện tại:

| Quyết định bị bãi bỏ | Bị thay bởi | Nội dung mới |
| --- | --- | --- |
| **[Chốt Đ4-G6]** + **AC-G6-01** | [Chốt Đ5-A6] | Sửa contingency theo từng hạng mục; Price Setting do Sales owner, Waiting Approval do 4 lãnh đạo |
| **[Chốt Đ1-C4]** (Đợt 1 Câu 4) | **[Chốt Đ6-1]** | 1 báo giá được chọn **nhiều Line sản phẩm** |
| **H5-4** (phương án đội phát triển đề xuất) | Khách hàng chốt lại | File export của Techlead **CÓ** breakdown chi phí thuê ngoài |
