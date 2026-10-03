"""Tạo lớp điểm từ CSV đã xác nhận WGS84 longitude/latitude.
Không suy đoán CRS từ khoảng số, không reprojection và không nhận X/Y mét.
z_m giữ trong properties vì hệ cao độ Civil chưa được xác định cho GeoJSON.
Tọa độ trong main chỉ là dữ liệu học tập, không phải điểm khống chế.
"""
import csv
import io
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


def points_to_geojson(csv_text, declared_crs):
    if declared_crs != "OGC:CRS84":
        raise ValueError("Cần hồ sơ nguồn xác nhận OGC:CRS84 (WGS84 longitude/latitude).")
    if not isinstance(csv_text, str):
        raise TypeError("Đầu vào phải là chuỗi CSV.")
    reader = csv.DictReader(io.StringIO(csv_text.lstrip("\ufeff"), newline=""), strict=True)
    required = ["point_id", "longitude", "latitude"]
    headers = reader.fieldnames or []
    if len(headers) != len(set(headers)):
        raise ValueError("Header CSV bị trùng.")
    if any(field not in headers for field in required):
        raise ValueError("Cần các cột point_id, longitude và latitude.")
    try:
        rows = list(reader)
    except csv.Error as error:
        raise ValueError("CSV không đúng cú pháp: {}".format(error)) from error
    id_counts = Counter(text(row.get("point_id")) for row in rows)
    features, rejected = [], []
    for row_index, row in enumerate(rows, start=1):
        point_id = text(row.get("point_id"))
        reasons = []
        if None in row or any(row.get(field) is None for field in required):
            reasons.append("Số trường CSV không khớp header.")
        if not point_id:
            reasons.append("Thiếu point_id.")
        elif id_counts[point_id] > 1:
            reasons.append("point_id bị trùng; loại mọi hàng cùng mã.")
        coordinates = {}
        for field in ["longitude", "latitude"]:
            try:
                coordinates[field] = number(row.get(field))
            except (TypeError, ValueError, OverflowError):
                reasons.append("{} phải là số hữu hạn.".format(field))
        lon, lat = coordinates.get("longitude"), coordinates.get("latitude")
        if lon is not None and not -180 <= lon <= 180:
            reasons.append("longitude nằm ngoài [-180, 180].")
        if lat is not None and not -90 <= lat <= 90:
            reasons.append("latitude nằm ngoài [-90, 90].")
        properties = {"point_id": point_id}
        for field in ["station_m", "z_m"]:
            if text(row.get(field)):
                try:
                    properties[field] = number(row[field])
                except (TypeError, ValueError, OverflowError):
                    reasons.append("{} phải là số hữu hạn hoặc để trống.".format(field))
        if text(row.get("alignment_id")):
            properties["alignment_id"] = text(row["alignment_id"])
        if reasons:
            rejected.append({"row_index": row_index, "point_id": point_id,
                             "reasons": reasons})
        else:
            features.append({
                "type": "Feature",
                "id": point_id,
                "geometry": {"type": "Point", "coordinates": [lon, lat]},
                "properties": properties,
            })
    return {
        "collection": {"type": "FeatureCollection", "features": features},
        "rejected": rejected,
        "counts": {"input": len(rows), "accepted": len(features),
                   "rejected": len(rejected)},
    }


if __name__ == "__main__":
    sample_csv = (
        "point_id,longitude,latitude,z_m\n"
        "P01,106.7,10.8,3.2\n"
        "P02,106.8,100,3.4\n"
    )
    result = points_to_geojson(sample_csv, "OGC:CRS84")
    print(json.dumps(result, ensure_ascii=False, indent=2, allow_nan=False))
