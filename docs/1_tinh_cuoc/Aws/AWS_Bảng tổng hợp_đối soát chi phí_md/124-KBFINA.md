# KBFINA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `KBFINA`  
> **Vùng dữ liệu:** 226 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 358593457737 | 2021-10-01 | 584.42 | 22850 | `=round(D5*E5,0)` |  |
| 6 |  | Discount 3% |  | `=D5*3%` |  |  |  |
| 7 |  | Tổng cộng |  | `=D5-D6` | 22850 | `=round(D7*E7,0)` |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22850 | `=F7+F8` | 14248714.6999999993 |
| 13 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 16 | 1 | 358593457737 | 2021-11-01 | 756.77 | 22800 | `=round(D16*E16,0)` |  |
| 17 |  | Discount 3% |  | `=D16*3%` |  |  |  |
| 18 |  | Tổng cộng |  | `=D16-D17` | 22800 | `=round(D18*E18,0)` |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.1` |  | `=F18*0.1` |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 22800 | `=F18+F19` | 18410397.5 |
| 23 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 26 | 1 | 358593457737 | 2021-12-01 | 1269.13 | 22920 | `=round(D26*E26,0)` |  |
| 27 |  | Discount 3% |  | `=D26*3%` |  |  |  |
| 28 |  | Tổng cộng |  | `=D26-D27` | 22920 | `=round(D28*E28,0)` |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D28*0.1` |  | `=F28*0.1` |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` | 22920 | `=F28+F29` | 31037386.6000000015 |
| 33 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 36 | 1 | 358593457737 | 2022-01-01 | 1208.07 | 22780 | `=round(D36*E36,0)` |  |
| 37 |  | Discount 3% |  | `=D36*3%` |  |  |  |
| 38 |  | Tổng cộng |  | `=D36-D37` | 22780 | `=round(D38*E38,0)` |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.1` |  | `=F38*0.1` |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` | 22780 | `=F38+F39` | 29363664 |
| 43 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 46 | 1 | 358593457737 | 2022-02-01 | 1086.5 | 22950 | `=round(D46*E46,0)` |  |
| 47 |  | Discount 3% |  | `=D46*3%` |  |  |  |
| 48 |  | Tổng cộng |  | `=D46-D47` | 22950 | `=round(D48*E48,0)` |  |
| 49 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D48*0.1` |  | `=F48*0.1` |  |
| 50 |  | Tổng số tiền phải thanh toán |  | `=D48+D49` | 22950 | `=F48+F49` | 26605832 |
| 53 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 56 | 1 | 358593457737 | 2022-03-01 | 1291.75 | 22980 | `=round(D56*E56,0)` |  |
| 57 |  | Discount 3% |  | `=D56*3%` |  |  |  |
| 58 |  | Tổng cộng |  | `=D56-D57` | 22980 | `=round(D58*E58,0)` |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D58*0.1` |  | `=F58*0.1` |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=D58+D59` | 22980 | `=F58+F59` | 31673271.3000000007 |
| 63 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 66 | 1 | 358593457737 | 2022-04-01 | 1224.68 | 23095 | `=round(D66*E66,0)` |  |
| 67 |  | Discount 3% |  | `=D66*3%` |  |  |  |
| 68 |  | Tổng cộng |  | `=D66-D67` | 23095 | `=round(D68*E68,0)` |  |
| 69 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D68*0.1` |  | `=F68*0.1` |  |
| 70 |  | Tổng số tiền phải thanh toán |  | `=D68+D69` | 23095 | `=F68+F69` | 30179011.5 |
| 74 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 77 | 1 | 358593457737 | 2022-05-01 | 1026.04 |  |  |  |
| 78 |  | Discount 3% |  | `=D77*3%` |  |  |  |
| 79 |  | Tổng cộng |  | `=D77-D78` |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D79*0.1` |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(D79+D80,2)` | 23330 | `=D81*E81` |  |
| 85 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 88 | 1 | 358593457737 | 2022-06-01 | 1161.95 |  |  |  |
| 89 |  | Discount 3% |  | `=D88*3%` |  |  |  |
| 90 |  | Tổng cộng |  | `=D88-D89` |  |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.1` |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=round(D90+D91,2)` | 23415 | `=D92*E92` |  |
| 95 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 98 | 1 | 358593457737 | 2022-07-01 | 1298.99 |  |  |  |
| 99 |  | Discount 3% |  | `=D98*3%` |  |  |  |
| 100 |  | Tổng cộng |  | `=D98-D99` |  |  |  |
| 101 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D100*0.1` |  |  |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=round(D100+D101,2)` | 23480 | `=D102*E102` |  |
| 106 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 109 | 1 | 358593457737 | 2022-08-01 | 2297.31 |  |  |  |
| 110 |  | Discount 3% |  | `=D109*3%` |  |  |  |
| 111 |  | Tổng cộng |  | `=D109-D110` |  |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D111*0.1` |  |  |  |
| 113 |  | Tổng số tiền phải thanh toán |  | `=round(D111+D112,2)` | 23600 | `=D113*E113` |  |
| 116 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 119 | 1 | 358593457737 | 2022-09-01 | 2380.31 |  |  |  |
| 120 |  | Discount 3% |  | `=D119*3%` |  |  |  |
| 121 |  | Tổng cộng |  | `=D119-D120` |  |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D121*0.1` |  |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=round(D121+D122,2)` | 24010 | `=D123*E123` |  |
| 127 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 130 | 1 | 358593457737 | 2022-10-01 | 2186.1946541878 |  |  |  |
| 131 |  | Discount 3% |  | `=D130*3%` |  |  |  |
| 132 |  | Tổng cộng |  | `=D130-D131` |  |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D132*0.1` |  |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=round(D132+D133,2)` | 24877 | `=D134*E134` |  |
| 137 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 140 | 1 | 358593457737 | 2022-11-01 | 2247.89 |  |  |  |
| 141 |  | Discount 3% |  | `=D140*3%` |  |  |  |
| 142 |  | Tổng cộng |  | `=D140-D141` |  |  |  |
| 143 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D142*0.1` |  |  |  |
| 144 |  | Tổng số tiền phải thanh toán |  | `=round(D142+D143,2)` | 24795 | `=D144*E144` |  |
| 147 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 149 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 150 | 1 | 358593457737 | 2022-12-01 | 2435.2887315132 |  |  |  |
| 151 |  | Discount 3% |  | `=D150*3%` |  |  |  |
| 152 |  | Tổng cộng |  | `=D150-D151` |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D152*0.1` |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=round(D152+D153,2)` | 23760 | `=D154*E154` |  |
| 157 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 160 | 1 | 358593457737 | 2023-01-01 | 2490.35 |  |  |  |
| 161 |  | Discount 3% |  | `=D160*3%` |  |  |  |
| 162 |  | Tổng cộng |  | `=D160-D161` |  |  |  |
| 163 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D162*0.1` |  |  |  |
| 164 |  | Tổng số tiền phải thanh toán |  | `=round(D162+D163,2)` | 23622 | `=D164*E164` |  |
| 167 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 169 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 170 | 1 | 358593457737 | 2023-02-01 | 2274.8 |  |  |  |
| 171 |  | Discount 3% |  | `=D170*3%` |  |  |  |
| 172 |  | Tổng cộng |  | `=D170-D171` |  |  |  |
| 173 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D172*0.1` |  |  |  |
| 174 |  | Tổng số tiền phải thanh toán |  | `=round(D172+D173,2)` | 23955 | `=D174*E174` |  |
| 177 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 179 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 180 | 1 | 358593457737 | 2023-03-01 | 2133.29 |  |  |  |
| 181 |  | Discount 3% |  | `=D180*3%` |  |  |  |
| 182 |  | Tổng cộng |  | `=D180-D181` |  |  |  |
| 183 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D182*0.1` |  |  |  |
| 184 |  | Tổng số tiền phải thanh toán |  | `=round(D182+D183,2)` | 23632 | `=D184*E184` |  |
| 187 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 189 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 190 | 1 | 358593457737 | 2023-04-01 | 1740.6 |  |  |  |
| 191 |  | Discount 3% |  | `=D190*3%` |  |  |  |
| 192 |  | Tổng cộng |  | `=D190-D191` |  |  |  |
| 193 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D192*0.1` |  |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=round(D192+D193,2)` | 23645 | `=D194*E194` |  |
| 197 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 199 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 200 | 1 | 358593457737 | 2023-05-01 | 1948.02 |  |  |  |
| 201 |  | Discount 3% |  | `=D200*3%` |  |  |  |
| 202 |  | Tổng cộng |  | `=D200-D201` |  |  |  |
| 203 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D202*0.1` |  |  |  |
| 204 |  | Tổng số tiền phải thanh toán |  | `=round(D202+D203,2)` | 23662 | `=D204*E204` |  |
| 208 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 210 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 211 | 1 | 358593457737 | 2023-06-01 | 1572.07 |  |  |  |
| 212 |  | Discount 3% |  | `=D211*3%` |  |  |  |
| 213 |  | Tổng cộng |  | `=D211-D212` |  |  |  |
| 214 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D213*0.1` |  |  |  |
| 215 |  | Tổng số tiền phải thanh toán |  | `=round(D213+D214,2)` | 23762 | `=D215*E215` |  |
| 219 | TỔNG HỢP CHI PHÍ KBFINA |  |  |  |  |  |  |
| 221 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 222 | 1 | 358593457737 | 2023-07-01 | 1319.27 |  |  |  |
| 223 |  | Discount 3% |  | `=D222*3%` |  |  |  |
| 224 |  | Tổng cộng |  | `=D222-D223` |  |  |  |
| 225 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D224*0.1` |  |  |  |
| 226 |  |  |  | `=round(D224+D225,2)` | 23860 | `=D226*E226` |  |

> *Đã bỏ qua 72 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (131 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*3%` | 22 | `D6` |
| D | `=D{r}-D{r}` | 22 | `D7` |
| D | `=D{r}*0.1` | 22 | `D8` |
| D | `=round(D{r}+D{r},2)` | 15 | `D81` |
| D | `=D{r}+D{r}` | 7 | `D9` |
| F | `=D{r}*E{r}` | 15 | `F81` |
| F | `=round(D{r}*E{r},0)` | 14 | `F5` |
| F | `=F{r}*0.1` | 7 | `F8` |
| F | `=F{r}+F{r}` | 7 | `F9` |
