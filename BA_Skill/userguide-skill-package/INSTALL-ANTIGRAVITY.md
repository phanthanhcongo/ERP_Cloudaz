# Port skill /userguide sang Google Antigravity IDE

> Đưa skill `/userguide` (vốn viết cho Claude Code) sang **Google Antigravity IDE**. Gồm: (A) cấu trúc cấu hình Antigravity, (B) ánh xạ Claude Code → Antigravity, (C) prompt copy-paste ở `PROMPT-ANTIGRAVITY.md`.
>
> Cập nhật theo tài liệu Antigravity tới ~6/2026. Path có thể đổi giữa các bản — luôn đối chiếu cây thư mục thật trong IDE (xem cảnh báo A.3).

---

## A. Antigravity cấu hình thế nào

### A.1 — Vị trí (workspace / project scope)

| Loại | Đường dẫn | Vai trò |
|---|---|---|
| **Skills** | `<project-root>/.agents/skills/{name}/SKILL.md` | "Sổ tay" agent nạp khi liên quan. Tương đương skill Claude Code. |
| **Rules** | `<project-root>/.agents/rules/*.md` | Như system instruction — luôn áp dụng. |
| **Workflows** | `<project-root>/.agent/workflows/*.md` | Prompt lưu sẵn, gọi bằng `/<tên>` trong chat. |
| **AGENTS.md** | `<project-root>/AGENTS.md` | Nền tảng chung (Antigravity + Cursor + Claude Code đều đọc). |

### A.2 — Global scope (mọi project)

| Loại | Đường dẫn |
|---|---|
| Skills | `~/.gemini/config/skills/` |
| Rules | `~/.gemini/GEMINI.md` |

### A.3 — ⚠️ Cảnh báo tên thư mục (`.agent` vs `.agents`)

Điểm dễ sai nhất — nguồn tài liệu lẫn số ít/số nhiều:
- **Skills/Rules:** đa số dùng **`.agents/`** (số nhiều).
- **Workflows:** có nguồn ghi `.agent/workflows/`, có nguồn `.agents/workflows/`; Antigravity còn cho tạo workflow qua UI.

👉 **Trước khi copy, tạo thử 1 skill rỗng qua UI/lệnh của Antigravity để xem nó đẻ ra thư mục tên gì.** Dùng đúng tên đó. Hướng dẫn dưới mặc định `.agents/`.

### A.4 — SKILL.md của Antigravity

Frontmatter tối giản:
```yaml
---
name: userguide
description: <trigger phrase NGỮ NGHĨA, càng cụ thể càng dễ kích hoạt đúng>
---
```
- `description` là **bắt buộc** và là "trigger phrase" — mô tả cụ thể ("Sinh cẩm nang vận hành / hướng dẫn sử dụng cho admin từ tài liệu BA, dựng mục lục Diátaxis rồi chờ duyệt trước khi viết") mới được nạp đúng.
- Kích hoạt qua ngôn ngữ tự nhiên; muốn gõ `/userguide` thì tạo thêm Workflow mỏng (B.4).

---

## B. Ánh xạ Claude Code → Antigravity

| Thành phần Claude Code | Trong gói | → Antigravity |
|---|---|---|
| `.claude/skills/userguide/SKILL.md` | `claude-code/.claude/skills/userguide/` | `.agents/skills/userguide/SKILL.md` (sửa frontmatter, B.1) |
| `.claude/skills/userguide/engine/` | cùng skill | giữ trong `.agents/skills/userguide/engine/` |
| `.claude/agents/manual-reviewer.md` | `claude-code/.claude/agents/` | nhúng inline vào skill (B.2) hoặc subagent Antigravity 2.0 |
| `.claude/rules/*.md` | `claude-code/.claude/rules/` | `.agents/rules/*.md` (giữ nội dung) |
| `_templates/userguide-*` | `claude-code/_templates/` | `_templates/userguide-*` (giữ nguyên) |

### B.1 — Frontmatter SKILL.md

- **Giữ:** `name`, `description`.
- **Bỏ:** `allowed-tools`, `user-invocable`, `disable-model-invocation`, `argument-hint`.
- Cú pháp tham số (`/userguide <feature>`) → chuyển xuống mục "Cách gọi" trong body.

### B.2 — Agent review (`manual-reviewer`)

Claude Code spawn qua Task tool; Antigravity không có y hệt. Hai cách:
1. **Inline (khuyến nghị khi mới port):** nhúng nội dung `manual-reviewer.md` thành mục "Tiêu chí tự review mục lục" trong SKILL.md, để agent tự soi mục lục (độ phủ Diátaxis, trộn loại, tiêu đề không task-based, trang không tự đứng vững) TRƯỚC khi in ra chat cho user duyệt.
2. **Subagent (Antigravity 2.0):** nếu bản của bạn hỗ trợ subagents, tách thành subagent và gọi ở giai đoạn 1.

### B.3 — Path engine + template trong SKILL.md

Rà mọi chuỗi `.claude/skills/userguide/engine/capture.mjs` + `check-playwright.mjs` → đổi cho khớp vị trí mới trong `.agents/`. Reference `@../../rules/...` → bỏ (rule ở `.agents/rules/` auto-load) hoặc sửa path. Kiểm SKILL.md trỏ đúng `_templates/userguide-section.md` + `userguide-preview.html`.

### B.4 — (Tùy chọn) Lệnh `/userguide`

Muốn gõ lệnh như Claude Code: tạo Workflow mỏng `.agent/workflows/userguide.md` (frontmatter có `description`) trỏ về skill.

---

## C. Điểm cần chú ý

- **HARD STOP report-first phải giữ.** Skill dựng mục lục → IN RA CHAT → DỪNG chờ user gõ `tiếp`. Đảm bảo Antigravity chạy skill ở luồng có kênh chat (không chạy nền), nếu không HARD STOP bị bỏ qua và skill viết luôn.
- **Engine Playwright cần cài ở máy** (nếu dùng auto-chụp): `npm install` + `npx playwright install chromium` trong `.agents/skills/userguide/engine/`. Không dùng auto-chụp thì bỏ qua — skill để placeholder ảnh.
- **Template render** (`userguide-preview.html`) là file tĩnh — Antigravity chỉ thay lớp điều phối AI, không thay template.

---

## D. Prompt tự động

Không cần làm tay từng bước — mở gói này trong Antigravity IDE, **mở `PROMPT-ANTIGRAVITY.md` và dán toàn bộ prompt trong đó vào chat agent**. AI sẽ tự sao chép + chuyển đổi skill sang chuẩn Antigravity IDE (prompt đã dặn agent bám tài liệu Antigravity mới nhất ~06/2026).

---

## E. Checklist sau khi port

- [ ] `.agents/skills/userguide/` có SKILL.md (frontmatter chỉ còn `name` + `description`) + engine.
- [ ] `.agents/rules/` có các rule.
- [ ] Path engine + template trong SKILL.md đã trỏ đúng vị trí `.agents/`.
- [ ] Tiêu chí `manual-reviewer` nằm inline trong SKILL.md (hoặc subagent).
- [ ] (Nếu auto-chụp) Engine đã `npm install` + `playwright install chromium`.
- [ ] Chạy thử `/userguide <feature>` → skill DỪNG ở HARD STOP mục lục trước khi viết.

---

## Nguồn tham khảo (Antigravity, tới ~6/2026)

- [Getting Started with Google Antigravity — Codelabs](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Authoring Antigravity Skills — Codelabs](https://codelabs.developers.google.com/getting-started-with-antigravity-skills)
- [Antigravity Docs — Skills](https://antigravity.google/docs/skills) · [Rules & Workflows](https://antigravity.google/docs/rules-workflows)
