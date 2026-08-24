"""
Import Product Backlog vào ERP CloudAZ qua API.
Logic: Depth-first — hoàn tất toàn bộ User Story của Feature N
       trước khi tạo Feature N+1.

Usage:
  python import_backlog.py              # Dry-run (chỉ in, không gọi API)
  python import_backlog.py --execute    # Thực thi gọi API
"""
import json, sys, time, requests
from datetime import datetime

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# === CONFIG ===
API_URL = "https://erp.cloudaz.io/api/v1/projects/9/wbs"
TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImVtYWlsIjoiY29uZy5wdEBjbG91ZGF6LmNjIiwiZXhwIjoxNzg3MzcyMDQ4LCJpYXQiOjE3ODcyODU2NDgsInBlcm1zIjoiQkFCQUFBQ0FBQUFBQUFBQUFnRGNBd0FBQUFBQUFBQTRoQUFBQUFBQUF3Iiwicm9sZSI6NSwic3ViIjo4NH0.imQog87cr-PUTmJJGGQkEmyhg0E4Z6e9T-OGQYEi5KEeAEZmujzgHHg1HYXM0L4MwEssOw3va5kVhdpS2bfqoVo4as5L_S483VSWW_mU8fppjv3FJHhJbvy2o6Yce3WAmwjGmUFhuTVEAT6QuKX5GN6If5vmIAZbocSr6KRUL4hae_Sl9EtexLXMwYqDr7vYH3XNmy07uH6aj2vgAqwlBo0tceV7wd_7wIgyix72gYekBHUBRcEERpV9aJenUVlfjvgK8iVd38hw8PdM_p_lP7HrX9E_Q1t81IOM_Ef2kGuEjGDPd3CdBvDAu-9vsSKJDimn1rqMYjh964l5KfSVeg"
HEADERS = {
    "Authorization": TOKEN,
    "Content-Type": "application/json"
}
MAX_RETRIES = 3
DELAY_BETWEEN_REQUESTS = 0.3  # seconds

# === LOAD IMPORT PLAN ===
plan_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_backlog_plan.json"
log_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_result.json"

with open(plan_path, "r", encoding="utf-8") as f:
    plan = json.load(f)

# === MODE ===
DRY_RUN = "--execute" not in sys.argv
if DRY_RUN:
    print("=" * 60)
    print("🔍 DRY-RUN MODE — Chỉ in ra, KHÔNG gọi API")
    print("   Thêm --execute để chạy thật")
    print("=" * 60)
else:
    print("=" * 60)
    print("🚀 EXECUTE MODE — Đang gọi API thật!")
    print("=" * 60)

# === STATS ===
stats = {"epic": 0, "feature": 0, "story": 0, "errors": 0}
results = []  # log mọi task đã tạo

def create_task(payload, label, indent=0):
    """Gọi API tạo 1 task. Retry tối đa 3 lần."""
    prefix = "  " * indent
    # Loại bỏ field internal
    body = {k: v for k, v in payload.items() if not k.startswith("_")}

    if DRY_RUN:
        print(f"{prefix}📋 [DRY] {label}: {body['title']}")
        # Giả lập path cho dry-run
        fake_path = body.get("parent_path", "000002") + ".000001"
        return {"id": 0, "path": fake_path, "title": body["title"]}

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.post(API_URL, headers=HEADERS, json=body, timeout=15)
            if resp.status_code == 201:
                data = resp.json()["data"]
                print(f"{prefix}✅ {label}: {body['title']} → id={data['id']}, path={data['path']}")
                time.sleep(DELAY_BETWEEN_REQUESTS)
                return data
            else:
                print(f"{prefix}❌ {label}: {body['title']} → HTTP {resp.status_code}: {resp.text}")
                if attempt < MAX_RETRIES:
                    print(f"{prefix}   🔄 Retry {attempt}/{MAX_RETRIES}...")
                    time.sleep(1)
        except Exception as e:
            print(f"{prefix}❌ {label}: {body['title']} → Error: {e}")
            if attempt < MAX_RETRIES:
                print(f"{prefix}   🔄 Retry {attempt}/{MAX_RETRIES}...")
                time.sleep(1)

    stats["errors"] += 1
    print(f"{prefix}💀 FAILED after {MAX_RETRIES} retries: {body['title']}")
    return None

# === LIMIT & START ===
START = 0   # skip N epic đầu (0-indexed)
LIMIT = 12  # mặc định chạy hết
for arg in sys.argv:
    if arg.startswith("--limit="):
        LIMIT = int(arg.split("=")[1])
    if arg.startswith("--start="):
        START = int(arg.split("=")[1])
epics_to_run = plan[START:START + LIMIT]

# === MAIN IMPORT LOOP (depth-first) ===
total_epics = len(epics_to_run)
print(f"\n📦 Bắt đầu import {total_epics}/{len(plan)} Epics...\n")
start_time = datetime.now()

for i, epic_entry in enumerate(epics_to_run, 1):
    epic_payload = epic_entry["epic"]
    print(f"\n{'='*60}")
    print(f"📦 EPIC {i}/12: {epic_payload['title']}")
    print(f"{'='*60}")

    # 1. Tạo Epic
    epic_result = create_task(epic_payload, "EPIC", indent=0)
    if epic_result is None:
        print(f"⛔ Skip toàn bộ Epic {i} do lỗi tạo Epic")
        continue
    stats["epic"] += 1
    results.append({"type": "epic", "id": epic_result["id"], "path": epic_result["path"], "title": epic_result["title"]})

    epic_path = epic_result["path"]

    # 2. Với mỗi Feature (tuần tự)
    for j, feat_entry in enumerate(epic_entry["features"], 1):
        feat_payload = feat_entry["feature"].copy()
        feat_payload["parent_path"] = epic_path  # Fill parent = epic

        print(f"\n  📂 FEATURE {j}/{len(epic_entry['features'])}: {feat_payload['title']}")

        feat_result = create_task(feat_payload, "FEATURE", indent=1)
        if feat_result is None:
            print(f"  ⛔ Skip Feature {j} và các User Story bên trong")
            continue
        stats["feature"] += 1
        results.append({"type": "feature", "id": feat_result["id"], "path": feat_result["path"], "title": feat_result["title"]})

        feature_path = feat_result["path"]

        # 3. Tạo TẤT CẢ User Story của Feature này TRƯỚC khi sang Feature kế
        for k, story_payload in enumerate(feat_entry["user_stories"], 1):
            story_body = story_payload.copy()
            story_body["parent_path"] = feature_path  # Fill parent = feature

            story_result = create_task(story_body, f"  US {k}/{len(feat_entry['user_stories'])}", indent=2)
            if story_result:
                stats["story"] += 1
                results.append({"type": "user_story", "id": story_result["id"], "path": story_result["path"], "title": story_result["title"]})

        print(f"  ✅ Feature '{feat_payload['title']}' — {len(feat_entry['user_stories'])} stories done")

    print(f"✅ Epic {i} hoàn tất!")

# === SUMMARY ===
elapsed = (datetime.now() - start_time).total_seconds()
print(f"\n{'='*60}")
print(f"📊 KẾT QUẢ IMPORT")
print(f"{'='*60}")
print(f"  Epic:       {stats['epic']}/12")
print(f"  Feature:    {stats['feature']}/33")
print(f"  User Story: {stats['story']}/109")
print(f"  Errors:     {stats['errors']}")
print(f"  Thời gian:  {elapsed:.1f}s")
print(f"{'='*60}")

# Save result log
if not DRY_RUN and results:
    with open(log_path, "w", encoding="utf-8") as f:
        json.dump({"stats": stats, "elapsed_seconds": elapsed, "tasks": results}, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Log saved: {log_path}")
