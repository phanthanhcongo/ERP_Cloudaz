# DEEPCARE

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `DEEPCARE`  
> **Vùng dữ liệu:** 216 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 545441922232 | 2021-06-01 | 14.52 | 23130 | `=round(E5*F5,3)` |  |
| 6 |  | Tổng cộng |  | `=E5` |  | `=G5` |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E6*0.08` |  | `=round(G6*0.08,0)` |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=E6+E7` | 23130 | `=G6+G7` |  |
| 12 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 15 | 1 | 545441922232 | 2021-07-01 | 29.93 | 23050 | `=round(E15*F15,3)` |  |
| 16 |  | Tổng cộng |  | `=E15` |  | `=G15` |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E16*0.08` |  | `=G16*0.08` |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=E16+E17` | 23050 | `=G16+G17` |  |
| 22 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 25 | 1 | 545441922232 | 2021-08-01 | 29.99 | 22880 | `=round(E25*F25,3)` |  |
| 26 |  | Tổng cộng |  | `=E25` |  | `=G25` |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E26*0.08` |  | `=G26*0.08` |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=E26+E27` | 22880 | `=G26+G27` | 741064.8959999999 |
| 32 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 35 | 1 | 545441922232 | 2021-09-01 | 30.04 | 22840 | `=round(E35*F35,3)` |  |
| 36 |  | Tổng cộng |  | `=E35` |  | `=G35` |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E36*0.08` |  | `=G36*0.08` |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=E36+E37` | 22840 | `=G36+G37` |  |
| 41 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 44 | 1 | 545441922232 | 2021-10-01 | 30.35 | 22850 | `=round(E44*F44,0)` |  |
| 45 |  | Tổng cộng |  | `=E44` |  | `=G44` |  |
| 46 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E45*0.08` |  | `=G45*0.08` |  |
| 47 |  | Tổng số tiền phải thanh toán |  | `=E45+E46` | 22850 | `=G45+G46` |  |
| 51 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 54 | 1 | 545441922232 | 2021-11-01 | 29.26 | 22800 | `=round(E54*F54,0)` |  |
| 55 |  | Tổng cộng |  | `=E54` |  | `=G54` |  |
| 56 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E55*0.08` |  | `=G55*0.08` |  |
| 57 |  | Tổng số tiền phải thanh toán |  | `=E55+E56` | 22800 | `=G55+G56` | 720498.24 |
| 61 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 63 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 64 | 1 | 545441922232 | 2021-12-01 | 28.6 | 22920 | `=round(E64*F64,0)` |  |
| 65 |  | Tổng cộng |  | `=E64` |  | `=G64` |  |
| 66 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E65*0.08` |  | `=G65*0.08` |  |
| 67 |  | Tổng số tiền phải thanh toán |  | `=E65+E66` | 22920 | `=G65+G66` | 707952.96 |
| 70 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 73 | 1 | 545441922232 | 2022-01-01 | 28.7 | 22780 | `=round(E73*F73,0)` |  |
| 74 |  | Tổng cộng |  | `=E73` |  | `=G73` |  |
| 75 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E74*0.08` |  | `=G74*0.08` |  |
| 76 |  | Tổng số tiền phải thanh toán |  | `=E74+E75` | 22780 | `=G74+G75` | 706088.88 |
| 79 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 82 | 1 | 545441922232 | 2022-02-01 | 27.74 | 22950 | `=round(E82*F82,0)` |  |
| 83 |  | Tổng cộng |  | `=E82` |  | `=G82` |  |
| 84 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E83*0.08` |  | `=G83*0.08` |  |
| 85 |  | Tổng số tiền phải thanh toán |  | `=E83+E84` | 22950 | `=G83+G84` | 687563.64 |
| 88 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 90 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 91 | 1 | 545441922232 | 2022-03-01 | 29.22 | 22980 | `=round(E91*F91,0)` |  |
| 92 |  | Tổng cộng |  | `=E91` |  | `=G91` |  |
| 93 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E92*0.08` |  | `=G92*0.08` |  |
| 94 |  | Tổng số tiền phải thanh toán |  | `=E92+E93` | 22980 | `=G92+G93` | 725194.08 |
| 97 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 100 | 1 | 545441922232 | 2022-04-01 | 28.7 | 23095 | `=round(E100*F100,0)` |  |
| 101 |  | Tổng cộng |  | `=E100` |  | `=G100` |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E101*0.08` |  | `=G101*0.08` |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=E101+E102` | 23095 | `=G101+G102` | 715853.16 |
| 106 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 109 | 1 | 545441922232 | 2022-05-01 | 29.56 |  |  |  |
| 110 |  | Tổng cộng |  | `=E109` |  |  |  |
| 111 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E110*0.08` |  |  |  |
| 112 |  | Tổng số tiền phải thanh toán |  | `=round(E110+E111,2)` | 23330 | `=E112*F112` |  |
| 115 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 118 | 1 | 545441922232 | 2022-06-01 | 29.22 |  |  |  |
| 119 |  | Tổng cộng |  | `=E118` |  |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E119*0.08` |  |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(E119+E120,2)` | 23415 | `=E121*F121` |  |
| 124 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 127 | 1 | 545441922232 | 2022-07-01 | 29.77 |  |  |  |
| 128 |  | Tổng cộng |  | `=E127` |  |  |  |
| 129 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E128*0.08` |  |  |  |
| 130 |  | Tổng số tiền phải thanh toán |  | `=round(E128+E129,2)` | 23480 | `=E130*F130` |  |
| 134 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 137 | 1 | 545441922232 | 2022-08-01 | 29.96 |  |  |  |
| 138 |  | Tổng cộng |  | `=E137` |  |  |  |
| 139 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E138*0.08` |  |  |  |
| 140 |  | Tổng số tiền phải thanh toán |  | `=round(E138+E139,2)` | 23600 | `=E140*F140` |  |
| 143 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 145 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 146 | 1 | 545441922232 | 2022-09-01 | 29.4333286726 |  |  |  |
| 147 |  | Tổng cộng |  | `=E146` |  |  |  |
| 148 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E147*0.08` |  |  |  |
| 149 |  | Tổng số tiền phải thanh toán |  | `=round(E147+E148,2)` | 24010 | `=E149*F149` |  |
| 153 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 155 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 156 | 1 | 545441922232 | 2022-10-01 | 29.87 |  |  |  |
| 157 |  | Tổng cộng |  | `=E156` |  |  |  |
| 158 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E157*0.08` |  |  |  |
| 159 |  | Tổng số tiền phải thanh toán |  | `=round(E157+E158,2)` | 24877 | `=E159*F159` |  |
| 163 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 165 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 166 | 1 | 545441922232 | 2022-11-01 | 29.64 |  |  |  |
| 167 |  | Tổng cộng |  | `=E166` |  |  |  |
| 168 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E167*0.08` |  |  |  |
| 169 |  | Tổng số tiền phải thanh toán |  | `=round(E167+E168,2)` | 24795 | `=E169*F169` |  |
| 173 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 175 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 176 | 1 | 545441922232 | 2022-12-01 | 28.9823139583 |  |  |  |
| 177 |  | Tổng cộng |  | `=E176` |  |  |  |
| 178 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E177*0.08` |  |  |  |
| 179 |  | Tổng số tiền phải thanh toán |  | `=round(E177+E178,2)` | 23596 | `=E179*F179` |  |
| 182 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 184 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 185 | 1 | 545441922232 | 2023-01-01 | 17.8 |  |  |  |
| 186 |  | Tổng cộng |  | `=E185` |  |  |  |
| 187 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E186*0.08` |  |  |  |
| 188 |  | Tổng số tiền phải thanh toán |  | `=round(E186+E187,2)` | 23705 | `=E188*F188` |  |
| 192 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 194 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 195 | 1 | 545441922232 | 2023-02-01 | 17.53 |  |  |  |
| 196 |  | Tổng cộng |  | `=E195` |  |  |  |
| 197 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E196*0.08` |  |  |  |
| 198 |  | Tổng số tiền phải thanh toán |  | `=round(E196+E197,2)` | 23875 | `=E198*F198` |  |
| 201 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 203 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 204 | 1 | 545441922232 | 2023-03-01 | 17.53 |  |  |  |
| 205 |  | Tổng cộng |  | `=E204` |  |  |  |
| 206 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E205*0.08` |  |  |  |
| 207 |  | Tổng số tiền phải thanh toán |  | `=round(E205+E206,2)` | 23618 | `=E207*F207` |  |
| 210 | TỔNG HỢP CHI PHÍ DEEPCARE |  |  |  |  |  |  |
| 212 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 213 | 1 | 545441922232 | 2023-04-01 | 17.53 |  |  |  |
| 214 |  | Tổng cộng |  | `=E213` |  |  |  |
| 215 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=E214*0.08` |  |  |  |
| 216 |  |  |  | `=round(E214+E215,2)` | 23612 | `=E216*F216` |  |

> *Đã bỏ qua 78 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (125 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| E | `=E{r}` | 23 | `E6` |
| E | `=E{r}*0.08` | 23 | `E7` |
| E | `=round(E{r}+E{r},2)` | 12 | `E112` |
| E | `=E{r}+E{r}` | 11 | `E8` |
| G | `=E{r}*F{r}` | 12 | `G112` |
| G | `=G{r}` | 11 | `G6` |
| G | `=G{r}+G{r}` | 11 | `G8` |
| G | `=G{r}*0.08` | 10 | `G17` |
| G | `=round(E{r}*F{r},0)` | 7 | `G44` |
| G | `=round(E{r}*F{r},3)` | 4 | `G5` |
| G | `=round(G{r}*0.08,0)` | 1 | `G7` |
