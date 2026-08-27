# Email & Document Templates

*(Điền chính xác wording mẫu (lời văn) để hệ thống tự động điền biến variables)*

## 1. Các Email Nhắc nợ trước hạn (Đếm ngược từ khi nhận bản cứng đến Ngày X)

### 1.1. Email Ngày nhận bản cứng (ngay_x - CONTRACTS.payment_term_days)
*(Gửi thông báo xác nhận đã giao hồ sơ thanh toán thành công)*

| Field | Value |
|---|---|
| Template code | `REMINDER_DELIVERED` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 hàng ngày kể từ ngày nhận bản cứng (ngay_x - CONTRACTS.payment_term_days) cho đến ngày X-3 |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Thông báo bàn giao hồ sơ thanh toán cước tháng `[billing_cycle]` thành công — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> CloudAZ xin trân trọng cảm ơn Quý Công ty đã tin tưởng sử dụng dịch vụ `[product_name]` theo Hợp đồng số `[contract_number]`.
>
> Hệ thống kế toán CloudAZ xin thông báo: Hồ sơ thanh toán của Quý Công ty cho kỳ cước tháng `[billing_cycle]` đã được chuyển phát bản cứng thành công theo thông tin sau:
> - **Ngày chuyển phát thành công:** `[delivered_at]`
> - **Người ký nhận:** `[receiver_name]`
>
> Căn cứ theo điều khoản thanh toán, hạn thanh toán của kỳ cước này là ngày `[ngay_x]` (trong vòng `[payment_term_days]` ngày kể từ khi nhận bản cứng).
>
> Quý Công ty vui lòng kiểm tra tình trạng hồ sơ và lưu ý lịch thanh toán cho CloudAZ.
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

### 1.2. Email Ngày X-2 — Nhắc nợ trước hạn (Sắp đến hạn)

| Field | Value |
|---|---|
| Template code | `REMINDER_X_MINUS_2` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X-2 |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Thông báo sắp đến hạn thanh toán cước dịch vụ — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> Dịch vụ `[product_name]` kỳ cước tháng `[billing_cycle]` của Quý Công ty sẽ đến hạn thanh toán vào ngày `[ngay_x]` sắp tới. 
>
> Hồ sơ thanh toán CloudAZ đã chuyển phát thành công theo các thông tin sau:
> - **Ngày chuyển phát thành công:** `[delivered_at]`
> - **Người ký nhận:** `[receiver_name]`
>
> Anh/chị vui lòng kiểm tra tình trạng hồ sơ và lưu ý lịch thanh toán cho CloudAZ nhé!
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

### 1.3. Email Ngày X-1 — Nhắc nợ trước hạn (Đến hạn vào ngày mai)

| Field | Value |
|---|---|
| Template code | `REMINDER_X_MINUS_1` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X-1 |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Thông báo cước dịch vụ sẽ đến hạn thanh toán vào ngày mai — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> Dịch vụ `[product_name]` kỳ cước tháng `[billing_cycle]` của Quý Công ty sẽ đến hạn thanh toán vào ngày mai (ngày `[ngay_x]`).
>
> Team vui lòng kiểm tra hồ sơ và lưu ý lịch thanh toán cho CloudAZ nhé!
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

### 1.4. Email Ngày X — Đúng ngày thanh toán

| Field | Value |
|---|---|
| Template code | `REMINDER_X` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Thông báo đến hạn thanh toán cước dịch vụ hôm nay — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> Dịch vụ `[product_name]` kỳ cước tháng `[billing_cycle]` của Quý Công ty đã đến hạn thanh toán hôm nay (ngày `[ngay_x]`).
>
> Anh/chị vui lòng kiểm tra và hoàn thiện thanh toán cho CloudAZ khoản chi phí này nhé!
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 2. Email Ngày X+1 — Nhắc nợ quá hạn (lần 1)

| Field | Value |
|---|---|
| Template code | `REMINDER_X_PLUS_1` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 hàng ngày từ X+1 đến khi thanh toán |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** [KHẨN] Thông báo thanh toán quá hạn — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> CloudAZ đã gửi thông báo đến hạn vào ngày `[ngay_x_minus_2]`, tuy nhiên đến nay CloudAZ vẫn chưa nhận được thanh toán cho kỳ cước `[billing_cycle]`.
>
> **Tình trạng hiện tại:**
> - Nợ gốc: `[total_principal]` VNĐ
> - Lãi phạt tạm tính đến ngày `[today]`: `[total_penalty]` VNĐ
> - Tổng cộng: `[total_amount]` VNĐ
> - Số ngày quá hạn: `[days_overdue]` ngày
>
> **Các mốc xử lý:**
> - `[ngay_x+4]` (X+4): Dịch vụ sẽ bị tạm khóa nếu chưa thanh toán.
> - `[ngay_x+15]` (X+15): Hồ sơ sẽ được chuyển sang Phòng Pháp lý để lập công văn yêu cầu thanh toán.
> - `[ngay_x+30]` (X+30): CloudAZ sẽ đơn phương chấm dứt Hợp đồng và khởi kiện tại Tòa án.
>
> Đề nghị Quý Công ty khẩn trương thanh toán để tránh các biện pháp xử lý không mong muốn.
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 3. Email Ngày X+4 — Cảnh báo dừng dịch vụ

| Field | Value |
|---|---|
| Template code | `SUSPEND_WARNING_X_PLUS_4` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X+4 |
| To | Khách hàng |
| CC | Sales AM phụ trách, Trưởng phòng Sales |

**Tiêu đề:** [CẢNH BÁO] Thông báo tạm khóa dịch vụ — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> CloudAZ đã nhiều lần gửi thông báo nhắc nợ nhưng đến nay Quý Công ty vẫn chưa thực hiện thanh toán cho kỳ cước `[billing_cycle]`.
>
> Căn cứ theo `[penalty_clause]` của Hợp đồng `[contract_number]` hai bên đã ký kết, `[customer_name]` sẽ phải chịu lãi suất thanh toán trễ hạn là `[penalty_rate]`%/ngày trên dư nợ chưa thanh toán. CloudAZ xin gửi chi tiết công nợ kèm lãi chậm trả theo bảng dưới đây:
>
> | Tên doanh nghiệp | Dịch vụ | Kỳ cước | Hạn thanh toán (Ngày X) | Số tiền gốc | Số ngày quá hạn | Lãi phạt chậm trả (`[penalty_rate]`%/ngày) | Tổng thanh toán |
> |---|---|---|---|---|---|---|---|
> | `[customer_name]` | `[product_name]` | `[billing_cycle]` | `[ngay_x]` | `[total_principal]` | `[days_overdue]` | `[total_penalty]` | **`[total_amount]`** |
>
> CloudAZ xin thông báo: Dịch vụ `[product_name]` của Quý Công ty sẽ bị **tạm khóa** kể từ ngày `[ngay_x+5]` nếu CloudAZ không nhận được thanh toán.
>
> Đề nghị Quý Công ty liên hệ ngay với Sales AM phụ trách (`[sale_owner_name]`) để làm việc.
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 4. Email Ngày X+15 — Thông báo chuyển Pháp lý (nội bộ)

| Field | Value |
|---|---|
| Template code | `LEGAL_NOTIFY_X_PLUS_15` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X+15 |
| To | Phòng Pháp lý |
| CC | Kế toán trưởng, Sales AM phụ trách, Ban Giám đốc |

**Tiêu đề:** Chuyển hồ sơ xử lý pháp lý — `[customer_name]` — HĐ `[contract_number]`

**Nội dung:**

> Kính gửi Phòng Pháp lý,
>
> Hệ thống xin chuyển hồ sơ khách hàng quá hạn nghiêm trọng sang bộ phận Pháp lý để xử lý theo quy trình:
>
> - Khách hàng: `[customer_name]`
> - Hợp đồng: `[contract_number]`
> - Nợ gốc: `[total_principal]` VNĐ
> - Lãi phạt: `[total_penalty]` VNĐ
> - Tổng nợ: `[total_amount]` VNĐ
> - Số ngày quá hạn: `[days_overdue]` ngày
> - Hạn chót trước khởi kiện: `[ngay_x+30]`
>
> Đề nghị Phòng Pháp lý lập công văn yêu cầu thanh toán theo mẫu và gửi đến khách hàng.
>
> Trân trọng,
> **Hệ thống Quản lý Công nợ — CloudAZ**

---

## 5. Mẫu Công văn Pháp lý (Ngày X+15)

| Field | Value |
|---|---|
| Template code | `LEGAL_X_15` |
| Loại | `LEGAL_DOC` |
| Số phụ lục | `[document_number]` |
| Điều khoản thanh toán | `[payment_term_clause]` |
| Điều khoản phạt | `[penalty_clause]` |
| Số ngày gia hạn | `[grace_period_days]` |

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
> **Kính gửi:** `[customer_name]`
>
> Đại diện theo pháp luật: Ông/Bà `[rep_name]`
>
> Mã số doanh nghiệp: `[tax_code]`
>
> Địa chỉ: `[customer_address]`
>
> Địa chỉ người đại diện pháp luật: `[rep_address]`
>
> *(Sau đây gọi tắt là "Công ty")*
>
> Công ty Cổ phần Phát triển Dịch vụ Đám mây CloudAZ ("CloudAZ") xin gửi lời chào trân trọng và lời chúc sức khỏe tới Quý Công ty.
>
> 1. Căn cứ theo Hợp đồng cung cấp phần mềm điện toán đám mây `[product_name]` số `[contract_number]` ký kết ngày `[contract_sign_date]` giữa CloudAZ và Công ty (Sau đây gọi là "Hợp đồng"); CloudAZ đã thực hiện cung cấp dịch vụ theo đúng thỏa thuận, đồng thời gửi bảng kê và hóa đơn phí dịch vụ hàng tháng đến Công ty.
>
> 2. Căn cứ theo Điều `[payment_term_clause]` điều khoản thanh toán Hợp đồng đã ký kết giữa hai bên, Công ty phải thanh toán Phí dịch vụ hàng tháng cho CloudAZ theo hình thức chuyển khoản. Trường hợp Công ty thanh toán chậm so với thời hạn quy định, Công ty phải chịu lãi suất thanh toán trễ hạn là `[penalty_rate]`%/ngày/dư nợ chưa thanh toán. Tuy nhiên, đến nay đã quá thời hạn thanh toán mà Công ty vẫn không thanh toán đúng theo như quy định tại Hợp đồng và đồng thời phía CloudAZ cũng không nhận được thông báo trao đổi về việc chậm trễ thanh toán này.
>
> 3. Tổng chi phí dịch vụ đã sử dụng Quý công ty phải thanh toán cho CloudAZ tới ngày `[legal_publish_date]` là: **`[total_amount]` VND** *(bao gồm phí dịch vụ chưa thanh toán và khoản phạt quá hạn)*.
>
> Vì vậy bằng văn bản này, CloudAZ đề nghị Quý Công ty thực hiện thanh toán công nợ theo đúng số tiền được thống kê tại **Bảng đối soát** đính kèm văn bản này. Sau `[grace_period_days]` ngày kể từ ngày CloudAZ gửi thông báo này, nếu Công ty không thực hiện nghĩa vụ thanh toán, CloudAZ sẽ có những hành động pháp lý tố tụng quyết liệt hơn để yêu cầu Quý công ty thực hiện nghĩa vụ và bảo vệ quyền, lợi ích hợp pháp của mình.
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

### Bảng đối soát (đính kèm công văn)

> <div align="center">
>   <strong>BẢNG ĐỐI SOÁT</strong><br>
>   <em>(đính kèm công văn số: <code>[document_number]</code>)</em>
> </div>
>
> | STT | Nội dung | Số tiền (VNĐ) |
> |-----|----------|---------------|
> | 01 | Chi phí dịch vụ `[product_name]` kỳ `[billing_cycle]` theo HĐ `[contract_number]` | `[total_principal]` |
> | 02 | Phạt chậm thanh toán (tính đến ngày `[legal_publish_date]`) | `[legal_locked_penalty]` |
> | **Tổng cộng** | | **`[total_amount]`** |
> | *Bằng chữ* | | *`[total_amount_in_words]`* |

---

## 6. Thông báo khởi kiện — Ngày X+30 (nội bộ)

| Field | Value |
|---|---|
| Template code | `SUE_NOTIFY_X_PLUS_30` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X+30 |
| To | Ban Giám đốc, Phòng Pháp lý |
| CC | Kế toán trưởng |

**Tiêu đề:** [KHẨN CẤP] Đề xuất khởi kiện — `[customer_name]` — HĐ `[contract_number]`

**Nội dung:**

> Kính gửi Ban Giám đốc,
>
> Khách hàng `[customer_name]` (HĐ `[contract_number]`) đã quá hạn thanh toán `[days_overdue]` ngày với tổng dư nợ `[total_amount]` VNĐ.
>
> Phòng Pháp lý đã gửi công văn yêu cầu thanh toán ngày `[legal_publish_date]` nhưng chưa nhận được phản hồi.
>
> Đề nghị Ban Giám đốc phê duyệt khởi kiện để bảo vệ quyền lợi của CloudAZ.
>
> Trân trọng,
> **Phòng Pháp lý — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 7. Email thông báo kết quả khóa/mở dịch vụ

| Field | Value |
|---|---|
| Template code | `SUSPEND_RESULT` |
| Loại | `EMAIL` |
| Gửi lúc | Sau khi Phòng Mua execute |
| To | Kế toán, Sales AM, Legal |

**Tiêu đề:** Thông báo kết quả `[action]` dịch vụ — `[customer_name]`

**Nội dung:**

> Kính gửi các bên liên quan,
>
> Phòng Mua xác nhận đã `[action]` dịch vụ `[product_name]` của khách hàng `[customer_name]` (HĐ `[contract_number]`) thành công.
>
> - Trạng thái hiện tại: `[suspend_status]`
> - Thời gian thực hiện: `[executed_at]`
> - Người thực hiện: `[executed_by]`
>
> Trân trọng,
> **Phòng Mua (Procurement) — CloudAZ**

---

## Danh sách biến số (Variables)

| Biến | Nguồn | Mô tả |
|------|-------|-------|
| `[customer_name]` | `CUSTOMERS.customer_name` | Tên khách hàng |
| `[customer_address]` | `CUSTOMERS.address` | Địa chỉ khách hàng |
| `[rep_name]` | `CUSTOMERS.rep_name` | Người đại diện PL |
| `[rep_address]` | `CUSTOMERS.rep_address` | Địa chỉ người đại diện |
| `[tax_code]` | `CONTRACTS.tax_code` | Mã số thuế |
| `[contract_number]` | `CONTRACTS.contract_number` | Số hợp đồng |
| `[contract_sign_date]` | `CONTRACTS.sign_date` | Ngày ký HĐ |
| `[product_name]` | `DEBTS.product_name` | Tên sản phẩm |
| `[billing_cycle]` | `DEBTS.billing_cycle` | Kỳ cước (MM/YYYY) |
| `[total_principal]` | `DEBTS.total_principal` | Nợ gốc (format tiền) |
| `[total_penalty]` | `DEBTS.total_penalty` | Lãi phạt (format tiền) |
| `[total_amount]` | = `total_principal` + `total_penalty` | Tổng nợ |
| `[total_amount_in_words]` | Helper function | Tổng nợ bằng chữ |
| `[penalty_rate]` | `DEBTS.penalty_rate` | % lãi phạt/ngày |
| `[ngay_x]` | `DEBTS.ngay_x` | Hạn chót (dd/mm/yyyy) |
| `[ngay_x+4]` | Derived | Ngày X + 4 |
| `[ngay_x+15]` | Derived | Ngày X + 15 |
| `[ngay_x+30]` | Derived | Ngày X + 30 |
| `[days_overdue]` | Derived = today - ngay_x | Số ngày quá hạn |
| `[sale_owner_name]` | User map từ `DEBTS.sale_owner` | Tên Sales AM |
| `[today]` | System | Ngày hiện tại |
| `[document_number]` | Auto-generated | Số công văn |
| `[legal_publish_date]` | `DEBT_LEGAL_ACTIONS.publish_date` | Ngày ký công văn |
| `[legal_locked_penalty]` | `DEBT_LEGAL_ACTIONS.locked_penalty` | Lãi phạt chốt tại ngày ký |
| `[legal_termination_date]` | `DEBT_LEGAL_ACTIONS.termination_date` | Ngày chấm dứt HĐ |
| `[payment_term_clause]` | `DOCUMENT_TEMPLATES.payment_term_clause` | Điều khoản TT |
| `[penalty_clause]` | `DOCUMENT_TEMPLATES.penalty_clause` | Điều khoản phạt |
| `[grace_period_days]` | `DOCUMENT_TEMPLATES.grace_period_days` | Số ngày gia hạn |
| `[action]` | Dynamic: "khóa" / "mở" | Hành động |
| `[suspend_status]` | `DEBTS.suspend_status` | Trạng thái sau khi thực thi |
| `[executed_at]` | `DEBT_AUDIT_LOGS.created_at` | Thời gian thực thi |
| `[executed_by]` | `DEBT_AUDIT_LOGS.action_by` | Người thực thi |