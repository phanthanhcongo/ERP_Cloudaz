# SKILLSPAR

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `SKILLSPAR`  
> **Vùng dữ liệu:** 117 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 665499488629 | 2025-09-01 | 144.58 |  |  |
| 5 | Phí dịch vụ (10%) |  |  | `=round(D4*10%,2)` |  |  |
| 6 | Chiết khấu (3%) |  |  | `=round(D4*3%,2)` |  |  |
| 7 | Thành tiền |  |  | `=D4+D5-D6` | 26446 | `=round(D7*E7,0)` |
| 8 | Thuế GTGT (10%) |  |  | `=round(D7*10%,2)` | 26446 | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  | `=D7+D8` | 26446 | `=F7+F8` |
| 10 | Số tiền hỗ trợ tháng này |  |  | `=6000` |  |  |
| 11 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D10-D9` |  |  |
| 17 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 19 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 20 | 1 | 665499488629 | 2025-10-01 | 374.29 |  |  |
| 21 | Phí dịch vụ (10%) |  |  | `=round(D20*10%,2)` |  |  |
| 22 | Chiết khấu (3%) |  |  | `=round(D20*3%,2)` |  |  |
| 23 | Thành tiền |  |  | `=D20+D21-D22` | 26347 | `=round(D23*E23,0)` |
| 24 | Thuế GTGT (10%) |  |  | `=round(D23*10%,2)` | 26347 | `=round(F23*10%,0)` |
| 25 | Tổng số tiền phải thanh toán |  |  | `=D23+D24` | 26347 | `=F23+F24` |
| 26 | Số tiền hỗ trợ tháng này |  |  | 5829.83 |  |  |
| 27 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D26-D25` |  |  |
| 32 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 34 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 35 | 1 | 665499488629 | 2025-11-01 | 755.44 |  |  |
| 36 | Phí dịch vụ (10%) |  |  | `=round(D35*10%,2)` |  |  |
| 37 | Chiết khấu (3%) |  |  | `=round(D35*3%,2)` |  |  |
| 38 | Thành tiền |  |  | `=D35+D36-D37` | 26412 | `=round(D38*E38,0)` |
| 39 | Thuế GTGT (10%) |  |  | `=round(D38*10%,2)` | 26412 | `=round(F38*10%,0)` |
| 40 | Tổng số tiền phải thanh toán |  |  | `=D38+D39` | 26412 | `=F38+F39` |
| 41 | Số tiền hỗ trợ tháng này |  |  | 5389.29 |  |  |
| 42 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D41-D40` |  |  |
| 48 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 50 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 51 | 1 | 665499488629 | 2025-12-01 | 1075.18 |  |  |
| 52 | Phí dịch vụ (10%) |  |  | `=round(D51*10%,2)` |  |  |
| 53 | Chiết khấu (3%) |  |  | `=round(D51*3%,2)` |  |  |
| 54 | Thành tiền |  |  | `=D51+D52-D53` | 26377 | `=round(D54*E54,0)` |
| 55 | Thuế GTGT (10%) |  |  | `=round(D54*10%,2)` | 26377 | `=round(F54*10%,0)` |
| 56 | Tổng số tiền phải thanh toán |  |  | `=D54+D55` | 26377 | `=F54+F55` |
| 57 | Số tiền hỗ trợ tháng này |  |  | 4500.14 |  |  |
| 58 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D57-D56` |  |  |
| 63 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 66 | 1 | 665499488629 | 2026-01-01 | 1108.87 |  |  |
| 67 | Phí dịch vụ (10%) |  |  | `=round(D66*10%,2)` |  |  |
| 68 | Chiết khấu (3%) |  |  | `=round(D66*3%,2)` |  |  |
| 69 | Thành tiền |  |  | `=D66+D67-D68` | 26145 | `=round(D69*E69,0)` |
| 70 | Thuế GTGT (10%) |  |  | `=round(D69*10%,2)` | 26145 | `=round(F69*10%,0)` |
| 71 | Tổng số tiền phải thanh toán |  |  | `=D69+D70` | 26145 | `=F69+F70` |
| 72 | Số tiền hỗ trợ tháng này |  |  | 3234.66 |  |  |
| 73 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D72-D71` |  |  |
| 78 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 80 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 81 | 1 | 665499488629 | 2026-02-01 | 837.44 |  |  |
| 82 | Phí dịch vụ (10%) |  |  | `=round(D81*10%,2)` |  |  |
| 83 | Chiết khấu (3%) |  |  | `=round(D81*3%,2)` |  |  |
| 84 | Thành tiền |  |  | `=D81+D82-D83` | 26240 | `=round(D84*E84,0)` |
| 85 | Thuế GTGT (10%) |  |  | `=round(D84*10%,2)` | 26240 | `=round(F84*10%,0)` |
| 86 | Tổng số tiền phải thanh toán |  |  | `=D84+D85` | 26240 | `=F84+F85` |
| 87 | Số tiền hỗ trợ tháng này |  |  | 1929.52 |  |  |
| 88 | Số tiền hỗ trợ còn lại chuyển tháng sau |  |  | `=D87-D86` |  |  |
| 94 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 97 | 1 | 665499488629 | 2026-03-01 | 1154.44 |  |  |
| 98 | Phí dịch vụ (10%) |  |  | `=round(D97*10%,2)` |  |  |
| 99 | Chiết khấu (3%) |  |  | `=round(D97*3%,2)` |  |  |
| 100 | Thành tiền |  |  | `=D97+D98-D99` |  |  |
| 101 | Thuế GTGT (10%) |  |  | `=round(D100*10%,2)` |  |  |
| 102 | Tổng số tiền phải thanh toán |  |  | `=D100+D101` |  |  |
| 103 | Số tiền hỗ trợ tháng này |  |  | 943.85 |  |  |
| 104 | Số tiền còn lại phải trả bao gồm cả thuế GTGT |  |  | `=D102-D103` | 26357 | `=round(D104*E104,0)` |
| 109 | ĐỐI SOÁT CHI PHÍ AWS - SKILLSPAR |  |  |  |  |  |
| 111 | STT | Tài khoản | Tháng | Billing (USD) | Tỷ giá | Thành tiền |
| 112 | 1 | 665499488629 | 2026-04-01 | 1108.16 |  |  |
| 113 | Phí dịch vụ (10%) |  |  | `=round(D112*10%,2)` |  |  |
| 114 | Chiết khấu (3%) |  |  | `=round(D112*3%,2)` |  |  |
| 115 |  |  |  | `=D112+D113-D114` | 26368 | `=round(D115*E115,0)` |
| 116 |  |  |  |  |  | `=round(F115*10%,0)` |
| 117 |  |  |  |  |  | `=F115+F116` |

> *Đã bỏ qua 39 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (68 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=round(D{r}*10%,2)` | 15 | `D5` |
| D | `=round(D{r}*3%,2)` | 8 | `D6` |
| D | `=D{r}+D{r}-D{r}` | 8 | `D7` |
| D | `=D{r}+D{r}` | 7 | `D9` |
| D | `=D{r}-D{r}` | 7 | `D11` |
| D | `=6000` | 1 | `D10` |
| F | `=round(D{r}*E{r},0)` | 8 | `F7` |
| F | `=round(F{r}*10%,0)` | 7 | `F8` |
| F | `=F{r}+F{r}` | 7 | `F9` |
