# Agiletech

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Agiletech`  
> **Vùng dữ liệu:** 52 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 895723953209 | 2022-10-01 | 186.53 |  |  |
| 5 |  | Tổng |  | `=D4` |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D5*0.1` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=round(D5+D6,2)` | 24877 | `=D7*E7` |
| 10 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 12 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 13 | 1 | 895723953209 | 2023-04-01 | 309.5 |  |  |
| 14 |  | Tổng |  | `=D13` |  |  |
| 15 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D14*0.1` |  |  |
| 16 | Tổng số tiền phải thanh toán |  |  | `=round(D14+D15,2)` | 23645 | `=D16*E16` |
| 19 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 22 | 1 | 895723953209 | 2023-05-01 | 315.7 |  |  |
| 23 |  | Tổng |  | `=D22` |  |  |
| 24 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D23*0.1` |  |  |
| 25 | Tổng số tiền phải thanh toán |  |  | `=round(D23+D24,2)` | 23662 | `=D25*E25` |
| 28 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 31 | 1 | 895723953209 | 2023-06-01 | 237.37 |  |  |
| 32 |  | Tổng |  | `=D31` |  |  |
| 33 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D32*0.1` |  |  |
| 34 | Tổng số tiền phải thanh toán |  |  | `=round(D32+D33,2)` | 23762 | `=D34*E34` |
| 37 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 40 | 1 | 895723953209 | 2023-07-01 | 92.48 |  |  |
| 41 |  | Tổng |  | `=D40` |  |  |
| 42 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D41*0.1` |  |  |
| 43 | Tổng số tiền phải thanh toán |  |  | `=round(D41+D42,2)` | 23860 | `=D43*E43` |
| 46 | TỔNG HỢP CHI PHÍ AGILE TECH |  |  |  |  |  |
| 48 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 49 | 1 | 895723953209 | 2023-08-01 | 20.95 |  |  |
| 50 |  | Tổng |  | `=D49` |  |  |
| 51 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D50*0.1` |  |  |
| 52 |  |  |  | `=round(D50+D51,2)` | 24260 | `=D52*E52` |

> *Đã bỏ qua 16 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (24 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 6 | `D5` |
| D | `=D{r}*0.1` | 6 | `D6` |
| D | `=round(D{r}+D{r},2)` | 6 | `D7` |
| F | `=D{r}*E{r}` | 6 | `F7` |
