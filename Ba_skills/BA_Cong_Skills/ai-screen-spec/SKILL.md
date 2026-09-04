---
name: ai-screen-spec
description: >-
  Use when BA/PM needs a detailed Vietnamese screen specification for one ERP screen,
  including UI fields, user flows, business rules, permissions, external API integrations,
  open questions, and acceptance criteria.
  Triggers: "đặc tả màn hình", "screen spec", "spec màn", "mô tả chi tiết màn",
  "viết spec cho màn", "tạo spec màn hình".
---

# Đặc tả chi tiết màn hình (Screen Spec)

## Mục đích

Thu thập thông tin, hỏi làm rõ và tạo file Markdown đặc tả chi tiết **một màn hình**,
phục vụ BA/PM đọc, review và chốt yêu cầu.

---

## Khi nào dùng / Khi nào KHÔNG dùng

| Tình huống | Dùng skill nào |
|-----------|---------------|
| Đặc tả chi tiết **1 màn** hình (giao diện + nghiệp vụ + tích hợp) | → `ai-screen-spec` ✅ |
| Tổng quan toàn dự án, liệt kê yêu cầu nghiệp vụ | → `ba-brd` |
| Mô tả nghiệp vụ thuần, không có giao diện | → `template-all-in-one` (business-only) |
| Chưa có BRD, chưa rõ scope | → Dùng `ba-brd` trước, rồi `ai-screen-spec` cho từng màn |

---

## Fast-draft mode

Nếu user yêu cầu "tạo file/spec/draft ngay" hoặc cung cấp đủ thông tin rõ ràng,
agent được:
- Bỏ qua Step 2.5 (chốt bản đồ) và confirmation Step 5 (nơi lưu)
- Sinh file nháp, đánh dấu `⚠️/🔴` cho phần chưa chắc
- Trình Section 12 cho user review sau

---

## Đầu vào

Đọc hết input trước khi hỏi. Chỉ hỏi bổ sung phần thiếu, chưa rõ hoặc mâu thuẫn.

| Loại input | Cách xử lý | Ưu tiên |
|------------|-----------|---------| 
| BRD đã có | Trích actor, scope, module liên quan, **mã yêu cầu** để truy vết | Đọc trước, không hỏi lại |
| Ảnh thiết kế (PNG, JPG, screenshot) | Xác định layout, danh sách block, trường, nút | Dùng làm anchor cho đặc tả giao diện |
| File `.html` thô | Đọc cấu trúc HTML, xác định UI components | Dùng làm anchor cho đặc tả giao diện |
| Link Figma (không kèm ảnh/file) | Không đọc được → yêu cầu user export PNG/JPG hoặc .html đính kèm | Hỏi ngay từ đầu |
| API docs hệ thống ngoài | Trích endpoint, method, request/response, error code | Đọc trước, đặc tả theo nguồn |
| Text mô tả miệng | Dùng trực tiếp, hỏi bổ sung | Hỏi nhóm nhỏ |
| Không có input nào | Hỏi tối thiểu: tên màn, mục tiêu, actor | Interview đầy đủ |

---

## Quy ước trạng thái

Hai trục độc lập, **không dùng lẫn ký hiệu giữa hai trục**:

**Trục 1 — Độ tin cậy của nội dung** (đánh dấu cho nội dung suy luận hoặc chưa xác nhận):

| Ký hiệu | Nghĩa |
|---------|-------|
| ✅ | Đã chốt — user/stakeholder xác nhận |
| ⚠️ [ĐỀ XUẤT] — *in nghiêng* | BA suy luận hợp lý, cần review |
| 🔴 [CHƯA XÁC NHẬN] — **in đậm** | Thiếu thông tin, không thể suy luận |

> Nội dung đã có nguồn rõ ràng hoặc stakeholder đã chốt **không bắt buộc** prefix `✅` từng dòng.
> Chỉ bắt buộc đánh dấu `⚠️ [ĐỀ XUẤT]` và `🔴 [CHƯA XÁC NHẬN]`.

**Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng Section 12):

| Ký hiệu | Nghĩa |
|---------|-------|
| 🟡 Đang chờ | Đã hỏi, chưa có trả lời |
| 🔵 Đã trả lời | Có quyết định, chưa cập nhật hết vào tài liệu |
| ✅ Đã đóng | Đã trả lời và đã cập nhật vào các section liên quan |

**Quy ước boolean**: Các cột boolean (quyền, bắt buộc, retry, ghi log, xác nhận trước...)
dùng text: `Có/Không`, `Bắt buộc/Tùy chọn`. **Không dùng ✅/❌** cho giá trị boolean.

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

Mã đánh số liên tục **theo từng tiền tố** trên toàn tài liệu.
Ví dụ: F-01..F-12 cho tất cả trường, C-01..C-08 cho tất cả cột, B-01..B-06 cho tất cả nút.
Không reset về 01 khi sang section mới. Không tái sử dụng mã đã xóa.

---

## Workflow

### Step 1 — Thu thập & đọc input
Xác định loại input → đọc hết tài liệu → liệt kê đã biết vs còn thiếu.
Nếu có ảnh: liệt kê UI, trình user xác nhận. Nội dung chỉ suy ra từ ảnh gắn ⚠️ [ĐỀ XUẤT].

### Step 2 — Hỏi làm rõ (Interview)
Xem chi tiết câu hỏi theo nhóm: `assets/interview_guide.md`

### Step 2.5 — Chốt bản đồ màn hình *(BẮT BUỘC trừ fast-draft mode)*
Trình bản đồ ngắn cho user xác nhận: khu vực, nút, popup, trạng thái, tích hợp.
Chỉ viết chi tiết sau khi user xác nhận.
- Nếu > 2 tab: đánh số theo tab.
- Nếu > 4 popup: mỗi popup tiểu mục riêng.
- Nếu ước tính > ~600 dòng: đề xuất tách file — **hỏi user trước khi tách**.

### Step 3 — Sinh đặc tả
1. Dùng template từ `assets/screen_spec_template.md`.
2. Điền phần đã biết từ input + interview.
3. Gán mã cho mọi trường/cột/nút/popup theo quy ước mã định danh.
4. Đánh dấu trạng thái theo Trục 1.
5. Mỗi nội dung `⚠️` hoặc `🔴` phải đồng thời xuất hiện trong Section 12.
6. **Xóa toàn bộ dòng mẫu** từ template trước khi xuất. Trường thiếu → ghi `🔴`.

**Filename**: `ScreenSpec_{slug-tên-màn}.md` — slug không dấu, viết thường, nối `-`.
**Ngôn ngữ**: Tiếng Việt. Giữ tiếng Anh cho thuật ngữ kỹ thuật.

### Step 4 — Quality Check
Xem checklist chi tiết: `assets/quality_checklist.md`

### Step 5 — Present & xin review
1. **Xác nhận nơi lưu trước khi ghi file** *(trừ fast-draft mode)*.
   Mặc định: `docs/{module}/{feature}/ScreenSpec_{slug}.md`
   Fallback (nếu chưa biết module/feature): `docs/screen-specs/ScreenSpec_{slug}.md`
2. Trình: *"Đặc tả màn {Tên} đã xong! Có {X} điểm cần xác nhận (xem Section 12)."*
3. Chờ feedback.

### Step 6 — Cập nhật theo feedback
1. Sửa trực tiếp trên file (không tạo file mới, không đổi tên).
2. Chuyển ⚠️/🔴 → ✅, ghi nội dung + người quyết định vào Section 12.
3. Tăng phiên bản (v1.0 → v1.1) và ghi lịch sử phiên bản.
4. Chỉ ghi "Đã chốt" khi user xác nhận rõ ràng.

---

## Nguyên tắc bắt buộc

1. Hỏi theo nhóm nhỏ, ưu tiên điểm ảnh hưởng hành vi nghiệp vụ.
2. **Không tự bịa** endpoint, tên field, request/response của hệ thống ngoài.
3. Phân biệt rõ: nội dung có nguồn / đề xuất cần review / chưa xác nhận.
4. Mục không áp dụng: ghi ngắn gọn lý do. Không tự bổ sung chức năng.
5. Tiêu chí nghiệm thu phải nêu điều kiện, thao tác và kết quả kiểm chứng được.
6. Quyết định đã chốt phải ghi lại nội dung, không chỉ đổi ký hiệu.

---

## Đầu ra

Một file `.md` đặc tả chi tiết một màn hình bằng tiếng Việt, 12 section theo
`assets/screen_spec_template.md`. Cập nhật trực tiếp file này khi có phản hồi.

**Template gồm 12 section:**
1. Mục tiêu & Phạm vi
2. Người dùng & Phân quyền
3. Thuật ngữ & Nguồn tài liệu
4. Điều kiện bắt đầu & Luồng thao tác
5. Đặc tả chi tiết giao diện (kèm S5.8 Chế độ màn hình)
6. Nguồn dữ liệu & Tích hợp
7. Quy tắc nghiệp vụ & Kiểm tra hợp lệ
8. Dữ liệu nghiệp vụ cần ghi nhận
9. Trạng thái nghiệp vụ & Tác động
10. Trạng thái giao diện & Xử lý lỗi
11. Tiêu chí nghiệm thu
12. Câu hỏi & Quyết định chưa chốt

Phụ lục: Lịch sử phiên bản.
