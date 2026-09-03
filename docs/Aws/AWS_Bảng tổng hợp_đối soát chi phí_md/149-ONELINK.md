# ONELINK

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ONELINK`  
> **Vùng dữ liệu:** 110 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | I | J | K |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 4 | 1 | 831722238763 | 2021-06-01 | 177.29 | 23130 | `=round(D4*E4,0)` |  |  |  |  |
| 5 |  | Tổng cộng |  | `=D4` | 23130 | `=round(D5*E5,0)` |  |  |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D5*0.1` |  | `=F5*0.1` |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | 23130 | `=F5+F6` |  |  |  |  |
| 8 |  |  |  |  |  |  |  | T6/2021 - T3/2022 | `=F7+F17+F27+F36+F45+F55+F64+F74+F83+F92` | 41892177.8000000045 |
| 11 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 14 | 1 | 831722238763 | 2021-07-01 | 565.11 | 23050 | `=round(D14*E14,0)` |  |  |  |  |
| 15 |  | Tổng cộng |  | `=D14` | 23050 | `=round(D15*E15,0)` |  |  |  |  |
| 16 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D15*0.1` |  | `=F15*0.1` |  |  |  |  |
| 17 |  | Tổng số tiền phải thanh toán |  | `=D15+D16` | 23050 | `=F15+F16` |  |  |  |  |
| 21 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 24 | 1 | 831722238763 | 2021-08-01 | 421.99 | 22880 | `=round(D24*E24,0)` |  |  |  |  |
| 25 |  | Tổng cộng |  | `=D24` | 22880 | `=round(D25*E25,0)` |  |  |  |  |
| 26 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D25*0.1` |  | `=F25*0.1` |  |  |  |  |
| 27 |  | Tổng số tiền phải thanh toán |  | `=D25+D26` | 22880 | `=F25+F26` | 10620644.0999999996 |  |  |  |
| 30 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 33 | 1 | 831722238763 | 2021-09-01 | 156.77 | 22840 | `=round(D33*E33,0)` |  |  |  |  |
| 34 |  | Tổng cộng |  | `=D33` | 22840 | `=round(D34*E34,0)` |  |  |  |  |
| 35 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D34*0.1` |  | `=F34*0.1` |  |  |  |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=D34+D35` | 22840 | `=F34+F35` |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 42 | 1 | 831722238763 | 2021-10-01 | 85.17 | 22850 | `=round(D42*E42,0)` |  |  |  |  |
| 43 |  | Tổng cộng |  | `=D42` | 22850 | `=round(D43*E43,0)` |  |  |  |  |
| 44 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D43*0.1` |  | `=F43*0.1` |  |  |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D43+D44` | 22850 | `=F43+F44` |  |  |  |  |
| 49 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 52 | 1 | 831722238763 | 2021-11-01 | 84.24 | 22800 | `=round(D52*E52,0)` |  |  |  |  |
| 53 |  | Tổng cộng |  | `=D52` | 22800 | `=round(D53*E53,0)` |  |  |  |  |
| 54 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D53*0.1` |  | `=F53*0.1` |  |  |  |  |
| 55 |  | Tổng số tiền phải thanh toán |  | `=D53+D54` | 22800 | `=F53+F54` | 2112739.2000000002 |  |  |  |
| 58 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 61 | 1 | 831722238763 | 2021-12-01 | 39.84 | 22920 | `=round(D61*E61,0)` |  |  |  |  |
| 62 |  | Tổng cộng |  | `=D61` | 22920 | `=round(D62*E62,0)` |  |  |  |  |
| 63 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D62*0.1` |  | `=F62*0.1` |  |  |  |  |
| 64 |  | Tổng số tiền phải thanh toán |  | `=D62+D63` | 22920 | `=F62+F63` | 1004446.3 |  |  |  |
| 68 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 71 | 1 | 831722238763 | 2022-01-01 | 34.82 | 22780 | `=round(D71*E71,0)` |  |  |  |  |
| 72 |  | Tổng cộng |  | `=D71` | 22780 | `=round(D72*E72,0)` |  |  |  |  |
| 73 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D72*0.1` |  | `=F72*0.1` |  |  |  |  |
| 74 |  | Tổng số tiền phải thanh toán |  | `=D72+D73` | 22780 | `=F72+F73` | 872520 |  |  |  |
| 77 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 79 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 80 | 1 | 831722238763 | 2022-02-01 | 46.1 | 22950 | `=round(D80*E80,0)` |  |  |  |  |
| 81 |  | Tổng cộng |  | `=D80` | 22950 | `=round(D81*E81,0)` |  |  |  |  |
| 82 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D81*0.1` |  | `=F81*0.1` |  |  |  |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=D81+D82` | 22950 | `=F81+F82` | 1163794.5 |  |  |  |
| 86 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 88 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 89 | 1 | 831722238763 | 2022-03-01 | 47.45 | 22980 | `=round(D89*E89,0)` |  |  |  |  |
| 90 |  | Tổng cộng |  | `=D89` | 22980 | `=round(D90*E90,0)` |  |  |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.1` |  | `=F90*0.1` |  |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=D90+D91` | 22980 | `=F90+F91` | 1199441.1000000001 |  |  |  |
| 95 | TỔNG HỢP CHI PHÍ ONELINK |  |  |  |  |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 98 | 1 | 831722238763 | 2022-04-01 | 46.83 | 23095 | `=round(D98*E98,0)` |  |  |  |  |
| 99 |  | Tổng cộng |  | `=D98` | 23095 | `=round(D99*E99,0)` |  |  |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D99*0.1` |  | `=F99*0.1` |  |  |  |  |
| 101 |  |  |  | `=D99+D100` | 23095 | `=F99+F100` | 1189692.8999999999 |  |  |  |
| 109 |  |  |  |  |  |  | 43081872 |  |  |  |
| 110 |  |  |  |  |  |  | `=G109+F110` |  |  |  |

> *Đã bỏ qua 41 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (79 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 11 | `D5` |
| D | `=D{r}*0.1` | 11 | `D6` |
| D | `=D{r}+D{r}` | 11 | `D7` |
| F | `=round(D{r}*E{r},0)` | 22 | `F4` |
| F | `=F{r}*0.1` | 11 | `F6` |
| F | `=F{r}+F{r}` | 11 | `F7` |
| G | `=G{r}+F{r}` | 1 | `G110` |
| J | `=F{r}+F{r}+F{r}+F{r}+F{r}+F{r}+F{r}+F{r}+F{r}+F{r}` | 1 | `J8` |
