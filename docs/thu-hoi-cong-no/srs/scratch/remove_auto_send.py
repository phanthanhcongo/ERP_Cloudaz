import sys
import glob
import os

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# We need to change "Tự động gửi" to "Tạo nháp & Kế toán duyệt gửi" across files
search_dir = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs"
md_files = glob.glob(f"{search_dir}\\**\\*.md", recursive=True)

replacements = [
    ("Đã tự động gửi email nhắc nợ", "Đã tạo nháp email nhắc nợ (Chờ duyệt)"),
    ("Tự động chốt cước do quá 2+1 ngày không có phản hồi.", "Cảnh báo quá hạn chốt cước (Chờ Kế toán bấm chốt)."),
    ("hệ thống tự động gửi email nhắc nợ trước hạn", "hệ thống tự động tạo email nháp nhắc nợ trước hạn và yêu cầu Kế toán duyệt gửi"),
    ("Tự động gửi email Ngày X-2.", "Tự động sinh email nháp Ngày X-2 và Kế toán phải bấm Duyệt gửi."),
    ("Tự động gửi email cảnh báo", "Hệ thống cảnh báo và Kế toán duyệt gửi email"),
    ("Tự động gửi email nhắc nợ hàng daily", "Hệ thống lên danh sách nhắc nợ hàng ngày để Kế toán duyệt gửi"),
    ("Tự động gửi email Ngày X+1.", "Tự động sinh email nháp Ngày X+1 và chờ Kế toán bấm Duyệt gửi."),
    ("Tự động gửi email Ngày X+4.", "Tự động sinh email nháp Ngày X+4 và chờ Kế toán bấm Duyệt gửi."),
    ("Hệ thống tự động gửi email", "Kế toán duyệt gửi email"),
    ("Đang trong quá trình nhắc nợ tự động", "Đang trong quá trình nhắc nợ (Kế toán duyệt gửi hàng ngày)"),
]

files_updated = 0
for file_path in md_files:
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        original = content
        
        for old_str, new_str in replacements:
            content = content.replace(old_str, new_str)
        
        if content != original:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)
            files_updated += 1
            print(f"Updated: {file_path}")
            
    except Exception as e:
        pass

print(f"✅ Đã loại bỏ luồng 'Tự động hoàn toàn', chuyển sang 'Chờ duyệt' ở {files_updated} file!")
