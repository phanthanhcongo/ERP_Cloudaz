/**
 * Dựng cấu trúc hóa đơn giống bố cục file PDF/Markdown đối soát:
 *   1. Thông tin hóa đơn
 *   3. Tổng hợp (Summary)   — usage charges, discount, total due
 *   4. Chi phí theo sản phẩm — nhóm sản phẩm -> hạng mục
 *   5. Đối chiếu tự động    — kiểm tra khớp số
 *
 * Đầu vào: invoice_items (API /v2/customers/my/invoices/{uuid})
 *          summary       (API .../summary)
 */

const round2 = (n) => Number((Number(n) || 0).toFixed(2));
const sum = (arr, f) => arr.reduce((s, x) => s + (Number(f(x)) || 0), 0);

/** Tên nhóm sản phẩm hiển thị ở mục 4. DO đặt tên cluster vào group_description */
function groupName(item) {
  return item.group_description || item.product || '(không phân nhóm)';
}

/** Ngày trên hóa đơn in dạng MM-DD HH:mm (bỏ năm, như PDF của DO) */
function shortTime(iso) {
  if (!iso) return '';
  const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!m) return String(iso);
  return `${m[2]}-${m[3]} ${m[4]}:${m[5]}`;
}

/** Mỗi dòng hạng mục trong bảng chi tiết */
function lineOf(item) {
  return {
    description: item.description || item.product || '',
    hours: item.duration || '',
    duration_unit: item.duration_unit || '',
    start: shortTime(item.start_time),
    end: shortTime(item.end_time),
    start_iso: item.start_time || '',
    end_iso: item.end_time || '',
    amount: round2(item.amount),
    project: item.project_name || '',
    category: item.category || '',
    resource_id: item.resource_id || '',
    resource_uuid: item.resource_uuid || '',
  };
}

/**
 * Product nào là khoản điều chỉnh, không phải cước sử dụng.
 * DO đặt discount thành dòng âm trong chính invoice_items.
 */
const TAX_PRODUCTS = new Set(['Taxes', 'Tax', 'VAT']);
const DISCOUNT_PRODUCTS = new Set(['Discounts', 'Discount', 'Credits', 'Credit']);

const isTaxItem = (it) => TAX_PRODUCTS.has(it.product);
/** Discount / credit: theo product, hoặc bất kỳ dòng âm không phải thuế */
const isDiscountItem = (it) =>
  !isTaxItem(it) && (DISCOUNT_PRODUCTS.has(it.product) || Number(it.amount) < 0);
/** Dòng không phải cước sử dụng */
const isAdjustItem = (it) => isTaxItem(it) || isDiscountItem(it);

/**
 * Đọc một mục trong summary. DO trả object {name, amount, items},
 * nhưng vài kỳ cũ trả thẳng số — xử lý cả hai.
 */
function pick(node) {
  if (node == null) return null;
  if (typeof node === 'object') return node.amount != null ? round2(node.amount) : null;
  return round2(node);
}

/**
 * Các khoản điều chỉnh: ưu tiên dòng chi tiết trong invoice_items
 * (có tên đầy đủ kiểu "Partner Agreement Discount (25%) - SaaS"),
 * không có thì lấy mức tổng từ summary.
 */
function adjustmentsFrom(summary, items) {
  const fromItems = (items || []).filter(isDiscountItem);
  if (fromItems.length) {
    // Gom các dòng cùng diễn giải, giữ thứ tự xuất hiện
    const order = [];
    const map = new Map();
    for (const it of fromItems) {
      const name = it.description || it.product || 'Điều chỉnh';
      if (!map.has(name)) { map.set(name, 0); order.push(name); }
      map.set(name, map.get(name) + Number(it.amount || 0));
    }
    return order.map((name) => ({ name, amount: round2(map.get(name)) }));
  }

  const out = [];
  for (const key of ['credits_and_adjustments', 'discounts', 'credits']) {
    const node = summary && summary[key];
    const amount = pick(node);
    if (amount == null || amount === 0) continue;
    const kids = node && Array.isArray(node.items) ? node.items : null;
    if (kids && kids.length) {
      for (const k of kids) out.push({ name: k.name || node.name || key, amount: round2(k.amount) });
    } else {
      out.push({ name: (node && node.name) || key, amount });
    }
  }
  return out;
}

/**
 * @param {object} p
 * @param {string} p.invoiceUuid
 * @param {object[]} p.items     invoice_items
 * @param {object|null} p.summary
 * @param {object|null} p.invoice  bản ghi trong danh sách invoices (có invoice_period, invoice_id)
 */
function buildInvoiceReport({ invoiceUuid, items = [], summary = null, invoice = null }) {
  // Dòng cước và dòng điều chỉnh tách riêng: mục 4 chỉ liệt kê cước,
  // discount/credit đưa lên mục 3 như trên hóa đơn PDF.
  const chargeItems = items.filter((it) => !isAdjustItem(it));

  // ── Mục 4: gom theo nhóm sản phẩm, giữ thứ tự xuất hiện như trên hóa đơn ──
  const order = [];
  const byGroup = new Map();
  for (const it of chargeItems) {
    const g = groupName(it);
    if (!byGroup.has(g)) { byGroup.set(g, []); order.push(g); }
    byGroup.get(g).push(lineOf(it));
  }
  const groups = order.map((g) => {
    const lines = byGroup.get(g);
    return {
      name: g,
      count: lines.length,
      subtotal: round2(sum(lines, (l) => l.amount)),
      lines,
    };
  });

  // ── Mục 3: tổng hợp ────────────────────────────────────────────────────
  const chargesTotal = round2(sum(chargeItems, (i) => i.amount));       // chỉ dòng cước
  const taxItemsTotal = round2(sum(items.filter(isTaxItem), (i) => i.amount));
  const discountItemsTotal = round2(sum(items.filter(isDiscountItem), (i) => i.amount));
  const itemsTotal = round2(chargesTotal + discountItemsTotal);         // cước + giảm giá
  const groupsTotal = round2(sum(groups, (g) => g.subtotal));

  const usageCharges = pick(summary && summary.product_charges)
    ?? pick(summary && summary.usage_total)
    ?? chargesTotal;
  const overages = pick(summary && summary.overages) ?? 0;
  const taxes = pick(summary && summary.taxes) ?? taxItemsTotal;
  const adjustments = adjustmentsFrom(summary, items);
  const adjTotal = round2(sum(adjustments, (a) => a.amount));
  const amountDue = pick(summary && summary.amount_due)
    ?? pick(summary && summary.amount)
    ?? round2(usageCharges + overages + taxes + adjTotal);

  // ── Mục 5: đối chiếu tự động ───────────────────────────────────────────
  const eq = (a, b) => Math.abs(round2(a) - round2(b)) < 0.01;
  const checks = [
    {
      label: 'Tổng subtotal các nhóm',
      value: groupsTotal,
      expected: usageCharges,
      ok: eq(groupsTotal, usageCharges),
      note: `so với Total usage charges ($${usageCharges.toFixed(2)})`,
    },
    {
      label: 'Tổng tiền các hạng mục cước',
      value: chargesTotal,
      expected: groupsTotal,
      ok: eq(chargesTotal, groupsTotal),
      note: 'so với tổng subtotal các nhóm',
    },
    {
      label: 'Tổng dòng + thuế',
      value: round2(itemsTotal + taxes),
      expected: amountDue,
      ok: eq(itemsTotal + taxes, amountDue),
      note: `so với Total due ($${amountDue.toFixed(2)})`,
    },
    {
      label: 'Total usage + overage + thuế + điều chỉnh',
      value: round2(usageCharges + overages + taxes + adjTotal),
      expected: amountDue,
      ok: eq(usageCharges + overages + taxes + adjTotal, amountDue),
      note: `so với Total due ($${amountDue.toFixed(2)})`,
    },
  ];

  return {
    invoice_uuid: invoiceUuid,
    info: {
      period: (invoice && invoice.invoice_period) || (summary && summary.billing_period) || '',
      invoice_id: (invoice && invoice.invoice_id) || (summary && summary.invoice_id) || '',
      user_name: (summary && summary.user_name) || '',
      user_company: (summary && summary.user_company) || '',
      user_email: (summary && summary.user_email) || '',
      issue_date: (summary && summary.issue_date) || '',
      due_date: (summary && summary.due_date) || '',
      billing_period: (summary && summary.billing_period) || '',
      updated_at: (invoice && invoice.updated_at) || '',
      currency: 'USD',
    },
    summary: {
      usage_charges: usageCharges,
      overages,
      taxes,
      adjustments,
      adjustments_total: adjTotal,
      amount_due: amountDue,
    },
    groups,
    totals: {
      items_count: items.length,
      charge_items_count: chargeItems.length,
      charges_total: chargesTotal,
      tax_items_total: taxItemsTotal,
      discount_items_total: discountItemsTotal,
      items_total: itemsTotal,
      groups_total: groupsTotal,
    },
    checks,
    all_ok: checks.every((c) => c.ok),
  };
}

/** Xuất ra Markdown đúng bố cục file đối soát trong docs/ */
function reportToMarkdown(r) {
  const m = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const signed = (n) => (Number(n) < 0 ? '-$' : '$')
    + Math.abs(Number(n)).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const L = [];

  L.push(`# DigitalOcean Invoice ${r.info.period} (${r.info.invoice_id || r.invoice_uuid})`, '');
  L.push('> **Nguồn:** DigitalOcean API `/v2/customers/my/invoices`  ');
  L.push('> **Nhà cung cấp:** DigitalOcean LLC  ');
  L.push(`> **Kết xuất:** ${new Date().toISOString().slice(0, 10)}`, '', '---', '');

  L.push('## 1. Thông tin hóa đơn', '');
  L.push('| Trường | Giá trị |', '|---|---|');
  L.push(`| Kỳ cước | ${r.info.period} |`);
  L.push(`| Invoice number | ${r.info.invoice_id} |`);
  L.push(`| Invoice UUID | \`${r.invoice_uuid}\` |`);
  L.push(`| Khách hàng | ${r.info.user_company || r.info.user_name} |`);
  L.push(`| Cập nhật | ${r.info.updated_at} |`, '');

  L.push('## 3. Tổng hợp (Summary)', '');
  L.push('| Khoản mục | Số tiền |', '|---|---:|');
  L.push(`| Total usage charges | ${m(r.summary.usage_charges)} |`);
  if (r.summary.overages) L.push(`| Overages | ${m(r.summary.overages)} |`);
  for (const a of r.summary.adjustments) L.push(`| ${a.name} | ${signed(a.amount)} |`);
  if (r.summary.taxes) L.push(`| Taxes | ${m(r.summary.taxes)} |`);
  L.push(`| **Total due** | **${m(r.summary.amount_due)}** |`, '');

  L.push('## 4. Chi phí theo sản phẩm (Product Usage Charges)', '');
  L.push('| Nhóm sản phẩm | Số hạng mục | Subtotal |', '|---|---:|---:|');
  for (const g of r.groups) L.push(`| ${g.name} | ${g.count} | ${m(g.subtotal)} |`);
  L.push('');
  for (const g of r.groups) {
    L.push(`### ${g.name} - ${m(g.subtotal)}`, '');
    L.push('| Hạng mục | Hours | Start | End | Amount |', '|---|---:|---|---|---:|');
    for (const l of g.lines) {
      L.push(`| ${l.description} | ${l.hours} | ${l.start} | ${l.end} | ${m(l.amount)} |`);
    }
    L.push('');
  }

  L.push('## 5. Đối chiếu tự động', '');
  L.push('| Kiểm tra | Giá trị | Kết quả |', '|---|---:|---|');
  for (const c of r.checks) {
    L.push(`| ${c.label} | ${m(c.value)} | ${c.ok ? 'khớp' : 'LỆCH'} ${c.note} |`);
  }
  L.push('');
  return L.join('\n');
}

module.exports = { buildInvoiceReport, reportToMarkdown };
