# 00 — Bắt đầu nhanh (5 phút)

> Mục tiêu: cài xong skill `/userguide` và chạy thử trên một feature đã có tài liệu trong ~5 phút. Skill sinh **cẩm nang vận hành** (hướng dẫn sử dụng cho admin/CSKH/người dùng cuối) bằng cách đọc ngược các tài liệu BA bạn đã có.

---

## Bước 1 — Copy skill vào workspace BA

Từ thư mục gốc gói này:

```bash
# Thay <workspace> bằng workspace BA của bạn (nơi có CLAUDE.md + docs/)
mkdir -p <workspace>/.claude/{skills,agents,rules} <workspace>/_templates

cp -R claude-code/.claude/skills/userguide   <workspace>/.claude/skills/
cp    claude-code/.claude/agents/*.md         <workspace>/.claude/agents/
cp    claude-code/.claude/rules/*.md          <workspace>/.claude/rules/
cp    claude-code/_templates/*                <workspace>/_templates/
```

> Rule trùng tên với bộ BA-KIT sẵn có trong workspace → cứ giữ bản của workspace, không đè.

---

## Bước 2 — (Tùy chọn) Cài Playwright nếu muốn auto-chụp ảnh

Cẩm nang chạy được **không cần** Playwright — khi đó skill để placeholder ảnh cho bạn tự chụp. Chỉ cài nếu muốn skill **tự chụp màn hình app thật** và đánh số callout:

```bash
cd <workspace>/.claude/skills/userguide/engine
npm install
npx playwright install chromium
```

Chi tiết ở `01-cai-dat-cong-cu.md`.

---

## Bước 3 — Mở Claude Code tại workspace và chạy

```bash
cd <workspace>
claude
```

Trong chat gõ (feature phải đã có tài liệu trong `docs/{feature}/`):

```
/userguide payment
```

hoặc chạy toàn sản phẩm:

```
/userguide
```

Skill sẽ chạy **2 giai đoạn có chốt người ở giữa**:

1. **Giai đoạn 1 — Dựng mục lục.** Quét tài liệu → đề xuất mục lục cẩm nang → `@manual-reviewer` soi → **in mục lục ra chat rồi DỪNG (HARD STOP)**, hỏi bạn vài câu (audience, ngôn ngữ, độ chi tiết).
2. **Giai đoạn 2 — Viết chi tiết.** Chỉ chạy sau khi bạn trả lời + gõ `tiếp`. Viết từng trang → render file cẩm nang `.html` để double-click mở.

> Điểm quan trọng: **skill dừng lại chờ bạn duyệt mục lục** trước khi đổ công viết. Đây là chốt người (human-in-the-loop) — xem `02-luong-2-giai-doan.md`.

---

## Bước 4 — Xem kết quả mẫu trước khi tự làm

Mở `example/course-registration/` — một cẩm nang hoàn chỉnh "Đăng ký khóa học AI4BA" với ảnh thật + callout đánh số. Double-click `course-registration/../course-registration-userguide.html` để xem trông thế nào. Đọc `example/README.md` để hiểu cấu trúc.

---

## Không có BA docs sẵn thì sao?

`/userguide` vốn **đọc ngược tài liệu BA** (SRS, use case, wireframe). Nếu sản phẩm đã chạy nhưng chưa có bộ tài liệu đó, bạn vẫn dùng được bằng cách **chụp app thật + mô tả luồng** (chính là cách ví dụ `course-registration` được làm). Xem `04-cach-hoat-dong.md` mục "Hai nguồn nội dung".

## Gặp lỗi?

→ `05-cau-hoi-thuong-gap.md` (FAQ + xử lý sự cố).
