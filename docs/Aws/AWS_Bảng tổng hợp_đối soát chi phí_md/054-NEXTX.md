# NEXTX

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `NEXTX`  
> **Vùng dữ liệu:** 27 dòng × 5 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E |
|---:|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 06/2026 - NEXTX |  |  |  |  |
| 3 | STT | Nội dung | ID: 025676302475 | ID: 331979308603 | Tổng cộng ID |
| 4 | 1 | Billing AWS | 0 | 207.53 |  |
| 5 | 2 | Phí dịch vụ (5.26%) | `=round(C4*5.26%,2)` | `=round(D4*5.26%,2)` |  |
| 6 | 3 | Chiết khấu (2%) | `=round(C4*2%,2)` | `=round(D4*2%,2)` |  |
| 7 | 4 | Tổng cộng | `=C4+C5-C6` | `=D4+D5-D6` |  |
| 8 | 5 | Tỷ giá | 26466 | `=C8` |  |
| 9 | 6 | Thành tiền | `=round(C7*C8,0)` | `=round(D7*D8,0)` | `=round(C9+D9,0)` |
| 10 | 7 | Thuế GTGT (10%) |  |  | `=round(E9*10%,0)` |
| 11 | 8 | Tổng số tiền phải thanh toán |  |  | `=E9+E10` |
| 17 | ĐỐI SOÁT CHI PHÍ AWS THÁNG 07/2026 - NEXTX |  |  |  |  |
| 19 | STT | Nội dung | ID: 025676302475 | ID: 331979308603 | Tổng cộng ID |
| 20 | 1 | Billing AWS | 0 | 248.42 |  |
| 21 | 2 | Phí dịch vụ (5.88%) | `=round(C20*5.88%,2)` | `=round(D20*5.88%,2)` |  |
| 22 | 3 | Chiết khấu (2%) | `=round(C20*2%,2)` | `=round(D20*2%,2)` |  |
| 23 | 4 | Tổng cộng | `=C20+C21-C22` | `=D20+D21-D22` |  |
| 24 | 5 | Tỷ giá | 26475 | `=C24` |  |
| 25 | 6 | Thành tiền | `=round(C23*C24,0)` | `=round(D23*D24,0)` | `=round(C25+D25,0)` |
| 26 | 7 | Thuế GTGT (10%) |  |  | `=round(E25*10%,0)` |
| 27 | 8 |  |  |  | `=E25+E26` |

> *Đã bỏ qua 7 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (24 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=round(C{r}*2%,2)` | 2 | `C6` |
| C | `=C{r}+C{r}-C{r}` | 2 | `C7` |
| C | `=round(C{r}*C{r},0)` | 2 | `C9` |
| C | `=round(C{r}*5.26%,2)` | 1 | `C5` |
| C | `=round(C{r}*5.88%,2)` | 1 | `C21` |
| D | `=round(D{r}*2%,2)` | 2 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 2 | `D7` |
| D | `=C{r}` | 2 | `D8` |
| D | `=round(D{r}*D{r},0)` | 2 | `D9` |
| D | `=round(D{r}*5.26%,2)` | 1 | `D5` |
| D | `=round(D{r}*5.88%,2)` | 1 | `D21` |
| E | `=round(C{r}+D{r},0)` | 2 | `E9` |
| E | `=round(E{r}*10%,0)` | 2 | `E10` |
| E | `=E{r}+E{r}` | 2 | `E11` |
