# 04 — Cách skill hoạt động

> Hiểu cơ chế bên trong giúp bạn biết skill lấy nội dung từ đâu, phân loại thế nào, và tại sao nó dừng lại hỏi. Trang này giải thích 3 trụ: nguồn nội dung, xương sống Diátaxis, và auto-chụp ảnh.

---

## Trụ 1 — Hai nguồn nội dung

`/userguide` **forward từ tài liệu đã có** — nó không sáng tạo tính năng, chỉ diễn giải cái đã đặc tả thành hướng dẫn sử dụng. Có 2 nguồn:

### Nguồn chính — đọc ngược BA docs

Khi feature đã có tài liệu trong `docs/{feature}/`, skill đọc và ánh xạ:

| Nguồn | Dùng cho phần |
|---|---|
| `prd.md` / `brd.md` | Tổng quan + Bắt đầu nhanh |
| `usecases/uc-*.md` | Hướng dẫn theo tác vụ (1 use case ≈ 1 trang how-to) |
| `srs/{feature}-spec.md` (FR/NFR/Business Rules) | Tra cứu (cài đặt/giới hạn) |
| Error Matrix (`E-{feature}-NNN`) | Xử lý sự cố |
| `ascii-wireframe/` · `html-wireframe/` · `userflow.md` | Ảnh minh họa + bảng thao tác |
| `docs/_shared/definitions.md` | Thuật ngữ |

### Nguồn thay thế — mô tả + chụp app thật

Nếu sản phẩm đã chạy nhưng **chưa có** bộ BA docs (thường gặp), bạn cung cấp mô tả luồng + để skill chụp app thật. Đây là cách ví dụ `course-registration` được làm: đi qua luồng đăng ký thật trên ai4ba.com, chụp từng bước, viết cẩm nang bám ảnh.

> Dù nguồn nào, quy tắc **không bịa** vẫn giữ: chỗ thiếu wording/số liệu cụ thể → đánh Open Question, không tự chế.

---

## Trụ 2 — Xương sống Diátaxis (6 trụ)

Diátaxis là khung tổ chức tài liệu theo **mục đích người đọc**. Skill dùng nó làm xương sống nhưng **không để lộ thuật ngữ** — tên trang là tiếng Việt thân thiện.

| Trụ Diátaxis (nội bộ) | Tên thân thiện | Đặc điểm |
|---|---|---|
| Explanation | Tổng quan / Khái niệm | Nơi DUY NHẤT được kể bối cảnh |
| Tutorial | Bắt đầu nhanh | 1 đường duy nhất, không nhồi tùy chọn |
| How-to | Hướng dẫn theo tác vụ | Task-based, tiêu đề bắt đầu bằng động từ |
| Reference | Tra cứu | Bảng khô, không kể chuyện |
| Troubleshooting | Xử lý sự cố | Triệu chứng → nguyên nhân → cách xử lý |
| FAQ + Glossary | Câu hỏi thường gặp + Thuật ngữ | Hỏi-đáp ngắn / định nghĩa |

**Không trộn loại trong 1 trang** — đây là nguyên tắc cốt lõi. Một trang Tutorial nhồi thêm bảng tra cứu sẽ làm người mới lạc; skill tách chúng ra.

---

## Trụ 3 — Auto-chụp ảnh (engine Playwright)

Nếu bạn bật auto-chụp, skill dùng engine `capture.mjs`:

1. **Nguồn ảnh** — file HTML local (wireframe/prototype) HOẶC URL app thật (đăng nhập + điều hướng).
2. **Định vị + chụp** — chờ font + freeze animation → định vị element (nhận biết iframe) → chụp.
3. **Đánh số callout** — inject SVG overlay TRƯỚC khi chụp, theo bounding-box element. Mỗi callout là 1 badge số (khớp bảng thao tác 5 cột), hoặc mũi tên/nhãn chữ khi cần nhấn mạnh.
4. **Che PII** — ảnh app thật có email/tên thật → bôi hộp che trước khi chụp.
5. **Chống lỗi-thời** — ghi hash cạnh ảnh; ảnh không đổi tự bỏ qua khi chạy lại.

Không bật auto-chụp → skill để placeholder + brief chi tiết (chụp màn nào, đánh dấu vùng nào) để bạn tự làm.

---

## Approval gate — bạn luôn kiểm soát

Skill **không tự ghi file im lặng**:

| Mức | Khi nào | Bạn làm gì |
|---|---|---|
| **HARD STOP** | Sau khi in mục lục (giai đoạn 1) | Duyệt mục lục + trả lời câu hỏi → gõ `tiếp` |
| **L1 plan** | Trước khi viết loạt trang | Xem danh sách trang → gõ `Y` |
| **L2 diff** | Khi cập nhật trang đã tồn tại | Xem diff từng trang → gõ `Y` |

---

## Render cửa vào

Cẩm nang là một trang HTML self-contained (light-only, docs-style — trắng/đen + xanh dương highlight, không dark mode, không CDN ngoài). Nội dung tách ra `data.js` để regen không đụng HTML. Các trang là section trong cùng trang (SPA); cross-link nội bộ chuyển section, không mở file rời.
