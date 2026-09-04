# VGSshop

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VGSshop`  
> **Vùng dữ liệu:** 398 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 7 | TỔNG HỢP CHI PHÍ VGSshop |  |  |  |  |  |  |  |
| 9 | STT | Tài khoản | Credit | Tháng 10/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |
| 10 | 1 | 301423350053 | 7000 | -4165.33 | `=C10+D10` |  |  |  |
| 11 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |
| 12 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |
| 13 |  | Tổng số tiền phải thanh toán |  | `=D11+D12` |  |  |  |  |
| 15 |  |  | Hà Nội, ngày 04 tháng 11 năm 2019 |  |  |  |  |  |
| 16 |  |  | Người lập  |  |  |  |  |  |
| 20 |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 24 | TỔNG HỢP CHI PHÍ VGSshop |  |  |  |  |  |  |  |
| 26 | STT | Tài khoản | Credit đầu kỳ | Tháng 11/2019 | Tồn cuối kỳ chuyển sang tháng sau |  |  |  |
| 27 | 1 | 301423350053 | 2834.67 | -4357.3 | `=C27+D27` |  |  |  |
| 28 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | 0 |  |  |  |
| 29 |  | Tổng số tiền phải thanh toán |  |  | 0 |  |  |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` |  |  |  |  |
| 32 |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |  |
| 33 |  |  | Người lập  |  |  |  |  |  |
| 37 |  |  | Phạm Cẩm Nhung |  |  |  |  |  |
| 39 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 42 | 1 | 301423350053 | 2019-11-01 | 1522.63 | 23270 | `=D42*E42` |  |  |
| 43 |  | Tổng |  | `=D42` |  | `=F42` |  |  |
| 44 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D43*0.1` |  | `=F43*0.1` |  |  |
| 45 |  | Tổng số tiền phải thanh toán |  | `=D43+D44` |  | `=F43+F44` |  |  |
| 49 |  |  |  | Hà Nội, ngày 04 tháng 12 năm 2019 |  |  |  |  |
| 50 |  |  |  | Người lập  |  |  |  |  |
| 54 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 59 | TỔNG HỢP CHI PHÍ |  |  |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 62 | 1 | 301423350053 | 2019-12-01 | 5754.65 | 23270 | `=D62*E62` |  |  |
| 63 |  | Reselling |  | 12.57 | 23270 | `=D63*E63` |  |  |
| 64 |  | Tổng |  | `=sum(D62:D63)` |  | `=sum(F62:F63)` |  |  |
| 65 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D64*0.1` |  | `=F64*0.1` |  |  |
| 66 |  | Tổng số tiền phải thanh toán |  | `=D64+D65` |  | `=F64+F65` |  |  |
| 70 |  |  |  | Hà Nội, ngày 04 tháng 01 năm 2020 |  |  |  |  |
| 71 |  |  |  | Người lập  |  |  |  |  |
| 75 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 78 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 81 | 1 | 301423350053 | 2020-01-01 | 5293.91 | 23320 | `=D81*E81` |  |  |
| 82 |  | Tổng |  | `=sum(D81)` |  | `=sum(F81)` |  |  |
| 83 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D82*0.1` |  | `=F82*0.1` |  |  |
| 84 |  | Tổng số tiền phải thanh toán |  | `=D82+D83` |  | `=F82+F83` |  |  |
| 87 |  |  |  | Hà Nội, ngày 04 tháng 02 năm 2020 |  |  |  |  |
| 88 |  |  |  | Người lập  |  |  |  |  |
| 92 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 96 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 99 | 1 | 301423350053 | 2020-02-01 | 5135.67 | 23320 | `=D99*E99` |  |  |
| 100 |  | Tổng |  | `=sum(D99)` |  | `=sum(F99)` |  |  |
| 101 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D100*0.1` |  | `=F100*0.1` |  |  |
| 102 |  | Tổng số tiền phải thanh toán |  | `=D100+D101` |  | `=F100+F101` |  |  |
| 105 |  |  |  | Hà Nội, ngày 04 tháng 03 năm 2020 |  |  |  |  |
| 106 |  |  |  | Người lập  |  |  |  |  |
| 110 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 113 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 115 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 116 | 1 | 301423350053 | 2020-03-01 | 7137.1 | 23700 | `=D116*E116` |  |  |
| 117 |  | Tổng |  | `=sum(D116)` |  | `=sum(F116)` |  |  |
| 118 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D117*0.1` |  | `=F117*0.1` |  |  |
| 119 |  | Tổng số tiền phải thanh toán |  | `=D117+D118` |  | `=F117+F118` |  |  |
| 122 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |
| 123 |  |  |  | Người lập  |  |  |  |  |
| 127 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 130 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 132 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 133 | 1 | 301423350053 | 2020-04-01 | 6997.98 | 23600 | `=D133*E133` |  |  |
| 134 |  | Tổng |  | `=sum(D133)` |  | `=sum(F133)` |  |  |
| 135 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D134*0.1` |  | `=F134*0.1` |  |  |
| 136 |  | Tổng số tiền phải thanh toán |  | `=D134+D135` |  | `=F134+F135` |  |  |
| 139 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |
| 140 |  |  |  | Người lập  |  |  |  |  |
| 144 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 147 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 149 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 150 | 1 | 301423350053 | 2020-05-01 | 7682.38 | 23350 | `=D150*E150` |  |  |
| 151 |  | Tổng |  | `=sum(D150)` |  | `=sum(F150)` |  |  |
| 152 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D151*0.1` |  | `=F151*0.1` |  |  |
| 153 |  | Tổng số tiền phải thanh toán |  | `=D151+D152` |  | `=F151+F152` |  |  |
| 156 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |
| 157 |  |  |  | Người lập  |  |  |  |  |
| 161 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 164 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 166 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 167 | 1 | 301423350053 | 2020-06-01 | 7408.75 | 23290 | `=D167*E167` |  |  |
| 168 |  | Tổng |  | `=sum(D167)` |  | `=sum(F167)` |  |  |
| 169 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D168*0.1` |  | `=F168*0.1` |  |  |
| 170 |  | Tổng số tiền phải thanh toán |  | `=D168+D169` |  | `=F168+F169` |  |  |
| 173 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |
| 174 |  |  |  | Người lập  |  |  |  |  |
| 178 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 181 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 183 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 184 | 1 | 301423350053 | 2020-07-01 | 7478.35 | 23265 | `=D184*E184` |  |  |
| 185 |  | Tổng |  | `=sum(D184)` |  | `=sum(F184)` |  |  |
| 186 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D185*0.1` |  | `=F185*0.1` |  |  |
| 187 |  | Tổng số tiền phải thanh toán |  | `=D185+D186` |  | `=F185+F186` |  |  |
| 190 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |
| 191 |  |  |  | Người lập  |  |  |  |  |
| 195 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |
| 198 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 200 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 201 | 1 | 301423350053 | 2020-08-01 | 7492.9 | 23270 | `=D201*E201` |  |  |
| 202 |  | Tổng |  | `=sum(D201)` |  | `=sum(F201)` |  |  |
| 203 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D202*0.1` |  | `=F202*0.1` |  |  |
| 204 |  | Tổng số tiền phải thanh toán |  | `=D202+D203` |  | `=F202+F203` |  |  |
| 208 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 210 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 211 | 1 | 301423350053 | 2020-09-01 | 7501 | 23280 | `=D211*E211` |  |  |
| 212 |  | Tổng |  | `=sum(D211)` |  | `=sum(F211)` |  |  |
| 213 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D212*0.1` |  | `=F212*0.1` |  |  |
| 214 |  | Tổng số tiền phải thanh toán |  | `=D212+D213` |  | `=F212+F213` |  |  |
| 218 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 220 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 221 | 1 | 301423350053 | 2020-10-01 | 7761.91 | 23270 | `=D221*E221` |  |  |
| 222 |  | Tổng |  | `=sum(D221)` |  | `=sum(F221)` |  |  |
| 223 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D222*0.1` |  | `=F222*0.1` |  |  |
| 224 |  | Tổng số tiền phải thanh toán |  | `=D222+D223` |  | `=F222+F223` |  |  |
| 228 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 230 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 231 | 1 | 301423350053 | 2020-11-01 | 7969.74 | 23235 | `=D231*E231` |  |  |
| 232 |  | Tổng |  | `=sum(D231)` |  | `=sum(F231)` |  |  |
| 233 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D232*0.1` |  | `=F232*0.1` |  |  |
| 234 |  | Tổng số tiền phải thanh toán |  | `=D232+D233` |  | `=F232+F233` |  |  |
| 237 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 239 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 240 | 1 | 301423350053 | 2020-12-01 | 8695.16 | 23185 | `=D240*E240` |  |  |
| 241 |  | Tổng |  | `=sum(D240)` |  | `=sum(F240)` |  |  |
| 242 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  | `=D241*0.1` | 23185 | 20159821 |  |  |
| 243 |  | Tổng số tiền phải thanh toán |  | `=D241+D242` | 23185 | `=F241+F242` |  |  |
| 246 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 248 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 249 | 1 | 301423350053 | 2021-01-01 | 8708.42 | 23145 | `=D249*E249` |  |  |
| 250 | 2 | 301423350053 | 2021-01-01 | 11.13 | 23145 | `=D250*E250` |  |  |
| 251 |  | Tổng |  | `=sum(D249:D250)` |  | `=sum(F249:F250)` |  |  |
| 252 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D251*0.1` | 23145 | `=F251*0.1` |  |  |
| 253 |  | Tổng số tiền phải thanh toán |  | `=D251+D252` | 23145 | `=F251+F252` |  |  |
| 256 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 258 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 259 | 1 | 301423350053 | 2021-02-01 | 6446.2 | 23095 | `=D259*E259` |  |  |
| 260 |  | Tổng |  | `=sum(D259)` |  | `=sum(F259)` |  |  |
| 261 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D260*0.1` | 23095 | `=F260*0.1` |  |  |
| 262 |  | Tổng số tiền phải thanh toán |  | `=D260+D261` | 23095 | `=F260+F261` |  |  |
| 266 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 268 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 269 | 1 | 301423350053 | 2021-03-01 | 6176.28 | 23165 | `=D269*E269` |  |  |
| 270 |  | Tổng |  | `=sum(D269)` |  | `=sum(F269)` |  |  |
| 271 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D270*0.1` | 23165 | `=F270*0.1` |  |  |
| 272 |  | Tổng số tiền phải thanh toán |  | `=D270+D271` | 23165 | `=F270+F271` |  |  |
| 275 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 277 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 278 | 1 | 301423350053 | 2021-04-01 | 6094.49 | 23150 | `=D278*E278` |  |  |
| 279 |  | Tổng |  | `=sum(D278)` |  | `=sum(F278)` |  |  |
| 280 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D279*0.1` | 23150 | `=F279*0.1` |  |  |
| 281 |  | Tổng số tiền phải thanh toán |  | `=D279+D280` | 23150 | `=F279+F280` |  |  |
| 284 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 286 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 287 | 1 | 301423350053 | 2021-05-01 | 6132.46 | 23145 | `=round(D287*E287,0)` |  |  |
| 288 |  | Tổng |  | `=sum(D287)` |  | `=sum(F287)` |  |  |
| 289 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D288*0.1` | 23145 | `=F288*0.1` |  |  |
| 290 |  | Tổng số tiền phải thanh toán |  | `=D288+D289` | 23145 | `=F288+F289` |  |  |
| 294 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 296 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 297 | 1 | 301423350053 | 2021-06-01 | 6601.97 | 23130 | `=round(D297*E297,0)` |  |  |
| 298 |  | Tổng |  | `=sum(D297)` |  | `=sum(F297)` |  |  |
| 299 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D298*0.1` | 23130 | `=F298*0.1` |  |  |
| 300 |  | Tổng số tiền phải thanh toán |  | `=D298+D299` | 23130 | `=F298+F299` |  |  |
| 305 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 307 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 308 | 1 | 301423350053 | 2021-07-01 | 7160.33 | 23050 | `=round(D308*E308,0)` |  |  |
| 309 |  | Discount (2%) |  | `=D308*2%` |  |  |  |  |
| 310 |  | Tổng |  | `=D308-D309` | 23050 | `=round(D310*E310,0)` |  |  |
| 311 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  | `=D310*0.08` | 23050 | `=F310*0.08` |  |  |
| 312 |  | Tổng số tiền phải thanh toán |  | `=D310+D311` | 23050 | `=F310+F311` |  |  |
| 317 | TỔNG HỢP CHI PHÍ VGSShop |  |  |  |  |  |  |  |
| 323 |  |  |  |  |  |  |  | 178698061.4399999976 |
| 324 |  |  |  |  |  |  |  | 178698061.4399999976 |
| 366 |  |  |  |  |  |  | 183401021.8799999952 |  |
| 377 |  |  |  |  |  |  | 185589675.3600000143 |  |
| 388 |  |  |  |  |  |  | 193044085.9199999869 |  |
| 398 |  |  |  |  |  |  | 204099548.0399999917 |  |

> *Đã bỏ qua 217 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (153 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 23 | `D13` |
| D | `=D{r}*0.1` | 20 | `D44` |
| D | `=sum(D{r})` | 17 | `D82` |
| D | `=sum(D{r}:D{r})` | 2 | `D64` |
| D | `=D{r}` | 1 | `D43` |
| D | `=D{r}*2%` | 1 | `D309` |
| D | `=D{r}-D{r}` | 1 | `D310` |
| D | `=D{r}*0.08` | 1 | `D311` |
| E | `=C{r}+D{r}` | 2 | `E10` |
| F | `=F{r}+F{r}` | 21 | `F45` |
| F | `=D{r}*E{r}` | 20 | `F42` |
| F | `=F{r}*0.1` | 19 | `F44` |
| F | `=sum(F{r})` | 17 | `F82` |
| F | `=round(D{r}*E{r},0)` | 4 | `F287` |
| F | `=sum(F{r}:F{r})` | 2 | `F64` |
| F | `=F{r}` | 1 | `F43` |
| F | `=F{r}*0.08` | 1 | `F311` |
