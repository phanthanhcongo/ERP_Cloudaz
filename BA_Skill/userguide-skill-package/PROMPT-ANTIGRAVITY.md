# Prompt cài skill /userguide vào Antigravity IDE

> **Cách dùng:** mở thư mục gói này (`userguide-skill-package/`) trong Google Antigravity IDE → mở chat agent → copy NGUYÊN khối prompt dưới đây → dán → gửi. Agent tự đọc file trong gói, sao chép và chuyển skill vào đúng chỗ. Muốn hiểu cơ chế, xem `INSTALL-ANTIGRAVITY.md`.

---

````text
Đây là skill /userguide — sinh cẩm nang vận hành (hướng dẫn sử dụng cho admin/CSKH/người dùng
cuối) từ tài liệu BA, viết ban đầu cho Claude Code. Bạn là agent của Google Antigravity IDE.
Nhiệm vụ: SAO CHÉP skill này sang Antigravity và CHUYỂN ĐỔI đúng chuẩn Antigravity, không cài
trực tiếp cấu trúc Claude Code.

Bám tài liệu Antigravity mới nhất khoảng 06/2026 khi thực hiện: antigravity.google/docs/skills,
antigravity.google/docs/rules-workflows và codelab Authoring Antigravity Skills. Nếu có thể đọc
web, hãy đối chiếu trực tiếp; nếu không, làm theo INSTALL-ANTIGRAVITY.md trong gói này vì file
đã cập nhật theo tài liệu khoảng 06/2026. Path và format có thể khác giữa các bản Antigravity,
nên không được đoán theo bản cũ.

══════════ BƯỚC 0 — CHỌN PHẠM VI VÀ XÁC MINH CẤU HÌNH ══════════
TRƯỚC KHI sao chép, hỏi tôi và chờ câu trả lời: cài cho workspace hiện tại hay cài global cho
mọi project. Không được tự chọn phạm vi.

- Workspace: xác minh thư mục cấu hình thực tế là .agents/ hay .agent/.
- Global: dùng phạm vi global dưới ~/.gemini/ theo đúng cấu trúc phiên bản Antigravity hiện tại.
- Kiểm tra tài liệu, cấu trúc workspace hiện có và màn hình/câu lệnh tạo skill của IDE.
- Nếu chưa chắc, tạo một skill thử nghiệm rỗng bằng UI/lệnh chính thức, reload IDE, xác nhận
  Antigravity đã nhận diện và ghi lại path thực tế. Xóa skill thử sau khi xác minh.
- Dùng đúng path đã xác minh thay cho mọi path mẫu bên dưới, rồi báo tôi phạm vi + thư mục đã chọn.

Gọi thư mục cấu hình đã xác minh là THU_MUC_CAU_HINH trong các bước tiếp theo.

══════════ BƯỚC 1 — ĐỌC NGUỒN TRONG GÓI NÀY ══════════
Đọc đầy đủ trước khi tạo file đích:
- Skill tại claude-code/.claude/skills/userguide/  (SKILL.md + engine/capture.mjs + check-playwright.mjs)
- Rules tại claude-code/.claude/rules/*.md
- Agent review tại claude-code/.claude/agents/manual-reviewer.md
- Templates tại claude-code/_templates/  (userguide-section.md + userguide-preview.html)
- Ví dụ mẫu tại example/course-registration/ để hiểu output đúng phải trông như thế nào
- Đọc cả engine, template và References mà SKILL.md đang trỏ tới trước khi chuyển đổi

══════════ BƯỚC 2 — TẠO SKILL CHO ANTIGRAVITY ══════════
Sao chép sang THU_MUC_CAU_HINH/skills/userguide/SKILL.md theo cấu trúc hiện hành của Antigravity.
- Giữ TOÀN BỘ nội dung nghiệp vụ: Goal, Constraints, các Pha (A→G), Gotchas và References.
- Copy kèm engine (capture.mjs, check-playwright.mjs, package.json) vào thư mục skill; sửa mọi
  path trong SKILL.md khớp vị trí mới.
- Frontmatter chỉ giữ name + description; bỏ allowed-tools, user-invocable, disable-model-invocation,
  argument-hint. Nếu tài liệu Antigravity hiện hành bắt buộc thêm field khác, chỉ thêm field bắt
  buộc và ghi rõ trong báo cáo.
- Chuyển cú pháp gọi cũ (/userguide <feature>) vào mục Cách gọi.

Description là trigger phrase quyết định skill có được nạp đúng không. Viết cụ thể:
- Description xấu: Hỗ trợ tài liệu.
- Description tốt: Sinh cẩm nang vận hành / hướng dẫn sử dụng cho admin/CSKH từ tài liệu BA đã có,
  dựng mục lục theo Diátaxis rồi DỪNG chờ duyệt, sau đó viết từng trang + chụp ảnh minh họa và
  render file HTML.

══════════ BƯỚC 3 — RULE VÀ TEMPLATE ══════════
- Copy rules vào THU_MUC_CAU_HINH/rules/ nếu phiên bản Antigravity tự nạp rules tại đó; nếu cơ chế
  khác theo tài liệu hiện hành, dùng cơ chế đó và ghi rõ.
- Copy _templates/userguide-section.md + userguide-preview.html; sửa path trong SKILL.md.
- Sửa hoặc bỏ các mục References trong SKILL.md nếu còn trỏ tới path Claude Code cũ.
- Không để bất kỳ script/engine/reference nào còn trỏ tới .claude/ ngoài thư mục nguồn.

══════════ BƯỚC 4 — CHUYỂN ĐỔI AGENT REVIEW ══════════
Claude Code gọi @manual-reviewer qua Task tool; Antigravity có thể không có cơ chế y hệt.
- Nếu không hỗ trợ subagent đáng tin cậy, nhúng nội dung manual-reviewer.md thành mục "Tiêu chí
  tự review mục lục" trong SKILL.md.
- Self-review phải diễn ra SAU khi dựng mục lục nhưng TRƯỚC khi in ra chat cho user duyệt: kiểm
  độ phủ 6 trụ Diátaxis, trang trộn loại, tiêu đề How-to không bắt đầu bằng động từ, trang không
  tự đứng vững, ngôn ngữ developer thay vì người vận hành.
- Nếu dùng subagent, truyền cho nó mục lục dự kiến + audience + nguồn, xử lý findings trước khi
  đưa user duyệt; không chỉ nói rằng đã review.

══════════ BƯỚC 5 — WORKFLOW / LỆNH /userguide TÙY CHỌN ══════════
Nếu Antigravity hỗ trợ workflows/slash command, tạo workflow mỏng cho skill theo path + format
chính thức của IDE (chỉ cần description rõ + trỏ về skill để gọi /userguide). Nếu không hỗ trợ,
bỏ qua và nêu rõ cách kích hoạt bằng câu tự nhiên. Không tạo file workflow theo cấu trúc đoán mò.

══════════ BƯỚC 6 — KIỂM TRA SAU CÀI ══════════
Reload/khởi động lại Antigravity theo tài liệu hiện hành, rồi kiểm tra skill.
- Mở Skills panel / command palette / log nạp skill; xác nhận skill được nhận diện theo name +
  description, không chỉ kiểm file đã tồn tại.
- Chạy thử /userguide cho một feature đã có tài liệu (hoặc mô tả 1 luồng).
- Xác nhận skill DỪNG ở HARD STOP mục lục (in mục lục ra chat rồi chờ user gõ `tiếp`), KHÔNG tự
  viết luôn.

══════════ RÀNG BUỘC KHÔNG ĐỔI ══════════
- GIỮ luồng 2 giai đoạn + HARD STOP: dựng mục lục → in ra chat → chờ duyệt → mới viết chi tiết.
- Chạy ở luồng có kênh chat (không chạy nền/fork) để user trả lời câu hỏi + gõ `tiếp`.
- GIỮ approval gate: xem trước (L1) rồi mới ghi; cập nhật thì xem diff (L2).
- GIỮ xương sống Diátaxis nhưng KHÔNG lộ chữ "Diátaxis" trong cẩm nang output; tên trang thân
  thiện tiếng người dùng.
- KHÔNG bịa: nguồn thiếu wording/số liệu/lỗi → Open Question.
- Engine Playwright (auto-chụp ảnh) cần cài ở máy nếu dùng; không cài thì để placeholder ảnh.
- Vietnamese-first (skill tự hỏi ngôn ngữ, mặc định gợi theo nguồn).

══════════ BÁO CÁO ══════════
Sau khi xong, in ra:
1. Cây thư mục đã tạo, dùng path thực tế đã xác minh.
2. Skill đã được Antigravity nhận diện chưa (theo name + description).
3. Cách kích hoạt: câu tự nhiên và /userguide nếu có workflow.
4. Những gì đã đổi so với Claude Code: frontmatter, agent review, path engine/template, workflow.
5. Kết quả chạy thử, xác nhận đã DỪNG ở HARD STOP mục lục trước khi viết.
````
