# VSHARE

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VSHARE`  
> **Vùng dữ liệu:** 28 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ VSHARE |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | AWS (277704740629) | 2023-02-01 | 64.78 |  |  |
| 5 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D4*8%` |  |  |
| 6 |  | Tổng số tiền phải thanh toán |  | `=round(D4+D5,2)` | 23955 | `=D6*E6` |
| 10 | ĐỐI SOÁT CHI PHÍ VSHARE |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | AWS (277704740629) | 2025-04-01 | 23.95 |  |  |
| 14 | Phí dịch vụ  |  |  | `=round(D13*8%,2)` |  |  |
| 15 | Thành tiền |  |  | `=D13+D14` | 26190 | `=D15*E15` |
| 16 | Thuế GTGT |  |  |  |  | `=round(F15*10%,0)` |
| 17 | Tổng số tiền phải thanh toán |  |  |  |  | `=F15+F16` |
| 21 | ĐỐI SOÁT CHI PHÍ VSHARE |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 24 | 1 | AWS (277704740629) | 2025-05-01 | 16 |  |  |
| 25 | Phí dịch vụ  |  |  | `=round(D24*8%,2)` |  |  |
| 26 |  |  |  | `=D24+D25` | 26225 | `=D26*E26` |
| 27 |  |  |  |  |  | `=round(F26*10%,0)` |
| 28 |  |  |  |  |  | `=F26+F27` |

> *Đã bỏ qua 9 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (13 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*8%,2)` | 2 | `D14` |
| D | `=D{r}+D{r}` | 2 | `D15` |
| D | `=D{r}*8%` | 1 | `D5` |
| D | `=round(D{r}+D{r},2)` | 1 | `D6` |
| F | `=D{r}*E{r}` | 3 | `F6` |
| F | `=round(F{r}*10%,0)` | 2 | `F16` |
| F | `=F{r}+F{r}` | 2 | `F17` |
