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
| Tổng quan toàn dự án, liệt kê yêu cầu nghiệp vụ | → `ba-brd` |
| Mô tả nghiệp vụ thuần, không có giao diện | → `template-all-in-one` (business-only) |
| Chưa có BRD, chưa rõ scope | → Dùng `ba-brd` trước, rồi `ai-screen-spec` cho từng màn |

---

## Đầu vào

Đọc hết input trước khi hỏi. Chỉ hỏi bổ sung phần thiếu, chưa rõ hoặc mâu thuẫn.

| Loại input | Cách xử lý | Ưu tiên |
|------------|-----------|---------|
| BRD đã có | Trích actor, scope, module liên quan, **mã yêu cầu** để truy vết | Đọc trước, không hỏi lại |
| Ảnh Figma / screenshot | Xác định layout, danh sách block, trường, nút | Dùng làm anchor cho đặc tả giao diện |
| Link Figma (không kèm ảnh) | Không đọc được → yêu cầu user export PNG/JPG đính kèm | Hỏi ngay từ đầu |
| API docs hệ thống ngoài | Trích endpoint, method, request/response, error code | Đọc trước, đặc tả theo nguồn |
| Text mô tả miệng | Dùng trực tiếp, hỏi bổ sung | Hỏi nhóm nhỏ |
| Không có input nào | Hỏi tối thiểu: tên màn, mục tiêu, actor | Interview đầy đủ |

---

## Quy ước trạng thái (dùng thống nhất toàn skill)

Hai trục độc lập, **không dùng lẫn ký hiệu giữa hai trục**:

**Trục 1 — Độ tin cậy của nội dung** (đánh dấu inline ở mọi section):

| Ký hiệu | Nghĩa |
|---------|-------|
| ✅ | Đã chốt — user/stakeholder xác nhận |
| ⚠️ [ĐỀ XUẤT] — *in nghiêng* | BA suy luận hợp lý, cần review |
| 🔴 [CHƯA XÁC NHẬN] — **in đậm** | Thiếu thông tin, không thể suy luận |

**Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng Section 12):

| Ký hiệu | Nghĩa |
|---------|-------|
| 🟡 Đang chờ | Đã hỏi, chưa có trả lời |
| 🔵 Đã trả lời | Có quyết định, chưa cập nhật hết vào tài liệu |
| ✅ Đã đóng | Đã trả lời và đã cập nhật vào các section liên quan |

---

## Quy ước mã định danh

Mọi nội dung có thể được tham chiếu đều phải có mã, để truy vết hai chiều
giữa giao diện ↔ quy tắc ↔ nghiệm thu ↔ câu hỏi.

| Tiền tố | Đối tượng | Ví dụ |
|---------|-----------|-------|
| `F-xx` | Trường nhập / trường hiển thị / trường lọc | F-01 Ngày chứng từ |
| `C-xx` | Cột trong bảng danh sách | C-03 Thành tiền |
| `B-xx` | Nút bấm / hành động | B-01 Lưu |
| `P-xx` | Popup / modal | P-01 Popup chọn sản phẩm |
| `N-xx` | Thông báo gửi ra ngoài màn (in-app/email/Zalo) | N-01 |
| `BR-xx` | Quy tắc nghiệp vụ | BR-02 |
| `AC-xx` | Tiêu chí nghiệm thu | AC-05 |
| `Q-xx` | Câu hỏi / quyết định chưa chốt | Q-01 |

Mã đánh số liên tục trong phạm vi một tài liệu, không đánh lại theo từng section.
Khi xóa một mục, **không tái sử dụng mã** — để tránh nhầm ở các bản review cũ.

---

## Step 1 — Thu thập & đọc input

1. Xác định loại input user cung cấp (text / file / BRD / ảnh / API doc).
2. Đọc hết tài liệu đã cho.
3. Nếu có ảnh thiết kế:
   - Đọc ảnh, liệt kê lại các khu vực + trường/cột/nút nhìn thấy được.
   - Trình danh sách này cho user xác nhận trước khi đặc tả chi tiết.
   - Mọi nội dung **chỉ suy ra từ ảnh** (nguồn dữ liệu, validation, phân quyền,
     công thức) phải gắn ⚠️ [ĐỀ XUẤT] — nhìn ảnh không biết được các thông tin này.
4. Nếu user chỉ đưa link Figma: yêu cầu export ảnh đính kèm, không đoán nội dung.
5. Nếu có BRD: ghi lại mã yêu cầu liên quan để điền vào bảng header tài liệu.
6. Liệt kê những gì đã biết và những gì còn thiếu.
7. Không yêu cầu user chuẩn bị đủ mọi tài liệu ngay từ đầu.

---

## Step 2 — Hỏi làm rõ (Interview)

Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ.
**Chỉ hỏi phần chưa biết từ input.** Một vòng hỏi = một nhóm bên dưới.

### Nhóm 1: Mục tiêu & Luồng (hỏi đầu tiên)

- Màn này giải quyết vấn đề gì? Ai là người dùng chính?
- Vào màn này từ đâu? (menu / màn khác / link thông báo / deep-link có tham số?)
- Luồng chính từ khi mở màn đến khi hoàn tất thao tác là gì?
- Có điều kiện nào để vào được màn này không? Xong rồi thì đi đâu?

### Nhóm 2: Giao diện chi tiết (hỏi sau khi biết luồng)

- Màn có bao nhiêu khu vực chính? (header, bộ lọc, bảng, form, footer?)
- Các cột/trường nào hiển thị? Nguồn dữ liệu từ đâu?
- Có popup / modal / dropdown nào không? Khi nào mở?
- Trường nào có công thức tính toán? Công thức ra sao?
- Có chọn nhiều dòng / thao tác hàng loạt / sửa trực tiếp trên bảng không?
- Có xuất Excel/PDF, in, hoặc nhập file đính kèm không?
- Số tiền và số lượng hiển thị theo định dạng nào? Làm tròn mấy chữ số?

### Nhóm 3: Tích hợp (hỏi nếu có hệ thống ngoài)

- Tích hợp với hệ thống nào? Có API docs không?
- Khi nào gọi API? (mở màn, bấm nút, tự động?)
- Dữ liệu nhận về dùng cho thông tin gì? Hiển thị ở đâu?
- Nếu API lỗi hoặc chậm thì màn xử lý ra sao? Có dùng dữ liệu đã lưu trước đó không?

### Nhóm 4: Quy tắc & Phân quyền (hỏi cuối)

- Ai được xem? Ai được sửa? Có cần duyệt không?
- Có rule nghiệp vụ nào ràng buộc? (giới hạn, điều kiện, thời hạn?)
- Khi submit có gì xảy ra với dữ liệu liên quan?
- Hai người cùng sửa một bản ghi thì xử lý thế nào?
- Có cần lưu lịch sử thay đổi / gửi thông báo cho ai không?

### Điều kiện kết thúc interview

Đủ thông tin để viết khi **đủ cả 5 điều kiện** sau (kiểm tra nhị phân, không ước lượng %):

1. Có mục tiêu màn + actor chính.
2. Có điểm vào màn + điều kiện tiên quyết.
3. Luồng chính đủ bước đầu → bước cuối.
4. Có danh sách khu vực UI + trường/cột của khu vực chính.
5. Biết màn có tích hợp hệ thống ngoài hay không (có/không, chưa cần chi tiết).

Ngoại lệ:

- User nói "viết bản nháp trước" → sinh draft, đánh dấu phần thiếu.
- Đã đi hết 4 nhóm + tối đa 1 vòng đào sâu mà vẫn thiếu → sinh draft + bảng câu hỏi mở (Section 12).

---

## Step 2.5 — Chốt bản đồ màn hình (BẮT BUỘC trước khi viết chi tiết)

Trước khi sinh tài liệu đầy đủ, trình bày một **bản đồ ngắn 10–15 dòng** cho user xác nhận:

- Danh sách khu vực `5.1 … 5.n`, mỗi khu vực ghi loại (bảng / form / bộ lọc / popup)
  và số trường ước tính.
- Danh sách nút chính (B-xx) và popup (P-xx).
- Danh sách trạng thái nghiệp vụ nếu có.
- Danh sách hệ thống ngoài cần tích hợp.

Hỏi: *"Cấu trúc màn như trên đã đúng chưa? Có khu vực/popup nào thiếu không?"*

Chỉ viết chi tiết sau khi user xác nhận cấu trúc. Bước này ngăn việc sinh 300–500 dòng
rồi mới phát hiện hiểu sai bố cục màn.

### Màn hình lớn

- Nếu màn có **> 2 tab**: đánh số theo tab (`5.1 Tab A`, `5.1.1 Khu vực trong tab A`).
- Nếu có **> 4 popup**: mỗi popup là một tiểu mục riêng, có mã P-xx.
- Nếu ước tính tài liệu **> ~600 dòng**: đề xuất tách file phụ
  `ScreenSpec_{slug-màn}_popup-{tên}.md` và liên kết chéo — **hỏi user trước khi tách**,
  không tự tách.

---

## Step 3 — Sinh đặc tả

1. Dùng template từ `assets/screen_spec_template.md` làm cấu trúc.
2. Điền phần đã biết từ input + interview.
3. Gán mã cho mọi trường/cột/nút/popup theo **Quy ước mã định danh** ở trên.
4. Đánh dấu trạng thái cho mỗi nội dung theo **Trục 1** của quy ước trạng thái.
5. Mỗi nội dung `⚠️` hoặc `🔴` phải đồng thời xuất hiện trong bảng Section 12,
   với phần bị ảnh hưởng ghi bằng **mã cụ thể** (vd `F-03, AC-05`), không ghi chung chung "S5".
6. Section không áp dụng: ghi ngắn gọn lý do. Không tự bổ sung chức năng để điền đủ mẫu.

**Filename**: `ScreenSpec_{slug-tên-màn}.md`

- Slug không dấu, viết thường, nối bằng `-`. Ví dụ: `ScreenSpec_phieu-nhap-kho.md`.
- **Không đưa ngày vào tên file** — ngày và phiên bản nằm trong bảng header và
  phụ lục lịch sử phiên bản bên trong tài liệu, để tên file ổn định qua các lần cập nhật.

**Ngôn ngữ**: Tiếng Việt. Chỉ giữ tiếng Anh cho thuật ngữ kỹ thuật không có bản dịch chuẩn
(API, endpoint, request, response, token, JWT, dropdown, toast, v.v.).

---

## Step 4 — Quality Check

Trước khi present, kiểm tra:

**Định danh & metadata**

- [ ] Đúng tên màn hình trong tiêu đề
- [ ] Bảng header đã điền hết: phiên bản, trạng thái, ngày, tác giả, module, feature —
      không còn placeholder `{...}`
- [ ] Đã ghi mã yêu cầu BRD liên quan (hoặc "Không có BRD")
- [ ] Filename đúng convention: `ScreenSpec_{slug-tên-màn}.md`

**Nội dung**

- [ ] Tất cả section 1–12 đều có nội dung hoặc ghi "Không áp dụng — {lý do}"
- [ ] Bảng phân quyền (S2) có đủ cột tương ứng **mọi hành động** liệt kê ở S5.5
- [ ] Luồng thao tác (S4) có điểm vào, bước đầu, bước cuối, điểm ra rõ ràng
- [ ] Mỗi trường/cột/nút/popup ở S5 đều **có mã** (F-/C-/B-/P-) và có nguồn dữ liệu
- [ ] Trường số/tiền/ngày ở S5 có ghi định dạng, đơn vị, quy tắc làm tròn
- [ ] API ngoài (S6.2) chỉ ghi theo tài liệu nguồn — không bịa endpoint/field
- [ ] ERP nội bộ (S6.1) không có endpoint, request/response, ERD, tên bảng/cột
- [ ] Mỗi quy tắc nghiệp vụ (S7) có mã BR-xx và cột "Liên quan" trỏ tới mã UI

**Truy vết & độ phủ**

- [ ] Mỗi BR-xx có ít nhất 1 AC kiểm chứng
- [ ] Mỗi vai trò trong S2 có ít nhất 1 AC về phân quyền
- [ ] Mỗi luồng lỗi ở S4 có ít nhất 1 AC
- [ ] Mỗi AC (S11) có điều kiện + thao tác + kết quả kiểm chứng được, và cột "Liên quan"
- [ ] Tất cả ⚠️/🔴 đều xuất hiện trong bảng Section 12
- [ ] Mọi mã tham chiếu trong tài liệu đều tồn tại (không trỏ tới mã đã xóa)

**Trình bày**

- [ ] Ký hiệu trạng thái dùng đúng 2 trục (Trục 1 inline, Trục 2 chỉ trong S12)
- [ ] Markdown render đúng (bảng, heading, code block)

---

## Step 5 — Present & xin review

1. **Xác nhận nơi lưu trước khi ghi file.** Hỏi user đường dẫn + tên file,
   đề xuất mặc định là thư mục tài liệu của dự án. Chỉ ghi file sau khi user đồng ý.
   Không tự chọn thư mục.
2. Trình bày cho user:
   > "Đặc tả màn hình {Tên} đã xong! Có {X} điểm cần xác nhận (xem Section 12).
   > Bạn muốn review từng section hay xác nhận tổng thể?"
3. Chờ feedback.

---

## Step 6 — Cập nhật theo feedback

1. Sửa trực tiếp trên file đặc tả (không tạo file mới, không đổi tên file).
2. Khi user xác nhận một nội dung:
   - Chuyển từ ⚠️/🔴 → ✅ tại vị trí inline.
   - Ghi **nội dung quyết định và người quyết định** vào bảng Section 12.
   - Cập nhật trạng thái câu hỏi: 🟡 → 🔵 → ✅ khi đã cập nhật hết các section liên quan.
3. Tăng phiên bản tài liệu (v1.0 → v1.1) và **ghi một dòng vào phụ lục Lịch sử phiên bản**
   nêu rõ đã đổi gì.
4. Chỉ ghi trạng thái **"Đã chốt"** cho toàn tài liệu khi user xác nhận rõ ràng.

---

## Mức độ đặc tả

| Phạm vi | Nội dung cần mô tả |
|---------|-------------------|
| **Giao diện** | Từng khu vực, cột, trường nhập, bộ lọc, nút và popup trong phạm vi màn; nguồn dữ liệu, mặc định, định dạng, đơn vị, làm tròn, công thức, điều kiện hiển thị/thao tác và kết quả tương ứng. Bao gồm cả thao tác hàng loạt, sửa trực tiếp trên bảng, xuất/nhập file nếu có. |
| **API hệ thống ngoài** | Mục đích, thời điểm gọi, môi trường, endpoint, method, cơ chế xác thực theo tài liệu nguồn; request gồm header/params/body, trường bắt buộc và nguồn giá trị; response gồm cấu trúc, field, kiểu dữ liệu, ý nghĩa, mẫu phản hồi, phân trang và lỗi liên quan (kể cả lỗi trả trong body khi HTTP 200). Không ghi khóa/token thật. |
| **Cách sử dụng dữ liệu ngoài** | Field nhận về được dùng cho thông tin nghiệp vụ nào, hiển thị ở đâu, tính toán như thế nào, xử lý ra sao khi field thiếu/null, và cần ghi nhận điều gì. |
| **ERP nội bộ** | Dữ liệu nghiệp vụ đầu vào, điều kiện xử lý và kết quả mong đợi. **Không** đặc tả endpoint, request/response nội bộ, cấu trúc ERD, bảng hay cột. |
| **Lưu và cập nhật dữ liệu** | Cách nhận diện bản ghi, nguồn dữ liệu ưu tiên, xử lý trùng, đồng bộ lại, xung đột giữa hai người dùng, thành công một phần, và vết kiểm toán khi có liên quan. Mô tả bằng ngôn ngữ nghiệp vụ. |
| **Phi chức năng** | Thời gian tải mục tiêu, khối lượng dữ liệu tối đa màn phải chịu, hành vi khi vượt ngưỡng, trình duyệt/thiết bị hỗ trợ, đa ngôn ngữ — ghi ngắn gọn, cho phép "Không áp dụng". |

---

## Nguyên tắc làm rõ và review

1. Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ.
2. **Không tự bịa** endpoint, tên field, request hoặc response của hệ thống ngoài khi chưa có nguồn xác nhận.
3. Phân biệt rõ: nội dung có nguồn / đề xuất cần review / thông tin chưa xác nhận. Ví dụ minh họa không được trình bày như contract API thực tế.
4. Nếu user muốn bản nháp khi thông tin chưa đủ: viết phần đã biết, ghi câu hỏi còn thiếu cùng phần bị ảnh hưởng.
5. Mục không áp dụng: ghi ngắn gọn lý do. Không tự bổ sung chức năng để điền đủ mẫu.
6. Tiêu chí nghiệm thu phải nêu điều kiện, thao tác và kết quả kiểm chứng được. Tiêu chí phụ thuộc quyết định chưa chốt cần đánh dấu và trỏ tới mã Q-xx.
7. Chỉ ghi trạng thái "đã chốt" khi user xác nhận.
8. Quyết định đã chốt phải được ghi lại nội dung, không chỉ đổi ký hiệu — để giữ lý do sau nhiều vòng review.

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
2. Người dùng & Phân quyền (bảng role × action, cột theo đúng hành động ở S5.5)
3. Thuật ngữ & Nguồn tài liệu
4. Điều kiện bắt đầu, Điểm vào/ra & Luồng thao tác (happy path / alternate / exception)
5. Đặc tả chi tiết giao diện (bảng có mã F-/C-/B-/P-, nguồn DL, định dạng, công thức, ĐK;
   kèm thao tác hàng loạt, xuất/nhập file, định dạng số & tiền)
6. Nguồn dữ liệu & Tích hợp (ERP nội bộ vs API ngoài với request/response/error/phân trang)
7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ (mã BR-xx, cột Liên quan)
8. Dữ liệu nghiệp vụ cần ghi nhận (kèm 8.3 vết kiểm toán, 8.4 xung đột chỉnh sửa)
9. Trạng thái nghiệp vụ & Tác động (kèm 9.2 thông báo gửi ra ngoài màn)
10. Trạng thái giao diện & Xử lý lỗi (kèm 10.3 ràng buộc phi chức năng)
11. Tiêu chí nghiệm thu (mã AC-xx, format Given/When/Then, cột Liên quan)
12. Câu hỏi & Quyết định chưa chốt (mã Q-xx, phần bị ảnh hưởng, nội dung quyết định)

Phụ lục: Lịch sử phiên bản.
