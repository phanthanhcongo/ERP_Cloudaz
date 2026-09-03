# Mockup: Màn Hình Công Nợ (Sales AM)

Bảng điều khiển dành riêng cho từng Sales AM. Hệ thống tự động filter dựa trên `sale_owner` của Sales đang đăng nhập.

---

## 1. Khu vực Thống kê Nhanh (KPI Cards)

```text
[ 💰 Tổng nợ khách hàng của tôi: 150,000,000 đ ]   [ 🚨 Số khách hàng quá hạn: 5 ]   [ 🔒 Chờ duyệt khóa DV: 2 ]
```

## 2. Bộ lọc (Filter)

```text
[ Tabs: Tất cả | Trong hạn | Đang quá hạn | Chờ duyệt khóa DV ]
[ 🔍 Tìm tên khách hàng / Mã HĐ... ]
```

## 3. Bảng Danh sách Công nợ

| Khách hàng / Mã HĐ | Sản phẩm | Kỳ cước | Tổng Nợ (Gốc + Lãi) | Số ngày trễ | Đôn đốc (Sales AM) | Trạng thái (Alert) | Trạng thái Khóa DV | Thao tác |
|---|---|---|---|---|---|---|---|---|
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Standard | 08/2026 | `40,500,000` | 🔴 Trễ 4 ngày | 📞 Đã gọi lần 1<br>*(Khách hứa thứ 2 trả)* | 🟠 Chờ duyệt khóa (X+4) | `WAITING_SALES` | `[Duyệt Khóa]`<br>`[Từ chối]`<br>`[📞 Log Call]` |
| **Công ty XYZ**<br>HĐ: GWS-2590 | GWS Standard | 07/2026 | `54,000,000` | 🔴 Trễ 32 ngày | 📞 Đã gọi lần 2<br>*(Khách chây ỳ)* | 🔴 Chuyển Pháp lý | `SUSPENDED` | `[📞 Log Call]` |
| **Tập đoàn C**<br>HĐ: PANDA-03 | GWS Standard | 08/2026 | `120,000,000` | ⏳ Còn 2 ngày | ⚪ Chưa gọi | 🟢 Bình thường | `NONE` | `[📞 Log Call]` |

*Ghi chú về cột **Đôn đốc (Sales AM)**:*
- **Dòng chính (Bold):** Hiển thị số lần đã gọi (Ví dụ: `📞 Đã gọi lần 1` tương ứng số phần tử trong mảng `call_logs`).
- **Dòng phụ (In nghiêng, màu xám):** Hiển thị tóm tắt nội dung cuộc gọi gần đây nhất (Lấy từ note của phần tử cuối cùng trong mảng `call_logs`).
- **Khi hover/click:** Sẽ bung ra popup hiển thị toàn bộ lịch sử chi tiết các lần gọi trước (Xem chi tiết ở Mục 6).

---

## 4. Popup: Ghi log Đôn đốc thu nợ (Log Call)
Khi Sales thực hiện gọi điện (hoặc liên hệ bằng tay) đòi nợ khách hàng, họ sẽ dùng popup này để ghi nhận lịch sử đôn đốc và cập nhật tình trạng.

**Popup UI:**
- **Tên khách hàng:** Công ty TNHH B
- **Lần đôn đốc tiếp theo:** `Lần 2` *(Hệ thống tự tính bằng cách lấy độ dài mảng `call_logs` + 1)*
- **Ngày ghi nhận:** `15/09/2026 10:00 AM` (Mặc định giờ hệ thống)
- **Hình thức liên hệ:** `[ Dropdown: Gọi điện 📞 | Nhắn tin Zalo 💬 | Gặp trực tiếp 🤝 | Email ✉️ ]`
- **Tóm tắt nội dung cuộc gọi:** 
  `[ Textarea: Khách hứa thứ 2 tuần sau thanh toán... ]`
- `[ Bấm Lưu ]`

**Logic Backend khi Lưu:**
1. Đọc mảng `call_logs` hiện tại, lấy độ dài mảng (length) để tự động gán `call_index = length + 1` (Ví dụ: Đã có 1 log thì log tiếp theo là Lần 2).
2. Append (thêm mới) một object vào mảng `call_logs` trong bảng `DEBT_COLLECTIONS` — **đủ 5 khóa** theo `Database_Schema.md` mục *Đôn đốc & email*:
   ```json
   { "call_index": 2, "type": "ZALO", "note": "...",
     "created_by": "am.a@cloudaz.io", "created_at": "2026-09-18T14:20:00+07:00" }
   ```
   `call_index` và `created_at` do **backend tự gán**, không nhận từ client. `created_by` là email người ghi — cần cho tooltip *"Lần 2 (18/09/2026 — Sales A)"* ở mục 6.
3. Tạo 1 bản ghi log chi tiết trong bảng `debt_events` để làm bằng chứng lịch sử (Ví dụ: `Sales Nguyễn Văn A đã gọi đôn đốc lần N, nội dung: ...`).

---

## 5. Popup: Duyệt Yêu cầu Khóa Dịch vụ
Khi Sales bấm `[Duyệt Khóa]` hoặc `[Từ chối]` đối với khách hàng đang ở mốc X+4.

> **Yêu cầu duyệt khóa đến từ đâu?** Dòng có nút `[Duyệt Khóa]` / `[Từ chối]` chỉ xuất hiện khi `suspend_status = WAITING_SALES`, và trạng thái này **do cronjob sinh ra**, không phải Sales AM tự tạo:
> - **08:25 hàng ngày**, Go background job **`DebtSuspendRequestJob`** quét các khoản nợ thỏa đồng thời `sync_status = CONFIRMED`, `debt_status = OVERDUE`, `today >= ngay_x + suspend_milestone_days` *(đọc từ `debt_product_configs`, mặc định 4)*, `suspend_status = NONE`, `paid_at = null` → set `WAITING_SALES` + đẩy notification cho Sales AM phụ trách (Backlog DC-07 AC4).
> - **08:30** cron gửi email `SUSPEND_WARNING_X_PLUS_4` cho khách (CC Sales AM + Trưởng phòng Sales).
> - Sau khi Sales AM bấm `[Từ chối]`, cron **không tạo lại** yêu cầu trong cùng kỳ cước `billing_cycle` — tránh mỗi sáng lại hiện lại một yêu cầu đã bảo lãnh (DC-07 AC5).

**Popup UI (Từ chối khóa):**
- **Cảnh báo:** Bạn đang bảo lãnh cho khách hàng này tiếp tục nợ. Lý do sẽ được **gửi email cho Kế toán, Kế toán trưởng và Trưởng phòng Sales**, đồng thời hiển thị công khai trên Audit Trail toàn hệ thống.
- **Lý do bảo lãnh:** `[ Textarea — BẮT BUỘC, tối thiểu 20 ký tự ]`
- **Ngày khách cam kết thanh toán:** `[ DatePicker — bắt buộc, phải sau hôm nay ]`
  → lưu vào cột **`DEBTS.promised_payment_date`**. Khách hứa lại lần nữa thì ghi đè, lịch sử các lần hứa trước vẫn còn trong `debt_events`.
- `[ Xác nhận Từ chối ]` ➔ gọi `PATCH /api/v1/fin/debts/:id/suspend/reject`, trạng thái quay về `NONE`, ghi audit log + gửi email `SUSPEND_REJECTED`.

*Ghi chú:* Sau khi từ chối, cron X+4 **không tạo lại** yêu cầu trong cùng kỳ cước. Muốn khóa lại phải do Kế toán/KTT yêu cầu thủ công — lúc đó lý do bảo lãnh đã lưu là căn cứ đối chất.

**Popup UI (Duyệt khóa):**
- **Xác nhận:** Bạn chắc chắn muốn duyệt khóa dịch vụ của khách hàng này? Yêu cầu sẽ được đẩy sang Phòng Mua thực thi.
- `[ Xác nhận Khóa ]` ➔ Trạng thái chuyển thành `WAITING_PROCUREMENT`.

---

## 6. Xem Chi Tiết Lịch Sử Đôn Đốc (UI Hover/Click)

Để Sales AM xem lại toàn bộ lịch sử đôn đốc dạng mảng của một khách hàng trực tiếp trên Grid mà không cần chuyển trang.

**UX Flow:**
- Khi user **di chuột (hover)** vào cột `Đôn đốc (Sales AM)` hoặc click vào biểu tượng `[👁️ Lịch sử]` trên dòng tương ứng, hệ thống hiển thị một Tooltip/Popover danh sách:
  ```text
  ┌────────────────────────────────────────────────────────┐
  │ LỊCH SỬ ĐÔN ĐỐC - CÔNG TY TNHH B                       │
  ├────────────────────────────────────────────────────────┤
  │ 📞 Lần 1 (15/09/2026 - Sales A):                        │
  │ - Hình thức: Gọi điện thoại                            │
  │ - Nội dung: Gặp KTT, hứa thứ 2 tuần sau trả.            │
  ├────────────────────────────────────────────────────────┤
  │ 💬 Lần 2 (18/09/2026 - Sales A):                        │
  │ - Hình thức: Nhắn tin Zalo                             │
  │ - Nội dung: Khách báo sếp chưa duyệt chi, hẹn thêm 2 ngày.│
  └────────────────────────────────────────────────────────┘
  ```

---

## 7. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Element / Column | Database Field (`DEBTS` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Thẻ KPI Cards** | `DEBTS` (Tổng hợp) | - **Tổng nợ khách hàng của tôi:** SUM(`total_principal` + `total_penalty`) WHERE `sale_owner = current_user_email` AND `debt_status != PAID`. <br>- **Số khách hàng quá hạn:** COUNT(`id`) WHERE `sale_owner = current_user_email` AND `debt_status = OVERDUE`. <br>- **Chờ duyệt khóa DV:** COUNT(`id`) WHERE `sale_owner = current_user_email` AND `suspend_status = WAITING_SALES` |
| **Tabs lọc nhanh** | `sale_owner` & `debt_status` & `suspend_status` | Filter dòng theo `sale_owner = current_user_email` kết hợp các trạng thái nợ của `DEBTS` |
| **Khách hàng / Mã HĐ** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP |
| **Sản phẩm** | `DEBTS.product_name` | Hiển thị Tên sản phẩm được lưu trực tiếp tại bảng `DEBTS` của ERP sau khi đồng bộ |
| **Kỳ cước** | `DEBTS.billing_cycle` | Định dạng hiển thị `MM/YYYY` |
| **Tổng Nợ** | `total_principal` + `total_penalty` | Tổng nợ gốc + lãi phạt cộng dồn của bản ghi |
| **Số ngày trễ** | Derived từ `DEBTS.ngay_x` | Hiển thị `Trễ (current_date - ngay_x) ngày` nếu nợ đã quá hạn |
| **Đôn đốc (Sales AM)** | `DEBT_COLLECTIONS.call_logs` | - **Số lần:** bằng độ dài mảng `call_logs.length`. <br>- **Nội dung cuộc gần nhất:** Lấy field `note` của phần tử cuối cùng trong `call_logs` mảng JSONB |
| **Trạng thái Khóa DV** | `DEBTS.suspend_status` | Hiển thị `WAITING_SALES`, `SUSPENDED`, `NONE`... |
| **Popup Log Call (Submit)** | `DEBT_COLLECTIONS.call_logs` & `debt_events` | - Append object mới vào `DEBT_COLLECTIONS.call_logs`<br>- Insert 1 dòng audit log mới vào `debt_events` |
| **Popup Duyệt Khóa (Submit)** | `DEBTS.suspend_status` & `debt_events` | - **Duyệt:** `suspend_status = WAITING_PROCUREMENT`<br>- **Từ chối:** `suspend_status = NONE`<br>- Lưu lý do bảo lãnh vào `debt_events.description` |


