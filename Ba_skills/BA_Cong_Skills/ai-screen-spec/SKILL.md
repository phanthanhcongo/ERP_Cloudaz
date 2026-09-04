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

Chỉ kích hoạt khi user **nói rõ** muốn draft nhanh, ví dụ: "tạo draft luôn", "viết spec ngay",
"draft trước rồi review sau". Agent được:
- Bỏ qua Step 2.5 (chốt bản đồ) và confirmation Step 5 (nơi lưu)
- Sinh file nháp, đánh dấu `⚠️ [ĐỀ XUẤT]`/`🔴 [CHƯA XÁC NHẬN]` cho phần chưa chắc
- Trình Section 12 cho user review sau

> "Cung cấp đủ thông tin" **không tự kích hoạt** fast-draft — chỉ cho phép rút gọn interview.
> Step 2.5 và Step 5 vẫn bắt buộc trong normal mode.

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
| ✅ [ĐÃ CHỐT] | Đã chốt — user/stakeholder xác nhận |
| ⚠️ [ĐỀ XUẤT] | BA suy luận hợp lý, cần review |
| 🔴 [CHƯA XÁC NHẬN] | Thiếu thông tin, không thể suy luận |

> Nội dung đã chốt **không bắt buộc** prefix `✅ [ĐÃ CHỐT]` từng dòng.
> Chỉ bắt buộc đánh dấu `⚠️ [ĐỀ XUẤT]` và `🔴 [CHƯA XÁC NHẬN]`.
> Cột Trạng thái ở Section 11 (AC) được phép ghi dạng rút gọn: `✅ Đã chốt`, `⚠️ [ĐỀ XUẤT]`, `🔴 [CHƯA XÁC NHẬN]` (hoặc `⚠️ Phụ thuộc Q-xx`).

**Trục 2 — Vòng đời câu hỏi** (chỉ dùng trong bảng Section 12):

| Ký hiệu | Nghĩa |
|---------|-------|
| Đang chờ | Đã hỏi, chưa có trả lời |
| Đã trả lời | Có quyết định, chưa cập nhật hết vào tài liệu |
| ✅ Đã đóng | Đã trả lời và đã cập nhật vào các section liên quan |

**Quy ước boolean**: Các cột boolean (quyền, bắt buộc, retry, ghi log, xác nhận trước...)
dùng text: `Có/Không`, `Bắt buộc/Tùy chọn`. Không dùng icon cho giá trị boolean.

---

## Quy ước mã định danh

Mọi nội dung có thể được tham chiếu đều phải có mã, để truy vết hai chiều
từ BRD → Spec → Dev/Test.

| Tiền tố | Dùng cho | Ví dụ | Quy tắc gán mã |
|---------|----------|-------|----------------|
| **F-** | Field / Trường thông tin | F-01, F-02 | Gán cho từng input/field ở form |
| **C-** | Column / Cột dữ liệu bảng | C-01, C-02 | Gán cho từng cột của table |
| **B-** | Button / Action | B-01, B-02 | Gán cho từng nút/hành động |
| **P-** | Popup / Modal / Drawer | P-01, P-02 | Gán cho từng màn phụ |
| **N-** | Notification / Thông báo | N-01, N-02 | Gán cho thông báo gửi ra ngoài màn |
| **BR-** | Business Rule | BR-01, BR-02 | Gán cho quy tắc nghiệp vụ |
| **AC-** | Acceptance Criteria | AC-01, AC-02 | Gán cho tiêu chí nghiệm thu |
| **Q-** | Question / Điểm chưa chốt | Q-01, Q-02 | Gán cho câu hỏi trong Section 12 |

> **Quy tắc gán mã**:
> - Mã đánh số liên tục theo từng tiền tố (F-01, F-02... C-01, C-02... B-01, B-02...).
> - **Không reset mã** khi sang section / tab / popup mới.
> - Mỗi phần tử có **đúng 1 mã duy nhất** trong toàn bộ tài liệu.

---

## Quy trình 6 bước

```
Step 1: Thu thập thông tin đầu vào
  └─► Step 2: Phỏng vấn bổ sung (nếu thiếu)
        └─► Step 2.5: Chốt "bản đồ màn hình" với user
              └─► Step 3: Sinh đặc tả theo template
                    └─► Step 4: Quality Check
                          └─► Step 5: Present & xin review
                                └─► Step 6: Cập nhật theo feedback
```

### Step 1 — Thu thập & phân tích đầu vào
- Đọc tất cả file/ảnh/link user cung cấp.
- Liệt kê các điểm **đã biết** và các điểm **chưa biết / mâu thuẫn**.
- Nếu có ảnh UI: dùng vision phân tích từng khu vực (header, table, form, footer),
  trích xuất danh sách trường/cột/nút bấm.

### Step 2 — Phỏng vấn bổ sung (nếu thiếu thông tin)
- Xem hướng dẫn chi tiết: `assets/interview_guide.md`
- **Không hỏi dàn trải**. Chỉ hỏi phần **chưa biết từ input** và ảnh hưởng lớn đến nghiệp vụ.
- Bắt buộc chốt nhóm 1 (mục tiêu + luồng). Nhóm 2-4 có thể gộp hoặc tùy chọn.

### Step 2.5 — Chốt "bản đồ màn hình" với user
Trước khi viết chi tiết spec dài 300-500 dòng, **bắt buộc trình bản đồ cấu trúc**:

> *"Em đề xuất cấu trúc màn hình như sau:
> - Màn chính: Header, Bộ lọc, Bảng danh sách phiếu, Footer.
> - Popup P-01: Chọn đơn mua hàng (mở khi bấm B-01).
> - Popup P-02: Xác nhận hủy phiếu (mở khi bấm B-04).
> Anh/chị chốt cấu trúc này chưa để em sinh đặc tả chi tiết?"*

Chờ user chốt rồi mới sang Step 3.

### Step 3 — Sinh đặc tả
1. Dùng template từ `assets/screen_spec_template.md`.
2. Điền phần đã biết từ input + interview.
3. Gán mã cho mọi trường/cột/nút/popup theo quy ước mã định danh.
4. Đánh dấu trạng thái theo Trục 1 (✅ [ĐÃ CHỐT], ⚠️ [ĐỀ XUẤT], 🔴 [CHƯA XÁC NHẬN]).
5. Mỗi nội dung ⚠️ [ĐỀ XUẤT] hoặc 🔴 [CHƯA XÁC NHẬN] phải có Q-xx tương ứng trong Section 12.
6. **Xóa toàn bộ placeholder template** (dạng `{Tên BA}`, `{Role 1}`) trước khi xuất.
   Biến runtime (dạng `PNK-{YYYYMM}`, `"Phiếu {mã}"`) được phép giữ.
   Trường thiếu → ghi `🔴 [CHƯA XÁC NHẬN]`.

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
2. Chuyển [ĐỀ XUẤT]/[CHƯA XÁC NHẬN] → [ĐÃ CHỐT], ghi nội dung + người quyết định vào Section 12.
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
