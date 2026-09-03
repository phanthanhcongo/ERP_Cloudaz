# VARMETA

> **Workbook:** `DO_Bảng tổng hợp_ đối soát chi phí.xlsx`  
> **Sheet:** `VARMETA`  
> **Vùng dữ liệu:** 50 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - VARMETA |  |  |  |  |  |
| 3 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | do:team:11195a86-ef64-4178-8686-3ec32e2d1ad4 | 2025-10-01 | 392.4 |  |  |
| 5 |  Chiết khấu (10%) |  |  | 39.24 |  |  |
| 6 | Phí dịch vụ (10%) |  |  | 39.24 |  |  |
| 7 | Thành tiền |  |  | 392.4 | 26347 | 10338563 |
| 8 | Thuế GTGT 10% |  |  |  |  | 1033856 |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | 11372419 |
| 15 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - VARMETA |  |  |  |  |  |
| 17 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | do:team:11195a86-ef64-4178-8686-3ec32e2d1ad4 | 2026-01-01 | 317.3 |  |  |
| 19 |  Chiết khấu (10%) |  |  | 31.73 |  |  |
| 20 | Phí dịch vụ (10%) |  |  | 31.73 |  |  |
| 21 | Thành tiền |  |  | 317.3 | 26145 | 8295809 |
| 22 | Thuế GTGT 10% |  |  |  |  | 829581 |
| 23 | Tổng số tiền phải thanh toán |  |  |  |  | 9125390 |
| 28 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - VARMETA |  |  |  |  |  |
| 30 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 31 | 1 | do:team:11195a86-ef64-4178-8686-3ec32e2d1ad4 | 2026-02-01 | 135.5 |  |  |
| 32 |  Chiết khấu (10%) |  |  | 13.55 |  |  |
| 33 | Phí dịch vụ (10%) |  |  | 13.55 |  |  |
| 34 | Thành tiền |  |  | 135.5 | 26240 | 3555520 |
| 35 | Thuế GTGT 10% |  |  |  |  | 355552 |
| 36 | Tổng số tiền phải thanh toán |  |  |  |  | 3911072 |
| 42 | ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - VARMETA |  |  |  |  |  |
| 44 | STT | ID | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 45 | 1 | do:team:11195a86-ef64-4178-8686-3ec32e2d1ad4 | 2026-03-01 | 15.48 |  |  |
| 46 |  Chiết khấu (10%) |  |  | 1.55 |  |  |
| 47 | Phí dịch vụ (10%) |  |  | 1.55 |  |  |
| 48 | Thành tiền |  |  | 15.48 | 26357 | 408006 |
| 49 | Thuế GTGT 10% |  |  |  |  | 40801 |
| 50 | Tổng số tiền phải thanh toán |  |  |  |  | 448807 |

> *Đã bỏ qua 18 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (24 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 8 | `D5` |
| D | `=D{r}-D{r}+D{r}` | 4 | `D7` |
| F | `=round(D{r}*E{r},0)` | 4 | `F7` |
| F | `=round(F{r}*10%,0)` | 4 | `F8` |
| F | `=F{r}+F{r}` | 4 | `F9` |
