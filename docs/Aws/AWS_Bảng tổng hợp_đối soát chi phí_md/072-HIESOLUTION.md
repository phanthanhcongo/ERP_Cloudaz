# HIESOLUTION

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `HIESOLUTION`  
> **Vùng dữ liệu:** 52 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS - HIESOLUTION |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 021891607780 | 2024-09-01 | 3.65 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D4*(1+5.26%),2)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=round(D5*2%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D5-D6` | 24733 | `=D7*E7` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 13 | ĐỐI SOÁT CHI PHÍ AWS - HIESOLUTION |  |  |  |  |  |
| 15 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 16 | 1 | 021891607780 | 2025-05-01 | 818.334 |  |  |
| 17 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D16*(1+5.26%),2)` |  |  |
| 18 | Chiết khấu (2%) |  |  | `=round(D17*2%,2)` |  |  |
| 19 | Tổng cộng |  |  | `=D17-D18` |  |  |
| 20 | Hỗ trợ khách hàng |  |  | 46.35 |  |  |
| 21 | Thành tiền |  |  | `=D19-D20` | 26225 | `=D21*E21` |
| 22 | Thuế GTGT (10%) |  |  |  |  | `=round(F21*10%,0)` |
| 23 | Tổng số tiền phải thanh toán |  |  |  |  | `=F21+F22` |
| 27 | ĐỐI SOÁT CHI PHÍ AWS - HIESOLUTION |  |  |  |  |  |
| 29 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 30 | 1 | 021891607780 | 2025-06-01 | 108.11 |  |  |
| 31 | Giá trước chiết khấu ( bao gồm 5% phí dịch vụ) |  |  | `=round(D30*(1+5.26%),2)` |  |  |
| 32 | Chiết khấu (2%) |  |  | `=round(D31*2%,2)` |  |  |
| 33 | Thành tiền |  |  | `=D31-D32` | 26300 | `=D33*E33` |
| 34 | Thuế GTGT (10%) |  |  |  |  | `=round(F33*10%,0)` |
| 35 | Tổng số tiền phải thanh toán |  |  |  |  | `=F33+F34` |
| 39 | ĐỐI SOÁT CHI PHÍ AWS - HIESOLUTION |  |  |  |  |  |
| 41 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 42 | 1 | 021891607780 | 2025-07-01 | 539.51 |  |  |
| 43 | Giá trước chiết khấu ( bao gồm 10% phí dịch vụ) |  |  | `=round(D42*(1+10%),2)` |  |  |
| 44 | Chiết khấu (2%) |  |  | `=round(D43*2%,2)` |  |  |
| 45 | Thành tiền |  |  | `=D43-D44` | 26382 | `=D45*E45` |
| 46 | Thuế GTGT (10%) |  |  |  |  | `=round(F45*10%,0)` |
| 47 | Tổng số tiền phải thanh toán |  |  |  |  | `=F45+F46` |
| 52 | ĐỐI SOÁT CHI PHÍ AWS - HIESOLUTION |  |  |  |  |  |

> *Đã bỏ qua 17 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (25 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 5 | `D7` |
| D | `=round(D{r}*2%,2)` | 4 | `D6` |
| D | `=round(D{r}*(1+5.26%),2)` | 3 | `D5` |
| D | `=round(D{r}*(1+10%),2)` | 1 | `D43` |
| F | `=D{r}*E{r}` | 4 | `F7` |
| F | `=round(F{r}*10%,0)` | 4 | `F8` |
| F | `=F{r}+F{r}` | 4 | `F9` |
