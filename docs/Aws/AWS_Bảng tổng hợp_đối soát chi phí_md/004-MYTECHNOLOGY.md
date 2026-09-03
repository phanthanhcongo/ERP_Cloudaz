# MYTECHNOLOGY

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MYTECHNOLOGY`  
> **Vùng dữ liệu:** 51 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - MYTECHNOLOGY |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 486979600759 | 2026-03-01 | 608.69 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` | 26357 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 15 | ĐỐI SOÁT CHI PHÍ AWS - MYTECHNOLOGY |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | 486979600759 | 2026-04-01 | 1082.11 |  |  |
| 19 | Chiết khấu (2%) |  |  | `=round(D18*2%,2)` |  |  |
| 20 | Phí dịch vụ (5.26%) |  |  | `=round(D18*5.26%,2)` |  |  |
| 21 | Thành tiền |  |  | `=D18-D19+D20` |  |  |
| 22 | Số tiền hỗ trợ tháng này |  |  | 1871.46 |  |  |
| 23 | Số tiền hỗ trợ chuyển tháng sau |  |  | `=D22-D21` |  |  |
| 28 | ĐỐI SOÁT CHI PHÍ AWS - MYTECHNOLOGY |  |  |  |  |  |
| 30 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 31 | 1 | 486979600759 | 2026-05-01 | 1148.87 |  |  |
| 32 | Chiết khấu (2%) |  |  | `=round(D31*2%,2)` |  |  |
| 33 | Phí dịch vụ (5.26%) |  |  | `=round(D31*5.26%,2)` |  |  |
| 34 | Thành tiền |  |  | `=D31-D32+D33` |  |  |
| 35 | Số tiền hỗ trợ tháng này |  |  | 754.07 |  |  |
| 36 | Số tiền còn lại phải thanh toán |  |  | `=D34-D35` | 26395 | `=round(D36*E36,0)` |
| 37 | Thuế GTGT (10%) |  |  |  |  | `=round(F36*10%,0)` |
| 38 | Tổng cộng |  |  |  |  | `=F36+F37` |
| 43 | ĐỐI SOÁT CHI PHÍ AWS - MYTECHNOLOGY |  |  |  |  |  |
| 45 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 46 | 1 | 486979600759 | 2026-06-01 | 449.43 |  |  |
| 47 | Chiết khấu (2%) |  |  | `=round(D46*2%,2)` |  |  |
| 48 | Phí dịch vụ (5.26%) |  |  | `=round(D46*5.26%,2)` |  |  |
| 49 |  |  |  | `=D46-D47+D48` | 26466 | `=round(D49*E49,0)` |
| 50 |  |  |  |  |  | `=round(F49*10%,0)` |
| 51 |  |  |  |  |  | `=F49+F50` |

> *Đã bỏ qua 17 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (23 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*2%,2)` | 4 | `D5` |
| D | `=round(D{r}*5.26%,2)` | 4 | `D6` |
| D | `=D{r}-D{r}+D{r}` | 4 | `D7` |
| D | `=D{r}-D{r}` | 2 | `D23` |
| F | `=round(D{r}*E{r},0)` | 3 | `F7` |
| F | `=round(F{r}*10%,0)` | 3 | `F8` |
| F | `=F{r}+F{r}` | 3 | `F9` |
