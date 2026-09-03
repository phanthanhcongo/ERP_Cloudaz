# AGENTICS (STAYVN)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `AGENTICS (STAYVN)`  
> **Vùng dữ liệu:** 146 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 361769578650 | 2024-09-01 | 300.32 |  |  |
| 5 | 2 | 207639518165 | 1970-01-01 07:00:00 | 4182.14 |  |  |
| 6 | Tổng cộng |  |  | `=D4+D5` |  |  |
| 7 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D6*(1+5.26%),2)` |  |  |
| 8 | Chiết khấu (2%) |  |  | `=round(D7*2%,2)` |  |  |
| 9 | Giảm giá khác |  |  | 157.379 |  |  |
| 10 | Thành tiền |  |  | `=D7-D8-D9` | 24733 | `=D10*E10` |
| 11 | Thuế GTGT (10%) |  |  |  |  | `=round(F10*10%,0)` |
| 12 | Tổng số tiền phải thanh toán |  |  |  |  | `=F10+F11` |
| 16 | TỔNG HỢP CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 18 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 19 | 1 | 361769578650 | 2024-10-01 | 503.64 |  |  |
| 20 | 2 | 207639518165 | 1970-01-01 07:00:00 | 5280.55 |  |  |
| 21 | Tổng cộng |  |  | `=D19+D20` |  |  |
| 22 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D21*(1+5.26%),2)` |  |  |
| 23 | Chiết khấu (2%) |  |  | `=round(D22*2%,2)` |  |  |
| 24 | Thành tiền |  |  | `=D22-D23` | 25445 | `=D24*E24` |
| 25 | Thuế GTGT (10%) |  |  |  |  | `=round(F24*10%,0)` |
| 26 | Tổng số tiền phải thanh toán |  |  |  |  | `=F24+F25` |
| 30 | TỔNG HỢP CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 33 | 1 | 361769578650 | 2024-11-01 | 698.64 |  |  |
| 34 | 2 | 207639518165 | 1970-01-01 07:00:00 | 2575.5 |  |  |
| 35 | Tổng cộng |  |  | `=D33+D34` |  |  |
| 36 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D35*(1+5.26%),2)` |  |  |
| 37 | Chiết khấu (2%) |  |  | `=round(D36*2%,2)` |  |  |
| 38 | Thành tiền |  |  | `=D36-D37` | 25463 | `=D38*E38` |
| 39 | Thuế GTGT (10%) |  |  |  |  | `=round(F38*10%,0)` |
| 40 | Tổng số tiền phải thanh toán |  |  |  |  | `=F38+F39` |
| 44 | ĐỐI SOÁT CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 47 | 1 | 361769578650 | 2024-12-01 | 621.24 |  |  |
| 48 | 2 | 207639518165 | 1970-01-01 07:00:00 | 2832.38 |  |  |
| 49 | Tổng cộng |  |  | `=D47+D48` |  |  |
| 50 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D49*(1+5.26%),2)` |  |  |
| 51 | Chiết khấu (2%) |  |  | `=round(D50*2%,2)` |  |  |
| 52 | Thành tiền |  |  | `=D50-D51` | 25551 | `=D52*E52` |
| 53 | Thuế GTGT (10%) |  |  |  |  | `=round(F52*10%,0)` |
| 54 | Tổng số tiền phải thanh toán |  |  |  |  | `=F52+F53` |
| 58 | ĐỐI SOÁT CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 60 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 61 | 1 | 361769578650 | 2025-01-01 | 502.66 |  |  |
| 62 | 2 | 207639518165 | 1970-01-01 07:00:00 | 2488.82 |  |  |
| 63 | Tổng cộng |  |  | `=D61+D62` |  |  |
| 64 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D63*(1+5.26%),2)` |  |  |
| 65 | Chiết khấu (2%) |  |  | `=round(D64*2%,2)` |  |  |
| 66 | Thành tiền |  |  | `=D64-D65` | 25295 | `=round(D66*E66,0)` |
| 67 | Thuế GTGT (10%) |  |  |  |  | `=round(F66*10%,0)` |
| 68 | Tổng số tiền phải thanh toán |  |  |  |  | `=F66+F67` |
| 72 | ĐỐI SOÁT CHI PHÍ AWS - STAYVN |  |  |  |  |  |
| 74 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 75 | 1 | 361769578650 | 2025-02-01 | 339.88 |  |  |
| 76 | 2 | 207639518165 | 1970-01-01 07:00:00 | 1915.4 |  |  |
| 77 | Tổng cộng |  |  | `=D75+D76` |  |  |
| 78 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D77*(1+5.26%),2)` |  |  |
| 79 | Chiết khấu (2%) |  |  | `=round(D78*2%,2)` |  |  |
| 80 | Tổng cộng |  |  | `=D78-D79` |  |  |
| 81 | Credit |  |  | 800 |  |  |
| 82 | Thành tiền |  |  | `=D80-D81` | 25735 | `=round(D82*E82,0)` |
| 83 | Thuế GTGT (10%) |  |  |  |  | `=round(F82*10%,0)` |
| 84 | Tổng số tiền phải thanh toán |  |  |  |  | `=F82+F83` |
| 88 | ĐỐI SOÁT CHI PHÍ AWS - AGENTICS |  |  |  |  |  |
| 90 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 91 | 1 | 361769578650 | 2025-03-01 | 318.33 |  |  |
| 92 | 2 | 207639518165 | 1970-01-01 07:00:00 | 2012.3 |  |  |
| 93 | Tổng cộng |  |  | `=D91+D92` |  |  |
| 94 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D93*(1+5.26%),2)` |  |  |
| 95 | Chiết khấu (2%) |  |  | `=round(D94*2%,2)` |  |  |
| 96 | Tổng cộng |  |  | `=D94-D95` |  |  |
| 97 | Credit |  |  | 0 |  |  |
| 98 | Thành tiền |  |  | `=D96-D97` | 25775 | `=round(D98*E98,0)` |
| 99 | Thuế GTGT (10%) |  |  |  |  | `=round(F98*10%,0)` |
| 100 | Tổng số tiền phải thanh toán |  |  |  |  | `=F98+F99` |
| 104 | ĐỐI SOÁT CHI PHÍ AWS - AGENTICS |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 107 | 1 | 361769578650 | 2025-04-01 | 30.83 |  |  |
| 108 | 2 | 207639518165 | 1970-01-01 07:00:00 | 1918.1 |  |  |
| 109 | Tổng cộng |  |  | `=D107+D108` |  |  |
| 110 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D109*(1+5.26%),2)` |  |  |
| 111 | Chiết khấu (2%) |  |  | `=round(D110*2%,2)` |  |  |
| 112 | Tổng cộng |  |  | `=D110-D111` |  |  |
| 113 | Credit |  |  | 0 |  |  |
| 114 | Thành tiền |  |  | `=D112-D113` | 26190 | `=round(D114*E114,0)` |
| 115 | Thuế GTGT (10%) |  |  |  |  | `=round(F114*10%,0)` |
| 116 | Tổng số tiền phải thanh toán |  |  |  |  | `=F114+F115` |
| 120 | ĐỐI SOÁT CHI PHÍ AWS - AGENTICS |  |  |  |  |  |
| 122 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 123 | 1 | 361769578650 | 2025-05-01 | 5.32 |  |  |
| 124 | 2 | 207639518165 | 1970-01-01 07:00:00 | 2058.32 |  |  |
| 125 | Tổng cộng |  |  | `=D123+D124` |  |  |
| 126 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D125*(1+5.26%),2)` |  |  |
| 127 | Chiết khấu (2%) |  |  | `=round(D126*2%,2)` |  |  |
| 128 | Thành tiền |  |  | `=D126-D127` | 26225 | `=round(D128*E128,0)` |
| 129 | Thuế GTGT (10%) |  |  |  |  | `=round(F128*10%,0)` |
| 130 | Tổng số tiền phải thanh toán |  |  |  |  | `=F128+F129` |
| 134 | ĐỐI SOÁT CHI PHÍ AWS - AGENTICS |  |  |  |  |  |
| 136 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 137 | 1 | 443241711799 | 2025-06-01 | 598.71 |  |  |
| 138 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D137*(1+5.26%),2)` |  |  |
| 139 | Chiết khấu (2%) |  |  | `=round(D138*2%,2)` |  |  |
| 140 | Thành tiền |  |  | `=D138-D139` | 26300 | `=round(D140*E140,0)` |
| 141 | Thuế GTGT (10%) |  |  |  |  | `=round(F140*10%,0)` |
| 142 | Tổng số tiền phải thanh toán |  |  |  |  | `=F140+F141` |
| 146 | ĐỐI SOÁT CHI PHÍ AWS - AGENTICS |  |  |  |  |  |

> *Đã bỏ qua 40 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (81 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 9 | `C5` |
| D | `=D{r}-D{r}` | 12 | `D24` |
| D | `=round(D{r}*(1+5.26%),2)` | 10 | `D7` |
| D | `=round(D{r}*2%,2)` | 10 | `D8` |
| D | `=D{r}+D{r}` | 9 | `D6` |
| D | `=D{r}-D{r}-D{r}` | 1 | `D10` |
| F | `=round(F{r}*10%,0)` | 10 | `F11` |
| F | `=F{r}+F{r}` | 10 | `F12` |
| F | `=round(D{r}*E{r},0)` | 6 | `F66` |
| F | `=D{r}*E{r}` | 4 | `F10` |
