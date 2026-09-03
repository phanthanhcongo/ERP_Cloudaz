# AURA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `AURA`  
> **Vùng dữ liệu:** 22 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - AURA |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 448049832637 | 2026-06-01 | 3.91 |  |  |
| 5 | Chiết khấu (3%) |  |  | `=round(D4*3%,2)` |  |  |
| 6 | Phí dịch vụ (5.26%) |  |  | `=round(D4*5.26%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4-D5+D6` | 26466 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 14 | ĐỐI SOÁT CHI PHÍ AWS - AURA |  |  |  |  |  |
| 16 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 17 | 1 | 448049832637 | 2026-07-01 | 38.42 |  |  |
| 18 | Chiết khấu (3%) |  |  | `=round(D17*3%,2)` |  |  |
| 19 | Phí dịch vụ (5.88%) |  |  | `=round(D17*5.88%,2)` |  |  |
| 20 |  |  |  | `=D17-D18+D19` | 26475 | `=round(D20*E20,0)` |
| 21 |  |  |  |  |  | `=round(F20*10%,0)` |
| 22 |  |  |  |  |  | `=F20+F21` |

> *Đã bỏ qua 6 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (12 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*3%,2)` | 2 | `D5` |
| D | `=D{r}-D{r}+D{r}` | 2 | `D7` |
| D | `=round(D{r}*5.26%,2)` | 1 | `D6` |
| D | `=round(D{r}*5.88%,2)` | 1 | `D19` |
| F | `=round(D{r}*E{r},0)` | 2 | `F7` |
| F | `=round(F{r}*10%,0)` | 2 | `F8` |
| F | `=F{r}+F{r}` | 2 | `F9` |
