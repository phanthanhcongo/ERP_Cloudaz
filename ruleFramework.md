# GSD Framework — Quy Trình Chi Tiết

**GSD (Get Shit Done)** là một framework spec-driven, gated development methodology cho dự án phát triển với Claude Code.

---

## 🎯 Pipeline Chính: 8 Giai Đoạn

```
DISCUSS ⛔ → RESEARCH → PLAN → CHECK ✓auto-gate → EXECUTE → UI REVIEW → CODE REVIEW → QC VERIFY → REPORT → SHIP
```

### **Giai Đoạn 1: DISCUSS (⛔ User Gate)**
- **Người dùng** nhập yêu cầu/tính năng mới
- **Agent (Requirements Analyst)** tiếp nhận, hỏi rõ yêu cầu
- **Output**: `.gsd/SPEC.md` với trạng thái `FINALIZED` 
- **Gate**: Người dùng phải duyệt, không thể tự động qua

### **Giai Đoạn 2: RESEARCH**
- **Agent (Architect/Context Fetcher)** khám phá codebase
- Đọc tài liệu, LESSON từ `gsd-knowledge/erp/`
- Phân tích code map, stack, architecture
- **Output**: `.gsd/RESEARCH.md`, tham chiếu LESSON, DOMAIN
- **Yêu cầu**: PHẢI đọc SPEC.md + LESSON.md trước khi bắt đầu

### **Giai Đoạn 3: PLAN (Manual - No Auto-Gate)**
- **Agent (Planner)** phân tách yêu cầu thành phase nhỏ
- Tạo kế hoạch chi tiết: task, scope, test plan
- **Output**: 
  - `.gsd/ROADMAP.md` — lộ trình các phase
  - `.gsd/PLAN.md` — kế hoạch phase hiện tại
  - `## Test Plan` (TDD bắt buộc cho những layer HARD)
- **Kiểm tra**:
  - Cross-reference LESSON.md + DOMAIN.md
  - Có test plan cho mỗi phase
  - Phạm vi rõ ràng (stories/tasks)

### **Giai Đoạn 4: CHECK (✓ Auto-Gate — Hoặc Manual)**
- **Agent (Plan Checker)** đánh giá kế hoạch
- **Verdict**: PASS / FAIL
- **Nếu PASS**:
  - Tự động unlock Execution Lock (autonomous mode)
  - Ghi vào `.gsd/DECISIONS.md`: `Plan gate: auto-approved — CHECK PASS`
  - Không cần người dùng duyệt
- **Nếu FAIL** (lần 1–2):
  - Ghi `### FIX-LIST` vào `CHECK.md`
  - Gửi lại planner để revise
  - Tối đa 2 vòng revise
- **Nếu FAIL lần 3**:
  - **Dừng, escalate cho người dùng** — không bao giờ tự chạy tiếp
  - ⚠️ **Quy tắc Loop Cap**: 3 consecutive FAIL = dừng, không loop vô tận

### **Giai Đoạn 5: EXECUTE**
- **Agent (Executor)** bắt đầu code
- **Yêu cầu bắt buộc**:
  - ✅ `CHECK.md` Verdict = PASS (tức Execution Lock đã mở)
  - ✅ TDD: viết **failing test TRƯỚC**, rồi implementation, rồi refactor
  - ✅ Atomic commits: 1 task = 1 commit, test-commit đứng trước code-commit
  - ✅ KHÔNG bao giờ commit code sản phẩm trực tiếp lên main/sit/prod
- **Worktree Bắt Buộc** (07DK):
  - Mỗi phase PHẢI chạy trong worktree riêng
  - Nếu đang đứng trên main/master/sit/prod mà edit code → **hook chặn ngay**
  - Git flow: `main` ← (merge qua gsd-worktree.sh) ← `phase/N` ← worktree
- **Output**: 
  - Code mới/modified
  - Test cases (RED → GREEN)
  - Commit messages: `type(scope): description`

### **Giai Đoạn 6: UI REVIEW (Tùy chọn)**
- **Agent (UI/UX Reviewer)** kiểm tra giao diện (nếu có)
- Đối chiếu DESIGN_FRAMEWORK.md, UIUX_POLICY (D0–D11)
- Đặc biệt: form phải là Drawer (D11), đọc precedent trước (D1.0)
- **Output**: `UI_REVIEW.md` với findings + approval

### **Giai Đoạn 7: CODE REVIEW**
- **Agent (Code Reviewer)** soát code:
  - Correctness (logic bugs, edge cases)
  - Performance, efficiency
  - Security (OWASP, injection, XSS, SQL injection)
  - Code style + linting pass
- **Output**: `CODE_REVIEW.md` với findings
- **Quy tắc**:
  - KHÔNG phải "looks good" → phải có evidence (test green, lint clean)
  - Findings ghi vào `CODE_REVIEW.md`

### **Giai Đoạn 8: QC VERIFY**
- **Agent (QC Verifier)** chứng minh hoàn thành:
  - ✅ Tất cả tests PASS (unit + integration)
  - ✅ Coverage ≥ floor (từ TDD_POLICY.md)
  - ✅ Regression tests green (toàn bộ kiểm tra cũ vẫn chạy)
  - ✅ Linting/Security scan pass (golangci-lint, gosec, squawk-cli)
  - ✅ No requirement dropped: mỗi REQ-{N}-nn phải có evidence
- **Nếu FAIL**:
  - Loop: VERIFY → fix → re-VERIFY (tối đa 2 vòng)
  - **Gap Closure Cap**: nếu fail lần 3 → escalate, không loop tiếp
- **Output**: `.gsd/VERIFICATION.md` với đầy đủ evidence (screenshots, logs, test output)

### **Giai Đoạn 9: REPORT**
- **Agent (State Curator)** tổng hợp:
  - Ghi SUMMARY.md: kết quả, lessons learned
  - Cập nhật `.gsd/STATUS.md`
  - Tạo metric entry vào `.gsd/METRICS.tsv`
  - **Gọi `gsd-knowledge-commit.sh`** → commit tri thức lên `gsd-knowledge/erp/`
- **Output**:
  - `.gsd/SUMMARY.md` (toàn cảnh phase)
  - `.gsd/METRICS.tsv` entry (cho retro sau)
  - Knowledge commit: `knowledge(erp): phase N registry`

### **Giai Đoạn 10: SHIP (Không Gate)**
- **Agent (Ship Skill)** tự động:
  - ✅ Check preconditions:
    - QC VERIFY = PASS
    - Regression tests green
    - `## Rollback Plan` có trong SUMMARY
  - ✅ Git commit (chỉ skill `ship` được phép, không agent nào khác)
    - Message: `type(scope): description\n\nCo-Authored-By: Claude ...`
  - ✅ Git push: `git push -u origin phase/N` (không bao giờ force, không bao giờ push main trực tiếp)
- **Nếu precondition fail**:
  - SHIP DỪNG, báo cáo
  - **Git Debt**: code chưa commit, chờ sửa
  - Không bao giờ tự lower bar để exit
- **Merge về main**:
  - Thủ công qua PR / `gsd-worktree.sh merge`
  - Kèm 4 việc máy tự làm:
    1. **qa_gate**: check VERIFICATION + Security + Performance đạt
    2. **merge**: gộp về main
    3. **DB migration**: áp schema/migration lên DB chính (nếu có)
    4. **refresh CODEMAP**: cập nhật `gsd-code-map.md`

---

## 🔒 Luật Cứng (Hard Rules)

### **1. Execution Lock — Không Code Khi Chưa Unlock**
- ❌ KHÔNG tạo kế hoạch nếu SPEC.md chưa `Status: FINALIZED`
- ❌ KHÔNG code nếu CHECK = FAIL
- ✅ Unlock tự động khi CHECK = PASS (autonomous mode)
- ✅ Hoặc unlock thủ công qua `/execute {N}` (manual mode)

### **2. Worktree Bắt Buộc (07DK)**
- ❌ KHÔNG edit code sản phẩm đang đứng trên `main`, `master`, `sit`, `prod`
- Hook `PreToolUse` chặn ngay nếu phát hiện Edit/Write code sản phẩm trên dòng chính
- ✅ Mỗi phase: 1 worktree riêng + 1 session riêng
- ✅ Merge CHỈ qua `gsd-worktree.sh merge` (có gate + migration + metrics)

### **3. TDD Gate (Test-First)**
- Các layer marked HARD trong `.gsd/TDD_POLICY.md`:
  - ✅ PHẢI viết test TRƯỚC (RED phase)
  - ✅ Code XANH (GREEN phase)
  - ✅ Refactor
  - ❌ KHÔNG test-after
  - ❌ KHÔNG skip, trừ khi có `### TDD Exception` block (phải justify)
- **Coverage floor**: từ TDD_POLICY.md, VERIFY fail nếu dưới floor

### **4. Loop Caps (Không Loop Vô Tận)**
- **Plan CHECK**: tối đa 3 consecutive FAIL → escalate to user
- **Gap Closure** (VERIFY → fix → re-VERIFY): tối đa 2 vòng
- **Debugging**: tối đa 3-strike → `/pause` và báo user
- **Build/test retry**: tối đa 2 lần trên cùng failure
- ➡️ **Luật**: mỗi loop PHẢI khai (a) stop condition, (b) max cap, (c) at-cap behavior

### **5. Requirement Traceability (REQ-{N}-nn)**
- Mỗi yêu cầu phải có ID: `REQ-1-01`, `REQ-2-03`, ...
- Mapping: `REQ → AC-n → task → test → evidence`
- ✅ **Plan-checker FAIL** nếu AC/REQ nào không có task cover
- ✅ **QC VERIFY FAIL** nếu REQ nào thiếu evidence
- ✅ **Phase-decomposer FAIL** nếu union of phases không cover toàn bộ SPEC goal

### **6. Commit Rules**
- ✅ CHỈ skill `ship` được gọi `git commit` (sau VERIFY PASS)
- ✅ Test commit đứng trước code commit (TDD)
- ✅ Atomic: 1 task = 1 commit
- ✅ Message format: `type(scope): description`
  - `type`: fix, feat, refactor, test, docs, style
  - `scope`: module/feature name
  - `description`: brief, present tense
- ❌ KHÔNG commit lên main/sit/prod trực tiếp (git hook chặn 07CC)

### **7. No Requirement Dropped (Yêu Cầu KHÔNG Bỏ Sót)**
- COULD/deferred requirements → ghi vào ROADMAP, không bỏ câm
- Yêu cầu mới đột ngột → PHẢI qua lại DISCUSS (không skip)
- Traceability matrix luôn match union of phase scopes

---

## 📁 File State (.gsd/)**

| File | Mục đích | Trạng thái |
|------|---------|-----------|
| `SPEC.md` | Yêu cầu finalized | FINALIZED (bắt buộc) |
| `ROADMAP.md` | Lộ trình phase | Append-only |
| `PLAN.md` | Chi tiết phase N | Per-phase |
| `SUMMARY.md` | Kết quả phase N | Per-phase |
| `VERIFICATION.md` | Evidence hoàn thành | Per-phase + empirical |
| `DECISIONS.md` | Quyết định thiết kế | Append-only, never delete |
| `TESTPLAN.md` | Kế hoạch test | Per-phase |
| `REQUIREMENTS.md` | Danh sách REQ-{N}-nn | Append-only |
| `STATUS.md` | Trạng thái real-time | Auto-update (hook) |
| `CODEMAP.md` | Route/entity/page → file:line | Auto-refresh per merge |
| `DOMAIN.md` | Mô hình nghiệp vụ | Link to gsd-knowledge/erp/ |
| `METRICS.tsv` | Metrics mỗi phase | Append-only (retro) |

---

## 🧠 Tri Thức Sống (gsd-knowledge/erp/)**

| File | Mục đích | Luật |
|------|---------|------|
| `LESSON-*.md` | Bài học từng category (BE, FE, PROC) | Append-only + supersede-in-place, kèm `(phase N)` |
| `DOMAIN.md` | Mô hình tính phí, flow thanh toán, data | Luôn mới, không bị roll back |
| `RULES.md` | Luật dự án (business rules) | Luôn mới, không bị roll back |
| `STATE.md` | Trạng thái nền tảng | Luôn mới |
| `LESSON-TAXONOMY.md` | Chỉ mục, 12 category hệ thống | Index, không dữ liệu |

**Commit sau REPORT**: `git commit -m "knowledge(erp): phase N registry"`

---

## ⚡ Lệnh Chạy Quy Trình

```bash
# Mở phase mới với worktree + session riêng (không auto-release)
/run-phase {N}

# Một phase trọn gói + auto-release
/run-phase-isolated {N}

# Chạy K phase liên tục, mỗi phase 1 session + worktree
/run-phase-chain next 3

# Release sau khi SHIP pass
/release

# Deploy lên môi trường (sit/prod — word-gate: promote/prod/deploy)
/deploy-release
```

---

## 🚨 Lệnh Override (Có Dấu Vết)**

| Override | Ý nghĩa | Dấu vết |
|----------|--------|--------|
| `GSD_INLINE_OK=1` | Bypass worktree, code inline trên main (nguy hiểm) | Ghi log, không bao giờ export thường trực |
| `GSD_MERGE_NO_QC=1` | Bypass QA gate (không check VERIFY) | Ghi log |
| `GSD_DB_MIGRATE_MAIN=0` | Không áp migration khi merge | Ghi log |
| `GSD_DS_OPTIONAL=1` | DeepSeek optional (không block nếu vắng) | Ghi log |
| `GSD_MAIN_COMMIT_OK=1` | Cho phép commit code lên main (per-command) | Ghi log |

**Quy tắc**: có dấu vết = người dùng chịu trách nhiệm

---

## 📊 Retro & Self-Optimization (07CI)**

**Sau ~10 phase**:
- Agent tự nhắc `/gsd-retro`
- Đọc METRICS.tsv + FIX-LIST
- Đề xuất improve: LESSON, checklist, heuristic
- **Phân quyền**:
  - **Mềm** (AVOID-hint/category-map/heuristic): retro đề xuất → user duyệt → máy apply
  - **Cứng** (gates/Loop Caps/TDD/token ceiling): retro CHỈ mô tả, không bao giờ patch
- ➡️ **Quy tắc**: mỗi patch phải khai `expect:` đo được; kỳ sau đo lại, không cải thiện → REVERT

---

## 🌍 Ngôn Ngữ Giao Tiếp (Vietnamese-First)**

### **Với màn hình (User-Facing)**
- ✅ **Tiếng Việt NGHIỆP VỤ** (không jargon tech)
- ✅ Mỗi dòng: 1 sự kiện, ngôn ngữ nghiệp vụ
- ✅ Checkpoint: hành động cần user làm, xác nhận
- ❌ KHÔNG: endpoint, FK, migration, enum, 400/409, middleware, race condition

### **Trong Artifacts** (.gsd/, code, commit)
- ✅ **Tiếng Anh**: SPEC, ROADMAP, PLAN, DECISIONS, TESTPLAN, LESSON
- ✅ Giữ nguyên terminology (Execution Lock, RED/GREEN, REQ-n)
- ✅ Code, commit messages: tiếng Anh
- ✅ UI string: giữ nguyên sản phẩm (LESSON FE)

### **Hai Lớp (Khi AC phục vụ cả 2)**
- Thân: **nghiệp vụ** (user hiểu được)
- Đuôi: `(kỹ thuật: ...)` (dev hiểu)
- Ví dụ: "Tính phí bản quyền tháng (kỹ thuật: trigger tháng + migration + enum BillingType)"

---

## 🛑 Forbidden (Cấm Tuyệt Đối)**

1. ❌ **Tạo file state mới mà không symlink** → symlink to gsd-knowledge
2. ❌ **Edit LESSON trực tiếp** → update shards (LESSON-BE-*.md, LESSON-FE-*.md, v.v)
3. ❌ **Materialize tri thức** → lưu thành file thật (.gsd/LESSON.md) → gate fail
4. ❌ **Delete entry LESSON/DOMAIN** → append-only + supersede-in-place
5. ❌ **Code trực tiếp trên main** → worktree bắt buộc
6. ❌ **Commit từ agent khác ship** → CHỈ `ship` skill `git commit`
7. ❌ **Loop vô tận** → phải declare stop condition + max cap
8. ❌ **Lower the bar to exit** → nếu fail, fix + re-run, đừng skip

---

## ✅ Checklist Trước Mỗi Phase

- [ ] SPEC.md có `Status: FINALIZED` chưa?
- [ ] PLAN.md có `## Test Plan` + TDD_POLICY exceptions (nếu có)?
- [ ] LESSON.md đã đọc chưa? (MUST read before first code line)
- [ ] DOMAIN.md match với mô hình tính toán không?
- [ ] Worktree tạo chưa? (mỗi phase 1 worktree riêng)
- [ ] Execution Lock unlock rồi chưa? (CHECK = PASS / user approve)
- [ ] Test RED trước code GREEN?
- [ ] Mỗi task 1 commit?
- [ ] VERIFICATION có evidence đầy đủ chưa? (tests, coverage, regression)
- [ ] ROLLBACK PLAN có trong SUMMARY chưa? (bắt buộc cho SHIP)
- [ ] Knowledge commit gọi `gsd-knowledge-commit.sh` chưa? (REPORT stage)

---

## 📞 Khi Nào Escalate Cho User

1. **Plan CHECK fail 3 lần liên tiếp** → Dừng, báo cho user, chờ duyệt
2. **QC VERIFY fail lần 3** (gap closure cap) → Dừng, báo toàn bộ evidence
3. **SHIP fail preconditions** (QC FAIL / no Rollback Plan) → Dừng, báo lỗi
4. **Requirement mới đột ngột** → Quay lại DISCUSS, không skip
5. **DeepSeek API DOWN** → Nếu `GSD_DS_OPTIONAL=0` → BLOCKED, báo user

---

## 🎓 Ví Dụ: Phase Hoàn Chỉnh

```
User: "/run-phase 2 — Thêm tính năng tính phí hàng tháng cho gói GWS Standard"
        ↓
[Phase 2 Loop]

1️⃣ DISCUSS: Agent hỏi rõ → Tính toán, thời điểm, exception → SPEC finalized

2️⃣ RESEARCH: Đọc LESSON FE #3 (form + drawer), DOMAIN (billing model), CODE map

3️⃣ PLAN: Phân tách → 
         - Task 1: schema migration + entity
         - Task 2: BE logic (discount + tax)
         - Task 3: FE form + drawer
         - Test plan (unit + integration + E2E)

4️⃣ CHECK: Plan-checker review → PASS ✓ (Execution Unlock)

5️⃣ EXECUTE (worktree phase/2):
   - Task 1: Test RED → migration → entity → Test GREEN → commit
   - Task 2: Test RED → billing logic → Test GREEN → commit
   - Task 3: Test RED → form component → Test GREEN → commit
   - Code review tự động (lint, security)

6️⃣ UI REVIEW: form = Drawer? DESIGN_FRAMEWORK match?

7️⃣ CODE REVIEW: bugs? performance? security?

8️⃣ QC VERIFY: tests green ✓ / coverage ✓ / regression ✓ / security scan ✓ / no REQ dropped ✓

9️⃣ REPORT: SUMMARY.md + ghi METRICS + knowledge-commit

🔟 SHIP: git commit + git push phase/2 → (thủ công merge PR + merge về main)
        ↓ (merge hook: qa_gate ✓ → db migration ✓ → METRICS ✓ → CODEMAP refresh ✓)
        
Done ✅
```

---

## 📚 File Tham Chiếu Chính

- `gsd-framework/CLAUDE.md` — Entry point
- `gsd-framework/PROJECT_RULES.md` — Canonical rules (đọc khoả lạng)
- `gsd-framework/.gsd/PIPELINE.md` — Pipeline contracts
- `gsd-framework/INSTALL.md` — Setup guide
- `gsd-framework/docs/` — Diagram + deep dive
- `gsd-knowledge/erp/LESSON-TAXONOMY.md` — Chỉ mục bài học
- `.gsd/DOMAIN.md` — Mô hình dự án ERP

**Khi không chắc → đọc PROJECT_RULES.md (CHÍNH XÁC)**
