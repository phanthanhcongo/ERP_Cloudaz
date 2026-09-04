# Hướng dẫn phỏng vấn — Screen Spec

> File này chứa danh sách câu hỏi phỏng vấn để thu thập thông tin đặc tả màn hình.
> Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ.
> **Chỉ hỏi phần chưa biết từ input.**
>
> **Quy tắc chốt**: Bắt buộc chốt nhóm 1 (mục tiêu + luồng). Nhóm 2-4 có thể hỏi gộp
> và chốt chung, trừ khi có mâu thuẫn nghiệp vụ cần làm rõ từng nhóm.

---

## Nhóm 1: Mục tiêu & Luồng *(hỏi đầu tiên)*

- Màn này giải quyết vấn đề gì? Ai là người dùng chính?
- Vào màn này từ đâu? (menu / màn khác / link thông báo / deep-link có tham số?)
- Luồng chính từ khi mở màn đến khi hoàn tất thao tác là gì?
- Có điều kiện nào để vào được màn này không? Xong rồi thì đi đâu?

> **Chốt nhóm 1** (⭐ BẮt buộc): Tóm tắt lại mục tiêu, actor chính, điểm vào, luồng chính,
> và hỏi: *"Anh/chị xác nhận những điểm trên rồi em chuyển sang nhóm tiếp nhé?"*

---

## Nhóm 2: Giao diện chi tiết *(hỏi sau khi biết luồng)*

- Màn có bao nhiêu khu vực chính? (header, bộ lọc, bảng, form, footer?)
- Các cột/trường nào hiển thị? Nguồn dữ liệu từ đâu?
- Có popup / modal / dropdown nào không? Khi nào mở?
- Trường nào có công thức tính toán? Công thức ra sao?
- Có chọn nhiều dòng / thao tác hàng loạt / sửa trực tiếp trên bảng không?
- Có xuất Excel/PDF, in, hoặc nhập file đính kèm không?
- Số tiền và số lượng hiển thị theo định dạng nào? Làm tròn mấy chữ số?
- Màn hình có bao nhiêu chế độ? (Tạo mới, Sửa, Xem, Duyệt, Khóa kỳ?)

> **Chốt nhóm 2** (Tùy chọn — có thể gộp với nhóm 3-4 nếu không có mâu thuẫn):
> Tóm tắt danh sách khu vực, popup, chế độ màn hình.

---

## Nhóm 3: Tích hợp *(hỏi nếu có hệ thống ngoài)*

- Tích hợp với hệ thống nào? Có API docs không?
- Khi nào gọi API? (mở màn, bấm nút, tự động?)
- Dữ liệu nhận về dùng cho thông tin gì? Hiển thị ở đâu?
- Nếu API lỗi hoặc chậm thì màn xử lý ra sao? Có dùng dữ liệu đã lưu trước đó không?

> **Chốt nhóm 3** (Tùy chọn): Tóm tắt hệ thống tích hợp, thời điểm gọi, dữ liệu sử dụng.

---

## Nhóm 4: Quy tắc & Phân quyền *(hỏi cuối)*

- Ai được xem? Ai được sửa? Có cần duyệt không?
- Có rule nghiệp vụ nào ràng buộc? (giới hạn, điều kiện, thời hạn?)
- Khi submit có gì xảy ra với dữ liệu liên quan?
- Hai người cùng sửa một bản ghi thì xử lý thế nào?
- Có cần lưu lịch sử thay đổi / gửi thông báo cho ai không?

> **Chốt nhóm 4** (Tùy chọn): Tóm tắt phân quyền, rule chính, xung đột, thông báo.

---

## Điều kiện kết thúc interview

Đủ thông tin để viết khi **đủ cả 5 điều kiện** sau (kiểm tra nhị phân, không ước lượng %):

1. Có mục tiêu màn + actor chính.
2. Có điểm vào màn + điều kiện tiên quyết.
3. Luồng chính đủ bước đầu → bước cuối.
4. Có danh sách khu vực UI + trường/cột của khu vực chính.
5. Biết màn có tích hợp hệ thống ngoài hay không (có/không, chưa cần chi tiết).

---

## Ngoại lệ

- **User nói "viết bản nháp trước"** → sinh draft, đánh dấu phần thiếu bằng `⚠️/🔴`.
- **Đã đi hết 4 nhóm + tối đa 1 vòng đào sâu mà vẫn thiếu** → sinh draft + bảng câu hỏi mở (Section 12).
