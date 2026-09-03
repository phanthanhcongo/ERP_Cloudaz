# Kiến trúc tổng thể — Tự động hóa thu thập & tính cước Cloud

> **Phạm vi**: GCP, GMap (Google Cloud Marketplace), Google Workspace
> **Tài liệu nghiệp vụ gốc**: [BRD Tính cước Google](../1_tinh_cuoc/Google/BRD_TinhCuoc_Google_2026-09-03.md)
> **Cập nhật**: 2026-09-03

Tài liệu này mô tả các quyết định kiến trúc **dùng chung cho mọi dịch vụ**. Chi tiết từng dịch vụ xem file riêng: [GCP](01-GCP.md) · [GMap](02-GMap-Marketplace.md) · [GWS](03-GWS.md).

---

## 1. Phụ thuộc chặn — phải giải quyết trước tiên

**Đội phát triển hiện không có quyền truy cập Console.** Quyền xem toàn bộ khách chỉ cấp cho kế toán, admin, chị Phương và giám đốc kinh doanh; Sale chỉ xem khách của mình.

Toàn bộ kiến trúc dưới đây đứng trên giả định ERP được cấp **Service Account** với quyền IAM ở cấp Billing Account, hoặc được bật **Billing Export sang BigQuery**. Kế toán đã xác nhận: *"nếu bọn em vào lấy được số thì chị bỏ qua hết những cái xung quanh"*.

**Việc đầu tiên sau khi có quyền — verify schema thật**, trước khi thiết kế tiếp:
- Tên chính xác của các giá trị `credits.type` trên dataset đang dùng
- `RESELLER_MARGIN` có xuất hiện trong export của tài khoản reseller không, hay chỉ trong Channel Services export
- Ngữ nghĩa `seller_name` theo loại export đang bật (Standard vs Detailed usage cost)

Tương ứng **D-01, Q-01** trong BRD.

---

## 2. Ranh giới trách nhiệm: BigQuery vs ERP

Đây là quyết định kiến trúc quan trọng nhất, và là chỗ tài liệu cũ tự mâu thuẫn (tầng Xử lý nói viết SQL tính thuế và chiết khấu trên BigQuery; phần Lợi ích lại nói logic giá tập trung ở ERP).

| Tầng | Chịu trách nhiệm | KHÔNG được biết |
| :--- | :--- | :--- |
| **BigQuery / Athena** | Aggregation lượng dùng, bóc tách credit theo loại, xuất ra `(kỳ, billing_account, project, service, seller, loại credit)` | Khách hàng, hợp đồng, tỷ giá, thuế |
| **ERP** | Ánh xạ tài nguyên → khách, công thức hợp đồng, discount theo năm, tỷ giá, thuế FCT, làm tròn nghìn, phân loại credit, đối soát | — |

> **Nguyên tắc: BigQuery không được biết khái niệm "khách hàng" hay "hợp đồng".**

**Vì sao không chôn logic giá vào SQL:**
- Hợp đồng và phụ lục thay đổi liên tục, và hiện *"chả có ai thông báo cả"* (BRD 5.5.8)
- Cần audit log cho mọi thao tác ảnh hưởng số tiền (BRD 5.9.3)
- Kế toán phải sửa tay được, có lưu vết lý do (BRD 5.6.5)
- CEO/Sale phân loại credit thuộc khách hay thuộc Cloudaz (BRD 5.3.3)

Đặt trong SQL đồng nghĩa mọi thay đổi giá phải qua dev — mất đúng cái linh hoạt mà kiến trúc này hứa hẹn.

---

## 3. Bốn tầng xử lý

```
[1] Thu thập      Billing Export (GCP + GMap) · CSV/Export (GWS)
        ↓
[2] Tổng hợp      SQL trên BigQuery: GROUP BY + UNNEST(credits)
        ↓         → bảng tổng hợp theo tháng (materialized)
[3] Ánh xạ        ERP: resource_mapping → khách → hợp đồng → pháp nhân
        ↓
[4] Tính & Đối soát   ERP: công thức giá, thuế, tỷ giá → bảng đối soát
```

---

## 4. Tầng ánh xạ tài nguyên → khách hàng

BigQuery trả về `billing_account_id`, `project.id`, `domain`. Nghiệp vụ cần đi tiếp tới **khách → hợp đồng → pháp nhân xuất hóa đơn**. Quan hệ là **n–n và thay đổi theo thời gian**.

```
resource_mapping
  resource_type    -- billing_account | project | view_link | domain
  resource_id
  customer_id
  contract_id
  effective_from / effective_to
```

Phủ được các tình huống thật ghi nhận từ phỏng vấn:

| Tình huống | Cách xử lý |
| :--- | :--- |
| 1 khách có 2 billing account | 2 dòng cùng `customer_id` |
| 1 view link chứa 23 project của nhiều khách | Map ở **cấp project**, không phải cấp view link |
| Google Workspace | Map ở **cấp domain** |
| Đổi pháp nhân giữa các kỳ (BRD 5.5.7) | Đóng `effective_to`, mở dòng mới — usage giữ nguyên, hợp đồng đổi |
| 1 hợp đồng → 9 pháp nhân | Bảng phân bổ riêng ở tầng hóa đơn |

**Bắt buộc kèm quy trình xử lý ID lạ** (BRD 5.1.11): tài nguyên chưa map → đưa vào hàng đợi *"chờ gán"* và cảnh báo kế toán. **Tuyệt đối không âm thầm bỏ qua** — đây đúng là lỗi CM đang mắc và gây thiếu tiền (BRD 5.6.4).

---

## 5. Tầng đối chiếu

> **Chỉ áp dụng cho GCP và GMap.** Google Workspace không có bước đối soát — xem [03-GWS.md](03-GWS.md).

Đây là **điều kiện nghiệm thu**, không phải tính năng phụ. Kế toán nói thẳng: *"nếu số không chuẩn nó còn liên quan đến hóa đơn"*.

- Bảng `reconciliation` lưu song song: **số ERP tính / số kế toán nhập / chênh lệch / ngưỡng chấp nhận / trạng thái**
- Màn hình **chỉ hiện dòng lệch vượt ngưỡng** — đúng yêu cầu *"nếu có lệch thì check thôi"* (BRD 5.6.2)
- **Đối chiếu chéo 2 chiều tổng hợp**: bảng theo Project vs bảng theo Billing ID phải khớp (BRD 5.6.8). Cùng nguồn BigQuery nên chỉ là 2 câu `GROUP BY` khác nhau — rẻ, chạy tự động mỗi kỳ
- **Đối chiếu với invoice hãng**: cảnh báo tham khảo hàng tháng; **bắt buộc khớp khi lập báo cáo RA** (BRD 5.6.3)
- **Vận hành song song vài kỳ** với quy trình thủ công trước khi cho phép bỏ bảng tính tay (BRD A-05)

---

## 6. Lịch chốt số — cấu hình theo từng dịch vụ

Không dùng một mốc chung cho mọi dịch vụ.

| Dịch vụ | Invoice hãng | Ghi chú |
| :--- | :--- | :--- |
| GCP | ~ngày 02 | Kế toán lấy số ngày 03 |
| GMap | ~ngày 05–08 | Có tháng đến ngày 09 |
| Workspace | ~ngày 01–02 | — |

**Ràng buộc cứng**: 2 khách ưu tiên (BitVN, Masan City) phải hoàn thành **trước ngày 07** (BRD 5.7.5).

**Cơ chế phát hiện dữ liệu đã ổn định** — thay vì cứng nhắc đợi đủ số ngày: chạy tổng 2 lần liên tiếp, chỉ chốt khi số không đổi. Xử lý đúng tình huống kế toán mô tả: *"có invoice mà lấy số luôn thì số vẫn chưa chuẩn"* (BRD 5.1.10).

Thêm cảnh báo khi invoice hãng chưa về đúng hạn dự kiến.

---

## 7. Kiểm soát chi phí query BigQuery

| Biện pháp | Mục đích |
| :--- | :--- |
| Query theo partition (`usage_start_time`), bắt buộc có điều kiện thời gian | Tránh full table scan |
| Clustering theo `billing_account_id` | Giảm dữ liệu quét khi lọc theo khách |
| Bảng tổng hợp theo tháng (materialized view / scheduled query) | ERP đọc bảng đã tổng hợp, **không bao giờ quét bảng thô** |
| `maximum_bytes_billed` | Chốt chặn cứng cho mọi query từ ERP |
| Budget alert trên project chứa dataset | Phát hiện sớm query hỏng |

Với quy mô hiện tại (~600 dòng project/tháng) chi phí thực tế rất nhỏ — các biện pháp trên chủ yếu là chốt chặn phòng query viết sai, không phải tối ưu chi phí.

---

## 8. Thứ tự ưu tiên triển khai

Xếp theo giá trị nghiệp vụ thu được, không theo độ khó kỹ thuật:

| Ưu tiên | Dịch vụ | Lý do |
| :--- | :--- | :--- |
| **1** | [GCP](01-GCP.md) | Chiếm phần lớn trong ~1,5 ngày/tháng. Tập trung toàn bộ việc nặng: tách Gemini tay, dò credit từng khách, đối soát |
| **2** | [GMap](02-GMap-Marketplace.md) | Dùng chung hạ tầng với GCP (Marketplace nằm trong Cloud Billing Export) → chi phí bổ sung thấp. Có đối soát |
| **3** | [GWS](03-GWS.md) | Luồng đơn giản nhất, đã được kế toán tin tưởng, **không có bước đối soát** → giá trị tự động hóa thấp nhất |

---

## 9. Ánh xạ yêu cầu BRD → giải pháp kỹ thuật

| Yêu cầu BRD | Giải quyết ở |
| :--- | :--- |
| 5.1.1–5.1.5 Thu thập GCP tự động | [01-GCP.md](01-GCP.md) |
| 5.1.5 Bỏ Reseller margin | `credits.type = 'RESELLER_MARGIN'` — [01-GCP.md](01-GCP.md) |
| 5.1.11 Project mới chưa gán khách | Mục 4 — hàng đợi chờ gán |
| 5.2 Tách Gemini | `service.description` — [01-GCP.md](01-GCP.md) |
| 5.3 Credit / Promotion | `credits.type = 'PROMOTION'` — [01-GCP.md](01-GCP.md) |
| 5.4 Workspace Flex/Commit | [03-GWS.md](03-GWS.md) |
| 5.5 Công thức, tỷ giá, thuế, làm tròn | Mục 2 — thuộc ERP, không thuộc BigQuery |
| 5.5.11 Quy tắc Marketplace không chiết khấu | [02-GMap-Marketplace.md](02-GMap-Marketplace.md) |
| 5.6 Đối soát | Mục 5 — chỉ GCP và GMap |
| 5.9.3 Audit log | Mục 2 — thuộc ERP |
