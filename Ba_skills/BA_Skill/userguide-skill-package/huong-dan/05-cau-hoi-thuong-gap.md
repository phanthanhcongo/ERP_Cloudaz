# 05 — Câu hỏi thường gặp & xử lý sự cố

> Giải đáp nhanh khi dùng `/userguide`.

---

## Về cách dùng

**`/userguide` khác `/export` và `/reverse-doc` thế nào?**

| Skill | Hướng | Người đọc cuối |
|---|---|---|
| `/reverse-doc` | Reverse tài liệu cũ → nghiệp vụ | BA / team |
| `/export` | Đóng gói doc CÓ SẴN → PDF/DOCX/HTML | Stakeholder |
| **`/userguide`** | Forward → **hướng dẫn sử dụng** | **Người vận hành / người dùng cuối** |

`/userguide` dạy **cách dùng phần mềm đã build**, không phải đặc tả kỹ thuật.

**Skill có tự viết luôn không?**
Không. Nó dựng mục lục → DỪNG (HARD STOP) chờ bạn duyệt → mới viết. Xem `02-luong-2-giai-doan.md`.

**Tôi lỡ đóng session giữa chừng, mất việc không?**
Không. Sau khi bạn gõ `tiếp`, skill ghi ngay `index.md` (mục lục + trạng thái từng trang). Gọi lại `/userguide {feature}` → skill đọc file này, biết đã viết tới đâu, không hỏi lại từ đầu.

**Viết bằng tiếng Anh / ngôn ngữ khác được không?**
Được. Nói "viết bằng tiếng Anh" trong câu lệnh, hoặc chọn "Other" ở câu hỏi ngôn ngữ (giai đoạn 1). Skill viết TOÀN BỘ cẩm nang bằng ngôn ngữ đã chốt.

---

## Về ảnh

**Không cài Playwright có dùng được không?**
Có. Skill viết đầy đủ chữ + để placeholder ảnh kèm brief chi tiết. Bạn tự chụp và thả file đúng tên vào `images/`.

**Auto-chụp báo thiếu Chromium?**
`check-playwright.mjs` exit 3 = thiếu trình duyệt. Chạy `npx playwright install chromium`. Exit 2 = thiếu module → `npm install` trong `engine/`.

**Ảnh app thật lộ email/tên thật?**
Skill hỏi che PII trước khi chụp — bạn liệt kê vùng cần che, engine bôi hộp trước khi screenshot.

**Nội dung app nằm trong iframe, chụp ra trang trống?**
Engine hỗ trợ trỏ đúng frame (khớp url-substring). Nếu selector không thấy element, kiểm tra nội dung có trong iframe khác origin không.

**Ảnh cũ không cập nhật khi chạy lại?**
Engine bỏ qua ảnh không đổi (theo hash). Ép chụp lại: đặt `UG_FORCE=1` trước lệnh.

---

## Về nội dung

**Skill có bịa số liệu/lỗi khi nguồn thiếu không?**
Không. Chỗ thiếu wording/giới hạn/mã lỗi cụ thể → skill để `<!-- TBD -->` + Open Question, hỏi bạn bổ sung. Không tự chế.

**Cẩm nang mâu thuẫn với spec thì sao?**
`/userguide` là forward — phản ánh đặc tả, không sửa nghiệp vụ. Phát hiện khác biệt → skill ghi Open Question + gợi `/cr` hoặc `/gap`, không tự đổi spec.

**Tại sao không thấy chữ "Diátaxis" trong cẩm nang?**
Cố ý. Diátaxis là khung nội bộ để phân loại; người dùng cuối chỉ thấy tên trang thân thiện (Tổng quan / Bắt đầu nhanh / Xử lý sự cố...).

---

## Về file output

**File nào để mở?**
Chỉ file `.html` ở `docs/userguide/` (top-level). Double-click mở browser. Mọi file phụ nằm trong folder bundle cùng tên.

**Cross-link giữa trang không nhảy?**
Các trang là section trong 1 trang SPA. Link `.md` nội bộ được map sang section qua tên file — viết đúng tên file trong `pages/`. Xem `example/course-registration/` để đối chiếu.

**Mở file .html thấy "Không load được file data"?**
`<script src>` trong `.html` phải trỏ đúng `data.js` trong folder bundle. Skill tự sửa; nếu tự chỉnh tay thì kiểm lại đường dẫn.
