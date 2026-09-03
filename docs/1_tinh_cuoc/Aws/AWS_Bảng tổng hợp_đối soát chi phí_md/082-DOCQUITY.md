# DOCQUITY

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `DOCQUITY`  
> **Vùng dữ liệu:** 143 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 886436929473 | 2024-12-01 | 7.05 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 25551 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 886436929473 | 2025-01-01 | 27.01 |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D16*(1+5.26%),2)` |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 19 | Thành tiền |  |  | `=D17-D18` | 25295 | `=round(D19*E19,0)` |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |
| 25 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 28 | 1 | 886436929473 | 2025-02-01 | 25.42 |  |  |
| 29 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D28*(1+5.26%),2)` |  |  |
| 30 | Chiết khấu (2%) |  |  | `=round(D29*2%,2)` |  |  |
| 31 | Thành tiền |  |  | `=D29-D30` | 25735 | `=round(D31*E31,0)` |
| 32 | Thuế GTGT (10%) |  |  |  |  | `=round(F31*10%,0)` |
| 33 | Tổng số tiền phải thanh toán |  |  |  |  | `=F31+F32` |
| 37 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 40 | 1 | 886436929473 | 2025-03-01 | 28.05 |  |  |
| 41 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D40*(1+5.26%),2)` |  |  |
| 42 | Chiết khấu (2%) |  |  | `=round(D41*2%,2)` |  |  |
| 43 | Thành tiền |  |  | `=D41-D42` | 25775 | `=round(D43*E43,0)` |
| 44 | Thuế GTGT (10%) |  |  |  |  | `=round(F43*10%,0)` |
| 45 | Tổng số tiền phải thanh toán |  |  |  |  | `=F43+F44` |
| 49 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 52 | 1 | 886436929473 | 2025-04-01 | 27.6 |  |  |
| 53 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D52*(1+5.26%),2)` |  |  |
| 54 | Chiết khấu (2%) |  |  | `=round(D53*2%,2)` |  |  |
| 55 | Thành tiền |  |  | `=D53-D54` | 26190 | `=round(D55*E55,0)` |
| 56 | Thuế GTGT (10%) |  |  |  |  | `=round(F55*10%,0)` |
| 57 | Tổng số tiền phải thanh toán |  |  |  |  | `=F55+F56` |
| 61 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 63 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 64 | 1 | 886436929473 | 2025-05-01 | 28.28 |  |  |
| 65 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D64*(1+5.26%),2)` |  |  |
| 66 | Chiết khấu (2%) |  |  | `=round(D65*2%,2)` |  |  |
| 67 | Thành tiền |  |  | `=D65-D66` | 26225 | `=round(D67*E67,0)` |
| 68 | Thuế GTGT (10%) |  |  |  |  | `=round(F67*10%,0)` |
| 69 | Tổng số tiền phải thanh toán |  |  |  |  | `=F67+F68` |
| 73 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 75 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 76 | 1 | 886436929473 | 2025-06-01 | 27.73 |  |  |
| 77 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D76*(1+5.26%),2)` |  |  |
| 78 | Chiết khấu (2%) |  |  | `=round(D77*2%,2)` |  |  |
| 79 | Thành tiền |  |  | `=D77-D78` | 26300 | `=round(D79*E79,0)` |
| 80 | Thuế GTGT (10%) |  |  |  |  | `=round(F79*10%,0)` |
| 81 | Tổng số tiền phải thanh toán |  |  |  |  | `=F79+F80` |
| 85 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 87 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 88 | 1 | 886436929473 | 2025-07-01 | 28.42 |  |  |
| 89 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D88*(1+10%),2)` |  |  |
| 90 | Chiết khấu (2%) |  |  | `=round(D89*2%,2)` |  |  |
| 91 | Thành tiền |  |  | `=D89-D90` | 26382 | `=round(D91*E91,0)` |
| 92 | Thuế GTGT (10%) |  |  |  |  | `=round(F91*10%,0)` |
| 93 | Tổng số tiền phải thanh toán |  |  |  |  | `=F91+F92` |
| 97 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 99 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 100 | 1 | 886436929473 | 2025-08-01 | 28.45 |  |  |
| 101 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D100*(1+10%),2)` |  |  |
| 102 | Chiết khấu (2%) |  |  | `=round(D101*2%,2)` |  |  |
| 103 | Thành tiền |  |  | `=D101-D102` | 26502 | `=round(D103*E103,0)` |
| 104 | Thuế GTGT (10%) |  |  |  |  | `=round(F103*10%,0)` |
| 105 | Tổng số tiền phải thanh toán |  |  |  |  | `=F103+F104` |
| 109 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 111 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 112 | 1 | 886436929473 | 2025-09-01 | 27.87 |  |  |
| 113 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D112*(1+10%),2)` |  |  |
| 114 | Chiết khấu (2%) |  |  | `=round(D113*2%,2)` |  |  |
| 115 | Thành tiền |  |  | `=D113-D114` | 26446 | `=round(D115*E115,0)` |
| 116 | Thuế GTGT (10%) |  |  |  |  | `=round(F115*10%,0)` |
| 117 | Tổng số tiền phải thanh toán |  |  |  |  | `=F115+F116` |
| 122 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 124 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 125 | 1 | 886436929473 | 2025-10-01 | 28.56 |  |  |
| 126 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D125*(1+10%),2)` |  |  |
| 127 | Chiết khấu (2%) |  |  | `=round(D126*2%,2)` |  |  |
| 128 | Thành tiền |  |  | `=D126-D127` | 26347 | `=round(D128*E128,0)` |
| 129 | Thuế GTGT (10%) |  |  |  |  | `=round(F128*10%,0)` |
| 130 | Tổng số tiền phải thanh toán |  |  |  |  | `=F128+F129` |
| 135 | ĐỐI SOÁT CHI PHÍ AWS - DOCQUITY |  |  |  |  |  |
| 137 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 138 | 1 | 886436929473 | 2025-11-01 | 24.55 |  |  |
| 139 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D138*(1+10%),2)` |  |  |
| 140 | Chiết khấu (2%) |  |  | `=round(D139*2%,2)` |  |  |
| 141 | Thành tiền |  |  | `=D139-D140` | 26412 | `=round(D141*E141,0)` |
| 142 | Thuế GTGT (10%) |  |  |  |  | `=round(F141*10%,0)` |
| 143 | Tổng số tiền phải thanh toán |  |  |  |  | `=F141+F142` |

> *Đã bỏ qua 47 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (72 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 12 | `D6` |
| D | `=D{r}-D{r}` | 12 | `D7` |
| D | `=round(D{r}*(1+5.26%),2)` | 7 | `D5` |
| D | `=round(D{r}*(1+10%),2)` | 5 | `D89` |
| F | `=round(D{r}*E{r},0)` | 12 | `F7` |
| F | `=round(F{r}*10%,0)` | 12 | `F8` |
| F | `=F{r}+F{r}` | 12 | `F9` |
