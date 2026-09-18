document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const authStatusBadge = document.getElementById('authStatusBadge');
  const authStatusText = document.getElementById('authStatusText');
  const btnOpenConfig = document.getElementById('btnOpenConfig');
  const btnCloseConfig = document.getElementById('btnCloseConfig');
  const configModal = document.getElementById('configModal');
  const configKeyPath = document.getElementById('configKeyPath');
  const jsonKeyInput = document.getElementById('jsonKeyInput');
  const btnSaveKey = document.getElementById('btnSaveKey');
  const keySaveResult = document.getElementById('keySaveResult');

  const presetSelect = document.getElementById('presetSelect');
  const sqlInput = document.getElementById('sqlInput');
  const btnClearSql = document.getElementById('btnClearSql');
  const btnRunQuery = document.getElementById('btnRunQuery');

  // Month Picker
  const monthPickerGroup = document.getElementById('monthPickerGroup');
  const billingMonth = document.getElementById('billingMonth');
  const btnApplyMonth = document.getElementById('btnApplyMonth');

  const statsSection = document.getElementById('statsSection');
  const statDuration = document.getElementById('statDuration');
  const statRows = document.getElementById('statRows');
  const statBytes = document.getElementById('statBytes');
  const statCache = document.getElementById('statCache');

  const logConsole = document.getElementById('logConsole');
  const liveStatus = document.getElementById('liveStatus');
  const btnClearLog = document.getElementById('btnClearLog');

  const tabTable = document.getElementById('tabTable');
  const tabJson = document.getElementById('tabJson');
  const tableView = document.getElementById('tableView');
  const jsonView = document.getElementById('jsonView');
  const tableHead = document.getElementById('tableHead');
  const tableBody = document.getElementById('tableBody');
  const jsonContent = document.getElementById('jsonContent');
  const resultCount = document.getElementById('resultCount');
  const searchInput = document.getElementById('searchInput');
  const btnCopyJson = document.getElementById('btnCopyJson');
  const btnExportCsv = document.getElementById('btnExportCsv');

  // Credential Gate (popup kiểm tra key trước khi vào app)
  const credGate = document.getElementById('credGate');
  const credGateIcon = document.getElementById('credGateIcon');
  const credGateTitle = document.getElementById('credGateTitle');
  const credGateDesc = document.getElementById('credGateDesc');
  const credGateInfo = document.getElementById('credGateInfo');
  const credInfoEmail = document.getElementById('credInfoEmail');
  const credInfoProject = document.getElementById('credInfoProject');
  const credInfoPath = document.getElementById('credInfoPath');
  const credGateForm = document.getElementById('credGateForm');
  const credGateJson = document.getElementById('credGateJson');
  const credGateAlert = document.getElementById('credGateAlert');
  const btnGateRetry = document.getElementById('btnGateRetry');
  const btnGateSave = document.getElementById('btnGateSave');
  const btnGateEnter = document.getElementById('btnGateEnter');
  const btnGateSkip = document.getElementById('btnGateSkip');

  let currentRows = [];
  let currentColumns = [];
  let presetsData = [];
  let currentPresetId = '';

  // 1. Thêm log vào Terminal
  function appendLog(message, level = 'info', timeStr = null) {
    const time = timeStr || new Date().toLocaleTimeString('vi-VN');
    const item = document.createElement('div');
    item.className = `log-item ${level}`;
    item.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-msg">${escapeHtml(message)}</span>`;
    logConsole.appendChild(item);
    logConsole.scrollTop = logConsole.scrollHeight;
  }

  function clearLogs() {
    logConsole.innerHTML = '';
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // 2. Load Config & Trạng thái Key
  async function loadConfig() {
    try {
      const res = await fetch('/api/config');
      const data = await res.json();

      configKeyPath.value = data.keyPath;

      if (data.hasKeyFile) {
        authStatusBadge.className = 'badge badge-success';
        authStatusText.textContent = `Đã nạp Key: ${data.keyInfo?.client_email || 'Hợp lệ'}`;
        appendLog(`Service Account sẵn sàng: ${data.keyInfo?.client_email || 'Đã nạp file key'}`, 'success');
      } else {
        authStatusBadge.className = 'badge badge-danger';
        authStatusText.textContent = 'Chưa có file Key (Bấm vào đây)';
        appendLog(`Chưa tìm thấy file Service Account Key tại: ${data.keyPath}`, 'error');
      }
    } catch (err) {
      appendLog(`Lỗi kết nối máy chủ backend: ${err.message}`, 'error');
    }
  }

  // 3. Load Presets
  async function loadPresets() {
    try {
      const res = await fetch('/api/presets');
      presetsData = await res.json();

      presetSelect.innerHTML = '<option value="">-- Chọn câu query mẫu --</option>';
      presetsData.forEach((p, idx) => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = p.title;
        presetSelect.appendChild(opt);
      });

      // Mặc định chọn câu query đầu tiên
      if (presetsData.length > 0) {
        presetSelect.value = presetsData[0].id;
        sqlInput.value = presetsData[0].sql;
      }
    } catch (err) {
      appendLog(`Không thể tải preset query: ${err.message}`, 'error');
    }
  }

  // Helper: convert month input value (YYYY-MM) to YYYYMM
  function getMonthValue() {
    const val = billingMonth.value; // e.g. '2026-06'
    return val ? val.replace('-', '') : '202606';
  }

  // Helper: replace {BILLING_MONTH} placeholder in SQL
  function applyMonthToSql(sql) {
    return sql.replace(/\{BILLING_MONTH\}/g, getMonthValue());
  }

  // Khi chọn preset khác
  presetSelect.addEventListener('change', () => {
    const selected = presetsData.find(p => p.id === presetSelect.value);
    if (selected) {
      currentPresetId = selected.id;

      // Show/hide month picker
      if (selected.hasMonthPicker) {
        monthPickerGroup.classList.remove('hidden');
        sqlInput.value = applyMonthToSql(selected.sql);
      } else {
        monthPickerGroup.classList.add('hidden');
        sqlInput.value = selected.sql;
      }

      appendLog(`Đã tải mẫu query: ${selected.title}`, 'info');
    } else {
      monthPickerGroup.classList.add('hidden');
    }
  });

  // Khi bấm "Áp dụng" tháng hoặc thay đổi tháng
  function onMonthChange() {
    const selected = presetsData.find(p => p.id === currentPresetId);
    if (selected && selected.hasMonthPicker) {
      sqlInput.value = applyMonthToSql(selected.sql);
      appendLog(`Đã cập nhật kỳ cước: ${billingMonth.value}`, 'info');
    }
  }

  btnApplyMonth.addEventListener('click', onMonthChange);
  billingMonth.addEventListener('change', onMonthChange);

  // 4. Chạy Query
  async function executeQuery() {
    const sql = sqlInput.value.trim();
    if (!sql) {
      alert('Vui lòng nhập câu lệnh SQL trước khi chạy!');
      return;
    }

    // Set UI loading
    btnRunQuery.disabled = true;
    btnRunQuery.innerHTML = '<span class="icon">⏳</span> Đang truy vấn...';
    liveStatus.textContent = 'Đang chạy...';

    appendLog(`Bắt đầu chạy truy vấn BigQuery...`, 'info');

    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sql })
      });

      const result = await res.json();

      // Hiển thị logs từ backend
      if (result.logs && Array.isArray(result.logs)) {
        result.logs.forEach(l => appendLog(l.message, l.level, l.time));
      }

      if (!result.success) {
        throw new Error(result.error + (result.tip ? `\n👉 ${result.tip}` : ''));
      }

      // Cập nhật stats
      statsSection.classList.remove('hidden');
      statDuration.textContent = `${result.meta.durationMs} ms`;
      statRows.textContent = result.meta.totalRows.toLocaleString();
      statBytes.textContent = result.meta.bytesProcessed;
      statCache.textContent = result.meta.cacheHit;

      // Lưu kết quả
      currentRows = result.rows;
      currentColumns = result.columns;
      resultCount.textContent = currentRows.length;

      // Render views
      renderTable(currentRows, currentColumns);
      jsonContent.textContent = JSON.stringify(currentRows, null, 2);

      liveStatus.textContent = 'Thành công';
      appendLog(`Hoàn thành! Đã nạp ${currentRows.length} dòng dữ liệu vào bảng.`, 'success');

    } catch (error) {
      liveStatus.textContent = 'Lỗi';
      appendLog(`Thất bại: ${error.message}`, 'error');
      tableHead.innerHTML = `<tr><th class="text-danger">LỖI THỰC THI</th></tr>`;
      tableBody.innerHTML = `<tr><td style="color:#f87171; white-space:pre-wrap; padding:1.5rem;">${escapeHtml(error.message)}</td></tr>`;
      jsonContent.textContent = JSON.stringify({ error: error.message }, null, 2);
    } finally {
      btnRunQuery.disabled = false;
      btnRunQuery.innerHTML = '<span class="icon">▶</span> Chạy Query (Ctrl + Enter)';
    }
  }

  // 5. Render Data Table
  function renderTable(rows, columns) {
    if (!rows || rows.length === 0) {
      tableHead.innerHTML = `<tr><th>Không có dữ liệu trả về</th></tr>`;
      tableBody.innerHTML = `<tr><td style="text-align:center; padding: 2rem; color: #9ca3af;">Không tìm thấy bản ghi nào khớp với điều kiện.</td></tr>`;
      return;
    }

    // Header
    let headHtml = '<tr><th style="width: 50px;">#</th>';
    columns.forEach(col => {
      headHtml += `<th>${escapeHtml(col)}</th>`;
    });
    headHtml += '</tr>';
    tableHead.innerHTML = headHtml;

    // Body
    let bodyHtml = '';
    rows.forEach((row, idx) => {
      bodyHtml += `<tr><td style="color:#6b7280; font-family: monospace;">${idx + 1}</td>`;
      columns.forEach(col => {
        const val = row[col];
        let displayVal = val === null || val === undefined ? '<span style="color:#6b7280;">NULL</span>' : escapeHtml(val);
        
        // Highlight tiền / cost
        if (col.toLowerCase().includes('cost') || col.toLowerCase().includes('amount')) {
          displayVal = `<span class="badge-cost">${displayVal}</span>`;
        }
        bodyHtml += `<td>${displayVal}</td>`;
      });
      bodyHtml += '</tr>';
    });
    tableBody.innerHTML = bodyHtml;
  }

  // 6. Tìm kiếm trong bảng
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) {
      renderTable(currentRows, currentColumns);
      return;
    }

    const filtered = currentRows.filter(row => {
      return Object.values(row).some(v => String(v).toLowerCase().includes(q));
    });

    resultCount.textContent = `${filtered.length}/${currentRows.length}`;
    renderTable(filtered, currentColumns);
  });

  // 7. Tabs View Switcher
  tabTable.addEventListener('click', () => {
    tabTable.classList.add('active');
    tabJson.classList.remove('active');
    tableView.classList.add('active');
    jsonView.classList.remove('active');
  });

  tabJson.addEventListener('click', () => {
    tabJson.classList.add('active');
    tabTable.classList.remove('active');
    jsonView.classList.add('active');
    tableView.classList.remove('active');
  });

  // 8. Copy JSON & Export CSV
  btnCopyJson.addEventListener('click', () => {
    if (currentRows.length === 0) return alert('Chưa có dữ liệu để copy');
    navigator.clipboard.writeText(JSON.stringify(currentRows, null, 2));
    btnCopyJson.textContent = '✅ Đã copy!';
    setTimeout(() => { btnCopyJson.textContent = '📋 Copy JSON'; }, 2000);
  });

  btnExportCsv.addEventListener('click', () => {
    if (currentRows.length === 0) return alert('Chưa có dữ liệu để xuất file');
    
    let csv = currentColumns.join(',') + '\n';
    currentRows.forEach(row => {
      const line = currentColumns.map(c => {
        let v = row[c] ?? '';
        v = String(v).replace(/"/g, '""');
        return `"${v}"`;
      }).join(',');
      csv += line + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bigquery_export_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // 9. Phím tắt & Buttons
  btnClearSql.addEventListener('click', () => { sqlInput.value = ''; sqlInput.focus(); });
  btnClearLog.addEventListener('click', clearLogs);
  btnRunQuery.addEventListener('click', executeQuery);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      executeQuery();
    }
  });

  // 10. Modal Cấu hình Key
  btnOpenConfig.addEventListener('click', () => { configModal.classList.remove('hidden'); });
  btnCloseConfig.addEventListener('click', () => { configModal.classList.add('hidden'); });

  btnSaveKey.addEventListener('click', async () => {
    const rawContent = jsonKeyInput.value.trim();
    if (!rawContent) {
      alert('Vui lòng dán nội dung JSON vào ô trước khi bấm Lưu!');
      return;
    }

    try {
      const res = await fetch('/api/save-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyJsonContent: rawContent })
      });
      const data = await res.json();

      keySaveResult.classList.remove('hidden');
      if (res.ok) {
        keySaveResult.className = 'alert-box success';
        keySaveResult.textContent = `Thành công! Đã lưu key của: ${data.client_email}`;
        jsonKeyInput.value = '';
        setTimeout(() => {
          configModal.classList.add('hidden');
          keySaveResult.classList.add('hidden');
          loadConfig();
        }, 1500);
      } else {
        keySaveResult.className = 'alert-box error';
        keySaveResult.textContent = `Lỗi: ${data.error}`;
      }
    } catch (err) {
      keySaveResult.classList.remove('hidden');
      keySaveResult.className = 'alert-box error';
      keySaveResult.textContent = `Lỗi hệ thống: ${err.message}`;
    }
  });

  // 11. Credential Gate - Kiểm tra Service Account Key TRƯỚC khi dùng app
  let gateAutoTimer = null;

  function showGateEls(list) {
    [credGateInfo, credGateForm, btnGateRetry, btnGateSave, btnGateEnter, btnGateSkip]
      .forEach(el => el.classList.add('hidden'));
    list.forEach(el => el.classList.remove('hidden'));
  }

  function setGateIcon(state, symbol) {
    credGateIcon.className = `cred-gate-icon state-${state}`;
    credGateIcon.innerHTML = symbol || '<div class="spinner"></div>';
  }

  function openGate() {
    clearTimeout(gateAutoTimer);
    credGate.classList.remove('hidden', 'is-closing');
    document.body.classList.add('gate-locked');
  }

  function closeGate() {
    clearTimeout(gateAutoTimer);
    credGate.classList.add('is-closing');
    document.body.classList.remove('gate-locked');
    setTimeout(() => credGate.classList.add('hidden'), 300);
  }

  function gateAlert(message, type) {
    credGateAlert.classList.remove('hidden');
    credGateAlert.className = `alert-box ${type}`;
    credGateAlert.textContent = message;
  }

  async function checkCredential({ silent = false } = {}) {
    if (!silent) {
      openGate();
      setGateIcon('checking');
      credGateTitle.textContent = 'Đang kiểm tra Service Account Key...';
      credGateDesc.textContent = 'Vui lòng chờ trong giây lát, hệ thống đang xác thực thông tin đăng nhập BigQuery.';
      showGateEls([]);
      credGateAlert.classList.add('hidden');
    }

    try {
      const res = await fetch('/api/config');
      if (!res.ok) throw new Error(`Máy chủ trả về mã ${res.status}`);
      const data = await res.json();

      const invalidJson = data.keyInfo && data.keyInfo.error;
      const missingEmail = !data.keyInfo || !data.keyInfo.client_email;

      // Trường hợp 1: Key hợp lệ
      if (data.hasKeyFile && !invalidJson && !missingEmail) {
        setGateIcon('success', '✔');
        credGateTitle.textContent = 'Xác thực thành công';
        credGateDesc.textContent = 'Service Account Key hợp lệ. Bạn có thể bắt đầu truy vấn BigQuery.';
        credInfoEmail.textContent = data.keyInfo.client_email;
        credInfoProject.textContent = data.keyInfo.project_id || data.defaultProject || '--';
        credInfoPath.textContent = data.keyPath;
        showGateEls([credGateInfo, btnGateEnter]);
        gateAutoTimer = setTimeout(closeGate, 1600);
        return true;
      }

      // Trường hợp 2: Có file nhưng JSON hỏng
      if (data.hasKeyFile && invalidJson) {
        setGateIcon('error', '⚠');
        credGateTitle.textContent = 'File Key không hợp lệ';
        credGateDesc.textContent = `File tại ${data.keyPath} không phải JSON hợp lệ. Vui lòng dán lại nội dung key bên dưới.`;
      } else {
        // Trường hợp 3: Chưa có key
        setGateIcon('error', '🔑');
        credGateTitle.textContent = 'Chưa có Service Account Key';
        credGateDesc.textContent = `Không tìm thấy file key tại ${data.keyPath}. Dán nội dung file JSON để tiếp tục.`;
      }

      showGateEls([credGateForm, btnGateRetry, btnGateSave, btnGateSkip]);
      return false;

    } catch (err) {
      setGateIcon('error', '⛔');
      credGateTitle.textContent = 'Không kết nối được máy chủ';
      credGateDesc.textContent = `Lỗi: ${err.message}. Kiểm tra lại server Node đã chạy chưa (npm start).`;
      showGateEls([btnGateRetry, btnGateSkip]);
      return false;
    }
  }

  btnGateRetry.addEventListener('click', () => checkCredential());
  btnGateEnter.addEventListener('click', closeGate);
  btnGateSkip.addEventListener('click', closeGate);

  btnGateSave.addEventListener('click', async () => {
    const rawContent = credGateJson.value.trim();
    if (!rawContent) {
      gateAlert('Vui lòng dán nội dung file JSON trước khi lưu!', 'error');
      return;
    }

    btnGateSave.disabled = true;
    btnGateSave.textContent = '⏳ Đang lưu...';

    try {
      const res = await fetch('/api/save-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyJsonContent: rawContent })
      });
      const data = await res.json();

      if (!res.ok) {
        gateAlert(`Lỗi: ${data.error}`, 'error');
        return;
      }

      gateAlert(`Đã lưu key của: ${data.client_email}`, 'success');
      credGateJson.value = '';
      appendLog(`Đã lưu Service Account Key mới: ${data.client_email}`, 'success');
      await checkCredential();
      loadConfig();
    } catch (err) {
      gateAlert(`Lỗi hệ thống: ${err.message}`, 'error');
    } finally {
      btnGateSave.disabled = false;
      btnGateSave.innerHTML = '🔐 Lưu Key &amp; Xác thực';
    }
  });

  // Đóng gate bằng phím Esc (chỉ khi đã xác thực xong)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !credGate.classList.contains('hidden')) {
      if (!btnGateEnter.classList.contains('hidden')) closeGate();
    }
  });

  // Mở lại gate khi bấm badge trạng thái ở header
  authStatusBadge.addEventListener('click', () => checkCredential());

  // Khởi động: kiểm tra credential TRƯỚC, sau đó mới nạp phần còn lại
  checkCredential();
  loadConfig();
  loadPresets();
});
