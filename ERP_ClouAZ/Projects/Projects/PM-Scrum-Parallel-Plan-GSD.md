# Kế hoạch chạy song song nhiều agent — Backlog Scrum module PM

**Ngày lập:** 05/08/2026 · **Phạm vi:** 59 US trạng thái CHƯA CÓ và MỘT PHẦN · **Chuẩn:** GSD (PROJECT_RULES.md, pipeline.json)

---

## 1. Ràng buộc GSD phải tuân thủ

Trích nguyên văn từ `PROJECT_RULES.md`, đây là các luật quyết định hình dạng kế hoạch:

| Luật | Nội dung | Neo |
|---|---|---|
| **Trần song song** | `gsd-auto.sh run N1 N2 … --parallel M` với **M = 2-3**; trần cứng một máy = **4** (runner tự hạ + cảnh báo) | `:311`, `:496` |
| **Làn module** | "khác module → được song song, **cùng module → tuần tự trong làn**, đụng pkg/lib/shared → chạy MỘT MÌNH như migration" | `:493-495` |
| **Migration** | "phase có migration/schema **KHÔNG vào batch song song** (dev DB + contracts dùng chung) — để chain/one serial" | `:317-318`, `:336` |
| **File tri thức** | `GSD_PAR=1` ⇒ ROADMAP/STATE/LESSON/DECISIONS/JOURNAL/domain/rules **READ-ONLY**; ghi vào `phases/N/REGISTRY-DELTA.md`, promote tuần tự sau merge | `:312-317` |
| **Merge** | Serialize qua `.git/gsd-merge.lock`; "**conflict KHÔNG BAO GIỜ auto-resolve**"; merge-lock là cửa duy nhất chạm base | `:316`, `:506-509` |
| **Cách ly** | Mỗi xưởng một worktree + cặp port riêng (BE 8200+N%100, FE 5300+N%100) + DB clone riêng | `:319-336`, `:490-493` |
| **Kích thước phase** | Split khi > 12 task, > 20 file, > 3 wave, > 15 AC. Mục tiêu nguyên tử: ≤ 10 file, ≤ 2 wave, ≤ 10 AC | `:117-127` |
| **Profile mặc định** | `GSD_PROFILE=token` — **task fan-out 07BK đang TẮT**. Muốn fan-out trong phase phải đặt `GSD_PROFILE=speed` | `:348-353` |
| **Limit-aware** | "phase dính limit được GIỮ LẠI + **cả pool NGỪNG phát việc mới**" | `:410-417` |

> **GSD chỉ ép file-ownership disjoint ở tầng task trong một PLAN** (checker Dim 4). Giữa hai phase chạy song song **không có cổng nào chặn cùng file** — chỉ phát hiện khi merge conflict. Việc chia làn dưới đây là phần bạn phải tự làm, GSD không làm hộ.

---

## 2. Vấn đề gốc: toàn bộ 59 US đều thuộc module `pm`

Luật S3 nói "cùng module → tuần tự trong làn". Áp nguyên văn thì kế hoạch này **không song song được dòng nào**.

Nhưng tinh thần của luật S3 là **tránh va chạm file**, và module PM đủ lớn để tách thành các vùng file rời nhau. Vì vậy kế hoạch này thay "làn module" bằng **làn theo quyền sở hữu file**, giữ nguyên nguyên tắc: cùng làn tuần tự, khác làn song song.

### Tám file nóng — nơi các làn dễ đụng nhau nhất

| # | File | US muốn chạm | Cách xử lý |
|---|---|---|---|
| 1 | `presentation/router_pm.go` | Gần như mọi US thêm route | Không thể tránh. Quy ước: mỗi phase chỉ thêm block route của mình ở **cuối** nhóm tương ứng, không chèn giữa. Conflict còn lại là dạng dễ giải nhất |
| 2 | `service/wbs_service_impl.go` (~1600 dòng) | G03 toàn bộ, G07-01/02/03, G09-02 | Gom hết vào **làn D**, tuần tự |
| 3 | `application/service/notification_service.go` | G01-01, G01-02, G01-06, G09-04 | Gom vào **làn E**, tuần tự |
| 4 | `application/service/timesheet_service.go` | G01-02, G09-02 | G09-02 xếp vào **làn E** dù thuộc nhóm G09 |
| 5 | `entity/wbs.go` | G03-01, G07-01, G09-01 | Ba US này không được cùng đợt |
| 6 | `repo/project_repository_impl.go` (khối seed) | G00-02, G00-04, G02-01 | Gom vào **làn A**, tuần tự |
| 7 | `components/scrum/**` | G06 toàn bộ | Gom vào **làn H**, tuần tự |
| 8 | Thư mục migrations | 17 US có schema | Dải số đặt trước, xem §5 |

---

## 3. Tám làn theo quyền sở hữu file

| Làn | Tên | Vùng file sở hữu | US | Giờ |
|---|---|---|---|---:|
| **A** | Nền tảng dự án | `entity/project.go`, `repo/project_repository_impl.go`, `service/project_service_impl.go`, `handler/project_handler.go` | G00-02, G00-04, G00-07, G00-08, G02-01, G02-03, G02-04 | 34–47 |
| **B** | Lưới an toàn & kiểm thử | `backend/tests/**`, `**/*_test.go` | G00-01, G11-04 | 14–20 |
| **C** | Giao diện khung & danh mục | `projectTabs.ts`, `ProjectHeader.svelte`, `[id]/+page.svelte`, màn hình danh sách dự án | G00-05, G00-03, G00-06 | 14–18 |
| **D** | Sprint core (đường găng) | `service/sprint_service.go`, `service/wbs_service_impl.go`, `repo/wbs_repository_sprint_items.go`, `repo/sprint_repository_impl.go` | G01-03, G01-04, G01-05, G02-02, G03-01, G03-02, G03-03, G03-04, G07-05, G10-03 | 116–153 |
| **E** | Thông báo & tác vụ nền | `application/service/notification_service.go`, `job_registry.go`, `timesheet_service.go`, `snapshot_service_impl.go` | G01-01, G01-02, G01-06, G07-06, G09-01, G09-02, G09-04 | 45–58 |
| **F** | Nghi thức Scrum (greenfield) | Bảng mới `retrospectives*`, `sprint_reviews*` + `modules/project/{entity,repo,service,handler}/retro*`, `review*` + FE route mới | G04-02, G04-04, G04-05, G05-01…G05-07 | 67–90 |
| **G** | Backlog & DoD | `wbs_dod_service.go`, `wbs_repository_backlog.go`, cột refinement, `release_service_impl.go` | G07-01, G07-02, G07-03, G07-04, G10-01, G10-02, G10-04 | 51–62 |
| **H** | Giao diện Scrum & biểu đồ | `components/scrum/**`, `scrum-board/+page.svelte`, `components/reports/**` | G06-01…G06-04, G08-01, G08-02, G08-03 | 65–84 |
| **I** | Chuẩn hệ thống | `pkg/apperror/**` (BE), toàn bộ chuỗi FE, cấu hình timezone | G11-01, G11-02, G11-03, G09-03 | 60–74 |

**Hai US phải nằm ở làn khác nhóm gốc của chúng:**

- **G04-01** (trạng thái IN_REVIEW) đụng `sprint_service.go` state machine ⇒ thuộc **làn D**, không thuộc F.
- **G04-03** (Reject dội về Backlog) đụng `ReturnNodesToBacklog` trong `wbs_service_impl.go` ⇒ thuộc **làn D**.
- **G09-02** (kế thừa R&D) đụng `timesheet_service.go` ⇒ thuộc **làn E**, không thuộc nhóm G09 gốc.

---

## 4. Bốn khe độc quyền — chạy MỘT MÌNH, không song song với gì

Theo luật `:494` "đụng pkg/lib/shared → chạy MỘT MÌNH như migration":

| US | Lý do | Giờ |
|---|---|---:|
| **G00-04** Seed cấu hình theo khung | Sửa khối seed trong transaction tạo dự án — mọi làn khác đều dựa vào dự án tạo được | 12–16 |
| **G03-01** Story vào Sprint | Sửa 7 điểm code + migration + guard test + hồi quy lan sang báo cáo, Velocity, Release | 24–32 |
| **G11-01** Mã lỗi backend | Đụng `pkg/apperror` dùng chung toàn hệ thống | 16–24 |
| **G11-02** Đa ngôn ngữ | Đụng hàng trăm file FE — cấm song song với làn C và H; **được phép** song song với các làn backend thuần | 24–32 |

Tổng khe độc quyền: **76–104 giờ** không rút ngắn được bằng song song.

---

## 5. Dải số migration đặt trước

17 US có schema. Theo tiền lệ `phases/377/CONTEXT-SEED.md` — đặt số trước, **không quét max+1** — vì hai session song song cùng quét sẽ cùng chọn một số, rebase merge sạch mà vẫn để lại hai migration trùng số, không cổng nào bắt (đã dính ở phase 367).

Giả sử số cao nhất hiện tại là `000262`, chia dải cho từng làn:

| Làn | Dải số | Quy ước tên |
|---|---|---|
| A | `000270–000279` | `<số>_<phase>_<mô tả>.up.sql` |
| D | `000280–000299` | như trên |
| E | `000300–000309` | như trên |
| F | `000310–000329` | như trên |
| G | `000330–000339` | như trên |
| H | `000340–000349` | như trên |
| I | `000350–000359` | như trên |

Khoảng trống giữa các dải là **vô hại**: `backend/cmd/migrate/main.go:53` chỉ `sort.Strings` rồi áp theo thứ tự, không đòi số liên tục.

Kiểm tra bắt buộc trước khi ghi file, trong mọi phase có migration:

```bash
ls backend/internal/infrastructure/db/migrations/*.up.sql \
  | sed -E 's|.*/([0-9]{6})_.*|\1|' | sort | uniq -d
```

**Cấm đổi tên migration cũ** — `gsd_migrations.version` lưu toàn bộ tên file; đổi tên file đã chạy khiến nó thành "chưa chạy" và chạy lại trên dev/sit/prod.

---

## 6. Hàng đợi thực thi

Không xếp đợt cứng. Chạy `gsd-auto.sh run --parallel 3` và để runner tự phát theo cột `Depends` của ROADMAP. Bảng dưới là thứ tự trong từng làn — runner lấy US kế tiếp của làn nào rảnh.

### Giai đoạn 1 — Nền móng khung quản trị

Ba làn mở đồng thời:

```
Làn B: G00-01 (test characterization)          8–12h   ← không phụ thuộc gì, mở ngay
Làn A: G00-02 → G00-07 → G00-08                10–14h  ← 1 migration
Làn I: G11-03 (timezone) → G09-03 (API HRM)    20–26h  ← độc lập hoàn toàn
```

Sau khi G00-02 xong, làn C mở được: `G00-03 → G00-06 → G00-05` (14–18h).

### Giai đoạn 2 — Khe độc quyền đầu tiên

```
G00-04 chạy MỘT MÌNH                           12–16h
```
Trong lúc này chỉ làn I và B tiếp tục (không đụng seed).

### Giai đoạn 3 — Ba làn chạy hết công suất

```
Làn D: G02-02 → G03-01(solo) → G03-02 → G03-03 → G03-04 → G04-01 → G04-03 → G07-05 → G01-03 → G01-04 → G01-05 → G10-03
Làn E: G01-01 → G01-02 → G07-06 → G01-06 → G09-01 → G09-02 → G09-04
Làn F: G05-01 → G05-02 → G05-03 → G05-04 → G05-05 → G05-06 → G05-07 → G04-02 → G04-04 → G04-05
Làn G: G07-04 → G07-01 → G07-02 → G07-03 → G10-01 → G10-02 → G10-04
Làn A: G02-01 → G02-03 → G02-04
```

**Làn F là làn dài nhất không nằm trên đường găng** — greenfield hoàn toàn, agent chạy nhanh, ít vòng sửa. Đây là làn nên khởi động sớm nhất sau khi G02-01 xong.

### Giai đoạn 4 — Giao diện, phụ thuộc D

```
Làn H: G06-04 → G06-01 → G06-02 → G06-03 → G08-01 → G08-02 → G08-03
```
G06-04 (WIP limit) không phụ thuộc G03 nên mở được sớm; G06-01 trở đi chờ G03-02.

### Giai đoạn 5 — Khe độc quyền cuối

```
G11-01 (mã lỗi backend)   16–24h   ← song song được với làn H nếu H đang làm việc FE thuần
G11-02 (đa ngôn ngữ)      24–32h   ← song song được với làn D, E (backend thuần)
```

---

## 7. Đường găng và thời gian dự kiến

**Đường găng:** `G00-02 → G00-04 → G02-02 → G03-01 → G03-02 → G06-01 → G06-02`

| Mắt xích | Giờ |
|---|---:|
| G00-02 | 4–6 |
| G00-04 | 12–16 |
| G02-02 | 6–8 |
| G03-01 | 24–32 |
| G03-02 | 12–16 |
| G06-01 | 12–16 |
| G06-02 | 14–18 |
| **Tổng đường găng** | **84–112** |

### So sánh phương án

| Phương án | Công thức | Giờ | Ngày làm việc | Tuần |
|---|---|---:|---:|---:|
| 1 luồng tuần tự | 439–575 | 439–575 | 73–96 | 15–19 |
| **3 luồng (khuyến nghị)** | 76–104 solo + (363–471)/3 | **197–261** | **33–44** | **7–9** |
| 4 luồng (trần máy) | 76–104 solo + (363–471)/4 | 167–222 | 28–37 | 6–7 |

**Khuyến nghị M = 3**, không phải 4. Lý do từ chính đo đạc của GSD (`PROJECT_RULES.md:462-474`, mục 07BN): fan-out mạnh làm LIMIT-WAIT lên tới **79–309 phút mỗi ngày**, và một hôm xưởng ngủ ~5 giờ vì húc trần hạn mức — *"nhanh trên sổ nhưng chậm trên đồng hồ tường"*. Thêm nữa, `:410` quy định phase dính limit thì **cả pool ngừng phát việc mới**, nên luồng thứ tư làm tăng xác suất chặn toàn bộ chứ không chỉ chính nó.

Kết luận: **rút ngắn khoảng 2,2 lần** so với chạy một luồng.

---

## 8. Quy tắc vận hành bắt buộc khi chạy nhiều agent

**1. Bật cờ song song.** Mọi session con chạy với `GSD_PAR=1`. Hệ quả: toàn bộ file tri thức (`ROADMAP`, `STATE`, `LESSON*`, `DECISIONS`, `JOURNAL`, `domain`, `rules`) là **chỉ đọc**. Đây không phải khuyến nghị — chúng là symlink trỏ về `gsd-knowledge/<project>/` nên **worktree không cách ly chúng**, mọi worktree nhìn cùng một inode. Ghi đồng thời là race, đã có bài học ở phase 339.

**2. Mọi cập nhật registry đi qua REGISTRY-DELTA.** Mỗi phase ghi `phases/N/REGISTRY-DELTA.md` với các khối copy-paste sẵn cho từng registry, kèm mục `## Promotion order (serial, after merge)`. Runner promote tuần tự sau merge qua `scripts/gsd-registry-promote.sh` (có lock).

**3. Khai báo PARALLEL MODE trong CONTEXT.md của mỗi phase.** Theo mẫu `phases/418/CONTEXT.md:16-22`: liệt kê các session đang chạy đồng thời, xác nhận file tri thức chỉ đọc, và **khai báo kiểm tra số migration** — nêu rõ các phase anh em có migration hay không và số trống tiếp theo.

**4. Không con nào flip TESTPLAN.** Conductor flip tuần tự tại barrier cuối wave; wave-gate chạy một lần sau khi mọi nhóm về (`:457-459`).

**5. Dữ liệu test mang dấu riêng.** Mỗi session chỉ tạo dữ liệu có tiền tố `gsd<N>_` và email `gsd<N>+…@test.local`, ghi sổ qua `gsd-data.sh track`. Trên DB chung: **cấm tuyệt đối** TRUNCATE, reseed toàn cục, DELETE/UPDATE không WHERE. Test đo toàn cục phải chạy tuần tự, không vào batch.

**6. Không chạy chain và batch cùng lúc** — có GUARD PID chặn (`:318`).

---

## 9. Ba rủi ro cần xử lý trước khi bấm nút

### 9.1 Bộ công cụ GSD không có trên đĩa

`scripts/gsd-auto.sh`, `scripts/gsd-worktree.sh`, `.claude/commands/*`, `.claude/skills/*` và 12 agent role đều bị gitignore (`.gitignore:114-162`). File duy nhất còn lại là `.claude/agents/gsd-phase-runner.md`, và bản thân nó **stale** — mâu thuẫn PROJECT_RULES ở ba điểm (nói không được commit, không được merge, ba gate) trong khi luật hiện hành là hai gate và ship tự commit.

**Phải chạy `install.sh` khôi phục toolchain trước**, nếu không thì không có runner để phát batch.

### 9.2 Luật "migration không vào batch song song" chặn phần lớn kế hoạch

17 trên 59 US có schema. Áp nguyên văn `:317-318` thì chúng phải chạy tuần tự một mình, đẩy thời gian gần về mức một luồng.

Lý do gốc của luật là "dev DB + contracts dùng chung". Nhưng cơ chế **DATA-ISOLATION tầng 1** (`:319-336`) đã cho mỗi xưởng một DB clone riêng, nên xung đột dev DB không còn. Rủi ro còn lại duy nhất là trùng số migration — và §5 ở trên đã xử lý bằng dải số đặt trước.

**Đề xuất:** ghi một DECISION nới luật này có điều kiện — cho phép migration vào batch song song khi thỏa đủ hai điều kiện: (a) DB clone tầng 1 đang bật, và (b) số migration lấy từ dải đã đặt trước chứ không quét max+1. Đây là thay đổi luật khung nên theo `CLAUDE.md:52` phải làm **giữa hai phase, không bao giờ trong một phase**.

Nếu không nới, kế hoạch này rút xuống còn khoảng **11–14 tuần** thay vì 7–9.

### 9.3 Profile mặc định đang tắt fan-out

`GSD_PROFILE` mặc định là `token`, và profile này **tắt task fan-out 07BK** cùng nhiều cơ chế tốc độ khác. Kế hoạch trên chỉ dùng song song ở **tầng phase** (batch runner), không phụ thuộc fan-out trong phase, nên vẫn chạy được với profile mặc định.

Nếu muốn thêm fan-out trong từng phase thì đặt `GSD_PROFILE=speed`, nhưng cân nhắc: chính GSD đã đo và kết luận rằng đổi lại là nguy cơ húc trần hạn mức.

---

## 10. Tóm tắt hành động

1. Khôi phục toolchain GSD (`install.sh`) — không có runner thì không có batch
2. Ghi DECISION về việc nới luật migration song song (§9.2) — làm giữa hai phase
3. Đặt dải số migration cho từng làn vào ROADMAP (§5)
4. Thêm cột `Làn` vào ROADMAP bên cạnh cột `Depends` để runner lọc được
5. Chạy `gsd-auto.sh run --parallel 3`, bắt đầu bằng ba làn B, A, I
6. Bốn khe độc quyền G00-04, G03-01, G11-01, G11-02 đặt lịch riêng, không nằm trong batch
