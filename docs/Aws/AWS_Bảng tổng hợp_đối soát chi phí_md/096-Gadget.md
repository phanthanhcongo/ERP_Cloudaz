# Gadget

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Gadget`  
> **Vùng dữ liệu:** 184 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 242380669253 | 2023-03-01 | 47.37 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round((D4+D5)*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D4+D5-D6` | 23632 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 242380669253 | 2023-07-01 | 627.66 |  |  |
| 15 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D14*5.26%,2)` |  |  |
| 16 | Chiết khấu (2%) |  |  | `=round((D14+D15)*2%,2)` |  |  |
| 17 | Tổng số tiền phải thanh toán |  |  | `=D14+D15-D16` | 23860 | `=D17*E17` |
| 21 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 23 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 24 | 1 | 242380669253 | 2023-08-01 | 990.87 |  |  |
| 25 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D24*5.26%,2)` |  |  |
| 26 | Chiết khấu (2%) |  |  | `=round((D24+D25)*2%,2)` |  |  |
| 27 | Tổng số tiền phải thanh toán |  |  | `=D24+D25-D26` | 24260 | `=D27*E27` |
| 30 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 33 | 1 | 242380669253 | 2023-09-01 | 1036.73 |  |  |
| 34 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D33*5.26%,2)` |  |  |
| 35 | Chiết khấu (2%) |  |  | `=round((D33+D34)*2%,2)` |  |  |
| 36 | Tổng số tiền phải thanh toán |  |  | `=D33+D34-D35` | 24470 | `=D36*E36` |
| 39 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 42 | 1 | 242380669253 | 2023-10-01 | 1230.15 |  |  |
| 43 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D42*5.26%,2)` |  |  |
| 44 | Chiết khấu (2%) |  |  | `=round((D42+D43)*2%,2)` |  |  |
| 45 | Tổng số tiền phải thanh toán |  |  | `=D42+D43-D44` | 24729 | `=D45*E45` |
| 48 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 51 | 1 | 242380669253 | 2023-11-01 | 1395.83 |  |  |
| 52 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D51*5.26%,2)` |  |  |
| 53 | Chiết khấu (2%) |  |  | `=round((D51+D52)*2%,2)` |  |  |
| 54 | Tổng số tiền phải thanh toán |  |  | `=D51+D52-D53` | 24427 | `=D54*E54` |
| 58 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 61 | 1 | 242380669253 | 2023-12-01 | 8530.12 |  |  |
| 62 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D61*5.26%,2)` |  |  |
| 63 | Chiết khấu (2%) |  |  | `=round((D61+D62)*2%,2)` |  |  |
| 64 | Tổng số tiền phải thanh toán |  |  | `=D61+D62-D63` | 24450 | `=D64*E64` |
| 68 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 70 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 71 | 1 | 242380669253 | 2024-01-01 | 1401.49 |  |  |
| 72 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D71*5.26%,2)` |  |  |
| 73 | Chiết khấu (2%) |  |  | `=round((D71+D72)*2%,2)` |  |  |
| 74 | Tổng số tiền phải thanh toán |  |  | `=D71+D72-D73` | 24578 | `=D74*E74` |
| 78 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 81 | 1 | 242380669253 | 2024-02-01 | 927.11 |  |  |
| 82 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D81*5.26%,2)` |  |  |
| 83 | Chiết khấu (2%) |  |  | `=round((D81+D82)*2%,2)` |  |  |
| 84 | Tổng số tiền phải thanh toán |  |  | `=D81+D82-D83` | 24802 | `=D84*E84` |
| 87 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 89 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 90 | 1 | 242380669253 | 2024-03-01 | 1180.15 |  |  |
| 91 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D90*5.26%,2)` |  |  |
| 92 | Chiết khấu (2%) |  |  | `=round((D90+D91)*2%,2)` |  |  |
| 93 | Tổng số tiền phải thanh toán |  |  | `=D90+D91-D92` | 24972 | `=D93*E93` |
| 97 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 100 | 1 | 242380669253 | 2024-04-01 | 784.88 |  |  |
| 101 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D100*5.26%,2)` |  |  |
| 102 | Chiết khấu (2%) |  |  | `=round((D100+D101)*2%,2)` |  |  |
| 103 | Tổng số tiền phải thanh toán |  |  | `=D100+D101-D102` | 25458 | `=D103*E103` |
| 107 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 109 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 110 | 1 | 242380669253 | 2024-05-01 | 742.03 |  |  |
| 111 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D110*5.26%,2)` |  |  |
| 112 | Chiết khấu (2%) |  |  | `=round((D110+D111)*2%,2)` |  |  |
| 113 | Tổng số tiền phải thanh toán |  |  | `=D110+D111-D112` | 25474 | `=D113*E113` |
| 117 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 120 | 1 | 242380669253 | 2024-06-01 | 610.58 |  |  |
| 121 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D120*5.26%,2)` |  |  |
| 122 | Chiết khấu (2%) |  |  | `=round((D120+D121)*2%,2)` |  |  |
| 123 | Thành tiền |  |  | `=D120+D121-D122` | 25473 | `=D123*E123` |
| 127 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 129 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 130 | 1 | 242380669253 | 2024-07-01 | 618.4 |  |  |
| 131 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D130*5.26%,2)` |  |  |
| 132 | Chiết khấu (2%) |  |  | `=round((D130+D131)*2%,2)` |  |  |
| 133 | Thành tiền |  |  | `=D130+D131-D132` | 25405 | `=D133*E133` |
| 137 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 139 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 140 | 1 | 242380669253 | 2024-08-01 | 517.8 |  |  |
| 141 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D140*5.26%,2)` |  |  |
| 142 | Chiết khấu (2%) |  |  | `=round((D140+D141)*2%,2)` |  |  |
| 143 | Thành tiền |  |  | `=D140+D141-D142` | 25080 | `=D143*E143` |
| 147 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 149 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 150 | 1 | 242380669253 | 2024-09-01 | 543.66 |  |  |
| 151 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D150*5.26%,2)` |  |  |
| 152 | Chiết khấu (2%) |  |  | `=round((D150+D151)*2%,2)` |  |  |
| 153 | Thành tiền |  |  | `=D150+D151-D152` | 24733 | `=D153*E153` |
| 157 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 160 | 1 | 242380669253 | 2024-10-01 | 578.39 |  |  |
| 161 | 2 | Giảm giá | 2024-10-01 | 292.86 |  |  |
| 162 |  | Tổng cộng |  | `=D160-D161` |  |  |
| 163 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D162*5.26%,2)` |  |  |
| 164 | Chiết khấu (2%) |  |  | `=round((D162+D163)*2%,2)` |  |  |
| 165 | Thành tiền |  |  | `=D162+D163-D164` | 25445 | `=D165*E165` |
| 166 | Thuế GTGT |  |  |  |  | `=round(F165*10%,0)` |
| 167 | Tổng số tiền phải thanh toán |  |  |  |  | `=F165+F166` |
| 171 | TỔNG HỢP CHI PHÍ GADGET |  |  |  |  |  |
| 173 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 174 | 1 | 242380669253 | 2024-11-01 | 716.53 |  |  |
| 175 |  | Tổng cộng |  | `=D174` |  |  |
| 176 | Phí dịch vụ tính trên Lượng dùng thực tế (5.26%) |  |  | `=round(D175*5.26%,2)` |  |  |
| 177 | Chiết khấu (2%) |  |  | `=round((D175+D176)*2%,2)` |  |  |
| 178 | Thành tiền |  |  | `=D175+D176-D177` | 25463 | `=D178*E178` |
| 179 | Thuế GTGT |  |  |  |  | `=round(F178*10%,0)` |
| 180 | Tổng số tiền phải thanh toán |  |  |  |  | `=F178+F179` |
| 184 | ĐỐI SOÁT CHI PHÍ GADGET |  |  |  |  |  |

> *Đã bỏ qua 68 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (78 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*5.26%,2)` | 18 | `D5` |
| D | `=round((D{r}+D{r})*2%,2)` | 18 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 18 | `D7` |
| D | `=D{r}-D{r}` | 1 | `D162` |
| D | `=D{r}` | 1 | `D175` |
| F | `=D{r}*E{r}` | 18 | `F7` |
| F | `=round(F{r}*10%,0)` | 2 | `F166` |
| F | `=F{r}+F{r}` | 2 | `F167` |
