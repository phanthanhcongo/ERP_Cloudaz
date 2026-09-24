/**
 * BigQuery Queries cho GCP Billing (Standard Export Table)
 * - Bảng 1: Project Level (8 cột, khớp Console)
 * - Bảng 2: Billing Account Level (7 cột, khớp Console)
 *
 * Filter bắt buộc: invoice.month + cost_type='regular' (bỏ tax)
 * Dùng cost_at_list = giá công khai, cost = giá sau đàm phán
 */

const GCP_STANDARD_TABLE = 'billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A';

function getProjectLevelQuery(invoiceMonth) {
  return `
SELECT
  project.name              AS project,
  project.id                AS project_id,
  project.number            AS project_number,
  SUM(cost_at_list)         AS list_cost,
  SUM(cost) - SUM(cost_at_list)
                            AS negotiated_savings,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('COMMITTED_USAGE_DISCOUNT', 'FEE_UTILIZATION_OFFSET')))
                            AS discounts,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('PROMOTION', 'DISCOUNT', 'SUSTAINED_USAGE_DISCOUNT')))
                            AS promotions_and_others,
  SUM(cost) + SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type != 'RESELLER_MARGIN'))
                            AS subtotal
FROM \`${GCP_STANDARD_TABLE}\`
WHERE invoice.month = '${invoiceMonth}'
  AND cost_type = 'regular'
GROUP BY 1, 2, 3
ORDER BY list_cost DESC`;
}

function getBillingAccountLevelQuery(invoiceMonth) {
  return `
SELECT
  billing_account_id        AS subaccount_id,
  SUM(cost_at_list)         AS list_cost,
  SUM(cost) - SUM(cost_at_list)
                            AS negotiated_savings,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('COMMITTED_USAGE_DISCOUNT', 'FEE_UTILIZATION_OFFSET')))
                            AS discounts,
  SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type IN ('PROMOTION', 'DISCOUNT', 'SUSTAINED_USAGE_DISCOUNT')))
                            AS promotions_and_others,
  SUM(cost) + SUM((SELECT COALESCE(SUM(c.amount), 0)
       FROM UNNEST(credits) c
       WHERE c.type != 'RESELLER_MARGIN'))
                            AS subtotal
FROM \`${GCP_STANDARD_TABLE}\`
WHERE invoice.month = '${invoiceMonth}'
  AND cost_type = 'regular'
GROUP BY 1
ORDER BY list_cost DESC`;
}

function getVerificationQuery(invoiceMonth) {
  return `
WITH project_level AS (
  SELECT SUM(cost) AS total_cost
  FROM \`${GCP_STANDARD_TABLE}\`
  WHERE invoice.month = '${invoiceMonth}' AND cost_type = 'regular'
),
billing_account_level AS (
  SELECT SUM(cost) AS total_cost
  FROM \`${GCP_STANDARD_TABLE}\`
  WHERE invoice.month = '${invoiceMonth}' AND cost_type = 'regular'
)
SELECT
  (SELECT total_cost FROM project_level)   AS project_total,
  (SELECT total_cost FROM billing_account_level) AS ba_total,
  ABS((SELECT total_cost FROM project_level) - (SELECT total_cost FROM billing_account_level)) AS difference,
  CASE
    WHEN ABS((SELECT total_cost FROM project_level) - (SELECT total_cost FROM billing_account_level)) < 0.01
    THEN 'PASS'
    ELSE 'FAIL'
  END AS verification_status`;
}

function getGcpPresetQueries() {
  const T = GCP_STANDARD_TABLE;
  return [
    {
      id: 'gcp_table1_project',
      title: 'Bảng 1 — GCP theo Project (8 cột, khớp Console)',
      description: 'Group by project: list cost, negotiated savings, discounts, promotions, subtotal. Thay invoiceMonth.',
      sql: getProjectLevelQuery('202606')
    },
    {
      id: 'gcp_table2_billing',
      title: 'Bảng 2 — GCP theo Billing Account (7 cột, khớp Console)',
      description: 'Group by billing_account_id: list cost, negotiated savings, discounts, promotions, subtotal. Thay invoiceMonth.',
      sql: getBillingAccountLevelQuery('202606')
    },
    {
      id: 'gcp_verification',
      title: 'Verification — so khớp tổng Bảng 1 vs Bảng 2',
      description: 'Tổng cost 2 bảng phải khớp 100%. Thay invoiceMonth.',
      sql: getVerificationQuery('202606')
    },
    {
      id: 'gcp_credit_types',
      title: 'Liệt kê tất cả credit types trong kỳ',
      description: 'Debug: xem dataset có những credit type nào.',
      sql: `SELECT DISTINCT c.type, c.name, ROUND(SUM(c.amount),2) AS total
FROM \`${T}\`, UNNEST(credits) c
WHERE invoice.month = '202606' AND cost_type = 'regular'
GROUP BY 1, 2 ORDER BY total`
    }
  ];
}

module.exports = {
  getProjectLevelQuery,
  getBillingAccountLevelQuery,
  getVerificationQuery,
  getGcpPresetQueries
};
