# MAXCOM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MAXCOM`  
> **Vùng dữ liệu:** 102 dòng × 12 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | H | I | J | K | L | M |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS - MAXCOM |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 4 | 1 | 058264153347 | 2024-09-01 | 40.78 |  |  |  |  |  |  |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |  |  |  |  |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 24733 | `=D7*E7` |  |  |  |  |  |  |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |  |  |  |  |  |  |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |  |  |  |  |  |  |
| 13 | TỔNG HỢP CHI PHÍ AWS - MAXCOM |  |  |  |  |  |  |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 16 | 1 | 058264153347 | 2024-10-01 | 534.73 |  |  |  |  |  |  |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D16*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |  |  |  |  |  |  |
| 19 | Thành tiền |  |  | `=D17-D18` | 25445 | `=D19*E19` |  |  |  |  |  |  |
| 20 | Thuế GTGT (10%) |  |  |  |  | `=round(F19*10%,0)` |  |  |  |  |  |  |
| 21 | Tổng số tiền phải thanh toán |  |  |  |  | `=F19+F20` |  |  |  |  |  |  |
| 25 | TỔNG HỢP CHI PHÍ AWS - MAXCOM |  |  |  |  |  |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |
| 28 | 1 | 058264153347 | 2024-11-01 | 944.25 |  |  |  |  |  |  |  |  |
| 29 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D28*(1+5.26%),2)` |  |  |  |  |  |  |  |  |
| 30 | Chiết khấu (2%) |  |  | `=round(D29*2%,2)` |  |  |  |  |  |  |  |  |
| 31 | Thành tiền |  |  | `=D29-D30` |  |  |  |  |  |  |  |  |
| 32 | Số tiền cam kết hỗ trợ tháng này |  |  | 2948.4 |  |  |  |  |  |  |  |  |
| 33 | Số tiền cam kết hỗ trợ còn lại chuyển tháng sau |  |  | 1974.36 |  |  |  |  |  |  |  |  |
| 37 | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  |
| 39 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 40 | 1 | 058264153347 | 2024-12-01 | 1044.3 |  |  | 1 | 861276117339 | 2024-12-01 | 2539.69 |  |  |
| 41 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D40*(1+5.26%),2)` |  |  | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(K40*(1+5.26%),2)` |  |  |
| 42 | Chiết khấu (2%) |  |  | `=round(D41*2%,2)` |  |  | Chiết khấu (2%) |  |  | `=round(K41*2%,2)` |  |  |
| 43 | Thành tiền |  |  | `=D41-D42` |  |  | Thành tiền |  |  | `=K41-K42` |  |  |
| 44 | Số tiền cam kết hỗ trợ tháng này |  |  | 1974.36 |  |  | Số tiền cam kết hỗ trợ tháng này |  |  | 2500 |  |  |
| 45 | Số tiền cam kết hỗ trợ còn lại chuyển tháng sau |  |  | `=D44-D43` |  |  | Số tiền phải trả |  |  | `=K43-K44` | 25551 | `=round(K45*L45,0)` |
| 46 |  |  |  |  |  |  | Thuế GTGT (10%) |  |  |  |  | `=round(M45*10%,0)` |
| 47 |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  |  |  |  | `=M45+M46` |
| 51 | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 54 | 1 | 058264153347 | 2025-01-01 | 1046.66 |  |  | 1 | 861276117339 | 2025-01-01 | 553.48 |  |  |
| 55 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D54*(1+5.26%),2)` |  |  | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(K54*(1+5.26%),2)` |  |  |
| 56 | Chiết khấu (2%) |  |  | `=round(D55*2%,2)` |  |  | Chiết khấu (2%) |  |  | `=round(K55*2%,2)` |  |  |
| 57 | Thành tiền |  |  | `=D55-D56` |  |  | Thành tiền |  |  | `=K55-K56` |  |  |
| 58 | Số tiền cam kết hỗ trợ tháng này |  |  | 897.11 |  |  | Số tiền cam kết hỗ trợ tháng này |  |  | 500 |  |  |
| 59 | Số tiền phải trả |  |  | `=D57-D58` | 25295 | `=round(D59*E59,0)` | Số tiền phải trả |  |  | `=K57-K58` | 25295 | `=round(K59*L59,0)` |
| 60 | Thuế GTGT (10%) |  |  |  |  | `=round(F59*10%,0)` | Thuế GTGT (10%) |  |  |  |  | `=round(M59*10%,0)` |
| 61 | Tổng số tiền phải thanh toán |  |  |  |  | `=F59+F60` | Tổng số tiền phải thanh toán |  |  |  |  | `=M59+M60` |
| 65 | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 68 | 1 | 058264153347 | 2025-02-01 | 891.98 |  |  | 1 | 861276117339 | 2025-02-01 | 501.7 |  |  |
| 69 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D68*(1+5.26%),2)` |  |  | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(K68*(1+5.26%),2)` |  |  |
| 70 | Chiết khấu (2%) |  |  | `=round(D69*2%,2)` |  |  | Chiết khấu (2%) |  |  | `=round(K69*2%,2)` |  |  |
| 71 | Thành tiền |  |  | `=D69-D70` | 25735 | `=round(D71*E71,0)` | Thành tiền |  |  | `=K69-K70` |  |  |
| 72 | Thuế GTGT (10%) |  |  |  |  | `=round(F71*10%,0)` | Số tiền cam kết hỗ trợ tháng này |  |  | 500 |  |  |
| 73 | Tổng số tiền phải thanh toán |  |  |  |  | `=F71+F72` | Số tiền phải trả |  |  | `=K71-K72` | 25735 | `=round(K73*L73,0)` |
| 74 |  |  |  |  |  |  | Thuế GTGT (10%) |  |  |  |  | `=round(M73*10%,0)` |
| 75 |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  |  |  |  | `=M73+M74` |
| 79 | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  |
| 81 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 82 | 1 | 058264153347 | 2025-03-01 | 959.95 |  |  | 1 | 861276117339 | 2025-03-01 | 553.41 |  |  |
| 83 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D82*(1+5.26%),2)` |  |  | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(K82*(1+5.26%),2)` |  |  |
| 84 | Chiết khấu (2%) |  |  | `=round(D83*2%,2)` |  |  | Chiết khấu (2%) |  |  | `=round(K83*2%,2)` |  |  |
| 85 | Thành tiền |  |  | `=D83-D84` | 25775 | `=round(D85*E85,0)` | Thành tiền |  |  | `=K83-K84` |  |  |
| 86 | Thuế GTGT (10%) |  |  |  |  | `=round(F85*10%,0)` | Số tiền cam kết hỗ trợ tháng này |  |  | 500 |  |  |
| 87 | Tổng số tiền phải thanh toán |  |  |  |  | `=F85+F86` | Số tiền phải trả |  |  | `=K85-K86` | 25775 | `=round(K87*L87,0)` |
| 88 |  |  |  |  |  |  | Thuế GTGT (10%) |  |  |  |  | `=round(M87*10%,0)` |
| 89 |  |  |  |  |  |  | Tổng số tiền phải thanh toán |  |  |  |  | `=M87+M88` |
| 94 | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  | ĐỐI SOÁT CHI PHÍ AWS - MAXCOM |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | 058264153347 | 2025-04-01 | 942.94 |  |  | 1 | 861276117339 | 1970-01-01 07:00:00 | 232.2 |  |  |
| 98 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D97*(1+5.26%),2)` |  |  | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(K97*(1+5.26%),2)` |  |  |
| 99 | Chiết khấu (2%) |  |  | `=round(D98*2%,2)` |  |  | Chiết khấu (2%) |  |  | `=round(K98*2%,2)` |  |  |
| 100 | Thành tiền |  |  | `=D98-D99` | 26190 | `=round(D100*E100,0)` | Thành tiền |  |  | `=K98-K99` | `=E100` | `=round(K100*L100,0)` |
| 101 | Thuế GTGT (10%) |  |  |  |  | `=round(F100*10%,0)` | Thuế GTGT (10%) |  |  |  |  | `=round(M100*10%,0)` |
| 102 | Tổng số tiền phải thanh toán |  |  |  |  | `=F100+F101` | Tổng số tiền phải thanh toán |  |  |  |  | `=M100+M101` |

> *Đã bỏ qua 30 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (80 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 10 | `D7` |
| D | `=round(D{r}*(1+5.26%),2)` | 8 | `D5` |
| D | `=round(D{r}*2%,2)` | 8 | `D6` |
| F | `=round(F{r}*10%,0)` | 6 | `F8` |
| F | `=F{r}+F{r}` | 6 | `F9` |
| F | `=round(D{r}*E{r},0)` | 4 | `F59` |
| F | `=D{r}*E{r}` | 2 | `F7` |
| J | `=C{r}` | 1 | `J97` |
| K | `=K{r}-K{r}` | 9 | `K43` |
| K | `=round(K{r}*(1+5.26%),2)` | 5 | `K41` |
| K | `=round(K{r}*2%,2)` | 5 | `K42` |
| L | `=E{r}` | 1 | `L100` |
| M | `=round(K{r}*L{r},0)` | 5 | `M45` |
| M | `=round(M{r}*10%,0)` | 5 | `M46` |
| M | `=M{r}+M{r}` | 5 | `M47` |
