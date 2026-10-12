-- ═══════════════════════════════════════════════════════════════════
-- DigitalOcean billing — schema
-- Chạy: psql "$DATABASE_URL" -f db/schema.sql   (idempotent)
-- ═══════════════════════════════════════════════════════════════════

CREATE SCHEMA IF NOT EXISTS do_billing;
SET search_path TO do_billing, public;

CREATE EXTENSION IF NOT EXISTS pgcrypto;   -- gen_random_uuid()

-- ─────────────────────────────────────────────────────────────────
-- 1. ORG — pháp nhân / khách hàng của CloudAz
--    Một org có thể có nhiều team DO (dev/staging/prod, nhiều dự án).
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS org (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code          text        NOT NULL,              -- 'ahamove', 'actlife' — khớp tên file trong docs/
  name          text        NOT NULL,
  tax_code      text,                              -- MST để xuất hóa đơn
  address       text,
  contact_email text,
  -- Tỷ lệ chiết khấu hợp đồng, ví dụ 0.25 = Partner Agreement Discount 25%
  discount_rate numeric(6,4) NOT NULL DEFAULT 0 CHECK (discount_rate >= 0 AND discount_rate < 1),
  is_active     boolean     NOT NULL DEFAULT true,
  note          text,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT org_code_uk UNIQUE (code)
);

COMMENT ON TABLE  org IS 'Khách hàng / pháp nhân. Một org gom nhiều team DO.';
COMMENT ON COLUMN org.discount_rate IS 'Chiết khấu hợp đồng (0.25 = 25%). Dùng đối soát với discount DO trả về.';

-- ─────────────────────────────────────────────────────────────────
-- 2. TEAM — team trên DigitalOcean. Mỗi team = 1 tài khoản billing.
--    Một Personal Access Token chỉ thấy đúng một team, nên token
--    lưu theo team, mã hóa AES-256-GCM (xem db/crypto.js).
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS team (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id          uuid        NOT NULL REFERENCES org(id) ON DELETE RESTRICT,
  do_team_uuid    text,                            -- account.team.uuid từ /v2/account
  do_team_name    text,                            -- account.team.name
  do_account_uuid text,                            -- account.uuid, dùng dựng account_urn
  code            text        NOT NULL,            -- slug nội bộ, duy nhất toàn hệ thống
  name            text        NOT NULL,
  -- Token DO đã mã hóa. NULL = chưa cấu hình, sync sẽ bỏ qua team này.
  token_cipher    bytea,
  token_last4     text,                            -- 4 ký tự cuối để đối chiếu, không phải bí mật
  token_rotated_at timestamptz,
  is_active       boolean     NOT NULL DEFAULT true,
  note            text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT team_code_uk UNIQUE (code),
  CONSTRAINT team_do_uuid_uk UNIQUE (do_team_uuid)
);

CREATE INDEX IF NOT EXISTS team_org_idx ON team (org_id) WHERE is_active;

COMMENT ON COLUMN team.token_cipher IS 'Token DO mã hóa AES-256-GCM. Không bao giờ trả ra API/UI.';

-- ─────────────────────────────────────────────────────────────────
-- 3. INVOICE — billing phát sinh của một team trong một tháng.
--    Khóa tự nhiên (team_id, period). Tháng đang chạy lưu bản
--    preview, is_preview = true, mỗi lần sync ghi đè số mới.
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS invoice (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id       uuid        NOT NULL REFERENCES team(id) ON DELETE CASCADE,
  period        date        NOT NULL,              -- luôn là ngày 01 của kỳ: 2026-07-01
  do_invoice_uuid text,                            -- NULL với bản preview
  do_invoice_id text,                              -- số hóa đơn in trên PDF

  -- Số tiền, lấy từ /invoices/{uuid}/summary
  usage_charges numeric(14,2) NOT NULL DEFAULT 0,  -- product_charges
  overages      numeric(14,2) NOT NULL DEFAULT 0,
  taxes         numeric(14,2) NOT NULL DEFAULT 0,
  adjustments   numeric(14,2) NOT NULL DEFAULT 0,  -- credit + discount, thường âm
  amount_due    numeric(14,2) NOT NULL DEFAULT 0,
  currency      char(3)     NOT NULL DEFAULT 'USD',

  is_preview    boolean     NOT NULL DEFAULT false,
  item_count    integer     NOT NULL DEFAULT 0,
  -- Kết quả 3 phép đối chiếu ở mục 5 của báo cáo
  checks        jsonb,
  checks_ok     boolean,

  do_updated_at timestamptz,                       -- updated_at phía DO
  synced_at     timestamptz NOT NULL DEFAULT now(),
  created_at    timestamptz NOT NULL DEFAULT now(),

  CONSTRAINT invoice_team_period_uk UNIQUE (team_id, period),
  -- period phải là ngày đầu tháng, tránh lẫn 2026-07-15
  CONSTRAINT invoice_period_first_day CHECK (date_trunc('month', period) = period)
);

CREATE INDEX IF NOT EXISTS invoice_period_idx ON invoice (period DESC);
CREATE INDEX IF NOT EXISTS invoice_team_idx   ON invoice (team_id, period DESC);
CREATE UNIQUE INDEX IF NOT EXISTS invoice_do_uuid_uk
  ON invoice (do_invoice_uuid) WHERE do_invoice_uuid IS NOT NULL;

COMMENT ON COLUMN invoice.period IS 'Kỳ cước, luôn là ngày 01. Khóa tự nhiên cùng team_id.';
COMMENT ON COLUMN invoice.is_preview IS 'true = tháng đang chạy, số còn thay đổi mỗi ngày.';

-- ─────────────────────────────────────────────────────────────────
-- 4. INVOICE_ITEM — từng dòng cước. Xóa và nạp lại mỗi lần sync.
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS invoice_item (
  id            bigserial PRIMARY KEY,
  invoice_id    uuid        NOT NULL REFERENCES invoice(id) ON DELETE CASCADE,
  line_no       integer     NOT NULL,              -- giữ thứ tự như trên PDF
  group_name    text        NOT NULL,              -- group_description, fallback product
  product       text,
  description   text        NOT NULL,
  category      text,
  project_name  text,
  resource_id   text,
  resource_uuid text,
  duration      numeric(12,2),                     -- số giờ
  duration_unit text,
  start_time    timestamptz,
  end_time      timestamptz,
  amount        numeric(14,2) NOT NULL DEFAULT 0,
  raw           jsonb,                             -- bản gốc từ API, để truy vết
  CONSTRAINT invoice_item_line_uk UNIQUE (invoice_id, line_no)
);

CREATE INDEX IF NOT EXISTS invoice_item_group_idx    ON invoice_item (invoice_id, group_name);
CREATE INDEX IF NOT EXISTS invoice_item_product_idx  ON invoice_item (product);
CREATE INDEX IF NOT EXISTS invoice_item_project_idx  ON invoice_item (project_name)
  WHERE project_name IS NOT NULL;
CREATE INDEX IF NOT EXISTS invoice_item_resource_idx ON invoice_item (resource_uuid)
  WHERE resource_uuid IS NOT NULL;

-- ─────────────────────────────────────────────────────────────────
-- 5. SYNC_LOG — mỗi lần chạy sync ghi một dòng, để debug cronjob
-- ─────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS sync_log (
  id           bigserial PRIMARY KEY,
  team_id      uuid REFERENCES team(id) ON DELETE SET NULL,
  period       date,
  status       text        NOT NULL CHECK (status IN ('ok', 'error', 'skipped')),
  invoices     integer     NOT NULL DEFAULT 0,
  items        integer     NOT NULL DEFAULT 0,
  message      text,
  duration_ms  integer,
  started_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS sync_log_recent_idx ON sync_log (started_at DESC);

-- ─────────────────────────────────────────────────────────────────
-- Trigger: tự cập nhật updated_at
-- ─────────────────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION touch_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS org_touch ON org;
CREATE TRIGGER org_touch BEFORE UPDATE ON org
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

DROP TRIGGER IF EXISTS team_touch ON team;
CREATE TRIGGER team_touch BEFORE UPDATE ON team
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

-- ─────────────────────────────────────────────────────────────────
-- VIEW: billing theo team từng tháng — câu truy vấn hay dùng nhất
-- ─────────────────────────────────────────────────────────────────
CREATE OR REPLACE VIEW v_team_monthly AS
SELECT
  o.code                AS org_code,
  o.name                AS org_name,
  t.code                AS team_code,
  t.name                AS team_name,
  i.period,
  to_char(i.period, 'YYYY-MM') AS period_label,
  i.usage_charges,
  i.overages,
  i.adjustments,
  i.taxes,
  i.amount_due,
  i.currency,
  i.is_preview,
  i.item_count,
  i.checks_ok,
  i.do_invoice_id,
  i.do_invoice_uuid,
  i.synced_at
FROM invoice i
JOIN team t ON t.id = i.team_id
JOIN org  o ON o.id = t.org_id
ORDER BY i.period DESC, o.code, t.code;

-- VIEW: tổng theo org từng tháng
CREATE OR REPLACE VIEW v_org_monthly AS
SELECT
  o.code AS org_code,
  o.name AS org_name,
  i.period,
  to_char(i.period, 'YYYY-MM') AS period_label,
  count(*)                  AS teams,
  sum(i.usage_charges)      AS usage_charges,
  sum(i.adjustments)        AS adjustments,
  sum(i.amount_due)         AS amount_due,
  bool_or(i.is_preview)     AS has_preview,
  bool_and(coalesce(i.checks_ok, false)) AS all_checks_ok
FROM invoice i
JOIN team t ON t.id = i.team_id
JOIN org  o ON o.id = t.org_id
GROUP BY o.code, o.name, i.period
ORDER BY i.period DESC, o.code;

-- VIEW: cước theo nhóm sản phẩm, từng team từng tháng
CREATE OR REPLACE VIEW v_product_monthly AS
SELECT
  o.code AS org_code,
  t.code AS team_code,
  i.period,
  to_char(i.period, 'YYYY-MM') AS period_label,
  it.group_name,
  count(*)         AS lines,
  sum(it.amount)   AS amount
FROM invoice_item it
JOIN invoice i ON i.id = it.invoice_id
JOIN team    t ON t.id = i.team_id
JOIN org     o ON o.id = t.org_id
GROUP BY o.code, t.code, i.period, it.group_name
ORDER BY i.period DESC, o.code, t.code, amount DESC;
