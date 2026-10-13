/**
 * Pricing engine — tính tiền thu khách từ Billing DO (usage, chưa trừ discount hãng).
 *
 * Hàm thuần, không I/O. Hai cách tính đang tồn tại trong file Bill (xem
 * docs/.../PhanTich_BangTinhBill_DoiSoat_DO.md mục 2.3):
 *
 *   CHAIN    : USD = usage × (1 + fee) × (1 − discount)     (khách cũ, mẫu 1/3/5)
 *   PARALLEL : USD = usage × (1 − discount) + usage × fee   (khách mới, mẫu 2/4)
 *
 * Quy tắc làm tròn — chờ kế toán chốt Q7, nên để thành tham số `rounding`:
 *   BILL  (mặc định) — đúng như file Bill, là số đã xuất hóa đơn:
 *         USD = ROUND(công thức, 2) một lần; W = ROUND(USD × tỷ giá, 2);
 *         Tổng = ROUND(W × (1 + VAT), 0) từng team; VAT = Tổng − ROUND(W, 0).
 *   RECON — làm tròn TỪNG BƯỚC hiển thị (như block trong file Đối soát):
 *         USD 2 số lẻ từng dòng; VND 0 số lẻ / team; VAT 0 số lẻ trên tổng VND.
 *   Hai cách có thể lệch 0,01 USD (≈ 290đ) hoặc 1đ — xem recon/README.md.
 */

const CALC_METHODS = Object.freeze({ CHAIN: 'CHAIN', PARALLEL: 'PARALLEL' });
const ROUNDING = Object.freeze({ BILL: 'BILL', RECON: 'RECON' });

/** Làm tròn kiểu Excel ROUND (half away from zero), tránh lỗi số thực 1.005 → 1 */
function roundTo(n, digits) {
  const x = Number(n) || 0;
  const f = 10 ** digits;
  const v = Math.round(Math.abs(x) * f + Number.EPSILON * f) / f;
  return x < 0 ? -v : v;
}
const round2 = (n) => roundTo(n, 2);
const round0 = (n) => roundTo(n, 0);

/**
 * Tính 1 dòng (1 team) theo điều khoản hợp đồng.
 * @param {number} billingUsd   Total usage charges của team trong kỳ
 * @param {{calcMethod:'CHAIN'|'PARALLEL', discountPct:number, feePct:number, extraFeeUsd?:number}} term
 * @param {{rounding?:'BILL'|'RECON'}} [opt]
 * @returns {{billing:number, gross:number|null, discount:number, fee:number, extra:number, amountUsd:number}}
 */
function priceLine(billingUsd, term, opt = {}) {
  const r = stepwiseLine(billingUsd, term);
  if ((opt.rounding || ROUNDING.BILL) === ROUNDING.BILL) {
    r.amountUsd = billFormulaUsd(billingUsd, term);
  }
  return r;
}

function stepwiseLine(billingUsd, term) {
  const billing = round2(billingUsd);
  const d = Number(term.discountPct) || 0;
  const s = Number(term.feePct) || 0;
  const extra = round2(term.extraFeeUsd || 0);

  if (term.calcMethod === CALC_METHODS.CHAIN) {
    const gross = round2(billing * (1 + s));        // Giá trước CK (gồm phí)
    const discount = round2(gross * d);
    return {
      billing, gross, discount,
      fee: round2(gross - billing),
      extra,
      amountUsd: round2(gross - discount + extra),
    };
  }
  if (term.calcMethod === CALC_METHODS.PARALLEL) {
    const discount = round2(billing * d);
    const fee = round2(billing * s);
    return {
      billing, gross: null, discount, fee, extra,
      amountUsd: round2(billing - discount + fee + extra),
    };
  }
  throw new Error(`calcMethod không hợp lệ: ${term.calcMethod}`);
}

/**
 * Công thức cột U trong file Bill (làm tròn 1 lần) — dùng để đối chiếu với Excel
 * và suy ra calcMethod của từng dòng khi migrate.
 */
function billFormulaUsd(billingUsd, term) {
  const q = Number(billingUsd) || 0;
  const d = Number(term.discountPct) || 0;
  const s = Number(term.feePct) || 0;
  const t = Number(term.extraFeeUsd) || 0;
  return term.calcMethod === CALC_METHODS.CHAIN
    ? round2(q * (1 + s) * (1 - d) + t)
    : round2(q * (1 - d) + q * s + t);
}

/**
 * Tổng hợp VND + VAT cho cả bảng đối soát.
 * @param {Array<{amountUsd:number}>} lines
 * @param {number} fxRate
 * @param {number} vatPct  mặc định 0.10
 */
function totalsVnd(lines, fxRate, vatPct = 0.1, opt = {}) {
  const amountUsd = round2(lines.reduce((s, l) => s + l.amountUsd, 0));

  if ((opt.rounding || ROUNDING.BILL) === ROUNDING.BILL) {
    const withVnd = lines.map((l) => {
      const w = round2(l.amountUsd * fxRate);              // cột W
      const totalWithVat = round0(w * (1 + vatPct));       // cột Y
      return { ...l, amountVnd: round0(w), totalWithVat };
    });
    const vnd = withVnd.reduce((s, l) => s + l.amountVnd, 0);
    const total = withVnd.reduce((s, l) => s + l.totalWithVat, 0);
    return { lines: withVnd, amountUsd, fxRate, vnd, vatPct, vat: total - vnd, total };
  }

  const withVnd = lines.map((l) => ({ ...l, amountVnd: round0(l.amountUsd * fxRate) }));
  const vnd = withVnd.reduce((s, l) => s + l.amountVnd, 0);
  const vat = round0(vnd * vatPct);
  return { lines: withVnd, amountUsd, fxRate, vnd, vatPct, vat, total: vnd + vat };
}

/**
 * Áp số dư trả trước (addon PREPAID_BALANCE).
 * @returns {{opening:number, used:number, closing:number, payable:number}}
 */
function applyPrepaid(total, opening) {
  const o = round0(opening || 0);
  const used = Math.min(o, total);
  return { opening: o, used, closing: o - used, payable: total - used };
}

module.exports = {
  CALC_METHODS, ROUNDING, roundTo, round2, round0,
  priceLine, billFormulaUsd, totalsVnd, applyPrepaid,
};
