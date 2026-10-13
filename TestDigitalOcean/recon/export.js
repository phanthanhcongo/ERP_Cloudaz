/**
 * Xuất bảng đối soát ra XLSX: sheet "Tổng hợp" + mỗi khách 1 sheet, bố cục
 * giống block trong file "DO_Bảng tổng hợp_ đối soát chi phí.xlsx".
 */
const ExcelJS = require('exceljs');
const { toTable } = require('./render');

const cellText = (c) => (c && typeof c === 'object' ? c.text : (c ?? ''));
const isBold = (c) => !!(c && typeof c === 'object' && c.bold);
/** "1.234,56" (vi-VN) → 1234.56; giữ nguyên chuỗi chữ */
function toValue(s) {
  const t = String(s);
  if (/^-?[\d.]+(,\d+)?$/.test(t) && /\d/.test(t)) return Number(t.replace(/\./g, '').replace(',', '.'));
  return t;
}

/** Tên sheet Excel: ≤31 ký tự, không chứa []:*?/\ */
const sheetName = (s, used) => {
  let base = String(s).replace(/[[\]:*?/\\]/g, ' ').slice(0, 28).trim() || 'Sheet';
  let name = base, i = 2;
  while (used.has(name)) name = `${base} ${i++}`;
  used.add(name);
  return name;
};

async function toXlsx(result, file) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'CloudAZ ERP — recon';
  const used = new Set();

  // ── Tổng hợp ──
  const sum = wb.addWorksheet(sheetName('Tổng hợp', used));
  sum.columns = [
    { header: 'Khách', key: 'code', width: 26 },
    { header: 'Tên trên hóa đơn', key: 'name', width: 48 },
    { header: 'Pháp nhân', key: 'seller', width: 11 },
    { header: 'Mẫu', key: 'layout', width: 19 },
    { header: 'Số team', key: 'teams', width: 8 },
    { header: 'Billing (USD)', key: 'billing', width: 14, style: { numFmt: '#,##0.00' } },
    { header: 'Thành tiền (USD)', key: 'usd', width: 15, style: { numFmt: '#,##0.00' } },
    { header: 'Tỷ giá', key: 'fx', width: 10, style: { numFmt: '#,##0' } },
    { header: 'Thành tiền (VND)', key: 'vnd', width: 16, style: { numFmt: '#,##0' } },
    { header: 'VAT', key: 'vat', width: 14, style: { numFmt: '#,##0' } },
    { header: 'Tổng thanh toán', key: 'total', width: 16, style: { numFmt: '#,##0' } },
    { header: 'Lệch Excel (VND)', key: 'diff', width: 14, style: { numFmt: '#,##0' } },
    { header: 'Cảnh báo', key: 'warn', width: 60 },
  ];
  for (const s of result.sheets) {
    sum.addRow({
      code: s.customerCode, name: s.customerName, seller: s.sellerEntity, layout: s.layout,
      teams: s.lines.length, billing: s.lines.reduce((a, l) => a + l.billing, 0),
      usd: s.amountUsd, fx: s.fxRate, vnd: s.vnd, vat: s.vat, total: s.total,
      diff: s.excelCheck ? s.excelCheck.diffVnd : null, warn: s.warnings.join('; '),
    });
  }
  sum.getRow(1).font = { bold: true };
  sum.views = [{ state: 'frozen', ySplit: 1 }];

  // ── Mỗi khách 1 sheet ──
  for (const s of result.sheets) {
    const t = toTable(s);
    const ws = wb.addWorksheet(sheetName(s.customerCode, used));
    ws.addRow([t.title]).font = { bold: true, size: 13 };
    ws.addRow([t.subtitle]).font = { italic: true, color: { argb: 'FF5B6475' } };
    ws.addRow([]);
    const head = ws.addRow(t.columns);
    head.font = { bold: true };
    head.eachCell((c) => { c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEEF2F8' } }; });
    for (const r of [...t.rows, ...(t.footer.length ? [[], ...t.footer] : [])]) {
      const row = ws.addRow(r.map((c) => toValue(cellText(c))));
      r.forEach((c, i) => {
        const cell = row.getCell(i + 1);
        if (isBold(c)) cell.font = { bold: true };
        if (typeof cell.value === 'number') cell.numFmt = Number.isInteger(cell.value) && i !== 3 ? '#,##0' : '#,##0.00';
      });
    }
    ws.columns.forEach((col, i) => { col.width = i === 0 ? 44 : i === 1 ? 46 : 16; });
    if (s.warnings.length) {
      ws.addRow([]);
      s.warnings.forEach((w) => { ws.addRow([`⚠ ${w}`]).font = { color: { argb: 'FFB45309' } }; });
    }
  }

  await wb.xlsx.writeFile(file);
  return file;
}

module.exports = { toXlsx };
