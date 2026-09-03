# Ondigames

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Ondigames`  
> **Vùng dữ liệu:** 75 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - ONDIGAMES |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 219916594510 | 2026-01-01 | 4.12 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` |  |  |
| 8 | Thuế GTGT (10%) |  |  | `=round(D7*10%,2)` |  |  |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7+D8` |  |  |
| 10 | Số tiền hỗ trợ tháng này |  |  | 2000 |  |  |
| 11 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D10-D9` |  |  |
| 17 | ĐỐI SOÁT CHI PHÍ AWS - ONDIGAMES |  |  |  |  |  |
| 19 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 20 | 1 | 219916594510 | 2026-02-01 | 187.5 |  |  |
| 21 | Chiết khấu (2%) |  |  | `=round(D20*2%,2)` |  |  |
| 22 | Phí dịch vụ (5.26%) |  |  | `=round(D20*5.26%,2)` |  |  |
| 23 | Thành tiền |  |  | `=D20-D21+D22` |  |  |
| 24 | Thuế GTGT (10%) |  |  | `=round(D23*10%,2)` |  |  |
| 25 | Tổng số tiền phải thanh toán |  |  | `=D23+D24` |  |  |
| 26 | Số tiền hỗ trợ tháng này |  |  | 1995.31 |  |  |
| 27 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D26-D25` |  |  |
| 33 | ĐỐI SOÁT CHI PHÍ AWS - ONDIGAMES |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 36 | 1 | 219916594510 | 2026-03-01 | 555.31 |  |  |
| 37 | Chiết khấu (2%) |  |  | `=round(D36*2%,2)` |  |  |
| 38 | Phí dịch vụ (5.26%) |  |  | `=round(D36*5.26%,2)` |  |  |
| 39 | Thành tiền |  |  | `=D36-D37+D38` |  |  |
| 40 | Thuế GTGT (10%) |  |  | `=round(D39*10%,2)` |  |  |
| 41 | Tổng số tiền phải thanh toán |  |  | `=D39+D40` |  |  |
| 42 | Số tiền hỗ trợ tháng này |  |  | 1782.34 |  |  |
| 43 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D42-D41` |  |  |
| 49 | ĐỐI SOÁT CHI PHÍ AWS - ONDIGAMES |  |  |  |  |  |
| 51 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 52 | 1 | 219916594510 | 2026-04-01 | 799.78 |  |  |
| 53 | Chiết khấu (2%) |  |  | `=round(D52*2%,2)` |  |  |
| 54 | Phí dịch vụ (5.26%) |  |  | `=round(D52*5.26%,2)` |  |  |
| 55 | Thành tiền |  |  | `=D52-D53+D54` |  |  |
| 56 | Thuế GTGT (10%) |  |  | `=round(D55*10%,2)` |  |  |
| 57 | Tổng số tiền phải thanh toán |  |  | `=D55+D56` |  |  |
| 58 | Số tiền hỗ trợ tháng này |  |  | 1151.59 |  |  |
| 59 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D58-D57` |  |  |
| 65 | ĐỐI SOÁT CHI PHÍ AWS - ONDIGAMES |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 68 | 1 | 219916594510 | 2026-05-01 | 903.45 |  |  |
| 69 | Chiết khấu (2%) |  |  | `=round(D68*2%,2)` |  |  |
| 70 | Phí dịch vụ (5.26%) |  |  | `=round(D68*5.26%,2)` |  |  |
| 71 | Thành tiền |  |  | `=D68-D69+D70` |  |  |
| 72 | Thuế GTGT (10%) |  |  | `=round(D71*10%,2)` |  |  |
| 73 | Tổng số tiền phải thanh toán |  |  | `=D71+D72` |  |  |
| 74 | Số tiền hỗ trợ tháng này |  |  | 243.15 |  |  |
| 75 |  |  |  | `=D73-D74` | 26395 | `=round(D75*E75,0)` |

> *Đã bỏ qua 25 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (31 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 5 | `D5` |
| D | `=round(D{r}*5.26%,2)` | 5 | `D6` |
| D | `=D{r}-D{r}+D{r}` | 5 | `D7` |
| D | `=round(D{r}*10%,2)` | 5 | `D8` |
| D | `=D{r}+D{r}` | 5 | `D9` |
| D | `=D{r}-D{r}` | 5 | `D11` |
| F | `=round(D{r}*E{r},0)` | 1 | `F75` |
