# ACE LABS

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `ACE LABS`  
> **Vùng dữ liệu:** 35 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ ACE LABS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 637423439285 | 2024-05-01 | 21.69 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D4*(1+7%),2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D5*3%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 25474 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ ACE LABS |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 637423439285 | 2024-06-01 | 21.69 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D14*(1+7%),2)` |  |  |
| 16 | Chiết khấu (3%) |  |  | `=round(D15*3%,2)` |  |  |
| 17 | Thành tiền |  |  | `=D15-D16` | 25473 | `=D17*E17` |
| 18 | Thuế GTGT (10%) |  |  |  |  | `=round(F17*10%,0)` |
| 19 | Tổng số tiền phải thanh toán |  |  |  |  | `=F17+F18` |
| 23 | TỔNG HỢP CHI PHÍ ACE LABS |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 26 | 1 | 637423439285 | 2024-11-01 | 729.96 |  |  |
| 27 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D26*(1+7%),2)` |  |  |
| 28 | Chiết khấu (3%) |  |  | `=round(D27*3%,2)` |  |  |
| 29 | Thành tiền |  |  | `=D27-D28` | 25463 | `=D29*E29` |
| 30 | Thuế GTGT (10%) |  |  |  |  | `=round(F29*10%,0)` |
| 31 | Tổng số tiền phải thanh toán |  |  |  |  | `=F29+F30` |
| 35 | ĐỐI SOÁT CHI PHÍ ACE LABS |  |  |  |  |  |

> *Đã bỏ qua 12 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (16 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+7%),2)` | 3 | `D5` |
| D | `=round(D{r}*3%,2)` | 3 | `D6` |
| D | `=D{r}-D{r}` | 3 | `D7` |
| F | `=D{r}*E{r}` | 3 | `F7` |
| F | `=round(F{r}*10%,0)` | 2 | `F18` |
| F | `=F{r}+F{r}` | 2 | `F19` |
