---
name: ai-screen-spec
description: >
  Tạo tài liệu đặc tả chi tiết cho MỘT màn hình cụ thể trong hệ thống ERP.
  Use when BA/PM cần mô tả giao diện, luồng thao tác, tích hợp API ngoài,
  quy tắc nghiệp vụ, phân quyền và tiêu chí nghiệm thu cho từng màn.
  Triggers: "đặc tả màn hình", "screen spec", "spec màn", "mô tả chi tiết màn",
  "viết spec cho màn", "tạo spec màn hình".
  Input: tên màn, BRD/tài liệu liên quan, ảnh thiết kế, API docs nếu có tích hợp.
---

# Đặc tả chi tiết màn hình (Screen Spec)

## Mục đích

Thu thập thông tin, hỏi làm rõ và tạo file Markdown đặc tả chi tiết **một màn hình**,
phục vụ BA/PM đọc, review và chốt yêu cầu.

Đặc tả bao gồm: luồng thao tác, giao diện chi tiết từng trường/cột/nút, cách tính toán
hiển thị, quy tắc nghiệp vụ, phân quyền, xử lý lỗi, tích hợp hệ thống ngoài,
dữ liệu cần ghi nhận và tiêu chí nghiệm thu.

---

## Khi nào dùng / Khi nào KHÔNG dùng

| Tình huống | Dùng skill nào |
|-----------|---------------|
| Đặc tả chi tiết **1 màn** hình (giao diện + nghiệp vụ + tích hợp) | → `ai-screen-spec` ✅ |
| Tổng quan toàn dự án, liệt kê yêu cầu nghiệp vụ | → `ba-brd-md` |
| Mô tả nghiệp vụ thuần, không có giao diện | → `template-all-in-one` (business-only) |
| Chưa có BRD, chưa rõ scope | → Dùng `ba-brd-md` trước, rồi `ai-screen-spec` cho từng màn |

---

## Đầu vào

Đọc hết input trước khi hỏi. Chỉ hỏi bổ sung phần thiếu, chưa rõ hoặc mâu thuẫn.

| Loại input | Cách xử lý | Ưu tiên |
|------------|-----------|---------|
| BRD đã có | Trích actor, scope, module liên quan | Đọc trước, không hỏi lại |
| Ảnh Figma / screenshot | Xác định layout, danh sách block, trường, nút | Dùng làm anchor cho đặc tả giao diện |
| API docs hệ thống ngoài | Trích endpoint, method, request/response, error code | Đọc trước, đặc tả theo nguồn |
| Text mô tả miệng | Dùng trực tiếp, hỏi bổ sung | Hỏi nhóm nhỏ |
| Không có input nào | Hỏi tối thiểu: tên màn, mục tiêu, actor | Interview đầy đủ |

---

## Step 1 — Thu thập & đọc input

1. Xác định loại input user cung cấp (text / file / BRD / ảnh / API doc).
2. Đọc hết tài liệu đã cho.
3. Liệt kê những gì đã biết và những gì còn thiếu.
4. Không yêu cầu user chuẩn bị đủ mọi tài liệu ngay từ đầu.

---

## Step 2 — Hỏi làm rõ (Interview)

Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ.
**Chỉ hỏi phần chưa biết từ input.**

### Nhóm 1: Mục tiêu & Luồng (hỏi đầu tiên)

- Màn này giải quyết vấn đề gì? Ai là người dùng chính?
- Luồng chính từ khi mở màn đến khi hoàn tất thao tác là gì?
- Có điều kiện nào để vào được màn này không?

### Nhóm 2: Giao diện chi tiết (hỏi sau khi biết luồng)

- Màn có bao nhiêu khu vực chính? (header, bộ lọc, bảng, form, footer?)
- Các cột/trường nào hiển thị? Nguồn dữ liệu từ đâu?
- Có popup / modal / dropdown nào không? Khi nào mở?
- Trường nào có công thức tính toán? Công thức ra sao?

### Nhóm 3: Tích hợp (hỏi nếu có hệ thống ngoài)

- Tích hợp với hệ thống nào? Có API docs không?
- Khi nào gọi API? (mở màn, bấm nút, tự động?)
- Dữ liệu nhận về dùng cho thông tin gì? Hiển thị ở đâu?

### Nhóm 4: Quy tắc & Phân quyền (hỏi cuối)

- Ai được xem? Ai được sửa? Có cần duyệt không?
- Có rule nghiệp vụ nào ràng buộc? (giới hạn, điều kiện, thời hạn?)
- Khi submit có gì xảy ra với dữ liệu liên quan?

### Điều kiện kết thúc interview

- Đủ thông tin để viết ≥80% nội dung → chuyển sang Step 3.
- User nói "viết bản nháp trước" → sinh draft, đánh dấu phần thiếu.
- Đã hỏi 3 vòng mà vẫn thiếu → sinh draft + bảng câu hỏi mở (Section 12).

---

## Step 3 — Sinh đặc tả

1. Dùng template từ `assets/screen_spec_template.md` làm cấu trúc.
2. Điền phần đã biết từ input + interview.
3. Đánh dấu trạng thái cho mỗi nội dung:
   - ✅ Đã chốt — user/stakeholder xác nhận.
   - ⚠️ [ĐỀ XUẤT] — *in nghiêng* — BA suy luận hợp lý, cần review.
   - 🔴 [CHƯA XÁC NHẬN] — **in đậm** — thiếu thông tin, không thể suy luận.
4. Mỗi nội dung `⚠️` hoặc `🔴` phải đồng thời xuất hiện trong bảng Section 12.
5. Section không áp dụng: ghi ngắn gọn lý do. Không tự bổ sung chức năng để điền đủ mẫu.

**Filename**: `ScreenSpec_{TênMàn}_{YYYY-MM-DD}.md`

**Ngôn ngữ**: Tiếng Việt. Chỉ giữ tiếng Anh cho thuật ngữ kỹ thuật không có bản dịch chuẩn
(API, endpoint, request, response, token, JWT, dropdown, toast, v.v.).

---

## Step 4 — Quality Check

Trước khi present, kiểm tra:

- [ ] Đúng tên màn hình trong tiêu đề
- [ ] Tất cả section 1–12 đều có nội dung hoặc ghi "Không áp dụng — {lý do}"
- [ ] Bảng phân quyền (S2) liệt kê đủ các vai trò đã mention
- [ ] Luồng thao tác (S4) có bước đầu + bước cuối rõ ràng
- [ ] Mỗi trường/cột trong đặc tả giao diện (S5) có nguồn dữ liệu
- [ ] API ngoài (S6.2) chỉ ghi theo tài liệu nguồn — không bịa endpoint/field
- [ ] ERP nội bộ (S6.1) không có endpoint, request/response, ERD, tên bảng/cột
- [ ] Mỗi quy tắc nghiệp vụ (S7) có mã BR-xx
- [ ] Mỗi tiêu chí nghiệm thu (S11) có điều kiện + thao tác + kết quả kiểm chứng được
- [ ] Tất cả ⚠️/🔴 đều xuất hiện trong bảng Section 12
- [ ] Filename đúng convention: `ScreenSpec_{TênMàn}_{YYYY-MM-DD}.md`
- [ ] Markdown render đúng (bảng, heading, code block)

---

## Step 5 — Present & xin review

1. Lưu file vào thư mục docs hoặc workspace root.
2. Trình bày cho user:
   > "Đặc tả màn hình {Tên} đã xong! Có {X} điểm cần xác nhận (xem Section 12).
   > Bạn muốn review từng section hay xác nhận tổng thể?"
3. Chờ feedback.

---

## Step 6 — Cập nhật theo feedback

1. Sửa trực tiếp trên file đặc tả (không tạo file mới).
2. Khi user xác nhận một nội dung:
   - Chuyển từ ⚠️/🔴 → ✅ tại vị trí inline.
   - Cập nhật trạng thái trong bảng Section 12.
3. Tăng phiên bản tài liệu (v1.0 → v1.1).
4. Chỉ ghi trạng thái **"Đã chốt"** cho toàn tài liệu khi user xác nhận rõ ràng.

---

## Mức độ đặc tả

| Phạm vi | Nội dung cần mô tả |
|---------|-------------------|
| **Giao diện** | Từng khu vực, cột, trường nhập, bộ lọc, nút và popup trong phạm vi màn; nguồn dữ liệu, mặc định, định dạng, công thức, điều kiện hiển thị/thao tác và kết quả tương ứng. |
| **API hệ thống ngoài** | Mục đích, thời điểm gọi, endpoint, method, cơ chế xác thực theo tài liệu nguồn; request gồm header/params/body, trường bắt buộc và nguồn giá trị; response gồm cấu trúc, field, kiểu dữ liệu, ý nghĩa, mẫu phản hồi và lỗi liên quan. Không ghi khóa/token thật. |
| **Cách sử dụng dữ liệu ngoài** | Field nhận về được dùng cho thông tin nghiệp vụ nào, hiển thị ở đâu, tính toán như thế nào và cần ghi nhận điều gì. |
| **ERP nội bộ** | Dữ liệu nghiệp vụ đầu vào, điều kiện xử lý và kết quả mong đợi. **Không** đặc tả endpoint, request/response nội bộ, cấu trúc ERD, bảng hay cột. |
| **Lưu và cập nhật dữ liệu** | Cách nhận diện bản ghi, nguồn dữ liệu ưu tiên, xử lý trùng, đồng bộ lại, xung đột và thành công một phần khi có liên quan. Mô tả bằng ngôn ngữ nghiệp vụ. |

---

## Nguyên tắc làm rõ và review

1. Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ.
2. **Không tự bịa** endpoint, tên field, request hoặc response của hệ thống ngoài khi chưa có nguồn xác nhận.
3. Phân biệt rõ: nội dung có nguồn / đề xuất cần review / thông tin chưa xác nhận. Ví dụ minh họa không được trình bày như contract API thực tế.
4. Nếu user muốn bản nháp khi thông tin chưa đủ: viết phần đã biết, ghi câu hỏi còn thiếu cùng phần bị ảnh hưởng.
5. Mục không áp dụng: ghi ngắn gọn lý do. Không tự bổ sung chức năng để điền đủ mẫu.
6. Tiêu chí nghiệm thu phải nêu điều kiện, thao tác và kết quả kiểm chứng được. Tiêu chí phụ thuộc quyết định chưa chốt cần đánh dấu.
7. Chỉ ghi trạng thái "đã chốt" khi user xác nhận.

---

## Đầu ra

Một file `.md` đặc tả chi tiết một màn hình bằng tiếng Việt.

- Tiêu đề: `Đặc tả màn hình: [Tên màn hình]`
- Cấu trúc: 12 section theo template trong `assets/screen_spec_template.md`
- Cập nhật trực tiếp file này khi có phản hồi
- Không tạo thêm tài liệu riêng cho AI

---

## Template

Xem file template đầy đủ tại: `assets/screen_spec_template.md`

Template gồm 12 section:
1. Mục tiêu & Phạm vi
2. Người dùng & Phân quyền (bảng phân quyền role × action)
3. Thuật ngữ & Nguồn tài liệu
4. Điều kiện bắt đầu & Luồng thao tác (happy path / alternate / exception)
5. Đặc tả chi tiết giao diện (bảng trường/cột/nút với nguồn DL, công thức, ĐK)
6. Nguồn dữ liệu & Tích hợp (ERP nội bộ vs API ngoài với request/response/error)
7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ (mã BR-xx)
8. Dữ liệu nghiệp vụ cần ghi nhận
9. Trạng thái nghiệp vụ & Tác động
10. Trạng thái giao diện & Xử lý lỗi
11. Tiêu chí nghiệm thu (mã AC-xx, format Given/When/Then)
12. Câu hỏi & Quyết định chưa chốt (mã Q-xx, phần bị ảnh hưởng)
