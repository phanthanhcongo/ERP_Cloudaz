# Đặc tả Render Biểu mẫu & Thông báo Lark

**Ngày:** 2026-08-27 · **Phạm vi:** cách biến `[customer_name]` trong `mailTemplate/Templates.md` trở thành nội dung thật gửi đi

---

## 1. Vấn đề

`mailTemplate/Templates.md` viết cho **người đọc**: `[customer_name]`, `[total_penalty]`. Đây là quy ước tự đặt, không phải cú pháp của bất kỳ engine nào. Nếu không chốt, mỗi dev tự chọn một kiểu render — và công văn pháp lý in sai số tiền là chuyện ra tòa, không phải bug thường.

---

## 2. Chốt cú pháp: Go `html/template` + `map[string]any` khóa snake_case

```
[customer_name]   →   {{.customer_name}}
[total_principal] →   {{money .total_principal}}
[ngay_x]          →   {{date .ngay_x}}
```

### 2.1 Vì sao `map[string]any` chứ không phải struct

| | `map[string]any` (chọn) | `struct` |
|---|---|---|
| Thêm biến mới | Thêm 1 khóa vào map — **không sửa code** | Phải sửa struct, sửa converter, build lại |
| Khớp với `Templates.md` | Khóa trùng **1:1** tên cột DB và bảng biến số | Phải nhớ `customer_name` ↔ `CustomerName` |
| Sai tên biến | Render ra rỗng, không panic | Lỗi biên dịch |

Chọn map vì mục tiêu là **Admin tự sửa biểu mẫu không cần dev**. Nếu mỗi lần Admin muốn dùng thêm một biến lại phải chờ dev sửa struct thì mất hết ý nghĩa của bảng `document_templates`.

Đổi lại, gõ sai tên biến sẽ render ra rỗng chứ không báo lỗi → xử lý ở §5.

### 2.2 Vì sao `html/template` chứ không phải `text/template`

`{{.customer_name}}` lấy thẳng từ DB. Tên khách hàng chứa `<`, `&` hoặc mã độc sẽ vỡ HTML hoặc thành lỗ XSS trong email client. `html/template` tự escape **dữ liệu** nhưng không escape **markup của template** — đúng thứ cần.

Riêng công văn pháp lý có bảng HTML phức tạp: markup nằm trong `content` của template (được tin cậy, do Admin nhập), dữ liệu chèn vào vẫn được escape. An toàn.

---

## 3. Hàm định dạng (FuncMap)

Không để dev tự format ở từng chỗ — đăng ký một `FuncMap` dùng chung:

| Hàm | Vào | Ra | Dùng ở |
|---|---|---|---|
| `money` | `40500000` | `40.500.000` | Mọi số tiền |
| `words` | `40500000` | `Bốn mươi triệu năm trăm nghìn đồng` | `[total_amount_in_words]` trong công văn |
| `date` | `2026-09-01` | `01/09/2026` | Mọi ngày |
| `day` `month` `year` | `2026-09-16` | `16` / `09` / `2026` | Phần "Hà Nội, ngày… tháng… năm…" |
| `pct` | `0.0005` | `0,05` | `[penalty_rate]` — **lưu tỉ lệ, hiển thị phần trăm** |
| `plus` | `(ngay_x, 4)` | `05/09/2026` | `[ngay_x+4]`, `[ngay_x+15]`, `[ngay_x+30]` |

`pct` quan trọng: DB lưu `0.000500`, khách phải đọc thấy `0,05%/ngày`. Không có hàm này thì sớm muộn có người in `0.0005%` vào công văn.

**Định dạng số theo chuẩn Việt Nam:** dấu chấm phân cách hàng nghìn, dấu phẩy thập phân.

---

## 4. Nội dung template nằm ở đâu — `embed.FS` + đồng bộ khi khởi động

Không nhét HTML dài vào file `.sql`. Làm theo đúng tiền lệ **`SyncStaticPermissions`** đã có trong codebase (được nhắc tại `000168_fin_module_scaffold.up.sql:4`):

```
internal/modules/fin/templates/
├── reminder_delivered.gohtml
├── reminder_x_minus_2.gohtml
├── reminder_x_minus_1.gohtml
├── reminder_x.gohtml
├── reminder_x_plus_1.gohtml
├── suspend_warning_x_plus_4.gohtml
├── suspend_notice_customer.gohtml
├── unsuspend_notice_customer.gohtml
├── payment_confirmed.gohtml
├── suspend_rejected.gohtml
├── draft_pending_digest.gohtml
├── suspend_result.gohtml
├── legal_notify_x_plus_15.gohtml
├── sue_notify_x_plus_30.gohtml
├── legal_doc_cover.gohtml
└── legal_x_15.gohtml
```

`legal_doc_cover.gohtml` là **thư ngỏ gửi khách kèm PDF công văn** (`mail_track = LEGAL`), khác hẳn `legal_x_15.gohtml` là **nội dung công văn** để xuất PDF. Đừng render công văn vào thân thư — khách sẽ có hai bản và tranh cãi bản nào có hiệu lực.

**Luồng:**
1. Migration chỉ tạo bảng và seed **metadata** (`template_code`, `template_type`, `approval_mode`, `grace_period_days`…), `content` để rỗng.
2. Khi khởi động, `SyncStaticTemplates` đọc `embed.FS`, ghi nội dung vào `document_templates.content` với **`ON CONFLICT DO NOTHING`**.
3. Admin sửa nội dung qua `PUT /api/v1/fin/document-templates/:id` → lần khởi động sau **không bị ghi đè**.

**Ba lợi ích:** nội dung HTML nằm trong Git nên review được bằng diff; migration ngắn, dễ đọc; Admin vẫn toàn quyền sửa và không bao giờ bị deploy đè mất.

**Cách nhận biết Admin đã sửa:** thêm cột `is_customized BOOLEAN DEFAULT FALSE`, `PUT` đặt thành `true`, `SyncStaticTemplates` bỏ qua mọi dòng `is_customized = true`.

---

## 5. Kiểm tra biến — bắt lỗi trước khi gửi khách

Vì dùng map nên gõ sai `{{.customer_nam}}` sẽ render ra chuỗi rỗng. Với email nhắc nợ thì khó chịu; với **công văn pháp lý thì không chấp nhận được** — một ô số tiền trống là mất hiệu lực văn bản.

**Ba lớp chặn:**

1. **Khi lưu template** (`PUT /document-templates/:id`): parse thử, đối chiếu mọi biến dùng trong template với danh sách biến hợp lệ (bảng Variables của `Templates.md`). Có biến lạ → `400`, kèm tên biến sai.
2. **Khi render**: dùng `Option("missingkey=error")` của Go template. Biến không có trong map → trả lỗi, **không gửi**, ghi `debt_email_logs.send_status = 'failed'` với `last_error` rõ tên biến.
3. **Riêng `LEGAL_DOC`**: trước khi xuất PDF, kiểm tra bắt buộc có đủ `customer_name`, `rep_name`, `tax_code`, `contract_number`, `total_amount`, `total_amount_in_words`. Thiếu → `422 FIN_DEBT_MISSING_LEGAL_INFO` (đã có trong `ERP_API.md` mục *Pháp lý*).
4. **Riêng `LEGAL_DOC_COVER`**: trước khi gửi, kiểm tra file PDF trỏ bởi `debt_legal_actions.file_url` **tồn tại và đọc được**. Không thì `send_status = 'failed'`, `last_error` ghi rõ, và **không** lật `legal_status`. Thư công văn thiếu file đính kèm là thư mất hết ý nghĩa.

---

## 6. Bảng chuyển đổi biến

Toàn bộ biến trong `mailTemplate/Templates.md` chuyển theo quy tắc: `[tên_biến]` → `{{.tên_biến}}`, thêm hàm định dạng nếu là tiền/ngày/phần trăm.

| Trong Templates.md | Trong file `.gohtml` |
|---|---|
| `[customer_name]` | `{{.customer_name}}` |
| `[total_principal]` | `{{money .total_principal}}` |
| `[total_penalty]` | `{{money .total_penalty}}` |
| `[total_amount]` | `{{money .total_amount}}` |
| `[total_amount_in_words]` | `{{words .total_amount}}` |
| `[penalty_rate]` | `{{pct .penalty_rate}}` |
| `[ngay_x]` | `{{date .ngay_x}}` |
| `[ngay_x+4]` | `{{date (plus .ngay_x 4)}}` |
| `[ngay_x+5]` | `{{date (plus .ngay_x 5)}}` |
| `[ngay_x+15]` | `{{date (plus .ngay_x 15)}}` |
| `[ngay_x+30]` | `{{date (plus .ngay_x 30)}}` |
| `[delivered_at]` | `{{date .delivered_at}}` |
| `[publish_day]` / `[publish_month]` / `[publish_year]` | `{{day .publish_date}}` / `{{month .publish_date}}` / `{{year .publish_date}}` |
| `[days_overdue]` | `{{.days_overdue}}` |
| Còn lại | `{{.tên_biến}}` |

`mailTemplate/Templates.md` **giữ nguyên ký hiệu `[…]`** — đó là tài liệu nghiệp vụ cho BA và Kế toán đọc. File `.gohtml` là bản thi công.

---

## 7. Thông báo Lark — dùng nguyên cơ chế ticket, không thiết kế thẻ mới

Đọc `ticket/service/ticket_reminder_drain_job.go:83-85`:

```go
func (j *TicketReminderDrainJob) sendCard(ctx context.Context, row entity.TicketReminderOutboxRow) error {
    return j.lark.SendCardChecked(ctx, row.RecipientEmail, row.Title, row.Body, row.TicketURL)
}
```

**Thẻ Lark chỉ có 4 tham số:** email người nhận, tiêu đề, nội dung, đường dẫn. Không có thiết kế thẻ nào để bàn — module công nợ gọi **cùng một hàm**, truyền `debt_url` thay cho `ticket_url`.

- `LarkNotifier` là **singleton của nền tảng** (`platformservice.LarkNotifier`), đã dựng sẵn, dùng chung credentials của ERP. **Không cần app Lark riêng.**
- `NewTicketReminderDrainJob` có ghi rõ: *"reuses already-built singletons — zero new construction"*. Job công nợ làm y hệt.
- `SendCardChecked` theo hợp đồng **degrade-only**: Lark lỗi thì trả lỗi để retry, không làm đổ nghiệp vụ.

**Nội dung thẻ** lấy từ danh mục sự kiện tại `ERP_Platform_Integration.md` mục *Danh mục thông báo* — cột `title` là tiêu đề thẻ, phần mô tả là `body`, `debt_url` trỏ về đúng dòng nợ trên ERP.

---

## 8. Hạ tầng job — dùng `background_jobs`, không hardcode giờ

Codebase có sẵn hạ tầng job cấu hình được (`ticket_reminder_drain_job.go:88-108`):

- `jobRepo.GetByKey(ctx, "<job_key>")` đọc cấu hình từ bảng `background_jobs`
- Cấu hình JSON: `poll_interval_seconds`, `batch_size`, `enabled` — **hot-reload**, đổi không cần deploy
- `runUnderJobLock(ctx, jobLocker, "<job_key>", fn)` — advisory lock, chống chạy trùng nhiều instance
- Mỗi lượt ghi lại trạng thái `SUCCESS` / lỗi cuối

**Danh sách 6 job và giờ chạy: xem `ERP_API.md` §0.9** — đó là nơi duy nhất giữ bảng này, đừng chép lại ở đây để khỏi lệch.

Riêng `debt_reminder_drain` lấy đúng tham số mặc định của `ticket_reminder_drain`: 60 giây, batch 20, thử lại tối đa 3 lần.

**Hệ quả:** giờ chạy và bật/tắt job là **dữ liệu**, không phải hằng số trong code. Muốn dời giờ tính lãi sang 07:00 thì sửa một dòng trong `background_jobs`.

---

## 9. Việc cần làm

- [ ] Tạo các file `.gohtml` từ nội dung trong `mailTemplate/Templates.md`
- [ ] Đăng ký `FuncMap` 8 hàm (`money`, `words`, `date`, `day`, `month`, `year`, `pct`, `plus`)
- [ ] Viết `SyncStaticTemplates` theo khuôn `SyncStaticPermissions`
- [ ] Thêm cột `is_customized` vào `document_templates`
- [ ] Đăng ký các job vào `background_jobs` — danh sách tại `ERP_API.md` mục *Background job*
- [ ] Kiểm thử `words` với các mốc tiền dễ sai: 1.000.000 / 101.000 / 15.000.000.000
- [ ] Dựng MIME `multipart/mixed` cho `LEGAL_DOC_COVER` (thân thư HTML + PDF công văn), đóng gói bằng `gomail` rồi base64url vào `gmail.Message{Raw: ...}` — xem `ERP_Platform_Integration.md` mục *Kênh 1 — Email*
