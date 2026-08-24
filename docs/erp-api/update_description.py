"""
Update description cho toàn bộ 109 tasks via PUT API.
Đọc update_description_plan.json → PUT từng task.
"""
import json, sys, time, requests
from datetime import datetime

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

API_BASE = "https://erp.cloudaz.io/api/v1/projects/9/wbs"
TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImVtYWlsIjoiY29uZy5wdEBjbG91ZGF6LmNjIiwiZXhwIjoxNzg3Mzg0MjY4LCJpYXQiOjE3ODcyOTc4NjgsInBlcm1zIjoiQkFCQUFBQ0FBQUFBQUFBQUFnRGNBd0FBQUFBQUFBQTRoQUFBQUFBQUF3Iiwicm9sZSI6NSwic3ViIjo4NH0.aAm5LE2KeM-oyaLbQXNGgZBpeis2-wMVg4yZVrohfEka7owwKR0_dg_iFKFL1u3Pn8sFk6KA44STc8SPdNWJ8rTpSrjLH8Z_YoNutBdYce61ad5TtLuaTN4nmRTL5G4ozd-4CoMDOQ_9Oak3yDZkUaVZBLmIEEzMLjZzXxQsaTFhOlrp7cGdnSlAeivrI4b_SKzHTmkqOte8yIFjMmJxvgvgwl5oM5Q8kozb3nNYZHD-5GVMcCK8mWyy-tLC278dhvPp9MtFiLGgViGMNWt9Sz8vyNputkBxm2BakqOUZctHSyOpV2MU-5EjHmWboqZDJsZkA9h-sgDHhsiFEEL0oQ"
HEADERS = {"Authorization": TOKEN, "Content-Type": "application/json"}
MAX_RETRIES = 3
DELAY = 0.2

plan_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\update_description_plan.json"
with open(plan_path, "r", encoding="utf-8") as f:
    update_plan = json.load(f)

print("🚀 UPDATE DESCRIPTION — 109 tasks\n")

stats = {"updated": 0, "errors": 0}
start = datetime.now()

for entry in update_plan:
    nid = entry["node_id"]
    sid = entry["story_id"]
    desc = entry["description"]

    url = f"{API_BASE}/{nid}"
    body = {"description": desc}

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.put(url, headers=HEADERS, json=body, timeout=15)
            if resp.status_code == 200:
                print(f"✅ {sid} (node={nid}): {desc[:60]}...")
                stats["updated"] += 1
                time.sleep(DELAY)
                break
            else:
                print(f"❌ {sid} (node={nid}): HTTP {resp.status_code}: {resp.text}")
                if attempt < MAX_RETRIES:
                    time.sleep(1)
        except Exception as e:
            print(f"❌ {sid} (node={nid}): {e}")
            if attempt < MAX_RETRIES:
                time.sleep(1)
    else:
        stats["errors"] += 1

elapsed = (datetime.now() - start).total_seconds()
print(f"\n{'='*50}")
print(f"📊 KẾT QUẢ UPDATE DESCRIPTION")
print(f"{'='*50}")
print(f"  Updated: {stats['updated']}/109")
print(f"  Errors:  {stats['errors']}")
print(f"  Thời gian: {elapsed:.1f}s")
print(f"{'='*50}")
