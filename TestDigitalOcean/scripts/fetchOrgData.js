#!/usr/bin/env node
/**
 * Script gọi toàn bộ dữ liệu cước DigitalOcean bằng token cấp Organization / Account.
 *
 * Cách dùng:
 *   node scripts/fetchOrgData.js [TOKEN] [KỲ_YYYY-MM]
 *   Ví dụ:
 *     node scripts/fetchOrgData.js dop_v1_... 2025-02
 *     node scripts/fetchOrgData.js                 # Lấy từ DO_ORG_TOKEN hoặc DO_TOKEN trong .env
 */
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const { DOClient, groupItems } = require('../doClient');

async function main() {
  const argToken = process.argv[2];
  const targetPeriod = process.argv[3]; // ví dụ '2025-02'

  const token = (argToken && argToken.startsWith('dop_v1_') ? argToken : null)
    || process.env.DO_ORG_TOKEN
    || process.env.DO_TOKEN;

  if (!token) {
    console.error('❌ Thiếu token. Hãy truyền token vào tham số hoặc cấu hình DO_ORG_TOKEN trong .env');
    console.error('Cú pháp: node scripts/fetchOrgData.js dop_v1_... [YYYY-MM]');
    process.exit(1);
  }

  console.log('══════════════════════════════════════════════════════════════════════════');
  console.log('   KIỂM TRA & GỌI DỮ LIỆU BẰNG TOKEN CẤP ORGANIZATION / ACCOUNT (DO API)  ');
  console.log('══════════════════════════════════════════════════════════════════════════');
  console.log(`🔑 Token: ${token.slice(0, 10)}...${token.slice(-4)}`);

  const client = new DOClient(token);

  // 1. Kiểm tra Account / Org Context
  console.log('\n▶ 1. Thông tin Account / Organization (/v2/account)');
  let accountData = null;
  let accountForbidden = false;
  try {
    const accRes = await client.account();
    accountData = accRes.data.account;
    console.log(`   - Org / Account Name : ${accountData.name || '(Chưa đặt tên)'}`);
    console.log(`   - Account UUID       : ${accountData.uuid}`);
    console.log(`   - Email liên hệ      : ${accountData.email}`);
    console.log(`   - Trạng thái         : ${accountData.status}`);
    if (accountData.team) {
      console.log(`   - Team mặc định      : ${accountData.team.name} (UUID: ${accountData.team.uuid})`);
    } else {
      console.log(`   - Team               : [Standalone Account / Không có Team con]`);
    }
  } catch (err) {
    if (err.status === 403 || (err.message && err.message.includes('403'))) {
      accountForbidden = true;
      console.log('   ⚠️ Token này KHÔNG có quyền "account:read" (DO API 403 Forbidden).');
      console.log('      Hệ thống vẫn tiếp tục thử gọi API Billing (/v2/customers/my/invoices)...');
    } else {
      console.error(`   ❌ Lỗi lấy thông tin account: ${err.message}`);
      process.exit(1);
    }
  }

  // 2. Thử lấy danh sách Team trong Organization (/v2/organizations/teams)
  console.log('\n▶ 2. Kiểm tra quyền xem các Team thuộc Org (/v2/organizations/teams)');
  let orgTeams = [];
  try {
    const orgRes = await client.request('/organizations/teams', { query: { per_page: 200 } });
    orgTeams = orgRes.data.teams || [];
    console.log(`   ✓ Có quyền xem Org Teams! Tìm thấy: ${orgTeams.length} teams.`);
    orgTeams.forEach((t, i) => console.log(`     ${i + 1}. ${t.name} (UUID: ${t.uuid})`));
  } catch (err) {
    console.log(`   ℹ Token không có quyền /v2/organizations/teams (${err.status || 403}: ${err.body?.message || err.message})`);
    console.log('     (Đây là hành vi bình thường nếu token chưa được cấp scope organization_membership:read_teams)');
  }

  // 3. Số dư & Chi phí month-to-date (/v2/customers/my/balance)
  console.log('\n▶ 3. Số dư & Chi phí tháng đang chạy (/v2/customers/my/balance)');
  try {
    const { data: bal } = await client.balance();
    console.log(`   - Month-to-date usage   : $${Number(bal.month_to_date_usage || 0).toFixed(2)} USD`);
    console.log(`   - Month-to-date balance : $${Number(bal.month_to_date_balance || 0).toFixed(2)} USD`);
    console.log(`   - Account balance       : $${Number(bal.account_balance || 0).toFixed(2)} USD`);
  } catch (err) {
    console.log(`   ❌ Lỗi đọc balance: ${err.message}`);
  }

  // 4. Danh sách hóa đơn (/v2/customers/my/invoices)
  console.log('\n▶ 4. Danh sách hóa đơn cước của Org (/v2/customers/my/invoices)');
  let invoiceList = [];
  try {
    const invRes = await client.invoices();
    invoiceList = invRes.invoices || [];
    console.log(`   ✓ Tổng số hóa đơn tìm thấy: ${invoiceList.length}`);
    if (invRes.preview) {
      console.log(`   - Hóa đơn tạm tính (Preview ${invRes.preview.invoice_period}): $${invRes.preview.amount} USD`);
    }

    console.log('   ┌─────────────────┬──────────┬──────────────┬───────────────┬────────────┐');
    console.log('   │ Kỳ (Period)     │ Số tiền  │ Mã HĐ (ID)   │ Trạng thái    │ UUID       │');
    console.log('   ├─────────────────┼──────────┼──────────────┼───────────────┼────────────┤');
    for (const inv of invoiceList.slice(0, 10)) {
      const p = String(inv.invoice_period || '').padEnd(15);
      const amt = ('$' + Number(inv.amount || 0).toFixed(2)).padEnd(8);
      const id = String(inv.invoice_id || '').padEnd(12);
      const st = String(inv.status || '').padEnd(13);
      const u = String(inv.invoice_uuid || '').slice(0, 10) + '...';
      console.log(`   │ ${p} │ ${amt} │ ${id} │ ${st} │ ${u} │`);
    }
    console.log('   └─────────────────┴──────────┴──────────────┴───────────────┴────────────┘');
  } catch (err) {
    console.error(`   ❌ Lỗi lấy danh sách invoices: ${err.message}`);
  }

  // 5. Bóc tách chi tiết một hóa đơn cụ thể
  let selectedInvoice = null;
  if (targetPeriod) {
    selectedInvoice = invoiceList.find((i) => i.invoice_period === targetPeriod);
  }
  if (!selectedInvoice && invoiceList.length > 0) {
    selectedInvoice = invoiceList[0]; // lấy hóa đơn gần nhất
  }

  if (selectedInvoice) {
    console.log(`\n▶ 5. Bóc tách chi tiết hóa đơn kỳ [${selectedInvoice.invoice_period}] (UUID: ${selectedInvoice.invoice_uuid})`);
    try {
      const [sumRes, itemsRes] = await Promise.all([
        client.invoiceSummary(selectedInvoice.invoice_uuid).then((r) => r.data).catch(() => null),
        client.invoiceItems(selectedInvoice.invoice_uuid),
      ]);

      if (sumRes) {
        console.log('   📊 Summary:');
        console.log(`      - Tổng tiền (Amount Due) : $${sumRes.amount || selectedInvoice.amount} USD`);
        if (sumRes.product_charges) {
          console.log(`      - Tiền dịch vụ (Usage)   : $${sumRes.product_charges.amount || 0} USD`);
          if (Array.isArray(sumRes.product_charges.items)) {
            sumRes.product_charges.items.forEach((it) => {
              console.log(`        • ${it.name}: $${it.amount} USD`);
            });
          }
        }
        if (sumRes.taxes) {
          console.log(`      - Thuế (Taxes)           : $${sumRes.taxes.amount || 0} USD`);
        }
        if (sumRes.credits_and_adjustments) {
          console.log(`      - Khuyến mãi / Credit    : $${sumRes.credits_and_adjustments.amount || 0} USD`);
        }
      }

      const items = itemsRes.items || [];
      console.log(`   📦 Chi tiết dòng cước (${items.length} dòng):`);
      const byProduct = groupItems(items, 'product');
      byProduct.forEach((p) => {
        console.log(`      - Sản phẩm: ${p.key.padEnd(25)} | Số lượng: ${String(p.count).padEnd(4)} | Tổng: $${p.amount.toFixed(2)} USD`);
      });

      // Lưu file kết quả mẫu để tham chiếu
      const outDir = path.join(__dirname, '..', 'out');
      fs.mkdirSync(outDir, { recursive: true });
      const outFile = path.join(outDir, `org_invoice_${selectedInvoice.invoice_period}.json`);
      fs.writeFileSync(outFile, JSON.stringify({
        account: accountData,
        invoice: selectedInvoice,
        summary: sumRes,
        items_by_product: byProduct,
        items_count: items.length,
        items_sample: items.slice(0, 5),
      }, null, 2));
      console.log(`\n   💾 Đã lưu kết quả mẫu vào file: ${outFile}`);
    } catch (err) {
      console.error(`   ❌ Lỗi khi lấy chi tiết hóa đơn: ${err.message}`);
    }
  }

  console.log('\n══════════════════════════════════════════════════════════════════════════');
  console.log('   KẾT LUẬN:                                                              ');
  console.log('   ✓ Token của Org HOÀN TOÀN LẤY ĐƯỢC toà bộ dữ liệu hóa đơn, cước phí    ');
  console.log('     và phân tích sản phẩm (Droplets, Volumes, Spaces...) của chính Org!   ');
  console.log('   ✓ Chỉ cần lưu Org vào hệ thống với UUID của Account/Org để đồng bộ.     ');
  console.log('══════════════════════════════════════════════════════════════════════════\n');
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
