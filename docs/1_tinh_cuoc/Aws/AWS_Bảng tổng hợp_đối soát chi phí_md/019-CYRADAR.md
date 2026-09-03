# CYRADAR

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `CYRADAR`  
> **Vùng dữ liệu:** 700 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 3 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 5 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 6 | 1 | 197283843341 | 2020-04-01 | 948.75 | 23600 | `=D6*E6` |  |  |  |  |
| 7 |  | Tổng cộng |  | `=D6` |  | `=F6` |  |  |  |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |  |  |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` |  | `=F7+F8` |  |  |  |  |
| 11 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |
| 12 |  |  |  | Người lập  |  |  |  |  |  |  |
| 16 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 19 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 21 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 22 | 1 | 197283843341 | 01/05/2020 - 25/05/2020 | 2325.39 | 23350 | `=D22*E22` |  |  |  |  |
| 23 | 2 | Saving plan  | 25/05/2020 - 31/05/2020 | 112.7 | 23350 | `=D23*E23` |  |  |  |  |
| 24 |  | Tổng cộng |  | `=sum(D22:D23)` |  | `=sum(F22:F23)` |  |  |  |  |
| 25 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D24*0.1` |  | `=F24*0.1` |  |  |  |  |
| 26 |  | Tổng số tiền phải thanh toán |  | `=D24+D25` |  | `=F24+F25` |  |  |  |  |
| 28 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |
| 29 |  |  |  | Người lập  |  |  |  |  |  |  |
| 33 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 36 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 38 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 39 | 1 | 197283843341 | 2020-06-01 | 1205.34 | 23290 | `=D39*E39` |  |  |  |  |
| 40 | 2 | Saving plan  | 2020-06-01 | 504 | 23290 | `=D40*E40` |  |  |  |  |
| 41 |  | Tổng cộng |  | `=sum(D39:D40)` |  | `=sum(F39:F40)` |  |  |  |  |
| 42 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D41*0.1` |  | `=F41*0.1` |  |  |  |  |
| 43 |  | Tổng số tiền phải thanh toán |  | `=D41+D42` |  | `=F41+F42` |  |  |  |  |
| 45 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |
| 46 |  |  |  | Người lập  |  |  |  |  |  |  |
| 50 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 53 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 55 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 56 | 1 | 197283843341 | 2020-07-01 |  | 23290 | `=D56*E56` |  |  |  |  |
| 57 | 2 | Saving plan  | 2020-07-02 |  | 23290 | `=D57*E57` |  |  |  |  |
| 58 |  | Tổng cộng |  | `=sum(D56:D57)` |  | `=sum(F56:F57)` |  |  |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D58*0.1` |  | `=F58*0.1` |  |  |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=D58+D59` |  | `=F58+F59` |  |  |  |  |
| 62 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |
| 63 |  |  |  | Người lập  |  |  |  |  |  |  |
| 67 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |
| 70 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 72 | STT | Tên tài khoản | Số tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang tháng sau (Credit còn lại) |  |  |  |
| 73 | 1 | Thanh Dancer | 197283843341 | 2020-07-01 | 1929.91 | 5000 | `=F74-E74` |  |  |  |
| 74 |  | Tổng |  |  | `=sum(E73)` | `=F73` | `=G73` |  |  |  |
| 75 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | 0 |  |  |  |
| 76 |  | Tổng số tiền phải thanh toán |  |  |  |  | 0 |  |  |  |
| 78 |  |  |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 79 |  |  |  |  |  | Người lập  |  |  |  |  |
| 83 |  |  |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 86 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 88 | STT | Tên tài khoản | Số tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang tháng sau (Credit còn lại) |  |  |  |
| 89 | 1 | Thanh Dancer | 197283843341 | 2020-08-01 | 1817.36 | `=G74` | `=F90-E90` |  |  |  |
| 90 |  | Tổng |  |  | `=sum(E89)` | `=F89` | `=G89` |  |  |  |
| 91 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | 0 |  |  |  |
| 92 |  | Tổng số tiền phải thanh toán |  |  |  |  | 0 |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 98 | STT | Tên tài khoản | Số tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang tháng sau (Credit còn lại) | Tỷ giá | Thành tiền |  |
| 99 | 1 | Thanh Dancer | 197283843341 | 2020-09-01 | 1925.69 | `=G89` | `=F99-E99` | 23280 | `=-G99*H99` | `=504*23280*110%` |
| 100 |  | Tổng |  |  |  |  | `=-G99` |  | `=I99` | `=I102-J99` |
| 101 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G100*0.1` |  | `=I100*0.1` |  |
| 102 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=sum(G100:G101)` |  | `=sum(I100:I101)` |  |
| 107 | TỔNG HỢP CHI PHÍ CYRADAR QUÝ III/2020 |  |  |  |  |  |  |  |  |  |
| 109 | STT | Tên tài khoản | Số tài khoản | Tháng | Billing AWS (USD) | Credit đầu kỳ | Tồn cuối kỳ chuyển sang tháng sau (Credit còn lại) | Tỷ giá | Thành tiền |  |
| 110 | 1 | Thanh Dancer | 197283843341 | 2020-07-01 | 1929.91 | 5000 | `=F110-E110` |  |  |  |
| 111 | 2 | Thanh Dancer | 197283843341 | 2020-08-01 | 1817.36 | `=G110` | `=F111-E111` |  |  |  |
| 112 | 3 | Thanh Dancer | 197283843341 | 2020-09-01 | 1925.69 | `=G111` | `=F112-E112` | 23280 | `=-G112*H112` |  |
| 113 |  | Tổng |  |  |  |  | `=-G112` |  | `=I112` |  |
| 114 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  |  |  | `=G113*0.1` |  | `=I113*0.1` |  |
| 115 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=sum(G113:G114)` |  | `=sum(I113:I114)` |  |
| 119 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 121 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 122 | 1 | 197283843341 | 2020-10-01 | `=2331.67-D123` | 23270 | `=D122*E122` | `=D122*23270*110%` |  |  |  |
| 123 | 2 | Saving plan  | 2020-10-01 | 520.8 | 23270 | `=D123*E123` | `=D123*23270*110%` |  |  |  |
| 124 |  | Tổng cộng |  | `=sum(D122:D123)` |  | `=sum(F122:F123)` |  |  |  |  |
| 125 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D124*0.1` |  | `=F124*0.1` |  |  |  |  |
| 126 |  | Tổng số tiền phải thanh toán |  | `=D124+D125` |  | `=F124+F125` |  |  |  |  |
| 129 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 132 | 1 | 197283843341 | 2020-11-01 | `=2407.93-D133` | 23235 | `=D132*E132` | `=D132*23235*110%` |  |  |  |
| 133 | 2 | Saving plan  | 2020-11-01 | 504 | 23235 | `=D133*E133` | `=D133*23235*110%` |  |  |  |
| 134 |  | Tổng cộng |  | `=sum(D132:D133)` |  | `=sum(F132:F133)` |  |  |  |  |
| 135 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D134*0.1` |  | `=F134*0.1` |  |  |  |  |
| 136 |  | Tổng số tiền phải thanh toán |  | `=D134+D135` |  | `=F134+F135` |  |  |  |  |
| 140 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 142 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 143 | 1 | 197283843341 | 2020-12-01 | `=2304.79-D144` | 23185 | `=D143*E143` |  |  |  |  |
| 144 | 2 | Saving plan  | 2020-12-01 | 520.8 | 23185 | `=D144*E144` |  |  |  |  |
| 145 |  | Tổng cộng |  | `=sum(D143:D144)` |  | `=sum(F143:F144)` |  |  |  |  |
| 146 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D145*0.1` | 23185 | 5343679 |  |  |  |  |
| 147 |  | Tổng số tiền phải thanh toán |  | `=D145+D146` | 23185 | `=F145+F146` |  |  |  |  |
| 151 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 153 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 154 | 1 | 197283843341 | 2021-01-01 | `=2257.23-D155` | 23145 | `=D154*E154` |  |  |  |  |
| 155 | 2 | Saving plan  | 2021-01-01 | 520.8 | 23145 | `=D155*E155` |  |  |  |  |
| 156 |  | Tổng cộng |  | `=sum(D154:D155)` |  | `=sum(F154:F155)` |  |  |  |  |
| 157 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D156*0.1` | 23145 | `=F156*0.1` |  |  |  |  |
| 158 |  | Tổng số tiền phải thanh toán |  | `=D156+D157` | 23145 | `=F156+F157` |  |  |  |  |
| 162 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 165 | 1 | 197283843341 | 2021-02-01 | `=2036.45-D166` | 23095 | `=D165*E165` |  |  |  |  |
| 166 | 2 | Saving plan  | 2021-02-01 | 470.4 | 23095 | `=D166*E166` |  |  |  |  |
| 167 |  | Tổng cộng |  | `=sum(D165:D166)` |  | `=sum(F165:F166)` |  |  |  |  |
| 168 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D167*0.1` | 23095 | `=F167*0.1` |  |  |  |  |
| 169 |  | Tổng số tiền phải thanh toán |  | `=D167+D168` | 23095 | `=F167+F168` |  |  |  |  |
| 172 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 174 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 175 | 1 | 197283843341 | 2021-03-01 | `=2258.55-D176` | 23165 | `=D175*E175` |  |  |  |  |
| 176 | 2 | Saving plan  | 2021-03-01 | 520.8 | 23165 | `=D176*E176` |  |  |  |  |
| 177 |  | Tổng cộng |  | `=sum(D175:D176)` |  | `=sum(F175:F176)` |  |  |  |  |
| 178 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D177*0.1` | 23165 | `=F177*0.1` |  |  |  |  |
| 179 |  | Tổng số tiền phải thanh toán |  | `=D177+D178` | 23165 | `=F177+F178` |  |  |  |  |
| 182 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 184 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 185 | 1 | 197283843341 | 2021-04-01 | `=2798.67-D186` | 23150 | `=D185*E185` |  |  |  |  |
| 186 | 2 | Saving plan  | 2021-04-01 | 504 | 23150 | `=D186*E186` |  |  |  |  |
| 187 |  | Tổng cộng |  | `=sum(D185:D186)` |  | `=sum(F185:F186)` |  |  |  |  |
| 188 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D187*0.1` | 23150 | `=F187*0.1` |  |  |  |  |
| 189 |  | Tổng số tiền phải thanh toán |  | `=D187+D188` | 23150 | `=F187+F188` |  |  |  |  |
| 193 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 195 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 196 | 1 | 197283843341 | 2021-05-01 | `=2953.06-D197` | 23145 | `=round(D196*E196,0)` |  |  |  |  |
| 197 | 2 | Saving plan  | 2021-05-01 | 1193.91 | 23145 | `=round(D197*E197,0)` |  |  |  |  |
| 198 |  | Tổng cộng |  | `=sum(D196:D197)` |  | `=sum(F196:F197)` |  |  |  |  |
| 199 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D198*0.1` | 23145 | `=F198*0.1` |  |  |  |  |
| 200 |  | Tổng số tiền phải thanh toán |  | `=D198+D199` | 23145 | `=F198+F199` |  |  |  |  |
| 204 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 206 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 207 | 1 | 197283843341 | 2021-06-01 | `=3477.03-D208` | 23130 | `=round(D207*E207,0)` |  |  |  |  |
| 208 | 2 | Saving plan  | 2021-06-01 | 758.11 | 23130 | `=round(D208*E208,0)` |  |  |  |  |
| 209 |  | Tổng cộng |  | `=sum(D207:D208)` |  | `=sum(F207:F208)` |  |  |  |  |
| 210 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D209*0.1` | 23130 | `=F209*0.1` |  |  |  |  |
| 211 |  | Tổng số tiền phải thanh toán |  | `=D209+D210` | 23130 | `=F209+F210` |  |  |  |  |
| 216 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 218 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 219 | 1 | 197283843341 | 2021-07-01 | `=3695.25-D220` | 23050 | `=round(D219*E219,0)` |  |  |  |  |
| 220 | 2 | Saving plan  | 2021-07-01 | 1200.07 | 23050 | `=round(D220*E220,0)` |  |  |  |  |
| 221 |  | Discount (2%) |  | `=sum(D219:D220)*2%` |  |  |  |  |  |  |
| 222 |  | Tổng cộng |  | `=sum(D219:D220)-D221` | 23050 | `=round(D222*E222,0)` |  |  |  |  |
| 223 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D222*0.08` | 23050 | `=F222*0.08` |  |  |  |  |
| 224 |  | Tổng số tiền phải thanh toán |  | `=D222+D223` | 23050 | `=F222+F223` |  |  |  |  |
| 228 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 230 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 231 | 1 | 197283843341 | 2021-08-01 | `=4031.68-D232` | 22880 | `=round(D231*E231,0)` |  |  |  |  |
| 232 | 2 | Saving plan  | 2021-08-01 | 1200.07 | 22880 | `=round(D232*E232,0)` |  |  |  |  |
| 233 |  | Discount (2%) |  | `=sum(D231:D232)*2%` |  |  |  |  |  |  |
| 234 |  | Tổng cộng |  | `=sum(D231:D232)-D233` | 22880 | `=round(D234*E234,0)` |  |  |  |  |
| 235 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D234*0.08` | 22880 | `=F234*0.08` |  |  |  |  |
| 236 |  | Tổng số tiền phải thanh toán |  | `=D234+D235` | 22880 | `=F234+F235` | 97631937.3599999994 | 97631937.3599999994 |  |  |
| 241 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 243 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 244 | 1 | 197283843341 | 2021-09-01 | `=3615.78-D245` | 22840 | `=round(D244*E244,0)` |  |  |  |  |
| 245 | 2 | Saving plan  | 2021-09-01 | 1161.36 | 22840 | `=round(D245*E245,0)` |  |  |  |  |
| 246 |  | Discount (2%) |  | `=sum(D244:D245)*2%` |  |  |  |  |  |  |
| 247 |  | Tổng cộng |  | `=sum(D244:D245)-D246` | 22840 | `=round(D247*E247,0)` |  |  |  |  |
| 248 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D247*0.08` | 22840 | `=F247*0.08` |  |  |  |  |
| 249 |  | Tổng số tiền phải thanh toán |  | `=D247+D248` | 22840 | `=F247+F248` |  |  |  |  |
| 253 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 255 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 256 | 1 | 197283843341 | 2021-10-01 | `=3899.85-D257` | 22850 | `=round(D256*E256,0)` |  |  |  |  |
| 257 | 2 | Saving plan  | 2021-10-01 | 1200.07 | 22850 | `=round(D257*E257,0)` |  |  |  |  |
| 258 |  | Discount (2%) |  | `=sum(D256:D257)*2%` |  |  |  |  |  |  |
| 259 |  | Tổng cộng |  | `=sum(D256:D257)-D258` | 22850 | `=round(D259*E259,0)` |  |  |  |  |
| 260 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D259*0.08` | 22850 | `=F259*0.08` |  |  |  |  |
| 261 |  | Tổng số tiền phải thanh toán |  | `=D259+D260` | 22850 | `=F259+F260` |  |  |  |  |
| 265 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 267 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 268 | 1 | 197283843341 | 2021-11-01 | `=4651-D269` | 22800 | `=round(D268*E268,0)` |  |  |  |  |
| 269 | 2 | Saving plan  | 2021-11-01 | 1022 | 22800 | `=round(D269*E269,0)` |  |  |  |  |
| 270 |  | Discount (2%) |  | `=sum(D268:D269)*2%` |  |  |  |  |  |  |
| 271 |  | Tổng cộng |  | `=sum(D268:D269)-D270` | 22800 | `=round(D271*E271,0)` |  |  |  |  |
| 272 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D271*0.08` | 22800 | `=F271*0.08` |  |  |  |  |
| 273 |  | Tổng số tiền phải thanh toán |  | `=D271+D272` | 22800 | `=F271+F272` | 112235699.5199999958 |  |  |  |
| 277 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 279 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 280 | 1 | 197283843341 | 2021-12-01 | `=4847.45-D281` | 22920 | `=round(D280*E280,0)` |  |  |  |  |
| 281 | 2 | Saving plan  | 2021-12-01 | 1200.07 | 22920 | `=round(D281*E281,0)` |  |  |  |  |
| 282 |  | Discount (2%) |  | `=sum(D280:D281)*2%` |  |  |  |  |  |  |
| 283 |  | Tổng cộng |  | `=sum(D280:D281)-D282` | 22920 | `=round(D283*E283,0)` |  |  |  |  |
| 284 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D283*0.08` | 22920 | `=F283*0.08` |  |  |  |  |
| 285 |  | Tổng số tiền phải thanh toán |  | `=D283+D284` | 22920 | `=F283+F284` |  |  |  |  |
| 289 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 291 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 292 | 1 | 197283843341 | 2022-01-01 | `=4919.37-D293` | 22780 | `=round(D292*E292,0)` |  |  |  |  |
| 293 | 2 | Saving plan  | 2022-01-01 | 1200.07 | 22780 | `=round(D293*E293,0)` |  |  |  |  |
| 294 |  | Discount (2%) |  | `=sum(D292:D293)*2%` |  |  |  |  |  |  |
| 295 |  | Tổng cộng |  | `=sum(D292:D293)-D294` | 22780 | `=round(D295*E295,0)` |  |  |  |  |
| 296 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D295*0.08` | 22780 | `=F295*0.08` |  |  |  |  |
| 297 |  | Tổng số tiền phải thanh toán |  | `=D295+D296` | 22780 | `=F295+F296` | 118607742.7199999988 |  |  |  |
| 301 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 303 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 304 | 1 | 197283843341 | 2022-02-01 | `=4610.54-D305` | 22950 | `=round(D304*E304,0)` |  |  |  |  |
| 305 | 2 | Saving plan  | 2022-02-01 | 1083.94 | 22950 | `=round(D305*E305,0)` |  |  |  |  |
| 306 |  | Discount (2%) |  | `=sum(D304:D305)*2%` |  |  |  |  |  |  |
| 307 |  | Tổng cộng |  | `=sum(D304:D305)-D306` | 22950 | `=round(D307*E307,0)` |  |  |  |  |
| 308 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D307*0.08` | 22950 | `=F307*0.08` |  |  |  |  |
| 309 |  | Tổng số tiền phải thanh toán |  | `=D307+D308` | 22950 | `=F307+F308` | 111991307.400000006 |  |  |  |
| 313 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 315 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 316 | 1 | 197283843341 | 2022-03-01 | `=4586.11+625.39-D317` | 22980 | `=round(D316*E316,0)` |  |  |  |  |
| 317 | 2 | Saving plan  | 2022-03-01 | 1200.07 | 22980 | `=round(D317*E317,0)` |  |  |  |  |
| 318 |  | Discount (2%) |  | `=sum(D316:D317)*2%` |  |  |  |  |  |  |
| 319 |  | Tổng cộng |  | `=sum(D316:D317)-D318` | 22980 | `=round(D319*E319,0)` |  |  |  |  |
| 320 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D319*0.08` | 22980 | `=F319*0.08` |  |  |  |  |
| 321 |  | Tổng số tiền phải thanh toán |  | `=D319+D320` | 22980 | `=F319+F320` | 126754270.200000003 |  |  |  |
| 324 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 326 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 327 | 1 | 197283843341 | 2022-04-01 | `=4842.1-D328` | 23095 | `=round(D327*E327,0)` |  |  |  |  |
| 328 | 2 | Saving plan  | 2022-04-01 | 1022 | 23095 | `=round(D328*E328,0)` |  |  |  |  |
| 329 |  | Discount (2%) |  | `=sum(D327:D328)*2%` |  |  |  |  |  |  |
| 330 |  | Tổng cộng |  | `=sum(D327:D328)-D329` | 23095 | `=round(D330*E330,0)` |  |  |  |  |
| 331 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D330*0.08` | 23095 | `=F330*0.08` |  |  |  |  |
| 332 |  | Tổng số tiền phải thanh toán |  | `=D330+D331` | 23095 | `=F330+F331` | 118359072.7199999988 |  |  |  |
| 335 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 337 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 338 | 1 | 197283843341 | 2022-05-01 | 3514.49 |  |  |  |  |  |  |
| 339 | 2 | Saving plan  | 2022-05-01 | 1200.07 |  |  |  |  |  |  |
| 340 |  | Discount (2%) |  | `=sum(D338:D339)*2%` |  |  |  |  |  |  |
| 341 |  | Tổng cộng |  | `=sum(D338:D339)-D340` |  |  |  |  |  |  |
| 342 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D341*0.08` |  |  |  |  |  |  |
| 343 |  | Tổng số tiền phải thanh toán |  | `=round(D341+D342,2)` | 23330 | `=D343*E343` | 116414133.700000003 |  |  |  |
| 346 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 348 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 349 | 1 | 197283843341 | 2022-06-01 | `=3851.02-D350` |  |  | 3851.02 |  |  |  |
| 350 | 2 | Saving plan  | 2022-06-01 | 403.25 |  |  |  |  |  |  |
| 351 |  | Discount (2%) |  | `=sum(D349:D350)*2%` |  |  |  |  |  |  |
| 352 |  | Tổng cộng |  | `=sum(D349:D350)-D351` |  |  |  |  |  |  |
| 353 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D352*0.08` |  |  |  |  |  |  |
| 354 |  | Tổng số tiền phải thanh toán |  | `=round(D352+D353,2)` | 23415 | `=D354*E354` | 95437666.799999997 |  |  |  |
| 357 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 359 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 360 | 1 | 197283843341 | 2022-07-01 | 4489.23 |  |  |  |  |  |  |
| 361 | 2 | Saving plan  | 2022-07-01 | 0 |  |  |  |  |  |  |
| 362 |  | Discount (2%) |  | `=sum(D360:D361)*2%` |  |  |  |  |  |  |
| 363 |  | Tổng cộng |  | `=sum(D360:D361)-D362` |  |  |  |  |  |  |
| 364 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D363*0.08` |  |  |  |  |  |  |
| 365 |  | Tổng số tiền phải thanh toán |  | `=round(D363+D364,2)` | 23480 | `=D365*E365` |  |  |  |  |
| 369 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 371 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 372 | 1 | 197283843341 | 2022-08-01 | 4894.15 |  |  |  |  |  |  |
| 373 | 2 | Saving plan  | 2022-08-01 | 0 |  |  |  |  |  |  |
| 374 |  | Discount (2%) |  | `=sum(D372:D373)*2%` |  |  |  |  |  |  |
| 375 |  | Tổng cộng |  | `=sum(D372:D373)-D374` |  |  |  |  |  |  |
| 376 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D375*0.08` |  |  |  |  |  |  |
| 377 |  | Tổng số tiền phải thanh toán |  | `=round(D375+D376,2)` | 23600 | `=D377*E377` |  |  |  |  |
| 380 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 382 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 383 | 1 | 197283843341 | 2022-09-01 | 4669.44 |  |  |  |  |  |  |
| 384 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 385 |  | Discount (2%) |  | `=sum(D383:D384)*2%` |  |  |  |  |  |  |
| 386 |  | Tổng cộng |  | `=sum(D383:D384)-D385` |  |  |  |  |  |  |
| 387 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D386*0.08` |  |  |  |  |  |  |
| 388 |  | Tổng số tiền phải thanh toán |  | `=round(D386+D387,2)` | 24010 | `=D388*E388` |  |  |  |  |
| 391 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 393 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 394 | 1 | 197283843341 | 2022-10-01 | 4930.8 |  |  |  |  |  |  |
| 395 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 396 |  | Discount (2%) |  | `=sum(D394:D395)*2%` |  |  |  |  |  |  |
| 397 |  | Tổng cộng |  | `=sum(D394:D395)-D396` |  |  |  |  |  |  |
| 398 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D397*0.08` |  |  |  |  |  |  |
| 399 |  | Tổng số tiền phải thanh toán |  | `=round(D397+D398,2)` | 24877 | `=D399*E399` |  |  |  |  |
| 402 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 404 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 405 | 1 | 197283843341 | 2022-11-01 | 5294.93 |  |  |  |  |  |  |
| 406 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 407 |  | Discount (2%) |  | `=sum(D405:D406)*2%` |  |  |  |  |  |  |
| 408 |  | Tổng cộng |  | `=sum(D405:D406)-D407` |  |  |  |  |  |  |
| 409 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D408*0.08` |  |  |  |  |  |  |
| 410 |  | Tổng số tiền phải thanh toán |  | `=round(D408+D409,2)` | 24795 | `=D410*E410` |  |  |  |  |
| 413 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 415 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá BIDV 09/01/2023 | Thành tiền |  |  |  |  |
| 416 | 1 | 197283843341 | 2022-12-01 | 4758.8 |  |  |  |  |  |  |
| 417 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 418 |  | Discount (2%) |  | `=sum(D416:D417)*2%` |  |  |  |  |  |  |
| 419 |  | Tổng cộng |  | `=sum(D416:D417)-D418` |  |  |  |  |  |  |
| 420 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D419*0.08` |  |  |  |  |  |  |
| 421 |  | Tổng số tiền phải thanh toán |  | `=round(D419+D420,2)` | 23620 | `=D421*E421` |  |  |  |  |
| 424 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 426 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 427 | 1 | 197283843341 | 2023-01-01 | 4554 |  |  |  |  |  |  |
| 428 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 429 |  | Discount (2%) |  | `=sum(D427:D428)*2%` |  |  |  |  |  |  |
| 430 |  | Tổng cộng |  | `=sum(D427:D428)-D429` |  |  |  |  |  |  |
| 431 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D430*0.08` |  |  |  |  |  |  |
| 432 |  | Tổng số tiền phải thanh toán |  | `=round(D430+D431,2)` | 23755 | `=D432*E432` |  |  |  |  |
| 435 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 437 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 438 | 1 | 197283843341 | 2023-02-01 | 4124.71 |  |  |  |  |  |  |
| 439 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 440 |  | Discount (2%) |  | `=sum(D438:D439)*2%` |  |  |  |  |  |  |
| 441 |  | Tổng cộng |  | `=sum(D438:D439)-D440` |  |  |  |  |  |  |
| 442 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D441*0.08` |  |  |  |  |  |  |
| 443 |  | Tổng số tiền phải thanh toán |  | `=round(D441+D442,2)` | 23705 | `=D443*E443` |  |  |  |  |
| 446 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 448 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 449 | 1 | 197283843341 | 2023-03-01 | 4724.38 |  |  |  |  |  |  |
| 450 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 451 |  | Discount (2%) |  | `=sum(D449:D450)*2%` |  |  |  |  |  |  |
| 452 |  | Tổng cộng |  | `=sum(D449:D450)-D451` |  |  |  |  |  |  |
| 453 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D452*0.08` |  |  |  |  |  |  |
| 454 |  | Tổng số tiền phải thanh toán |  | `=round(D452+D453,2)` | 23600 | `=D454*E454` |  |  |  |  |
| 457 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 459 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 460 | 1 | 197283843341 | 2023-04-01 | 4850.77 |  |  |  |  |  |  |
| 461 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 462 |  | Discount (2%) |  | `=sum(D460:D461)*2%` |  |  |  |  |  |  |
| 463 |  | Tổng cộng |  | `=sum(D460:D461)-D462` |  |  |  |  |  |  |
| 464 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D463*0.08` |  |  |  |  |  |  |
| 465 |  | Tổng số tiền phải thanh toán |  | `=round(D463+D464,2)` | 23605 | `=D465*E465` |  |  |  |  |
| 468 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 470 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 471 | 1 | 197283843341 | 2023-05-01 | 2093.2 |  |  |  |  |  |  |
| 472 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 473 |  | Discount (2%) |  | `=sum(D471:D472)*2%` |  |  |  |  |  |  |
| 474 |  | Tổng cộng |  | `=sum(D471:D472)-D473` |  |  |  |  |  |  |
| 475 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D474*0.08` |  |  |  |  |  |  |
| 476 |  | Tổng số tiền phải thanh toán |  | `=round(D474+D475,2)` | 23656 | `=D476*E476` |  |  |  |  |
| 479 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 481 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 482 | 1 | 197283843341 | 2023-06-01 | 4346.1 |  |  |  |  |  |  |
| 483 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 484 |  | Discount (2%) |  | `=round(sum(D482:D483)*2%,2)` |  |  |  |  |  |  |
| 485 |  | Tổng cộng |  | `=sum(D482:D483)-D484` |  |  |  |  |  |  |
| 486 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D485*0.08` |  |  |  |  |  |  |
| 487 |  | Tổng số tiền phải thanh toán |  | `=round(D485+D486,2)` | 23750 | `=D487*E487` |  |  |  |  |
| 490 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 492 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 493 | 1 | 197283843341 | 2023-07-01 | 3971.39 |  |  |  |  |  |  |
| 494 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 495 |  | Discount (2%) |  | `=round(sum(D493:D494)*2%,2)` |  |  |  |  |  |  |
| 496 |  | Tổng cộng |  | `=sum(D493:D494)-D495` |  |  |  |  |  |  |
| 497 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D496*0.08` |  |  |  |  |  |  |
| 498 |  | Tổng số tiền phải thanh toán |  | `=round(D496+D497,2)` | 23990 | `=D498*E498` |  |  |  |  |
| 502 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 504 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 505 | 1 | 197283843341 | 2023-08-01 | 4072.55 |  |  |  |  |  |  |
| 506 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 507 |  | Discount (2%) |  | `=round(sum(D505:D506)*2%,2)` |  |  |  |  |  |  |
| 508 |  | Tổng cộng |  | `=sum(D505:D506)-D507` |  |  |  |  |  |  |
| 509 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D508*0.08` |  |  |  |  |  |  |
| 510 |  | Tổng số tiền phải thanh toán |  | `=round(D508+D509,2)` | 24245 | `=D510*E510` |  |  |  |  |
| 513 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 515 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 516 | 1 | 197283843341 | 2023-09-01 | 4020.61 |  |  |  |  |  |  |
| 517 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 518 |  | Discount (2%) |  | `=round(sum(D516:D517)*2%,2)` |  |  |  |  |  |  |
| 519 |  | Tổng cộng |  | `=sum(D516:D517)-D518` |  |  |  |  |  |  |
| 520 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D519*0.08` |  |  |  |  |  |  |
| 521 |  | Tổng số tiền phải thanh toán |  | `=round(D519+D520,2)` | 24575 | `=D521*E521` |  |  |  |  |
| 525 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 527 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 528 | 1 | 197283843341 | 2023-10-01 | 3745.89 |  |  |  |  |  |  |
| 529 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 530 |  | Discount (2%) |  | `=round(sum(D528:D529)*2%,2)` |  |  |  |  |  |  |
| 531 |  | Tổng cộng |  | `=sum(D528:D529)-D530` |  |  |  |  |  |  |
| 532 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D531*0.08` |  |  |  |  |  |  |
| 533 |  | Tổng số tiền phải thanh toán |  | `=round(D531+D532,2)` | 24470 | `=D533*E533` |  |  |  |  |
| 537 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 539 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 540 | 1 | 197283843341 | 2023-11-01 | 3676.93 |  |  |  |  |  |  |
| 541 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 542 |  | Discount (2%) |  | `=round(sum(D540:D541)*2%,2)` |  |  |  |  |  |  |
| 543 |  | Tổng cộng |  | `=sum(D540:D541)-D542` |  |  |  |  |  |  |
| 544 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D543*0.08` |  |  |  |  |  |  |
| 545 |  | Tổng số tiền phải thanh toán |  | `=round(D543+D544,2)` | 24435 | `=D545*E545` |  |  |  |  |
| 548 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 550 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 551 | 1 | 197283843341 | 2023-12-01 | 2930.92 |  |  |  |  |  |  |
| 552 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 553 |  | Discount (2%) |  | `=round(sum(D551:D552)*2%,2)` |  |  |  |  |  |  |
| 554 |  | Tổng cộng |  | `=sum(D551:D552)-D553` |  |  |  |  |  |  |
| 555 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D554*8%,2)` |  |  |  |  |  |  |
| 556 |  | Tổng số tiền phải thanh toán |  | `=round(D554+D555,2)` | 24540 | `=D556*E556` |  |  |  |  |
| 560 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 562 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 563 | 1 | 197283843341 | 2024-01-01 | 3219.94 |  |  |  |  |  |  |
| 564 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 565 |  | Discount (2%) |  | `=round(sum(D563:D564)*2%,2)` |  |  |  |  |  |  |
| 566 |  | Tổng cộng |  | `=sum(D563:D564)-D565` |  |  |  |  |  |  |
| 567 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D566*8%,2)` |  |  |  |  |  |  |
| 568 |  | Tổng số tiền phải thanh toán |  | `=round(D566+D567,2)` | 24670 | `=D568*E568` |  |  |  |  |
| 572 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 574 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 575 | 1 | 197283843341 | 2024-02-01 | 3127.16 |  |  |  |  |  |  |
| 576 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 577 |  | Discount (2%) |  | `=round(sum(D575:D576)*2%,2)` |  |  |  |  |  |  |
| 578 |  | Tổng cộng |  | `=sum(D575:D576)-D577` |  |  |  |  |  |  |
| 579 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D578*8%,2)` |  |  |  |  |  |  |
| 580 |  | Tổng số tiền phải thanh toán |  | `=round(D578+D579,2)` | 24855 | `=D580*E580` |  |  |  |  |
| 584 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 586 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 587 | 1 | 197283843341 | 2024-03-01 | 3429.42 |  |  |  |  |  |  |
| 588 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 589 |  | Discount (2%) |  | `=round(sum(D587:D588)*2%,2)` |  |  |  |  |  |  |
| 590 |  | Tổng cộng |  | `=sum(D587:D588)-D589` |  |  |  |  |  |  |
| 591 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D590*8%,2)` |  |  |  |  |  |  |
| 592 |  | Tổng số tiền phải thanh toán |  | `=round(D590+D591,2)` | 25105 | `=D592*E592` |  |  |  |  |
| 596 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 598 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 599 | 1 | 197283843341 | 2024-04-01 | 3314.55 |  |  |  |  |  |  |
| 600 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 601 |  | Discount (2%) |  | `=round(sum(D599:D600)*2%,2)` |  |  |  |  |  |  |
| 602 |  | Tổng cộng |  | `=sum(D599:D600)-D601` |  |  |  |  |  |  |
| 603 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D602*8%,2)` |  |  |  |  |  |  |
| 604 |  | Tổng số tiền phải thanh toán |  | `=round(D602+D603,2)` | 25455 | `=D604*E604` |  |  |  |  |
| 608 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 610 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 611 | 1 | 197283843341 | 2024-05-01 | 3735.92 |  |  |  |  |  |  |
| 612 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 613 |  | Discount (2%) |  | `=round(sum(D611:D612)*2%,2)` |  |  |  |  |  |  |
| 614 |  | Tổng cộng |  | `=sum(D611:D612)-D613` |  |  |  |  |  |  |
| 615 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=round(D614*8%,2)` |  |  |  |  |  |  |
| 616 |  | Tổng số tiền phải thanh toán |  | `=round(D614+D615,2)` | 25454 | `=D616*E616` |  |  |  |  |
| 620 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 622 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 623 | 1 | 197283843341 | 2024-06-01 | 3841.44 |  |  |  |  |  |  |
| 624 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 625 |  | Tổng cộng |  | `=sum(D622:D623)-D624` |  |  |  |  |  |  |
| 626 | Phí dịch vụ |  |  | `=round(D625*8%,2)` |  |  |  |  |  |  |
| 627 | Chiết khấu |  |  | `=round((D626+D625)*2%,2)` |  |  |  |  |  |  |
| 628 | Thành tiền |  |  | `=D625+D626-D627` | 25464 | `=D628*E628` |  |  |  |  |
| 629 | Thuế GTGT |  |  |  |  | `=round(F628*10%,0)` |  |  |  |  |
| 630 | Tổng số tiền phải thanh toán |  |  |  |  | `=F628+F629` |  |  |  |  |
| 634 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 636 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 637 | 1 | 197283843341 | 2024-07-01 | 3750.96 |  |  |  |  |  |  |
| 638 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 639 |  | Tổng cộng |  | `=sum(D636:D637)-D638` |  |  |  |  |  |  |
| 640 | Phí dịch vụ |  |  | `=round(D639*8%,2)` |  |  |  |  |  |  |
| 641 | Chiết khấu |  |  | `=round((D640+D639)*2%,2)` |  |  |  |  |  |  |
| 642 | Thành tiền |  |  | `=D639+D640-D641` | 25190 | `=D642*E642` |  |  |  |  |
| 643 | Thuế GTGT |  |  |  |  | `=round(F642*10%,0)` |  |  |  |  |
| 644 | Tổng số tiền phải thanh toán |  |  |  |  | `=F642+F643` |  |  |  |  |
| 648 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 650 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 651 | 1 | 197283843341 | 2024-08-01 | 3611.5 |  |  |  |  |  |  |
| 652 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 653 |  | Tổng cộng |  | `=sum(D650:D651)-D652` |  |  |  |  |  |  |
| 654 | Phí dịch vụ |  |  | `=round(D653*8%,2)` |  |  |  |  |  |  |
| 655 | Chiết khấu |  |  | `=round((D654+D653)*2%,2)` |  |  |  |  |  |  |
| 656 | Thành tiền |  |  | `=D653+D654-D655` | 24715 | `=D656*E656` |  |  |  |  |
| 657 | Thuế GTGT |  |  |  |  | `=round(F656*10%,0)` |  |  |  |  |
| 658 | Tổng số tiền phải thanh toán |  |  |  |  | `=F656+F657` |  |  |  |  |
| 662 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 664 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 665 | 1 | 197283843341 | 2024-09-01 | 3437.44 |  |  |  |  |  |  |
| 666 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 667 |  | Tổng cộng |  | `=sum(D664:D665)-D666` |  |  |  |  |  |  |
| 668 | Phí dịch vụ |  |  | `=round(D667*8%,2)` |  |  |  |  |  |  |
| 669 | Chiết khấu |  |  | `=round((D668+D667)*2%,2)` |  |  |  |  |  |  |
| 670 | Thành tiền |  |  | `=D667+D668-D669` | 25145 | `=D670*E670` |  |  |  |  |
| 671 | Thuế GTGT |  |  |  |  | `=round(F670*10%,0)` |  |  |  |  |
| 672 | Tổng số tiền phải thanh toán |  |  |  |  | `=F670+F671` |  |  |  |  |
| 676 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 678 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 679 | 1 | 197283843341 | 2024-10-01 | 3369.22 |  |  |  |  |  |  |
| 680 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 681 |  | Tổng cộng |  | `=sum(D678:D679)-D680` |  |  |  |  |  |  |
| 682 | Phí dịch vụ |  |  | `=round(D681*8%,2)` |  |  |  |  |  |  |
| 683 | Chiết khấu |  |  | `=round((D682+D681)*2%,2)` |  |  |  |  |  |  |
| 684 | Thành tiền |  |  | `=D681+D682-D683` | 25497 | `=D684*E684` |  |  |  |  |
| 685 | Thuế GTGT |  |  |  |  | `=round(F684*10%,0)` |  |  |  |  |
| 686 | Tổng số tiền phải thanh toán |  |  |  |  | `=F684+F685` |  |  |  |  |
| 690 | TỔNG HỢP CHI PHÍ CYRADAR |  |  |  |  |  |  |  |  |  |
| 692 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 693 | 1 | 197283843341 | 2024-11-01 | 3180.94 |  |  |  |  |  |  |
| 694 | 2 | Saving plan  | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 695 |  | Tổng cộng |  | `=sum(D692:D693)-D694` |  |  |  |  |  |  |
| 696 | Phí dịch vụ |  |  | `=round(D695*8%,2)` |  |  |  |  |  |  |
| 697 |  |  |  | `=round((D696+D695)*2%,2)` |  |  |  |  |  |  |
| 698 |  |  |  | `=D695+D696-D697` | 25471 | `=D698*E698` |  |  |  |  |
| 699 |  |  |  |  |  | `=round(F698*10%,0)` |  |  |  |  |
| 700 |  |  |  |  |  | `=F698+F699` |  |  |  |  |

> *Đã bỏ qua 229 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (442 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 27 | `C384` |
| D | `=sum(D{r}:D{r})-D{r}` | 41 | `D222` |
| D | `=D{r}*0.08` | 29 | `D223` |
| D | `=round(D{r}+D{r},2)` | 25 | `D343` |
| D | `=D{r}+D{r}` | 23 | `D9` |
| D | `=sum(D{r}:D{r})*2%` | 23 | `D221` |
| D | `=D{r}*0.1` | 13 | `D8` |
| D | `=sum(D{r}:D{r})` | 12 | `D24` |
| D | `=round(sum(D{r}:D{r})*2%,2)` | 12 | `D484` |
| D | `=round(D{r}*8%,2)` | 12 | `D555` |
| D | `=round((D{r}+D{r})*2%,2)` | 6 | `D627` |
| D | `=D{r}+D{r}-D{r}` | 6 | `D628` |
| D | `=D{r}` | 1 | `D7` |
| D | `=2331.67-D{r}` | 1 | `D122` |
| D | `=2407.93-D{r}` | 1 | `D132` |
| D | `=2304.79-D{r}` | 1 | `D143` |
| D | `=2257.23-D{r}` | 1 | `D154` |
| D | `=2036.45-D{r}` | 1 | `D165` |
| D | `=2258.55-D{r}` | 1 | `D175` |
| D | `=2798.67-D{r}` | 1 | `D185` |
| D | `=2953.06-D{r}` | 1 | `D196` |
| D | `=3477.03-D{r}` | 1 | `D207` |
| D | `=3695.25-D{r}` | 1 | `D219` |
| D | `=4031.68-D{r}` | 1 | `D231` |
| D | `=3615.78-D{r}` | 1 | `D244` |
| D | `=3899.85-D{r}` | 1 | `D256` |
| D | `=4651-D{r}` | 1 | `D268` |
| D | `=4847.45-D{r}` | 1 | `D280` |
| D | `=4919.37-D{r}` | 1 | `D292` |
| D | `=4610.54-D{r}` | 1 | `D304` |
| D | `=4586.11+625.39-D{r}` | 1 | `D316` |
| D | `=4842.1-D{r}` | 1 | `D327` |
| D | `=3851.02-D{r}` | 1 | `D349` |
| E | `=sum(E{r})` | 2 | `E74` |
| F | `=D{r}*E{r}` | 52 | `F6` |
| F | `=round(D{r}*E{r},0)` | 34 | `F196` |
| F | `=F{r}+F{r}` | 29 | `F9` |
| F | `=F{r}*0.1` | 12 | `F8` |
| F | `=sum(F{r}:F{r})` | 12 | `F24` |
| F | `=F{r}*0.08` | 10 | `F223` |
| F | `=round(F{r}*10%,0)` | 6 | `F629` |
| F | `=G{r}` | 4 | `F89` |
| F | `=F{r}` | 3 | `F7` |
| G | `=F{r}-E{r}` | 6 | `G73` |
| G | `=G{r}` | 2 | `G74` |
| G | `=-G{r}` | 2 | `G100` |
| G | `=G{r}*0.1` | 2 | `G101` |
| G | `=sum(G{r}:G{r})` | 2 | `G102` |
| G | `=D{r}*23270*110%` | 2 | `G122` |
| G | `=D{r}*23235*110%` | 2 | `G132` |
| I | `=-G{r}*H{r}` | 2 | `I99` |
| I | `=I{r}` | 2 | `I100` |
| I | `=I{r}*0.1` | 2 | `I101` |
| I | `=sum(I{r}:I{r})` | 2 | `I102` |
| J | `=504*23280*110%` | 1 | `J99` |
| J | `=I{r}-J{r}` | 1 | `J100` |
