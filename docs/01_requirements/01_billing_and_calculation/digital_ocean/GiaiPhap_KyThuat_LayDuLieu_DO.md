# Giải pháp kỹ thuật — Thu thập dữ liệu billing DigitalOcean

> **Nguồn**: tách từ `docs/GetBillingProcess/solution.md` (đã gỡ bỏ), phần nội dung DigitalOcean
> **Cập nhật 2026-10-12**: đã kiểm chứng mô hình truy cập bằng API thật — xem mục *Mô hình truy cập* bên dưới
> **Quy trình nghiệp vụ**: [PhanTich_QuyTrinh_Billing_DigitalOcean.md](PhanTich_QuyTrinh_Billing_DigitalOcean.md)
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](../../GetBillingProcess/00-KienTruc-TongThe.md)

---

## Mô hình

```
ERP Backend chạy cronjob định kỳ
    → lặp qua TỪNG team (mỗi team một Personal Access Token riêng)
        → gọi DigitalOcean REST API lấy danh sách Invoices của team đó
        → lấy invoice_items + summary, hoặc tải CSV/PDF theo invoice_uuid
        → parse → lưu DB nội bộ (khóa: team + kỳ cước)
```

*Khác với Google và AWS: DO không cần hạ tầng data warehouse trung gian.*

---

## Ưu điểm

- **Đơn giản**: DO cung cấp REST API chính thức, tường minh, tải trực tiếp CSV và PDF theo UUID hóa đơn. Không cần cấu hình S3/BigQuery hay SFTP.
- **Độ tin cậy cao**: dữ liệu hóa đơn từ API là dữ liệu **đã chốt sổ chính thức** cuối tháng — chính xác để đối soát trực tiếp.

## Nhược điểm & thách thức

- **Xử lý file ở backend**: ERP phải tự tải, parse và ghi DB. Nếu khách dùng hàng nghìn Droplets/Volumes, file CSV lớn — **bắt buộc dùng stream parser** để tránh tràn RAM (OOM).
- **Quản 62 token**: không có token dùng chung cho nhiều team (xem mục *Mô hình truy cập*). Phải thu thập, mã hóa, theo dõi hạn và xin lại khi khách rotate token.


---

## Mô hình truy cập: 62 team độc lập, KHÔNG thuộc một organization

> **Kết luận đã kiểm chứng bằng API thật — 2026-10-12.** Đây là ràng buộc nền tảng
> quyết định toàn bộ kiến trúc thu thập dữ liệu.

### Thực trạng

Tài khoản `do.billing@cloudaz.io` (CloudAZ JSC) hiện thấy **62 team** trên
DigitalOcean. **Các team này độc lập, không nằm trong một organization chung
của CloudAZ.** Mỗi team là một tài khoản billing riêng biệt, thuộc org riêng
của từng khách hàng.

Bằng chứng từ trường `user_email` trên hóa đơn — mỗi khách một org id khác nhau:

| Team | `user_email` trên invoice |
|---|---|
| Adflex | `org:1478677671:sa@eway.vn` |
| My Team (digibird) | `org:1668367655809761693:master@digibird.io` |

### Hệ quả: BẮT BUỘC mỗi team một token

DigitalOcean chỉ cho tạo Personal Access Token ở **cấp team**, không có token
cấp organization dùng chung. Một token chỉ đọc được billing của đúng team mà
nó thuộc về.

| Endpoint | Phạm vi | Ghi chú |
|---|---|---|
| `/v2/account` | 1 team | trả `team.uuid` + `team.name` của token |
| `/v2/customers/my/invoices` | **1 team** | `account_urn = do:team:<uuid>` |
| `/v2/teams` | 62 team | **chỉ** `uuid`, `name`, `email`, `user_role` — KHÔNG có billing |
| `/v2/organizations/teams` | — | **403** với mọi token cấp team |

Đã thử 7 cách chuyển ngữ cảnh team trên một token — `?team_uuid=`, `?team_id=`,
header `X-DO-Team`, `X-Team-UUID`, path `/v2/teams/{uuid}/...`,
`/v2/organizations/teams/{uuid}/invoices`. Kết quả:

- 4 cách đầu trả **HTTP 200 nhưng số liệu KHÔNG đổi** — truyền UUID rác
  `00000000-0000-0000-0000-000000000000` vẫn ra đúng invoice của team gốc.
  Tham số bị **bỏ qua**, không phải được chấp nhận.
- 3 cách path trả **404**.

> [!WARNING]
> Cái bẫy khi kiểm thử: HTTP 200 **không** nghĩa là lấy được dữ liệu team khác.
> Phải so sánh `invoice_uuid` trả về với baseline (lần gọi không truyền tham số).
> Giống nhau = tham số bị bỏ qua.

### Vận hành: quản 62 token

- **Scope tối thiểu**: `billing:read` + `account:read`. Không cần quyền tài nguyên
  (`droplet`, `database`…) — token đọc hóa đơn không nên xóa được Droplet của khách.
- **Role cần thiết**: `Owner` hoặc `Biller` trên team đó. `Member` không thấy trang Billing.
- **Token có thể hết hạn**: khách đặt 30/60/90 ngày thì sync chết lặng khi tới hạn.
  Phải ghi log lỗi theo từng team và cảnh báo chủ động.
- **Lưu trữ**: mã hóa trong DB (AES-256-GCM), không để plaintext trong `.env`.
  Khóa master nằm ngoài DB. Mất khóa = mất toàn bộ token.

### Nhận diện khách từ danh sách team

`/v2/teams` nạp được 62 dòng tự động, nhưng **15/62 team trùng tên `"My Team"`**
(tên mặc định DO, khách không đổi). Không phân biệt được bằng `name`.

- Khóa ánh xạ phải là **`uuid`**, không dùng `name`.
- Dùng `email` làm gợi ý khi `name` vô nghĩa:
  `tnguyen.actlife@gmail.com` → actlife, `admin@thaiam.vn` → Thái Am.
- Việc ánh xạ `uuid → khách hàng` làm **thủ công một lần**, lưu vào DB.

### Mô hình dữ liệu tương ứng

```
org (pháp nhân/khách hàng — khái niệm của CloudAZ, KHÔNG phải org của DO)
 └─ team (1 team DO = 1 token = 1 tài khoản billing)
     └─ invoice (khóa tự nhiên: team_id + kỳ cước, 1 dòng/tháng)
         └─ invoice_item (từng dòng cước)
```

Token lưu ở cấp **team**, không phải cấp org — vì mỗi team cần token riêng.

---

## Vị trí trong kiến trúc chung

DO là ngoại lệ duy nhất không đi qua tầng data warehouse. Tuy nhiên vẫn phải tuân thủ hai tầng chung của ERP:

- **Tầng ánh xạ**: tài nguyên DO → khách hàng → hợp đồng → pháp nhân
- **Tầng tính cước**: công thức hợp đồng, tỷ giá, thuế, làm tròn — đặt trong ERP, không đặt trong code parse

Xem [00-KienTruc-TongThe.md](../../GetBillingProcess/00-KienTruc-TongThe.md).
