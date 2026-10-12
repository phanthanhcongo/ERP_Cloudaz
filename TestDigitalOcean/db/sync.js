#!/usr/bin/env node
/**
 * Đồng bộ billing DO về DB.
 *
 *   node db/sync.js                      # tất cả team, kỳ tháng trước
 *   node db/sync.js --month 2026-07      # một kỳ cụ thể
 *   node db/sync.js --team ahamove-prod  # một team
 *   node db/sync.js --from 2026-01 --to 2026-09   # nạp nhiều kỳ
 *   node db/sync.js --env                # nạp team từ DO_TOKEN trong .env
 */
require('dotenv').config();
const { DOClient } = require('../doClient');
const { buildInvoiceReport } = require('../invoiceReport');
const db = require('./index');

function args() {
  const a = process.argv.slice(2);
  const get = (k) => { const i = a.indexOf('--' + k); return i >= 0 ? a[i + 1] : null; };
  return {
    month: get('month'), from: get('from'), to: get('to'),
    team: get('team'), useEnv: a.includes('--env'),
  };
}

const lastMonth = () => {
  const d = new Date();
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - 1, 1)).toISOString().slice(0, 7);
};

function periodList(o) {
  if (o.from && o.to) {
    const out = [];
    let [y, m] = o.from.split('-').map(Number);
    const [ey, em] = o.to.split('-').map(Number);
    while (y * 12 + m <= ey * 12 + em) {
      out.push(`${y}-${String(m).padStart(2, '0')}`);
      m += 1; if (m > 12) { m = 1; y += 1; }
    }
    return out;
  }
  return [o.month || lastMonth()];
}

/** Đăng ký team từ DO_TOKEN trong .env — tên org/team lấy từ /v2/account */
async function registerFromEnv() {
  const token = process.env.DO_TOKEN;
  if (!token) throw new Error('Thiếu DO_TOKEN trong .env.');
  const { data } = await new DOClient(token).account();
  const acc = data.account;
  const teamName = (acc.team && acc.team.name) || acc.email || 'default';
  const code = teamName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'default';

  await db.upsertOrg({ code, name: teamName, note: 'Tự tạo từ DO_TOKEN trong .env' });
  const team = await db.upsertTeam({
    orgCode: code, code, name: teamName, token,
    doTeamUuid: acc.team && acc.team.uuid,
    doTeamName: acc.team && acc.team.name,
    doAccountUuid: acc.uuid,
    note: 'Tự tạo từ DO_TOKEN trong .env',
  });
  console.log(`Đã đăng ký org/team "${code}" (token …${team.token_last4})`);
  return team;
}

/** Sync một team, một kỳ */
async function syncOne(team, period) {
  const t0 = Date.now();
  try {
    const token = await db.teamToken(team.id);
    if (!token) {
      await db.logSync({ teamId: team.id, period, status: 'skipped', message: 'Chưa có token' });
      console.log(`  ${team.code} ${period}: bỏ qua — chưa có token`);
      return;
    }
    const client = new DOClient(token);
    const { invoices, preview } = await client.invoices();
    const matched = invoices.filter((i) => i.invoice_period === period);
    const isCurrent = period === new Date().toISOString().slice(0, 7);

    let target = matched[0] || null;
    let isPreview = false;
    if (!target && isCurrent && preview) { target = preview; isPreview = true; }

    if (!target) {
      await db.logSync({ teamId: team.id, period, status: 'skipped', message: 'Không có invoice cho kỳ này' });
      console.log(`  ${team.code} ${period}: không có invoice`);
      return;
    }

    const uuid = target.invoice_uuid;
    const [{ items }, summary] = await Promise.all([
      client.invoiceItems(uuid),
      client.invoiceSummary(uuid).then((r) => r.data).catch(() => null),
    ]);
    const report = buildInvoiceReport({ invoiceUuid: uuid, items, summary, invoice: target });
    report.is_preview = isPreview;

    const r = await db.saveInvoice({ teamId: team.id, period, report, items });
    await db.logSync({
      teamId: team.id, period, status: 'ok', invoices: 1, items: r.items,
      durationMs: Date.now() - t0,
      message: report.all_ok ? null : 'Đối chiếu có dòng LỆCH',
    });
    console.log(`  ${team.code} ${period}: ${r.items} dòng · $${report.summary.amount_due}`
      + (isPreview ? ' (preview)' : '') + (report.all_ok ? '' : ' ⚠ LỆCH'));
  } catch (e) {
    await db.logSync({
      teamId: team.id, period, status: 'error',
      message: e.message, durationMs: Date.now() - t0,
    });
    console.error(`  ${team.code} ${period}: LỖI — ${e.message}`);
  }
}

async function main() {
  const o = args();
  if (o.useEnv) await registerFromEnv();

  let teams = await db.syncableTeams();
  if (o.team) teams = teams.filter((t) => t.code === o.team);
  if (!teams.length) {
    console.log('Không có team nào để sync. Chạy `node db/sync.js --env` để đăng ký team từ .env.');
    return;
  }

  const periods = periodList(o);
  console.log(`Sync ${teams.length} team × ${periods.length} kỳ (${periods[0]}`
    + (periods.length > 1 ? ` → ${periods[periods.length - 1]}` : '') + ')');

  for (const team of teams) {
    console.log(`${team.org_code}/${team.code}:`);
    for (const p of periods) await syncOne(team, p);
  }
}

main()
  .then(() => db.pool.end())
  .catch((e) => { console.error('LỖI:', e.message); db.pool.end(); process.exit(1); });
