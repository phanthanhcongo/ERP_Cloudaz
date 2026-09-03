import requests
import json
import time
import sys
from datetime import datetime

if sys.version_info >= (3, 7):
    sys.stdout.reconfigure(encoding='utf-8')

# === CONFIG ===
API_URL = "https://erp.cloudaz.io/api/v1/projects/9/wbs"
TOKEN = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImVtYWlsIjoiY29uZy5wdEBjbG91ZGF6LmNjIiwiZXhwIjoxNzg3NjYwODQ5LCJpYXQiOjE3ODc1NzQ0NDksInBlcm1zIjoiQkFCQUFBQ0FBQUFBQUFBQUFnRGNBd0FBQUFBQUFBQTRoQUFBQUFBQUF3Iiwicm9sZSI6NSwic3ViIjo4NH0.S70Bg9E5R0pFvyEQYY8CGvdB6A9YT4PLgEiyGOIudZKZh4Dx4ChjTATKByPOSu98gLe-dOnXb0uSRGDSsPp9G8aTzT1L3w6VlKwQElZURI8rxdFdqAEKHzo9Nf2zAujBSnwWP-vyA8JVXblVSanoslO0o9KIozUit2PeeK9LnJgYh9b-5pNPiYiT1TeMFEWwkE4fWKu2XS6XVbI4707S09ayOuSTvspEF2TSVnsDBcQrUUlqRDCOpay7wFkFOQaM8LkFb_YFy00ZlHhppOlVaKTJZdrPIclQvjEWNMeYvJDGPRwDx8RSXPVZgIjL4c7Ff7czS3ozJhWMIDmBZ3JJsQ"
HEADERS = {
    "Authorization": TOKEN,
    "Content-Type": "application/json"
}
MAX_RETRIES = 3
DELAY_BETWEEN_REQUESTS = 0.3  # seconds

# Dry run mode check
DRY_RUN = "--execute" not in sys.argv
if DRY_RUN:
    print("⚠️ DRY RUN MODE: Chỉ in thông tin, không gọi API. Dùng '--execute' để thực thi thực sự.\n")

# Load import plan
plan_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_backlog_plan.json"
with open(plan_path, "r", encoding="utf-8") as f:
    plan = json.load(f)

print(f"📋 Loaded {len(plan)} Features từ import_backlog_plan.json")

# === HELPER ===
stats = {"feature": 0, "story": 0, "errors": 0}
results = []

def create_task(payload, label, indent=0):
    prefix = "  " * indent
    body = {
        "title": payload["title"],
        "type": "Task",
        "type_id": payload["type_id"],
        "parent_path": payload["parent_path"]
    }
    if "description" in payload and payload["description"]:
        body["description"] = payload["description"]

    if DRY_RUN:
        fake_id = 9999
        fake_path = f"{payload['parent_path']}.9999"
        print(f"{prefix}📝 [DRY-RUN] {label}: {body['title']} (type_id={body['type_id']}, parent={body['parent_path']})")
        return {"id": fake_id, "path": fake_path, "title": body["title"]}

    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.post(API_URL, headers=HEADERS, json=body, timeout=15)
            if resp.status_code == 201:
                data = resp.json()["data"]
                print(f"{prefix}✅ {label}: {body['title']} → id={data['id']}, path={data['path']} (type_id={data['type_id']})")
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

# === MAIN IMPORT LOOP ===
total_features = len(plan)
print(f"\n📦 Bắt đầu import {total_features} Features & các User Stories bên trong...\n")
start_time = datetime.now()

for i, feat_entry in enumerate(plan, 1):
    feat_payload = feat_entry["feature"].copy()
    print(f"\n{'='*60}")
    print(f"📂 FEATURE {i}/{total_features}: {feat_payload['title']} (type_id=188)")
    print(f"{'='*60}")

    # 1. Tạo Feature node (type_id=188) trực tiếp dưới Root 000002
    feat_result = create_task(feat_payload, "FEATURE", indent=0)
    if feat_result is None:
        print(f"⛔ Skip toàn bộ Feature {i} do lỗi tạo Feature")
        continue
    stats["feature"] += 1
    results.append({"type": "feature", "id": feat_result["id"], "path": feat_result["path"], "title": feat_result["title"]})

    feat_path = feat_result["path"]

    # 2. Tạo TẤT CẢ User Stories (type_id=190) trực tiếp dưới Feature này
    for k, story_payload in enumerate(feat_entry["user_stories"], 1):
        story_body = story_payload.copy()
        story_body["parent_path"] = feat_path  # Fill parent = Feature path

        story_result = create_task(story_body, f"  US {k}/{len(feat_entry['user_stories'])} (type_id=190)", indent=1)
        if story_result:
            stats["story"] += 1
            results.append({"type": "user_story", "id": story_result["id"], "path": story_result["path"], "title": story_result["title"]})

    print(f"✅ Feature '{feat_payload['title']}' — {len(feat_entry['user_stories'])} stories done")

# === SUMMARY ===
elapsed = (datetime.now() - start_time).total_seconds()
print(f"\n{'='*60}")
print("📊 KẾT QUẢ IMPORT")
print(f"{'='*60}")
print(f"  Feature:    {stats['feature']}/{len(plan)} (type_id=188)")
print(f"  User Story: {stats['story']}/30 (type_id=190)")
print(f"  Errors:     {stats['errors']}")
print(f"  Thời gian:  {elapsed:.1f}s")
print(f"{'='*60}\n")

# Save results log
if not DRY_RUN:
    log_path = r"c:\Users\thanh\Desktop\ERP_Cloudaz\docs\erp-api\import_result.json"
    with open(log_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"💾 Log saved: {log_path}")
