# Tích hợp vào nền tảng ERP CloudAZ — Xác thực, Phân quyền & Thông báo

**Ngày:** 2026-08-27 · **Nguồn:** đọc trực tiếp codebase `Projects/erp` (backend Go + PostgreSQL + golang-migrate)

> **Mục đích:** Module Thu hồi Công nợ **không xây mới** phần xác thực, phân quyền, cây tổ chức hay thông báo — những thứ này **đã có sẵn** trong nền tảng ERP. File này ghi lại hiện trạng thật của codebase và chỉ ra chính xác chỗ module công nợ cắm vào.

---

## 0. Tóm tắt — cái gì đã có, cái gì phải làm mới

| Hạng mục | Hiện trạng | Việc của Sprint 1 |
|---|---|---|
| Đăng nhập / JWT / refresh token | ✅ Đã có đầy đủ | Dùng lại, không làm gì |
| Bảng `users`, `roles`, `permissions`, `role_permissions` | ✅ Đã có | Seed thêm 4 role + N permission |
| Nhóm quyền (`role_groups`) | ✅ Đã có | Dùng lại nếu cần |
| Bảng `departments` (cây tổ chức) | ✅ Đã có | ⚠️ **Thiếu cột trưởng phòng** — xem §3.3 |
| Bảng `members` (nhân sự) + `department_id` | ✅ Đã có | Dùng lại |
| Bảng `notifications` + 4 endpoint | ✅ Đã có | Dùng lại, chỉ thêm `type` mới |
| Tích hợp Lark (OAuth + interactive card) | ✅ Đã có | Dùng lại kênh gửi |
| Audit tự động mọi request mutating | ✅ Đã có (`ActivityAuditMiddleware`) | Xem §5 — tránh làm trùng |
| Bảng nghiệp vụ công nợ (`debts`…) | ❌ Chưa có | **Làm mới toàn bộ** — xem `Database_Schema.md` |

---

## 1. ✅ Base URL — đã sửa xong trong `ERP_API.md` v2.0

Router thật của ERP là **`/api/v1`** (`backend/internal/presentation/router.go:37`), không phải `/api`.

Toàn bộ endpoint công nợ đã được đặt dưới nhóm **`fin`** (`router_fin.go`) để dùng chung middleware, license gate và audit của module Finance & Accounting:

```
/api/v1/fin/debts/...
```

`ERP_API.md` đã cập nhật đầy đủ: đường dẫn, format response `{"data": …, "total": N}`, format lỗi `{"error": …, "code": …}`, cơ chế `AuthorizePermission` / soft-gate, và kiểu id số nguyên. Xem mục cuối file đó để biết danh sách thay đổi qua từng phiên bản.

---

## 2. Xác thực (Authentication) — đã có sẵn, dùng lại

**Vị trí:** `backend/internal/presentation/router.go:39-52`, bảng `sessions` tại migration `000001_init_schema.up.sql:49`.

| Endpoint | Công dụng |
|---|---|
| `POST /api/v1/auth/login` | Đăng nhập, trả access token |
| `POST /api/v1/auth/refresh` | Làm mới token từ refresh token |
| `POST /api/v1/auth/register` | Tạo tài khoản |
| `POST /api/v1/auth/forgot-password` · `/verify-reset-token` · `/reset-password` | Quên mật khẩu |
| `GET /api/v1/auth/captcha` | Captcha chống brute-force |
| `GET /api/v1/auth/google/url` · `POST /api/v1/auth/google/callback` | Đăng nhập Google |
| `GET /api/v1/auth/lark/url` · `POST /api/v1/auth/lark/callback` | Đăng nhập Lark |

**Cơ chế token:** JWT ký bất đối xứng **RS256** — middleware chỉ giữ public key để verify (`middleware.NewAuthorizer(deps.AuthService.GetPublicKey())`, `router.go:35`).

**Refresh token** lưu ở bảng `sessions`:
```sql
sessions (id UUID PK, user_id INT FK users, refresh_token TEXT NOT NULL,
          expires_at TIMESTAMPTZ NOT NULL, created_at TIMESTAMPTZ DEFAULT now())
CREATE INDEX idx_sessions_refresh_token ON sessions(refresh_token);
```

**Kết luận:** module công nợ **không cần** đặc tả login, không cần bàn thời hạn token. Xóa mọi thảo luận về auth khỏi phạm vi Sprint 1. Chỉ cần khai báo endpoint nào yêu cầu permission nào (§3).

**Lưu ý bảo mật đã có sẵn:** nhóm `/auth` được đăng ký **trước** `v1.Use(...)` nên bỏ qua `Authenticate` / `LicenseGate` / `ActivityAudit` — có test bảo vệ thứ tự này (`tests/router_parity_test.go:120`). Đừng chèn route công nợ vào trước chuỗi middleware.

---

## 3. Phân quyền (Authorization)

### 3.1 Mô hình đã có

```
users ──role_id──► roles ──role_permissions──► permissions
  └──user_role_groups──► role_groups ──role_group_roles──► roles
```

Bảng `permissions` có 3 cột: `name`, `description`, **`module`** (nhóm hiển thị, ví dụ `'Finance & Accounting'`).

### 3.2 Role thật trong DB *(đã cập nhật vào `ERP_API.md` mục Phân quyền)*

Role **thật** đang có trong DB:

| Role đã tồn tại | Nguồn migration |
|---|---|
| Admin, PMO, Project Manager, Team Lead, Member, Viewer | `000001_init_schema` |
| **Sales**, CSO, CIO, CEO, CFO, **HRA** | `000168_fin_module_scaffold:18-25` |
| **Sales Leader** | `000343_721_crm_source_sales:10` |

**Ánh xạ đúng cho module công nợ:**

| Vai trò trong tài liệu | Role thật trong ERP | Ghi chú |
|---|---|---|
| `SALES_AM` | **`Sales`** | Đã có sẵn |
| `SALES_LEAD` | **`Sales Leader`** | Đã có sẵn — dùng cho CC email X+4 |
| `HR_ADMIN` (HCNS) | **`HRA`** | Đã có sẵn |
| `EXECUTIVE` | **`CEO`**, **`CFO`** | Đã có sẵn |
| `ADMIN` | **`Admin`** | Đã có sẵn |
| `ACCOUNTANT` | ❌ **phải seed mới** → `Accountant` | |
| `CHIEF_ACCOUNTANT` | ❌ **phải seed mới** → `Chief Accountant` | |
| `PROCUREMENT` | ❌ **phải seed mới** → `Procurement` | |
| `LEGAL` | ❌ **phải seed mới** → `Legal` | |

### 3.3 ⚠️ `departments` chưa có cột trưởng phòng

Bản đặc tả ban đầu giả định có cột `manager_user_id` trên `departments`. Đọc code thì bảng thật (`000064_add_department_management.up.sql`) chỉ có:

```sql
departments (id, code, display_name, description, parent_id, status, created_at, updated_at)
```

**Không có cột nào trỏ tới người quản lý.** Ngoài ra `department_id` nằm ở bảng **`members`**, không nằm ở `users`.

**✅ PO đã chốt: thêm cột vào bảng nền tảng.**

```sql
ALTER TABLE departments
    ADD COLUMN IF NOT EXISTS manager_member_id INT NULL REFERENCES members(id) ON DELETE SET NULL;
```

Chọn cách này thay vì "lấy mọi user có role `Sales Leader`" vì công ty có nhiều team Sales — dùng role sẽ CC nhầm trưởng phòng của team khác. Đổi lại cần HR nhập dữ liệu trưởng phòng trước khi email cảnh báo X+4 chạy thật.

**Đường truy vấn:**
```
DEBTS.sale_owner (email)
  → users.email → users.id
  → members.email (liên kết 1-1, ràng buộc chặt tại migration 000075_strict_user_member_link)
  → members.department_id → departments.manager_member_id
  → members.email của trưởng phòng
```

### 3.4 Quy ước đặt tên permission

Codebase dùng **`module:action`** (`fin_param:read`, `project_cost:create`, `ticket_workflow:update`). Không dùng kiểu `contract_view`.

**Bộ permission cần seed cho module công nợ:**

| Permission | Mô tả | Cấp cho role |
|---|---|---|
| `debt:read` | Xem danh sách/chi tiết công nợ | Accountant, Chief Accountant, Sales, Sales Leader, Procurement, Legal, CEO, CFO |
| `debt:sync` | Đồng bộ dữ liệu từ CM | Accountant, Chief Accountant |
| `debt:confirm` | Xác nhận/loại bản ghi đồng bộ (`sync_status`) | Accountant, Chief Accountant |
| `debt:config` | Nhập `penalty_rate`, `payment_term_days` | Accountant, Chief Accountant |
| `debt:delivery` | Đóng dấu / gửi bưu điện / xác nhận phát | Accountant (stamp), Chief Accountant, HRA (post, deliver) |
| `debt:send_email` | Gửi email nhắc nợ | Accountant, Chief Accountant |
| `debt:settle` | Xác nhận thanh toán, tất toán | Accountant, Chief Accountant |
| `debt:suspend_approve` | Duyệt / từ chối khóa dịch vụ | Sales, Sales Leader |
| `debt:suspend_execute` | Thực thi khóa/mở trên Console hãng | Procurement |
| `debt:legal` | Soạn công văn, xác nhận gửi, khởi kiện | Legal |
| `debt:dashboard` | Xem Executive Dashboard | Chief Accountant, CEO, CFO |

Cấp quyền theo **join by NAME**, không hardcode id — đây là quy ước bắt buộc của codebase (`LESSON Backend #61`, thấy trong `000171_member_compensations.up.sql:22`).

---

## 4. Thông báo (Notification) — 3 kênh

**Quyết định:** mỗi sự kiện đẩy thông báo qua **cả 3 kênh**: Email + Lark + hiển thị trong ứng dụng.

### 4.1 Kênh 3 — Trong ứng dụng: bảng `notifications` đã có sẵn

`000022_create_notifications_table.up.sql`:
```sql
notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    title TEXT NOT NULL,
    body TEXT,
    ref_id INTEGER,
    ref_type VARCHAR(50),
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);
```

Endpoint đã có (`router_sys.go:144-150`):
- `GET /api/v1/notifications` — danh sách
- `GET /api/v1/notifications/unread-count` — số chưa đọc (dùng cho badge 🔔)
- `PUT /api/v1/notifications/:id/read`
- `PUT /api/v1/notifications/read-all`

**Module công nợ KHÔNG tạo bảng mới.** Chỉ cần:
- `ref_type = 'DEBT'`, `ref_id` = id khoản nợ → Frontend bấm vào là nhảy thẳng tới dòng nợ tương ứng.
- Đăng ký thêm các giá trị `type` mới (§4.4).

✅ **Đã xử:** `notifications.ref_id` kiểu `INTEGER`, nên `debts.id` chốt dùng **`BIGSERIAL`** chứ không phải UUID (`Database_Schema.md` §0). Nhờ vậy gắn được thông báo vào khoản nợ mà **không phải sửa bảng nền tảng**; khóa đối chiếu sang CM vẫn là `dntt_cm_id`.

### 4.2 Kênh 1 — Email · **chốt dùng Gmail API, KHÔNG dùng SMTP**

Người nhận dựng theo quy tắc tại `Database_Schema.md` §4 (bảng `customer_contacts` cho khách; email user ERP cho nội bộ).

#### Vì sao bắt buộc là API chứ không phải SMTP

Thiết kế luồng thư yêu cầu **đọc lại `Message-ID` thật** sau khi gửi, vì Gmail ghi đè ID tự sinh (`Database_Schema.md` mục *Cái bẫy: Gmail ghi đè Message-ID*).

Gửi qua `smtp.gmail.com` thì Gmail **vẫn ghi đè ID nhưng không trả lại gì** — SMTP chỉ có mã `250 OK`. Không đọc được ID thật thì `In-Reply-To` của thư kế tiếp trỏ vào ID không tồn tại, **luồng vỡ trong khi log báo gửi thành công**. Đây không phải lựa chọn phong cách: SMTP làm hỏng chính cơ chế mà DC-04 AC6 cam kết.

Gmail API `users.messages.send` trả `{ id, threadId, labelIds }`; `users.messages.get?format=metadata&metadataHeaders=Message-ID` đọc được ID thật. Cả hai thứ thiết kế cần đều lấy được.

#### Cấu hình chốt

| | Giá trị |
|---|---|
| Thư viện | `google.golang.org/api/gmail/v1` |
| Xác thực | **Service account + domain-wide delegation**, mạo danh hòm thư dùng chung |
| Scope | `gmail.send` *(gửi)* + `gmail.readonly` *(đọc lại `Message-ID`)* |
| Hòm thư gửi | **`congno@cloudaz.cc`** — hòm dùng chung, **không** phải tài khoản cá nhân |
| Dựng MIME | `gomail` build ra bytes → base64url → `gmail.Message{Raw: ...}` |
| Đính kèm | `multipart/mixed`, Gmail cho tối đa 25 MB — PDF công văn vài trăm KB |
| Hạn mức | Workspace 2.000 thư/tài khoản/ngày — dư xa nhu cầu thu nợ |

**Vì sao service account chứ không phải OAuth2 refresh token:** refresh token gắn với một người; người đó đổi mật khẩu hoặc nghỉ việc là token chết, phải có người vào bấm consent lại — giữa lúc job đòi nợ đang chạy. Service account do Admin Workspace cấp quyền **một lần** ở Admin Console, sau đó không còn bước tương tác nào.

**Vì sao hòm thư dùng chung chứ không phải tài khoản kế toán viên:** thư đòi nợ là bằng chứng pháp lý. Người gửi nghỉ việc → tài khoản bị khóa → **cả luồng thư ra khỏi tầm kiểm soát của công ty**, và khách trả lời thì không ai đọc. Trách nhiệm cá nhân đã có `debt_email_logs.approved_by` ghi lại, không cần thể hiện ở địa chỉ người gửi.

#### Ba việc phải làm ngoài code — chặn deploy nếu thiếu

1. **Admin Google Workspace** cấp domain-wide delegation cho Client ID của service account với **đúng 2 scope** trên. Thiếu bước này thì code chạy ra `403 unauthorized_client` — và đây là lỗi cấu hình, thử lại bao nhiêu lần cũng vậy.
2. **Tạo hòm thư `congno@cloudaz.cc`** và quyết ai có quyền đọc — khách hàng sẽ trả lời vào đây. *(Sprint 1 chưa đọc thư trả lời tự động; người phụ trách đọc tay.)*
3. **Xác nhận SPF / DKIM / DMARC** của `cloudaz.cc` đã bật. Workspace thường bật sẵn, nhưng thư đòi nợ rơi vào spam thì mọi mốc pháp lý phía sau đều mất căn cứ.

#### Ghi vết người gửi

Mỗi dòng `debt_email_logs` lưu `from_email` — địa chỉ **thực tế đã gửi**, không suy từ config lúc đọc. Hôm nay chỉ có một hòm thư nên có vẻ thừa, nhưng bằng chứng trước tòa phải **tự đủ trong một dòng**, không phải tra xem file config phiên bản nào đang chạy tháng 9/2026.

Lỗi Gmail API phân loại và retry khác nhau theo mã — xem `NFR_Sprint1.md` mục *Phân loại lỗi Gmail API*.

### 4.3 Kênh 2 — Lark

Lark đã tích hợp sẵn: OAuth đăng nhập (`/auth/lark/url`, `/auth/lark/callback`), interactive card callback (`POST /api/v1/lark/callback`, `router.go:59-62`), bảng `lark_card_actions` (`000347_723_lark_card_actions`), và đồng bộ user Lark (`frontend/src/routes/(app)/(sys)/users/larkSync.spec.ts`).

**Dùng lại**: gửi card Lark tới user tương ứng. Với các sự kiện cần hành động (duyệt khóa DV), có thể gắn nút trên card để duyệt ngay trong Lark — nhưng **Sprint 1 chỉ gửi card thông báo có link về ERP**, không làm nút hành động, để giảm phạm vi.

### 4.4 Danh mục sự kiện thông báo

> **Đây là `notifications.type`, khác với `debt_events.action_type`.** Bảng `notifications` dùng chung toàn ERP nên `type` **bắt buộc** có tiền tố `DEBT_`; `debt_events.action_type` là bảng riêng của module nên **không** dùng tiền tố. Bảng so sánh đầy đủ: `Database_Schema.md` §13b.

| `type` | Kích hoạt khi | Người nhận | Nội dung `title` |
|---|---|---|---|
| `DEBT_SYNC_PENDING` | Sync CM xong, có bản ghi `PENDING_REVIEW` | Accountant | "N khoản nợ mới chờ xác nhận" |
| `DEBT_HARDCOPY_STAMPED` | Kế toán đóng dấu (DC-03 AC1) | HRA | "ĐNTT đã đóng dấu — chờ gửi bưu điện" |
| `DEBT_SUSPEND_REQUEST` | Cron X+4 sinh `WAITING_SALES` (DC-07 AC4) | Sales phụ trách | "Khách X quá hạn 4 ngày — cần duyệt khóa DV" |
| `DEBT_SUSPEND_APPROVED` | Sales AM duyệt | Procurement | "Yêu cầu khóa dịch vụ khách X" |
| `DEBT_SUSPEND_REJECTED` | Sales AM từ chối | Accountant, Chief Accountant, Sales Leader | "Sales bảo lãnh khách X — lý do: …" |
| `DEBT_UNSUSPEND_REQUEST` | Tất toán xong, đang `SUSPENDED` (DC-08 AC5) | Procurement | "Khách X đã thanh toán — mở lại dịch vụ" |
| `DEBT_LEGAL_X15` | Cron X+15 | Legal, Chief Accountant | "Khách X chạm mốc X+15 — cần lập công văn" |
| `DEBT_LEGAL_X30` | Cron X+30 | Legal, CEO, CFO | "Khách X chạm mốc X+30 — chuẩn bị khởi kiện" |
| `DEBT_EMAIL_FAILED` | Gửi mail khách thất bại sau khi hết lượt thử lại | **Theo làn:** `REMINDER` → Accountant · `LEGAL` → Legal | "Không gửi được email nhắc nợ cho khách X" |
| `DEBT_DRAFT_PENDING` | 08:35, có nháp chờ duyệt | **Theo làn:** `REMINDER` → Accountant · `LEGAL` → Legal | "Có N thư chờ duyệt gửi hôm nay" |
| `DEBT_SYNC_FAILED` | Gọi CM thất bại | Accountant, Admin | "Đồng bộ CM thất bại" |

> **Hai dòng "theo làn" đọc `debt_email_logs.mail_track`.** Gửi nhầm người là gửi cho người không có quyền xử lý — họ nhận thông báo mỗi ngày về việc mình không làm được gì. Bảng luật đầy đủ: `Database_Schema.md` mục *Hai làn thư*.

### 4.4b Cách gửi — sao chép đúng khuôn `ticket_service.go`

Đọc codebase thì ERP **không có một hàm "notify" gộp cả 3 kênh**. Mỗi kênh là một lời gọi riêng, và module ticket là nơi làm chuẩn nhất. Sao chép y khuôn đó, không viết cơ chế mới.

**Hai khuôn gửi, chọn theo ngữ cảnh:**

| Ngữ cảnh | Cách gửi | Tiền lệ |
|---|---|---|
| **Người dùng bấm nút** (đóng dấu, duyệt khóa, tất toán, thực thi Console…) | Gọi **thẳng** trong service method: `notif.Create(...)` + `lark.SendCard(...)` | `ticket_service.go:309` `notifyUser` + `:324` `notifyAssigneeLark` |
| **Job nền quét hàng loạt** (nhắc nợ 08:30, sinh yêu cầu khóa 08:25, pháp lý X+15/X+30) | **Enqueue** vào `debt_reminder_outbox`, drain job riêng mới gửi | `sla_service` → `ticket_reminder_outbox` → `TicketReminderDrainJob` |

**Vì sao job phải dùng outbox:** job chạy trong `runUnderJobLock`; gọi Lark đồng bộ ngay trong đó sẽ giữ advisory lock suốt thời gian chờ mạng. Comment trong `ticket_reminder_outbox.go` ghi rõ lý do này. Hành động do người dùng bấm thì không nằm trong lock nên gọi thẳng được.

**Chữ ký hàm có sẵn:**
```go
// In-app — CHỈ in-app, không đụng Lark
notif.Create(ctx, targetUserID int, nType, title, body string, refID *int, refType *string) error

// Lark — degrade-only, SendCard không bao giờ trả lỗi
lark.SendCard(ctx, recipientEmail, title, body, url string) error
lark.SendCardChecked(...)  // bản trả lỗi thật, dùng trong drain job để biết mà retry
```

**Bốn quy tắc bắt buộc, lấy từ `notifyUser` và `notifyAssigneeLark`:**

1. **Không tự thông báo cho chính mình** — `if target == nil || *target == actorUserID { return }`. Kế toán bấm tất toán thì không nhận notification về việc mình vừa làm.
2. **Fire-and-forget, nil-safe** — `_ = notif.Create(...)`, bỏ qua lỗi. Thông báo hỏng **không được** làm hỏng nghiệp vụ.
3. **Lark degrade-only** — dùng `SendCard` (nuốt lỗi) ở đường người dùng, `SendCardChecked` (trả lỗi) trong drain job để biết mà thử lại.
4. **Email người nhận Lark lấy qua `userRepo.GetByID`** — bảng `debts` không lưu email của user nội bộ, chỉ có `sale_owner`.

**Hai hằng số phải khai thêm trong `internal/domain/entity`:**
```go
NotifRefDebt = "DEBT"   // refType, cạnh NotifRefTicket sẵn có
// Các hằng nType: NotifTypeDebtSyncPending, NotifTypeDebtSuspendRequest, … (xem Danh mục thông báo)
```
Codebase khai `nType` dạng hằng (`entity.NotifTypeTicketComment`, `NotifTypeTimesheetApproved`), **không** truyền chuỗi trần.

### 4.5 Nguyên tắc gửi

- Gửi thông báo là **hiệu ứng phụ, không được làm hỏng nghiệp vụ**: nếu Lark hoặc email lỗi, giao dịch chính vẫn commit; ghi lỗi vào log và tạo notification in-app cho Admin.
- Ghi notification in-app **trong cùng transaction** với thay đổi trạng thái (để không mất thông báo). Email và Lark đẩy ra hàng đợi, gửi bất đồng bộ.
- Không gửi trùng: cùng `type` + `ref_id` + cùng ngày thì chỉ 1 bản ghi.

### 4.6 Hiển thị trên giao diện

Mọi màn hình của module đều dùng chung **chuông thông báo 🔔 ở thanh điều hướng** của ERP (đã có sẵn, lấy số từ `/notifications/unread-count`). Ngoài ra mỗi wireframe bổ sung khu vực thông báo riêng theo vai trò — xem phần "Khu vực Thông báo" đã thêm vào từng file wireframe.

---

## 5. ⚠️ Audit log — nguy cơ làm trùng

Nền tảng ERP **đã tự động ghi audit** cho mọi request mutating dưới `/api/v1` (trừ `/auth`) qua `ActivityAuditMiddleware` (`router.go:70`), ghi vào bảng `activity_logs`. Ngoài ra còn có bảng `audit_logs` riêng (`000055_create_audit_logs.up.sql`).

Tài liệu công nợ lại đang định nghĩa bảng thứ ba là `debt_events`.

**Khuyến nghị:** vẫn giữ `debt_events` nhưng hiểu đúng vai trò — nó **không phải** audit hạ tầng mà là **timeline nghiệp vụ** phục vụ tính năng Expandable Row và giải trình liên phòng ban (`action_type` chuẩn hóa, `file_url` ảnh minh chứng, mô tả tiếng Việt cho người dùng cuối đọc). `activity_logs` giữ nguyên vai trò backstop kỹ thuật. Cần ghi rõ ranh giới này để dev không gộp nhầm hoặc bỏ một trong hai.

---

## 6. Việc của dev khi bắt tay code

- Khai báo các mã lỗi `FIN_DEBT_*` trong `internal/apperror` — danh sách đầy đủ tại `ERP_API.md` §0.5 *Format lỗi*
- Viết migration `ALTER TABLE departments ADD manager_member_id` (§3.3, PO đã chốt phương án A — map theo cây tổ chức ERP)
- Đăng ký các job vào bảng `background_jobs` — danh sách tại `ERP_API.md` §0.9
- Thêm client Gmail API (`gmail/v1`) với service account — xem *Kênh 1 — Email*

### 6.1 Ba việc chặn deploy, phải xong TRƯỚC khi code chạy thật

| # | Việc | Ai làm | Không có thì |
|---|---|---|---|
| 1 | Cấp domain-wide delegation cho Client ID service account, scope `gmail.send` + `gmail.readonly` | **Admin Google Workspace** | `403 unauthorized_client` — mọi thư đều lỗi, thử lại vô ích |
| 2 | Tạo hòm thư dùng chung `congno@cloudaz.cc`, quyết ai được đọc | **Admin Google Workspace** | Không có địa chỉ gửi; khách trả lời không ai nhận |
| 3 | Điền `departments.manager_member_id` cho các phòng Sales | **HCNS** | Không truy được email Trưởng phòng Sales để CC (`SUSPEND_WARNING_X_PLUS_4`, `SUSPEND_REJECTED`) |

Ba việc này **không phải việc của dev** và thường bị phát hiện muộn — vào đúng hôm demo. Chốt người phụ trách và deadline ngay từ đầu sprint.

**Việc kiểm chứng bắt buộc trên môi trường thật:** gửi 3 thư liên tiếp cho một khoản nợ tới một hòm Gmail thật, mở ra xem có đúng **một cuộc hội thoại** không. Bẫy `Message-ID` bị ghi đè không unit test nào bắt được — chỉ lộ ra ở bước này.
