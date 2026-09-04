# HBLAB

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `HBLAB`  
> **Vùng dữ liệu:** 359 dòng × 12 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | H | I | J | K | L | M |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 4 | 1 | 952804524022 | 2023-01-01 | 3171.39 |  |  |  |  |  |  |  |  |
| 5 |  | Discount (0%) |  | `=D4*0%` |  |  |  |  |  |  |  |  |
| 6 |  | Tổng cộng |  | `=D4-D5` |  |  |  |  |  |  |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=D6*7%` |  |  |  |  |  |  |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  | `=round(D6+D7,2)` | 23622 | `=D8*E8` |  |  |  |  |  |  |
| 11 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 14 | 1 | 952804524022 | 2023-02-01 | 258.87 |  |  |  |  |  |  |  |  |
| 15 |  | Discount (3%) |  | `=D14*3%` |  |  |  |  |  |  |  |  |
| 16 |  | Tổng cộng |  | `=D14-D15` |  |  |  |  |  |  |  |  |
| 17 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=D16*7%` |  |  |  |  |  |  |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  | `=round(D16+D17,2)` | 23955 | `=D18*E18` |  |  |  |  |  |  |
| 21 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 24 | 1 | 952804524022 | 2023-03-01 | 4669.88 |  |  |  |  |  |  |  |  |
| 25 |  | Discount (3%) |  | `=D24*3%` |  |  |  |  |  |  |  |  |
| 26 |  | Tổng cộng |  | `=D24-D25` |  |  |  |  |  |  |  |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=D26*7%` |  |  |  |  |  |  |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=round(D26+D27,2)` | 23632 | `=D28*E28` |  |  |  |  |  |  |
| 31 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 34 | 1 | 952804524022 | 2023-04-01 | 4558.11 |  |  |  |  |  |  |  |  |
| 35 |  | Discount (3%) |  | `=D34*3%` |  |  |  |  |  |  |  |  |
| 36 |  | Tổng cộng |  | `=D34-D35` |  |  |  |  |  |  |  |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=D36*7%` |  |  |  |  |  |  |  |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=round(D36+D37,2)` | 23645 | `=D38*E38` |  |  |  |  |  |  |
| 41 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 44 | 1 | 952804524022 | 2023-05-01 | 4268.14 |  |  |  |  |  |  |  |  |
| 45 |  | Discount (3%) |  | `=D44*3%` |  |  |  |  |  |  |  |  |
| 46 |  | Tổng cộng |  | `=D44-D45` |  |  |  |  |  |  |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=D46*7%` |  |  |  |  |  |  |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=round(D46+D47,2)` | 23662 | `=D48*E48` |  |  |  |  |  |  |
| 52 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 55 | 1 | 952804524022 | 2023-06-01 | 4106.21 |  |  |  |  |  |  |  |  |
| 56 |  | Discount (3%) |  | `=round(D55*3%,2)` |  |  |  |  |  |  |  |  |
| 57 |  | Tổng cộng |  | `=D55-D56` |  |  |  |  |  |  |  |  |
| 58 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D57*7%,2)` |  |  |  |  |  |  |  |  |
| 59 |  | Tổng số tiền phải thanh toán |  | `=round(D57+D58,2)` | 23762 | `=D59*E59` |  |  |  |  |  |  |
| 63 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 66 | 1 | 952804524022 | 2023-07-01 | 4177.79 |  |  |  |  |  |  |  |  |
| 67 |  | Discount (3%) |  | `=round(D66*3%,2)` |  |  |  |  |  |  |  |  |
| 68 |  | Tổng cộng |  | `=D66-D67` |  |  |  |  |  |  |  |  |
| 69 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D68*7%,2)` |  |  |  |  |  |  |  |  |
| 70 |  | Tổng số tiền phải thanh toán |  | `=round(D68+D69,2)` | 23860 | `=D70*E70` |  |  |  |  |  |  |
| 74 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 77 | 1 | 952804524022 | 2023-08-01 | 3715.524 |  |  |  |  |  |  |  |  |
| 78 |  | Discount (3%) |  | `=round(D77*3%,2)` |  |  |  |  |  |  |  |  |
| 79 |  | Tổng cộng |  | `=D77-D78` |  |  |  |  |  |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D79*7%,2)` |  |  |  |  |  |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(D79+D80,2)` | 24260 | `=D81*E81` |  |  |  |  |  |  |
| 84 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 87 | 1 | 952804524022 | 2023-09-01 | 3697.65 |  |  |  |  |  |  |  |  |
| 88 |  | Discount (3%) |  | `=round(D87*3%,2)` |  |  |  |  |  |  |  |  |
| 89 |  | Tổng cộng |  | `=D87-D88` |  |  |  |  |  |  |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D89*7%,2)` |  |  |  |  |  |  |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(D89+D90,2)` | 24470 | `=D91*E91` |  |  |  |  |  |  |
| 94 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  | TỔNG HỢP PHÍ THƯỜNG NIÊN HBLAB |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | 952804524022 | 2023-10-01 | 3648.93 |  |  | 1 | 952804524022 | 2023-10-01 | 2500 |  |  |
| 98 |  | Discount (3%) |  | `=round(D97*3%,2)` |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(K97/95%*5%,2)` |  |  |
| 99 |  | Tổng cộng |  | `=D97-D98` |  |  |  | Tổng số tiền phải thanh toán |  | `=round(K97+K98,2)` | 24753 | 65139474 |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D99*7%,2)` |  |  |  |  |  |  |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 24729 | `=D101*E101` |  |  |  |  |  |  |
| 104 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 107 | 1 | 952804524022 | 2023-11-01 | 2576.45 |  |  |  |  |  |  |  |  |
| 108 |  | Discount (3%) |  | `=round(D107*3%,2)` |  |  |  |  |  |  |  |  |
| 109 |  | Tổng cộng |  | `=D107-D108` |  |  |  |  |  |  |  |  |
| 110 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D109*7%,2)` |  |  |  |  |  |  |  |  |
| 111 |  | Tổng số tiền phải thanh toán |  | `=round(D109+D110,2)` | 24427 | `=D111*E111` |  |  |  |  |  |  |
| 115 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 117 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 118 | 1 | 952804524022 | 2024-01-01 | 792.43 |  |  |  |  |  |  |  |  |
| 119 |  | Discount (3%) |  | `=round(D118*3%,2)` |  |  |  |  |  |  |  |  |
| 120 |  | Tổng cộng |  | `=D118-D119` |  |  |  |  |  |  |  |  |
| 121 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D120*7%,2)` |  |  |  |  |  |  |  |  |
| 122 |  | Tổng số tiền phải thanh toán |  | `=round(D120+D121,2)` | 24578 | `=D122*E122` |  |  |  |  |  |  |
| 126 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 129 | 1 | 952804524022 | 2024-02-01 | 2282.11 |  |  |  |  |  |  |  |  |
| 130 |  | Discount (3%) |  | `=round(D129*3%,2)` |  |  |  |  |  |  |  |  |
| 131 |  | Tổng cộng |  | `=D129-D130` |  |  |  |  |  |  |  |  |
| 132 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D131*7%,2)` |  |  |  |  |  |  |  |  |
| 133 |  | Tổng số tiền phải thanh toán |  | `=round(D131+D132,2)` | 24802 | `=D133*E133` |  |  |  |  |  |  |
| 137 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 140 | 1 | 952804524022 | 2024-03-01 | 3685.34 |  |  |  |  |  |  |  |  |
| 141 |  | Discount (3%) |  | `=round(D140*3%,2)` |  |  |  |  |  |  |  |  |
| 142 |  | Tổng cộng |  | `=D140-D141` |  |  |  |  |  |  |  |  |
| 143 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D142*7%,2)` |  |  |  |  |  |  |  |  |
| 144 |  | Tổng số tiền phải thanh toán |  | `=round(D142+D143,2)` | 24972 | `=D144*E144` |  |  |  |  |  |  |
| 148 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 150 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 151 | 1 | 952804524022 | 2024-04-01 | 3284.08 |  |  |  |  |  |  |  |  |
| 152 |  | Discount (3%) |  | `=round(D151*3%,2)` |  |  |  |  |  |  |  |  |
| 153 |  | Tổng cộng |  | `=D151-D152` |  |  |  |  |  |  |  |  |
| 154 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D153*7%,2)` |  |  |  |  |  |  |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=round(D153+D154,2)` | 25458 | `=D155*E155` |  |  |  |  |  |  |
| 159 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 161 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 162 | 1 | 952804524022 | 2024-05-01 | 3921.75 |  |  |  |  |  |  |  |  |
| 163 |  | Discount (3%) |  | `=round(D162*3%,2)` |  |  |  |  |  |  |  |  |
| 164 |  | Tổng cộng |  | `=D162-D163` |  |  |  |  |  |  |  |  |
| 165 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) (7%) |  |  | `=round(D164*7%,2)` |  |  |  |  |  |  |  |  |
| 166 |  | Tổng số tiền phải thanh toán |  | `=round(D164+D165,2)` | 25474 | `=D166*E166` |  |  |  |  |  |  |
| 170 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 173 | 1 | 952804524022 | 2024-06-01 | 4087.27 |  |  |  |  |  |  |  |  |
| 174 |  | Phí dịch vụ (7%) |  | `=round(D173*7%,2)` |  |  |  |  |  |  |  |  |
| 175 |  | Giá trước chiết khấu |  | `=D173+D174` |  |  |  |  |  |  |  |  |
| 176 |  | Chiết khấu (3%) |  | `=round(D175*3%,2)` |  |  |  |  |  |  |  |  |
| 177 | Tổng số tiền phải thanh toán bao gồm 10% thuế GTGT |  |  | `=D175-D176` | 25473 | `=D177*E177` |  |  |  |  |  |  |
| 181 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 183 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 184 | 1 | 952804524022 | 2024-07-01 | 4278.08 |  |  |  |  |  |  |  |  |
| 185 |  | Phí dịch vụ (7%) |  | `=round(D184*7%,2)` |  |  |  |  |  |  |  |  |
| 186 |  | Giá trước chiết khấu |  | `=D184+D185` |  |  |  |  |  |  |  |  |
| 187 |  | Chiết khấu (3%) |  | `=round(D186*3%,2)` |  |  |  |  |  |  |  |  |
| 188 | Thành tiền |  |  | `=D186-D187` | 25405 | `=D188*E188` |  |  |  |  |  |  |
| 189 | Thuế GTGT (10%) |  |  |  |  | `=round(F188*10%,0)` |  |  |  |  |  |  |
| 190 | Tổng số tiền phải thanh toán |  |  |  |  | `=F188+F189` |  |  |  |  |  |  |
| 194 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 196 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 197 | 1 | 952804524022 | 2024-08-01 | 3694.88 |  |  |  |  |  |  |  |  |
| 198 |  | Phí dịch vụ (7%) |  | `=round(D197*7%,2)` |  |  |  |  |  |  |  |  |
| 199 |  | Giá trước chiết khấu |  | `=D197+D198` |  |  |  |  |  |  |  |  |
| 200 |  | Chiết khấu (3%) |  | `=round(D199*3%,2)` |  |  |  |  |  |  |  |  |
| 201 | Thành tiền |  |  | `=D199-D200` | 25080 | `=D201*E201` |  |  |  |  |  |  |
| 202 | Thuế GTGT (10%) |  |  |  |  | `=round(F201*10%,0)` |  |  |  |  |  |  |
| 203 | Tổng số tiền phải thanh toán |  |  |  |  | `=F201+F202` |  |  |  |  |  |  |
| 207 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 209 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 210 | 1 | 952804524022 | 2024-09-01 | 4637.12 |  |  |  |  |  |  |  |  |
| 211 |  | Phí dịch vụ (7%) |  | `=round(D210*7%,2)` |  |  |  |  |  |  |  |  |
| 212 |  | Giá trước chiết khấu |  | `=D210+D211` |  |  |  |  |  |  |  |  |
| 213 |  | Chiết khấu (3%) |  | `=round(D212*3%,2)` |  |  |  |  |  |  |  |  |
| 214 | Thành tiền |  |  | `=D212-D213` | 24733 | `=D214*E214` |  |  |  |  |  |  |
| 215 | Thuế GTGT (10%) |  |  |  |  | `=round(F214*10%,0)` |  |  |  |  |  |  |
| 216 | Tổng số tiền phải thanh toán |  |  |  |  | `=F214+F215` |  |  |  |  |  |  |
| 220 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  | TỔNG HỢP PHÍ THƯỜNG NIÊN HBLAB |  |  |  |  |  |
| 222 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |
| 223 | 1 | 952804524022 | 2024-10-01 | 4414.07 |  |  | 1 | 952804524022 | 2024-10-01 | 2500 |  |  |
| 224 |  | Phí dịch vụ (7%) |  | `=round(D223*7%,2)` |  |  | Thuế , phí..(Bên CloudAZ đóng hộ) |  |  | `=round(K223/95%*5%,2)` |  |  |
| 225 |  | Giá trước chiết khấu |  | `=D223+D224` |  |  | Thành tiền |  |  | `=K223+K224` | 25454 | `=K225*L225` |
| 226 |  | Chiết khấu (3%) |  | `=round(D225*3%,2)` |  |  | Thuế GTGT (10%) |  |  |  |  | `=round(M225*10%,0)` |
| 227 | Thành tiền |  |  | `=D225-D226` | 25445 | `=D227*E227` | Tổng số tiền phải thanh toán |  |  |  |  | `=M225+M226` |
| 228 | Thuế GTGT (10%) |  |  |  |  | `=round(F227*10%,0)` |  |  |  |  |  |  |
| 229 | Tổng số tiền phải thanh toán |  |  |  |  | `=F227+F228` |  |  |  |  |  |  |
| 233 | TỔNG HỢP CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 235 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 236 | 1 | 952804524022 | 2024-11-01 | 4433 |  |  |  |  |  |  |  |  |
| 237 |  | Phí dịch vụ (7%) |  | `=round(D236*7%,2)` |  |  |  |  |  |  |  |  |
| 238 |  | Giá trước chiết khấu |  | `=D236+D237` |  |  |  |  |  |  |  |  |
| 239 |  | Chiết khấu (3%) |  | `=round(D238*3%,2)` |  |  |  |  |  |  |  |  |
| 240 | Thành tiền |  |  | `=D238-D239` | 25463 | `=D240*E240` |  |  |  |  |  |  |
| 241 | Thuế GTGT (10%) |  |  |  |  | `=round(F240*10%,0)` |  |  |  |  |  |  |
| 242 | Tổng số tiền phải thanh toán |  |  |  |  | `=F240+F241` |  |  |  |  |  |  |
| 246 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 248 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 249 | 1 | 952804524022 | 2024-12-01 | 4829.62 |  |  |  |  |  |  |  |  |
| 250 |  | Phí dịch vụ (7%) |  | `=round(D249*7%,2)` |  |  |  |  |  |  |  |  |
| 251 |  | Giá trước chiết khấu |  | `=D249+D250` |  |  |  |  |  |  |  |  |
| 252 |  | Chiết khấu (3%) |  | `=round(D251*3%,2)` |  |  |  |  |  |  |  |  |
| 253 | Thành tiền |  |  | `=D251-D252` | 25551 | `=D253*E253` |  |  |  |  |  |  |
| 254 | Thuế GTGT (10%) |  |  |  |  | `=round(F253*10%,0)` |  |  |  |  |  |  |
| 255 | Tổng số tiền phải thanh toán |  |  |  |  | `=F253+F254` |  |  |  |  |  |  |
| 259 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 261 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 262 | 1 | 952804524022 | 2025-01-01 | 4624.77 |  |  |  |  |  |  |  |  |
| 263 |  | Phí dịch vụ (7%) |  | `=round(D262*7%,2)` |  |  |  |  |  |  |  |  |
| 264 |  | Giá trước chiết khấu |  | `=D262+D263` |  |  |  |  |  |  |  |  |
| 265 |  | Chiết khấu (3%) |  | `=round(D264*3%,2)` |  |  |  |  |  |  |  |  |
| 266 | Thành tiền |  |  | `=D264-D265` | 25295 | `=D266*E266` |  |  |  |  |  |  |
| 267 | Thuế GTGT (10%) |  |  |  |  | `=round(F266*10%,0)` |  |  |  |  |  |  |
| 268 | Tổng số tiền phải thanh toán |  |  |  |  | `=F266+F267` |  |  |  |  |  |  |
| 272 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 274 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 275 | 1 | 952804524022 | 2025-02-01 | 4316.09 |  |  |  |  |  |  |  |  |
| 276 |  | Phí dịch vụ (7%) |  | `=round(D275*7%,2)` |  |  |  |  |  |  |  |  |
| 277 |  | Giá trước chiết khấu |  | `=D275+D276` |  |  |  |  |  |  |  |  |
| 278 |  | Chiết khấu (3%) |  | `=round(D277*3%,2)` |  |  |  |  |  |  |  |  |
| 279 | Thành tiền |  |  | `=D277-D278` | 25735 | `=D279*E279` |  |  |  |  |  |  |
| 280 | Thuế GTGT (10%) |  |  |  |  | `=round(F279*10%,0)` |  |  |  |  |  |  |
| 281 | Tổng số tiền phải thanh toán |  |  |  |  | `=F279+F280` |  |  |  |  |  |  |
| 285 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 287 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 288 | 1 | 952804524022 | 2025-03-01 | 5459.83 |  |  |  |  |  |  |  |  |
| 289 |  | Phí dịch vụ (5.26%) |  | `=round(D288*5.26%,2)` |  |  |  |  |  |  |  |  |
| 290 |  | Giá trước chiết khấu |  | `=D288+D289` |  |  |  |  |  |  |  |  |
| 291 |  | Chiết khấu (3%) |  | `=round(D290*3%,2)` |  |  |  |  |  |  |  |  |
| 292 | Thành tiền |  |  | `=D290-D291` | 25775 | `=D292*E292` |  |  |  |  |  |  |
| 293 | Thuế GTGT (10%) |  |  |  |  | `=round(F292*10%,0)` |  |  |  |  |  |  |
| 294 | Tổng số tiền phải thanh toán |  |  |  |  | `=F292+F293` |  |  |  |  |  |  |
| 298 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 300 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 301 | 1 | 952804524022 | 2025-04-01 | 5383.46 |  |  |  |  |  |  |  |  |
| 302 |  | Phí dịch vụ (5.26%) |  | `=round(D301*5.26%,2)` |  |  |  |  |  |  |  |  |
| 303 |  | Giá trước chiết khấu |  | `=D301+D302` |  |  |  |  |  |  |  |  |
| 304 |  | Chiết khấu (3%) |  | `=round(D303*3%,2)` |  |  |  |  |  |  |  |  |
| 305 | Thành tiền |  |  | `=D303-D304` | 26190 | `=D305*E305` |  |  |  |  |  |  |
| 306 | Thuế GTGT (10%) |  |  |  |  | `=round(F305*10%,0)` |  |  |  |  |  |  |
| 307 | Tổng số tiền phải thanh toán |  |  |  |  | `=F305+F306` |  |  |  |  |  |  |
| 311 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 313 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 314 | 1 | 952804524022 | 2025-05-01 | 4612.82 |  |  |  |  |  |  |  |  |
| 315 |  | Phí dịch vụ (5.26%) |  | `=round(D314*5.26%,2)` |  |  |  |  |  |  |  |  |
| 316 |  | Giá trước chiết khấu |  | `=D314+D315` |  |  |  |  |  |  |  |  |
| 317 |  | Chiết khấu (3%) |  | `=round(D316*3%,2)` |  |  |  |  |  |  |  |  |
| 318 | Thành tiền |  |  | `=D316-D317` | 26225 | `=D318*E318` |  |  |  |  |  |  |
| 319 | Thuế GTGT (10%) |  |  |  |  | `=round(F318*10%,0)` |  |  |  |  |  |  |
| 320 | Tổng số tiền phải thanh toán |  |  |  |  | `=F318+F319` |  |  |  |  |  |  |
| 324 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 326 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 327 | 1 | 952804524022 | 2025-06-01 | 4730.27 |  |  |  |  |  |  |  |  |
| 328 |  | Phí dịch vụ (5.26%) |  | `=round(D327*5.26%,2)` |  |  |  |  |  |  |  |  |
| 329 |  | Giá trước chiết khấu |  | `=D327+D328` |  |  |  |  |  |  |  |  |
| 330 |  | Chiết khấu (3%) |  | `=round(D329*3%,2)` |  |  |  |  |  |  |  |  |
| 331 | Thành tiền |  |  | `=D329-D330` | 26300 | `=D331*E331` |  |  |  |  |  |  |
| 332 | Thuế GTGT (10%) |  |  |  |  | `=round(F331*10%,0)` |  |  |  |  |  |  |
| 333 | Tổng số tiền phải thanh toán |  |  |  |  | `=F331+F332` |  |  |  |  |  |  |
| 337 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 339 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 340 | 1 | 952804524022 | 2025-07-01 | 4946.75 |  |  |  |  |  |  |  |  |
| 341 |  | Phí dịch vụ (10%) |  | `=round(D340*10%,2)` |  |  |  |  |  |  |  |  |
| 342 |  | Giá trước chiết khấu |  | `=D340+D341` |  |  |  |  |  |  |  |  |
| 343 |  | Chiết khấu (3%) |  | `=round(D342*3%,2)` |  |  |  |  |  |  |  |  |
| 344 | Thành tiền |  |  | `=D342-D343` | 26382 | `=D344*E344` |  |  |  |  |  |  |
| 345 | Thuế GTGT (10%) |  |  |  |  | `=round(F344*10%,0)` |  |  |  |  |  |  |
| 346 | Tổng số tiền phải thanh toán |  |  |  |  | `=F344+F345` |  |  |  |  |  |  |
| 350 | ĐỐI SOÁT CHI PHÍ HBLAB |  |  |  |  |  |  |  |  |  |  |  |
| 352 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 353 | 1 | 952804524022 | 2025-08-01 | 5054.63 |  |  |  |  |  |  |  |  |
| 354 |  | Phí dịch vụ (10%) |  | `=round(D353*10%,2)` |  |  |  |  |  |  |  |  |
| 355 |  | Giá trước chiết khấu |  | `=D353+D354` |  |  |  |  |  |  |  |  |
| 356 |  | Chiết khấu (3%) |  | `=round(D355*3%,2)` |  |  |  |  |  |  |  |  |
| 357 | Thành tiền |  |  | `=D355-D356` | 26502 | `=D357*E357` |  |  |  |  |  |  |
| 358 |  |  |  |  |  | `=round(F357*10%,0)` |  |  |  |  |  |  |
| 359 |  |  |  |  |  | `=F357+F358` |  |  |  |  |  |  |

> *Đã bỏ qua 114 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (190 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 31 | `D6` |
| D | `=round(D{r}*3%,2)` | 26 | `D56` |
| D | `=round(D{r}*7%,2)` | 20 | `D58` |
| D | `=round(D{r}+D{r},2)` | 16 | `D8` |
| D | `=D{r}+D{r}` | 15 | `D175` |
| D | `=D{r}*7%` | 5 | `D7` |
| D | `=D{r}*3%` | 4 | `D15` |
| D | `=round(D{r}*5.26%,2)` | 4 | `D289` |
| D | `=round(D{r}*10%,2)` | 2 | `D341` |
| D | `=D{r}*0%` | 1 | `D5` |
| F | `=D{r}*E{r}` | 31 | `F8` |
| F | `=round(F{r}*10%,0)` | 14 | `F189` |
| F | `=F{r}+F{r}` | 14 | `F190` |
| K | `=round(K{r}/95%*5%,2)` | 2 | `K98` |
| K | `=round(K{r}+K{r},2)` | 1 | `K99` |
| K | `=K{r}+K{r}` | 1 | `K225` |
| M | `=K{r}*L{r}` | 1 | `M225` |
| M | `=round(M{r}*10%,0)` | 1 | `M226` |
| M | `=M{r}+M{r}` | 1 | `M227` |
