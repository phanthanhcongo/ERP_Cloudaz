# CloudAZ-CM Backend API Documentation

## Overview

- **Base URL:** `http://<host>:3000/api`
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

All endpoints except `/api/authen/login` require a valid JWT token. Some endpoints additionally require specific permissions.

### POST `/api/authen/login`

Login to obtain an access token.

- **Auth:** None
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

### POST `/api/authen/changePassword`

Change the current user's password.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "oldPassword": "string (required)",
    "password": "string (required - new password)"
  }
  ```
- **Success Response (200):** `{ "status": 200, "result": "Success", "errors": null }`

---

## 2. Users

### GET `/api/user/allNotPaging`

Get all users without pagination.

- **Auth:** Bearer Token
- **Permissions:** None

### GET `/api/user/all`

Get paginated list of users.

- **Auth:** Bearer Token
- **Permissions:** `user_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number (default: 1) |
  | `size` | number | Page size (default: 10) |
  | `username` | string | Filter by username |
  | `status` | string | Filter by status |

### GET `/api/user/:id`

Get a single user by ID.

- **Auth:** Bearer Token
- **Permissions:** None
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | User ID |

### POST `/api/user`

Create a new user.

- **Auth:** Bearer Token
- **Permissions:** `user_create`
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "username": "string (required, unique)",
    "password": "string (required)",
    "departmentIds": ["string"],
    "isAdmin": "boolean",
    "status": "string",
    "inchargeOf": ["string"]
  }
  ```

### PUT `/api/user/:id`

Update an existing user.

- **Auth:** Bearer Token
- **Permissions:** `user_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | User ID |
- **Request Body:**
  ```json
  {
    "name": "string",
    "password": "string",
    "departmentIds": ["string"],
    "isAdmin": "boolean",
    "status": "string",
    "inchargeOf": ["string"]
  }
  ```

### DELETE `/api/user/:id`

Soft-delete a user.

- **Auth:** Bearer Token
- **Permissions:** `user_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | User ID |

---

## 3. Permissions

### GET `/api/permission/all`

Get all permissions.

- **Auth:** Bearer Token

### GET `/api/permission/:id`

Get a single permission by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Permission ID |

### POST `/api/permission`

Create a new permission.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "code": "string (required, unique)",
    "group": "string"
  }
  ```

### PUT `/api/permission/:id`

Update a permission.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Permission ID |

### DELETE `/api/permission/:id`

Delete a permission.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Permission ID |

---

## 4. Departments

### GET `/api/department/selection`

Get department selection list (for dropdowns).

- **Auth:** Bearer Token

### GET `/api/department/allNotPaging`

Get all departments without pagination.

- **Auth:** Bearer Token

### GET `/api/department/all`

Get paginated list of departments.

- **Auth:** Bearer Token
- **Permissions:** `department_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/department/:id`

Get a single department by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Department ID |

### POST `/api/department`

Create a new department.

- **Auth:** Bearer Token
- **Permissions:** `department_create`
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "abbreviationName": "string",
    "permissionIds": ["string"],
    "isSale": "boolean",
    "uploadFile": "boolean"
  }
  ```

### PUT `/api/department/:id`

Update a department.

- **Auth:** Bearer Token
- **Permissions:** `department_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Department ID |

### DELETE `/api/department/:id`

Delete a department.

- **Auth:** Bearer Token
- **Permissions:** `department_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Department ID |

---

## 5. Products

### GET `/api/product/selection`

Get product selection list (for dropdowns).

- **Auth:** Bearer Token

### GET `/api/product/allNotPaging`

Get all products without pagination.

- **Auth:** Bearer Token

### GET `/api/product/all`

Get paginated list of products.

- **Auth:** Bearer Token
- **Permissions:** `product_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/product/:id`

Get a single product by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Product ID |

### POST `/api/product`

Create a new product.

- **Auth:** Bearer Token
- **Permissions:** `product_create`
- **Request Body:**
  ```json
  {
    "name": "string (required, unique)"
  }
  ```

### PUT `/api/product/:id`

Update a product.

- **Auth:** Bearer Token
- **Permissions:** `product_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Product ID |

### DELETE `/api/product/:id`

Delete a product.

- **Auth:** Bearer Token
- **Permissions:** `product_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Product ID |

---

## 6. Customers

### GET `/api/customer/selection`

Get customer selection list (for dropdowns).

- **Auth:** Bearer Token

### GET `/api/customer/selectionCustomerNoContact`

Get customers that have no contacts.

- **Auth:** Bearer Token

### GET `/api/customer/selectionCustomer/:productId`

Get customer selection filtered by product.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `productId` | string | Product ID |

### GET `/api/customer/allNotPaging`

Get all customers without pagination.

- **Auth:** Bearer Token

### GET `/api/customer/all`

Get paginated list of customers.

- **Auth:** Bearer Token
- **Permissions:** `customer_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/customer/:id`

Get a single customer by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Customer ID |

### POST `/api/customer`

Create a new customer.

- **Auth:** Bearer Token
- **Permissions:** `customer_create`
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "company_domain": "string",
    "company_city": "string",
    "company_hs_id": "string",
    "industryIds": ["string"],
    "note": "string"
  }
  ```

### PUT `/api/customer/:id`

Update a customer.

- **Auth:** Bearer Token
- **Permissions:** `customer_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Customer ID |

### DELETE `/api/customer/:id`

Delete a customer.

- **Auth:** Bearer Token
- **Permissions:** `customer_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Customer ID |

---

## 7. Customer Contacts

### GET `/api/customer-contact/selection`

Get contact selection list (for dropdowns).

- **Auth:** Bearer Token

### GET `/api/customer-contact/allNotPaging`

Get all contacts without pagination.

- **Auth:** Bearer Token

### GET `/api/customer-contact/all`

Get paginated list of contacts.

- **Auth:** Bearer Token
- **Permissions:** `customer_contact_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/customer-contact/byCustomerId`

Get contacts by customer ID.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `customerId` | string | Customer ID |

### GET `/api/customer-contact/:id`

Get a single contact by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contact ID |

### POST `/api/customer-contact`

Create a new customer contact.

- **Auth:** Bearer Token
- **Permissions:** `customer_contact_create`
- **Request Body:**
  ```json
  {
    "companyId": "string (required)",
    "contractTitle": "string",
    "contactPointName": "string",
    "contactPointPhoneNumber": "string",
    "contactPointEmail": "string",
    "contactPointBirthday": "string",
    "contactPointAnniversary": "string",
    "products": ["string"],
    "legalEntity": "string"
  }
  ```

### PUT `/api/customer-contact/:id`

Update a customer contact.

- **Auth:** Bearer Token
- **Permissions:** `customer_contact_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contact ID |

### DELETE `/api/customer-contact/:id`

Delete a customer contact.

- **Auth:** Bearer Token
- **Permissions:** `customer_contact_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contact ID |

---

## 8. Contracts

### GET `/api/contract/allNotPaging`

Get all contracts without pagination.

- **Auth:** Bearer Token

### GET `/api/contract/all`

Get paginated list of contracts.

- **Auth:** Bearer Token
- **Permissions:** `contract_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |
  | `deal_name` | string | Filter by deal name |
  | `productId` | string | Filter by product ID |
  | `legalEntityId` | string | Filter by legal entity ID |
  | `deal_owner` | string | Filter by deal owner |
  | `customerId` | string | Filter by customer ID |
  | `status` | string | Filter by status |
  | `startDate` | string | Filter by start date |
  | `endDate` | string | Filter by end date |
  | `sort` | string | Sort field/order |
  | `needAdd` | string | Additional filter |
  | `archived` | boolean | Filter archived contracts |

### GET `/api/contract/reportHardcopy`

Get hardcopy report for contracts.

- **Auth:** Bearer Token
- **Permissions:** `report_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |
  | `customerIds` | string | Customer IDs (comma-separated) |
  | `legalEntityId` | string | Legal entity ID |
  | `hardcopyStatus` | string | Hardcopy status |
  | `signDateStart` | string | Sign date range start |
  | `signDateEnd` | string | Sign date range end |
  | `saleOwner` | string | Sale owner |
  | `saleIncharge` | string | Sale in charge |

### GET `/api/contract/:id`

Get a single contract by ID, including related configuration data.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contract ID |

### POST `/api/contract`

Create a new contract.

- **Auth:** Bearer Token
- **Permissions:** `contract_create`
- **Request Body:** Dynamic (contract uses flexible schema). Common fields include deal name, product, customer, deal owner, status, dates, and `files[]`.

### PUT `/api/contract/:id`

Update a contract.

- **Auth:** Bearer Token
- **Permissions:** `contract_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contract ID |

### DELETE `/api/contract/:id`

Soft-delete a contract.

- **Auth:** Bearer Token
- **Permissions:** `contract_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Contract ID |

### POST `/api/contract/updateDomain`

Update GCP domain mappings via CSV.

- **Auth:** Bearer Token
- **Permissions:** `contract_domain_update`
- **Request Body:**
  ```json
  {
    "data": "string (CSV content)"
  }
  ```

---

## 9. Contract Extensions

### GET `/api/contractextension/allNotPaging`

Get all contract extensions without pagination.

- **Auth:** Bearer Token

### GET `/api/contractextension/all`

Get paginated list of contract extensions.

- **Auth:** Bearer Token
- **Permissions:** `contract_extension_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/contractextension/commonConfig`

Get common configuration for contract extensions.

- **Auth:** Bearer Token

### POST `/api/contractextension/configByDepartmentAndProduct`

Get contract extension configuration by department and product.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "departmentIds": ["string"],
    "productId": "string"
  }
  ```

### POST `/api/contractextension/configByDepartmentAndProductV2`

Get contract extension configuration by department and product (v2).

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "departmentIds": ["string"],
    "productId": "string"
  }
  ```

### GET `/api/contractextension/:id`

Get a single contract extension by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Extension ID |

### POST `/api/contractextension`

Create a new contract extension.

- **Auth:** Bearer Token
- **Permissions:** `contract_extension_create`
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "departmentIds": ["string"],
    "productIds": ["string"],
    "fileName": "string",
    "contentFile": "string (JSON string)",
    "isCommon": "boolean"
  }
  ```

### PUT `/api/contractextension/:id`

Update a contract extension.

- **Auth:** Bearer Token
- **Permissions:** `contract_extension_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Extension ID |

### DELETE `/api/contractextension/:id`

Delete a contract extension.

- **Auth:** Bearer Token
- **Permissions:** `contract_extension_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Extension ID |

---

## 10. Industry

### GET `/api/industry/all`

Get all industries.

- **Auth:** Bearer Token

---

## 11. Common

### GET `/api/common/allDataSelect`

Get all dropdown/selection data (departments, products, customers, permissions, etc.) in a single call.

- **Auth:** Bearer Token

- **Success Response (200):**

  ```json
  {
  		"calculations": [{
  			"label": "String",
  			"value": "String"
  			}],
  		"contracts": [{
  			"label": "String",
  			"value": "String"
  			}],
  		"customerContacts": [{
  			"_id": "String",
  			"companyId": "String",
  			"contactPointAnniversary": "String",
  			"contactPointBirthday": "String",
  			"contactPointEmail": "String",
  			"contactPointPhoneNumber": "String",
  			"contactPointTitle": "String",
  			"createdDate": "String",
  			"deleted": "Boolean",
  			"legalEntity": "String",
  			"products": ["String"],
  			"status": "Number",
  			"updatedDate": "String",
  			"userCreated": "String",
  			"userUpdated": "String"
  			}],
  		"customers": [{
        "label": "String",
        "value": "String"
        }],
  		"industrys": [{
        "label": "String",
        "value": "String"
        }],
  		"legalEntity": [{
        "label": "String",
        "taxNumber": "String",
        "value": "String"
        }],
  		"products": [{
  			"label": "String",
  			"value": "String"
  			}],
  		"users": [{
  			"label": "String"
  			"value": "String"
  			}]
  	}


  ```

---

## 12. AWS Accounts

### GET `/api/aws-account/all`

Get paginated list of AWS accounts.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/aws-account/:id`

Get a single AWS account by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Account ID |

### POST `/api/aws-account`

Create a new AWS account.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "description": "string",
    "awsId": "string (required, unique)",
    "awsOrgId": "string"
  }
  ```

### PUT `/api/aws-account/:id`

Update an AWS account.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Account ID |

### DELETE `/api/aws-account/:id`

Delete an AWS account.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Account ID |

---

## 13. AWS Org Accounts

### GET `/api/aws-org-account/selection`

Get AWS org account selection list (for dropdowns).

- **Auth:** Bearer Token

### GET `/api/aws-org-account/all`

Get paginated list of AWS org accounts.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### GET `/api/aws-org-account/:id`

Get a single AWS org account by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Org Account ID |

### POST `/api/aws-org-account`

Create a new AWS org account.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "name": "string (required)",
    "description": "string",
    "awsId": "string (required, unique)",
    "accessKeyId": "string",
    "secretAccessKey": "string",
    "region": "string"
  }
  ```

### PUT `/api/aws-org-account/:id`

Update an AWS org account.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Org Account ID |

### DELETE `/api/aws-org-account/:id`

Delete an AWS org account.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | AWS Org Account ID |

---

## 14. Download

### POST `/api/download`

Download a file from S3 by key.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "key": "string (S3 object key)"
  }
  ```

---

## 15. Payment Requests

### GET `/api/payment-request/all`

Get paginated list of payment requests. Accessible by users in sale, customer service, or accounting roles.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

- **Success Response (200):**

  ```json
  {
    "status": 200,
    "result": {
      "docs": [
        {
          "contractIds": ["ObjectId"],
          "productId": "ObjectId",
          "contracts": [
            {
              "deal_name": "String"
            }
          ],
          "document": {
            "key": "String",
            "name": "String",
            "extension": "String"
          },
          "calculation": {
            "name": "String"
          },
          "product": {
            "name": "String"
          },
          "usageDate": "Date",
          "status": "Number",
          "createdDate": "Date"
        }
      ]
    }
  }
  ```

### GET `/api/payment-request/presigned`

Get a presigned URL for S3 file access.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `key` | string | S3 object key |

### GET `/api/payment-request/download-all`

Download all payment requests as a ZIP file.

- **Auth:** Bearer Token

### GET `/api/payment-request/:id`

Get a single payment request by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Payment Request ID |

### POST `/api/payment-request/generate`

Generate payment requests for selected calculations.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "calculationIds": ["string (required)"],
    "productId": "string (required)",
    "startDate": "string (required)",
    "endDate": "string (required)",
    "customers": ["string"]
  }
  ```

### DELETE `/api/payment-request/:id`

Soft-delete a payment request.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Payment Request ID |

---

## 16. Rates

### GET `/api/rate/all`

Get all rates.

- **Auth:** Bearer Token

### GET `/api/rate/:id`

Get a single rate by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

### POST `/api/rate`

Create a new rate.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "value": "number (required)",
    "applyFor": "number (1-12 months)",
    "applyForYear": "number"
  }
  ```

### PUT `/api/rate/:id`

Update a rate.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

### DELETE `/api/rate/:id`

Delete a rate.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

---

## 17. Template

### POST `/api/template`

Create a new template.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "productId": "string",
    "calculationId": "string",
    "documentId": "string"
  }
  ```

### PUT `/api/template/:id`

Update a template.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Template ID |

### DELETE `/api/template/:id`

Delete a template.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Template ID |

---

## 18. GWS Data

### GET `/api/gws-data/all`

Get all GWS data entries.

- **Auth:** Bearer Token

### POST `/api/gws-data`

Create a new GWS data entry.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "productId": "string",
    "calculationId": "string",
    "documentId": "string",
    "usageDate": "string",
    "uniqueId": "string (unique)"
  }
  ```

### PUT `/api/gws-data/:id`

Update a GWS data entry.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | GWS Data ID |

### DELETE `/api/gws-data/:id`

Delete a GWS data entry.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | GWS Data ID |

---

## 19. Data Flex

### GET `/api/data-flex/all`

Get all data flex entries.

- **Auth:** Bearer Token

### POST `/api/data-flex`

Create a new data flex entry.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "documentId": "string",
    "usageDate": "string",
    "uniqueId": "string (unique)"
  }
  ```

### PUT `/api/data-flex/:id`

Update a data flex entry.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Data Flex ID |

### DELETE `/api/data-flex/:id`

Delete a data flex entry.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Data Flex ID |

---

## 20. Legal Entity

### GET `/api/legal-entity/selectionOfCustomer/:customerId`

Get legal entities for a specific customer.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `customerId` | string | Customer ID |

---

## 21. Calculation

### GET `/api/calculation/getSelectionOfProduct/:productId`

Get calculation methods available for a product.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `productId` | string | Product ID |

---

## 22. Cost Table

### GET `/api/cost-table/all`

Get all cost tables. Accessible by users in sale, customer service, or accounting roles.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### POST `/api/cost-table/generate`

Generate cost tables for selected calculations.

- **Auth:** Bearer Token
- **Request Body:**
  ```json
  {
    "calculationIds": ["string (required)"],
    "productId": "string (required)",
    "startDate": "string (required)",
    "endDate": "string (required)",
    "customers": ["string"]
  }
  ```

### PUT `/api/cost-table/:id`

Update a cost table.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Cost Table ID |

### DELETE `/api/cost-table/:id`

Soft-delete a cost table.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Cost Table ID |

### GET `/api/cost-table/templates`

Get all cost table templates. Accessible by accounting role only.

- **Auth:** Bearer Token

### POST `/api/cost-table/templates`

Create a cost table template (multipart form-data).

- **Auth:** Bearer Token
- **Content-Type:** `multipart/form-data`
- **Form Fields:**
  | Field | Type | Description |
  |-------|------|-------------|
  | `productId` | string | Product ID |
  | `calculationId` | string | Calculation ID |
  | `documentId` | string | Document ID |
  | `noDiscount` | boolean | No discount flag |
  | `file` | file | Template file |

### PUT `/api/cost-table/templates/:id`

Update a cost table template (multipart form-data).

- **Auth:** Bearer Token
- **Content-Type:** `multipart/form-data`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Template ID |

### DELETE `/api/cost-table/templates/:id`

Delete a cost table template.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Template ID |

---

## 23. Commission

### GET `/api/commission/all`

Get all commissions.

- **Auth:** Bearer Token
- **Permissions:** `commission_view`
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `page` | number | Page number |
  | `size` | number | Page size |

### POST `/api/commission`

Create a commission entry.

- **Auth:** Bearer Token
- **Permissions:** `commission_create`
- **Request Body:**
  ```json
  {
    "contractId": "string",
    "userId": "string",
    "payByDate": "string",
    "amount": "number",
    "revenue": "number",
    "cogs": "number",
    "whTax": "number",
    "clientComm": "number",
    "clientCommFactor": "number",
    "margin": "number",
    "baseRate": "number",
    "netNew": "boolean",
    "paymentTerm": "string",
    "contractDuration": "string",
    "overQuota": "number",
    "method": "string",
    "paymentPeriod": "string",
    "otherCost": "number",
    "other": "string",
    "contribution": "number",
    "paymentReceivedDate": "string",
    "notes": "string",
    "manuallyEdited": "boolean"
  }
  ```

### PUT `/api/commission/:id`

Update a commission entry.

- **Auth:** Bearer Token
- **Permissions:** `commission_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Commission ID |

### DELETE `/api/commission/:id`

Delete a commission entry.

- **Auth:** Bearer Token
- **Permissions:** `commission_delete`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Commission ID |

### POST `/api/commission/generate`

Generate commissions for selected contracts.

- **Auth:** Bearer Token
- **Permissions:** `commission_create`
- **Request Body:**
  ```json
  {
    "productId": "string (required)",
    "startDate": "string (required)",
    "endDate": "string (required)",
    "contractIds": ["string"]
  }
  ```

### GET `/api/commission/summary`

Get commission summary.

- **Auth:** Bearer Token
- **Query Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `saleId` | string | Sale user ID |
  | `time` | string | Time period |

### PUT `/api/commission/summary/:id`

Update a commission summary entry.

- **Auth:** Bearer Token
- **Permissions:** `commission_summary_update`
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Commission Summary ID |

### PUT `/api/commission/summary/saleConfirm/:id`

Sale user confirms a commission summary.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Commission Summary ID |

### PUT `/api/commission/summary/accountingConfirm/:id`

Accounting confirms a commission summary (admin only).

- **Auth:** Bearer Token (admin only)
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Commission Summary ID |

---

## 24. Rate for Commission

### GET `/api/rate-for-commission/all`

Get all commission rates.

- **Auth:** Bearer Token

### GET `/api/rate-for-commission/:id`

Get a single commission rate by ID.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

### POST `/api/rate-for-commission`

Create a new commission rate.

- **Auth:** Bearer Token
- **Request Body:** (flexible schema)

### PUT `/api/rate-for-commission/:id`

Update a commission rate.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

### DELETE `/api/rate-for-commission/:id`

Delete a commission rate.

- **Auth:** Bearer Token
- **Path Parameters:**
  | Param | Type | Description |
  |-------|------|-------------|
  | `id` | string | Rate ID |

---

## Permission Reference

### Permission Groups and Codes

| Group                   | View                      | Create                      | Update                      | Delete                      | Extra                                                                             |
| ----------------------- | ------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| Contract (Hợp đồng)     | `contract_view`           | `contract_create`           | `contract_update`           | `contract_delete`           | `contract_domain_update`, `contract_view_all`                                     |
| Product (Sản phẩm)      | `product_view`            | `product_create`            | `product_update`            | `product_delete`            | —                                                                                 |
| Department (Phòng ban)  | `department_view`         | `department_create`         | `department_update`         | `department_delete`         | —                                                                                 |
| User (Người dùng)       | `user_view`               | `user_create`               | `user_update`               | `user_delete`               | —                                                                                 |
| Customer (Khách hàng)   | `customer_view`           | `customer_create`           | `customer_update`           | `customer_delete`           | —                                                                                 |
| Contact (Người liên hệ) | `customer_contact_view`   | `customer_contact_create`   | `customer_contact_update`   | `customer_contact_delete`   | —                                                                                 |
| Contract Extension      | `contract_extension_view` | `contract_extension_create` | `contract_extension_update` | `contract_extension_delete` | —                                                                                 |
| Commission              | `commission_view`         | `commission_create`         | `commission_update`         | `commission_delete`         | `commission_summary_update`, `commission_view_all`, `commission_summary_view_all` |
| Report                  | `report_view`             | —                           | —                           | —                           | `report_view_all`                                                                 |

**Note:** Admin users (`isAdmin: true`) bypass all permission checks.

---

## Calculation Engines

The following calculation methods are supported:

| Engine                 | Description                           |
| ---------------------- | ------------------------------------- |
| `calculateAws`         | AWS cost calculation                  |
| `calculateAwsService`  | AWS Service cost calculation          |
| `calculateGcp`         | Google Cloud Platform calculation     |
| `calculateGmp`         | Google Maps Platform calculation      |
| `calculateGwsStandard` | Google Workspace Standard calculation |
| `calculateGwsFlex`     | Google Workspace Flex calculation     |

---

## Error Codes

| Status Code | Description                             |
| ----------- | --------------------------------------- |
| 200         | Success                                 |
| 400         | Bad request / validation error          |
| 401         | Unauthorized (missing or invalid token) |
| 403         | Forbidden (insufficient permissions)    |
| 404         | Resource not found                      |
| 500         | Internal server error                   |

---

## Scheduled Jobs

| Schedule                       | Job                           | Description                                                |
| ------------------------------ | ----------------------------- | ---------------------------------------------------------- |
| `0 0 1 * *` (Monthly, 1st day) | AWS Payment Request Generator | Auto-generates AWS payment requests for the previous month |

---

## Technology Stack

| Component           | Technology                                 |
| ------------------- | ------------------------------------------ |
| Runtime             | Node.js                                    |
| Framework           | Express.js 4.x                             |
| Database            | MongoDB (Mongoose ODM)                     |
| Authentication      | JWT (jsonwebtoken)                         |
| Password Hashing    | bcrypt                                     |
| File Storage        | AWS S3                                     |
| Cloud Billing       | AWS Cost Explorer, Google Cloud BigQuery   |
| Scheduling          | node-cron                                  |
| Logging             | Winston                                    |
| Document Generation | docxtemplater, xlsx-template               |
| Email               | nodemailer                                 |
| Integrations        | HubSpot, Lark Suite, Google Workspace APIs |
