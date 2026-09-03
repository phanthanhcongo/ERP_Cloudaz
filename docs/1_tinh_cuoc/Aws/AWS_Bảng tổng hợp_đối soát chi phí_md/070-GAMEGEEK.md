# GAMEGEEK

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `GAMEGEEK`  
> **Vùng dữ liệu:** 149 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | J |
|---:|---|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 4 | 1 | 100984516027 | 2025-05-01 | 304.3 |  |  |  |
| 5 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |  |
| 6 | Thành tiền |  |  | `=D4+D5` | 26225 | `=round(D6*E6,0)` |  |
| 7 | Thuế GTGT (10%) |  |  |  |  | `=round(F6*10%,0)` |  |
| 8 | Tổng số tiền phải thanh toán |  |  |  |  | `=F6+F7` |  |
| 9 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 52558000 |  |
| 10 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F9-F8` |  |
| 14 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 17 | 1 | 100984516027 | 2025-06-01 | 145.95 |  |  |  |
| 18 | Phí dịch vụ (5.26%) |  |  | `=round(D17*5.26%,2)` |  |  |  |
| 19 | Thành tiền |  |  | `=D17+D18` | 26300 | `=round(D19*E19,0)` |  |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |  |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |  |
| 22 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 43317857 |  |
| 23 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F22-F21` |  |
| 27 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 30 | 1 | 100984516027 | 2025-07-01 | 131.69 |  |  |  |
| 31 | Phí dịch vụ (10%) |  |  | `=round(D30*10%,2)` |  |  |  |
| 32 | Thành tiền |  |  | `=D30+D31` | 26382 | `=round(D32*E32,0)` |  |
| 33 | Thuế GTGT (10%) |  |  |  |  | `=round(F32*10%,0)` |  |
| 34 | Tổng số tiền phải thanh toán |  |  |  |  | `=F32+F33` |  |
| 35 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 38873341 |  |
| 36 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F35-F34` |  |
| 41 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 43 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 44 | 1 | 100984516027 | 2025-08-01 | 129.47 |  |  |  |
| 45 | Phí dịch vụ (10%) |  |  | `=round(D44*10%,2)` |  |  |  |
| 46 | Thành tiền |  |  | `=D44+D45` | 26502 | `=round(D46*E46,0)` |  |
| 47 | Thuế GTGT (10%) |  |  |  |  | `=round(F46*10%,0)` |  |
| 48 | Tổng số tiền phải thanh toán |  |  |  |  | `=F46+F47` |  |
| 49 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 34669474 |  |
| 50 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F49-F48` |  |
| 55 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 57 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 58 | 1 | 100984516027 | 2025-09-01 | 126.31 |  |  |  |
| 59 | Phí dịch vụ (10%) |  |  | `=round(D58*10%,2)` |  |  |  |
| 60 | Thành tiền |  |  | `=D58+D59` | 26446 | `=round(D60*E60,0)` |  |
| 61 | Thuế GTGT (10%) |  |  |  |  | `=round(F60*10%,0)` |  |
| 62 | Tổng số tiền phải thanh toán |  |  |  |  | `=F60+F61` |  |
| 63 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 30517617 |  |
| 64 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F63-F62` |  |
| 70 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 72 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 73 | 1 | 100984516027 | 2025-10-01 | 126.66 |  |  |  |
| 74 | Phí dịch vụ (10%) |  |  | `=round(D73*10%,2)` |  |  |  |
| 75 | Thành tiền |  |  | `=D73+D74` | 26347 | `=round(D75*E75,0)` |  |
| 76 | Thuế GTGT (10%) |  |  |  |  | `=round(F75*10%,0)` |  |
| 77 | Tổng số tiền phải thanh toán |  |  |  |  | `=F75+F76` |  |
| 78 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 26475769 |  |
| 79 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F78-F77` |  |
| 85 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 88 | 1 | 100984516027 | 2025-11-01 | 534.46 |  |  |  |
| 89 | Phí dịch vụ (10%) |  |  | `=round(D88*10%,2)` |  |  |  |
| 90 | Thành tiền |  |  | `=D88+D89` | 26412 | `=round(D90*E90,0)` |  |
| 91 | Thuế GTGT (10%) |  |  |  |  | `=round(F90*10%,0)` |  |
| 92 | Tổng số tiền phải thanh toán |  |  |  |  | `=F90+F91` |  |
| 93 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 22437748 |   |
| 94 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F93-F92` |  |
| 100 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 103 | 1 | 100984516027 | 2025-12-01 | 116.95 |  |  |  |
| 104 | Phí dịch vụ (10%) |  |  | `=round(D103*10%,2)` |  |  |  |
| 105 | Thành tiền |  |  | `=D103+D104` | 26377 | `=round(D105*E105,0)` |  |
| 106 | Thuế GTGT (10%) |  |  |  |  | `=round(F105*10%,0)` |  |
| 107 | Tổng số tiền phải thanh toán |  |  |  |  | `=F105+F106` |  |
| 108 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 5357081 |  |
| 109 | Số tiền hỗ trợ còn lại |  |  |  |  | `=F108-F107` |  |
| 114 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 117 | 1 | 100984516027 | 2026-01-01 | 117.34 |  |  |  |
| 118 | Phí dịch vụ (10%) |  |  | `=round(D117*10%,2)` |  |  |  |
| 119 | Thành tiền |  |  | `=D117+D118` | 26145 | `=round(D119*E119,0)` |  |
| 120 | Thuế GTGT (10%) |  |  |  |  | `=round(F119*10%,0)` |  |
| 121 | Tổng số tiền phải thanh toán |  |  |  |  | `=F119+F120` |  |
| 122 | Số tiền hỗ trợ theo phụ lục 01 |  |  |  |  | 1624340 |  |
| 123 | Số tiền thanh toán còn lại |  |  |  |  | `=F121-F122` |  |
| 129 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 131 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 132 | 1 | 100984516027 | 2026-02-01 | 111.57 |  |  |  |
| 133 | Phí dịch vụ (10%) |  |  | `=round(D132*10%,2)` |  |  |  |
| 134 | Thành tiền |  |  | `=D132+D133` | 26240 | `=round(D134*E134,0)` |  |
| 135 | Thuế GTGT (10%) |  |  |  |  | `=round(F134*10%,0)` |  |
| 136 | Tổng số tiền phải thanh toán |  |  |  |  | `=F134+F135` |  |
| 142 | ĐỐI SOÁT CHI PHÍ AWS - GAMEGEEK |  |  |  |  |  |  |
| 144 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |
| 145 | 1 | 100984516027 | 2026-03-01 | 79.49 |  |  |  |
| 146 | Phí dịch vụ (10%) |  |  | `=round(D145*10%,2)` |  |  |  |
| 147 | Thành tiền |  |  | `=D145+D146` | 26357 | `=round(D147*E147,0)` |  |
| 148 | Thuế GTGT (10%) |  |  |  |  | `=round(F147*10%,0)` |  |
| 149 | Tổng số tiền phải thanh toán |  |  |  |  | `=F147+F148` |  |

> *Đã bỏ qua 54 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (64 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}+D{r}` | 11 | `D6` |
| D | `=round(D{r}*10%,2)` | 9 | `D31` |
| D | `=round(D{r}*5.26%,2)` | 2 | `D5` |
| F | `=round(D{r}*E{r},0)` | 11 | `F6` |
| F | `=round(F{r}*10%,0)` | 11 | `F7` |
| F | `=F{r}+F{r}` | 11 | `F8` |
| F | `=F{r}-F{r}` | 9 | `F10` |
