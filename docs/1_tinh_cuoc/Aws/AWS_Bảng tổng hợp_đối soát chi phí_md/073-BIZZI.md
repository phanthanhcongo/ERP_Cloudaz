# BIZZI

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `BIZZI`  
> **Vùng dữ liệu:** 50 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 891666780963 | 2023-06-01 | 1662.66 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D4*(1+5%),2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D5*3%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 23762 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 891666780963 | 2023-07-01 | 200.25 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D14*(1+5%),2)` |  |  |
| 16 | Chiết khấu (3%) |  |  | `=round(D15*3%,2)` |  |  |
| 17 | Tổng số tiền phải thanh toán |  |  | `=D15-D16` | 23860 | `=D17*E17` |
| 20 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |
| 22 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 23 | 1 | 891666780963 | 2023-09-01 | 1858.12 |  |  |
| 24 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D23*(1+5%),2)` |  |  |
| 25 | Chiết khấu (3%) |  |  | `=round(D24*3%,2)` |  |  |
| 26 | Tổng số tiền phải thanh toán |  |  | `=D24-D25` | 24470 | `=D26*E26` |
| 30 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |
| 32 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 33 | 1 | 891666780963 | 2023-10-01 | 2380.81 |  |  |
| 34 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D33*(1+5%),2)` |  |  |
| 35 | Chiết khấu (3%) |  |  | `=round(D34*3%,2)` |  |  |
| 36 | Tổng số tiền phải thanh toán |  |  | `=D34-D35` | 24729 | `=D36*E36` |
| 40 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 43 | 1 | 891666780963 | 2023-11-01 | 2279.04 |  |  |
| 44 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D43*(1+5%),2)` |  |  |
| 45 | Chiết khấu (3%) |  |  | `=round(D44*3%,2)` |  |  |
| 46 | Tổng số tiền phải thanh toán |  |  | `=D44-D45` | 24427 | `=D46*E46` |
| 50 | TỔNG HỢP CHI PHÍ BIZZI |  |  |  |  |  |

> *Đã bỏ qua 19 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (20 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+5%),2)` | 5 | `D5` |
| D | `=round(D{r}*3%,2)` | 5 | `D6` |
| D | `=D{r}-D{r}` | 5 | `D7` |
| F | `=D{r}*E{r}` | 5 | `F7` |
