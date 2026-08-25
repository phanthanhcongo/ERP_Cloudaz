import sys
import re

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

file_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\wireFrame\Wireframe_DanhSachCuoc.md"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

# Replace the single column definition with two separate ones
old_col_def = "| **Chứng từ CM & Mail** | ☁️ File PDF từ **CM**<br>⚙️ Trạng thái từ **ERP** | Trạng thái gửi mail của ERP: `Chưa gửi` ➔ `Đã gửi mail` ➔ `Đã chốt cước` (auto sau 2+1 ngày). |"
new_col_def = """| **File ĐNTT (Từ CM)** | ☁️ **Từ CM API** | Dữ liệu file `.docx` / `.pdf` sinh sẵn từ CM, không có trạng thái. |
| **Trạng thái Mail (ERP)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái gửi mail của ERP: `Chưa gửi` ➔ `Đã gửi mail` ➔ `Đã chốt cước` (auto sau 2+1 ngày). |"""

text = text.replace(old_col_def, new_col_def)

# Replace the grid header
old_header = "| Khách hàng / Hợp đồng | Sản phẩm | Tiền phải thu (VNĐ) | Chứng từ CM & Mail | Trạng thái Bản cứng (HCNS) | Mốc Ngày X (Hạn chót) | Alert & Luồng xử lý | Thao tác |"
old_divider = "|---|---|---|---|---|---|---|---|"
new_header = "| Khách hàng / Hợp đồng | Sản phẩm | Tiền phải thu (VNĐ) | File ĐNTT (Từ CM) | Trạng thái Mail (ERP) | Trạng thái Bản cứng (HCNS) | Mốc Ngày X (Hạn chót) | Alert & Luồng xử lý | Thao tác |"
new_divider = "|---|---|---|---|---|---|---|---|---|"

text = text.replace(old_header, new_header).replace(old_divider, new_divider)

# Replace the rows in the grid
# Row 1
text = text.replace("| 📄 `[File ĐNTT.pdf]`<br>✉️ Đã chốt cước | ✅ Đã đóng dấu<br>🚚 Đã giao bưu điện<br>`Mã vận đơn: VN12345` |", 
                    "| 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>🚚 Đã giao bưu điện<br>`Mã vận đơn: VN12345` |")

# Row 2 (Note: has [File ĐNTT.pdf]<br>✉️ Đã chốt cước)
text = text.replace("| 📄 `[File ĐNTT.pdf]`<br>✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công |", 
                    "| 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công |")

# Row 3
text = text.replace("| 📄 `[File ĐNTT.pdf]`<br>⚠️ Chưa gửi mail | ❌ Chưa in bản cứng |", 
                    "| 📄 `[File ĐNTT.docx]` | ⚠️ Chưa gửi mail | ❌ Chưa in bản cứng |")

# Row 4 (Note: has [File ĐNTT.pdf]<br>✉️ Đã chốt cước)
# Since I replaced it globally for string matching Row 2, I need to make sure the replacement works.
# Wait, string replacement will replace all occurrences. Let's just use re.sub for safer row replacement.

# Let's re-read the rows part and replace it explicitly
def replace_row_col(match):
    # Match group 1 is the file part, group 2 is the mail part
    return f"| {match.group(1)} | {match.group(2)} |"

text = re.sub(r'\|\s*📄\s*`\[File ĐNTT\.pdf\]`<br>(.*?)\s*\|', r'| 📄 `[File ĐNTT.docx]` | \1 |', text)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(text)

print("✅ Đã chia tách cột Chứng từ CM và Trạng thái Mail thành công!")
