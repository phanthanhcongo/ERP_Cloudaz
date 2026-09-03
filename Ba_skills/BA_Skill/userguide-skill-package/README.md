# Skill viết Cẩm nang vận hành cho BA — Userguide Skill Package

> Skill `/userguide` cho **IT Business Analyst**: biến tài liệu BA đã có (hoặc app đang chạy) thành **cẩm nang sử dụng / hướng dẫn vận hành** cho admin, CSKH, người dùng cuối. Bạn không phải nhớ cấu trúc tài liệu — skill đọc ngược nguồn, dựng mục lục theo chuẩn Diátaxis, chờ bạn duyệt, rồi viết từng trang + chụp ảnh minh họa (có đánh số callout) và render ra một file HTML double-click là mở.
>
> Gói này viết cho **Claude Code**, kèm hướng dẫn **port sang Codex CLI** và **Google Antigravity IDE**.

Bộ này là một phần của bộ công cụ BA-KIT dạy trong khóa **AI4BA** — [ai4ba.com](https://ai4ba.com). Xem mục [Về AI4BA](#về-ai4ba) ở cuối.

---

## `/userguide` làm gì

| | |
|---|---|
| **Nguồn** | BA docs đã có (`docs/{feature}/`: PRD/SRS/use case/wireframe/Error Matrix) — hoặc mô tả luồng + chụp app thật |
| **Output** | Cẩm nang HTML self-contained (light-only), điều hướng theo nhóm, ảnh minh họa có callout đánh số |
| **Khung tổ chức** | Diátaxis 6 trụ: Tổng quan · Bắt đầu nhanh · Hướng dẫn theo tác vụ · Tra cứu · Xử lý sự cố · FAQ/Thuật ngữ |
| **Người đọc cuối** | Người vận hành sản phẩm (admin / CSKH / nội bộ / người dùng cuối) |
| **Đặc trưng** | 2 giai đoạn — dựng mục lục → **DỪNG chờ bạn duyệt** → viết chi tiết |

**Khác các skill gần kề:**

| Skill | Hướng | Người đọc cuối |
|---|---|---|
| `/reverse-doc` | Reverse tài liệu cũ → nghiệp vụ | BA / team |
| `/export` | Đóng gói doc CÓ SẴN → PDF/DOCX/HTML | Stakeholder |
| **`/userguide`** | Forward → **hướng dẫn sử dụng** | **Người vận hành / người dùng cuối** |

---

## Gói này có gì

```
userguide-skill-package/
├── README.md                       ← bạn đang đọc
├── LICENSE                         ← MIT
├── huong-dan/                      ← HƯỚNG DẪN SỬ DỤNG CHI TIẾT (đọc kỹ phần này)
│   ├── 00-bat-dau-nhanh.md         ← cài + chạy thử trong 5 phút
│   ├── 01-cai-dat-cong-cu.md       ← mức tối thiểu + (tùy chọn) Playwright cho auto-chụp
│   ├── 02-luong-2-giai-doan.md     ← mục lục → HARD STOP → viết chi tiết
│   ├── 03-huong-dan-chi-tiet.md    ← cách gọi, tình huống, cách trả lời từng bước
│   ├── 04-cach-hoat-dong.md        ← nguồn nội dung · Diátaxis · auto-chụp ảnh
│   └── 05-cau-hoi-thuong-gap.md    ← FAQ + xử lý sự cố
├── explain-skills/                 ← GIẢI THÍCH NGHIỆP VỤ (cho người không rành kỹ thuật)
│   └── userguide.md
├── example/                        ← VÍ DỤ ĐẦY ĐỦ: cẩm nang "Đăng ký khóa học AI4BA"
│   ├── README.md                   ← bản đồ file + nguyên tắc minh họa
│   └── course-registration/        ← cẩm nang thật + ảnh chụp thật từ ai4ba.com
├── claude-code/                    ← BỘ NGUYÊN BẢN cho Claude Code (copy vào workspace)
│   ├── .claude/
│   │   ├── skills/userguide/       ← SKILL.md + engine/ (capture + check-playwright)
│   │   ├── agents/                 ← manual-reviewer (soi mục lục)
│   │   └── rules/                  ← rule dùng chung (approval-gate, ba-conventions...)
│   └── _templates/                 ← userguide-section.md + userguide-preview.html
├── INSTALL-CODEX.md                ← port sang Codex CLI (.codex/)
├── INSTALL-ANTIGRAVITY.md          ← port sang Google Antigravity IDE (.agents/)
├── PROMPT-CODEX.md                 ← prompt copy-paste để Codex tự cài
└── PROMPT-ANTIGRAVITY.md           ← prompt copy-paste để Antigravity tự cài
```

---

## Bắt đầu ngay (Claude Code)

1. **Copy skill vào workspace** BA của bạn:
   ```bash
   mkdir -p <workspace>/.claude/{skills,agents,rules} <workspace>/_templates
   cp -R claude-code/.claude/skills/userguide  <workspace>/.claude/skills/
   cp    claude-code/.claude/agents/*.md        <workspace>/.claude/agents/
   cp    claude-code/.claude/rules/*.md          <workspace>/.claude/rules/
   cp    claude-code/_templates/*                <workspace>/_templates/
   ```
   > Workspace đã có sẵn bộ BA-KIT → rule có thể trùng, cứ giữ bản đang dùng.

2. **(Tùy chọn) Cài Playwright** nếu muốn skill tự chụp ảnh app thật:
   ```bash
   cd <workspace>/.claude/skills/userguide/engine && npm install && npx playwright install chromium
   ```
   > Không cài vẫn dùng tốt — skill để placeholder ảnh + brief để bạn tự chụp.

3. **Chạy thử** trong Claude Code mở tại workspace:
   ```
   /userguide payment          # 1 feature đã có tài liệu
   /userguide                  # toàn sản phẩm
   ```

👉 Chi tiết từng bước ở **`huong-dan/00-bat-dau-nhanh.md`**.

---

## Điểm mạnh của skill này

- **Bạn kiểm soát cấu trúc trước khi tốn công viết.** Skill dựng mục lục → DỪNG (HARD STOP) → chờ bạn duyệt → mới viết. Không viết luôn rồi bắt sửa lại.
- **Có agent review mục lục.** `@manual-reviewer` soi độ phủ + phân loại + tiêu đề task-based trước khi đưa bạn duyệt.
- **Xương sống Diátaxis, ngôn ngữ người dùng.** 6 trụ tổ chức nội dung nhưng tên trang thân thiện, không lộ thuật ngữ.
- **Ảnh thật có callout đánh số.** Engine Playwright chụp app/wireframe, đánh số (1)(2)(3) khớp bảng thao tác. Không có quyền app → placeholder + brief để bạn tự chụp.
- **Không bịa.** Nguồn thiếu wording/số liệu cụ thể → Open Question, hỏi bạn bổ sung.
- **Output gọn.** 1 file `.html` double-click mở + 1 folder bundle chứa index/data/pages/images.

---

## Port sang công cụ khác

- **Codex CLI** → `INSTALL-CODEX.md` (chi tiết) + `PROMPT-CODEX.md` (prompt copy-paste).
- **Google Antigravity IDE** → `INSTALL-ANTIGRAVITY.md` (chi tiết) + `PROMPT-ANTIGRAVITY.md` (prompt copy-paste).

---

## Về AI4BA

Skill này là công cụ thực hành trong khóa **AI4BA — AI cho Business Analyst** tại **[ai4ba.com](https://ai4ba.com)**.

AI4BA dạy BA/PO dùng AI (Claude Code, Codex, Antigravity…) để làm nhanh và chuẩn hơn toàn bộ vòng đời tài liệu nghiệp vụ: từ brainstorm ý tưởng, viết URD/BRD/PRD/SRS, vẽ sơ đồ, tới user story/acceptance criteria, đồng bộ Jira/Confluence, và — như bộ này — **biến đặc tả thành cẩm nang người dùng thật sự dùng được**.

### Triết lý: Human-in-the-loop — BA vẫn là cốt lõi

AI4BA **không** thay BA bằng AI. **BA là người điều khiển, AI là công cụ tăng tốc:**

- **BA cung cấp context — AI mới hiểu đúng nghiệp vụ.** Chất lượng cẩm nang phụ thuộc vào tài liệu nguồn + câu trả lời của BA (audience, luồng cần phủ, giọng văn). AI không bịa số liệu/lỗi khi thiếu nguồn.
- **BA duyệt trước khi ghi.** Skill dựng mục lục rồi DỪNG chờ bạn duyệt (HARD STOP); viết xong xem trước rồi mới ghi (L1); cập nhật thì xem diff (L2). Mọi thay đổi qua tay người.
- **BA review output — không giao khoán cho AI.** Cẩm nang AI viết là bản nháp chất lượng cao để BA thẩm định; đúng-sai nghiệp vụ là quyết định của BA. Agent `@manual-reviewer` soi cấu trúc, nhưng người chốt vẫn là BA.
- **AI lo phần máy móc, BA lo phần tư duy.** AI đọc ngược tài liệu, phân loại Diátaxis, chụp ảnh, dàn trang — để BA tập trung vào hiểu người dùng, chọn luồng đáng viết, và chịu trách nhiệm với stakeholder.

> Nói ngắn: **AI làm nhanh hơn, BA làm chuẩn hơn.**

Muốn học đầy đủ quy trình BA-with-AI và các bộ skill khác → **[ai4ba.com](https://ai4ba.com)**.

---

## License

MIT — xem `LICENSE`. Dùng tự do, ghi nguồn AI4BA nếu chia sẻ lại.
