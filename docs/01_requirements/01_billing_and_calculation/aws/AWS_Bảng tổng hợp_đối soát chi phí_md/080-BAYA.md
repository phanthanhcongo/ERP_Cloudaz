# BAYA

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `BAYA`  
> **Vùng dữ liệu:** 151 dòng × 14 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F | G | H | I | J | K | L | M | O |
|---:|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 4 | 1 | 543869970866 | 2021-03-01 | 1398.12 | 23165 | `=D4*E4` |  |  |  |  |  |  |  |  |
| 5 |  | Tổng cộng |  | `=sum(D4)` |  | `=sum(F4)` |  |  |  |  |  |  |  |  |
| 6 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D5*0.06` |  | `=F5*0.06` |  |  | `=D4+D28` |  |  |  |  |  |
| 7 |  | Tổng số tiền phải thanh toán |  | `=D5+D6` | 23165 | `=F5+F6` |  |  |  |  |  |  |  |  |
| 11 | Số Tài khoản  | Tên dịch vụ  |  |  | Chi phí  | Tỷ giá | Thành tiền  |  |  |  |  |  |  |  |
| 12 | 671343704278 | Data transfer  |  |  | `=2.76+71.97` | 23145 | `=round(E12*F12,0)` |  |  |  |  |  |  |  |
| 13 |  | AmazonCloudwatch  |  |  | `=0.67+12.33` | 23145 | `=round(E13*F13,0)` |  |  |  |  |  |  |  |
| 14 |  | Amazon Relational Database Services |  |  | `=11.07+210.16` | 23145 | `=round(E14*F14,0)` |  |  |  |  |  |  |  |
| 15 |  | Amazon ElastiCache |  |  | `=4.05+77.38` | 23145 | `=round(E15*F15,0)` |  |  |  |  |  |  |  |
| 16 |  | Amazon Lightsail |  |  | `=0.19+3.5` | 23145 | `=round(E16*F16,0)` |  |  |  |  |  |  |  |
| 17 |  | Amazon Elastic Compute Cloud |  |  | `=46.71+876.49` | 23145 | `=round(E17*F17,0)` |  |  |  |  |  |  |  |
| 18 |  | AWS Support Business Plan  |  |  | 100 | 23145 | `=round(E18*F18,0)` |  |  |  |  |  |  |  |
| 19 | Chi phí ước tính |  |  |  | `=SUM(E12:E18)` |  | `=sum(G12:G18)` |  |  |  |  |  |  |  |
| 20 | Thuế, phí 6% |  |  |  | `=E19*6%` |  | `=G19*6%` |  |  |  |  |  |  |  |
| 21 | Tổng số tiền phải thanh toán |  |  |  | `=E19+E20` | 23145 | `=G19+G20` |  |  |  |  |  |  |  |
| 25 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |  |  |  |  |  |  |  |
| 28 | 1 | 671343704278 | 2021-06-01 | 1334.4 | 23130 | `=D28*E28` |  |  |  |  |  |  |  |  |
| 29 |  | Tổng cộng |  | `=sum(D28)` |  | `=sum(F28)` |  |  |  |  |  |  |  |  |
| 30 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D29*0.06` |  | `=F29*0.06` |  |  |  |  |  |  |  |  |
| 31 |  | Tổng số tiền phải thanh toán |  | `=D29+D30` | 23130 | `=F29+F30` |  |  |  |  |  |  |  |  |
| 35 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 37 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 38 | 1 | 671343704278 | 2021-07-01 | 1290.6 | 23050 | `=round(D38*E38,0)` |  | 1 | 543869970866 | 2021-07-01 | 39.31 | 23050 | `=K38*L38` |  |
| 39 |  | Support |  | 100 | 23050 | `=round(D39*E39,0)` |  |  | Support |  | 100 | 23050 | `=K39*L39` |  |
| 40 |  | Tổng cộng |  | `=sum(D38:D39)` |  | `=sum(F38:F39)` |  |  | Tổng cộng |  | `=sum(K38:K39)` |  | `=sum(M38:M39)` |  |
| 41 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D40*0.06` |  | `=F40*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K40*0.06` |  | `=M40*0.06` |  |
| 42 |  | Tổng số tiền phải thanh toán |  | `=D40+D41` | 23050 | `=F40+F41` |  |  | Tổng số tiền phải thanh toán |  | `=K40+K41` | 23050 | `=M40+M41` |  |
| 47 |  |  |  |  |  |  | `=F42+M42` |  |  |  |  |  |  |  |
| 51 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 53 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 54 | 1 | 671343704278 | 2021-08-01 | 1047.09 | 22880 | `=round(D54*E54,0)` |  | 1 | 543869970866 | 2021-08-01 | `=1820.91+1187.3` | 22880 | `=K54*L54` |  |
| 55 |  | Support |  | 100 | 22880 | `=round(D55*E55,0)` |  |  | Support |  | 100 | 22880 | `=K55*L55` |  |
| 56 |  | Tổng cộng |  | `=sum(D54:D55)` |  | `=sum(F54:F55)` |  |  | Tổng cộng |  | `=sum(K54:K55)` |  | `=sum(M54:M55)` |  |
| 57 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D56*0.06` |  | `=F56*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K56*0.06` |  | `=M56*0.06` |  |
| 58 |  | Tổng số tiền phải thanh toán |  | `=D56+D57` | 22880 | `=F56+F57` |  |  | Tổng số tiền phải thanh toán |  | `=K56+K57` | 22880 | `=M56+M57` |  |
| 61 |  |  |  |  |  |  | 103202939 |  |  |  |  |  |  |  |
| 62 |  |  |  |  | `=200*22880*106%` |  | `=G61-E62` |  |  |  |  |  |  |  |
| 63 |  |  |  |  | `=E62/2` |  |  |  |  |  |  |  |  |  |
| 65 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 67 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 68 | 1 | 671343704278 | 2021-09-01 | 871.67 | 22840 | `=round(D68*E68,0)` |  | 1 | 543869970866 | 2021-09-01 | 2928.67 | 22840 | `=K68*L68` |  |
| 69 |  | Support |  | 100 | 22840 | `=round(D69*E69,0)` |  |  | Support |  | 100 | 22840 | `=K69*L69` |  |
| 70 |  | Tổng cộng |  | `=sum(D68:D69)` |  | `=sum(F68:F69)` |  |  | Tổng cộng |  | `=sum(K68:K69)` |  | `=sum(M68:M69)` |  |
| 71 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D70*0.06` |  | `=F70*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K70*0.06` |  | `=M70*0.06` |  |
| 72 |  | Tổng số tiền phải thanh toán |  | `=D70+D71` | 22840 | `=F70+F71` |  |  | Tổng số tiền phải thanh toán |  | `=K70+K71` | 22840 | `=M70+M71` |  |
| 74 |  |  |  |  |  | `=F72+M72` |  |  |  |  |  |  |  |  |
| 75 |  |  |  | `=D69*E69*106%` |  | 92007752 |  |  |  |  |  |  |  |  |
| 77 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 79 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 80 | 1 | 671343704278 | 2021-10-01 | 736.19 | 22850 | `=round(D80*E80,0)` |  | 1 | 543869970866 | 2021-10-01 | 2570.91 | 22850 | `=round(K80*L80,0)` |  |
| 81 |  | Support |  | 100 | 22850 | `=round(D81*E81,0)` |  |  | Support |  | 100 | 22850 | `=round(K81*L81,0)` |  |
| 82 |  | Tổng cộng |  | `=sum(D80:D81)` |  | `=sum(F80:F81)` |  |  | Tổng cộng |  | `=sum(K80:K81)` |  | `=sum(M80:M81)` |  |
| 83 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D82*0.06` |  | `=F82*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K82*0.06` |  | `=M82*0.06` |  |
| 84 |  | Tổng số tiền phải thanh toán |  | `=D82+D83` | 22850 | `=F82+F83` |  |  | Tổng số tiền phải thanh toán |  | `=K82+K83` | 22850 | `=M82+M83` |  |
| 88 |  |  |  |  |  | `=F84+M84` |  |  |  |  |  |  |  |  |
| 92 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 94 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 95 | 1 | 671343704278 | 2021-11-01 | 2633.36 | 22800 | `=round(D95*E95,0)` |  | 1 | 543869970866 | 2021-11-01 |  | 22800 | `=round(K95*L95,0)` |  |
| 96 |  | Support |  | 100 | 22800 | `=round(D96*E96,0)` |  |  | Support |  | 100 | 22800 | `=round(K96*L96,0)` |  |
| 97 |  | Tổng cộng |  | `=sum(D95:D96)` |  | `=sum(F95:F96)` |  |  | Tổng cộng |  | `=sum(K95:K96)` |  | `=sum(M95:M96)` |  |
| 98 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D97*0.06` |  | `=F97*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K97*0.06` |  | `=M97*0.06` |  |
| 99 |  | Tổng số tiền phải thanh toán |  | `=D97+D98` | 22800 | `=F97+F98` |  |  | Tổng số tiền phải thanh toán |  | `=K97+K98` | 22800 | `=M97+M98` |  |
| 102 |  |  |  |  |  |  | `=F99+M99` |  |  |  |  |  |  |  |
| 105 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 107 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 108 | 1 | 671343704278 | 2021-12-01 | 4197.9 | 22920 | `=round(D108*E108,0)` |  | 1 | 543869970866 | 2021-12-01 | 2723.21 | 22920 | `=round(K108*L108,0)` |  |
| 109 |  | Support |  | 100 | 22920 | `=round(D109*E109,0)` |  |  | Support |  | 100 | 22920 | `=round(K109*L109,0)` |  |
| 110 |  | Tổng cộng |  | `=sum(D108:D109)` |  | `=sum(F108:F109)` |  |  | Tổng cộng |  | `=sum(K108:K109)` |  | `=sum(M108:M109)` |  |
| 111 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D110*0.06` |  | `=F110*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K110*0.06` |  | `=M110*0.06` |  |
| 112 |  | Tổng số tiền phải thanh toán |  | `=D110+D111` | 22920 | `=F110+F111` |  |  | Tổng số tiền phải thanh toán |  | `=K110+K111` | 22920 | `=M110+M111` |  |
| 115 |  |  |  |  |  |  | `=F112+M112` |  |  |  |  |  |  |  |
| 117 | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |  |  |  |  |  |  |
| 119 | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  | STT | Tài khoản | Tháng | Billing AWS (USD) | Tỷ giá | Thành tiền |  |
| 120 | 1 | 671343704278 | 2022-01-01 | 1905.88 | 22780 | `=round(D120*E120,0)` |  | 1 | 543869970866 | 2022-01-01 | 2751.85 | 22780 | `=round(K120*L120,0)` |  |
| 121 |  | Support |  | 100 | 22780 | `=round(D121*E121,0)` |  |  | Support |  | 100 | 22780 | `=round(K121*L121,0)` |  |
| 122 |  | Tổng cộng |  | `=sum(D120:D121)` |  | `=sum(F120:F121)` |  |  | Tổng cộng |  | `=sum(K120:K121)` |  | `=sum(M120:M121)` |  |
| 123 | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=D122*0.06` |  | `=F122*0.06` |  | Thuế nhà thầu, thuế TNDN, phí chênh lệch tỷ giá..(Bên Cloudaz đóng hộ) |  |  | `=K122*0.06` |  | `=M122*0.06` |  |
| 124 |  |  |  | `=D122+D123` | 22780 | `=F122+F123` |  |  |  |  | `=K122+K123` | 22780 | `=M122+M123` |  |
| 126 |  |  |  |  |  |  | `=F124+M124` |  |  |  |  |  |  |  |
| 151 |  |  |  |  |  |  |  |  |  |  |  |  |  | TỔNG HỢP CHI PHÍ BAYA |

> *Đã bỏ qua 68 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (157 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}*0.06` | 9 | `D6` |
| D | `=D{r}+D{r}` | 9 | `D7` |
| D | `=sum(D{r}:D{r})` | 7 | `D40` |
| D | `=sum(D{r})` | 2 | `D5` |
| D | `=D{r}*E{r}*106%` | 1 | `D75` |
| E | `=2.76+71.97` | 1 | `E12` |
| E | `=0.67+12.33` | 1 | `E13` |
| E | `=11.07+210.16` | 1 | `E14` |
| E | `=4.05+77.38` | 1 | `E15` |
| E | `=0.19+3.5` | 1 | `E16` |
| E | `=46.71+876.49` | 1 | `E17` |
| E | `=SUM(E{r}:E{r})` | 1 | `E19` |
| E | `=E{r}*6%` | 1 | `E20` |
| E | `=E{r}+E{r}` | 1 | `E21` |
| E | `=200*22880*106%` | 1 | `E62` |
| E | `=E{r}/2` | 1 | `E63` |
| F | `=round(D{r}*E{r},0)` | 14 | `F38` |
| F | `=F{r}*0.06` | 9 | `F6` |
| F | `=F{r}+F{r}` | 9 | `F7` |
| F | `=sum(F{r}:F{r})` | 7 | `F40` |
| F | `=D{r}*E{r}` | 2 | `F4` |
| F | `=sum(F{r})` | 2 | `F5` |
| F | `=F{r}+M{r}` | 2 | `F74` |
| G | `=round(E{r}*F{r},0)` | 7 | `G12` |
| G | `=F{r}+M{r}` | 4 | `G47` |
| G | `=sum(G{r}:G{r})` | 1 | `G19` |
| G | `=G{r}*6%` | 1 | `G20` |
| G | `=G{r}+G{r}` | 1 | `G21` |
| G | `=G{r}-E{r}` | 1 | `G62` |
| I | `=D{r}+D{r}` | 1 | `I6` |
| K | `=sum(K{r}:K{r})` | 7 | `K40` |
| K | `=K{r}*0.06` | 7 | `K41` |
| K | `=K{r}+K{r}` | 7 | `K42` |
| K | `=1820.91+1187.3` | 1 | `K54` |
| M | `=round(K{r}*L{r},0)` | 8 | `M80` |
| M | `=sum(M{r}:M{r})` | 7 | `M40` |
| M | `=M{r}*0.06` | 7 | `M41` |
| M | `=M{r}+M{r}` | 7 | `M42` |
| M | `=K{r}*L{r}` | 6 | `M38` |
