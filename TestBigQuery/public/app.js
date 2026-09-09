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

  let currentRows = [];
  let currentColumns = [];
  let presetsData = [];

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

  // Khi chọn preset khác
  presetSelect.addEventListener('change', () => {
    const selected = presetsData.find(p => p.id === presetSelect.value);
    if (selected) {
      sqlInput.value = selected.sql;
      appendLog(`Đã tải mẫu query: ${selected.title}`, 'info');
    }
  });

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
  authStatusBadge.addEventListener('click', () => { configModal.classList.remove('hidden'); });
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

  // Khởi động
  loadConfig();
  loadPresets();
});
