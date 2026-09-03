# ABITS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ABITS`  
> **Vùng dữ liệu:** 184 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 830951535054 | 2021-09-01 | 81.64 | 22840 | `=round(D5*E5,0)` |  |
| 6 |  | Tổng cộng |  | `=D5` | 22840 | `=F5` |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*5%` |  | `=F6*0.05` |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 22840 | `=F6+F7` |  |
| 11 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  | `=F8+F17` |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 14 | 1 | 830951535054 | 2021-10-01 | 2576.99 | 22850 | `=round(D14*E14,0)` |  |
| 15 |  | Tổng cộng |  | `=D14` | 22850 | `=F14` |  |
| 16 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D15*5%` |  | `=F15*0.05` |  |
| 17 |  | Tổng số tiền phải thanh toán |  | `=D15+D16` | 22850 | `=F15+F16` |  |
| 20 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 23 | 1 | 830951535054 | 2021-11-01 | 2813.27 | 22800 | `=round(D23*E23,0)` |  |
| 24 |  | Tổng cộng |  | `=D23` | 22800 | `=F23` |  |
| 25 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D24*5%` |  | `=F24*0.05` |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` | 22800 | `=F24+F25` | 67349683.799999997 |
| 30 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 33 | 1 | 830951535054 | 2021-12-01 | 3107.7 | 22920 | `=round(D33*E33,0)` |  |
| 34 |  | Tổng cộng |  | `=D33` | 22920 | `=F33` |  |
| 35 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D34*5%` |  | `=F34*0.05` |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=D34+D35` | 22920 | `=F34+F35` | 74789908.200000003 |
| 40 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 43 | 1 | 830951535054 | 2022-01-01 | 4021.7 | 22780 | `=round(D43*E43,0)` |  |
| 44 |  | Tổng cộng |  | `=D43` | 22780 | `=F43` |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D44*5%` |  | `=F44*0.05` |  |
| 46 |  | Tổng số tiền phải thanh toán |  | `=D44+D45` | 22780 | `=F44+F45` | 96195042.299999997 |
| 49 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 52 | 1 | 830951535054 | 2022-02-01 | 2775.61 | 22950 | `=round(D52*E52,0)` |  |
| 53 |  | Tổng cộng |  | `=D52` | 22950 | `=F52` |  |
| 54 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D53*5%` |  | `=F53*0.05` |  |
| 55 |  | Tổng số tiền phải thanh toán |  | `=D53+D54` | 22950 | `=F53+F54` | 66885262.5 |
| 58 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 61 | 1 | 830951535054 | 2022-03-01 | 3029.22 | 22980 | `=round(D61*E61,0)` |  |
| 62 |  | Tổng cộng |  | `=D61` | 22980 | `=F61` |  |
| 63 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D62*5%` |  | `=F62*0.05` |  |
| 64 |  | Tổng số tiền phải thanh toán |  | `=D62+D63` | 22980 | `=F62+F63` | 73092049.799999997 |
| 67 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 69 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 70 | 1 | 830951535054 | 2022-04-01 | 2803.98 | 23095 | `=round(D70*E70,0)` |  |
| 71 |  | Tổng cộng |  | `=D70` | 23095 | `=F70` |  |
| 72 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D71*5%` |  | `=F71*0.05` |  |
| 73 |  | Tổng số tiền phải thanh toán |  | `=D71+D72` | 23095 | `=F71+F72` | 67995813.900000006 |
| 76 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 78 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 79 | 1 | 830951535054 | 2022-05-01 | 2953.61 |  |  |  |
| 80 |  | Tổng cộng |  | `=D79` |  |  |  |
| 81 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D80*5%` |  |  |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=round(D80+D81,2)` | 23330 | `=D82*E82` | 72353095.700000003 |
| 85 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 88 | 1 | 830951535054 | 2022-06-01 | 2825.96 |  |  |  |
| 89 |  | Tổng cộng |  | `=D88` |  |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D89*5%` |  |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(D89+D90,2)` | 23415 | `=D91*E91` | 69478393 |
| 94 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 97 | 1 | 830951535054 | 2022-07-01 | 3017.62 |  |  |  |
| 98 |  | Tổng cộng |  | `=D97` |  |  |  |
| 99 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D98*5%` |  |  |  |
| 100 |  | Tổng số tiền phải thanh toán |  | `=round(D98+D99,2)` | 23480 | `=D100*E100` |  |
| 103 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 105 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 106 | 1 | 830951535054 | 2022-08-01 | 3415.01 |  |  |  |
| 107 |  | Tổng cộng |  | `=D106` |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D107*5%` |  |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=round(D107+D108,2)` | 23600 | `=D109*E109` |  |
| 112 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 115 | 1 | 830951535054 | 2022-09-01 | 4356.4242261338 |  |  |  |
| 116 |  | Tổng cộng |  | `=D115` |  |  |  |
| 117 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D116*5%` |  |  |  |
| 118 |  | Tổng số tiền phải thanh toán |  | `=round(D116+D117,2)` | 24010 | `=D118*E118` |  |
| 121 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 123 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 124 | 1 | 830951535054 | 2022-10-01 | 3652.87 |  |  |  |
| 125 |  | Tổng cộng |  | `=D124` |  |  |  |
| 126 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D125*5%` |  |  |  |
| 127 |  | Tổng số tiền phải thanh toán |  | `=round(D125+D126,2)` | 24877 | `=D127*E127` |  |
| 130 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 133 | 1 | 830951535054 | 2022-11-01 | 4060.4926397158 |  |  |  |
| 134 |  | Tổng cộng |  | `=D133` |  |  |  |
| 135 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | 203.03 |  |  |  |
| 136 |  | Tổng số tiền phải thanh toán |  | `=round(D134+D135,2)` | 24795 | `=D136*E136` |  |
| 139 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 141 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 142 | 1 | 830951535054 | 2022-12-01 | 3915.752057661 |  |  |  |
| 143 |  | Tổng cộng |  | `=D142` |  |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D143*5%` |  |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=round(D143+D144,2)` | 23730 | `=D145*E145` |  |
| 148 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 151 | 1 | 830951535054 | 2023-01-01 | 4390.54 |  |  |  |
| 152 |  | Tổng cộng |  | `=D151` |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D152*5%` |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=round(D152+D153,2)` | 23622 | `=D154*E154` |  |
| 157 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 160 | 1 | 830951535054 | 2023-02-01 | 4584.64 |  |  |  |
| 161 |  | Tổng cộng |  | `=D160` |  |  |  |
| 162 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D161*5%` |  |  |  |
| 163 |  | Tổng số tiền phải thanh toán |  | `=round(D161+D162,2)` | 23955 | `=D163*E163` |  |
| 166 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 169 | 1 | 830951535054 | 2023-03-01 | 5562.72 |  |  |  |
| 170 |  | Tổng cộng |  | `=D169` |  |  |  |
| 171 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D170*5%` |  |  |  |
| 172 |  | Tổng số tiền phải thanh toán |  | `=round(D170+D171,2)` | 23632 | `=D172*E172` |  |
| 175 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |
| 177 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 178 | 1 | 830951535054 | 2023-04-01 | 5976.25 |  |  |  |
| 179 |  | Tổng cộng |  | `=D178` |  |  |  |
| 180 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D179*5%` |  |  |  |
| 181 |  | Tổng số tiền phải thanh toán |  | `=round(D179+D180,2)` | 23645 | `=D181*E181` |  |
| 184 | TỔNG HỢP CHI PHÍ ABITS |  |  |  |  |  |  |

> *Đã bỏ qua 63 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (104 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 20 | `D6` |
| D | `=D{r}*5%` | 19 | `D7` |
| D | `=round(D{r}+D{r},2)` | 12 | `D82` |
| D | `=D{r}+D{r}` | 8 | `D8` |
| F | `=D{r}*E{r}` | 12 | `F82` |
| F | `=round(D{r}*E{r},0)` | 8 | `F5` |
| F | `=F{r}` | 8 | `F6` |
| F | `=F{r}*0.05` | 8 | `F7` |
| F | `=F{r}+F{r}` | 8 | `F8` |
| G | `=F{r}+F{r}` | 1 | `G11` |
