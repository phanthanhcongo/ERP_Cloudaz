"""
Import Definition of Done (DoD) cho toàn bộ 113 tasks.
Đọc import_dod_plan.json + import_result.json → POST từng AC item lên ERP.

Usage:
  python import_dod.py              # Dry-run
  python import_dod.py --execute    # Thực thi
"""
import json, sys, time, requests
from datetime import datetime

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

API_BASE = "https://erp.cloudaz.io/api/v1/projects/9/wbs"
TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImVtYWlsIjoiY29uZy5wdEBjbG91ZGF6LmNjIiwiZXhwIjoxNzg3NjYwODQ5LCJpYXQiOjE3ODc1NzQ0NDksInBlcm1zIjoiQkFCQUFBQ0FBQUFBQUFBQUFnRGNBd0FBQUFBQUFBQTRoQUFBQUFBQUF3Iiwicm9sZSI6NSwic3ViIjo4NH0.S70Bg9E5R0pFvyEQYY8CGvdB6A9YT4PLgEiyGOIudZKZh4Dx4ChjTATKByPOSu98gLe-dOnXb0uSRGDSsPp9G8aTzT1L3w6VlKwQElZURI8rxdFdqAEKHzo9Nf2zAujBSnwWP-vyA8JVXblVSanoslO0o9KIozUit2PeeK9LnJgYh9b-5pNPiYiT1TeMFEWwkE4fWKu2XS6XVbI4707S09ayOuSTvspEF2TSVnsDBcQrUUlqRDCOpay7wFkFOQaM8LkFb_YFy00ZlHhppOlVaKTJZdrPIclQvjEWNMeYvJDGPRwDx8RSXPVZgIjL4c7Ff7czS3ozJhWMIDmBZ3JJsQ"
HEADERS = {"Authorization": TOKEN, "Content-Type": "application/json"}
MAX_RETRIES = 3
DELAY = 0.2

DRY_RUN = "--execute" not in sys.argv

dod_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_dod_plan.json"
result_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_result.json"

with open(dod_path, "r", encoding="utf-8") as f:
    dod_plan = json.load(f)

# Load node_id mapping from import_result.json if available
id_map = {}
try:
    with open(result_path, "r", encoding="utf-8") as f:
        res_data = json.load(f)
        for t in res_data.get("tasks", []):
            title = t.get("title", "")
            if ":" in title:
                code = title.split(":")[0].strip()
                id_map[code] = t.get("id")
except Exception:
    pass

if DRY_RUN:
    print("🔍 DRY-RUN MODE — Chỉ in ra, KHÔNG gọi API\n")
else:
    print("🚀 EXECUTE MODE — Đang đẩy DoD items lên ERP!\n")

stats = {"stories": 0, "items": 0, "errors": 0}
start = datetime.now()

for entry in dod_plan:
    sid = entry["story_id"]
    nid = entry.get("node_id") or id_map.get(sid)
    items = entry["dod_items"]
    
    print(f"📋 {sid} (node={nid}) — {len(items)} items")
    stats["stories"] += 1

    for i, item in enumerate(items, 1):
        if DRY_RUN or not nid:
            print(f"  [DRY] {i}/{len(items)}: {item['text'][:70]}")
            stats["items"] += 1
            continue

        url = f"{API_BASE}/{nid}/definition-of-done"
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = requests.post(url, headers=HEADERS, json={"text": item["text"]}, timeout=15)
                if resp.status_code == 201:
                    print(f"  ✅ {i}/{len(items)}: {item['text'][:70]}")
                    stats["items"] += 1
                    time.sleep(DELAY)
                    break
                else:
                    print(f"  ❌ {i}: HTTP {resp.status_code}: {resp.text}")
                    if attempt < MAX_RETRIES:
                        time.sleep(1)
            except Exception as e:
                print(f"  ❌ {i}: {e}")
                if attempt < MAX_RETRIES:
                    time.sleep(1)
        else:
            stats["errors"] += 1

elapsed = (datetime.now() - start).total_seconds()
print(f"\n{'='*50}")
print(f"📊 KẾT QUẢ IMPORT DOD")
print(f"{'='*50}")
print(f"  Stories:   {stats['stories']}/{len(dod_plan)}")
print(f"  DoD items: {stats['items']}")
print(f"  Errors:    {stats['errors']}")
print(f"  Thời gian: {elapsed:.1f}s")
print(f"{'='*50}")
