# WIKISOFT

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `WIKISOFT`  
> **Vùng dữ liệu:** 134 dòng × 6 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C | D | E | F |
|---:|---|---|---|---|---|---|
| 1 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 3 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 4 | 1 | 211125606608 | 2024-11-01 | 0.08 |  |  |
| 5 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=D4*(1+5.26%)` |  |  |
| 6 | Chiết khấu (2%) |  |  | `=D5*2%` |  |  |
| 7 | Thành tiền |  |  | 0.082 | 25463 | `=D7*E7` |
| 8 | Thuế GTGT (10%) |  |  |  |  | `=round(F7*10%,0)` |
| 9 | Tổng số tiền phải thanh toán |  |  |  |  | `=F7+F8` |
| 15 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 17 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 18 | 1 | 211125606608 | 2025-11-01 | 13.78 |  |  |
| 19 | Hỗ trợ chi phí |  |  | 3.547 |  |  |
| 20 | Số tiền còn lại |  |  | `=D18-D19` |  |  |
| 21 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=D20*(1+5.26%)` |  |  |
| 22 | Chiết khấu (2%) |  |  | `=D21*2%` |  |  |
| 23 | Thành tiền |  |  | `=D21-D22` | 26412 | `=D23*E23` |
| 24 | Thuế GTGT (10%) |  |  |  |  | `=round(F23*10%,0)` |
| 25 | Tổng số tiền phải thanh toán |  |  |  |  | `=F23+F24` |
| 31 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 33 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 34 | 1 | 211125606608 | 2025-12-01 | 15.96 |  |  |
| 35 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D34*(1+5.26%)),2)` |  |  |
| 36 | Chiết khấu (2%) |  |  | `=round(D35*2%,2)` |  |  |
| 37 | Thành tiền |  |  | `=D35-D36` | 26377 | `=D37*E37` |
| 38 | Thuế GTGT (10%) |  |  |  |  | `=round(F37*10%,0)` |
| 39 | Tổng số tiền phải thanh toán |  |  |  |  | `=F37+F38` |
| 45 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 47 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 48 | 1 | 211125606608 | 2026-01-01 | 18.78 |  |  |
| 49 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D48*(1+5.26%)),2)` |  |  |
| 50 | Chiết khấu (2%) |  |  | `=round(D49*2%,2)` |  |  |
| 51 | Thành tiền |  |  | `=D49-D50` | 26145 | `=D51*E51` |
| 52 | Thuế GTGT (10%) |  |  |  |  | `=round(F51*10%,0)` |
| 53 | Tổng số tiền phải thanh toán |  |  |  |  | `=F51+F52` |
| 59 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 61 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 62 | 1 | 211125606608 | 2026-02-01 | 16.68 |  |  |
| 63 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D62*(1+5.26%)),2)` |  |  |
| 64 | Chiết khấu (2%) |  |  | `=round(D63*2%,2)` |  |  |
| 65 | Thành tiền |  |  | `=D63-D64` | 26240 | `=D65*E65` |
| 66 | Thuế GTGT (10%) |  |  |  |  | `=round(F65*10%,0)` |
| 67 | Tổng số tiền phải thanh toán |  |  |  |  | `=F65+F66` |
| 73 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 75 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 76 | 1 | 211125606608 | 2026-03-01 | 24.25 |  |  |
| 77 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D76*(1+5.26%)),2)` |  |  |
| 78 | Chiết khấu (2%) |  |  | `=round(D77*2%,2)` |  |  |
| 79 | Thành tiền |  |  | `=D77-D78` | 26357 | `=D79*E79` |
| 80 | Thuế GTGT (10%) |  |  |  |  | `=round(F79*10%,0)` |
| 81 | Tổng số tiền phải thanh toán |  |  |  |  | `=F79+F80` |
| 86 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 88 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 89 | 1 | 211125606608 | 2026-04-01 | 23.24 |  |  |
| 90 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D89*(1+5.26%)),2)` |  |  |
| 91 | Chiết khấu (2%) |  |  | `=round(D90*2%,2)` |  |  |
| 92 | Thành tiền |  |  | `=D90-D91` | 26368 | `=D92*E92` |
| 93 | Thuế GTGT (10%) |  |  |  |  | `=round(F92*10%,0)` |
| 94 | Tổng số tiền phải thanh toán |  |  |  |  | `=F92+F93` |
| 100 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 102 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 103 | 1 | 211125606608 | 2026-05-01 | 22.76 |  |  |
| 104 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D103*(1+5.26%)),2)` |  |  |
| 105 | Chiết khấu (2%) |  |  | `=round(D104*2%,2)` |  |  |
| 106 | Thành tiền |  |  | `=D104-D105` | 26395 | `=round(D106*E106,0)` |
| 107 | Thuế GTGT (10%) |  |  |  |  | `=round(F106*10%,0)` |
| 108 | Tổng số tiền phải thanh toán |  |  |  |  | `=F106+F107` |
| 113 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 115 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 116 | 1 | 211125606608 | 2026-06-01 | 32.58 |  |  |
| 117 | Giá trước chiết khấu ( bao gồm 5.26% phí dịch vụ) |  |  | `=round((D116*(1+5.26%)),2)` |  |  |
| 118 | Chiết khấu (2%) |  |  | `=round(D117*2%,2)` |  |  |
| 119 | Thành tiền |  |  | `=D117-D118` | 26466 | `=round(D119*E119,0)` |
| 120 | Thuế GTGT (10%) |  |  |  |  | `=round(F119*10%,0)` |
| 121 | Tổng số tiền phải thanh toán |  |  |  |  | `=F119+F120` |
| 126 | TỔNG HỢP CHI PHÍ AWS - WIKISOFT |  |  |  |  |  |
| 128 | STT | Tài khoản | Tháng | Lượng dùng thực tế (USD) | Tỷ giá | Thành tiền |
| 129 | 1 | 211125606608 | 2026-07-01 | 33.15 |  |  |
| 130 | Giá trước chiết khấu ( bao gồm 5.88% phí dịch vụ) |  |  | `=round((D129*(1+5.88%)),2)` |  |  |
| 131 | Chiết khấu (2%) |  |  | `=round(D130*2%,2)` |  |  |
| 132 | Thành tiền |  |  | `=D130-D131` | 26475 | `=round(D132*E132,0)` |
| 133 | Thuế GTGT (10%) |  |  |  |  | `=round(F132*10%,0)` |
| 134 | Tổng số tiền phải thanh toán |  |  |  |  | `=F132+F133` |

> *Đã bỏ qua 52 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (60 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| D | `=D{r}-D{r}` | 10 | `D20` |
| D | `=round(D{r}*2%,2)` | 8 | `D36` |
| D | `=round((D{r}*(1+5.26%)),2)` | 7 | `D35` |
| D | `=D{r}*(1+5.26%)` | 2 | `D5` |
| D | `=D{r}*2%` | 2 | `D6` |
| D | `=round((D{r}*(1+5.88%)),2)` | 1 | `D130` |
| F | `=round(F{r}*10%,0)` | 10 | `F8` |
| F | `=F{r}+F{r}` | 10 | `F9` |
| F | `=D{r}*E{r}` | 7 | `F7` |
| F | `=round(D{r}*E{r},0)` | 3 | `F106` |
