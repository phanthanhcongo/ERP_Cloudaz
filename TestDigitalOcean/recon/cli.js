#!/usr/bin/env node
/**
 * Sinh bảng đối soát DO cho 1 kỳ.
 *
 *   node recon/cli.js --period 2026-07                       # tóm tắt + so với Excel
 *   node recon/cli.js --period 2026-07 --org ADFLEX --out md # in 1 khách dạng markdown
 *   node recon/cli.js --period 2026-07 --out xlsx            # → out/recon_2026-07.xlsx
 *   node recon/cli.js --period 2026-07 --out html            # → out/recon_2026-07.html
 *   node recon/cli.js --period 2026-07 --fx TCB=26500,VCB=26380
 *   node recon/cli.js --period 2026-07 --rounding RECON      # làm tròn từng bước
 *   node recon/cli.js --period 2026-07 --prepaid ACTLIFE=11050723
 *
 * Nguồn billing hiện tại: file Bill (markdown) — cột Q. Khi có token từng team,
 * thay bằng bảng invoice trong DB (db/sync.js) mà không đổi build/render.
 */
const fs = require('fs');
const path = require('path');
const { loadBillPeriod } = require('./excelSource');
const { buildReconSheets } = require('./build');
const { toMarkdown, toHtmlDocument } = require('./render');

const A = process.argv.slice(2);
const opt = (k) => { const i = A.indexOf('--' + k); return i >= 0 ? A[i + 1] : null; };
const kv = (s) => (s ? Object.fromEntries(s.split(',').map((p) => {
  const [k, v] = p.split('='); return [k.trim().toUpperCase(), Number(v)];
})) : undefined);

async function main() {
  const period = opt('period');
  if (!/^\d{4}-\d{2}$/.test(period || '')) {
    console.error('Thiếu --period YYYY-MM'); process.exit(1);
  }
  const { rows } = loadBillPeriod(period, opt('file') || undefined);
  const result = buildReconSheets(rows, {
    period,
    rounding: (opt('rounding') || 'BILL').toUpperCase(),
    fxOverride: kv(opt('fx')),
    prepaid: kv(opt('prepaid')),
  });

  const org = opt('org');
  const sheets = org
    ? result.sheets.filter((s) => s.customerCode.toUpperCase().includes(org.toUpperCase()))
    : result.sheets;
  if (org && !sheets.length) { console.error(`Không thấy khách "${org}" có phát sinh kỳ ${period}.`); process.exit(1); }

  const out = opt('out');
  const outDir = path.resolve(__dirname, '../out');
  const suffix = org ? `_${org.replace(/\W+/g, '_')}` : '';

  if (out === 'md') {
    console.log(sheets.map(toMarkdown).join('\n\n---\n\n'));
    return;
  }
  if (out === 'html' || out === 'xlsx') {
    fs.mkdirSync(outDir, { recursive: true });
    const file = path.join(outDir, `recon_${period}${suffix}.${out}`);
    if (out === 'html') fs.writeFileSync(file, toHtmlDocument(sheets, `Bảng đối soát DigitalOcean — kỳ ${period}`));
    else await require('./export').toXlsx({ ...result, sheets }, file);
    console.log(`Đã ghi ${file}`);
    return;
  }

  // Mặc định: tóm tắt
  const fmt = (n) => Number(n).toLocaleString('vi-VN');
  let diffs = 0;
  console.log(`Kỳ ${period} · làm tròn ${sheets[0] ? sheets[0].rounding : '-'} · ${sheets.length} bảng · ${result.noUsage.length} khách không phát sinh\n`);
  for (const s of sheets) {
    const d = s.excelCheck ? s.excelCheck.diffVnd : null;
    if (d) diffs += 1;
    console.log([
      s.customerCode.padEnd(22), s.layout.padEnd(18), String(s.lines.length).padStart(2),
      fmt(s.amountUsd).padStart(12), fmt(s.total).padStart(14),
      d === null ? '' : d === 0 ? '  = Excel' : `  lệch ${fmt(d)}`,
      s.warnings.length ? `  ⚠ ${s.warnings.length}` : '',
    ].join(' '));
  }
  if (result.noUsage.length) console.log(`\nKhông phát sinh: ${result.noUsage.map((n) => n.customerCode).join(', ')}`);
  console.log(`\n${diffs ? `${diffs} bảng lệch Excel` : 'Tất cả khớp Excel'}.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
