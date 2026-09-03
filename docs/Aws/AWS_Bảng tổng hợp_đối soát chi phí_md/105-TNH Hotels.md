# TNH Hotels

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `TNH Hotels`  
> **Vùng dữ liệu:** 79 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 381491865228 | 2024-03-01 | 0.97 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D4*(1+7%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Tổng số tiền phải thanh toán |  |  | `=D5-D6` | 24972 | `=D7*E7` |
| 12 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 15 | 1 | 381491865228 | 2024-04-01 | 76.97 |  |  |
| 16 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D15*(1+7%),2)` |  |  |
| 17 | Chiết khấu (2%) |  |  | `=round(D16*2%,2)` |  |  |
| 18 | Tổng số tiền phải thanh toán |  |  | `=D16-D17` | 25458 | `=D18*E18` |
| 23 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 26 | 1 | 381491865228 | 2024-06-01 | 72.92 |  |  |
| 27 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D26*(1+7%),2)` |  |  |
| 28 | Chiết khấu (2%) |  |  | `=round(D27*2%,2)` |  |  |
| 29 | Thành tiền |  |  | `=D27-D28` | 25473 | `=D29*E29` |
| 30 | Thuế GTGT (10%) |  |  |  |  | `=round(F29*10%,0)` |
| 31 | Tổng số tiền phải thanh toán |  |  |  |  | `=F29+F30` |
| 35 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 38 | 1 | 381491865228 | 2024-07-01 | 94.12 |  |  |
| 39 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D38*(1+7%),2)` |  |  |
| 40 | Chiết khấu (2%) |  |  | `=round(D39*2%,2)` |  |  |
| 41 | Thành tiền |  |  | `=D39-D40` | 25405 | `=D41*E41` |
| 42 | Thuế GTGT (10%) |  |  |  |  | `=round(F41*10%,0)` |
| 43 | Tổng số tiền phải thanh toán |  |  |  |  | `=F41+F42` |
| 47 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 49 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 50 | 1 | 381491865228 | 2024-08-01 | 220.72 |  |  |
| 51 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D50*(1+7%),2)` |  |  |
| 52 | Chiết khấu (2%) |  |  | `=round(D51*2%,2)` |  |  |
| 53 | Thành tiền |  |  | `=D51-D52` | 25080 | `=D53*E53` |
| 54 | Thuế GTGT (10%) |  |  |  |  | `=round(F53*10%,0)` |
| 55 | Tổng số tiền phải thanh toán |  |  |  |  | `=F53+F54` |
| 59 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 62 | 1 | 381491865228 | 2024-09-01 | 106.39 |  |  |
| 63 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D62*(1+7%),2)` |  |  |
| 64 | Chiết khấu (2%) |  |  | `=round(D63*2%,2)` |  |  |
| 65 | Thành tiền |  |  | `=D63-D64` | 24733 | `=D65*E65` |
| 66 | Thuế GTGT (10%) |  |  |  |  | `=round(F65*10%,0)` |
| 67 | Tổng số tiền phải thanh toán |  |  |  |  | `=F65+F66` |
| 71 | TỔNG HỢP CHI PHÍ TNH HOTELS |  |  |  |  |  |
| 73 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 74 | 1 | 381491865228 | 2024-10-01 | 260.48 |  |  |
| 75 | Giá trước chiết khấu ( bao gồm 7% phí dịch vụ) |  |  | `=round(D74*(1+7%),2)` |  |  |
| 76 | Chiết khấu (2%) |  |  | `=round(D75*2%,2)` |  |  |
| 77 | Thành tiền |  |  | `=D75-D76` | 25445 | `=D77*E77` |
| 78 | Thuế GTGT (10%) |  |  |  |  | `=round(F77*10%,0)` |
| 79 |  |  |  |  |  | `=F77+F78` |

> *Đã bỏ qua 27 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (38 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*(1+7%),2)` | 7 | `D5` |
| D | `=round(D{r}*2%,2)` | 7 | `D6` |
| D | `=D{r}-D{r}` | 7 | `D7` |
| F | `=D{r}*E{r}` | 7 | `F7` |
| F | `=round(F{r}*10%,0)` | 5 | `F30` |
| F | `=F{r}+F{r}` | 5 | `F31` |
