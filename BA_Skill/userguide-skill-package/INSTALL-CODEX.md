# Port skill /userguide sang Codex CLI

> Đưa skill `/userguide` (vốn viết cho Claude Code) sang **Codex CLI**. Codex đọc thư mục `.codex/` ở gốc project (song song với `.claude/` của Claude Code) và file nền `AGENTS.md`. Gồm: (A) cấu trúc Codex, (B) ánh xạ Claude Code → Codex, (C) prompt copy-paste ở `PROMPT-CODEX.md`.

---

## A. Codex đọc cấu hình thế nào

| Loại | Claude Code | Codex CLI |
|---|---|---|
| Skill | `.claude/skills/userguide/SKILL.md` | `.codex/skills/userguide/SKILL.md` |
| Rules | `.claude/rules/*.md` | `.codex/rules/*.md` |
| Agent | `.claude/agents/manual-reviewer.md` (Markdown + frontmatter) | `.codex/agents/manual-reviewer.toml` (`description` + `developer_instructions`) |
| Engine | `.claude/skills/userguide/engine/*.mjs` | `.codex/skills/userguide/engine/*.mjs` (giữ nguyên, Node) |
| Templates | `_templates/userguide-*` | `_templates/userguide-*` (giữ nguyên) |
| File nền | `CLAUDE.md` | `AGENTS.md` |

Điểm khác chính: **skill/rule/engine/template gần như giữ nguyên**; chỉ **agent** đổi định dạng (Markdown → TOML). Engine Playwright (`capture.mjs`, `check-playwright.mjs`) chạy y hệt.

---

## B. Ánh xạ chi tiết

### B.1 — Skill + engine + templates (giữ nguyên)

```bash
mkdir -p <project>/.codex/skills <project>/_templates
cp -R claude-code/.claude/skills/userguide  <project>/.codex/skills/
cp    claude-code/_templates/*               <project>/_templates/
```

> `_templates/userguide-section.md` + `userguide-preview.html` được SKILL.md tham chiếu (`@../../../_templates/...`). Copy đủ, nếu không skill thiếu khung trang + template render.

SKILL.md frontmatter của Claude Code (`allowed-tools`, `user-invocable`, `argument-hint`, `disable-model-invocation`) — Codex chủ yếu dùng `name` + `description` để kích hoạt. Field thừa Codex bỏ qua; nếu Codex báo lỗi parse frontmatter, chỉ giữ `name` + `description` và đưa cú pháp tham số xuống mục "Cách gọi" trong body.

### B.2 — Rules (giữ nguyên)

```bash
mkdir -p <project>/.codex/rules
cp claude-code/.claude/rules/*.md  <project>/.codex/rules/
```

Sửa reference trong SKILL.md nếu trỏ `@.claude/rules/...` → `.codex/rules/...` (hoặc để nguyên tương đối `../../rules/...` nếu Codex resolve được — kiểm thử).

### B.3 — Engine (giữ nguyên, npm install một lần)

Engine sống trong skill (`userguide/engine/`) — đã copy cùng B.1. Nếu bạn dùng auto-chụp ảnh:

```bash
cd <project>/.codex/skills/userguide/engine && npm install && npx playwright install chromium
```

> Không dùng auto-chụp thì bỏ qua bước này — skill để placeholder ảnh.

### B.4 — Agent review (đổi Markdown → TOML)

Agent `manual-reviewer` cần chuyển sang `.toml`:

```toml
# .codex/agents/manual-reviewer.toml
description = '<copy dòng description trong frontmatter của manual-reviewer.md>'
developer_instructions = """
<copy TOÀN BỘ nội dung body của manual-reviewer.md vào đây>
"""
```

Nội dung review (soi mục lục Diátaxis, độ phủ, tiêu đề task-based) giữ nguyên, chỉ đổi vỏ.

---

## C. Điểm cần xử lý tay

- **Path trong SKILL.md:** rà mọi chuỗi `.claude/` → `.codex/` (engine `capture.mjs`, `check-playwright.mjs`). Đây là chỗ hay sót nhất.
- **HARD STOP report-first:** skill DỪNG sau khi in mục lục, chờ user gõ `tiếp`. Đảm bảo Codex chạy skill ở main conversation (KHÔNG chạy nền / fork) để user trả lời được.
- **Template resolve:** kiểm SKILL.md trỏ đúng `_templates/userguide-section.md` + `userguide-preview.html`.

---

## D. Prompt tự động

Không cần làm tay từng bước — mở project trong Codex CLI, **mở `PROMPT-CODEX.md` và dán toàn bộ prompt trong đó vào chat**. Codex sẽ tự sao chép + chuyển đổi skill sang `.codex/` đúng chuẩn.

---

## E. Checklist sau khi port

- [ ] `.codex/skills/userguide/` có SKILL.md + engine.
- [ ] `.codex/rules/` có các rule (approval-gate, ba-conventions, naming-conventions, changelog, review-format, feature-bootstrap).
- [ ] `_templates/userguide-section.md` + `userguide-preview.html` có; path trong SKILL.md đúng.
- [ ] Agent `manual-reviewer` thành `.codex/agents/manual-reviewer.toml`.
- [ ] Path `.claude/` trong SKILL.md đã đổi `.codex/`.
- [ ] (Nếu auto-chụp) `npm install` + `playwright install chromium` xong trong engine.
- [ ] Chạy thử `/userguide <feature>` → skill DỪNG ở HARD STOP mục lục, không tự viết luôn.
