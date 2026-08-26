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

Dưới đây là định nghĩa rõ ràng về nguồn gốc dữ liệu (được đồng bộ từ hệ thống CM về DB của ERP), cột nào được quản lý trực tiếp bởi ERP, và các trạng thái (status) có thể có:

| Tên Cột | Nguồn Dữ Liệu | Các Trạng thái (Statuses) |
|---|---|---|
| **Khách hàng / Hợp đồng** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS`, `contracts`) | Dữ liệu Text từ DB ERP, không có trạng thái. |
| **Sản phẩm** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS.product_name`) | Dữ liệu Text từ DB ERP, không có trạng thái. |
| **Tiền phải thu (VNĐ)** | ⚙️ **Đồng bộ gốc từ CM về DB ERP** (`DEBTS.total_principal`) + **Tính lãi trên ERP** (`DEBTS.total_penalty`) | ERP tự động cộng dồn tiền phạt vào tổng tiền mỗi khi chạy Cronjob tính lãi (sau Ngày X+1). |
| **File ĐNTT (Từ CM)** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS.documentId` liên kết với `documents`) | File `.docx` sinh từ CM đã đồng bộ sang bảng `documents` trên ERP. |
| **Trạng thái Mail (ERP)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái gửi mail: `Chưa gửi` ➔ `Đã gửi (Lần 1)` ➔ `Đã gửi (Lần N)` ➔ `Đã chốt cước`. *(Note: Rule gửi max 1 lần/ngày. Chi tiết lịch sử gửi xem ở dòng mở rộng).* |
| **Trạng thái Bản cứng** | ⚙️ **Tạo mới bởi ERP** | Flow của Kế toán & HCNS: `Chưa in bản cứng` ➔ `Đã đóng dấu` ➔ `Đã giao bưu điện` (kèm mã vận đơn) ➔ `Đã phát thành công` (kèm ngày). |
| **Mốc Ngày X** | ⚙️ **Tính toán bởi ERP** | Trạng thái thời gian: `Thiếu cấu hình` (Kế toán chưa nhập lãi suất/hạn nợ) ➔ `Chờ phát thư` (chưa có Ngày X) ➔ `Trong hạn` (còn N ngày) ➔ `Quá hạn N ngày`. |
| **Alert & Luồng xử lý** | ⚙️ **Tạo mới bởi ERP** | Trạng thái cảnh báo: `🔴 Cảnh báo đỏ (Chưa cấu hình)` ➔ `🟢 Bình thường` (đang nhắc nợ tự động) ➔ `🟠 Chờ Sales duyệt (X+4)` ➔ `🔴 Chuyển Pháp lý (X+15)` ➔ `⚫ Đã khóa Dịch vụ` ➔ `💲 Đã tất toán`. |
| **Trạng thái Khóa DV (Phòng Mua)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái khóa dịch vụ: `--` (Chưa yêu cầu) ➔ `⏳ Chờ Phòng Mua khóa` (Sau khi Sales AM duyệt) ➔ `🔒 Đã khóa Console Google` (Phòng Mua xác nhận). |

---

## 3. Bảng điều khiển Công nợ (Data Grid)

| Khách hàng / Hợp đồng | Sản phẩm | Tiền phải thu (VNĐ) | File ĐNTT (Từ CM) | Trạng thái Mail (ERP) | Trạng thái Bản cứng (HCNS) | Mốc Ngày X (Hạn chót) | Alert & Luồng xử lý | Khóa DV (Phòng Mua) | Thao tác |
|---|---|---|---|---|---|---|---|---|---|
| **Công ty CP A**<br>HĐ: SYSCORTEX-01 | GWS Resell<br>GWS Standard | Gốc: `15,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>🚚 Đã giao bưu điện<br>`Mã vận đơn: VN12345` | **15/09/2026**<br>⏳ Còn 5 ngày | 🟢 Đang nhắc nợ | `--` | `[⬇️ Tải file]`<br>`[💲 Tất toán]` |
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Resell<br>GWS Plus | Gốc: `40,000,000`<br>Phạt: `+ 500,000` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **01/09/2026**<br>🔴 Quá hạn 4 ngày | 🟠 Chờ Sales duyệt khóa (X+4) | ⏳ Chờ Phòng Mua khóa | `[👁️ Chi tiết]` |
| **Tập đoàn C**<br>HĐ: PANDA-03 | GWS Resell<br>GWS Enterprise | Gốc: `120,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | ⚠️ Chưa gửi mail | ❌ Chưa in bản cứng | `--/--/----`<br>*(Chờ phát thư)* | 🟢 Bình thường | `--` | `[📧 Gửi Mail]`<br>`[🖨️ Đóng dấu]` |
| **Công ty D**<br>HĐ: ADFLEX-04 | GWS Resell<br>GWS Standard | Gốc: `20,000,000`<br>Phạt: `+ 2,500,000` | 📄 `[File ĐNTT.docx]` | ✉️ Đã chốt cước | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **10/08/2026**<br>🔴 Quá hạn 15 ngày | 🔴 Chuyển Pháp lý (X+15) | 🔒 Đã khóa Console | `[👁️ Chi tiết]` |
| **Công ty E**<br>HĐ: NEW-05 | AWS | Gốc: `30,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | `--` | `--` | `--/--/----`<br>*(Thiếu cấu hình)* | 🔴 Cảnh báo đỏ: Chưa cấu hình lãi & hạn nợ | `--` | `[⚙️ Cấu hình]` |

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

---

## 5. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Block / Column | Database Field (`DEBTS` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Tabs lọc nhanh** | `ngay_x`, `debt_status`, `suspend_status` | - **Chờ phát thư:** `DEBT_DELIVERIES.hardcopy_status = NONE / STAMPED / POSTED`<br>- **Trong hạn:** `debt_status = IN_TERM`<br>- **Đang quá hạn:** `debt_status = OVERDUE`<br>- **Chờ duyệt khóa:** `suspend_status = WAITING_SALES` |
| **Khách hàng / Mã HĐ** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP (hoặc qua bảng `contracts` local của ERP) |
| **Sản phẩm** | `DEBTS.product_name` | Hiển thị Tên sản phẩm được lưu trực tiếp tại bảng `DEBTS` của ERP sau khi đồng bộ |
| **Tiền phải thu (VNĐ)** | `total_principal` (gốc) + `total_penalty` (lãi) | - **Gốc:** lấy từ `DEBTS.total_principal`<br>- **Phạt:** lấy từ `DEBTS.total_penalty` (ERP tự tính và cộng dồn khi quá hạn) |
| **File ĐNTT** | `DEBTS.documentId` & `documents` | Query đường dẫn file tải về dựa trên bảng `documents` liên kết qua `DEBTS.documentId` |
| **Trạng thái Mail** | `DEBT_COLLECTIONS.email_status` & `email_sent_count` | Map `UNSENT` ➔ "Chưa gửi"; `SENT` ➔ "Đã gửi (Lần N)"; `LOCKED` ➔ "Đã chốt cước" |
| **Trạng thái Bản cứng** | `DEBT_DELIVERIES.hardcopy_status`, `tracking_code`, `delivered_at` | Map `NONE` ➔ "Chưa in"; `STAMPED` ➔ "Đã đóng dấu"; `POSTED` ➔ "Đã giao bưu điện" (kèm `tracking_code`); `DELIVERED` ➔ "Đã phát thành công" (kèm `delivered_at`) |
| **Mốc Ngày X** | `ngay_x` | Định dạng `dd/mm/yyyy`. Nếu null thì hiển thị `--/--/----` (Chờ phát thư) |
| **Alert & Luồng xử lý** | `debt_status`, `DEBT_LEGAL_ACTIONS.legal_status` | - `debt_status = PAID` ➔ "Đã tất toán"<br>- `DEBT_LEGAL_ACTIONS.legal_status = SUED` ➔ "Đang khởi kiện"<br>- Dựa trên `ngay_x` đếm ngược để nảy các Alert màu sắc |
| **Khóa DV** | `suspend_status` | Hiển thị trạng thái tương ứng: `NONE` ➔ `--`; `WAITING_SALES`/`WAITING_PROCUREMENT` ➔ `⏳ Chờ khóa`; `SUSPENDED` ➔ `🔒 Đã khóa` |
| **Mở rộng dòng (History)** | `DEBT_AUDIT_LOGS` | Query `SELECT * FROM DEBT_AUDIT_LOGS WHERE debt_id = ? ORDER BY created_at ASC` để render toàn bộ timeline |

---

## 6. Đặc tả cơ chế đồng bộ dữ liệu (CM ➔ ERP Data Mapping)

Khi Kế toán nhấn nút **"Đồng bộ dữ liệu CM"** hoặc khi hệ thống kích hoạt đồng bộ tự động, tiến trình Sync Engine sẽ gọi sang API/DB của CM để lấy danh sách DNTT đã hoàn thành và ánh xạ vào các bảng của ERP theo bảng đặc tả dưới đây:

### 6.1. Ánh xạ dữ liệu sang bảng `DEBTS` (ERP)

| Trường bên CM (Source) | Trường bên ERP (Target - `DEBTS`) | Logic ánh xạ & Chuyển đổi dữ liệu |
|---|---|---|
| `paymentRequest._id` | `dntt_cm_id` | Khóa chính của DNTT bên CM, dùng làm khóa đối chiếu để tránh đồng bộ trùng lặp. |
| `paymentRequest.productId` | `product_id` | ID sản phẩm liên kết từ CM. |
| `product.name` | `product_name` | Lấy tên sản phẩm bên CM (ví dụ: "AWS", "GCP", "GWS") lưu thẳng để filter nhanh. |
| `paymentRequest.usageDate` | `billing_cycle` | Chuyển đổi từ `Date` của CM thành chuỗi Kỳ cước định dạng `MM/YYYY` (ví dụ: `08/2026`). |
| `contract.customerId` | `customer_id` | ID của Khách hàng ký hợp đồng (lấy từ hợp đồng chính liên kết với DNTT). |
| `paymentRequest.contractIds[0]` | `contract_id` | ID của hợp đồng áp dụng (trong trường hợp DNTT liên kết nhiều hợp đồng, mặc định lấy hợp đồng chính). |
| `contract.sales_incharge` | `pic_id` | ID của Sales AM phụ trách hợp đồng để phân quyền màn hình đôn đốc nợ cho Sales. |
| Dữ liệu tính toán từ CM | `total_principal` | Lấy số tiền nợ gốc đã được CM chốt cước (Giá trị số thập phân). |
| *Mặc định khởi tạo* | `total_penalty` | Mặc định khởi tạo bằng `0` (Sẽ được tính lãi phạt quá hạn sau bởi Cronjob ERP). |
| *Mặc định khởi tạo* | `delivered_at` | Khởi tạo bằng `null` (Hành chính nhân sự sẽ cập nhật khi chuyển phát thành công). |
| *Mặc định khởi tạo* | `ngay_x` | Khởi tạo bằng `null` (Sẽ tự động tính bằng `delivered_at` + `payment_term` của hợp đồng). |
| *Mặc định khởi tạo* | `debt_status` | Mặc định khởi tạo là `WAITING_HARDCOPY` (Chờ phát bản cứng). |
| *Mặc định khởi tạo* | `suspend_status` | Mặc định khởi tạo là `NONE` (Chưa yêu cầu khóa dịch vụ). |
| *Mặc định khởi tạo* | `DEBT_LEGAL_ACTIONS.legal_status` | Mặc định khởi tạo là `NONE` (Chưa chuyển hồ sơ pháp lý/khởi kiện). |

### 6.2. Ánh xạ dữ liệu tài liệu sang bảng `documents` (ERP)

Mỗi file DNTT đính kèm bên CM sẽ được đồng bộ thông tin lưu trữ để ERP có thể tải về trực tiếp từ S3:

| Trường bên CM (Source - `document`) | Trường bên ERP (Target - `documents`) | Mô tả |
|---|---|---|
| `document._id` | `_id` | Đồng bộ ID tài liệu làm khóa ngoại liên kết với `DEBTS.documentId`. |
| `document.name` | `name` | Tên file DNTT gốc (ví dụ: `[AWS][Aws Service Billing][Công ty A][08-2026]`). |
| `document.extension` | `extension` | Đuôi mở rộng của file (mặc định là `.docx`). |
| `document.key` | `key` | Đường dẫn lưu trữ file trên S3 bucket (dùng để ERP sinh presigned URL tải file). |
| `document.userCreated` | `userCreated` | Lưu người tạo file bên CM. |

