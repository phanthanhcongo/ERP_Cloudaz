const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { DOClient, DOError, groupItems } = require('./doClient');
const { buildInvoiceReport, reportToMarkdown } = require('./invoiceReport');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Token lấy từ header X-DO-Token (nhập trên UI) hoặc .env
function clientFrom(req) {
  const token = req.get('X-DO-Token') || process.env.DO_TOKEN;
  return new DOClient(token);
}

// Chuẩn hoá tham số ?month=YYYY-MM; trả null nếu không truyền (= tất cả kỳ)
function parseMonth(raw) {
  if (!raw) return null;
  const m = String(raw).trim();
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(m)) {
    const e = new Error(`month không hợp lệ: "${m}". Định dạng đúng: YYYY-MM (ví dụ 2026-09).`);
    e.status = 400;
    throw e;
  }
  const [y, mo] = m.split('-').map(Number);
  const today = new Date();
  const lastDay = new Date(Date.UTC(y, mo, 0));
  const todayUtc = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()));
  // Tháng đang chạy: kẹp ngày cuối về hôm nay để insights không hỏi ngày tương lai
  const end = lastDay > todayUtc ? todayUtc : lastDay;
  return {
    period: m,
    start: `${m}-01`,
    end: end.toISOString().slice(0, 10),
    isCurrent: m === todayUtc.toISOString().slice(0, 7),
  };
}

// Bọc handler để trả lỗi dạng JSON thống nhất
function wrap(handler) {
  return async (req, res) => {
    try {
      const data = await handler(req, res);
      if (!res.headersSent) res.json({ success: true, ...data });
    } catch (err) {
      const status = err.status || (err instanceof DOError ? err.status : 500);
      res.status(status >= 400 && status < 600 ? status : 500).json({
        success: false,
        error: err.message,
        detail: err.body || null,
      });
    }
  };
}

app.get('/api/account', wrap(async (req) => {
  const { data, rateLimit } = await clientFrom(req).account();
  return { account: data.account, rateLimit };
}));

app.get('/api/balance', wrap(async (req) => {
  const { data, rateLimit } = await clientFrom(req).balance();
  return { balance: data, rateLimit };
}));

app.get('/api/billing-history', wrap(async (req) => {
  const month = parseMonth(req.query.month);
  const { items, rateLimit } = await clientFrom(req).billingHistory();
  const rows = month
    ? items.filter((h) => String(h.date || '').slice(0, 7) === month.period)
    : items;
  const total = rows.reduce((s, h) => s + Number(h.amount || 0), 0);
  return {
    month: month && month.period,
    count: rows.length,
    total_all: items.length,
    total: Number(total.toFixed(2)),
    billing_history: rows,
    rateLimit,
  };
}));

app.get('/api/invoices', wrap(async (req) => {
  const month = parseMonth(req.query.month);
  const { invoices, preview, rateLimit } = await clientFrom(req).invoices();
  const rows = month ? invoices.filter((i) => i.invoice_period === month.period) : invoices;
  const total = rows.reduce((s, i) => s + Number(i.amount || 0), 0);
  return {
    month: month && month.period,
    count: rows.length,
    total_all: invoices.length,
    total: Number(total.toFixed(2)),
    periods: [...new Set(invoices.map((i) => i.invoice_period))].sort().reverse(),
    invoices: rows,
    preview,
    rateLimit,
  };
}));

// Chi tiết 1 invoice + gom nhóm theo product/project/category
app.get('/api/invoices/:uuid', wrap(async (req) => {
  const client = clientFrom(req);
  const { uuid } = req.params;
  const [{ items, rateLimit }, summary] = await Promise.all([
    client.invoiceItems(uuid),
    client.invoiceSummary(uuid).then((r) => r.data).catch(() => null),
  ]);
  const total = items.reduce((s, it) => s + Number(it.amount || 0), 0);
  return {
    invoice_uuid: uuid,
    count: items.length,
    total: Number(total.toFixed(2)),
    summary,
    by_product: groupItems(items, 'product'),
    by_project: groupItems(items, 'project_name'),
    by_category: groupItems(items, 'category'),
    items,
    rateLimit,
  };
}));

// Hóa đơn dựng theo bố cục PDF đối soát: summary + nhóm sản phẩm + đối chiếu
// /api/invoices/:uuid/report        -> JSON
// /api/invoices/:uuid/report.md     -> Markdown (đúng layout file trong docs/)
async function loadReport(req, uuid) {
  const client = clientFrom(req);
  const [{ items }, summary, list] = await Promise.all([
    client.invoiceItems(uuid),
    client.invoiceSummary(uuid).then((r) => r.data).catch(() => null),
    client.invoices().then((r) => r.invoices).catch(() => []),
  ]);
  const invoice = list.find((i) => i.invoice_uuid === uuid) || null;
  return buildInvoiceReport({ invoiceUuid: uuid, items, summary, invoice });
}

app.get('/api/invoices/:uuid/report', wrap(async (req) => ({
  report: await loadReport(req, req.params.uuid),
})));

app.get('/api/invoices/:uuid/report.md', wrap(async (req, res) => {
  const md = reportToMarkdown(await loadReport(req, req.params.uuid));
  res.set('Content-Type', 'text/markdown; charset=utf-8');
  res.send(md);
}));

app.get('/api/invoices/:uuid/csv', wrap(async (req, res) => {
  const { data } = await clientFrom(req).invoiceCsv(req.params.uuid);
  res.set('Content-Type', 'text/csv; charset=utf-8');
  res.set('Content-Disposition', `attachment; filename="invoice-${req.params.uuid}.csv"`);
  res.send(data);
}));

// /api/insights?start=2026-09-01&end=2026-09-30
app.get('/api/insights', wrap(async (req) => {
  // Ưu tiên ?month=YYYY-MM; vẫn cho phép truyền thẳng start/end
  const month = parseMonth(req.query.month || new Date().toISOString().slice(0, 7));
  const start = req.query.start || month.start;
  const end = req.query.end || month.end;
  const { data, rateLimit } = await clientFrom(req).insights(start, end);
  return { month: month.period, start, end, insights: data, rateLimit };
}));

// Tổng hợp 1 tháng: invoice của kỳ + chi tiết item đã gom nhóm
// /api/month/2026-09
app.get('/api/month/:month', wrap(async (req) => {
  const month = parseMonth(req.params.month);
  const client = clientFrom(req);
  const { invoices, preview, rateLimit } = await client.invoices();
  const matched = invoices.filter((i) => i.invoice_period === month.period);

  // Tháng đang chạy chưa chốt invoice -> dùng bản preview
  const targets = matched.length
    ? matched
    : (month.isCurrent && preview ? [preview] : []);

  const detail = [];
  for (const inv of targets) {
    const { items } = await client.invoiceItems(inv.invoice_uuid);
    detail.push(...items);
  }
  const total = detail.reduce((s, it) => s + Number(it.amount || 0), 0);

  return {
    month: month.period,
    range: { start: month.start, end: month.end },
    is_preview: matched.length === 0 && targets.length > 0,
    invoices: targets.map((i) => ({
      invoice_uuid: i.invoice_uuid,
      invoice_period: i.invoice_period,
      amount: i.amount,
    })),
    count: detail.length,
    total: Number(total.toFixed(2)),
    by_product: groupItems(detail, 'product'),
    by_project: groupItems(detail, 'project_name'),
    by_category: groupItems(detail, 'category'),
    items: detail,
    rateLimit,
  };
}));

app.get('/health', (req, res) => res.json({
  ok: true,
  tokenFromEnv: Boolean(process.env.DO_TOKEN),
}));

app.listen(PORT, () => {
  console.log(`DO Billing test app: http://localhost:${PORT}`);
  console.log(`Token từ .env: ${process.env.DO_TOKEN ? 'có' : 'CHƯA CÓ (nhập trên UI)'}`);
});
