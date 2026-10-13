#!/usr/bin/env node
/**
 * Smoke test toàn hệ thống trên server đang chạy.
 *   node scripts/smoke.js [http://localhost:3100]
 * Dùng DO_TOKEN trong .env để thử luồng token theo team (lưu rồi xóa lại).
 */
require('dotenv').config({ quiet: true });
const BASE = process.argv[2] || `http://localhost:${process.env.PORT || 3100}`;
const results = [];
const ok = (name, cond, info = '') => { results.push({ name, pass: !!cond, info }); };

async function j(path, opt = {}) {
  const res = await fetch(BASE + path, {
    ...opt,
    headers: { 'Content-Type': 'application/json', ...(opt.headers || {}) },
    body: opt.body ? JSON.stringify(opt.body) : undefined,
  });
  const ct = res.headers.get('content-type') || '';
  return { status: res.status, ct, body: ct.includes('json') ? await res.json() : await res.arrayBuffer() };
}

(async () => {
  // ── Hạ tầng ──
  const h = await j('/health');
  ok('Server /health', h.status === 200);
  const st = await j('/api/token-store');
  ok('Kho token dùng Postgres', st.body.store && st.body.store.backend === 'db', JSON.stringify(st.body.store));

  // ── Team & token ──
  const teams = await j('/api/teams');
  ok('Danh sách team', teams.body.success && teams.body.count > 0, `${teams.body.count} team`);
  const mine = teams.body.current_team.uuid;
  const other = teams.body.teams.find((t) => t.uuid !== mine).uuid;

  const bad = await j(`/api/teams/${other}/token`, { method: 'PUT', body: { token: 'abc' } });
  ok('Token sai định dạng bị từ chối', bad.status === 400);
  const wrong = await j(`/api/teams/${other}/token`, { method: 'PUT', body: { token: process.env.DO_TOKEN } });
  ok('Token của team khác bị từ chối', wrong.status === 400, wrong.body.error);
  const save = await j(`/api/teams/${mine}/token`, { method: 'PUT', body: { token: process.env.DO_TOKEN } });
  ok('Lưu token đúng team vào DB', save.body.success && save.body.store.backend === 'db', `…${save.body.token_last4}`);

  const teams2 = await j('/api/teams');
  const t2 = teams2.body.teams.find((t) => t.uuid === mine);
  ok('Team hiện có token riêng', t2 && t2.token_last4 && t2.token_last4 !== 'env', t2 && t2.token_last4);

  const ov = await j(`/api/teams/${mine}/overview`);
  ok('Overview dùng token riêng của team', ov.body.has_billing && ov.body.token_last4 !== 'env', `${ov.body.periods} kỳ`);
  const ovOther = await j(`/api/teams/${other}/overview`);
  ok('Team chưa token → báo thiếu token', ovOther.body.success && ovOther.body.has_billing === false);

  const month = await j('/api/month/2026-07', { headers: { 'X-DO-Team': mine } });
  ok('Tổng hợp tháng 2026-07 qua token team', month.body.success && month.body.report, `due $${month.body.total}`);

  // ── Đối soát theo team (popup) ──
  const rt = await j(`/api/teams/${mine}/recon/2026-07`);
  ok('Preview đối soát team — nguồn API', rt.body.source === 'api', `${rt.body.customerCode} billing $${rt.body.api && rt.body.api.usage}`);
  ok('Preview đối soát team — khớp số đã xuất HĐ', rt.body.sheet && rt.body.sheet.total === 63981259, rt.body.sheet && rt.body.sheet.total);
  const rtOther = await j(`/api/teams/${other}/recon/2026-07`);
  ok('Preview team không token — nguồn file Bill', rtOther.body.source === 'excel', `${rtOther.body.customerCode} ${rtOther.body.sheet && rtOther.body.sheet.total}`);

  // ── Trang Đối soát ──
  const per = await j('/api/recon-periods');
  ok('Danh sách kỳ', per.body.periods && per.body.periods.includes('2026-07'), per.body.periods.join(','));
  const rec = await j('/api/recon/2026-07');
  const diffs = rec.body.sheets.filter((s) => s.excelCheck && s.excelCheck.diffVnd).length;
  ok('Kỳ 2026-07: mọi bảng khớp file Bill', rec.body.sheets.length >= 45 && diffs === 0, `${rec.body.sheets.length} bảng, lệch ${diffs}`);

  await j('/api/recon/2026-07/override/ADFLEX', { method: 'PUT', body: { discountPct: 0.1 } });
  const ad = (await j('/api/recon/2026-07?org=ADFLEX')).body.sheets[0];
  ok('Chỉnh tay CK 10% → tính lại', ad.total === 65435345, ad.total);
  await j('/api/recon/2026-07/override/ADFLEX', { method: 'PUT', body: {} });
  const ad2 = (await j('/api/recon/2026-07?org=ADFLEX')).body.sheets[0];
  ok('Bỏ chỉnh tay → về số gốc', ad2.total === 63981259, ad2.total);

  await j('/api/recon/2026-07/status', { method: 'PUT', body: { codes: ['ADFLEX'], status: 'SENT' } });
  const ad3 = (await j('/api/recon/2026-07?org=ADFLEX')).body.sheets[0];
  ok('Đổi trạng thái → Đã gửi', ad3.status === 'SENT');
  await j('/api/recon/2026-07/status', { method: 'PUT', body: { codes: ['ADFLEX'], status: 'DRAFT' } });

  const xl = await j('/api/recon/2026-07/xlsx');
  ok('Xuất XLSX', xl.status === 200 && xl.ct.includes('spreadsheet') && xl.body.byteLength > 10000, `${xl.body.byteLength} byte`);
  const html = await j('/api/recon/2026-07/html');
  ok('Xuất HTML', html.status === 200 && html.ct.includes('html'));

  const pages = await Promise.all(['/', '/recon.html'].map((p) => fetch(BASE + p).then((r) => r.status)));
  ok('Trang UI tải được', pages.every((s) => s === 200), pages.join(','));

  // ── Dọn: xóa token đã lưu để thử ──
  const del = await j(`/api/teams/${mine}/token`, { method: 'DELETE' });
  ok('Xóa token', del.body.removed);

  // ── Báo cáo ──
  for (const r of results) console.log(`${r.pass ? '✔' : '✘'} ${r.name}${r.info !== '' ? `  — ${r.info}` : ''}`);
  const fail = results.filter((r) => !r.pass).length;
  console.log(`\n${results.length - fail}/${results.length} đạt`);
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error('Smoke test lỗi:', e); process.exit(1); });
