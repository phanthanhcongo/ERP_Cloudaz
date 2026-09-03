# ACCEL3

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ACCEL3`  
> **Vùng dữ liệu:** 120 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 207639518165 | 2025-06-01 | 2366.29 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 26300 | `=round(D7*E7,2)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 207639518165 | 2025-07-01 | 2462 |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D16*(1+10%),2)` |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 19 | Thành tiền |  |  | `=D17-D18` | 26382 | `=round(D19*E19,2)` |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |
| 26 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 28 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 29 | 1 | 207639518165 | 2025-08-01 | 2470.23 |  |  |
| 30 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D29*(1+10%),2)` |  |  |
| 31 | Chiết khấu (2%) |  |  | `=round(D30*2%,2)` |  |  |
| 32 | Thành tiền |  |  | `=D30-D31` | 26502 | `=round(D32*E32,2)` |
| 33 | Thuế GTGT (10%) |  |  |  |  | `=round(F32*10%,0)` |
| 34 | Tổng số tiền phải thanh toán |  |  |  |  | `=F32+F33` |
| 39 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 42 | 1 | 207639518165 | 2025-09-01 | 2443.01 |  |  |
| 43 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D42*(1+10%),2)` |  |  |
| 44 | Chiết khấu (2%) |  |  | `=round(D43*2%,2)` |  |  |
| 45 | Thành tiền |  |  | `=D43-D44` | 26446 | `=round(D45*E45,2)` |
| 46 | Thuế GTGT (10%) |  |  |  |  | `=round(F45*10%,0)` |
| 47 | Tổng số tiền phải thanh toán |  |  |  |  | `=F45+F46` |
| 52 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 54 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 55 | 1 | 207639518165 | 2025-10-01 | 2466 |  |  |
| 56 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D55*(1+10%),2)` |  |  |
| 57 | Chiết khấu (2%) |  |  | `=round(D56*2%,2)` |  |  |
| 58 | Thành tiền |  |  | `=D56-D57` | 26347 | `=round(D58*E58,2)` |
| 59 | Thuế GTGT (10%) |  |  |  |  | `=round(F58*10%,0)` |
| 60 | Tổng số tiền phải thanh toán |  |  |  |  | `=F58+F59` |
| 65 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 68 | 1 | 207639518165 | 2025-11-01 | 2330.73 |  |  |
| 69 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D68*(1+10%),2)` |  |  |
| 70 | Chiết khấu (2%) |  |  | `=round(D69*2%,2)` |  |  |
| 71 | Thành tiền |  |  | `=D69-D70` | 26412 | `=round(D71*E71,2)` |
| 72 | Thuế GTGT (10%) |  |  |  |  | `=round(F71*10%,0)` |
| 73 | Tổng số tiền phải thanh toán |  |  |  |  | `=F71+F72` |
| 79 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 82 | 1 | 207639518165 | 2025-12-01 | 2434.5 |  |  |
| 83 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D82*(1+10%),2)` |  |  |
| 84 | Chiết khấu (2%) |  |  | `=round(D83*2%,2)` |  |  |
| 85 | Thành tiền |  |  | `=D83-D84` | 26377 | `=round(D85*E85,2)` |
| 86 | Thuế GTGT (10%) |  |  |  |  | `=round(F85*10%,0)` |
| 87 | Tổng số tiền phải thanh toán |  |  |  |  | `=F85+F86` |
| 93 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 95 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 96 | 1 | 207639518165 | 2026-01-01 | 2390.3 |  |  |
| 97 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D96*(1+10%),2)` |  |  |
| 98 | Chiết khấu (2%) |  |  | `=round(D97*2%,2)` |  |  |
| 99 | Thành tiền |  |  | `=D97-D98` | 26145 | `=round(D99*E99,2)` |
| 100 | Thuế GTGT (10%) |  |  |  |  | `=round(F99*10%,0)` |
| 101 | Tổng số tiền phải thanh toán |  |  |  |  | `=F99+F100` |
| 106 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |
| 108 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 109 | 1 | 207639518165 | 2026-02-01 | 2094.55 |  |  |
| 110 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D109*(1+10%),2)` |  |  |
| 111 | Chiết khấu (2%) |  |  | `=round(D110*2%,2)` |  |  |
| 112 | Thành tiền |  |  | `=D110-D111` | 26240 | `=round(D112*E112,2)` |
| 113 | Thuế GTGT (10%) |  |  |  |  | `=round(F112*10%,0)` |
| 114 | Tổng số tiền phải thanh toán |  |  |  |  | `=F112+F113` |
| 120 | ĐỐI SOÁT CHI PHÍ AWS - ACCEL3 |  |  |  |  |  |

> *Đã bỏ qua 47 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (54 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 9 | `D6` |
| D | `=D{r}-D{r}` | 9 | `D7` |
| D | `=round(D{r}*(1+10%),2)` | 8 | `D17` |
| D | `=round(D{r}*(1+5.26%),2)` | 1 | `D5` |
| F | `=round(D{r}*E{r},2)` | 9 | `F7` |
| F | `=round(F{r}*10%,0)` | 9 | `F8` |
| F | `=F{r}+F{r}` | 9 | `F9` |
