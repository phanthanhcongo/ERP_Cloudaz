# Netnam

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Netnam`  
> **Vùng dữ liệu:** 67 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ NETNAM |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 058264303771 | 2024-05-01 | 572.71 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D5*3%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 25474 | `=D7*E7` |
| 11 | TỔNG HỢP CHI PHÍ NETNAM |  |  |  |  |  |
| 13 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 14 | 1 | 058264303771 | 2024-06-01 | 1538.36 |  |  |
| 15 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D14*(1+5.26%),2)` |  |  |
| 16 | Chiết khấu (3%) |  |  | `=round(D15*3%,2)` |  |  |
| 17 | Thành tiền |  |  | `=D15-D16` | 25473 | `=D17*E17` |
| 18 | Thuế GTGT (10%) |  |  |  |  | `=round(F17*10%,0)` |
| 19 | Tổng số tiền phải thanh toán |  |  |  |  | `=F17+F18` |
| 23 | TỔNG HỢP CHI PHÍ NETNAM |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 26 | 1 | 058264303771 | 2024-07-01 | 1566.13 |  |  |
| 27 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D26*(1+5.26%),2)` |  |  |
| 28 | Chiết khấu (3%) |  |  | `=round(D27*3%,2)` |  |  |
| 29 | Thành tiền |  |  | `=D27-D28` | 25405 | `=D29*E29` |
| 30 | Thuế GTGT (10%) |  |  |  |  | `=round(F29*10%,0)` |
| 31 | Tổng số tiền phải thanh toán |  |  |  |  | `=F29+F30` |
| 35 | TỔNG HỢP CHI PHÍ AWS NETNAM |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | 058264303771 | 2024-08-01 | 1580.5 |  |  |
| 39 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D38*(1+5.26%),2)` |  |  |
| 40 | Chiết khấu (3%) |  |  | `=round(D39*3%,2)` |  |  |
| 41 | Thành tiền |  |  | `=D39-D40` | 25080 | `=D41*E41` |
| 42 | Thuế GTGT (10%) |  |  |  |  | `=round(F41*10%,0)` |
| 43 | Tổng số tiền phải thanh toán |  |  |  |  | `=F41+F42` |
| 47 | TỔNG HỢP CHI PHÍ AWS NETNAM |  |  |  |  |  |
| 49 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 50 | 1 | 058264303771 | 2024-09-01 | 1617.13 |  |  |
| 51 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D50*(1+5.26%),2)` |  |  |
| 52 | Chiết khấu (3%) |  |  | `=round(D51*3%,2)` |  |  |
| 53 | Thành tiền |  |  | `=D51-D52` | 24733 | `=D53*E53` |
| 54 | Thuế GTGT (10%) |  |  |  |  | `=round(F53*10%,0)` |
| 55 | Tổng số tiền phải thanh toán |  |  |  |  | `=F53+F54` |
| 59 | TỔNG HỢP CHI PHÍ AWS NETNAM |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 62 | 1 | 058264303771 | 2024-10-01 | 1587.62 |  |  |
| 63 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round(D62*(1+5.26%),2)` |  |  |
| 64 |  |  |  | `=round(D63*3%,2)` |  |  |
| 65 |  |  |  | `=D63-D64` | 25445 | `=D65*E65` |
| 66 |  |  |  |  |  | `=round(F65*10%,0)` |
| 67 |  |  |  |  |  | `=F65+F66` |

> *Đã bỏ qua 21 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (34 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+5.26%),2)` | 6 | `D5` |
| D | `=round(D{r}*3%,2)` | 6 | `D6` |
| D | `=D{r}-D{r}` | 6 | `D7` |
| F | `=D{r}*E{r}` | 6 | `F7` |
| F | `=round(F{r}*10%,0)` | 5 | `F18` |
| F | `=F{r}+F{r}` | 5 | `F19` |
