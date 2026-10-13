/**
 * Golden test: kỳ 07.2026 phải ra đúng số đã xuất hóa đơn trong file Bill
 * và đúng các block đối soát đã gửi khách.
 *   node --test recon/
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const { priceLine, totalsVnd, applyPrepaid, billFormulaUsd, round2 } = require('./pricing');
const { loadBillPeriod } = require('./excelSource');
const { buildReconSheets } = require('./build');

const CHAIN = (d, s) => ({ calcMethod: 'CHAIN', discountPct: d, feePct: s });
const PAR = (d, s) => ({ calcMethod: 'PARALLEL', discountPct: d, feePct: s });

test('CHAIN — ADFLEX 12%/10%', () => {
  const l = priceLine(2269.6, CHAIN(0.12, 0.1));
  assert.equal(l.gross, 2496.56);
  assert.equal(l.discount, 299.59);
  assert.equal(l.amountUsd, 2196.97);
  const t = totalsVnd([l], 26475);
  assert.deepEqual([t.vnd, t.vat, t.total], [58164781, 5816478, 63981259]);
});

test('PARALLEL — FINSIFY 10%/10% ra đúng 100% usage', () => {
  const l = priceLine(326.12, PAR(0.1, 0.1));
  assert.equal(l.discount, 32.61);
  assert.equal(l.fee, 32.61);
  assert.equal(l.amountUsd, 326.12);
});

test('Cùng 10%/10%: CHAIN ra 99%, PARALLEL ra 100%', () => {
  assert.equal(billFormulaUsd(790.4, CHAIN(0.1, 0.1)), 782.5);
  assert.equal(billFormulaUsd(790.4, PAR(0.1, 0.1)), 790.4);
});

test('Phí lẻ 5.88% — NIỀM VUI', () => {
  assert.equal(priceLine(99.42, PAR(0.1, 0.0588)).amountUsd, 95.32);
});

test('RECON rounding lệch 0,01 USD so với BILL ở một số dòng (D2M)', () => {
  assert.equal(priceLine(619.67, CHAIN(0.1, 0.1), { rounding: 'BILL' }).amountUsd, 613.47);
  assert.equal(priceLine(619.67, CHAIN(0.1, 0.1), { rounding: 'RECON' }).amountUsd, 613.48);
});

test('Trả trước — ACTLIFE', () => {
  assert.deepEqual(applyPrepaid(1397880, 11050723),
    { opening: 11050723, used: 1397880, closing: 9652843, payable: 0 });
});

test('round2 kiểu Excel (half away from zero)', () => {
  assert.equal(round2(1.005), 1.01);
  assert.equal(round2(-1.005), -1.01);
});

// ── Toàn bộ kỳ 07.2026 so với file Bill ─────────────────────────────────
const { rows } = loadBillPeriod('2026-07');
const result = buildReconSheets(rows, { period: '2026-07' });
const by = (code) => result.sheets.find((s) => s.customerCode === code);

test('Suy ra cách tính từ công thức Excel: dòng 3–24 CHAIN, 25+ PARALLEL', () => {
  for (const r of rows.filter((x) => x.term.calcMethodSource === 'excel-formula')) {
    assert.equal(r.term.calcMethod, r.excelRow <= 24 ? 'CHAIN' : 'PARALLEL', `dòng ${r.excelRow}`);
  }
});

test('Mọi bảng có phát sinh khớp tổng thanh toán của file Bill (lệch 0đ)', () => {
  assert.ok(result.sheets.length >= 45);
  const bad = result.sheets.filter((s) => !s.excelCheck || s.excelCheck.diffVnd !== 0)
    .map((s) => `${s.customerCode}: ${s.excelCheck && s.excelCheck.diffVnd}`);
  assert.deepEqual(bad, []);
});

test('Khách nhiều team gom 1 bảng — ONADS, INTERSPACE', () => {
  assert.equal(by('ONADS').lines.length, 2);
  assert.equal(by('ONADS').total, 69451338);
  assert.equal(by('ONADS').layout, 'HORIZONTAL_COLS');
  assert.equal(by('INTERSPACE').lines.length, 2);
  assert.equal(by('INTERSPACE').fxBank, 'BIDV');
  assert.equal(by('INTERSPACE').layout, 'HORIZONTAL_ROWS');
});

test('Ngân hàng tỷ giá & mẫu bảng lấy từ ghi chú', () => {
  assert.equal(by('MOG').fxBank, 'VCB');
  assert.equal(by('ADFLEX').fxBank, 'TCB');
  assert.equal(by('SECOMUS').layout, 'SERVICE_BREAKDOWN');
  assert.equal(by('FINSIFY').layout, 'VERTICAL_PARALLEL');
});

test('Cảnh báo credit của khách — FRESHDI', () => {
  assert.ok(by('FRESHDI').warnings.some((w) => /credit của khách/.test(w)));
});

test('Ghi đè tỷ giá theo ngân hàng', () => {
  const r = buildReconSheets(rows, { period: '2026-07', fxOverride: { TCB: 26500 } });
  const s = r.sheets.find((x) => x.customerCode === 'ADFLEX');
  assert.equal(s.fxRate, 26500);
  assert.equal(r.sheets.find((x) => x.customerCode === 'MOG').fxRate, 26350);
});
