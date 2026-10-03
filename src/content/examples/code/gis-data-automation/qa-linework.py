"""QA cơ bản cho LineString 2D đã biết đơn vị mét.
Không đọc DWG, không gán/chuyển CRS, không kiểm tra tự cắt hay topology toàn lớp.
min_length_m là ngưỡng do người dùng đặt, không phải tiêu chuẩn nghiệm thu.
"""
import copy
import json
import math
from collections import Counter


def text(value):
    return "" if value is None else str(value).strip()


def number(value):
    if isinstance(value, bool):
        raise ValueError("không nhận Boolean")
    result = float(value)
    if not math.isfinite(result):
        raise ValueError("số không hữu hạn")
    return result


def qa_linework(records, coordinate_unit, min_length_m):
    if coordinate_unit != "m":
        raise ValueError("Cần xác nhận đơn vị mét trước kiểm tra chiều dài.")
    min_length_m = number(min_length_m)
    if min_length_m < 0:
        raise ValueError("Ngưỡng chiều dài không được âm.")
    if not isinstance(records, (list, tuple)):
        raise TypeError("records phải là list hoặc tuple.")
    if any(not isinstance(record, dict) for record in records):
        raise TypeError("Mỗi bản ghi phải là dictionary.")
    id_counts = Counter(text(record.get("feature_id")) for record in records)
    accepted, rejected = [], []
    for row_index, record in enumerate(records, start=1):
        feature_id = text(record.get("feature_id"))
        reasons, points = [], []
        if not feature_id:
            reasons.append("Thiếu feature_id.")
        elif id_counts[feature_id] > 1:
            reasons.append("feature_id bị trùng; loại mọi hàng mang mã này.")
        geometry = record.get("geometry")
        if not isinstance(geometry, dict) or geometry.get("type") != "LineString":
            reasons.append("Cần Geometry kiểu LineString.")
        else:
            coordinates = geometry.get("coordinates")
            if not isinstance(coordinates, (list, tuple)) or len(coordinates) < 2:
                reasons.append("LineString cần ít nhất hai đỉnh.")
            else:
                for vertex_index, vertex in enumerate(coordinates, start=1):
                    try:
                        if not isinstance(vertex, (list, tuple)) or len(vertex) != 2:
                            raise ValueError("đỉnh không phải 2D")
                        points.append((number(vertex[0]), number(vertex[1])))
                    except (TypeError, ValueError, OverflowError):
                        reasons.append("Đỉnh {} cần hai số hữu hạn.".format(vertex_index))
        length = None
        if len(points) >= 2 and len(points) == len(geometry.get("coordinates", [])):
            segments = [
                math.hypot(b[0] - a[0], b[1] - a[1])
                for a, b in zip(points, points[1:])
            ]
            if any(segment == 0 for segment in segments):
                reasons.append("Có hai đỉnh liên tiếp trùng tọa độ.")
            length = sum(segments)
            if not math.isfinite(length):
                reasons.append("Chiều dài không hữu hạn.")
            elif length < min_length_m:
                reasons.append("Chiều dài nhỏ hơn ngưỡng đã khai báo.")
        if reasons:
            rejected.append({
                "row_index": row_index, "feature_id": feature_id,
                "source_handle": text(record.get("source_handle")),
                "reasons": reasons,
            })
        else:
            output = dict(record)
            output["feature_id"] = feature_id
            output["geometry"] = copy.deepcopy(geometry)
            output["geometry"]["coordinates"] = [[x, y] for x, y in points]
            output["length_m"] = length
            output["row_index"] = row_index
            accepted.append(output)
    return {
        "accepted": accepted,
        "rejected": rejected,
        "counts": {"input": len(records), "accepted": len(accepted),
                   "rejected": len(rejected)},
        "checked_rules": ["ma-bat-buoc", "ma-trung", "dinh-2d-huu-han",
                          "doan-trung-lien-tiep", "chieu-dai-toi-thieu"],
        "not_checked": ["tu-cat", "polygon-validity", "topology-toan-lop",
                        "crs-dung-hay-sai", "cao-do"],
    }


if __name__ == "__main__":
    sample_records = [
        {"feature_id": "L01", "source_handle": "1A",
         "geometry": {"type": "LineString", "coordinates": [[0, 0], [3, 4]]}},
        {"feature_id": "L02", "source_handle": "1B",
         "geometry": {"type": "LineString", "coordinates": [[3, 4], [3, 4]]}},
    ]
    result = qa_linework(sample_records, "m", 0.01)
    print(json.dumps(result, ensure_ascii=False, indent=2, allow_nan=False))
