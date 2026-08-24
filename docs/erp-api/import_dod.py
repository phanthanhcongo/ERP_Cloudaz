"""
Import Definition of Done (DoD) cho toàn bộ 109 tasks.
Đọc import_dod_plan.json → POST từng AC item lên ERP.

Usage:
  python import_dod.py              # Dry-run
  python import_dod.py --execute    # Thực thi
"""
import json, sys, time, requests
from datetime import datetime

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

API_BASE = "https://erp.cloudaz.io/api/v1/projects/9/wbs"
TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImVtYWlsIjoiY29uZy5wdEBjbG91ZGF6LmNjIiwiZXhwIjoxNzg3MzgzNjY4LCJpYXQiOjE3ODcyOTcyNjgsInBlcm1zIjoiQkFCQUFBQ0FBQUFBQUFBQUFnRGNBd0FBQUFBQUFBQTRoQUFBQUFBQUF3Iiwicm9sZSI6NSwic3ViIjo4NH0.iO8DNvkBKnQVAl-mtMaztju-9ogPQm_H1f9YxsGRZdwfyXAWBfT7AF-fysxgtAMtgA1qsp_O1vxV6es6CNDWOnMhO_pd7klY6ncbsuj-l9IYE8k4MEYNw0I2Z2jtP4kePzj87pKusFMPOLjBXRI-KrUnyWTDKC6nUse50jP4-89WWwgE2WRRelGaxucBRp38hwv8sCzGRg5EZ9JYty2dTrNopFrrlQxENxSiZ2pzps6QXoPlxxNSEl10Lax6nkVhd8ElDDi_LbgellHMDhJSutNt3wU2LAQwcjIh4DPNXCVBLEDmSCvGPUbN7hvGWGa0E0Jyfuy-gy-8DG0warn7vg"
HEADERS = {"Authorization": TOKEN, "Content-Type": "application/json"}
MAX_RETRIES = 3
DELAY = 0.2

DRY_RUN = "--execute" not in sys.argv

dod_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_dod_plan.json"
with open(dod_path, "r", encoding="utf-8") as f:
    dod_plan = json.load(f)

if DRY_RUN:
    print("🔍 DRY-RUN MODE\n")
else:
    print("🚀 EXECUTE MODE\n")

stats = {"stories": 0, "items": 0, "errors": 0}
start = datetime.now()

for entry in dod_plan:
    nid = entry["node_id"]
    sid = entry["story_id"]
    items = entry["dod_items"]
    print(f"📋 {sid} (node={nid}) — {len(items)} items")
    stats["stories"] += 1

    for i, item in enumerate(items, 1):
        if DRY_RUN:
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
print(f"  Stories:   {stats['stories']}/109")
print(f"  DoD items: {stats['items']}/355")
print(f"  Errors:    {stats['errors']}")
print(f"  Thời gian: {elapsed:.1f}s")
print(f"{'='*50}")
