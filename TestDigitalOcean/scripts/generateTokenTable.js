const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const ExcelJS = require('exceljs');
const { DOClient } = require('../doClient');
const tokenStore = require('../tokenStore');

async function main() {
  const bootstrapToken = (await tokenStore.getAnyToken()) || process.env.DO_TOKEN;
  if (!bootstrapToken) {
    throw new Error('Chưa có token nào trong Database. Vui lòng thêm token trên trang quản lý.');
  }
  const client = new DOClient(bootstrapToken);
  const { data: accData } = await client.account();
  
  const { items: teams } = await client.teams();
  const [savedTokens, allTokens] = await Promise.all([
    tokenStore.list(),
    tokenStore.getAllTokens(),
  ]);

  const orgTokenVal = allTokens['ORG_CLOUDAZ'] || '';
  const hasOrgToken = Boolean(orgTokenVal || savedTokens['ORG_CLOUDAZ']);
  const orgLast4 = savedTokens['ORG_CLOUDAZ']?.last4 || (orgTokenVal ? orgTokenVal.slice(-4) : '');
  const orgRow = {
    stt: 'ORG',
    team_name: '🏢 CloudAZ JSC (Organization Master)',
    team_uuid: 'ORG_CLOUDAZ',
    role: 'Org Owner',
    status: hasOrgToken ? `Đã có token (..${orgLast4})` : 'Chưa có token',
    token: orgTokenVal,
    required_scopes: 'organization_membership:read_teams, billing:read',
    note: 'Token cấp Tổ chức (Organization) - Quản lý và liên kết toàn bộ 62 teams'
  };

  const rows = [
    orgRow,
    ...teams.map((t, index) => {
      const tokenVal = allTokens[t.uuid] || '';
      const hasToken = Boolean(tokenVal || savedTokens[t.uuid]);
      const existingLast4 = savedTokens[t.uuid]?.last4 || (tokenVal ? tokenVal.slice(-4) : '');
      return {
        stt: index + 1,
        team_name: t.name,
        team_uuid: t.uuid,
        role: t.user_role,
        status: hasToken ? `Đã có token (..${existingLast4})` : 'Chưa có token',
        token: tokenVal,
        required_scopes: 'billing:read, account:read',
        note: t.user_role === 'Owner' ? 'Team chính của CloudAZ' : ''
      };
    })
  ];

  const outDir = path.join(__dirname, '..', 'out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Tạo file CSV
  const csvHeader = ['STT', 'Team Name', 'Team UUID', 'Role', 'Status', 'Personal Access Token (Điền vào đây)', 'Scopes Yêu Cầu', 'Ghi chú'];
  const csvContent = [
    csvHeader.join(','),
    ...rows.map(r => [
      r.stt,
      `"${r.team_name.replace(/"/g, '""')}"`,
      r.team_uuid,
      r.role,
      `"${r.status}"`,
      `"${r.token}"`,
      `"${r.required_scopes}"`,
      `"${r.note}"`
    ].join(','))
  ].join('\n');

  const csvPath = path.join(outDir, 'danh_sach_thu_thap_token_teams.csv');
  fs.writeFileSync(csvPath, '\ufeff' + csvContent, 'utf8'); // BOM UTF-8 để mở tiếng Việt trên Excel không lỗi font
  console.log('✓ Đã tạo file CSV:', csvPath);

  // 2. Tạo file Excel (.xlsx) với ExcelJS
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Danh Sách Thu Thập Token', {
    views: [{ state: 'frozen', ySplit: 4 }]
  });

  // Title & Hướng dẫn
  sheet.mergeCells('A1:H1');
  sheet.getCell('A1').value = 'BẢNG THU THẬP DIGITALOCEAN PERSONAL ACCESS TOKEN THEO TỪNG TEAM';
  sheet.getCell('A1').font = { size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  sheet.getCell('A1').fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E3A8A' } };
  sheet.getCell('A1').alignment = { vertical: 'middle', horizontal: 'center' };
  sheet.getRow(1).height = 30;

  sheet.mergeCells('A2:H2');
  sheet.getCell('A2').value = 'Hướng dẫn: Mỗi team trên DigitalOcean cần 1 token riêng để truy xuất hóa đơn billing. Vào profile DO -> Chọn Switch Team -> API -> Generate New Token với Scopes: billing:read và account:read.';
  sheet.getCell('A2').font = { size: 10, italic: true, color: { argb: 'FF334155' } };
  sheet.getCell('A2').alignment = { vertical: 'middle', horizontal: 'left' };
  sheet.getRow(2).height = 24;

  sheet.getRow(3).height = 8; // spacing

  // Headers
  const headerRow = sheet.getRow(4);
  headerRow.values = [
    'STT',
    'Tên Team (DigitalOcean)',
    'Team UUID',
    'Vai trò',
    'Trạng thái hiện tại',
    'Personal Access Token (Dán token vào đây)',
    'Scopes bắt buộc',
    'Ghi chú / Người phụ trách'
  ];
  headerRow.height = 28;
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

  headerRow.eachCell((cell, colNumber) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: colNumber === 6 ? 'FF059669' : 'FF2563EB' } // Cột nhập token màu xanh lá nổi bật
    };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  // Data rows
  rows.forEach((r, idx) => {
    const row = sheet.addRow([
      r.stt,
      r.team_name,
      r.team_uuid,
      r.role,
      r.status,
      r.token,
      r.required_scopes,
      r.note
    ]);
    row.height = 22;
    row.alignment = { vertical: 'middle' };
    row.getCell(1).alignment = { vertical: 'middle', horizontal: 'center' };
    row.getCell(3).font = { name: 'Courier New', size: 9 };
    row.getCell(4).alignment = { vertical: 'middle', horizontal: 'center' };
    row.getCell(5).alignment = { vertical: 'middle', horizontal: 'center' };
    row.getCell(6).font = { name: 'Courier New', size: 9, bold: true };
    row.getCell(7).alignment = { vertical: 'middle', horizontal: 'center' };

    // Tô màu xen kẽ
    const isEven = idx % 2 === 0;
    row.eachCell((cell, colNumber) => {
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
        right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
      };
      if (colNumber === 6) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0FDF4' } }; // light green
      } else if (isEven) {
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF8FAFC' } };
      }
    });
  });

  sheet.columns = [
    { width: 8 },   // STT
    { width: 35 },  // Tên Team
    { width: 42 },  // UUID
    { width: 12 },  // Role
    { width: 22 },  // Status
    { width: 55 },  // Token
    { width: 26 },  // Scopes
    { width: 30 }   // Note
  ];

  const xlsxPath = path.join(outDir, 'danh_sach_thu_thap_token_teams.xlsx');
  await workbook.xlsx.writeFile(xlsxPath);
  console.log('✓ Đã tạo file Excel:', xlsxPath);

  // 3. Tạo file Markdown
  const mdLines = [
    '# Bảng Thu Thập DigitalOcean Personal Access Token Toàn Bộ Các Team',
    '',
    `> **Tổng số team ghi nhận:** ${rows.length} teams`,
    '> **Mục đích:** Thu thập Personal Access Token (`billing:read`, `account:read`) của từng team để hệ thống tự động đồng bộ hóa đơn và dữ liệu billing.',
    '',
    '| STT | Tên Team | Team UUID | Role | Trạng thái hiện tại | Personal Access Token (`dop_v1_...`) | Ghi chú |',
    '|:---:|:---|:---|:---:|:---:|:---|:---|'
  ];

  rows.forEach(r => {
    const tokenDisplay = r.token ? `\`${r.token}\`` : '*(Chưa điền)*';
    mdLines.push(`| ${r.stt} | **${r.team_name}** | \`${r.team_uuid}\` | ${r.role} | ${r.status} | ${tokenDisplay} | ${r.note} |`);
  });

  mdLines.push('', '---', '',
    '### Hướng dẫn tạo token chuẩn cho từng team:',
    '1. Đăng nhập vào console DigitalOcean: [https://cloud.digitalocean.com/](https://cloud.digitalocean.com/).',
    '2. Nhấn vào Avatar ở góc trên bên phải -> Chọn **Switch Team** sang đúng team cần lấy token.',
    '3. Vào mục **API** -> **Tokens** -> **Generate New Token**.',
    '4. Chọn **Custom Scopes** -> Kéo xuống tích đủ 2 quyền: [✓] **Billing: Read**  và  [✓] **Account: Read**.',
    '5. Sao chép chuỗi token (dạng `dop_v1_...`) và nhập vào giao diện web hoặc file Excel.',
    '',
    '---',
    '',
    '## ⚠️ TỔNG HỢP CÁC LÝ DO THỰC TẾ KHIẾN TOKEN BỊ TỪ CHỐI & CÁCH XỬ LÝ',
    '',
    'Hệ thống tự động xác thực token với DigitalOcean API trước khi lưu mã hóa vào Database. Dưới đây là các lỗi thực tế đã từng xảy ra và nguyên nhân cụ thể:',
    '',
    '### 1. Thiếu quyền đọc Billing (`403 Forbidden: You are not authorized to perform this operation`)',
    '* **Hiện tượng:** Token kiểm tra tài khoản (`/v2/account`) thành công 200 OK, nhưng khi đọc hóa đơn (`/v2/customers/my/invoices`) thì bị chặn với lỗi `403 Forbidden`.',
    '* **Trường hợp thực tế:** Đã gặp khi thêm token cho team **ANVITEQ** (`dop_v1_7a2453e4...`).',
    '* **Nguyên nhân chính xác:**',
    '  - Khi tạo token trong phần **Custom Scopes**, chỉ tích chọn quyền `Account -> Read` (`account:read`) mà **quên không tích chọn `Billing -> Read` (`billing:read`)**.',
    '  - Hoặc khi tạo chọn nút tròn **"Read"** mặc định (tùy chọn này của DO chỉ cấp quyền đọc tài nguyên droplet/database, **không** tự động cấp quyền đọc Billing vì lý do bảo mật tài chính).',
    '* **Cách khắc phục:** Vào DO -> Switch sang team đó -> API -> Generate New Token -> Chọn **Custom Scopes** -> tích đủ cả 2 ô: **Billing: Read** và **Account: Read**.',
    '',
    '### 2. Token bị Lệch Team (UUID mismatch)',
    '* **Hiện tượng:** Hệ thống báo lỗi `❌ Lệch Team! Token này thuộc team "A", không phải team "B" đang chọn`.',
    '* **Nguyên nhân chính xác:**',
    '  - Trên DigitalOcean, mỗi Personal Access Token chỉ gắn với ngữ cảnh của **đúng 1 team** đang được chọn lúc tạo token.',
    '  - Nếu người dùng chưa chuyển sang đúng team cần lấy token (vẫn đang đứng ở team Adflex hoặc Personal) mà đã tạo token, token đó sẽ gắn với team cũ, không thể đọc cước của team mới.',
    '* **Cách khắc phục:** Trước khi bấm API -> Tokens, phải nhấn vào Avatar góc trên cùng bên phải và chọn **Switch Team** sang đúng team đó.',
    '',
    '### 3. Vai trò của tài khoản trong Team là `Member` (không phải `Owner` hay `Biller`)',
    '* **Hiện tượng:** Gọi API hóa đơn báo `403 Forbidden`, dù khi tạo token đã tích chọn scope `billing:read`.',
    '* **Nguyên nhân chính xác:**',
    '  - Quy tắc của DigitalOcean: **Quyền của token không bao giờ vượt quá quyền của tài khoản tạo ra nó.**',
    '  - Nếu trong team khách hàng, tài khoản CloudAZ chỉ được mời vào với vai trò **Member**, tài khoản này không được xem hóa đơn trên web DO -> Mọi token tạo ra từ tài khoản này đều bị cấm truy cập hóa đơn.',
    '* **Cách khắc phục:** Liên hệ Owner của team đó đổi vai trò của tài khoản CloudAZ sang **`Biller`** hoặc **`Owner`**.',
    '',
    '### 4. Token cũ trong `.env` bị hết hạn làm gián đoạn hiển thị (Hiểu nhầm không lưu được)',
    '* **Hiện tượng:** Token của team mới (như **TakeProfit_Tech**) đã lưu thành công vào DB, nhưng giao diện lại báo lỗi đỏ và không hiển thị trạng thái mới.',
    '* **Nguyên nhân chính xác:**',
    '  - Sau khi lưu token xong, trang web gọi lại API danh sách `/api/teams`. API này trước đây lại gọi bằng `DO_TOKEN` trong `.env` vốn đã bị thu hồi/xóa trên DO (lỗi 401 Unauthorized), khiến trang web báo lỗi làm tưởng token chưa được lưu.',
    '* **Cách khắc phục:** Đã chuyển đổi kiến trúc sang lấy token 100% từ Database PostgreSQL (`do_billing.team`), không phụ thuộc vào file `.env`.',
    '',
    '### 5. Token không hợp lệ hoặc đã bị thu hồi (401 Unauthorized)',
    '* **Hiện tượng:** Báo lỗi `DigitalOcean từ chối token (401 Unauthorized): Unable to authenticate you`.',
    '* **Nguyên nhân chính xác:** Chuỗi token bị sao chép thiếu ký tự, có khoảng trắng thừa, hoặc token đã bị xóa/thu hồi trên DigitalOcean.',
    '* **Cách khắc phục:** Tạo lại token mới và sao chép đầy đủ toàn bộ chuỗi bắt đầu bằng `dop_v1_...`.'
  );

  const mdPath = path.join(outDir, 'danh_sach_thu_thap_token_teams.md');
  fs.writeFileSync(mdPath, mdLines.join('\n'), 'utf8');
  console.log('✓ Đã tạo file Markdown:', mdPath);

  const rootMdPath = path.join(__dirname, '..', 'DANH_SACH_TOKEN_TEAMS.md');
  fs.writeFileSync(rootMdPath, mdLines.join('\n'), 'utf8');
  console.log('✓ Đã cập nhật DANH_SACH_TOKEN_TEAMS.md');
}

main().catch(err => {
  console.error('Lỗi khi tạo bảng:', err);
  process.exit(1);
});
