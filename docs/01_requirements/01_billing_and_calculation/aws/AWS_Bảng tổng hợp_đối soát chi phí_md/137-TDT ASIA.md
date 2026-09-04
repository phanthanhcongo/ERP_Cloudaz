# TDT ASIA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TDT ASIA`  
> **Vùng dữ liệu:** 209 dòng × 24 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | S | T | U | V | W | X | Y |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 | 1 | 078242787067 |  | 2021-12-01 | 14.47 | 22840 | `=round(E7*F7,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | Discount (2%) |  |  | `=sum(E7)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | Tổng cộng |  |  | `=sum(E7)-E8` | 22840 | `=round(E9*F9,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E9*0.05` |  | `=G9*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | Tổng số tiền phải thanh toán |  |  | `=E9+E10` | 22840 | `=G9+G10` | 340079.25 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 10/02/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | 1 | 078242787067 |  | 2022-01-01 | `=719.16+54.11` | 22820 | `=round(E18*F18,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | 2 | 076812681294 |  | 2022-01-01 | `=375.25+11.59` | 22820 | `=round(E19*F19,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | Discount (2%) |  |  | `=sum(E18:E19)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | Tổng cộng |  |  | `=sum(E18:E19)-E20` | 22820 | `=round(E21*F21,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E21*0.05` |  | `=G21*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | Tổng số tiền phải thanh toán |  |  | `=E21+E22` | 22820 | `=G21+G22` | 27241447.8000000007 | `=G11+G23` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 28 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 08/03/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 | 1 | 078242787067 |  | 2022-02-01 | `=609.42+45.88` | 22990 | `=round(E29*F29,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 | 2 | 076812681294 |  | 2022-02-01 | `=423.76+13.08` | 22990 | `=round(E30*F30,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | Discount (2%) |  |  | `=sum(E29:E30)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | Tổng cộng |  |  | `=sum(E29:E30)-E31` | 22990 | `=round(E32*F32,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E32*0.05` |  | `=G32*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | Tổng số tiền phải thanh toán |  |  | `=E32+E33` | 22990 | `=G32+G33` | 25836439.6499999985 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 07/04/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 40 | 1 | 078242787067 |  | 2022-03-01 | 853.41 | 23010 | `=round(E40*F40,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 41 | 2 | 076812681294 |  | 2022-03-01 | 474.28 | 23010 | `=round(E41*F41,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | Discount (2%) |  |  | `=sum(E40:E41)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | Tổng cộng |  |  | `=sum(E40:E41)-E42` | 23010 | `=round(E43*F43,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E43*0.05` |  | `=G43*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  |  | `=E43+E44` | 23010 | `=G43+G44` | 31436101.1999999993 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 12/05/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 | 1 | 078242787067 |  | 2022-04-01 | 1118.8 | 23220 | `=round(E51*F51,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 | 2 | 076812681294 |  | 2022-04-01 | 461.39 | 23220 | `=round(E52*F52,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | Discount (2%) |  |  | `=sum(E51:E52)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | Tổng cộng |  |  | `=sum(E51:E52)-E53` | 23220 | `=round(E54*F54,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E54*0.05` |  | `=G54*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | Tổng số tiền phải thanh toán |  |  | `=E54+E55` | 23220 | `=G54+G55` | 37756080.6000000015 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 60 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 | STT | Tài khoản |  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 17/05/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 | 1 | 078242787067 |  | 2022-05-01 | 1124.4 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 | 2 | 076812681294 |  | 2022-05-01 | 498.56 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | 261844485432 |  | 2022-05-01 | 0 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | Discount (2%) |  |  | `=sum(E63:E65)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | Tổng cộng |  |  | `=sum(E63:E65)-E66` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 68 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E67*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | Tổng số tiền phải thanh toán |  |  | `=round(E67+E68,2)` | 23380 | `=E69*F69` | 39045301.3999999985 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 72 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 74 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 18/07/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 75 | 1 | 078242787067 | ECOMEDIC | 2022-06-01 | 853.63 | 23590 | `=round(E75*(1-2%)*(1+5%),2)*F75` |  | 20721220 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 76 | 2 | 076812681294 | MEDLINK  | 2022-06-01 | 858.73 | 23590 | `=round(E76*(1-2%)*(1+5%),2)*F76` |  | 20844832 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 | 3 | 261844485432 | TDTASIA | 2022-06-01 | 27.04 | 23590 | `=round(E77*(1-2%)*(1+5%),2)*F77` |  | 656274 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  | Discount (2%) |  |  | `=sum(E75:E77)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | Tổng cộng |  |  | `=sum(E75:E77)-E78` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E79*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 | Tổng số tiền phải thanh toán |  |  |  | `=round(E79+E80,2)` | 23590 | `=E81*F81` |  | 42222326 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 12/08/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 | 1 | 078242787067 | ECOMEDIC | 2022-07-01 | 1047.65 | 23530 | `=round(E87*(1-2%)*(1+5%),2)*F87` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 | 2 | 076812681294 | MEDLINK  | 2022-07-01 | 925.38 | 23530 | `=round(E88*(1-2%)*(1+5%),2)*F88` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 | 3 | 261844485432 | TDTASIA | 2022-07-01 | 0 | 23530 | `=round(E89*(1-2%)*(1+5%),2)*F89` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | Discount (2%) |  |  | `=sum(E87:E89)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  | Tổng cộng |  |  | `=sum(E87:E89)-E90` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E91*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 | Tổng số tiền phải thanh toán |  |  |  | `=round(E91+E92,2)` | 23530 | `=E93*F93` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 97 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 99 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 08/09/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 | 1 | 078242787067 | ECOMEDIC | 2022-08-01 | 1030.12 | 23720 | `=round(E100*(1-2%)*(1+5%),2)*F100` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 101 | 2 | 076812681294 | MEDLINK  | 2022-08-01 | 744.06 | 23720 | `=round(E101*(1-2%)*(1+5%),2)*F101` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 | 3 | 261844485432 | TDTASIA | 2022-08-01 | 20.7 | 23720 | `=round(E102*(1-2%)*(1+5%),2)*F102` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  | Discount (2%) |  |  | `=sum(E100:E102)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 104 |  | Tổng cộng |  |  | `=sum(E100:E102)-E103` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 105 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E104*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 106 | Tổng số tiền phải thanh toán |  |  |  | `=round(E104+E105,2)` | 23720 | `=E106*F106` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 109 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TDT ASIA 09.2022 ( Theo cách tính của khách) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 111 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 07/10/2022 | Thành tiền |  |  | STT | Công ty  | Billing AWS (USD) | Ex rate VCB<br> 12/10/2022 | Discount (2%) | Tax (5%) | Final amount |  |  |  |  |  |  |  |  |
| 112 | 1 | 078242787067 | ECOMEDIC | 2022-09-01 | 946.8735332802 | 24020 | `=round(E112*(1-2%)*(1+5%),2)*F112` |  |  |  |  |  |  |  |  | USD | VND |  |  |  |  |  |  |  |
| 113 | 2 | 076812681294 | MEDLINK  | 1970-01-01 07:00:00 | 620.393949252 | 24020 | `=round(E113*(1-2%)*(1+5%),2)*F113` |  |  |  | (1) | (2) | (3) | (4=2*2%) | (5=(2-4)*5% | (6=(2-4)+5) | (7=6*3) |  |  |  |  |  |  |  |
| 114 | 3 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 212.36 | 24020 | `=round(E114*(1-2%)*(1+5%),2)*F114` |  |  | 1 | ECOMEDIC | 339.46 | 24070 | `=L114*2%` | 16.633725 | 349.31 | 8407849 |  |  |  |  |  |  |  |
| 115 |  | Discount (2%) |  |  | `=sum(E112:E114)*2%` |  |  |  |  | 2 | MEDLINK  | 620.393949252 | 24070 | `=L115*2%` | 30.399 | 638.38 | 15365783 |  |  |  |  |  |  |  |
| 116 |  | Tổng cộng |  |  | `=sum(E112:E114)-E115` |  |  |  |  | 3 | TDTASIA | 819.84 | 24070 | `=L116*2%` | 40.171775 | `=L116-N116+O116` | 20305627 |  |  |  |  |  |  |  |
| 117 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E116*0.05` |  |  |  |  | Total |  |  |  |  |  |  | `=sum(Q114:Q116)` |  |  |  |  |  |  |  |
| 118 | Tổng số tiền phải thanh toán |  |  |  | `=round(E116+E117,2)` | 24020 | `=sum(G112:G114)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 122 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 124 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 04/11/2022 | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 125 | 1 | 078242787067 | ECOMEDIC | 2022-10-01 | 1006.3 | 24877 | `=round(E125*(1-2%)*(1+5%),2)*F125` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 126 | 2 | 076812681294 | MEDLINK  | 1970-01-01 07:00:00 | 593.34 | 24877 | `=round(E126*(1-2%)*(1+5%),2)*F126` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 127 | 3 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 556.61 | 24877 | `=round(E127*(1-2%)*(1+5%),2)*F127` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 128 |  | Discount (2%) |  |  | `=sum(E125:E127)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 129 |  | Tổng cộng |  |  | `=sum(E125:E127)-E128` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 130 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E129*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 131 | Tổng số tiền phải thanh toán |  |  |  | `=round(E129+E130,2)` | 24877 | `=sum(G125:G127)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 134 | TỔNG HỢP CHI PHÍ ECOMEDIC |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ MEDLINK |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TDTASIA |  |  |  |  |  |  |
| 136 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 10/11/2022 | Thành tiền |  |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 10/11/2022 | Thành tiền |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 10/11/2022 | Thành tiền |
| 137 | 1 | 078242787067 | ECOMEDIC | 2022-10-01 | 333.45 | 27870 |  |  |  | 1 | 076812681294 | MEDLINK | 2022-10-01 | 593.34 | 27870 |  |  | 1 | 261844485432 | TDTASIA | 2022-10-01 | 1229.46 | 27870 |  |
| 138 |  | Discount (2%) |  |  | `=sum(E137)*2%` |  |  |  |  |  | Discount (2%) |  |  | `=sum(N137)*2%` |  |  |  |  | Discount (2%) |  |  | `=sum(W137)*2%` |  |  |
| 139 |  | Tổng cộng |  |  | `=sum(E137)-E138` |  |  |  |  |  | Tổng cộng |  |  | `=sum(N137)-N138` |  |  |  |  | Tổng cộng |  |  | `=sum(W137)-W138` |  |  |
| 140 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E139*0.05` |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=N139*0.05` |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  |  |
| 141 | Tổng số tiền phải thanh toán |  |  |  | `=round(E139+E140,2)` | 24870 | 8533421 |  |  | Tổng số tiền phải thanh toán |  |  |  | `=round(N139+N140,2)` | 24870 | 15184300 |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |
| 145 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 147 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 08/12/2022 | Thành tiền <br>VND |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 148 | 1 | 078242787067 | ECOMEDIC | 2022-11-01 | 1021.5839372018 | 23950 | `=round(E148*(1-2%)*(1+5%),2)*F148` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 149 | 2 | 076812681294 | MEDLINK  | 1970-01-01 07:00:00 | 558.8253889929 | 23951 | `=round(E149*(1-2%)*(1+5%),2)*F149` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 150 | 3 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 533.9927276225 | 23952 | `=round(E150*(1-2%)*(1+5%),2)*F150` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 151 |  | Discount (2%) |  |  | `=sum(E148:E150)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 152 |  | Tổng cộng |  |  | `=sum(E148:E150)-E151` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E152*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 154 | Tổng số tiền phải thanh toán |  |  |  | `=round(E152+E153,2)` | 23950 | `=sum(G148:G150)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 157 | TỔNG HỢP CHI PHÍ ECOMEDIC |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ MEDLINK |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TDTASIA |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 15/12/2022 | Thành tiền |  |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | `=F159` | Thành tiền |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | `=F159` | Thành tiền |
| 160 | 1 | 078242787067 | ECOMEDIC | 2022-11-01 | 356.87 | 23660 |  |  |  | 1 | 076812681294 | MEDLINK | 1970-01-01 07:00:00 | 558.83 | 23660 |  |  | 1 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 1198.73 | `=F160` |  |
| 161 |  | Discount (2%) |  |  | `=sum(E160)*2%` |  |  |  |  |  | Discount (2%) |  |  | `=sum(N160)*2%` |  |  |  |  | Discount (2%) |  |  | `=sum(W160)*2%` |  |  |
| 162 |  | Tổng cộng |  |  | `=sum(E160)-E161` |  |  |  |  |  | Tổng cộng |  |  | `=sum(N160)-N161` |  |  |  |  | Tổng cộng |  |  | `=sum(W160)-W161` |  |  |
| 163 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E162*0.05` |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=N162*0.05` |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  |  |
| 164 | Tổng số tiền phải thanh toán |  |  |  | `=round(E162+E163,2)` | `=F160` | `=E164*F164` |  |  | Tổng số tiền phải thanh toán |  |  |  | 575.03 | `=O160` | `=N164*O164` |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |
| 167 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 169 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 11/01/2023 | Thành tiền <br>VND |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 170 | 1 | 078242787067 | ECOMEDIC | 2022-12-01 | 889.024530423 | 23610 | `=round(E170*(1-2%)*(1+5%),2)*F170` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 171 | 2 | 076812681294 | MEDLINK  | 1970-01-01 07:00:00 | 620.8638932116 | `=$F$170` | `=round(E171*(1-2%)*(1+5%),2)*F171` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 172 | 3 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 117.1736558161 | `=$F$170` | `=round(E172*(1-2%)*(1+5%),2)*F172` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 173 |  | Discount (2%) |  |  | `=sum(E170:E172)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 174 |  | Tổng cộng |  |  | `=sum(E170:E172)-E173` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 175 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E174*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 176 | Tổng số tiền phải thanh toán |  |  |  | `=round(E174+E175,2)` |  | `=sum(G170:G172)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 179 | TỔNG HỢP CHI PHÍ ECOMEDIC |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ MEDLINK |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TDTASIA |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 16/01/2023 | Thành tiền |  |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 16/01/2023 | Thành tiền |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | `=F181` | Thành tiền |
| 182 | 1 | 078242787067 | ECOMEDIC | 2022-12-01 | 361.12 | 23610 |  |  |  | 1 | 076812681294 | MEDLINK | 1970-01-01 07:00:00 | 620.86 | `=F182` |  |  | 1 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 645.07 | `=F182` |  |
| 183 |  | Discount (2%) |  |  | `=sum(E182)*2%` |  |  |  |  |  | Discount (2%) |  |  | `=sum(N182)*2%` |  |  |  |  | Discount (2%) |  |  | `=sum(W182)*2%` |  |  |
| 184 |  | Tổng cộng |  |  | `=sum(E182)-E183` |  |  |  |  |  | Tổng cộng |  |  | `=sum(N182)-N183` |  |  |  |  | Tổng cộng |  |  | `=sum(W182)-W183` |  |  |
| 185 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | 17.7 |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=N184*0.05` |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  |  |
| 186 | Tổng số tiền phải thanh toán |  |  |  | `=round(E184+E185,2)` | `=F182` | `=E186*F186` |  |  | Tổng số tiền phải thanh toán |  |  |  | `=round(N184+N185,2)` | `=O182` | `=N186*O186` |  | Tổng số tiền phải thanh toán |  |  |  |  |  |  |
| 190 | TỔNG HỢP CHI PHÍ TDT ASIA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 192 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 11/01/2023 | Thành tiền <br>VND |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 193 | 1 | 078242787067 | ECOMEDIC | 2023-01-01 | 889.49 | 23640 | `=round(E193*(1-2%)*(1+5%),2)*F193` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 194 | 2 | 076812681294 | MEDLINK  | 1970-01-01 07:00:00 | 701.31 | 23640 | `=round(E194*(1-2%)*(1+5%),2)*F194` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 195 | 3 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 70.01 | 23640 | `=round(E195*(1-2%)*(1+5%),2)*F195` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 196 |  | Discount (2%) |  |  | `=sum(E193:E195)*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 197 |  | Tổng cộng |  |  | `=sum(E193:E195)-E196` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 198 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E197*0.05` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 199 | Tổng số tiền phải thanh toán |  |  |  | `=round(E197+E198,2)` |  | `=sum(G193:G195)` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 202 | TỔNG HỢP CHI PHÍ ECOMEDIC |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ MEDLINK |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TDTASIA |  |  |  |  |  |  |
| 204 | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | Tỷ giá VCB tại ngày 17/02/2023 | Thành tiền |  |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | `=F204` | Thành tiền |  | STT | Tài khoản | Công ty  | Tháng | Billing AWS (USD) | `=F204` | Thành tiền |
| 205 | 1 | 078242787067 | ECOMEDIC | 2023-01-01 | 359.99 | 23960 |  |  |  | 1 | 076812681294 | MEDLINK | 1970-01-01 07:00:00 | 701.31 | `=F205` |  |  | 1 | 261844485432 | TDTASIA | 1970-01-01 07:00:00 | 599.51 | `=F205` |  |
| 206 |  | Discount (2%) |  |  | `=sum(E205)*2%` |  |  |  |  |  | Discount (2%) |  |  | `=sum(N205)*2%` |  |  |  |  | Discount (2%) |  |  | `=sum(W205)*2%` |  |  |
| 207 |  | Tổng cộng |  |  | `=sum(E205)-E206` |  |  |  |  |  | Tổng cộng |  |  | `=sum(N205)-N206` |  |  |  |  | Tổng cộng |  |  | `=sum(W205)-W206` |  |  |
| 208 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=E207*0.05` |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  | `=N207*0.05` |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  |  |
| 209 |  |  |  |  | `=round(E207+E208,2)` | `=F205` | 8875515 |  |  |  |  |  |  | 721.64 | `=O205` | 17290494 |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 61 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (198 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}` | 10 | `D113` |
| E | `=E{r}*0.05` | 17 | `E10` |
| E | `=sum(E{r}:E{r})*2%` | 13 | `E20` |
| E | `=sum(E{r}:E{r})-E{r}` | 13 | `E21` |
| E | `=round(E{r}+E{r},2)` | 13 | `E69` |
| E | `=sum(E{r})*2%` | 5 | `E8` |
| E | `=sum(E{r})-E{r}` | 5 | `E9` |
| E | `=E{r}+E{r}` | 5 | `E11` |
| E | `=719.16+54.11` | 1 | `E18` |
| E | `=375.25+11.59` | 1 | `E19` |
| E | `=609.42+45.88` | 1 | `E29` |
| E | `=423.76+13.08` | 1 | `E30` |
| F | `=F{r}` | 3 | `F164` |
| F | `=$F${r}` | 2 | `F171` |
| G | `=round(E{r}*(1-2%)*(1+5%),2)*F{r}` | 24 | `G75` |
| G | `=round(E{r}*F{r},0)` | 14 | `G7` |
| G | `=E{r}*F{r}` | 6 | `G69` |
| G | `=G{r}*0.05` | 5 | `G10` |
| G | `=G{r}+G{r}` | 5 | `G11` |
| G | `=sum(G{r}:G{r})` | 5 | `G118` |
| I | `=G{r}+G{r}` | 1 | `I23` |
| M | `=D{r}` | 3 | `M160` |
| N | `=sum(N{r})*2%` | 4 | `N138` |
| N | `=sum(N{r})-N{r}` | 4 | `N139` |
| N | `=N{r}*0.05` | 4 | `N140` |
| N | `=L{r}*2%` | 3 | `N114` |
| N | `=round(N{r}+N{r},2)` | 2 | `N141` |
| O | `=F{r}` | 4 | `O159` |
| O | `=O{r}` | 3 | `O164` |
| P | `=N{r}*O{r}` | 2 | `P164` |
| P | `=L{r}-N{r}+O{r}` | 1 | `P116` |
| Q | `=sum(Q{r}:Q{r})` | 1 | `Q117` |
| V | `=D{r}` | 3 | `V160` |
| W | `=sum(W{r})*2%` | 4 | `W138` |
| W | `=sum(W{r})-W{r}` | 4 | `W139` |
| X | `=F{r}` | 6 | `X159` |
