/**
 * ⚠️ DEPRECATED: File này đã được tách thành 2 file riêng biệt
 *
 * Hãy sử dụng:
 * - queries-gcp.js      → GCP Billing Queries
 * - queries-gws.js      → Google Workspace Queries
 *
 * File này được giữ lại cho tương thích ngược (backward compatibility)
 * nhưng không còn được bảo trì. Các import từ file này sẽ được chuyển
 * tới queries-gcp.js tương ứng.
 */

// Re-export từ queries-gcp.js để đảm bảo backward compatibility
const {
  getProjectLevelQuery,
  getBillingAccountLevelQuery,
  getVerificationQuery
} = require('./queries-gcp');

module.exports = {
  getProjectLevelQuery,
  getBillingAccountLevelQuery,
  getVerificationQuery
};
