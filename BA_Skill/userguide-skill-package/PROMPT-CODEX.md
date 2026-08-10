# Prompt cài skill /userguide vào Codex CLI

> **Cách dùng:** mở thư mục gói này trong project của bạn (hoặc copy gói vào project) → mở Codex CLI tại project → copy NGUYÊN khối prompt dưới đây → dán vào chat → gửi. Codex sẽ tự copy + chuyển đổi skill. Muốn hiểu cơ chế, xem `INSTALL-CODEX.md`.

---

````text
Đây là skill /userguide — sinh cẩm nang vận hành (hướng dẫn sử dụng cho admin/CSKH/người dùng
cuối) từ tài liệu BA, được viết ban đầu cho Claude Code. Bạn là Codex CLI. Hãy SAO CHÉP skill
này có sẵn trong thư mục gói "userguide-skill-package/" sang .codex/ của project này và CHUYỂN
ĐỔI cấu trúc, path và cơ chế cho tương thích với Codex.

NGUỒN (đọc trước khi làm):
- Skill:      userguide-skill-package/claude-code/.claude/skills/userguide/  (SKILL.md + engine/)
- Rules:      userguide-skill-package/claude-code/.claude/rules/*.md
- Agent:      userguide-skill-package/claude-code/.claude/agents/manual-reviewer.md
- Templates:  userguide-skill-package/claude-code/_templates/  (userguide-section.md + userguide-preview.html)
- Ví dụ mẫu:  userguide-skill-package/example/course-registration/  (cẩm nang output đúng trông thế nào)

CÁC BƯỚC:

1. Copy skill + templates GIỮ NGUYÊN:
   cp -R userguide-skill-package/claude-code/.claude/skills/userguide  .codex/skills/
   cp    userguide-skill-package/claude-code/_templates/*              _templates/
   (tạo .codex/skills/ và _templates/ nếu chưa có; SKILL.md tham chiếu
    _templates/userguide-section.md + userguide-preview.html)

2. Copy rules GIỮ NGUYÊN:
   cp userguide-skill-package/claude-code/.claude/rules/*.md  .codex/rules/

3. SỬA PATH trong SKILL.md: đổi mọi chuỗi ".claude/" thành ".codex/"
   (đặc biệt engine: node .codex/skills/userguide/engine/capture.mjs và check-playwright.mjs).
   Nếu Codex báo lỗi parse frontmatter SKILL.md, chỉ giữ name + description và đưa cú pháp
   tham số (argument-hint) xuống mục "Cách gọi" trong body.

4. CHUYỂN AGENT REVIEW sang TOML:
   - Tạo .codex/agents/manual-reviewer.toml với:
       description = '<dòng description trong frontmatter của manual-reviewer.md>'
       developer_instructions = """<toàn bộ body của manual-reviewer.md>"""

5. (Tùy chọn) CÀI Playwright nếu muốn auto-chụp ảnh:
   cd .codex/skills/userguide/engine && npm install && npx playwright install chromium
   (không cài vẫn dùng được — skill để placeholder ảnh cho user tự chụp)

RÀNG BUỘC:
- GIỮ NGUYÊN luồng 2 giai đoạn: dựng mục lục → IN RA CHAT → HARD STOP chờ user gõ `tiếp` →
  mới viết chi tiết. TUYỆT ĐỐI không để skill tự viết luôn không chờ duyệt.
- Chạy skill ở main conversation (KHÔNG chạy nền/fork) — vì skill cần user trả lời câu hỏi
  audience/ngôn ngữ + gõ `tiếp` trong chat. Fork = mất kênh trả lời = HARD STOP bị bỏ qua.
- GIỮ approval gate: xem trước (L1) rồi mới ghi; cập nhật thì xem diff (L2).
- GIỮ xương sống Diátaxis nhưng KHÔNG lộ chữ "Diátaxis" trong cẩm nang output.
- KHÔNG bịa: nguồn thiếu wording/số liệu → Open Question, không tự chế.
- Vietnamese-first (skill tự hỏi ngôn ngữ, mặc định gợi theo nguồn).

BÁO CÁO sau khi xong:
1. Cây thư mục .codex/ đã tạo.
2. Danh sách path đã sửa (.claude → .codex).
3. Agent manual-reviewer đã chuyển TOML.
4. Playwright đã cài chưa (nếu user muốn auto-chụp).
Rồi chạy thử: /userguide <feature bất kỳ đã có tài liệu> và xác nhận skill DỪNG ở HARD STOP
mục lục trước khi viết, không tự viết im lặng.
````
