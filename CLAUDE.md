# Strictly Forbidden: Autonomous File Creation

## 🛑 CRITICAL RULE: DO NOT CREATE NEW FILES WITHOUT EXPLICIT PERMISSION
- **NEVER** create any new files (e.g., `.md`, `.txt`, `.py`, `.js`, `.json`, `.sh`, temporary files, test scripts, scratch files, or documentation) unless the user **EXPLICITLY** requests file creation in their prompt.
- Explicit request keywords include: "tạo file", "create file", "ghi ra file", "save to file", "make a new file", "xuất ra file".
- If the user asks for code, analysis, documentation, summaries, or answers, **ALWAYS** output the content directly in the chat response instead of creating a file.

## 🛑 CẤM TUYỆT ĐỐI: TỰ Ý TẠO FILE MỚI TRỪ KHI ĐƯỢC PHÉP
- **KHÔNG ĐƯỢC TỰ Ý** tạo bất kỳ file mới nào trong thư mục dự án (file `.md`, `.txt`, file code, file tạm, file test, file log...) trừ khi người dùng ghi rõ yêu cầu tạo file trong câu lệnh.
- Các từ khóa cho phép tạo file: "tạo file", "create file", "ghi ra file", "save to file", "xuất file".
- Khi người dùng yêu cầu viết code, làm báo cáo, tóm tắt, giải thích... **CHỈ HIỂN THỊ KẾT QUẢ TRỰC TIẾP TRONG NỘI DUNG CHAT**, tuyệt đối không tự tạo file mới để lưu.

## 📝 Modification of Existing Files / Sửa file có sẵn
- Chỉ được phép chỉnh sửa các file **đã tồn tại** khi người dùng yêu cầu sửa đổi/cập nhật file đó.
- Nếu cần đề xuất tạo file mới, hãy hỏi ý kiến người dùng trước trong chat chứ không tự ý gọi tool tạo file.
