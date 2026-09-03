# FPT ADTRUE_OSAM

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `FPT ADTRUE_OSAM`  
> **Vùng dữ liệu:** 22 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 |  |  |  |  CÔNG TY TNHH QUỐC TẾ OSAM<br> <br>Địa chỉ: Tầng 2, Tòa nhà Trường Thịnh, Số 1 Phùng Chí Kiên,<br>Quận Cầu Giấy, Thành phố Hà Nội<br> <br>Điện thoại: 024 2216 4848<br> <br>W: osam.io |  |  |
| 5 | TỔNG HỢP CHI PHÍ FPT ADTRUE |  |  |  |  |  |
| 7 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |
| 8 | 1 | 588150486520 | 2021-04-01 | 25.72 | 23150 | `=round(D8*E8,0)` |
| 9 |  | Tổng cộng |  | `=sum(D8)` |  | `=sum(F8)` |
| 10 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên OSAM đóng hộ) |  |  | `=D9*0.07` |  | `=F9*0.07` |
| 11 |  | Tổng số tiền phải thanh toán |  | `=D9+D10` | 23150 | `=F9+F10` |
| 16 |  | ADTRUE |  | USD | VND | Công thức tính  |
| 17 |  |  | Gapo | `=429.92` | `=D17*23265` | USD * 23265 |
| 18 |  |  |  | Tổng doanh thu | `=SUM(E17)` |  |
| 19 |  |  |  | Opex | `=E18*F19` | 0.042 |
| 20 |  |  |  | Thuế TNDN | `=(E18-E19)*20%` | (Tổng doanh thu-Opex)*20% |
| 21 |  |  |  | Net profit | `=E18-SUM(E19:E20)` | Tổng doanh thu-Opex-Thuế TNDN |
| 22 |  |  |  | Commission Q3/2020 | `=6%*E21` | 0.06 |

> *Đã bỏ qua 8 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (14 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=sum(D{r})` | 1 | `D9` |
| D | `=D{r}*0.07` | 1 | `D10` |
| D | `=D{r}+D{r}` | 1 | `D11` |
| D | `=429.92` | 1 | `D17` |
| E | `=D{r}*23265` | 1 | `E17` |
| E | `=SUM(E{r})` | 1 | `E18` |
| E | `=E{r}*F{r}` | 1 | `E19` |
| E | `=(E{r}-E{r})*20%` | 1 | `E20` |
| E | `=E{r}-SUM(E{r}:E{r})` | 1 | `E21` |
| E | `=6%*E{r}` | 1 | `E22` |
| F | `=round(D{r}*E{r},0)` | 1 | `F8` |
| F | `=sum(F{r})` | 1 | `F9` |
| F | `=F{r}*0.07` | 1 | `F10` |
| F | `=F{r}+F{r}` | 1 | `F11` |
