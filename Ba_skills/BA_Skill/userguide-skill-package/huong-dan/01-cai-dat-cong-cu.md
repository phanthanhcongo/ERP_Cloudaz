# 01 — Cài đặt công cụ

> `/userguide` chạy được với mức tối thiểu: chỉ cần Claude Code + workspace có tài liệu BA. Playwright là **tùy chọn** — chỉ cần khi bạn muốn skill tự chụp ảnh app thật. Trang này liệt kê từng mức.

---

## Mức 1 — Tối thiểu (bắt buộc)

| Cần | Vì sao | Kiểm tra |
|---|---|---|
| **Claude Code** | Chạy skill | `claude --version` |
| **Workspace BA** có `docs/{feature}/` | Nguồn để đọc ngược dựng cẩm nang | `ls docs/` |

Ở mức này skill viết đầy đủ chữ + **để placeholder ảnh** kèm brief chi tiết (chụp màn nào, đánh dấu vùng nào) để bạn tự bỏ ảnh vào sau. Không cần cài gì thêm.

---

## Mức 2 — Auto-chụp ảnh (tùy chọn)

Nếu muốn skill **tự chụp màn hình** (từ file HTML wireframe/prototype local, hoặc từ URL app thật đã đăng nhập) và **đánh số callout tự động**:

```bash
cd <workspace>/.claude/skills/userguide/engine
npm install                      # cài playwright (~17MB) — engine đã có sẵn package.json
npx playwright install chromium  # tải trình duyệt Chromium cho Playwright
```

Kiểm tra sẵn sàng:

```bash
node <workspace>/.claude/skills/userguide/engine/check-playwright.mjs
# {"ok":true,...}  → sẵn sàng
```

| Exit code | Nghĩa | Cách xử lý |
|---|---|---|
| 0 | Sẵn sàng | — |
| 2 | Thiếu module playwright | `npm install` trong `engine/` |
| 3 | Thiếu trình duyệt Chromium | `npx playwright install chromium` |

> Skill **luôn hỏi** trước khi cài hoặc chụp — không tự cài im lặng, không tự truy cập app của bạn.

---

## Node.js

Cả 2 mức auto-chụp cần **Node.js ≥ 18**. Kiểm tra:

```bash
node --version   # v18+ trở lên
```

Chưa có → cài từ [nodejs.org](https://nodejs.org) hoặc qua `nvm`.

---

## Lưu ý về ảnh app thật

- Auto-chụp từ **URL app thật** cần bạn cấp thông tin đăng nhập + đồng ý — skill hỏi rõ phạm vi chụp và có che thông tin cá nhân (PII) không.
- Nội dung nằm trong **iframe** (nhiều app SPA nhúng khác origin) → engine hỗ trợ trỏ đúng frame để chụp.
- Ảnh có hash chống lỗi-thời: ảnh không đổi tự bỏ qua khi chạy lại; ép chụp lại bằng biến môi trường `UG_FORCE=1`.

---

## Không cài Playwright vẫn dùng tốt

Nếu bạn ngại cấp quyền app hoặc chỉ cần cẩm nang chữ + wireframe sẵn có:
- Skill nhúng wireframe/ASCII đã có trong `docs/{feature}/ascii-wireframe/`, `html-wireframe/` làm minh họa.
- Chỗ cần ảnh thật → để placeholder + brief, bạn tự chụp và thả file đúng tên vào `images/`.

Đây là default an toàn. Xem `04-cach-hoat-dong.md`.
