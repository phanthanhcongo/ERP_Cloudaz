const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { DOClient, DOError, groupItems } = require('./doClient');
const { buildInvoiceReport, reportToMarkdown } = require('./invoiceReport');
const fs = require('fs');
const os = require('os');
const { loadBillPeriod, DEFAULT_FILE: BILL_FILE } = require('./recon/excelSource');
const { buildReconSheets } = require('./recon/build');
const { toHtml, toHtmlDocument } = require('./recon/render');
const { toXlsx } = require('./recon/export');
const tokenStore = require('./tokenStore');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Mỗi team một token: request có team (header X-DO-Team hoặc /api/teams/:uuid/...) dùng
// token của team đó trong tokenStore. DO_TOKEN trong .env chỉ còn là token "chính"
// để liệt kê danh sách team và fallback cho team của chính nó.
app.use(async (req, res, next) => {
  const m = req.path.match(/^\/api\/teams\/([^/]+)\/(overview|recon)/);
  const teamUuid = req.get('X-DO-Team') || (m && m[1]);
  req.doTeam = teamUuid || null;
  if (teamUuid) {
    try { req.doToken = await tokenStore.getToken(teamUuid); } catch (e) { req.doTokenError = e.message; }
  }
  next();
});

// Ưu tiên: X-DO-Token (nhập tay) → token của team → DO_TOKEN (.env)
function clientFrom(req) {
  const token = req.get('X-DO-Token') || req.doToken || process.env.DO_TOKEN;
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

// Danh sách team + đánh dấu team nào token hiện tại đọc được billing
app.get('/api/teams', wrap(async (req) => {
  const client = clientFrom(req);
  const [{ items }, acc] = await Promise.all([
    client.teams(),
    client.account().then((r) => r.data.account),
  ]);
  const myUuid = acc.team && acc.team.uuid;
  const [stored, store] = await Promise.all([tokenStore.list(), tokenStore.info()]);

  const teams = items.map((t) => ({
    uuid: t.uuid,
    id: t.id,
    name: t.name,
    email: t.email,
    user_role: t.user_role,
    token_last4: stored[t.uuid] ? stored[t.uuid].last4 : (t.uuid === myUuid ? 'env' : null),
    // Đọc được billing khi team có token riêng, hoặc là team của DO_TOKEN
    has_billing: !!stored[t.uuid] || t.uuid === myUuid,
  }));
  // Team có billing lên đầu, rồi theo tên
  teams.sort((a, b) => (b.has_billing - a.has_billing)
    || a.name.localeCompare(b.name, 'vi'));

  const roles = {};
  teams.forEach((t) => { roles[t.user_role] = (roles[t.user_role] || 0) + 1; });

  return {
    count: teams.length,
    with_token: teams.filter((t) => t.has_billing).length,
    token_store: store,
    current_team: { uuid: myUuid, name: acc.team && acc.team.name },
    account_email: acc.email,
    roles,
    teams,
  };
}));

// Tổng quan 1 team — dùng token riêng của team (middleware nạp req.doToken)
app.get('/api/teams/:uuid/overview', wrap(async (req) => {
  const client = clientFrom(req);
  const acc = await client.account().then((r) => r.data.account);
  const myUuid = acc.team && acc.team.uuid;
  const { uuid } = req.params;

  // Tìm thông tin team bằng token chính (thấy đủ 62 team)
  const { items } = await new DOClient(process.env.DO_TOKEN).teams();
  const team = items.find((t) => t.uuid === uuid);
  if (!team) { const e = new Error('Không tìm thấy team này.'); e.status = 404; throw e; }

  if (uuid !== myUuid) {
    return {
      team,
      has_billing: false,
      has_token: !!req.doToken,
      reason: req.doToken
        ? `Token đã lưu cho team này lại thuộc team "${acc.team && acc.team.name}" — cần cập nhật token.`
        : 'Team này chưa có token riêng. DigitalOcean không cho đọc billing của team khác bằng token của team khác '
          + '— hãy thêm Personal Access Token (scope billing:read) của chính team này.',
    };
  }

  const { invoices, preview } = await client.invoices();
  const rows = [...invoices].sort((a, b) => b.invoice_period.localeCompare(a.invoice_period));
  const total = rows.reduce((s, i) => s + Number(i.amount || 0), 0);
  return {
    team,
    has_billing: true,
    token_last4: req.doToken ? req.doToken.slice(-4) : 'env',
    periods: rows.length,
    total: Number(total.toFixed(2)),
    first_period: rows.length ? rows[rows.length - 1].invoice_period : null,
    last_period: rows.length ? rows[0].invoice_period : null,
    preview,
    invoices: rows,
  };
}));

// Lưu / rotate token của 1 team: { token }. Xác thực với DO trước khi lưu:
// token phải thuộc đúng team và có quyền đọc billing.
app.put('/api/teams/:uuid/token', wrap(async (req) => {
  const token = String((req.body && req.body.token) || '').trim();
  if (!/^dop_v1_[0-9a-f]{20,}$/i.test(token)) {
    throw Object.assign(new Error('Token không đúng định dạng (dop_v1_...).'), { status: 400 });
  }
  let acc;
  try { acc = (await new DOClient(token).account()).data.account; } catch (e) {
    throw Object.assign(new Error('DigitalOcean từ chối token: ' + e.message), { status: 400 });
  }
  const tokTeam = acc.team || {};
  if (tokTeam.uuid !== req.params.uuid) {
    throw Object.assign(new Error(`Token này thuộc team "${tokTeam.name || '?'}", không phải team đang chọn.`), { status: 400 });
  }
  try { await new DOClient(token).invoices(); } catch (e) {
    throw Object.assign(new Error('Token không có quyền đọc billing: ' + e.message), { status: 400 });
  }
  const saved = await tokenStore.saveToken({
    teamUuid: tokTeam.uuid, teamName: tokTeam.name, accountUuid: acc.uuid, token,
  });
  return { team: { uuid: tokTeam.uuid, name: tokTeam.name }, token_last4: saved.last4, store: await tokenStore.info() };
}));

app.delete('/api/teams/:uuid/token', wrap(async (req) => {
  await tokenStore.removeToken(req.params.uuid);
  return { removed: true };
}));

app.get('/api/token-store', wrap(async () => ({ store: await tokenStore.info(), teams: await tokenStore.list() })));

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

// ── Bảng đối soát (recon/) — nguồn billing: file Bill, không cần token DO ──
// Cấu hình kế toán sửa trên UI lưu theo kỳ vào out/recon_state.json (chưa có DB):
//   { "2026-07": { rounding, fx:{TCB:26475}, prepaid:{ACTLIFE:…},
//                  overrides:{ADFLEX:{discountPct,feePct,calcMethod,layout,fxRate}},
//                  status:{ADFLEX:{status:'SENT', at:'…', note:'…'}} } }
const RECON_STATE_FILE = path.join(__dirname, 'out', 'recon_state.json');
const RECON_STATUSES = ['DRAFT', 'REVIEWED', 'SENT', 'CONFIRMED', 'AUTO_CONFIRMED', 'DISPUTED', 'INVOICED'];

function readReconState() {
  try { return JSON.parse(fs.readFileSync(RECON_STATE_FILE, 'utf8')); } catch { return {}; }
}
function writeReconState(all) {
  fs.mkdirSync(path.dirname(RECON_STATE_FILE), { recursive: true });
  fs.writeFileSync(RECON_STATE_FILE, JSON.stringify(all, null, 2));
}
function checkPeriod(period) {
  if (!/^\d{4}-\d{2}$/.test(period)) throw Object.assign(new Error('period phải dạng YYYY-MM'), { status: 400 });
}

// /api/recon/2026-07?org=ADFLEX&rounding=BILL&fx=TCB=26500,VCB=26380&prepaid=ACTLIFE=11050723
// Query (nếu có) ưu tiên hơn cấu hình đã lưu.
function buildRecon(req, { withHtml = false, period: forcedPeriod, label, mutateRows } = {}) {
  const period = forcedPeriod || req.params.period;
  checkPeriod(period);
  const kv = (s) => (s ? Object.fromEntries(String(s).split(',').map((p) => {
    const [k, v] = p.split('='); return [k.trim().toUpperCase(), Number(v)];
  })) : undefined);
  const st = readReconState()[label || period] || {};
  const overrides = st.overrides || {};

  const { rows } = loadBillPeriod(period);
  if (mutateRows) mutateRows(rows);
  for (const r of rows) {
    const o = overrides[r.customerCode];
    if (!o) continue;
    if (o.discountPct !== undefined && o.discountPct !== null) r.term.discountPct = Number(o.discountPct);
    if (o.feePct !== undefined && o.feePct !== null) r.term.feePct = Number(o.feePct);
    if (o.calcMethod) { r.term.calcMethod = o.calcMethod; r.term.calcMethodSource = 'manual'; }
    if (o.layout) r.profile.layout = o.layout;
    if (o.fxRate) r.fxRate = Number(o.fxRate);
  }
  const fxOverride = { ...(st.fx || {}), ...(kv(req.query.fx) || {}) };
  // Tỷ giá ghi đè riêng từng khách thắng tỷ giá theo ngân hàng
  for (const r of rows) {
    const o = overrides[r.customerCode];
    if (o && o.fxRate) r.profile = { ...r.profile, fxBank: `${r.profile.fxBank}*` };
  }

  const result = buildReconSheets(rows, {
    period: label || period,
    rounding: String(req.query.rounding || st.rounding || 'BILL').toUpperCase(),
    fxOverride,
    prepaid: { ...(st.prepaid || {}), ...(kv(req.query.prepaid) || {}) },
  });
  const status = st.status || {};
  for (const s of result.sheets) {
    s.status = (status[s.customerCode] && status[s.customerCode].status) || 'DRAFT';
    s.statusInfo = status[s.customerCode] || null;
    s.override = overrides[s.customerCode] || null;
    if (withHtml) s.html = toHtml(s);
  }
  const org = req.query.org && String(req.query.org).toUpperCase();
  if (org) result.sheets = result.sheets.filter((s) => s.customerCode.toUpperCase().includes(org));
  result.settings = { rounding: st.rounding || 'BILL', fx: st.fx || {}, prepaid: st.prepaid || {} };
  return result;
}

// Các kỳ có sẵn trong file Bill (heading "## MM.YYYY")
function billPeriods() {
  const md = fs.readFileSync(BILL_FILE, 'utf8');
  const periods = [...md.matchAll(/^## (\d{2})\.(\d{4})\s*$/gm)].map((m) => `${m[2]}-${m[1]}`);
  return [...new Set(periods)].sort().reverse();
}

// Team ID trên file Bill có dạng do:team:<hex40> hoặc do:team:<uuid>; so không phân biệt gạch nối
const teamKey = (s) => String(s || '').toLowerCase().replace(/^do:team:/, '').replace(/[^0-9a-f]/g, '');

// Preview bảng đối soát của khách sở hữu team, kỳ :month
//   - Billing: từ API DO nếu token hiện tại thuộc team này, ngược lại từ file Bill (cột Q)
//   - Điều khoản, tỷ giá, mẫu bảng: sheet của kỳ đó trong file Bill (hoặc kỳ gần nhất trước đó)
app.get('/api/teams/:uuid/recon/:month', wrap(async (req) => {
  const month = req.params.month;
  checkPeriod(month);
  const periods = billPeriods();
  const termsPeriod = periods.includes(month) ? month : (periods.find((p) => p < month) || periods[0]);
  if (!termsPeriod) throw Object.assign(new Error('File Bill không có sheet nào.'), { status: 404 });
  const sameMonth = termsPeriod === month;

  const client = clientFrom(req);
  const [acc, { items: teamList }] = await Promise.all([
    client.account().then((r) => r.data.account),
    client.teams(),
  ]);
  const team = teamList.find((t) => t.uuid === req.params.uuid) || { uuid: req.params.uuid, name: '' };
  const isMine = acc.team && acc.team.uuid === team.uuid;

  // Billing từ API (chỉ team của token)
  let api = null;
  if (isMine) {
    const { invoices } = await client.invoices();
    const inv = invoices.find((i) => i.invoice_period === month);
    if (inv) {
      const [{ items }, summary] = await Promise.all([
        client.invoiceItems(inv.invoice_uuid),
        client.invoiceSummary(inv.invoice_uuid).then((r) => r.data).catch(() => null),
      ]);
      const rep = buildInvoiceReport({ invoiceUuid: inv.invoice_uuid, items, summary, invoice: inv });
      api = {
        invoiceUuid: inv.invoice_uuid,
        invoiceId: rep.info.invoice_id,
        usage: rep.summary.usage_charges,
        amountDue: rep.summary.amount_due,
        groups: rep.groups.map((g) => ({ group: g.name, amount: g.subtotal })),
      };
    }
  }

  let matched = null;
  const warnings = [];
  const result = buildRecon(req, {
    withHtml: true,
    period: termsPeriod,
    label: month,
    mutateRows(rows) {
      const key = teamKey(team.uuid);
      const nm = String(team.name || '').trim().toUpperCase();
      matched = rows.find((r) => key && teamKey(r.teamId) === key)
        || rows.find((r) => nm && r.doName.toUpperCase() === nm);
      if (!matched) return;
      const groupName = matched.customerName;
      for (const r of rows) {
        if (r.customerName !== groupName) continue;
        if (!sameMonth) {
          // Điều khoản mượn từ kỳ khác → billing & số Excel của kỳ đó không dùng được
          r.excel = { ...r.excel, totalWithVat: null };
          if (r !== matched) r.billingUsd = 0;
        }
      }
      if (api) {
        matched.excelBillingUsd = matched.billingUsd;
        matched.billingUsd = api.usage;
        matched.items = api.groups;
        matched.vendorInvoiceNo = api.invoiceId || matched.vendorInvoiceNo;
      } else if (!sameMonth) {
        matched.billingUsd = 0;
      }
    },
  });

  if (!matched) {
    throw Object.assign(new Error(`Team "${team.name || team.uuid}" chưa có trong file Bill kỳ ${termsPeriod} `
      + '— chưa biết khách / điều khoản để lập bảng đối soát.'), { status: 404 });
  }
  const sheet = result.sheets.find((s) => s.lines.some((l) => l.teamId === matched.teamId));
  if (!sameMonth) warnings.push(`File Bill chưa có sheet ${month} — điều khoản & tỷ giá lấy từ kỳ ${termsPeriod}, cần nhập tỷ giá đúng kỳ.`);
  if (isMine && !api) warnings.push(`API DO không có invoice kỳ ${month} cho team này.`);
  if (!isMine) warnings.push('Token hiện tại không thuộc team này — billing lấy từ file Bill (cột Q), không phải API.');
  if (api && matched.excelBillingUsd !== null && matched.excelBillingUsd !== undefined && sameMonth
      && Math.abs(api.usage - matched.excelBillingUsd) >= 0.01) {
    warnings.push(`Billing API ${api.usage} USD khác file Bill ${matched.excelBillingUsd} USD.`);
  }

  return {
    month,
    termsPeriod,
    source: api ? 'api' : 'excel',
    team: { uuid: team.uuid, name: team.name },
    customerCode: matched.customerCode,
    api,
    excelBillingUsd: matched.excelBillingUsd ?? matched.billingUsd,
    warnings,
    sheet: sheet || null,
  };
}));

app.get('/api/recon-periods', wrap(async () => ({ periods: billPeriods(), statuses: RECON_STATUSES })));

app.get('/api/recon/:period', wrap(async (req) => buildRecon(req, { withHtml: true })));

// Lưu cấu hình kỳ: { rounding?, fx?, prepaid? } — giá trị null/'' để xóa
app.put('/api/recon/:period/settings', express.json(), wrap(async (req) => {
  checkPeriod(req.params.period);
  const all = readReconState();
  const st = all[req.params.period] || (all[req.params.period] = {});
  const b = req.body || {};
  if (b.rounding) st.rounding = String(b.rounding).toUpperCase();
  for (const k of ['fx', 'prepaid']) {
    if (!b[k]) continue;
    st[k] = st[k] || {};
    for (const [key, v] of Object.entries(b[k])) {
      if (v === null || v === '' || !Number(v)) delete st[k][key.toUpperCase()];
      else st[k][key.toUpperCase()] = Number(v);
    }
  }
  writeReconState(all);
  return { settings: st };
}));

// Ghi đè điều khoản 1 khách: { discountPct, feePct, calcMethod, layout, fxRate } — body null để xóa
app.put('/api/recon/:period/override/:code', express.json(), wrap(async (req) => {
  checkPeriod(req.params.period);
  const all = readReconState();
  const st = all[req.params.period] || (all[req.params.period] = {});
  st.overrides = st.overrides || {};
  const b = req.body || {};
  const clean = Object.fromEntries(Object.entries(b).filter(([, v]) => v !== null && v !== '' && v !== undefined));
  if (Object.keys(clean).length) st.overrides[req.params.code] = clean;
  else delete st.overrides[req.params.code];
  writeReconState(all);
  return { override: st.overrides[req.params.code] || null };
}));

// Đổi trạng thái: { status, note? } — áp cho 1 khách hoặc nhiều khách (codes[])
app.put('/api/recon/:period/status', express.json(), wrap(async (req) => {
  checkPeriod(req.params.period);
  const { status, note, codes } = req.body || {};
  if (!RECON_STATUSES.includes(status)) throw Object.assign(new Error('Trạng thái không hợp lệ'), { status: 400 });
  const all = readReconState();
  const st = all[req.params.period] || (all[req.params.period] = {});
  st.status = st.status || {};
  for (const c of codes || []) st.status[c] = { status, note: note || '', at: new Date().toISOString() };
  writeReconState(all);
  return { updated: (codes || []).length };
}));

app.get('/api/recon/:period/html', wrap(async (req, res) => {
  const r = buildRecon(req);
  res.set('Content-Type', 'text/html; charset=utf-8');
  res.send(toHtmlDocument(r.sheets, `Bảng đối soát DigitalOcean — kỳ ${r.period}`));
}));

app.get('/api/recon/:period/xlsx', wrap(async (req, res) => {
  const r = buildRecon(req);
  const file = path.join(os.tmpdir(), `recon_${r.period}_${Date.now()}.xlsx`);
  await toXlsx(r, file);
  await new Promise((resolve, reject) => res.download(file, `recon_${r.period}.xlsx`, (err) => {
    fs.unlink(file, () => {});
    return err ? reject(err) : resolve();
  }));
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

  if (!targets.length) {
    return {
      month: month.period,
      range: { start: month.start, end: month.end },
      invoices: [],
      count: 0,
      total: 0,
      report: null,
      rateLimit,
    };
  }

  // Gom item + summary của mọi invoice trong kỳ (thường chỉ 1)
  const items = [];
  let summary = null;
  for (const inv of targets) {
    const [{ items: part }, sum] = await Promise.all([
      client.invoiceItems(inv.invoice_uuid),
      client.invoiceSummary(inv.invoice_uuid).then((r) => r.data).catch(() => null),
    ]);
    items.push(...part);
    if (!summary) summary = sum;
  }

  // Dựng đầy đủ bố cục hóa đơn: nhóm sản phẩm + từng dòng + đối chiếu
  const report = buildInvoiceReport({
    invoiceUuid: targets[0].invoice_uuid,
    items,
    summary: targets.length === 1 ? summary : null,   // nhiều invoice thì tự tính lại
    invoice: targets[0],
  });
  report.is_preview = matched.length === 0;

  return {
    month: month.period,
    range: { start: month.start, end: month.end },
    is_preview: report.is_preview,
    invoices: targets.map((i) => ({
      invoice_uuid: i.invoice_uuid,
      invoice_id: i.invoice_id,
      invoice_period: i.invoice_period,
      amount: i.amount,
    })),
    count: report.totals.items_count,
    total: report.summary.amount_due,
    report,                                   // <- UI render dạng hóa đơn từ đây
    by_product: groupItems(items, 'product'),
    by_project: groupItems(items, 'project_name'),
    by_category: groupItems(items, 'category'),
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
