# Mockup: Màn Hình Executive Dashboard (Ban Quản Lý / Kế Toán Trưởng)

Màn hình tổng quan chiến lược (High-level) để Ban giám đốc và KTT nắm bắt nhanh tình hình sức khỏe công nợ của toàn công ty mà không cần lặn lội vào các tab chi tiết.

---

## 1. Thống Kê Tổng Quan (KPI Dashboard)

```text
Thời gian: [ Tháng này ▼ ]   Sản phẩm: [ Tất cả ▼ ]
```

**Các thẻ chỉ số (Cards):**
- 💰 **Tổng Nợ Cần Thu:** `1,250,000,000 đ`
- 🔴 **Tổng Nợ Quá Hạn:** `350,000,000 đ` (Chiếm 28%)
- 📈 **Tổng Lãi Phạt Dự Kiến:** `15,400,000 đ`
- 🔒 **Khách Hàng Đang Bị Khóa DV:** `12 Công ty`
- ⚖️ **Khách Hàng Đang Bị Kiện / Nợ Xấu:** `3 Công ty` (Trị giá: `120Tr`)

---

## 2. Bảng Xếp Hạng (Top 10 Nợ Quá Hạn Cao Nhất)

Ban quản lý cần biết ai đang nợ nhiều nhất để "gõ đầu" Sales AM tương ứng.

| Xếp hạng | Khách hàng | Tổng Nợ | Số ngày trễ | Phụ trách (Sales AM) | Trạng thái hiện tại | Lịch sử gần nhất |
|---|---|---|---|---|---|---|
| #1 | Tập đoàn D | 120,000,000 | 45 ngày | Nguyễn Văn A | ⚖️ Chuẩn bị khởi kiện | Pháp lý đã upload Công văn (2 ngày trước) |
| #2 | Công ty XYZ | 80,000,000 | 20 ngày | Trần Thị B | ⚫ Đã khóa Dịch vụ | Sales B log: "Giám đốc đi vắng, tuần sau trả" |
| #3 | ... | ... | ... | ... | ... | ... |

---

## 3. Biểu đồ Phân bổ Nợ (Charts - Placeholder)

```text
[ Biểu đồ Tròn: Tỷ trọng Nợ trong hạn (70%) vs Quá hạn (30%) ]

[ Biểu đồ Cột: Dòng tiền thu hồi theo các tuần trong tháng ]
```

---

## 4. Nhật Ký Toàn Hệ Thống (Global Audit Trail)
Khu vực này giống như một "Bảng tin Facebook", liệt kê tất cả mọi hành động đòi nợ/khóa dịch vụ/chuyển pháp lý diễn ra theo thời gian thực (Real-time). Dữ liệu lấy từ bảng `DEBT_AUDIT_LOGS`.

**Timeline UI:**
- **[Hôm nay - 14:05] 🔴 Phòng Mua (Trần C)**: Đã thực thi Khóa dịch vụ Google đối với HĐ `EPIC-02` (Công ty TNHH B).
- **[Hôm nay - 09:30] 🟠 Sales AM (Nguyễn A)**: Ghi chú đôn đốc nợ cho HĐ `GWS-2590`: *"Khách hẹn thứ 6 tuần này chuyển khoản"*.
- **[Hôm qua - 16:45] 🟢 Kế toán (Lê D)**: Đã tất toán thành công 40,500,000 đ cho HĐ `GWS-1122`. Yêu cầu mở khóa DV đã được gửi cho Phòng Mua.
- **[Hôm qua - 10:00] ✉️ Hệ thống (Bot)**: Đã tự động gửi 15 Email nhắc nợ X-2 cho các khách hàng sắp đến hạn.

---

## 5. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Element / Block | Database Field (`DEBTS`, `DEBT_AUDIT_LOGS` & related) | Mô tả & Cách tính toán hiển thị |
|---|---|---|
| **Tổng Nợ Cần Thu** | `DEBTS` (Tổng hợp) | SUM(`total_principal` + `total_penalty`) WHERE `debt_status != PAID` |
| **Tổng Nợ Quá Hạn** | `DEBTS` (Tổng hợp) | SUM(`total_principal` + `total_penalty`) WHERE `debt_status = OVERDUE` |
| **Tổng Lãi Phạt Dự Kiến** | `DEBTS` (Tổng hợp) | SUM(`total_penalty`) WHERE `debt_status != PAID` |
| **Khách Hàng Bị Khóa DV** | `DEBTS` (Tổng hợp) | COUNT(`id`) WHERE `suspend_status = SUSPENDED` |
| **Khách Hàng Đang Bị Kiện** | `DEBT_LEGAL_ACTIONS` (Tổng hợp) | COUNT(`id`) WHERE `legal_status = SUED` |
| **Bảng xếp hạng Top 10** | `DEBTS` & `DEBT_LEGAL_ACTIONS` | Query `SELECT * FROM DEBTS WHERE debt_status = OVERDUE ORDER BY (total_principal + total_penalty) DESC LIMIT 10`. <br>- Trạng thái hiện tại lấy từ `debt_status` và `DEBT_LEGAL_ACTIONS.legal_status`. <br>- Lịch sử gần nhất: Query log mới nhất từ `DEBT_AUDIT_LOGS` |
| **Nhật ký toàn hệ thống** | `DEBT_AUDIT_LOGS` | Query `SELECT * FROM DEBT_AUDIT_LOGS ORDER BY created_at DESC LIMIT 50` |

