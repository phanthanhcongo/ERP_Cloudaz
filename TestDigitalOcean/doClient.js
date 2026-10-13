/**
 * Lớp client gọi DigitalOcean API v2 (phần Billing).
 * Docs: https://docs.digitalocean.com/platform/billing/reference/api/
 */
const API_BASE = 'https://api.digitalocean.com/v2';

class DOError extends Error {
  constructor(status, body, url) {
    super(`DO API ${status} tại ${url}: ${typeof body === 'string' ? body : JSON.stringify(body)}`);
    this.status = status;
    this.body = body;
  }
}

class DOClient {
  constructor(token) {
    if (!token) throw new Error('Thiếu DO_TOKEN. Copy .env.example thành .env rồi điền token.');
    this.token = token.trim();
  }

  // Gọi 1 request, raw=true để lấy text (CSV) thay vì JSON
  async request(path, { query, raw = false } = {}) {
    const url = new URL(API_BASE + path);
    if (query) {
      for (const [k, v] of Object.entries(query)) {
        if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
      }
    }

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: raw ? 'text/csv' : 'application/json',
      },
    });

    const text = await res.text();
    let payload = text;
    if (!raw) {
      try { payload = text ? JSON.parse(text) : {}; } catch { /* giữ nguyên text */ }
    }
    if (!res.ok) throw new DOError(res.status, payload, url.pathname);

    return {
      data: payload,
      rateLimit: {
        limit: res.headers.get('ratelimit-limit'),
        remaining: res.headers.get('ratelimit-remaining'),
        reset: res.headers.get('ratelimit-reset'),
      },
    };
  }

  // Tự động lặp hết các trang (DO trả links.pages.next)
  async requestAll(path, { query, collect }) {
    const perPage = 200;
    let page = 1;
    const items = [];
    let rateLimit = null;

    for (;;) {
      const { data, rateLimit: rl } = await this.request(path, {
        query: { ...query, page, per_page: perPage },
      });
      rateLimit = rl;
      const chunk = collect(data) || [];
      items.push(...chunk);
      if (chunk.length < perPage || !data?.links?.pages?.next) break;
      page += 1;
      if (page > 50) break; // chốt an toàn
    }
    return { items, rateLimit };
  }

  // ── Account ───────────────────────────────────────────
  account() {
    return this.request('/account');
  }

  /** account_urn dạng do:account:<uuid>, cần cho endpoint insights */
  async accountUrn() {
    const { data } = await this.account();
    const uuid = data?.account?.uuid;
    if (!uuid) throw new Error('Không đọc được account.uuid');
    return `do:account:${uuid}`;
  }

  /** Danh sách team user nhìn thấy. KHÔNG kèm billing. */
  teams() {
    return this.requestAll('/teams', { collect: (d) => d.teams });
  }

  // ── Billing ───────────────────────────────────────────
  /** Số dư + usage month-to-date */
  balance() {
    return this.request('/customers/my/balance');
  }

  /** Lịch sử billing: Invoice / Payment / Credit */
  billingHistory() {
    return this.requestAll('/customers/my/billing_history', {
      collect: (d) => d.billing_history,
    });
  }

  /** Danh sách invoice (kèm invoice_preview của tháng đang chạy) */
  async invoices() {
    const { data, rateLimit } = await this.request('/customers/my/invoices', {
      query: { per_page: 200 },
    });
    return {
      invoices: data.invoices || [],
      preview: data.invoice_preview || null,
      rateLimit,
    };
  }

  /** Chi tiết từng dòng của 1 invoice (phân trang) */
  invoiceItems(uuid) {
    return this.requestAll(`/customers/my/invoices/${uuid}`, {
      collect: (d) => d.invoice_items,
    });
  }

  /** Tổng hợp theo product + thuế */
  invoiceSummary(uuid) {
    return this.request(`/customers/my/invoices/${uuid}/summary`);
  }

  /** CSV thô của invoice */
  invoiceCsv(uuid) {
    return this.request(`/customers/my/invoices/${uuid}/csv`, { raw: true });
  }

  /** Usage theo ngày / theo resource. date: YYYY-MM-DD */
  async insights(startDate, endDate, urn) {
    const accountUrn = urn || (await this.accountUrn());
    return this.request(`/billing/${encodeURIComponent(accountUrn)}/insights/${startDate}/${endDate}`);
  }
}

/** Gom invoice_items theo 1 field bất kỳ (product / project_name / category) */
function groupItems(items, field = 'product') {
  const map = new Map();
  for (const it of items) {
    const key = it[field] || '(không xác định)';
    const cur = map.get(key) || { key, amount: 0, count: 0 };
    cur.amount += Number(it.amount || 0);
    cur.count += 1;
    map.set(key, cur);
  }
  return [...map.values()]
    .map((r) => ({ ...r, amount: Number(r.amount.toFixed(2)) }))
    .sort((a, b) => b.amount - a.amount);
}

module.exports = { DOClient, DOError, groupItems };
