/**
 * Kho token DigitalOcean — MỖI TEAM MỘT TOKEN.
 *
 * DO không cho token của team A đọc billing team B, nên hệ thống lưu token
 * theo do_team_uuid. Token luôn mã hóa AES-256-GCM bằng DO_ENC_KEY (db/crypto.js),
 * không bao giờ trả ra API — chỉ trả last4 để đối chiếu.
 *
 * Backend:
 *   - Postgres (bảng team của db/schema.sql) nếu DATABASE_URL kết nối được
 *   - Fallback: file out/team_tokens.json (vẫn mã hóa) khi DB chưa sẵn sàng
 */
const fs = require('fs');
const path = require('path');
const { encrypt, decrypt, last4 } = require('./db/crypto');

const FILE = path.join(__dirname, 'out', 'team_tokens.json');
const UNASSIGNED_ORG = 'chua-phan-loai';

let dbMod = null;
let backend = null;          // 'db' | 'file'
let backendError = null;

async function detect() {
  if (backend === 'db') return backend;
  if (process.env.DATABASE_URL) {
    try {
      if (!dbMod) dbMod = require('./db');
      await dbMod.pool.query('SELECT 1 FROM team LIMIT 1');
      backend = 'db';
      backendError = null;
      return backend;
    } catch (e) {
      backendError = e.message;
      dbMod = null;
      return 'file';
    }
  }
  backend = 'file';
  return backend;
}

// ── File backend ────────────────────────────────────────────────
function readFile() {
  try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return {}; }
}
function writeFile(all) {
  fs.mkdirSync(path.dirname(FILE), { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(all, null, 2), { mode: 0o600 });
}

const slug = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'team';

// ── API ─────────────────────────────────────────────────────────
/** @returns {Promise<string|null>} token đã giải mã của team */
async function getToken(teamUuid) {
  if (!teamUuid) return null;
  const raw = String(teamUuid).trim();
  const bare = raw.toLowerCase().replace(/^do:team:/, '');
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(
      'SELECT token_cipher FROM team WHERE (do_team_uuid = $1 OR do_team_uuid = $2 OR LOWER(do_team_name) = LOWER($1) OR LOWER(do_team_name) = LOWER($2)) AND is_active LIMIT 1',
      [bare, raw]
    );
    return rows[0] && rows[0].token_cipher ? decrypt(rows[0].token_cipher) : null;
  }
  const all = readFile();
  const rec = all[bare] || all[raw] || Object.values(all).find((r) => r.name && r.name.toLowerCase() === raw.toLowerCase());
  return rec ? decrypt(Buffer.from(rec.cipher, 'base64')) : null;
}

/** Lấy 1 token bất kỳ đang có trong DB để gọi các API chung (/v2/teams, /v2/account) mà không cần DO_TOKEN trong .env */
async function getAnyToken() {
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(
      `SELECT token_cipher FROM team 
       WHERE token_cipher IS NOT NULL AND is_active 
       ORDER BY 
         (do_team_uuid NOT LIKE 'ORG_%') DESC,
         (do_team_name ILIKE '%cloudaz%') DESC,
         (do_account_uuid IS NOT NULL AND do_account_uuid NOT LIKE 'org_%') DESC,
         created_at ASC
       LIMIT 1`
    );
    return rows[0] && rows[0].token_cipher ? decrypt(rows[0].token_cipher) : null;
  }
  const all = readFile();
  const valid = Object.entries(all).find(([uuid]) => !uuid.startsWith('ORG_')) || Object.entries(all)[0];
  return valid ? decrypt(Buffer.from(valid[1].cipher, 'base64')) : null;
}

/** Lấy toàn bộ token đã giải mã theo teamUuid: Record<string, string> (dùng khi export bảng/file) */
async function getAllTokens() {
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(
      'SELECT do_team_uuid, token_cipher FROM team WHERE token_cipher IS NOT NULL AND is_active AND do_team_uuid IS NOT NULL'
    );
    const map = {};
    for (const r of rows) {
      if (r.token_cipher) {
        try { map[r.do_team_uuid] = decrypt(r.token_cipher); } catch (e) {}
      }
    }
    return map;
  }
  const all = readFile();
  const map = {};
  for (const [uuid, rec] of Object.entries(all)) {
    if (rec && rec.cipher) {
      try { map[uuid] = decrypt(Buffer.from(rec.cipher, 'base64')); } catch (e) {}
    }
  }
  return map;
}

/** Map uuid → { last4, rotatedAt, teamName, isOrg, email } — không chứa token */
async function list() {
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(`SELECT do_team_uuid, token_last4, token_rotated_at, do_team_name, do_account_uuid
      FROM team WHERE token_cipher IS NOT NULL AND is_active AND do_team_uuid IS NOT NULL`);
    return Object.fromEntries(rows.map((r) => [r.do_team_uuid,
      { last4: r.token_last4, rotatedAt: r.token_rotated_at, teamName: r.do_team_name, isOrg: r.do_team_uuid.startsWith('ORG_') }]));
  }
  return Object.fromEntries(Object.entries(readFile()).map(([u, r]) =>
    [u, { last4: r.last4, rotatedAt: r.rotatedAt, teamName: r.teamName, isOrg: r.isOrg || u.startsWith('ORG_'), email: r.accountEmail }]));
}

/** Lưu / rotate token. Người gọi phải xác thực token thuộc đúng team trước. */
async function saveToken({ teamUuid, teamName, accountUuid, accountEmail, isOrg, token }) {
  if ((await detect()) === 'db') {
    const existing = await dbMod.pool.query('SELECT code FROM team WHERE do_team_uuid = $1', [teamUuid]);
    if (!existing.rows[0]) {
      await dbMod.upsertOrg({ code: UNASSIGNED_ORG, name: 'Chưa phân loại khách', note: 'Team thêm token từ UI' });
    }
    const code = existing.rows[0] ? existing.rows[0].code : `${slug(teamName)}-${teamUuid.slice(0, 6)}`;
    const orgRow = existing.rows[0]
      ? (await dbMod.pool.query('SELECT o.code FROM team t JOIN org o ON o.id = t.org_id WHERE t.do_team_uuid = $1', [teamUuid])).rows[0].code
      : UNASSIGNED_ORG;
    await dbMod.upsertTeam({
      orgCode: orgRow, code, name: teamName, token,
      doTeamUuid: teamUuid, doTeamName: teamName, doAccountUuid: accountUuid,
    });
  } else {
    const all = readFile();
    all[teamUuid] = {
      teamName, accountUuid, accountEmail, isOrg: Boolean(isOrg || (teamUuid && teamUuid.startsWith('ORG_'))),
      cipher: encrypt(token).toString('base64'),
      last4: last4(token),
      rotatedAt: new Date().toISOString(),
    };
    writeFile(all);
  }
  return { last4: last4(token) };
}

async function removeToken(teamUuid) {
  if ((await detect()) === 'db') {
    await dbMod.pool.query(`UPDATE team SET token_cipher = NULL, token_last4 = NULL, token_rotated_at = now()
      WHERE do_team_uuid = $1`, [teamUuid]);
    return;
  }
  const all = readFile();
  delete all[teamUuid];
  writeFile(all);
}

async function info() {
  await detect();
  return { backend, backendError: backend === 'file' ? backendError : null, file: backend === 'file' ? FILE : null };
}

module.exports = { getToken, getAnyToken, getAllTokens, list, saveToken, removeToken, info };
