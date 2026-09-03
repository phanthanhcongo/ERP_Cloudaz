# TOKIO&amp;DILIGO

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TOKIO&amp;DILIGO`  
> **Vùng dữ liệu:** 212 dòng × 15 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |  |  |  |  |  |  |
| 4 | 1 | 338122247147 | 2020-10-01 | 0.67 | 300 | `=E6-D6` |  |  |  |  |  |  |  |  |  |
| 5 | 2 | 338122247147 | 2020-11-01 | 56.05 |  |  |  |  |  |  |  |  |  |  |  |
| 6 |  | Tổng |  | `=sum(D4:D5)` | `=E4` | `=F4` |  |  |  |  |  |  |  |  |  |
| 7 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  |  | 0 |  |  |  |  |  |  |  |  |  |
| 8 |  | Tổng số tiền phải thanh toán |  |  |  | 0 |  |  |  |  |  |  |  |  |  |
| 12 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ (chuyển sang kỳ sau) | Tỷ giá | Thành tiền |  |  |  |  |  |
| 15 | 1 | 338122247147 |  | 2020-12-01 | 288.83 | `=F6` | `=-E15` | `=F15+G15` | 23185 | `=-H15*I15` |  |  |  |  |  |
| 16 |  | Tổng |  |  | `=E15` |  |  | `=-H15` | 23185 | `=J15` |  |  |  |  |  |
| 17 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  |  | `=-H15*0.1` | 23185 | `=H17*I17` |  |  |  |  |  |
| 18 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=sum(H16:H17)` | 23185 | `=J16+J17` |  |  |  |  |  |
| 22 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 25 | 1 | 808349803047 | 2021-01-01 | 161.7 | 23145 | `=D25*E25` |  |  |  |  |  |  |  |  |  |
| 26 |  | Tổng cộng |  | `=sum(D25)` |  | `=sum(F25)` |  |  |  |  |  |  |  |  |  |
| 27 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D26*0.1` |  | `=F26*0.1` |  |  |  |  |  |  |  |  |  |
| 28 |  | Tổng số tiền phải thanh toán |  | `=D26+D27` |  | `=F26+F27` |  |  |  |  |  |  |  |  |  |
| 31 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 34 | 1 | 338122247147 | 2021-02-01 | 117.2 | 23095 | `=D34*E34` |  |  |  |  |  |  |  |  |  |
| 35 |  | Tổng cộng |  | `=sum(D34)` |  | `=sum(F34)` |  |  |  |  |  |  |  |  |  |
| 36 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D35*0.1` |  | `=F35*0.1` |  |  |  |  |  |  |  |  |  |
| 37 |  | Tổng số tiền phải thanh toán |  | `=D35+D36` |  | `=F35+F36` |  |  |  |  |  |  |  |  |  |
| 40 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Tồn cuối kỳ (chuyển sang kỳ sau) | Tỷ giá | Thành tiền |  |  |  |  |  |
| 43 | 1 | 640097897204 | rikkei.tmiv | 2021-03-01 | 851.97 | 954 | `=E43` | `=F43-G43` |  | 0 |  |  |  |  |  |
| 44 |  | Tổng |  |  |  |  |  |  |  | `=sum(J43)` |  |  |  |  |  |
| 45 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G44*0.1` |  |  | `=J44*0.1` |  |  |  |  |  |
| 46 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=G44+G45` |  |  | `=J44+J45` |  |  |  |  |  |
| 50 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 53 | 1 | 338122247147 | 2021-03-01 | 78.94 | 23165 | `=D53*E53` |  |  |  |  |  |  |  |  |  |
| 54 |  | Tổng cộng |  | `=sum(D53)` |  | `=sum(F53)` |  |  |  |  |  |  |  |  |  |
| 55 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D54*0.1` |  | `=F54*0.1` |  |  |  |  |  |  |  |  |  |
| 56 |  | Tổng số tiền phải thanh toán |  | `=D54+D55` |  | `=F54+F55` |  |  |  |  |  |  |  |  |  |
| 60 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 | STT | Số tài khoản | Tên Tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Sử dụng trong kỳ | Còn lại phải thanh toán | Tỷ giá | Thành tiền |  |  |  |  |  |
| 63 | 1 | 640097897204 | rikkei.tmiv | 2021-04-01 | `=14.72+1276.26` | `=H43` | `=E63` | `=F63-G63` | 23150 | `=round(-H63*I63,0)` |  |  |  |  |  |
| 64 |  | Tổng |  |  |  |  |  | `=-H63` |  | `= sum(J63)` |  |  |  |  |  |
| 65 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  |  |  |  | `=H64*0.1` |  | `=J64*0.1` |  |  |  |  |  |
| 66 |  | Tổng số tiền phải thanh toán |  |  |  |  |  | `=H64+H65` |  | `=J64+J65` |  |  |  |  |  |
| 70 | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |
| 73 | 1 | 338122247147 | 2021-04-01 | 72.03 | 23150 | `=round(D73*E73,0)` |  |  |  |  |  |  |  |  |  |
| 74 |  | Tổng cộng |  | `=sum(D73)` |  | `=sum(F73)` |  |  |  |  |  |  |  |  |  |
| 75 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D74*0.1` |  | `=F74*0.1` |  |  |  |  |  |  |  |  |  |
| 76 |  | Tổng số tiền phải thanh toán |  | `=D74+D75` |  | `=F74+F75` |  |  |  |  |  |  |  |  |  |
| 80 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ RIKKEISOFT |  |  |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 83 | 1 | 338122247147 | 2021-05-01 | 73.83 | 23145 | `=round(D83*E83,0)` |  | 1 | 640097897204 | 2021-05-01 | `=1918.32+31.09` | 23145 | `=round(K83*L83,0)` |  |  |
| 84 |  | Tổng cộng |  | `=sum(D83)` |  | `=sum(F83)` |  |  | Tổng cộng |  | `=sum(K83)` |  | `=sum(M83)` |  |  |
| 85 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D84*0.1` |  | `=F84*0.1` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K84*0.1` |  | `=M84*0.1` |  |  |
| 86 |  | Tổng số tiền phải thanh toán |  | `=D84+D85` | 23145 | `=F84+F85` |  |  | Tổng số tiền phải thanh toán |  | `=K84+K85` | 23145 | `=M84+M85` |  |  |
| 89 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 91 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 92 | 1 | 338122247147 | 2021-06-01 | 71.89 | 23130 | `=round(D92*E92,0)` |  | 1 | 640097897204 | 2021-06-01 | 1749.36 | 23130 | `=round(K92*L92,0)` |  |  |
| 93 |  | Tổng cộng |  | `=sum(D92)` |  | `=sum(F92)` |  |  | Tổng cộng |  | `=sum(K92)` |  | `=sum(M92)` |  |  |
| 94 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D93*0.1` |  | 166281 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K93*0.1` |  | 4046269 | 4046270 |  |
| 95 |  | Tổng số tiền phải thanh toán |  | `=D93+D94` | 23130 | `=F93+F94` |  |  | Tổng số tiền phải thanh toán |  | `=K93+K94` | 23130 | `=M93+M94` |  |  |
| 100 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 103 | 1 | 338122247147 | 2021-07-01 | 10.83 | 23050 | `=round(D103*E103,0)` |  | 1 | 640097897204 | 2021-07-01 | `=1595.48+31.2` | 23050 | `=round(K103*L103,0)` |  |  |
| 104 |  | Tổng cộng |  | `=sum(D103)` |  | `=sum(F103)` |  |  | Tổng cộng |  | `=sum(K103)` |  | `=sum(M103)` |  |  |
| 105 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D104*0.1` |  | `=F104*0.1` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K104*0.08` |  | `=M104*0.08` |  |  |
| 106 |  | Tổng số tiền phải thanh toán |  | `=D104+D105` | 23050 | `=F104+F105` |  |  | Tổng số tiền phải thanh toán |  | `=K104+K105` | 23050 | `=M104+M105` |  |  |
| 110 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 112 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền | 40464020.8800000027 |  |
| 113 | 1 | 338122247147 | 2021-08-01 | 0.2 | 22880 | `=round(D113*E113,0)` |  | 1 | 640097897204 | 2021-08-01 | `=1606.48+31.05` | 22880 | `=round(K113*L113,0)` |  |  |
| 114 |  | Tổng cộng |  | `=sum(D113)` |  | `=sum(F113)` |  |  | Tổng cộng |  | `=sum(K113)` |  | `=sum(M113)` |  |  |
| 115 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D114*0.1` |  | `=F114*0.1` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K114*0.08` |  | `=M114*0.08` |  |  |
| 116 |  | Tổng số tiền phải thanh toán |  | `=D114+D115` | 22880 | `=F114+F115` |  |  | Tổng số tiền phải thanh toán |  | `=K114+K115` | 22880 | `=M114+M115` | 40464020.8800000027 | 40464020.8800000027 |
| 120 |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 121 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 122 |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 123 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | 1 | 640097897204 | 2021-09-01 | `=1560.98+30.09` | 22840 | `=round(K123*L123,0)` |  |  |
| 124 | 1 | 338122247147 | 2021-09-01 | 0.18 | 22840 | `=round(D124*E124,0)` |  |  | Tổng cộng |  | `=sum(K123)` |  | `=sum(M123)` |  |  |
| 125 |  | Tổng cộng |  | `=sum(D124)` |  | `=sum(F124)` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K124*0.08` |  | `=M124*0.08` |  |  |
| 126 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D125*0.1` |  | `=F125*0.1` |  |  | Tổng số tiền phải thanh toán |  | `=K124+K125` | 22840 | `=M124+M125` |  |  |
| 127 |  | Tổng số tiền phải thanh toán |  | `=D125+D126` | 22840 | `=F125+F126` |  |  |  |  |  |  |  |  |  |
| 130 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 133 | 1 | 338122247147 | 2021-10-01 | 0.2 | 22850 | `=round(D133*E133,0)` |  | 1 | 640097897204 | 2021-10-01 | `=1975.08+31.12` | 22850 | `=round(K133*L133,0)` |  |  |
| 134 |  | Tổng cộng |  | `=sum(D133)` |  | `=sum(F133)` |  |  | Tổng cộng |  | `=sum(K133)` |  | `=sum(M133)` |  |  |
| 135 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D134*0.1` |  | `=F134*0.1` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=K134*0.08` |  | `=M134*0.08` |  |  |
| 136 |  | Tổng số tiền phải thanh toán |  | `=D134+D135` | 22850 | `=F134+F135` |  |  | Tổng số tiền phải thanh toán |  | `=K134+K135` | 22850 | `=M134+M135` | 49509003.6000000015 |  |
| 139 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 141 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 142 | 1 | 338122247147 | 2021-11-01 | 0.19 | 22800 | `=round(D142*E142,0)` |  | 1 | 640097897204 | 2021-11-01 | `=4289.22+30.42` | 22800 | `=round(K142*L142,0)` |  |  |
| 143 |  | Tổng cộng |  | `=sum(D142)` |  | `=sum(F142)` |  |  | Tổng cộng |  | `=sum(K142)` |  | `=sum(M142)` |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D143*0.1` |  | `=F143*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K143*0.08` |  | `=M143*0.08` |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=D143+D144` | 22800 | `=F143+F144` |  |  | Tổng số tiền phải thanh toán |  | `=K143+K144` | 22800 | `=M143+M144` | 106366815.3599999994 |  |
| 149 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 152 | 1 | 338122247147 | 2021-12-01 | 0.02 | 22920 | `=round(D152*E152,0)` |  | 1 | 640097897204 | 2021-12-01 | 4351.6 | 22920 | `=round(K152*L152,0)` |  |  |
| 153 |  | Tổng cộng |  | `=sum(D152)` |  | `=sum(F152)` |  |  | Tổng cộng |  | `=sum(K152)` |  | `=sum(M152)` |  |  |
| 154 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D153*0.1` |  | `=F153*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K153*0.08` |  | `=M153*0.08` |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=D153+D154` | 22920 | `=F153+F154` |  |  | Tổng số tiền phải thanh toán |  | `=K153+K154` | 22920 | `=M153+M154` | 107717765.7600000054 |  |
| 159 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 161 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 162 | 1 | 338122247147 | 2022-01-01 | 0.03 | 22780 | `=round(D162*E162,0)` |  | 1 | 640097897204 | 2022-01-01 | `=2715.87+31.04` | 22780 | `=round(K162*L162,0)` |  |  |
| 163 |  | Tổng cộng |  | `=sum(D162)` |  | `=sum(F162)` |  |  | Tổng cộng |  | `=sum(K162)` |  | `=sum(M162)` |  |  |
| 164 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D163*0.1` |  | `=F163*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K163*0.08` |  | `=M163*0.08` |  |  |
| 165 |  | Tổng số tiền phải thanh toán |  | `=D163+D164` | 22780 | `=F163+F164` |  |  | Tổng số tiền phải thanh toán |  | `=K163+K164` | 22780 | `=M163+M164` | 67580578.799999997 |  |
| 169 |  |  |  |  | `=4418.46+31.29` |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 171 |  |  |  |  | `=E169-K152` |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 172 |  |  |  |  |  |  |  | 1 | 640097897204 | 12/2021 (bổ sung) | 98.15 | 22920 | `=round(K172*L172,0)` |  |  |
| 173 |  |  |  |  |  |  |  |  | Tổng cộng |  | `=sum(K172)` |  | `=sum(M172)` |  |  |
| 174 |  |  |  |  |  |  |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K173*0.08` |  | `=M173*0.08` |  |  |
| 175 |  |  |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=K173+K174` | 22920 | `=M173+M174` | 2429565.8399999999 |  |
| 179 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 181 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 182 | 1 | 338122247147 | 2022-02-01 | 0.06 | 22950 | `=round(D182*E182,0)` |  | 1 | 640097897204 | 2022-02-01 | `=1686.09+28.02` | 22950 | `=round(K182*L182,0)` |  |  |
| 183 |  | Tổng cộng |  | `=sum(D182)` |  | `=sum(F182)` |  |  | Tổng cộng |  | `=sum(K182)` |  | `=sum(M182)` |  |  |
| 184 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D183*0.1` |  | `=F183*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K183*0.08` |  | `=M183*0.08` |  |  |
| 185 |  | Tổng số tiền phải thanh toán |  | `=D183+D184` | 22950 | `=F183+F184` |  |  | Tổng số tiền phải thanh toán |  | `=K183+K184` | 22950 | `=M183+M184` |  |  |
| 186 |  |  |  |  |  |  |  |  |  |  |  |  | 42485931 |  |  |
| 189 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 191 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 192 | 1 | 338122247147 | 2022-03-01 |  | 22980 | `=round(D192*E192,0)` |  | 1 | 640097897204 | 2022-03-01 | 1894.28 | 22980 | `=round(K192*L192,0)` |  |  |
| 193 |  | Tổng cộng |  | `=sum(D192)` |  | `=sum(F192)` |  |  | Tổng cộng |  | `=sum(K192)` |  | `=sum(M192)` |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D193*0.1` |  | `=F193*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K193*0.08` |  | `=M193*0.08` |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=D193+D194` | 22980 | `=F193+F194` |  |  | Tổng số tiền phải thanh toán |  | `=K193+K194` | 22980 | `=M193+M194` |  |  |
| 196 |  |  |  |  |  |  |  |  |  |  |  |  | 47012998.3200000003 |  |  |
| 199 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 202 | 1 | 338122247147 | 2022-04-01 | 0.08 | 23095 | `=round(D202*E202,0)` |  | 1 | 640097897204 | 2022-04-01 | 1834.31 | 23095 | `=round(K202*L202,0)` |  |  |
| 203 |  | Tổng cộng |  | `=sum(D202)` |  | `=sum(F202)` |  |  | Tổng cộng |  | `=sum(K202)` |  | `=sum(M202)` |  |  |
| 204 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D203*0.1` |  | `=F203*0.1` |  | Thuế nhà thầu (Bên CloudAZ đóng hộ) |  |  | `=K203*0.08` |  | `=M203*0.08` |  |  |
| 205 |  | Tổng số tiền phải thanh toán |  | `=D203+D204` | 23095 | `=F203+F204` |  |  | Tổng số tiền phải thanh toán |  | `=K203+K204` | 23095 | `=M203+M204` |  |  |
| 206 |  |  |  |  |  |  |  |  |  |  |  |  | 45752460.1199999973 |  |  |
| 207 |  |  |  | T8/2021 - T4/2022 |  | 24151 |  |  |  |  |  |  |  |  |  |
| 212 | TỔNG HỢP CHI PHÍ DILIGO |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ TOKIO |  |  |  |  |  |  |  |

> *Đã bỏ qua 78 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (244 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})` | 16 | `D26` |
| D | `=D{r}*0.1` | 16 | `D27` |
| D | `=D{r}+D{r}` | 16 | `D28` |
| D | `=sum(D{r}:D{r})` | 1 | `D6` |
| E | `=E{r}` | 2 | `E6` |
| E | `=14.72+1276.26` | 1 | `E63` |
| E | `=4418.46+31.29` | 1 | `E169` |
| E | `=E{r}-K{r}` | 1 | `E171` |
| F | `=sum(F{r})` | 16 | `F26` |
| F | `=F{r}+F{r}` | 16 | `F28` |
| F | `=F{r}*0.1` | 15 | `F27` |
| F | `=round(D{r}*E{r},0)` | 13 | `F73` |
| F | `=D{r}*E{r}` | 3 | `F25` |
| F | `=F{r}` | 2 | `F6` |
| F | `=E{r}-D{r}` | 1 | `F4` |
| F | `=H{r}` | 1 | `F63` |
| G | `=E{r}` | 2 | `G43` |
| G | `=-E{r}` | 1 | `G15` |
| G | `=G{r}*0.1` | 1 | `G45` |
| G | `=G{r}+G{r}` | 1 | `G46` |
| H | `=-H{r}` | 2 | `H16` |
| H | `=F{r}-G{r}` | 2 | `H43` |
| H | `=F{r}+G{r}` | 1 | `H15` |
| H | `=-H{r}*0.1` | 1 | `H17` |
| H | `=sum(H{r}:H{r})` | 1 | `H18` |
| H | `=H{r}*0.1` | 1 | `H65` |
| H | `=H{r}+H{r}` | 1 | `H66` |
| J | `=J{r}+J{r}` | 3 | `J18` |
| J | `=J{r}*0.1` | 2 | `J45` |
| J | `=-H{r}*I{r}` | 1 | `J15` |
| J | `=J{r}` | 1 | `J16` |
| J | `=H{r}*I{r}` | 1 | `J17` |
| J | `=sum(J{r})` | 1 | `J44` |
| J | `=round(-H{r}*I{r},0)` | 1 | `J63` |
| J | `= sum(J{r})` | 1 | `J64` |
| K | `=sum(K{r})` | 13 | `K84` |
| K | `=K{r}+K{r}` | 13 | `K86` |
| K | `=K{r}*0.08` | 11 | `K105` |
| K | `=K{r}*0.1` | 2 | `K85` |
| K | `=1918.32+31.09` | 1 | `K83` |
| K | `=1595.48+31.2` | 1 | `K103` |
| K | `=1606.48+31.05` | 1 | `K113` |
| K | `=1560.98+30.09` | 1 | `K123` |
| K | `=1975.08+31.12` | 1 | `K133` |
| K | `=4289.22+30.42` | 1 | `K142` |
| K | `=2715.87+31.04` | 1 | `K162` |
| K | `=1686.09+28.02` | 1 | `K182` |
| M | `=round(K{r}*L{r},0)` | 13 | `M83` |
| M | `=sum(M{r})` | 13 | `M84` |
| M | `=M{r}+M{r}` | 13 | `M86` |
| M | `=M{r}*0.08` | 11 | `M105` |
| M | `=M{r}*0.1` | 1 | `M85` |
