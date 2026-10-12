#!/usr/bin/env node
/**
 * Kiểm tra org token: có đọc được danh sách team của org và
 * billing của từng team hay không.
 *
 *   node probeOrg.js            # dùng DO_ORG_TOKEN, fallback DO_TOKEN
 */
require('dotenv').config({ quiet: true });

const T = process.env.DO_ORG_TOKEN || process.env.DO_TOKEN;
if (!T) { console.error('Thiếu DO_ORG_TOKEN trong .env'); process.exit(1); }

const API = 'https://api.digitalocean.com';
async function get(path, headers = {}) {
  const r = await fetch(API + path, { headers: { Authorization: `Bearer ${T}`, ...headers } });
  const text = await r.text();
  let json = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* giữ text */ }
  return { status: r.status, json, text };
}

const line = (s) => console.log('\n' + s + '\n' + '─'.repeat(s.length));

(async () => {
  console.log(`Token: ${T.slice(0, 7)}…${T.slice(-6)}`);

  // 1. Token đang ở team nào
  line('1. Ngữ cảnh token');
  const acc = await get('/v2/account');
  if (acc.json?.account) {
    const a = acc.json.account;
    console.log(`   email: ${a.email}`);
    console.log(`   team hiện tại: ${a.team.name} (${a.team.uuid})`);
  } else {
    console.log(`   ${acc.status} ${acc.json?.message || acc.text.slice(0, 80)}`);
  }

  // 2. Endpoint org — điểm then chốt
  line('2. /v2/organizations/teams  ← quyết định');
  const org = await get('/v2/organizations/teams?per_page=200');
  console.log(`   HTTP ${org.status}`);
  if (org.status !== 200) {
    console.log(`   ${org.json?.message || org.text.slice(0, 120)}`);
    console.log('\n   => Token này KHÔNG có scope organization_membership:read_teams.');
    console.log('      Tạo lại từ: profile → View Organizations → CloudAZ JSC → tab API');
    return;
  }

  const teams = org.json.teams || [];
  console.log(`   teams = ${teams.length} (meta.total = ${org.json.meta?.total})`);
  console.log('   field của 1 team:', JSON.stringify(teams[0]));

  // 3. Thử lấy billing của một team KHÁC team hiện tại
  line('3. Lấy invoice của từng team?');
  const myUuid = acc.json?.account?.team?.uuid;
  const other = teams.find((t) => t.uuid !== myUuid) || teams[0];
  console.log(`   team đích: ${other.name} (${other.uuid})`);

  // Baseline: không truyền gì
  const base = await get('/v2/customers/my/invoices?per_page=1');
  const baseUuid = base.json?.invoices?.[0]?.invoice_uuid;
  const baseUrn = base.json?.invoices?.[0]?.account_urn;
  console.log(`   baseline: total=${base.json?.meta?.total} urn=${baseUrn}`);

  // Thử các cách chuyển ngữ cảnh team
  const ways = [
    ['?team_uuid=',        `/v2/customers/my/invoices?per_page=1&team_uuid=${other.uuid}`, {}],
    ['?team_id=',          `/v2/customers/my/invoices?per_page=1&team_id=${other.id}`, {}],
    ['header X-DO-Team',   '/v2/customers/my/invoices?per_page=1', { 'X-DO-Team': other.uuid }],
    ['header X-Team-UUID', '/v2/customers/my/invoices?per_page=1', { 'X-Team-UUID': other.uuid }],
    ['path /teams/{u}',    `/v2/teams/${other.uuid}/customers/my/invoices?per_page=1`, {}],
    ['path /org/teams/{u}', `/v2/organizations/teams/${other.uuid}/invoices?per_page=1`, {}],
  ];

  let win = null;
  for (const [label, path, h] of ways) {
    const r = await get(path, h);
    const inv = r.json?.invoices?.[0];
    let verdict;
    if (r.status !== 200) {
      verdict = r.json?.message?.slice(0, 50) || 'lỗi';
    } else if (!inv) {
      verdict = 'không có invoice';
    } else if (inv.invoice_uuid === baseUuid) {
      verdict = 'BỊ BỎ QUA (trả về y hệt baseline)';
    } else {
      verdict = `ĐỔI ĐƯỢC! urn=${inv.account_urn} total=${r.json.meta?.total}`;
      win = { label, path, h };
    }
    console.log(`   ${String(r.status).padEnd(4)} ${label.padEnd(20)} ${verdict}`);
  }

  line('KẾT LUẬN');
  if (win) {
    console.log(`   Lấy được billing đa team qua: ${win.label}`);
    console.log('   => Một org token là đủ cho cả 62 team.');
    console.log('      Bỏ cột token trên bảng team, chuyển lên bảng org.');
  } else {
    console.log('   Đọc được danh sách team của org, nhưng KHÔNG lấy được');
    console.log('   invoice của team khác — mọi cách chuyển ngữ cảnh đều bị bỏ qua.');
    console.log('   => Vẫn cần token riêng mỗi team cho phần billing.');
  }
})().catch((e) => { console.error('LỖI:', e.message); process.exit(1); });
