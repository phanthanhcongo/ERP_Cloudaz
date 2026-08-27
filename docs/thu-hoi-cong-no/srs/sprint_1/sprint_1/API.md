# CloudAZ-CM Backend API Documentation

> **Phạm vi file này:** API của **hệ thống CM** — nguồn dữ liệu cước mà ERP gọi sang để đồng bộ.
> API **nội bộ của ERP** (các endpoint `/api/v1/fin/debts/...` mà Frontend ERP gọi vào) được đặc tả riêng tại **[`ERP_API.md`](./ERP_API.md)**.

## Sync CM→ERP Summary

| API | Dùng | Mục đích |
|-----|------|----------|
| `POST /api/authen/login` | ✅ | Lấy JWT |
| `GET /api/contract/allNotPaging` | ✅ | Contracts master |
| `GET /api/contract/:id` | ✅ | Chi tiết HĐ (legal[].contract_code, sign_date) |
| `GET /api/customer/allNotPaging` | ✅ | Customers master |
| `GET /api/customer/:id` | ✅ | Chi tiết KH + address |
| `GET /api/common/allDataSelect` | ✅ | Legal entity + taxNumber |
| `GET /api/user/allNotPaging` | ✅ | User → sale_owner email |
| `GET /api/payment-request/all` | ✅ | DS ĐNTT (đã có `totalPrinciple` trực tiếp trong database & response). **Không truyền `productId`** — ERP lọc local theo `product.name = "GWS Standard"` |
| `GET /api/payment-request/presigned` | ✅ | Signed URL download file docx |

## Overview

- **Base URL (Dev):** `http://35.213.167.210:3000/api`
- **Frontend (Dev):** `http://35.213.167.210:4200/#/contract`
- **Frontend Payment (Dev):** `http://35.213.167.210:4200/#/payment-request`
- **Authentication:** JWT Bearer Token (Header: `Authorization: Bearer <token>`)
- **Content-Type:** `application/json`
- **Token Expiry:** 4 hours (14,400 seconds)
- **Response Format:**
  ```json
  {
    "status": <HTTP status code>,
    "result": <data | null>,
    "errors": "<error message | null>"
  }
  ```

---

## 1. Authentication

Vai trò: Đăng nhập, cấp JWT. Tất cả API khác đều yêu cầu Bearer token.

### POST `/api/authen/login` — ✅ Sync CM→ERP

Login — cấp JWT kèm user info + danh sách quyền.

- **Auth:** None
- **Test Credentials:** `System` / `Hello@123`
- **Request Body:**
  ```json
  {
    "username": "string (required)",
    "password": "string (required)"
  }
  ```
- **Success Response (200):**
  ```json
  {
    "status": 200,
    "result": {
      "user": {
        "name": "string",
        "username": "string",
        "isAdmin": "boolean",
        "isLead": "boolean"
      },
      "accessToken": "string (JWT)",
      "permissionIds": ["string"]
    }
  }
  ```

---

## 2. Contracts

Vai trò: Hợp đồng — schema động. User chỉ thấy contract mình phụ trách.

### GET `/api/contract/allNotPaging` — ✅ Sync CM→ERP

DS tất cả hợp đồng (không phân trang).

- **Auth:** Bearer Token

### GET `/api/contract/:id` — ✅ Sync CM→ERP

Chi tiết hợp đồng kèm cấu hình contract extension + thông tin đính kèm (files).

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contract ID |

---

## 3. Payment Requests

Vai trò: Yêu cầu thanh toán — được generate từ calculation engine ra file docx, upload S3.

### GET `/api/payment-request/all` — ✅ Sync CM→ERP

DS payment request phân trang + filter.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number (default: 1) |
  | `size` | number | Page size (default: 30) |
  | ~~`status`~~ | ~~string[]~~ | ❌ **ERP không dùng** — CM không có trường trạng thái để lọc "ĐNTT đã hoàn thành". ERP tự quản bằng cột `DEBTS.sync_status` |
  | `startDate` | string | Filter usageDate >= |
  | `endDate` | string | Filter usageDate <= |
  | `productId` | string | Filter by product ID |
  | `calculationId` | string | Filter by calculation ID |
  | `contractIds` | string[] | Filter by contract IDs (mảng) |
  | `createdStartDate` | string | Filter createdDate >= |
  | `createdEndDate` | string | Filter createdDate <= |

- **Success Response (200):**
  ```json
  {
    "status": 200,
    "result": {
      "docs": [
        {
          "contractIds": ["ObjectId"],
          "productId": "ObjectId",
          "contracts": [{ "deal_name": "String" }],
          "document": { "key": "String", "name": "String", "extension": "String" },
          "calculation": { "name": "String" },
          "product": { "name": "String" },
          "usageDate": "Date",
          "status": "Number",
          "createdDate": "Date",
          "totalPrinciple": "Number"
        }
      ]
    }
  }
  ```
- **Ghi chú sync:** Đã có trường `totalPrinciple` trả về trực tiếp trong response từ database của CM, không cần phải parse từ file docx.
- **Ghi chú lọc trạng thái:** ERP **không truyền `status`** — CM không có trường trạng thái để lọc "ĐNTT đã hoàn thành". ERP kéo về toàn bộ payment-request của kỳ cước, rồi tự quản bằng cột **`DEBTS.sync_status`** (`PENDING_REVIEW` → Kế toán xác nhận → `CONFIRMED` / `EXCLUDED`). Xem `ERP_API.md` mục *Đồng bộ dữ liệu CM* và Backlog BD-09 AC1b.
- **Ghi chú lọc sản phẩm:** ERP **không truyền `productId`** khi gọi endpoint này. Lý do: CM không còn expose endpoint tra cứu `productId` cho ERP. Thay vào đó ERP lấy toàn bộ payment-request theo kỳ cước rồi **lọc local theo `product.name`** (Sprint 1: `"GWS Standard"`). Xem `Sprint1_Backlog_GWS_Standard.md` — BD-09 AC1.

### GET `/api/payment-request/presigned` — ✅ Sync CM→ERP

Lấy presigned URL để xem/tải file từ S3.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `key` | string | S3 object key |

---

## 4. Customers

Vai trò: Khách hàng — dùng cho dropdown filter.

### GET `/api/customer/allNotPaging` — ✅ Sync CM→ERP

DS tất cả khách hàng.

- **Auth:** Bearer Token

### GET `/api/customer/:id` — ✅ Sync CM→ERP

Chi tiết khách hàng.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Customer ID |

---

## 5. Users

Vai trò: Người dùng — dùng cho dropdown filter.

### GET `/api/user/allNotPaging` — ✅ Sync CM→ERP

DS tất cả user.

- **Auth:** Bearer Token

---

## 6. Common

Vai trò: Load tất cả dropdown trong 1 call.

### GET `/api/common/allDataSelect` — ✅ Sync CM→ERP

Customer, product, user, contract, calculation, legal entity, industry.

- **Auth:** Bearer Token

---

## 7. Sync CM→ERP Summary

| API | Dùng sync | Mục đích |
|-----|-----------|----------|
| `POST /api/authen/login` | ✅ | Lấy JWT |
| `GET /api/contract/allNotPaging` | ✅ | Contracts master (id, customer_id, deal_name, legal[]) |
| `GET /api/contract/:id` | ✅ | Chi tiết HĐ (legal[].contract_code, sign_date, legalEntityId) |
| `GET /api/customer/allNotPaging` | ✅ | Customers master (id, name) |
| `GET /api/customer/:id` | ✅ | Chi tiết KH + address (từ legalEntity.address) |
| `GET /api/common/allDataSelect` | ✅ | Legal entity + taxNumber |
| `GET /api/user/allNotPaging` | ✅ | User list → map sale_owner email |
| `GET /api/payment-request/all` | ✅ | DS ĐNTT (totalPrinciple, billing_cycle, productId, contractIds, document.key) |
| `GET /api/payment-request/presigned` | ✅ | Signed URL để download file docx |

## Permission Reference

| Group | View |
|-------|------|
| Contract | `contract_view` |
| Report | `report_view` |

Admin (`isAdmin: true`) bypass all permission checks.

---

## Calculation Engines

| Engine | Description |
|--------|-------------|
| `calculateAws` | AWS cost calculation |
| `calculateAwsService` | AWS Service cost calculation |
| `calculateGcp` | Google Cloud Platform calculation |
| `calculateGmp` | Google Maps Platform calculation |
| `calculateGwsStandard` | Google Workspace Standard calculation — **đây chính là sản phẩm "GWS Standard" (trước đây tài liệu gọi là "GWS Committed"), phạm vi Sprint 1**. `product.name` trả về là `"GWS Standard"` |
| `calculateGwsFlex` | Google Workspace Flex calculation |

---

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad request / validation error |
| 401 | Unauthorized (missing or invalid token) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Resource not found |
| 500 | Internal server error |

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js 4.x |
| Database | MongoDB (Mongoose ODM) |
| Authentication | JWT (jsonwebtoken) |
| Password Hashing | bcrypt |
| File Storage | AWS S3 |
| Cloud Billing | AWS Cost Explorer, Google Cloud BigQuery |
| Scheduling | node-cron |
| Logging | Winston |
| Document Generation | docxtemplater, xlsx-template |
| Email | nodemailer |
| Integrations | HubSpot, Lark Suite, Google Workspace APIs |
