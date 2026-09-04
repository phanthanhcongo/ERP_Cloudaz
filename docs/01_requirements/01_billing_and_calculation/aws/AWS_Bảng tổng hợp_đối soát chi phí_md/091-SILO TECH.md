# SILO TECH

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `SILO TECH`  
> **Vùng dữ liệu:** 9 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - SILO TECH |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 746669216494 | 2025-04-01 | 1457.45 |  |  |
| 5 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D4*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D5-D6` | 26190 | `=D7*E7` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (6 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*5.26%,2)` | 1 | `D5` |
| D | `=round(D{r}*2%,2)` | 1 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 1 | `D7` |
| F | `=D{r}*E{r}` | 1 | `F7` |
| F | `=round(F{r}*10%,0)` | 1 | `F8` |
| F | `=F{r}+F{r}` | 1 | `F9` |
