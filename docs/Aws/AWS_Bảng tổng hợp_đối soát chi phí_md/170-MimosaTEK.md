# MimosaTEK

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MimosaTEK`  
> **Vùng dữ liệu:** 16 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 1 | DANH SÁCH KHÁCH HÀNG THÀNH CÔNG |  |  |  |  |  |  |
| 3 | STT | Khách hàng | Tháng | Billing GCP | Tỷ lệ hoa hồng | Tỷ giá | Thành tiền |
| 4 | 1 | CÔNG TY CỔ PHẦN NAVY MEDIA VIỆT NAM | 2024-03-01 | 5871 | 0.26 | 24972 | `=D4*E4*F4` |
| 5 | 2 | CÔNG TY CỔ PHẦN AUTHENTIC EDUCATION HUB | 1970-01-01 07:00:00 | 147 | 0.26 | 24972 | `=D5*E5*F5` |
| 6 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=G4+G5` |
| 11 | DANH SÁCH KHÁCH HÀNG THÀNH CÔNG |  |  |  |  |  |  |
| 13 | STT | Khách hàng | Tháng | Billing GCP | Tỷ lệ hoa hồng | Tỷ giá | Thành tiền |
| 14 | 1 | CÔNG TY CỔ PHẦN NAVY MEDIA VIỆT NAM | 2024-04-01 | 5413.205 | 0.26 | 24972 | `=D14*E14*F14` |
| 15 | 2 | CÔNG TY CỔ PHẦN AUTHENTIC EDUCATION HUB | 1970-01-01 07:00:00 | 1117.015 | 0.26 | 24972 | `=D15*E15*F15` |
| 16 |  | Tổng số tiền phải thanh toán |  |  |  |  | `=G14+G15` |

> *Đã bỏ qua 6 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 2 | `C5` |
| G | `=D{r}*E{r}*F{r}` | 4 | `G4` |
| G | `=G{r}+G{r}` | 2 | `G6` |
