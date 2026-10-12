#!/usr/bin/env node
/**
 * Test nhanh không cần mở web.
 *   node cli.js balance
 *   node cli.js invoices
 *   node cli.js invoice <uuid>
 *   node cli.js history
 *   node cli.js insights 2026-09-01 2026-09-30
 *   node cli.js month 2026-09          # tong hop 1 ky
 *   node cli.js report <uuid>          # in hoa don dang Markdown doi soat
 *   node cli.js report <uuid> > out.md
 */
require('dotenv').config();
const { DOClient, groupItems } = require('./doClient');
const { buildInvoiceReport, reportToMarkdown } = require('./invoiceReport');

async function main() {
  const [cmd, a, b] = process.argv.slice(2);
  const c = new DOClient(process.env.DO_TOKEN);

  switch (cmd) {
    case 'account': {
      const { data } = await c.account();
      console.log(JSON.stringify(data.account, null, 2));
      break;
    }
    case 'balance': {
      const { data } = await c.balance();
      console.table([data]);
      break;
    }
    case 'history': {
      const { items } = await c.billingHistory();
      console.table(items.map((i) => ({
        date: i.date, type: i.type, amount: i.amount, description: i.description,
      })));
      break;
    }
    case 'invoices': {
      const { invoices, preview } = await c.invoices();
      console.log('— Preview tháng đang chạy:', JSON.stringify(preview));
      console.table(invoices.map((i) => ({
        period: i.invoice_period, amount: i.amount, uuid: i.invoice_uuid,
      })));
      break;
    }
    case 'invoice': {
      if (!a) throw new Error('Cần invoice_uuid');
      const { items } = await c.invoiceItems(a);
      const total = items.reduce((s, it) => s + Number(it.amount || 0), 0);
      console.log(`Số dòng: ${items.length} — Tổng: ${total.toFixed(2)} USD`);
      console.table(groupItems(items, 'product'));
      break;
    }
    case 'report': {
      if (!a) throw new Error('Cần invoice_uuid: node cli.js report <uuid>');
      const [{ items }, summary, list] = await Promise.all([
        c.invoiceItems(a),
        c.invoiceSummary(a).then((r) => r.data).catch(() => null),
        c.invoices().then((r) => r.invoices).catch(() => []),
      ]);
      const invoice = list.find((i) => i.invoice_uuid === a) || null;
      const rep = buildInvoiceReport({ invoiceUuid: a, items, summary, invoice });
      console.log(reportToMarkdown(rep));
      if (!rep.all_ok) {
        console.error('CẢNH BÁO: đối chiếu có dòng LỆCH — xem mục 5.');
        process.exitCode = 2;
      }
      break;
    }
    case 'month': {
      if (!a || !/^\d{4}-\d{2}$/.test(a)) throw new Error('Cần kỳ dạng YYYY-MM, ví dụ: node cli.js month 2026-09');
      const { invoices, preview } = await c.invoices();
      let targets = invoices.filter((i) => i.invoice_period === a);
      let isPreview = false;
      if (!targets.length && preview && a === new Date().toISOString().slice(0, 7)) {
        targets = [preview]; isPreview = true;
      }
      if (!targets.length) { console.log(`Không có invoice nào cho kỳ ${a}.`); break; }
      const items = [];
      for (const inv of targets) {
        const r = await c.invoiceItems(inv.invoice_uuid);
        items.push(...r.items);
      }
      const total = items.reduce((s, it) => s + Number(it.amount || 0), 0);
      console.log(`Kỳ ${a}${isPreview ? ' (preview, chưa chốt)' : ''} — ${items.length} dòng — Tổng ${total.toFixed(2)} USD`);
      console.table(groupItems(items, 'product'));
      console.log('— Theo project —');
      console.table(groupItems(items, 'project_name'));
      break;
    }
    case 'insights': {
      const { data } = await c.insights(a, b);
      console.log(JSON.stringify(data, null, 2));
      break;
    }
    default:
      console.log('Lệnh: account | balance | history | invoices | invoice <uuid> | report <uuid> | month <YYYY-MM> | insights <start> <end>');
  }
}

main().catch((e) => { console.error('LỖI:', e.message); process.exit(1); });
