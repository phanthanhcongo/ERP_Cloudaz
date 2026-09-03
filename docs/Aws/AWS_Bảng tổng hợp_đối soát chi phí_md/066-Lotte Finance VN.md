# Lotte Finance VN

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Lotte Finance VN`  
> **Vùng dữ liệu:** 423 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/01/2024 | Thành tiền |
| 4 | 1 | 531247559020-AWS service charges | 2024-01-01 | Phí thực tế | 5066.53 |  |  |
| 5 |  |  | 2024-01-01 | Chiết khấu AWS SPP Discount | -354.92 |  |  |
| 6 |  |  | 2024-01-01 | Tổng invoice | `=E4+E5` |  |  |
| 7 | 2 | 531247559020-AWS Marketplace charges | 2024-01-01 | Phí thực tế | 110.4 |  |  |
| 8 |  |  | 2024-01-01 | Tổng invoice | 110.4 |  |  |
| 9 | Lượng dùng thực tế  |  |  |  | `=E4+E7` |  |  |
| 10 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E9*5.26%,2)` |  |  |
| 11 |         Tổng số tiền trước chiết khấu |  |  |  | `=E9+E10` |  |  |
| 12 | Chiết khấu (3%) |  |  |  | `=round(E11*3%,2)` |  |  |
| 13 | Tổng số tiền phải thanh toán |  |  |  | `=E11-E12` | 24578 | `=E13*F13` |
| 17 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 19 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 29/02/2024 | Thành tiền |
| 20 | 1 | 531247559020-AWS service charges | 2024-02-01 | Phí thực tế | 4785.66 |  |  |
| 21 |  |  | 2024-02-01 | Chiết khấu AWS SPP Discount | -335.21 |  |  |
| 22 |  |  | 2024-02-01 | Credit của Lotte | -0.04 |  |  |
| 23 |  |  | 2024-02-01 | Tổng invoice | `=E20+E21+E22` |  |  |
| 24 | 2 | 531247559020-AWS Marketplace charges | 2024-02-01 | Phí thực tế | 103.13 |  |  |
| 25 |  |  | 2024-02-01 | Tổng invoice | 103.13 |  |  |
| 26 | Lượng dùng thực tế  |  |  |  | `=E20+E24+E22` |  |  |
| 27 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E26*5.26%,2)` |  |  |
| 28 |         Tổng số tiền trước chiết khấu |  |  |  | `=E26+E27` |  |  |
| 29 | Chiết khấu (3%) |  |  |  | `=round(E28*3%,2)` |  |  |
| 30 | Tổng số tiền phải thanh toán |  |  |  | `=E28-E29` | 24802 | `=E30*F30` |
| 34 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 36 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/03/2024 | Thành tiền |
| 37 | 1 | 531247559020-AWS service charges | 2024-03-01 | Phí thực tế | 5150.36 |  |  |
| 38 |  |  | 2024-03-01 | Chiết khấu AWS SPP Discount | -361.03 |  |  |
| 39 |  |  | 2024-03-01 | Tổng invoice | `=E37+E38` |  |  |
| 40 | 2 | 531247559020-AWS Marketplace charges | 2024-03-01 | Phí thực tế | 109.68 |  |  |
| 41 |  |  | 2024-03-01 | Tổng invoice | `=E40` |  |  |
| 42 | Lượng dùng thực tế  |  |  |  | `=E37+E40` |  |  |
| 43 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E42*5.26%,2)` |  |  |
| 44 |         Tổng số tiền trước chiết khấu |  |  |  | `=E42+E43` |  |  |
| 45 | Chiết khấu (3%) |  |  |  | `=round(E44*3%,2)` |  |  |
| 46 | Tổng số tiền phải thanh toán |  |  |  | `=E44-E45` | 24972 | `=E46*F46` |
| 50 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 52 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 27/04/2024 | Thành tiền |
| 53 | 1 | 531247559020-AWS service charges | 2024-04-01 | Phí thực tế | 5743.33 |  |  |
| 54 |  |  | 2024-04-01 | Chiết khấu AWS SPP Discount | -402.37 |  |  |
| 55 |  |  | 2024-04-01 | Tổng invoice | `=E53+E54` |  |  |
| 56 | 2 | 531247559020-AWS Marketplace charges | 2024-04-01 | Phí thực tế | 105.95 |  |  |
| 57 |  |  | 2024-04-01 | Tổng invoice | `=E56` |  |  |
| 58 | Lượng dùng thực tế  |  |  |  | `=E53+E56` |  |  |
| 59 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E58*5.26%,2)` |  |  |
| 60 |         Tổng số tiền trước chiết khấu |  |  |  | `=E58+E59` |  |  |
| 61 | Chiết khấu (3%) |  |  |  | `=round(E60*3%,2)` |  |  |
| 62 | Tổng số tiền phải thanh toán |  |  |  | `=E60-E61` | 25458 | `=E62*F62` |
| 66 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 68 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/06/2024 | Thành tiền |
| 69 | 1 | 531247559020-AWS service charges | 2024-06-01 | Phí thực tế | 4998.13 |  |  |
| 70 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -350.1 |  |  |
| 71 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E69+E70` |  |  |
| 72 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 105.57 |  |  |
| 73 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E72` |  |  |
| 74 | Lượng dùng thực tế  |  |  |  | `=E69+E72` |  |  |
| 75 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E74*5.26%,2)` |  |  |
| 76 |         Tổng số tiền trước chiết khấu |  |  |  | `=E74+E75` |  |  |
| 77 | Chiết khấu (5%) |  |  |  | `=round(E76*5%,2)` |  |  |
| 78 | Thành tiền |  |  |  | `=E76-E77` | 25473 | `=E78*F78` |
| 79 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G78*10%,0)` |
| 80 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G78+G79` |
| 84 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/07/2024 | Thành tiền |
| 87 | 1 | 531247559020-AWS service charges | 2024-07-01 | Phí thực tế | 4570.64 |  |  |
| 88 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -320.23 |  |  |
| 89 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E87+E88` |  |  |
| 90 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 109.1 |  |  |
| 91 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E90` |  |  |
| 92 | Lượng dùng thực tế  |  |  |  | `=E87+E90` |  |  |
| 93 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E92*5.26%,2)` |  |  |
| 94 |         Tổng số tiền trước chiết khấu |  |  |  | `=E92+E93` |  |  |
| 95 | Chiết khấu (5%) |  |  |  | `=round(E94*5%,2)` |  |  |
| 96 | Thành tiền |  |  |  | `=E94-E95` | 25405 | `=E96*F96` |
| 97 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G96*10%,0)` |
| 98 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G96+G97` |
| 102 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 104 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/08/2024 | Thành tiền |
| 105 | 1 | 531247559020-AWS service charges | 2024-08-01 | Phí thực tế | 4600.33 |  |  |
| 106 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -322.4 |  |  |
| 107 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E105+E106` |  |  |
| 108 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 109.05 |  |  |
| 109 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E108` |  |  |
| 110 | Lượng dùng thực tế  |  |  |  | `=E105+E108` |  |  |
| 111 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E110*5.26%,2)` |  |  |
| 112 |         Tổng số tiền trước chiết khấu |  |  |  | `=E110+E111` |  |  |
| 113 | Chiết khấu (5%) |  |  |  | `=round(E112*5%,2)` |  |  |
| 114 | Thành tiền |  |  |  | `=E112-E113` | 25080 | `=E114*F114` |
| 115 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G114*10%,0)` |
| 116 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G114+G115` |
| 120 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 122 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/08/2024 | Thành tiền |
| 123 | 1 | 531247559020-AWS service charges | 2024-09-01 | Phí thực tế | 4610.8 |  |  |
| 124 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -323.54 |  |  |
| 125 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E123+E124` |  |  |
| 126 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 104.65 |  |  |
| 127 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E126` |  |  |
| 128 | Lượng dùng thực tế  |  |  |  | `=E123+E126` |  |  |
| 129 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E128*5.26%,2)` |  |  |
| 130 |         Tổng số tiền trước chiết khấu |  |  |  | `=E128+E129` |  |  |
| 131 | Chiết khấu (5%) |  |  |  | `=round(E130*5%,2)` |  |  |
| 132 | Thành tiền |  |  |  | `=E130-E131` | 24733 | `=E132*F132` |
| 133 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G132*10%,0)` |
| 134 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G132+G133` |
| 138 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 140 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/10/2024 | Thành tiền |
| 141 | 1 | 531247559020-AWS service charges | 2024-10-01 | Phí thực tế | 4800.87 |  |  |
| 142 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -337.51 |  |  |
| 143 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E141+E142` |  |  |
| 144 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 108.72 |  |  |
| 145 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E144` |  |  |
| 146 | Lượng dùng thực tế  |  |  |  | `=E141+E144` |  |  |
| 147 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E146*5.26%,2)` |  |  |
| 148 |         Tổng số tiền trước chiết khấu |  |  |  | `=E146+E147` |  |  |
| 149 | Chiết khấu (5%) |  |  |  | `=round(E148*5%,2)` |  |  |
| 150 | Thành tiền |  |  |  | `=E148-E149` | 25445 | `=E150*F150` |
| 151 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G150*10%,0)` |
| 152 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G150+G151` |
| 156 | TỔNG HỢP CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 158 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/11/2024 | Thành tiền |
| 159 | 1 | 531247559020-AWS service charges | 2024-11-01 | Phí thực tế | 4649.18 |  |  |
| 160 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -326.31 |  |  |
| 161 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E159+E160` |  |  |
| 162 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 105.74 |  |  |
| 163 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E162` |  |  |
| 164 | Lượng dùng thực tế  |  |  |  | `=E159+E162` |  |  |
| 165 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E164*5.26%,2)` |  |  |
| 166 |         Tổng số tiền trước chiết khấu |  |  |  | `=E164+E165` |  |  |
| 167 | Chiết khấu (5%) |  |  |  | `=round(E166*5%,2)` |  |  |
| 168 | Thành tiền |  |  |  | `=E166-E167` | 25463 | `=E168*F168` |
| 169 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G168*10%,0)` |
| 170 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G168+G169` |
| 174 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 176 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/12/2024 | Thành tiền |
| 177 | 1 | 531247559020-AWS service charges | 2024-12-01 | Phí thực tế | 4885.63 |  |  |
| 178 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -342.69 |  |  |
| 179 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E177+E178` |  |  |
| 180 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 108.21 |  |  |
| 181 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E180` |  |  |
| 182 | Lượng dùng thực tế  |  |  |  | `=E177+E180` |  |  |
| 183 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E182*5.26%,2)` |  |  |
| 184 |         Tổng số tiền trước chiết khấu |  |  |  | `=E182+E183` |  |  |
| 185 | Chiết khấu (5%) |  |  |  | `=round(E184*5%,2)` |  |  |
| 186 | Thành tiền |  |  |  | `=E184-E185` | 25551 | `=E186*F186` |
| 187 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G186*10%,0)` |
| 188 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G186+G187` |
| 192 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 194 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 25/01/2025 | Thành tiền |
| 195 | 1 | 531247559020-AWS service charges | 2025-01-01 | Phí thực tế | 4828.54 |  |  |
| 196 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -338.47 |  |  |
| 197 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E195+E196` |  |  |
| 198 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 107.74 |  |  |
| 199 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E198` |  |  |
| 200 | Lượng dùng thực tế  |  |  |  | `=E195+E198` |  |  |
| 201 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E200*5.26%,2)` |  |  |
| 202 |         Tổng số tiền trước chiết khấu |  |  |  | `=E200+E201` |  |  |
| 203 | Chiết khấu (5%) |  |  |  | `=round(E202*5%,2)` |  |  |
| 204 | Thành tiền |  |  |  | `=E202-E203` | 25295 | `=E204*F204` |
| 205 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G204*10%,0)` |
| 206 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G204+G205` |
| 209 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 211 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 28/02/2025 | Thành tiền |
| 212 | 1 | 531247559020-AWS service charges | 2025-02-01 | Phí thực tế | 4477.6 |  |  |
| 213 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -314.03 |  |  |
| 214 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E212+E213` |  |  |
| 215 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 97.22 |  |  |
| 216 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E215` |  |  |
| 217 | Lượng dùng thực tế  |  |  |  | `=E212+E215` |  |  |
| 218 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E217*5.26%,2)` |  |  |
| 219 |         Tổng số tiền trước chiết khấu |  |  |  | `=E217+E218` |  |  |
| 220 | Chiết khấu (5%) |  |  |  | `=round(E219*5%,2)` |  |  |
| 221 | Thành tiền |  |  |  | `=E219-E220` | 25735 | `=E221*F221` |
| 222 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G221*10%,0)` |
| 223 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G221+G222` |
| 227 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 229 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/03/2025 | Thành tiền |
| 230 | 1 | 531247559020-AWS service charges | 2025-03-01 | Phí thực tế | 5129.99 |  |  |
| 231 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -359.66 |  |  |
| 232 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E230+E231` |  |  |
| 233 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 106.79 |  |  |
| 234 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E233` |  |  |
| 235 | Lượng dùng thực tế  |  |  |  | `=E230+E233` |  |  |
| 236 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E235*5.26%,2)` |  |  |
| 237 |         Tổng số tiền trước chiết khấu |  |  |  | `=E235+E236` |  |  |
| 238 | Chiết khấu (5%) |  |  |  | `=round(E237*5%,2)` |  |  |
| 239 | Thành tiền |  |  |  | `=E237-E238` | 25775 | `=E239*F239` |
| 240 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G239*10%,0)` |
| 241 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G239+G240` |
| 245 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 247 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 29/04/2025 | Thành tiền |
| 248 | 1 | 531247559020-AWS service charges | 2025-04-01 | Phí thực tế | 4991.96 |  |  |
| 249 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -350.03 |  |  |
| 250 |  |  | 1970-01-01 07:00:00 | Tax | 244.08 |  |  |
| 251 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E248+E249+E250` |  |  |
| 252 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 102.97 |  |  |
| 253 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E252` |  |  |
| 254 | Lượng dùng thực tế  |  |  |  | `=E248+E252` |  |  |
| 255 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E254*5.26%,2)` |  |  |
| 256 |         Tổng số tiền trước chiết khấu |  |  |  | `=E254+E255` |  |  |
| 257 | Chiết khấu (5%) |  |  |  | `=round(E256*5%,2)` |  |  |
| 258 | Thành tiền |  |  |  | `=E256-E257` | 26190 | `=E258*F258` |
| 259 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G258*10%,0)` |
| 260 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G258+G259` |
| 264 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 266 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/05/2025 | Thành tiền |
| 267 | 1 | 531247559020-AWS service charges | 2025-05-01 | Phí thực tế | 5107.08 |  |  |
| 268 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -358.09 |  |  |
| 269 |  |  | 1970-01-01 07:00:00 | Tax | 249.69 |  |  |
| 270 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E267+E268+E269` |  |  |
| 271 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 106.17 |  |  |
| 272 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E271` |  |  |
| 273 | Lượng dùng thực tế  |  |  |  | `=E267+E271` |  |  |
| 274 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E273*5.26%,2)` |  |  |
| 275 |         Tổng số tiền trước chiết khấu |  |  |  | `=E273+E274` |  |  |
| 276 | Chiết khấu (5%) |  |  |  | `=round(E275*5%,2)` |  |  |
| 277 | Thành tiền |  |  |  | `=E275-E276` | 26225 | `=E277*F277` |
| 278 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G277*10%,0)` |
| 279 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G277+G278` |
| 283 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 285 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/06/2025 | Thành tiền |
| 286 | 1 | 531247559020-AWS service charges | 2025-06-01 | Phí thực tế | 5034.16 |  |  |
| 287 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -351.98 |  |  |
| 288 |  |  | 1970-01-01 07:00:00 | Tax | 246.21 |  |  |
| 289 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E286+E287+E288` |  |  |
| 290 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 102.32 |  |  |
| 291 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E290` |  |  |
| 292 | Lượng dùng thực tế  |  |  |  | `=E286+E290` |  |  |
| 293 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E292*5.26%,2)` |  |  |
| 294 |         Tổng số tiền trước chiết khấu |  |  |  | `=E292+E293` |  |  |
| 295 | Chiết khấu (5%) |  |  |  | `=round(E294*5%,2)` |  |  |
| 296 | Thành tiền |  |  |  | `=E294-E295` | 26300 | `=E296*F296` |
| 297 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G296*10%,0)` |
| 298 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G296+G297` |
| 302 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 304 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/07/2025 | Thành tiền |
| 305 | 1 | 531247559020-AWS service charges | 2025-07-01 | Phí thực tế | 5066.61 |  |  |
| 306 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -364.86 |  |  |
| 307 |  |  | 1970-01-01 07:00:00 | Tax | 469.7 |  |  |
| 308 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E305+E306+E307` |  |  |
| 309 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 105.5 |  |  |
| 310 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E309` |  |  |
| 311 | Lượng dùng thực tế  |  |  |  | `=E305+E309` |  |  |
| 312 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E311*5.26%,2)` |  |  |
| 313 |         Tổng số tiền trước chiết khấu |  |  |  | `=E311+E312` |  |  |
| 314 | Chiết khấu (5%) |  |  |  | `=round(E313*5%,2)` |  |  |
| 315 | Thành tiền |  |  |  | `=E313-E314` | 26382 | `=E315*F315` |
| 316 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G315*10%,1)` |
| 317 | Tổng số tiền phải thanh toán |  |  |  |  |  | 150091024 |
| 322 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 324 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/08/2025 | Thành tiền |
| 325 | 1 | 531247559020-AWS service charges | 2025-08-01 | Phí thực tế | 4927.8 |  |  |
| 326 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -355.35 |  |  |
| 327 |  |  | 1970-01-01 07:00:00 | Tax | 456.68 |  |  |
| 328 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E325+E326+E327` |  |  |
| 329 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 104.84 |  |  |
| 330 |  |  | 1970-01-01 07:00:00 | Tax | 10.49 |  |  |
| 331 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E329+E330` |  |  |
| 332 | Lượng dùng thực tế  |  |  |  | `=E325+E329` |  |  |
| 333 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E332*5.26%,2)` |  |  |
| 334 |         Tổng số tiền trước chiết khấu |  |  |  | `=E332+E333` |  |  |
| 335 | Chiết khấu (5%) |  |  |  | `=round(E334*5%,2)` |  |  |
| 336 | Thành tiền |  |  |  | `=E334-E335` | 26502 | `=E336*F336` |
| 337 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G336*10%,0)` |
| 338 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G336+G337` |
| 343 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 345 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 30/09/2025 | Thành tiền |
| 346 | 1 | 531247559020-AWS service charges | 2025-09-01 | Phí thực tế | 4779.59 |  |  |
| 347 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -354.65 |  |  |
| 348 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 349 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E346+E347+E348` |  |  |
| 350 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 102.76 |  |  |
| 351 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 352 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E350+E351` |  |  |
| 353 | Lượng dùng thực tế  |  |  |  | `=E346+E350` |  |  |
| 354 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E353*5.26%,2)` |  |  |
| 355 |         Tổng số tiền trước chiết khấu |  |  |  | `=E353+E354` |  |  |
| 356 | Chiết khấu (5%) |  |  |  | `=round(E355*5%,2)` |  |  |
| 357 | Thành tiền |  |  |  | `=E355-E356` | 26446 | `=E357*F357` |
| 358 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G357*10%,0)` |
| 359 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G357+G358` |
| 364 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 366 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/10/2025 | Thành tiền |
| 367 | 1 | 531247559020-AWS service charges | 2025-10-01 | Phí thực tế | 4751.11 |  |  |
| 368 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -352.96 |  |  |
| 369 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 370 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E367+E368+E369` |  |  |
| 371 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 105.37 |  |  |
| 372 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 373 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E371+E372` |  |  |
| 374 | Lượng dùng thực tế  |  |  |  | `=E367+E371` |  |  |
| 375 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E374*5.26%,2)` |  |  |
| 376 |         Tổng số tiền trước chiết khấu |  |  |  | `=E374+E375` |  |  |
| 377 | Chiết khấu (5%) |  |  |  | `=round(E376*5%,2)` |  |  |
| 378 | Thành tiền |  |  |  | `=E376-E377` | 26347 | `=E378*F378` |
| 379 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G378*10%,0)` |
| 380 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G378+G379` |
| 385 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 387 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 29/11/2025 | Thành tiền |
| 388 | 1 | 531247559020-AWS service charges | 2025-11-01 | Phí thực tế | 4591.62 |  |  |
| 389 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -343.77 |  |  |
| 390 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 391 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E388+E389+E390` |  |  |
| 392 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 99.16 |  |  |
| 393 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 394 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E392+E393` |  |  |
| 395 | Lượng dùng thực tế  |  |  |  | `=E388+E392` |  |  |
| 396 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E395*5.26%,2)` |  |  |
| 397 |         Tổng số tiền trước chiết khấu |  |  |  | `=E395+E396` |  |  |
| 398 | Chiết khấu (5%) |  |  |  | `=round(E397*5%,2)` |  |  |
| 399 | Thành tiền |  |  |  | `=E397-E398` | 26412 | `=E399*F399` |
| 400 | Thuế GTGT (10%) |  |  |  |  |  | `=round(G399*10%,0)` |
| 401 | Tổng số tiền phải thanh toán |  |  |  |  |  | `=G399+G400` |
| 407 | ĐỐI SOÁT CHI PHÍ LOTTE VIỆT NAM |  |  |  |  |  |  |
| 409 | STT | Tài khoản | Tháng | Loại phí chi tiết | Billing (USD) | Tỷ giá ngày 31/12/2025 | Thành tiền |
| 410 | 1 | 531247559020-AWS service charges | 2025-12-01 | Phí thực tế | 4352.15 |  |  |
| 411 |  |  | 1970-01-01 07:00:00 | Chiết khấu AWS SPP Discount | -320.94 |  |  |
| 412 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 413 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E410+E411+E412` |  |  |
| 414 | 2 | 531247559020-AWS Marketplace charges | 1970-01-01 07:00:00 | Phí thực tế | 83.86 |  |  |
| 415 |  |  | 1970-01-01 07:00:00 | Tax | 0 |  |  |
| 416 |  |  | 1970-01-01 07:00:00 | Tổng invoice | `=E414+E415` |  |  |
| 417 | Lượng dùng thực tế  |  |  |  | `=E410+E414` |  |  |
| 418 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  |  | `=round(E417*5.26%,2)` |  |  |
| 419 |         Tổng số tiền trước chiết khấu |  |  |  | `=E417+E418` |  |  |
| 420 | Chiết khấu (5%) |  |  |  | `=round(E419*5%,2)` |  |  |
| 421 | Thành tiền |  |  |  | `=E419-E420` | 26377 | `=E421*F421` |
| 422 |  |  |  |  |  |  | `=round(G421*10%,0)` |
| 423 |  |  |  |  |  |  | `=G421+G422` |

> *Đã bỏ qua 94 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (309 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 90 | `C70` |
| E | `=E{r}+E{r}` | 63 | `E6` |
| E | `=round(E{r}*5.26%,2)` | 23 | `E10` |
| E | `=E{r}-E{r}` | 23 | `E13` |
| E | `=round(E{r}*5%,2)` | 19 | `E77` |
| E | `=E{r}` | 16 | `E41` |
| E | `=E{r}+E{r}+E{r}` | 11 | `E23` |
| E | `=round(E{r}*3%,2)` | 4 | `E12` |
| G | `=E{r}*F{r}` | 23 | `G13` |
| G | `=round(G{r}*10%,0)` | 18 | `G79` |
| G | `=G{r}+G{r}` | 18 | `G80` |
| G | `=round(G{r}*10%,1)` | 1 | `G316` |
