"""Python node, chỉ xử lý CSV trong bộ nhớ.
IN[0]: CSV point_id,alignment_id,station_m,x_m,y_m,z_m[,surface_z_m]
IN[1]: station_min_m; IN[2]: station_max_m; IN[3]: tolerance_m.
Phạm vi áp dụng cho một alignment_id đã xác nhận.
row_index đếm bản ghi CSV từ 1, không phải số dòng vật lý của file.

Dữ liệu học tập:
point_id,alignment_id,station_m,x_m,y_m,z_m,surface_z_m
P01,A,0,500,1000,2,2.01
P02,A,20,501,1001,2.08,2
P03,A,40,502,1002,3,
"""
import csv
import io
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


if len(IN) < 4:
    raise ValueError("Cần CSV, hai giới hạn lý trình và ngưỡng chênh cao.")
if not isinstance(IN[0], str):
    raise TypeError("IN[0] phải là chuỗi CSV.")
station_min, station_max, tolerance = [number(value) for value in IN[1:4]]
if station_min > station_max or tolerance < 0:
    raise ValueError("Phạm vi lý trình hoặc ngưỡng chênh cao không hợp lệ.")

reader = csv.DictReader(io.StringIO(IN[0].lstrip("\ufeff"), newline=""), strict=True)
required = ["point_id", "alignment_id", "station_m", "x_m", "y_m", "z_m"]
headers = reader.fieldnames or []
if len(headers) != len(set(headers)):
    raise ValueError("Header CSV bị trùng.")
missing = [field for field in required if field not in headers]
if missing:
    raise ValueError("Thiếu cột: {}".format(", ".join(missing)))
try:
    rows = list(reader)
except csv.Error as error:
    raise ValueError("CSV không đúng cú pháp: {}".format(error)) from error

alignment_ids = {text(row.get("alignment_id")) for row in rows}
alignment_ids.discard("")
if len(alignment_ids) > 1:
    raise ValueError("Bảng có nhiều tuyến; hãy chia theo alignment_id và phạm vi.")
id_counts = Counter(text(row.get("point_id")) for row in rows)
accepted, rejected = [], []
report_rows = []
for row_index, row in enumerate(rows, start=1):
    point_id = text(row.get("point_id"))
    reasons = []
    record = {"row_index": row_index, "point_id": point_id,
              "alignment_id": text(row.get("alignment_id"))}
    if None in row or any(row.get(field) is None for field in required):
        reasons.append("Số trường CSV không khớp header.")
    if not point_id:
        reasons.append("Thiếu point_id.")
    elif id_counts[point_id] > 1:
        reasons.append("point_id bị trùng; loại mọi hàng mang mã này.")
    if not record["alignment_id"]:
        reasons.append("Thiếu alignment_id.")
    for field in required[2:]:
        try:
            record[field] = number(row.get(field))
        except (TypeError, ValueError, OverflowError):
            reasons.append("{} phải là số hữu hạn.".format(field))
    if "station_m" in record:
        if not station_min <= record["station_m"] <= station_max:
            reasons.append("station_m nằm ngoài phạm vi đã khai báo.")
    surface_text = text(row.get("surface_z_m"))
    record["surface_z_m"] = None
    record["delta_z_m"] = None
    record["elevation_check"] = "chua-doi-chieu"
    if surface_text:
        try:
            record["surface_z_m"] = number(surface_text)
        except (TypeError, ValueError, OverflowError):
            reasons.append("surface_z_m phải là số hữu hạn hoặc để trống.")
        if "z_m" in record and record["surface_z_m"] is not None:
            delta = record["z_m"] - record["surface_z_m"]
            record["delta_z_m"] = delta
            record["elevation_check"] = "da-doi-chieu"
            if not math.isfinite(delta):
                reasons.append("Chênh cao không hữu hạn.")
            elif abs(delta) > tolerance:
                reasons.append("Chênh cao vượt ngưỡng đã khai báo.")
    if reasons:
        rejected.append({"row_index": row_index, "point_id": point_id,
                         "reasons": reasons, "record": record})
        status = "loai"
    else:
        accepted.append(record)
        status = "nhan"
    report_rows.append({
        "row_index": row_index, "point_id": point_id, "status": status,
        "reasons": " | ".join(reasons),
        "delta_z_m": "" if record["delta_z_m"] is None else record["delta_z_m"],
    })

report_stream = io.StringIO(newline="")
writer = csv.DictWriter(
    report_stream,
    fieldnames=["row_index", "point_id", "status", "reasons", "delta_z_m"],
)
writer.writeheader()
writer.writerows(report_rows)
OUT = {
    "accepted": accepted, "rejected": rejected,
    "report_csv": report_stream.getvalue(),
    "counts": {"input": len(rows), "accepted": len(accepted),
               "rejected": len(rejected)},
}
