# Copy of MCREDIT_OSAM mẫu mới

> **Workbook:** `AWS_Bảng tổng hợp_đối soát chi phí.xlsx`  
> **Sheet:** `Copy of MCREDIT_OSAM mẫu mới`  
> **Vùng dữ liệu:** 81 dòng × 3 cột có dữ liệu  
> **Chuyển đổi:** openpyxl (offline) — 2026-08-28  
> Cột đầu là **số dòng thật trong Excel**, tiêu đề cột là **chữ cái cột Excel** — mỗi ô truy ngược được về địa chỉ gốc (ví dụ `C12`).

---

## Dữ liệu

| _dòng_ | A | B | C |
|---:|---|---|---|
| 1 |  |  | CÔNG TY TNHH QUỐC TẾ OSAM<br> <br>Địa chỉ: Tầng 2, Tòa nhà Trường Thịnh, <br>Số 1 Phùng Chí Kiên,<br>Quận Cầu Giấy, Thành phố Hà Nội<br> <br>Điện thoại: 024 2216 4848<br> <br>W: osam.io |
| 4 |    BIÊN BẢN ĐỐI SOÁT CHI PHÍ TẠM TÍNH MCREDIT (769776124207) THÁNG 09/2025 |  |  |
| 5 | STT | Service Name | Billing AWS (Sử dụng trong kỳ) |
| 6 | 1 | Savings Plans for  Compute usage | 24780.82 |
| 7 | 2 | Relational Database Service | 20002.44 |
| 8 | 3 | EC2-Instances | 13387.08 |
| 9 | 4 | EC2-Other | 12615.36 |
| 10 | 5 | Backup | 12150.37 |
| 11 | 6 | CloudWatch | 10335.49 |
| 12 | 7 | S3 | 8911.18 |
| 13 | 8 | VPC | 7282.68 |
| 14 | 9 | MongoDB Atlas on  - Contract with Usage | 7166 |
| 15 | 10 | DMS | 3873.89 |
| 16 | 11 | Shield | 3141.62 |
| 17 | 12 | Elastic Load Balancing | 2816.56 |
| 18 | 13 | Elastic Container Service for Kubernetes | 1963.87 |
| 19 | 14 | Glue | 1828.74 |
| 20 | 15 | Redshift | 1763.73 |
| 21 | 16 | ElastiCache | 1283.89 |
| 22 | 17 | API Gateway | 1075.29 |
| 23 | 18 | Managed Streaming for Apache Kafka | 1055.72 |
| 24 | 19 | GuardDuty | 1008.72 |
| 25 | 20 | CloudFront | 667.91 |
| 26 | 21 | MQ | 591.98 |
| 27 | 22 | Key Management Service | 527.4 |
| 28 | 23 | EC2 Container Registry (ECR) | 502.95 |
| 29 | 24 | OpenSearch Service | 450.11 |
| 30 | 25 | Security Hub | 409.13 |
| 31 | 26 | Neptune | 402.78 |
| 32 | 27 | WAF | 402.77 |
| 33 | 28 | Q | 378.42 |
| 34 | 29 | Lambda | 291.49 |
| 35 | 30 | QuickSight | 270.48 |
| 36 | 31 | Config | 269.75 |
| 37 | 32 | Secrets Manager | 248.9 |
| 38 | 33 | Kinesis Firehose | 129.38 |
| 39 | 34 | Directory Service | 114.72 |
| 40 | 35 | Direct Connect | 114.72 |
| 41 | 36 | Step Functions | 100.8 |
| 42 | 37 | Kinesis | 94.64 |
| 43 | 38 | SQS | 94.33 |
| 44 | 39 | Global Accelerator | 91.6 |
| 45 | 40 | DynamoDB | 82.17 |
| 46 | 41 | Support (Developer) | 53.55 |
| 47 | 42 | Route 53 | 52.05 |
| 48 | 43 | X-Ray | 12.62 |
| 49 | 44 | Athena | 12.5 |
| 50 | 45 | Elastic File System | 10.64 |
| 51 | 46 | CloudWatch Events | 10.47 |
| 52 | 47 | Storage Gateway | 7.06 |
| 53 | 48 | DataSync | 5.26 |
| 54 | 49 | SNS | 4.85 |
| 55 | 50 | CloudTrail | 1.98 |
| 56 | 51 | DocumentDB (with MongoDB compatibility) | 0.42 |
| 57 | 52 | Inspector | 0.37 |
| 58 | 53 | Budgets | 0.04 |
| 59 | 54 | Cost Explorer | 0.01 |
| 60 | 55 | Systems Manager | 0 |
| 61 | 56 | Location Service | 0 |
| 62 | 57 | CloudShell | 0 |
| 63 | 58 | Glacier | 0 |
| 64 | 59 | Certificate Manager | 0 |
| 65 | 60 | Service Catalog | 0 |
| 66 | 61 | Elastic Container Registry Public | 0 |
| 67 |  | Total costs | `=sum(C6:C66)` |
| 68 |  | Credit WAPP của Mcredit | 0 |
| 69 |  | Tổng cộng | `=C67-C68` |
| 70 |  | Phí dịch vụ 10% | `=round(C69*10%,2)` |
| 71 |  | Chiết khấu 6.5% | `=ROUND(C69*6.5%,2)` |
| 72 |  | Tổng thành tiền | `=C69+C70-C71` |
| 73 |  | Tỷ giá VCB tại ngày 01/10/2025 | 26446 |
| 74 |  | Tổng thành tiền (VND) | `=round(C72*C73,0)` |
| 75 |  | Thuế GTGT 10% | `=round(C74*10%,0)` |
| 76 |  | Tổng số tiền phải thanh toán (VND) | `=C74+C75` |
| 78 |  |  | Hà Nội, ngày 01 tháng 10 năm 2025 |
| 79 |     CÔNG TY TÀI CHÍNH TÍN DỤNG TIÊU DÙNG <br>TRÁCH NHIỆM HỮU HẠN MB SHINSEI |  | CÔNG TY TRÁCH NHIỆM HỮU HẠN QUỐC TẾ OSAM |
| 80 |  | ĐẠI DIỆN | ĐẠI DIỆN |
| 81 |  | (ký và ghi rõ họ tên) | (ký và ghi rõ họ tên) |

> *Đã bỏ qua 3 dòng trống hoàn toàn (số dòng ở cột đầu vẫn theo Excel gốc).*

---

## Công thức (8 ô, gom theo mẫu)

> Số dòng trong tham chiếu được chuẩn hóa thành `{r}` để gom các ô cùng một mẫu công thức.

| Cột | Mẫu công thức | Số ô | Ví dụ |
|---|---|---:|---|
| C | `=sum(C{r}:C{r})` | 1 | `C67` |
| C | `=C{r}-C{r}` | 1 | `C69` |
| C | `=round(C{r}*10%,2)` | 1 | `C70` |
| C | `=ROUND(C{r}*6.5%,2)` | 1 | `C71` |
| C | `=C{r}+C{r}-C{r}` | 1 | `C72` |
| C | `=round(C{r}*C{r},0)` | 1 | `C74` |
| C | `=round(C{r}*10%,0)` | 1 | `C75` |
| C | `=C{r}+C{r}` | 1 | `C76` |
