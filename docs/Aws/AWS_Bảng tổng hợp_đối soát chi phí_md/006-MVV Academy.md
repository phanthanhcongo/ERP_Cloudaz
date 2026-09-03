# MVV Academy

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MVV Academy`  
> **Vùng dữ liệu:** 519 dòng × 14 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ MVV |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 6 | 1 | 939632893638 | 2022-01-01 | `=4921.8+91+0.01` | 22780 | `=round(D6*E6,0)` |  |  |  |  |  |  |  |  |
| 7 |  | Discount (2%) |  | `=sum(D6)*2%` |  |  |  |  |  |  |  |  |  |  |
| 8 |  | Tổng cộng |  | `=sum(D6)-D7` | 22780 | `=round(D8*E8,0)` |  |  |  |  |  |  |  |  |
| 9 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D8*0.05` |  | `=F8*0.05` |  |  |  |  |  |  |  |  |
| 10 |  | Tổng số tiền phải thanh toán |  | `=D8+D9` | 22780 | `=F8+F9` | 117503374.799999997 |  |  |  |  |  |  |  |
| 13 | TỔNG HỢP CHI PHÍ MVV |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 16 | 1 | 939632893638 | 2022-02-01 | `=4359.55+84` | 22950 | `=round(D16*E16,0)` |  |  |  |  |  |  |  |  |
| 17 |  | Discount (2%) |  | `=sum(D16)*2%` |  |  |  |  |  |  |  |  |  |  |
| 18 |  | Tổng cộng |  | `=sum(D16)-D17` | 22950 | `=round(D18*E18,0)` |  |  |  |  |  |  |  |  |
| 19 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D18*0.05` |  | `=F18*0.05` |  |  |  |  |  |  |  |  |
| 20 |  | Tổng số tiền phải thanh toán |  | `=D18+D19` | 22950 | `=F18+F19` | 104936877.150000006 |  |  |  |  |  |  |  |
| 23 | TỔNG HỢP CHI PHÍ MVV |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 26 | 1 | 939632893638 | 2022-03-01 | `=4695.11+94` | 22980 | `=round(D26*E26,0)` |  |  |  |  |  |  |  |  |
| 27 |  | Discount (2%) |  | `=sum(D26)*2%` |  |  |  |  |  |  |  |  |  |  |
| 28 |  | Tổng cộng |  | `=sum(D26)-D27` | 22980 | `=round(D28*E28,0)` |  |  |  |  |  |  |  |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D28*0.05` |  | `=F28*0.05` |  |  |  |  |  |  |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` | 22980 | `=F28+F29` | 113245306.650000006 |  |  |  |  |  |  |  |
| 33 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 36 | 1 | 939632893638 | 2022-04-01 | `=4690.83+91` | 23095 | `=round(D36*E36,0)` |  |  |  |  |  |  |  |  |
| 37 |  | Discount (2%) |  | `=sum(D36)*2%` |  |  |  |  |  |  |  |  |  |  |
| 38 |  | Tổng cộng |  | `=sum(D36)-D37` | 23095 | `=round(D38*E38,0)` |  |  |  |  |  |  |  |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.05` |  | `=F38*0.05` |  |  |  |  |  |  |  |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` | 23095 | `=F38+F39` | 113639018.849999994 |  |  |  |  |  |  |  |
| 43 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 46 | 1 | 939632893638 | 2022-05-01 | 4680.81 |  |  |  |  |  |  |  |  |  |  |
| 47 |  | Discount (2%) |  | `=sum(D46)*2%` |  |  |  |  |  |  |  |  |  |  |
| 48 |  | Tổng cộng |  | `=sum(D46)-D47` |  |  |  |  |  |  |  |  |  |  |
| 49 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D48*0.05` |  |  |  |  |  |  |  |  |  |  |
| 50 |  | Tổng số tiền phải thanh toán |  | `=round(D48+D49,2)` | 23330 | `=D50*E50` | 112370111.5 |  |  |  |  |  |  |  |
| 53 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 56 | 1 | 939632893638 | 2022-06-01 | 4650.42 |  |  |  | 1 | 939632893638 | 2022-06-01 |  |  |  |  |
| 57 |  | Discount (2%) |  | `=sum(D56)*2%` |  |  |  |  | Discount (2%) |  | `=sum(K56)*2%` |  |  |  |
| 58 |  | Tổng cộng |  | `=sum(D56)-D57` |  |  |  |  | Tổng cộng |  | `=sum(K56)-K57` |  |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D58*0.05` |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K58*0.05` |  |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=round(D58+D59,2)` | 23415 | `=D60*E60` |  |  | Tổng số tiền phải thanh toán |  | `=round(K58+K59,2)` | 23415 | `=K60*L60` |  |
| 63 | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 66 | 1 | Microsoft Azure | 2022-02-01 | 436.47 |  |  |  |  |  |  |  |  |  |  |
| 67 | 2 | Microsoft Azure | 2022-03-01 | 703.33 |  |  |  |  |  |  |  |  |  |  |
| 68 | 3 | Microsoft Azure | 2022-04-01 | 643.94 |  |  |  |  |  |  |  |  |  |  |
| 69 | 4 | Microsoft Azure | 2022-05-01 | 485.19 |  |  |  |  |  |  |  |  |  |  |
| 70 |  | Tổng cộng |  | `=sum(D66:D69)` |  |  |  |  |  |  |  |  |  |  |
| 71 |  | Discount 2% |  | `=D70*2%` |  |  |  |  |  |  |  |  |  |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=round(D70-D71,2)` | 23415 | `=D72*E72` |  |  |  |  |  |  |  |  |
| 75 | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 78 | 1 | Microsoft Azure | 2022-06-01 | 540.055 |  |  |  |  |  |  |  |  |  |  |
| 79 |  | Tổng cộng |  | `=sum(D78)` |  |  |  |  |  |  |  |  |  |  |
| 80 |  | Discount 2% |  | `=D79*2%` |  |  |  |  |  |  |  |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(D79-D80,2)` | 23415 | `=D81*E81` |  |  |  |  |  |  |  |  |
| 83 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 85 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 86 | 1 | 939632893638 | 2022-07-01 | 4811.83 |  |  |  |  | 1 | Microsoft Azure | 2022-07-01 | 536.43 |  |  |
| 87 |  | Discount (2%) |  | `=sum(D86)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L86)` |  |  |
| 88 |  | Tổng cộng |  | `=sum(D86)-D87` |  |  |  |  |  | Discount 2% |  | `=L87*2%` |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D88*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L87-L88,2)` | 23480 | `=L89*M89` |
| 90 |  | Tổng số tiền phải thanh toán |  | `=round(D88+D89,2)` | 23480 | `=D90*E90` |  |  |  |  |  |  |  |  |
| 93 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 95 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 96 | 1 | 939632893638 | 2022-08-01 | 4785.7 |  |  |  |  | 1 | Microsoft Azure | 2022-08-01 | 429.51 |  |  |
| 97 |  | Discount (2%) |  | `=sum(D96)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L96)` |  |  |
| 98 |  | Tổng cộng |  | `=sum(D96)-D97` |  |  |  |  |  | Discount 2% |  | `=L97*2%` |  |  |
| 99 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D98*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L97-L98,2)` | 23600 | `=L99*M99` |
| 100 |  | Tổng số tiền phải thanh toán |  | `=round(D98+D99,2)` | 23600 | `=D100*E100` |  |  |  |  |  |  |  |  |
| 103 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 105 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 106 | 1 | 939632893638 | 2022-09-01 | 4763.78 |  |  |  |  | 1 | Microsoft Azure | 2022-09-01 | 425.11 |  |  |
| 107 |  | Discount (2%) |  | `=sum(D106)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L106)` |  |  |
| 108 |  | Tổng cộng |  | `=sum(D106)-D107` |  |  |  |  |  | Discount 2% |  | `=L107*2%` |  |  |
| 109 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D108*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L107-L108,2)` | 24010 | `=L109*M109` |
| 110 |  | Tổng số tiền phải thanh toán |  | `=round(D108+D109,2)` | 24010 | `=D110*E110` |  |  |  |  |  |  |  |  |
| 113 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 115 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 116 | 1 | 939632893638 | 2022-10-01 | 4776.09 |  |  |  |  | 1 | Microsoft Azure | 2022-10-01 | 496.13 |  |  |
| 117 |  | Discount (2%) |  | `=sum(D116)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L116)` |  |  |
| 118 |  | Tổng cộng |  | `=sum(D116)-D117` |  |  |  |  |  | Discount 2% |  | `=L117*2%` |  |  |
| 119 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D118*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L117-L118,2)` | 24877 | `=L119*M119` |
| 120 |  | Tổng số tiền phải thanh toán |  | `=round(D118+D119,2)` | 24877 | `=D120*E120` |  |  |  |  |  |  |  |  |
| 124 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 127 | 1 | 939632893638 | 2022-11-01 | 4700.34 |  |  |  |  | 1 | Microsoft Azure | 2022-11-01 | 526.15 |  |  |
| 128 |  | Discount (2%) |  | `=sum(D127)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L127)` |  |  |
| 129 |  | Tổng cộng |  | `=sum(D127)-D128` |  |  |  |  |  | Discount 2% |  | `=L128*2%` |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D129*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L128-L129,2)` | 24795 | `=L130*M130` |
| 131 |  | Tổng số tiền phải thanh toán |  | `=round(D129+D130,2)` | 24795 | `=D131*E131` |  |  |  |  |  |  |  |  |
| 134 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 137 | 1 | 939632893638 | 2022-12-01 | 5007.21 |  |  |  |  | 1 | Microsoft Azure | 2022-12-01 | 1370.16 |  |  |
| 138 |  | Discount (2%) |  | `=sum(D137)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L137)` |  |  |
| 139 |  | Tổng cộng |  | `=sum(D137)-D138` |  |  |  |  |  | Discount 2% |  | `=L138*2%` |  |  |
| 140 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D139*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L138-L139,2)` | 23760 | `=L140*M140` |
| 141 |  | Tổng số tiền phải thanh toán |  | `=round(D139+D140,2)` | 23760 | `=D141*E141` |  |  |  |  |  |  |  |  |
| 144 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 146 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 147 | 1 | 939632893638 | 2023-01-01 | 4979.19 |  |  |  |  | 1 | Microsoft Azure | 2023-01-01 | 656.77 |  |  |
| 148 |  | Discount (2%) |  | `=sum(D147)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L147)` |  |  |
| 149 |  | Tổng cộng |  | `=sum(D147)-D148` |  |  |  |  |  | Discount 2% |  | `=L148*2%` |  |  |
| 150 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D149*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L148-L149,2)` | 23622 | `=L150*M150` |
| 151 |  | Tổng số tiền phải thanh toán |  | `=round(D149+D150,2)` | 23622 | `=D151*E151` |  |  |  |  |  |  |  |  |
| 154 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 157 | 1 | 939632893638 | 2023-02-01 | 4582.72 |  |  |  |  | 1 | Microsoft Azure | 2023-02-01 | 283.18 |  |  |
| 158 |  | Discount (2%) |  | `=sum(D157)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L157)` |  |  |
| 159 |  | Tổng cộng |  | `=sum(D157)-D158` |  |  |  |  |  | Discount 2% |  | `=L158*2%` |  |  |
| 160 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D159*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L158-L159,2)` | 23955 | `=L160*M160` |
| 161 |  | Tổng số tiền phải thanh toán |  | `=round(D159+D160,2)` | 23955 | `=D161*E161` |  |  |  |  |  |  |  |  |
| 164 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 167 | 1 | 939632893638 | 2023-03-01 | 4914.55 |  |  |  |  | 1 | Microsoft Azure | 2023-03-01 | 420.7 |  |  |
| 168 |  | Discount (2%) |  | `=sum(D167)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L167)` |  |  |
| 169 |  | Tổng cộng |  | `=sum(D167)-D168` |  |  |  |  |  | Discount 2% |  | `=L168*2%` |  |  |
| 170 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D169*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L168-L169,2)` | 23632 | `=L170*M170` |
| 171 |  | Tổng số tiền phải thanh toán |  | `=round(D169+D170,2)` | 23632 | `=D171*E171` |  |  |  |  |  |  |  |  |
| 174 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 177 | 1 | 939632893638 | 2023-04-01 | 1930.85 |  |  |  |  | 1 | Microsoft Azure | 2023-04-01 | 358.28 |  |  |
| 178 |  | Discount (2%) |  | `=sum(D177)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L177)` |  |  |
| 179 |  | Tổng cộng |  | `=sum(D177)-D178` |  |  |  |  |  | Discount 2% |  | `=L178*2%` |  |  |
| 180 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D179*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L178-L179,2)` | 23645 | `=L180*M180` |
| 181 |  | Tổng số tiền phải thanh toán |  | `=round(D179+D180,2)` | 23645 | `=D181*E181` |  |  |  |  |  |  |  |  |
| 185 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 187 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 188 | 1 | 939632893638 | 2023-05-01 | 4419.29 |  |  |  |  | 1 | Microsoft Azure | 2023-05-01 | 451.43 |  |  |
| 189 |  | Discount (2%) |  | `=sum(D188)*2%` |  |  |  |  |  | Tổng cộng |  | `=sum(L188)` |  |  |
| 190 |  | Tổng cộng |  | `=sum(D188)-D189` |  |  |  |  |  | Discount 2% |  | `=L189*2%` |  |  |
| 191 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D190*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L189-L190,2)` | 23662 | `=L191*M191` |
| 192 |  | Tổng số tiền phải thanh toán |  | `=round(D190+D191,2)` | 23662 | `=D192*E192` |  |  |  |  |  |  |  |  |
| 196 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 198 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 199 | 1 | 939632893638 | 2023-06-01 | 4292.27 |  |  |  |  | 1 | Microsoft Azure | 2023-06-01 | 398.73 |  |  |
| 200 |  | Discount (2%) |  | `=round(sum(D199)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L199)` |  |  |
| 201 |  | Tổng cộng |  | `=sum(D199)-D200` |  |  |  |  |  | Discount 2% |  | `=L200*2%` |  |  |
| 202 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D201*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L200-L201,2)` | 23762 | `=L202*M202` |
| 203 |  | Tổng số tiền phải thanh toán |  | `=round(D201+D202,2)` | 23762 | `=D203*E203` |  |  |  |  |  |  |  |  |
| 207 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 209 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 210 | 1 | 939632893638 | 2023-07-01 | 1876.3 |  |  |  |  | 1 | Microsoft Azure | 2023-07-01 | 390.95 |  |  |
| 211 |  | Discount (2%) |  | `=round(sum(D210)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L210)` |  |  |
| 212 |  | Tổng cộng |  | `=sum(D210)-D211` |  |  |  |  |  | Discount 2% |  | `=L211*2%` |  |  |
| 213 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D212*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L211-L212,2)` | 23860 | `=L213*M213` |
| 214 |  | Tổng số tiền phải thanh toán |  | `=round(D212+D213,2)` | 23860 | `=D214*E214` |  |  |  |  |  |  |  |  |
| 217 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 219 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 220 | 1 | 939632893638 | 2023-08-01 | 4000.32 |  |  |  |  | 1 | Microsoft Azure | 2023-08-01 | 418.13 |  |  |
| 221 |  | Discount (2%) |  | `=round(sum(D220)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L220)` |  |  |
| 222 |  | Tổng cộng |  | `=sum(D220)-D221` |  |  |  |  |  | Discount 2% |  | `=L221*2%` |  |  |
| 223 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D222*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L221-L222,2)` | 24260 | `=L223*M223` |
| 224 |  | Tổng số tiền phải thanh toán |  | `=round(D222+D223,2)` | 24260 | `=D224*E224` |  |  |  |  |  |  |  |  |
| 228 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 230 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 231 | 1 | 939632893638 | 2023-09-01 | 3672.45 |  |  |  |  | 1 | Microsoft Azure | 2023-09-01 | 390.39 |  |  |
| 232 |  | Discount (2%) |  | `=round(sum(D231)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L231)` |  |  |
| 233 |  | Tổng cộng |  | `=sum(D231)-D232` |  |  |  |  |  | Discount 2% |  | `=L232*2%` |  |  |
| 234 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D233*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L232-L233,2)` | 24470 | `=L234*M234` |
| 235 |  | Tổng số tiền phải thanh toán |  | `=round(D233+D234,2)` | 24470 | `=D235*E235` |  |  |  |  |  |  |  |  |
| 236 |  |  |  |  | . |  |  |  |  |  |  |  |  |  |
| 238 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 240 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 241 | 1 | 939632893638 | 2023-10-01 | 3641.89 |  |  |  |  | 1 | Microsoft Azure | 2023-10-01 | 482.03 |  |  |
| 242 |  | Discount (2%) |  | `=round(sum(D241)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L241)` |  |  |
| 243 |  | Tổng cộng |  | `=sum(D241)-D242` |  |  |  |  |  | Discount 2% |  | `=L242*2%` |  |  |
| 244 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D243*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L242-L243,2)` | 24729 | `=L244*M244` |
| 245 |  | Tổng số tiền phải thanh toán |  | `=round(D243+D244,2)` | 24729 | `=D245*E245` |  |  |  |  |  |  |  |  |
| 249 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 251 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 252 | 1 | 939632893638 | 2023-11-01 | 3627.69 |  |  |  |  | 1 | Microsoft Azure | 2023-11-01 | 537.48 |  |  |
| 253 |  | Discount (2%) |  | `=round(sum(D252)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L252)` |  |  |
| 254 |  | Tổng cộng |  | `=sum(D252)-D253` |  |  |  |  |  | Discount 2% |  | `=L253*2%` |  |  |
| 255 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D254*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L253-L254,2)` | 24427 | `=L255*M255` |
| 256 |  | Tổng số tiền phải thanh toán |  | `=round(D254+D255,2)` | 24427 | `=D256*E256` |  |  |  |  |  |  |  |  |
| 260 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 262 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 263 | 1 | 939632893638 | 2023-12-01 | 4028.09 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 786.61 |  |  |
| 264 |  | Discount (2%) |  | `=round(sum(D263)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L263)` |  |  |
| 265 |  | Tổng cộng |  | `=sum(D263)-D264` |  |  |  |  |  | Discount 2% |  | `=L264*2%` |  |  |
| 266 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D265*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L264-L265,2)` | `=E267` | `=L266*M266` |
| 267 |  | Tổng số tiền phải thanh toán |  | `=round(D265+D266,2)` | 24450 | `=D267*E267` |  |  |  |  |  |  |  |  |
| 271 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 273 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 274 | 1 | 939632893638 | 2024-01-01 | 3722.42 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 508.04 |  |  |
| 275 |  | Discount (2%) |  | `=round(sum(D274)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L274)` |  |  |
| 276 |  | Tổng cộng |  | `=sum(D274)-D275` |  |  |  |  |  | Discount 2% |  | `=L275*2%` |  |  |
| 277 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D276*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L275-L276,2)` | `=E278` | `=L277*M277` |
| 278 |  | Tổng số tiền phải thanh toán |  | `=round(D276+D277,2)` | 24578 | `=D278*E278` |  |  |  |  |  |  |  |  |
| 282 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 284 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 285 | 1 | 939632893638 | 2024-02-01 | 3620.34 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 482.19 |  |  |
| 286 |  | Discount (2%) |  | `=round(sum(D285)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L285)` |  |  |
| 287 |  | Tổng cộng |  | `=sum(D285)-D286` |  |  |  |  |  | Discount 2% |  | `=L286*2%` |  |  |
| 288 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D287*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L286-L287,2)` | `=E289` | `=L288*M288` |
| 289 |  | Tổng số tiền phải thanh toán |  | `=round(D287+D288,2)` | 24802 | `=D289*E289` |  |  |  |  |  |  |  |  |
| 293 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 295 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 296 | 1 | 939632893638 | 2024-03-01 | 3835.81 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 558.52 |  |  |
| 297 |  | Discount (2%) |  | `=round(sum(D296)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L296)` |  |  |
| 298 |  | Tổng cộng |  | `=sum(D296)-D297` |  |  |  |  |  | Discount 2% |  | `=L297*2%` |  |  |
| 299 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D298*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L297-L298,2)` | 24972 | `=L299*M299` |
| 300 |  | Tổng số tiền phải thanh toán |  | `=round(D298+D299,2)` | 24972 | `=D300*E300` |  |  |  |  |  |  |  |  |
| 304 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 306 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 307 | 1 | 939632893638 | 2024-04-01 | 4221.47 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 447.92 |  |  |
| 308 |  | Discount (2%) |  | `=round(sum(D307)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L307)` |  |  |
| 309 |  | Tổng cộng |  | `=sum(D307)-D308` |  |  |  |  |  | Discount 2% |  | `=L308*2%` |  |  |
| 310 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D309*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L308-L309,2)` | 25458 | `=L310*M310` |
| 311 |  | Tổng số tiền phải thanh toán |  | `=round(D309+D310,2)` | 25458 | `=D311*E311` |  |  |  |  |  |  |  |  |
| 316 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 318 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 319 | 1 | 939632893638 | 2024-05-01 | 4197.81 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 387.66 |  |  |
| 320 |  | Discount (2%) |  | `=round(sum(D319)*2%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L319)` |  |  |
| 321 |  | Tổng cộng |  | `=sum(D319)-D320` |  |  |  |  |  | Discount 2% |  | `=L320*2%` |  |  |
| 322 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D321*0.05` |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=round(L320-L321,2)` | 25474 | `=L322*M322` |
| 323 |  | Tổng số tiền phải thanh toán |  | `=round(D321+D322,2)` | 25474 | `=D323*E323` |  |  |  |  |  |  |  |  |
| 327 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 329 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 330 | 1 | 939632893638 | 2024-06-01 | 3807.86 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 443.05 |  |  |
| 331 |  | Phí dịch vụ (5%) |  | `=round(sum(D330)*5%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L330)` |  |  |
| 332 |  | Tổng cộng |  | `=D330+D331` |  |  |  |  |  | Discount 2% |  | `=round(sum(L331)*2%,2)` |  |  |
| 333 |  | Chiết khấu (2%) |  | `=round(D332*2%,2)` |  |  |  |  | Thành tiền |  |  | `=round(L331-L332,2)` | 25473 | `=L333*M333` |
| 334 | Thành tiền |  |  | `=D332-D333` | 25473 | `=D334*E334` |  |  | Thuế GTGT |  |  |  |  | `=round(N333*10%,0)` |
| 335 | Thuế GTGT |  |  |  |  | `=round(F334*10%,0)` |  |  | Tổng số tiền phải thanh toán |  |  |  |  | `=N333+N334` |
| 336 |  | Tổng số tiền phải thanh toán |  |  |  | `=F334+F335` |  |  |  |  |  |  |  |  |
| 340 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ AZURE MVV Academy |  |  |  |  |  |
| 342 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  | STT | Dịch vụ | Tháng | Tổng lượng dùng  (USD) | Tỷ giá | Thành tiền |
| 343 | 1 | 939632893638 | 2024-07-01 | 3928.34 |  |  |  |  | 1 | Microsoft Azure | 1970-01-01 07:00:00 | 495.68 |  |  |
| 344 |  | Phí dịch vụ (5%) |  | `=round(sum(D343)*5%,2)` |  |  |  |  |  | Tổng cộng |  | `=sum(L343)` |  |  |
| 345 |  | Tổng cộng |  | `=D343+D344` |  |  |  |  |  | Discount 2% |  | `=round(sum(L344)*2%,2)` |  |  |
| 346 |  | Chiết khấu (2%) |  | `=round(D345*2%,2)` |  |  |  |  | Thành tiền |  |  | `=round(L344-L345,2)` | 25405 | `=L346*M346` |
| 347 | Thành tiền |  |  | `=D345-D346` | 25405 | `=D347*E347` |  |  | Thuế GTGT |  |  |  |  | `=round(N346*10%,0)` |
| 348 | Thuế GTGT |  |  |  |  | `=round(F347*10%,0)` |  |  | Tổng số tiền phải thanh toán |  |  |  |  | `=N346+N347` |
| 349 |  | Tổng số tiền phải thanh toán |  |  |  | `=F347+F348` |  |  |  |  |  |  |  |  |
| 354 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 356 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 357 | 1 | 939632893638 | 2024-08-01 | 5060.76 |  |  |  |  |  |  |  |  |  |  |
| 358 |  | Phí dịch vụ (5%) |  | `=round(sum(D357)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 359 |  | Tổng cộng |  | `=D357+D358` |  |  |  |  |  |  |  |  |  |  |
| 360 |  | Chiết khấu (2%) |  | `=round(D359*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 361 | Thành tiền |  |  | `=D359-D360` | 25080 | `=D361*E361` |  |  |  |  |  |  |  |  |
| 362 | Thuế GTGT |  |  |  |  | `=round(F361*10%,0)` |  |  |  |  |  |  |  |  |
| 363 | Tổng số tiền phải thanh toán |  |  |  |  | `=F361+F362` |  |  |  |  |  |  |  |  |
| 367 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 369 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 370 | 1 | 939632893638 | 2024-09-01 | 5152.57 |  |  |  |  |  |  |  |  |  |  |
| 371 | Phí dịch vụ (5%) |  |  | `=round(sum(D370)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 372 | Tổng cộng |  |  | `=D370+D371` |  |  |  |  |  |  |  |  |  |  |
| 373 | Chiết khấu (2%) |  |  | `=round(D372*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 374 | Thành tiền |  |  | `=D372-D373` | 24733 | `=D374*E374` |  |  |  |  |  |  |  |  |
| 375 | Thuế GTGT |  |  |  |  | `=round(F374*10%,0)` |  |  |  |  |  |  |  |  |
| 376 | Tổng số tiền phải thanh toán |  |  |  |  | `=F374+F375` |  |  |  |  |  |  |  |  |
| 380 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 382 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 383 | 1 | 939632893638 | 2024-10-01 | 5234.15 |  |  |  |  |  |  |  |  |  |  |
| 384 | Phí dịch vụ (5%) |  |  | `=round(sum(D383)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 385 | Tổng cộng |  |  | `=D383+D384` |  |  |  |  |  |  |  |  |  |  |
| 386 | Chiết khấu (2%) |  |  | `=round(D385*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 387 | Thành tiền |  |  | `=D385-D386` | 25445 | `=D387*E387` |  |  |  |  |  |  |  |  |
| 388 | Thuế GTGT |  |  |  |  | `=round(F387*10%,0)` |  |  |  |  |  |  |  |  |
| 389 | Tổng số tiền phải thanh toán |  |  |  |  | `=F387+F388` |  |  |  |  |  |  |  |  |
| 393 | TỔNG HỢP CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 395 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 396 | 1 | 939632893638 | 2024-11-01 | 4328.92 |  |  |  |  |  |  |  |  |  |  |
| 397 | Phí dịch vụ (5%) |  |  | `=round(sum(D396)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 398 | Tổng cộng |  |  | `=D396+D397` |  |  |  |  |  |  |  |  |  |  |
| 399 | Chiết khấu (2%) |  |  | `=round(D398*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 400 | Thành tiền |  |  | `=D398-D399` | 25463 | `=D400*E400` |  |  |  |  |  |  |  |  |
| 401 | Thuế GTGT |  |  |  |  | `=round(F400*10%,1)` |  |  |  |  |  |  |  |  |
| 402 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F400+F401,1)` |  |  |  |  |  |  |  |  |
| 406 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 408 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 409 | 1 | 939632893638 | 2024-12-01 | 4050.86 |  |  |  |  |  |  |  |  |  |  |
| 410 | Phí dịch vụ (5%) |  |  | `=round(sum(D409)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 411 | Tổng cộng |  |  | `=D409+D410` |  |  |  |  |  |  |  |  |  |  |
| 412 | Chiết khấu (2%) |  |  | `=round(D411*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 413 | Thành tiền |  |  | `=D411-D412` | 25551 | `=D413*E413` |  |  |  |  |  |  |  |  |
| 414 | Thuế GTGT |  |  |  |  | `=round(F413*10%,1)` |  |  |  |  |  |  |  |  |
| 415 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F413+F414,1)` |  |  |  |  |  |  |  |  |
| 419 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 421 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 422 | 1 | 939632893638 | 2025-01-01 | 3911.57 |  |  |  |  |  |  |  |  |  |  |
| 423 | Phí dịch vụ (5%) |  |  | `=round(sum(D422)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 424 | Tổng cộng |  |  | `=D422+D423` |  |  |  |  |  |  |  |  |  |  |
| 425 | Chiết khấu (2%) |  |  | `=round(D424*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 426 | Thành tiền |  |  | `=D424-D425` | 25295 | `=D426*E426` |  |  |  |  |  |  |  |  |
| 427 | Thuế GTGT |  |  |  |  | `=round(F426*10%,1)` |  |  |  |  |  |  |  |  |
| 428 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F426+F427,1)` |  |  |  |  |  |  |  |  |
| 432 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 434 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 435 | 1 | 939632893638 | 2025-02-01 | 3743.59 |  |  |  |  |  |  |  |  |  |  |
| 436 | Phí dịch vụ (5%) |  |  | `=round(sum(D435)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 437 | Tổng cộng |  |  | `=D435+D436` |  |  |  |  |  |  |  |  |  |  |
| 438 | Chiết khấu (2%) |  |  | `=round(D437*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 439 | Thành tiền |  |  | `=D437-D438` | 25735 | `=D439*E439` |  |  |  |  |  |  |  |  |
| 440 | Thuế GTGT |  |  |  |  | `=round(F439*10%,1)` |  |  |  |  |  |  |  |  |
| 441 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F439+F440,1)` |  |  |  |  |  |  |  |  |
| 445 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 447 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 448 | 1 | 939632893638 | 2025-03-01 | 4488.69 |  |  |  |  |  |  |  |  |  |  |
| 449 | Phí dịch vụ (5%) |  |  | `=round(sum(D448)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 450 | Tổng cộng |  |  | `=D448+D449` |  |  |  |  |  |  |  |  |  |  |
| 451 | Chiết khấu (2%) |  |  | `=round(D450*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 452 | Thành tiền |  |  | `=D450-D451` | 25775 | `=D452*E452` |  |  |  |  |  |  |  |  |
| 453 | Thuế GTGT |  |  |  |  | `=round(F452*10%,0)` |  |  |  |  |  |  |  |  |
| 454 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F452+F453,2)` |  |  |  |  |  |  |  |  |
| 458 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 460 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 461 | 1 | 939632893638 | 2025-04-01 | 4059.24 |  |  |  |  |  |  |  |  |  |  |
| 462 | Phí dịch vụ (5%) |  |  | `=round(sum(D461)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 463 | Tổng cộng |  |  | `=D461+D462` |  |  |  |  |  |  |  |  |  |  |
| 464 | Chiết khấu (2%) |  |  | `=round(D463*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 465 | Thành tiền |  |  | `=D463-D464` | 26190 | `=D465*E465` |  |  |  |  |  |  |  |  |
| 466 | Thuế GTGT |  |  |  |  | `=round(F465*10%,0)` |  |  |  |  |  |  |  |  |
| 467 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F465+F466,2)` |  |  |  |  |  |  |  |  |
| 471 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 473 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 474 | 1 | 939632893638 | 2025-05-01 | 4181.29 |  |  |  |  |  |  |  |  |  |  |
| 475 | Phí dịch vụ (5%) |  |  | `=round(sum(D474)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 476 | Tổng cộng |  |  | `=D474+D475` |  |  |  |  |  |  |  |  |  |  |
| 477 | Chiết khấu (2%) |  |  | `=round(D476*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 478 | Thành tiền |  |  | `=D476-D477` | 26225 | `=D478*E478` |  |  |  |  |  |  |  |  |
| 479 | Thuế GTGT |  |  |  |  | `=round(F478*10%,0)` |  |  |  |  |  |  |  |  |
| 480 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F478+F479,2)` |  |  |  |  |  |  |  |  |
| 484 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 486 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 487 | 1 | 939632893638 | 2025-06-01 | 4092.04 |  |  |  |  |  |  |  |  |  |  |
| 488 | Phí dịch vụ (5%) |  |  | `=round(sum(D487)*5%,2)` |  |  |  |  |  |  |  |  |  |  |
| 489 | Tổng cộng |  |  | `=D487+D488` |  |  |  |  |  |  |  |  |  |  |
| 490 | Chiết khấu (2%) |  |  | `=round(D489*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 491 | Thành tiền |  |  | `=D489-D490` | 26300 | `=D491*E491` |  |  |  |  |  |  |  |  |
| 492 | Thuế GTGT |  |  |  |  | `=round(F491*10%,0)` |  |  |  |  |  |  |  |  |
| 493 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F491+F492,2)` |  |  |  |  |  |  |  |  |
| 497 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 499 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 500 | 1 | 939632893638 | 2025-07-01 | 4277.55 |  |  |  |  |  |  |  |  |  |  |
| 501 | Phí dịch vụ (10%) |  |  | `=round(sum(D500)*10%,2)` |  |  |  |  |  |  |  |  |  |  |
| 502 | Tổng cộng |  |  | `=D500+D501` |  |  |  |  |  |  |  |  |  |  |
| 503 | Chiết khấu (2%) |  |  | `=round(D502*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 504 | Thành tiền |  |  | `=D502-D503` | 26382 | `=D504*E504` |  |  |  |  |  |  |  |  |
| 505 | Thuế GTGT |  |  |  |  | `=round(F504*10%,0)` |  |  |  |  |  |  |  |  |
| 506 | Tổng số tiền phải thanh toán |  |  |  |  | `=round(F504+F505,2)` |  |  |  |  |  |  |  |  |
| 510 | ĐỐI SOÁT CHI PHÍ MVV Academy |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 512 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 513 | 1 | 939632893638 | 2025-08-01 | 4156.97 |  |  |  |  |  |  |  |  |  |  |
| 514 | Phí dịch vụ (10%) |  |  | `=round(sum(D513)*10%,2)` |  |  |  |  |  |  |  |  |  |  |
| 515 |  |  |  | `=D513+D514` |  |  |  |  |  |  |  |  |  |  |
| 516 |  |  |  | `=round(D515*2%,2)` |  |  |  |  |  |  |  |  |  |  |
| 517 |  |  |  | `=D515-D516` | 26502 | `=D517*E517` |  |  |  |  |  |  |  |  |
| 518 |  |  |  |  |  | `=round(F517*10%,0)` |  |  |  |  |  |  |  |  |
| 519 |  |  |  |  |  | `=round(F517+F518,2)` |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 165 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (394 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})-D{r}` | 29 | `D8` |
| D | `=D{r}*0.05` | 29 | `D9` |
| D | `=round(D{r}+D{r},2)` | 25 | `D50` |
| D | `=D{r}+D{r}` | 19 | `D10` |
| D | `=sum(D{r})*2%` | 17 | `D7` |
| D | `=round(D{r}*2%,2)` | 15 | `D333` |
| D | `=D{r}-D{r}` | 15 | `D334` |
| D | `=round(sum(D{r})*5%,2)` | 13 | `D331` |
| D | `=round(sum(D{r})*2%,2)` | 12 | `D200` |
| D | `=D{r}*2%` | 2 | `D71` |
| D | `=round(D{r}-D{r},2)` | 2 | `D72` |
| D | `=round(sum(D{r})*10%,2)` | 2 | `D501` |
| D | `=4921.8+91+0.01` | 1 | `D6` |
| D | `=4359.55+84` | 1 | `D16` |
| D | `=4695.11+94` | 1 | `D26` |
| D | `=4690.83+91` | 1 | `D36` |
| D | `=sum(D{r}:D{r})` | 1 | `D70` |
| D | `=sum(D{r})` | 1 | `D79` |
| F | `=D{r}*E{r}` | 42 | `F50` |
| F | `=round(F{r}*10%,0)` | 11 | `F335` |
| F | `=F{r}+F{r}` | 9 | `F10` |
| F | `=round(D{r}*E{r},0)` | 8 | `F6` |
| F | `=round(F{r}+F{r},2)` | 6 | `F454` |
| F | `=F{r}*0.05` | 4 | `F9` |
| F | `=round(F{r}*10%,1)` | 4 | `F401` |
| F | `=round(F{r}+F{r},1)` | 4 | `F402` |
| K | `=C{r}` | 8 | `K263` |
| K | `=sum(K{r})*2%` | 1 | `K57` |
| K | `=sum(K{r})-K{r}` | 1 | `K58` |
| K | `=K{r}*0.05` | 1 | `K59` |
| K | `=round(K{r}+K{r},2)` | 1 | `K60` |
| L | `=sum(L{r})` | 25 | `L87` |
| L | `=round(L{r}-L{r},2)` | 25 | `L89` |
| L | `=L{r}*2%` | 23 | `L88` |
| L | `=round(sum(L{r})*2%,2)` | 2 | `L332` |
| M | `=E{r}` | 3 | `M266` |
| M | `=K{r}*L{r}` | 1 | `M60` |
| N | `=L{r}*M{r}` | 25 | `N89` |
| N | `=round(N{r}*10%,0)` | 2 | `N334` |
| N | `=N{r}+N{r}` | 2 | `N335` |
