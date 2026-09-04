# CloudAZ ERP System - Multi-Cloud Billing & Debt Collection

Hệ thống Quản trị Doanh nghiệp ERP CloudAZ phục vụ tự động hóa Quy trình Tính cước Đa tầng đám mây (Multi-Cloud Billing Calculation), Quản lý Công nợ (Debt Collection), Tự động hóa Hóa đơn (MISA meInvoice Integration), và Tích hợp Đa nền tảng (AWS, GCP, DigitalOcean, Google Workspace, HubSpot, LarkSuite).

---

## 📌 Cấu trúc Dự án (Repository Layout)

Dự án được tổ chức thành các phân vùng chính như sau:

```text
ERP_Cloudaz/
├── docs/                             # Tài liệu nghiệp vụ & Thiết kế kỹ thuật hệ thống
│   ├── 01_requirements/              # BRD chính thức & Specification theo Vendor
│   │   ├── billing_and_calculation/  # Quy trình tính cước AWS, GCP, DO, GWS Flex/Standard...
│   │   ├── debt_collection/          # BRD Thu hồi công nợ, Đối soát & Tích hợp MISA meInvoice
│   │   └── Product_Backlog_Master.md # Backlog tổng thể toàn hệ thống
│   ├── 02_sprints/                   # Tài nguyên & Thiết kế kỹ thuật thực thi theo Sprint
│   │   └── sprint_01_gws_standard/   # Database Schema, API Spec, Wireframes & Templates
│   ├── 03_raw_inputs_and_qa/         # Biên bản phỏng vấn, Q&A nghiệp vụ Kế toán & Billing
│   └── 04_references_and_legacy/     # Tài liệu tham khảo & Hệ thống CM cũ
│
├── ERP_ClouAZ_Project/               # Mã nguồn ứng dụng chính (Source Code)
│   ├── CloudAZ-CM-Backend/           # Node.js / Express / MongoDB / BigQuery / AWS Cost Explorer Backend
│   ├── CloudAZ-CM-Frontend/          # Angular Web Frontend Application
│   └── Projects/                     # Dự án mở rộng & GSD Framework (Go ERP, GSD Framework, Knowledge)
│
├── Ba_skills/                        # Quy chuẩn & Hướng dẫn nghiệp vụ BA (Business Analysis)
└── CLAUDE.md                         # Quy tắc làm việc & nguyên tắc phát triển dự án
```

---

## 🛠 Tech Stack & Kiến trúc Hệ thống

### Backend (`ERP_ClouAZ_Project/CloudAZ-CM-Backend`)
- **Runtime & Framework**: Node.js, Express.js
- **Database**: MongoDB (Mongoose), Snowflake Big Data Analytics
- **Cloud SDKs & Third-Party APIs**:
  - AWS SDK (`@aws-sdk/client-cost-explorer`)
  - Google Cloud SDK (`@google-cloud/bigquery`, `googleapis`)
  - CRM & Workflows: HubSpot API (`@hubspot/api-client`), Lark Suite (`@larksuiteoapi/node-sdk`)
- **Utility & Data Processing**: Polars (`nodejs-polars`), Excel Engine (`xlsx`, `xlsx-template`, `docxtemplater`, `pizzip`), `node-cron`, `winston`

### Frontend (`ERP_ClouAZ_Project/CloudAZ-CM-Frontend`)
- **Framework**: Angular
- **Styling & UI**: Modern Angular Component architecture
- **Build Tooling**: Angular CLI, TypeScript, Karma/Jasmine

---

## 🚀 Hướng dẫn Chạy Dự án (Getting Started)

### 1. Cấu hình Backend
```bash
cd ERP_ClouAZ_Project/CloudAZ-CM-Backend

# Cài đặt thư viện
npm install

# Khởi chạy chế độ Development
npm run start:dev

# Hoặc khởi chạy trực tiếp với Nodemon
npm start
```

### 2. Cấu hình Frontend
```bash
cd ERP_ClouAZ_Project/CloudAZ-CM-Frontend

# Cài đặt thư viện
npm install

# Khởi chạy Web Server
npm start
```

---

## 📖 Hướng dẫn Tra cứu Tài liệu

- **Yêu cầu nghiệp vụ tính cước**: Xem tại [docs/01_requirements/billing_and_calculation](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/01_requirements/billing_and_calculation).
- **Yêu cầu nghiệp vụ Thu hồi công nợ & MISA**: Xem tại [docs/01_requirements/debt_collection](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/01_requirements/debt_collection).
- **Chi tiết kỹ thuật Sprint 1 (GWS Standard)**: Xem tại [docs/02_sprints/sprint_01_gws_standard](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/02_sprints/sprint_01_gws_standard).
- **Q&A & Biên bản phỏng vấn**: Xem tại [docs/03_raw_inputs_and_qa](file:///c:/Users/thanh/Desktop/ERP_Cloudaz/docs/03_raw_inputs_and_qa).