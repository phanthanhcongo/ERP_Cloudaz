# UPPROMOTE

> **Workbook:** `DO_Bảng tổng hợp_ đối soát chi phí.xlsx`  
> **Sheet:** `UPPROMOTE`  
> **Vùng dữ liệu:** 76 dòng × 3 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C |
|---:|---|---|---|
| 1 |  | 2026-05-01 |  |
| 3 | STT | Service Name | Service Fee |
| 4 | 1 | Container Registry | 5 |
| 5 | 2 | Droplet Backups | 203.8 |
| 6 | 3 | Droplet Snapshots | 124.76 |
| 7 | 4 | Droplets  | 13165.93 |
| 8 |  | GPU Droplets | 565.44 |
| 9 | 5 | Kubernetes  | 216.6 |
| 10 | 6 | LBaaS  | 360 |
| 11 | 7 | Spaces | 123.41 |
| 12 | 8 | Spaces Bandwidth | 1.86 |
| 13 | 9 | VPC Peering Bandwidth | 0.02 |
| 14 | 10 | Volume Snapshots | 25.3 |
| 15 | 11 | Volumes | 2578.84 |
| 16 | Total Service Fee |  | 17370.96 |
| 17 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  | 19108.06 |
| 18 | Chiết khấu (10%) |  | 1910.81 |
| 19 | Tổng cộng (USD) |  | 17197.25 |
| 20 | Tỷ giá |  | 26395 |
| 21 | Thành tiền (VND) |  | 453921414 |
| 22 | Thuế GTGT 10% (VND) |  | 45392141 |
| 23 | Tổng số tiền phải thanh toán (VND) |  | 499313555 |
| 28 |  | 2026-06-01 |  |
| 30 | STT | Service Name | Service Fee |
| 31 | 1 | Container Registry | 5 |
| 32 | 2 | Droplet Backups | 170.6 |
| 33 | 3 | Droplet Snapshots | 98.73 |
| 34 | 4 | Droplets  | 12487.78 |
| 35 | 5 | GPU Droplets | 547.2 |
| 36 | 6 | Kubernetes  | 157.78 |
| 37 | 7 | LBaaS  | 338.68 |
| 38 | 8 | Spaces | 124.32 |
| 39 | 9 | Spaces Bandwidth | 4.92 |
| 40 | 10 | VPC Peering Bandwidth | 0.02 |
| 41 | 11 | Volume Snapshots | 24.26 |
| 42 | 12 | Volumes | 2521.62 |
| 43 | Total Service Fee |  | 16480.91 |
| 44 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  | 18129 |
| 45 | Chiết khấu (10%) |  | 1812.9 |
| 46 | Tổng cộng (USD) |  | 16316.1 |
| 47 | Tỷ giá |  | 26466 |
| 48 | Thành tiền (VND) |  | 431821903 |
| 49 | Thuế GTGT 10% (VND) |  | 43182190 |
| 50 | Tổng số tiền phải thanh toán (VND) |  | 475004093 |
| 55 |  | 2026-07-01 |  |
| 57 | STT | Service Name | Service Fee |
| 58 | 1 | Container Registry | 5 |
| 59 | 2 | Droplet Backups | 121.2 |
| 60 | 3 | Droplet Snapshots | 14.2 |
| 61 | 4 | Droplets  | 10224.39 |
| 62 | 5 | GPU Droplets | 565.44 |
| 63 | 6 | Kubernetes  | 60.53 |
| 64 | 7 | LBaaS  | 288 |
| 65 | 8 | Spaces | 71.53 |
| 66 | 9 | Spaces Bandwidth | 0 |
| 67 | 10 | VPC Peering Bandwidth | 0.02 |
| 68 | 11 | Volumes | 2142.18 |
| 69 | Total Service Fee |  | 13492.49 |
| 70 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  | 14841.74 |
| 71 | Chiết khấu (10%) |  | 1484.17 |
| 72 | Tổng cộng (USD) |  | 13357.57 |
| 73 | Tỷ giá |  | 26475 |
| 74 | Thành tiền (VND) |  | 353641666 |
| 75 | Thuế GTGT 10% (VND) |  | 35364167 |
| 76 | Tổng số tiền phải thanh toán (VND) |  | 389005833 |

> *Đã bỏ qua 11 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (21 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=sum(C{r}:C{r})` | 3 | `C16` |
| C | `=round(C{r}*(1+10%),2)` | 3 | `C17` |
| C | `=round(C{r}*10%,2)` | 3 | `C18` |
| C | `=C{r}-C{r}` | 3 | `C19` |
| C | `=round(C{r}*C{r},0)` | 3 | `C21` |
| C | `=round(C{r}*10%,0)` | 3 | `C22` |
| C | `=C{r}+C{r}` | 3 | `C23` |
