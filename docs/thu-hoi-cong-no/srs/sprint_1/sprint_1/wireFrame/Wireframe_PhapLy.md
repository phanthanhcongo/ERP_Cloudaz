# Giao diện & Template Mẫu Công văn Pháp lý (Legal View)

## 1. Màn hình Danh sách Khách hàng Quá hạn (Góc nhìn Pháp lý)

**Bộ lọc nhanh (Tabs):**
`[Tất cả quá hạn]` | `[Chạm mốc X+15 (Cần lập Công văn)]` | `[Đã lập, chờ gửi]` | `[Chạm mốc X+30 (Chuẩn bị Khởi kiện)]` | `[Đang khởi kiện]`

*Điều kiện lọc từng tab (kết hợp `legal_status` + `ngay_x` để 2 tab X+15 / X+30 không chồng lấn):*
- **Chạm mốc X+15:** chưa có bản ghi `debt_legal_actions` nào (`NOT EXISTS`) **và** `ngay_x <= today - 15`
- **Đã lập, chờ gửi:** `legal_status = PREPARING`
- **Chạm mốc X+30:** `legal_status = SENT` **và** `ngay_x <= today - 30`
- **Đang khởi kiện:** `legal_status = SUED`

**Bảng Dữ liệu:**
| Khách hàng | Mã HĐ | Nợ gốc | Lãi phạt (Tạm tính) | Số ngày trễ | Trạng thái Pháp lý | File đính kèm | Thao tác |
|---|---|---|---|---|---|---|---|
| Công ty TNHH ABC | GWS-2601 | 100,000,000 đ | 2,500,000 đ | **Trễ 16 ngày** | Mới *(chưa có bản ghi)* | - | `[Soạn Công văn]` |
| Công ty DEF | GWS-2612 | 70,000,000 đ | 3,100,000 đ | **Trễ 18 ngày** | Đã lập công văn (`PREPARING`) | 📄 `[Tải xuống]` | `[📮 Xác nhận đã gửi]` |
| Công ty XYZ | GWS-2590 | 50,000,000 đ | 4,000,000 đ | **Trễ 32 ngày** | Đã gửi Công văn (`SENT`)<br>*VN99887766 — 17/09* | 📄 `[Tải xuống]` | `[Hủy HĐ & Kiện]` |

---

## 1b. Popup: Xác nhận đã gửi Công văn (DC-09 AC2b)

Khi bấm `[📮 Xác nhận đã gửi]` ở dòng đang ở trạng thái `PREPARING`.

```text
┌────────────────────────────────────────────────────────────┐
│ Xác nhận đã gửi công văn cho khách hàng                    │
├────────────────────────────────────────────────────────────┤
│ Khách hàng:   Công ty DEF — HĐ GWS-2612      (chỉ đọc)    │
│ Số công văn:  01-20260916/CV/CLOUDAZ-DEF     (chỉ đọc)    │
│ Ngày ký:      16/09/2026                     (chỉ đọc)    │
│                                                            │
│ Gửi bằng cách nào? *                                       │
│   ( ) Chỉ bưu điện          (POST)                         │
│   (•) Cả bưu điện và email  (BOTH)  ← khuyến nghị          │
│   ( ) Chỉ email             (EMAIL)                        │
│                                                            │
│ Ngày thực gửi (sent_at) *      [ 17/09/2026   📅 ]        │
│ Mã vận đơn (tracking_code) *   [ VN99887766        ]      │
│                                                            │
│ 📧 Hệ thống sẽ soạn sẵn thư gửi khách kèm file công văn.   │
│    Thư nằm chung luồng với các email nhắc nợ trước đó.     │
│    Bạn duyệt và bấm gửi ở "Hộp thư chờ gửi".              │
│                                                            │
│ ⚠️ Mốc gia hạn 10 ngày trước khi khởi kiện tính từ ngày   │
│    thực gửi này, KHÔNG tính từ ngày ký công văn.           │
│                                                            │
│                  [ Hủy ]    [ Xác nhận đã gửi ]            │
└────────────────────────────────────────────────────────────┘
```

**Ba nhánh — Frontend đổi form theo lựa chọn:**

| Chọn | Ô bắt buộc | Trạng thái sau khi lưu | Nhãn nút |
|---|---|---|---|
| `POST` | `sent_at` + `tracking_code` | `SENT` ngay | `[Xác nhận đã gửi]` |
| `BOTH` | `sent_at` + `tracking_code` | `SENT` ngay, đồng thời soạn nháp thư | `[Xác nhận & Soạn thư]` |
| `EMAIL` | *(ẩn cả hai ô)* | **giữ `PREPARING`** | `[Soạn thư gửi khách]` |

Chọn `EMAIL` thì **ẩn ô ngày thực gửi và mã vận đơn**, và đổi khối chú thích thành: *"Công văn vẫn ở trạng thái Đã lập, chờ gửi cho tới khi bạn thực sự gửi thư ở Hộp thư chờ gửi."*

**Vì sao nhánh `EMAIL` chưa lật `SENT`:** thư còn nằm trong hộp nháp thì khách **chưa nhận được gì**. Lật `SENT` sớm là mở khóa nút `[Hủy HĐ & Kiện]` trong khi khách chưa hề được thông báo — ra tòa thì thua.

**Chặn trước khi mở popup:** khách chưa có contact `TO` thì hai lựa chọn có email bị disable, kèm dòng đỏ *"Chưa cấu hình email liên hệ — chỉ gửi được đường bưu điện"*. Nếu vẫn gọi API → `422 FIN_DEBT_NO_RECIPIENT`.

→ `PATCH /api/v1/fin/debts/:id/legal-documents/:legalId/send`

**Vì sao cần bước riêng này:** ký công văn và gửi công văn là **hai thời điểm khác nhau**, có khi cách nhau vài ngày. Mốc `grace_period_days` (số ngày gia hạn trước khi kiện) đếm từ **`sent_at`** — nếu lấy `publish_date` thì khởi kiện sớm hơn thực tế, khách có cơ sở phản bác trước tòa.

**Ràng buộc:** chỉ gọi được khi `legal_status = PREPARING` → sai thì `409 FIN_DEBT_INVALID_TRANSITION`. Nút `[Hủy HĐ & Kiện]` chỉ mở khóa khi `legal_status = SENT` — với nhánh `EMAIL` thì phải gửi thư xong mới tới trạng thái đó.

---

## 1c. Hộp thư chờ gửi của Pháp lý (DC-09 AC2c)

Thư ngỏ kèm công văn không tự đi. Nó vào **"Hộp thư chờ gửi"** — cùng màn hình Kế toán dùng, nhưng **lọc theo quyền**: Pháp lý chỉ thấy thư công văn, Kế toán chỉ thấy thư nhắc nợ.

```text
📬 Hộp thư chờ gửi — Công văn pháp lý            [ 2 thư chờ gửi ]

┌───┬──────────────────────┬────────────────────────┬─────────────┬─────────┐
│ ☑ │ Khách hàng / HĐ      │ Công văn               │ Tổng nợ     │         │
├───┼──────────────────────┼────────────────────────┼─────────────┼─────────┤
│ ☑ │ Công ty DEF          │ 📎 01-20260916/CV/…    │ 73.100.000  │ 👁️ Xem  │
│   │ GWS-2612             │ LEGAL_DOC_COVER        │             │         │
└───┴──────────────────────┴────────────────────────┴─────────────┴─────────┘

Đã chọn 1 thư    [ 📤 Gửi các thư đã chọn ]
```

**Bốn điều khác với hộp thư của Kế toán:**

1. **Chỉ tài khoản có `debt:legal` thấy được.** Kế toán mở hộp thư không thấy dòng nào ở đây, badge của họ cũng không đếm.
2. **Không hết hạn cuối ngày.** Nháp công văn để qua đêm vẫn còn — `locked_penalty` là ảnh chụp đã chốt, không đổi theo ngày.
3. **Không sửa được file đính kèm.** PDF là bản đã ký đóng dấu; sửa thân thư thì được, thay file thì không.
4. **Gửi xong mới lật `SENT`** nếu công văn chọn nhánh `EMAIL`. Grid Pháp lý tự đổi trạng thái và mở nút `[Hủy HĐ & Kiện]`.

Popup `[👁️ Xem]` giống hộp thư Kế toán: Tiêu đề `Re: […]` khóa cứng, thân thư sửa được, thêm dòng **📎 File đính kèm: `01-20260916_CV_CLOUDAZ-DEF.pdf`** *(chỉ đọc)*.

---

## 2. Popup "Soạn Công văn" (Auto-fill Template)

Khi nhân viên Pháp lý bấm vào nút `[Soạn Công văn]`, hệ thống sẽ hiển thị Popup:

**1. Các trường thông tin nhập tay bắt buộc (Để chốt số liệu):**
- `[ Chọn Ngày phát hành công văn (Ngày ký) ]`: DatePicker. Mặc định là ngày hôm nay. (Dùng để chốt mốc tính `[legal_locked_penalty]`).
- `[ Chọn Ngày chính thức chấm dứt HĐ ]`: DatePicker. Mặc định hệ thống gán bằng `Ngày X + 30`, user có thể sửa tay tùy ý. (Dùng để điền biến `[legal_termination_date]`).

**2. Bản nháp tài liệu (Auto-fill Template):**
Hệ thống hiển thị bản xem trước đã merge dữ liệu. Nhân viên có thể sửa tay trực tiếp vào văn bản nếu muốn trước khi bấm `[Lưu & Xuất PDF]`. Khi lưu, các trường thông tin chốt ở trên (`publish_date`, `termination_date`, `locked_penalty`, `document_number`, `file_url`) được ghi vào bảng **`DEBT_LEGAL_ACTIONS`** (mỗi lần xuất công văn = 1 bản ghi mới), **không** ghi đè vào `DEBTS`.

### Mẫu Template: "Thông báo vi phạm nghĩa vụ thanh toán và yêu cầu thanh toán"

> <table width="100%" style="border: none; margin-bottom: 20px;">
>   <tr style="border: none;">
>     <td width="50%" align="center" valign="top" style="border: none;">
>       <strong>CÔNG TY CỔ PHẦN PHÁT TRIỂN<br>DỊCH VỤ ĐÁM MÂY CLOUDAZ</strong><br>
>       Số: <code>[document_number]</code><br>
>       <em>V/v: Giải quyết, thanh toán công nợ.</em>
>     </td>
>     <td width="50%" align="center" valign="top" style="border: none;">
>       <strong>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM<br>Độc lập – Tự do – Hạnh phúc</strong><br>
>       <br>
>       <em>Hà Nội, ngày <code>[publish_day]</code> tháng <code>[publish_month]</code> năm <code>[publish_year]</code></em>
>     </td>
>   </tr>
> </table>
> 
> **Kính gửi:**<br>
> **`[customer_name]`**
>
> Đại diện theo pháp luật: Ông/Bà `[rep_name]`
>
> Mã số doanh nghiệp: `[tax_code]`
>
> Địa chỉ: `[customer_address]`
>
> Địa chỉ người đại diện pháp luật: `[rep_address]`
>
> *(Sau đây gọi tắt là “Công ty”)*
> 
> Công ty Cổ phần Phát triển Dịch vụ Đám mây CloudAZ (“CloudAZ”) xin gửi lời chào trân trọng và lời chúc sức khỏe tới Quý Công ty.
> 
> 1. Căn cứ theo Hợp đồng cung cấp phần mềm điện toán đám mây `[product_name]` số `[contract_number]` ký kết ngày `[contract_sign_date]` giữa CloudAZ và Công ty (Sau đây gọi là “Hợp đồng”); CloudAZ đã thực hiện cung cấp dịch vụ theo đúng thỏa thuận, đồng thời gửi bảng kê và hóa đơn phí dịch vụ hàng tháng đến Công ty.
> 
> 2. Căn cứ theo Điều `[payment_term_clause]` điều khoản thanh toán Hợp đồng đã ký kết giữa hai bên, Công ty phải thanh toán Phí dịch vụ hàng tháng cho CloudAZ theo hình thức chuyển khoản. Trường hợp Công ty thanh toán chậm so với thời hạn quy định, Công ty phải chịu lãi suất thanh toán trễ hạn là `[penalty_rate]`%/ngày/dư nợ chưa thanh toán. Tuy nhiên, đến nay đã quá thời hạn thanh toán mà Công ty vẫn không thanh toán đúng theo như quy định tại Hợp đồng và đồng thời phía CloudAZ cũng không nhận được thông báo trao đổi về việc chậm trễ thanh toán này.
> 
> 3. Tổng chi phí dịch vụ đã sử dụng Quý công ty phải thanh toán cho CloudAz tới ngày `[legal_publish_date]` là: **`[total_amount]` VND** *(bao gồm phí dịch vụ chưa thanh toán và khoản phạt quá hạn)*.<br><br>Vì vậy bằng văn bản này, CloudAZ đề nghị Quý Công ty thực hiện thanh toán công nợ theo đúng số tiền được thống kê tại **Bảng đối soát** đính kèm văn bản này. Sau `[grace_period_days]` ngày kể từ ngày CloudAZ gửi thông báo này, nếu Công ty không thực hiện nghĩa vụ thanh toán, CloudAZ sẽ có những hành động pháp lý tố tụng quyết liệt hơn để yêu cầu Quý công ty thực hiện nghĩa vụ và bảo vệ quyền, lợi ích hợp pháp của mình.
> 
> Nhằm giải quyết vụ việc trên cơ sở hiểu biết và thiện chí, CloudAZ sẵn sàng làm việc, trao đổi với đại diện hợp pháp của Công ty. Trường hợp CloudAZ không nhận được phản hồi từ Quý Công ty, CloudAZ mặc định hiểu rằng Quý công ty đã đồng ý và chấp thuận về các thông tin, bảng kê đối soát được nêu tại văn bản này.
> 
> Mọi thông tin liên hệ và phản hồi xin vui lòng gửi về:
>
> **CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ**
>
> Địa chỉ: Số 03, ngõ 04 Phố Nghĩa Đô, Phường Nghĩa Tân, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.
>
> Phụ trách pháp lý: Ông Lê Tiến Đức
>
> Số điện thoại: 0383438889
>
> Email: legal@cloudaz.io
> 
> Rất mong nhận được sự phản hồi và hợp tác từ Quý Công ty.
> 
> Trân trọng./.
> 
> <table width="100%" style="border: none; margin-top: 20px;">
>   <tr style="border: none;">
>     <td width="50%" valign="top" style="border: none;">
>       <em>Nơi nhận:</em><br>
>       - <em>Như trên;</em><br>
>       - <em>Lưu: VP, PC.</em>
>     </td>
>     <td width="50%" align="center" valign="top" style="border: none;">
>       <strong>CÔNG TY CỔ PHẦN PHÁT TRIỂN<br>DỊCH VỤ ĐÁM MÂY CLOUDAZ</strong>
>     </td>
>   </tr>
> </table>
>
> ---
>
> <div align="center">
>   <strong>BẢNG ĐỐI SOÁT</strong><br>
>   <em>(đính kèm công văn số: <code>[document_number]</code>)</em>
> </div>
> <br>
> <table width="100%" border="1" style="border-collapse: collapse;">
>   <tr>
>     <th width="10%" style="text-align: center;">STT</th>
>     <th width="65%" style="text-align: center;">Nội dung</th>
>     <th width="25%" style="text-align: center;">Số tiền<br>(VNĐ)</th>
>   </tr>
>   <tr>
>     <td align="center">01</td>
>     <td>Chi phí dịch vụ <code>[product_name]</code> từ tháng <code>[start_billing_month]</code> đến tháng <code>[end_billing_month]</code> năm <code>[billing_year]</code> theo hợp đồng: <code>[contract_number]</code> ngày <code>[contract_sign_date]</code></td>
>     <td align="center"><strong><code>[total_principal]</code></strong></td>
>   </tr>
>   <tr>
>     <td align="center">02</td>
>     <td>Phạt chậm thanh toán <em>(Tính đến ngày <code>[legal_publish_date]</code>)</em></td>
>     <td align="center"><strong><code>[legal_locked_penalty]</code></strong></td>
>   </tr>
>   <tr>
>     <td colspan="2" align="center"><strong>Tổng cộng</strong></td>
>     <td align="center"><strong><code>[total_amount]</code></strong></td>
>   </tr>
>   <tr>
>     <td colspan="3"><em>(Bằng chữ: <code>[total_amount_in_words]</code>).</em></td>
>   </tr>
> </table>
---

### Logic Lấy Dữ liệu (Dành cho Dev):
- `[customer_name]`, `[customer_address]`, `[rep_name]`, `[rep_address]`: Lấy từ bảng `CUSTOMERS`.
- `[tax_code]`: Lấy từ `CONTRACTS.tax_code` (Mã số thuế của Legal Entity ký hợp đồng).
- `[document_number]`: Tự động sinh dựa trên format. Ví dụ: `01-[publish_year][publish_month][publish_day]/CV/CLOUDAZ-[customer_code]`.
- `[product_name]`, `[total_principal]`: Lấy trực tiếp từ bảng `DEBTS`.
- `[start_billing_month]`, `[end_billing_month]`, `[billing_year]`: Parse từ chuỗi `billing_cycle`.
- `[payment_term_clause]`, `[grace_period_days]`: Các biến số tĩnh (Ví dụ: grace=10 ngày) lấy từ bảng cấu hình biểu mẫu `DOCUMENT_TEMPLATES`.
- `[legal_locked_penalty]`: Lãi phạt chốt sổ tính bằng công thức (`penalty_rate` * `days_overdue` * `total_principal`), mốc khóa là `[legal_publish_date]`. **Đây chỉ là ảnh chụp để in vào công văn — lãi phạt thực tế (`DEBTS.total_penalty`) vẫn tiếp tục cộng dồn hàng ngày cho tới khi khách thanh toán (`debt_status = PAID`).** Vì vậy cột "Lãi phạt (Tạm tính)" trên grid sẽ luôn ≥ `[legal_locked_penalty]` của công văn đã phát hành.
- `[total_amount]`: = `total_principal` + `legal_locked_penalty`.
- `[total_amount_in_words]`: Hàm helper convert số thành chữ.

---

## 3. Đặc tả nguồn dữ liệu hiển thị (Mapping to DB)

| UI Element / Column | Database Field (`DEBTS`, `DOCUMENT_TEMPLATES` & related) | Mô tả & Cách hiển thị |
|---|---|---|
| **Tabs lọc nhanh** | `legal_status` | Xem điều kiện đầy đủ tại mục 1. Tóm tắt:<br>- **Chạm mốc X+15:** chưa có bản ghi `debt_legal_actions` nào **và** `ngay_x <= today - 15`<br>- **Đã lập, chờ gửi:** `legal_status = PREPARING`<br>- **Chạm mốc X+30:** `legal_status = SENT` **và** `ngay_x <= today - 30`<br>- **Đang khởi kiện:** `legal_status = SUED` |
| **Khách hàng / Mã HĐ** | `DEBTS.customer_id`, `DEBTS.contract_id` | Hiển thị Tên Khách hàng và Mã Hợp đồng lấy trực tiếp từ DB ERP |
| **Nợ gốc** | `DEBTS.total_principal` | Hiển thị số tiền gốc lấy từ Database ERP |
| **Lãi phạt (Tạm tính)** | `DEBTS.total_penalty` | Lấy số tiền lãi phạt tính đến thời điểm hiện tại |
| **Số ngày trễ** | Derived từ `DEBTS.ngay_x` | Công thức hiển thị: `(current_date - ngay_x) ngày` |
| **Trạng thái Pháp lý** | `DEBT_LEGAL_ACTIONS.legal_status` | **Chưa có bản ghi nào** ➔ hiển thị "Mới" *(không có giá trị `NONE` trong enum — chưa lập công văn thì chưa có dòng)*.<br>**`PREPARING` ➔ "Đã lập công văn (chưa gửi)"**; **`SENT` ➔ "Đã gửi Công văn"** (kèm `sent_at` + `tracking_code`); `SUED` ➔ "Đang khởi kiện".<br>Nút `[Hủy HĐ & Kiện]` **chỉ enable khi `legal_status = SENT`** — chưa gửi công văn thì không đủ căn cứ khởi kiện (`409 FIN_DEBT_LEGAL_DOC_NOT_SENT`). Ở trạng thái `PREPARING`, nút thao tác là `[📮 Xác nhận đã gửi]` (popup §1b) |
| **File đính kèm** | `DEBT_LEGAL_ACTIONS.file_url` | - Trả về icon 📄 `[Tải xuống]` trỏ đến đường dẫn lưu trữ file công văn đã ký.<br>- Nếu rỗng thì hiển thị `-` |
| **Đường gửi** | `DEBT_LEGAL_ACTIONS.delivery_method` | `POST` → 🚚 Bưu điện · `EMAIL` → 📧 Email · `BOTH` → 🚚📧 Cả hai. Chưa gửi thì `-` |
| **Popup Xác nhận đã gửi** | `delivery_method`, `sent_at`, `tracking_code` | Xem mục 1b. Chọn `EMAIL` thì ẩn 2 ô còn lại và `legal_status` **giữ `PREPARING`** |
| **Hộp thư chờ gửi** | `DEBT_EMAIL_LOGS` `WHERE mail_track = 'LEGAL'` | Xem mục 1c. Lọc cứng theo quyền `debt:legal`, không phải theo query param |
| **Popup Soạn Công văn** | `DOCUMENT_TEMPLATES` & `DEBT_LEGAL_ACTIONS` | - Fetch template từ `DOCUMENT_TEMPLATES`.<br>- Các biến `[legal_publish_date]`, `[legal_termination_date]` lấy từ Input của Pháp lý.<br>- `[legal_locked_penalty]` hệ thống tính dựa trên mốc ngày `[legal_publish_date]`. Sau khi xuất file, tạo 1 bản ghi lưu các thông tin này vào bảng `DEBT_LEGAL_ACTIONS`. |

