const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const ExcelJS = require('exceljs');
const { DOClient } = require('../doClient');
const tokenStore = require('../tokenStore');

/**
 * Script đọc file Excel (.xlsx) hoặc CSV, kiểm tra các dòng có điền token,
 * gọi DigitalOcean API xác thực và lưu mã hóa vào Database / TokenStore.
 *
 * Chạy:
 *   node scripts/importTokens.js "/path/to/file.xlsx"
 *   hoặc
 *   npm run token:import
 */
async function main() {
  const argFile = process.argv[2];
  let targetPath = argFile;
  if (!targetPath) {
    const defaultXlsx = '/home/phan-thanh-cong/Documents/CloudAz_company/do_teams_tokens_2026-10-21 (2).xlsx';
    const defaultCsv = path.join(__dirname, '..', 'out', 'danh_sach_thu_thap_token_teams.csv');
    if (fs.existsSync(defaultXlsx)) {
      targetPath = defaultXlsx;
    } else if (fs.existsSync(defaultCsv)) {
      targetPath = defaultCsv;
    } else {
      console.error('Không tìm thấy file import.');
      process.exit(1);
    }
  }

  if (!fs.existsSync(targetPath)) {
    console.error('Không tìm thấy file:', targetPath);
    process.exit(1);
  }

  console.log(`Đang đọc file: ${targetPath}`);
  let rows = [];
  if (targetPath.endsWith('.xlsx')) {
    rows = await parseExcel(targetPath);
  } else {
    rows = parseCsv(targetPath);
  }

  if (rows.length === 0) {
    console.log('Không có dữ liệu trong file.');
    return;
  }

  console.log(`Tổng số dòng dữ liệu: ${rows.length}. Đang xử lý...`);
  let importedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (let idx = 0; idx < rows.length; idx++) {
    const { teamName, teamUuid, token } = rows[idx];
    const cleanToken = (token || '').trim();

    if (!cleanToken) {
      skippedCount++;
      continue;
    }

    try {
      // 1. Kiểm tra tính hợp lệ của token qua DO API
      const client = new DOClient(cleanToken);
      const { data: accData } = await client.account();
      const actualTeam = accData?.account?.team;

      if (!actualTeam || !actualTeam.uuid) {
        console.error(`❌ [Dòng ${idx + 1}] Team "${teamName}": Token không đọc được thông tin team.`);
        errorCount++;
        continue;
      }

      if (teamUuid && actualTeam.uuid !== teamUuid) {
        console.error(`❌ [Dòng ${idx + 1}] Lệch team! Token thuộc team "${actualTeam.name}" (${actualTeam.uuid}), không khớp với "${teamName}" (${teamUuid}).`);
        errorCount++;
        continue;
      }

      // 2. Lưu token an toàn (mã hóa) vào DB / tokenStore
      await tokenStore.saveToken({
        teamUuid: actualTeam.uuid,
        teamName: actualTeam.name,
        accountUuid: accData.account.uuid,
        token: cleanToken
      });

      console.log(`✓ [Thành công] Đã lưu token cho team: "${actualTeam.name}" (..${cleanToken.slice(-4)})`);
      importedCount++;
    } catch (err) {
      console.error(`❌ [Dòng ${idx + 1}] Team "${teamName}": Lỗi xác thực token - ${err.message}`);
      errorCount++;
    }
  }

  console.log('\n────────────────────────────────────────');
  console.log(`Kết quả: Đã nhập ${importedCount} team | Bỏ qua (chưa điền): ${skippedCount} | Lỗi: ${errorCount}`);
  console.log('────────────────────────────────────────');
}

async function parseExcel(filePath) {
  const wb = new ExcelJS.Workbook();
  await wb.xlsx.readFile(filePath);
  const sheet = wb.getWorksheet('DO Teams & Tokens') || wb.worksheets[0];
  const list = [];
  
  // Xác định header row
  let headerRowIdx = 4;
  let colTeamName = 2;
  let colUuid = 3;
  let colToken = 6;

  for (let r = 1; r <= Math.min(10, sheet.rowCount); r++) {
    const row = sheet.getRow(r).values;
    if (!Array.isArray(row)) continue;
    const tokenIdx = row.findIndex(v => typeof v === 'string' && (v.includes('Personal Access Token') || v.includes('dop_v1')));
    if (tokenIdx !== -1) {
      headerRowIdx = r;
      colToken = tokenIdx;
      break;
    }
  }

  for (let r = headerRowIdx + 1; r <= sheet.rowCount; r++) {
    const row = sheet.getRow(r).values;
    if (!row || !row[colTeamName]) continue;
    list.push({
      teamName: String(row[colTeamName] || '').trim(),
      teamUuid: String(row[colUuid] || '').trim(),
      token: row[colToken] ? String(row[colToken]).trim() : ''
    });
  }
  return list;
}

function parseCsv(filePath) {
  const content = fs.readFileSync(filePath, 'utf8').replace(/^\ufeff/, '');
  const lines = content.split(/\r?\n/).filter(Boolean);
  if (lines.length <= 1) return [];

  const list = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVRow(lines[i]);
    if (!row || row.length < 6) continue;
    const [, teamName, teamUuid, , , token] = row;
    list.push({
      teamName: (teamName || '').trim(),
      teamUuid: (teamUuid || '').trim(),
      token: (token || '').trim()
    });
  }
  return list;
}

function parseCSVRow(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      result.push(cur.trim());
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

main().catch(err => {
  console.error('Lỗi chạy import:', err);
  process.exit(1);
});
