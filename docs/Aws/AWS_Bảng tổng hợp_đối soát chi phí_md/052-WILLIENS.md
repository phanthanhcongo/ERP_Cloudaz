# WILLIENS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `WILLIENS`  
> **Vùng dữ liệu:** 58 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - WILLIENS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 486909042076 | 2025-11-01 | 79.38 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` |  |  |
| 8 | Thuế GTGT (10%) |  |  | `=round(D7*10%,2)` |  |  |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7+D8` |  |  |
| 10 | Số tiền hỗ trợ tháng này |  |  | 900 |  |  |
| 11 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D10-D9` |  |  |
| 17 | ĐỐI SOÁT CHI PHÍ AWS - WILLIENS |  |  |  |  |  |
| 19 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 20 | 1 | 486909042076 | 2025-12-01 | 193.14 |  |  |
| 21 | Chiết khấu (2%) |  |  | `=round(D20*2%,2)` |  |  |
| 22 | Phí dịch vụ (10%) |  |  | `=round(D20*10%,2)` |  |  |
| 23 | Thành tiền |  |  | `=D20-D21+D22` |  |  |
| 24 | Thuế GTGT (10%) |  |  | `=round(D23*10%,2)` |  |  |
| 25 | Tổng số tiền phải thanh toán |  |  | `=D23+D24` |  |  |
| 26 | Số tiền hỗ trợ tháng này |  |  | 805.7 |  |  |
| 27 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D26-D25` |  |  |
| 33 | ĐỐI SOÁT CHI PHÍ AWS - WILLIENS |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 36 | 1 | 486909042076 | 2026-01-01 | 241.91 |  |  |
| 37 | Chiết khấu (2%) |  |  | `=round(D36*2%,2)` |  |  |
| 38 | Phí dịch vụ (10%) |  |  | `=round(D36*10%,2)` |  |  |
| 39 | Thành tiền |  |  | `=D36-D37+D38` |  |  |
| 40 | Thuế GTGT (10%) |  |  | `=round(D39*10%,2)` |  |  |
| 41 | Tổng số tiền phải thanh toán |  |  | `=D39+D40` |  |  |
| 42 | Số tiền hỗ trợ tháng này |  |  | 576.25 |  |  |
| 43 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D42-D41` |  |  |
| 48 | ĐỐI SOÁT CHI PHÍ AWS - WILLIENS |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 51 | 1 | 486909042076 | 2026-02-01 | 174.52 |  |  |
| 52 | Chiết khấu (2%) |  |  | `=round(D51*2%,2)` |  |  |
| 53 | Phí dịch vụ (10%) |  |  | `=round(D51*10%,2)` |  |  |
| 54 | Thành tiền |  |  | `=D51-D52+D53` |  |  |
| 55 | Thuế GTGT (10%) |  |  | `=round(D54*10%,2)` |  |  |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54+D55` |  |  |
| 57 | Số tiền hỗ trợ tháng này |  |  | 288.86 |  |  |
| 58 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D57-D56` |  |  |

> *Đã bỏ qua 18 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (24 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 8 | `D6` |
| D | `=round(D{r}*2%,2)` | 4 | `D5` |
| D | `=D{r}-D{r}+D{r}` | 4 | `D7` |
| D | `=D{r}+D{r}` | 4 | `D9` |
| D | `=D{r}-D{r}` | 4 | `D11` |
