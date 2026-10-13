/**
 * Dựng bảng đối soát (recon sheet) cho 1 kỳ từ các dòng billing theo team.
 *
 * Đầu vào chung (độc lập nguồn — Excel hoặc DB/API):
 *   { teamId, customerCode, customerName, billingUsd, term, fxRate, vatPct,
 *     vendor:{usage,discount,totalDue,customerCredit}, profile, items?, excel? }
 *
 * Đầu ra: mỗi khách 1 sheet, các team của khách gom chung, VAT tính 1 lần.
 */
const { priceLine, totalsVnd, applyPrepaid } = require('./pricing');

const norm = (s) => String(s || '').toUpperCase().replace(/\s+/g, ' ').trim();

/** Gom team theo khách: cùng tên trên hóa đơn HOẶC cùng số HĐ VAT */
function groupByCustomer(rows) {
  const parent = rows.map((_, i) => i);
  const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
  const union = (a, b) => { parent[find(a)] = find(b); };
  const byKey = new Map();
  rows.forEach((r, i) => {
    const keys = [`N:${norm(r.customerName)}`];
    if (r.excel && r.excel.salesInvoiceNo) keys.push(`Z:${r.excel.salesInvoiceNo}`);
    for (const k of keys) {
      if (byKey.has(k)) union(i, byKey.get(k)); else byKey.set(k, i);
    }
  });
  const groups = new Map();
  rows.forEach((r, i) => {
    const g = find(i);
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(r);
  });
  return [...groups.values()];
}

function warningsFor(r) {
  const w = [];
  const v = r.vendor || {};
  if (v.usage > 0 && v.discount !== null && v.discount !== undefined) {
    const ratio = v.discount / v.usage;
    if (ratio < 0.24 || ratio > 0.26) w.push(`Discount hãng ${(ratio * 100).toFixed(2)}% ngoài khoảng 24–26%`);
  }
  if (v.customerCredit > 0) w.push(`Có credit của khách ${v.customerCredit} USD — chưa trừ (chờ xác nhận Q2)`);
  if (r.term.calcMethodSource && r.term.calcMethodSource.startsWith('position')) {
    w.push(`Cách tính ${r.term.calcMethod} gán theo vị trí dòng — cần xác nhận`);
  }
  if (!r.fxRate) w.push('Chưa có tỷ giá');
  return w;
}

/**
 * @param {Array<object>} rows       dòng billing theo team
 * @param {{period:string, rounding?:'BILL'|'RECON', fxOverride?:Record<string,number>, prepaid?:Record<string,number>}} opt
 *        fxOverride: tỷ giá theo ngân hàng, vd {TCB: 26475, VCB: 26350}
 *        prepaid:    số dư trả trước đầu kỳ theo customerCode
 */
function buildReconSheets(rows, opt = {}) {
  const sheets = [];
  const noUsage = [];

  for (const group of groupByCustomer(rows)) {
    const head = group[0];
    const active = group.filter((r) => Number(r.billingUsd) > 0);
    if (!active.length) {
      noUsage.push({ customerCode: head.customerCode, teams: group.map((r) => r.teamId) });
      continue;
    }

    const profile = head.profile || {};
    const fxRate = (opt.fxOverride && opt.fxOverride[profile.fxBank]) || head.fxRate || null;
    const vatPct = head.vatPct ?? 0.1;

    const priced = active.map((r) => ({
      teamId: r.teamId,
      doName: r.doName,
      vendorInvoiceNo: r.vendorInvoiceNo,
      term: r.term,
      ...priceLine(r.billingUsd, r.term, { rounding: opt.rounding }),
      items: r.items || null,
      warnings: warningsFor({ ...r, fxRate }),
    }));
    const t = totalsVnd(priced, fxRate || 0, vatPct, { rounding: opt.rounding });

    const sheet = {
      period: opt.period,
      customerCode: head.customerCode,
      customerName: head.customerName,
      sellerEntity: head.sellerEntity,
      layout: profile.layout,
      profile,
      fxBank: profile.fxBank,
      fxRate,
      vatPct,
      rounding: opt.rounding || 'BILL',
      lines: t.lines,
      amountUsd: t.amountUsd,
      vnd: t.vnd,
      vat: t.vat,
      total: t.total,
      status: 'DRAFT',
      warnings: [...new Set(priced.flatMap((p) => p.warnings))],
    };

    const opening = opt.prepaid && opt.prepaid[head.customerCode];
    if (opening) sheet.prepaid = applyPrepaid(t.total, opening);

    // So với Excel (nếu nguồn là file Bill)
    if (active.every((r) => r.excel && r.excel.totalWithVat !== null)) {
      const excelUsd = active.reduce((s, r) => s + (r.excel.amountUsd || 0), 0);
      const excelTotal = active.reduce((s, r) => s + (r.excel.totalWithVat || 0), 0);
      sheet.excelCheck = {
        amountUsd: Math.round(excelUsd * 100) / 100,
        total: excelTotal,
        diffUsd: Math.round((t.amountUsd - excelUsd) * 100) / 100,
        diffVnd: t.total - excelTotal,
      };
    }
    sheets.push(sheet);
  }

  sheets.sort((a, b) => a.customerCode.localeCompare(b.customerCode));
  return { period: opt.period, sheets, noUsage };
}

module.exports = { buildReconSheets, groupByCustomer };
