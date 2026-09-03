# Giải pháp kỹ thuật — GCP (Google Cloud Platform)

> **Ưu tiên triển khai: 1/3** — chiếm phần lớn thời gian tính cước thủ công hiện tại
> **Kiến trúc chung**: [00-KienTruc-TongThe.md](00-KienTruc-TongThe.md)
> **Nghiệp vụ**: [BRD Tính cước Google](../1_tinh_cuoc/Google/BRD_TinhCuoc_Google_2026-09-03.md)

---

## 1. Hiện trạng (AS-IS)

Hãng phát hành **một invoice tổng** cho toàn bộ khách (ví dụ >600 nghìn USD gộp 70–80 khách), không tách theo khách. Với **mỗi khách**, kế toán phải mở link billing riêng trên Console rồi thao tác tay:

1. Lọc đúng tháng — Console mặc định có thể lệch khoảng ngày
2. Chọn đúng hãng, `group by project`
3. **Bỏ tích Reseller margin** để ra số của khách
4. **Bật/tắt tích promotion credit** để so số chênh lệch, dò xem có credit không
5. Chuyển sang `group by service` — chỉ ở chế độ này mới thấy **Gemini API**
6. Chụp màn hình lượng dùng làm bằng chứng gửi khách

Sau đó copy tay 2 bảng lên CM: bảng theo **Billing ID** (~94 dòng) và bảng theo **Project** (~621 dòng), copy lần lượt qua hàng chục trang.

**Quy mô**: ~70–80 khách/tháng · **Invoice hãng**: ~ngày 02, kế toán lấy số ngày 03.

---

## 2. Giải pháp: Cloud Billing Export → BigQuery

**Mô hình:** GCP Billing / Channel Services → tự động export sang BigQuery → ERP dùng SDK gọi BigQuery API → nhận về JSON kết quả đã tổng hợp.

*KHÔNG viết code kéo API từng khách, KHÔNG scrape Console.*

### Ưu điểm

- **Hiệu năng**: `GROUP BY`, `SUM`, tính toán được đẩy hết cho serverless engine của BigQuery. ERP chỉ nhận cục JSON kết quả rất nhẹ, không tải file CSV hàng trăm MB về RAM.
- **Toàn vẹn dữ liệu**: dữ liệu có schema chuẩn, kiểu rõ ràng (FLOAT, STRING, TIMESTAMP). Tránh hoàn toàn lỗi parse chuỗi, lỗi format ngày tháng, lỗi dấu phân cách của CSV.
- **Bảo mật**: dùng Service Account (key JSON) hoặc Workload Identity — không cần quản lý tài khoản/mật khẩu, giới hạn quyền chặt bằng Cloud IAM (chỉ `BigQuery Data Viewer`).
- **Mở rộng**: thêm khách hay đổi báo cáo chỉ là sửa SQL, không nghẽn hệ thống.

### Nhược điểm & thách thức

- **Độ trễ**: export không realtime, Google đổ data theo batch nhiều lần trong ngày (trễ vài giờ). Xem cơ chế chốt số ở [mục 6 kiến trúc chung](00-KienTruc-TongThe.md).
- **Nested SQL**: cột `credits`, `labels` là dạng lồng (RECORD/ARRAY) — dev cần biết dùng `UNNEST()`. Query không tối ưu sẽ phát sinh phí; biện pháp kiểm soát ở [mục 7 kiến trúc chung](00-KienTruc-TongThe.md).

---

## 3. Điểm mạnh nhất: bóc tách credit bằng một query

Ba pain point nặng nhất của kế toán — **Reseller margin**, **Promotion credit**, **Gemini API** — đều nằm trong cùng bảng export, và **hai trong ba nằm trong cùng cột `credits` (ARRAY)**, phân biệt bằng `credits.type`.

```sql
SELECT
  billing_account_id,
  project.id                AS project_id,
  service.description       AS service_name,
  seller_name,                                    -- tách giao dịch Marketplace
  SUM(cost)                 AS cost_goc,
  SUM((SELECT COALESCE(SUM(c.amount),0) FROM UNNEST(credits) c
       WHERE c.type = 'RESELLER_MARGIN'))  AS reseller_margin,
  SUM((SELECT COALESCE(SUM(c.amount),0) FROM UNNEST(credits) c
       WHERE c.type = 'PROMOTION'))        AS promotion_credit
FROM `<dataset>.gcp_billing_export_v1_XXXX`
WHERE usage_start_time >= @tu_ngay
  AND usage_start_time <  @den_ngay
GROUP BY 1, 2, 3, 4
```

Kết quả: mỗi khách × project × service ra sẵn giá gốc, margin, promotion — **thay thế toàn bộ thao tác bật/tắt tích thủ công**.

| Pain point | Yêu cầu BRD | Trường dữ liệu |
| :--- | :--- | :--- |
| Bỏ tích Reseller margin tay | 5.1.5 | `credits.type = 'RESELLER_MARGIN'` |
| Dò promotion credit từng khách | 5.3.1 | `credits.type = 'PROMOTION'` |
| Tách Gemini API tay | 5.2.1 | `service.description` |

> ⚠️ **Phải verify trên dataset thật trước khi code** — xem [mục 1 kiến trúc chung](00-KienTruc-TongThe.md).

---

## 4. Xử lý Gemini API

Gemini thuộc Marketplace nên **không được chiết khấu** (quy tắc gốc: [02-GMap-Marketplace.md](02-GMap-Marketplace.md), BRD 5.5.11). Công thức:

```
Số cuối = (Tổng − Gemini) × công thức hợp đồng + Gemini
```

- Tách Gemini thành dòng riêng theo `service.description`
- Bỏ qua tách riêng khi giá trị dưới ngưỡng cấu hình (kế toán nêu ~0,07 USD — cần chốt số cứng, BRD 5.2.3)
- **Xuất báo cáo tổng hợp lượng dùng Gemini toàn bộ khách theo tháng** — đây là yêu cầu tự động hóa số 1 mà kế toán nêu trực tiếp (BRD 5.2.4)

---

## 5. Xử lý Credit / Promotion

Query ở mục 3 chỉ trả lời được **"có credit hay không, bao nhiêu"**. Phần **"credit này của ai"** là quyết định kinh doanh, phải làm trong ERP:

1. ERP xuất **danh sách khách có credit trong tháng** kèm số tiền (BRD 5.3.2)
2. Kế toán gửi Sale / Sale admin / CEO xác nhận
3. Phân loại 3 trạng thái: *toàn bộ của khách / toàn bộ của Cloudaz / chia một phần* — có thật tình huống hãng cấp 4.000 credit, chỉ cho khách 2.500, giữ lại 1.500 (BRD 5.3.3)
4. Phần thuộc khách áp vào bảng đối soát; phần thuộc Cloudaz chỉ ghi nhận nội bộ
5. Lưu vết người xác nhận và thời điểm (BRD 5.3.6)

---

## 6. Ánh xạ và đối soát

- **Ánh xạ**: `billing_account_id` + `project.id` chưa đủ xác định khách — 1 khách có thể có 2 billing account, 1 khách nhiều project. Xem [mục 4 kiến trúc chung](00-KienTruc-TongThe.md).
- **Đối soát**: GCP **có** bảng đối soát — kế toán lập bảng tính tay riêng rồi so với bảng CM gen. Xem [mục 5 kiến trúc chung](00-KienTruc-TongThe.md).

---

## 7. Việc cần làm ngay

| # | Việc | Phụ thuộc |
| :--- | :--- | :--- |
| 1 | Xin quyền Service Account / bật Billing Export | D-01, Q-01 |
| 2 | Verify schema `credits.type`, `seller_name` trên dataset thật | Sau (1) |
| 3 | Lấy bộ file mẫu một kỳ từ kế toán để đối chiếu kết quả query | D-05 |
| 4 | Chốt ngưỡng bỏ qua Gemini | Q-05 |
