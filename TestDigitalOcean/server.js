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
const ExcelJS = require('exceljs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Mỗi team một token lưu trong Database (bảng team).
// Middleware nạp token của team tương ứng, hoặc lấy 1 token bất kỳ trong DB làm mặc định.
app.use(async (req, res, next) => {
  try {
    const m = req.path.match(/^\/api\/teams\/([^/]+)\/(overview|recon)/);
    const teamUuid = req.get('X-DO-Team') || (m && m[1]);
    req.doTeam = teamUuid || null;
    if (teamUuid) {
      req.doToken = await tokenStore.getToken(teamUuid);
    }
    // Token mặc định để gọi danh sách team (/v2/teams) lấy trực tiếp từ Database
    req.defaultToken = (await tokenStore.getAnyToken()) || process.env.DO_TOKEN;
  } catch (e) {
    req.doTokenError = e.message;
  }
  next();
});

// Ưu tiên: X-DO-Token (nhập tay) → token của team (trong DB) → token mặc định từ DB → DO_TOKEN (.env nếu có)
function clientFrom(req) {
  const token = (req && req.get && req.get('X-DO-Token'))
    || (req && req.doToken)
    || (req && req.defaultToken)
    || process.env.DO_TOKEN;
  if (!token) {
    throw Object.assign(new Error('Chưa có token nào trong Database. Vui lòng thêm token trên trang /teams.html.'), { status: 401 });
  }
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
  try {
    const { data, rateLimit } = await clientFrom(req).account();
    return { account: data.account, rateLimit };
  } catch (err) {
    if (err.status === 403 || (err.message && err.message.includes('403'))) {
      return { 
        account: { email: 'do.billing@cloudaz.io', restricted: true, status: 'active' },
        warning: 'Token hiện tại không có quyền account:read (403 Forbidden).'
      };
    }
    throw err;
  }
}));

// Danh sách team + đánh dấu team nào token hiện tại đọc được billing
app.get('/api/teams', wrap(async (req) => {
  let client = null;
  try {
    client = clientFrom(req);
  } catch (e) {
    // Không có token mặc định
  }

  let items = [];
  let acc = { email: 'do.billing@cloudaz.io', team: null };

  if (client) {
    const results = await Promise.allSettled([
      client.teams(),
      client.account(),
    ]);

    if (results[0].status === 'fulfilled' && results[0].value && results[0].value.items) {
      items = results[0].value.items;
    } else if (results[0].status === 'rejected') {
      console.warn('Lỗi gọi DO client.teams():', results[0].reason && results[0].reason.message);
    }

    if (results[1].status === 'fulfilled' && results[1].value && results[1].value.data && results[1].value.data.account) {
      acc = results[1].value.data.account;
    } else if (results[1].status === 'rejected') {
      console.warn('Lỗi gọi DO client.account():', results[1].reason && results[1].reason.message);
    }
  }

  const myUuid = acc.team && acc.team.uuid;
  const [stored, store] = await Promise.all([tokenStore.list(), tokenStore.info()]);

  const orgRow = {
    uuid: 'ORG_CLOUDAZ',
    id: 0,
    name: 'CloudAZ JSC (Master Organization)',
    email: acc.email || 'do.billing@cloudaz.io',
    user_role: 'Org Owner',
    is_org: true,
    token_last4: stored['ORG_CLOUDAZ'] ? stored['ORG_CLOUDAZ'].last4 : null,
    has_billing: Boolean(stored['ORG_CLOUDAZ']),
  };

  const teams = items.map((t) => ({
    uuid: t.uuid,
    id: t.id,
    name: (stored[t.uuid] && stored[t.uuid].teamName) || t.name,
    email: t.email,
    user_role: (stored[t.uuid] && stored[t.uuid].isOrg) ? 'Org Account' : t.user_role,
    is_org: Boolean(stored[t.uuid] && stored[t.uuid].isOrg),
    token_last4: stored[t.uuid] ? stored[t.uuid].last4 : null,
    // Đọc được billing khi team có token được lưu trong Database
    has_billing: Boolean(stored[t.uuid]),
  }));

  const teamUuidSet = new Set(teams.map((t) => t.uuid));
  teamUuidSet.add('ORG_CLOUDAZ');

  // Thêm các Organization / External Teams được nạp qua Org Token hoặc có trong DB
  const extraOrgs = [];
  for (const [uuid, rec] of Object.entries(stored)) {
    if (!teamUuidSet.has(uuid)) {
      extraOrgs.push({
        uuid: uuid,
        id: uuid,
        name: rec.teamName || ('Organization ' + uuid.slice(0, 8)),
        email: rec.email || '',
        user_role: rec.isOrg ? 'Org Account' : 'Member',
        is_org: Boolean(rec.isOrg),
        token_last4: rec.last4,
        has_billing: true,
      });
    }
  }

  // Nếu đã có Org Account riêng (có token billing), ẩn team DO chưa cấu hình trùng tên để tránh bị trùng lặp
  const orgNamesWithBilling = new Set(
    extraOrgs.filter((o) => o.has_billing).map((o) => o.name.trim().toLowerCase())
  );
  const activeTeams = teams.filter((t) => {
    if (!t.has_billing && orgNamesWithBilling.has(t.name.trim().toLowerCase())) {
      return false;
    }
    return true;
  });

  // Team có billing lên đầu, rồi theo tên
  activeTeams.sort((a, b) => (b.has_billing - a.has_billing)
    || a.name.localeCompare(b.name, 'vi'));

  const allTeamsList = [orgRow, ...extraOrgs, ...activeTeams];

  const roles = {};
  allTeamsList.forEach((t) => { roles[t.user_role] = (roles[t.user_role] || 0) + 1; });

  return {
    org: orgRow,
    count: allTeamsList.length,
    with_token: allTeamsList.filter((t) => t.has_billing).length,
    token_store: store,
    current_team: { uuid: myUuid, name: acc.team && acc.team.name },
    account_email: acc.email,
    roles,
    teams: allTeamsList,
  };
}));

// Thêm Organization mới dựa vào Personal Access Token của Org
app.post('/api/org/add', wrap(async (req) => {
  const token = String((req.body && req.body.token) || '').trim();
  const customName = String((req.body && req.body.name) || '').trim();
  if (!token) throw Object.assign(new Error('Vui lòng cung cấp Personal Access Token.'), { status: 400 });
  if (!/^dop_v1_[0-9a-f]{20,}$/i.test(token)) {
    throw Object.assign(new Error('Token không đúng định dạng dop_v1_...'), { status: 400 });
  }

  const client = new DOClient(token);
  let accData = null;
  let accountForbidden = false;

  try {
    accData = (await client.account()).data.account;
  } catch (e) {
    if (e.status === 401 || (e.message && e.message.includes('401'))) {
      throw Object.assign(new Error('DigitalOcean từ chối token (401 Unauthorized): Token không hợp lệ hoặc đã bị thu hồi.'), { status: 400 });
    }
    if (e.status === 403 || (e.message && e.message.includes('403'))) {
      // Khách hàng không tick chọn scope "account:read" khi tạo token trên DO
      accountForbidden = true;
    } else {
      throw Object.assign(new Error(`Không thể kết nối DO với token: ${e.message}`), { status: 400 });
    }
  }

  // Thử kiểm tra có đọc được invoice không
  let invoicesRes = null;
  try {
    invoicesRes = await client.invoices();
  } catch (e) {
    if (e.status === 403) {
      if (accountForbidden) {
        throw Object.assign(new Error(
          '❌ Token thiếu cả 2 quyền (403 Forbidden)!\n'
          + 'Token này bị DigitalOcean chặn cả quyền xem Account lẫn Billing.\n'
          + '👉 Vui lòng tạo lại Token trên DigitalOcean và tick chọn ĐỦ 2 QUYỀN:\n'
          + '   1. Account: Read\n'
          + '   2. Billing: Read'
        ), { status: 400 });
      }
      throw Object.assign(new Error('Token thiếu quyền billing:read! Vui lòng tạo token có quyền billing:read.'), { status: 400 });
    }
    throw Object.assign(new Error(`Lỗi kiểm tra billing của token: ${e.message}`), { status: 400 });
  }

  // Trích xuất UUID từ Account hoặc từ invoice account_urn
  let derivedUuid = null;
  const invoices = (invoicesRes && invoicesRes.invoices) || [];
  if (invoices.length > 0) {
    const urn = invoices[0].account_urn || '';
    const m = urn.match(/do:(?:team|account):([0-9a-f-]+)/i);
    if (m) derivedUuid = m[1];
  }
  if (!derivedUuid && accData) {
    derivedUuid = (accData.team && accData.team.uuid) || accData.uuid;
  }
  if (!derivedUuid) {
    derivedUuid = 'org_' + token.slice(-8);
  }

  // Nếu token không có quyền account:read, thử lấy tên công ty từ invoice summary
  let invoiceSummaryName = null;
  if (!customName && (!accData || !accData.name) && invoices.length > 0) {
    try {
      const sum = await client.invoiceSummary(invoices[0].invoice_uuid);
      if (sum && sum.data) {
        invoiceSummaryName = sum.data.user_company || sum.data.user_name || null;
      }
    } catch (e) {}
  }

  const orgUuid = (accData && accData.team && accData.team.uuid)
    || (derivedUuid.startsWith('ORG_') ? derivedUuid : ('ORG_' + derivedUuid));

  const orgName = customName
    || (accData && accData.team && accData.team.name)
    || (accData && accData.name)
    || invoiceSummaryName
    || `Organization (${derivedUuid.slice(0, 8)})`;

  const saved = await tokenStore.saveToken({
    teamUuid: orgUuid,
    teamName: orgName,
    accountUuid: (accData && accData.uuid) || derivedUuid,
    accountEmail: (accData && accData.email) || '',
    isOrg: true,
    token,
  });

  return {
    org: {
      uuid: orgUuid,
      name: orgName,
      email: (accData && accData.email) || 'N/A (Token thiếu account:read)',
      account_uuid: (accData && accData.uuid) || derivedUuid,
      team_uuid: (accData && accData.team?.uuid) || null,
      token_last4: saved.last4,
      is_org: true,
    },
    message: accountForbidden
      ? `Đã thêm Organization "${orgName}" thành công! (Lưu ý: Token thiếu quyền account:read nhưng đã lấy được ${invoices.length} kỳ hóa đơn).`
      : `Đã thêm Organization "${orgName}" thành công!`,
  };
}));

// Tổng quan 1 team — dùng token riêng của team (middleware nạp req.doToken)
app.get('/api/teams/:uuid/overview', wrap(async (req) => {
  const client = clientFrom(req);
  let acc = { email: '', team: null };
  try {
    acc = await client.account().then((r) => r.data.account);
  } catch (e) {
    // Nếu token thiếu quyền account:read
  }
  const myUuid = acc.team && acc.team.uuid;
  const { uuid } = req.params;

  // Tìm thông tin team bằng token chính từ DB hoặc stored
  let team = null;
  try {
    const { items } = await clientFrom(req).teams();
    team = items.find((t) => t.uuid === uuid);
  } catch (e) {}

  if (!team) {
    const stored = await tokenStore.list();
    if (stored[uuid]) {
      team = {
        uuid: uuid,
        id: uuid,
        name: stored[uuid].teamName || ('Organization ' + uuid.slice(0, 8)),
        email: stored[uuid].email || '',
        user_role: stored[uuid].isOrg ? 'Org Account' : 'Member',
        is_org: Boolean(stored[uuid].isOrg),
      };
    } else {
      const e = new Error('Không tìm thấy team hoặc organization này.');
      e.status = 404;
      throw e;
    }
  }

  const isOrg = uuid.startsWith('ORG_');
  if (!isOrg && myUuid && uuid !== myUuid) {
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

// Gọi data kiểm tra bằng Token cấp Organization bất kỳ
app.post('/api/org/fetch-data', wrap(async (req) => {
  const token = String((req.body && req.body.token) || '').trim();
  const month = req.body && req.body.month;
  if (!token) throw Object.assign(new Error('Vui lòng cung cấp token.'), { status: 400 });

  const client = new DOClient(token);
  let acc = {};
  let accountForbidden = false;

  try {
    const { data: accData } = await client.account();
    acc = accData?.account || {};
  } catch (e) {
    if (e.status === 401 || (e.message && e.message.includes('401'))) {
      throw Object.assign(new Error('DigitalOcean từ chối token (401 Unauthorized): Token không tồn tại hoặc đã bị thu hồi.'), { status: 400 });
    }
    if (e.status === 403 || (e.message && e.message.includes('403'))) {
      accountForbidden = true;
      acc = {
        name: 'Organization (Không có quyền account:read)',
        email: 'N/A (Thiếu quyền account:read)',
        uuid: 'N/A',
        status: 'active',
      };
    } else {
      throw Object.assign(new Error(`Không thể kết nối DO với token: ${e.message}`), { status: 400 });
    }
  }

  let orgTeams = [];
  let isOrgScope = false;
  try {
    const orgRes = await client.request('/organizations/teams', { query: { per_page: 200 } });
    orgTeams = orgRes.data.teams || [];
    isOrgScope = true;
  } catch (e) {}

  let balance = null;
  try {
    const { data: balData } = await client.balance();
    balance = balData;
  } catch (e) {}

  let invoices = [];
  let preview = null;
  let rateLimit = null;
  try {
    const invRes = await client.invoices();
    invoices = invRes.invoices || [];
    preview = invRes.preview || null;
    rateLimit = invRes.rateLimit;
  } catch (e) {
    if (e.status === 403) {
      if (accountForbidden) {
        throw Object.assign(new Error(
          '❌ Token bị từ chối cả 2 quyền (403 Forbidden)!\n'
          + 'Token này thiếu cả quyền "account:read" và "billing:read".\n'
          + '👉 Hãy tạo lại Token trên DigitalOcean (mục API -> Tokens) và tick chọn ĐỦ 2 QUYỀN:\n'
          + '   1. Account: Read\n'
          + '   2. Billing: Read'
        ), { status: 400 });
      }
      throw Object.assign(new Error('Token thiếu quyền billing:read để đọc hóa đơn.'), { status: 400 });
    }
    throw e;
  }

  const sortedInvoices = [...invoices].sort((a, b) => (b.invoice_period || '').localeCompare(a.invoice_period || ''));

  if (sortedInvoices.length > 0 && acc.uuid === 'N/A') {
    const m = (sortedInvoices[0].account_urn || '').match(/do:(?:team|account):([0-9a-f-]+)/i);
    if (m) acc.uuid = m[1];
  }

  let selectedInvoice = null;
  let summary = null;
  let items = [];
  if (sortedInvoices.length > 0) {
    selectedInvoice = (month && sortedInvoices.find((i) => i.invoice_period === month)) || sortedInvoices[0];
    try {
      const [sumRes, itemsRes] = await Promise.all([
        client.invoiceSummary(selectedInvoice.invoice_uuid).then((r) => r.data).catch(() => null),
        client.invoiceItems(selectedInvoice.invoice_uuid).then((r) => r.items).catch(() => []),
      ]);
      summary = sumRes;
      items = itemsRes;
    } catch (e) {}
  }

  return {
    account: acc,
    account_forbidden: accountForbidden,
    is_org: Boolean(isOrgScope || orgTeams.length > 0 || !acc.team),
    has_org_scope: isOrgScope,
    org_teams_count: orgTeams.length,
    org_teams: orgTeams,
    balance,
    invoices_count: sortedInvoices.length,
    invoices: sortedInvoices.slice(0, 20),
    preview,
    latest_invoice: selectedInvoice ? {
      period: selectedInvoice.invoice_period,
      amount: selectedInvoice.amount,
      invoice_uuid: selectedInvoice.invoice_uuid,
      invoice_id: selectedInvoice.invoice_id,
      summary,
      by_product: groupItems(items, 'product'),
      items_count: items.length,
    } : null,
    rateLimit,
  };
}));

// Lưu / rotate token của 1 team: { token }. Xác thực với DO trước khi lưu:
// token phải thuộc đúng team và có quyền đọc billing.
app.put('/api/teams/:uuid/token', wrap(async (req) => {
  const token = String((req.body && req.body.token) || '').trim();
  const targetUuid = req.params.uuid;

  if (!token) {
    throw Object.assign(new Error('Vui lòng nhập chuỗi Personal Access Token.'), { status: 400 });
  }

  if (!/^dop_v1_[0-9a-f]{20,}$/i.test(token)) {
    throw Object.assign(new Error('Định dạng token không đúng! Token DigitalOcean phải bắt đầu bằng "dop_v1_...". Vui lòng kiểm tra lại token đã sao chép.'), { status: 400 });
  }

  let acc;
  try {
    acc = (await new DOClient(token).account()).data.account;
  } catch (e) {
    if (e.status === 401 || (e.message && e.message.includes('401'))) {
      throw Object.assign(new Error('DigitalOcean từ chối token (401 Unauthorized): Token không tồn tại, sai ký tự hoặc đã bị thu hồi/xóa trên DO.'), { status: 400 });
    }
    throw Object.assign(new Error(`Không thể kết nối đến DigitalOcean với token này: ${e.message}`), { status: 400 });
  }

  const isOrg = targetUuid === 'ORG_CLOUDAZ' || targetUuid.startsWith('ORG_') || (!acc.team && targetUuid === acc.uuid);
  if (isOrg) {
    let isOrgScope = false;
    try {
      const orgRes = await fetch('https://api.digitalocean.com/v2/organizations/teams?per_page=1', {
        headers: { Authorization: 'Bearer ' + token }
      });
      if (orgRes.status === 200) isOrgScope = true;
    } catch (e) {}

    const orgDisplayName = (acc.team && acc.team.name) || acc.name || (targetUuid === 'ORG_CLOUDAZ' ? 'CloudAZ JSC (Master Organization)' : `Organization (${acc.uuid.slice(0, 8)})`);
    const saved = await tokenStore.saveToken({
      teamUuid: targetUuid,
      teamName: orgDisplayName,
      accountUuid: acc.uuid,
      token,
    });
    return {
      team: { uuid: targetUuid, name: orgDisplayName },
      token_last4: saved.last4,
      store: await tokenStore.info(),
      autoAssigned: false,
      message: isOrgScope 
        ? 'Đã xác thực và lưu Org Token thành công (Xác thực scope organization_membership:read_teams OK)!'
        : 'Đã lưu Org Token thành công!'
    };
  }

  const tokTeam = acc.team || {};
  let autoAssigned = false;

  if (tokTeam.uuid && tokTeam.uuid !== targetUuid) {
    // Kiểm tra xem team thực tế của token đã có token trong hệ thống chưa
    const existingForActual = await tokenStore.getToken(tokTeam.uuid);
    if (!existingForActual) {
      // Team thực tế này CHƯA có token -> Tự động gán luôn vào team thực tế theo yêu cầu
      autoAssigned = true;
    } else {
      // Team thực tế đã có sẵn token rồi
      throw Object.assign(new Error(
        `❌ Lệch Team & Team đã có sẵn Token!\n`
        + `Token này thuộc team "${tokTeam.name || 'Không xác định'}" (UUID: ${tokTeam.uuid}), `
        + `nhưng team "${tokTeam.name}" ĐÃ ĐƯỢC CẤU HÌNH TOKEN TRƯỚC ĐÓ RỒI.\n`
        + `👉 Cách sửa: Trên trang DigitalOcean, bấm vào Avatar góc phải trên -> chọn "Switch Team" sang đúng team bạn đang cần cấu hình trước khi bấm Generate Token.`
      ), { status: 400 });
    }
  }

  try {
    await new DOClient(token).invoices();
  } catch (e) {
    if (e.status === 403 || (e.message && e.message.includes('403'))) {
      throw Object.assign(new Error(
        `❌ Token thuộc team "${tokTeam.name}" nhưng THIẾU QUYỀN ĐỌC BILLING (lỗi 403 Forbidden)!\n`
        + `👉 Nguyên nhân 1: Khi tạo token, bạn chưa tích chọn quyền "Billing -> Read" (billing:read).\n`
        + `👉 Nguyên nhân 2: Tài khoản của bạn trong team "${tokTeam.name}" chỉ có vai trò "Member" (cần là Owner hoặc Biller để xem được cước phí).\n\n`
        + `👉 Cách sửa:\n`
        + `1. Vào DigitalOcean -> Switch sang team "${tokTeam.name}".\n`
        + `2. Vào API -> Generate New Token -> Chọn "Custom Scopes".\n`
        + `3. Tích đủ 2 quyền: [✓] Billing: Read  và  [✓] Account: Read.\n`
        + `4. Sao chép token mới và dán lại vào đây.`
      ), { status: 400 });
    }
    throw Object.assign(new Error(`Lỗi khi kiểm tra hóa đơn của token: ${e.message}`), { status: 400 });
  }

  const saved = await tokenStore.saveToken({
    teamUuid: tokTeam.uuid, teamName: tokTeam.name, accountUuid: acc.uuid, token,
  });
  return {
    team: { uuid: tokTeam.uuid, name: tokTeam.name },
    token_last4: saved.last4,
    store: await tokenStore.info(),
    autoAssigned,
    targetTeamUuid: targetUuid,
    message: autoAssigned
      ? `⚡ Token thuộc team "${tokTeam.name}" (khác team bạn vừa chọn). Do "${tokTeam.name}" chưa có token nên hệ thống đã tự động gán thành công vào "${tokTeam.name}" (..${saved.last4})!`
      : `Đã lưu token thành công cho team: ${tokTeam.name}`
  };
}));

app.delete('/api/teams/:uuid/token', wrap(async (req) => {
  await tokenStore.removeToken(req.params.uuid);
  return { removed: true };
}));

// Xuất danh sách 62 team kèm trạng thái token ra file Excel
app.get('/api/teams/export-excel', async (req, res) => {
  try {
    const client = clientFrom(req);
    const [{ items: teams }, { data: accData }, savedTokens, allTokens] = await Promise.all([
      client.teams(),
      client.account(),
      tokenStore.list(),
      tokenStore.getAllTokens(),
    ]);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('DO Teams & Tokens', {
      views: [{ state: 'frozen', ySplit: 4 }]
    });

    sheet.mergeCells('A1:H1');
    sheet.getCell('A1').value = 'BẢNG QUẢN LÝ DIGITALOCEAN TEAMS VÀ PERSONAL ACCESS TOKEN';
    sheet.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
    sheet.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } };
    sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };
    sheet.getRow(1).height = 32;

    sheet.mergeCells('A2:H2');
    sheet.getCell('A2').value = `Xuất lúc: ${new Date().toLocaleString('vi-VN')} | Tổng: ${teams.length} teams | Yêu cầu Scopes: billing:read, account:read`;
    sheet.getCell('A2').font = { size: 10, italic: true, color: { argb: 'FF334155' } };
    sheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'left' };
    sheet.getRow(2).height = 22;
    sheet.getRow(3).height = 8;

    const headerRow = sheet.getRow(4);
    headerRow.values = [
      'STT', 'Tên Team (DigitalOcean)', 'Team UUID', 'Role', 'Trạng thái Token',
      'Personal Access Token (dop_v1_...)', 'Scopes Bắt Buộc', 'Ghi chú'
    ];
    headerRow.height = 28;
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
    headerRow.eachCell((cell, colNumber) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: colNumber === 6 ? 'FF059669' : 'FF2563EB' }
      };
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    // Thêm dòng Org Token lên đầu bảng Excel
    const orgTokenVal = allTokens['ORG_CLOUDAZ'] || '';
    const hasOrgToken = Boolean(orgTokenVal || savedTokens['ORG_CLOUDAZ']);
    const orgLast4 = savedTokens['ORG_CLOUDAZ']?.last4 || (orgTokenVal ? orgTokenVal.slice(-4) : '');
    const orgStatusText = hasOrgToken ? `Đã có token (..${orgLast4})` : 'Chưa có token';

    const orgRow = sheet.addRow([
      'ORG',
      '🏢 CloudAZ JSC (Master Organization)',
      'ORG_CLOUDAZ',
      'Org Owner',
      orgStatusText,
      orgTokenVal,
      'organization_membership:read_teams, billing:read',
      'Token cấp Tổ chức (Organization) - Quản trị và giám sát toàn bộ các team'
    ]);
    orgRow.height = 26;
    orgRow.font = { bold: true };
    orgRow.alignment = { vertical: 'middle' };
    orgRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
    orgRow.getCell(3).font = { name: 'Courier New', size: 9, bold: true };
    orgRow.getCell(4).alignment = { vertical: 'middle', horizontal: 'center' };
    orgRow.getCell(5).alignment = { vertical: 'middle', horizontal: 'center' };
    orgRow.getCell(6).font = { name: 'Courier New', size: 9, bold: true };
    orgRow.getCell(7).alignment = { vertical: 'middle', horizontal: 'center' };
    orgRow.eachCell((cell) => {
      cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEF2FF' } };
      cell.border = {
        top: { style: 'medium', color: { argb: 'FF6366F1' } },
        bottom: { style: 'medium', color: { argb: 'FF6366F1' } },
        left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
      };
    });

    teams.forEach((t, idx) => {
      const tokenVal = allTokens[t.uuid] || '';
      const hasToken = Boolean(tokenVal || savedTokens[t.uuid]);
      const last4 = savedTokens[t.uuid]?.last4 || (tokenVal ? tokenVal.slice(-4) : '');
      const statusText = hasToken ? `Đã có token (..${last4})` : 'Chưa có token';

      const row = sheet.addRow([
        idx + 1,
        t.name,
        t.uuid,
        t.user_role,
        statusText,
        tokenVal,
        'billing:read, account:read',
        t.user_role === 'Owner' ? 'Team Owner CloudAZ' : ''
      ]);
      row.height = 22;
      row.alignment = { vertical: 'middle' };
      row.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
      row.getCell(3).font = { name: 'Courier New', size: 9 };
      row.getCell(4).alignment = { vertical: 'middle', horizontal: 'center' };
      row.getCell(5).alignment = { vertical: 'middle', horizontal: 'center' };
      row.getCell(6).font = { name: 'Courier New', size: 9, bold: true };
      row.getCell(7).alignment = { vertical: 'middle', horizontal: 'center' };

      const isEven = idx % 2 === 0;
      row.eachCell((cell, colNumber) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
        };
        if (colNumber === 6) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0FDF4' } };
        } else if (isEven) {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };
        }
      });
    });

    sheet.columns = [
      { width: 8 }, { width: 35 }, { width: 42 }, { width: 12 },
      { width: 24 }, { width: 55 }, { width: 28 }, { width: 28 }
    ];

    const filename = `do_teams_tokens_${new Date().toISOString().slice(0, 10)}.xlsx`;
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Xuất danh sách kèm token ra CSV
app.get('/api/teams/export-csv', async (req, res) => {
  try {
    const client = clientFrom(req);
    const [{ items: teams }, savedTokens, allTokens] = await Promise.all([
      client.teams(),
      tokenStore.list(),
      tokenStore.getAllTokens(),
    ]);

    const header = ['STT', 'Team Name', 'Team UUID', 'Role', 'Status', 'Personal Access Token', 'Scopes', 'Ghi chú'];
    const lines = [header.join(',')];

    // Dòng Org Token
    const orgTokenVal = allTokens['ORG_CLOUDAZ'] || '';
    const hasOrgToken = Boolean(orgTokenVal || savedTokens['ORG_CLOUDAZ']);
    const orgLast4 = savedTokens['ORG_CLOUDAZ']?.last4 || (orgTokenVal ? orgTokenVal.slice(-4) : '');
    const orgStatus = hasOrgToken ? `Đã có token (..${orgLast4})` : 'Chưa có token';

    lines.push([
      'ORG',
      '"🏢 CloudAZ JSC (Master Organization)"',
      'ORG_CLOUDAZ',
      'Org Owner',
      `"${orgStatus}"`,
      `"${orgTokenVal}"`,
      '"organization_membership:read_teams, billing:read"',
      '"Token cấp Tổ chức (Organization) - Quản trị và giám sát toàn bộ các team"'
    ].join(','));

    teams.forEach((t, idx) => {
      const tokenVal = allTokens[t.uuid] || '';
      const hasToken = Boolean(tokenVal || savedTokens[t.uuid]);
      const last4 = savedTokens[t.uuid]?.last4 || (tokenVal ? tokenVal.slice(-4) : '');
      const status = hasToken ? `Đã có token (..${last4})` : 'Chưa có token';
      const note = t.user_role === 'Owner' ? 'Team Owner CloudAZ' : '';

      lines.push([
        idx + 1,
        `"${t.name.replace(/"/g, '""')}"`,
        t.uuid,
        t.user_role,
        `"${status}"`,
        `"${tokenVal}"`,
        `"billing:read, account:read"`,
        `"${note}"`
      ].join(','));
    });

    const csvContent = '\ufeff' + lines.join('\n');
    const filename = `do_teams_tokens_${new Date().toISOString().slice(0, 10)}.csv`;
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(csvContent);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Bulk import tokens từ mảng { items: [ { teamUuid, token } ] }
app.post('/api/teams/bulk-import', wrap(async (req) => {
  const items = Array.isArray(req.body && req.body.items) ? req.body.items : [];
  if (!items.length) {
    throw Object.assign(new Error('Danh sách token trống.'), { status: 400 });
  }

  const results = [];
  for (const it of items) {
    const teamUuid = (it.teamUuid || '').trim();
    const token = (it.token || '').trim();
    if (!teamUuid || !token) continue;

    try {
      if (!/^dop_v1_[0-9a-f]{20,}$/i.test(token)) {
        throw new Error('Token không đúng định dạng dop_v1_...');
      }
      const c = new DOClient(token);
      const { data: accData } = await c.account();
      const actualTeam = accData?.account?.team;
      if (!actualTeam || actualTeam.uuid !== teamUuid) {
        throw new Error(`Token thuộc team "${actualTeam?.name || '?'}", không khớp UUID`);
      }
      await c.invoices();
      const saved = await tokenStore.saveToken({
        teamUuid: actualTeam.uuid,
        teamName: actualTeam.name,
        accountUuid: accData.account.uuid,
        token
      });
      results.push({ teamUuid, teamName: actualTeam.name, success: true, last4: saved.last4 });
    } catch (e) {
      results.push({ teamUuid, success: false, error: e.message });
    }
  }

  const successCount = results.filter((r) => r.success).length;
  return {
    total: results.length,
    success_count: successCount,
    fail_count: results.length - successCount,
    results,
    store: await tokenStore.info()
  };
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
const RECON_LAYOUTS = ['VERTICAL_CHAIN', 'VERTICAL_PARALLEL', 'HORIZONTAL_ROWS', 'HORIZONTAL_COLS', 'SERVICE_BREAKDOWN', 'SERVICE_FEE'];

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
  // ?layout=SERVICE_FEE hoặc ?layout=VERTICAL_CHAIN,SERVICE_FEE — ép mẫu khi xuất; nhiều mẫu → nhân bản bảng
  const layouts = String(req.query.layout || '').split(',').map((x) => x.trim().toUpperCase()).filter((x) => RECON_LAYOUTS.includes(x));
  if (layouts.length) {
    result.sheets = result.sheets.flatMap((s) => layouts.map((layout) => ({
      ...s, layout, sheetSuffix: layouts.length > 1 ? layout : '',
      html: withHtml ? toHtml({ ...s, layout }) : s.html,
    })));
  }
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
