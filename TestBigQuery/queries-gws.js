/**
 * BigQuery Queries cho Google Workspace (GWS) Billing
 * Sử dụng cho reseller_billing_detailed_export_v1 table
 */

/**
 * GWS Preset Queries
 * Các query chuyên biệt cho Google Workspace Flex & Commitment
 */
function getGwsPresetQueries(fullTableId) {
  return [
    {
      id: 'gws_flex_all',
      title: '5. 📋 GWS Flex — Tất cả dòng cước theo kỳ (giống CSV)',
      description: 'Lấy toàn bộ dòng cước GWS (Commitment + Usage) theo kỳ hóa đơn, gom giống dạng CSV kế toán tải từ Partner Sales Console.',
      hasMonthPicker: true,
      sql: `SELECT
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/domain_name')       AS domain_name,
  sku.description                                              AS subscription,
  COALESCE(
    (SELECT value FROM UNNEST(system_labels)
       WHERE key = 'workspace.googleapis.com/usage_type'),
    cost_type
  )                                                            AS description,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/order_id')          AS order_name,
  MIN(DATE(usage_start_time))                                  AS start_date,
  MAX(DATE(usage_end_time))                                    AS end_date,
  MAX(usage.amount)                                            AS quantity,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/purchase_order_id') AS po_number,
  ROUND(SUM(customer_cost), 2)                                 AS amount,
  billing_account_id                                           AS customer_id,
  sku.id                                                       AS sku_id
FROM ${fullTableId}
WHERE invoice.month = '{BILLING_MONTH}'
  AND cost_type = 'regular'
  AND LOWER(sku.description) != 'tax'
GROUP BY domain_name, subscription, description, order_name, po_number, customer_id, sku_id
ORDER BY domain_name, start_date ASC`
    },
    {
      id: 'gws_flex_usage_only',
      title: '6. 📋 GWS Flex — Chỉ dòng Usage (Flex) theo kỳ',
      description: 'Chỉ lấy dòng Usage/Flex (FLEXIBLE_SEATS_ITEM), loại bỏ Commitment. Dùng để tính cước tháng theo BRD §5.2.',
      hasMonthPicker: true,
      sql: `SELECT
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/domain_name')       AS domain_name,
  sku.description                                              AS subscription,
  COALESCE(
    (SELECT value FROM UNNEST(system_labels)
       WHERE key = 'workspace.googleapis.com/usage_type'),
    cost_type
  )                                                            AS description,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/order_id')          AS order_name,
  MIN(DATE(usage_start_time))                                  AS start_date,
  MAX(DATE(usage_end_time))                                    AS end_date,
  MAX(usage.amount)                                            AS quantity,
  (SELECT value FROM UNNEST(system_labels)
     WHERE key = 'workspace.googleapis.com/purchase_order_id') AS po_number,
  ROUND(SUM(customer_cost), 2)                                 AS amount,
  billing_account_id                                           AS customer_id,
  sku.id                                                       AS sku_id
FROM ${fullTableId}
WHERE invoice.month = '{BILLING_MONTH}'
  AND cost_type = 'regular'
  AND LOWER(sku.description) != 'tax'
  AND (SELECT value FROM UNNEST(system_labels)
       WHERE key = 'workspace.googleapis.com/usage_type') = 'FLEXIBLE_SEATS_ITEM'
GROUP BY domain_name, subscription, description, order_name, po_number, customer_id, sku_id
ORDER BY domain_name, start_date ASC`
    }
  ];
}

module.exports = {
  getGwsPresetQueries
};
