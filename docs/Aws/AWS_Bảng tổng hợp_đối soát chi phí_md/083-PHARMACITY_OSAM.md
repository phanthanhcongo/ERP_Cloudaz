# PHARMACITY_OSAM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `PHARMACITY_OSAM`  
> **Vùng dữ liệu:** 1116 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H |
|---:|---|---|---|---|---|---|---|---|
| 1 |  |  | CÔNG TY TNHH QUỐC TẾ OSAM<br> <br>Địa chỉ: Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên,<br>Phường Nghĩa Đô, Thành phố Hà Nội<br> <br>Điện thoại: 024 2216 4848<br> <br>W: osam.io |  |  |  |  |  |
| 6 | TỔNG HỢP CHI PHÍ PHARMACITY T8/2021 |  |  |  |  |  |  |  |
| 8 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 9 | 1 | 920817877953 | 2021-08-01 | 2261.38 | 22880 | `=round(D9*E9,0)` |  | `=D9*22880` |
| 10 |  | Tổng |  | `=D9` | 22880 | `=round(D10*E10,0)` |  |  |
| 11 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  | `=D10*0.07` | 22880 | `=F10*0.07` |  |  |
| 12 |  | Tổng số tiền phải thanh toán |  | `=D10+D11` | 22880 | `=sum(F10:F11)` | 55362200 |  |
| 16 |  |  |  | Hà Nội, ngày 06 tháng 09 năm 2021 |  |  |  |  |
| 17 |  |  |  |                                Người lập |  |  |  |  |
| 22 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 24 | TỔNG HỢP CHI PHÍ PHARMACITY T8/2021 (bổ sung) |  |  |  |  |  |  |  |
| 28 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 29 | 1 | 920817877953 | 2021-08-01 | 1072.35 | 22880 | `=round(D29*E29,0)` |  |  |
| 30 |  | Tổng |  | `=D29` | 22880 | `=round(D30*E30,0)` |  |  |
| 31 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  | `=D30*0.07` | 22880 | `=F30*0.07` |  |  |
| 32 |  | Tổng số tiền phải thanh toán |  | `=D30+D31` | 22880 | `=sum(F30:F31)` |  |  |
| 34 |  |  |  | Hà Nội, ngày 06 tháng 09 năm 2021 |  |  |  |  |
| 35 |  |  |  |                                Người lập |  |  |  |  |
| 40 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 44 | TỔNG HỢP CHI PHÍ PHARMACITY T9/2021 |  |  |  |  |  |  |  |
| 47 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 48 | 1 | 920817877953 | 2021-09-01 | 10229.4 | 22840 | `=round(D48*E48,0)` |  |  |
| 49 |  | Tổng |  | `=D48` | 22840 | `=round(D49*E49,0)` |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D49*0.07` | 22840 | `=F49*0.07` |  |  |
| 51 | Tổng số tiền phải thanh toán |  |  | `=D49+D50` | 22840 | `=sum(F49:F50)` |  |  |
| 54 |  |  |  | Hà Nội, ngày 05 tháng 10 năm 2021 |  |  |  |  |
| 55 |  |  |  |                                Người lập |  |  |  |  |
| 60 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 65 | TỔNG HỢP CHI PHÍ PHARMACITY T10/2021 |  |  |  |  |  |  |  |
| 68 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 69 | 1 | 920817877953 | 2021-10-01 | 9104.65 | 22850 | `=round(D69*E69,0)` |  |  |
| 70 |  | Tổng |  | `=D69` | 22850 | `=round(D70*E70,0)` |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D70*0.07` | 22850 | `=F70*0.07` |  |  |
| 72 | Tổng số tiền phải thanh toán |  |  | `=D70+D71` | 22850 | `=sum(F70:F71)` | 222604140.7100000083 |  |
| 75 |  |  |  | Hà Nội, ngày 05 tháng 11 năm 2021 |  |  |  |  |
| 76 |  |  |  |                                Người lập |  |  |  |  |
| 81 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 87 | TỔNG HỢP CHI PHÍ PHARMACITY T11/2021 |  |  |  |  |  |  |  |
| 90 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 91 | 1 | 920817877953 | 2021-11-01 | 8738.14 | 22800 | `=round(D91*E91,0)` |  |  |
| 92 |  | Tổng |  | `=D91` | 22800 | `=round(D92*E92,0)` |  |  |
| 93 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D92*0.07` | 22800 | `=F92*0.07` |  |  |
| 94 | Tổng số tiền phải thanh toán |  |  | `=D92+D93` | 22800 | `=sum(F92:F93)` | 213175663.4399999976 |  |
| 97 |  |  |  | Hà Nội, ngày 06 tháng 12 năm 2021 |  |  |  |  |
| 98 |  |  |  |                                Người lập |  |  |  |  |
| 103 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 106 | TỔNG HỢP CHI PHÍ PHARMACITY T12/2021 |  |  |  |  |  |  |  |
| 109 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 110 | 1 | 920817877953 | 2021-12-01 | 10505.94 | 22920 | `=round(D110*E110,0)` |  |  |
| 111 |  | Tổng |  | `=D110` | 22920 | `=round(D111*E111,0)` |  |  |
| 112 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D111*0.07` | 22920 | `=F111*0.07` |  |  |
| 113 | Tổng số tiền phải thanh toán |  |  | `=D111+D112` | 22920 | `=sum(F111:F112)` | 257651875.150000006 |  |
| 116 |  |  |  | Hà Nội, ngày 06 tháng 01 năm 2022 |  |  |  |  |
| 117 |  |  |  |                                Người lập |  |  |  |  |
| 122 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 125 | TỔNG HỢP CHI PHÍ PHARMACITY T1/2022 |  |  |  |  |  |  |  |
| 128 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 129 | 1 | 920817877953 | 2022-01-01 | 1389.69 | 22780 | `=round(D129*E129,0)` |  |  |
| 130 |  | Tổng |  | `=D129` | 22780 | `=round(D130*E130,0)` |  |  |
| 131 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D130*0.07` | 22780 | `=F130*0.07` |  |  |
| 132 | Tổng số tiền phải thanh toán |  |  | `=D130+D131` | 22780 | `=sum(F130:F131)` | 33873137.6599999964 |  |
| 135 |  |  |  | Hà Nội, ngày 07 tháng 02 năm 2022 |  |  |  |  |
| 136 |  |  |  |                                Người lập |  |  |  |  |
| 141 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 145 | TỔNG HỢP CHI PHÍ PHARMACITY T2/2022 |  |  |  |  |  |  |  |
| 148 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 149 | 1 | 920817877953 | 2022-02-01 | 1293.21 | 22950 | `=round(D149*E149,0)` |  |  |
| 150 | 2 | 920817877953 | 2021-11-01 | 74 | 22950 | `=round(D150*E150,0)` |  | `=D149+D150` |
| 151 |  | Tổng |  | `=sum(D149:D150)` | 22950 | `=sum(F149:F150)` |  |  |
| 152 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D151*0.07` | 22950 | `=F151*0.07` |  |  |
| 153 | Tổng số tiền phải thanh toán |  |  | `=D151+D152` | 22950 | `=sum(F151:F152)` | 33573892.8999999985 |  |
| 156 |  |  |  | Hà Nội, ngày 07 tháng 03 năm 2022 |  |  |  |  |
| 157 |  |  |  |                                Người lập |  |  |  |  |
| 162 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 165 | TỔNG HỢP CHI PHÍ PHARMACITY T3/2022 |  |  |  |  |  |  |  |
| 168 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 169 | 1 | 920817877953 | 2022-03-01 | 1449.03 | 22980 | `=round(D169*E169,0)` |  |  |
| 170 |  | Tổng |  | `=sum(D169)` | 22980 | `=sum(F169)` |  |  |
| 171 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D170*0.07` | 22980 | `=F170*0.07` |  |  |
| 172 | Tổng số tiền phải thanh toán |  |  | `=D170+D171` | 22980 | `=sum(F170:F171)` | 35629618.6300000027 |  |
| 175 |  |  |  | Hà Nội, ngày 07 tháng 04 năm 2022 |  |  |  |  |
| 176 |  |  |  |                                Người lập |  |  |  |  |
| 181 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 184 | TỔNG HỢP CHI PHÍ PHARMACITY T4/2022 |  |  |  |  |  |  |  |
| 187 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 188 | 1 | 920817877953 | 2022-04-01 | 1380.25 | 23095 | `=round(D188*E188,0)` |  |  |
| 189 |  | Tổng |  | `=sum(D188)` | 23095 | `=sum(F188)` |  |  |
| 190 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D189*0.07` | 23095 | `=F189*0.07` |  |  |
| 191 | Tổng số tiền phải thanh toán |  |  | `=D189+D190` | 23095 | `=sum(F189:F190)` |  |  |
| 194 |  |  |  | Hà Nội, ngày 07 tháng 05 năm 2022 |  |  |  |  |
| 195 |  |  |  |                                Người lập |  |  |  |  |
| 200 |  |  |  |                          Phạm Cẩm Nhung |  |  |  |  |
| 204 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 5/2022 |  |  |  |  |  |  |  |
| 207 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 208 | 1 | 920817877953 | 2022-05-01 | 1294.01 |  |  |  |  |
| 209 |  | Tổng |  | `=sum(D208)` |  |  |  |  |
| 210 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D209*0.07` |  |  |  |  |
| 211 | Tổng số tiền phải thanh toán |  |  | `=round(D209+D210,2)` | 23330 | `=D211*E211` |  |  |
| 214 |  |  |  | Hà Nội, ngày 10 tháng 06 năm 2022 |  |  |  |  |
| 215 |  |  |  |                                Người lập |  |  |  |  |
| 220 |  |  |  |                           Nguyễn Hải Anh |  |  |  |  |
| 225 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 6/2022 |  |  |  |  |  |  |  |
| 228 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 229 | 1 | 920817877953 | 2022-06-01 | 1186.33 |  |  |  |  |
| 230 |  | Tổng |  | `=sum(D229)` |  |  |  |  |
| 231 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D230*0.07` |  |  |  |  |
| 232 | Tổng số tiền phải thanh toán |  |  | `=round(D230+D231,2)` | 23415 | `=D232*E232` |  |  |
| 235 |  |  |  | Hà Nội, ngày 15 tháng 07 năm 2022 |  |  |  |  |
| 236 |  |  |  |                                Người lập |  |  |  |  |
| 241 |  |  |  |                           Nguyễn Hải Anh |  |  |  |  |
| 244 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 8/2022 |  |  |  |  |  |  |  |
| 247 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 248 | 1 | 920817877953 | 2022-08-01 | 11848.12 |  |  |  |  |
| 249 |  | Tổng |  | `=sum(D248)` |  |  |  |  |
| 250 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D249*0.07` |  |  |  |  |
| 251 | Tổng số tiền phải thanh toán |  |  | `=round(D249+D250,2)` | 23600 | `=D251*E251` |  |  |
| 254 |  |  |  | Hà Nội, ngày 12 tháng 09 năm 2022 |  |  |  |  |
| 255 |  |  |  |                                Người lập |  |  |  |  |
| 262 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 264 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 7/2022 |  |  |  |  |  |  |  |
| 267 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 268 | 1 | 920817877953 | 2022-07-01 | 9912.18 |  |  |  |  |
| 269 |  | Tổng |  | `=sum(D268)` |  |  |  |  |
| 270 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D269*0.07` |  |  |  |  |
| 271 | Tổng số tiền phải thanh toán |  |  | `=round(D269+D270,2)` | 23480 | `=D271*E271` |  |  |
| 274 |  |  |  | Hà Nội, ngày 08 tháng 08 năm 2022 |  |  |  |  |
| 275 |  |  |  |                                Người lập |  |  |  |  |
| 280 |  |  |  |                           Nguyễn Hải Anh |  |  |  |  |
| 282 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 9/2022 |  |  |  |  |  |  |  |
| 285 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 286 | 1 | 920817877953 | 2022-09-01 | 11502.4 |  |  |  |  |
| 287 |  | Tổng |  | `=sum(D286)` |  |  |  |  |
| 288 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D287*0.07` |  |  |  |  |
| 289 | Tổng số tiền phải thanh toán |  |  | `=round(D287+D288,2)` | 24010 | `=D289*E289` |  |  |
| 292 |  |  |  | Hà Nội, ngày 07 tháng 10 năm 2022 |  |  |  |  |
| 293 |  |  |  |                                Người lập |  |  |  |  |
| 300 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 302 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 9/2022 |  |  |  |  |  |  |  |
| 305 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 306 | 1 | 920817877953 | 2022-10-01 | 12136.99 |  |  |  |  |
| 307 |  | Tổng |  | `=sum(D306)` |  |  |  |  |
| 308 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D307*0.07` |  |  |  |  |
| 309 | Tổng số tiền phải thanh toán |  |  | `=round(D307+D308,2)` | 24877 | `=D309*E309` |  |  |
| 312 |  |  |  | Hà Nội, ngày 07 tháng 11 năm 2022 |  |  |  |  |
| 313 |  |  |  |                                Người lập |  |  |  |  |
| 320 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 322 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 11/2022 |  |  |  |  |  |  |  |
| 325 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 326 | 1 | 920817877953 | 2022-11-01 | 11707.31 |  |  |  |  |
| 327 |  | Tổng |  | `=sum(D326)` |  |  |  |  |
| 328 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D327*0.07` |  |  |  |  |
| 329 | Tổng số tiền phải thanh toán |  |  | `=round(D327+D328,2)` | 24795 | `=D329*E329` |  |  |
| 332 |  |  |  | Hà Nội, ngày 09 tháng 12 năm 2022 |  |  |  |  |
| 333 |  |  |  |                                Người lập |  |  |  |  |
| 340 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 342 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 12/2022 |  |  |  |  |  |  |  |
| 345 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 346 | 1 | 920817877953 | 2022-12-01 | 11885.88 |  |  |  |  |
| 347 |  | Tổng |  | `=sum(D346)` |  |  |  |  |
| 348 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D347*0.07` |  |  |  |  |
| 349 | Tổng số tiền phải thanh toán |  |  | `=round(D347+D348,2)` | 23743 | `=D349*E349` |  |  |
| 352 |  |  |  | Hà Nội, ngày 06 tháng 01 năm 2023 |  |  |  |  |
| 353 |  |  |  |                                Người lập |  |  |  |  |
| 360 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 362 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 01/2023 |  |  |  |  |  |  |  |
| 365 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 366 | 1 | 920817877953 | 2022-12-01 | 12076.51 |  |  |  |  |
| 367 |  | Tổng |  | `=sum(D366)` |  |  |  |  |
| 368 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D367*0.07` |  |  |  |  |
| 369 | Tổng số tiền phải thanh toán |  |  | `=round(D367+D368,2)` | 23595 | `=D369*E369` |  |  |
| 372 |  |  |  | Hà Nội, ngày 07 tháng 02 năm 2023 |  |  |  |  |
| 373 |  |  |  |                                Người lập |  |  |  |  |
| 380 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 381 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 02/2023 |  |  |  |  |  |  |  |
| 384 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 385 | 1 | 920817877953 | 2023-02-01 | 11334.42 |  |  |  |  |
| 386 |  | Tổng |  | `=sum(D385)` |  |  |  |  |
| 387 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D386*0.07` |  |  |  |  |
| 388 | Tổng số tiền phải thanh toán |  |  | `=round(D386+D387,2)` | 23920 | `=D388*E388` |  |  |
| 391 |  |  |  | Hà Nội, ngày 08 tháng 03 năm 2023 |  |  |  |  |
| 392 |  |  |  |                                Người lập |  |  |  |  |
| 399 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 402 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 03/2023 |  |  |  |  |  |  |  |
| 405 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 406 | 1 | 920817877953 | 2023-03-01 | 12574.53 |  |  |  |  |
| 407 |  | Tổng |  | `=sum(D406)` |  |  |  |  |
| 408 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D407*0.07` |  |  |  |  |
| 409 | Tổng số tiền phải thanh toán |  |  | `=round(D407+D408,2)` | 23623 | `=D409*E409` |  |  |
| 412 |  |  |  | Hà Nội, ngày 06 tháng 04 năm 2023 |  |  |  |  |
| 413 |  |  |  |                                Người lập |  |  |  |  |
| 420 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 422 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 04/2023 |  |  |  |  |  |  |  |
| 425 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 426 | 1 | 920817877953 | 2023-04-01 | 12352.64 |  |  |  |  |
| 427 |  | Tổng |  | `=sum(D426)` |  |  |  |  |
| 428 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D427*0.07` |  |  |  |  |
| 429 | Tổng số tiền phải thanh toán |  |  | `=round(D427+D428,2)` | 23620 | `=D429*E429` |  |  |
| 432 |  |  |  | Hà Nội, ngày 09 tháng 05 năm 2023 |  |  |  |  |
| 433 |  |  |  |                                Người lập |  |  |  |  |
| 440 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 443 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 05/2023 |  |  |  |  |  |  |  |
| 446 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 447 | 1 | 920817877953 | 2023-05-01 | 12631.22 |  |  |  |  |
| 448 |  | Tổng |  | `=sum(D447)` |  |  |  |  |
| 449 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=D448*0.07` |  |  |  |  |
| 450 | Tổng số tiền phải thanh toán |  |  | `=round(D448+D449,2)` | 23656 | `=D450*E450` |  |  |
| 453 |  |  |  | Hà Nội, ngày 08 tháng 06 năm 2023 |  |  |  |  |
| 454 |  |  |  |                                Người lập |  |  |  |  |
| 461 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 464 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 06/2023 |  |  |  |  |  |  |  |
| 467 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 468 | 1 | 920817877953 | 2023-06-01 | 12707.87 |  |  |  |  |
| 469 |  | Tổng |  | `=sum(D468)` |  |  |  |  |
| 470 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá...(Bên OSAM đóng hộ) |  |  | `=round(D469*0.07,2)` |  |  |  |  |
| 471 | Tổng số tiền phải thanh toán |  |  | `=D469+D470` | 23748 | `=D471*E471` |  |  |
| 474 |  |  |  | Hà Nội, ngày 06 tháng 07 năm 2023 |  |  |  |  |
| 475 |  |  |  |                                Người lập |  |  |  |  |
| 482 |  |  |  |                           Ninh Hồng Sơn   |  |  |  |  |
| 485 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 07/2023 |  |  |  |  |  |  |  |
| 488 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 489 | 1 | 920817877953 | 2023-07-01 | 13177.67 |  |  |  |  |
| 490 |  | Tổng lượng dùng thực tế |  | `=sum(D489)` |  |  |  |  |
| 491 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D490*105%,2)` |  |  |  |  |
| 492 | Chiết khấu 3% |  |  | `=round(D491*3%,2)` |  |  |  |  |
| 493 | Tổng số tiền phải thanh toán |  |  | `=D491-D492` | 23852 | `=D493*E493` |  |  |
| 496 |  |  |  | Hà Nội, ngày 14 tháng 08 năm 2023 |  |  |  |  |
| 497 |  |  |  |                                         Người lập   |  |  |  |  |
| 504 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 505 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 08/2023 |  |  |  |  |  |  |  |
| 508 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 509 | 1 | 920817877953 | 2023-08-01 | 13255.92 |  |  |  |  |
| 510 |  | Tổng lượng dùng thực tế |  | `=sum(D509)` |  |  |  |  |
| 511 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D510*105%,2)` |  |  |  |  |
| 512 | Chiết khấu 3% |  |  | `=round(D511*3%,2)` |  |  |  |  |
| 513 | Tổng số tiền phải thanh toán |  |  | `=D511-D512` | 24238 | `=D513*E513` |  |  |
| 516 |  |  |  | Hà Nội, ngày 07 tháng 09 năm 2023 |  |  |  |  |
| 517 |  |  |  |                                         Người lập   |  |  |  |  |
| 524 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 525 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 09/2023 |  |  |  |  |  |  |  |
| 528 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 529 | 1 | 920817877953 | 2023-09-01 | 12552.46 |  |  |  |  |
| 530 |  | Tổng lượng dùng thực tế |  | `=sum(D529)` |  |  |  |  |
| 531 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D530*105%,2)` |  |  |  |  |
| 532 | Chiết khấu 3% |  |  | `=round(D531*3%,2)` |  |  |  |  |
| 533 | Tổng số tiền phải thanh toán |  |  | `=D531-D532` | 24411 | `=D533*E533` |  |  |
| 536 |  |  |  | Hà Nội, ngày 09 tháng 10 năm 2023 |  |  |  |  |
| 537 |  |  |  |                                         Người lập   |  |  |  |  |
| 544 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 546 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 10/2023 |  |  |  |  |  |  |  |
| 549 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 550 | 1 | 920817877953 | 2023-10-01 | 12865.16 |  |  |  |  |
| 551 |  | Tổng lượng dùng thực tế |  | `=sum(D550)` |  |  |  |  |
| 552 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D551*105%,2)` |  |  |  |  |
| 553 | Chiết khấu 3% |  |  | `=round(D552*3%,2)` |  |  |  |  |
| 554 | Tổng số tiền phải thanh toán |  |  | `=D552-D553` | 24724 | `=D554*E554` |  |  |
| 557 |  |  |  | Hà Nội, ngày 06 tháng 11 năm 2023 |  |  |  |  |
| 558 |  |  |  |                                         Người lập   |  |  |  |  |
| 565 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 567 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 11/2023 |  |  |  |  |  |  |  |
| 570 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 571 | 1 | 920817877953 | 2023-11-01 | 12372.15 |  |  |  |  |
| 572 |  | Tổng lượng dùng thực tế |  | `=sum(D571)` |  |  |  |  |
| 573 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D572*105%,2)` |  |  |  |  |
| 574 | Chiết khấu 3% |  |  | `=round(D573*3%,2)` |  |  |  |  |
| 575 | Tổng số tiền phải thanh toán |  |  | `=D573-D574` | 24434 | `=D575*E575` |  |  |
| 578 |  |  |  | Hà Nội, ngày 07 tháng 12 năm 2023 |  |  |  |  |
| 579 |  |  |  |                                         Người lập   |  |  |  |  |
| 586 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 588 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 12/2023 |  |  |  |  |  |  |  |
| 591 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 592 | 1 | 920817877953 | 2023-12-01 | 10623.18 |  |  |  |  |
| 593 |  | Tổng lượng dùng thực tế |  | `=sum(D592)` |  |  |  |  |
| 594 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D593*105%,2)` |  |  |  |  |
| 595 | Chiết khấu 3% |  |  | `=round(D594*3%,2)` |  |  |  |  |
| 596 | Tổng số tiền phải thanh toán |  |  | `=D594-D595` | 24421 | `=D596*E596` |  |  |
| 599 |  |  |  | Hà Nội, ngày 03 tháng 01 năm 2024 |  |  |  |  |
| 600 |  |  |  |                                         Người lập   |  |  |  |  |
| 607 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 609 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 01/2024 |  |  |  |  |  |  |  |
| 612 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 613 | 1 | 920817877953 | 2024-01-01 | 4228.63 |  |  |  |  |
| 614 |  | Tổng lượng dùng thực tế |  | `=sum(D613)` |  |  |  |  |
| 615 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D614*105%,2)` |  |  |  |  |
| 616 | Chiết khấu 3% |  |  | `=round(D615*3%,2)` |  |  |  |  |
| 617 | Tổng số tiền phải thanh toán |  |  | `=D615-D616` | 24583 | `=D617*E617` |  |  |
| 620 |  |  |  | Hà Nội, ngày 05 tháng 02 năm 2024 |  |  |  |  |
| 621 |  |  |  |                                         Người lập   |  |  |  |  |
| 628 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 630 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 02/2024 |  |  |  |  |  |  |  |
| 633 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 634 | 1 | 920817877953 | 2024-02-01 | 1844.47 |  |  |  |  |
| 635 |  | Tổng lượng dùng thực tế |  | `=sum(D634)` |  |  |  |  |
| 636 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D635*105%,2)` |  |  |  |  |
| 637 | Chiết khấu 3% |  |  | `=round(D636*3%,2)` |  |  |  |  |
| 638 | Tổng số tiền phải thanh toán |  |  | `=D636-D637` | 24875 | `=D638*E638` |  |  |
| 641 |  |  |  | Hà Nội, ngày 07 tháng 03 năm 2024 |  |  |  |  |
| 642 |  |  |  |                                         Người lập   |  |  |  |  |
| 649 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 651 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 03/2024 |  |  |  |  |  |  |  |
| 654 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 655 | 1 | 920817877953 | 2024-03-01 | 1637.01 |  |  |  |  |
| 656 |  | Tổng lượng dùng thực tế |  | `=sum(D655)` |  |  |  |  |
| 657 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D656*105%,2)` |  |  |  |  |
| 658 | Chiết khấu 3% |  |  | `=round(D657*3%,2)` |  |  |  |  |
| 659 | Tổng số tiền phải thanh toán |  |  | `=D657-D658` | 24976 | `=D659*E659` |  |  |
| 662 |  |  |  | Hà Nội, ngày 08 tháng 04 năm 2024 |  |  |  |  |
| 663 |  |  |  |                                         Người lập   |  |  |  |  |
| 670 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 674 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 04/2024 |  |  |  |  |  |  |  |
| 677 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 678 | 1 | 920817877953 | 2024-04-01 | 863.82 |  |  |  |  |
| 679 |  | Tổng lượng dùng thực tế |  | `=sum(D678)` |  |  |  |  |
| 680 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D679*105%,2)` |  |  |  |  |
| 681 | Chiết khấu 3% |  |  | `=round(D680*3%,2)` |  |  |  |  |
| 682 | Tổng số tiền phải thanh toán |  |  | `=D680-D681` | 25458 | `=D682*E682` |  |  |
| 685 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2024 |  |  |  |  |
| 686 |  |  |  |                                         Người lập   |  |  |  |  |
| 693 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 696 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 05/2024 |  |  |  |  |  |  |  |
| 699 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 700 | 1 | 920817877953 | 2024-05-01 | 622.25 |  |  |  |  |
| 701 |  | Tổng lượng dùng thực tế |  | `=sum(D700)` |  |  |  |  |
| 702 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D701*105%,2)` |  |  |  |  |
| 703 | Chiết khấu 3% |  |  | `=round(D702*3%,2)` |  |  |  |  |
| 704 | Tổng số tiền phải thanh toán |  |  | `=D702-D703` | 25474 | `=D704*E704` |  |  |
| 707 |  |  |  | Hà Nội, ngày 07 tháng 06 năm 2024 |  |  |  |  |
| 708 |  |  |  |                                         Người lập   |  |  |  |  |
| 715 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 718 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 06/2024 |  |  |  |  |  |  |  |
| 721 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 722 | 1 | 920817877953 | 2024-06-01 | 598.11 |  |  |  |  |
| 723 |  | Tổng lượng dùng thực tế |  | `=sum(D722)` |  |  |  |  |
| 724 | Giá trước chiết khấu bao gồm phí dịch vụ 5% |  |  | `=round(D723*105%,2)` |  |  |  |  |
| 725 | Chiết khấu 3% |  |  | `=round(D724*3%,2)` |  |  |  |  |
| 726 | Tổng số tiền phải thanh toán |  |  | `=D724-D725` | 25473 | `=D726*E726` |  |  |
| 728 |  |  |  | Hà Nội, ngày 31 tháng 07 năm 2024 |  |  |  |  |
| 729 |  |  |  |                                         Người lập   |  |  |  |  |
| 736 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 738 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 07/2024 |  |  |  |  |  |  |  |
| 741 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 742 | 1 | 920817877953 | 2024-07-01 | 353.85 |  |  |  |  |
| 743 |  | Tổng lượng dùng thực tế |  | `=sum(D742)` |  |  |  |  |
| 744 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D743*105.26%,2)` |  |  |  |  |
| 745 | Chiết khấu 3% |  |  | `=round(D744*3%,2)` |  |  |  |  |
| 746 | Thành tiền |  |  | `=D744-D745` | 25405 | `=D746*E746` |  |  |
| 747 | Thuế GTGT 10% |  |  |  |  | `=round(F746*10%,0)` |  |  |
| 748 | Tổng số tiền phải thanh toán |  |  |  |  | `=F746+F747` |  |  |
| 751 |  |  |  | Hà Nội, ngày 13 tháng 08 năm 2024 |  |  |  |  |
| 752 |  |  |  |                                         Người lập   |  |  |  |  |
| 759 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 761 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 08/2024 |  |  |  |  |  |  |  |
| 764 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 765 | 1 | 920817877953 | 2024-08-01 | 340.07 |  |  |  |  |
| 766 |  | Tổng lượng dùng thực tế |  | `=sum(D765)` |  |  |  |  |
| 767 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D766*105.26%,2)` |  |  |  |  |
| 768 | Chiết khấu 3% |  |  | `=round(D767*3%,2)` |  |  |  |  |
| 769 | Thành tiền |  |  | `=D767-D768` | 25080 | `=D769*E769` |  |  |
| 770 | Thuế GTGT 10% |  |  |  |  | `=round(F769*10%,0)` |  |  |
| 771 | Tổng số tiền phải thanh toán |  |  |  |  | `=F769+F770` |  |  |
| 774 |  |  |  | Hà Nội, ngày 12 tháng 09 năm 2024 |  |  |  |  |
| 775 |  |  |  |                                         Người lập   |  |  |  |  |
| 782 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 785 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 09/2024 |  |  |  |  |  |  |  |
| 788 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 789 | 1 | 920817877953 | 2024-09-01 | 302.86 |  |  |  |  |
| 790 |  | Tổng lượng dùng thực tế |  | `=sum(D789)` |  |  |  |  |
| 791 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D790*105.26%,2)` |  |  |  |  |
| 792 | Chiết khấu 3% |  |  | `=round(D791*3%,2)` |  |  |  |  |
| 793 | Thành tiền |  |  | `=D791-D792` | 24733 | `=D793*E793` |  |  |
| 794 | Thuế GTGT 10% |  |  |  |  | `=round(F793*10%,0)` |  |  |
| 795 | Tổng số tiền phải thanh toán |  |  |  |  | `=F793+F794` |  |  |
| 798 |  |  |  | Hà Nội, ngày 09 tháng 10 năm 2024 |  |  |  |  |
| 799 |  |  |  |                                         Người lập   |  |  |  |  |
| 806 |  |  |  |                                    Ninh Hồng Sơn   |  |  |  |  |
| 809 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 10/2024 |  |  |  |  |  |  |  |
| 811 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 812 | 1 | 920817877953 | 2024-10-01 | 302.08 |  |  |  |  |
| 813 |  | Tổng lượng dùng thực tế |  | `=sum(D812)` |  |  |  |  |
| 814 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D813*105.26%,2)` |  |  |  |  |
| 815 | Chiết khấu 3% |  |  | `=round(D814*3%,2)` |  |  |  |  |
| 816 | Thành tiền |  |  | `=D814-D815` | 25445 | `=D816*E816` |  |  |
| 817 | Thuế GTGT 10% |  |  |  |  | `=round(F816*10%,0)` |  |  |
| 818 | Tổng số tiền phải thanh toán |  |  |  |  | `=F816+F817` |  |  |
| 821 |  |  |  | Hà Nội, ngày 04 tháng 11 năm 2024 |  |  |  |  |
| 822 |  |  |  |                                         Người lập   |  |  |  |  |
| 829 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 833 | TỔNG HỢP CHI PHÍ PHARMACITY THÁNG 11/2024 |  |  |  |  |  |  |  |
| 835 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 836 | 1 | 920817877953 | 2024-11-01 | 178.39 |  |  |  |  |
| 837 |  | Tổng lượng dùng thực tế |  | `=sum(D836)` |  |  |  |  |
| 838 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D837*105.26%,2)` |  |  |  |  |
| 839 | Chiết khấu 3% |  |  | `=round(D838*3%,2)` |  |  |  |  |
| 840 | Thành tiền |  |  | `=D838-D839` | 25463 | `=D840*E840` |  |  |
| 841 | Thuế GTGT 10% |  |  |  |  | `=round(F840*10%,0)` |  |  |
| 842 | Tổng số tiền phải thanh toán |  |  |  |  | `=F840+F841` |  |  |
| 845 |  |  |  | Hà Nội, ngày 02 tháng 12 năm 2024 |  |  |  |  |
| 846 |  |  |  |                                         Người lập   |  |  |  |  |
| 853 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 856 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 12/2024 |  |  |  |  |  |  |  |
| 858 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 859 | 1 | 920817877953 | 2024-12-01 | 179.25 |  |  |  |  |
| 860 |  | Tổng lượng dùng thực tế |  | `=sum(D859)` |  |  |  |  |
| 861 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D860*105.26%,2)` |  |  |  |  |
| 862 | Chiết khấu 3% |  |  | `=round(D861*3%,2)` |  |  |  |  |
| 863 | Thành tiền |  |  | `=D861-D862` | 25551 | `=D863*E863` |  |  |
| 864 | Thuế GTGT 10% |  |  |  |  | `=round(F863*10%,0)` |  |  |
| 865 | Tổng số tiền phải thanh toán |  |  |  |  | `=F863+F864` |  |  |
| 868 |  |  |  | Hà Nội, ngày 03 tháng 01 năm 2025 |  |  |  |  |
| 869 |  |  |  |                                         Người lập   |  |  |  |  |
| 878 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 880 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 01/2025 |  |  |  |  |  |  |  |
| 882 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 883 | 1 | 920817877953 | 2025-01-01 | 171.48 |  |  |  |  |
| 884 |  | Tổng lượng dùng thực tế |  | `=sum(D883)` |  |  |  |  |
| 885 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D884*105.26%,2)` |  |  |  |  |
| 886 | Chiết khấu 3% |  |  | `=round(D885*3%,2)` |  |  |  |  |
| 887 | Thành tiền |  |  | `=D885-D886` | 25295 | `=D887*E887` |  |  |
| 888 | Thuế GTGT 10% |  |  |  |  | `=round(F887*10%,0)` |  |  |
| 889 | Tổng số tiền phải thanh toán |  |  |  |  | `=F887+F888` |  |  |
| 892 |  |  |  | Hà Nội, ngày 08 tháng 02 năm 2025 |  |  |  |  |
| 893 |  |  |  |                                         Người lập   |  |  |  |  |
| 902 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 905 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 02/2025 |  |  |  |  |  |  |  |
| 907 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 908 | 1 | 920817877953 | 2025-02-01 | 169.26 |  |  |  |  |
| 909 |  | Tổng lượng dùng thực tế |  | `=sum(D908)` |  |  |  |  |
| 910 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D909*105.26%,2)` |  |  |  |  |
| 911 | Chiết khấu 3% |  |  | `=round(D910*3%,2)` |  |  |  |  |
| 912 | Thành tiền |  |  | `=D910-D911` | 25735 | `=D912*E912` |  |  |
| 913 | Thuế GTGT 10% |  |  |  |  | `=round(F912*10%,0)` |  |  |
| 914 | Tổng số tiền phải thanh toán |  |  |  |  | `=F912+F913` |  |  |
| 917 |  |  |  | Hà Nội, ngày 05 tháng 03 năm 2025 |  |  |  |  |
| 918 |  |  |  |                                         Người lập   |  |  |  |  |
| 927 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 930 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 03/2025 |  |  |  |  |  |  |  |
| 932 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 933 | 1 | 920817877953 | 2025-03-01 | 118.51 |  |  |  |  |
| 934 |  | Tổng lượng dùng thực tế |  | `=sum(D933)` |  |  |  |  |
| 935 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D934*105.26%,2)` |  |  |  |  |
| 936 | Chiết khấu 3% |  |  | `=round(D935*3%,2)` |  |  |  |  |
| 937 | Thành tiền |  |  | `=D935-D936` | 25775 | `=D937*E937` |  |  |
| 938 | Thuế GTGT 10% |  |  |  |  | `=round(F937*10%,0)` |  |  |
| 939 | Tổng số tiền phải thanh toán |  |  |  |  | `=F937+F938` |  |  |
| 942 |  |  |  | Hà Nội, ngày 10 tháng 04 năm 2025 |  |  |  |  |
| 943 |  |  |  |                                         Người lập   |  |  |  |  |
| 952 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 955 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 04/2025 |  |  |  |  |  |  |  |
| 957 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 958 | 1 | 920817877953 | 2025-04-01 | 100.76 |  |  |  |  |
| 959 |  | Tổng lượng dùng thực tế |  | `=sum(D958)` |  |  |  |  |
| 960 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D959*105.26%,2)` |  |  |  |  |
| 961 | Chiết khấu 3% |  |  | `=round(D960*3%,2)` |  |  |  |  |
| 962 | Thành tiền |  |  | `=D960-D961` | 26190 | `=D962*E962` |  |  |
| 963 | Thuế GTGT 10% |  |  |  |  | `=round(F962*10%,0)` |  |  |
| 964 | Tổng số tiền phải thanh toán |  |  |  |  | `=F962+F963` |  |  |
| 967 |  |  |  | Hà Nội, ngày 06 tháng 05 năm 2025 |  |  |  |  |
| 968 |  |  |  |                                         Người lập   |  |  |  |  |
| 977 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 980 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 05/2025 |  |  |  |  |  |  |  |
| 982 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 983 | 1 | 920817877953 | 2025-06-01 | 111.34 |  |  |  |  |
| 984 |  | Tổng lượng dùng thực tế |  | `=sum(D983)` |  |  |  |  |
| 985 | Giá trước chiết khấu bao gồm phí dịch vụ 5.26% |  |  | `=round(D984*105.26%,2)` |  |  |  |  |
| 986 | Chiết khấu 3% |  |  | `=round(D985*3%,2)` |  |  |  |  |
| 987 | Thành tiền |  |  | `=D985-D986` | 26300 | `=D987*E987` |  |  |
| 988 | Thuế GTGT 10% |  |  |  |  | `=round(F987*10%,0)` |  |  |
| 989 | Tổng số tiền phải thanh toán |  |  |  |  | `=F987+F988` |  |  |
| 992 |  |  |  | Hà Nội, ngày 03 tháng 07 năm 2025 |  |  |  |  |
| 993 |  |  |  |                                         Người lập   |  |  |  |  |
| 1002 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 1004 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 07/2025 |  |  |  |  |  |  |  |
| 1006 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 1007 | 1 | 920817877953 | 2025-07-01 | 118.45 |  |  |  |  |
| 1008 |  | Tổng lượng dùng thực tế |  | `=sum(D1007)` |  |  |  |  |
| 1009 | Giá trước chiết khấu bao gồm phí dịch vụ 10% |  |  | `=round(D1008*(1+10%),2)` |  |  |  |  |
| 1010 | Chiết khấu 3% |  |  | `=round(D1009*3%,2)` |  |  |  |  |
| 1011 | Thành tiền |  |  | `=D1009-D1010` | 26382 | `=D1011*E1011` |  |  |
| 1012 | Thuế GTGT 10% |  |  |  |  | `=round(F1011*10%,0)` |  |  |
| 1013 | Tổng số tiền phải thanh toán |  |  |  |  | `=F1011+F1012` |  |  |
| 1016 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2025 |  |  |  |  |
| 1017 |  |  |  |                                         Người lập   |  |  |  |  |
| 1026 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 1029 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 08/2025 |  |  |  |  |  |  |  |
| 1031 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 1032 | 1 | 920817877953 | 2025-08-01 | 233.51 |  |  |  |  |
| 1033 |  | Tổng lượng dùng thực tế |  | `=sum(D1032)` |  |  |  |  |
| 1034 | Giá trước chiết khấu bao gồm phí dịch vụ 10% |  |  | `=round(D1033*(1+10%),2)` |  |  |  |  |
| 1035 | Chiết khấu 3% |  |  | `=round(D1034*3%,2)` |  |  |  |  |
| 1036 | Thành tiền |  |  | `=D1034-D1035` | 26502 | `=D1036*E1036` |  |  |
| 1037 | Thuế GTGT 10% |  |  |  |  | `=round(F1036*10%,0)` |  |  |
| 1038 | Tổng số tiền phải thanh toán |  |  |  |  | `=F1036+F1037` |  |  |
| 1041 |  |  |  | Hà Nội, ngày 03 tháng 09 năm 2025 |  |  |  |  |
| 1042 |  |  |  |                                         Người lập   |  |  |  |  |
| 1051 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 1054 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 09/2025 |  |  |  |  |  |  |  |
| 1056 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 1057 | 1 | 920817877953 | 2025-09-01 | 227.76 |  |  |  |  |
| 1058 |  | Tổng lượng dùng thực tế |  | `=sum(D1057)` |  |  |  |  |
| 1059 | Giá trước chiết khấu bao gồm phí dịch vụ 10% |  |  | `=round(D1058*(1+10%),2)` |  |  |  |  |
| 1060 | Chiết khấu 3% |  |  | `=round(D1059*3%,2)` |  |  |  |  |
| 1061 | Thành tiền |  |  | `=D1059-D1060` | 26446 | `=D1061*E1061` |  |  |
| 1062 | Thuế GTGT 10% |  |  |  |  | `=round(F1061*10%,0)` |  |  |
| 1063 | Tổng số tiền phải thanh toán |  |  |  |  | `=F1061+F1062` |  |  |
| 1066 |  |  |  | Hà Nội, ngày 02 tháng 10 năm 2025 |  |  |  |  |
| 1067 |  |  |  |                                         Người lập   |  |  |  |  |
| 1075 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 1078 | ĐỐI SOÁT CHI PHÍ PHARMACITY THÁNG 10/2025 |  |  |  |  |  |  |  |
| 1080 | STT | Số tài khoản | Tháng | Billing AWS (USD) | Tỷ giá  | Thành tiền |  |  |
| 1081 | 1 | 920817877953 | 2025-10-01 | 154.66 |  |  |  |  |
| 1082 |  | Tổng lượng dùng thực tế |  | `=sum(D1081)` |  |  |  |  |
| 1083 | Giá trước chiết khấu bao gồm phí dịch vụ 10% |  |  | `=round(D1082*(1+10%),2)` |  |  |  |  |
| 1084 | Chiết khấu 3% |  |  | `=round(D1083*3%,2)` |  |  |  |  |
| 1085 | Thành tiền |  |  | `=D1083-D1084` | 26347 | `=D1085*E1085` |  |  |
| 1086 | Thuế GTGT 10% |  |  |  |  | `=round(F1085*10%,0)` |  |  |
| 1087 | Tổng số tiền phải thanh toán |  |  |  |  | `=F1085+F1086` |  |  |
| 1090 |  |  |  | Hà Nội, ngày 03 tháng 11 năm 2025 |  |  |  |  |
| 1091 |  |  |  |                                         Người lập   |  |  |  |  |
| 1099 |  |  |  |                                     Ninh Hồng Sơn   |  |  |  |  |
| 1102 | Tháng | Billing AWS (USD) | Tax, Fee | Discount | Tỷ giá  | Thành tiền | Thuế GTGT | Tổng số tiền phải thanh toán |
| 1103 | 2024-10-01 | 302.08 | `=round(B1103*0.0526,2)` | `=round((B1103+C1103)*0.03,2)` | 25445 | `=round((B1103+C1103-D1103)*E1103,0)` | `=round(F1103*10%,0)` | `=F1103+G1103` |
| 1104 | 2024-11-01 | 178.39 | `=round(B1104*0.0526,2)` | `=round((B1104+C1104)*0.03,2)` | 25463 | `=round((B1104+C1104-D1104)*E1104,0)` | `=round(F1104*10%,0)` | `=F1104+G1104` |
| 1105 | 2024-12-01 | 179.25 | `=round(B1105*0.0526,2)` | `=round((B1105+C1105)*0.03,2)` | 25551 | `=round((B1105+C1105-D1105)*E1105,0)` | `=round(F1105*10%,0)` | `=F1105+G1105` |
| 1106 | 2025-01-01 | 171.48 | `=round(B1106*0.0526,2)` | `=round((B1106+C1106)*0.03,2)` | 25295 | `=round((B1106+C1106-D1106)*E1106,0)` | `=round(F1106*10%,0)` | `=F1106+G1106` |
| 1107 | 2025-02-01 | 169.26 | `=round(B1107*0.0526,2)` | `=round((B1107+C1107)*0.03,2)` | 25735 | `=round((B1107+C1107-D1107)*E1107,0)` | `=round(F1107*10%,0)` | `=F1107+G1107` |
| 1108 | 2025-03-01 | 118.51 | `=round(B1108*0.0526,2)` | `=round((B1108+C1108)*0.03,2)` | 25775 | `=round((B1108+C1108-D1108)*E1108,0)` | `=round(F1108*10%,0)` | `=F1108+G1108` |
| 1109 | 2025-04-01 | 100.76 | `=round(B1109*0.0526,2)` | `=round((B1109+C1109)*0.03,2)` | 26190 | `=round((B1109+C1109-D1109)*E1109,0)` | `=round(F1109*10%,0)` | `=F1109+G1109` |
| 1110 | 2025-05-01 | 110.32 | `=round(B1110*0.0526,2)` | `=round((B1110+C1110)*0.03,2)` | 26225 | `=round((B1110+C1110-D1110)*E1110,0)` | `=round(F1110*10%,0)` | `=F1110+G1110` |
| 1111 | 2025-06-01 | 111.34 | `=round(B1111*0.0526,2)` | `=round((B1111+C1111)*0.03,2)` | 26300 | `=round((B1111+C1111-D1111)*E1111,0)` | `=round(F1111*10%,0)` | `=F1111+G1111` |
| 1112 | 2025-07-01 | 118.45 | `=round(B1112*0.1,2)` | `=round((B1112+C1112)*0.03,2)` | 26382 | `=round((B1112+C1112-D1112)*E1112,0)` | `=round(F1112*10%,0)` | `=F1112+G1112` |
| 1113 | 2025-08-02 | 233.51 | `=round(B1113*0.1,2)` | `=round((B1113+C1113)*0.03,2)` | 26502 | `=round((B1113+C1113-D1113)*E1113,0)` | `=round(F1113*10%,0)` | `=F1113+G1113` |
| 1114 | 2025-09-01 | 227.76 | `=round(B1114*0.1,2)` | `=round((B1114+C1114)*0.03,2)` | 26446 | `=round((B1114+C1114-D1114)*E1114,0)` | `=round(F1114*10%,0)` | `=F1114+G1114` |
| 1115 | 2025-10-01 | 154.66 | `=round(B1115*0.1,2)` | `=round((B1115+C1115)*0.03,2)` | 26347 | `=round((B1115+C1115-D1115)*E1115,0)` | `=round(F1115*10%,0)` | `=F1115+G1115` |
| 1116 | Tổng |  |  |  |  | `=SUM(F1103:F1115)` | `=SUM(G1103:G1115)` | `=SUM(H1103:H1115)` |

> *Đã bỏ qua 583 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (362 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=round(B{r}*0.0526,2)` | 9 | `C1103` |
| C | `=round(B{r}*0.1,2)` | 4 | `C1112` |
| D | `=sum(D{r})` | 43 | `D170` |
| D | `=round(D{r}*3%,2)` | 27 | `D492` |
| D | `=D{r}-D{r}` | 27 | `D493` |
| D | `=D{r}*0.07` | 23 | `D11` |
| D | `=round(D{r}+D{r},2)` | 13 | `D211` |
| D | `=round((B{r}+C{r})*0.03,2)` | 13 | `D1103` |
| D | `=round(D{r}*105%,2)` | 12 | `D491` |
| D | `=D{r}+D{r}` | 11 | `D12` |
| D | `=round(D{r}*105.26%,2)` | 11 | `D744` |
| D | `=D{r}` | 7 | `D10` |
| D | `=round(D{r}*(1+10%),2)` | 4 | `D1009` |
| D | `=sum(D{r}:D{r})` | 1 | `D151` |
| D | `=round(D{r}*0.07,2)` | 1 | `D470` |
| F | `=D{r}*E{r}` | 41 | `F211` |
| F | `=round(D{r}*E{r},0)` | 18 | `F9` |
| F | `=round(F{r}*10%,0)` | 15 | `F747` |
| F | `=F{r}+F{r}` | 15 | `F748` |
| F | `=round((B{r}+C{r}-D{r})*E{r},0)` | 13 | `F1103` |
| F | `=sum(F{r}:F{r})` | 11 | `F12` |
| F | `=F{r}*0.07` | 10 | `F11` |
| F | `=sum(F{r})` | 2 | `F170` |
| F | `=SUM(F{r}:F{r})` | 1 | `F1116` |
| G | `=round(F{r}*10%,0)` | 13 | `G1103` |
| G | `=SUM(G{r}:G{r})` | 1 | `G1116` |
| H | `=F{r}+G{r}` | 13 | `H1103` |
| H | `=D{r}*22880` | 1 | `H9` |
| H | `=D{r}+D{r}` | 1 | `H150` |
| H | `=SUM(H{r}:H{r})` | 1 | `H1116` |
