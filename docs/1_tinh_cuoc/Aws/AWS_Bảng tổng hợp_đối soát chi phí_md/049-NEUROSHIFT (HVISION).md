# NEUROSHIFT (HVISION)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `NEUROSHIFT (HVISION)`  
> **Vùng dữ liệu:** 112 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 418295686864 | 2025-10-01 | 356.64 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round((D4-D5)*10%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D6-D5` | 26347 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  | `=round(D7*10%,2)` | 26347 | `=round(D8*E8,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7+D8` | 26347 | `=round(D9*E9,0)` |
| 10 | Số tiền hỗ trợ tháng này |  |  | 4000 |  |  |
| 11 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D10-D9` |  |  |
| 17 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 19 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 20 | 1 | 418295686864 | 2025-11-01 | 471 |  |  |
| 21 | Chiết khấu (2%) |  |  | `=round(D20*2%,2)` |  |  |
| 22 | Phí dịch vụ (10%) |  |  | `=round((D20-D21)*10%,2)` |  |  |
| 23 | Thành tiền |  |  | `=D20+D22-D21` |  |  |
| 24 | Thuế GTGT (10%) |  |  | `=round(D23*10%,2)` |  |  |
| 25 | Tổng số tiền phải thanh toán |  |  | `=D23+D24` |  |  |
| 26 | Số tiền hỗ trợ tháng này |  |  | 3577.09 |  |  |
| 27 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D26-D25` |  |  |
| 33 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 36 | 1 | 418295686864 | 2025-12-01 | 568.12 |  |  |
| 37 | Chiết khấu (2%) |  |  | `=round(D36*2%,2)` |  |  |
| 38 | Phí dịch vụ (10%) |  |  | `=round((D36-D37)*10%,2)` |  |  |
| 39 | Thành tiền |  |  | `=D36+D38-D37` |  |  |
| 40 | Thuế GTGT (10%) |  |  | `=round(D39*10%,2)` |  |  |
| 41 | Tổng số tiền phải thanh toán |  |  | `=D39+D40` |  |  |
| 42 | Số tiền hỗ trợ tháng này |  |  | 3018.58 |  |  |
| 43 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D42-D41` |  |  |
| 48 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 51 | 1 | 418295686864 | 2026-01-01 | 466.96 |  |  |
| 52 | Chiết khấu (2%) |  |  | `=round(D51*2%,2)` |  |  |
| 53 | Phí dịch vụ (10%) |  |  | `=round((D51-D52)*10%,2)` |  |  |
| 54 | Thành tiền |  |  | `=D51+D53-D52` |  |  |
| 55 | Thuế GTGT (10%) |  |  | `=round(D54*10%,2)` |  |  |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54+D55` |  |  |
| 57 | Số tiền hỗ trợ tháng này |  |  | 2344.9 |  |  |
| 58 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D57-D56` |  |  |
| 64 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 67 | 1 | 418295686864 | 2026-02-01 | 124.13 |  |  |
| 68 | Chiết khấu (2%) |  |  | `=round(D67*2%,2)` |  |  |
| 69 | Phí dịch vụ (10%) |  |  | `=round((D67-D68)*10%,2)` |  |  |
| 70 | Thành tiền |  |  | `=D67+D69-D68` |  |  |
| 71 | Thuế GTGT (10%) |  |  | `=round(D70*10%,2)` |  |  |
| 72 | Tổng số tiền phải thanh toán |  |  | `=D70+D71` |  |  |
| 73 | Số tiền hỗ trợ tháng này |  |  | 1791.18 |  |  |
| 74 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D73-D72` |  |  |
| 80 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 82 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 83 | 1 | 418295686864 | 2026-03-01 | 136.3 |  |  |
| 84 | Chiết khấu (2%) |  |  | `=round(D83*2%,2)` |  |  |
| 85 | Phí dịch vụ (10%) |  |  | `=round((D83-D84)*10%,2)` |  |  |
| 86 | Thành tiền |  |  | `=D83+D85-D84` |  |  |
| 87 | Thuế GTGT (10%) |  |  | `=round(D86*10%,2)` |  |  |
| 88 | Tổng số tiền phải thanh toán |  |  | `=D86+D87` |  |  |
| 89 | Số tiền hỗ trợ tháng này |  |  | 1643.98 |  |  |
| 90 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D89-D88` |  |  |
| 96 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |
| 98 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 99 | 1 | 418295686864 | 2026-04-01 | 132.22 |  |  |
| 100 | Chiết khấu (2%) |  |  | `=round(D99*2%,2)` |  |  |
| 101 | Phí dịch vụ (10%) |  |  | `=round((D99-D100)*10%,2)` |  |  |
| 102 | Thành tiền |  |  | `=D99+D101-D100` |  |  |
| 103 | Thuế GTGT (10%) |  |  | `=round(D102*10%,2)` |  |  |
| 104 | Tổng số tiền phải thanh toán |  |  | `=D102+D103` |  |  |
| 105 | Số tiền hỗ trợ tháng này |  |  | 1482.36 |  |  |
| 106 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D105-D104` |  |  |
| 112 | ĐỐI SOÁT CHI PHÍ AWS - HVISION |  |  |  |  |  |

> *Đã bỏ qua 41 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (45 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 7 | `D5` |
| D | `=round((D{r}-D{r})*10%,2)` | 7 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 7 | `D7` |
| D | `=round(D{r}*10%,2)` | 7 | `D8` |
| D | `=D{r}+D{r}` | 7 | `D9` |
| D | `=D{r}-D{r}` | 7 | `D11` |
| F | `=round(D{r}*E{r},0)` | 3 | `F7` |
