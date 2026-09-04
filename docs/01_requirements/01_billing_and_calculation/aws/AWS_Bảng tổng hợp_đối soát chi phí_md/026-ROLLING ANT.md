# ROLLING ANT

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ROLLING ANT`  
> **Vùng dữ liệu:** 286 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - ROLLING ANT |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 586794456892 | 2024-12-01 | 3.13 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 25551 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | ĐỐI SOÁT CHI PHÍ AWS - ROLLING ANT |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 586794456892 | 2025-01-01 | 1.62 |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D16*(1+5.26%),2)` |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 19 | Thành tiền |  |  | `=D17-D18` | 25295 | `=round(D19*E19,0)` |
| 20 | Số tiền cam kết hỗ trợ tháng này |  |  | 500 |  |  |
| 21 | Số tiền cam kết hỗ trợ còn lại chuyển tháng sau |  |  | `=D20-D19` |  |  |
| 25 | ĐỐI SOÁT CHI PHÍ AWS - ROLLING ANT |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 28 | 1 | 586794456892 | 2025-03-01 | 1.42 |  |  |
| 29 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D28*(1+5.26%),2)` |  |  |
| 30 | Chiết khấu (2%) |  |  | `=round(D29*2%,2)` |  |  |
| 31 | Thành tiền |  |  | `=D29-D30` | 25775 | `=round(D31*E31,0)` |
| 32 | Thuế GTGT (10%) |  |  |  |  | `=round(F31*10%,0)` |
| 33 | Tổng số tiền phải thanh toán |  |  |  |  | `=F31+F32` |
| 37 | ĐỐI SOÁT CHI PHÍ AWS - ROLLING ANT |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 40 | 1 | 586794456892 | 2025-04-01 | 1.55 |  |  |
| 41 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D40*(1+5.26%),2)` |  |  |
| 42 | Chiết khấu (2%) |  |  | `=round(D41*2%,2)` |  |  |
| 43 | Thành tiền |  |  | `=D41-D42` | 26190 | `=round(D43*E43,0)` |
| 44 | Thuế GTGT (10%) |  |  |  |  | `=round(F43*10%,0)` |
| 45 | Tổng số tiền phải thanh toán |  |  |  |  | `=F43+F44` |
| 49 | ĐỐI SOÁT CHI PHÍ AWS - ROLLING ANT |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 52 | 1 | 586794456892 | 2025-04-01 | 1.55 |  |  |
| 53 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D52*(1+5.26%),2)` |  |  |
| 54 | Chiết khấu (2%) |  |  | `=round(D53*2%,2)` |  |  |
| 55 | Thành tiền |  |  | `=D53-D54` | 26190 | `=round(D55*E55,0)` |
| 56 | Thuế GTGT (10%) |  |  |  |  | `=round(F55*10%,0)` |
| 57 | Tổng số tiền phải thanh toán |  |  |  |  | `=F55+F56` |
| 60 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 05/2025- ROLLING ANT |  |  |  |  |  |
| 62 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 63 | 1 | Billing AWS | 12.1 | 1.62 |  |  |
| 64 | 2 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) | `=round(C63*(1+5.26%),2)` | `=round(D63*(1+5.26%),2)` |  |  |
| 65 | 3 | Chiết khấu (2%) | `=round(C64*2%,2)` | `=round(D64*2%,2)` |  |  |
| 66 | 4 | Tổng cộng | `=C64-C65` | `=D64-D65` |  |  |
| 67 | 5 | Tỷ giá | 26225 | `=C67` |  |  |
| 68 | 6 | Thành tiền | `=round(C66*C67,0)` | `=round(D66*D67,0)` |  |  |
| 69 | 7 | Thuế GTGT (10%) | `=round(C68*10%,0)` | `=round(D68*10%,0)` |  |  |
| 70 | 8 | Tổng số tiền phải thanh toán | `=C68+C69` | `=D68+D69` |  |  |
| 74 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 06/2025- ROLLING ANT |  |  |  |  |  |
| 76 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 77 | 1 | Billing AWS | 11.71 | 1.81 |  |  |
| 78 | 2 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) | `=round(C77*(1+5.26%),2)` | `=round(D77*(1+5.26%),2)` |  |  |
| 79 | 3 | Chiết khấu (2%) | `=round(C78*2%,2)` | `=round(D78*2%,2)` |  |  |
| 80 | 4 | Tổng cộng | `=C78-C79` | `=D78-D79` |  |  |
| 81 | 5 | Tỷ giá | 26300 | `=C81` |  |  |
| 82 | 6 | Thành tiền | `=round(C80*C81,0)` | `=round(D80*D81,0)` |  |  |
| 83 | 7 | Thuế GTGT (10%) | `=round(C82*10%,0)` | `=round(D82*10%,0)` |  |  |
| 84 | 8 | Tổng số tiền phải thanh toán | `=C82+C83` | `=D82+D83` |  |  |
| 88 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 07/2025- ROLLING ANT |  |  |  |  |  |
| 90 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 91 | 1 | Billing AWS | 12.1 | 1.93 |  |  |
| 92 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C91*(1+10%),2)` | `=round(D91*(1+10%),2)` |  |  |
| 93 | 3 | Chiết khấu (2%) | `=round(C92*2%,2)` | `=round(D92*2%,2)` |  |  |
| 94 | 4 | Tổng cộng | `=C92-C93` | `=D92-D93` |  |  |
| 95 | 5 | Tỷ giá | 26382 | `=C95` |  |  |
| 96 | 6 | Thành tiền | `=round(C94*C95,0)` | `=round(D94*D95,0)` |  |  |
| 97 | 7 | Thuế GTGT (10%) | `=round(C96*10%,0)` | `=round(D96*10%,0)` |  |  |
| 98 | 8 | Tổng số tiền phải thanh toán | `=C96+C97` | `=D96+D97` |  |  |
| 103 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 08/2025- ROLLING ANT |  |  |  |  |  |
| 105 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 106 | 1 | Billing AWS | 12.1 | 2.2 |  |  |
| 107 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C106*(1+10%),2)` | `=round(D106*(1+10%),2)` |  |  |
| 108 | 3 | Chiết khấu (2%) | `=round(C107*2%,2)` | `=round(D107*2%,2)` |  |  |
| 109 | 4 | Tổng cộng | `=C107-C108` | `=D107-D108` |  |  |
| 110 | 5 | Tỷ giá | 26502 | `=C110` |  |  |
| 111 | 6 | Thành tiền | `=round(C109*C110,0)` | `=round(D109*D110,0)` |  |  |
| 112 | 7 | Thuế GTGT (10%) | `=round(C111*10%,0)` | `=round(D111*10%,0)` |  |  |
| 113 | 8 | Tổng số tiền phải thanh toán | `=C111+C112` | `=D111+D112` |  |  |
| 118 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 09/2025- ROLLING ANT |  |  |  |  |  |
| 120 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 121 | 1 | Billing AWS | 11.71 | 2.31 |  |  |
| 122 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C121*(1+10%),2)` | `=round(D121*(1+10%),2)` |  |  |
| 123 | 3 | Chiết khấu (2%) | `=round(C122*2%,2)` | `=round(D122*2%,2)` |  |  |
| 124 | 4 | Tổng cộng | `=C122-C123` | `=D122-D123` |  |  |
| 125 | 5 | Tỷ giá | 26446 | `=C125` |  |  |
| 126 | 6 | Thành tiền | `=round(C124*C125,0)` | `=round(D124*D125,0)` |  |  |
| 127 | 7 | Thuế GTGT (10%) | `=round(C126*10%,0)` | `=round(D126*10%,0)` |  |  |
| 128 | 8 | Tổng số tiền phải thanh toán | `=C126+C127` | `=D126+D127` |  |  |
| 133 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 10/2025- ROLLING ANT |  |  |  |  |  |
| 135 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 136 | 1 | Billing AWS | 12.1 | 2.3 |  |  |
| 137 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C136*(1+10%),2)` | `=round(D136*(1+10%),2)` |  |  |
| 138 | 3 | Chiết khấu (2%) | `=round(C137*2%,2)` | `=round(D137*2%,2)` |  |  |
| 139 | 4 | Tổng cộng | `=C137-C138` | `=D137-D138` |  |  |
| 140 | 5 | Tỷ giá | 26347 | `=C140` |  |  |
| 141 | 6 | Thành tiền | `=round(C139*C140,0)` | `=round(D139*D140,0)` |  |  |
| 142 | 7 | Thuế GTGT (10%) | `=round(C141*10%,0)` | `=round(D141*10%,0)` |  |  |
| 143 | 8 | Tổng số tiền phải thanh toán | `=C141+C142` | `=D141+D142` |  |  |
| 149 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 11/2025- ROLLING ANT |  |  |  |  |  |
| 151 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 152 | 1 | Billing AWS | 11.71 | 3.21 |  |  |
| 153 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C152*(1+10%),2)` | `=round(D152*(1+10%),2)` |  |  |
| 154 | 3 | Chiết khấu (2%) | `=round(C153*2%,2)` | `=round(D153*2%,2)` |  |  |
| 155 | 4 | Tổng cộng | `=C153-C154` | `=D153-D154` |  |  |
| 156 | 5 | Tỷ giá | 26412 | `=C156` |  |  |
| 157 | 6 | Thành tiền | `=round(C155*C156,0)` | `=round(D155*D156,0)` |  |  |
| 158 | 7 | Thuế GTGT (10%) | `=round(C157*10%,0)` | `=round(D157*10%,0)` |  |  |
| 159 | 8 | Tổng số tiền phải thanh toán | `=C157+C158` | `=D157+D158` |  |  |
| 165 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 12/2025- ROLLING ANT |  |  |  |  |  |
| 167 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 168 | 1 | Billing AWS | 12.1 | 2.94 |  |  |
| 169 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C168*(1+10%),2)` | `=round(D168*(1+10%),2)` |  |  |
| 170 | 3 | Chiết khấu (2%) | `=round(C169*2%,2)` | `=round(D169*2%,2)` |  |  |
| 171 | 4 | Tổng cộng | `=C169-C170` | `=D169-D170` |  |  |
| 172 | 5 | Tỷ giá | 26377 | `=C172` |  |  |
| 173 | 6 | Thành tiền | `=round(C171*C172,0)` | `=round(D171*D172,0)` |  |  |
| 174 | 7 | Thuế GTGT (10%) | `=round(C173*10%,0)` | `=round(D173*10%,0)` |  |  |
| 175 | 8 | Tổng số tiền phải thanh toán | `=C173+C174` | `=D173+D174` |  |  |
| 181 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 01/2026- ROLLING ANT |  |  |  |  |  |
| 183 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 184 | 1 | Billing AWS | 12.1 | 2.98 |  |  |
| 185 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C184*(1+10%),2)` | `=round(D184*(1+10%),2)` |  |  |
| 186 | 3 | Chiết khấu (2%) | `=round(C185*2%,2)` | `=round(D185*2%,2)` |  |  |
| 187 | 4 | Tổng cộng | `=C185-C186` | `=D185-D186` |  |  |
| 188 | 5 | Tỷ giá | 26145 | `=C188` |  |  |
| 189 | 6 | Thành tiền | `=round(C187*C188,0)` | `=round(D187*D188,0)` |  |  |
| 190 | 7 | Thuế GTGT (10%) | `=round(C189*10%,0)` | `=round(D189*10%,0)` |  |  |
| 191 | 8 | Tổng số tiền phải thanh toán | `=C189+C190` | `=D189+D190` |  |  |
| 197 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 02/2026- ROLLING ANT |  |  |  |  |  |
| 199 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 200 | 1 | Billing AWS | 10.94 | 2.36 |  |  |
| 201 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C200*(1+10%),2)` | `=round(D200*(1+10%),2)` |  |  |
| 202 | 3 | Chiết khấu (2%) | `=round(C201*2%,2)` | `=round(D201*2%,2)` |  |  |
| 203 | 4 | Tổng cộng | `=C201-C202` | `=D201-D202` |  |  |
| 204 | 5 | Tỷ giá | 26240 | `=C204` |  |  |
| 205 | 6 | Thành tiền | `=round(C203*C204,0)` | `=round(D203*D204,0)` |  |  |
| 206 | 7 | Thuế GTGT (10%) | `=round(C205*10%,0)` | `=round(D205*10%,0)` |  |  |
| 207 | 8 | Tổng số tiền phải thanh toán | `=C205+C206` | `=D205+D206` |  |  |
| 213 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 03/2026- ROLLING ANT |  |  |  |  |  |
| 215 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 216 | 1 | Billing AWS | 12.12 | 6.56 |  |  |
| 217 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C216*(1+10%),2)` | `=round(D216*(1+10%),2)` |  |  |
| 218 | 3 | Chiết khấu (2%) | `=round(C217*2%,2)` | `=round(D217*2%,2)` |  |  |
| 219 | 4 | Tổng cộng | `=C217-C218` | `=D217-D218` |  |  |
| 220 | 5 | Tỷ giá | 26357 | `=C220` |  |  |
| 221 | 6 | Thành tiền | `=round(C219*C220,0)` | `=round(D219*D220,0)` |  |  |
| 222 | 7 | Thuế GTGT (10%) | `=round(C221*10%,0)` | `=round(D221*10%,0)` |  |  |
| 223 | 8 | Tổng số tiền phải thanh toán | `=C221+C222` | `=D221+D222` |  |  |
| 229 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 04/2026- ROLLING ANT |  |  |  |  |  |
| 231 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 232 | 1 | Billing AWS | 11.73 | 8.29 |  |  |
| 233 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C232*(1+10%),2)` | `=round(D232*(1+10%),2)` |  |  |
| 234 | 3 | Chiết khấu (2%) | `=round(C233*2%,2)` | `=round(D233*2%,2)` |  |  |
| 235 | 4 | Tổng cộng | `=C233-C234` | `=D233-D234` |  |  |
| 236 | 5 | Tỷ giá | 26368 | `=C236` |  |  |
| 237 | 6 | Thành tiền | `=round(C235*C236,0)` | `=round(D235*D236,0)` |  |  |
| 238 | 7 | Thuế GTGT (10%) | `=round(C237*10%,0)` | `=round(D237*10%,0)` |  |  |
| 239 | 8 | Tổng số tiền phải thanh toán | `=C237+C238` | `=D237+D238` |  |  |
| 245 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 05/2026- ROLLING ANT |  |  |  |  |  |
| 247 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 248 | 1 | Billing AWS | 12.15 | 7.41 |  |  |
| 249 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C248*(1+10%),2)` | `=round(D248*(1+10%),2)` |  |  |
| 250 | 3 | Chiết khấu (2%) | `=round(C249*2%,2)` | `=round(D249*2%,2)` |  |  |
| 251 | 4 | Tổng cộng | `=C249-C250` | `=D249-D250` |  |  |
| 252 | 5 | Tỷ giá | 26395 | `=C252` |  |  |
| 253 | 6 | Thành tiền | `=round(C251*C252,0)` | `=round(D251*D252,0)` |  |  |
| 254 | 7 | Thuế GTGT (10%) | `=round(C253*10%,0)` | `=round(D253*10%,0)` |  |  |
| 255 | 8 | Tổng số tiền phải thanh toán | `=C253+C254` | `=D253+D254` |  |  |
| 260 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 06/2026- ROLLING ANT |  |  |  |  |  |
| 262 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 263 | 1 | Billing AWS | 11.8 | 3.49 |  |  |
| 264 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C263*(1+10%),2)` | `=round(D263*(1+10%),2)` |  |  |
| 265 | 3 | Chiết khấu (2%) | `=round(C264*2%,2)` | `=round(D264*2%,2)` |  |  |
| 266 | 4 | Tổng cộng | `=C264-C265` | `=D264-D265` |  |  |
| 267 | 5 | Tỷ giá | 26466 | `=C267` |  |  |
| 268 | 6 | Thành tiền | `=round(C266*C267,0)` | `=round(D266*D267,0)` |  |  |
| 269 | 7 | Thuế GTGT (10%) | `=round(C268*10%,0)` | `=round(D268*10%,0)` |  |  |
| 270 | 8 | Tổng số tiền phải thanh toán | `=C268+C269` | `=D268+D269` |  |  |
| 276 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 07/2026- ROLLING ANT |  |  |  |  |  |
| 278 | STT | Nội dung | ID: 055291422878 | ID: 586794456892 |  |  |
| 279 | 1 | Billing AWS | 12.15 | 3.44 |  |  |
| 280 | 2 | Giá trước chiết khấu (bao gồm 10% phí dịch vụ) | `=round(C279*(1+10%),2)` | `=round(D279*(1+10%),2)` |  |  |
| 281 | 3 | Chiết khấu (2%) | `=round(C280*2%,2)` | `=round(D280*2%,2)` |  |  |
| 282 | 4 | Tổng cộng | `=C280-C281` | `=D280-D281` |  |  |
| 283 | 5 | Tỷ giá | 26475 | `=C283` |  |  |
| 284 | 6 | Thành tiền | `=round(C282*C283,0)` | `=round(D282*D283,0)` |  |  |
| 285 | 7 | Thuế GTGT (10%) | `=round(C284*10%,0)` | `=round(D284*10%,0)` |  |  |
| 286 | 8 | Tổng số tiền phải thanh toán | `=C284+C285` | `=D284+D285` |  |  |

> *Đã bỏ qua 96 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (224 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=round(C{r}*2%,2)` | 15 | `C65` |
| C | `=C{r}-C{r}` | 15 | `C66` |
| C | `=round(C{r}*C{r},0)` | 15 | `C68` |
| C | `=round(C{r}*10%,0)` | 15 | `C69` |
| C | `=C{r}+C{r}` | 15 | `C70` |
| C | `=round(C{r}*(1+10%),2)` | 13 | `C92` |
| C | `=round(C{r}*(1+5.26%),2)` | 2 | `C64` |
| D | `=D{r}-D{r}` | 21 | `D7` |
| D | `=round(D{r}*2%,2)` | 20 | `D6` |
| D | `=C{r}` | 15 | `D67` |
| D | `=round(D{r}*D{r},0)` | 15 | `D68` |
| D | `=round(D{r}*10%,0)` | 15 | `D69` |
| D | `=D{r}+D{r}` | 15 | `D70` |
| D | `=round(D{r}*(1+10%),2)` | 13 | `D92` |
| D | `=round(D{r}*(1+5.26%),2)` | 7 | `D5` |
| F | `=round(D{r}*E{r},0)` | 5 | `F7` |
| F | `=round(F{r}*10%,0)` | 4 | `F8` |
| F | `=F{r}+F{r}` | 4 | `F9` |
