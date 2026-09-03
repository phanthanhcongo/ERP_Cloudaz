---
name: ba-brd-md
description: >
  Generate a Business Requirements Document (BRD) as a Markdown (.md) file from client requirements.
  Use this skill whenever the user wants to create a BRD in markdown format,
  or needs to convert raw client notes/interviews into a structured BRD markdown document.
  Triggers: "tạo BRD md", "viết BRD markdown", "generate BRD md", "làm BRD markdown",
  "convert notes to BRD md", "create business requirements markdown".
  Input can be: a PDF file attached to chat, a Notion URL, or pasted raw notes.
---

# BA Skill: Generate BRD as Markdown

## Purpose

Turn raw client requirement notes into a professional, structured BRD `.md` file,
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

## Step 3 — Generate the BRD .md

Create the output markdown file. Save to the workspace folder.

**Ngôn ngữ mặc định: TIẾNG VIỆT** — toàn bộ nội dung BRD (tiêu đề mục, mô tả, yêu cầu, open questions)
viết bằng tiếng Việt có dấu. Chỉ giữ tiếng Anh cho: tên file, tên skill/tool kỹ thuật, và thuật ngữ
chuyên ngành không có bản dịch chuẩn (ví dụ: OT, GPS, API, dashboard).

**Filename**: `BRD_{TênDựÁn}_{YYYY-MM-DD}.md`

### Cấu trúc tài liệu (tiếng Việt)

Sử dụng template markdown sau đây. Thay thế các placeholder `{...}` bằng nội dung thực tế
được trích xuất từ Step 2.

````markdown
<div align="center">

# TÀI LIỆU YÊU CẦU NGHIỆP VỤ
### Business Requirements Document (BRD)

| | |
|---|---|
| **Dự án** | {Tên dự án} |
| **Khách hàng** | {Tên khách hàng} |
| **Ngày** | {YYYY-MM-DD} |
| **Phiên bản** | 1.0 |

</div>

---

## Lịch sử Tài liệu

| Phiên bản | Ngày | Tác giả | Mô tả |
|-----------|------|---------|-------|
| 1.0 | {YYYY-MM-DD} | {Tác giả} | Khởi tạo tài liệu |

---

## 1. Vấn đề Hiện tại

{Đoạn văn mô tả thực trạng và điểm đau của khách hàng}

---

## 2. Giải pháp Đề xuất

{Đoạn văn mô tả giải pháp sẽ xây dựng}

---

## 3. Hệ thống bị Ảnh hưởng

- {Hệ thống 1}
- {Hệ thống 2}
- ...

---

## 4. Giả định / Phụ thuộc

- {Giả định 1}
- {Giả định 2}
- ...

*(Nếu không có: "Không có giả định đặc biệt.")*

---

## 5. Yêu cầu Nghiệp vụ

### 5.1 {Nhóm tính năng 1}

- **5.1.1** Hệ thống cho phép {actor} {hành động}...
- **5.1.2** {Actor} có thể {hành động}...

### 5.2 {Nhóm tính năng 2}

- **5.2.1** Hệ thống cho phép {actor} {hành động}...
- **5.2.2** {Actor} có thể {hành động}...

> [!WARNING]
> Các yêu cầu đánh dấu **⚠️ [CẦN XÁC NHẬN]** là do BA suy luận từ notes,
> cần xác nhận lại với khách hàng trước khi phát triển.

---

## 6. Câu hỏi còn Mở — Cần xác nhận với khách hàng

| Mã | Vấn đề cần xác nhận | Trạng thái |
|----|---------------------|------------|
| Q1 | {Câu hỏi 1} | Chờ xác nhận |
| Q2 | {Câu hỏi 2} | Chờ tài liệu |

````

### Cách viết yêu cầu nghiệp vụ (tiếng Việt)

Viết theo dạng:
> "[Actor] có thể [hành động]..." **hoặc** "Hệ thống cho phép [actor] [hành động]..."

Ví dụ:
- "Nhân viên có thể tạo đơn vắng mặt cá nhân, giới hạn 3 lần/tháng."
- "Hệ thống tự động ghi nhận ngày nghỉ bù cho ca trực đêm vượt qua 0h."
- "HR có thể xuất báo cáo tổng hợp tăng ca theo file Excel template."

Đánh số thứ bậc: `5.1`, `5.1.1`, `5.1.2`, v.v.

### Highlight items cần xác nhận

Trong markdown, các item `[CẦN XÁC NHẬN]` được đánh dấu bằng:
- Prefix **⚠️ [CẦN XÁC NHẬN]** trước nội dung yêu cầu
- In nghiêng toàn bộ dòng yêu cầu đó

Ví dụ:
```markdown
- **5.1.3** *⚠️ [CẦN XÁC NHẬN] Hệ thống cho phép nhân viên tự huỷ đơn nghỉ phép sau khi được duyệt.*
```

---

## Step 4 — Quality Check

Before presenting the file, verify:
- [ ] All requirement groups have clear names
- [ ] Each requirement follows "[Actor] có thể [hành động]" or "Hệ thống cho phép [actor] [hành động]" format
- [ ] Assumptions are flagged where the BA made inferences with ⚠️ [CẦN XÁC NHẬN]
- [ ] Numbering is consistent (5.1, 5.1.1, ...)
- [ ] Filename includes project name and date
- [ ] Markdown renders correctly (headings, tables, lists, alerts)

---

## Step 5 — Present Output

Save the `.md` file to the project's `docs/` folder (or workspace root if `docs/` doesn't exist).

After presenting, ask:
> "BRD đã xong! Bạn có muốn tôi tiếp tục generate **Use Case Specifications** hoặc **User Stories** từ BRD này không?"

---

## Notes

- **Ngôn ngữ mặc định là tiếng Việt.** Không dùng tiếng Anh cho nội dung trừ thuật ngữ kỹ thuật
  không có bản dịch chuẩn (OT, GPS, API, dashboard, v.v.).
- Mức độ ưu tiên yêu cầu: dùng "Bắt buộc / Nên có / Có thể có / Không làm lần này" (MoSCoW)
  nếu khách hàng đề cập; nếu không thì bỏ trống.
- Nếu có điểm còn thiếu hoặc mơ hồ trong notes, đánh dấu `⚠️ [CẦN XÁC NHẬN]` và đưa vào
  bảng "Câu hỏi còn Mở" ở Section 6.
- Các items `[CẦN XÁC NHẬN]` in nghiêng + có icon ⚠️ để nổi bật trong markdown.
- **Không cần cài thêm dependency** — skill này chỉ sinh file markdown thuần túy.
