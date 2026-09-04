# Quality Checklist — Screen Spec

> Kiểm tra trước khi present tài liệu cho user.
> Mỗi dòng là 1 điểm kiểm tra — agent tự verify trước khi xuất file.

---

## Định danh & metadata

| # | Kiểm tra | Cách verify | Pass/Fail |
|---|----------|-------------|-----------|
| 1 | Đúng tên màn hình trong tiêu đề | Đối chiếu title vs tên màn được yêu cầu | |
| 2 | Bảng header đã điền hết, không còn placeholder `{...}` | Regex `\{[^}]+\}` trong bảng header = 0 kết quả | |
| 3 | Đã ghi mã yêu cầu BRD liên quan | Kiểm tra dòng "Yêu cầu BRD liên quan" ≠ rỗng | |
| 4 | Filename đúng convention | Match pattern `ScreenSpec_{slug}.md`, slug không dấu, viết thường, nối `-` | |

---

## Nội dung

| # | Kiểm tra | Cách verify | Pass/Fail |
|---|----------|-------------|-----------|
| 5 | Tất cả section S1–S12 đều có nội dung | Mỗi section có nội dung hoặc "Không áp dụng — {lý do}" | |
| 6 | Bảng phân quyền S2 có đủ cột tương ứng **mọi hành động** ở S5.5 | Đếm cột S2 = số hành động ở S5.5 | |
| 7 | Luồng thao tác S4 có điểm vào, bước đầu, bước cuối, điểm ra | Kiểm tra 4 mục con S4 không rỗng | |
| 8 | Mỗi trường/cột/nút/popup ở S5 đều **có mã** (F-/C-/B-/P-) và có nguồn dữ liệu | Scan bảng S5, mỗi dòng có cột mã + nguồn DL ≠ rỗng | |
| 9 | Trường số/tiền/ngày ở S5 có ghi định dạng, đơn vị, quy tắc làm tròn | Kiểm tra cột "Định dạng / Đơn vị" cho các trường số/tiền/ngày | |
| 10 | API ngoài S6.2 chỉ ghi theo tài liệu nguồn — không bịa endpoint/field | Không có endpoint/field không có trong API docs | |
| 11 | ERP nội bộ S6.1 không có endpoint, request/response, ERD, tên bảng/cột | S6.1 không chứa URL, cấu trúc JSON, tên bảng/cột DB | |
| 12 | Mỗi quy tắc nghiệp vụ S7 có mã BR-xx và cột "Liên quan" trỏ tới mã UI | Scan bảng S7, cột "Liên quan" ≠ rỗng | |

---

## Truy vết & độ phủ

| # | Kiểm tra | Cách verify | Pass/Fail |
|---|----------|-------------|-----------|
| 13 | Mỗi BR-xx có ≥ 1 AC kiểm chứng | Đếm BR-xx trong S7, tìm trong cột "Liên quan" S11 | |
| 14 | Mỗi vai trò trong S2 có ≥ 1 AC về phân quyền | Tìm tên role trong cột "Điều kiện (Given)" hoặc "Liên quan" S11 | |
| 15 | Mỗi luồng lỗi ở S4 có ≥ 1 AC | Tìm exception flow trong S11 | |
| 16 | Mỗi AC S11 có điều kiện + thao tác + kết quả kiểm chứng được, và cột "Liên quan" | Scan bảng S11, không có ô rỗng ở 4 cột chính | |
| 17 | Tất cả ⚠️/🔴 đều xuất hiện trong bảng Section 12 | Đếm ⚠️/🔴 toàn doc, đối chiếu danh sách S12 | |
| 18 | Mọi mã tham chiếu trong tài liệu đều tồn tại (không trỏ tới mã đã xóa) | Collect mã trong cột "Liên quan", verify mỗi mã có định nghĩa trong doc | |

---

## Trình bày

| # | Kiểm tra | Cách verify | Pass/Fail |
|---|----------|-------------|-----------|
| 19 | Ký hiệu trạng thái dùng đúng 2 trục | Trục 1 (✅/⚠️/🔴) inline ở mọi section; Trục 2 (🟡/🔵/✅) chỉ trong S12 | |
| 20 | Boolean dùng text, **không dùng ✅/❌** | Cột quyền/bắt buộc/retry/ghi log dùng Có/Không, Bắt buộc/Tùy chọn | |
| 21 | Markdown render đúng | Bảng, heading, code block không bị vỡ cấu trúc | |
| 22 | Không còn data mẫu từ template | Không chứa `{Role 1}`, `{Term 1}`, `{field_a}`, `{Data 1}` | |
