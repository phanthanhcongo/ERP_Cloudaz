#!/usr/bin/env node
/**
 * Billing chi tiết từng tháng của ĐÚNG team mà DO_TOKEN thuộc về.
 *
 *   node teamReport.js                    # 12 kỳ gần nhất
 *   node teamReport.js --all              # toàn bộ kỳ
 *   node teamReport.js --from 2026-01 --to 2026-09
 *   node teamReport.js --month 2026-07    # 1 kỳ, kèm chi tiết nhóm sản phẩm
 *   node teamReport.js --month 2026-07 --items   # liệt kê từng dòng cước
 *   node teamReport.js --csv > out.csv    # xuất CSV theo tháng
 */
require('dotenv').config({ quiet: true });
const { DOClient } = require('./doClient');
const { buildInvoiceReport } = require('./invoiceReport');

const A = process.argv.slice(2);
const opt = (k) => { const i = A.indexOf('--' + k); return i >= 0 ? A[i + 1] : null; };
const has = (k) => A.includes('--' + k);

const money = (n) => Number(n || 0).toLocaleString('en-US',
  { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const pad = (s, n) => String(s).padEnd(n);
const padL = (s, n) => String(s).padStart(n);

async function main() {
  const c = new DOClient(process.env.DO_TOKEN);

  // ── Team nào ───────────────────────────────────────────────────
  const { data: acc } = await c.account();
  const team = acc.account.team;

  const { invoices, preview } = await c.invoices();
  let rows = [...invoices].sort((a, b) => b.invoice_period.localeCompare(a.invoice_period));

  const from = opt('from'), to = opt('to'), one = opt('month');
  if (one) rows = rows.filter((i) => i.invoice_period === one);
  else if (from || to) {
    rows = rows.filter((i) => (!from || i.invoice_period >= from)
                           && (!to || i.invoice_period <= to));
  } else if (!has('all')) rows = rows.slice(0, 12);

  if (!rows.length) {
    console.error(`Không có invoice nào khớp. Kỳ có sẵn: `
      + invoices.slice(0, 5).map((i) => i.invoice_period).join(', ') + '…');
    process.exit(1);
  }

  // ── Lấy summary + items từng kỳ ────────────────────────────────
  const reports = [];
  for (const inv of rows) {
    const [{ items }, summary] = await Promise.all([
      c.invoiceItems(inv.invoice_uuid),
      c.invoiceSummary(inv.invoice_uuid).then((r) => r.data).catch(() => null),
    ]);
    reports.push({
      period: inv.invoice_period,
      invoice: inv,
      items,
      report: buildInvoiceReport({
        invoiceUuid: inv.invoice_uuid, items, summary, invoice: inv,
      }),
    });
  }

  // ── Xuất CSV ───────────────────────────────────────────────────
  if (has('csv')) {
    console.log('team,period,invoice_id,usage_charges,overages,taxes,adjustments,amount_due,items,checks_ok');
    for (const r of reports) {
      const s = r.report.summary;
      console.log([
        JSON.stringify(team.name), r.period, r.report.info.invoice_id,
        s.usage_charges, s.overages, s.taxes, s.adjustments_total, s.amount_due,
        r.report.totals.items_count, r.report.all_ok,
      ].join(','));
    }
    return;
  }

  // ── Bảng theo tháng ────────────────────────────────────────────
  console.log(`\nTEAM: ${team.name}`);
  console.log(`UUID: ${team.uuid}`);
  console.log(`Tài khoản: ${acc.account.email}`);
  console.log(`Tổng số kỳ có hóa đơn: ${invoices.length}`
    + (preview ? ` (+ 1 bản preview tháng đang chạy)` : ''));

  const W = [9, 12, 12, 10, 10, 13, 13, 7, 6];
  const head = ['Kỳ', 'Invoice #', 'Usage', 'Overage', 'Thuế', 'Điều chỉnh', 'PHẢI TRẢ', 'Dòng', 'Khớp'];
  console.log('\n' + head.map((h, i) => (i >= 2 && i <= 7 ? padL(h, W[i]) : pad(h, W[i]))).join(' '));
  console.log(W.map((w) => '─'.repeat(w)).join(' '));

  let T = { usage: 0, over: 0, tax: 0, adj: 0, due: 0, items: 0 };
  for (const r of reports) {
    const s = r.report.summary;
    T.usage += s.usage_charges; T.over += s.overages; T.tax += s.taxes;
    T.adj += s.adjustments_total; T.due += s.amount_due;
    T.items += r.report.totals.items_count;
    console.log([
      pad(r.period, W[0]),
      pad(r.report.info.invoice_id || '—', W[1]),
      padL(money(s.usage_charges), W[2]),
      padL(s.overages ? money(s.overages) : '—', W[3]),
      padL(s.taxes ? money(s.taxes) : '—', W[4]),
      padL(s.adjustments_total ? money(s.adjustments_total) : '—', W[5]),
      padL(money(s.amount_due), W[6]),
      padL(r.report.totals.items_count, W[7]),
      padL(r.report.all_ok ? 'OK' : 'LỆCH', W[8]),
    ].join(' '));
  }
  console.log(W.map((w) => '─'.repeat(w)).join(' '));
  console.log([
    pad(`${reports.length} kỳ`, W[0]), pad('', W[1]),
    padL(money(T.usage), W[2]), padL(T.over ? money(T.over) : '—', W[3]),
    padL(T.tax ? money(T.tax) : '—', W[4]), padL(T.adj ? money(T.adj) : '—', W[5]),
    padL(money(T.due), W[6]), padL(T.items, W[7]), padL('', W[8]),
  ].join(' '));
  console.log('(đơn vị USD)');

  // ── Nhóm sản phẩm theo tháng ───────────────────────────────────
  if (reports.length > 1) {
    const prods = new Map();   // product -> {period -> amount}
    for (const r of reports) {
      for (const g of r.report.groups) {
        const key = g.name;
        if (!prods.has(key)) prods.set(key, {});
        prods.get(key)[r.period] = (prods.get(key)[r.period] || 0) + g.subtotal;
      }
    }
    const periods = reports.map((r) => r.period);
    const ranked = [...prods.entries()]
      .map(([name, byP]) => ({ name, byP, total: Object.values(byP).reduce((a, b) => a + b, 0) }))
      .sort((a, b) => b.total - a.total);

    console.log(`\nNHÓM SẢN PHẨM THEO THÁNG  (top ${Math.min(15, ranked.length)}/${ranked.length})\n`);
    const NW = 46;
    console.log(pad('Nhóm', NW) + periods.map((p) => padL(p.slice(2), 10)).join('') + padL('Tổng', 12));
    console.log('─'.repeat(NW + periods.length * 10 + 12));
    for (const row of ranked.slice(0, 15)) {
      console.log(pad(row.name.slice(0, NW - 1), NW)
        + periods.map((p) => padL(row.byP[p] != null ? money(row.byP[p]) : '·', 10)).join('')
        + padL(money(row.total), 12));
    }
    if (ranked.length > 15) {
      const rest = ranked.slice(15);
      console.log(pad(`… ${rest.length} nhóm còn lại`, NW)
        + periods.map((p) => padL(money(rest.reduce((a, r) => a + (r.byP[p] || 0), 0)), 10)).join('')
        + padL(money(rest.reduce((a, r) => a + r.total, 0)), 12));
    }
  }

  // ── Chi tiết 1 kỳ ──────────────────────────────────────────────
  if (reports.length === 1) {
    const r = reports[0];
    console.log(`\nCHI TIẾT KỲ ${r.period}  —  invoice ${r.report.invoice_uuid}\n`);
    console.log(pad('Nhóm sản phẩm', 52) + padL('Dòng', 6) + padL('Số tiền', 13));
    console.log('─'.repeat(71));
    for (const g of r.report.groups) {
      console.log(pad(g.name.slice(0, 51), 52) + padL(g.count, 6) + padL(money(g.subtotal), 13));
    }
    console.log('─'.repeat(71));
    console.log(pad('Tổng cước', 52) + padL(r.report.totals.charge_items_count, 6)
      + padL(money(r.report.totals.groups_total), 13));
    for (const a of r.report.summary.adjustments) {
      console.log(pad(a.name.slice(0, 51), 52) + padL('', 6) + padL(money(a.amount), 13));
    }
    if (r.report.summary.taxes) {
      console.log(pad('Thuế', 52) + padL('', 6) + padL(money(r.report.summary.taxes), 13));
    }
    console.log(pad('PHẢI TRẢ', 52) + padL('', 6) + padL(money(r.report.summary.amount_due), 13));

    if (has('items')) {
      console.log(`\nTỪNG DÒNG CƯỚC (${r.items.length} dòng)\n`);
      console.log(pad('Nhóm', 30) + pad('Hạng mục', 46) + padL('Giờ', 7)
        + pad('  Start', 14) + pad('End', 14) + padL('Số tiền', 11));
      console.log('─'.repeat(124));
      for (const g of r.report.groups) {
        for (const l of g.lines) {
          console.log(pad(g.name.slice(0, 29), 30) + pad(l.description.slice(0, 45), 46)
            + padL(l.hours || '—', 7) + pad('  ' + (l.start || '—'), 14)
            + pad(l.end || '—', 14) + padL(money(l.amount), 11));
        }
      }
    }

    console.log('\nĐỐI CHIẾU\n');
    for (const ck of r.report.checks) {
      console.log(`  ${ck.ok ? '✓' : '✗'} ${pad(ck.label, 44)} ${padL(money(ck.value), 12)}  ${ck.note}`);
    }
  }
  console.log('');
}

main().catch((e) => { console.error('LỖI:', e.message); process.exit(1); });
