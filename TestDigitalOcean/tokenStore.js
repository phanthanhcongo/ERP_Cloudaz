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
  if (backend) return backend;
  if (process.env.DATABASE_URL) {
    try {
      dbMod = require('./db');
      await dbMod.pool.query('SELECT 1 FROM team LIMIT 1');
      backend = 'db';
      return backend;
    } catch (e) {
      backendError = e.message;
      dbMod = null;
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
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(
      'SELECT token_cipher FROM team WHERE do_team_uuid = $1 AND is_active', [teamUuid]);
    return rows[0] && rows[0].token_cipher ? decrypt(rows[0].token_cipher) : null;
  }
  const rec = readFile()[teamUuid];
  return rec ? decrypt(Buffer.from(rec.cipher, 'base64')) : null;
}

/** Map uuid → { last4, rotatedAt, teamName } — không chứa token */
async function list() {
  if ((await detect()) === 'db') {
    const { rows } = await dbMod.pool.query(`SELECT do_team_uuid, token_last4, token_rotated_at, do_team_name
      FROM team WHERE token_cipher IS NOT NULL AND is_active AND do_team_uuid IS NOT NULL`);
    return Object.fromEntries(rows.map((r) => [r.do_team_uuid,
      { last4: r.token_last4, rotatedAt: r.token_rotated_at, teamName: r.do_team_name }]));
  }
  return Object.fromEntries(Object.entries(readFile()).map(([u, r]) =>
    [u, { last4: r.last4, rotatedAt: r.rotatedAt, teamName: r.teamName }]));
}

/** Lưu / rotate token. Người gọi phải xác thực token thuộc đúng team trước. */
async function saveToken({ teamUuid, teamName, accountUuid, token }) {
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
      teamName, accountUuid,
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

module.exports = { getToken, list, saveToken, removeToken, info };
