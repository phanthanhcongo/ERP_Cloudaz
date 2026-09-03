# MYNA EDU

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `MYNA EDU`  
> **Vùng dữ liệu:** 10 dòng × 5 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E |
|---:|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 09/2025 - MYNA EDU |  |  |  |  |
| 3 | STT | Nội dung | ID: 867630400127 | ID: 893710834026 | Tổng cộng ID |
| 4 | 1 | Billing AWS | 302.15 | 352.24 |  |
| 5 | 2 | Phí dịch vụ (10%) | `=round(C4*10%,2)` | `=round(D4*10%,2)` |  |
| 6 | 3 | Tổng cộng | `=C4+C5` | `=D4+D5` |  |
| 7 | 4 | Tỷ giá | 26446 | `=C7` |  |
| 8 | 5 | Thành tiền | `=round(C6*C7,0)` | `=round(D6*D7,0)` | `=round(C8+D8,0)` |
| 9 | 6 | Thuế GTGT (10%) |  |  | `=round(E8*10%,0)` |
| 10 | 7 | Tổng số tiền phải thanh toán |  |  | `=E8+E9` |

> *Đã bỏ qua 1 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (10 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=round(C{r}*10%,2)` | 1 | `C5` |
| C | `=C{r}+C{r}` | 1 | `C6` |
| C | `=round(C{r}*C{r},0)` | 1 | `C8` |
| D | `=round(D{r}*10%,2)` | 1 | `D5` |
| D | `=D{r}+D{r}` | 1 | `D6` |
| D | `=C{r}` | 1 | `D7` |
| D | `=round(D{r}*D{r},0)` | 1 | `D8` |
| E | `=round(C{r}+D{r},0)` | 1 | `E8` |
| E | `=round(E{r}*10%,0)` | 1 | `E9` |
| E | `=E{r}+E{r}` | 1 | `E10` |
