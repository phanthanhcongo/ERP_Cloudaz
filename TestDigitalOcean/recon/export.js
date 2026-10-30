/**
 * Xuất bảng đối soát ra XLSX: mỗi khách 1 sheet (chỉ bảng đối soát), bố cục
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

const LAYOUT_SHORT = {
  VERTICAL_CHAIN: 'M1', VERTICAL_PARALLEL: 'M2', HORIZONTAL_ROWS: 'M3',
  HORIZONTAL_COLS: 'M4', SERVICE_BREAKDOWN: 'M5', SERVICE_FEE: 'M6',
};

const FONT = 'Times New Roman';
const THIN = { style: 'thin', color: { argb: 'FF000000' } };
const BORDER = { top: THIN, left: THIN, bottom: THIN, right: THIN };
const FMT_USD = '"$"#,##0.00';
const FMT_VND = '#,##0 "đ"';
const CENTER = { vertical: 'middle', horizontal: 'center', wrapText: true };

/** "2026-07" → "07/2026" */
const fmtPeriod = (p) => (/^\d{4}-\d{2}$/.test(p) ? `${p.slice(5)}/${p.slice(0, 4)}` : p);
/** Ô tiền: render dùng 2 số lẻ cho USD, 0 số lẻ cho VND */
const isUsdText = (s) => /,\d{2}$/.test(String(s));

/** Ghi 1 bảng (columns + rows) từ dòng `r0`, trả về dòng cuối */
function writeTable(ws, columns, rows, r0, { period }) {
  const n = columns.length;
  const head = ws.getRow(r0);
  columns.forEach((c, i) => {
    const cell = head.getCell(i + 1);
    cell.value = c;
    cell.font = { name: FONT, size: 12, bold: true };
    cell.alignment = CENTER;
  });
  head.height = n >= 9 ? 36 : 22;

  rows.forEach((r, ri) => {
    const row = ws.getRow(r0 + 1 + ri);
    row.height = n >= 9 && /^\d+$/.test(cellText(r[0])) ? 34 : 20;
    r.forEach((c, i) => {
      const cell = row.getCell(i + 1);
      let raw = cellText(c);
      if (raw === period) raw = fmtPeriod(period);
      const v = i === 0 ? (/^\d+$/.test(raw) ? Number(raw) : raw) : toValue(raw);
      cell.value = v === '' ? null : v;
      cell.font = { name: FONT, size: 12, bold: isBold(c) || /^Thuế GTGT/.test(cellText(r[0])) };
      if (typeof v === 'number' && i > 0) {
        cell.numFmt = isUsdText(raw) ? FMT_USD : FMT_VND;
      }
      cell.alignment = CENTER;
    });
    // Dòng nhãn tính toán (cột 2–3 trống) → gộp 3 ô đầu; mẫu 3 cột → gộp 2 ô đầu
    const label = cellText(r[0]);
    if (label && !/^\d+$/.test(label)) {
      if (n >= 4 && !cellText(r[1]) && !cellText(r[2])) ws.mergeCells(row.number, 1, row.number, 3);
      else if (n === 3 && !cellText(r[1])) ws.mergeCells(row.number, 1, row.number, 2);
    }
  });

  const last = r0 + rows.length;
  for (let r = r0; r <= last; r++) {
    for (let c = 1; c <= n; c++) {
      const cell = ws.getRow(r).getCell(c);
      cell.border = BORDER;
      cell.alignment = CENTER;
    }
  }
  return last;
}

async function toXlsx(result, file) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'CloudAZ ERP — recon';
  const used = new Set();

  // ── Mỗi khách 1 sheet (chỉ bảng đối soát, không có sheet tổng hợp) ──
  for (const s of result.sheets) {
    const t = toTable(s);
    const suffix = s.sheetSuffix ? ` ${LAYOUT_SHORT[s.sheetSuffix] || s.sheetSuffix}` : '';
    const ws = wb.addWorksheet(sheetName(`${s.customerCode.slice(0, 31 - suffix.length - 3)}${suffix}`, used), {
      views: [{ showGridLines: false }],
      pageSetup: { orientation: 'landscape', fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
    });
    const n = t.columns.length;

    // Tiêu đề lớn, gộp ngang toàn bảng
    ws.mergeCells(1, 1, 1, n);
    const title = ws.getCell(1, 1);
    title.value = t.xlsxTitle || `TỔNG HỢP CHI PHÍ DIGITALOCEAN - ${s.customerCode}`;
    title.font = t.xlsxTitle ? { name: FONT, size: 14, bold: true } : { name: FONT, size: 18 };
    title.alignment = CENTER;
    ws.getRow(1).height = 32;

    let last = writeTable(ws, t.columns, t.rows, 3, { period: s.period });

    if (t.footer.length) {
      last = writeTable(ws, ['Khoản', 'Số tiền'], t.footer, last + 2, { period: s.period });
    }

    // Độ rộng cột theo tiêu đề
    t.columns.forEach((c, i) => {
      const wide = n >= 9; // mẫu ngang: ID xuống dòng cho gọn
      const w = { STT: 7, ID: wide ? 28 : 46, 'Tháng': 11, 'Chỉ tiêu': 30, 'Service Name': 42, 'Service Fee': 24,
        'Tổng số tiền phải thanh toán': 30, 'Thành tiền': 18 }[c] || (wide ? 15 : 18);
      ws.getColumn(i + 1).width = w;
    });
    if (t.footer.length && n < 2) ws.getColumn(2).width = 18;
  }

  await wb.xlsx.writeFile(file);
  return file;
}
module.exports = { toXlsx };
