/**
 * Render bảng đối soát theo 5 mẫu đang dùng trong file Đối soát.
 *
 * Mỗi layout chỉ quyết định CÁCH TRÌNH BÀY; mọi con số lấy từ sheet đã tính ở
 * build.js → không có chuyện bảng gửi khách lệch với số xuất hóa đơn.
 *
 *   toTable(sheet) → { title, subtitle, columns[], rows[][], footer[] }
 *   toMarkdown(sheet) / toHtml(sheet) / toHtmlDocument(sheets)
 */

const usd = (n) => (n === null || n === undefined || n === '' ? ''
  : Number(n).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
const vnd = (n) => (n === null || n === undefined || n === '' ? ''
  : Number(n).toLocaleString('vi-VN', { maximumFractionDigits: 0 }));
const pct = (p) => `${+(Number(p) * 100).toFixed(2)}%`;

const B = (s) => ({ text: s, bold: true });   // ô in đậm

/** Mẫu 1 & 2 & 5: dọc, 1 team / dòng, khối tính toán bên dưới */
function vertical(sheet, { breakdown = false } = {}) {
  const cols = ['STT', 'ID', 'Tháng', 'Billing (USD)', 'Tỷ giá', 'Thành tiền'];
  const rows = [];
  const l0 = sheet.lines[0];
  const chain = l0.term.calcMethod === 'CHAIN';
  const sum = (k) => sheet.lines.reduce((s, l) => s + (l[k] || 0), 0);

  if (breakdown) {
    // Mẫu 5: liệt kê nhóm dịch vụ (từ invoice items) rồi mới tính
    const groups = new Map();
    for (const l of sheet.lines) {
      for (const it of l.items || []) groups.set(it.group, (groups.get(it.group) || 0) + Number(it.amount || 0));
    }
    if (groups.size) {
      [...groups.entries()].sort((a, b) => b[1] - a[1]).forEach(([g, a], i) => {
        rows.push([String(i + 1), g, '', usd(a), '', '']);
      });
      rows.push([B('Total Service Fee'), '', '', B(usd(sum('billing'))), '', '']);
    } else {
      sheet.lines.forEach((l, i) => rows.push([String(i + 1), l.teamId, sheet.period, usd(l.billing), '', '']));
      rows.push(['', '(chưa có chi tiết nhóm dịch vụ — cần đồng bộ invoice items từ API)', '', '', '', '']);
    }
  } else {
    sheet.lines.forEach((l, i) => rows.push([String(i + 1), l.teamId, sheet.period, usd(l.billing), '', '']));
  }

  const fee = l0.term.feePct, disc = l0.term.discountPct;
  if (chain) {
    rows.push([`Giá trước chiết khấu (bao gồm ${pct(fee)} phí dịch vụ)`, '', '', usd(sum('gross')), '', '']);
    rows.push([`Chiết khấu (${pct(disc)})`, '', '', usd(sum('discount')), '', '']);
  } else {
    const order = sheet.profile && sheet.profile.feeFirst
      ? [['Phí dịch vụ', fee, 'fee'], ['Chiết khấu', disc, 'discount']]
      : [['Chiết khấu', disc, 'discount'], ['Phí dịch vụ', fee, 'fee']];
    for (const [label, p, k] of order) rows.push([`${label} (${pct(p)})`, '', '', usd(sum(k)), '', '']);
  }
  rows.push([B('Thành tiền'), '', '', B(usd(sheet.amountUsd)), vnd(sheet.fxRate), B(vnd(sheet.vnd))]);
  rows.push([`Thuế GTGT ${pct(sheet.vatPct)}`, '', '', '', '', vnd(sheet.vat)]);
  rows.push([B('Tổng số tiền phải thanh toán'), '', '', '', '', B(vnd(sheet.total))]);
  return { columns: cols, rows };
}

/** Mẫu 3: ngang, mỗi team 1 dòng, cột Discount / Tax-Fee */
function horizontalRows(sheet) {
  const d = sheet.lines[0].term.discountPct;
  const cols = ['STT', 'ID', 'Tháng', 'Billing DO (USD)', `Discount (${pct(d)})`, 'Tax, Fee',
    'Tỷ giá', 'Thành tiền', 'Thuế GTGT', 'Tổng thanh toán'];
  const rows = sheet.lines.map((l, i) => {
    const vatLine = (l.totalWithVat ?? Math.round(l.amountVnd * (1 + sheet.vatPct))) - l.amountVnd;
    // Mẫu 3 diễn giải CHAIN: Discount trên billing, Tax/Fee trên (billing − discount)
    const discount = Math.round(l.billing * d * 100) / 100;
    const taxFee = Math.round((l.amountUsd - l.billing + discount) * 100) / 100;
    return [String(i + 1), l.teamId, sheet.period, usd(l.billing), usd(discount), usd(taxFee),
      vnd(sheet.fxRate), vnd(l.amountVnd), vnd(vatLine), vnd(l.amountVnd + vatLine)];
  });
  const s = (k) => sheet.lines.reduce((a, l) => a + l[k], 0);
  rows.push([B('Tổng cộng'), '', '', B(usd(s('billing'))), '', '', '', B(vnd(sheet.vnd)), B(vnd(sheet.vat)), B(vnd(sheet.total))]);
  return { columns: cols, rows };
}

/** Mẫu 4: mỗi team 1 cột, chỉ tiêu xếp dọc, cột cuối Tổng cộng */
function horizontalCols(sheet) {
  const L = sheet.lines;
  const t = L[0].term;
  const cols = ['STT', 'Chỉ tiêu', ...L.map((l) => l.teamId), 'Tổng cộng'];
  const row = (i, label, f, total = '') => [String(i), label, ...L.map(f), total];
  return {
    columns: cols,
    rows: [
      row(1, 'Billing (USD)', (l) => usd(l.billing)),
      row(2, `Chiết khấu (${pct(t.discountPct)})`, (l) => usd(l.discount)),
      row(3, `Phí dịch vụ (${pct(t.feePct)})`, (l) => usd(l.fee)),
      row(4, 'Tổng cộng (USD)', (l) => usd(l.amountUsd), usd(sheet.amountUsd)),
      row(5, 'Tỷ giá', () => vnd(sheet.fxRate)),
      row(6, 'Thành tiền', (l) => vnd(l.amountVnd), vnd(sheet.vnd)),
      row(7, `Thuế GTGT ${pct(sheet.vatPct)}`, () => '', vnd(sheet.vat)),
      row(8, B('Tổng thanh toán'), () => '', B(vnd(sheet.total))),
    ],
  };
}

function toTable(sheet) {
  let body;
  switch (sheet.layout) {
    case 'HORIZONTAL_ROWS': body = horizontalRows(sheet); break;
    case 'HORIZONTAL_COLS': body = horizontalCols(sheet); break;
    case 'SERVICE_BREAKDOWN': body = vertical(sheet, { breakdown: true }); break;
    default: body = vertical(sheet);
  }
  const footer = [];
  if (sheet.prepaid) {
    footer.push(['Số tiền trả trước đầu kỳ', vnd(sheet.prepaid.opening)]);
    footer.push(['Cấn trừ kỳ này', vnd(sheet.prepaid.used)]);
    footer.push([B('Số tiền trả trước còn lại chuyển tháng sau'), B(vnd(sheet.prepaid.closing))]);
    footer.push([B('Số tiền còn phải thanh toán'), B(vnd(sheet.prepaid.payable))]);
  }
  return {
    title: `ĐỐI SOÁT CHI PHÍ DIGITALOCEAN - ${sheet.customerCode}`,
    subtitle: `${sheet.customerName} · Kỳ ${sheet.period} · Tỷ giá ${sheet.fxBank} ${vnd(sheet.fxRate)}`,
    ...body,
    footer,
  };
}

// ── Output ─────────────────────────────────────────────────────────────
const cellText = (c) => (c && typeof c === 'object' ? c.text : (c ?? ''));
const isBold = (c) => !!(c && typeof c === 'object' && c.bold);
const mdCell = (c) => {
  const t = String(cellText(c)).replace(/\|/g, '\\|');
  return isBold(c) && t ? `**${t}**` : t;
};

function toMarkdown(sheet) {
  const t = toTable(sheet);
  const out = [`### ${t.title}`, '', `> ${t.subtitle}`, ''];
  out.push(`| ${t.columns.join(' | ')} |`);
  out.push(`|${t.columns.map((_, i) => (i < 2 ? '---' : '---:')).join('|')}|`);
  for (const r of t.rows) out.push(`| ${r.map(mdCell).join(' | ')} |`);
  if (t.footer.length) {
    out.push('', '| Khoản | VND |', '|---|---:|');
    for (const r of t.footer) out.push(`| ${r.map(mdCell).join(' | ')} |`);
  }
  if (sheet.warnings && sheet.warnings.length) {
    out.push('', ...sheet.warnings.map((w) => `> ⚠️ ${w}`));
  }
  return out.join('\n');
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const htmlCell = (c, tag = 'td', i = 0) => {
  const t = esc(cellText(c));
  const cls = [i >= 2 ? 'num' : '', isBold(c) ? 'b' : ''].filter(Boolean).join(' ');
  return `<${tag}${cls ? ` class="${cls}"` : ''}>${t}</${tag}>`;
};

/** HTML của 1 bảng — dùng làm thân mail đối soát (inline style tối thiểu) */
function toHtml(sheet) {
  const t = toTable(sheet);
  const rows = t.rows.map((r) => `<tr>${r.map((c, i) => htmlCell(c, 'td', i)).join('')}</tr>`).join('');
  const foot = t.footer.length
    ? `<table class="recon foot">${t.footer.map((r) => `<tr>${r.map((c, i) => htmlCell(c, 'td', i * 2)).join('')}</tr>`).join('')}</table>`
    : '';
  return `<section class="sheet" id="sheet-${esc(sheet.customerCode).replace(/\s+/g, '-')}">
<h2>${esc(t.title)}</h2><p class="sub">${esc(t.subtitle)}</p>
<table class="recon"><thead><tr>${t.columns.map((c, i) => htmlCell(c, 'th', i)).join('')}</tr></thead><tbody>${rows}</tbody></table>
${foot}</section>`;
}

const CSS = `body{font-family:Inter,Segoe UI,Arial,sans-serif;margin:24px;color:#1b2333}
h1{font-size:20px}h2{font-size:15px;margin:28px 0 4px}.sub{color:#5b6475;margin:0 0 8px;font-size:13px}
table.recon{border-collapse:collapse;font-size:13px;min-width:640px}
table.recon th,table.recon td{border:1px solid #c9d1df;padding:5px 9px}
table.recon th{background:#eef2f8}td.num,th.num{text-align:right;white-space:nowrap}.b{font-weight:600}
table.foot{margin-top:8px}`;

function toHtmlDocument(sheets, title = 'Bảng đối soát DigitalOcean') {
  return `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>${CSS}</style></head><body><h1>${esc(title)}</h1>${sheets.map(toHtml).join('\n')}</body></html>`;
}

module.exports = { toTable, toMarkdown, toHtml, toHtmlDocument, CSS };
