# GCALLS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `GCALLS`  
> **Vùng dữ liệu:** 46 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ GCALLS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 268591553853 | 2021-03-01 | 1470.8 | 23165 | `=D4*E4` |
| 5 |  | Tổng cộng |  | `=sum(D4)` |  | `=sum(F4)` |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D5*0.08` |  | `=F5*0.08` |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | 23165 | `=F5+F6` |
| 11 | TỔNG HỢP CHI PHÍ GCALLS |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 268591553853 | 2021-04-01 | 1522.39 | 23150 | `=D14*E14` |
| 15 |  | Tổng cộng |  | `=sum(D14)` |  | `=sum(F14)` |
| 16 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D15*0.08` |  | `=F15*0.08` |
| 17 |  | Tổng số tiền phải thanh toán |  | `=D15+D16` | 23165 | `=F15+F16` |
| 20 | TỔNG HỢP CHI PHÍ GCALLS |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 268591553853 | 2021-05-01 | 1219.61 | 23145 | `=round(D23*E23,0)` |
| 24 |  | Tổng cộng |  | `=sum(D23)` |  | `=sum(F23)` |
| 25 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D24*0.08` |  | `=F24*0.08` |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` | 23145 | `=F24+F25` |
| 29 | TỔNG HỢP CHI PHÍ GCALLS |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 32 | 1 | 268591553853 | 2021-06-01 | 1167.64 | 23130 | `=round(D32*E32,0)` |
| 33 |  | Tổng cộng |  | `=sum(D32)` |  | `=sum(F32)` |
| 34 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D33*0.08` |  | `=F33*0.08` |
| 35 |  | Tổng số tiền phải thanh toán |  | `=D33+D34` | 23130 | `=F33+F34` |
| 39 | TỔNG HỢP CHI PHÍ GCALLS |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 42 | 1 | 268591553853 | 2021-07-01 | 527.99 | 23050 | `=round(D42*E42,0)` |
| 43 |  | Discount (2%) |  | `=D42*2%` |  |  |
| 44 |  | Tổng cộng |  | `=D42-D43` | 23050 | `=round(D44*E44,0)` |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D44*0.08` |  | `=F44*0.08` |
| 46 |  |  |  | `=D44+D45` | 23050 | `=F44+F45` |

> *Đã bỏ qua 15 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (36 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.08` | 5 | `D6` |
| D | `=D{r}+D{r}` | 5 | `D7` |
| D | `=sum(D{r})` | 4 | `D5` |
| D | `=D{r}*2%` | 1 | `D43` |
| D | `=D{r}-D{r}` | 1 | `D44` |
| F | `=F{r}*0.08` | 5 | `F6` |
| F | `=F{r}+F{r}` | 5 | `F7` |
| F | `=sum(F{r})` | 4 | `F5` |
| F | `=round(D{r}*E{r},0)` | 4 | `F23` |
| F | `=D{r}*E{r}` | 2 | `F4` |
