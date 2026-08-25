import sys
import glob

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# 1. Revert Wireframe
file_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\wireFrame\Wireframe_DanhSachCuoc.md"
try:
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    text = text.replace(
        '| **Trạng thái Bản cứng** | ⚙️ **Tạo mới bởi ERP** | Flow của Kế toán & HCNS: `Chưa in bản cứng` ➔ `Đã đóng dấu` ➔ `Đã giao bưu điện` ➔ `Đã phát thành công` (Lưu bằng chứng giao thư). |',
        '| **Trạng thái Bản cứng** | ⚙️ **Tạo mới bởi ERP** | Flow của Kế toán & HCNS: `Chưa in bản cứng` ➔ `Đã đóng dấu` ➔ `Đã giao bưu điện` (kèm mã vận đơn) ➔ `Đã phát thành công` (kèm ngày). |'
    )
    text = text.replace(
        '| **Mốc Ngày X** | ☁️ **Từ Hợp đồng / CM** | Hạn chót cố định theo HĐ. Trạng thái: `Trong hạn` (còn N ngày) ➔ `Quá hạn N ngày`. |',
        '| **Mốc Ngày X** | ⚙️ **Tính toán bởi ERP** | Trạng thái thời gian: `Chờ phát thư` (chưa có Ngày X) ➔ `Trong hạn` (còn N ngày) ➔ `Quá hạn N ngày`. |'
    )
    text = text.replace(
        '| ❌ Chưa in bản cứng | **20/09/2026**<br>⏳ Còn 25 ngày |',
        '| ❌ Chưa in bản cứng | `--/--/----`<br>*(Chờ phát thư)* |'
    )
    text = text.replace(
        '- `Đã phát thành công`: **HCNS nhập mã vận đơn và bấm xác nhận báo phát thành công** (Đóng vai trò làm bằng chứng pháp lý đã gửi thư, không làm thay đổi Ngày X).',
        '- `Đã phát thành công`: **HCNS nhập mã vận đơn và bấm xác nhận báo phát thành công** (Lúc này hệ thống sẽ tự động chốt mốc thời gian bắt đầu đếm ngược).'
    )
    
    old_43 = """### 4.3. Cột "Mốc Ngày X"
- Mốc Ngày X (Hạn thanh toán) là ngày **CỐ ĐỊNH** lấy từ dữ liệu Hợp đồng của từng khách hàng (hoặc đồng bộ từ CM API).
- `Trong hạn`: Thời điểm hiện tại < Ngày X. Hệ thống tự động đếm ngược số ngày còn lại (Ví dụ: Còn 5 ngày).
- `Quá hạn N ngày`: Từ ngày X+1 trở đi, hệ thống chuyển sang trạng thái quá hạn và bắt đầu đếm số ngày trễ (để tính lãi phạt).
*(Lưu ý: Kế toán phải đảm bảo gửi ĐNTT sớm để khoảng cách từ lúc gửi đến Ngày X >= số ngày ân hạn trong hợp đồng).*"""

    new_43 = """### 4.3. Cột "Mốc Ngày X"
- `Chờ phát thư`: Chưa có mốc Ngày X (do HCNS chưa xác nhận phát thành công).
- `Trong hạn`: Ngay sau khi **HCNS xác nhận phát thành công**, hệ thống tự động tính: Ngày X (Hạn chót) = Ngày phát thành công + Số ngày thanh toán theo Hợp đồng. Bắt đầu đếm ngược (X-2, X-1, X).
- `Quá hạn N ngày`: Từ ngày X+1 trở đi, hệ thống chuyển sang trạng thái quá hạn và bắt đầu đếm số ngày trễ (để tính lãi phạt)."""

    text = text.replace(old_43, new_43)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Reverted Wireframe.")
except Exception as e:
    print("Error wireframe:", e)

# 2. Revert Sprint 1 Backlog
sprint_backlog_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\Sprint1_Backlog_Google_Committed.md"
try:
    with open(sprint_backlog_path, "r", encoding="utf-8") as f:
        text = f.read()

    text = text.replace(
        '| 4 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & Lưu bằng chứng giao | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ HCNS cập nhật mã vận đơn để lưu bằng chứng pháp lý |',
        '| 4 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & xác định Ngày X | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ Xác định Ngày X khi phát thành công ➔ Mở khóa gửi Mail ĐNTT |'
    )
    text = text.replace(
        '* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & Lưu bằng chứng giao thư`',
        '* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X`'
    )
    text = text.replace(
        '> Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, HCNS sẽ cập nhật mã vận đơn và ngày giao thành công làm bằng chứng pháp lý (Ngày X là ngày cố định theo hợp đồng).',
        '> Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email.'
    )
    text = text.replace(
        '- **AC3:** Hệ thống đọc dữ liệu mốc Ngày X (Cố định) từ hợp đồng. Trạng thái Đã giao thành công của HCNS chỉ đóng vai trò chốt bằng chứng pháp lý.',
        '- **AC3:** Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng.'
    )

    with open(sprint_backlog_path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Reverted Sprint1 Backlog.")
except Exception as e:
    print("Error Sprint 1 Backlog:", e)

# 3. Revert BRD
brd_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\BRD_GWS_Committed_2026-08-25.md"
try:
    with open(brd_path, "r", encoding="utf-8") as f:
        brd_text = f.read()

    brd_text = brd_text.replace(
        'Thiết lập cơ chế ràng buộc chặt chẽ (Hard Constraints) giữa các phòng ban: HCNS cập nhật trạng thái phát ĐNTT làm bằng chứng pháp lý (Ngày X là cố định theo HĐ);',
        'Thiết lập cơ chế ràng buộc chặt chẽ (Hard Constraints) giữa các phòng ban: Ngày hạn thanh toán (Ngày X) chỉ được xác định khi Hành chính nhân sự xác nhận đã phát ĐNTT thành công;'
    )
    brd_text = brd_text.replace(
        '- Bản cứng ĐNTT là tài liệu bắt buộc gửi cho khách hàng, đóng vai trò làm bằng chứng pháp lý đã tống đạt thông báo.',
        '- Bản cứng ĐNTT là tài liệu bắt buộc để làm căn cứ tính Ngày X theo hợp đồng thương mại hiện hành của công ty.'
    )
    brd_text = brd_text.replace(
        '- **5.2.4** Hệ thống lấy mốc hạn thanh toán (Ngày X) cố định theo điều khoản hợp đồng. Trạng thái báo phát thành công của HCNS được lưu làm lịch sử Audit.',
        '- **5.2.4** Hệ thống tự động tính và khóa mốc hạn thanh toán (Ngày X) dựa trên ngày nhận thực tế cộng với thời hạn thanh toán trong hợp đồng.'
    )

    with open(brd_path, "w", encoding="utf-8") as f:
        f.write(brd_text)
    print("Reverted BRD.")
except Exception as e:
    print("Error BRD:", e)

# 4. Revert all globally replaced files
search_dir = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs"
md_files = glob.glob(f"{search_dir}\\**\\*.md", recursive=True)

old_str_1 = "Quy trình đóng dấu đỏ, thông báo chuyển phát & lưu bằng chứng giao thư"
new_str_1 = "Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X"

old_str_2 = "HCNS sẽ cập nhật mã vận đơn làm bằng chứng pháp lý (Ngày X là ngày cố định theo hợp đồng)."
new_str_2 = "sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email."

old_str_3 = "AC3: Hệ thống lấy mốc Ngày X cố định từ hợp đồng. Việc phát thành công chỉ là bằng chứng pháp lý."
new_str_3 = "AC3: Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng."

old_str_4 = "AC2: Tính Ngày X theo mốc cố định cấu hình trên Hợp đồng."
new_str_4 = "AC2: Tính Ngày X = ngày xuất HĐ + thời hạn."

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
            print(f"Reverted global: {file_path}")
            
    except Exception as e:
        pass

print("Hoàn tất Revert toàn bộ!")
