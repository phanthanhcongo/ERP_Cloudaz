# Mockup: Màn Hình Thực Thi Khóa Dịch Vụ (Phòng Mua - Procurement)

Giao diện chuyên trách cho Phòng Mua để thực hiện tác vụ Mở/Khóa Console trên Google Workspace dựa trên yêu cầu đã được duyệt từ Kế toán và Sales.

---

## 1. Bộ lọc (Filter)

**Tabs trạng thái nhanh:**
👉 `[Tất cả] | [Đang yêu cầu Khóa] | [Đang yêu cầu Mở khóa]`

```text
[ 🔍 Tìm tên khách hàng / Mã HĐ... ]
```

## 2. Bảng Danh sách Yêu cầu

Hệ thống chỉ hiển thị các khoản nợ có `suspend_status` nằm trong nhóm: `WAITING_PROCUREMENT`, `SUSPENDED`, `WAITING_UNSUSPEND`.

> **Hai loại yêu cầu vào màn hình này đến từ đâu:**
> - **Yêu cầu KHÓA** (`WAITING_PROCUREMENT`): do **Sales AM bấm duyệt** tại mốc X+4 → `PATCH /api/v1/fin/debts/:id/suspend/approve` (DC-07 AC2). Phòng Mua **không** thấy yêu cầu nào chưa qua duyệt của Sales — mọi API cố chuyển thẳng sang `WAITING_PROCUREMENT` mà chưa có approve đều bị trả `403 FIN_DEBT_SALES_APPROVAL_REQUIRED` (DC-07 AC3).
> - **Yêu cầu MỞ KHÓA** (`WAITING_UNSUSPEND`): **hệ thống tự sinh** khi Kế toán bấm Tất toán (`PATCH /api/v1/fin/debts/:id/settle`) trên khoản nợ đang `SUSPENDED` → tự gọi `PATCH /api/v1/fin/debts/:id/unsuspend/request` (DC-08 AC5). Không ai phải tạo tay.
>   *Lưu ý:* hệ thống **không tự chặn** yêu cầu mở khóa. Popup xác nhận hiển thị **lịch sử thanh toán của khách** để người thao tác tự quyết có yêu cầu đặt cọc hay không (DC-08 AC4, xem §3).

| Khách hàng / Hợp đồng | Sản phẩm | Tình trạng Nợ | Trạng thái Yêu cầu (`suspend_status`) | Hạn chót xử lý | Thao tác |
|---|---|---|---|---|---|
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Standard | Quá hạn 5 ngày | 🔴 **Yêu cầu KHÓA dịch vụ**<br>*(Sales Nguyễn Văn A đã duyệt)* | Hôm nay | `[Xác nhận Đã Khóa]` |
| **Công ty XYZ**<br>HĐ: GWS-2590 | GWS Standard | Đã tất toán | 🟢 **Yêu cầu MỞ KHÓA**<br>*(Kế toán đã xác nhận tiền vào)* | ASAP | `[Xác nhận Đã Mở]` |
| **Tập đoàn Adflex**<br>HĐ: ADFLEX-04 | GWS Standard | Quá hạn 20 ngày | ⚫ Đã bị khóa (SUSPENDED) | -- | `[Xem lịch sử]` |

---

## 3. Popup: Xác nhận thực thi (Khóa / Mở)
Vì hệ thống ERP không chọc API tự động khóa Google, nhân viên Phòng Mua phải mở tab mới (Google Admin Console) để thực hiện thao tác thủ công. Sau đó quay lại ERP để xác nhận.

**Popup UI (Xác nhận Khóa):**
- **Lưu ý:** Vui lòng thực hiện khóa (Suspend) dịch vụ GWS của khách hàng **Công ty TNHH B** trên Google Admin trước khi bấm xác nhận.
- **Hình ảnh bằng chứng (Tùy chọn):** `[ Nút tải ảnh chụp màn hình Google Admin lên ]`
- **Ghi chú thêm:** `[ Textarea ]`
- `[ Xác nhận hoàn tất Khóa ]` ➔ Trạng thái chuyển thành `SUSPENDED`. Dòng chữ cảnh báo gửi mail/thông báo sang cho Khách hàng & Sales.

**Popup UI (Xác nhận Mở):**

```text
┌────────────────────────────────────────────────────────────────┐
│ Xác nhận mở lại dịch vụ — Công ty XYZ (HĐ GWS-2590)            │
├────────────────────────────────────────────────────────────────┤
│ Vui lòng khôi phục (Restore) dịch vụ trên Google Admin trước   │
│ khi bấm xác nhận.                                              │
│                                                                │
│ ⚠️ LỊCH SỬ THANH TOÁN CỦA KHÁCH HÀNG                           │
│   • Số lần bị khóa dịch vụ:        3 lần (gần nhất 14/07/2026) │
│   • Số kỳ trả trễ:                 5 / 8 kỳ                    │
│   • Số ngày trễ trung bình:        12,4 ngày                   │
│   • Số lần hứa trả rồi không trả:  2 lần                       │
│   • Tổng nợ đang mở:               40.500.000 đ                │
│                                                                │
│ Ghi chú  [ Textarea — bắt buộc nếu khách có lịch sử xấu ]      │
│                                                                │
│              [ Hủy ]      [ Xác nhận hoàn tất Mở ]             │
└────────────────────────────────────────────────────────────────┘
```

Số liệu lấy từ `GET /api/v1/fin/customers/:id/payment-history` (`ERP_API.md` §7.5), tính trên **toàn bộ khoản nợ của khách hàng**, không riêng khoản đang mở.

**Hệ thống không tự chặn.** Luật cũ *"khóa ≥ 2 lần thì bắt buộc đặt cọc"* đã bỏ — ngưỡng 2 là con số tùy tiện, không xét khoảng cách thời gian giữa các lần khóa cũng không xét giá trị hợp đồng. Đây là quyết định thương mại, thuộc về Kế toán trưởng chứ không nên hardcode. Giao diện chỉ trình bày số liệu đủ để người thao tác quyết đúng.

`[ Xác nhận hoàn tất Mở ]` ➔ `suspend_status = UNSUSPENDED`, ghi `debt_events` kèm ghi chú, gửi `SUSPEND_RESULT` cho Kế toán / Sales AM / Legal.

---

## 4. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Element / Column | Database Field (`DEBTS` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Tabs lọc nhanh** | `suspend_status` | - **Đang yêu cầu Khóa:** `suspend_status = WAITING_PROCUREMENT`<br>- **Đang yêu cầu Mở khóa:** `suspend_status = WAITING_UNSUSPEND` |
| **Khách hàng / Hợp đồng** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP (đã đồng bộ) |
| **Sản phẩm** | `DEBTS.product_name` | Hiển thị Tên gói dịch vụ lưu sẵn trong ERP |
| **Tình trạng Nợ** | `debt_status` | Hiển thị "Đã tất toán" hoặc "Quá hạn N ngày" (tính từ `ngay_x`) |
| **Trạng thái Yêu cầu** | `suspend_status` | Hiển thị `WAITING_PROCUREMENT` (Yêu cầu khóa), `WAITING_UNSUSPEND` (Yêu cầu mở), `SUSPENDED` (Đã khóa) |
| **Hạn chót xử lý** | Derived từ `debt_events.created_at` của sự kiện chuyển sang trạng thái chờ | Hạn chót = thời điểm chuyển `WAITING_PROCUREMENT` / `WAITING_UNSUSPEND` + 24 giờ. Quá hạn thì cảnh báo đỏ.<br>*(Không dùng `DEBTS.updated_at` vì trường này thay đổi mỗi lần job tính lãi chạy — sẽ luôn là hôm nay.)* |
| **Popup Xác nhận Khóa (Submit)** | `DEBTS.suspend_status` & `debt_events` | - Cập nhật `suspend_status = SUSPENDED`<br>- Tạo 1 bản ghi `debt_events` chứa ảnh đính kèm (URL lưu vào `debt_events.file_url`) và lý do |
| **Popup Xác nhận Mở (Submit)** | `DEBTS.suspend_status` & `debt_events` | - Cập nhật `suspend_status = UNSUSPENDED`<br>- Tạo 1 bản ghi `debt_events` xác nhận mở khóa |

