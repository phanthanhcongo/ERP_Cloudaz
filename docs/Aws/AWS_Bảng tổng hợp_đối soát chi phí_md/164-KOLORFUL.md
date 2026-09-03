# KOLORFUL

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `KOLORFUL`  
> **Vùng dữ liệu:** 53 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 845712898321 | 2020-08-01 | 66.64 | 23270 | `=D4*E4` |
| 5 |  | Tổng cộng |  | `=D4` |  | `=F4` |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D5*0.06` |  | `=F5*0.06` |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` |  | `=F5+F6` |
| 9 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |
| 10 |  |  |  |                                Người lập |  |  |
| 14 |  |  |  |                          Phạm Cẩm Nhung |  |  |
| 16 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |
| 18 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 19 | 1 | 845712898321 | 2020-09-01 | 84.95 | 23280 | `=D19*E19` |
| 20 |  | Tổng cộng |  | `=D19` |  | `=F19` |
| 21 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D20*0.06` |  | `=F20*0.06` |
| 22 |  | Tổng số tiền phải thanh toán |  | `=D20+D21` |  | `=F20+F21` |
| 26 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 29 | 1 | 845712898321 | 2020-10-01 | 84.57 | 23270 | `=D29*E29` |
| 30 |  | Tổng cộng |  | `=D29` |  | `=F29` |
| 31 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D30*0.06` |  | `=F30*0.06` |
| 32 |  | Tổng số tiền phải thanh toán |  | `=D30+D31` |  | `=F30+F31` |
| 35 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | 845712898321 | 2020-11-01 | 94.18 | 23235 | `=D38*E38` |
| 39 |  | Tổng cộng |  | `=D38` |  | `=F38` |
| 40 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D39*0.06` |  | `=F39*0.06` |
| 41 |  | Tổng số tiền phải thanh toán |  | `=D39+D40` |  | `=F39+F40` |
| 44 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 47 | 1 | 845712898321 | 2020-12-01 | 74.04 | 23185 | `=D47*E47` |
| 48 |  | Tổng cộng |  | `=D47` |  | `=F47` |
| 49 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D48*0.06` |  | `=F48*0.06` |
| 50 |  | Tổng số tiền phải thanh toán |  | `=D48+D49` |  | `=F48+F49` |
| 53 | TỔNG HỢP CHI PHÍ KOLORFUL |  |  |  |  |  |

> *Đã bỏ qua 19 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (35 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 5 | `D5` |
| D | `=D{r}*0.06` | 5 | `D6` |
| D | `=D{r}+D{r}` | 5 | `D7` |
| F | `=D{r}*E{r}` | 5 | `F4` |
| F | `=F{r}` | 5 | `F5` |
| F | `=F{r}*0.06` | 5 | `F6` |
| F | `=F{r}+F{r}` | 5 | `F7` |
