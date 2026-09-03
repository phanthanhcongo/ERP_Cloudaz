# ONE DISTRI NET

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ONE DISTRI NET`  
> **Vùng dữ liệu:** 19 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ ONE DISTRIBUTION NETWORK |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 486948327334 | 2023-12-01 | 3.74 |  |  |
| 5 |  | Tổng cộng |  | `=D4` |  |  |
| 6 | Phí dịch vụ 6% tính trên Lượng dùng thực tế |  |  | `=D5*0.06` |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=round(D5+D6,2)` | 24450 | `=D7*E7` |
| 12 | TỔNG HỢP CHI PHÍ ONE DISTRIBUTION NETWORK |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 486948327334 | 2024-05-01 | 362.78 |  |  |
| 16 | 2 | Credit | 2024-05-01 | 227.87 |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` |  |  |
| 18 | Phí dịch vụ 6% tính trên Lượng dùng thực tế |  |  | `=D17*0.06` |  |  |
| 19 |  |  |  | `=round(D17+D18,2)` | 25474 | `=D19*E19` |

> *Đã bỏ qua 6 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.06` | 2 | `D6` |
| D | `=round(D{r}+D{r},2)` | 2 | `D7` |
| D | `=D{r}` | 1 | `D5` |
| D | `=D{r}-D{r}` | 1 | `D17` |
| F | `=D{r}*E{r}` | 2 | `F7` |
