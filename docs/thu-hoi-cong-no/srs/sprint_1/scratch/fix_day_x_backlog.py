import sys

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# 1. Update Sprint 1 Backlog
sprint_backlog_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\Sprint1_Backlog_Google_Committed.md"
with open(sprint_backlog_path, "r", encoding="utf-8") as f:
    text = f.read()

text = text.replace(
    '| 4 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & xác định Ngày X | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ Xác định Ngày X khi phát thành công ➔ Mở khóa gửi Mail ĐNTT |',
    '| 4 | **DC-03** | `1669` | Kế toán & HCNS | Quy trình đóng dấu đỏ, phát bản cứng & Lưu bằng chứng giao | Kế toán đóng dấu ĐNTT ➔ Báo HCNS gửi bưu điện ➔ HCNS cập nhật mã vận đơn để lưu bằng chứng pháp lý |'
)

text = text.replace(
    '* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & tự động xác định Ngày X`',
    '* **Tên ngắn:** `DC-03: Quy trình đóng dấu đỏ, thông báo chuyển phát & Lưu bằng chứng giao thư`'
)

text = text.replace(
    '> Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, sau khi HCNS xác nhận phát thành công thì hệ thống tự động xác định mốc hạn thanh toán Ngày X dựa trên ngày giao nhận thực tế và mở khóa nút gửi email.',
    '> Là một Kế toán / Hành chính nhân sự, tôi muốn Kế toán đóng dấu đỏ ĐNTT và báo HCNS đi gửi bưu điện, HCNS sẽ cập nhật mã vận đơn và ngày giao thành công làm bằng chứng pháp lý (Ngày X là ngày cố định theo hợp đồng).'
)

text = text.replace(
    '- **AC3:** Hệ thống tự động tính toán và lưu mốc Ngày X = Ngày khách nhận bản cứng + số ngày được nợ theo điều khoản hợp đồng.',
    '- **AC3:** Hệ thống đọc dữ liệu mốc Ngày X (Cố định) từ hợp đồng. Trạng thái Đã giao thành công của HCNS chỉ đóng vai trò chốt bằng chứng pháp lý.'
)

with open(sprint_backlog_path, "w", encoding="utf-8") as f:
    f.write(text)

# 2. Update BRD
brd_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\BRD_GWS_Committed_2026-08-25.md"
with open(brd_path, "r", encoding="utf-8") as f:
    brd_text = f.read()

brd_text = brd_text.replace(
    'Thiết lập cơ chế ràng buộc chặt chẽ (Hard Constraints) giữa các phòng ban: Ngày hạn thanh toán (Ngày X) chỉ được xác định khi Hành chính nhân sự xác nhận đã phát ĐNTT thành công;',
    'Thiết lập cơ chế ràng buộc chặt chẽ (Hard Constraints) giữa các phòng ban: HCNS cập nhật trạng thái phát ĐNTT làm bằng chứng pháp lý (Ngày X là cố định theo HĐ);'
)

brd_text = brd_text.replace(
    '- Bản cứng ĐNTT là tài liệu bắt buộc để làm căn cứ tính Ngày X theo hợp đồng thương mại hiện hành của công ty.',
    '- Bản cứng ĐNTT là tài liệu bắt buộc gửi cho khách hàng, đóng vai trò làm bằng chứng pháp lý đã tống đạt thông báo.'
)

brd_text = brd_text.replace(
    '- **5.2.4** Hệ thống tự động tính và khóa mốc hạn thanh toán (Ngày X) dựa trên ngày nhận thực tế cộng với thời hạn thanh toán trong hợp đồng.',
    '- **5.2.4** Hệ thống lấy mốc hạn thanh toán (Ngày X) cố định theo điều khoản hợp đồng. Trạng thái báo phát thành công của HCNS được lưu làm lịch sử Audit.'
)

with open(brd_path, "w", encoding="utf-8") as f:
    f.write(brd_text)

print("✅ Đã cập nhật xong Backlog và BRD Sprint 1!")
