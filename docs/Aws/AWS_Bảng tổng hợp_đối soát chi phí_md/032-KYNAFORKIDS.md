# KYNAFORKIDS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `KYNAFORKIDS`  
> **Vùng dữ liệu:** 530 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ KYNAFORKID |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 626390117137 | 2021-06-01 | 15.22 | 23130 | `=round(D5*E5,3)` |  |
| 6 |  | Discount (2%) |  | `=ROUND(D5*0.02,3)` |  | `=round(D6*E5,3)` |  |
| 7 |  | Tổng cộng |  | `=D5-D6` |  | `=F5-F6` |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=ROUND(D7*0.08,3)` |  | `=ROUND(D8*23130,3)` |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 23130 | `=F7+F8` |  |
| 13 | TỔNG HỢP CHI PHÍ KYNAFORKID |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 16 | 1 | 626390117137 | 2021-07-01 | 1046.61 | 23050 | `=round(D16*E16,0)` |  |
| 17 |  | Discount (2%) |  | `=D16*2%` |  |  |  |
| 18 |  | Tổng cộng |  | `=D16-D17` | 23050 | `=round(D18*E18,0)` |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.08` |  | `=F18*0.08` |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 23050 | `=F18+F19` |  |
| 23 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 26 | 1 | 626390117137 | 2021-08-01 | 854.54 | 22880 | `=round(D26*E26,0)` |  |
| 27 |  | Discount (2%) |  | `=D26*2%` |  |  |  |
| 28 |  | Tổng cộng |  | `=D26-D27` | 22880 | `=round(D28*E28,0)` |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D28*0.08` |  | `=F28*0.08` |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` | 22880 | `=F28+F29` | 20693705.0399999991 |
| 33 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 36 | 1 | 626390117137 | 2021-09-01 | 246.54 | 22840 | `=round(D36*E36,0)` |  |
| 37 |  | Discount (2%) |  | `=D36*2%` |  |  |  |
| 38 |  | Tổng cộng |  | `=D36-D37` | 22840 | `=round(D38*E38,0)` |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.08` |  | `=F38*0.08` |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` | 22840 | `=F38+F39` |  |
| 43 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 46 | 1 | 626390117137 | 2021-10-01 | 182.52 | 22850 | `=round(D46*E46,0)` |  |
| 47 |  | Discount (2%) |  | `=D46*2%` |  |  |  |
| 48 |  | Tổng cộng |  | `=D46-D47` | 22850 | `=round(D48*E48,0)` |  |
| 49 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D48*0.08` |  | `=F48*0.08` |  |
| 50 |  | Tổng số tiền phải thanh toán |  | `=D48+D49` | 22850 | `=F48+F49` |  |
| 54 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 57 | 1 | 626390117137 | 2021-11-01 | 115.98 | 22800 | `=round(D57*E57,0)` |  |
| 58 |  | Discount (2%) |  | `=D57*2%` |  |  |  |
| 59 |  | Tổng cộng |  | `=D57-D58` | 22800 | `=round(D59*E59,0)` |  |
| 60 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D59*0.08` |  | `=F59*0.08` |  |
| 61 |  | Tổng số tiền phải thanh toán |  | `=D59+D60` | 22800 | `=F59+F60` | 2798773.5600000001 |
| 64 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 67 | 1 | 626390117137 | 2021-12-01 | 107.49 | 22920 | `=round(D67*E67,0)` |  |
| 68 |  | Discount (2%) |  | `=D67*2%` |  |  |  |
| 69 |  | Tổng cộng |  | `=D67-D68` | 22920 | `=round(D69*E69,0)` |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D69*0.08` |  | `=F69*0.08` |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=D69+D70` | 22920 | `=F69+F70` | 2607548.7599999998 |
| 75 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 78 | 1 | 626390117137 | 2022-01-01 | 107.48 | 22780 | `=round(D78*E78,0)` |  |
| 79 |  | Discount (2%) |  | `=D78*2%` |  |  |  |
| 80 |  | Tổng cộng |  | `=D78-D79` | 22780 | `=round(D80*E80,0)` |  |
| 81 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D80*0.08` |  | `=F80*0.08` |  |
| 82 |  | Tổng số tiền phải thanh toán |  | `=D80+D81` | 22780 | `=F80+F81` | 2591381.1600000001 |
| 85 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 88 | 1 | 626390117137 | 2022-02-01 | 103.3 | 22950 | `=round(D88*E88,0)` |  |
| 89 |  | Discount (2%) |  | `=D88*2%` |  |  |  |
| 90 |  | Tổng cộng |  | `=D88-D89` | 22950 | `=round(D90*E90,0)` |  |
| 91 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D90*0.08` |  | `=F90*0.08` |  |
| 92 |  | Tổng số tiền phải thanh toán |  | `=D90+D91` | 22950 | `=F90+F91` | 2509185.6000000001 |
| 95 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 97 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 98 | 1 | 626390117137 | 2022-03-01 | 110.57 | 22980 | `=round(D98*E98,0)` |  |
| 99 |  | Discount (2%) |  | `=D98*2%` |  |  |  |
| 100 |  | Tổng cộng |  | `=D98-D99` | 22980 | `=round(D100*E100,0)` |  |
| 101 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D100*0.08` |  | `=F100*0.08` |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=D100+D101` | 22980 | `=F100+F101` | 2689287.48 |
| 105 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 107 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 108 | 1 | 626390117137 | 2022-04-01 | 48.81 | 23095 | `=round(D108*E108,0)` |  |
| 109 |  | Discount (2%) |  | `=D108*2%` |  |  |  |
| 110 |  | Tổng cộng |  | `=D108-D109` | 23095 | `=round(D110*E110,0)` |  |
| 111 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D110*0.08` |  | `=F110*0.08` |  |
| 112 |  | Tổng số tiền phải thanh toán |  | `=D110+D111` | 23095 | `=F110+F111` | 1193099.76 |
| 116 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 118 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 119 | 1 | 626390117137 | 2022-05-01 | 55.18 |  |  |  |
| 120 |  | Discount (2%) |  | `=D119*2%` |  |  |  |
| 121 |  | Tổng cộng |  | `=D119-D120` |  |  |  |
| 122 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D121*0.08` |  |  |  |
| 123 |  | Tổng số tiền phải thanh toán |  | `=round(D121+D122,2)` | 23330 | `=D123*E123` |  |
| 127 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 130 | 1 | 626390117137 | 2022-06-01 | 53.08 |  |  |  |
| 131 |  | Discount (2%) |  | `=D130*2%` |  |  |  |
| 132 |  | Tổng cộng |  | `=D130-D131` |  |  |  |
| 133 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D132*0.08` |  |  |  |
| 134 |  | Tổng số tiền phải thanh toán |  | `=round(D132+D133,2)` | 23415 | `=D134*E134` |  |
| 137 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 140 | 1 | 626390117137 | 2022-07-01 | 61.28 |  |  |  |
| 141 |  | Discount (2%) |  | `=D140*2%` |  |  |  |
| 142 |  | Tổng cộng |  | `=D140-D141` |  |  |  |
| 143 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D142*0.08` |  |  |  |
| 144 |  | Tổng số tiền phải thanh toán |  | `=round(D142+D143,2)` | 23480 | `=D144*E144` |  |
| 148 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 151 | 1 | 626390117137 | 2022-08-01 | 124.97 |  |  |  |
| 152 |  | Discount (2%) |  | `=D151*2%` |  |  |  |
| 153 |  | Tổng cộng |  | `=D151-D152` |  |  |  |
| 154 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D153*0.08` |  |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=round(D153+D154,2)` | 23600 | `=D155*E155` |  |
| 158 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 160 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 161 | 1 | 626390117137 | 2022-09-01 | 122.79 |  |  |  |
| 162 |  | Discount (2%) |  | `=D161*2%` |  |  |  |
| 163 |  | Tổng cộng |  | `=D161-D162` |  |  |  |
| 164 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D163*0.08` |  |  |  |
| 165 |  | Tổng số tiền phải thanh toán |  | `=round(D163+D164,2)` | 24010 | `=D165*E165` |  |
| 168 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 170 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 171 | 1 | 626390117137 | 2022-10-01 | 144.73 |  |  |  |
| 172 |  | Discount (2%) |  | `=D171*2%` |  |  |  |
| 173 |  | Tổng cộng |  | `=D171-D172` |  |  |  |
| 174 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D173*0.08` |  |  |  |
| 175 |  | Tổng số tiền phải thanh toán |  | `=round(D173+D174,2)` | 24877 | `=D175*E175` |  |
| 178 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 180 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 181 | 1 | 626390117137 | 2022-11-01 | 224.353915052 |  |  |  |
| 182 |  | Discount (2%) |  | `=D181*2%` |  |  |  |
| 183 |  | Tổng cộng |  | `=D181-D182` |  |  |  |
| 184 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D183*0.08` |  |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=round(D183+D184,2)` | 24795 | `=D185*E185` |  |
| 188 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 191 | 1 | 626390117137 | 2022-12-01 | 346.6380503944 |  |  |  |
| 192 |  | Discount (2%) |  | `=D191*2%` |  |  |  |
| 193 |  | Tổng cộng |  | `=D191-D192` |  |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D193*0.08` |  |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=round(D193+D194,2)` | 23606 | `=D195*E195` |  |
| 198 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 201 | 1 | 626390117137 | 2023-01-01 | 236.42 |  |  |  |
| 202 |  | Discount (2%) |  | `=D201*2%` |  |  |  |
| 203 |  | Tổng cộng |  | `=D201-D202` |  |  |  |
| 204 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D203*0.05` |  |  |  |
| 205 |  | Tổng số tiền phải thanh toán |  | `=round(D203+D204,2)` | 23622 | `=D205*E205` |  |
| 208 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 210 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 211 | 1 | 626390117137 | 2023-02-01 | 452.03 |  |  |  |
| 212 |  | Discount (2%) |  | `=D211*2%` |  |  |  |
| 213 |  | Tổng cộng |  | `=D211-D212` |  |  |  |
| 214 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D213*0.05` |  |  |  |
| 215 |  | Tổng số tiền phải thanh toán |  | `=round(D213+D214,2)` | 23955 | `=D215*E215` |  |
| 218 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 220 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 221 | 1 | 626390117137 | 2023-03-01 | 253.33 |  |  |  |
| 222 |  | Discount (2%) |  | `=D221*2%` |  |  |  |
| 223 |  | Tổng cộng |  | `=D221-D222` |  |  |  |
| 224 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D223*0.05` |  |  |  |
| 225 |  | Tổng số tiền phải thanh toán |  | `=round(D223+D224,2)` | 23632 | `=D225*E225` |  |
| 228 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 230 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 231 | 1 | 626390117137 | 2023-04-01 | 174.75 |  |  |  |
| 232 |  | Discount (2%) |  | `=D231*2%` |  |  |  |
| 233 |  | Tổng cộng |  | `=D231-D232` |  |  |  |
| 234 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D233*0.05` |  |  |  |
| 235 |  | Tổng số tiền phải thanh toán |  | `=round(D233+D234,2)` | 23645 | `=D235*E235` |  |
| 238 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 241 | 1 | 626390117137 | 2023-05-01 | 221.53 |  |  |  |
| 242 |  | Discount (2%) |  | `=D241*2%` |  |  |  |
| 243 |  | Tổng cộng |  | `=D241-D242` |  |  |  |
| 244 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D243*0.05` |  |  |  |
| 245 |  | Tổng số tiền phải thanh toán |  | `=round(D243+D244,2)` | 23662 | `=D245*E245` |  |
| 249 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 251 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 252 | 1 | 626390117137 | 2023-06-01 | 260.14 |  |  |  |
| 253 |  | Discount (2%) |  | `=D252*2%` |  |  |  |
| 254 |  | Tổng cộng |  | `=D252-D253` |  |  |  |
| 255 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D254*0.05` |  |  |  |
| 256 |  | Tổng số tiền phải thanh toán |  | `=round(D254+D255,2)` | 23762 | `=D256*E256` |  |
| 259 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 262 | 1 | 626390117137 | 2023-07-01 | 286.39 |  |  |  |
| 263 |  | Discount (2%) |  | `=D262*2%` |  |  |  |
| 264 |  | Tổng cộng |  | `=D262-D263` |  |  |  |
| 265 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D264*0.05` |  |  |  |
| 266 |  | Tổng số tiền phải thanh toán |  | `=round(D264+D265,2)` | 23860 | `=D266*E266` |  |
| 269 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 272 | 1 | 626390117137 | 2023-08-01 | 341.05 |  |  |  |
| 273 |  | Discount (2%) |  | `=D272*2%` |  |  |  |
| 274 |  | Tổng cộng |  | `=D272-D273` |  |  |  |
| 275 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D274*0.05` |  |  |  |
| 276 |  | Tổng số tiền phải thanh toán |  | `=round(D274+D275,2)` | 24260 | `=D276*E276` |  |
| 279 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 281 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 282 | 1 | 626390117137 | 2023-09-01 | 312.11 |  |  |  |
| 283 |  | Discount (2%) |  | `=D282*2%` |  |  |  |
| 284 |  | Tổng cộng |  | `=D282-D283` |  |  |  |
| 285 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D284*0.05` |  |  |  |
| 286 |  | Tổng số tiền phải thanh toán |  | `=round(D284+D285,2)` | 24470 | `=D286*E286` |  |
| 290 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 292 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 293 | 1 | 626390117137 | 2023-10-01 | 327.99 |  |  |  |
| 294 |  | Discount (2%) |  | `=D293*2%` |  |  |  |
| 295 |  | Tổng cộng |  | `=D293-D294` |  |  |  |
| 296 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D295*0.05` |  |  |  |
| 297 |  | Tổng số tiền phải thanh toán |  | `=round(D295+D296,2)` | 24729 | `=D297*E297` |  |
| 301 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 303 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 304 | 1 | 626390117137 | 2023-11-01 | 313.54 |  |  |  |
| 305 |  | Discount (2%) |  | `=D304*2%` |  |  |  |
| 306 |  | Tổng cộng |  | `=D304-D305` |  |  |  |
| 307 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D306*0.05` |  |  |  |
| 308 |  | Tổng số tiền phải thanh toán |  | `=round(D306+D307,2)` | 24427 | `=D308*E308` |  |
| 312 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 314 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 315 | 1 | 626390117137 | 2023-12-01 | 211.94 |  |  |  |
| 316 |  | Discount (2%) |  | `=D315*2%` |  |  |  |
| 317 |  | Tổng cộng |  | `=D315-D316` |  |  |  |
| 318 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D317*0.05` |  |  |  |
| 319 |  | Tổng số tiền phải thanh toán |  | `=round(D317+D318,2)` | 24450 | `=D319*E319` |  |
| 323 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 325 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 326 | 1 | 626390117137 | 2024-01-01 | 342.96 |  |  |  |
| 327 |  | Discount (2%) |  | `=D326*2%` |  |  |  |
| 328 |  | Tổng cộng |  | `=D326-D327` |  |  |  |
| 329 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D328*0.05` |  |  |  |
| 330 |  | Tổng số tiền phải thanh toán |  | `=round(D328+D329,2)` | 24578 | `=D330*E330` |  |
| 334 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 336 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 337 | 1 | 626390117137 | 2024-02-01 | 272.73 |  |  |  |
| 338 |  | Discount (2%) |  | `=D337*2%` |  |  |  |
| 339 |  | Tổng cộng |  | `=D337-D338` |  |  |  |
| 340 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D339*0.05` |  |  |  |
| 341 |  | Tổng số tiền phải thanh toán |  | `=round(D339+D340,2)` | 24802 | `=D341*E341` |  |
| 345 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 347 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 348 | 1 | 626390117137 | 2024-03-01 | 414.04 |  |  |  |
| 349 |  | Discount (2%) |  | `=D348*2%` |  |  |  |
| 350 |  | Tổng cộng |  | `=D348-D349` |  |  |  |
| 351 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D350*0.05` |  |  |  |
| 352 |  | Tổng số tiền phải thanh toán |  | `=round(D350+D351,2)` | 24972 | `=D352*E352` |  |
| 356 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 358 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 359 | 1 | 626390117137 | 2024-04-01 | 394.56 |  |  |  |
| 360 |  | Discount (2%) |  | `=D359*2%` |  |  |  |
| 361 |  | Tổng cộng |  | `=D359-D360` |  |  |  |
| 362 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D361*0.05` |  |  |  |
| 363 |  | Tổng số tiền phải thanh toán |  | `=round(D361+D362,2)` | 25458 | `=D363*E363` |  |
| 367 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 369 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 370 | 1 | 626390117137 | 2024-05-01 | 477.61 |  |  |  |
| 371 |  | Discount (2%) |  | `=D370*2%` |  |  |  |
| 372 |  | Tổng cộng |  | `=D370-D371` |  |  |  |
| 373 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D372*0.05` |  |  |  |
| 374 |  | Tổng số tiền phải thanh toán |  | `=round(D372+D373,2)` | 25474 | `=D374*E374` |  |
| 378 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 380 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 381 | 1 | 626390117137 | 2024-06-01 | 410.38 |  |  |  |
| 382 |  | Phí dịch vụ (5%) |  | `=round(D381*5%,2)` |  |  |  |
| 383 |  | Chiết khấu (2%) |  | `=round((D381+D382)*2%,2)` |  |  |  |
| 384 | Thành tiền |  |  | `=D381+D382-D383` | 25473 | `=D384*E384` |  |
| 385 | Thuế GTGT (10%) |  |  |  |  | `=F384*10%` |  |
| 386 | Tổng số tiền phải thanh toán |  |  |  |  | `=F384+F385` |  |
| 390 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 392 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 393 | 1 | 626390117137 | 2024-07-01 | 348.96 |  |  |  |
| 394 |  | Phí dịch vụ (5%) |  | `=round(D393*5%,2)` |  |  |  |
| 395 |  | Chiết khấu (3%) |  | `=round((D393+D394)*3%,2)` |  |  |  |
| 396 | Thành tiền |  |  | `=D393+D394-D395` | 25405 | `=D396*E396` |  |
| 397 | Thuế GTGT (10%) |  |  |  |  | `=F396*10%` |  |
| 398 | Tổng số tiền phải thanh toán |  |  |  |  | `=F396+F397` |  |
| 402 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 405 | 1 | 626390117137 | 2024-08-01 | 442.87 |  |  |  |
| 406 |  | Phí dịch vụ (5%) |  | `=round(D405*5%,2)` |  |  |  |
| 407 |  | Chiết khấu (3%) |  | `=round((D405+D406)*3%,2)` |  |  |  |
| 408 | Thành tiền |  |  | `=D405+D406-D407` | 25080 | `=D408*E408` |  |
| 409 | Thuế GTGT (10%) |  |  |  |  | 1131259 |  |
| 410 | Tổng số tiền phải thanh toán |  |  |  |  | `=F408+F409` |  |
| 414 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 416 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 417 | 1 | 626390117137 | 2024-09-01 | 329.59 |  |  |  |
| 418 |  | Phí dịch vụ (5%) |  | `=round(D417*5%,2)` |  |  |  |
| 419 |  | Chiết khấu (3%) |  | `=round((D417+D418)*3%,2)` |  |  |  |
| 420 | Thành tiền |  |  | `=D417+D418-D419` | 24733 | `=D420*E420` |  |
| 421 | Thuế GTGT (10%) |  |  |  |  | `=round(F420*10%,0)` |  |
| 422 | Tổng số tiền phải thanh toán |  |  |  |  | `=F420+F421` |  |
| 426 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 428 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 429 | 1 | 626390117137 | 2024-10-01 | 306.53 |  |  |  |
| 430 |  | Phí dịch vụ (5%) |  | `=round(D429*5%,2)` |  |  |  |
| 431 |  | Chiết khấu (3%) |  | `=round((D429+D430)*3%,2)` |  |  |  |
| 432 | Thành tiền |  |  | `=D429+D430-D431` | 25445 | `=D432*E432` |  |
| 433 | Thuế GTGT (10%) |  |  |  |  | `=round(F432*10%,0)` |  |
| 434 | Tổng số tiền phải thanh toán |  |  |  |  | `=F432+F433` |  |
| 438 | TỔNG HỢP CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 440 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 441 | 1 | 626390117137 | 2024-11-01 | 308.79 |  |  |  |
| 442 |  | Phí dịch vụ (5%) |  | `=round(D441*5%,2)` |  |  |  |
| 443 |  | Chiết khấu (3%) |  | `=round((D441+D442)*3%,2)` |  |  |  |
| 444 | Thành tiền |  |  | `=D441+D442-D443` | 25463 | `=D444*E444` |  |
| 445 | Thuế GTGT (10%) |  |  |  |  | `=round(F444*10%,0)` |  |
| 446 | Tổng số tiền phải thanh toán |  |  |  |  | `=F444+F445` |  |
| 450 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 452 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 453 | 1 | 626390117137 | 2024-12-01 | 273.86 |  |  |  |
| 454 |  | Phí dịch vụ (5%) |  | `=round(D453*5%,2)` |  |  |  |
| 455 |  | Chiết khấu (3%) |  | `=round((D453+D454)*3%,2)` |  |  |  |
| 456 | Thành tiền |  |  | `=D453+D454-D455` | 25551 | `=round(D456*E456,0)` |  |
| 457 | Thuế GTGT (10%) |  |  |  |  | `=round(F456*10%,0)` |  |
| 458 | Tổng số tiền phải thanh toán |  |  |  |  | `=F456+F457` |  |
| 462 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 464 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 465 | 1 | 626390117137 | 2025-01-01 | 243.03 |  |  |  |
| 466 |  | Phí dịch vụ (5%) |  | `=round(D465*5%,2)` |  |  |  |
| 467 |  | Chiết khấu (3%) |  | `=round((D465+D466)*3%,2)` |  |  |  |
| 468 | Thành tiền |  |  | `=D465+D466-D467` | 25295 | `=round(D468*E468,0)` |  |
| 469 | Thuế GTGT (10%) |  |  |  |  | `=round(F468*10%,0)` |  |
| 470 | Tổng số tiền phải thanh toán |  |  |  |  | `=F468+F469` |  |
| 474 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 476 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 477 | 1 | 626390117137 | 2025-02-01 | 320.34 |  |  |  |
| 478 |  | Phí dịch vụ (5%) |  | `=round(D477*5%,2)` |  |  |  |
| 479 |  | Chiết khấu (3%) |  | `=round((D477+D478)*3%,2)` |  |  |  |
| 480 | Thành tiền |  |  | `=D477+D478-D479` | 25735 | `=round(D480*E480,0)` |  |
| 481 | Thuế GTGT (10%) |  |  |  |  | `=round(F480*10%,0)` |  |
| 482 | Tổng số tiền phải thanh toán |  |  |  |  | `=F480+F481` |  |
| 486 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 488 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 489 | 1 | 626390117137 | 2025-03-01 | 368.02 |  |  |  |
| 490 |  | Phí dịch vụ (5%) |  | `=round(D489*5%,2)` |  |  |  |
| 491 |  | Chiết khấu (3%) |  | `=round((D489+D490)*3%,2)` |  |  |  |
| 492 | Thành tiền |  |  | `=D489+D490-D491` | 25775 | `=round(D492*E492,0)` |  |
| 493 | Thuế GTGT (10%) |  |  |  |  | `=round(F492*10%,0)` |  |
| 494 | Tổng số tiền phải thanh toán |  |  |  |  | `=F492+F493` |  |
| 498 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 500 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 501 | 1 | 626390117137 | 2025-04-01 | 340.54 |  |  |  |
| 502 |  | Phí dịch vụ (5%) |  | `=round(D501*5%,2)` |  |  |  |
| 503 |  | Chiết khấu (3%) |  | `=round((D501+D502)*3%,2)` |  |  |  |
| 504 | Thành tiền |  |  | `=D501+D502-D503` | 26190 | `=round(D504*E504,0)` |  |
| 505 | Thuế GTGT (10%) |  |  |  |  | `=round(F504*10%,0)` |  |
| 506 | Tổng số tiền phải thanh toán |  |  |  |  | `=F504+F505` |  |
| 510 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 512 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 513 | 1 | 626390117137 | 2025-05-01 | 355.74 |  |  |  |
| 514 |  | Phí dịch vụ (5%) |  | `=round(D513*5%,2)` |  |  |  |
| 515 |  | Chiết khấu (3%) |  | `=round((D513+D514)*3%,2)` |  |  |  |
| 516 | Thành tiền |  |  | `=D513+D514-D515` | 26225 | `=round(D516*E516,0)` |  |
| 517 | Thuế GTGT (10%) |  |  |  |  | `=round(F516*10%,0)` |  |
| 518 | Tổng số tiền phải thanh toán |  |  |  |  | `=F516+F517` |  |
| 522 | ĐỐI SOÁT CHI PHÍ KYNAFORKIDS |  |  |  |  |  |  |
| 524 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 525 | 1 | 626390117137 | 2025-06-01 | 387.11 |  |  |  |
| 526 |  | Phí dịch vụ (5%) |  | `=round(D525*5%,2)` |  |  |  |
| 527 |  | Chiết khấu (3%) |  | `=round((D525+D526)*3%,2)` |  |  |  |
| 528 | Thành tiền |  |  | `=D525+D526-D527` | 26300 | `=round(D528*E528,0)` |  |
| 529 |  |  |  |  |  | `=round(F528*10%,0)` |  |
| 530 |  |  |  |  |  | `=F528+F529` |  |

> *Đã bỏ qua 174 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (291 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 36 | `D7` |
| D | `=D{r}*2%` | 35 | `D17` |
| D | `=round(D{r}+D{r},2)` | 25 | `D123` |
| D | `=D{r}*0.08` | 18 | `D19` |
| D | `=D{r}*0.05` | 17 | `D204` |
| D | `=round(D{r}*5%,2)` | 13 | `D382` |
| D | `=D{r}+D{r}-D{r}` | 13 | `D384` |
| D | `=round((D{r}+D{r})*3%,2)` | 12 | `D395` |
| D | `=D{r}+D{r}` | 11 | `D9` |
| D | `=ROUND(D{r}*0.02,3)` | 1 | `D6` |
| D | `=ROUND(D{r}*0.08,3)` | 1 | `D8` |
| D | `=round((D{r}+D{r})*2%,2)` | 1 | `D383` |
| F | `=D{r}*E{r}` | 31 | `F123` |
| F | `=round(D{r}*E{r},0)` | 27 | `F16` |
| F | `=F{r}+F{r}` | 24 | `F9` |
| F | `=F{r}*0.08` | 10 | `F19` |
| F | `=round(F{r}*10%,0)` | 10 | `F421` |
| F | `=round(D{r}*E{r},3)` | 2 | `F5` |
| F | `=F{r}*10%` | 2 | `F385` |
| F | `=F{r}-F{r}` | 1 | `F7` |
| F | `=ROUND(D{r}*23130,3)` | 1 | `F8` |
