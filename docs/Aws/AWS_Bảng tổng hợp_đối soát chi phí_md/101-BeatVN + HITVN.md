# BeatVN + HITVN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `BeatVN + HITVN`  
> **Vùng dữ liệu:** 283 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 4 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 6 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 7 | 1 | 111518853215 | 2022-05-01 | 557.33 |  |  |
| 8 | 2 | 056405571401 | 2022-05-01 | 198.59 |  |  |
| 9 |  | Tổng cộng |  | `=sum(D7:D8)` |  |  |
| 10 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D9*0.1` |  |  |
| 11 |  | Tổng số tiền phải thanh toán |  | `=round(D9+D10,2)` | 23330 | `=D11*E11` |
| 14 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 17 | 1 | 111518853215 | 2022-06-01 | 283.85 |  |  |
| 18 | 2 | 056405571401 | 2022-06-01 | 183.35 |  |  |
| 19 |  | Tổng cộng |  | `=sum(D17:D18)` |  |  |
| 20 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D19*0.1` |  |  |
| 21 |  | Tổng số tiền phải thanh toán |  | `=round(D19+D20,2)` | 23415 | `=D21*E21` |
| 24 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 27 | 1 | 111518853215 | 2022-07-01 | 283.42 |  |  |
| 28 | 2 | 056405571401 | 2022-07-01 | 208.2 |  |  |
| 29 |  | Tổng cộng |  | `=sum(D27:D28)` |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D29*0.1` |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=round(D29+D30,2)` | 23480 | `=D31*E31` |
| 34 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 37 | 1 | 111518853215 | 2022-08-01 | 283.42 |  |  |
| 38 | 2 | 056405571401 | 2022-08-01 | 203.23 |  |  |
| 39 |  | Tổng cộng |  | `=sum(D37:D38)` |  |  |
| 40 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D39*0.1` |  |  |
| 41 |  | Tổng số tiền phải thanh toán |  | `=round(D39+D40,2)` | 23600 | `=D41*E41` |
| 44 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 47 | 1 | 111518853215 | 2022-09-01 | 292.85 |  |  |
| 48 | 2 | 056405571401 | 2022-09-01 | 207.11 |  |  |
| 49 |  | Tổng cộng |  | `=sum(D47:D48)` |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D49*0.1` |  |  |
| 51 |  | Tổng số tiền phải thanh toán |  | `=round(D49+D50,2)` | 24010 | `=D51*E51` |
| 54 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 57 | 1 | 111518853215 | 2022-10-01 | 283.43 |  |  |
| 58 | 2 | 056405571401 | 1970-01-01 07:00:00 | 213.55 |  |  |
| 59 |  | Tổng cộng |  | `=sum(D57:D58)` |  |  |
| 60 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D59*0.1` |  |  |
| 61 |  | Tổng số tiền phải thanh toán |  | `=round(D59+D60,2)` | 24877 | `=D61*E61` |
| 64 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 67 | 1 | 111518853215 | 2022-11-01 | 281.86 |  |  |
| 68 | 2 | 056405571401 | 1970-01-01 07:00:00 | 237.07 |  |  |
| 69 |  | Tổng cộng |  | `=sum(D67:D68)` |  |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D69*0.1` |  |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=round(D69+D70,2)` | 24795 | `=D71*E71` |
| 74 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 77 | 1 | 111518853215 | 2022-12-01 | 306.43 |  |  |
| 78 | 2 | 056405571401 | 1970-01-01 07:00:00 | 319.3 |  |  |
| 79 |  | Tổng cộng |  | `=sum(D77:D78)` |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D79*0.1` |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(D79+D80,2)` | 23760 | `=D81*E81` |
| 84 | TỔNG HỢP CHI PHÍ  AWS BEATVN |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 87 | 1 | 111518853215 | 2023-01-01 | 283.42 |  |  |
| 88 | 2 | 056405571401 | 1970-01-01 07:00:00 | 333.02 |  |  |
| 89 |  | Tổng cộng |  | `=sum(D87:D88)` |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D89*0.1` |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(D89+D90,2)` | 23622 | `=D91*E91` |
| 94 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | 111518853215 | 2023-02-01 | 278.72 |  |  |
| 98 | 2 | 056405571401 | 1970-01-01 07:00:00 | 303.49 |  |  |
| 99 |  | Tổng cộng |  | `=sum(D97:D98)` |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D99*0.1` |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 23955 | `=D101*E101` |
| 104 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 107 | 1 | 111518853215 | 2023-03-01 | 283.42 |  |  |
| 108 | 2 | 056405571401 | 1970-01-01 07:00:00 | 339.26 |  |  |
| 109 |  | Tổng cộng |  | `=sum(D107:D108)` |  |  |
| 110 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D109*0.1` |  |  |
| 111 |  | Tổng số tiền phải thanh toán |  | `=round(D109+D110,2)` | 23632 | `=D111*E111` |
| 114 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 117 | 1 | 111518853215 | 2023-04-01 | 281.86 |  |  |
| 118 | 2 | 056405571401 | 1970-01-01 07:00:00 | 261.12 |  |  |
| 119 |  | Tổng cộng |  | `=sum(D117:D118)` |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D119*0.1` |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(D119+D120,2)` | 23645 | `=D121*E121` |
| 124 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 127 | 1 | 111518853215 | 2023-05-01 | 285.43 |  |  |
| 128 | 2 | 056405571401 | 1970-01-01 07:00:00 | 135.37 |  |  |
| 129 |  | Tổng cộng |  | `=sum(D127:D128)` |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=D129*0.1` |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  | `=round(D129+D130,2)` | 23662 | `=D131*E131` |
| 134 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 137 | 1 | 111518853215 | 2023-06-01 | 283.86 |  |  |
| 138 | 2 | 056405571401 | 1970-01-01 07:00:00 | 131.25 |  |  |
| 139 |  | Tổng cộng |  | `=sum(D137:D138)` |  |  |
| 140 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D139*0.1,2)` |  |  |
| 141 |  | Tổng số tiền phải thanh toán |  | `=round(D139+D140,2)` | 23762 | `=D141*E141` |
| 144 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 147 | 1 | 111518853215 | 2023-07-01 | 285.42 |  |  |
| 148 | 2 | 056405571401 | 1970-01-01 07:00:00 | 135.23 |  |  |
| 149 |  | Tổng cộng |  | `=sum(D147:D148)` |  |  |
| 150 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D149*0.1,2)` |  |  |
| 151 |  | Tổng số tiền phải thanh toán |  | `=round(D149+D150,2)` | 23860 | `=D151*E151` |
| 154 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 157 | 1 | 111518853215 | 2023-08-01 | 285.42 |  |  |
| 158 | 2 | 056405571401 | 1970-01-01 07:00:00 | 135.14 |  |  |
| 159 |  | Tổng cộng |  | `=sum(D157:D158)` |  |  |
| 160 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D159*0.1,2)` |  |  |
| 161 |  | Tổng số tiền phải thanh toán |  | `=round(D159+D160,2)` | 24260 | `=D161*E161` |
| 164 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 167 | 1 | 111518853215 | 2023-09-01 | 294.86 |  |  |
| 168 | 2 | 056405571401 | 1970-01-01 07:00:00 | 134.21 |  |  |
| 169 |  | Tổng cộng |  | `=sum(D167:D168)` |  |  |
| 170 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D169*0.1,2)` |  |  |
| 171 |  | Tổng số tiền phải thanh toán |  | `=round(D169+D170,2)` | 24470 | `=D171*E171` |
| 174 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 177 | 1 | 111518853215 | 2023-10-01 | 285.42 |  |  |
| 178 | 2 | 056405571401 | 1970-01-01 07:00:00 | 138.25 |  |  |
| 179 |  | Tổng cộng |  | `=sum(D177:D178)` |  |  |
| 180 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D179*0.1,2)` |  |  |
| 181 |  | Tổng số tiền phải thanh toán |  | `=round(D179+D180,2)` | 24729 | `=D181*E181` |
| 184 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 186 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 187 | 1 | 111518853215 | 2023-11-01 | 283.86 |  |  |
| 188 | 2 | 056405571401 | 1970-01-01 07:00:00 | 134.25 |  |  |
| 189 |  | Tổng cộng |  | `=sum(D187:D188)` |  |  |
| 190 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D189*0.1,2)` |  |  |
| 191 |  | Tổng số tiền phải thanh toán |  | `=round(D189+D190,2)` | 24427 | `=D191*E191` |
| 194 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 196 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 197 | 1 | 111518853215 | 2023-12-01 | 308.41 |  |  |
| 198 | 2 | 056405571401 | 1970-01-01 07:00:00 | 138.34 |  |  |
| 199 |  | Tổng cộng |  | `=sum(D197:D198)` |  |  |
| 200 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D199*0.1,2)` |  |  |
| 201 |  | Tổng số tiền phải thanh toán |  | `=round(D199+D200,2)` | 24450 | `=D201*E201` |
| 205 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 207 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 208 | 1 | 111518853215 | 2024-01-01 | 285.41 |  |  |
| 209 | 2 | 056405571401 | 1970-01-01 07:00:00 | 138.31 |  |  |
| 210 |  | Tổng cộng |  | `=sum(D208:D209)` |  |  |
| 211 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D210*0.1,2)` |  |  |
| 212 |  | Tổng số tiền phải thanh toán |  | `=round(D210+D211,2)` | 24578 | `=D212*E212` |
| 216 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 218 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 219 | 1 | 111518853215 | 2024-02-01 | 282.28 |  |  |
| 220 | 2 | 056405571401 | 1970-01-01 07:00:00 | 147.5 |  |  |
| 221 |  | Tổng cộng |  | `=sum(D219:D220)` |  |  |
| 222 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D221*0.1,2)` |  |  |
| 223 |  | Tổng số tiền phải thanh toán |  | `=round(D221+D222,2)` | 24802 | `=D223*E223` |
| 227 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 229 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 230 | 1 | 111518853215 | 2024-03-01 | 285.41 |  |  |
| 231 | 2 | 056405571401 | 1970-01-01 07:00:00 | 156.89 |  |  |
| 232 |  | Tổng cộng |  | `=sum(D230:D231)` |  |  |
| 233 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D232*0.1,2)` |  |  |
| 234 |  | Tổng số tiền phải thanh toán |  | `=round(D232+D233,2)` | 24972 | `=D234*E234` |
| 237 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 239 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 240 | 1 | 111518853215 | 2024-04-01 | 283.85 |  |  |
| 241 | 2 | 056405571401 | 1970-01-01 07:00:00 | 152.19 |  |  |
| 242 |  | Tổng cộng |  | `=sum(D240:D241)` |  |  |
| 243 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D242*0.1,2)` |  |  |
| 244 |  | Tổng số tiền phải thanh toán |  | `=round(D242+D243,2)` | 25458 | `=D244*E244` |
| 248 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 250 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 251 | 1 | 111518853215 | 2024-05-01 | 291.39 |  |  |
| 252 | 2 | 056405571401 | 1970-01-01 07:00:00 | 158.38 |  |  |
| 253 |  | Tổng cộng |  | `=sum(D251:D252)` |  |  |
| 254 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá.. |  |  | `=round(D253*0.1,2)` |  |  |
| 255 |  | Tổng số tiền phải thanh toán |  | `=round(D253+D254,2)` | 25474 | `=D255*E255` |
| 259 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 262 | 1 | 111518853215 | 2024-06-01 | 289.63 |  |  |
| 263 | 2 | 056405571401 | 1970-01-01 07:00:00 | 153.65 |  |  |
| 264 | Tổng cộng |  |  | `=sum(D262:D263)` |  |  |
| 265 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D264*(1+5.26%),2)` |  |  |
| 266 | Chiết khấu (5%) |  |  | `=round(D264*5%,2)` |  |  |
| 267 | Thành tiền |  |  | `=D265-D266` | 25473 | `=D267*E267` |
| 268 | Thuế GTGT (10%) |  |  |  |  | `=round(F267*10%,0)` |
| 269 | Tổng số tiền phải thanh toán |  |  |  |  | `=F267+F268` |
| 273 | TỔNG HỢP CHI PHÍ AWS BEATVN |  |  |  |  |  |
| 275 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 276 | 1 | 111518853215 | 2024-07-01 | 291.39 |  |  |
| 277 | 2 | 056405571401 | 1970-01-01 07:00:00 | 158.37 |  |  |
| 278 | Tổng cộng |  |  | `=sum(D276:D277)` |  |  |
| 279 | Giá trước chiết khấu (gồm 5.26% phí dịch vụ) |  |  | `=round(D278*(1+5.26%),2)` |  |  |
| 280 |  |  |  | `=round(D278*5%,2)` |  |  |
| 281 |  |  |  | `=D279-D280` | 25405 | `=D281*E281` |
| 282 |  |  |  |  |  | `=round(F281*10%,0)` |
| 283 |  |  |  |  |  | `=F281+F282` |

> *Đã bỏ qua 88 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (136 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 22 | `C58` |
| D | `=sum(D{r}:D{r})` | 27 | `D9` |
| D | `=round(D{r}+D{r},2)` | 25 | `D11` |
| D | `=D{r}*0.1` | 13 | `D10` |
| D | `=round(D{r}*0.1,2)` | 12 | `D140` |
| D | `=round(D{r}*(1+5.26%),2)` | 2 | `D265` |
| D | `=round(D{r}*5%,2)` | 2 | `D266` |
| D | `=D{r}-D{r}` | 2 | `D267` |
| F | `=D{r}*E{r}` | 27 | `F11` |
| F | `=round(F{r}*10%,0)` | 2 | `F268` |
| F | `=F{r}+F{r}` | 2 | `F269` |
