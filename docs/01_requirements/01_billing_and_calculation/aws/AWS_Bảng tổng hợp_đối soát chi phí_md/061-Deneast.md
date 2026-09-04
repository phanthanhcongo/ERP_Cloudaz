# Deneast

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Deneast`  
> **Vùng dữ liệu:** 19 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ DENEAST  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD)  đã bao gồm thuế, phí | Tỷ giá | Thành tiền (VND) |
| 4 | 1 | 956374869191 | 2022-06-01 | 2469.67 | 23415 | `=D4*E4` |
| 5 | 2 | 956374869191 | 2022-07-01 | 2316.58 | 23480 | `=D5*E5` |
| 6 | 3 | 956374869191 | 2022-08-01 | 2353.7 | 23600 | `=D6*E6` |
| 7 | 4 | 956374869191 | 2022-09-01 | 2464.07 | 24010 | `=D7*E7` |
| 8 | 5 | 956374869191 | 2022-10-01 | 2583.52 | 24877 | `=D8*E8` |
| 9 | 6 | 956374869191 | 2022-11-01 | 1509.88 | 24795 | `=D9*E9` |
| 10 | 7 | Mua Savings Plans |  | 8839 | 24795 | `=D10*E10` |
| 11 | (a) Số tiền chi phí thực tế |  |  |  |  | `=sum(F4:F10)` |
| 12 | (b) Số tiền đã thanh toán lần 1 theo hợp đồng |  |  |  |  | 350000000 |
| 13 | (c) Số tiền thanh toán thêm =(a) - (b) |  |  |  |  | `=F11-F12` |
| 14 | (d) Số tiền phải thanh toán lần 2 theo hợp đồng |  |  |  |  | 350000000 |
| 15 | Tổng số tiền phải thanh toán = (c) + (d) |  |  |  |  | `=F14+F13` |
| 19 | https://docs.google.com/spreadsheets/d/1bRwpQs8tI0CWBbP272SYLXl4ZBgYPayEZjB0DjpgldM/edit#gid=0 |  |  |  |  |  |

> *Đã bỏ qua 4 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (10 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| F | `=D{r}*E{r}` | 7 | `F4` |
| F | `=sum(F{r}:F{r})` | 1 | `F11` |
| F | `=F{r}-F{r}` | 1 | `F13` |
| F | `=F{r}+F{r}` | 1 | `F15` |
