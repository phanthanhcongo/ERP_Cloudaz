# FFINTECH

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FFINTECH`  
> **Vùng dữ liệu:** 216 dòng × 16 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 4 | 1 | 198142843506 | 2021-06-01 |  | `=28606.92+36` | 23130 | `=round(E4*F4,0)` |  |  |  |  |  |  |  |  |  |
| 5 |  | Discount (1,5%) |  |  | `=E4*1.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | Tổng cộng |  |  | `=E4-E5` | 23130 | `=round(E6*F6,0)` |  |  |  |  |  |  |  |  |  |
| 7 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  | `=E6*6.5%` |  | `=G6*6.5%` |  |  |  |  |  |  |  |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  |  | `=E6+E7` | 23130 | `=G6+G7` |  |  |  |  |  |  |  |  |  |
| 13 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 16 | 1 | 198142843506 | 2021-07-01 |  | 30074.94 | 23050 | `=round(E16*F16,0)` |  | 1 | 198142843506 | 2021-07-01 | 37.2 | 23050 | `=round(L16*M16,0)` |  |  |
| 17 |  | Discount (1,5%) |  |  | `=E16*1.5%` |  |  |  |  | Discount (1,5%) |  | `=L16*1.5%` |  |  |  |  |
| 18 |  | Tổng cộng |  |  | `=E16-E17` | 23050 | `=round(E18*F18,0)` |  |  | Tổng cộng |  | `=L16-L17` | 23050 | `=round(L18*M18,0)` |  |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  | `=E18*6.5%` |  | 44383883 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=L18*6.5%` |  | `=N18*6.5%` |  |  |
| 20 |  | Tổng số tiền phải thanh toán |  |  | `=E18+E19` | 23050 | `=G18+G19` |  |  | Tổng số tiền phải thanh toán |  | `=L18+L19` | 23050 | `=N18+N19` |  |  |
| 24 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 27 | 1 | 198142843506 | 2021-08-01 |  | `=31266.65+37.2` | 22880 | `=round(E27*F27,0)` |  |  |  |  |  |  |  |  |  |
| 28 |  | Discount (1,5%) |  |  | `=E27*1.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | Tổng cộng |  |  | `=E27-E28` | 22880 | `=round(E29*F29,0)` |  |  |  |  |  |  |  |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  | `=E29*6.5%` |  | `=G29*6.5%` | 751345366.4550000429 |  |  |  |  |  |  |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  |  | `=E29+E30` | 22880 | `=G29+G30` |  |  |  |  |  |  |  |  |  |
| 34 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 37 | 1 | 198142843506 | 2021-09-01 |  | 32917.95 | 22840 | `=round(E37*F37,0)` |  |  |  |  |  |  |  |  |  |
| 38 |  | Discount (1,5%) |  |  | `=E37*1.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | Tổng cộng |  |  | `=E37-E38` | 22840 | `=round(E39*F39,0)` |  |  |  |  |  |  |  |  |  |
| 40 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E39*6.5%` |  | `=G39*6.5%` |  |  |  |  |  |  |  |  |  |
| 41 |  | Tổng số tiền phải thanh toán |  |  | `=E39+E40` | 22840 | `=G39+G40` |  |  |  |  |  |  |  |  |  |
| 44 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 47 | 1 | 198142843506 | 2021-10-01 |  | `=48755.89+95` | 22850 | `=round(E47*F47,0)` |  |  |  |  |  |  |  |  |  |
| 48 |  | Discount (1,5%) |  |  | `=E47*1.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | Tổng cộng |  |  | `=E47-E48` | 22850 | `=round(E49*F49,0)` |  |  |  |  |  |  |  |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E49*6.5%` |  | `=G49*6.5%` |  |  |  |  |  |  |  |  |  |
| 51 |  | Tổng số tiền phải thanh toán |  |  | `=E49+E50` | 22850 | `=G49+G50` |  |  |  |  |  |  |  |  |  |
| 55 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  | Thiếu invoice $8.07 |  |  |  |  |  |  |  |
| 58 | 1 | 198142843506 | 2021-11-01 |  | `=57082.18+3961.37+145` | 22800 | `=round(E58*F58,0)` |  |  |  |  |  |  |  |  |  |
| 59 |  | Discount (1,5%) |  |  | `=E58*1.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | Tổng cộng |  |  | `=E58-E59` | 22800 | `=round(E60*F60,0)` |  |  |  |  |  |  |  |  |  |
| 61 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E60*6.5%` |  | `=G60*6.5%` |  |  |  |  |  |  |  |  |  |
| 62 |  | Tổng số tiền phải thanh toán |  |  | `=E60+E61` | 22800 | `=G60+G61` | 1463493665.6400001049 |  |  |  |  |  |  |  |  |
| 66 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |
| 68 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 69 | 1 | 198142843506 | 2021-12-01 |  | `=56832.64+145` | 22920 | `=round(E69*F69,0)` |  | 1 | 198142843506 | 2021-11-01 | 8.07 | 22800 | `=round(L69*M69,0)` |  |  |
| 70 |  | Discount (1,5%) |  |  | `=E69*1.5%` |  |  |  |  | Discount (1,5%) |  | `=L69*1.5%` |  |  |  |  |
| 71 |  | Tổng cộng |  |  | `=E69-E70` | 22920 | `=round(E71*F71,0)` |  |  | Tổng cộng |  | `=L69-L70` | 22800 | `=round(L71*M71,0)` |  |  |
| 72 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E71*6.5%` |  | `=G71*6.5%` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=L71*6.5%` |  | `=N71*6.5%` |  |  |
| 73 |  | Tổng số tiền phải thanh toán |  |  | `=E71+E72` | 22920 | `=G71+G72` |  |  | Tổng số tiền phải thanh toán |  | `=L71+L72` | 22800 | `=N71+N72` |  |  |
| 75 |  |  |  |  |  |  | `=G73+N73` |  |  |  |  |  |  |  |  |  |
| 78 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 81 | 1 | 198142843506 | 2021-12-01 |  | `=56832.64+145` | 22920 | `=round(E81*F81,0)` |  |  |  |  |  |  |  |  |  |
| 82 |  | Discount (3%) |  |  | `=E81*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | Tổng cộng |  |  | `=E81-E82` | 22920 | `=round(E83*F83,0)` |  |  |  |  |  |  |  |  |  |
| 84 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E83*6.5%` |  | `=G83*6.5%` |  |  |  |  |  |  |  |  |  |
| 85 |  | Tổng số tiền phải thanh toán |  |  | `=E83+E84` | 22920 | `=G83+G84` | 1349088413.4600000381 |  |  |  |  |  |  |  |  |
| 89 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 92 | 1 | 198142843506 | 2022-01-01 |  | `=30031.41+3794.04` | 22780 | `=round(E92*F92,0)` |  |  |  |  |  |  |  |  |  |
| 93 |  | Discount (3%) |  |  | `=E92*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | Tổng cộng |  |  | `=E92-E93` | 22780 | `=round(E94*F94,0)` |  |  |  |  |  |  |  |  |  |
| 95 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E94*6.5%` |  | `=G94*6.5%` |  |  |  |  |  |  |  |  |  |
| 96 |  | Tổng số tiền phải thanh toán |  |  | `=E94+E95` | 22780 | `=G94+G95` | 796010221.4700000286 |  |  |  |  |  |  |  |  |
| 100 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 103 | 1 | 198142843506 | 2022-02-01 |  | `=36315.44+3324.31+358.5` | 22950 | `=round(E103*F103,0)` |  |  |  |  |  |  |  |  |  |
| 104 |  | Discount (3%) |  |  | `=E103*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 105 |  | Tổng cộng |  |  | `=E103-E104` | 22950 | `=round(E105*F105,0)` |  |  |  |  |  |  |  |  |  |
| 106 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E105*6.5%` |  | `=G105*6.5%` |  |  |  |  |  |  |  |  |  |
| 107 |  | Tổng số tiền phải thanh toán |  |  | `=E105+E106` | 22950 | `=G105+G106` | 948298409.7300000191 |  |  |  |  |  |  |  |  |
| 110 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 112 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 113 | 1 | 198142843506 | 2022-03-01 |  | 63724.65 | 22980 | `=round(E113*F113,0)` |  |  |  |  |  |  |  |  |  |
| 114 |  | Discount (3%) |  |  | `=E113*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 115 |  | Tổng cộng |  |  | `=E113-E114` | 22980 | `=round(E115*F115,0)` |  |  |  |  |  |  |  |  |  |
| 116 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E115*6.5%` |  | `=G115*6.5%` |  |  |  |  |  |  |  |  |  |
| 117 |  | Tổng số tiền phải thanh toán |  |  | `=E115+E116` | 22980 | `=G115+G116` | 1512790627.3949999809 |  |  |  |  |  |  |  |  |
| 121 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 123 | STT | Tài khoản | Invoice |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 124 | 1 | 198142843506 | 1012580561 |  | 1134 |  |  |  |  |  |  |  |  |  |  |  |
| 125 |  | 198142843506 | 1013889057 |  | 27240 |  |  |  |  |  |  |  |  |  |  |  |
| 126 |  | 198142843506 | 1027252341 |  | `=42623.28+3896.65` |  |  |  |  |  |  |  |  |  |  |  |
| 127 |  | Tổng cộng | 2022-04-01 |  | `=E124+E125+E126` |  |  |  |  |  |  |  |  |  |  |  |
| 128 |  | Discount (3%) |  |  | `=E127*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 129 |  | Tổng cộng |  |  | `=E127-E128` |  |  |  |  |  |  |  |  |  |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E129*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 131 |  | Tổng số tiền phải thanh toán |  |  | `=round(E129+E130,2)` | 23095 | `=E131*F131` | 1786840981.1499998569 |  |  |  |  |  |  |  |  |
| 135 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 137 | STT | Tài khoản | Tháng |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 138 | 1 | 198142843506 | 2022-05-01 |  | `=55266.26+4001.93` |  |  |  |  |  |  |  |  |  |  |  |
| 139 |  | Discount (3%) |  |  | `=E138*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 140 |  | Tổng cộng |  |  | `=E138-E139` |  |  |  |  |  |  |  |  |  |  |  |
| 141 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E140*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 142 |  | Tổng số tiền phải thanh toán |  |  | `=round(E140+E141,2)` | 23330 | `=E142*F142` | 1428425910 |  |  |  |  |  |  |  |  |
| 145 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 147 | STT | Tài khoản | Invoice |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 148 | 1 | 198142843506 | 1065842609 |  | `=49560.02+3571.77` |  |  |  |  |  |  |  |  |  |  |  |
| 149 | 2 | 198142843506 | 1065526601 |  | 178.91 |  |  |  |  |  |  |  |  |  |  |  |
| 150 |  | Tổng cộng | 2022-06-01 |  | `=E148+E149` |  |  |  |  |  |  |  |  |  |  |  |
| 151 |  | Discount (3%) |  |  | `=E150*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 152 |  | Tổng cộng |  |  | `=E150-E151` |  |  |  |  |  |  |  |  |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E152*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  |  | `=round(E152+E153,2)` | 23415 | `=E154*F154` | 1289525397.2999999523 |  |  |  |  |  |  |  |  |
| 157 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Invoice |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 160 | 1 | 198142843506 | 1090903237 |  | 566.59 |  |  |  |  |  |  |  |  |  |  |  |
| 161 | 2 | 198142843506 | 1085880185 |  | 57083.81 |  |  |  |  |  |  |  |  |  |  |  |
| 162 |  | Tổng cộng | 2022-07-01 |  | `=E160+E161` |  |  |  |  |  |  |  |  |  |  |  |
| 163 |  | Discount (3%) |  |  | `=E162*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 164 |  | Tổng cộng |  |  | `=E162-E163` |  |  |  |  |  |  |  |  |  |  |  |
| 165 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E164*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 166 |  | Tổng số tiền phải thanh toán |  |  | `=round(E164+E165,2)` | 23480 | `=E166*F166` |  |  |  |  |  |  |  |  |  |
| 171 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 173 | STT | Tài khoản | Invoice |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 174 | 1 | 198142843506 | 1111749933 |  | 63703.96 |  |  |  |  |  |  |  |  |  |  |  |
| 175 | 2 | 198142843506 | 1109868149 |  | 646.08 |  |  |  |  |  |  |  |  |  |  |  |
| 176 | 3 | 342961444376 | 1120308905 |  | 0.44 |  |  |  |  |  |  |  |  |  |  |  |
| 177 |  | Tổng cộng | 2022-08-01 |  | `=E174+E175+E176` |  |  |  |  |  |  |  |  |  |  |  |
| 178 |  | Discount (3%) |  |  | `=E177*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 179 |  | Tổng cộng |  |  | `=E177-E178` |  |  |  |  |  |  |  |  |  |  |  |
| 180 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E179*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 181 |  | Tổng số tiền phải thanh toán |  |  | `=round(E179+E180,2)` | 23600 | `=E181*F181` |  |  |  |  |  |  |  |  |  |
| 184 | TỔNG HỢP CHI PHÍ FFINTECH |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 186 | STT | Tài khoản | Invoice |  | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  | TỔNG HỢP CHI PHÍ FFINTECH Draft |  |  |  |  |  |
| 187 | 1 | 198142843506 | 1144418297 |  | 1067.79 |  |  |  |  |  |  |  |  |  |  |  |
| 188 | 2 | 198142843506 | 1144300041 |  | 6.81 |  |  |  |  |  | STT | Tài khoản | Invoice | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 189 | 3 | 342961444376 | 1133360473 |  | 62750.6 |  |  |  |  |  | 1 | 198142843506 | 1144418297 | 1000.18 |  |  |
| 190 | 4 | 342961444376 | 1133341665 |  | 616.32 |  |  |  |  |  | 2 | 198142843506 | 1144300041 | 6.81 |  |  |
| 191 |  | Tổng cộng | 2022-09-01 |  | `=E187+E188+E189+E190` |  |  |  |  |  | 3 | 342961444376 | 1133360473 | 62642.74 |  |  |
| 192 |  | Discount (3%) |  |  | 1933.24 |  |  | `=E191*3%` |  |  | 4 | 342961444376 | 1133341665 | 616.32 |  |  |
| 193 |  | Tổng cộng |  |  | `=E191-E192` |  |  |  |  |  |  | Tổng cộng | 2022-09-01 | `=N189+N190+N191+N192` |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E193*6.5%` |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=N193*6.5%` |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  |  | `=round(E193+E194,2)` | 24010 | `=E195*F195` |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(N193+N194,2)` | 24010 | `=N195*O195` |
| 199 | TỔNG HỢP CHI PHÍ FFINTECH THÁNG 10/2022 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Invoice | Type | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 202 | 1 | 342961444376 | 1179292305 | AWS Service charges | 63906.65 |  |  |  |  |  |  |  |  |  |  |  |
| 203 |  |  |  | Bundled Discount for CloudAZ | 263.73 |  |  |  |  |  |  |  |  |  |  |  |
| 204 |  |  |  | SPP Discount for CloudAZ | 4951.85 |  |  |  |  |  |  |  |  |  |  |  |
| 205 | 2 | 342961444376 | 1179291749 | AWS Service charges | 790.64 |  |  |  |  |  |  |  |  |  |  |  |
| 206 |  |  |  | Bundled Discount for CloudAZ | 0 |  |  |  |  |  |  |  |  |  |  |  |
| 207 |  |  |  | SPP Discount for CloudAZ | 0 |  |  |  |  |  |  |  |  |  |  |  |
| 208 |  | Total charges |  |  | `=E202+E205+E203+E204` |  |  |  |  |  |  |  |  |  |  |  |
| 209 |  | Discount (3%) <br>for Ffintech |  |  | `=E208*3%` |  |  |  |  |  |  |  |  |  |  |  |
| 210 |  | Tổng cộng |  |  | `=E208-E209` |  |  |  |  |  |  |  |  |  |  |  |
| 211 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E210*6.5%` |  |  |  |  |  |  |  |  |  |  |  |
| 212 |  | Tổng số tiền phải thanh toán |  |  | `=round(E210+E211,2)` | 24877 | `=E212*F212` |  |  |  |  |  |  |  |  |  |
| 216 | TỔNG HỢP CHI PHÍ FFINTECH THÁNG 11/2022 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 68 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (160 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| E | `=E{r}-E{r}` | 18 | `E6` |
| E | `=E{r}*6.5%` | 18 | `E7` |
| E | `=E{r}+E{r}` | 13 | `E8` |
| E | `=E{r}*3%` | 10 | `E82` |
| E | `=E{r}*1.5%` | 7 | `E5` |
| E | `=round(E{r}+E{r},2)` | 7 | `E131` |
| E | `=56832.64+145` | 2 | `E69` |
| E | `=E{r}+E{r}+E{r}` | 2 | `E127` |
| E | `=E{r}+E{r}+E{r}+E{r}` | 2 | `E191` |
| E | `=28606.92+36` | 1 | `E4` |
| E | `=31266.65+37.2` | 1 | `E27` |
| E | `=48755.89+95` | 1 | `E47` |
| E | `=57082.18+3961.37+145` | 1 | `E58` |
| E | `=30031.41+3794.04` | 1 | `E92` |
| E | `=36315.44+3324.31+358.5` | 1 | `E103` |
| E | `=42623.28+3896.65` | 1 | `E126` |
| E | `=55266.26+4001.93` | 1 | `E138` |
| E | `=49560.02+3571.77` | 1 | `E148` |
| G | `=round(E{r}*F{r},0)` | 22 | `G4` |
| G | `=G{r}+G{r}` | 11 | `G8` |
| G | `=G{r}*6.5%` | 10 | `G7` |
| G | `=E{r}*F{r}` | 7 | `G131` |
| G | `=G{r}+N{r}` | 1 | `G75` |
| H | `=E{r}*3%` | 1 | `H192` |
| L | `=L{r}*1.5%` | 2 | `L17` |
| L | `=L{r}-L{r}` | 2 | `L18` |
| L | `=L{r}*6.5%` | 2 | `L19` |
| L | `=L{r}+L{r}` | 2 | `L20` |
| N | `=round(L{r}*M{r},0)` | 4 | `N16` |
| N | `=N{r}*6.5%` | 3 | `N19` |
| N | `=N{r}+N{r}` | 2 | `N20` |
| N | `=N{r}+N{r}+N{r}+N{r}` | 1 | `N193` |
| N | `=round(N{r}+N{r},2)` | 1 | `N195` |
| P | `=N{r}*O{r}` | 1 | `P195` |
