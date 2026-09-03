# VSEC

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VSEC`  
> **Vùng dữ liệu:** 11 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - VSEC |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 407558438699 | 2026-01-01 | 410.15 |  |  |
| 5 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 6 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` |  |  |
| 8 | Thuế GTGT (10%) |  |  | `=round(D7*10%,2)` |  |  |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7+D8` |  |  |
| 10 | Số tiền hỗ trợ tháng này |  |  | 3000 |  |  |
| 11 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D10-D9` |  |  |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (6 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 2 | `D6` |
| D | `=round(D{r}*2%,2)` | 1 | `D5` |
| D | `=D{r}-D{r}+D{r}` | 1 | `D7` |
| D | `=D{r}+D{r}` | 1 | `D9` |
| D | `=D{r}-D{r}` | 1 | `D11` |
