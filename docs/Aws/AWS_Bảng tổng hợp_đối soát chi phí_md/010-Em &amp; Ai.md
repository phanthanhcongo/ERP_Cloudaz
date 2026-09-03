# Em &amp; Ai

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Em &amp; Ai`  
> **Vùng dữ liệu:** 505 dòng × 10 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 4 | 1 | 725359398979 | 2022-11-01 | 3617.71 |  |  |  |  |  |  |
| 5 | 2 | 381955629559 | 1970-01-01 07:00:00 | 732.58 |  |  |  |  |  |  |
| 6 | 3 | 025675856282 | 1970-01-01 07:00:00 | 2210.37 |  |  |  |  |  |  |
| 7 | 4 | 177821928109 | 1970-01-01 07:00:00 | 232.91 |  |  |  |  |  |  |
| 8 | 5 | Credit CloudAZ tặng |  | 2000 |  |  |  |  |  |  |
| 9 |  | Tổng cộng |  | `=sum(D4:D7)-D8` |  |  |  |  |  |  |
| 10 |  | Discount (5%) |  | `=D9*0.05` |  |  |  |  |  |  |
| 11 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D9-D10)*5%` |  |  |  |  |  |  |
| 12 |  | Tổng số tiền phải thanh toán |  | `=round(D9-D10+D11,2)` | 24795 | `=D12*E12` |  |  |  |  |
| 15 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 18 | 1 | 725359398979 | 2022-12-01 | 306.45 |  |  |  |  |  |  |
| 19 | 2 | 381955629559 | 1970-01-01 07:00:00 | 309.9 |  |  |  |  |  |  |
| 20 | 3 | 025675856282 | 1970-01-01 07:00:00 | 1399.39 |  |  |  |  |  |  |
| 21 | 4 | 177821928109 | 1970-01-01 07:00:00 | 36.94 |  |  |  |  |  |  |
| 22 |  | Tổng cộng |  | `=sum(D18:D21)` |  |  |  |  |  |  |
| 23 |  | Discount (5%) |  | `=D22*0.05` |  |  |  |  |  |  |
| 24 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D22-D23)*5%` |  |  |  |  |  |  |
| 25 |  | Tổng số tiền phải thanh toán |  | `=round(D22-D23+D24,2)` | 23760 | `=D25*E25` |  |  |  |  |
| 28 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 31 | 1 | 725359398979 | 2023-01-01 | 3460.66 |  |  |  |  |  |  |
| 32 | 2 | 381955629559 | 1970-01-01 07:00:00 | 205.07 |  |  |  |  |  |  |
| 33 | 3 | 025675856282 | 1970-01-01 07:00:00 | 2495.48 |  |  |  |  |  |  |
| 34 | 4 | 177821928109 | 1970-01-01 07:00:00 | 1618.05 |  |  |  |  |  |  |
| 35 |  | Tổng cộng |  | `=sum(D31:D34)` |  |  |  |  |  |  |
| 36 |  | Discount (5%) |  | `=D35*0.05` |  |  |  |  |  |  |
| 37 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D35-D36)*5%` |  |  |  |  |  |  |
| 38 |  | Tổng số tiền phải thanh toán |  | `=round(D35-D36+D37,2)` | 23622 | `=D38*E38` |  |  |  |  |
| 42 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 44 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 45 | 1 | 725359398979 | 2023-02-01 | 558.52 |  |  |  |  |  |  |
| 46 | 2 | 025675856282 | 1970-01-01 07:00:00 | 822.27 |  |  |  |  |  |  |
| 47 | 3 | 177821928109 | 1970-01-01 07:00:00 | 3907.17 |  |  |  |  |  |  |
| 48 |  | Tổng cộng |  | `=sum(D45:D47)` |  |  |  |  |  |  |
| 49 |  | Discount (5%) |  | `=D48*0.05` |  |  |  |  |  |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D48-D49)*5%` |  |  |  |  |  |  |
| 51 |  | Tổng số tiền phải thanh toán |  | `=round(D48-D49+D50,2)` | 23955 | `=D51*E51` |  |  |  |  |
| 54 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 57 | 1 | 725359398979 | 2023-03-01 | 1286.92 |  |  |  |  |  |  |
| 58 | 2 | 025675856282 | 1970-01-01 07:00:00 | 1125.71 |  |  |  |  |  |  |
| 59 | 3 | 177821928109 | 1970-01-01 07:00:00 | 23462.81 |  |  |  |  |  |  |
| 60 |  | Tổng cộng |  | `=sum(D57:D59)` |  |  |  |  |  |  |
| 61 |  | Discount (5%) |  | `=D60*0.05` |  |  |  |  |  |  |
| 62 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D60-D61)*5%` |  |  |  |  |  |  |
| 63 |  | Tổng số tiền phải thanh toán |  | `=round(D60-D61+D62,2)` | 23632 | `=D63*E63` |  |  |  |  |
| 66 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 68 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 69 | 1 | 725359398979 | 2023-04-01 | 961.25 |  |  |  |  |  |  |
| 70 | 2 | 025675856282 | 1970-01-01 07:00:00 | 675.81 |  |  |  |  |  |  |
| 71 | 3 | 177821928109 | 1970-01-01 07:00:00 | 13368.14 |  |  |  |  |  |  |
| 72 |  | Tổng cộng |  | `=sum(D69:D71)` |  |  |  |  |  |  |
| 73 |  | Discount (5%) |  | `=D72*0.05` |  |  |  |  |  |  |
| 74 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D72-D73)*5%` |  |  |  |  |  |  |
| 75 |  | Tổng số tiền phải thanh toán |  | `=round(D72-D73+D74,2)` | 23645 | `=D75*E75` |  |  |  |  |
| 79 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 82 | 1 | 725359398979 | 2023-05-01 | 778.37 |  |  |  |  |  |  |
| 83 | 2 | 025675856282 | 1970-01-01 07:00:00 | 589.26 |  |  |  |  |  |  |
| 84 | 3 | 177821928109 | 1970-01-01 07:00:00 | 8989.4 |  |  |  |  |  |  |
| 85 |  | Tổng cộng |  | `=sum(D82:D84)` |  |  |  |  |  |  |
| 86 |  | Discount (5%) |  | `=D85*0.05` |  |  |  |  |  |  |
| 87 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D85-D86)*5%` |  |  |  |  |  |  |
| 88 |  | Tổng số tiền phải thanh toán |  | `=round(D85-D86+D87,2)` | 23662 | `=D88*E88` |  |  |  |  |
| 92 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 95 | 1 | 725359398979 | 2023-07-01 | 327.38 |  |  |  |  |  |  |
| 96 | 2 | 025675856282 | 1970-01-01 07:00:00 | 127.96 |  |  |  |  |  |  |
| 97 | 3 | 177821928109 | 1970-01-01 07:00:00 | 7044.61 |  |  |  |  |  |  |
| 98 |  | Tổng cộng |  | `=sum(D95:D97)` |  |  |  |  |  |  |
| 99 |  | Discount (5%) |  | `=D98*0.05` |  |  |  |  |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D98-D99)*5%` |  |  |  |  |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D98-D99+D100,2)` | 23860 | `=D101*E101` |  |  |  |  |
| 105 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 107 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 108 | 1 | 725359398979 | 2023-08-01 | 290.75 |  |  |  |  |  |  |
| 109 | 2 | 025675856282 | 1970-01-01 07:00:00 | 108.92 |  |  |  |  |  |  |
| 110 | 3 | 177821928109 | 1970-01-01 07:00:00 | 1448.19 |  |  |  |  |  |  |
| 111 |  | Tổng cộng |  | `=sum(D108:D110)` |  |  |  |  |  |  |
| 112 |  | Discount (5%) |  | `=D111*0.05` |  |  |  |  |  |  |
| 113 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D111-D112)*5%` |  |  |  |  |  |  |
| 114 |  | Tổng số tiền phải thanh toán |  | `=round(D111-D112+D113,2)` | 24260 | `=D114*E114` |  |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 120 | 1 | 725359398979 | 2023-09-01 | 304.68 |  |  |  |  |  |  |
| 121 | 2 | 025675856282 | 1970-01-01 07:00:00 | 78.87 |  |  |  |  |  |  |
| 122 | 3 | 177821928109 | 1970-01-01 07:00:00 | 486.12 |  |  |  |  |  |  |
| 123 |  | Tổng cộng |  | `=sum(D120:D122)` |  |  |  |  |  |  |
| 124 |  | Discount (5%) |  | `=D123*0.05` |  |  |  |  |  |  |
| 125 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D123-D124)*5%` |  |  |  |  |  |  |
| 126 |  | Tổng số tiền phải thanh toán |  | `=round(D123-D124+D125,2)` | 24470 | `=D126*E126` |  |  |  |  |
| 129 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 132 | 1 | 725359398979 | 2023-10-01 | 221.76 |  |  |  |  |  |  |
| 133 | 2 | 025675856282 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 134 | 3 | 177821928109 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 135 |  | Tổng cộng |  | `=sum(D132:D134)` |  |  |  |  |  |  |
| 136 |  | Discount (5%) |  | `=D135*0.05` |  |  |  |  |  |  |
| 137 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D135-D136)*5%` |  |  |  |  |  |  |
| 138 |  | Tổng số tiền phải thanh toán |  | `=round(D135-D136+D137,2)` | 24729 | `=D138*E138` |  |  |  |  |
| 141 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 143 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 144 | 1 | 725359398979 | 2023-11-01 | 181.39 |  |  |  |  |  |  |
| 145 | 2 | 025675856282 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 146 | 3 | 177821928109 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 147 |  | Tổng cộng |  | `=sum(D144:D146)` |  |  |  |  |  |  |
| 148 |  | Discount (5%) |  | `=D147*0.05` |  |  |  |  |  |  |
| 149 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D147-D148)*5%` |  |  |  |  |  |  |
| 150 |  | Tổng số tiền phải thanh toán |  | `=round(D147-D148+D149,2)` | 24427 | `=D150*E150` |  |  |  |  |
| 154 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 156 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 157 | 1 | 725359398979 | 2023-12-01 | 180.6 |  |  |  |  |  |  |
| 158 | 2 | 025675856282 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 159 | 3 | 177821928109 | 1970-01-01 07:00:00 | 0 |  |  |  |  |  |  |
| 160 |  | Tổng cộng |  | `=sum(D157:D159)` |  |  |  |  |  |  |
| 161 |  | Discount (5%) |  | `=D160*0.05` |  |  |  |  |  |  |
| 162 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D160-D161)*5%` |  |  |  |  |  |  |
| 163 |  | Tổng số tiền phải thanh toán |  | `=round(D160-D161+D162,2)` | 24450 | `=D163*E163` |  |  |  |  |
| 166 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 168 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 169 | 1 | 725359398979 | 2024-01-01 | 183.46 |  |  |  |  |  |  |
| 170 |  | Tổng cộng |  | `=sum(D169)` |  |  |  |  |  |  |
| 171 |  | Discount (5%) |  | `=D170*0.05` |  |  |  |  |  |  |
| 172 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D170-D171)*5%` |  |  |  |  |  |  |
| 173 |  | Tổng số tiền phải thanh toán |  | `=round(D170-D171+D172,2)` | 24578 | `=D173*E173` |  |  |  |  |
| 177 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 179 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 180 | 1 | 725359398979 | 2024-02-01 | 181.4 |  |  |  |  |  |  |
| 181 |  | Tổng cộng |  | `=sum(D180)` |  |  |  |  |  |  |
| 182 |  | Discount (5%) |  | `=D181*0.05` |  |  |  |  |  |  |
| 183 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D181-D182)*5%` |  |  |  |  |  |  |
| 184 |  | Tổng số tiền phải thanh toán |  | `=round(D181-D182+D183,2)` | 24802 | `=D184*E184` |  |  |  |  |
| 188 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 191 | 1 | 725359398979 | 2024-03-01 | 186.42 |  |  |  |  |  |  |
| 192 |  | Tổng cộng |  | `=sum(D191)` |  |  |  |  |  |  |
| 193 |  | Discount (5%) |  | `=D192*0.05` |  |  |  |  |  |  |
| 194 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D192-D193)*5%` |  |  |  |  |  |  |
| 195 |  | Tổng số tiền phải thanh toán |  | `=round(D192-D193+D194,2)` | 24972 | `=D195*E195` |  |  |  |  |
| 199 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 201 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 202 | 1 | 725359398979 | 2024-04-01 | 188.42 |  |  |  |  |  |  |
| 203 |  | Tổng cộng |  | `=sum(D202)` |  |  |  |  |  |  |
| 204 |  | Discount (5%) |  | `=D203*0.05` |  |  |  |  |  |  |
| 205 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D203-D204)*5%` |  |  |  |  |  |  |
| 206 |  | Tổng số tiền phải thanh toán |  | `=round(D203-D204+D205,2)` | 25458 | `=D206*E206` |  |  |  |  |
| 210 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 212 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 213 | 1 | 725359398979 | 2024-05-01 | 190.76 |  |  |  |  |  |  |
| 214 |  | Tổng cộng |  | `=sum(D213)` |  |  |  |  |  |  |
| 215 |  | Discount (5%) |  | `=D214*0.05` |  |  |  |  |  |  |
| 216 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá... |  |  | `=(D214-D215)*5%` |  |  |  |  |  |  |
| 217 |  | Tổng số tiền phải thanh toán |  | `=round(D214-D215+D216,2)` | 25474 | `=D217*E217` |  |  |  |  |
| 221 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 223 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 224 | 1 | 725359398979 | 2024-06-01 | 193.77 |  |  |  |  |  |  |
| 225 |  | Phí dịch vụ (5%) |  | `=round(D224*5%,2)` |  |  |  |  |  |  |
| 226 |  | Giá trước chiết khấu |  | `=D224+D225` |  |  |  |  |  |  |
| 227 |  | Chiết khấu (5%) |  | `=round(D226*5%,2)` |  |  |  |  |  |  |
| 228 | Thành tiền |  |  | `=D226-D227` | 25473 | `=D228*E228` |  |  |  |  |
| 229 | Thuế GTGT (10%) |  |  |  |  | `=round(F228*10%,0)` |  |  |  |  |
| 230 | Tổng số tiền phải thanh toán |  |  |  |  | `=F228+F229` |  |  |  |  |
| 234 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 236 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 237 | 1 | 725359398979 | 2024-07-01 | 182.42 |  |  |  |  |  |  |
| 238 |  | Phí dịch vụ (5%) |  | `=round(D237*5%,2)` |  |  |  |  |  |  |
| 239 |  | Giá trước chiết khấu |  | `=D237+D238` |  |  |  |  |  |  |
| 240 |  | Chiết khấu (5%) |  | `=round(D239*5%,2)` |  |  |  |  |  |  |
| 241 | Thành tiền |  |  | `=D239-D240` | 25405 | `=D241*E241` |  |  |  |  |
| 242 | Thuế GTGT (10%) |  |  |  |  | `=round(F241*10%,0)` |  |  |  |  |
| 243 | Tổng số tiền phải thanh toán |  |  |  |  | `=F241+F242` |  |  |  |  |
| 247 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 249 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 250 | 1 | 725359398979 | 2024-08-01 | 134.77 |  |  |  |  |  |  |
| 251 |  | Phí dịch vụ (5%) |  | `=round(D250*5%,2)` |  |  |  |  |  |  |
| 252 |  | Giá trước chiết khấu |  | `=D250+D251` |  |  |  |  |  |  |
| 253 |  | Chiết khấu (5%) |  | `=round(D252*5%,2)` |  |  |  |  |  |  |
| 254 | Thành tiền |  |  | `=D252-D253` | 25080 | `=D254*E254` |  |  |  |  |
| 255 | Thuế GTGT (10%) |  |  |  |  | `=round(F254*10%,0)` |  |  |  |  |
| 256 | Tổng số tiền phải thanh toán |  |  |  |  | `=F254+F255` |  |  |  |  |
| 260 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 262 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 263 | 1 | 725359398979 | 2024-09-01 | 137.57 |  |  |  |  |  |  |
| 264 |  | Phí dịch vụ (5%) |  | `=round(D263*5%,2)` |  |  |  |  |  |  |
| 265 |  | Giá trước chiết khấu |  | `=D263+D264` |  |  |  |  |  |  |
| 266 |  | Chiết khấu (5%) |  | `=round(D265*5%,2)` |  |  |  |  |  |  |
| 267 | Thành tiền |  |  | `=D265-D266` | 24733 | `=D267*E267` |  |  |  |  |
| 268 | Thuế GTGT (10%) |  |  |  |  | `=round(F267*10%,0)` |  |  |  |  |
| 269 | Tổng số tiền phải thanh toán |  |  |  |  | `=F267+F268` |  |  |  |  |
| 273 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 275 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 276 | 1 | 725359398979 | 2024-10-01 | 148.42 |  |  |  |  |  |  |
| 277 |  | Phí dịch vụ (5%) |  | `=round(D276*5%,2)` |  |  |  |  |  |  |
| 278 |  | Giá trước chiết khấu |  | `=D276+D277` |  |  |  |  |  |  |
| 279 |  | Chiết khấu (5%) |  | `=round(D278*5%,2)` |  |  |  |  |  |  |
| 280 | Thành tiền |  |  | `=D278-D279` | 25445 | `=D280*E280` |  |  |  |  |
| 281 | Thuế GTGT (10%) |  |  |  |  | `=round(F280*10%,0)` |  |  |  |  |
| 282 | Tổng số tiền phải thanh toán |  |  |  |  | `=F280+F281` |  |  |  |  |
| 286 | TỔNG HỢP CHI PHÍ EM&AI |  |  |  |  |  |  |  |  |  |
| 288 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 289 | 1 | 725359398979 | 2024-11-01 | 153.37 |  |  |  |  |  |  |
| 290 |  | Phí dịch vụ (5%) |  | `=round(D289*5%,2)` |  |  |  |  |  |  |
| 291 |  | Giá trước chiết khấu |  | `=D289+D290` |  |  |  |  |  |  |
| 292 |  | Chiết khấu (5%) |  | `=round(D291*5%,2)` |  |  |  |  |  |  |
| 293 | Thành tiền |  |  | `=D291-D292` | 25463 | `=D293*E293` |  |  |  |  |
| 294 | Thuế GTGT (10%) |  |  |  |  | `=round(F293*10%,0)` |  |  |  |  |
| 295 | Tổng số tiền phải thanh toán |  |  |  |  | `=F293+F294` |  |  |  |  |
| 299 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 301 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 302 | 1 | 725359398979 | 2024-12-01 | 167.63 | `=round(D302*5%,2)` | `=Round((D302+E302)*5%,2)` | 25551 | `=round((D302+E302-F302)*G302,2)` | `=round(H302*10%,0)` | `=H302+I302` |
| 303 | 2 | 563506675681 | 1970-01-01 07:00:00 | 1245.38 | `=round(D303*5%,2)` | `=Round((D303+E303)*5%,2)` | `=G302` | `=round((D303+E303-F303)*G303,2)` | `=round(H303*10%,0)` | `=H303+I303` |
| 307 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 309 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 310 | 1 | 725359398979 | 2025-01-01 | 164.97 | `=round(D310*5.26%,2)` | `=Round((D310+E310)*5%,2)` | 25295 | `=round((D310+E310-F310)*G310,2)` | `=round(H310*10%,0)` | `=H310+I310` |
| 311 | 2 | 563506675681 | 1970-01-01 07:00:00 | 4447.89 | `=round(D311*5.26%,2)` | `=Round((D311+E311)*5%,2)` | `=G310` | `=round((D311+E311-F311)*G311,2)` | `=round(H311*10%,0)` | `=H311+I311` |
| 315 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 317 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 318 | 1 | 725359398979 | 2025-02-01 | 149.114 | `=round(D318*5.26%,2)` | `=Round((D318+E318)*5%,2)` | 25735 | `=round((D318+E318-F318)*G318,2)` | `=round(H318*10%,0)` | `=H318+I318` |
| 319 | 2 | 563506675681 | 1970-01-01 07:00:00 | 3385.026 | `=round(D319*5.26%,2)` | `=Round((D319+E319)*5%,2)` | `=G318` | `=round((D319+E319-F319)*G319,2)` | `=round(H319*10%,0)` | `=H319+I319` |
| 323 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 325 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 326 | 1 | 725359398979 | 2025-03-01 | 152.16 | `=round(D326*5.26%,2)` | `=Round((D326+E326)*5%,2)` | 25775 | `=round((D326+E326-F326)*G326,2)` | `=round(H326*10%,0)` | `=H326+I326` |
| 327 | 2 | 563506675681 | 1970-01-01 07:00:00 | 2756.19 | `=round(D327*5.26%,2)` | `=Round((D327+E327)*5%,2)` | 25775 | `=round((D327+E327-F327)*G327,2)` | `=round(H327*10%,0)` | `=H327+I327` |
| 331 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 333 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 334 | 1 | 725359398979 | 2025-04-01 | 153.2 | `=round(D334*5.26%,2)` | `=Round((D334+E334)*5%,2)` | 26190 | `=round((D334+E334-F334)*G334,2)` | `=round(H334*10%,0)` | `=H334+I334` |
| 335 | 2 | 563506675681 | 1970-01-01 07:00:00 | 1936.81 | `=round(D335*5.26%,2)` | `=Round((D335+E335)*5%,2)` | 26190 | `=round((D335+E335-F335)*G335,2)` | `=round(H335*10%,0)` | `=H335+I335` |
| 339 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 341 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 342 | 1 | 725359398979 | 2025-05-01 | 154.624 | `=round(D342*5.26%,2)` | `=Round((D342+E342)*5%,2)` | 26225 | `=round((D342+E342-F342)*G342,2)` | `=round(H342*10%,0)` | `=H342+I342` |
| 343 | 2 | 563506675681 | 1970-01-01 07:00:00 | 1765.6 | `=round(D343*5.26%,2)` | `=Round((D343+E343)*5%,2)` | `=G342` | `=round((D343+E343-F343)*G343,2)` | `=round(H343*10%,0)` | `=H343+I343` |
| 347 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 349 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (5.26%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 350 | 1 | 725359398979 | 2025-06-01 | 155.55 | `=round(D350*5.26%,2)` | `=Round((D350+E350)*5%,2)` | 26300 | `=round((D350+E350-F350)*G350,2)` | `=round(H350*10%,0)` | `=H350+I350` |
| 351 | 2 | 563506675681 | 1970-01-01 07:00:00 | 1427.16 | `=round(D351*5.26%,2)` | `=Round((D351+E351)*5%,2)` | `=G350` | `=round((D351+E351-F351)*G351,2)` | `=round(H351*10%,0)` | `=H351+I351` |
| 355 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 357 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 358 | 1 | 725359398979 | 2025-07-01 | 154.51 | `=round(D358*10%,2)` | `=Round((D358+E358)*5%,2)` | 26382 | `=round((D358+E358-F358)*G358,2)` | `=round(H358*10%,0)` | `=H358+I358` |
| 359 | 2 | 563506675681 | 1970-01-01 07:00:00 | 545.12 | `=round(D359*10%,2)` | `=Round((D359+E359)*5%,2)` | `=G358` | `=round((D359+E359-F359)*G359,2)` | `=round(H359*10%,0)` | `=H359+I359` |
| 364 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 366 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 367 | 1 | 725359398979 | 2025-08-01 | 141.05 | `=round(D367*10%,2)` | `=Round((D367+E367)*5%,2)` | 26502 | `=round((D367+E367-F367)*G367,0)` | `=round(H367*10%,2)` | `=round(H367+I367,0)` |
| 368 | 2 | 563506675681 | 1970-01-01 07:00:00 | 309.73 | `=round(D368*10%,2)` | `=Round((D368+E368)*5%,2)` | `=G367` | `=round((D368+E368-F368)*G368,2)` | `=round(H368*10%,0)` | `=H368+I368` |
| 372 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 374 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 375 | 1 | 725359398979 | 2025-09-01 | 68.95 | `=round(D375*10%,2)` | `=Round((D375+E375)*5%,2)` | 26446 | `=round((D375+E375-F375)*G375,0)` | `=round(H375*10%,2)` | `=round(H375+I375,0)` |
| 376 | 2 | 838770070287 | 1970-01-01 07:00:00 | 75.84 | `=round(D376*10%,2)` | `=Round((D376+E376)*5%,2)` | `=G375` | `=round((D376+E376-F376)*G376,2)` | `=round(H376*10%,0)` | `=H376+I376` |
| 379 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 380 | 1 | 563506675681 | 2025-09-01 | 1450.22 |  |  |  |  |  |  |
| 381 | Phí dịch vụ (10%) |  |  | `=round(D380*10%,2)` |  |  |  |  |  |  |
| 382 | Chiết khấu (5%) |  |  | `=round((D380+D381)*5%,2)` |  |  |  |  |  |  |
| 383 | Tổng cộng |  |  | `=D380+D381-D382` |  |  |  |  |  |  |
| 384 | Số tiền hỗ trợ tháng này |  |  | 4000 |  |  |  |  |  |  |
| 385 | Số tiền hỗ trợ còn lại |  |  | `=D384-D383` |  |  |  |  |  |  |
| 386 | Thành tiền thanh toán |  |  | 0 | 26446 | `=round(D386*E386,0)` |  |  |  |  |
| 387 | Thuế GTGT (10%) |  |  |  |  | `=round(F386*10%,0)` |  |  |  |  |
| 388 | Tổng số tiền phải trả |  |  |  |  | `=F386+F387` |  |  |  |  |
| 393 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 395 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 396 | 1 | 725359398979 | 2025-10-01 | 69.95 | `=round(D396*10%,2)` | `=Round((D396+E396)*5%,2)` | 26347 | `=round((D396+E396-F396)*G396,0)` | `=round(H396*10%,2)` | `=round(H396+I396,0)` |
| 398 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 400 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 401 | 1 | 563506675681 | 2025-10-01 | 2071.89 |  |  |  |  |  |  |
| 402 | Phí dịch vụ (10%) |  |  | `=round(D401*10%,2)` |  |  |  |  |  |  |
| 403 | Chiết khấu (5%) |  |  | `=round((D401+D402)*5%,2)` |  |  |  |  |  |  |
| 404 | Tổng cộng |  |  | `=D401+D402-D403` |  |  |  |  |  |  |
| 405 | Số tiền hỗ trợ tháng này |  |  | `=2000+2484.52` |  |  |  |  |  |  |
| 406 | Số tiền hỗ trợ còn lại |  |  | `=D405-D404` |  |  |  |  |  |  |
| 407 | Thành tiền thanh toán |  |  | 0 | 26347 | `=round(D407*E407,0)` |  |  |  |  |
| 408 | Thuế GTGT (10%) |  |  |  |  | `=round(F407*10%,0)` |  |  |  |  |
| 409 | Tổng số tiền phải trả |  |  |  |  | `=F407+F408` |  |  |  |  |
| 414 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 416 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 417 | 1 | 725359398979 | 2025-11-01 | 70.49 | `=round(D417*10%,2)` | `=Round((D417+E417)*5%,2)` | 26412 | `=round((D417+E417-F417)*G417,0)` | `=round(H417*10%,2)` | `=round(H417+I417,0)` |
| 419 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 421 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |
| 422 | 1 | 563506675681 | 2025-11-01 | 1925.48 |  |  |  |  |  |  |
| 423 | Phí dịch vụ (10%) |  |  | `=round(D422*10%,2)` |  |  |  |  |  |  |
| 424 | Chiết khấu (5%) |  |  | `=round((D422+D423)*5%,2)` |  |  |  |  |  |  |
| 425 | Tổng cộng |  |  | `=D422+D423-D424` |  |  |  |  |  |  |
| 426 | Số tiền hỗ trợ tháng này |  |  | 2319.39 |  |  |  |  |  |  |
| 427 | Số tiền hỗ trợ còn lại |  |  | `=D426-D425` |  |  |  |  |  |  |
| 428 | Thành tiền thanh toán |  |  | 0 | 26412 | `=round(D428*E428,0)` |  |  |  |  |
| 429 | Thuế GTGT (10%) |  |  |  |  | `=round(F428*10%,0)` |  |  |  |  |
| 430 | Tổng số tiền phải trả |  |  |  |  | `=F428+F429` |  |  |  |  |
| 435 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 437 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 438 | 1 | 563506675681 | 2025-12-01 | 265.66 | `=round(D438*10%,2)` | `=Round((D438+E438)*5%,2)` | 26377 | `=round((D438+E438-F438)*G438,0)` | `=round(H438*10%,2)` | `=round(H438+I438,0)` |
| 439 | 2 | 725359398979 | 1970-01-01 07:00:00 | 71.72 | `=round(D439*10%,2)` | `=Round((D439+E439)*5%,2)` | `=G438` | `=round((D439+E439-F439)*G439,2)` | `=round(H439*10%,0)` | `=H439+I439` |
| 445 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 447 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 448 | 1 | 563506675681 | 2026-01-01 | 206.91 | `=round(D448*10%,2)` | `=Round((D448+E448)*5%,2)` | 26145 | `=round((D448+E448-F448)*G448,0)` | `=round(H448*10%,2)` | `=round(H448+I448,0)` |
| 449 | 2 | 725359398979 | 1970-01-01 07:00:00 | 72.59 | `=round(D449*10%,2)` | `=Round((D449+E449)*5%,2)` | `=G448` | `=round((D449+E449-F449)*G449,2)` | `=round(H449*10%,0)` | `=H449+I449` |
| 454 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 456 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 457 | 1 | 563506675681 | 2026-02-01 | 172.39 | `=round(D457*10%,2)` | `=Round((D457+E457)*5%,2)` | 26240 | `=round((D457+E457-F457)*G457,0)` | `=round(H457*10%,2)` | `=round(H457+I457,0)` |
| 458 | 2 | 725359398979 | 1970-01-01 07:00:00 | 73.18 | `=round(D458*10%,2)` | `=Round((D458+E458)*5%,2)` | `=G457` | `=round((D458+E458-F458)*G458,2)` | `=round(H458*10%,0)` | `=H458+I458` |
| 464 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 466 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 467 | 1 | 563506675681 | 2026-03-01 | 229.5 | `=round(D467*10%,2)` | `=Round((D467+E467)*5%,2)` | 26357 | `=round((D467+E467-F467)*G467,0)` | `=round(H467*10%,2)` | `=round(H467+I467,0)` |
| 468 | 2 | 725359398979 | 1970-01-01 07:00:00 | 73.43 | `=round(D468*10%,2)` | `=Round((D468+E468)*5%,2)` | `=G467` | `=round((D468+E468-F468)*G468,2)` | `=round(H468*10%,0)` | `=H468+I468` |
| 473 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 475 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 476 | 1 | 725359398979 | 2026-04-01 | 74.29 | `=round(D476*10%,2)` | `=Round((D476+E476)*5%,2)` | 26368 | `=round((D476+E476-F476)*G476,0)` | `=round(H476*10%,2)` | `=round(H476+I476,0)` |
| 477 | 2 | 563506675681 | 1970-01-01 07:00:00 | 366.15 | `=round(D477*10%,2)` | `=Round((D477+E477)*5%,2)` | `=G476` | `=round((D477+E477-F477)*G477,2)` | `=round(H477*10%,0)` | `=H477+I477` |
| 483 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 485 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 486 | 1 | 725359398979 | 2026-05-01 | 75.19 | `=round(D486*10%,2)` | `=Round((D486+E486)*5%,2)` | 26395 | `=round((D486+E486-F486)*G486,0)` | `=round(H486*10%,2)` | `=round(H486+I486,0)` |
| 487 | 2 | 563506675681 | 1970-01-01 07:00:00 | 474 | `=round(D487*10%,2)` | `=Round((D487+E487)*5%,2)` | `=G486` | `=round((D487+E487-F487)*G487,2)` | `=round(H487*10%,0)` | `=H487+I487` |
| 492 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 494 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 495 | 1 | 725359398979 | 2026-06-01 | 80.85 | `=round(D495*10%,2)` | `=Round((D495+E495)*5%,2)` | 26466 | `=round((D495+E495-F495)*G495,0)` | `=round(H495*10%,2)` | `=round(H495+I495,0)` |
| 496 | 2 | 563506675681 | 1970-01-01 07:00:00 | 303.33 | `=round(D496*10%,2)` | `=Round((D496+E496)*5%,2)` | `=G495` | `=round((D496+E496-F496)*G496,2)` | `=round(H496*10%,0)` | `=H496+I496` |
| 501 | ĐỐI SOÁT CHI PHÍ AWS EM&AI |  |  |  |  |  |  |  |  |  |
| 503 | STT | Tài khoản | Tháng | Billing AWS (USD) | Phí dịch vụ (10%) | Chiết khấu (5%) | Tỷ giá | Thành tiền | Thuế GTGT (10%) | Tổng số tiền phải thanh toán |
| 504 | 1 | 725359398979 | 2026-07-01 | 77.31 | `=round(D504*10%,2)` | `=Round((D504+E504)*5%,2)` | 26475 | `=round((D504+E504-F504)*G504,0)` | `=round(H504*10%,2)` | `=round(H504+I504,0)` |
| 505 | 2 | 563506675681 | 1970-01-01 07:00:00 | 271.65 | `=round(D505*10%,2)` | `=Round((D505+E505)*5%,2)` | `=G504` | `=round((D505+E505-F505)*G505,2)` | `=round(H505*10%,0)` | `=H505+I505` |

> *Đã bỏ qua 185 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (407 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 47 | `C5` |
| D | `=D{r}*0.05` | 18 | `D10` |
| D | `=(D{r}-D{r})*5%` | 18 | `D11` |
| D | `=round(D{r}-D{r}+D{r},2)` | 18 | `D12` |
| D | `=sum(D{r}:D{r})` | 12 | `D22` |
| D | `=round(D{r}*5%,2)` | 12 | `D225` |
| D | `=D{r}-D{r}` | 9 | `D228` |
| D | `=D{r}+D{r}` | 6 | `D226` |
| D | `=sum(D{r})` | 5 | `D170` |
| D | `=round(D{r}*10%,2)` | 3 | `D381` |
| D | `=round((D{r}+D{r})*5%,2)` | 3 | `D382` |
| D | `=D{r}+D{r}-D{r}` | 3 | `D383` |
| D | `=sum(D{r}:D{r})-D{r}` | 1 | `D9` |
| D | `=2000+2484.52` | 1 | `D405` |
| E | `=round(D{r}*10%,2)` | 24 | `E358` |
| E | `=round(D{r}*5.26%,2)` | 12 | `E310` |
| E | `=round(D{r}*5%,2)` | 2 | `E302` |
| F | `=Round((D{r}+E{r})*5%,2)` | 38 | `F302` |
| F | `=D{r}*E{r}` | 24 | `F12` |
| F | `=round(F{r}*10%,0)` | 9 | `F229` |
| F | `=F{r}+F{r}` | 9 | `F230` |
| F | `=round(D{r}*E{r},0)` | 3 | `F386` |
| G | `=G{r}` | 16 | `G303` |
| H | `=round((D{r}+E{r}-F{r})*G{r},2)` | 26 | `H302` |
| H | `=round((D{r}+E{r}-F{r})*G{r},0)` | 12 | `H367` |
| I | `=round(H{r}*10%,0)` | 26 | `I302` |
| I | `=round(H{r}*10%,2)` | 12 | `I367` |
| J | `=H{r}+I{r}` | 26 | `J302` |
| J | `=round(H{r}+I{r},0)` | 12 | `J367` |
