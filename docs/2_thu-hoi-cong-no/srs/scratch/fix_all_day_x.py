import sys
import glob
import os

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# We need to find and replace the wrong Day X logic in all markdown files in srs and sub-folders
search_dir = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs"
md_files = glob.glob(f"{search_dir}\\**\\*.md", recursive=True)

old_str_1 = "Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X"
new_str_1 = "Quy trình đóng dấu đỏ, thông báo chuyển phát & lưu bằng chứng giao thư"

old_str_2 = "sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email."
new_str_2 = "HCNS sẽ cập nhật mã vận đơn làm bằng chứng pháp lý (Ngày X là ngày cố định theo hợp đồng)."

old_str_3 = "AC3: Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng."
new_str_3 = "AC3: Hệ thống lấy mốc Ngày X cố định từ hợp đồng. Việc phát thành công chỉ là bằng chứng pháp lý."

old_str_4 = "AC2: Tính Ngày X = ngày xuất HĐ + thời hạn."
new_str_4 = "AC2: Tính Ngày X theo mốc cố định cấu hình trên Hợp đồng."

files_updated = 0

for file_path in md_files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        original = content
        
        content = content.replace(old_str_1, new_str_1)
        content = content.replace(old_str_2, new_str_2)
        content = content.replace(old_str_3, new_str_3)
        content = content.replace(old_str_4, new_str_4)
        
        if content != original:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            files_updated += 1
            print(f"Updated: {file_path}")
            
    except Exception as e:
        pass

print(f"✅ Đã quét và cập nhật xong {files_updated} file Backlog!")
