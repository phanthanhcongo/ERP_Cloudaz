# ILOTUSLAND

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ILOTUSLAND`  
> **Vùng dữ liệu:** 233 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 414278468490 | 2024-07-01 | 58.88 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D4/(1-5%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 25405 | `=D7*E7` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | TỔNG HỢP CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 414278468490 | 2024-08-01 | 2621.13 |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D16/(1-5%),2)` |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 19 | Thành tiền |  |  | `=D17-D18` | 25080 | `=D19*E19` |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |
| 25 | TỔNG HỢP CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 28 | 1 | 414278468490 | 2024-09-01 | 2567.48 |  |  |
| 29 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D28/(1-5%),2)` |  |  |
| 30 | Chiết khấu (2%) |  |  | `=round(D29*2%,2)` |  |  |
| 31 | Thành tiền |  |  | `=D29-D30` | 24733 | `=D31*E31` |
| 32 | Thuế GTGT (10%) |  |  |  |  | `=round(F31*10%,0)` |
| 33 | Tổng số tiền phải thanh toán |  |  |  |  | `=F31+F32` |
| 37 | TỔNG HỢP CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 40 | 1 | 414278468490 | 2024-10-01 | 2682.42 |  |  |
| 41 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D40/(1-5%),2)` |  |  |
| 42 | Chiết khấu (2%) |  |  | `=round(D41*2%,2)` |  |  |
| 43 | Thành tiền |  |  | `=D41-D42` | 25445 | `=D43*E43` |
| 44 | Thuế GTGT (10%) |  |  |  |  | `=round(F43*10%,0)` |
| 45 | Tổng số tiền phải thanh toán |  |  |  |  | `=F43+F44` |
| 49 | TỔNG HỢP CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 52 | 1 | 414278468490 | 2024-11-01 | 2695.43 |  |  |
| 53 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D52/(1-5%),2)` |  |  |
| 54 | Chiết khấu (2%) |  |  | `=round(D53*2%,2)` |  |  |
| 55 | Thành tiền |  |  | `=D53-D54` | 25463 | `=D55*E55` |
| 56 | Thuế GTGT (10%) |  |  |  |  | `=round(F55*10%,0)` |
| 57 | Tổng số tiền phải thanh toán |  |  |  |  | `=F55+F56` |
| 61 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 63 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 64 | 1 | 414278468490 | 2024-12-01 | 2313.77 |  |  |
| 65 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D64/(1-5%),2)` |  |  |
| 66 | Chiết khấu (2%) |  |  | `=round(D65*2%,2)` |  |  |
| 67 | Thành tiền |  |  | `=D65-D66` | 25551 | `=D67*E67` |
| 68 | Thuế GTGT (10%) |  |  |  |  | `=round(F67*10%,0)` |
| 69 | Tổng số tiền phải thanh toán |  |  |  |  | `=F67+F68` |
| 73 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 75 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 76 | 1 | 414278468490 | 2025-01-01 | 2178.79 |  |  |
| 77 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D76/(1-5%),2)` |  |  |
| 78 | Chiết khấu (2%) |  |  | `=round(D77*2%,2)` |  |  |
| 79 | Thành tiền |  |  | `=D77-D78` | 25295 | `=D79*E79` |
| 80 | Thuế GTGT (10%) |  |  |  |  | `=round(F79*10%,0)` |
| 81 | Tổng số tiền phải thanh toán |  |  |  |  | `=F79+F80` |
| 85 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 88 | 1 | 414278468490 | 2025-02-01 | 1898.2 |  |  |
| 89 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D88/(1-5%),2)` |  |  |
| 90 | Chiết khấu (2%) |  |  | `=round(D89*2%,2)` |  |  |
| 91 | Thành tiền |  |  | `=D89-D90` | 25735 | `=D91*E91` |
| 92 | Thuế GTGT (10%) |  |  |  |  | `=round(F91*10%,0)` |
| 93 | Tổng số tiền phải thanh toán |  |  |  |  | `=F91+F92` |
| 97 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 100 | 1 | 414278468490 | 2025-03-01 | 2177.58 |  |  |
| 101 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D100/(1-5%),2)` |  |  |
| 102 | Chiết khấu (2%) |  |  | `=round(D101*2%,2)` |  |  |
| 103 | Thành tiền |  |  | `=D101-D102` | 25775 | `=D103*E103` |
| 104 | Thuế GTGT (10%) |  |  |  |  | `=round(F103*10%,0)` |
| 105 | Tổng số tiền phải thanh toán |  |  |  |  | `=F103+F104` |
| 109 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 111 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 112 | 1 | 414278468490 | 2025-04-01 | 2188.94 |  |  |
| 113 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D112/(1-5%),2)` |  |  |
| 114 | Chiết khấu (2%) |  |  | `=round(D113*2%,2)` |  |  |
| 115 | Thành tiền |  |  | `=D113-D114` | 26190 | `=D115*E115` |
| 116 | Thuế GTGT (10%) |  |  |  |  | `=round(F115*10%,0)` |
| 117 | Tổng số tiền phải thanh toán |  |  |  |  | `=F115+F116` |
| 121 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 123 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 124 | 1 | 414278468490 | 2025-05-01 | 2163.51 |  |  |
| 125 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D124/(1-5%),2)` |  |  |
| 126 | Chiết khấu (2%) |  |  | `=round(D125*2%,2)` |  |  |
| 127 | Thành tiền |  |  | `=D125-D126` | 26225 | `=D127*E127` |
| 128 | Thuế GTGT (10%) |  |  |  |  | `=round(F127*10%,0)` |
| 129 | Tổng số tiền phải thanh toán |  |  |  |  | `=F127+F128` |
| 133 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 135 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 136 | 1 | 414278468490 | 2025-06-01 | 2083.73 |  |  |
| 137 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D136/(1-5%),2)` |  |  |
| 138 | Chiết khấu (2%) |  |  | `=round(D137*2%,2)` |  |  |
| 139 | Thành tiền |  |  | `=D137-D138` | 26300 | `=D139*E139` |
| 140 | Thuế GTGT (10%) |  |  |  |  | `=round(F139*10%,0)` |
| 141 | Tổng số tiền phải thanh toán |  |  |  |  | `=F139+F140` |
| 145 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 147 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 148 | 1 | 414278468490 | 2025-07-01 | 2190.3 |  |  |
| 149 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D148*(1+10%),2)` |  |  |
| 150 | Chiết khấu (2%) |  |  | `=round(D149*2%,2)` |  |  |
| 151 | Thành tiền |  |  | `=D149-D150` | 26382 | `=D151*E151` |
| 152 | Thuế GTGT (10%) |  |  |  |  | `=round(F151*10%,0)` |
| 153 | Tổng số tiền phải thanh toán |  |  |  |  | `=F151+F152` |
| 157 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 160 | 1 | 414278468490 | 2025-08-01 | 2264.94 |  |  |
| 161 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D160*(1+10%),2)` |  |  |
| 162 | Chiết khấu (2%) |  |  | `=round(D161*2%,2)` |  |  |
| 163 | Thành tiền |  |  | `=D161-D162` | 26502 | `=D163*E163` |
| 164 | Thuế GTGT (10%) |  |  |  |  | `=round(F163*10%,0)` |
| 165 | Tổng số tiền phải thanh toán |  |  |  |  | `=F163+F164` |
| 170 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 172 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 173 | 1 | 414278468490 | 2025-09-01 | 2246.07 |  |  |
| 174 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D173*(1+10%),2)` |  |  |
| 175 | Chiết khấu (2%) |  |  | `=round(D174*2%,2)` |  |  |
| 176 | Thành tiền |  |  | `=D174-D175` | 26446 | `=D176*E176` |
| 177 | Thuế GTGT (10%) |  |  |  |  | `=round(F176*10%,0)` |
| 178 | Tổng số tiền phải thanh toán |  |  |  |  | `=F176+F177` |
| 184 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 186 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 187 | 1 | 414278468490 | 2025-10-01 | 2248.99 |  |  |
| 188 | Giá trước chiết khấu (bao gồm 5.26% phí dịch vụ) |  |  | `=round(D187*(1+5.26%),2)` |  |  |
| 189 | Chiết khấu (2%) |  |  | `=round(D188*2%,2)` |  |  |
| 190 | Thành tiền |  |  | `=D188-D189` | 26347 | `=D190*E190` |
| 191 | Thuế GTGT (10%) |  |  |  |  | `=round(F190*10%,0)` |
| 192 | Tổng số tiền phải thanh toán |  |  |  |  | `=F190+F191` |
| 197 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 199 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 200 | 1 | 414278468490 | 2025-11-01 | 1989.74 |  |  |
| 201 | Giá trước chiết khấu (bao gồm 5.26% phí dịch vụ) |  |  | `=round(D200*(1+5.26%),2)` |  |  |
| 202 | Chiết khấu (2%) |  |  | `=round(D201*2%,2)` |  |  |
| 203 | Thành tiền |  |  | `=D201-D202` | 26412 | `=D203*E203` |
| 204 | Thuế GTGT (10%) |  |  |  |  | `=round(F203*10%,0)` |
| 205 | Tổng số tiền phải thanh toán |  |  |  |  | `=F203+F204` |
| 211 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 213 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 214 | 1 | 414278468490 | 2025-12-01 | 1962.96 |  |  |
| 215 | Giá trước chiết khấu (bao gồm 5.26% phí dịch vụ) |  |  | `=round(D214*(1+5.26%),2)` |  |  |
| 216 | Chiết khấu (2%) |  |  | `=round(D215*2%,2)` |  |  |
| 217 | Thành tiền |  |  | `=D215-D216` | 26377 | `=D217*E217` |
| 218 | Thuế GTGT (10%) |  |  |  |  | `=round(F217*10%,0)` |
| 219 | Tổng số tiền phải thanh toán |  |  |  |  | `=F217+F218` |
| 225 | ĐỐI SOÁT CHI PHÍ AWS ILOTUSLAND |  |  |  |  |  |
| 227 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 228 | 1 | 414278468490 | 2026-01-01 | 1799.21 |  |  |
| 229 | Giá trước chiết khấu (bao gồm 5.26% phí dịch vụ) |  |  | `=round(D228*(1+5.26%),2)` |  |  |
| 230 |  |  |  | `=round(D229*2%,2)` |  |  |
| 231 |  |  |  | `=D229-D230` | 26145 | `=D231*E231` |
| 232 |  |  |  |  |  | `=round(F231*10%,0)` |
| 233 |  |  |  |  |  | `=F231+F232` |

> *Đã bỏ qua 81 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (114 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 19 | `D6` |
| D | `=D{r}-D{r}` | 19 | `D7` |
| D | `=round(D{r}/(1-5%),2)` | 12 | `D5` |
| D | `=round(D{r}*(1+5.26%),2)` | 4 | `D188` |
| D | `=round(D{r}*(1+10%),2)` | 3 | `D149` |
| F | `=D{r}*E{r}` | 19 | `F7` |
| F | `=round(F{r}*10%,0)` | 19 | `F8` |
| F | `=F{r}+F{r}` | 19 | `F9` |
