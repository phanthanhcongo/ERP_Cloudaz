# DELICHILL( DeliAlgo)

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `DELICHILL( DeliAlgo)`  
> **Vùng dữ liệu:** 158 dòng × 8 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | I |
|---:|---|---|---|---|---|---|---|---|
| 4 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 6 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 7 | 1 | 055436526493 | 2021-12-01 | 5.99 | 22920 | `=round(D7*E7,0)` |  |  |
| 8 | 2 | 785958125020 | 2021-12-01 | 82.58 | 22920 | `=round(D8*E8,0)` |  |  |
| 9 |  | Discount (3%) |  | `=sum(D7:D8)*3%` |  |  |  |  |
| 10 |  | Tổng cộng |  | `=sum(D7:D8)-D9` | 22920 | `=round(D10*E10,0)` |  |  |
| 11 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D10*0.08` |  | `=F10*0.08` |  |  |
| 12 |  | Tổng số tiền phải thanh toán |  | `=D10+D11` | 22920 | `=F10+F11` | 2126653.9199999999 |  |
| 16 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  | `=F12+F24+F37` |
| 18 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 19 | 1 | 055436526493 | 2022-01-01 | 17.27 | 22780 | `=round(D19*E19,0)` |  |  |
| 20 | 2 | 785958125020 | 2022-01-01 | 47.73 | 22780 | `=round(D20*E20,0)` |  |  |
| 21 |  | Discount (3%) |  | `=sum(D19:D20)*3%` |  |  |  |  |
| 22 |  | Tổng cộng |  | `=sum(D19:D20)-D21` | 22780 | `=round(D22*E22,0)` |  |  |
| 23 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D22*0.08` |  | `=F22*0.08` |  |  |
| 24 |  | Tổng số tiền phải thanh toán |  | `=D22+D23` | 22780 | `=F22+F23` | 1551181.3200000001 |  |
| 29 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 31 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 32 | 1 | 055436526493 | 2022-02-01 | 11.87 | 22950 | `=round(D32*E32,0)` |  |  |
| 33 | 2 | 785958125020 | 2022-02-01 | 49.56 | 22950 | `=round(D33*E33,0)` |  |  |
| 34 |  | Discount (3%) |  | `=sum(D32:D33)*3%` |  |  |  |  |
| 35 |  | Tổng cộng |  | `=sum(D32:D33)-D34` | 22950 | `=round(D35*E35,0)` |  |  |
| 36 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D35*0.08` |  | `=F35*0.08` |  |  |
| 37 |  | Tổng số tiền phải thanh toán |  | `=D35+D36` | 22950 | `=F35+F36` | 1476925.9199999999 |  |
| 40 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 42 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 43 | 1 | 055436526493 | 2022-03-01 | 13.07 | 22980 | `=round(D43*E43,0)` |  |  |
| 44 | 2 | 785958125020 | 2022-03-01 | 54.71 | 22980 | `=round(D44*E44,0)` |  |  |
| 45 |  | Discount (3%) |  | `=sum(D43:D44)*3%` |  |  |  |  |
| 46 |  | Tổng cộng |  | `=sum(D43:D44)-D45` | 22980 | `=round(D46*E46,0)` |  |  |
| 47 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D46*0.08` |  | `=F46*0.08` |  |  |
| 48 |  | Tổng số tiền phải thanh toán |  | `=D46+D47` | 22980 | `=F46+F47` | 1631725.5600000001 |  |
| 51 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 54 | 1 | 055436526493 | 2022-04-01 | 12.84 | 23095 | `=round(D54*E54,0)` |  |  |
| 55 | 2 | 785958125020 | 2022-04-01 | 53.06 | 23095 | `=round(D55*E55,0)` |  |  |
| 56 | 3 | 646923594995 | 2022-04-01 | 11.37 | 23095 | `=round(D56*E56,0)` |  |  |
| 57 |  | Discount (3%) |  | `=sum(D54:D56)*3%` |  |  |  |  |
| 58 |  | Tổng cộng |  | `=sum(D54:D56)-D57` | 23095 | `=round(D58*E58,0)` |  |  |
| 59 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D58*0.08` |  | `=F58*0.08` |  |  |
| 60 |  | Tổng số tiền phải thanh toán |  | `=D58+D59` | 23095 | `=F58+F59` | 1869495.1200000001 |  |
| 63 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 65 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 66 | 1 | 055436526493 | 2022-05-01 | 13.76 |  |  |  |  |
| 67 | 2 | 785958125020 | 2022-05-01 | 196.84 |  |  |  |  |
| 68 | 3 | 646923594995 | 2022-05-01 | 20.99 |  |  |  |  |
| 69 |  | Discount (3%) |  | `=sum(D66:D68)*3%` |  |  |  |  |
| 70 |  | Tổng cộng |  | `=sum(D66:D68)-D69` |  |  |  |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D70*0.08` |  |  |  |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=round(D70+D71,2)` | 23330 | `=D72*E72` | 5660091.3000000007 |  |
| 75 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 77 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 78 | 1 | 055436526493 | 2022-06-01 | 16.86 |  |  |  |  |
| 79 | 2 | 785958125020 | 2022-06-01 | 53.36 |  |  |  |  |
| 80 | 3 | 646923594995 | 2022-06-01 | 20.31 |  |  |  |  |
| 81 |  | Discount (3%) |  | `=sum(D78:D80)*3%` |  |  |  |  |
| 82 |  | Tổng cộng |  | `=sum(D78:D80)-D81` |  |  |  |  |
| 83 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D82*0.08` |  |  |  |  |
| 84 |  | Tổng số tiền phải thanh toán |  | `=round(D82+D83,2)` | 23415 | `=D84*E84` |  |  |
| 87 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 89 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 90 | 1 | 055436526493 | 2022-07-01 | 17.29 |  |  |  |  |
| 91 | 2 | 785958125020 | 2022-07-01 | 55.12 |  |  |  |  |
| 92 | 3 | 646923594995 | 2022-07-01 | 22.18 |  |  |  |  |
| 93 |  | Discount (3%) |  | `=sum(D90:D92)*3%` |  |  |  |  |
| 94 |  | Tổng cộng |  | `=sum(D90:D92)-D93` |  |  |  |  |
| 95 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D94*0.08` |  |  |  |  |
| 96 |  | Tổng số tiền phải thanh toán |  | `=round(D94+D95,2)` | 23480 | `=D96*E96` |  |  |
| 100 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 103 | 1 | 055436526493 | 2022-08-01 | 16.83 |  |  |  |  |
| 104 | 2 | 785958125020 | 1970-01-01 07:00:00 | 58.21 |  |  |  |  |
| 105 | 3 | 646923594995 | 1970-01-01 07:00:00 | 33.23 |  |  |  |  |
| 106 |  | Discount (3%) |  | `=sum(D103:D105)*3%` |  |  |  |  |
| 107 |  | Tổng cộng |  | `=sum(D103:D105)-D106` |  |  |  |  |
| 108 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D107*0.08` |  |  |  |  |
| 109 |  | Tổng số tiền phải thanh toán |  | `=round(D107+D108,2)` | 23600 | `=D109*E109` |  |  |
| 112 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 114 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 115 | 1 | 055436526493 | 2022-09-01 | 16.43 |  |  |  |  |
| 116 | 2 | 785958125020 | 1970-01-01 07:00:00 | 57.22 |  |  |  |  |
| 117 | 3 | 646923594995 | 1970-01-01 07:00:00 | 35.61 |  |  |  |  |
| 118 |  | Discount (3%) |  | `=sum(D115:D117)*3%` |  |  |  |  |
| 119 |  | Tổng cộng |  | `=sum(D115:D117)-D118` |  |  |  |  |
| 120 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D119*0.08` |  |  |  |  |
| 121 |  | Tổng số tiền phải thanh toán |  | `=round(D119+D120,2)` | 24010 | `=D121*E121` |  |  |
| 124 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 126 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 127 | 1 | 055436526493 | 2022-10-01 | 16.8918715026 |  |  |  |  |
| 128 | 2 | 785958125020 | 1970-01-01 07:00:00 | 59 |  |  |  |  |
| 129 | 3 | 646923594995 | 1970-01-01 07:00:00 | 36.7622588789 |  |  |  |  |
| 130 |  | Discount (3%) |  | `=sum(D127:D129)*3%` |  |  |  |  |
| 131 |  | Tổng cộng |  | `=sum(D127:D129)-D130` |  |  |  |  |
| 132 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D131*0.08` |  |  |  |  |
| 133 |  | Tổng số tiền phải thanh toán |  | `=round(D131+D132,2)` | 24877 | `=D133*E133` |  |  |
| 136 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 138 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 139 | 1 | 055436526493 | 2022-11-01 | 16.42 |  |  |  |  |
| 140 | 2 | 785958125020 | 1970-01-01 07:00:00 | 57.16 |  |  |  |  |
| 141 | 3 | 646923594995 | 1970-01-01 07:00:00 | 35.61 |  |  |  |  |
| 142 |  | Discount (3%) |  | `=sum(D139:D141)*3%` |  |  |  |  |
| 143 |  | Tổng cộng |  | `=sum(D139:D141)-D142` |  |  |  |  |
| 144 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D143*0.08` |  |  |  |  |
| 145 |  | Tổng số tiền phải thanh toán |  | `=round(D143+D144,2)` | 24795 | `=D145*E145` |  |  |
| 149 | TỔNG HỢP CHI PHÍ DELICHILL |  |  |  |  |  |  |  |
| 151 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |
| 152 | 1 | 055436526493 | 2022-12-01 | 16.89 |  |  |  |  |
| 153 | 2 | 785958125020 | 1970-01-01 07:00:00 | 58.91 |  |  |  |  |
| 154 | 3 | 646923594995 | 1970-01-01 07:00:00 | 36.77 |  |  |  |  |
| 155 |  | Discount (3%) |  | `=sum(D152:D154)*3%` |  |  |  |  |
| 156 |  | Tổng cộng |  | `=sum(D152:D154)-D155` |  |  |  |  |
| 157 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên CloudAZ đóng hộ) |  |  | `=D156*0.08` |  |  |  |  |
| 158 |  |  |  | `=round(D156+D157,2)` | 23760 | `=D158*E158` |  |  |

> *Đã bỏ qua 45 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (97 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=C{r}` | 10 | `C104` |
| D | `=sum(D{r}:D{r})*3%` | 13 | `D9` |
| D | `=sum(D{r}:D{r})-D{r}` | 13 | `D10` |
| D | `=D{r}*0.08` | 13 | `D11` |
| D | `=round(D{r}+D{r},2)` | 8 | `D72` |
| D | `=D{r}+D{r}` | 5 | `D12` |
| F | `=round(D{r}*E{r},0)` | 16 | `F7` |
| F | `=D{r}*E{r}` | 8 | `F72` |
| F | `=F{r}*0.08` | 5 | `F11` |
| F | `=F{r}+F{r}` | 5 | `F12` |
| I | `=F{r}+F{r}+F{r}` | 1 | `I16` |
