"""Mapping dữ liệu đã trích xuất; không mở DWG/DXF.
Giữ NAMESPACE và source_id khi xuất lại cùng bộ nguồn.
Handle chỉ truy dấu trong bộ nguồn quản lý, không thay mã tài sản bền vững.
Geometry được chuyển tiếp; cần QA riêng trước ghi dữ liệu GIS.
"""
import copy
import json
import re
import uuid
from collections import Counter

NAMESPACE = uuid.UUID("7f30b934-9d1c-4c84-98fe-6c6244f4b972")


def text(value):
    return "" if value is None else str(value).strip()


def normalized_handle(record):
    return text(record.get("handle")).upper()


def map_cad_records(records, source_id):
    if not isinstance(records, (list, tuple)):
        raise TypeError("records phải là list hoặc tuple.")
    if any(not isinstance(record, dict) for record in records):
        raise TypeError("Mỗi bản ghi phải là dictionary.")
    source_id = text(source_id)
    if not source_id:
        raise ValueError("Cần source_id ổn định của bộ nguồn.")
    counts = Counter(normalized_handle(record) for record in records)
    accepted, rejected = [], []
    for row_index, record in enumerate(records, start=1):
        handle = normalized_handle(record)
        layer = text(record.get("layer"))
        geometry = record.get("geometry")
        reasons = []
        if not handle or not re.fullmatch(r"[0-9A-F]+", handle):
            reasons.append("Handle cần là chuỗi hexadecimal không rỗng.")
        elif counts[handle] > 1:
            reasons.append("Handle trùng trong bộ nguồn; cần đối chiếu mọi hàng.")
        if not layer:
            reasons.append("Thiếu layer nguồn.")
        if not isinstance(geometry, dict) or geometry.get("type") != "LineString":
            reasons.append("Schema mẫu cần Geometry kiểu LineString.")
        if reasons:
            rejected.append({
                "row_index": row_index, "source_handle": handle, "reasons": reasons,
            })
            continue
        key = json.dumps([source_id, handle], ensure_ascii=False, separators=(",", ":"))
        accepted.append({
            "feature_id": str(uuid.uuid5(NAMESPACE, key)),
            "source_id": source_id,
            "source_handle": handle,
            "source_layer": layer,
            "asset_id": text(record.get("asset_id")),
            "geometry": copy.deepcopy(geometry),
        })
    return {
        "schema_version": "cad-linework-1",
        "source_id": source_id,
        "accepted": accepted,
        "rejected": rejected,
        "counts": {"input": len(records), "accepted": len(accepted),
                   "rejected": len(rejected)},
    }


if __name__ == "__main__":
    sample_records = [
        {"handle": "1a", "layer": "ROAD_AXIS", "asset_id": "R01",
         "geometry": {"type": "LineString", "coordinates": [[0, 0], [3, 4]]}},
        {"handle": "1b", "layer": "ROAD_AXIS", "asset_id": "R02",
         "geometry": {"type": "LineString", "coordinates": [[3, 4], [6, 4]]}},
    ]
    result = map_cad_records(sample_records, "drawing-demo-01")
    print(json.dumps(result, ensure_ascii=False, indent=2, allow_nan=False))
