# CDU-UET

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `CDU-UET`  
> **Vùng dữ liệu:** 8 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - UET |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 154932390861 | 2026-06-01 | 2.53 |  |  |
| 5 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 6 | Thành tiền |  |  | `=D4+D5` | 26466 | `=round(D6*E6,0)` |
| 7 | Thuế GTGT (10%) |  |  |  |  | `=round(F6*10%,0)` |
| 8 | Tổng số tiền phải thanh toán |  |  |  |  | `=F6+F7` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (5 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*5.26%,2)` | 1 | `D5` |
| D | `=D{r}+D{r}` | 1 | `D6` |
| F | `=round(D{r}*E{r},0)` | 1 | `F6` |
| F | `=round(F{r}*10%,0)` | 1 | `F7` |
| F | `=F{r}+F{r}` | 1 | `F8` |
