# Test Scenarios — Skill `ai-screen-spec`

> Dùng để kiểm thử agent chạy skill này có đúng convention không.
> Mỗi scenario mô tả input, kỳ vọng output, và điểm cần chú ý.

---

## Scenario 1: Chỉ có ảnh thiết kế

**Input**: 1-2 screenshot màn hình, không có BRD, không có text mô tả.

**Kỳ vọng**:
- Agent **đọc ảnh**, liệt kê các khu vực, trường, nút nhìn thấy được.
- Trình danh sách cho user xác nhận **trước khi viết**.
- Mọi thông tin suy ra từ ảnh (nguồn DL, validation, phân quyền, công thức) gắn `⚠️ [ĐỀ XUẤT]`.
- Phần thiếu (phân quyền, quy tắc nghiệp vụ, tích hợp) gắn `🔴 [CHƯA XÁC NHẬN]`.
- Section 12 có nhiều Q-xx tương ứng.

**Điểm chú ý**:
- Agent KHÔNG được bịa endpoint, API, tên field hệ thống.
- Agent PHẢI hỏi interview nhóm 1 (mục tiêu, luồng) trước khi viết.

---

## Scenario 2: Có BRD nhưng thiếu API docs

**Input**: File BRD đã có (ghi rõ module, actor, yêu cầu), màn có tích hợp hệ thống ngoài nhưng không kèm API docs.

**Kỳ vọng**:
- Agent trích mã yêu cầu BRD vào bảng header.
- Section 6.1 (ERP nội bộ) mô tả đầy đủ bằng ngôn ngữ nghiệp vụ.
- Section 6.2 (API ngoài) ghi `🔴 [CHƯA XÁC NHẬN]` — **không bịa** endpoint/request/response.
- Agent hỏi: "Hệ thống tích hợp {tên} có tài liệu API không? Vui lòng cung cấp để em đặc tả chi tiết."
- Tạo Q-xx trong Section 12 cho phần API.

**Điểm chú ý**:
- Section 6.1 KHÔNG chứa endpoint, request/response, ERD, tên bảng/cột.
- Agent không được lấy ví dụ từ template làm nội dung thật.

---

## Scenario 3: Màn lớn — 3 tab + 5 popup

**Input**: Text mô tả chi tiết một màn phức tạp có 3 tab (Thông tin chung, Chi tiết sản phẩm, Lịch sử) và 5 popup.

**Kỳ vọng**:
- Step 2.5 "bản đồ màn hình" có đánh số theo tab: `5.1 Tab Thông tin chung`, `5.1.1 Header`, `5.1.2 Bảng...`
- Mỗi popup có mã P-xx và tiểu mục riêng.
- Agent **đề xuất tách file** nếu ước tính > ~600 dòng, **hỏi user trước khi tách**.
- Mã F-xx, C-xx, B-xx đánh liên tục theo từng tiền tố, không reset theo tab.

**Điểm chú ý**:
- Bảng phân quyền S2 có cột cho MỌI hành động ở S5.5 (nhiều hơn thông thường).
- Section 5.8 (screen mode) cần cover nhiều mode phức tạp.

---

## Scenario 4: User yêu cầu draft ngay

**Input**: Text ngắn mô tả màn hình + câu "tạo draft luôn" hoặc "viết spec ngay đi".

**Kỳ vọng**:
- Agent **kích hoạt fast-draft mode**.
- Bỏ qua Step 2.5 (chốt bản đồ) và confirmation Step 5 (nơi lưu).
- Sinh file nháp ngay, gắn `⚠️/🔴` cho phần chưa chắc.
- Section 12 liệt kê đầy đủ các Q-xx cho phần thiếu.
- Trình bày: *"Đặc tả bản nháp đã xong! Có {X} điểm cần xác nhận."*

**Điểm chú ý**:
- Agent KHÔNG hỏi interview dài dòng khi user đã nói "draft ngay".
- Filename vẫn đúng convention: `ScreenSpec_{slug}.md`.
- Bảng header vẫn phải có thông tin cơ bản (có thể ghi `🔴` cho phần thiếu).
