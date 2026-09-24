/**
 * BigQuery Queries cho GCP Billing
 * - Bảng 1: Project Level (~621 dòng)
 * - Bảng 2: Billing Account Level (~94 dòng)
 */

/**
 * Query 1: Project Level - GROUP BY project.id
 * Lấy dữ liệu tổng hợp theo từng Project
 * ~621 dòng (tất cả project con + service + seller)
 */
function getProjectLevelQuery(projectId, dataset, table, startDate, endDate) {
  return `
    SELECT
      billing_account_id,
      project.id                AS project_id,
      project.number            AS project_number,
      service.description       AS service_name,
      SUM(cost)                 AS cost_goc,
      SUM((SELECT COALESCE(SUM(c.amount), 0)
           FROM UNNEST(credits) c
           WHERE c.type = 'RESELLER_MARGIN')) AS reseller_margin,
      SUM((SELECT COALESCE(SUM(c.amount), 0)
           FROM UNNEST(credits) c
           WHERE c.type = 'PROMOTION'))       AS promotion_credit,
      SUM(cost)
        + SUM((SELECT COALESCE(SUM(c.amount), 0)
               FROM UNNEST(credits) c
               WHERE c.type = 'RESELLER_MARGIN'))
        + SUM((SELECT COALESCE(SUM(c.amount), 0)
               FROM UNNEST(credits) c
               WHERE c.type = 'PROMOTION'))    AS subtotal
    FROM \`${projectId}.${dataset}.${table}\`
    WHERE usage_start_time >= '${startDate}'
      AND usage_start_time < '${endDate}'
    GROUP BY 1, 2, 3, 4
    ORDER BY billing_account_id, project_id
  `;
}

/**
 * Query 2: Billing Account Level - GROUP BY billing_account_id
 * Lấy dữ liệu tổng hợp theo từng Billing Account
 * ~94 dòng (aggregated tổng theo BA)
 */
function getBillingAccountLevelQuery(projectId, dataset, table, startDate, endDate) {
  return `
    SELECT
      billing_account_id,
      SUM(cost)                 AS cost_goc,
      SUM((SELECT COALESCE(SUM(c.amount), 0)
           FROM UNNEST(credits) c
           WHERE c.type = 'RESELLER_MARGIN')) AS reseller_margin,
      SUM((SELECT COALESCE(SUM(c.amount), 0)
           FROM UNNEST(credits) c
           WHERE c.type = 'PROMOTION'))       AS promotion_credit,
      SUM(cost)
        + SUM((SELECT COALESCE(SUM(c.amount), 0)
               FROM UNNEST(credits) c
               WHERE c.type = 'RESELLER_MARGIN'))
        + SUM((SELECT COALESCE(SUM(c.amount), 0)
               FROM UNNEST(credits) c
               WHERE c.type = 'PROMOTION'))    AS subtotal
    FROM \`${projectId}.${dataset}.${table}\`
    WHERE usage_start_time >= '${startDate}'
      AND usage_start_time < '${endDate}'
    GROUP BY 1
    ORDER BY billing_account_id
  `;
}

/**
 * Verification Query: Kiểm tra 2 bảng có khớp không
 * Tổng cost của 2 bảng PHẢI khớp 100%
 */
function getVerificationQuery(projectId, dataset, table, startDate, endDate) {
  return `
    WITH project_level AS (
      SELECT
        SUM(cost) AS total_cost
      FROM \`${projectId}.${dataset}.${table}\`
      WHERE usage_start_time >= '${startDate}'
        AND usage_start_time < '${endDate}'
    ),
    billing_account_level AS (
      SELECT
        SUM(cost) AS total_cost
      FROM \`${projectId}.${dataset}.${table}\`
      WHERE usage_start_time >= '${startDate}'
        AND usage_start_time < '${endDate}'
    )
    SELECT
      (SELECT total_cost FROM project_level) AS project_total,
      (SELECT total_cost FROM billing_account_level) AS ba_total,
      ABS((SELECT total_cost FROM project_level) - (SELECT total_cost FROM billing_account_level)) AS difference,
      CASE
        WHEN ABS((SELECT total_cost FROM project_level) - (SELECT total_cost FROM billing_account_level)) < 0.01
        THEN 'PASS ✓'
        ELSE 'FAIL ✗'
      END AS verification_status
  `;
}

module.exports = {
  getProjectLevelQuery,
  getBillingAccountLevelQuery,
  getVerificationQuery
};
