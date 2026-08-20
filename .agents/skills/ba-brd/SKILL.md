---
name: ba-brd
description: >
  Generate a Business Requirements Document (BRD) from client requirements.
  Use this skill whenever the user wants to create a BRD, business requirements doc,
  or needs to convert raw client notes/interviews into a structured BRD document.
  Triggers: "tạo BRD", "viết BRD", "generate BRD", "làm BRD từ yêu cầu",
  "convert notes to BRD", "create business requirements document".
  Input can be: a PDF file attached to chat, a Notion URL, or pasted raw notes.
---

# BA Skill: Generate BRD (Business Requirements Document)

## Purpose

Turn raw client requirement notes into a professional, structured BRD .docx file,
following the standard BA template. The output should be ready to share with
the development team or client for sign-off.

---

## Step 1 — Read the Input

Determine the input source:

- **PDF file attached**: Use `python3` with `pdfplumber` or `pdfminer` to extract text.
  ```bash
  pip install pdfplumber --break-system-packages -q
  python3 -c "import pdfplumber; pdf=pdfplumber.open('input.pdf'); [print(p.extract_text()) for p in pdf.pages]"
  ```
- **Notion URL provided**: Use the Notion MCP tool (`notion-fetch` or `notion-search`) to
  fetch the page content directly. Ask the user for the page URL if not provided.
- **Text pasted in chat**: Use as-is.

If the input source is unclear, ask: "Bạn muốn nhập yêu cầu qua file PDF, Notion URL, hay paste text trực tiếp?"

---

## Step 2 — Extract Key Information

From the raw input, identify and extract:

| Field | What to look for |
|-------|-----------------|
| Project/Product name | App name, system name, product being built |
| Current business problem | Pain points, current state, what's broken/missing |
| Proposed solution | What will be built, system overview |
| Systems impacted | Existing systems, integrations, platforms affected |
| Assumptions / Dependencies | Constraints, third-party dependencies, open questions |
| Business Requirements | Feature groups and individual capabilities |

For **Business Requirements**, organize into logical groups (e.g., 5.1 User Management, 5.2 Order Management) and write each requirement as:
> "Ability for the [actor] to [action]"

Number them hierarchically: `5.1`, `5.1.1`, `5.1.2`, etc.

If the input is vague, make reasonable inferences AND flag them clearly with `[ASSUMPTION - cần xác nhận]`.

---

## Step 3 — Generate the BRD .docx

Create the output file using Python (`python-docx`). Save to the workspace folder.

**Ngôn ngữ mặc định: TIẾNG VIỆT** — toàn bộ nội dung BRD (tiêu đề mục, mô tả, yêu cầu, open questions)
viết bằng tiếng Việt có dấu. Chỉ giữ tiếng Anh cho: tên file, tên skill/tool kỹ thuật, và thuật ngữ
chuyên ngành không có bản dịch chuẩn (ví dụ: OT, GPS, API, dashboard).

**Filename**: `BRD_{TênDựÁn}_{YYYY-MM-DD}.docx`

### Cấu trúc tài liệu (tiếng Việt)

```
Trang bìa
   - Tiêu đề: "TÀI LIỆU YÊU CẦU NGHIỆP VỤ"
   - Dòng phụ: "Business Requirements Document (BRD)"
   - Dự án, Khách hàng, Ngày, Phiên bản

Lịch sử Tài liệu
   - Phiên bản | Ngày | Tác giả | Mô tả

1. Vấn đề Hiện tại
   - Đoạn văn mô tả thực trạng và điểm đau của khách hàng

2. Giải pháp Đề xuất
   - Đoạn văn mô tả giải pháp sẽ xây dựng

3. Hệ thống bị Ảnh hưởng
   - Danh sách các hệ thống/nền tảng liên quan

4. Giả định / Phụ thuộc
   - Danh sách bullet (hoặc "Không có")

5. Yêu cầu Nghiệp vụ
   5.1 [Nhóm tính năng]
     5.1.1 Hệ thống cho phép [actor] [hành động]...
     5.1.2 ...
   5.2 [Nhóm tính năng]
     ...

6. Câu hỏi còn Mở — Cần xác nhận với khách hàng
   - Bảng: Mã | Vấn đề cần xác nhận | Trạng thái
```

### Cách viết yêu cầu nghiệp vụ (tiếng Việt)

Thay vì "Ability for the user to...", viết theo dạng:
> "[Actor] có thể [hành động]..." **hoặc** "Hệ thống cho phép [actor] [hành động]..."

Ví dụ:
- "Nhân viên có thể tạo đơn vắng mặt cá nhân, giới hạn 3 lần/tháng."
- "Hệ thống tự động ghi nhận ngày nghỉ bù cho ca trực đêm vượt qua 0h."
- "HR có thể xuất báo cáo tổng hợp tăng ca theo file Excel template."

Đánh số thứ bậc: `5.1`, `5.1.1`, `5.1.2`, v.v.

### Python script to create the .docx

```python
# -*- coding: utf-8 -*-
from docx import Document
from docx.shared import Pt, RGBColor, Cm
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import datetime

doc = Document()

def shade_cell(cell, fill_hex):
    tc = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), fill_hex)
    tcPr.append(shd)

# Trang bìa
title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = title.add_run("TÀI LIỆU YÊU CẦU NGHIỆP VỤ")
r.bold = True; r.font.size = Pt(20)
r.font.color.rgb = RGBColor(0x1F, 0x49, 0x7D)

subtitle = doc.add_paragraph()
subtitle.alignment = WD_ALIGN_PARAGRAPH.CENTER
subtitle.add_run("Business Requirements Document (BRD)").font.size = Pt(12)

doc.add_heading("Lịch sử Tài liệu", level=1)
# ... (bảng lịch sử: Phiên bản | Ngày | Tác giả | Mô tả)

doc.add_heading("1. Vấn đề Hiện tại", level=1)
doc.add_paragraph(van_de_hien_tai)

doc.add_heading("2. Giải pháp Đề xuất", level=1)
doc.add_paragraph(giai_phap_de_xuat)

doc.add_heading("3. Hệ thống bị Ảnh hưởng", level=1)
for item in he_thong_bi_anh_huong:
    doc.add_paragraph(item, style='List Bullet')

doc.add_heading("4. Giả định / Phụ thuộc", level=1)
for item in gia_dinh:
    doc.add_paragraph(item, style='List Bullet')

doc.add_heading("5. Yêu cầu Nghiệp vụ", level=1)
for group_title, reqs in requirements:
    doc.add_heading(group_title, level=2)
    for num, text, is_open in reqs:
        p = doc.add_paragraph(style='List Bullet')
        run_num = p.add_run(num + " "); run_num.bold = True
        run_text = p.add_run(text)
        if is_open:  # [CẦN XÁC NHẬN] items — highlight màu cam
            run_num.font.color.rgb = run_text.font.color.rgb = RGBColor(0xC0, 0x50, 0x20)
            run_text.italic = True

doc.add_heading("6. Câu hỏi còn Mở — Cần xác nhận với khách hàng", level=1)
# Bảng: Mã | Vấn đề cần xác nhận | Trạng thái
# Trạng thái mặc định: "Chờ xác nhận" hoặc "Chờ tài liệu"

doc.save(output_path)
```

Install if needed: `pip install python-docx --break-system-packages -q`

---

## Step 4 — Quality Check

Before presenting the file, verify:
- [ ] All requirement groups have clear names
- [ ] Each requirement follows "Ability for the [actor] to [action]" format
- [ ] Assumptions are flagged where the BA made inferences
- [ ] Numbering is consistent (5.1, 5.1.1, ...)
- [ ] Filename includes project name and date

---

## Step 5 — Present Output

Save the file to the workspace folder (`/Users/user/Documents/Cowork playground/`).
Present it using `mcp__cowork__present_files`.

After presenting, ask:
> "BRD đã xong! Bạn có muốn tôi tiếp tục generate **Use Case Specifications** hoặc **User Stories** từ BRD này không?"

---

## Notes

- **Ngôn ngữ mặc định là tiếng Việt.** Không dùng tiếng Anh cho nội dung trừ thuật ngữ kỹ thuật
  không có bản dịch chuẩn (OT, GPS, API, dashboard, v.v.).
- Mức độ ưu tiên yêu cầu: dùng "Bắt buộc / Nên có / Có thể có / Không làm lần này" (MoSCoW)
  nếu khách hàng đề cập; nếu không thì bỏ trống.
- Nếu có điểm còn thiếu hoặc mơ hồ trong notes, đánh dấu `[CẦN XÁC NHẬN]` và đưa vào
  bảng "Câu hỏi còn Mở" ở Section 6.
- Các items `[CẦN XÁC NHẬN]` in màu cam + in nghiêng trong tài liệu để nổi bật.
