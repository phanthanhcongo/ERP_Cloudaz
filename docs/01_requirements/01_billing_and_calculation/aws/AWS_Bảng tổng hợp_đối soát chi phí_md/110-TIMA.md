# TIMA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TIMA`  
> **Vùng dữ liệu:** 410 dòng × 9 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 4 | 1 | 267894314323 | 2020-11-01 | 2597.56 | 23235 | `=D4*E4` |  |  |  |
| 5 | 2 | 505642173334 | 2020-11-02 | 888.26 | 23235 | `=D5*E5` |  |  |  |
| 6 |  | Tổng cộng |  | `=sum(D4:D5)` |  | `=sum(F4:F5)` |  |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D6*0.07` |  | `=F6*0.07` |  |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=D6+D7` |  | `=F6+F7` |  |  |  |
| 12 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 15 | 1 | 267894314323 | 2020-12-01 | 2974.87 | 23185 | `=D15*E15` |  |  |  |
| 16 | 2 | 505642173334 | 2020-12-02 | 1835.02 | 23185 | `=D16*E16` |  |  |  |
| 17 |  | Tổng cộng |  | `=sum(D15:D16)` |  | `=sum(F15:F16)` |  |  |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D17*0.07` |  | `=F17*0.07` |  |  |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=D17+D18` |  | `=F17+F18` |  |  |  |
| 22 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 25 | 1 | 267894314323 | 2021-01-01 | 2810.53 | 23145 | `=D25*E25` |  |  |  |
| 26 | 2 | 505642173334 | 2021-01-01 | 1915.78 | 23145 | `=D26*E26` |  |  |  |
| 27 |  | Tổng cộng |  | `=sum(D25:D26)` |  | `=sum(F25:F26)` |  |  |  |
| 28 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D27*0.07` |  | `=F27*0.07` |  |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  | `=D27+D28` |  | `=F27+F28` |  |  |  |
| 32 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 35 | 1 | 267894314323 | 2021-02-01 | 2533.34 | 23095 | `=D35*E35` |  |  |  |
| 36 | 2 | 505642173334 | 2021-02-01 | 1862.65 | 23095 | `=D36*E36` |  |  |  |
| 37 |  | Tổng cộng |  | `=sum(D35:D36)` |  | `=sum(F35:F36)` |  |  |  |
| 38 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D37*0.07` |  | `=F37*0.07` |  |  |  |
| 39 |  | Tổng số tiền phải thanh toán |  | `=D37+D38` |  | `=F37+F38` |  |  |  |
| 42 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 45 | 1 | 267894314323 | 2021-03-01 | `=3018.7+29.12` | 23165 | `=D45*E45` |  |  |  |
| 46 | 2 | 505642173334 | 2021-03-02 | 1982.5 | 23165 | `=D46*E46` |  |  |  |
| 47 |  | Tổng cộng |  | `=sum(D45:D46)` |  | `=sum(F45:F46)` |  |  |  |
| 48 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D47*0.07` |  | `=F47*0.07` |  |  |  |
| 49 |  | Tổng số tiền phải thanh toán |  | `=D47+D48` |  | `=F47+F48` |  |  |  |
| 53 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 56 | 1 | 267894314323 | 2021-04-01 | `=3689.16+57.68` | 23150 | `=D56*E56` |  |  |  |
| 57 | 2 | 505642173334 | 2021-04-01 | 1845.88 | 23150 | `=D57*E57` |  |  |  |
| 58 |  | Tổng cộng |  | `=sum(D56:D57)` |  | `=sum(F56:F57)` |  |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D58*0.07` |  | `=F58*0.07` |  |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=D58+D59` |  | `=F58+F59` |  |  |  |
| 64 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 67 | 1 | 267894314323 | 2021-05-01 | `=3999.7+59.52` | 23145 | `=round(D67*E67,0)` |  |  |  |
| 68 | 2 | 505642173334 | 2021-05-01 | 2019.65 | 23145 | `=round(D68*E68,0)` |  |  |  |
| 69 |  | Tổng cộng |  | `=sum(D67:D68)` |  | `=sum(F67:F68)` |  |  |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D69*0.07` |  | `=F69*0.07` |  |  |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=D69+D70` | 23145 | `=F69+F70` |  |  |  |
| 74 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 77 | 1 | 267894314323 | 2021-06-01 | 3480.57 | 23130 | 80505585 |  | `=round(D77*E77*107%,0)` |  |
| 78 | 2 | 505642173334 | 2021-06-01 | `=31.47+1891.81` | 23130 | `=round(D78*E78,0)` |  | `=F81-H77` |  |
| 79 |  | Tổng cộng |  | `=sum(D77:D78)` |  | `=sum(F77:F78)` |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D79*0.07` |  | `=round(D80*E78,0)` |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=D79+D80` | 23130 | `=F79+F80` |  |  |  |
| 85 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 88 | 1 | 267894314323 | 2021-07-01 | `=3286+59.52` | 23050 | `=round(D88*E88,0)` |  | `=D88*E88*107%` |  |
| 89 | 2 | 505642173334 | 2021-07-01 | 1914.62 | 23050 | `=round(D89*E89,0)` |  | `=F92-H88` |  |
| 90 |  | Tổng cộng |  | `=sum(D88:D89)` |  | `=sum(F88:F89)` |  |  |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D90*0.07` |  | `=round(D91*E89,0)` |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=D90+D91` | 23050 | `=F90+F91` |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 99 | 1 | 267894314323 | 2021-08-01 | `=3451.79+59.52` | 22880 | `=round(D99*E99,0)` |  | `=D99*E99*107%` |  |
| 100 | 2 | 505642173334 | 2021-08-01 | 1884.12 | 22880 | `=round(D100*E100,0)` |  | `=G103-H99` |  |
| 101 |  | Tổng cộng |  | `=sum(D99:D100)` |  | `=sum(F99:F100)` |  |  |  |
| 102 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D101*0.07` |  | `=F101*0.07` |  |  |  |
| 103 |  | Tổng số tiền phải thanh toán |  | `=D101+D102` | 22880 | `=F101+F102` | 132088759.7300000042 |  |  |
| 107 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 110 | 1 | 267894314323 | 2021-09-01 | `=2973.55+250.41+39.12` | 22840 | `=round(D110*E110,0)` | `=D110*E110*107%` |  |  |
| 111 | 2 | 505642173334 | 2021-09-01 | 1848.69 | 22840 | `=round(D111*E111,0)` | `=F114-G110` |  |  |
| 112 |  | Tổng cộng |  | `=sum(D110:D111)` |  | `=sum(F110:F111)` |  |  |  |
| 113 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D112*0.07` |  | `=F112*0.07` |  |  |  |
| 114 |  | Tổng số tiền phải thanh toán |  | `=D112+D113` | 22840 | `=F112+F113` |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 120 | 1 | 267894314323 | 2021-10-01 | 2962.56 | 22850 | `=round(D120*E120,0)` | `=round(D120*E120*107%,0)` | 72433111 |  |
| 121 | 2 | 505642173334 | 2021-10-01 | 1898.73 | 22850 | `=round(D121*E121,0)` | `=F124-G120` | 46422999.3900000006 |  |
| 122 |  | Tổng cộng |  | `=sum(D120:D121)` |  | `=sum(F120:F121)` |  |  |  |
| 123 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D122*0.07` |  | `=F122*0.07` |  |  |  |
| 124 |  | Tổng số tiền phải thanh toán |  | `=D122+D123` | 22850 | `=F122+F123` |  |  |  |
| 127 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 130 | 1 | 267894314323 | 2021-11-01 | 2870.28 | 22800 | `=round(D130*E130,0)` | `=D130*E130*107%` | 70023350.8800000101 |  |
| 131 | 2 | 505642173334 | 2021-11-01 | 1822.18 | 22800 | `=round(D131*E131,0)` | `=F134-G130` | 44453903.2799999863 |  |
| 132 |  | Tổng cộng |  | `=sum(D130:D131)` |  | `=sum(F130:F131)` |  |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D132*0.07` |  | `=F132*0.07` |  |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=D132+D133` | 22800 | `=F132+F133` |  |  |  |
| 138 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 141 | 1 | 267894314323 | 2021-12-01 | 2935.7 | 22920 | `=round(D141*E141,0)` | `=D141*E141*107%` | `=D141*0.93` |  |
| 142 | 2 | 505642173334 | 2021-12-01 | 1829.67 | 22920 | `=round(D142*E142,0)` | `=F145-G141` |  |  |
| 143 |  | Tổng cộng |  | `=sum(D141:D142)` |  | `=sum(F141:F142)` |  |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D143*0.07` |  | `=F143*0.07` |  |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=D143+D144` | 22920 | `=F143+F144` |  |  |  |
| 149 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 152 | 1 | 267894314323 | 2022-01-01 | `=2735.53+360.73` | 22780 | `=round(D152*E152,0)` |  | `=round(D152*E152*107%,0)` | 75470099 |
| 153 | 2 | 505642173334 | 2022-01-01 | 1815.23 | 22780 | `=round(D153*E153,0)` |  | `=F156-H152` | 44245504.9399999976 |
| 154 |  | Tổng cộng |  | `=sum(D152:D153)` |  | `=sum(F152:F153)` |  |  |  |
| 155 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D154*0.07` |  | `=F154*0.07` |  |  |  |
| 156 |  | Tổng số tiền phải thanh toán |  | `=D154+D155` | 22780 | `=F154+F155` | 119715603.9399999976 |  |  |
| 159 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 161 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 162 | 1 | 267894314323 | 2022-02-01 | `=2559.37+337.52` | 22950 | `=round(D162*E162,0)` | `=D162*E162*107%` |  |  |
| 163 | 2 | 505642173334 | 2022-02-01 | 1725.98 | 22950 | `=round(D163*E163,0)` | 42384029 |  |  |
| 164 |  | Tổng cộng |  | `=sum(D162:D163)` |  | `=sum(F162:F163)` |  |  |  |
| 165 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D164*0.07` |  | `=F164*0.07` |  |  |  |
| 166 |  | Tổng số tiền phải thanh toán |  | `=D164+D165` | 22950 | `=F164+F165` | 113521507.6899999976 |  |  |
| 169 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 171 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 172 | 1 | 267894314323 | 2022-03-01 | 3050.2 | 22980 | `=round(D172*E172,0)` |  | `=D172*E172*107%` | 75000147.7199999988 |
| 173 | 2 | 505642173334 | 2022-03-01 | 1801.1 | 22980 | `=round(D173*E173,0)` |  | `=G176-H172` | 44286527.4600000083 |
| 174 |  | Tổng cộng |  | `=sum(D172:D173)` |  | `=sum(F172:F173)` |  |  |  |
| 175 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D174*0.07` |  | `=F174*0.07` |  |  |  |
| 176 |  | Tổng số tiền phải thanh toán |  | `=D174+D175` | 22980 | `=F174+F175` | 119286675.1800000072 |  |  |
| 179 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 182 | 1 | 267894314323 | 2022-04-01 | 2999.83 | 23095 | `=round(D182*E182,0)` |  | `=D182*E182*107%` |  |
| 183 | 2 | 505642173334 | 2022-04-01 | 1779.16 | 23095 | `=round(D183*E183,0)` |  | `=G186-H182` |  |
| 184 |  | Tổng cộng |  | `=sum(D182:D183)` |  | `=sum(F182:F183)` |  |  |  |
| 185 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D184*0.07` |  | `=F184*0.07` |  |  |  |
| 186 |  | Tổng số tiền phải thanh toán |  | `=D184+D185` | 23095 | `=F184+F185` | 118096728.1800000072 |  |  |
| 189 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 191 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 192 | 1 | 267894314323 | 2022-05-01 | 1811.64 |  |  |  |  |  |
| 193 | 2 | 505642173334 | 2022-05-01 | 3078.52 |  |  |  |  |  |
| 194 |  | Tổng cộng |  | `=sum(D192:D193)` |  |  |  |  |  |
| 195 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D194*0.07` |  |  |  |  |  |
| 196 |  | Tổng số tiền phải thanh toán |  | `=round(D194+D195,2)` | 23330 | `=D196*E196` | 122073525.1000000089 |  |  |
| 199 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 202 | 1 | 267894314323 | 2022-06-01 | 3026.73 |  |  |  |  |  |
| 203 | 2 | 505642173334 | 2022-06-01 | 1792.45 |  |  |  |  |  |
| 204 |  | Tổng cộng |  | `=sum(D202:D203)` |  |  |  |  |  |
| 205 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D204*0.07` |  |  |  |  |  |
| 206 |  | Tổng số tiền phải thanh toán |  | `=round(D204+D205,2)` | 23415 | `=D206*E206` |  |  |  |
| 208 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 210 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 211 | 1 | 267894314323 | 2022-07-01 | 3200.05 |  | `=80396694` |  |  |  |
| 212 | 2 | 505642173334 | 2022-07-01 | 1821.6 |  | `=F215-F211` |  |  |  |
| 213 |  | Tổng cộng |  | `=sum(D211:D212)` |  |  |  |  |  |
| 214 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D213*0.07` |  |  |  |  |  |
| 215 |  | Tổng số tiền phải thanh toán |  | `=round(D213+D214,2)` | 23480 | `=D215*E215` |  |  |  |
| 219 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 221 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 222 | 1 | 267894314323 | 2022-08-01 | 3232.24 |  | 81620600 |  |  |  |
| 223 | 2 | 505642173334 | 2022-08-01 | 3401.16 |  | 85886064 |  |  |  |
| 224 |  | Tổng cộng |  | `=sum(D222:D223)` |  |  |  |  |  |
| 225 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D224*0.07` |  |  |  |  |  |
| 226 |  | Tổng số tiền phải thanh toán |  | `=round(D224+D225,2)` | 23600 | `=D226*E226` |  |  |  |
| 229 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 231 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 232 | 1 | 267894314323 | 2022-09-01 | 2708.02 |  |  |  |  |  |
| 233 | 2 | 505642173334 | 1970-01-01 07:00:00 | 1476.98 |  |  |  |  |  |
| 234 |  | Tổng cộng |  | `=sum(D232:D233)` |  |  |  |  |  |
| 235 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D234*0.07` |  |  |  |  |  |
| 236 |  | Tổng số tiền phải thanh toán |  | `=round(D234+D235,2)` | 24010 | `=D236*E236` |  |  |  |
| 239 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 241 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 242 | 1 | 267894314323 | 2022-10-01 | 2423.9 |  |  |  |  |  |
| 243 | 2 | 505642173334 | 1970-01-01 07:00:00 | 1059.04 |  |  |  |  |  |
| 244 |  | Tổng cộng |  | `=sum(D242:D243)` |  |  |  |  |  |
| 245 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D244*0.07` |  |  |  |  |  |
| 246 |  | Tổng số tiền phải thanh toán |  | `=round(D244+D245,2)` | 24877 | `=D246*E246` |  |  |  |
| 249 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 251 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 252 | 1 | 267894314323 | 2022-11-01 | 2395.0506026822 |  |  |  |  |  |
| 253 | 2 | 505642173334 | 1970-01-01 07:00:00 | 656.4904733993 |  |  |  |  |  |
| 254 |  | Tổng cộng |  | `=sum(D252:D253)` |  |  |  |  |  |
| 255 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D254*0.07` |  |  |  |  |  |
| 256 |  | Tổng số tiền phải thanh toán |  | `=round(D254+D255,2)` | 24795 | `=D256*E256` |  |  |  |
| 259 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 262 | 1 | 267894314323 | 2022-12-01 | 2520.1436319245 |  |  |  |  |  |
| 263 | 2 | 505642173334 | 1970-01-01 07:00:00 | 558.1947317919 |  |  |  |  |  |
| 264 |  | Tổng cộng |  | `=sum(D262:D263)` |  |  |  |  |  |
| 265 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D264*0.07` |  |  |  |  |  |
| 266 |  | Tổng số tiền phải thanh toán |  | `=round(D264+D265,2)` | 23760 | `=D266*E266` |  |  |  |
| 269 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 272 | 1 | 267894314323 | 2023-01-01 | 2492.26 |  |  |  |  |  |
| 273 | 2 | 505642173334 | 1970-01-01 07:00:00 | 523.87 |  |  |  |  |  |
| 274 |  | Tổng cộng |  | `=sum(D272:D273)` |  |  |  |  |  |
| 275 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D274*0.07` |  |  |  |  |  |
| 276 |  | Tổng số tiền phải thanh toán |  | `=round(D274+D275,2)` | 23622 | `=D276*E276` |  |  |  |
| 279 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 282 | 1 | 267894314323 | 2023-02-01 | 2355.87 |  |  |  |  |  |
| 283 | 2 | 505642173334 | 1970-01-01 07:00:00 | 4756.56 |  |  |  |  |  |
| 284 |  | Tổng cộng |  | `=sum(D282:D283)` |  |  |  |  |  |
| 285 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D284*0.07` |  |  |  |  |  |
| 286 |  | Tổng số tiền phải thanh toán |  | `=round(D284+D285,2)` | 23955 | `=D286*E286` |  |  |  |
| 289 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 291 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 292 | 1 | 267894314323 | 2023-03-01 | 2506.51 |  |  |  |  |  |
| 293 | 2 | 505642173334 | 1970-01-01 07:00:00 | 3433.13 |  |  |  |  |  |
| 294 |  | Tổng cộng |  | `=sum(D292:D293)` |  |  |  |  |  |
| 295 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D294*0.07` |  |  |  |  |  |
| 296 |  | Tổng số tiền phải thanh toán |  | `=round(D294+D295,2)` | 23632 | `=D296*E296` |  |  |  |
| 299 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 301 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 302 | 1 | 267894314323 | 2023-04-01 | 2470.3 |  |  |  |  |  |
| 303 | 2 | 505642173334 | 1970-01-01 07:00:00 | 992.7 |  |  |  |  |  |
| 304 |  | Tổng cộng |  | `=sum(D302:D303)` |  |  |  |  |  |
| 305 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D304*0.07` |  |  |  |  |  |
| 306 |  | Tổng số tiền phải thanh toán |  | `=round(D304+D305,2)` | 23645 | `=D306*E306` |  |  |  |
| 309 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 311 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 312 | 1 | 267894314323 | 2023-05-01 | 2657.29 |  |  |  |  |  |
| 313 | 2 | 505642173334 | 1970-01-01 07:00:00 | 999.26 |  |  |  |  |  |
| 314 |  | Tổng cộng |  | `=sum(D312:D313)` |  |  |  |  |  |
| 315 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D314*0.07` |  |  |  |  |  |
| 316 |  | Tổng số tiền phải thanh toán |  | `=round(D314+D315,2)` | 23662 | `=D316*E316` |  |  |  |
| 319 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 321 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 322 | 1 | 267894314323 | 2023-06-01 | 2443.84 |  |  |  |  |  |
| 323 | 2 | 505642173334 | 1970-01-01 07:00:00 | 988.77 |  |  |  |  |  |
| 324 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3298.27 |  |  |  |  |  |
| 325 |  | Tổng cộng |  | `=sum(D322:D324)` |  |  |  |  |  |
| 326 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D325*0.07,2)` |  |  |  |  |  |
| 327 |  | Tổng số tiền phải thanh toán |  | `=round(D325+D326,2)` | 23762 | `=D327*E327` |  |  |  |
| 330 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 332 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 333 | 1 | 267894314323 | 2023-07-01 | 950.05 |  |  |  |  |  |
| 334 | 2 | 505642173334 | 1970-01-01 07:00:00 | 996.42 |  |  |  |  |  |
| 335 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3154.6 |  |  |  |  |  |
| 336 |  | Tổng cộng |  | `=sum(D333:D335)` |  |  |  |  |  |
| 337 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D336*0.07,2)` |  |  |  |  |  |
| 338 |  | Tổng số tiền phải thanh toán |  | `=round(D336+D337,2)` | 23860 | `=D338*E338` |  |  |  |
| 342 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 344 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 345 | 1 | 267894314323 | 2023-08-01 | 2386 |  |  |  |  |  |
| 346 | 2 | 505642173334 | 1970-01-01 07:00:00 | 1001.69 |  |  |  |  |  |
| 347 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3206.85 |  |  |  |  |  |
| 348 |  | Tổng cộng |  | `=sum(D345:D347)` |  |  |  |  |  |
| 349 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D348*0.07,2)` |  |  |  |  |  |
| 350 |  | Tổng số tiền phải thanh toán |  | `=round(D348+D349,2)` | 24260 | `=D350*E350` |  |  |  |
| 354 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 356 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá (quy đổi ngoại tệ ra VNĐ ngày 30 tháng 09 năm 2023) | Thành tiền |  |  |  |
| 357 | 1 | 267894314323 | 2023-09-01 | 2394.08 |  |  |  |  |  |
| 358 | 2 | 505642173334 | 1970-01-01 07:00:00 | 962.46 |  |  |  |  |  |
| 359 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3374.96 |  |  |  |  |  |
| 360 |  | Tổng cộng |  | `=sum(D357:D359)` |  |  |  |  |  |
| 361 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D360*0.07,2)` |  |  |  |  |  |
| 362 |  | Tổng số tiền phải thanh toán |  | `=round(D360+D361,2)` | 24470 | `=D362*E362` |  |  |  |
| 365 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 367 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá (quy đổi ngoại tệ ra VNĐ ngày 31 tháng 10 năm 2023) | Thành tiền |  |  |  |
| 368 | 1 | 267894314323 | 2023-10-01 | 2259.55 |  |  |  |  |  |
| 369 | 2 | 505642173334 | 1970-01-01 07:00:00 | 898.01 |  |  |  |  |  |
| 370 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3633.4 |  |  |  |  |  |
| 371 |  | Tổng cộng |  | `=sum(D368:D370)` |  |  |  |  |  |
| 372 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D371*0.07,2)` |  |  |  |  |  |
| 373 |  | Tổng số tiền phải thanh toán |  | `=round(D371+D372,2)` | 24729 | `=D373*E373` |  |  |  |
| 377 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 379 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá (quy đổi ngoại tệ ra VNĐ ngày 30 tháng 11 năm 2023) | Thành tiền |  |  |  |
| 380 | 1 | 267894314323 | 2023-11-01 | 2136.21 |  |  |  |  |  |
| 381 | 2 | 505642173334 | 1970-01-01 07:00:00 | 905.35 |  |  |  |  |  |
| 382 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3228.21 |  |  |  |  |  |
| 383 |  | Tổng cộng |  | `=sum(D380:D382)` |  |  |  |  |  |
| 384 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D383*0.07,2)` |  |  |  |  |  |
| 385 |  | Tổng số tiền phải thanh toán |  | `=round(D383+D384,2)` | 24427 | `=D385*E385` |  |  |  |
| 390 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 392 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá (quy đổi ngoại tệ ra VNĐ ngày 30 tháng 12 năm 2023) | Thành tiền |  |  |  |
| 393 | 1 | 267894314323 | 2023-12-01 | 2155.23 |  |  |  |  |  |
| 394 | 2 | 505642173334 | 1970-01-01 07:00:00 | 894.61 |  |  |  |  |  |
| 395 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3523.19 |  |  |  |  |  |
| 396 |  | Tổng cộng |  | `=sum(D393:D395)` |  |  |  |  |  |
| 397 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D396*0.07,2)` |  |  |  |  |  |
| 398 | Tổng số tiền phải thanh toán |  |  | `=round(D396+D397,2)` | 24450 | `=D398*E398` |  |  |  |
| 402 | TỔNG HỢP CHI PHÍ TIMA |  |  |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá (quy đổi ngoại tệ ra VNĐ ngày 31 tháng 01 năm 2024) | Thành tiền |  |  |  |
| 405 | 1 | 267894314323 | 2024-01-01 | 2110.96 |  |  |  |  |  |
| 406 | 2 | 505642173334 | 1970-01-01 07:00:00 | 896.51 |  |  |  |  |  |
| 407 | 3 | 851024919824 | 1970-01-01 07:00:00 | 3097.5 |  |  |  |  |  |
| 408 |  | Tổng cộng |  | `=sum(D405:D407)` |  |  |  |  |  |
| 409 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D408*0.07,2)` |  |  |  |  |  |
| 410 |  |  |  | `=round(D408+D409,2)` | 24578 | `=D410*E410` |  |  |  |

> *Đã bỏ qua 129 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (285 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 25 | `C233` |
| D | `=sum(D{r}:D{r})` | 39 | `D6` |
| D | `=D{r}*0.07` | 31 | `D7` |
| D | `=round(D{r}+D{r},2)` | 21 | `D196` |
| D | `=D{r}+D{r}` | 18 | `D8` |
| D | `=round(D{r}*0.07,2)` | 8 | `D326` |
| D | `=3018.7+29.12` | 1 | `D45` |
| D | `=3689.16+57.68` | 1 | `D56` |
| D | `=3999.7+59.52` | 1 | `D67` |
| D | `=31.47+1891.81` | 1 | `D78` |
| D | `=3286+59.52` | 1 | `D88` |
| D | `=3451.79+59.52` | 1 | `D99` |
| D | `=2973.55+250.41+39.12` | 1 | `D110` |
| D | `=2735.53+360.73` | 1 | `D152` |
| D | `=2559.37+337.52` | 1 | `D162` |
| F | `=D{r}*E{r}` | 33 | `F4` |
| F | `=round(D{r}*E{r},0)` | 25 | `F67` |
| F | `=sum(F{r}:F{r})` | 18 | `F6` |
| F | `=F{r}+F{r}` | 18 | `F8` |
| F | `=F{r}*0.07` | 16 | `F7` |
| F | `=80396694` | 1 | `F211` |
| F | `=F{r}-F{r}` | 1 | `F212` |
| G | `=D{r}*E{r}*107%` | 4 | `G110` |
| G | `=F{r}-G{r}` | 4 | `G111` |
| G | `=round(D{r}*E{r}*107%,0)` | 1 | `G120` |
| H | `=D{r}*E{r}*107%` | 4 | `H88` |
| H | `=F{r}-H{r}` | 3 | `H78` |
| H | `=G{r}-H{r}` | 3 | `H100` |
| H | `=round(D{r}*E{r}*107%,0)` | 2 | `H77` |
| H | `=D{r}*0.93` | 1 | `H141` |
