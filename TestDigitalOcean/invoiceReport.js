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

/**
 * Thứ tự nhóm sản phẩm như PDF của DO in ra. API trả theo thứ tự khác,
 * nhóm nào không có trong bảng này xếp sau, giữ thứ tự API.
 */
const PDF_ORDER = [
  'Droplets', 'Kubernetes Clusters', 'Database Clusters', 'App Platform',
  'Spaces', 'Spaces Subscription', 'Container Registry', 'Container Registry Subscription',
  'Volumes', 'Volume Snapshots', 'Droplet Snapshots', 'Droplet Backups',
  'Load Balancers', 'HTTP Load Balancers', 'Global Load Balancers',
  'Reserved IPs', 'Floating IPs', 'Droplet Bandwidth', 'Spaces Bandwidth',
  'Uptime Health Check', 'Functions', 'Add-Ons',
];

/** Vị trí sắp xếp: khớp chính xác, hoặc theo product gốc của nhóm */
function pdfRank(groupName, productName) {
  let i = PDF_ORDER.indexOf(groupName);
  if (i < 0 && productName) i = PDF_ORDER.indexOf(productName);
  if (i < 0) {
    // Nhóm là tên cluster/resource (vd "db-xyz (PostgreSQL)") -> xếp theo loại
    const m = String(groupName).match(/\(([^()]+)\)\s*$/);
    if (m) {
      const kind = m[1];
      if (/PostgreSQL|MySQL|MongoDB|Redis|Valkey|Kafka|OpenSearch|Caching/i.test(kind)) {
        i = PDF_ORDER.indexOf('Database Clusters');
      }
    }
  }
  return i < 0 ? PDF_ORDER.length : i;
}

/**
 * Đổi slug size của DO thành tên như PDF in:
 *   s-4vcpu-8gb      -> Basic Droplet - 8 GB / 4 vCPU
 *   c-2-4GiB         -> CPU-Optimized Droplet - 4 GB / 2 vCPU
 *   s-8vcpu-16gb-amd -> Basic AMD Droplet - 16 GB / 8 vCPU
 * Không khớp mẫu thì trả nguyên slug.
 */
function sizeLabel(slug) {
  const raw = String(slug || '');
  const m = raw.match(/^([a-z]+)-(\d+)vcpu-(\d+)gb(?:-(.+))?$/i);
  if (m) {
    const fam = { s: 'Basic', g: 'General Purpose', m: 'Memory-Optimized',
                  c: 'CPU-Optimized', so: 'Storage-Optimized' }[m[1].toLowerCase()] || m[1];
    const extra = m[4] ? ' ' + m[4].split('-').map((w) =>
      /^(amd|ssd|nvme)$/i.test(w) ? w.toUpperCase()
        : w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';
    return `${fam}${extra} Droplet - ${m[3]} GB / ${m[2]} vCPU`;
  }
  // Dạng c-2-4GiB / g-4-16GiB
  const m2 = raw.match(/^([a-z]+)-(\d+)-(\d+)GiB$/i);
  if (m2) {
    const fam = { c: 'CPU-Optimized', g: 'General Purpose', m: 'Memory-Optimized',
                  so: 'Storage-Optimized' }[m2[1].toLowerCase()] || m2[1];
    return `${fam} Droplet - ${m2[3]} GB / ${m2[2]} vCPU`;
  }
  return raw;
}

/**
 * Gom Droplets theo size như PDF của DO: "Droplets - Aggregated by size".
 * PDF không liệt kê từng máy mà gộp "29 instances - 21576 hrs".
 * Size nằm trong ngoặc cuối description: "adf-dev-02 (s-4vcpu-8gb)".
 */
function aggregateBySize(lines) {
  const order = [];
  const map = new Map();
  for (const l of lines) {
    const m = String(l.description || '').match(/\(([^()]+)\)\s*$/);
    const size = m ? m[1] : '(không rõ cấu hình)';
    if (!map.has(size)) {
      map.set(size, { size, label: sizeLabel(size), instances: 0, hours: 0, amount: 0 });
      order.push(size);
    }
    const r = map.get(size);
    r.instances += 1;
    r.hours += Number(l.hours || 0);
    r.amount += Number(l.amount || 0);
  }
  return order
    .map((k) => { const r = map.get(k); return { ...r, amount: round2(r.amount) }; })
    .sort((a, b) => b.amount - a.amount);
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
  const byGroupProduct = new Map();
  for (const it of chargeItems) {
    const g = groupName(it);
    if (!byGroup.has(g)) { byGroup.set(g, []); order.push(g); byGroupProduct.set(g, it.product || ''); }
    byGroup.get(g).push(lineOf(it));
  }
  const groups = order.map((g) => {
    const lines = byGroup.get(g);
    // Sắp xếp từng hạng mục trong nhóm theo giá (amount) giảm dần
    lines.sort((a, b) => Number(b.amount || 0) - Number(a.amount || 0));
    const grp = {
      name: g,
      count: lines.length,
      subtotal: round2(sum(lines, (l) => l.amount)),
      lines,
    };
    // Nhóm nhiều máy (Droplets…) thì kèm bản gom theo size như PDF.
    // Chỉ giữ khi thật sự rút gọn được: >=2 size và ít hơn nửa số dòng.
    if (lines.length >= 5) {
      const agg = aggregateBySize(lines);
      if (agg.length >= 2 && agg.length <= lines.length / 2) grp.by_size = agg;
    }
    grp._product = lines.length ? (byGroupProduct.get(g) || '') : '';
    return grp;
  });

  // Sắp xếp các nhóm theo giá (subtotal) giảm dần; nếu bằng nhau thì theo thứ tự PDF
  groups.forEach((g, i) => { g._i = i; });
  groups.sort((a, b) => {
    const diff = Number(b.subtotal || 0) - Number(a.subtotal || 0);
    if (Math.abs(diff) >= 0.005) return diff;
    const ra = pdfRank(a.name, a._product), rb = pdfRank(b.name, b._product);
    return ra !== rb ? ra - rb : a._i - b._i;
  });
  groups.forEach((g) => { delete g._i; delete g._product; });

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
      billing_address: (summary && summary.user_billing_address) || null,
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
