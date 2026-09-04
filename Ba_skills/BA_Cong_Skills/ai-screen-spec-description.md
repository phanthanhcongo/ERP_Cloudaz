# Mô tả skill: ai-screen-spec

Trạng thái: Mô tả ý tưởng đã thống nhất, chưa tạo skill.

## Mô tả

Thu thập thông tin và hỏi làm rõ để tạo một file Markdown đặc tả chi tiết theo màn hình, phục vụ BA/PM đọc, review và chốt yêu cầu. Nội dung gồm luồng thao tác, giao diện, cách hiển thị và tính toán, quy tắc nghiệp vụ, phân quyền, xử lý lỗi, dữ liệu cần ghi nhận và tiêu chí nghiệm thu. Với tích hợp hệ thống ngoài, đặc tả API, request, response và cách sử dụng dữ liệu theo tài liệu nguồn; với ERP nội bộ, mô tả yêu cầu nghiệp vụ, không thiết kế API, ERD hay bảng/cột. Thông tin thiếu hoặc mâu thuẫn phải được hỏi lại hoặc đánh dấu chưa xác nhận, không tự suy diễn thành yêu cầu đã chốt.

## Đầu vào

- Thông tin về màn hình cần đặc tả: mục tiêu, người dùng, nghiệp vụ và các thao tác cần hỗ trợ.
- Tài liệu sẵn có nếu có: BRD, mô tả tính năng, quy trình, ảnh màn hình hoặc thiết kế, tài liệu hệ thống hiện tại.
- Tài liệu API của hệ thống ngoài nếu màn có tích hợp: thông tin API, request, response, mẫu dữ liệu và lỗi liên quan.
- Đọc thông tin đã được cung cấp trước khi hỏi. Chỉ hỏi bổ sung phần thiếu, chưa rõ hoặc mâu thuẫn; không yêu cầu người dùng chuẩn bị đủ mọi tài liệu ngay từ đầu.

## Đầu ra

Một file `.md` đặc tả chi tiết một màn hình bằng tiếng Việt, dành cho người dùng đọc và review. Cập nhật trực tiếp file này khi có phản hồi. Không có bước tạo thêm bộ tài liệu riêng cho AI.

Tiêu đề tài liệu: `Đặc tả màn hình: [Tên màn hình]`.

## Nội dung tài liệu

Thông tin đầu tài liệu: phiên bản, trạng thái review và ngày cập nhật.

1. Mục tiêu & phạm vi màn hình.
2. Người dùng, quyền thao tác & phạm vi dữ liệu.
3. Nguồn tài liệu & thuật ngữ nghiệp vụ.
4. Điều kiện bắt đầu & luồng thao tác.
5. Đặc tả chi tiết giao diện, gồm Mô tả & Cách tính toán hiển thị.
6. Nguồn dữ liệu & tích hợp hệ thống ngoài.
7. Quy tắc nghiệp vụ & kiểm tra hợp lệ.
8. Dữ liệu nghiệp vụ cần ghi nhận.
9. Trạng thái nghiệp vụ & tác động liên quan.
10. Trạng thái giao diện & xử lý lỗi.
11. Tiêu chí nghiệm thu.
12. Câu hỏi & quyết định chưa chốt.

## Mức độ đặc tả

| Phạm vi | Nội dung cần mô tả |
|---|---|
| Giao diện | Từng khu vực, cột, trường nhập, bộ lọc, nút và popup có trong phạm vi màn; nguồn dữ liệu, mặc định, định dạng, công thức, điều kiện hiển thị/thao tác và kết quả tương ứng. |
| API hệ thống ngoài, ví dụ CM | Mục đích, thời điểm gọi, endpoint, method, cơ chế xác thực theo tài liệu nguồn; request gồm header/params/body, trường bắt buộc và nguồn giá trị; response gồm cấu trúc, field, kiểu dữ liệu, ý nghĩa, mẫu phản hồi và lỗi liên quan. Không ghi khóa/token thật. |
| Cách sử dụng dữ liệu ngoài | Field nhận về được dùng cho thông tin nghiệp vụ nào, hiển thị ở đâu, tính toán như thế nào và cần ghi nhận điều gì. |
| ERP nội bộ | Dữ liệu nghiệp vụ đầu vào, điều kiện xử lý và kết quả mong đợi. Không đặc tả endpoint, request/response nội bộ, cấu trúc ERD, bảng hay cột. |
| Lưu và cập nhật dữ liệu | Cách nhận diện bản ghi, nguồn dữ liệu được ưu tiên, xử lý trùng, đồng bộ lại, xung đột và thành công một phần khi có liên quan. Mô tả bằng ngôn ngữ nghiệp vụ. |

## Nguyên tắc làm rõ và review

- Hỏi theo nhóm nhỏ, ưu tiên những điểm ảnh hưởng hành vi và kết quả nghiệp vụ của màn.
- Không tự bịa endpoint, tên field, request hoặc response của hệ thống ngoài khi chưa có nguồn xác nhận.
- Phân biệt nội dung có nguồn, đề xuất cần review và thông tin chưa xác nhận. Ví dụ minh họa không được trình bày như contract API thực tế.
- Nếu người dùng muốn bản nháp khi thông tin chưa đủ, viết phần đã biết và ghi câu hỏi còn thiếu cùng phần bị ảnh hưởng.
- Mục không áp dụng ghi ngắn gọn lý do; không tự bổ sung chức năng để điền đủ mẫu.
- Tiêu chí nghiệm thu phải nêu điều kiện, thao tác và kết quả kiểm chứng được; các tiêu chí phụ thuộc quyết định chưa chốt cần được đánh dấu.
- Chỉ ghi trạng thái đã chốt khi người dùng xác nhận.
