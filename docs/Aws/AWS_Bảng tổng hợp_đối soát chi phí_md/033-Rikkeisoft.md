# Rikkeisoft

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Rikkeisoft`  
> **Vùng dữ liệu:** 101 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 951290330840 | 2022-06-01 | 29.91 |  |  |
| 5 |  | Tổng cộng |  | `=E4` |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E5*0.05` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=round(E5+E6,2)` | 23415 | `=E7*F7` |
| 10 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 951290330840 | 2022-07-01 | 15.96 |  |  |
| 14 |  | Tổng cộng |  | `=E13` |  |  |
| 15 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E14*0.05` |  |  |
| 16 | Tổng số tiền phải thanh toán |  |  | `=round(E14+E15,2)` | 23480 | `=E16*F16` |
| 20 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 951290330840 | 2022-08-01 | 363.46 |  |  |
| 24 |  | Tổng cộng |  | `=E23` |  |  |
| 25 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E24*0.05` |  |  |
| 26 | Tổng số tiền phải thanh toán |  |  | `=round(E24+E25,2)` | 23600 | `=E26*F26` |
| 29 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 32 | 1 | 951290330840 | 2022-09-01 | 109.25 |  |  |
| 33 |  | Tổng cộng |  | `=E32` |  |  |
| 34 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E33*0.05` |  |  |
| 35 | Tổng số tiền phải thanh toán |  |  | `=round(E33+E34,2)` | 24010 | `=E35*F35` |
| 40 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 43 | 1 | 951290330840 | 2023-05-01 | 727.03 |  |  |
| 44 |  | Tổng cộng |  | `=E43` |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=E44*0.05` |  |  |
| 46 | Tổng số tiền phải thanh toán |  |  | `=round(E44+E45,2)` | 23670 | `=E46*F46` |
| 52 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 951290330840 | 2023-06-01 | 921.3 |  |  |
| 56 |  | Tổng cộng |  | `=E55` |  |  |
| 57 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E56*0.05,2)` |  |  |
| 58 | Tổng số tiền phải thanh toán |  |  | `=round(E56+E57,2)` | 23848 | `=E58*F58` |
| 61 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 63 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 64 | 1 | 951290330840 | 2023-07-01 | 443.82 |  |  |
| 65 |  | Tổng cộng |  | `=E64` |  |  |
| 66 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E65*0.05,2)` |  |  |
| 67 | Tổng số tiền phải thanh toán |  |  | `=round(E65+E66,2)` | 23894 | `=E67*F67` |
| 71 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | 951290330840 | 2023-08-01 | 195.27 |  |  |
| 75 |  | Tổng cộng |  | `=E74` |  |  |
| 76 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E75*0.05,2)` |  |  |
| 77 | Tổng số tiền phải thanh toán |  |  | `=round(E75+E76,2)` | 24369 | `=E77*F77` |
| 81 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 83 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 84 | 1 | 951290330840 | 2023-09-01 | 103.67 |  |  |
| 85 |  | Tổng cộng |  | `=E84` |  |  |
| 86 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E85*0.05,2)` |  |  |
| 87 | Tổng số tiền phải thanh toán |  |  | `=round(E85+E86,2)` | 24529 | `=E87*F87` |
| 91 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |
| 93 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 94 | 1 | 951290330840 | 2023-10-01 | 103.64 |  |  |
| 95 |  | Tổng cộng |  | `=E94` |  |  |
| 96 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=round(E95*0.05,2)` |  |  |
| 97 | Tổng số tiền phải thanh toán |  |  | `=round(E95+E96,2)` | 24504 | `=E97*F97` |
| 101 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |

> *Đã bỏ qua 40 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (40 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| E | `=E{r}` | 10 | `E5` |
| E | `=round(E{r}+E{r},2)` | 10 | `E7` |
| E | `=E{r}*0.05` | 5 | `E6` |
| E | `=round(E{r}*0.05,2)` | 5 | `E57` |
| G | `=E{r}*F{r}` | 10 | `G7` |
