# Mockup: Màn Hình Danh Sách Cước & ĐNTT (Kế toán)

Bảng này được thiết kế dựa trên nguyên tắc: **Giữ nguyên dữ liệu gốc từ CM** + **Bổ sung cột Tracking của luồng ERP**.

---

## 1. Khu vực Bộ lọc (Filter & Global Actions)

**Tabs trạng thái nhanh:**
👉 `[Tất cả] | [Đang chờ phát thư] | [Trong hạn] | [Đang quá hạn] | [Chờ duyệt khóa DV]`

```text
[ Từ ngày (dd/mm/yyyy) 📅 ]   [ Đến ngày (dd/mm/yyyy) 📅 ]   [ Sản phẩm: Tất cả ▼ ]   [ Hợp đồng: Tất cả ▼ ]

[ 🔍 Tìm Kiếm ]      [ 🔄 Đồng bộ dữ liệu CM ]      [ ⬇️ Tải xuống tất cả ]
```

## 2. Phân tích Nguồn dữ liệu & Các Trạng thái (Trạng thái Cột)

Dưới đây là định nghĩa rõ ràng về việc cột nào lấy từ API của hệ thống CM, cột nào sinh ra mới trên ERP, và các trạng thái (status) có thể có:

| Tên Cột | Nguồn Dữ Liệu | Các Trạng thái (Statuses) |
|---|---|---|
| **Khách hàng / Hợp đồng** | ☁️ **Từ CM API** | Dữ liệu Text, không có trạng thái. |
| **Sản phẩm** | ☁️ **Từ CM API** | Dữ liệu Text (Tên gói GWS), không có trạng thái. |
| **Tiền phải thu (VNĐ)** | ☁️ Nợ gốc từ **CM**<br>⚙️ Lãi phạt từ **ERP** | ERP tự động cộng dồn tiền phạt vào tổng tiền mỗi khi chạy Cronjob tính lãi (sau Ngày X+1). |
| **File ĐNTT (Từ CM)** | ☁️ **Từ CM API** | Dữ liệu file `.docx` / `.pdf` sinh sẵn từ CM, không có trạng thái. |
| **Trạng thái Mail (ERP)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái gửi mail: `Chưa gửi` ➔ `Đã gửi (Lần 1)` ➔ `Đã gửi (Lần N)` ➔ `Đã chốt cước`. *(Note: Rule gửi max 1 lần/ngày. Chi tiết lịch sử gửi xem ở dòng mở rộng).* |
| **Trạng thái Bản cứng** | ⚙️ **Tạo mới bởi ERP** | Flow của Kế toán & HCNS: `Chưa in bản cứng` ➔ `Đã đóng dấu` ➔ `Đã giao bưu điện` (kèm mã vận đơn) ➔ `Đã phát thành công` (kèm ngày). |
| **Mốc Ngày X** | ⚙️ **Tính toán bởi ERP** | Trạng thái thời gian: `Chờ phát thư` (chưa có Ngày X) ➔ `Trong hạn` (còn N ngày) ➔ `Quá hạn N ngày`. |
| **Alert & Luồng xử lý** | ⚙️ **Tạo mới bởi ERP** | Trạng thái cảnh báo: `🟢 Bình thường` (đang nhắc nợ tự động) ➔ `🟠 Chờ Sales duyệt (X+4)` ➔ `🔴 Chuyển Pháp lý (X+15)` ➔ `⚫ Đã khóa Dịch vụ` ➔ `💲 Đã tất toán`. |
| **Trạng thái Khóa DV (Phòng Mua)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái khóa dịch vụ: `--` (Chưa yêu cầu) ➔ `⏳ Chờ Phòng Mua khóa` (Sau khi Sales AM duyệt) ➔ `🔒 Đã khóa Console Google` (Phòng Mua xác nhận). |

---

## 3. Bảng điều khiển Công nợ (Data Grid)

| Khách hàng / Hợp đồng | Sản phẩm | Tiền phải thu (VNĐ) | File ĐNTT (Từ CM) | Trạng thái Mail (ERP) | Trạng thái Bản cứng (HCNS) | Mốc Ngày X (Hạn chót) | Alert & Luồng xử lý | Khóa DV (Phòng Mua) | Thao tác |
|---|---|---|---|---|---|---|---|---|---|
| **Công ty CP A**<br>HĐ: SYSCORTEX-01 | GWS Resell<br>GWS Standard | Gốc: `15,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>🚚 Đã giao bưu điện<br>`Mã vận đơn: VN12345` | **15/09/2026**<br>⏳ Còn 5 ngày | 🟢 Đang nhắc nợ | `--` | `[⬇️ Tải file]`<br>`[💲 Tất toán]` |
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Resell<br>GWS Plus | Gốc: `40,000,000`<br>Phạt: `+ 500,000` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **01/09/2026**<br>🔴 Quá hạn 4 ngày | 🟠 Chờ Sales duyệt khóa (X+4) | ⏳ Chờ Phòng Mua khóa | `[👁️ Chi tiết]` |
| **Tập đoàn C**<br>HĐ: PANDA-03 | GWS Resell<br>GWS Enterprise | Gốc: `120,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | ⚠️ Chưa gửi mail | ❌ Chưa in bản cứng | `--/--/----`<br>*(Chờ phát thư)* | 🟢 Bình thường | `--` | `[📧 Gửi Mail]`<br>`[🖨️ Đóng dấu]` |
| **Công ty D**<br>HĐ: ADFLEX-04 | GWS Resell<br>GWS Standard | Gốc: `20,000,000`<br>Phạt: `+ 2,500,000` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **10/08/2026**<br>🔴 Quá hạn 15 ngày | 🔴 Chuyển Pháp lý (X+15) | 🔒 Đã khóa Console | `[👁️ Chi tiết]` |

---

## 3. Chế độ Mở rộng dòng (Expandable Row)
*(Khuyến nghị UI: Khi user bấm vào 1 dòng bất kỳ, bảng sẽ sổ xuống chi tiết để tránh làm rối mắt màn hình chính)*

```text
▼ Công ty TNHH B | HĐ: EPIC-02

[ Dữ liệu gốc từ CM ]
- Ngày tạo ĐNTT trên hệ thống CM: 19/08/2026 14:36
- Kỳ cước: Tháng 08/2026

[ Lịch sử Tracking trên ERP ]
- 20/08/2026 09:15: [Kế toán] Đã gửi email đối soát (Lần 1) - To: Khách hàng | CC: Sales AM.
- 21/08/2026 09:00: [Hệ thống] Đã gửi email đối soát (Lần 2) - To: Khách hàng | CC: Sales AM.
- 23/08/2026 09:00: [Hệ thống] Tự động chốt cước do quá 2+1 ngày không có phản hồi.
- 24/08/2026 14:00: [HCNS] Xác nhận phát ĐNTT bản cứng thành công.
- 30/08/2026 08:30: [Hệ thống] Đã tự động gửi email nhắc nợ trước hạn (Ngày X-2).
- 02/09/2026 08:30: [Hệ thống] Đã tự động gửi email nhắc nợ quá hạn + tính lãi.
- 05/09/2026 08:30: [Hệ thống] ⚠️ Đã gửi email Cảnh báo mốc X+4 yêu cầu duyệt khóa DV - To: Sales AM | CC: Trưởng phòng Sales.
- 05/09/2026 14:00: [Sales AM] Đã bấm nút "Duyệt khóa dịch vụ" trên hệ thống.
- 05/09/2026 14:00: [Hệ thống] 🛑 Đã gửi Ticket/Email yêu cầu Khóa tài khoản - To: Phòng Mua | CC: Kế toán, Sales AM.
- 16/09/2026 08:30: [Hệ thống] 🚨 Đã gửi email Báo động mốc X+15 (Chuẩn bị kiện tụng) - To: Legal (Pháp Lý) | CC: Ban Giám Đốc.
```


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
- `Đã phát thành công`: **HCNS nhập mã vận đơn và bấm xác nhận báo phát thành công** (Lúc này hệ thống sẽ tự động chốt mốc thời gian bắt đầu đếm ngược).

### 4.3. Cột "Mốc Ngày X"
- `Chờ phát thư`: Chưa có mốc Ngày X (do HCNS chưa xác nhận phát thành công).
- `Trong hạn`: Ngay sau khi **HCNS xác nhận phát thành công**, hệ thống tự động tính: Ngày X (Hạn chót) = Ngày phát thành công + Số ngày thanh toán theo Hợp đồng. Bắt đầu đếm ngược (X-2, X-1, X).
- `Quá hạn N ngày`: Từ ngày X+1 trở đi, hệ thống chuyển sang trạng thái quá hạn và bắt đầu đếm số ngày trễ (để tính lãi phạt).

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
