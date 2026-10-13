/**
 * Đọc sheet tháng của file Bill (bản markdown chuyển từ Excel) thành dữ liệu
 * đầu vào cho bảng đối soát:
 *   - billing của từng team (cột Q) — dùng thay API khi chưa có token team
 *   - điều khoản hợp đồng (R, S, T), tỷ giá (V)
 *   - kết quả Excel đã tính (U, W, Y, Z) — làm golden test
 *   - ghi chú AG–AL → profile khách (email, ngân hàng tỷ giá, số ngày confirm…)
 *
 * File nguồn: docs/01_requirements/01_billing_and_calculation/digital_ocean/
 *             AZ_Tính Bill DigitalOcean (DO)- xuất hđ - thu tiền khách 2026.md
 */
const fs = require('fs');
const path = require('path');
const { CALC_METHODS, billFormulaUsd } = require('./pricing');

const DEFAULT_FILE = path.resolve(__dirname, '../../docs/01_requirements/01_billing_and_calculation/digital_ocean',
  'AZ_Tính Bill DigitalOcean (DO)- xuất hđ - thu tiền khách 2026.md');

/** Ghi đè mẫu bảng cho các khách không theo mẫu mặc định (theo file Đối soát) */
const LAYOUT_OVERRIDES = {
  MOG: 'HORIZONTAL_ROWS',
  INTERSPACE: 'HORIZONTAL_ROWS',
  ONADS: 'HORIZONTAL_COLS',
  SECOMUS: 'SERVICE_BREAKDOWN',
  UPPROMOTE: 'SERVICE_BREAKDOWN',
};

const num = (v) => {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  if (!s) return null;
  const n = Number(s.replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
};
const text = (v) => String(v || '').replace(/<br\s*\/?>/gi, '\n').trim();

/** "2026-07" → "07.2026" */
const sheetNameOf = (period) => {
  const [y, m] = period.split('-');
  return `${m}.${y}`;
};

/** Cắt bảng markdown của 1 sheet thành mảng object theo chữ cái cột */
function readSheetTable(md, sheetName) {
  const start = md.indexOf(`\n## ${sheetName}`);
  if (start < 0) throw new Error(`Không thấy sheet ${sheetName} trong file Bill.`);
  const end = md.indexOf('\n## ', start + 5);
  const lines = md.slice(start, end < 0 ? undefined : end).split(/\r?\n/);

  const splitRow = (line) => line.replace(/^\|/, '').replace(/\|\s*$/, '')
    .split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, '|'));

  const headerIdx = lines.findIndex((l) => /^\|\s*_dòng_\s*\|/.test(l));
  if (headerIdx < 0) throw new Error(`Sheet ${sheetName}: không thấy dòng tiêu đề cột.`);
  const cols = splitRow(lines[headerIdx]);

  const rows = [];
  for (const line of lines.slice(headerIdx + 2)) {
    if (!line.startsWith('|')) break;
    const cells = splitRow(line);
    const o = {};
    cols.forEach((c, i) => { o[c] = cells[i] ?? ''; });
    rows.push(o);
  }
  return rows;
}

/** Tên ngắn của khách: lấy trong ngoặc (“ADAMO SOFTWARE”) hoặc phần đầu DO name */
function customerCode(nameOnInvoice, doName) {
  const m = String(nameOnInvoice).match(/[(（]\s*[“"]([^”"]+)[”"]\s*[)）]/);
  if (m) return m[1].trim().toUpperCase();
  const head = String(doName || '').split(/\s+-\s+/)[0].trim();
  return (head || String(nameOnInvoice).trim()).toUpperCase();
}

/** Trích profile từ cột ghi chú */
function profileFromNotes(notes) {
  const all = notes.join('\n');
  const bank = (all.match(/Tỷ giá\s+(TCB|VCB|BIDV|Vietcombank|Techcombank)/i) || [])[1];
  const bankCode = bank ? ({ vietcombank: 'VCB', techcombank: 'TCB' }[bank.toLowerCase()] || bank.toUpperCase()) : 'TCB';
  const confirm = all.match(/Sau\s+0?(\d+)\s+ngày/i);
  const emails = [...new Set((notes[0] || '').match(/[\w.+-]+@[\w-]+(\.[\w-]+)+/g) || [])];
  const invoiceEmail = (all.match(/Gửi hoá? ?đơn vào mail:?\s*([\w.+-]+@[\w.-]+)/i)
    || all.match(/gửi vào mail:?\s*([\w.+-]+@[\w.-]+)/i) || [])[1] || null;
  const docs = [];
  if (/ĐNTT/i.test(all)) docs.push('DNTT');
  if (/ĐSCP/i.test(notes[1] || '')) docs.push('DSCP');
  if (/BBNT/i.test(notes[1] || '')) docs.push('BBNT');
  if (/BBĐS/i.test(notes[1] || '')) docs.push('BBDS');
  if (/ký số/i.test(all)) docs.push('DIGITAL_SIGN');
  return {
    fxBank: bankCode,
    fxRule: /lúc xuất hóa đơn/i.test(all) ? 'INVOICE_DATE' : 'END_OF_MONTH',
    confirmDays: confirm ? Number(confirm[1]) : 2,
    reconEmails: emails,
    invoiceEmail,
    docBundle: docs,
    groupInvoice: /xuất chung/i.test(all),
    acceptCustomerAmount: /số tiền khách xác nhận/i.test(all),
  };
}

/** Suy ra calcMethod bằng cách so cột U với cả 2 công thức */
function inferCalcMethod(q, term, uExcel, excelRow) {
  if (uExcel === null || q === null) return { method: excelRow <= 24 ? 'CHAIN' : 'PARALLEL', source: 'position' };
  const chain = billFormulaUsd(q, { ...term, calcMethod: CALC_METHODS.CHAIN });
  const par = billFormulaUsd(q, { ...term, calcMethod: CALC_METHODS.PARALLEL });
  const okC = Math.abs(chain - uExcel) < 0.005;
  const okP = Math.abs(par - uExcel) < 0.005;
  if (okC && !okP) return { method: 'CHAIN', source: 'excel-formula' };
  if (okP && !okC) return { method: 'PARALLEL', source: 'excel-formula' };
  // Hai cách ra cùng số (vd usage = 0) hoặc không cách nào khớp → theo vị trí dòng
  return { method: excelRow <= 24 ? 'CHAIN' : 'PARALLEL', source: okC ? 'position(tie)' : 'position(nomatch)' };
}

/**
 * Đọc 1 kỳ.
 * @returns {{period:string, rows:Array<object>}}
 */
function loadBillPeriod(period, file = DEFAULT_FILE) {
  const md = fs.readFileSync(file, 'utf8');
  const raw = readSheetTable(md, sheetNameOf(period));
  const rows = [];

  for (const r of raw) {
    const excelRow = Number(r._dòng_);
    const teamId = (r.F || '').trim();
    if (excelRow <= 1 || !r.B || !teamId) continue;           // tiêu đề / dòng trống
    if (!/team|^[0-9a-f-]{20,}$/i.test(teamId)) continue;

    const q = num(r.Q) ?? num(r.P);
    const term = { discountPct: num(r.R) ?? 0, feePct: num(r.S) ?? 0, extraFeeUsd: num(r.T) ?? 0 };
    const u = num(r.U);
    const inferred = inferCalcMethod(q, term, u, excelRow);
    const code = customerCode(r.B, r.H);
    const notes = ['AG', 'AH', 'AI', 'AJ', 'AK', 'AL'].map((k) => text(r[k]));

    rows.push({
      excelRow,
      sellerEntity: /cloudino/i.test(r.A) ? 'CLOUDINO' : 'CLOUDAZ',
      flagS: r.A.trim() === 's',
      customerName: text(r.B),
      customerCode: code,
      sales: text(r.C),
      vendorInvoiceNo: text(r.E),
      teamId: teamId.startsWith('do:team:') ? teamId : `do:team:${teamId}`,
      teamEmail: text(r.G),
      doName: text(r.H),
      vendor: {
        totalDue: num(r.L), discount: num(r.M), usage: num(r.P),
        companyCredit: num(r.N), customerCredit: num(r.O),
      },
      billingUsd: q,
      term: { ...term, calcMethod: inferred.method, calcMethodSource: inferred.source },
      fxRate: num(r.V),
      vatPct: num(r.X) ?? 0.1,
      excel: { amountUsd: u, amountVnd: num(r.W), totalWithVat: num(r.Y), salesInvoiceNo: text(r.Z) },
      status: { mailSent: text(r.AA), confirmed: text(r.AB), invoiceSent: text(r.AC), needDocs: text(r.AD) },
      notes,
      profile: {
        ...profileFromNotes(notes),
        feeFirst: /^(AGAPISC|HAMSA)/.test(code),
        layout: LAYOUT_OVERRIDES[code]
          || (inferred.method === 'CHAIN' ? 'VERTICAL_CHAIN' : 'VERTICAL_PARALLEL'),
      },
    });
  }
  return { period, rows };
}

module.exports = { loadBillPeriod, readSheetTable, customerCode, profileFromNotes, DEFAULT_FILE, LAYOUT_OVERRIDES };
