# ERP CloudAZ — Đặc tả API Thu hồi Công nợ

**Phiên bản:** 3.0 · **Ngày:** 2026-08-27 · **Phạm vi:** Sprint 1 — GWS Standard

> **v3.0 — bám sát codebase, tối ưu cho mở rộng.** Đường dẫn, format response/lỗi, phân quyền, background job và hàng đợi thông báo đều theo đúng tiền lệ đang chạy trong `Projects/erp`.
>
> **`API.md` (hệ thống CM) giữ nguyên, không đổi.**

---

## 0. Quy ước

### 0.1 Cấu trúc module & route

Đặt dưới nhóm **`fin`** sẵn có (`router_fin.go`) để thừa hưởng middleware, license gate và audit của module Finance & Accounting. Mã nguồn theo đúng bố cục `internal/modules/fin/`:

```
internal/modules/fin/
├── entity/     debt.go, debt_delivery.go, debt_reminder_outbox.go, debt_email_log.go, debt_product_config.go
├── repo/       debt_repository.go + _impl.go
├── service/    debt_service.go, debt_penalty_job.go, debt_reminder_job.go,
│               debt_suspend_job.go, debt_notification_drain_job.go
└── handler/    debt_handler.go, debt_customer_handler.go, debt_legal_handler.go
```

**Tài nguyên đặt ngang hàng, không lồng hết dưới `/debts`** — để module fin khác dùng lại được `customers` / `contracts`:

| Nhóm | Đường dẫn |
|---|---|
| Công nợ | `/api/v1/fin/debts` |
| Khách hàng | `/api/v1/fin/customers` |
| Người liên hệ | `/api/v1/fin/customer-contacts` |
| Hợp đồng | `/api/v1/fin/contracts` |
| Biểu mẫu | `/api/v1/fin/document-templates` |
| Cấu hình sản phẩm | `/api/v1/fin/debt-product-configs` |

### 0.2 Hai kiểu cổng quyền

| Kiểu | Dùng khi | Cách làm |
|---|---|---|
| `middleware.AuthorizePermission("debt:xxx")` | Endpoint thay đổi dữ liệu | Chặn tại router |
| **Soft-gate** (`Authenticate()` only) | Endpoint đọc, phạm vi tùy người gọi | Không gắn middleware; **service thu hẹp câu SQL** theo actor |

Soft-gate theo đúng tiền lệ `fin.GET("/project-costs", projectCostHandler.List)` (`router_fin.go:127`): Sales AM vào được màn hình, nhưng service ép `WHERE sale_owner = <email actor>` ngay trong SQL. Actor có `debt:dashboard` thì thấy tất cả. **Không tin filter từ client.**

```go
// router_fin.go
fin.GET  ("/debts",                                                              debtHandler.List)   // soft-gate
fin.GET  ("/debts/:id",                                                          debtHandler.Get)    // soft-gate
fin.POST ("/debts/sync-cm",     middleware.AuthorizePermission("debt:sync"),     debtHandler.SyncCM)
fin.PATCH("/debts/sync-status", middleware.AuthorizePermission("debt:confirm"),  debtHandler.UpdateSyncStatus)
fin.PATCH("/debts/:id/settle",  middleware.AuthorizePermission("debt:settle"),   debtHandler.Settle)
```

### 0.3 Xác thực

Dùng nguyên hạ tầng sẵn có: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, JWT **RS256**, header `Authorization: Bearer <token>`. Module công nợ **không xây gì thêm**.

### 0.4 Format response

Danh sách — `{ "data": [ … ], "total": 42 }` · Một bản ghi — `{ "data": { … } }` · Không trả dữ liệu — `{ "ok": true }`
*(theo `project_cost_handler.go:216,527`)*

### 0.5 Format lỗi

`{ "error": "Thông điệp", "code": "FIN_DEBT_NOT_CONFIRMED" }` *(theo `handler/response.go:14-27`)*

Handler gọi `platformhandler.RespondError(c, apperror.ErrXxx("…"))`. Mã HTTP nằm trong `appErr.HTTPStatus`. Đặt tên hằng số theo tiền lệ `apperror.CodeFIN…`:

| HTTP | `code` | Hằng số Go |
|---|---|---|
| 400 | `FIN_DEBT_INVALID_PAID_DATE` | `CodeFINDebtInvalidPaidDate` |
| 400 | `FIN_DEBT_REJECT_REASON_REQUIRED` | `CodeFINDebtRejectReasonRequired` |
| 403 | `FIN_DEBT_SALES_APPROVAL_REQUIRED` | `CodeFINDebtSalesApprovalRequired` |
| 409 | `FIN_DEBT_ALREADY_SETTLED` | `CodeFINDebtAlreadySettled` |
| 409 | `FIN_DEBT_INVALID_TRANSITION` | `CodeFINDebtInvalidTransition` |
| 409 | `FIN_DEBT_STALE_VERSION` | `CodeFINDebtStaleVersion` |
| 409 | `FIN_DEBT_LEGAL_DOC_NOT_SENT` | `CodeFINDebtLegalDocNotSent` |
| 422 | `FIN_DEBT_NOT_CONFIRMED` | `CodeFINDebtNotConfirmed` |
| 422 | `FIN_DEBT_NO_RECIPIENT` | `CodeFINDebtNoRecipient` |
| 422 | `FIN_DEBT_HARDCOPY_NOT_DELIVERED` | `CodeFINDebtHardcopyNotDelivered` |
| 422 | `FIN_DEBT_MISSING_CONFIG` | `CodeFINDebtMissingConfig` |
| 422 | `FIN_DEBT_INSUFFICIENT_PAYMENT` | `CodeFINDebtInsufficientPayment` |
| 422 | `FIN_DEBT_MISSING_LEGAL_INFO` | `CodeFINDebtMissingLegalInfo` |
| 422 | `FIN_DEBT_LAST_TO_CONTACT` | `CodeFINDebtLastToContact` |
| 409 | `FIN_DEBT_DUPLICATE_EMAIL` | `CodeFINDebtDuplicateEmail` |
| 429 | `FIN_DEBT_EMAIL_RATE_LIMIT` | `CodeFINDebtEmailRateLimit` |

**Mã của nền tảng — dùng lại, KHÔNG thêm tiền tố `FIN_DEBT_`:**

| HTTP | `code` | Hằng số Go |
|---|---|---|
| 400 | `INVALID_PAYLOAD` | `apperror.CodeInvalidPayload` *(đã có)* |
| 400 | `INVALID_ID` | `apperror.CodeInvalidID` *(đã có)* |
| 401 | `UNAUTHORIZED` | *(đã có)* |
| 403 | `FORBIDDEN_ROLE` | *(đã có)* — thiếu permission |
| 404 | `NOT_FOUND` | *(đã có)* |
| 500 | `INTERNAL_SERVER` | `apperror.CodeInternalServer` *(đã có)* |

Câu tiếng Việt hiển thị: `wireFrame/UI_Wireframes.md` §2.4.

### 0.6 Phân quyền

11 permission `debt:*`, cấp qua `roles` → `role_permissions`, join **theo NAME**. Role thật: `Sales`, `Sales Leader`, `HRA`, `CEO`, `CFO`, `Admin` (đã có) + `Accountant`, `Chief Accountant`, `Procurement`, `Legal` (seed mới). Chi tiết: `Database_Schema.md` §15.

### 0.7 Khóa lạc quan (Optimistic locking)

`debts` có cột `lock_version` — theo tiền lệ `ProjectCostFullDTO.LockVersion` (`project_cost_handler.go:64`). Mọi request `PATCH` thay đổi trạng thái **bắt buộc** gửi kèm `lock_version` đang giữ:

```json
{ "lock_version": 7, "…": "…" }
```
Không khớp → `409 FIN_DEBT_STALE_VERSION`, kèm `{"current_version": 9}`. Kế toán và Sales cùng mở một khoản nợ là chuyện hằng ngày — không có cái này thì thao tác sau âm thầm ghi đè thao tác trước.

### 0.8 `allowed_actions` — Frontend không cài lại state machine

Mọi response của `GET /debts` và `GET /debts/:id` trả kèm:

```json
"allowed_actions": ["STAMP", "SEND_EMAIL", "CONFIG"]
```

Danh sách do **service tính** từ `sync_status` + `debt_status` + `suspend_status` + `legal_status` + permission của actor. Frontend chỉ render nút theo mảng này.

**Bảng ánh xạ — service cài đúng theo bảng này.** Một action chỉ vào mảng khi thỏa **cả 3**: điều kiện trạng thái, permission, và (với các action theo phạm vi) actor đúng người phụ trách.

| Action | Điều kiện trạng thái | Permission | Nút trên UI |
|---|---|---|---|
| `CONFIRM` | `sync_status = PENDING_REVIEW` | `debt:confirm` | ✅ Xác nhận đưa vào luồng |
| `EXCLUDE` | `sync_status = PENDING_REVIEW` | `debt:confirm` | 🚫 Loại khỏi luồng |
| `CONFIG` | `sync_status = CONFIRMED` **và** `debt_status ≠ PAID` | `debt:config` | ⚙️ Cấu hình |
| `STAMP` | `sync_status = CONFIRMED` **và** `hardcopy_status = NONE` | `debt:delivery` | 🖨️ Đã đóng dấu |
| `POST` | `hardcopy_status = STAMPED` | `debt:delivery` | 🚚 Đã giao bưu điện |
| `DELIVER` | `hardcopy_status = POSTED` **và** `contracts.payment_term_days IS NOT NULL` | `debt:delivery` | ✅ Xác nhận đã phát |
| `SEND_EMAIL` | `hardcopy_status = DELIVERED` **và** `debt_status ≠ PAID` **và** `has_contact = true` **và** `last_email_sent_date ≠ today` | `debt:send_email` | 📧 Gửi Mail |
| `LOG_CALL` | `debt_status ≠ PAID` | soft-gate — actor là `sale_owner`, hoặc có `debt:read` toàn cục | 📞 Log Call |
| `SETTLE` | `sync_status = CONFIRMED` **và** `debt_status ∈ {IN_TERM, OVERDUE}` | `debt:settle` | 💲 Tất toán |
| `SUSPEND_APPROVE` | `suspend_status = WAITING_SALES` | `debt:suspend_approve` — actor là `sale_owner` hoặc `Sales Leader` | Duyệt Khóa |
| `SUSPEND_REJECT` | `suspend_status = WAITING_SALES` | `debt:suspend_approve` — như trên | Từ chối |
| `SUSPEND_EXECUTE` | `suspend_status = WAITING_PROCUREMENT` | `debt:suspend_execute` | Xác nhận Đã Khóa |
| `UNSUSPEND_EXECUTE` | `suspend_status = WAITING_UNSUSPEND` | `debt:suspend_execute` | Xác nhận Đã Mở |
| `LEGAL_DRAFT` | `debt_status = OVERDUE` **và** `days_overdue ≥ legal_notice_milestone_days` **và** chưa có `debt_legal_actions` nào | `debt:legal` | Soạn Công văn |
| `LEGAL_SEND` | công văn mới nhất có `legal_status = PREPARING` | `debt:legal` | 📮 Xác nhận đã gửi |
| `LEGAL_SUE` | công văn mới nhất có `legal_status = SENT` **và** `days_overdue ≥ legal_sue_milestone_days` | `debt:legal` | Hủy HĐ & Kiện |

**Ba quy tắc bao trùm** — kiểm tra trước tất cả điều kiện trên:

1. `sync_status = EXCLUDED` → `allowed_actions` **rỗng**. Bản ghi đã loại khỏi luồng thì không thao tác gì được.
2. `debt_status = PAID` → chỉ còn `UNSUSPEND_EXECUTE` (nếu đang chờ mở khóa). Hồ sơ đã đóng.
3. Actor không có permission tương ứng → action **không xuất hiện**. Giao diện ẩn hẳn nút, không hiện nút xám (`UI_Wireframes.md` §2.7).

**Vì sao quan trọng cho mở rộng:** thêm trạng thái hoặc đổi luật chuyển trạng thái ở Sprint sau chỉ sửa bảng này ở backend, Frontend không phải đụng tới. Mốc `legal_notice_milestone_days` / `legal_sue_milestone_days` đọc từ `debt_product_configs`, không hardcode.

### 0.9 Background job — **không phải HTTP cron**

Codebase chạy job nền bằng Go, không phơi qua HTTP: `crm/service/campaign_auto_transition_job.go`, `ticket/service/ticket_report_snapshot_job.go`. Job công nợ theo đúng khuôn đó, chạy dưới `runUnderJobLock` (advisory lock của PostgreSQL, đã có sẵn).

Giờ chạy **không hardcode** — đăng ký vào bảng `background_jobs` có sẵn, đọc qua `jobRepo.GetByKey(ctx, "<job_key>")`, hot-reload không cần deploy (`ticket_reminder_drain_job.go:88-108`).

| `job_key` | Job (Go) | Mặc định | US |
|---|---|---|---|
| `debt_penalty` | `DebtPenaltyJob` — **① hết hạn nháp cũ *(chỉ làn `REMINDER`)* ② lật `IN_TERM → OVERDUE` ③ cộng lãi** | **00:05** | DC-05 AC2 |
| `debt_cm_sync` | `DebtCMSyncJob` — kéo ĐNTT từ CM *(tùy chọn)*, xong gọi lại `DebtPenaltyJob.RunOnce` | 07:45 | BD-09 |
| `debt_suspend_request` | `DebtSuspendRequestJob` | 08:25 | DC-07 AC4 |
| `debt_reminder_sweep` | `DebtReminderSweepJob` — **chỉ soạn nháp**, không gửi | 08:30 | DC-04 AC10 |
| `debt_legal_notify` | `DebtLegalNotifyJob` — chỉ **enqueue** | 08:30 | DC-09 AC3 |
| `debt_reminder_drain` | `DebtReminderDrainJob` — **drain**, thực sự gửi | mỗi 60s, batch 20, tối đa 3 lần thử | — |

**`debt_penalty` chạy 00:05 — ngay khi sang ngày mới**, không chờ giờ hành chính. Lãi chậm trả tính theo ngày lịch, nên qua 0h là số dư phải tăng ngay; để tới 08:00 thì suốt 8 tiếng đầu ngày mọi màn hình và cả công văn xuất trong khoảng đó đều hiển thị thiếu một ngày lãi.

Thứ tự bắt buộc trong giờ hành chính: kéo dữ liệu → sinh yêu cầu khóa → quét nhắc nợ. Mỗi job chạy trong `runUnderJobLock(ctx, jobLocker, "<job_key>", fn)` — advisory lock riêng, chống chạy trùng khi có nhiều instance. Tham số của `debt_reminder_drain` lấy đúng mặc định của `ticket_reminder_drain`.

**Chỉ một endpoint HTTP duy nhất cho job**, dành cho `Admin` chạy tay khi cần vá dữ liệu:

```
POST /api/v1/fin/debts/jobs/:jobName/run     — AuthorizePermission("debt:sync")
```
`jobName` là `job_key` trong bảng `background_jobs`: `debt_cm_sync` | `debt_penalty` | `debt_suspend_request` | `debt_reminder_sweep` | `debt_legal_notify` | `debt_reminder_drain`. Trả `{ "data": { "job": "debt_penalty", "processed": 38, "skipped": 6, "failed": 0 } }`.

### 0.10 Ba kênh thông báo — dùng nguyên cơ chế đã có

**Không viết cơ chế mới.** Cả 3 kênh đều đã tồn tại trong codebase:

| Kênh | Dùng lại | Bảng |
|---|---|---|
| **Lark** | `ticket_reminder_outbox` + drain job | `debt_reminder_outbox` — **mirror 1:1**, chỉ đổi `ticket_id`→`debt_id`, `ticket_url`→`debt_url` |
| **In-app** | Bảng `notifications` + 4 endpoint của nền tảng | *(không thêm bảng)* |
| **Email khách hàng** | **Gmail API** `gmail/v1`, service account mạo danh hòm thư dùng chung | `debt_email_logs` |

Job quét **chỉ enqueue** trong vùng khóa (không gọi `LarkNotifier.SendCard` đồng bộ); `DebtReminderDrainJob` với advisory lock riêng mới thực sự gửi — đúng như comment trong `ticket_reminder_outbox.go`.

**Vì sao email tách riêng, không nhét chung outbox Lark:** cần `message_id` để nối luồng thư (DC-04 AC6), cần `from_email`/`to_emails`/`cc_emails` đầy đủ làm **bằng chứng pháp lý trước tòa**, và cần `template_code`. Shape của `TicketReminderOutboxRow` không có ba thứ đó — thêm vào là sửa mẫu có sẵn. Trạng thái hai bảng cũng khác: Lark máy tự gửi (`pending`/`sent`/`failed`), email khách bắt buộc qua người duyệt nên có thêm `draft`/`queued`/`cancelled`.

### 0.11 Kiểu dữ liệu

`debts.id` và id nội bộ là **số nguyên** (`BIGSERIAL`, tương thích `notifications.ref_id`). `customers.id`, `contracts.id`, `documents.id` là **chuỗi** (ObjectId gốc từ CM). JSON `snake_case`. Ngày `YYYY-MM-DD`, thời gian RFC3339. Tiền là số, không phải chuỗi. Múi giờ nghiệp vụ `Asia/Ho_Chi_Minh`.

### 0.12 Phân trang

Offset-based (`page` mặc định 1, `size` mặc định 30), trả kèm `total` — theo `project_cost_handler.go:479,527`.

### 0.13 Audit

Nền tảng **đã tự ghi** `activity_logs` cho mọi request mutating (`ActivityAuditMiddleware`, `router.go:70`). Endpoint đánh dấu **📝** ghi thêm `debt_events` — **timeline nghiệp vụ** cho người dùng cuối đọc, khác vai trò với `activity_logs`.

*(Đổi tên `debt_audit_logs` → `debt_events` cho khớp tiền lệ `GET /project-costs/:id/events`.)*

---

## 1. Cấu hình theo sản phẩm ⭐ *(mới — điểm mở rộng chính)*

Sprint 1 chỉ có GWS Standard, nhưng roadmap còn GWS Flex, AWS, GCP, GMP. Các mốc X+4 / X+15 / X+30, bộ template và lãi mặc định **không được hardcode** — đưa vào bảng cấu hình, Sprint sau chỉ cần thêm một dòng.

| Endpoint | Quyền |
|---|---|
| `GET /api/v1/fin/debt-product-configs` | soft-gate |
| `PUT /api/v1/fin/debt-product-configs/:id` 📝 | `debt:config` |

```json
{ "data": {
  "id": 1,
  "product_name": "GWS Standard",
  "is_active": true,
  "default_penalty_rate": 0.0005,
  "default_payment_term_days": 7,
  "suspend_milestone_days": 4,
  "legal_notice_milestone_days": 15,
  "legal_sue_milestone_days": 30,
  "reminder_before_due_days": [2, 1, 0],
  "reminder_daily_after_delivered": true,
  "max_email_per_day": 1,
  "template_set": {
    "delivered":       "REMINDER_DELIVERED",
    "before_due":      ["REMINDER_X_MINUS_2", "REMINDER_X_MINUS_1", "REMINDER_X"],
    "overdue":         "REMINDER_X_PLUS_1",
    "suspend_warning": "SUSPEND_WARNING_X_PLUS_4",
    "legal_notice":    "LEGAL_NOTIFY_X_PLUS_15",
    "sue_notify":      "SUE_NOTIFY_X_PLUS_30"
  },
  "sales_lead_email_override": null
} }
```

Mọi job đọc mốc từ bảng này, **không dùng hằng số trong code**. `sales_lead_email_override` để trống thì truy theo cây tổ chức (mục *Cron sinh yêu cầu duyệt khóa*).

> **`template_set` chỉ chứa template do job soạn tự động — toàn bộ làn `REMINDER`.** Key `legal_notice` trỏ `LEGAL_NOTIFY_X_PLUS_15` (email **nội bộ** báo Pháp lý), **không phải** `LEGAL_X_15` (công văn giấy) hay `LEGAL_DOC_COVER` (thư ngỏ gửi khách) — hai cái sau thuộc làn `LEGAL`, do Pháp lý tự bấm, job không đụng tới.

---

## 2. Đồng bộ dữ liệu CM

### 2.1 `POST /api/v1/fin/debts/sync-cm` 📝 — `debt:sync`

Kế toán bấm "🔄 Đồng bộ dữ liệu CM", hoặc CM gọi webhook sau khi Gen ĐNTT (`NFR_Sprint1.md` §1).

**Request:** `{ "start_date": "2026-08-01", "end_date": "2026-08-31", "product_names": ["GWS Standard"] }`
Bỏ trống `product_names` → lấy mọi `product_name` có `is_active = true` trong `debt_product_configs`.

**Xử lý:** login CM (cache JWT 4h) → `GET {CM}/api/payment-request/all` theo khoảng ngày (**không truyền `status`** — CM không có trường này) → lọc local theo `product.name` → upsert `debts` theo `dntt_cm_id`, bản ghi mới đặt `sync_status = 'PENDING_REVIEW'`, **không ghi đè** dữ liệu nhập tay → lưu `documents` → đồng bộ master data.

```json
{ "data": { "synced_at": "2026-08-27T09:12:00+07:00",
  "debts_created": 12, "debts_skipped": 3, "pending_review": 12,
  "customers_upserted": 8, "contracts_upserted": 9, "documents_saved": 12,
  "warnings": [ { "dntt_cm_id": "66f1…", "message": "Không tìm thấy contractId, bỏ qua" } ] } }
```

Retry 3 lần backoff 2/4/8s — `NFR_Sprint1.md` §2.

---

## 3. Công nợ

### 3.1 `GET /api/v1/fin/debts` — soft-gate

**Query:** `page`, `size`, `sync_status[]`, `debt_status[]`, `suspend_status[]`, `hardcopy_status[]`, `legal_status[]`, `product_name`, `billing_cycle`, `customer_id`, `contract_id`, `sale_owner`, `ngay_x_lte`, `ngay_x_gte`, `keyword`, `sort`

```json
{ "data": [ {
    "id": 9127,
    "lock_version": 7,
    "dntt_cm_id": "66f1a2…",
    "customer": { "id": "c001", "customer_name": "Công ty TNHH B", "has_contact": true },
    "contract": { "id": "ct01", "contract_number": "EPIC-02", "payment_term_days": 7 },
    "product_name": "GWS Standard",
    "billing_cycle": "08/2026",
    "sync_status": "CONFIRMED",
    "total_principal": 40000000,
    "total_penalty": 500000,
    "total_amount": 40500000,
    "penalty_rate": 0.0005,
    "ngay_x": "2026-09-01",
    "days_overdue": 4,
    "paid_at": null,
    "paid_amount": null,
    "promised_payment_date": "2026-09-12",
    "debt_status": "OVERDUE",
    "suspend_status": "WAITING_SALES",
    "hardcopy_status": "DELIVERED",
    "legal_status": null,
    "email_stage_label": "Nhắc quá hạn",
    "email_send_state": "SENT",
    "email_sent_count": 3,
    "last_template_code": "REMINDER_X_PLUS_1",
    "last_email_sent_date": "2026-09-04",
    "call_logs_count": 1,
    "last_call_note": "Khách hứa thứ 2 trả",
    "document": { "id": "d01", "name": "[GWS Standard][Công ty B][08-2026]", "extension": ".docx" },
    "sale_owner": "am.a@cloudaz.io",
    "config_missing": false,    <!-- true khi thiếu penalty_rate, payment_term_days, customer_code, rep_name, rep_address, tax_code -->
    "allowed_actions": ["LOG_CALL", "SUSPEND_APPROVE", "SUSPEND_REJECT"]
} ], "total": 42 }
```

`hardcopy_status`, `legal_status` là **trường join** từ bảng con, không phải cột của `debts`. `legal_status = null` = chưa có công văn nào.

`email_stage_label` và `email_send_state` là **giá trị suy ra**, không có cột nào lưu (`Database_Schema.md` §9a):
- `email_send_state` ∈ `UNSENT` | `SENT` | `FAILED` — `FAILED` khi còn dòng `debt_email_logs` hết lượt thử mà chưa gửi được
- `email_stage_label` lấy từ `document_templates.stage_label` của `last_template_code`

Frontend hiển thị `"{email_stage_label} (Lần {email_sent_count})"`, ví dụ *"Nhắc quá hạn (Lần 3)"*. Thêm giai đoạn mới chỉ cần insert template kèm `stage_label`, không sửa Frontend.

`config_missing` = `true` khi thiếu 1 trong: `penalty_rate` (trên `debts`), `payment_term_days` (trên `contracts`), `customer_code` / `rep_name` / `rep_address` (trên `customers`), `tax_code` (trên `contracts`). Grid Kế toán hiển thị cảnh báo đỏ *"Thiếu cấu hình"* ở cột **Alert**. Tab Legal (DC-09) cũng kiểm tra trường này — nếu `config_missing` thì hiển thị banner đỏ *"Khách hàng thiếu thông tin — cần Kế toán nhập `customer_code` / `rep_name` / `rep_address` trước khi soạn công văn"*, nút "Soạn Công văn" vẫn enabled nhưng khi bấm sẽ trả `422 FIN_DEBT_MISSING_LEGAL_INFO`.

### 3.2 `GET /api/v1/fin/debts/:id` — soft-gate

Như 3.1, thêm `deliveries`, `collections`, `product_config`.

### 3.3 `GET /api/v1/fin/debts/summary` — soft-gate

`{ "data": { "total_debt": 150000000, "overdue_customer_count": 5, "waiting_sales_approval_count": 2 } }`

### 3.4 `PATCH /api/v1/fin/debts/sync-status` 📝 ⭐ — `debt:confirm`

**Cổng vào của toàn bộ luồng.** CM không có trường trạng thái để lọc, nên ERP kéo hết về rồi để Kế toán rà.

```json
{ "debt_ids": [9127, 9128], "sync_status": "CONFIRMED", "reason": null }
```
`reason` bắt buộc khi `EXCLUDED`. Chỉ cho `PENDING_REVIEW → CONFIRMED` / `→ EXCLUDED`; khác → `409 FIN_DEBT_INVALID_TRANSITION`.

**Response:** `{ "data": { "updated": 2, "failed": [] } }`

**Ràng buộc hạ nguồn:** mọi endpoint và job nghiệp vụ đều kiểm tra `sync_status = 'CONFIRMED'` trước → vi phạm trả `422 FIN_DEBT_NOT_CONFIRMED`.

### 3.5 `PATCH /api/v1/fin/debts/:id/config` 📝 — `debt:config`

`{ "penalty_rate": 0.0005, "lock_version": 7 }` — tỉ lệ thập phân/ngày (0.05%/ngày → `0.0005`).

**Không có trần.** Mức lãi do Kế toán nhập theo điều khoản hợp đồng đã ký; API chỉ chặn `<= 0` (`400 INVALID_PAYLOAD`). Nếu giá trị vượt 1%/ngày, response trả kèm cờ cảnh báo để giao diện hỏi lại — **không chặn lưu**:
```json
{ "data": { "penalty_rate": 0.05, "warning": "RATE_UNUSUALLY_HIGH" } }
```

### 3.6 `GET /api/v1/fin/debts/:id/document-url` — soft-gate

`{ "data": { "url": "https://s3…", "file_name": "…", "expires_in": 900 } }`

### 3.7 Bộ sưu tập con — soft-gate, theo tiền lệ `/project-costs/:id/*`

| Endpoint | Nội dung |
|---|---|
| `GET /debts/:id/events` | Timeline nghiệp vụ (BD-20 AC1) |
| `GET /debts/:id/penalty-logs` | Bảng giải trình lãi từng ngày |
| `GET /debts/:id/legal-documents` | Danh sách công văn |
| `GET /debts/:id/call-logs` | Lịch sử đôn đốc |
| `GET /debts/:id/notifications` | Lịch sử gửi từ outbox (3 kênh) |

### 3.8 `GET /api/v1/fin/debts/export/excel` — `debt:read`

Theo tiền lệ `/project-costs/:id/export/excel`. Nhận cùng bộ query như 3.1. Trả file nhị phân, không phải JSON.

---

## 4. Khách hàng, Liên hệ, Hợp đồng

| Endpoint | Quyền | Khi nào gọi |
|---|---|---|
| `GET /api/v1/fin/customers/:id` | soft-gate | Mở chi tiết khách hàng |
| `PATCH /api/v1/fin/customers/:id` 📝 | `debt:config` | Nhập `rep_name`, `rep_address`, `customer_code`, xác nhận `address` |
| `GET /api/v1/fin/customers/:id/contacts` | soft-gate | Khu vực "Người liên hệ nhận thư" (BD-09 AC9) |
| `POST /api/v1/fin/customers/:id/contacts` 📝 | `debt:config` | Thêm liên hệ |
| `PATCH /api/v1/fin/customer-contacts/:id` 📝 | `debt:config` | Sửa, hoặc tắt bằng `is_active=false` |
| `PATCH /api/v1/fin/contracts/:id` 📝 | `debt:config` | Nhập `payment_term_days`, xác nhận `sign_date` |

```json
{ "contact_name": "Trần Thị B", "email": "ketoan@epic.vn", "phone": "0901234567",
  "position": "Kế toán trưởng", "recipient_role": "TO", "is_primary": true }
```
`email` unique theo `customer_id` (ràng buộc DB). `is_primary=true` thì service gỡ cờ của contact khác — partial unique index chặn ở tầng DB. **Không xóa cứng**, chỉ `is_active=false` để giữ vết pháp lý (`NFR_Sprint1.md` §4).

---

## 5. Chuyển phát bản cứng (DC-03)

Cả 3 endpoint yêu cầu `sync_status = 'CONFIRMED'` và gửi kèm `lock_version`.

| Endpoint | Quyền | Từ → Sang |
|---|---|---|
| `PATCH /debts/:id/delivery/stamp` 📝 | `debt:delivery` (`Accountant`) | `NONE` → `STAMPED` |
| `PATCH /debts/:id/delivery/post` 📝 | `debt:delivery` (`HRA`) | `STAMPED` → `POSTED` |
| `PATCH /debts/:id/delivery/deliver` 📝 ⭐ | `debt:delivery` (`HRA`) | `POSTED` → `DELIVERED` |

**`/stamp`** — `{ "note": "…", "lock_version": 3 }`; enqueue notification `DEBT_HARDCOPY_STAMPED` cho `HRA`.

**`/post`** — `{ "tracking_code": "VN12345678", "posted_at": "2026-08-28", "lock_version": 4 }`; thiếu `tracking_code` → `400`.

**`/deliver`** — chốt mốc Ngày X:
```json
{ "delivered_at": "2026-08-30", "receiver_name": "Nguyễn Thị C",
  "proof_file_url": "https://s3.../bien-nhan.jpg", "lock_version": 5 }
```
Đọc `contracts.payment_term_days` qua `debts.contract_id` → `ngay_x = delivered_at + payment_term_days` (ngày lịch) → `debt_status = 'IN_TERM'` → mở khóa nút gửi email.

`{ "data": { "ngay_x": "2026-09-06", "debt_status": "IN_TERM", "payment_term_days": 7 } }`

Lỗi: `409 FIN_DEBT_INVALID_TRANSITION`, `422 FIN_DEBT_MISSING_CONFIG`, `400` (`delivered_at` tương lai).

---

## 6. Email & Biểu mẫu

### 6.1 `POST /api/v1/fin/debts/:id/send-email` 📝 — `debt:send_email`

`{ "template_code": "REMINDER_X_PLUS_1", "override_content": null, "extra_cc": [] }`

**Thứ tự kiểm tra:**
1. `sync_status = CONFIRMED` → không thì `422 FIN_DEBT_NOT_CONFIRMED`
2. Template nhóm ĐNTT/nhắc nợ mà `hardcopy_status != DELIVERED` → `422 FIN_DEBT_HARDCOPY_NOT_DELIVERED`
3. Dựng người nhận từ `customer_contacts`; `To` rỗng → `422 FIN_DEBT_NO_RECIPIENT`, **không** tăng `email_sent_count`
4. `last_email_sent_date = hôm nay` → `429 FIN_DEBT_EMAIL_RATE_LIMIT` *(ngưỡng lấy từ `debt_product_configs.max_email_per_day`)*
5. **Hai đường gửi, chọn theo ngữ cảnh:**
    * **Đường nhanh (gửi 1 thư đơn lẻ do người dùng bấm nút):** gọi Gmail API đồng bộ trong request, trả `sent_at` + `message_id`. Dùng cho DC-08 AC3 (gửi kết quả khóa/mở), gửi tay từ hộp thư nháp, hoặc bất kỳ chỗ nào chỉ gửi 1-2 thư sau thao tác thủ công. Với đường này, người bấm nút là `approved_by`, không cần qua drain job.
    * **Đường hàng đợi (batch nhiều thư):** tạo 1 dòng `debt_email_logs` với `send_status = 'queued'`, drain job mới gửi thật. Dùng cho `send-batch` nhiều thư cùng lúc.

    **Cách phân luồng:** backend tự quyết dựa trên số thư trong request — 1 thư → gửi luôn, > 1 thư → enqueue. Frontend không cần biết.

6. **Threading: dùng đúng trình tự của §6.1d** — dựng `References` từ các hàng `sent`, `In-Reply-To` = `parent_message_id`, Subject = `"Re: " + thread_subject`, gán `sequence_step` lúc gửi, đọc lại `Message-ID` từ response Gmail. Thư đầu tiên thì lưu `thread_subject` + `gmail_thread_id`

```json
{ "data": { "queued": false, "sent": true, "email_log_id": 4411, "sent_at": "2026-09-05T08:31:00+07:00",
            "message_id": "<abc123@mail.gmail.com>",
            "to": ["ketoan@epic.vn"], "cc": ["am.a@cloudaz.io"],
            "email_sent_count": 4, "is_thread_root": false } }
```
Trả `sent: true` + `sent_at` nếu gửi đồng bộ (đường nhanh), trả `queued: true` nếu enqueue. Tra kết quả qua `GET /debts/:id/notifications`.

### 6.1a ⭐ Hai làn thư — luật chung cho toàn bộ mục 6.1x

Mọi endpoint hộp thư dưới đây đều tra **một cột duy nhất**: `debt_email_logs.mail_track`.

| | `REMINDER` | `LEGAL` |
|---|---|---|
| Quyền duyệt / sửa / bỏ / gửi | `debt:send_email` | **`debt:legal`** |
| Hạn mức `max_email_per_day` | ✅ áp dụng | ❌ **không liên quan** |
| Cập nhật `email_sent_count` · `last_email_sent_date` · `last_template_code` | ✅ | ❌ |
| `DebtDraftExpireJob` dọn cuối ngày | ✅ | ❌ |
| Nằm chung luồng thư, nhận `sequence_step` | ✅ | ✅ |

**Áp ở cả 4 endpoint, không chỉ ở nút gửi** — thiếu một điểm là vòng qua được: `GET /drafts` (lọc), `PATCH /drafts/:id` (sửa), `PATCH /drafts/:id/cancel` (bỏ), `POST /send-batch` (gửi).

> **Vì sao phải lọc ngay ở `GET` chứ không chỉ chặn ở `POST`:** hộp thư hiện badge *"23 thư chờ duyệt"*. Nếu trong đó có 2 thư công văn mà Kế toán không gửi được, họ bấm `[Gửi tất cả]` rồi nhận 2 dòng lỗi mỗi ngày, không hiểu vì sao. Lọc từ đầu thì con số badge luôn đúng bằng số việc họ làm được.

Chi tiết bảng luật: `Database_Schema.md` mục *Hai làn thư*.

### 6.1b `GET /api/v1/fin/debts/emails/drafts` — soft-gate

Danh sách thư nháp chờ duyệt gửi. Màn hình "Hộp thư chờ gửi" gọi endpoint này (DC-04 AC10).

- **Query:** `prepared_for` (mặc định hôm nay), `mail_track`, `template_code`, `stage`, `page`, `size`
- **Lọc cứng theo quyền actor** *(không phải theo query)*: có `debt:send_email` → thấy làn `REMINDER`; có `debt:legal` → thấy làn `LEGAL`; có cả hai → thấy cả hai. Query `mail_track` chỉ thu hẹp thêm trong phạm vi đã được phép.

```json
{ "data": [ {
    "id": 4411,
    "debt_id": 9127,
    "customer_name": "Công ty TNHH B",
    "contract_number": "EPIC-02",
    "template_code": "REMINDER_X_PLUS_1",
    "mail_track": "REMINDER",
    "attachment_legal_action_id": null,
    "stage_label": "Nhắc quá hạn",
    "from_email": "congno@cloudaz.cc",
    "to_emails": "ketoan@epic.vn",
    "cc_emails": "am.a@cloudaz.io",
    "subject": "Re: Thông báo bàn giao hồ sơ thanh toán cước tháng 08/2026 — Hợp đồng EPIC-02",
    "total_amount": 40500000,
    "days_overdue": 4,
    "prepared_for": "2026-09-05"
} ], "total": 23 }
```

`body` không trả trong danh sách (nặng) — lấy qua `GET /debts/emails/drafts/:id`.

### 6.1c `PATCH /api/v1/fin/debts/emails/drafts/:id` 📝 — `debt:send_email` **hoặc** `debt:legal`

Sửa nội dung nháp trước khi gửi. Quyền cần có tùy `mail_track` (§6.1a).

- **Request:** `{ "body": "<html>…</html>" }`
- **Chỉ sửa được `body`.** Gửi kèm `subject` → `400 INVALID_PAYLOAD`. Gmail đòi Subject khớp mới nối thư vào luồng, nên tiêu đề lấy cứng từ `debt_collections.thread_subject`, không ai sửa được — kể cả người duyệt (DC-04 AC6).
- **Không sửa được file đính kèm.** PDF công văn là bản đã ký đóng dấu, thay file là thay văn bản pháp lý.
- **Lỗi:** `409 FIN_DEBT_INVALID_TRANSITION` nếu `send_status != 'draft'` · `403 FORBIDDEN_ROLE` nếu thiếu quyền của làn.

### 6.1c-bis `PATCH /api/v1/fin/debts/emails/drafts/:id/cancel` 📝 — `debt:send_email` **hoặc** `debt:legal`

Bỏ hẳn một nháp mà người duyệt quyết định **không gửi** (khách vừa gọi điện hứa trả, thông tin trong thư đã lỗi thời…).

- **Request:** `{ "reason": "…" }` — bắt buộc, ≥ 10 ký tự
- Chuyển `send_status = 'cancelled'`, ghi `last_error = reason`, ghi `debt_events` (`EMAIL_CANCELLED`)
- **Làn `LEGAL`:** bỏ nháp thì công văn **giữ nguyên `PREPARING`** nếu `delivery_method = EMAIL`. Pháp lý phải chọn lại đường gửi.
- **Lỗi:** `409 FIN_DEBT_INVALID_TRANSITION` nếu `send_status != 'draft'` · `403 FORBIDDEN_ROLE` nếu thiếu quyền của làn.

> Phân biệt với các trạng thái không gửi khác: `expired` = job 00:05 tự dọn nháp quá ngày *(chỉ làn `REMINDER`)* · `skipped` = hệ thống chặn (không có contact, vi phạm luật 1 thư/ngày) · `cancelled` = **người duyệt chủ động bỏ**, có lý do, có người chịu trách nhiệm.

### 6.1d `POST /api/v1/fin/debts/emails/send-batch` 📝 ⭐ — `debt:send_email` **hoặc** `debt:legal`

**Duyệt và gửi hàng loạt.** Đây là bước duy nhất đưa thư ra khỏi hệ thống.

```json
{ "email_log_ids": [4411, 4412, 4415] }
```

**Xử lý — mỗi bản ghi độc lập, một cái lỗi không chặn cái khác:**
0. **Kiểm quyền theo `mail_track`** (§6.1a) → thiếu thì dòng đó vào `failed[]` với `FORBIDDEN_ROLE`, **các thư còn lại vẫn đi**. Chặn ở từng dòng, không chặn cả request — đúng nguyên tắc "mỗi bản ghi độc lập" của endpoint này
1. Kiểm `prepared_for = today` → sai thì bỏ qua, đưa vào `failed[]` kèm lý do. **Bỏ qua bước này với làn `LEGAL`** — nháp công văn không hết hạn theo ngày
2. Kiểm lại người nhận `TO` *(contact có thể vừa bị tắt sau lúc soạn nháp)* → rỗng thì `skipped`
3. Kiểm luật 1 email/ngày → vi phạm thì `skipped`. **Chỉ áp cho làn `REMINDER`** — làn `LEGAL` không liên quan hạn mức
3b. **Làn `LEGAL`:** kiểm file PDF công văn tồn tại và đọc được → không thì `failed`, `last_error` ghi rõ, **không** lật `legal_status`. Thư công văn thiếu file đính kèm là thư mất hết ý nghĩa
4. **Kiểm tiêu đề — chốt chặn cuối:** `subject == "Re: " + debt_collections.thread_subject` → sai thì `409 FIN_DEBT_INVALID_TRANSITION`. Phòng trường hợp lỗi lập trình làm lệch tiêu đề
5. **Compare-and-swap `draft` → `queued`** — chốt chặn chống gửi trùng:

```sql
UPDATE debt_email_logs
   SET send_status = 'queued', approved_by = ?, approved_at = NOW()
 WHERE id = ? AND send_status = 'draft';
```

   `rowcount = 0` → bản ghi đã bị người khác duyệt gửi, **dừng ngay**, trả `skipped` với lý do `ALREADY_PROCESSED`. Hai người cùng bấm gửi một danh sách, hoặc worker retry sau timeout, đều chỉ ra đúng một thư. Đây là chốt chặn ở tầng DB, không phụ thuộc kiểm tra ở tầng ứng dụng.

6. **Dựng `References` lúc gửi bằng truy vấn**, không đọc chuỗi lưu sẵn:

```sql
SELECT message_id FROM debt_email_logs
 WHERE debt_id = ? AND send_status = 'sent'
 ORDER BY sequence_step
```

   Quá 20 ID thì giữ **ID đầu + 19 ID gần nhất** — ID đầu là mốc neo luồng. `In-Reply-To` = `parent_message_id` (ID của hàng `sent` có `sequence_step` lớn nhất).

7. **Threading:** `first_email_message_id` null → bản ghi này là **gốc luồng**, gửi xong lưu `thread_subject` + `gmail_thread_id`. Đã có thì truyền lại `threadId`.
8. **Gửi xong ĐỌC LẠI `Message-ID` từ Gmail API** rồi mới lưu — xem cảnh báo bên dưới:

```
users.messages.send                                     → { id, threadId }
users.messages.get?format=metadata
                  &metadataHeaders=Message-ID           → Message-ID thật
```
9. Trong **một transaction**: `sequence_step = (SELECT COALESCE(MAX(sequence_step),0)+1 FROM debt_email_logs WHERE debt_id = ? AND send_status = 'sent')`, `message_id`, `references_chain`, `from_email` *(hòm thư thực tế đã gửi)*, `sent_at`, `send_status = 'sent'`.
10. **Cập nhật hậu quả — khác nhau theo làn:**
    * `REMINDER` → tăng `email_sent_count`, set `last_email_sent_date` + `last_template_code`
    * `LEGAL` → **không đụng ba cột trên**; nếu công văn đang `delivery_method = 'EMAIL'` và `legal_status = 'PREPARING'` thì **lúc này mới** lật sang `SENT`, `sent_at = today`, ghi `debt_events` (`LEGAL_DOC_SENT`)

```json
{ "data": { "queued": 20, "skipped": 2, "failed": 1,
  "details": [ { "id": 4415, "result": "skipped", "reason": "FIN_DEBT_NO_RECIPIENT" },
               { "id": 4418, "result": "failed",  "reason": "FORBIDDEN_ROLE" } ] } }
```

> ⚠️ **Gmail ghi đè `Message-ID`.** Tự sinh ID rồi lưu luôn là sai: ID đó không tồn tại thật, `In-Reply-To` của thư sau trỏ vào hư không, **luồng vỡ mà log vẫn báo thành công**. Bắt buộc đọc `Message-ID` từ response API. Lỗi này không unit test nào bắt được — phải kiểm trên Gmail thật.
>
> **Hệ quả: gửi bằng Gmail API, KHÔNG dùng SMTP.** `smtp.gmail.com` chỉ trả `250 OK` — không có `threadId`, không có `Message-ID`. Cấu hình chốt (service account, scope, hòm thư dùng chung): `ERP_Platform_Integration.md` mục *Kênh 1 — Email*. Phân loại lỗi và luật retry: `NFR_Sprint1.md` mục *Phân loại lỗi Gmail API*.

> **`sequence_step` gán lúc gửi, không phải lúc soạn nháp**, và **không giới hạn số bước**. Nháp bị `expired`/`cancelled` không chiếm số → `sequence_step` luôn bằng đúng vị trí thật trong chuỗi `References`. Chi tiết: `Database_Schema.md` mục *Ba cơ chế bảo đảm luồng thư đúng chuẩn RFC*.

> **Thư chỉ rời hệ thống khi có người bấm nút.** Job soạn nháp, drain job đẩy đi — nhưng giữa hai bước đó **bắt buộc có chữ ký người duyệt**. `approved_by` là bằng chứng ai chịu trách nhiệm cho nội dung đã gửi khách, cần khi đối chất nội bộ hoặc trước tòa.

### 6.2 `GET /api/v1/fin/document-templates` — soft-gate · `PUT /api/v1/fin/document-templates/:id` 📝 — `debt:config`

```json
{ "subject": "…", "content": "…", "approval_mode": "MANUAL",
  "appendix_number": "Điều 3", "payment_term_clause": "5", "penalty_clause": "6.2",
  "grace_period_days": 10, "is_active": true }
```

### 6.3 `DebtReminderSweepJob` (08:30) — Go job, **chỉ soạn nháp**

Chọn template theo mốc **đọc từ `debt_product_configs`**, tối đa `max_email_per_day` mỗi khoản nợ. Ưu tiên khi nhiều mốc trùng ngày: `suspend_warning` > `overdue` > `before_due` > `delivered`.

**Job KHÔNG gửi thư.** Nó render sẵn `subject` + `body` với số liệu của ngày hôm đó rồi ghi `debt_email_logs` với `send_status = 'draft'`. Thư chỉ rời hệ thống khi Kế toán bấm gửi qua §6.1d (DC-04 AC10) — job này chỉ sinh làn `REMINDER` nên người duyệt luôn là Kế toán.

**Job chỉ sinh thư làn `REMINDER`.** Thư làn `LEGAL` do Pháp lý tạo khi bấm gửi công văn (§8), job không đụng tới.

Bỏ qua: `sync_status != CONFIRMED`, `debt_status = PAID`, đã có nháp hoặc đã gửi hôm nay *(chỉ tính làn `REMINDER`)*, không có contact `TO`.

Xong thì đẩy notification 08:35 **theo từng làn**: Kế toán nhận *"Có N thư nhắc nợ chờ duyệt"*, Pháp lý nhận *"Có M công văn chờ gửi"*. Cùng template `DRAFT_PENDING_DIGEST`, khác người nhận và khác số đếm — không cần template riêng.

```json
{ "data": { "drafted": 23, "skipped_paid": 4, "skipped_no_recipient": 2, "skipped_existing": 1 } }
```

### 6.3b `DebtDraftExpireJob` (00:05) — Go job

Chuyển nháp có `prepared_for < today`, `send_status = 'draft'` **và `mail_track = 'REMINDER'`** sang `expired`.

**Vì sao phải hết hạn:** nháp đã render sẵn tiền lãi tính đến ngày soạn. Để sang hôm sau mới gửi là gửi cho khách **con số thiếu một ngày lãi** — sai số tiền trong thư đòi nợ là lỗi không sửa được sau khi thư đã đi. Job 08:30 hôm sau sẽ soạn bản mới với số liệu đúng.

⚠️ **Không đụng vào làn `LEGAL`.** `locked_penalty` trong công văn là ảnh chụp đã chốt, in trên giấy đã ký đóng dấu, không đổi theo ngày. Cho nháp công văn `expired` là bắt Pháp lý soạn lại công văn mỗi sáng trong khi `document_number` đã phát hành — sai nghiệp vụ nghiêm trọng.

Chạy chung lượt với `DebtPenaltyJob` để thứ tự luôn đúng: **hết hạn nháp cũ → lật trạng thái quá hạn → cộng lãi**, rồi 08:30 mới soạn nháp mới.

---

## 7. Lãi phạt, Tất toán, Khóa dịch vụ

### 7.1 `DebtPenaltyJob` (00:05) — Go job, hai bước

**Bước 1 — Lật trạng thái.** Quét `sync_status = CONFIRMED`, `debt_status = IN_TERM`, `paid_at IS NULL`, **`today > ngay_x`** → chuyển `debt_status = OVERDUE`, ghi `debt_events` (`BECAME_OVERDUE`).

> **Dùng `>` chứ không phải `>=`.** Ngày X là hạn chót, khách có trọn ngày đó để trả — sang 00:05 ngày X+1 mới quá hạn, `days_overdue = 1`. Dùng nhầm `>=` sẽ tính phạt ngay trong ngày hạn chót: sai hợp đồng và mất uy tín với khách đã trả đúng hạn.

> **Đây là bước duy nhất đưa `IN_TERM → OVERDUE`.** Thiếu nó thì toàn bộ chuỗi quá hạn không khởi động được — bước 2, `DebtSuspendRequestJob` và email `REMINDER_X_PLUS_1` đều lọc theo `debt_status = OVERDUE`.

**Bước 2 — Cộng lãi.** Quét `sync_status = CONFIRMED` **và** `debt_status = OVERDUE` **và** `paid_at IS NULL`:
```
days_overdue = today - ngay_x
daily_amount = penalty_rate × total_principal
accumulated  = penalty_rate × days_overdue × total_principal
```
Insert `debt_penalty_logs`, cập nhật `debts.total_penalty`.

**Điều kiện dừng duy nhất là `PAID`.** Nợ đã chuyển Pháp lý — kể cả `SUED` — vẫn tính lãi; `locked_penalty` chỉ là ảnh chụp để in công văn. Idempotent nhờ `UNIQUE (debt_id, calculated_date)` ở tầng DB, chạy bù nếu thiếu ngày.

### 7.2 `DebtSuspendRequestJob` (08:25) — Go job

**Bước duy nhất đưa `NONE → WAITING_SALES`.** Điều kiện đồng thời: `sync_status = CONFIRMED`, `debt_status = OVERDUE`, `today >= ngay_x + suspend_milestone_days` *(đọc từ config, mặc định 4)*, `suspend_status = NONE`, `paid_at IS NULL`.

Idempotent: bỏ qua bản ghi khác `NONE`; **không tạo lại** bản ghi Sales AM đã reject trong cùng `billing_cycle`.

**Trưởng phòng Sales** (CC của cảnh báo X+4): truy `sale_owner` → `users.email` → `members.email` → `members.department_id` → `departments.manager_member_id` → email. Không tìm được thì **vẫn gửi** cho người còn lại, chỉ ghi warning. Có thể ghi đè bằng `debt_product_configs.sales_lead_email_override`.

### 7.3 `PATCH /api/v1/fin/debts/:id/settle` 📝 ⭐ — `debt:settle`

**Bước đóng hồ sơ duy nhất.**

```json
{ "paid_at": "2026-09-10", "paid_amount": 40500000,
  "proof_file_url": "https://s3.../unc.jpg", "note": "…", "lock_version": 12 }
```

1. `paid_at <= today` → sai thì `400 FIN_DEBT_INVALID_PAID_DATE`
2. `debt_status != PAID` → sai thì `409 FIN_DEBT_ALREADY_SETTLED`
3. **Thu đủ 100%:** `paid_amount < total_principal + total_penalty` → `422 FIN_DEBT_INSUFFICIENT_PAYMENT` kèm `{"required":…,"received":…,"shortfall":…}`. Nợ giữ `OVERDUE`, lãi chạy tiếp. **Không hỗ trợ thanh toán một phần.**
4. Set `paid_at`, `paid_amount`, `debt_status = 'PAID'`
5. **Dây chuyền:** đang `SUSPENDED` → tự chuyển `WAITING_UNSUSPEND`, enqueue `DEBT_UNSUSPEND_REQUEST` cho `Procurement`

```json
{ "data": { "debt_status": "PAID", "paid_at": "2026-09-10",
            "total_penalty_locked": 500000, "unsuspend_requested": true, "lock_version": 13 } }
```

### 7.4 Khóa / Mở dịch vụ

| Endpoint | Quyền | Ghi chú |
|---|---|---|
| `POST /debts/:id/call-logs` 📝 | soft-gate (service ép `sale_owner`) | `{"type":"CALL","note":"…"}` |
| `PATCH /debts/:id/suspend/approve` 📝 | `debt:suspend_approve` | `WAITING_SALES` → `WAITING_PROCUREMENT` |
| `PATCH /debts/:id/suspend/reject` 📝 | `debt:suspend_approve` | Xem dưới |
| `PATCH /debts/:id/suspend/execute` 📝 | `debt:suspend_execute` | Xem dưới |
| `PATCH /debts/:id/unsuspend/request` 📝 | `debt:settle` / System | **Không chặn tự động.** Popup hiển thị lịch sử thanh toán, người dùng tự quyết — xem §7.5 |
| `GET /customers/:id/payment-history` | soft-gate | Tóm tắt lịch sử thanh toán — xem §7.5 |
| `PATCH /debts/:id/unsuspend/execute` 📝 | `debt:suspend_execute` | `WAITING_UNSUSPEND` → `UNSUSPENDED` |

**Từ chối khóa** — `{ "reason": "…", "expected_payment_date": "2026-09-12", "lock_version": 9 }`. `reason` bắt buộc **≥ 20 ký tự** → thiếu thì `400 FIN_DEBT_REJECT_REASON_REQUIRED`. Đây là hành động bảo lãnh cho khách nợ tiếp nên phải minh bạch: lưu `debt_events`, hiện công khai trên Audit Trail, enqueue `SUSPEND_REJECTED` cho `Accountant`, `Chief Accountant`, `Sales Leader`.

**Thực thi khóa** — `{ "proof_file_url": "…", "note": "…", "lock_version": 10 }`. **Ràng buộc cứng:** `suspend_status != WAITING_PROCUREMENT` → `403 FIN_DEBT_SALES_APPROVAL_REQUIRED`.

### 7.5 `GET /api/v1/fin/customers/:id/payment-history` — soft-gate

Tóm tắt lịch sử thanh toán của **khách hàng** (tính trên toàn bộ khoản nợ, không riêng khoản đang mở). Popup xác nhận mở khóa của Phòng Mua gọi endpoint này để người thao tác **tự quyết** có yêu cầu đặt cọc hay không.

```json
{ "data": {
  "suspend_count": 3,
  "last_suspended_at": "2026-07-14",
  "late_periods": 5,
  "total_paid_periods": 8,
  "avg_days_late": 12.4,
  "broken_promises": 2,
  "open_debt_amount": 40500000
} }
```

| Trường | Cách tính |
|---|---|
| `suspend_count` | `COUNT(debt_events)` `action_type = 'SUSPENDED'` JOIN `debts` theo `customer_id` |
| `last_suspended_at` | `MAX(created_at)` của các sự kiện trên |
| `late_periods` / `total_paid_periods` | `COUNT(debts WHERE paid_at > ngay_x)` / `COUNT(debts WHERE debt_status = 'PAID')` |
| `avg_days_late` | `AVG(paid_at - ngay_x)` với các kỳ đã tất toán |
| `broken_promises` | `COUNT(debts WHERE promised_payment_date IS NOT NULL AND (paid_at IS NULL OR paid_at > promised_payment_date))` |
| `open_debt_amount` | `SUM(total_principal + total_penalty) WHERE debt_status <> 'PAID'` |

> **Hệ thống không tự chặn mở khóa.** Luật cũ "suspend ≥ 2 lần thì bắt buộc đặt cọc" đã bỏ: ngưỡng 2 là con số tùy tiện, không xét khoảng cách thời gian giữa các lần khóa cũng không xét giá trị hợp đồng. Đây là quyết định thương mại của Kế toán trưởng, không nên hardcode. API chỉ cung cấp số liệu, người dùng quyết.

---

## 8. Pháp lý (DC-09)

| Endpoint | Quyền | Từ → Sang |
|---|---|---|
| `POST /debts/:id/legal-documents` 📝 | `debt:legal` | *(chưa có)* → `PREPARING` |
| `PATCH /debts/:id/legal-documents/:legalId/send` 📝 | `debt:legal` | `PREPARING` → `SENT` |
| `PATCH /debts/:id/legal-documents/:legalId/sue` 📝 | `debt:legal` | `SENT` → `SUED` |

**Soạn công văn** — `{ "document_type": "REMINDER_1", "publish_date": "2026-09-16", "termination_date": "2026-10-01", "content_override": "<html>…" }`

`locked_penalty = penalty_rate × (publish_date - ngay_x) × total_principal` — **ảnh chụp**, không đổi và **không** làm dừng job tính lãi. Sinh `document_number` theo `01-[YYYYMMDD]/CV/CLOUDAZ-[customer_code]` (unique). Thiếu `rep_name`/`rep_address`/`customer_code`/`tax_code` → `422 FIN_DEBT_MISSING_LEGAL_INFO`.

**Xác nhận đã gửi** — `{ "delivery_method": "BOTH", "sent_at": "2026-09-17", "tracking_code": "VN99887766" }`

| `delivery_method` | Bắt buộc | `legal_status` | Thư điện tử |
|---|---|---|---|
| `POST` | `tracking_code` | → `SENT` ngay | — |
| `BOTH` | `tracking_code` | → `SENT` ngay | tạo nháp `LEGAL_DOC_COVER` song song |
| `EMAIL` | — | **giữ `PREPARING`** | tạo nháp; §6.1d gửi xong mới lật `SENT` |

Nháp sinh ra có `mail_track = 'LEGAL'`, `attachment_legal_action_id = :legalId`, `template_code = 'LEGAL_DOC_COVER'`, người nhận dựng từ `customer_contacts` như mọi thư gửi khách, `subject = "Re: " + thread_subject`. Pháp lý duyệt và gửi ở màn hình "Hộp thư chờ gửi".

> **Vì sao nhánh `EMAIL` phải chờ thư đi thật:** bản mềm là bằng chứng duy nhất trong nhánh này, mà thư còn nằm trong hộp nháp thì khách **chưa nhận được gì**. Lật `SENT` sớm là mở nút `[Hủy HĐ & Kiện]` trong khi khách chưa hề được thông báo — đúng loại lỗi ra tòa thì thua.

`sent_at` = mốc **sớm hơn** giữa ngày gửi bưu điện và ngày email đi. Mốc `grace_period_days` đếm từ `sent_at`.

**Lỗi:** `422 INVALID_PAYLOAD` nếu `delivery_method ∈ {POST, BOTH}` mà thiếu `tracking_code` · `409 FIN_DEBT_INVALID_TRANSITION` nếu `legal_status != PREPARING` · `422 FIN_DEBT_NO_RECIPIENT` nếu chọn `EMAIL`/`BOTH` mà khách chưa có contact `TO`.

⚠️ Ràng buộc *"nhánh `EMAIL`/`BOTH` phải có bản ghi `debt_email_logs` đã `sent`"* **không viết được thành `CHECK`** vì phải truy bảng khác — bắt buộc chặn ở tầng service. `ck_legal_tracking` trong DDL chỉ lo được nhánh bưu điện.

**Khởi kiện** — chỉ khi `legal_status = SENT`, không thì `409 FIN_DEBT_LEGAL_DOC_NOT_SENT`. `debt_status` giữ nguyên `OVERDUE`, lãi vẫn chạy.

**`DebtLegalNotifyJob` (08:30)** — mốc đọc từ `legal_notice_milestone_days` / `legal_sue_milestone_days` trong config.

---

## 9. Dashboard

| Endpoint | Quyền |
|---|---|
| `GET /api/v1/fin/debts/events` | `debt:dashboard` — timeline toàn hệ thống |
| `GET /api/v1/fin/debts/dashboard/kpi` | `debt:dashboard` |
| `GET /api/v1/fin/debts/dashboard/top-debt` | `debt:dashboard` |
| `GET /api/v1/fin/debts/dashboard/charts` | `debt:dashboard` |
| `GET /api/v1/fin/debts/dashboard/alerts` | `debt:dashboard` — **chỉ đọc**, không gửi mail, không đổi trạng thái |

```json
{ "data": { "total_receivable": 1250000000, "total_overdue": 350000000, "overdue_ratio": 0.28,
            "total_penalty": 15400000, "suspended_customer_count": 12,
            "sued_customer_count": 3, "sued_total_amount": 120000000 } }
```

Mốc cảnh báo của `/alerts` đọc từ `debt_product_configs`, không hardcode 4/15/30.

---

## 10. Tiện ích

**`POST /api/v1/fin/debts/uploads`** — `multipart/form-data`, field `file`, ≤10MB, `jpg`/`png`/`pdf`.
`{ "data": { "file_url": "https://s3…", "file_name": "unc.jpg", "size": 204800 } }`

**Thông báo in-app** — dùng endpoint sẵn có của nền tảng: `GET /api/v1/notifications`, `/unread-count`, `PUT /:id/read`, `/read-all` (`router_sys.go:144-150`), lọc `ref_type = 'DEBT'`. Module **không** tạo endpoint riêng.

---

## 11. Ma trận Endpoint ↔ US ↔ Permission

| US | Endpoint / Job chính | Permission |
|---|---|---|
| BD-09 | `sync-cm`, **`sync-status`**, `debts`, `debts/:id`, `config`, `document-url`, `customers/*`, `customer-contacts/*`, `contracts/:id` | `debt:sync`, `debt:confirm`, `debt:config`, soft-gate |
| BD-20 | `debts/:id/events`, `debts/events` | soft-gate, `debt:dashboard` |
| DC-03 | `delivery/stamp`, `/post`, `/deliver`, `send-email` | `debt:delivery`, `debt:send_email` |
| DC-04 | `DebtReminderSweepJob`, `DebtDraftExpireJob`, **`emails/drafts`**, **`emails/drafts/:id/cancel`**, **`emails/send-batch`**, `DebtReminderDrainJob`, `send-email`, `debts/:id/notifications` | `debt:send_email` |
| DC-05 | `document-templates/:id`, `DebtPenaltyJob`, `penalty-logs`, `config`, **`settle`** | `debt:config`, `debt:settle` |
| DC-06 | `debts`, `debts/summary`, `call-logs` | soft-gate |
| DC-07 | **`DebtSuspendRequestJob`**, `suspend/approve`, `/reject` | `debt:suspend_approve` |
| DC-08 | `suspend/execute`, `unsuspend/request`, `/execute`, **`customers/:id/payment-history`** | `debt:suspend_execute`, `debt:settle`, soft-gate |
| DC-09 | `legal-documents`, `/send`, `/sue`, `DebtLegalNotifyJob` | `debt:legal` |
| DC-10 | `debts/events`, `dashboard/*` | `debt:dashboard` |

**Endpoint tiện ích — không thuộc US nào nhưng vẫn phải làm:**

| Endpoint | Dùng để làm gì |
|---|---|
| `GET /debts/export/excel` | Kế toán xuất báo cáo công nợ ra Excel theo bộ lọc đang xem |
| `GET` · `PUT /debt-product-configs` | Admin xem và sửa mốc X+N, bộ template, lãi mặc định theo từng sản phẩm |
| `POST /debts/jobs/:jobName/run` | Admin chạy tay một job khi cần vá dữ liệu |
| `POST /debts/uploads` | Dùng chung cho mọi popup có đính kèm ảnh |

---

## 12. Thay đổi so với v2.0

| Điểm | v2.0 | v3.0 | Lý do |
|---|---|---|---|
| Cronjob | 4 endpoint `POST /cron/…` | **Go background job** + 1 endpoint `jobs/:jobName/run` cho Admin | Codebase chạy job bằng Go (`campaign_auto_transition_job.go`), không phơi qua HTTP |
| Gửi thông báo | Gửi đồng bộ trong request | **Enqueue + drain job** | Theo `ticket_reminder_outbox.go`; vùng khóa ngắn, thất bại 1 kênh không đổ nghiệp vụ |
| Cơ chế 3 kênh | — | **Dùng nguyên 3 cơ chế đã có**, không viết mới: `debt_reminder_outbox` (mirror 1:1), `notifications` nền tảng, `debt_email_logs` | Không sửa mẫu có sẵn; email cần `message_id` + bằng chứng pháp lý nên tách riêng |
| Tranh chấp ghi | Không có | **`lock_version`** trên mọi `PATCH` | Theo `ProjectCostFullDTO.LockVersion` |
| Cấu trúc route | Nhét hết dưới `/debts/…` | **Tách `customers`, `customer-contacts`, `contracts`, `document-templates` ngang hàng** | Module fin khác dùng lại được |
| Bộ sưu tập con | Rải rác | **`/debts/:id/{events,deliveries,penalty-logs,legal-documents,call-logs,notifications}`** | Theo tiền lệ `/project-costs/:id/*` |
| Nút trên UI | FE tự suy từ trạng thái | **`allowed_actions[]`** do service tính | Thêm trạng thái mới không phải sửa FE |
| Mốc X+4/15/30, template | Hardcode trong đặc tả | **`debt_product_configs`** | Sprint sau thêm GWS Flex/AWS/GCP chỉ cần insert 1 dòng |
| `debt_audit_logs` | Tên riêng | **`debt_events`** | Khớp `/project-costs/:id/events` |
| Mã lỗi | `DEBT_*` | **`FIN_DEBT_*`** + `CodeFINDebt*` | Theo `apperror.CodeFIN…` |
| Xuất báo cáo | Không có | **`/debts/export/excel`** | Theo `/project-costs/:id/export/excel` |
