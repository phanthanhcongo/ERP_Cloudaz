# 03 — Hướng dẫn chi tiết

> Cách gọi skill, các tình huống thường gặp, và cách trả lời ở từng bước. Đọc trang này khi bạn đã cài xong và muốn dùng thành thạo.

---

## Cách gọi

| Lệnh | Làm gì |
|---|---|
| `/userguide` | Toàn sản phẩm — quét mọi feature trong `docs/` |
| `/userguide payment` | Chỉ 1 feature |
| `/userguide payment auth` | Tập con nhiều feature (gõ tên, cách nhau bởi dấu cách) |
| `/userguide tiếp` | (sau HARD STOP) → vào giai đoạn 2 viết chi tiết |

> Không dùng flag `--feature`. Gõ thẳng tên feature. Token không khớp folder `docs/{token}/` → skill cảnh báo + liệt kê feature có sẵn, không tự đoán.

Đổi hành vi mặc định bằng lời tự nhiên:
- Viết tiếng Anh → nói "viết bằng tiếng Anh".
- Chạy lại khi đã có cẩm nang → gọi lại `/userguide` như cũ, skill tự nhận file đã tồn tại và vào chế độ cập nhật (xem diff trước khi ghi).

---

## Giai đoạn 1 — dựng mục lục

1. **Quét nguồn.** Skill đọc `docs/{feature}/**`: `prd/brd` (Tổng quan), `usecases/` (How-to), `srs/*-spec.md` FR/NFR (Tra cứu), Error Matrix (Xử lý sự cố), `ascii-wireframe/` (minh họa), `definitions.md` (Thuật ngữ).
2. **Hỏi phạm vi luồng.** Skill tự dò danh sách luồng từ `srs/{feature}-userflow.md` rồi hỏi bạn: "Cẩm nang nên phủ những luồng này — đủ chưa, thêm/bớt?". Bạn chốt danh sách.
3. **Dựng mục lục + review.** Cluster thành 6 nhóm → `@manual-reviewer` soi → chỉnh → in ra chat.
4. **HARD STOP.** Bạn duyệt + trả lời 4 câu hỏi → gõ `tiếp`.

---

## Giai đoạn 2 — viết chi tiết

1. **Viết từng trang** từ nguồn theo khung Diátaxis (How-to = các bước; Reference = bảng; Troubleshooting = mã lỗi; FAQ; Glossary).
2. **Hỏi cách lấy ảnh** (3 lựa chọn):
   - **(A) Auto-chụp** — skill lái Playwright chụp app/HTML thật, đánh số callout. Cần nguồn ảnh + (nếu app thật) bạn cấp URL/đăng nhập.
   - **(B) Bạn tự chụp** — skill để placeholder + brief chi tiết, bạn tự bỏ ảnh vào. Default an toàn khi ngại cấp quyền.
   - **(C) Dùng ảnh sẵn có** — nhúng wireframe/ASCII đã có.
3. **L1 plan** — skill xem trước danh sách trang sẽ tạo, bạn gõ `Y`.
4. **Render** file `.html` cửa vào + bundle (index/data/pages/images).
5. **Gom Open Questions** — chỗ nguồn thiếu wording/số liệu cụ thể được đánh dấu, skill hỏi resolve ngay / để lại.

---

## Nội dung ra ở đâu

```
docs/userguide/
├── {feature}-userguide.html      ← CỬA VÀO: double-click mở browser (chỉ file này lộ ra)
└── {feature}-userguide/          ← folder bundle (mọi file phụ)
    ├── index.md                  ← master metadata + bảng Sections
    ├── data.js                   ← nội dung nhúng cho file .html
    ├── pages/*.md                ← các trang (zero-frontmatter)
    └── images/*.png              ← ảnh (chụp thật hoặc placeholder)
```

Toàn sản phẩm thì tên là `userguide.html` + `userguide/`. Xem `example/course-registration/` để đối chiếu.

---

## Tình huống thường gặp

**Feature chưa có BA docs** → skill vẫn chạy được bằng cách bạn mô tả luồng + (tùy chọn) chụp app thật. Chỗ thiếu nguồn cụ thể → đánh Open Question, không bịa số liệu/lỗi.

**Muốn tách cẩm nang feature riêng khỏi cẩm nang gốc** → khi `docs/userguide/` đã có cẩm nang, skill hỏi "cập nhật vào cẩm nang gốc hay tách riêng?". Bạn quyết.

**Chạy lại sau khi tài liệu đổi** → gọi lại `/userguide {feature}`, skill vào chế độ cập nhật, xem diff từng trang trước khi ghi.

---

## Nguyên tắc chất lượng skill tự áp

- **Không trộn loại trong 1 trang** (Tutorial 1 đường / Reference bảng khô / How-to task-based).
- **Tiêu đề How-to bắt đầu bằng động từ** ("Khóa tài khoản", không "Màn hình quản lý").
- **Every Page Is Page One** — mỗi trang tự đứng vững + cross-link.
- **Không bịa** — nguồn thiếu → Open Question.
- **Không lộ chữ "Diátaxis"** trong cẩm nang — tên trang thân thiện tiếng người dùng.

Chi tiết cơ chế: `04-cach-hoat-dong.md`. Giải thích nghiệp vụ đầy đủ: `explain-skills/userguide.md`.
