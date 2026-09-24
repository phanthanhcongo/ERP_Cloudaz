const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const { BigQuery } = require('@google-cloud/bigquery');
const { getGcpPresetQueries, getBillingAccountLevelQuery } = require('./queries-gcp');
const { getGwsPresetQueries } = require('./queries-gws');
const { google } = require('googleapis');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Hàm lấy đường dẫn file key
function resolveKeyPath(customPath) {
  if (customPath && customPath.trim()) {
    return path.isAbsolute(customPath) ? customPath : path.join(__dirname, customPath);
  }
  const defaultPath = process.env.KEY_FILE_PATH || 'credentials/service-account.json';
  return path.isAbsolute(defaultPath) ? defaultPath : path.join(__dirname, defaultPath);
}

// Khởi tạo BigQuery Client tương thích đa môi trường (Local, VPS, Docker, Cloud Run, GKE)
function getBigQueryClient(projectId, customKeyPath) {
  const selectedProject = projectId || DEFAULT_PROJECT;

  // 1. Ưu tiên 1: Biến môi trường chứa trực tiếp JSON String (Dành cho Docker, Kubernetes, Server Production)
  if (process.env.GCP_SERVICE_ACCOUNT_JSON) {
    try {
      const credentials = JSON.parse(process.env.GCP_SERVICE_ACCOUNT_JSON);
      return {
        client: new BigQuery({ projectId: selectedProject, credentials }),
        source: 'Biến môi trường GCP_SERVICE_ACCOUNT_JSON (Production/Docker)'
      };
    } catch (e) {
      console.error('Lỗi parse GCP_SERVICE_ACCOUNT_JSON:', e.message);
    }
  }

  // 2. Ưu tiên 2: File JSON chỉ định từ customKeyPath hoặc credentials/service-account.json
  const keyPath = resolveKeyPath(customKeyPath);
  if (fs.existsSync(keyPath)) {
    return {
      client: new BigQuery({ projectId: selectedProject, keyFilename: keyPath }),
      source: `File Key: ${keyPath}`
    };
  }

  // 3. Ưu tiên 3: Chuẩn Google Application Default Credentials (Tự động nhận diện trên Cloud Run, GCP VM, hoặc gcloud CLI)
  return {
    client: new BigQuery({ projectId: selectedProject }),
    source: 'Google Application Default Credentials (GCP Native / Metadata Server / gcloud)'
  };
}

// Preset Queries dành riêng cho bảng reseller_billing_detailed_export_v1
const DEFAULT_PROJECT = process.env.GCP_PROJECT_ID || 'billing-data-cloudaz-resell';
const DEFAULT_DATASET = process.env.DATASET_ID || 'CloudAZ_GWS_billing_ds';
const DEFAULT_TABLE = process.env.TABLE_ID || 'reseller_billing_detailed_export_v1';
const FULL_TABLE_ID = `\`${DEFAULT_PROJECT}.${DEFAULT_DATASET}.${DEFAULT_TABLE}\``;

// Kết hợp GCP + GWS Preset Queries
const GCP_PRESET_QUERIES = getGcpPresetQueries();
const GWS_PRESET_QUERIES = getGwsPresetQueries(FULL_TABLE_ID);
const PRESET_QUERIES = [...GCP_PRESET_QUERIES, ...GWS_PRESET_QUERIES];

// API: Kiểm tra trạng thái cấu hình & file key
app.get('/api/config', (req, res) => {
  const keyPath = resolveKeyPath();
  const exists = fs.existsSync(keyPath);
  let keyInfo = null;

  if (exists) {
    try {
      const raw = fs.readFileSync(keyPath, 'utf8');
      const parsed = JSON.parse(raw);
      keyInfo = {
        client_email: parsed.client_email,
        project_id: parsed.project_id,
        type: parsed.type
      };
    } catch (e) {
      keyInfo = { error: 'File JSON không hợp lệ' };
    }
  }

  res.json({
    hasKeyFile: exists,
    keyPath: keyPath,
    defaultProject: DEFAULT_PROJECT,
    defaultDataset: DEFAULT_DATASET,
    defaultTable: DEFAULT_TABLE,
    fullTableId: FULL_TABLE_ID,
    keyInfo
  });
});

// API: Lấy danh sách preset queries (tất cả)
app.get('/api/presets', (req, res) => {
  res.json(PRESET_QUERIES);
});

// API: Lấy danh sách GCP Preset Queries
app.get('/api/queryGCP', (req, res) => {
  res.json({
    type: 'GCP',
    description: 'GCP Billing Analysis Queries',
    queries: GCP_PRESET_QUERIES
  });
});

// API: Lấy danh sách GWS Preset Queries
app.get('/api/queryGWS', (req, res) => {
  res.json({
    type: 'GWS',
    description: 'Google Workspace Billing Queries',
    queries: GWS_PRESET_QUERIES
  });
});

// API: Upload / Dán nội dung JSON Key
app.post('/api/save-key', (req, res) => {
  try {
    const { keyJsonContent } = req.body;
    if (!keyJsonContent) {
      return res.status(400).json({ error: 'Nội dung key không được để trống' });
    }

    const parsed = typeof keyJsonContent === 'string' ? JSON.parse(keyJsonContent) : keyJsonContent;
    if (!parsed.client_email || !parsed.private_key) {
      return res.status(400).json({ error: 'File JSON không phải là Service Account Key hợp lệ của GCP' });
    }

    const targetPath = resolveKeyPath();
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(targetPath, JSON.stringify(parsed, null, 2), 'utf8');

    return res.json({
      success: true,
      message: 'Lưu file Service Account Key thành công!',
      client_email: parsed.client_email,
      project_id: parsed.project_id
    });
  } catch (err) {
    return res.status(400).json({ error: `Lỗi phân tích JSON: ${err.message}` });
  }
});

// API: Thực thi query và trả về data + logs
app.post('/api/query', async (req, res) => {
  const logs = [];
  const addLog = (msg, level = 'info') => {
    logs.push({
      time: new Date().toLocaleTimeString('vi-VN'),
      level,
      message: msg
    });
  };

  const startTime = Date.now();
  const { sql, projectId, customKeyPath } = req.body;

  if (!sql || !sql.trim()) {
    return res.status(400).json({ success: false, error: 'Query SQL không được để trống', logs });
  }

  const selectedProject = projectId || DEFAULT_PROJECT;
  const keyPath = resolveKeyPath(customKeyPath);

  addLog(`Bắt đầu khởi tạo kết nối BigQuery Client...`);
  addLog(`Target Project: ${selectedProject}`);

  try {
    const { client: bigquery, source: authSource } = getBigQueryClient(selectedProject, customKeyPath);
    addLog(`Cơ chế xác thực: ${authSource}`, 'info');

    addLog(`Đang gửi câu lệnh SQL lên BigQuery...`);
    addLog(`SQL Preview: ${sql.substring(0, 100).replace(/\n/g, ' ')}...`);

    // Chạy query
    const [job] = await bigquery.createQueryJob({
      query: sql,
      location: 'asia-southeast1',
      useLegacySql: false
    });

    addLog(`Job ID tạo thành công: ${job.id}. Đang chờ kết quả...`);

    const [rows] = await job.getQueryResults();
    const durationMs = Date.now() - startTime;

    // Lấy metadata của job
    const [metadata] = await job.getMetadata();
    const stats = metadata.statistics || {};
    const queryStats = stats.query || {};

    const bytesProcessed = queryStats.totalBytesProcessed 
      ? (queryStats.totalBytesProcessed / (1024 * 1024)).toFixed(2) + ' MB'
      : '0 MB';

    const cacheHit = queryStats.cacheHit ? 'Có (Miễn phí scan)' : 'Không';

    addLog(`Query hoàn tất trong ${durationMs}ms. Số dòng kết quả: ${rows.length}.`, 'success');
    addLog(`Dung lượng data scan: ${bytesProcessed} | Dùng cache: ${cacheHit}`, 'info');

    // Phân tích columns từ dòng đầu tiên nếu có
    let columns = [];
    if (rows.length > 0) {
      columns = Object.keys(rows[0]);
    }

    // Format các trường Timestamp hoặc Record phức tạp thành chuỗi dễ đọc
    const sanitizedRows = rows.map(row => {
      const newRow = {};
      for (const [key, val] of Object.entries(row)) {
        if (val && typeof val === 'object') {
          if (val.value !== undefined) {
            newRow[key] = val.value; // BigQuery Timestamp object
          } else {
            newRow[key] = JSON.stringify(val);
          }
        } else {
          newRow[key] = val;
        }
      }
      return newRow;
    });

    return res.json({
      success: true,
      meta: {
        jobId: job.id,
        durationMs,
        totalRows: rows.length,
        bytesProcessed,
        cacheHit,
        executionTime: new Date().toISOString()
      },
      columns,
      rows: sanitizedRows,
      logs
    });

  } catch (error) {
    const durationMs = Date.now() - startTime;
    addLog(`Lỗi thực thi: ${error.message}`, 'error');

    let tip = '';
    if (error.message.includes('Access Denied') || error.code === 403) {
      tip = 'Gợi ý: Service Account chưa được cấp quyền `BigQuery Job User` trên project hoặc `BigQuery Data Viewer` trên dataset.';
    } else if (error.message.includes('Not found: Table')) {
      tip = 'Gợi ý: Không tìm thấy bảng hoặc dataset. Vui lòng kiểm tra lại Project ID hoặc Dataset ID.';
    } else if (error.message.includes('Syntax error')) {
      tip = 'Gợi ý: Câu lệnh SQL bị sai cú pháp Standard SQL của BigQuery.';
    }

    return res.status(500).json({
      success: false,
      error: error.message,
      tip,
      meta: { durationMs },
      logs
    });
  }
});

// API: Lấy danh sách billing accounts (subaccount name) qua Cloud Billing API
app.get('/api/billing-accounts', async (req, res) => {
  try {
    const keyPath = resolveKeyPath();
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/cloud-billing.readonly']
    });
    const authClient = await auth.getClient();
    const billing = google.cloudbilling({ version: 'v1', auth: authClient });

    const response = await billing.billingAccounts.list({ pageSize: 200 });
    const accounts = response.data.billingAccounts || [];

    const subaccounts = [];
    for (const acct of accounts) {
      if (acct.masterBillingAccount) {
        subaccounts.push({
          name: acct.displayName,
          id: acct.name.replace('billingAccounts/', ''),
          masterBillingAccount: acct.masterBillingAccount.replace('billingAccounts/', ''),
          open: acct.open
        });
      }
    }

    res.json({
      success: true,
      totalAccounts: accounts.length,
      subaccounts,
      raw: accounts
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Lookup subaccount name theo billing account ID
app.get('/api/billing-account/:id', async (req, res) => {
  try {
    const keyPath = resolveKeyPath();
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/cloud-billing.readonly']
    });
    const authClient = await auth.getClient();
    const billing = google.cloudbilling({ version: 'v1', auth: authClient });

    const response = await billing.billingAccounts.get({
      name: `billingAccounts/${req.params.id}`
    });

    const acct = response.data;
    res.json({
      success: true,
      id: req.params.id,
      name: acct.displayName,
      open: acct.open,
      masterBillingAccount: acct.masterBillingAccount
        ? acct.masterBillingAccount.replace('billingAccounts/', '')
        : null
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// API: Bảng 2 GCP — query BigQuery + JOIN lookup table lấy subaccount name
app.get('/api/gcp-table2/:invoiceMonth', async (req, res) => {
  const { invoiceMonth } = req.params;
  try {
    const { client: bigquery } = getBigQueryClient();
    const sql = `
SELECT
  sa.\`Billing account name\`   AS subaccount,
  b.billing_account_id        AS subaccount_id,
  SUM(cost_at_list)            AS list_cost,
  SUM(cost) - SUM(cost_at_list) AS negotiated_savings,
  SUM((SELECT COALESCE(SUM(c.amount), 0) FROM UNNEST(credits) c
       WHERE c.type IN ('COMMITTED_USAGE_DISCOUNT', 'FEE_UTILIZATION_OFFSET'))) AS discounts,
  SUM((SELECT COALESCE(SUM(c.amount), 0) FROM UNNEST(credits) c
       WHERE c.type IN ('PROMOTION', 'DISCOUNT', 'SUSTAINED_USAGE_DISCOUNT'))) AS promotions_and_others,
  SUM(cost) + SUM((SELECT COALESCE(SUM(c.amount), 0) FROM UNNEST(credits) c
       WHERE c.type != 'RESELLER_MARGIN')) AS subtotal
FROM \`billing-data-cloudaz-resell.CloudAZ_Billing_Standard_Dataset.gcp_billing_export_v1_01AF45_CC490F_EEF29A\` b
LEFT JOIN \`billing-data-cloudaz-resell.GCP_Congno.TH2_Billing_Account_T06_2026\` sa
  ON b.billing_account_id = sa.\`Billing account ID\`
WHERE b.invoice.month = '${invoiceMonth}'
  AND b.cost_type = 'regular'
GROUP BY 1, 2
HAVING SUM(cost_at_list) != 0 OR SUM(cost) != 0
ORDER BY list_cost DESC`;

    const [job] = await bigquery.createQueryJob({ query: sql, useLegacySql: false, location: 'asia-southeast1' });
    const [rows] = await job.getQueryResults();

    res.json({ success: true, invoiceMonth, rows, totalRows: rows.length });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const server = app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` BigQuery Logger Dashboard is running!`);
  console.log(` 👉 Mở trình duyệt tại: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});

// Giữ event loop sống — tránh process thoát do Express 5 / dotenv v17 unref server handle
server.ref();

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} đang bị chiếm. Hãy tắt process cũ hoặc đổi port.`);
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});

server.on('close', () => {
  console.log('⚠️ Server đã đóng.');
});
