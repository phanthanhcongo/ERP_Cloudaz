/**
 * Lớp truy cập DB: pool kết nối + các hàm upsert dùng khi sync.
 */
const { Pool } = require('pg');
const { encrypt, decrypt, last4 } = require('./crypto');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 8,
  idleTimeoutMillis: 30_000,
  // Đặt schema ngay lúc bắt tay, tránh race với query đầu tiên
  options: '-c search_path=do_billing,public',
});

const q = (sql, params) => pool.query(sql, params);

/** Chạy nhiều lệnh trong một transaction */
async function tx(fn) {
  const c = await pool.connect();
  try {
    await c.query('BEGIN');
    const out = await fn(c);
    await c.query('COMMIT');
    return out;
  } catch (e) {
    await c.query('ROLLBACK');
    throw e;
  } finally {
    c.release();
  }
}

// ── ORG ──────────────────────────────────────────────────────────
async function upsertOrg({ code, name, taxCode, address, contactEmail, discountRate, note }) {
  const { rows } = await q(`
    INSERT INTO org (code, name, tax_code, address, contact_email, discount_rate, note)
    VALUES ($1::text, $2::text, $3::text, $4::text, $5::text,
            COALESCE($6::numeric, 0), $7::text)
    ON CONFLICT (code) DO UPDATE SET
      name = EXCLUDED.name,
      tax_code = COALESCE(EXCLUDED.tax_code, org.tax_code),
      address = COALESCE(EXCLUDED.address, org.address),
      contact_email = COALESCE(EXCLUDED.contact_email, org.contact_email),
      discount_rate = EXCLUDED.discount_rate,
      note = COALESCE(EXCLUDED.note, org.note)
    RETURNING *`,
    [code, name, taxCode, address, contactEmail, discountRate, note]);
  return rows[0];
}

const listOrgs = () => q(`
  SELECT o.*, count(t.id) FILTER (WHERE t.is_active) AS team_count
  FROM org o LEFT JOIN team t ON t.org_id = o.id
  GROUP BY o.id ORDER BY o.code`).then((r) => r.rows);

// ── TEAM ─────────────────────────────────────────────────────────
/** token để trống = giữ nguyên token cũ; truyền chuỗi mới = rotate */
async function upsertTeam({ orgCode, code, name, token, doTeamUuid, doTeamName, doAccountUuid, note }) {
  const cipher = token ? encrypt(token) : null;
  const { rows } = await q(`
    INSERT INTO team (org_id, code, name, token_cipher, token_last4, token_rotated_at,
                      do_team_uuid, do_team_name, do_account_uuid, note)
    SELECT o.id, $2::text, $3::text, $4::bytea, $5::text,
           CASE WHEN $4::bytea IS NULL THEN NULL ELSE now() END,
           $6::text, $7::text, $8::text, $9::text
    FROM org o WHERE o.code = $1::text
    ON CONFLICT (code) DO UPDATE SET
      name = EXCLUDED.name,
      token_cipher = COALESCE(EXCLUDED.token_cipher, team.token_cipher),
      token_last4 = COALESCE(EXCLUDED.token_last4, team.token_last4),
      token_rotated_at = COALESCE(EXCLUDED.token_rotated_at, team.token_rotated_at),
      do_team_uuid = COALESCE(EXCLUDED.do_team_uuid, team.do_team_uuid),
      do_team_name = COALESCE(EXCLUDED.do_team_name, team.do_team_name),
      do_account_uuid = COALESCE(EXCLUDED.do_account_uuid, team.do_account_uuid),
      note = COALESCE(EXCLUDED.note, team.note)
    RETURNING id, org_id, code, name, token_last4, do_team_uuid, is_active`,
    [orgCode, code, name, cipher, token ? last4(token) : null,
     doTeamUuid, doTeamName, doAccountUuid, note]);
  if (!rows[0]) throw new Error(`Không tìm thấy org có code = "${orgCode}". Tạo org trước.`);
  return rows[0];
}

/** Danh sách team — KHÔNG trả token_cipher ra ngoài */
const listTeams = (orgCode) => q(`
  SELECT t.id, t.code, t.name, t.is_active, t.token_last4, t.token_rotated_at,
         t.do_team_uuid, t.do_team_name, o.code AS org_code, o.name AS org_name,
         (t.token_cipher IS NOT NULL) AS has_token
  FROM team t JOIN org o ON o.id = t.org_id
  WHERE ($1::text IS NULL OR o.code = $1)
  ORDER BY o.code, t.code`, [orgCode || null]).then((r) => r.rows);

/** Lấy token đã giải mã — chỉ dùng trong tiến trình sync, không expose qua API */
async function teamToken(teamId) {
  const { rows } = await q('SELECT token_cipher FROM team WHERE id = $1', [teamId]);
  if (!rows[0] || !rows[0].token_cipher) return null;
  return decrypt(rows[0].token_cipher);
}

/** Các team sẵn sàng sync: đang active và đã có token */
const syncableTeams = () => q(`
  SELECT t.id, t.code, t.name, o.code AS org_code
  FROM team t JOIN org o ON o.id = t.org_id
  WHERE t.is_active AND t.token_cipher IS NOT NULL
  ORDER BY o.code, t.code`).then((r) => r.rows);

// ── INVOICE ──────────────────────────────────────────────────────
/**
 * Ghi một kỳ của một team. Items bị xóa và nạp lại trọn gói để
 * tránh dữ liệu cũ sót khi DO chỉnh lại hóa đơn.
 * @param {string} period 'YYYY-MM'
 * @param {object} report kết quả buildInvoiceReport()
 */
async function saveInvoice({ teamId, period, report, items }) {
  const s = report.summary;

  return tx(async (c) => {
    const { rows } = await c.query(`
      INSERT INTO invoice (team_id, period, do_invoice_uuid, do_invoice_id,
        usage_charges, overages, taxes, adjustments, amount_due,
        is_preview, item_count, checks, checks_ok, do_updated_at, synced_at)
      VALUES ($1::uuid, ($2::text || '-01')::date, $3::text, $4::text,
              $5::numeric, $6::numeric, $7::numeric, $8::numeric, $9::numeric,
              $10::boolean, $11::integer, $12::jsonb, $13::boolean, $14::timestamptz, now())
      ON CONFLICT (team_id, period) DO UPDATE SET
        do_invoice_uuid = EXCLUDED.do_invoice_uuid,
        do_invoice_id   = EXCLUDED.do_invoice_id,
        usage_charges   = EXCLUDED.usage_charges,
        overages        = EXCLUDED.overages,
        taxes           = EXCLUDED.taxes,
        adjustments     = EXCLUDED.adjustments,
        amount_due      = EXCLUDED.amount_due,
        is_preview      = EXCLUDED.is_preview,
        item_count      = EXCLUDED.item_count,
        checks          = EXCLUDED.checks,
        checks_ok       = EXCLUDED.checks_ok,
        do_updated_at   = EXCLUDED.do_updated_at,
        synced_at       = now()
      RETURNING id`,
      [teamId, period,
       report.invoice_uuid && !report.is_preview ? report.invoice_uuid : report.invoice_uuid || null,
       report.info.invoice_id || null,
       s.usage_charges, s.overages, s.taxes || 0, s.adjustments_total, s.amount_due,
       Boolean(report.is_preview), report.totals.items_count,
       JSON.stringify(report.checks), report.all_ok,
       report.info.updated_at || null]);

    const invoiceId = rows[0].id;
    await c.query('DELETE FROM invoice_item WHERE invoice_id = $1', [invoiceId]);

    // Nạp item theo lô 500 dòng để không vượt giới hạn tham số của Postgres
    const CH = 500;
    for (let off = 0; off < items.length; off += CH) {
      const batch = items.slice(off, off + CH);
      const vals = [];
      const ph = batch.map((it, k) => {
        const b = k * 14;
        vals.push(invoiceId, off + k + 1,
          it.group_description || it.product || '(không phân nhóm)',
          it.product || null, it.description || '', it.category || null,
          it.project_name || null, it.resource_id || null, it.resource_uuid || null,
          it.duration ? Number(it.duration) : null, it.duration_unit || null,
          it.start_time || null, it.end_time || null, Number(it.amount || 0));
        return `($${b+1}::uuid,$${b+2}::integer,$${b+3}::text,$${b+4}::text,$${b+5}::text,`
             + `$${b+6}::text,$${b+7}::text,$${b+8}::text,$${b+9}::text,$${b+10}::numeric,`
             + `$${b+11}::text,$${b+12}::timestamptz,$${b+13}::timestamptz,$${b+14}::numeric)`;
      }).join(',');
      await c.query(`
        INSERT INTO invoice_item (invoice_id, line_no, group_name, product, description,
          category, project_name, resource_id, resource_uuid, duration, duration_unit,
          start_time, end_time, amount)
        VALUES ${ph}`, vals);
    }
    return { invoiceId, items: items.length };
  });
}

const logSync = ({ teamId, period, status, invoices, items, message, durationMs }) => q(`
  INSERT INTO sync_log (team_id, period, status, invoices, items, message, duration_ms)
  VALUES ($1::uuid, CASE WHEN $2::text IS NULL THEN NULL ELSE ($2::text || '-01')::date END,
          $3::text, $4::integer, $5::integer, $6::text, $7::integer)`,
  [teamId || null, period || null, status, invoices || 0, items || 0,
   message ? String(message).slice(0, 2000) : null, durationMs || null]);

// ── Truy vấn báo cáo ─────────────────────────────────────────────
const teamMonthly = (period) => q(
  `SELECT * FROM v_team_monthly WHERE ($1::text IS NULL OR period_label = $1)`,
  [period || null]).then((r) => r.rows);

const orgMonthly = (period) => q(
  `SELECT * FROM v_org_monthly WHERE ($1::text IS NULL OR period_label = $1)`,
  [period || null]).then((r) => r.rows);

const productMonthly = (period, teamCode) => q(
  `SELECT * FROM v_product_monthly
   WHERE ($1::text IS NULL OR period_label = $1)
     AND ($2::text IS NULL OR team_code = $2)`,
  [period || null, teamCode || null]).then((r) => r.rows);

const invoiceDetail = (teamCode, period) => q(`
  SELECT i.*, it.line_no, it.group_name, it.description, it.duration,
         it.start_time, it.end_time, it.amount AS line_amount, it.project_name
  FROM invoice i
  JOIN team t ON t.id = i.team_id
  LEFT JOIN invoice_item it ON it.invoice_id = i.id
  WHERE t.code = $1::text AND i.period = ($2::text || '-01')::date
  ORDER BY it.line_no`, [teamCode, period]).then((r) => r.rows);

module.exports = {
  pool, q, tx,
  upsertOrg, listOrgs,
  upsertTeam, listTeams, teamToken, syncableTeams,
  saveInvoice, logSync,
  teamMonthly, orgMonthly, productMonthly, invoiceDetail,
};
