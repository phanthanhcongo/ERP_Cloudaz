# VINFAST_OSAM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VINFAST_OSAM`  
> **Vùng dữ liệu:** 429 dòng × 19 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 |  |  |  |  |  |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ OSAM_VINFAST |  |  |  |  |  |
| 4 |  |  |  |  |  |  |  |  | Vinfast | Osam |  |  |  |  |  |  |  |  |  |
| 5 |  |  |  |  |  |  |  |  |  |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 6 |  |  |  |  |  |  |  | Tháng 1 | 22153067 | 6549694 |  |  |  | 1 | 726886460554 | 2020-01-01 | 863.6 | 23320 | `=Q6*R6` |
| 7 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  | Tháng 2 | 39824987 | 6716789 |  |  |  | 2 |  | 2020-02-01 | 1542.95 | 23320 | `=Q7*R7` |
| 8 |  |  |  |  |  |  |  | Tháng 3 | 42183085 | 10980086 |  |  |  | 3 |  | 2020-03-01 | 1609.3 | 23700 | `=Q8*R8` |
| 9 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | Tổng | `=sum(I6:I8)` | `=sum(J6:J8)` |  |  |  | 4 |  | 2020-04-01 | 1198.57 | 23600 | `=Q9*R9` |
| 10 | 1 | 726886460554 | 2020-03-01 | 1618.07 | 23700 | `=D10*E10` |  |  |  |  |  |  |  | 5 |  | 2020-05-01 | 1413 | 23350 | `=Q10*R10` |
| 11 |  | Tổng cộng |  | `=D10` |  | `=F10` |  |  |  |  |  |  |  |  | Tổng cộng |  | `=sum(Q6:Q10)` |  | `=sum(S6:S10)` |
| 12 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D11*0.1` |  | `=F11*0.1` |  |  |  |  |  |  |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=Q11*0.1` |  | `=S11*0.1` |
| 13 |  | Tổng số tiền phải thanh toán |  | `=D11+D12` |  | `=F11+F12` |  |  |  |  |  |  |  |  | Tổng số tiền phải thanh toán cho CloudAZ |  | `=Q11+Q12` |  | `=S11+S12` |
| 15 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  | `=F13+D16` |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | Phí dịch vụ tháng 3 |  |  | `=9200000+12.5%*F13` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  |  |  | Hà Nội, ngày 04 tháng 04 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  | Hà Nội, ngày 10 tháng 06 năm 2020 |  |  |
| 19 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  | Người lập  |  |  |
| 23 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  | Phạm Cẩm Nhung |  |  |
| 27 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 | 1 | 726886460554 | 2020-04-01 | 1624.88 | 23600 | `=D30*E30` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | Tổng cộng |  | `=D30` |  | `=F30` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D31*0.1` |  | `=F31*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | Tổng số tiền phải thanh toán |  | `=D31+D32` |  | `=F31+F32` | 42181885 |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 | Phí dịch vụ tháng 4 |  |  | `=9200000+12.5%*F33` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  |  |  | Hà Nội, ngày 04 tháng 05 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 49 | 1 | 726886460554 | 2020-05-01 | 1676.75 | 23350 | `=D49*E49` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | Tổng cộng |  | `=D49` |  | `=F49` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D50*0.1` |  | `=F50*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | Tổng số tiền phải thanh toán |  | `=D50+D51` |  | `=F50+F51` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 | Phí dịch vụ tháng 5 |  |  | `=9200000+12.5%*F52` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  |  |  | Hà Nội, ngày 04 tháng 06 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 68 | 1 | 726886460554 | 2020-06-01 | 1762.61 | 23290 | `=D68*E68` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | Tổng cộng |  | `=D68` |  | `=F68` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D69*0.1` |  | `=F69*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=D69+D70` |  | `=F69+F70` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 73 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 74 | Phí dịch vụ tháng 6 |  |  | `=9200000+12.5%*F71` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  |  |  | Hà Nội, ngày 04 tháng 07 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 | 1 | 726886460554 | 2020-07-01 | 1900.83 | 23265 | `=D87*E87` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  | Tổng cộng |  | `=D87` |  | `=F87` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D88*0.1` |  | `=F88*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | Tổng số tiền phải thanh toán |  | `=D88+D89` |  | `=F88+F89` |  | `=F90+D93` |  |  |  |  |  |  |  |  |  |  |  |
| 92 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 | Phí dịch vụ tháng 7 |  |  | `=9200000+12.5%*F90` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  |  |  | Hà Nội, ngày 04 tháng 08 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 104 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 107 | 1 | 726886460554 | 2020-08-01 | 1748.06 | 23270 | `=D107*E107` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 108 |  | Tổng cộng |  | `=D107` |  | `=F107` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 109 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D108*0.1` |  | `=F108*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 110 |  | Tổng số tiền phải thanh toán |  | `=D108+D109` |  | `=F108+F109` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 112 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 113 | Phí dịch vụ tháng 8 |  |  | `=9200000+12.5%*F110` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 115 |  |  |  | Hà Nội, ngày 04 tháng 09 năm 2020 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 116 |  |  |  | Người lập  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 120 |  |  |  | Phạm Cẩm Nhung |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 123 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 125 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 126 | 1 | 726886460554 | 2020-09-01 | 1869.5 | 23280 | `=D126*E126` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 127 |  | Tổng cộng |  | `=D126` |  | `=F126` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 128 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D127*0.1` |  | `=F127*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 129 |  | Tổng số tiền phải thanh toán |  | `=D127+D128` |  | `=F127+F128` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 131 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 132 | Phí dịch vụ tháng 9 |  |  | `=9200000+12.5%*F129` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 136 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 138 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 139 | 1 | 726886460554 | 2020-10-01 | 1942.62 | 23270 | `=D139*E139` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 140 |  | Tổng cộng |  | `=D139` |  | `=F139` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 141 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D140*0.1` |  | `=F140*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 142 |  | Tổng số tiền phải thanh toán |  | `=D140+D141` |  | `=F140+F141` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 144 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 145 | Phí dịch vụ tháng 10 |  |  | `=9200000+12.5%*F142` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 149 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 152 | 1 | 726886460554 | 2020-11-01 | 1976.44 | 23230 | `=D152*E152` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 153 |  | Tổng cộng |  | `=D152` |  | `=F152` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 154 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D153*0.1` |  | `=F153*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 155 |  | Tổng số tiền phải thanh toán |  | `=D153+D154` |  | `=F153+F154` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 157 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 158 | Phí dịch vụ tháng 10 |  |  | `=9200000+12.5%*F155` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 162 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 164 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 165 | 1 | 726886460554 | 2020-12-01 | 2073.23 | 23215 | `=D165*E165` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 166 |  | Tổng cộng |  | `=D165` |  | `=F165` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 167 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D166*0.1` |  | `=F166*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 168 |  | Tổng số tiền phải thanh toán |  | `=D166+D167` |  | `=F166+F167` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 170 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 171 | Phí dịch vụ tháng 12 |  |  | `=9200000+12.5%*F168` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 175 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 177 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 178 | 1 | 726886460554 | 2021-01-01 | 2006.81 | 23140 | `=D178*E178` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 179 |  | Tổng cộng |  | `=D178` |  | `=F178` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 180 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D179*0.1` |  | `=F179*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 181 |  | Tổng số tiền phải thanh toán |  | `=D179+D180` |  | `=F179+F180` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 183 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 184 | Phí dịch vụ tháng 01 |  |  | `=9200000+12.5%*F181` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 188 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 190 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 191 | 1 | 726886460554 | 2021-02-01 | 1705.84 | 23100 | `=D191*E191` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 192 |  | Tổng cộng |  | `=D191` |  | `=F191` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 193 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D192*0.1` |  | `=F192*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 194 |  | Tổng số tiền phải thanh toán |  | `=D192+D193` |  | `=F192+F193` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 196 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 197 | Phí dịch vụ tháng 01 |  |  | `=9200000+12.5%*F194` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 201 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 203 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 204 | 1 | 726886460554 | 2021-03-01 | 2001.03 | 23170 | `=D204*E204` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 205 |  | Tổng cộng |  | `=D204` |  | `=F204` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 206 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D205*0.1` |  | `=F205*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 207 |  | Tổng số tiền phải thanh toán |  | `=D205+D206` |  | `=F205+F206` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 209 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 210 | Phí dịch vụ tháng 03 |  |  | `=9200000+12.5%*F207` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 214 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 216 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 217 | 1 | 726886460554 | 2021-04-01 | 2132.82 | 23140 | `=D217*E217` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 218 |  | Tổng cộng |  | `=D217` |  | `=F217` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 219 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D218*0.1` |  | `=F218*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 220 |  | Tổng số tiền phải thanh toán |  | `=D218+D219` |  | `=F218+F219` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 222 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 223 | Phí dịch vụ tháng 03 |  |  | `=9200000+12.5%*F220` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 227 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 229 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 230 | 1 | 726886460554 | 2021-05-01 | 2139.29 | 23145 | `=round(D230*E230,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 231 |  | Tổng cộng |  | `=D230` |  | `=F230` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 232 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên cloudaz đóng hộ) |  |  | `=D231*0.1` |  | `=F231*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 233 |  | Tổng số tiền phải thanh toán |  | `=D231+D232` |  | `=F231+F232` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 235 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 236 | Phí dịch vụ tháng 05 |  |  | `=9200000+12.5%*F233` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 240 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 242 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 243 | 1 | 726886460554 | 2021-06-01 | `=163.92+1891.91` | 23120 | `=round(D243*E243,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 244 |  | Tổng cộng |  | `=D243` |  | `=F243` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 245 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D244*0.1` |  | `=F244*0.1` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 246 |  | Tổng số tiền phải thanh toán |  | `=D244+D245` | 23120 | `=F244+F245` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 248 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 249 | Phí dịch vụ tháng 06 |  |  | `=9200000+12.5%*F246` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 255 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 257 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 258 | 1 | 726886460554 | 2021-07-01 | 2085.69 | 23050 | `=round(D258*E258,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 259 |  | Discount (2%) |  | `=D258*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 260 |  | Tổng cộng |  | `=D258-D259` | 23050 | `=round(D260*E260,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 261 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D260*0.08` |  | 3769093 | 3769092 |  |  |  |  |  |  |  |  |  |  |  |  |
| 262 |  | Tổng số tiền phải thanh toán |  | `=D260+D261` | 23050 | `=F260+F261` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 264 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 265 | Phí dịch vụ tháng 07 |  |  | `=9200000+12.5%*F262` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 269 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 270 |  |  |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ OSAM TRẢ CLOUDAZ |  |  |  |  |  |  |  |  |
| 271 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 272 | 1 | 726886460554 | 2021-08-01 | 1967.99 | 22870 | `=round(D272*E272,0)` |  |  |  |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |
| 273 |  | Discount (2%) |  | `=D272*2%` |  |  |  |  |  |  | 1 | 726886460554 | 2021-08-01 | 1967.99 | 22880 | `=round(N273*O273,0)` |  |  |  |
| 274 |  | Tổng cộng |  | `=D272-D273` | 22870 | `=round(D274*E274,0)` |  |  |  |  |  | Discount (2%) |  | `=N273*2%` |  |  |  |  |  |
| 275 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D274*0.08` |  | `=F274*0.08` |  |  |  |  |  | Tổng cộng |  | `=N273-N274` | 22880 | `=round(N275*O275,0)` |  |  |  |
| 276 |  | Tổng số tiền phải thanh toán |  | `=D274+D275` | 22870 | `=F274+F275` |  | 47636394.8400000036 | 47636394.8400000036 |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=N275*0.08` |  | `=P275*0.08` |  |  |  |
| 277 |  |  |  |  |  |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  | `=N275+N276` | 22880 | `=P275+P276` |  |  |  |
| 278 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 279 | Phí dịch vụ tháng 08 |  |  | `=9200000+12.5%*F276` |  |  | `=F276+D279` |  |  |  |  |  |  |  |  |  |  |  |  |
| 284 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 286 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 287 | 1 | 726886460554 | 2021-09-01 | 2121.8 | 22860 | `=round(D287*E287,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 288 |  | Discount (2%) |  | `=D287*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 289 |  | Tổng cộng |  | `=D287-D288` | 22860 | `=round(D289*E289,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 290 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D289*0.08` |  | `=F289*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 291 |  | Tổng số tiền phải thanh toán |  | `=D289+D290` | 22860 | `=F289+F290` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 293 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 294 | Phí dịch vụ tháng 09 |  |  | `=9200000+12.5%*F291` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 298 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 300 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 301 | 1 | 726886460554 | 2021-10-01 | 2278.89 | 22850 | `=round(D301*E301,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 302 |  | Discount (2%) |  | `=D301*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 303 |  | Tổng cộng |  | `=D301-D302` | 22850 | `=round(D303*E303,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 304 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D303*0.08` |  | `=F303*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 305 |  | Tổng số tiền phải thanh toán |  | `=D303+D304` | 22850 | `=F303+F304` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 307 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 308 | Phí dịch vụ tháng 10 |  |  | `=9200000+12.5%*F305` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 312 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 314 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 315 | 1 | 726886460554 | 2021-11-01 | 2072.89 | 22800 | `=round(D315*E315,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 316 |  | Discount (2%) |  | `=D315*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 317 |  | Tổng cộng |  | `=D315-D316` | 22800 | `=round(D317*E317,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 318 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D317*0.08` |  | `=F317*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 319 |  | Tổng số tiền phải thanh toán |  | `=D317+D318` | 22800 | `=F317+F318` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 321 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 322 | Phí dịch vụ tháng 11 |  |  | `=9200000+12.5%*F319` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 325 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 327 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 328 | 1 | 726886460554 | 2021-12-01 | 2227.86 | 22920 | `=round(D328*E328,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 329 |  | Discount (2%) |  | `=D328*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 330 |  | Tổng cộng |  | `=D328-D329` | 22920 | `=round(D330*E330,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 331 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D330*0.08` |  | `=F330*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 332 |  | Tổng số tiền phải thanh toán |  | `=D330+D331` | 22920 | `=F330+F331` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 334 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 335 | Phí dịch vụ tháng 12 |  |  | `=9200000+12.5%*F332` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 339 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 341 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 342 | 1 | 726886460554 | 2022-01-01 | 2308.5 | 22780 | `=round(D342*E342,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 343 |  | Discount (2%) |  | `=D342*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 344 |  | Tổng cộng |  | `=D342-D343` | 22780 | `=round(D344*E344,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 345 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D344*0.08` |  | `=F344*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 346 |  | Tổng số tiền phải thanh toán |  | `=D344+D345` | 22780 | `=F344+F345` | 55658747.1599999964 |  |  |  |  |  |  |  |  |  |  |  |  |
| 348 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 349 | Phí dịch vụ tháng 01 |  |  | `=9200000+12.5%*F346` | 16157343.3949999996 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 353 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 355 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 356 | 1 | 726886460554 | 2022-02-01 | 2067.38 | 22950 | `=round(D356*E356,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 357 |  | Discount (2%) |  | `=D356*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 358 |  | Tổng cộng |  | `=D356-D357` | 22950 | `=round(D358*E358,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 359 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D358*0.08` |  | `=F358*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 360 |  | Tổng số tiền phải thanh toán |  | `=D358+D359` | 22950 | `=F358+F359` | 50217239.5200000033 |  |  |  |  |  |  |  |  |  |  |  |  |
| 362 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 363 | Phí dịch vụ tháng 02 |  |  | `=9200000+12.5%*F360` | 15477154.9400000013 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 366 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 368 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 369 | 1 | 726886460554 | 2022-03-01 | 2438.36 | 22980 | `=round(D369*E369,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 370 |  | Discount (2%) |  | `=D369*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 371 |  | Tổng cộng |  | `=D369-D370` | 22980 | `=round(D371*E371,0)` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 372 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D371*0.08` |  | `=F371*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 373 |  | Tổng số tiền phải thanh toán |  | `=D371+D372` | 22980 | `=F371+F372` | 59305870.4399999976 |  |  |  |  |  |  |  |  |  |  |  |  |
| 375 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 376 | Phí dịch vụ tháng 03 |  |  | `=9200000+12.5%*F373` |  |  | 16613233.8049999997 |  |  |  |  |  |  |  |  |  |  |  |  |
| 379 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 381 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 382 | 1 | 726886460554 | 2022-05-01 | 2630.33 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 383 |  | Discount (2%) |  | `=D382*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 384 |  | Tổng cộng |  | `=D382-D383` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 385 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D384*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 386 |  | Tổng số tiền phải thanh toán |  | `=round(D384+D385,2)` | 23330 | `=D386*E386` |  | 64949320 |  |  |  |  |  |  |  |  |  |  |  |
| 388 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 389 | Phí dịch vụ tháng 05 |  |  | `=9200000+12.5%*F386` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 392 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 394 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 395 | 1 | 726886460554 | 2022-06-01 | 2512.12 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 396 |  | Discount (2%) |  | `=D395*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 397 |  | Tổng cộng |  | `=D395-D396` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 398 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D397*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 399 |  | Tổng số tiền phải thanh toán |  | `=round(D397+D398,2)` | 23415 | `=D399*E399` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 401 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 402 | Phí dịch vụ tháng 06 |  |  | `=9200000+12.5%*F399` |  | `=F399+D402` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 405 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 407 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 408 | 1 | 726886460554 | 2022-07-01 | 2679.13 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 409 |  | Discount (2%) |  | `=D408*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 410 |  | Tổng cộng |  | `=D408-D409` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 411 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D410*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 412 |  | Tổng số tiền phải thanh toán |  | `=round(D410+D411,2)` | 23480 | `=D412*E412` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 414 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 415 | Phí dịch vụ tháng 07 |  |  | `=9200000+12.5%*F412` |  | `=F412+D415` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 419 | TỔNG HỢP CHI PHÍ VINFAST |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 421 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 422 | 1 | 726886460554 | 2022-08-01 | 691.51 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 423 |  | Discount (2%) |  | `=D422*2%` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 424 |  | Tổng cộng |  | `=D422-D423` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 425 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D424*0.08` |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 426 |  | Tổng số tiền phải thanh toán |  | `=round(D424+D425,2)` | 23600 | `=D426*E426` |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 428 | Theo phụ lục 02: Dịch vụ quản trị hệ thống |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 429 | Phí dịch vụ tháng 08 |  |  | `=9200000+12.5%*F426` |  | `=F426+D429` |  |  |  |  |  |  |  |  |  |  |  |  |  |

> *Đã bỏ qua 159 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (260 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=9200000+12.5%*F{r}` | 29 | `D16` |
| D | `=D{r}+D{r}` | 25 | `D13` |
| D | `=D{r}` | 16 | `D11` |
| D | `=D{r}*0.1` | 16 | `D12` |
| D | `=D{r}*2%` | 13 | `D259` |
| D | `=D{r}-D{r}` | 13 | `D260` |
| D | `=D{r}*0.08` | 13 | `D261` |
| D | `=round(D{r}+D{r},2)` | 4 | `D386` |
| D | `=163.92+1891.91` | 1 | `D243` |
| F | `=F{r}+F{r}` | 25 | `F13` |
| F | `=round(D{r}*E{r},0)` | 20 | `F230` |
| F | `=D{r}*E{r}` | 18 | `F10` |
| F | `=F{r}` | 16 | `F11` |
| F | `=F{r}*0.1` | 16 | `F12` |
| F | `=F{r}*0.08` | 8 | `F275` |
| F | `=F{r}+D{r}` | 3 | `F402` |
| G | `=F{r}+D{r}` | 2 | `G15` |
| H | `=F{r}+D{r}` | 1 | `H90` |
| I | `=sum(I{r}:I{r})` | 1 | `I9` |
| J | `=sum(J{r}:J{r})` | 1 | `J9` |
| N | `=N{r}*2%` | 1 | `N274` |
| N | `=N{r}-N{r}` | 1 | `N275` |
| N | `=N{r}*0.08` | 1 | `N276` |
| N | `=N{r}+N{r}` | 1 | `N277` |
| P | `=round(N{r}*O{r},0)` | 2 | `P273` |
| P | `=P{r}*0.08` | 1 | `P276` |
| P | `=P{r}+P{r}` | 1 | `P277` |
| Q | `=sum(Q{r}:Q{r})` | 1 | `Q11` |
| Q | `=Q{r}*0.1` | 1 | `Q12` |
| Q | `=Q{r}+Q{r}` | 1 | `Q13` |
| S | `=Q{r}*R{r}` | 5 | `S6` |
| S | `=sum(S{r}:S{r})` | 1 | `S11` |
| S | `=S{r}*0.1` | 1 | `S12` |
| S | `=S{r}+S{r}` | 1 | `S13` |
