# NKEVN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `NKEVN`  
> **Vùng dữ liệu:** 216 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TOTAL COST OF NKEVN'S AWS SERVICES |  |  |  |  |  |
| 3 | STT | Account | Interval | Billing AWS (USD) | Exchange rate | Total (VND) |
| 4 | 1 | 495156632722 | 2022-10-01 | 14.16 |  |  |
| 5 |  | Discount (2%) |  | `=D4*2%` |  |  |
| 6 |  | Total  |  | `=D4-D5` |  |  |
| 7 | The service cost (10%) |  |  | `=D6*10%` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 24877 | `=D8*E8` |
| 11 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 495156632722 | 2022-10-01 | 14.16 |  |  |
| 15 |  | Discount (2%) |  | `=D14*2%` |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D16*10%` |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=round(D16+D17,2)` | 24877 | `=D18*E18` |
| 22 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 25 | 1 | 495156632722 | 2022-11-01 | 111.15 |  |  |
| 26 |  | Discount (2%) |  | `=D25*2%` |  |  |
| 27 |  | Tổng cộng |  | `=D25-D26` |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D27*10%` |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=round(D27+D28,2)` | 24795 | `=D29*E29` |
| 32 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 495156632722 | 2022-12-01 | 114.5807171921 |  |  |
| 36 |  | Discount (2%) |  | `=D35*2%` |  |  |
| 37 |  | Tổng cộng |  | `=D35-D36` |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D37*10%` |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=round(D37+D38,2)` | 23760 | `=D39*E39` |
| 42 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | 495156632722 | 2023-01-01 | 114.35 |  |  |
| 46 |  | Discount (2%) |  | `=D45*2%` |  |  |
| 47 |  | Tổng cộng |  | `=D45-D46` |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D47*10%` |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=round(D47+D48,2)` | 23622 | `=D49*E49` |
| 52 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 495156632722 | 2023-01-01 | 114.35 |  |  |
| 56 |  | Discount (2%) |  | `=D55*2%` |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D57*10%` |  |  |
| 59 |  | Tổng số tiền phải thanh toán |  | `=round(D57+D58,2)` | 23622 | `=D59*E59` |
| 62 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 64 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 65 | 1 | 495156632722 | 2023-02-01 | 104.87 |  |  |
| 66 |  | Discount (2%) |  | `=D65*2%` |  |  |
| 67 |  | Tổng cộng |  | `=D65-D66` |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D67*10%` |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  | `=round(D67+D68,2)` | 23955 | `=D69*E69` |
| 72 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 74 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 75 | 1 | 495156632722 | 2023-03-01 | 114.58 |  |  |
| 76 |  | Discount (2%) |  | `=D75*2%` |  |  |
| 77 |  | Tổng cộng |  | `=D75-D76` |  |  |
| 78 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D77*10%` |  |  |
| 79 |  | Tổng số tiền phải thanh toán |  | `=round(D77+D78,2)` | 23632 | `=D79*E79` |
| 82 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 84 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 85 | 1 | 495156632722 | 2023-04-01 | 111.53 |  |  |
| 86 |  | Discount (2%) |  | `=D85*2%` |  |  |
| 87 |  | Tổng cộng |  | `=D85-D86` |  |  |
| 88 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D87*10%` |  |  |
| 89 |  | Tổng số tiền phải thanh toán |  | `=round(D87+D88,2)` | 23645 | `=D89*E89` |
| 92 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 95 | 1 | 495156632722 | 2023-05-01 | 114.44 |  |  |
| 96 |  | Discount (2%) |  | `=D95*2%` |  |  |
| 97 |  | Tổng cộng |  | `=D95-D96` |  |  |
| 98 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=D97*10%` |  |  |
| 99 |  | Tổng số tiền phải thanh toán |  | `=round(D97+D98,2)` | 23662 | `=D99*E99` |
| 102 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 105 | 1 | 495156632722 | 2023-06-01 | 114.81 |  |  |
| 106 |  | Discount (2%) |  | `=round(D105*2%,2)` |  |  |
| 107 |  | Tổng cộng |  | `=D105-D106` |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D107*10%,2)` |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=round(D107+D108,2)` | 23762 | `=D109*E109` |
| 112 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 115 | 1 | 495156632722 | 2023-07-01 | 120.95 |  |  |
| 116 |  | Discount (2%) |  | `=round(D115*2%,2)` |  |  |
| 117 |  | Tổng cộng |  | `=D115-D116` |  |  |
| 118 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D117*10%,2)` |  |  |
| 119 |  | Tổng số tiền phải thanh toán |  | `=round(D117+D118,2)` | 23860 | `=D119*E119` |
| 122 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 124 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 125 | 1 | 495156632722 | 2023-08-01 | 120.93 |  |  |
| 126 |  | Discount (2%) |  | `=round(D125*2%,2)` |  |  |
| 127 |  | Tổng cộng |  | `=D125-D126` |  |  |
| 128 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D127*10%,2)` |  |  |
| 129 |  | Tổng số tiền phải thanh toán |  | `=round(D127+D128,2)` | 24260 | `=D129*E129` |
| 133 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 136 | 1 | 495156632722 | 2023-09-01 | 117.5 |  |  |
| 137 |  | Discount (2%) |  | `=round(D136*2%,2)` |  |  |
| 138 |  | Tổng cộng |  | `=D136-D137` |  |  |
| 139 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D138*10%,2)` |  |  |
| 140 |  | Tổng số tiền phải thanh toán |  | `=round(D138+D139,2)` | 24470 | `=D140*E140` |
| 143 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 145 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 146 | 1 | 495156632722 | 2023-10-01 | 120.49 |  |  |
| 147 |  | Discount (2%) |  | `=round(D146*2%,2)` |  |  |
| 148 |  | Tổng cộng |  | `=D146-D147` |  |  |
| 149 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D148*10%,2)` |  |  |
| 150 |  | Tổng số tiền phải thanh toán |  | `=round(D148+D149,2)` | 24729 | `=D150*E150` |
| 154 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 157 | 1 | 495156632722 | 2023-11-01 | 117.24 |  |  |
| 158 |  | Discount (2%) |  | `=round(D157*2%,2)` |  |  |
| 159 |  | Tổng cộng |  | `=D157-D158` |  |  |
| 160 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D159*10%,2)` |  |  |
| 161 |  | Tổng số tiền phải thanh toán |  | `=round(D159+D160,2)` | 24427 | `=D161*E161` |
| 165 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 167 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 168 | 1 | 495156632722 | 2023-12-01 | 120.62 |  |  |
| 169 |  | Discount (2%) |  | `=round(D168*2%,2)` |  |  |
| 170 |  | Tổng cộng |  | `=D168-D169` |  |  |
| 171 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D170*10%,2)` |  |  |
| 172 |  | Tổng số tiền phải thanh toán |  | `=round(D170+D171,2)` | 24450 | `=D172*E172` |
| 176 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 178 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 179 | 1 | 495156632722 | 2024-01-01 | 120.63 |  |  |
| 180 |  | Discount (2%) |  | `=round(D179*2%,2)` |  |  |
| 181 |  | Tổng cộng |  | `=D179-D180` |  |  |
| 182 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D181*10%,2)` |  |  |
| 183 |  | Tổng số tiền phải thanh toán |  | `=round(D181+D182,2)` | 24578 | `=D183*E183` |
| 187 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 190 | 1 | 495156632722 | 2024-02-01 | 117.64 |  |  |
| 191 |  | Discount (2%) |  | `=round(D190*2%,2)` |  |  |
| 192 |  | Tổng cộng |  | `=D190-D191` |  |  |
| 193 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D192*10%,2)` |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=round(D192+D193,2)` | 24802 | `=D194*E194` |
| 198 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 201 | 1 | 495156632722 | 2024-03-01 | 124.32 |  |  |
| 202 |  | Discount (2%) |  | `=round(D201*2%,2)` |  |  |
| 203 |  | Tổng cộng |  | `=D201-D202` |  |  |
| 204 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D203*10%,2)` |  |  |
| 205 |  | Tổng số tiền phải thanh toán |  | `=round(D203+D204,2)` | 24972 | `=D205*E205` |
| 209 | TỔNG HỢP CHI PHÍ NKEVN |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 212 | 1 | 495156632722 | 2024-04-01 | 120.97 |  |  |
| 213 |  | Discount (2%) |  | `=round(D212*2%,2)` |  |  |
| 214 |  | Tổng cộng |  | `=D212-D213` |  |  |
| 215 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (10%) |  |  | `=round(D214*10%,2)` |  |  |
| 216 |  |  |  | `=round(D214+D215,2)` | 25458 | `=D216*E216` |

> *Đã bỏ qua 69 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (105 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 21 | `D6` |
| D | `=round(D{r}+D{r},2)` | 21 | `D8` |
| D | `=round(D{r}*2%,2)` | 11 | `D106` |
| D | `=round(D{r}*10%,2)` | 11 | `D108` |
| D | `=D{r}*2%` | 10 | `D5` |
| D | `=D{r}*10%` | 10 | `D7` |
| F | `=D{r}*E{r}` | 21 | `F8` |
