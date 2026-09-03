# VND Credit

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `VND Credit`  
> **Vùng dữ liệu:** 165 dòng × 7 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G |
|---:|---|---|---|---|---|---|---|
| 2 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 4 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 5 | 1 | 204934624744 | 2021-10-01 | 21.96 | 22850 | `=round(D5*E5,0)` |  |
| 6 |  | Discount 3% |  | `=D5*3%` |  |  |  |
| 7 |  | Tổng cộng |  | `=D5-D6` | 22850 | `=round(D7*E7,0)` |  |
| 8 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D7*0.1` |  | `=F7*0.1` |  |
| 9 |  | Tổng số tiền phải thanh toán |  | `=D7+D8` | 22850 | `=F7+F8` | 535405.2 |
| 12 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 14 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 15 | 1 | 204934624744 | 2021-11-01 | 68.15 | 22800 | `=round(D15*E15,0)` |  |
| 16 |  | Discount 3% |  | `=D15*3%` |  |  |  |
| 17 |  | Tổng cộng |  | `=D15-D16` | 22800 | `=round(D17*E17,0)` |  |
| 18 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D17*0.1` |  | `=F17*0.1` |  |
| 19 |  | Tổng số tiền phải thanh toán |  | `=D17+D18` | 22800 | `=F17+F18` | 1657925.5 |
| 23 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 25 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 26 | 1 | 204934624744 | 2021-12-01 | 315.66 | 22920 | `=round(D26*E26,0)` |  |
| 27 |  | Discount 3% |  | `=D26*3%` |  |  |  |
| 28 |  | Tổng cộng |  | `=D26-D27` | 22920 | `=round(D28*E28,0)` |  |
| 29 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D28*0.1` |  | `=F28*0.1` |  |
| 30 |  | Tổng số tiền phải thanh toán |  | `=D28+D29` | 22920 | `=F28+F29` | 7719666.9000000004 |
| 33 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 35 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 36 | 1 | 204934624744 | 2022-01-01 | 1887.36 | 22780 | `=round(D36*E36,0)` |  |
| 37 |  | Discount 3% |  | `=D36*3%` |  |  |  |
| 38 |  | Tổng cộng |  | `=D36-D37` | 22780 | `=round(D38*E38,0)` |  |
| 39 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D38*0.1` |  | `=F38*0.1` |  |
| 40 |  | Tổng số tiền phải thanh toán |  | `=D38+D39` | 22780 | `=F38+F39` | 45874662.8999999985 |
| 44 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 46 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 47 | 1 | 204934624744 | 2022-02-01 | 1737.83 | 22950 | `=round(D47*E47,0)` |  |
| 48 |  | Discount 3% |  | `=D47*3%` |  |  |  |
| 49 |  | Tổng cộng |  | `=D47-D48` | 22950 | `=round(D49*E49,0)` |  |
| 50 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D49*0.1` |  | `=F49*0.1` |  |
| 51 |  | Tổng số tiền phải thanh toán |  | `=D49+D50` | 22950 | `=F49+F50` | 42555373.299999997 |
| 54 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 56 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 57 | 1 | 204934624744 | 2022-03-01 | 1924.7 | 22980 | `=round(D57*E57,0)` |  |
| 58 |  | Discount 3% |  | `=D57*3%` |  |  |  |
| 59 |  | Tổng cộng |  | `=D57-D58` | 22980 | `=round(D59*E59,0)` |  |
| 60 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D59*0.1` |  | `=F59*0.1` |  |
| 61 |  | Tổng số tiền phải thanh toán |  | `=D59+D60` | 22980 | `=F59+F60` | 47192989.799999997 |
| 64 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 66 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 67 | 1 | 204934624744 | 2022-04-01 | 1395.64 | 23095 | `=round(D67*E67,0)` |  |
| 68 |  | Discount 3% |  | `=D67*3%` |  |  |  |
| 69 |  | Tổng cộng |  | `=D67-D68` | 23095 | `=round(D69*E69,0)` |  |
| 70 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D69*0.1` |  | `=F69*0.1` |  |
| 71 |  | Tổng số tiền phải thanh toán |  | `=D69+D70` | 23095 | `=F69+F70` | 34391870.700000003 |
| 74 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 76 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 77 | 1 | 204934624744 | 2022-05-01 | 1166.51 |  |  |  |
| 78 |  | Discount 3% |  | `=D77*3%` |  |  |  |
| 79 |  | Tổng cộng |  | `=D77-D78` |  |  |  |
| 80 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D79*0.1` |  |  |  |
| 81 |  | Tổng số tiền phải thanh toán |  | `=round(D79+D80,2)` | 23330 | `=D81*E81` |  |
| 84 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 86 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 87 | 1 | 204934624744 | 2022-06-01 | 1616.47 |  |  |  |
| 88 |  | Discount 3% |  | `=D87*3%` |  |  |  |
| 89 |  | Tổng cộng |  | `=D87-D88` |  |  |  |
| 90 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D89*0.1` |  |  |  |
| 91 |  | Tổng số tiền phải thanh toán |  | `=round(D89+D90,2)` | 23415 | `=D91*E91` |  |
| 94 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 96 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 97 | 1 | 204934624744 | 2022-07-01 | 1828.51 |  |  |  |
| 98 |  | Discount 3% |  | `=D97*3%` |  |  |  |
| 99 |  | Tổng cộng |  | `=D97-D98` |  |  |  |
| 100 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D99*0.1` |  |  |  |
| 101 |  | Tổng số tiền phải thanh toán |  | `=round(D99+D100,2)` | 23480 | `=D101*E101` |  |
| 104 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 106 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 107 | 1 | 204934624744 | 2022-08-01 | 1707.49 |  |  |  |
| 108 |  | Discount 3% |  | `=D107*3%` |  |  |  |
| 109 |  | Tổng cộng |  | `=D107-D108` |  |  |  |
| 110 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D109*0.1` |  |  |  |
| 111 |  | Tổng số tiền phải thanh toán |  | `=round(D109+D110,2)` | 23600 | `=D111*E111` |  |
| 114 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 116 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 117 | 1 | 204934624744 | 2022-09-01 | 1712.87 |  |  |  |
| 118 |  | Discount 3% |  | `=D117*3%` |  |  |  |
| 119 |  | Tổng cộng |  | `=D117-D118` |  |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D119*0.1` |  |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(D119+D120,2)` | 24010 | `=D121*E121` |  |
| 125 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 127 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 128 | 1 | 204934624744 | 2022-10-01 | 2239.22 |  |  |  |
| 129 |  | Discount 3% |  | `=D128*3%` |  |  |  |
| 130 |  | Tổng cộng |  | `=D128-D129` |  |  |  |
| 131 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D130*0.1` |  |  |  |
| 132 |  | Tổng số tiền phải thanh toán |  | `=round(D130+D131,2)` | 24877 | `=D132*E132` |  |
| 136 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 138 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 139 | 1 | 204934624744 | 2022-11-01 | 2079.2584481618 |  |  |  |
| 140 |  | Discount 3% |  | `=D139*3%` |  |  |  |
| 141 |  | Tổng cộng |  | `=D139-D140` |  |  |  |
| 142 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D141*0.1` |  |  |  |
| 143 |  | Tổng số tiền phải thanh toán |  | `=round(D141+D142,2)` | 24795 | `=D143*E143` |  |
| 146 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 148 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 149 | 1 | 204934624744 | 2022-12-01 | 2064.7043652393 |  |  |  |
| 150 | 2 | 930634088366 | 1970-01-01 07:00:00 | 543.3731576049 |  |  |  |
| 151 |  | Discount 3% |  | `=(D149+D150)*3%` |  |  |  |
| 152 |  | Tổng cộng |  | `=D149+D150-D151` |  |  |  |
| 153 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D152*0.1` |  |  |  |
| 154 |  | Tổng số tiền phải thanh toán |  | `=round(D152+D153,2)` | 23760 | `=D154*E154` |  |
| 157 | TỔNG HỢP CHI PHÍ VND Credit |  |  |  |  |  |  |
| 159 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 160 | 1 | 204934624744 | 2023-01-01 | 2220.54 |  |  |  |
| 161 | 2 | 930634088366 | 1970-01-01 07:00:00 | 1117.07 |  |  |  |
| 162 |  | Discount 3% |  | `=(D160+D161)*3%` |  |  |  |
| 163 |  | Tổng cộng |  | `=D160+D161-D162` |  |  |  |
| 164 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D163*0.1` |  |  |  |
| 165 |  |  |  | `=round(D163+D164,2)` | 23622 | `=D165*E165` |  |

> *Đã bỏ qua 51 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (103 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=$C${r}` | 1 | `C150` |
| C | `=C{r}` | 1 | `C161` |
| D | `=D{r}*0.1` | 16 | `D8` |
| D | `=D{r}*3%` | 14 | `D6` |
| D | `=D{r}-D{r}` | 14 | `D7` |
| D | `=round(D{r}+D{r},2)` | 9 | `D81` |
| D | `=D{r}+D{r}` | 7 | `D9` |
| D | `=(D{r}+D{r})*3%` | 2 | `D151` |
| D | `=D{r}+D{r}-D{r}` | 2 | `D152` |
| F | `=round(D{r}*E{r},0)` | 14 | `F5` |
| F | `=D{r}*E{r}` | 9 | `F81` |
| F | `=F{r}*0.1` | 7 | `F8` |
| F | `=F{r}+F{r}` | 7 | `F9` |
