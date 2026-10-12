/**
 * Mã hóa token DO trước khi ghi DB: AES-256-GCM.
 * Khóa master nằm trong .env (DO_ENC_KEY), không bao giờ vào DB.
 *
 * Sinh khóa mới:  node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
 */
const crypto = require('crypto');

const ALG = 'aes-256-gcm';
const IV_LEN = 12;     // GCM chuẩn 96 bit
const TAG_LEN = 16;

function masterKey() {
  const raw = process.env.DO_ENC_KEY;
  if (!raw) {
    throw new Error(
      'Thiếu DO_ENC_KEY trong .env. Sinh khóa: '
      + 'node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64\'))"'
    );
  }
  const key = Buffer.from(raw.trim(), 'base64');
  if (key.length !== 32) throw new Error('DO_ENC_KEY phải là 32 byte base64 (256 bit).');
  return key;
}

/** @returns {Buffer} iv || tag || ciphertext — ghi thẳng vào cột bytea */
function encrypt(plain) {
  const iv = crypto.randomBytes(IV_LEN);
  const c = crypto.createCipheriv(ALG, masterKey(), iv);
  const enc = Buffer.concat([c.update(String(plain), 'utf8'), c.final()]);
  return Buffer.concat([iv, c.getAuthTag(), enc]);
}

/** @param {Buffer} blob giá trị đọc từ cột bytea */
function decrypt(blob) {
  if (!blob || blob.length <= IV_LEN + TAG_LEN) throw new Error('Dữ liệu mã hóa không hợp lệ.');
  const buf = Buffer.from(blob);
  const d = crypto.createDecipheriv(ALG, masterKey(), buf.subarray(0, IV_LEN));
  d.setAuthTag(buf.subarray(IV_LEN, IV_LEN + TAG_LEN));
  return Buffer.concat([d.update(buf.subarray(IV_LEN + TAG_LEN)), d.final()]).toString('utf8');
}

/** 4 ký tự cuối, để đối chiếu token nào đang dùng mà không lộ token */
const last4 = (t) => String(t).slice(-4);

module.exports = { encrypt, decrypt, last4 };
