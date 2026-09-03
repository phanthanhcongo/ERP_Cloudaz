# XMAX MEDIA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `XMAX MEDIA`  
> **Vùng dữ liệu:** 9 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ XMAX MEDIA |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 637423439285 | 2024-05-01 | 228.29 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D4*(1+7%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 25473 | `=D7*E7` |
| 8 | Thuế GTGT 10% |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (6 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+7%),2)` | 1 | `D5` |
| D | `=round(D{r}*2%,2)` | 1 | `D6` |
| D | `=D{r}-D{r}` | 1 | `D7` |
| F | `=D{r}*E{r}` | 1 | `F7` |
| F | `=round(F{r}*10%,0)` | 1 | `F8` |
| F | `=F{r}+F{r}` | 1 | `F9` |
