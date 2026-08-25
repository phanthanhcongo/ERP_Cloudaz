import sys

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

file_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\thu-hoi-cong-no\srs\sprint_1\wireFrame\Wireframe_DanhSachCuoc.md"

new_section = """

## 4. Chi tiết vòng đời các trạng thái (ERP State Machine)

Dưới đây là luồng chuyển đổi trạng thái (State Machine) chi tiết cho các cột do ERP kiểm soát:

### 4.1. Cột "Trạng thái Mail (ERP)"
- `Chưa gửi`: Mặc định khi đồng bộ ĐNTT từ CM về.
- `Đã gửi (Lần 1)`: Khi Kế toán bấm "Gửi email đối soát" lần đầu.
- `Đã gửi (Lần N)`: Khi Kế toán gửi lại mail đối soát, hệ thống đếm số lần gửi (tối đa 1 lần/ngày).
- `Đã chốt cước`: Kế toán tự chốt, hoặc hệ thống tự động chốt sau 2 ngày gửi mail + 1 ngày chờ phản hồi.

### 4.2. Cột "Trạng thái Bản cứng (HCNS)"
- `Chưa in bản cứng`: Mặc định ban đầu.
- `Đã đóng dấu`: Kế toán bấm xác nhận đã in ra giấy và đóng dấu đỏ.
- `Đã giao bưu điện`: Kế toán bấm bàn giao cho bộ phận HCNS đi gửi.
- `Đã phát thành công`: HCNS nhập mã vận đơn và ngày báo phát thành công để chốt mốc thời gian.

### 4.3. Cột "Mốc Ngày X"
- `Chờ phát thư`: Chưa có mốc Ngày X (do HCNS chưa xác nhận phát thành công).
- `Trong hạn`: Hệ thống tính Ngày X = Ngày HCNS phát + Thời hạn HĐ. Thời điểm hiện tại < Ngày X.
- `Quá hạn N ngày`: Thời điểm hiện tại > Ngày X. Hệ thống tự động đếm số ngày trễ hạn.

### 4.4. Cột "Alert & Luồng xử lý"
- `🟢 Bình thường`: Đang trong quá trình nhắc nợ tự động (X-2 đến X+3).
- `🟠 Chờ Sales duyệt (X+4)`: Đúng ngày X+4, hệ thống đẩy thông báo cho Sales AM yêu cầu duyệt khóa dịch vụ.
- `🔴 Chuyển Pháp lý (X+15)`: Đúng ngày X+15, hệ thống chuyển hồ sơ sang màn hình của Pháp lý (Legal) để chuẩn bị công văn kiện tụng.
- `⚫ Đã khóa Dịch vụ`: Khi Phòng Mua xác nhận đã khóa thành công trên hệ thống.
- `💲 Đã tất toán`: Khi Kế toán xác nhận đã thu đủ cả nợ gốc + lãi và xuất Hóa đơn MISA (Đóng hồ sơ).

### 4.5. Cột "Khóa DV (Phòng Mua)"
- `--`: Chưa đến hạn khóa, hoặc chưa có lệnh duyệt từ Sales AM.
- `⏳ Chờ Phòng Mua khóa`: Sau khi Sales AM bấm "Duyệt khóa dịch vụ" ở mốc X+4.
- `🔒 Đã khóa Console Google`: Phòng Mua vào hệ thống bấm xác nhận đã thực hiện thao tác khóa trên portal của Google.
"""

with open(file_path, "a", encoding="utf-8") as f:
    f.write(new_section)

print("✅ Đã bổ sung mục 4. Chi tiết các trạng thái thành công!")
