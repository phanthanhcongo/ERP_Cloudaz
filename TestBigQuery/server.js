const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const { BigQuery } = require('@google-cloud/bigquery');

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

const PRESET_QUERIES = [
  {
    id: 'recent_records',
    title: '1. Xem 15 dòng mới nhất (Lọc 7 ngày gần nhất)',
    description: 'Lấy các dòng log chi phí gần nhất để kiểm tra cấu trúc schema và dữ liệu.',
    sql: `SELECT 
  billing_account_id,
  invoice.month AS invoice_month,
  service.description AS service_name,
  sku.description AS sku_name,
  usage_start_time,
  usage_end_time,
  ROUND(cost, 4) AS cost,
  currency,
  project.name AS project_name
FROM ${FULL_TABLE_ID}
WHERE usage_start_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
ORDER BY usage_start_time DESC
LIMIT 15;`
  },
  {
    id: 'top_sku_cost',
    title: '2. Top dịch vụ & SKU phát sinh chi phí cao nhất (30 ngày)',
    description: 'Thống kê tổng chi phí gom theo từng SKU / dịch vụ để xem dịch vụ nào dùng nhiều tiền nhất.',
    sql: `SELECT 
  service.description AS service_name,
  sku.description AS sku_name,
  currency,
  ROUND(SUM(cost), 2) AS total_cost,
  COUNT(1) AS record_count
FROM ${FULL_TABLE_ID}
WHERE usage_start_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
GROUP BY service_name, sku_name, currency
ORDER BY total_cost DESC
LIMIT 20;`
  },
  {
    id: 'top_customers',
    title: '3. Top tài khoản khách hàng (Billing Account) chi phí cao nhất',
    description: 'Thống kê tổng chi phí theo từng Billing Account ID trong tháng qua.',
    sql: `SELECT 
  billing_account_id,
  currency,
  ROUND(SUM(cost), 2) AS total_amount,
  COUNT(DISTINCT project.id) AS project_count,
  COUNT(1) AS total_usage_events
FROM ${FULL_TABLE_ID}
WHERE usage_start_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 30 DAY)
GROUP BY billing_account_id, currency
ORDER BY total_amount DESC
LIMIT 15;`
  },
  {
    id: 'monthly_trend',
    title: '4. Thống kê chi phí theo từng kỳ hoá đơn (Invoice Month)',
    description: 'Nhóm chi phí theo tháng hoá đơn (invoice.month) để theo dõi xu hướng tăng giảm.',
    sql: `SELECT 
  invoice.month AS invoice_month,
  currency,
  ROUND(SUM(cost), 2) AS total_cost,
  COUNT(1) AS total_records
FROM ${FULL_TABLE_ID}
WHERE invoice.month IS NOT NULL
GROUP BY invoice_month, currency
ORDER BY invoice_month DESC
LIMIT 12;`
  }
];

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

// API: Lấy danh sách preset queries
app.get('/api/presets', (req, res) => {
  res.json(PRESET_QUERIES);
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
      location: 'US', // BigQuery tự động điều phối hoặc dùng default US
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

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` BigQuery Logger Dashboard is running!`);
  console.log(` 👉 Mở trình duyệt tại: http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
