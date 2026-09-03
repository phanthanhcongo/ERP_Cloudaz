# ANVITEQ

> **Workbook:** `DO_Bảng tổng hợp_ đối soát chi phí.xlsx`  
> **Sheet:** `ANVITEQ`  
> **Vùng dữ liệu:** 22 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - ANVITEQ |  |  |  |  |  |
| 3 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | do:teamgroup:b74f6c3b-7384-453b-8315-d9c17343b6f2 | 2026-06-01 | 107.84 |  |  |
| 5 |  Chiết khấu (10%) |  |  | 10.78 |  |  |
| 6 | Phí dịch vụ (5.26%) |  |  | 5.67 |  |  |
| 7 | Thành tiền |  |  | 102.73 | 26466 | 2718852 |
| 8 | Thuế GTGT 10% |  |  |  |  | 271885 |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | 2990737 |
| 14 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - ANVITEQ |  |  |  |  |  |
| 16 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 17 | 1 | do:teamgroup:b74f6c3b-7384-453b-8315-d9c17343b6f2 | 2026-07-01 | 134.2 |  |  |
| 18 |  Chiết khấu (10%) |  |  | 13.42 |  |  |
| 19 | Phí dịch vụ (5.88%) |  |  | 7.89 |  |  |
| 20 | Thành tiền |  |  | 128.67 | 26475 | 3406538 |
| 21 | Thuế GTGT 10% |  |  |  |  | 340654 |
| 22 | Tổng số tiền phải thanh toán |  |  |  |  | 3747192 |

> *Đã bỏ qua 6 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (12 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 2 | `D5` |
| D | `=D{r}-D{r}+D{r}` | 2 | `D7` |
| D | `=round(D{r}*5.26%,2)` | 1 | `D6` |
| D | `=round(D{r}*5.88%,2)` | 1 | `D19` |
| F | `=round(D{r}*E{r},0)` | 2 | `F7` |
| F | `=round(F{r}*10%,0)` | 2 | `F8` |
| F | `=F{r}+F{r}` | 2 | `F9` |
