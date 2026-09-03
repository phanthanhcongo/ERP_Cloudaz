# MEEYLAND

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MEEYLAND`  
> **Vùng dữ liệu:** 199 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | I |
|---:|---|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1511.38 |
| 5 | 1 | 314402748588 | 2022-03-01 | 1511.38 | 22980 | `=round(D5*E5,0)` |  | `=I4*E8` |
| 6 |  | Tổng cộng |  | `=D5` | 22980 | `=F5` |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D6*0.05` |  | `=F6*0.05` |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` | 22980 | `=F6+F7` | 36468087.6000000015 |  |
| 11 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 14 | 1 | 314402748588 | 2022-04-01 | 18535.74 | 23095 | `=round(D14*E14,0)` |  | 17979.82 |
| 15 |  | Tổng cộng |  | `=D14` | 23095 | `=F14` |  | `=I14*E17` |
| 16 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D15*0.05` |  | `=F15*0.05` |  |  |
| 17 |  | Tổng số tiền phải thanh toán |  | `=D15+D16` | 23095 | `=F15+F16` | 449487060.75 |  |
| 21 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 24 | 1 | 314402748588 | 2022-05-01 | 18400.43 |  |  |  | 17848.43 |
| 25 |  | Tổng cộng |  | `=D24` |  |  |  | `=I24*E27` |
| 26 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D25*0.05` |  |  |  |  |
| 27 |  | Tổng số tiền phải thanh toán |  | `=round(D25+D26,2)` | 23330 | `=D27*E27` | 450746099 |  |
| 30 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 17172.49 |
| 33 | 1 | 314402748588 | 2022-06-01 | 17703.57 |  |  |  | `=I32*E36` |
| 34 |  | Tổng cộng |  | `=D33` |  |  |  |  |
| 35 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D34*0.05` |  |  |  |  |
| 36 |  | Tổng số tiền phải thanh toán |  | `=round(D34+D35,2)` | 23415 | `=D36*E36` | 435255581 |  |
| 40 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 43 | 1 | 314402748588 | 2022-07-01 | 17865.74 |  |  |  |  |
| 44 |  | Tổng cộng |  | `=D43` |  |  |  |  |
| 45 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D44*0.05` |  |  |  |  |
| 46 |  | Tổng số tiền phải thanh toán |  | `=round(D44+D45,2)` | 23480 | `=D46*E46` |  |  |
| 50 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 53 | 1 | 314402748588 | 2022-08-01 | 18461.25 |  |  |  |  |
| 54 |  | Tổng cộng |  | `=D53` |  |  |  |  |
| 55 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D54*0.05` |  |  |  |  |
| 56 |  | Tổng số tiền phải thanh toán |  | `=round(D54+D55,2)` | 23600 | `=D56*E56` |  |  |
| 57 |  |  |  |  | . |  |  |  |
| 59 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 62 | 1 | 314402748588 | 2022-09-01 | 17827.98 |  |  |  |  |
| 63 |  | Tổng cộng |  | `=D62` |  |  |  |  |
| 64 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D63*0.05` |  |  |  |  |
| 65 |  | Tổng số tiền phải thanh toán |  | `=round(D63+D64,2)` | 24010 | `=D65*E65` |  |  |
| 68 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 71 | 1 | 314402748588 | 2022-10-01 | 19734.6216978446 |  |  |  |  |
| 72 |  | Tổng cộng |  | `=D71` |  |  |  |  |
| 73 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D72*0.05` |  |  |  |  |
| 74 |  | Tổng số tiền phải thanh toán |  | `=round(D72+D73,2)` | 24877 | `=D74*E74` |  |  |
| 77 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 79 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 80 | 1 | 314402748588 | 2022-11-01 | 20309.72 |  |  |  |  |
| 81 |  | Tổng cộng |  | `=D80` |  |  |  |  |
| 82 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D81*0.05` |  |  |  |  |
| 83 |  | Tổng số tiền phải thanh toán |  | `=round(D81+D82,2)` | 24795 | `=D83*E83` |  |  |
| 86 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 88 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 89 | 1 | 314402748588 | 2022-12-01 | 25066.1660633176 |  |  |  |  |
| 90 |  | Tổng cộng |  | `=D89` |  |  |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.05` |  |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=round(D90+D91,2)` | 23760 | `=D92*E92` |  |  |
| 95 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 98 | 1 | 314402748588 | 2023-01-01 | 23128.79 |  |  |  |  |
| 99 |  | Tổng cộng |  | `=D98` |  |  |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D99*0.05` |  |  |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 23622 | `=D101*E101` |  |  |
| 104 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 107 | 1 | 314402748588 | 2023-02-01 | 21173.04 |  |  |  |  |
| 108 |  | Tổng cộng |  | `=D107` |  |  |  |  |
| 109 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D108*0.05` |  |  |  |  |
| 110 |  | Tổng số tiền phải thanh toán |  | `=round(D108+D109,2)` | 23955 | `=D110*E110` |  |  |
| 113 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 115 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 116 | 1 | 314402748588 | 2023-03-01 | 23487.18 |  |  |  |  |
| 117 |  | Tổng cộng |  | `=D116` |  |  |  |  |
| 118 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D117*0.05` |  |  |  |  |
| 119 |  | Tổng số tiền phải thanh toán |  | `=round(D117+D118,2)` | 23632 | `=D119*E119` |  |  |
| 122 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 124 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 125 | 1 | 314402748588 | 2023-04-01 | 21855.32 |  |  |  |  |
| 126 |  | Tổng cộng |  | `=D125` |  |  |  |  |
| 127 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D126*0.05` |  |  |  |  |
| 128 |  | Tổng số tiền phải thanh toán |  | `=round(D126+D127,2)` | 23645 | `=D128*E128` |  |  |
| 132 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 134 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 135 | 1 | 314402748588 | 2023-05-01 | 20451.78 |  |  |  |  |
| 136 |  | Tổng cộng |  | `=D135` |  |  |  |  |
| 137 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D136*0.05` |  |  |  |  |
| 138 |  | Tổng số tiền phải thanh toán |  | `=round(D136+D137,2)` | 23662 | `=D138*E138` |  |  |
| 141 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 143 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 144 | 1 | 314402748588 | 2023-06-01 | 18518.13 |  |  |  |  |
| 145 |  | Tổng cộng |  | `=D144` |  |  |  |  |
| 146 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D145*0.05,2)` |  |  |  |  |
| 147 |  | Tổng số tiền phải thanh toán |  | `=round(D145+D146,2)` | 23762 | `=D147*E147` |  |  |
| 150 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 152 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 153 | 1 | 314402748588 | 2023-07-01 | 15797.33 |  |  |  |  |
| 154 |  | Tổng cộng |  | `=D153` |  |  |  |  |
| 155 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D154*0.05,2)` |  |  |  |  |
| 156 |  | Tổng số tiền phải thanh toán |  | `=round(D154+D155,2)` | 23860 | `=D156*E156` |  |  |
| 160 | TỔNG HỢP CHI PHÍ MEEYLAND |  |  |  |  |  |  |  |
| 162 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 163 | 1 | 314402748588 | 2023-08-01 | 15071.95 |  |  |  |  |
| 164 |  | Tổng cộng |  | `=D163` |  |  |  |  |
| 165 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D164*0.05,2)` |  |  |  |  |
| 166 |  | Tổng số tiền phải thanh toán |  | `=round(D164+D165,2)` | 24260 | `=D166*E166` |  |  |
| 170 | TỔNG HỢP CHI PHÍ MEEY LAND |  |  |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 173 | 1 | 314402748588 | 2023-09-01 | 16149.47 |  |  |  |  |
| 174 |  | Tổng cộng |  | `=D173` |  |  |  |  |
| 175 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D174*0.05,2)` |  |  |  |  |
| 176 |  | Tổng số tiền phải thanh toán |  | `=round(D174+D175,2)` | 24470 | `=D176*E176` |  |  |
| 179 | TỔNG HỢP CHI PHÍ MEEY LAND |  |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 182 | 1 | 314402748588 | 2023-10-01 | 16638.5 |  |  |  |  |
| 183 |  | Tổng cộng |  | `=D182` |  |  |  |  |
| 184 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D183*0.05,2)` |  |  |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=round(D183+D184,2)` | 24729 | `=D185*E185` |  |  |
| 189 | TỔNG HỢP CHI PHÍ MEEY LAND |  |  |  |  |  |  |  |
| 191 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 192 | 1 | 314402748588 | 2023-11-01 | 17731.14 |  |  |  |  |
| 193 |  | Tổng cộng |  | `=D192` |  |  |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D193*0.05,2)` |  |  |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=round(D193+D194,2)` | 24427 | `=D195*E195` |  |  |
| 199 | TỔNG HỢP CHI PHÍ MEEY LAND |  |  |  |  |  |  |  |

> *Đã bỏ qua 71 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (94 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 21 | `D6` |
| D | `=round(D{r}+D{r},2)` | 19 | `D27` |
| D | `=D{r}*0.05` | 15 | `D7` |
| D | `=round(D{r}*0.05,2)` | 6 | `D146` |
| D | `=D{r}+D{r}` | 2 | `D8` |
| F | `=D{r}*E{r}` | 19 | `F27` |
| F | `=round(D{r}*E{r},0)` | 2 | `F5` |
| F | `=F{r}` | 2 | `F6` |
| F | `=F{r}*0.05` | 2 | `F7` |
| F | `=F{r}+F{r}` | 2 | `F8` |
| I | `=I{r}*E{r}` | 4 | `I5` |
