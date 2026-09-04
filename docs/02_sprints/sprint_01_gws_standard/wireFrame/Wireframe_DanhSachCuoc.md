# Mockup: Màn Hình Danh Sách Cước & ĐNTT (Kế toán)

Bảng này được thiết kế dựa trên nguyên tắc: **Giữ nguyên dữ liệu gốc từ CM** + **Bổ sung cột Tracking của luồng ERP**.

---

## 1. Khu vực Bộ lọc (Filter & Global Actions)

**Tabs trạng thái nhanh:**
👉 `[Chờ xác nhận 🔵] | [Tất cả] | [Đang chờ phát thư] | [Trong hạn] | [Đang quá hạn] | [Chờ duyệt khóa DV] | [Đã loại]`

> **Tab "Chờ xác nhận" (`sync_status = PENDING_REVIEW`)** là cổng vào của toàn bộ luồng. Vì CM không có trường trạng thái để ERP lọc "ĐNTT đã hoàn thành", tiến trình sync kéo về **tất cả** payment-request của kỳ cước — có thể lẫn bản nháp, trùng, sai số liệu. Kế toán phải rà và xác nhận thì bản ghi mới đi tiếp.
> - Chọn 1+ dòng → `[✅ Xác nhận đưa vào luồng]` → `sync_status = CONFIRMED`
> - Chọn 1+ dòng → `[🚫 Loại khỏi luồng]` (bắt buộc nhập lý do) → `sync_status = EXCLUDED`, hiện ở tab "Đã loại"
> - Các tab nghiệp vụ còn lại **chỉ hiển thị bản ghi `CONFIRMED`**. Bản ghi chưa xác nhận không được đóng dấu ĐNTT, không tính Ngày X, không gửi mail, không tính lãi (`422 FIN_DEBT_NOT_CONFIRMED`).

```text
[ Từ ngày (dd/mm/yyyy) 📅 ]   [ Đến ngày (dd/mm/yyyy) 📅 ]   [ Dịch vụ: Tất cả ▼ ]   [ Hợp đồng: Tất cả ▼ ]

[ 🔍 Tìm Kiếm ]      [ 🔄 Đồng bộ dữ liệu CM ]      [ ⬇️ Tải xuống tất cả ]
```

## 2. Phân tích Nguồn dữ liệu & Các Trạng thái (Trạng thái Cột)

Dưới đây là định nghĩa rõ ràng về nguồn gốc dữ liệu (được đồng bộ từ hệ thống CM về DB của ERP), cột nào được quản lý trực tiếp bởi ERP, và các trạng thái (status) có thể có:

| Tên Cột | Nguồn Dữ Liệu | Các Trạng thái (Statuses) |
|---|---|---|
| **Khách hàng / Hợp đồng** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS`, `contracts`) | Dữ liệu Text từ DB ERP, không có trạng thái. |
| **Sản phẩm** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS.product_name`) | Dữ liệu Text từ DB ERP, không có trạng thái. |
| **Tiền phải thu (VNĐ)** | ⚙️ **Đồng bộ gốc từ CM về DB ERP** (`DEBTS.total_principal`) + **Tính lãi trên ERP** (`DEBTS.total_penalty`) | ERP tự động cộng dồn tiền phạt vào tổng tiền mỗi khi chạy Cronjob tính lãi (sau Ngày X+1). |
| **File ĐNTT (Từ CM)** | ⚙️ **Đồng bộ từ CM về DB ERP** (`DEBTS.document_id` liên kết với `documents`) | File `.docx` sinh từ CM đã đồng bộ sang bảng `documents` trên ERP. |
| **Trạng thái Mail (ERP)** | ⚙️ **Suy ra tại chỗ, không lưu enum** | Hiển thị `<nhãn giai đoạn> (Lần N)` — nhãn lấy từ `document_templates.stage_label` của template gửi gần nhất. VD: `Nhắc trước hạn (Lần 2)`, `Nhắc quá hạn (Lần 5)`, `Cảnh báo khóa DV (Lần 7)`.<br>Chưa gửi lần nào → `Chưa gửi`. Có mail lỗi hết lượt thử → `⚠️ Gửi lỗi` kèm tooltip lý do và nút gửi lại.<br>*(Rule tối đa 1 mail/ngày. Lịch sử đầy đủ ở dòng mở rộng.)* |
| **Trạng thái Bản cứng** | ⚙️ **Tạo mới bởi ERP** | Flow của Kế toán & HCNS: `Chưa in bản cứng` ➔ `Đã đóng dấu` ➔ `Đã giao bưu điện` (kèm mã vận đơn) ➔ `Đã phát thành công` (kèm ngày). |
| **Mốc Ngày X** | ⚙️ **Tính toán bởi ERP** | Trạng thái thời gian: `Thiếu cấu hình` (Kế toán chưa nhập lãi suất/hạn nợ) ➔ `Chờ phát thư` (chưa có Ngày X) ➔ `Trong hạn` (còn N ngày) ➔ `Quá hạn N ngày`. |
| **Alert & Luồng xử lý** | ⚙️ **Tạo mới bởi ERP** | Trạng thái cảnh báo: `🔴 Cảnh báo đỏ (Chưa cấu hình)` ➔ `🟢 Bình thường` (đang nhắc nợ tự động) ➔ `🟠 Chờ Sales duyệt (X+4)` ➔ `🔴 Chuyển Pháp lý (X+15)` ➔ `⚫ Đã khóa Dịch vụ` ➔ `💲 Đã tất toán`. |
| **Trạng thái Khóa DV (Phòng Mua)** | ⚙️ **Tạo mới bởi ERP** | Trạng thái khóa dịch vụ: `--` (Chưa yêu cầu) ➔ `⏳ Chờ Phòng Mua khóa` (Sau khi Sales AM duyệt) ➔ `🔒 Đã khóa Console Google` (Phòng Mua xác nhận). |

---

## 3. Bảng điều khiển Công nợ (Data Grid)

| Khách hàng / Hợp đồng | Sản phẩm | Tiền phải thu (VNĐ) | File ĐNTT (Từ CM) | Trạng thái Mail (ERP) | Trạng thái Bản cứng (HCNS) | Mốc Ngày X (Hạn chót) | Alert & Luồng xử lý | Khóa DV (Phòng Mua) | Thao tác |
|---|---|---|---|---|---|---|---|---|---|
| **Công ty CP A**<br>HĐ: SYSCORTEX-01 | GWS Standard | Gốc: `15,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | Nhắc trước hạn (Lần 3) | ✅ Đã đóng dấu<br>🚚 Đã giao bưu điện<br>`Mã vận đơn: VN12345` | **15/09/2026**<br>⏳ Còn 5 ngày | 🟢 Đang nhắc nợ | `--` | `[⬇️ Tải file]`<br>`[💲 Tất toán]` |
| **Công ty TNHH B**<br>HĐ: EPIC-02 | GWS Standard | Gốc: `40,000,000`<br>Phạt: `+ 500,000` | 📄 `[File ĐNTT.docx]` | Nhắc quá hạn (Lần 5) | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **01/09/2026**<br>🔴 Quá hạn 4 ngày | 🟠 Chờ Sales duyệt khóa (X+4) | ⏳ Chờ Phòng Mua khóa | `[👁️ Chi tiết]` |
| **Tập đoàn C**<br>HĐ: PANDA-03 | GWS Standard | Gốc: `120,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | Chưa gửi | ❌ Chưa in bản cứng | `--/--/----`<br>*(Chờ phát thư)* | 🟢 Bình thường | `--` | `[🖨️ Đóng dấu]`<br>`[📧 Gửi Mail]` *(disabled)* |
| **Công ty D**<br>HĐ: ADFLEX-04 | GWS Standard | Gốc: `20,000,000`<br>Phạt: `+ 2,500,000` | 📄 `[File ĐNTT.docx]` | ⚠️ Gửi lỗi<br>*(hover xem lý do)* | ✅ Đã đóng dấu<br>✅ Đã phát thành công | **10/08/2026**<br>🔴 Quá hạn 15 ngày | 🔴 Chuyển Pháp lý (X+15) | 🔒 Đã khóa Console | `[👁️ Chi tiết]`<br>`[🔁 Gửi lại]` |
| **Công ty E**<br>HĐ: NEW-05 | GWS Standard | Gốc: `30,000,000`<br>Phạt: `0` | 📄 `[File ĐNTT.docx]` | Chưa gửi | `--` | `--/--/----`<br>*(Thiếu cấu hình)* | 🔴 Cảnh báo đỏ: Chưa cấu hình lãi & hạn nợ | `--` | `[⚙️ Cấu hình]` |

> **Lưu ý về cột "Sản phẩm":** Giá trị hiển thị là `DEBTS.product_name` — **tên dịch vụ do CM trả về** (`product.name`). **Sprint 1 chỉ có duy nhất `GWS Standard`**, nên mọi dòng mẫu đều ghi giá trị này. Sprint sau bổ sung `GWS Flex`, `AWS`, `GCP` bằng cách thêm dòng vào `debt_product_configs`.

---

## 4. Chế độ Mở rộng dòng (Expandable Row)
*(Khi user bấm vào 1 dòng bất kỳ, bảng sổ xuống chi tiết để tránh làm rối màn hình chính. Dữ liệu từ `GET /api/v1/fin/debts/:id/events`)*

```text
▼ Công ty TNHH B | HĐ: EPIC-02

[ Dữ liệu gốc từ CM ]
- ID ĐNTT bên CM (dntt_cm_id): 66f1a2b3c4d5e6f7
- Kỳ cước: 08/2026
- Ngày đồng bộ về ERP: 19/08/2026 14:36

[ Lịch sử Tracking trên ERP — bảng debt_events ]
- 19/08/2026 14:36: [Kế toán] Đồng bộ ĐNTT từ CM. Trạng thái: Chờ xác nhận.
- 19/08/2026 15:02: [Kế toán] ✅ Xác nhận đưa vào luồng (sync_status = CONFIRMED).
- 20/08/2026 09:15: [Kế toán] Đã đóng dấu đỏ bản cứng ĐNTT.
- 21/08/2026 09:00: [HCNS] Đã giao bưu điện - Mã vận đơn VN12345.
- 24/08/2026 14:00: [HCNS] Xác nhận phát thành công - Người ký nhận: Nguyễn Thị C.
- 24/08/2026 14:00: [Hệ thống] 📅 Chốt Ngày X = 31/08/2026 (24/08 + 7 ngày ân hạn).
- 25/08–28/08 08:30: [Hệ thống] Gửi email "Đã giao hồ sơ" (Lần 1–4).
- 29/08/2026 08:30: [Hệ thống] Gửi email nhắc trước hạn X-2.
- 01/09/2026 00:05: [Hệ thống] ⏰ Chuyển sang Quá hạn. Bắt đầu tính lãi (ngày thứ 1).
- 01/09/2026 08:30: [Hệ thống] Gửi email nhắc quá hạn X+1.
- 04/09/2026 08:25: [Hệ thống] 🟠 Sinh yêu cầu duyệt khóa DV (mốc X+4) - Thông báo Sales AM.
- 04/09/2026 08:30: [Hệ thống] ⚠️ Gửi email cảnh báo khóa DV - CC Sales AM, Trưởng phòng Sales.
- 05/09/2026 14:00: [Sales AM Nguyễn Văn A] Duyệt khóa dịch vụ.
- 05/09/2026 14:00: [Hệ thống] 🛑 Đẩy yêu cầu khóa sang Phòng Mua.
- 15/09/2026 08:30: [Hệ thống] 🚨 Mốc X+15 - Chuyển hồ sơ sang Pháp lý.
```

> Mỗi dòng là một bản ghi `debt_events` (`created_at` · `action_by` · `description`), `action_type` quyết định icon hiển thị — **danh mục và icon tương ứng tại `Database_Schema.md` §13a *Danh mục action_type***. Dòng nào có `file_url` thì hiện thêm link tải ảnh minh chứng.


## 5. Popup: Xác nhận / Loại khỏi luồng (BD-09 AC1b)

Thao tác **hàng loạt** từ tab "Chờ xác nhận". Chọn nhiều dòng bằng checkbox rồi bấm nút trên thanh thao tác.

**5.1 — `[✅ Xác nhận đưa vào luồng]`**
```text
┌──────────────────────────────────────────────────────┐
│ Xác nhận đưa 3 khoản nợ vào luồng công nợ?           │
├──────────────────────────────────────────────────────┤
│ • Công ty CP A — SYSCORTEX-01 — 15.000.000 đ        │
│ • Công ty TNHH B — EPIC-02 — 40.000.000 đ           │
│ • Tập đoàn C — PANDA-03 — 120.000.000 đ             │
│                                                      │
│ Sau khi xác nhận, các khoản nợ này sẽ được đóng dấu, │
│ tính Ngày X, gửi email nhắc nợ và tính lãi tự động.  │
│                                                      │
│              [ Hủy ]    [ Xác nhận ]                 │
└──────────────────────────────────────────────────────┘
```
→ `PATCH /api/v1/fin/debts/sync-status` với `{ "debt_ids": [...], "sync_status": "CONFIRMED" }`

**5.2 — `[🚫 Loại khỏi luồng]`**
- **Cảnh báo:** Các khoản nợ bị loại sẽ **không** được đóng dấu, không tính Ngày X, không gửi email, không tính lãi. Vẫn giữ trong hệ thống để đối chiếu với CM.
- **Lý do loại:** `[ Textarea — BẮT BUỘC ]` *(gợi ý: bản nháp / trùng / sai số liệu)*
- `[ Xác nhận Loại ]` → `PATCH /api/v1/fin/debts/sync-status` với `sync_status = "EXCLUDED"` + `reason`

**Ràng buộc:** chỉ chuyển được từ `PENDING_REVIEW`. Bản ghi đã `CONFIRMED` mà muốn loại → `409 FIN_DEBT_INVALID_TRANSITION`, vì có thể đã gửi thư cho khách rồi.

---

## 6. Popup: Cấu hình hạn thanh toán & lãi phạt (BD-09 AC8)

Khi bấm `[⚙️ Cấu hình]` ở dòng đang báo *"Thiếu cấu hình"*.

**Popup UI:**
- **Khách hàng / HĐ:** Công ty E — NEW-05 *(chỉ đọc)*
- **Số ngày ân hạn (`payment_term_days`):** `[ Input số — 1 đến 90 ]`
  *Ghi chú dưới ô: "Ngày X = ngày khách nhận bản cứng + số ngày này"*
- **Lãi phạt chậm trả (`penalty_rate`):** `[ Input số ] %/ngày`
  *Ghi chú: "Nhập theo đúng điều khoản phạt của hợp đồng đã ký"*
- `[ Lưu cấu hình ]`

**Hai lưu ý quan trọng cho Frontend:**

1. **Popup này gọi 2 endpoint khác nhau**, vì 2 tham số nằm ở 2 bảng:
   - `payment_term_days` → `PATCH /api/v1/fin/contracts/:contractId` *(lưu ở `contracts`, dùng chung cho mọi kỳ cước của hợp đồng)*
   - `penalty_rate` → `PATCH /api/v1/fin/debts/:id/config` *(lưu ở `debts`, riêng từng khoản nợ)*

   Gọi tuần tự; nếu lời gọi thứ hai lỗi thì báo rõ trường nào chưa lưu được, **không** rollback lời gọi đầu.

2. **Đơn vị `penalty_rate`:** người dùng nhập **phần trăm** (`0.05`), API nhận **tỉ lệ thập phân** (`0.0005`). Frontend **chia 100** trước khi gửi và **nhân 100** khi hiển thị. Nhầm chỗ này là sai 100 lần tiền phạt.

**Cảnh báo mềm khi vượt 1%/ngày** — không chặn lưu:
```text
⚠️ Bạn đang nhập 5%/ngày — cao bất thường.
   Vui lòng kiểm tra lại điều khoản phạt trong hợp đồng.
              [ Quay lại sửa ]    [ Vẫn lưu ]
```
Hệ thống **không giới hạn trần** vì mức phạt là thỏa thuận thương mại; chỉ chặn giá trị ≤ 0.

---

## 7. Popup: Chuyển phát bản cứng (DC-03 AC1–AC3)

Ba bước, ba popup. Bước 1 do Kế toán, bước 2–3 do HCNS (xem §4 của `UI_Wireframes.md`).

**7.1 — `[🖨️ Đã đóng dấu]`** *(Kế toán)*
- Xác nhận đã in bản cứng ĐNTT và trình ký đóng dấu đỏ.
- **Ghi chú:** `[ Textarea — tùy chọn ]`
- `[ Xác nhận ]` → `PATCH /api/v1/fin/debts/:id/delivery/stamp`
- Sau khi lưu: gửi thông báo cho HCNS sang nhận thư đi gửi bưu điện.

**7.2 — `[🚚 Đã gửi bưu điện]`** *(HCNS)*
- **Mã vận đơn (`tracking_code`):** `[ Input — BẮT BUỘC ]`
  *Ghi chú: "Đây là bằng chứng pháp lý trước tòa, nhập đúng mã trên biên nhận"*
- **Ngày gửi (`posted_at`):** `[ DatePicker — mặc định hôm nay ]`
- `[ Xác nhận ]` → `PATCH /api/v1/fin/debts/:id/delivery/post`
- Thiếu mã vận đơn → `400`, không cho lưu.

**7.3 — `[✅ Xác nhận đã phát]`** *(HCNS)* — **popup quan trọng nhất của cả luồng**

```text
┌───────────────────────────────────────────────────────────┐
│ Xác nhận khách đã nhận bản cứng ĐNTT                      │
├───────────────────────────────────────────────────────────┤
│ Khách hàng:  Công ty TNHH B — HĐ EPIC-02   (chỉ đọc)     │
│ Mã vận đơn:  VN12345                        (chỉ đọc)     │
│                                                           │
│ Ngày khách nhận (delivered_at) *  [ 30/08/2026  📅 ]     │
│ Người ký nhận (receiver_name)  *  [ Nguyễn Thị C     ]   │
│ Ảnh biên nhận bưu điện            [ 📎 Tải ảnh lên   ]   │
│                                                           │
│ ⚠️ Hệ thống sẽ chốt Ngày X = 30/08/2026 + 7 ngày         │
│    = 06/09/2026. Sau khi lưu KHÔNG sửa lại được.          │
│                                                           │
│                    [ Hủy ]    [ Xác nhận đã phát ]        │
└───────────────────────────────────────────────────────────┘
```

→ `PATCH /api/v1/fin/debts/:id/delivery/deliver`

**Vì sao popup này quan trọng nhất:**
- `delivered_at` **chốt Ngày X** cho toàn bộ chuỗi — sai một ngày là lệch toàn bộ mốc X+4, X+15, X+30 và số tiền lãi phạt.
- `receiver_name` được **in thẳng vào email gửi khách** (biến `[receiver_name]` trong `REMINDER_DELIVERED` và `REMINDER_X_MINUS_2`).
- Popup **hiển thị trước Ngày X sẽ được chốt** để HCNS nhìn thấy hệ quả trước khi bấm, thay vì bấm xong mới biết.

**Ràng buộc:**
- `delivered_at` không được ở tương lai.
- Chưa nhập `payment_term_days` ở hợp đồng → `422 FIN_DEBT_MISSING_CONFIG`, popup báo *"Chưa cấu hình số ngày ân hạn cho hợp đồng này"* kèm link mở popup Cấu hình (§6).
- Sau khi lưu: `debt_status = IN_TERM`, nút `[📧 Gửi Mail]` được mở khóa.

---

## 8. Màn hình con: Chi tiết Khách hàng & Người liên hệ (BD-09 AC9)

Mở bằng cách bấm vào **tên khách hàng** trên grid. Đây là nơi Kế toán nhập các thông tin CM không có.

### 8.1 Khu vực Thông tin pháp lý

| Trường | Nguồn | Ghi chú |
|---|---|---|
| Tên khách hàng | 🔄 Sync CM | Chỉ đọc |
| Địa chỉ (`address`) | ⚠️ CM gợi ý | Kế toán sửa và xác nhận |
| Người đại diện PL (`rep_name`) | ✍️ Nhập tay | **Bắt buộc trước khi Pháp lý soạn công văn** |
| Địa chỉ người đại diện (`rep_address`) | ✍️ Nhập tay | |
| Mã KH viết tắt (`customer_code`) | ✍️ Nhập tay | Dùng sinh số công văn. **Unique toàn hệ thống** |

→ `PATCH /api/v1/fin/customers/:id`

> Thiếu `rep_name` / `rep_address` / `customer_code` thì Pháp lý bấm "Soạn Công văn" sẽ nhận `422 FIN_DEBT_MISSING_LEGAL_INFO`.

### 8.2 Khu vực Người liên hệ nhận thư

**Đây là dữ liệu bắt buộc — thiếu là hệ thống không gửi được email nào cho khách.**

```text
┌────────────────────────────────────────────────────────────────────────┐
│ Người liên hệ nhận thư                          [ + Thêm liên hệ ]     │
├──────┬───────────────┬─────────────────┬────────────┬──────┬──────────┤
│ Vai  │ Họ tên        │ Email           │ Chức vụ    │ Chính│ Thao tác │
├──────┼───────────────┼─────────────────┼────────────┼──────┼──────────┤
│ TO   │ Trần Thị B    │ ke***@epic.vn   │ Kế toán TP │  ⭐  │ ✏️  🚫   │
│ CC   │ Lê Văn C      │ gd***@epic.vn   │ Giám đốc   │      │ ✏️  🚫   │
│ CC   │ Phạm Thị D    │ ns***@epic.vn   │ Nhân sự    │      │ ✏️  🚫   │
└──────┴───────────────┴─────────────────┴────────────┴──────┴──────────┘
                                              [ 👁️ Hiện đầy đủ email ]
```

- **Email hiển thị dạng che** (`ke***@epic.vn`). Bấm `[👁️ Hiện đầy đủ]` mới hiện nguyên, và **mỗi lần bấm đều ghi audit** (`NFR_Sprint1.md` §4).
- Nút 🚫 là **tắt** (`is_active = false`), **không phải xóa** — giữ vết đã từng gửi thư cho ai làm bằng chứng pháp lý.

**Popup Thêm / Sửa liên hệ:**
- **Họ tên (`contact_name`):** `[ Input — bắt buộc ]`
- **Email (`email`):** `[ Input — bắt buộc, validate định dạng ]`
- **Điện thoại (`phone`):** `[ Input ]`
- **Chức vụ (`position`):** `[ Input ]`
- **Vai trò nhận thư (`recipient_role`):** `( ) TO — người nhận chính   ( ) CC — nhận bản sao`
- **☐ Đặt làm đầu mối chính (`is_primary`)**
- `[ Lưu ]` → `POST /api/v1/fin/customers/:id/contacts` hoặc `PATCH /api/v1/fin/customer-contacts/:id`

**Ba quy tắc Frontend phải xử:**

1. **Mỗi khách đúng 1 đầu mối chính.** Tick `is_primary` cho người này thì hệ thống tự bỏ tick của người kia — hiện thông báo *"Đã chuyển đầu mối chính sang Trần Thị B"*, không báo lỗi.
2. **Email không trùng trong cùng khách hàng** → `409 FIN_DEBT_DUPLICATE_EMAIL`, báo *"Email này đã tồn tại"*.
3. **Không cho tắt contact `TO` cuối cùng** khi khách còn khoản nợ đang chạy → `422 FIN_DEBT_LAST_TO_CONTACT`, báo *"Đây là người nhận chính duy nhất. Thêm người nhận TO khác trước khi tắt."*

**Cảnh báo khi chưa có contact TO:**
```text
🔴 Khách hàng này chưa có người nhận thư (TO).
   Hệ thống sẽ KHÔNG gửi được email nhắc nợ nào.
   [ + Thêm liên hệ ngay ]
```
Cảnh báo này hiện cả trên grid chính ở cột **Alert & Luồng xử lý** (`has_contact = false`).

---

## 9. Popup: Tất toán (Xác nhận thanh toán)

Khi Kế toán bấm `[💲 Tất toán]`. Đây là **bước đóng hồ sơ duy nhất** của toàn quy trình (Backlog DC-05 AC4).

**Popup UI:**
- **Khách hàng / HĐ:** Công ty TNHH B — EPIC-02 *(chỉ đọc)*
- **Tổng phải thu:** Gốc `40,000,000` + Lãi `500,000` = **`40,500,000`** *(chỉ đọc)*
- **Ngày tiền về (`paid_at`):** `[ DatePicker — mặc định hôm nay, KHÔNG cho chọn ngày tương lai ]`
- **Số tiền thực thu (`paid_amount`):** `[ Input số ]`
- **Ảnh UNC / minh chứng:** `[ Nút tải ảnh lên ]` *(tùy chọn)*
- **Ghi chú:** `[ Textarea — BẮT BUỘC nếu số tiền thực thu < tổng phải thu ]`
- `[ Xác nhận Tất toán ]` → gọi `PATCH /api/v1/fin/debts/:id/settle`

**Hệ quả sau khi lưu:**
1. `debt_status = PAID`, cột **Alert & Luồng xử lý** chuyển `💲 Đã tất toán`.
2. **Dừng tính lãi** — cron `calculate-penalty` bỏ qua bản ghi này từ hôm sau.
3. **Dừng nhắc nợ** — mọi cron gửi mail bỏ qua bản ghi này.
4. **Nếu đang `SUSPENDED`** → hệ thống tự chuyển `suspend_status = WAITING_UNSUSPEND`, đẩy yêu cầu mở khóa sang màn hình Phòng Mua (Backlog DC-08 AC5).

---

## 9b. Tab "Hộp thư chờ gửi" (DC-04 AC10)

**Hệ thống không tự gửi email cho khách.** Job 08:30 chỉ soạn nháp; Kế toán vào tab này rà rồi bấm gửi.

> **Tab này lọc cứng theo quyền, không theo bộ lọc trên màn hình.** Có `debt:send_email` *(Kế toán)* → chỉ thấy thư nhắc nợ. Có `debt:legal` *(Pháp lý)* → chỉ thấy thư công văn (xem `Wireframe_PhapLy.md` mục *Hộp thư chờ gửi của Pháp lý*). Có cả hai → thấy cả hai, phân biệt bằng chip lọc.
>
> Badge đếm cũng theo phạm vi đã lọc — con số luôn đúng bằng số việc người đó làm được. Nếu hiện cả thư không gửi được thì Kế toán bấm `[Gửi tất cả]` sẽ nhận lỗi mỗi ngày mà không hiểu vì sao.

```text
📬 Hộp thư chờ gửi — 05/09/2026                    [ 23 thư chờ duyệt ]

[ Tất cả ▼ ]  [ Nhắc trước hạn (8) ]  [ Nhắc quá hạn (12) ]  [ Cảnh báo khóa DV (3) ]
                                            ↑ chip [ 📎 Công văn (2) ] chỉ hiện với tài khoản có debt:legal

┌───┬──────────────────────┬────────────────────┬──────────────┬─────────┬───────────┐
│ ☑ │ Khách hàng / HĐ      │ Loại thư           │ Tổng nợ      │ Trễ     │           │
├───┼──────────────────────┼────────────────────┼──────────────┼─────────┼───────────┤
│ ☑ │ Công ty CP A         │ Nhắc trước hạn     │ 15.000.000   │ –       │ 👁️ Xem    │
│   │ SYSCORTEX-01         │ REMINDER_X_MINUS_2 │              │         │           │
├───┼──────────────────────┼────────────────────┼──────────────┼─────────┼───────────┤
│ ☑ │ Công ty TNHH B       │ Nhắc quá hạn       │ 40.500.000   │ 4 ngày  │ 👁️ Xem    │
│   │ EPIC-02              │ REMINDER_X_PLUS_1  │              │         │           │
├───┼──────────────────────┼────────────────────┼──────────────┼─────────┼───────────┤
│ ☐ │ Công ty D            │ ⚠️ Cảnh báo khóa DV │ 22.500.000   │ 15 ngày │ 👁️ Xem    │
│   │ ADFLEX-04            │ SUSPEND_WARNING…   │              │         │           │
└───┴──────────────────────┴────────────────────┴──────────────┴─────────┴───────────┘

Đã chọn 2 thư    [ 📤 Gửi các thư đã chọn ]        [ 📤 Gửi tất cả 23 thư ]
```

**Popup `[👁️ Xem trước]`:**
- **Đến:** `ketoan@epic.vn` · **CC:** `am.a@cloudaz.io` *(chỉ đọc)*
- **Tiêu đề:** `Re: Thông báo bàn giao hồ sơ thanh toán cước tháng 08/2026 — HĐ EPIC-02`
  **🔒 Chỉ đọc — không có nút sửa.** Lấy cứng từ `debt_collections.thread_subject`
- **Nội dung:** trình soạn thảo, **sửa được**
- `[ Lưu nháp ]` · `[ 🚫 Bỏ thư này ]` · `[ 📤 Gửi ngay ]`

**Popup `[🚫 Bỏ thư này]`:** ô lý do bắt buộc ≥ 10 ký tự → `PATCH /debts/emails/drafts/:id/cancel`. Thư chuyển `cancelled`, biến khỏi hộp thư, lý do lưu vào Audit Trail. Dùng khi khách vừa hứa trả hoặc nội dung thư đã lỗi thời — khác với `expired` (job tự dọn) và `skipped` (hệ thống chặn).

> **Vì sao tiêu đề không sửa được:** CloudAZ dùng Gmail. Google quy định để nối thư vào luồng có sẵn phải thỏa **đồng thời** ba điều kiện — đúng `threadId`, header `References`/`In-Reply-To` đúng chuẩn, và **`Subject` khớp**. Đổi tiêu đề dù chỉ thêm vài chữ là Gmail tách thành cuộc hội thoại mới, khách thấy hai luồng riêng cho cùng một khoản nợ.
>
> Muốn nhấn mạnh điều gì cho riêng thư này thì viết vào **dòng đầu thân thư** — Gmail lấy dòng đó làm đoạn xem trước hiển thị ngay cạnh tiêu đề, thực tế còn dễ thấy hơn.

**Ba điều Frontend phải xử:**

1. **Nháp hết hạn theo ngày — chỉ làn nhắc nợ.** Chỉ hiện nháp có `prepared_for = hôm nay`; nháp cũ đã bị job 00:05 chuyển `expired` vì số tiền lãi trong đó đã sai. **Thư công văn (`mail_track = LEGAL`) không hết hạn** — hiện cho tới khi Pháp lý gửi hoặc bỏ.
2. **Gửi hàng loạt xử lý từng thư độc lập** — một thư lỗi không chặn các thư còn lại. Kết quả trả về dạng `{queued, skipped, failed, details[]}`, hiện bảng tóm tắt sau khi gửi xong. Dòng thiếu quyền trả `FORBIDDEN_ROLE`, hiện câu *"Thư này chỉ Pháp lý được gửi"*.
3. **Sau khi gửi, thư biến khỏi tab này** và xuất hiện ở dòng mở rộng của khoản nợ với trạng thái `Đã gửi`.
4. **Dòng có đính kèm hiện 📎** trước tên loại thư, và popup xem trước thêm dòng *File đính kèm* chỉ đọc.

**Ba lớp nhắc việc** — vì không ai duyệt thì hôm đó không thư nào đi:

| Lớp | Khi nào | Hiển thị |
|---|---|---|
| **Badge đỏ trên tab** | Cả ngày | `📬 Hộp thư chờ gửi 🔴23` |
| **Banner đầu grid — sáng** | Có nháp chưa gửi | 🟠 *"Có 23 thư chờ duyệt gửi hôm nay"* + nút `[Mở hộp thư]` |
| **Banner đầu grid — sau 16:00** | Vẫn còn nháp | 🔴 *"Còn 23 thư chưa gửi. Nháp hết hạn lúc 00:05 — sau đó phải chờ tới sáng mai."* |

Ba lớp trên áp cho **làn nhắc nợ**. Làn công văn không có mốc hết hạn nên banner đỏ sau 16:00 đổi câu: *"Còn 2 công văn chưa gửi — mỗi ngày chậm là mốc khởi kiện lùi một ngày."*

Kèm email `DRAFT_PENDING_DIGEST` lúc 08:35, gửi **theo từng làn** — Kế toán nhận bản thư nhắc nợ (gộp số thư hôm nay và danh sách thư hôm qua đã hết hạn), Pháp lý nhận bản công văn (Backlog DC-04 AC12).

---

## 10. Chi tiết vòng đời các trạng thái (ERP State Machine)

Dưới đây là luồng chuyển đổi trạng thái (State Machine) chi tiết cho các cột do ERP kiểm soát:

### 10.1. Cột "Trạng thái Mail (ERP)"

**Không có enum trạng thái.** Giá trị suy ra tại chỗ theo thứ tự ưu tiên (xem `Database_Schema.md` §9a):

1. Còn dòng `debt_email_logs` đã hết lượt thử mà chưa gửi được → `⚠️ Gửi lỗi`
2. `email_sent_count = 0` → `Chưa gửi`
3. Còn lại → `<stage_label của last_template_code> (Lần N)`

| Template gửi gần nhất | Hiển thị |
|---|---|
| `REMINDER_DELIVERED` | Đã giao hồ sơ (Lần N) |
| `REMINDER_X_MINUS_2` / `_X_MINUS_1` / `_X` | Nhắc trước hạn (Lần N) |
| `REMINDER_X_PLUS_1` | Nhắc quá hạn (Lần N) |
| `SUSPEND_WARNING_X_PLUS_4` | Cảnh báo khóa DV (Lần N) |

Sprint sau thêm giai đoạn mới (VD tối hậu thư X+20) chỉ cần insert 1 template kèm `stage_label` — **không sửa Frontend, không migration**.

### 10.2. Cột "Trạng thái Bản cứng (HCNS)"
- `Chưa in bản cứng`: Mặc định ban đầu.
- `Đã đóng dấu`: Kế toán bấm xác nhận đã in ra giấy và đóng dấu đỏ.
- `Đã giao bưu điện`: Kế toán bấm bàn giao cho bộ phận HCNS đi gửi.
- `Đã phát thành công`: **HCNS nhập mã vận đơn và bấm xác nhận báo phát thành công** (Lúc này hệ thống sẽ tự động chốt mốc thời gian bắt đầu đếm ngược).

### 10.3. Cột "Mốc Ngày X"
- `Chờ phát thư`: Chưa có mốc Ngày X (do HCNS chưa xác nhận phát thành công).
- `Trong hạn`: Ngay sau khi **HCNS xác nhận phát thành công**, hệ thống tự động tính: Ngày X (Hạn chót) = Ngày phát thành công + Số ngày thanh toán theo Hợp đồng. Bắt đầu đếm ngược (X-2, X-1, X).
- `Quá hạn N ngày`: Từ ngày X+1 trở đi, hệ thống chuyển sang trạng thái quá hạn và bắt đầu đếm số ngày trễ (để tính lãi phạt).

### 10.4. Cột "Alert & Luồng xử lý"
- `🔴 Cảnh báo đỏ — Thiếu cấu hình`: Chưa nhập `payment_term_days` / `penalty_rate`, **hoặc** khách hàng chưa có người liên hệ nào `recipient_role = TO` đang active (`has_contact = false`). Ở trạng thái này hệ thống **chặn gửi mọi email** (`422 FIN_DEBT_NO_RECIPIENT` — Backlog BD-09 AC10). Bấm `[⚙️ Cấu hình]` để xử lý.
- `🟢 Bình thường`: Đang trong quá trình nhắc nợ tự động (X-2 đến X+3).
> **Các mốc X+4 / X+15 / X+30 là cấu hình, không phải hằng số.** Giá trị đọc từ `debt_product_configs` (`suspend_milestone_days`, `legal_notice_milestone_days`, `legal_sue_milestone_days`). Nhãn hiển thị nên sinh động theo cấu hình, ví dụ `Chờ Sales duyệt (X+{suspend_milestone_days})`.

- `🟠 Chờ Sales duyệt (X+4)`: Đúng ngày X+4, hệ thống đẩy thông báo cho Sales AM yêu cầu duyệt khóa dịch vụ.
- `🔴 Chuyển Pháp lý (X+15)`: Đúng ngày X+15, hệ thống chuyển hồ sơ sang màn hình của Pháp lý (Legal) để chuẩn bị công văn kiện tụng.
- `⚫ Đã khóa Dịch vụ`: Khi Phòng Mua xác nhận đã khóa thành công trên hệ thống.
- `💲 Đã tất toán`: Khi Kế toán xác nhận đã thu đủ cả nợ gốc + lãi (`debt_status = PAID`) — đóng hồ sơ công nợ. *(Sprint 1 dừng ở đây; bước ký phát hành Hóa đơn VAT trên MISA nằm ngoài phạm vi.)*

### 10.5. Cột "Khóa DV (Phòng Mua)"
- `--`: Chưa đến hạn khóa, hoặc chưa có lệnh duyệt từ Sales AM.
- `⏳ Chờ Phòng Mua khóa`: Sau khi Sales AM bấm "Duyệt khóa dịch vụ" ở mốc X+4.
- `🔒 Đã khóa Console Google`: Phòng Mua vào hệ thống bấm xác nhận đã thực hiện thao tác khóa trên portal của Google.

---

## 11. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Block / Column | Database Field (`DEBTS` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Tabs lọc nhanh** | `sync_status`, `ngay_x`, `debt_status`, `suspend_status` | - **Chờ xác nhận:** `sync_status = PENDING_REVIEW`<br>- **Đã loại:** `sync_status = EXCLUDED`<br>- *(Các tab dưới đây đều kèm điều kiện `sync_status = CONFIRMED`)*<br>- **Chờ phát thư:** `DEBT_DELIVERIES.hardcopy_status = NONE / STAMPED / POSTED`<br>- **Trong hạn:** `debt_status = IN_TERM`<br>- **Đang quá hạn:** `debt_status = OVERDUE`<br>- **Chờ duyệt khóa:** `suspend_status = WAITING_SALES` |
| **Khách hàng / Mã HĐ** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP (hoặc qua bảng `contracts` local của ERP) |
| **Sản phẩm** | `DEBTS.product_name` | Hiển thị Tên dịch vụ lưu trực tiếp tại `DEBTS.product_name` sau khi đồng bộ. **Dropdown "Dịch vụ" lọc theo `product_name` (chuỗi tên), không lọc theo `product_id`** — xem BD-09 AC1. Sprint 1 chỉ có 1 giá trị: `GWS Standard` |
| **Tiền phải thu (VNĐ)** | `total_principal` (gốc) + `total_penalty` (lãi) | - **Gốc:** lấy từ `DEBTS.total_principal`<br>- **Phạt:** lấy từ `DEBTS.total_penalty` (ERP tự tính và cộng dồn khi quá hạn) |
| **File ĐNTT** | `DEBTS.document_id` & `documents` | Query đường dẫn file tải về dựa trên bảng `documents` liên kết qua `DEBTS.document_id` |
| **Trạng thái Mail** | `debt_collections.last_template_code` + `email_sent_count` + `debt_email_logs.send_status` | **Suy ra tại chỗ, không có cột enum.** Xem §10.1 của file này và `Database_Schema.md` §9a. API trả sẵn `email_stage_label` + `email_send_state` |
| **Trạng thái Bản cứng** | `DEBT_DELIVERIES.hardcopy_status`, `tracking_code`, `delivered_at` | Map `NONE` ➔ "Chưa in"; `STAMPED` ➔ "Đã đóng dấu"; `POSTED` ➔ "Đã giao bưu điện" (kèm `tracking_code`); `DELIVERED` ➔ "Đã phát thành công" (kèm `delivered_at`) |
| **Mốc Ngày X** | `ngay_x` | Định dạng `dd/mm/yyyy`. Nếu null thì hiển thị `--/--/----` (Chờ phát thư) |
| **Alert & Luồng xử lý** | `debt_status`, `DEBT_LEGAL_ACTIONS.legal_status` | - `debt_status = PAID` ➔ "Đã tất toán"<br>- `DEBT_LEGAL_ACTIONS.legal_status = SUED` ➔ "Đang khởi kiện"<br>- Dựa trên `ngay_x` đếm ngược để nảy các Alert màu sắc |
| **Khóa DV** | `suspend_status` | Hiển thị trạng thái tương ứng: `NONE` ➔ `--`; `WAITING_SALES`/`WAITING_PROCUREMENT` ➔ `⏳ Chờ khóa`; `SUSPENDED` ➔ `🔒 Đã khóa` |
| **Mở rộng dòng (History)** | `debt_events` | Query `SELECT * FROM debt_events WHERE debt_id = ? ORDER BY created_at ASC` để render toàn bộ timeline |

---

## 12. Đặc tả cơ chế đồng bộ dữ liệu (CM ➔ ERP Data Mapping)

Khi Kế toán nhấn nút **"Đồng bộ dữ liệu CM"** hoặc khi hệ thống kích hoạt đồng bộ tự động, tiến trình Sync Engine sẽ gọi sang API/DB của CM để lấy danh sách DNTT đã hoàn thành và ánh xạ vào các bảng của ERP theo bảng đặc tả dưới đây:

### 12.1. Ánh xạ dữ liệu sang bảng `DEBTS` (ERP)

| Trường bên CM (Source) | Trường bên ERP (Target - `DEBTS`) | Logic ánh xạ & Chuyển đổi dữ liệu |
|---|---|---|
| `paymentRequest._id` | `dntt_cm_id` | Khóa chính của DNTT bên CM, dùng làm khóa đối chiếu để tránh đồng bộ trùng lặp. |
| `paymentRequest.productId` | `product_id` | ID sản phẩm liên kết từ CM. Chỉ lưu để đối chiếu ngược, **không dùng làm điều kiện lọc** (CM không expose endpoint tra `productId`). |
| `product.name` | `product_name` | **Khóa lọc chính.** Lấy tên dịch vụ bên CM (Sprint 1: `"GWS Standard"`; Sprint sau: `"GWS Flex"`, `"AWS"`, `"GCP"`…) lưu thẳng để filter nhanh. Tiến trình sync chỉ nhận các bản ghi có `product.name` nằm trong danh sách tên dịch vụ được cấu hình. |
| `paymentRequest.usageDate` | `billing_cycle` | Chuyển đổi từ `Date` của CM thành chuỗi Kỳ cước định dạng `MM/YYYY` (ví dụ: `08/2026`). |
| `contract.customerId` | `customer_id` | ID của Khách hàng ký hợp đồng (lấy từ hợp đồng chính liên kết với DNTT). |
| `paymentRequest.contractIds[0]` | `contract_id` | ID của hợp đồng áp dụng (trong trường hợp DNTT liên kết nhiều hợp đồng, mặc định lấy hợp đồng chính). |
| `sale_owner` | `sale_owner` | Email của Sales AM phụ trách hợp đồng để phân quyền màn hình đôn đốc nợ cho Sales (Dùng làm identity). |
| `paymentRequest.totalPrinciple` | `total_principal` | Lấy số tiền nợ gốc đã được CM chốt cước (Giá trị số thập phân). |
| *Mặc định khởi tạo* | `total_penalty` | Mặc định khởi tạo bằng `0` (Sẽ được tính lãi phạt quá hạn sau bởi Cronjob ERP). |
| *Mặc định khởi tạo* | `DEBT_DELIVERIES.delivered_at` | Tạo 1 bản ghi `DEBT_DELIVERIES` với `hardcopy_status = NONE`, `delivered_at = null` (HCNS sẽ cập nhật khi chuyển phát thành công). **Lưu ý: trường này thuộc `DEBT_DELIVERIES`, không phải `DEBTS`.** |
| *Mặc định khởi tạo* | `ngay_x` | Khởi tạo bằng `null`. Tự động tính khi HCNS xác nhận phát: `delivered_at` + `CONTRACTS.payment_term_days`. |
| *Mặc định khởi tạo* | `sync_status` | Mặc định khởi tạo là `PENDING_REVIEW` (Chờ Kế toán xác nhận đưa vào luồng). Đồng bộ lại **không** ghi đè giá trị của bản ghi đã `CONFIRMED` / `EXCLUDED`. Xem BD-09 AC1b. |
| *Mặc định khởi tạo* | `debt_status` | Mặc định khởi tạo là `WAITING_HARDCOPY` (Chờ phát bản cứng). |
| *Mặc định khởi tạo* | `suspend_status` | Mặc định khởi tạo là `NONE` (Chưa yêu cầu khóa dịch vụ). |
| *Không tạo bản ghi* | `DEBT_LEGAL_ACTIONS` | **Không** tạo dòng nào lúc đồng bộ. Bảng này chỉ có bản ghi khi Pháp lý bấm "Soạn Công văn". Chưa có công văn = chưa có dòng — **không có giá trị `NONE`** trong `legal_status` (xem `Database_Schema.md` §11). Màn hình Legal lọc tab "Mới" bằng `NOT EXISTS`. |

### 12.2. Ánh xạ dữ liệu tài liệu sang bảng `documents` (ERP)

Mỗi file ĐNTT đính kèm bên CM được đồng bộ thông tin lưu trữ để ERP tải về trực tiếp từ S3:

| Trường bên CM (Source - `document`) | Trường bên ERP (Target - `documents`) | Mô tả |
|---|---|---|
| `document._id` | `id` | Khóa chính, kiểu `VARCHAR(64)` — giữ nguyên ObjectId của CM. Liên kết với `DEBTS.document_id`. |
| `document.name` | `name` | Tên file ĐNTT gốc (ví dụ: `[GWS Standard][Công ty B][08-2026]`). |
| `document.extension` | `extension` | Đuôi mở rộng, mặc định `.docx`. |
| `document.key` | **`s3_key`** | Đường dẫn trên S3 bucket, dùng sinh presigned URL. *(Tên cột bên ERP là `s3_key`, không phải `key` — `key` là từ khóa dễ gây nhầm trong SQL.)* |
| `document.userCreated` | **`user_created`** | Người tạo file bên CM. Đặt tên `snake_case` theo quy ước ERP. |

