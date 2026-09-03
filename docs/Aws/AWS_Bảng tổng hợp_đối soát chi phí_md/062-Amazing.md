# Amazing

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Amazing`  
> **Vùng dữ liệu:** 6 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AMAZING |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 431489614912 | 2023-04-01 | 8.24 |  |  |
| 5 | Phí dịch vụ tính trên Lượng dùng thực tế (8%) |  |  | `=round(D4*8%,2)` |  |  |
| 6 | Tổng số tiền phải thanh toán |  |  | `=D4+D5` | 23645 | `=D6*E6` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (3 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*8%,2)` | 1 | `D5` |
| D | `=D{r}+D{r}` | 1 | `D6` |
| F | `=D{r}*E{r}` | 1 | `F6` |
