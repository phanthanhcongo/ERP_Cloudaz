# Email & Document Templates

*(Điền chính xác wording mẫu (lời văn) để hệ thống tự động điền biến variables)*

---

## 0. Quy tắc dựng danh sách người nhận (áp dụng cho MỌI email dưới đây)

Các ô "To / CC" trong từng template dưới đây là **mô tả nghiệp vụ**. Địa chỉ email thật được dựng từ bảng `CUSTOMER_CONTACTS`:

```
To = CUSTOMER_CONTACTS WHERE customer_id = ? AND recipient_role = 'TO' AND is_active = true
CC = CUSTOMER_CONTACTS WHERE customer_id = ? AND recipient_role = 'CC' AND is_active = true
     + email Sales AM (DEBTS.sale_owner)
     + (riêng SUSPEND_WARNING_X_PLUS_4) email Trưởng phòng Sales
```

**Ràng buộc cứng:** nếu `To` rỗng → **chặn gửi**, trả lỗi `422 FIN_DEBT_NO_RECIPIENT`, không tăng `email_sent_count`. Xem `ERP_API.md` mục *Email & Biểu mẫu* và Backlog BD-09 AC10.

**Điều kiện dừng:** mọi email nhắc nợ **không gửi** cho khoản nợ có `debt_status = PAID` / `paid_at != null` (Backlog DC-04 AC8).

**Giới hạn tần suất — tối đa 1 email/ngày cho mỗi khoản nợ.** Hạn mức tính chung cho toàn bộ template của luồng công nợ, áp cho cả cron lẫn gửi tay. Khi nhiều template cùng khớp trong 1 ngày, chọn theo thứ tự ưu tiên: `SUSPEND_WARNING_X_PLUS_4` > `REMINDER_X_PLUS_1` > `REMINDER_X` > `REMINDER_X_MINUS_1` > `REMINDER_X_MINUS_2` > `REMINDER_DELIVERED`. Vi phạm → `429 FIN_DEBT_EMAIL_RATE_LIMIT` (Backlog DC-04 AC1).

**Nguồn email Trưởng phòng Sales** (CC của `SUSPEND_WARNING_X_PLUS_4` và `SUSPEND_REJECTED`): truy từ **cây tổ chức trong ERP** theo đúng 5 bước:

```
DEBTS.sale_owner (email)
  → users.email → users.id
  → members.email  (liên kết 1-1, ràng buộc tại migration 000075_strict_user_member_link)
  → members.department_id          ⚠️ department_id nằm ở bảng MEMBERS, không phải USERS
  → departments.manager_member_id  ⚠️ cột này là manager_member_id, không phải manager_user_id
  → members.email của trưởng phòng
```

Không tìm được thì vẫn gửi cho người nhận còn lại, ghi warning, **không chặn email**. Xem `Database_Schema.md` §16.

## 0a. ⚠️ Tiêu đề — chỉ mẫu ĐẦU TIÊN có tiêu đề riêng

**Toàn bộ email gửi khách của một khoản nợ nằm trong đúng một luồng thư.** CloudAZ dùng Gmail, mà Google quy định để nối thư vào luồng có sẵn phải thỏa **đồng thời** 3 điều kiện: đúng `threadId`, header `References`/`In-Reply-To` đúng chuẩn, và **`Subject` khớp**.

Vì vậy:

```
Thư đầu tiên  → subject = tiêu đề của mẫu 1.1, lưu vào debt_collections.thread_subject
Mọi thư sau   → subject = "Re: " + thread_subject   (LẤY TỪ CỘT, không render lại)
```

| Mẫu | Tiêu đề |
|---|---|
| **1.1 `REMINDER_DELIVERED`** | ✅ Có tiêu đề riêng — **đây là tiêu đề của cả luồng** |
| 1.2 · 1.3 · 1.4 · 2 · 3 · **5b** · 8 · 9 · 10 | ❌ Không có tiêu đề riêng. Dùng `Re: [thread_subject]` |
| 4 · 6 · 6b · 6c · 7 | Email **nội bộ** — tiêu đề riêng, **không** vào luồng của khách |

**Hai làn thư, một luồng.** Thư gửi khách chia hai làn (`mail_track`): `REMINDER` do job soạn và Kế toán duyệt, `LEGAL` do Pháp lý soạn và duyệt. Hai làn có luật hạn mức và phân quyền khác nhau nhưng **cùng nằm trong một luồng thư** của khách. Bảng luật đầy đủ: `Database_Schema.md` mục *Hai làn thư*.

**Tiêu đề ghi trong các mẫu 1.2 trở đi chỉ để tham khảo ngữ cảnh, KHÔNG dùng khi gửi.** Nếu mỗi thư dùng tiêu đề riêng của mình thì luồng vỡ ngay từ thư thứ hai.

**Mức độ khẩn cấp chuyển vào thân thư** — dòng đầu in đậm có màu, cộng header `Importance: high`. Gmail hiện dấu quan trọng và lấy dòng đầu thân thư làm đoạn xem trước ngay cạnh tiêu đề, nên thực tế còn dễ thấy hơn tiền tố `[KHẨN]` trong tiêu đề.

**Kỳ cước khác nhau là luồng khác nhau** — kỳ 08/2026 và 09/2026 của cùng khách không gộp chung, vì mỗi kỳ có Ngày X, số tiền và vòng đời riêng.

Chi tiết cài đặt: `Database_Schema.md` mục *Ba cột neo luồng thư* và Backlog DC-04 AC6.

**Hệ thống KHÔNG tự gửi.** Job 08:30 chỉ **soạn nháp**; Kế toán (email nhắc nợ) hoặc Pháp lý (email và công văn pháp lý) phải rà rồi bấm gửi — có thể chọn nhiều thư gửi một lượt. Chi tiết: DC-04 AC10 và AC11.

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

**Tiêu đề:** ⚠️ **Không dùng tiêu đề riêng** — thư này nối vào luồng có sẵn, dùng `Re: [thread_subject]`. Xem mục 0.

**Header bổ sung:** `Importance: high`, `X-Priority: 1` — Gmail hiện dấu quan trọng.

**Nội dung:**

> ### 🔴 THÔNG BÁO KHẨN — QUÁ HẠN THANH TOÁN `[days_overdue]` NGÀY
>
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

**Tiêu đề:** ⚠️ **Không dùng tiêu đề riêng** — nối vào luồng, dùng `Re: [thread_subject]`. Xem mục 0.

**Header bổ sung:** `Importance: high`, `X-Priority: 1`.

**Nội dung:**

> ### 🔴 CẢNH BÁO — DỊCH VỤ SẼ BỊ TẠM KHÓA TỪ NGÀY `[ngay_x+5]`
>
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

## 5b. Thư ngỏ gửi kèm Công văn Pháp lý (gửi khách hàng)

| Field | Value |
|---|---|
| Template code | `LEGAL_DOC_COVER` |
| Loại | `EMAIL` · `mail_track = LEGAL` |
| Gửi lúc | Pháp lý bấm gửi, **không** phải job tự động |
| To | Kế toán / Người liên hệ thanh toán của Khách hàng |
| CC | Sales AM phụ trách, Kế toán trưởng |
| Tiêu đề | `Re: [thread_subject]` — nằm chung luồng thư nhắc nợ |
| Đính kèm | **PDF công văn `[document_number]` đã ký, đóng dấu** |

> Kính gửi Quý Công ty **`[customer_name]`**,
>
> CÔNG TY CỔ PHẦN PHÁT TRIỂN DỊCH VỤ ĐÁM MÂY CLOUDAZ trân trọng gửi tới Quý Công ty **Công văn số `[document_number]`** ngày `[legal_publish_date]` về việc giải quyết, thanh toán công nợ dịch vụ `[product_name]` kỳ `[billing_cycle]` theo Hợp đồng `[contract_number]`.
>
> Tổng số tiền phải thanh toán tính đến ngày `[legal_publish_date]` là **`[total_amount]` VNĐ** *(`[total_amount_in_words]`)*, đề nghị Quý Công ty thanh toán trong vòng **`[grace_period_days]` ngày** kể từ ngày nhận được công văn.
>
> **Văn bản có giá trị pháp lý là bản Công văn đính kèm đã được ký và đóng dấu.** Thư điện tử này chỉ nhằm mục đích thông báo sớm; bản cứng đang được gửi tới Quý Công ty theo đường bưu điện.
>
> Mọi vướng mắc xin liên hệ `[sale_owner_name]` hoặc phản hồi trực tiếp thư này.
>
> Trân trọng.

**Ba điều bắt buộc khi cài đặt:**

1. **Không render nội dung công văn vào thân thư.** Thân thư chỉ dẫn nhập; nếu in cả công văn vào đây thì khách có hai bản — một bản HTML không dấu và một bản PDF có dấu — và sẽ tranh cãi bản nào có hiệu lực.
2. **Không đính kèm được PDF thì không gửi.** Thiếu file là thư mất hết ý nghĩa. Lỗi → `send_status = 'failed'`, `last_error` ghi rõ, **không** lật `legal_status`.
3. **Thư này miễn hạn mức 1 email/ngày** (`mail_track = LEGAL`) và **không** cập nhật `email_sent_count` / `last_email_sent_date` / `last_template_code` — ba cột đó chỉ đếm luồng nhắc nợ.

---

## 6. Thông báo chấm dứt HĐ & khởi kiện — Ngày X+30 (nội bộ)

| Field | Value |
|---|---|
| Template code | `SUE_NOTIFY_X_PLUS_30` |
| Loại | `EMAIL` |
| Gửi lúc | 08:30 ngày X+30 |
| To | Ban Giám đốc, Phòng Pháp lý |
| CC | Kế toán trưởng |

**Tiêu đề:** [KHẨN CẤP] Chấm dứt HĐ & đề xuất khởi kiện — `[customer_name]` — HĐ `[contract_number]`

**Nội dung:**

> Kính gửi Ban Giám đốc và Phòng Pháp lý,
>
> Khách hàng `[customer_name]` (HĐ `[contract_number]`) đã quá hạn thanh toán `[days_overdue]` ngày với tổng dư nợ `[total_amount]` VNĐ.
>
> Phòng Pháp lý đã gửi công văn yêu cầu thanh toán ngày `[legal_publish_date]` nhưng chưa nhận được phản hồi.
>
> **⚠️ Việc Phòng Pháp lý cần làm — hệ thống KHÔNG tự sinh:**
>
> 1. **Soạn và gửi văn bản đơn phương chấm dứt Hợp đồng** cho khách hàng theo mẫu của Phòng Pháp lý. Tại email nhắc nợ mốc X+1, CloudAZ **đã thông báo trước** với khách rằng sẽ chấm dứt hợp đồng ở mốc này — nếu không gửi văn bản chấm dứt thì việc chấm dứt **không có hiệu lực pháp lý**, và khách có căn cứ phản bác trước tòa.
> 2. Gửi bản cứng qua bưu điện, giữ lại mã vận đơn làm bằng chứng đã gửi.
> 3. Sau khi gửi xong, vào ERP bấm **"Hủy HĐ & Kiện"** để ghi nhận `termination_date` và chuyển trạng thái hồ sơ sang *Đang khởi kiện*.
>
> Đề nghị Ban Giám đốc phê duyệt khởi kiện để bảo vệ quyền lợi của CloudAZ.
>
> Trân trọng,
> **Hệ thống Quản lý Công nợ — CloudAZ**

> **Phạm vi Sprint 1:** hệ thống **không sinh** văn bản đơn phương chấm dứt hợp đồng. Đây là văn bản pháp lý do Phòng Pháp lý tự soạn ngoài hệ thống; ERP chỉ **cảnh báo đúng lúc** và **ghi nhận kết quả** (`termination_date`, `legal_status = SUED`). Email này chính là chốt kiểm soát để việc đó không bị quên.

---

## 6b. Email thông báo Sales AM từ chối khóa dịch vụ (nội bộ)

| Field | Value |
|---|---|
| Template code | `SUSPEND_REJECTED` |
| Loại | `EMAIL` |
| Gửi lúc | Ngay khi Sales AM bấm "Từ chối" |
| To | Kế toán, Kế toán trưởng |
| CC | Trưởng phòng Sales *(truy từ cây tổ chức ERP: `sale_owner` → phòng ban → trưởng phòng)* |

**Tiêu đề:** [BẢO LÃNH] Sales AM từ chối khóa dịch vụ — `[customer_name]` — HĐ `[contract_number]`

**Nội dung:**

> Kính gửi các anh/chị,
>
> Yêu cầu khóa dịch vụ tại mốc X+4 đối với khách hàng dưới đây đã bị Sales AM **từ chối**:
>
> - Khách hàng: `[customer_name]`
> - Hợp đồng: `[contract_number]` — kỳ cước `[billing_cycle]`
> - Tổng dư nợ: `[total_amount]` VNĐ (gốc `[total_principal]` + lãi `[total_penalty]`)
> - Số ngày quá hạn: `[days_overdue]` ngày
> - **Người từ chối:** `[sale_owner_name]`
> - **Lý do bảo lãnh:** `[reject_reason]`
> - **Ngày khách cam kết thanh toán:** `[expected_payment_date]`
>
> Hệ thống sẽ **không tự tạo lại** yêu cầu khóa cho kỳ cước này. Nếu đến ngày cam kết mà khách chưa thanh toán, đề nghị Kế toán trưởng xem xét yêu cầu khóa thủ công.
>
> Trân trọng,
> **Hệ thống Quản lý Công nợ — CloudAZ**

---

## 6c. Email nhắc duyệt thư nháp (nội bộ, hằng ngày)

| Field | Value |
|---|---|
| Template code | `DRAFT_PENDING_DIGEST` |
| Loại | `EMAIL` |
| Gửi lúc | 08:35 hàng ngày, **ngay sau khi job soạn nháp xong** |
| To | **Theo từng làn:** làn `REMINDER` → Kế toán doanh thu · làn `LEGAL` → Phòng Pháp lý |
| CC | Kế toán trưởng — **chỉ bản làn `REMINDER`**, khi số thư hết hạn hôm qua ≥ 5 **hoặc** bỏ sót từ ngày thứ 2 liên tiếp |

**Một template, hai bản gửi.** Job đếm riêng từng làn rồi gửi riêng cho từng nhóm người duyệt. Kế toán không nhận số công văn, Pháp lý không nhận số thư nhắc nợ — mỗi người chỉ thấy việc mình làm được.

**Chỉ gửi khi có việc.** Không có nháp chờ duyệt và không có thư hết hạn thì **không gửi** — thư rỗng gửi mỗi sáng sẽ khiến người ta ngừng đọc.

**Tiêu đề:** Có `[draft_count]` thư nhắc nợ chờ duyệt gửi hôm nay `[today]`
*(Bản làn `LEGAL`:* Có `[draft_count]` công văn chờ gửi khách hàng `[today]`*)*

> **Bản của Pháp lý không có phần "thư hôm qua đã hết hạn"** — nháp làn `LEGAL` không hết hạn. Thay vào đó nêu **số ngày công văn đã nằm chờ**: mỗi ngày chậm là mốc `grace_period_days` lùi một ngày, kéo theo ngày đủ điều kiện khởi kiện.

**Nội dung:**

> Kính gửi Phòng Kế toán,
>
> ### 📬 Hôm nay: `[draft_count]` thư chờ duyệt gửi
>
> | Giai đoạn | Số thư |
> |---|---|
> | Nhắc trước hạn | `[count_before_due]` |
> | Nhắc quá hạn | `[count_overdue]` |
> | Cảnh báo khóa dịch vụ | `[count_suspend_warning]` |
>
> 👉 [Mở Hộp thư chờ gửi](`[draft_inbox_url]`) để rà và bấm gửi.
>
> **Lưu ý:** nháp chỉ có hiệu lực trong ngày. Sau 00:05 đêm nay, thư chưa gửi sẽ **hết hạn** vì số tiền lãi trong đó không còn đúng — hệ thống soạn lại bản mới vào sáng mai.
>
> ---
>
> ### 🔴 Hôm qua: `[expired_count]` thư CHƯA DUYỆT và đã hết hạn
>
> *(khối này chỉ hiện khi `[expired_count]` > 0)*
>
> | Khách hàng | Hợp đồng | Loại thư | Số ngày quá hạn |
> |---|---|---|---|
> | `[customer_name]` | `[contract_number]` | `[stage_label]` | `[days_overdue]` |
>
> **`[expired_count]` khách hàng này đã không nhận được thư nhắc nợ ngày hôm qua.** Với các khoản đang tới gần mốc khóa dịch vụ hoặc mốc pháp lý, việc thiếu một lần nhắc có thể ảnh hưởng tới cơ sở pháp lý khi cần đối chất.
>
> Trân trọng,
> **Hệ thống Quản lý Công nợ — CloudAZ**

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

*(Đây là email **nội bộ**. Email báo cho khách hàng là hai mẫu riêng ở mục 8 và 9 — mỗi lần Phòng Mua execute, hệ thống gửi **cả hai**: một cho nội bộ, một cho khách.)*

---

## 8. Email thông báo ĐÃ TẠM KHÓA dịch vụ (gửi khách hàng)

| Field | Value |
|---|---|
| Template code | `SUSPEND_NOTICE_CUSTOMER` |
| Loại | `EMAIL` |
| Gửi lúc | Ngay sau khi Phòng Mua xác nhận đã khóa trên Console |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** ⚠️ **Không dùng tiêu đề riêng** — nối vào luồng, dùng `Re: [thread_subject]`. Xem mục 0.

**Header bổ sung:** `Importance: high`.

**Nội dung:**

> ### ⛔ DỊCH VỤ ĐÃ ĐƯỢC TẠM KHÓA
>
> Kính gửi `[customer_name]`,
>
> CloudAZ đã nhiều lần gửi thông báo nhắc nợ đối với kỳ cước `[billing_cycle]` nhưng đến nay vẫn chưa nhận được thanh toán từ Quý Công ty.
>
> Căn cứ theo Hợp đồng số `[contract_number]`, CloudAZ xin thông báo dịch vụ `[product_name]` của Quý Công ty **đã được tạm khóa** kể từ `[executed_at]`.
>
> **Tình trạng công nợ:**
> - Nợ gốc: `[total_principal]` VNĐ
> - Lãi phạt tính đến ngày `[today]`: `[total_penalty]` VNĐ
> - Tổng phải thanh toán: **`[total_amount]` VNĐ**
> - Số ngày quá hạn: `[days_overdue]` ngày
>
> **Lưu ý:** Trong thời gian tạm khóa, **lãi chậm thanh toán vẫn tiếp tục phát sinh** theo điều khoản hợp đồng. Dịch vụ sẽ được khôi phục ngay sau khi CloudAZ ghi nhận đủ khoản thanh toán.
>
> Quý Công ty vui lòng liên hệ Sales AM phụ trách (`[sale_owner_name]`) để được hỗ trợ xử lý.
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 9. Email thông báo ĐÃ KHÔI PHỤC dịch vụ (gửi khách hàng)

| Field | Value |
|---|---|
| Template code | `UNSUSPEND_NOTICE_CUSTOMER` |
| Loại | `EMAIL` |
| Gửi lúc | Ngay sau khi Phòng Mua xác nhận đã mở trên Console |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Thông báo khôi phục dịch vụ `[product_name]` — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> CloudAZ xin trân trọng thông báo: dịch vụ `[product_name]` theo Hợp đồng số `[contract_number]` của Quý Công ty **đã được khôi phục** kể từ `[executed_at]`.
>
> CloudAZ cảm ơn Quý Công ty đã hoàn tất thanh toán và rất mong tiếp tục đồng hành cùng Quý Công ty trong thời gian tới.
>
> Nếu cần hỗ trợ thêm về dịch vụ, Quý Công ty vui lòng liên hệ Sales AM phụ trách (`[sale_owner_name]`).
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

---

## 10. Email xác nhận ĐÃ NHẬN THANH TOÁN (gửi khách hàng)

| Field | Value |
|---|---|
| Template code | `PAYMENT_CONFIRMED` |
| Loại | `EMAIL` |
| Gửi lúc | Ngay sau khi Kế toán bấm Tất toán |
| To | Khách hàng |
| CC | Sales AM phụ trách |

**Tiêu đề:** Xác nhận đã nhận thanh toán cước tháng `[billing_cycle]` — Hợp đồng `[contract_number]`

**Nội dung:**

> Kính gửi `[customer_name]`,
>
> CloudAZ xác nhận **đã nhận đủ khoản thanh toán** cho kỳ cước tháng `[billing_cycle]` theo Hợp đồng số `[contract_number]`.
>
> **Chi tiết ghi nhận:**
> - Ngày nhận thanh toán: `[paid_at]`
> - Số tiền đã nhận: **`[paid_amount]` VNĐ**
> - Trong đó, phí dịch vụ: `[total_principal]` VNĐ
> - Lãi chậm thanh toán: `[total_penalty]` VNĐ
>
> Hồ sơ công nợ kỳ cước này đã được **tất toán**. Lãi chậm thanh toán ngừng phát sinh kể từ ngày `[paid_at]`.
>
> CloudAZ trân trọng cảm ơn Quý Công ty và rất mong tiếp tục được đồng hành trong các kỳ cước tiếp theo.
>
> Trân trọng,
> **Phòng Kế toán — Công ty CP Phát triển Dịch vụ Đám mây CloudAZ**

*(Email này **kết thúc luồng thư** của khoản nợ. Vẫn giữ header `In-Reply-To` để nằm chung thread — khách mở ra thấy trọn vẹn từ lúc giao hồ sơ đến lúc tất toán.)*

---

## Danh sách biến số (Variables)

| Biến (trong Templates.md) | Go template (trong .gohtml) | Nguồn | Mô tả |
|------|-------|-------|
| `[customer_name]` | `{{.customer_name}}` | `CUSTOMERS.customer_name` | Tên khách hàng |
| `[customer_address]` | `{{.customer_address}}` | `CUSTOMERS.address` | Địa chỉ khách hàng |
| `[rep_name]` | `{{.rep_name}}` | `CUSTOMERS.rep_name` | Người đại diện PL |
| `[rep_address]` | `{{.rep_address}}` | `CUSTOMERS.rep_address` | Địa chỉ người đại diện |
| `[tax_code]` | `{{.tax_code}}` | `CONTRACTS.tax_code` | Mã số thuế |
| `[contract_number]` | `{{.contract_number}}` | `CONTRACTS.contract_number` | Số hợp đồng |
| `[contract_sign_date]` | `{{date .contract_sign_date}}` | `CONTRACTS.sign_date` | Ngày ký HĐ |
| `[product_name]` | `{{.product_name}}` | `DEBTS.product_name` | Tên sản phẩm |
| `[billing_cycle]` | `{{.billing_cycle}}` | `DEBTS.billing_cycle` | Kỳ cước (MM/YYYY) |
| `[total_principal]` | `{{money .total_principal}}` | `DEBTS.total_principal` | Nợ gốc (format tiền) |
| `[total_penalty]` | `{{money .total_penalty}}` | `DEBTS.total_penalty` | Lãi phạt (format tiền) |
| `[total_amount]` | `{{money .total_amount}}` | = `total_principal` + `total_penalty` | Tổng nợ |
| `[total_amount_in_words]` | `{{words .total_amount}}` | Helper function | Tổng nợ bằng chữ |
| `[penalty_rate]` | `{{pct .penalty_rate}}` | `DEBTS.penalty_rate` | % lãi phạt/ngày |
| `[ngay_x]` | `{{date .ngay_x}}` | `DEBTS.ngay_x` | Hạn chót (dd/mm/yyyy) |
| `[ngay_x+4]` | `{{date (plus .ngay_x 4)}}` | Derived = `ngay_x` + `debt_product_configs.suspend_milestone_days` | Mốc khóa DV (mặc định 4) |
| `[ngay_x+5]` | `{{date (plus .ngay_x 5)}}` | Derived = `ngay_x` + `suspend_milestone_days` + 1 | Ngày DV thực sự bị khóa |
| `[ngay_x+15]` | `{{date (plus .ngay_x 15)}}` | Derived = `ngay_x` + `debt_product_configs.legal_notice_milestone_days` | Mốc lập công văn (mặc định 15) |
| `[ngay_x+30]` | `{{date (plus .ngay_x 30)}}` | Derived = `ngay_x` + `debt_product_configs.legal_sue_milestone_days` | Mốc khởi kiện (mặc định 30) |
| `[days_overdue]` | `{{.days_overdue}}` | Derived = today - ngay_x | Số ngày quá hạn |
| `[sale_owner_name]` | `{{.sale_owner_name}}` | User map từ `DEBTS.sale_owner` | Tên Sales AM |
| `[today]` | `{{.today}}` | System | Ngày hiện tại |
| `[delivered_at]` | `{{date .delivered_at}}` | `DEBT_DELIVERIES.delivered_at` | Ngày khách ký nhận bản cứng |
| `[receiver_name]` | `{{.receiver_name}}` | `DEBT_DELIVERIES.receiver_name` | Người ký nhận bản cứng |
| `[payment_term_days]` | `{{.payment_term_days}}` | `CONTRACTS.payment_term_days` | Số ngày ân hạn theo HĐ |
| `[ngay_x_minus_2]` | `{{date (minus .ngay_x 2)}}` | Derived = `ngay_x` − 2 | Ngày đã gửi thông báo sắp đến hạn |
| `[customer_code]` | `{{.customer_code}}` | `CUSTOMERS.customer_code` | Mã KH viết tắt |
| `[publish_day]` / `[publish_month]` / `[publish_year]` | `{{day .publish_date}}` / `{{month .publish_date}}` / `{{year .publish_date}}` | Tách từ `DEBT_LEGAL_ACTIONS.publish_date` | Ngày/tháng/năm ký công văn |
| `[start_billing_month]` / `[end_billing_month]` / `[billing_year]` | `{{.start_billing_month}}` / `{{.end_billing_month}}` / `{{.billing_year}}` | Parse từ `DEBTS.billing_cycle` | Khoảng kỳ cước |
| `[document_number]` | `{{.document_number}}` | `DEBT_LEGAL_ACTIONS.document_number` | Số công văn |
| `[legal_publish_date]` | `{{date .legal_publish_date}}` | `DEBT_LEGAL_ACTIONS.publish_date` | Ngày ký công văn |
| `[legal_sent_at]` | `{{date .legal_sent_at}}` | `DEBT_LEGAL_ACTIONS.sent_at` | Ngày thực gửi công văn |
| `[reject_reason]` | `{{.reject_reason}}` | `debt_events.description` | Lý do Sales AM bảo lãnh |
| `[expected_payment_date]` | `{{date .expected_payment_date}}` | Input popup Từ chối khóa | Ngày khách cam kết thanh toán |
| `[appendix_number]` | `{{.appendix_number}}` | `DOCUMENT_TEMPLATES.appendix_number` | Số phụ lục |
| `[legal_locked_penalty]` | `{{money .legal_locked_penalty}}` | `DEBT_LEGAL_ACTIONS.locked_penalty` | Lãi phạt chốt tại ngày ký |
| `[legal_termination_date]` | `{{date .legal_termination_date}}` | `DEBT_LEGAL_ACTIONS.termination_date` | Ngày chấm dứt HĐ |
| `[payment_term_clause]` | `{{.payment_term_clause}}` | `DOCUMENT_TEMPLATES.payment_term_clause` | Điều khoản TT |
| `[penalty_clause]` | `{{.penalty_clause}}` | `DOCUMENT_TEMPLATES.penalty_clause` | Điều khoản phạt |
| `[grace_period_days]` | `{{.grace_period_days}}` | `DOCUMENT_TEMPLATES.grace_period_days` | Số ngày gia hạn |
| `[action]` | `{{.action}}` | Dynamic: "khóa" / "mở" | Hành động |
| `[suspend_status]` | `{{.suspend_status}}` | `DEBTS.suspend_status` | Trạng thái sau khi thực thi |
| `[paid_at]` | `{{date .paid_at}}` | `DEBTS.paid_at` | Ngày Kế toán xác nhận tiền về |
| `[paid_amount]` | `{{money .paid_amount}}` | `DEBTS.paid_amount` | Số tiền thực thu |
| `[executed_at]` | `{{.executed_at}}` | `debt_events.created_at` | Thời gian thực thi |
| `[executed_by]` | `{{.executed_by}}` | `debt_events.action_by` | Người thực thi |