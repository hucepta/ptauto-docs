"""Python node: IN[0] = rows, IN[1] = headers.
Các hàng không chứa header. row_index bắt đầu từ 1 trong rows.
"""
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


if len(IN) < 2:
    raise ValueError("Cần IN[0] là bảng và IN[1] là tên cột.")
rows, raw_headers = IN[0], IN[1]
if not isinstance(rows, (list, tuple)):
    raise TypeError("Bảng phải là list hoặc tuple các hàng.")
if not isinstance(raw_headers, (list, tuple)):
    raise TypeError("Tên cột phải là list hoặc tuple.")

headers = [text(value) for value in raw_headers]
required = ["point_id", "station_m", "x_m", "y_m", "z_m"]
if not headers or any(not name for name in headers):
    raise ValueError("Tên cột không được rỗng.")
if len(headers) != len(set(headers)):
    raise ValueError("Tên cột bị trùng.")
missing = [name for name in required if name not in headers]
if missing:
    raise ValueError("Thiếu cột: {}".format(", ".join(missing)))

id_column = headers.index("point_id")
counts_by_id = Counter(
    text(row[id_column])
    for row in rows
    if isinstance(row, (list, tuple)) and len(row) == len(headers)
)
accepted, rejected = [], []
for row_index, row in enumerate(rows, start=1):
    reasons = []
    if not isinstance(row, (list, tuple)) or len(row) != len(headers):
        rejected.append({
            "row_index": row_index,
            "point_id": "",
            "reasons": ["Hàng phải có đúng số cột đã khai báo."],
        })
        continue
    record = dict(zip(headers, row))
    point_id = text(record["point_id"])
    record["point_id"] = point_id
    if not point_id:
        reasons.append("Thiếu point_id.")
    elif counts_by_id[point_id] > 1:
        reasons.append("point_id bị trùng; cần đối chiếu mọi hàng cùng mã.")
    for field in required[1:]:
        try:
            record[field] = number(record[field])
        except (TypeError, ValueError, OverflowError):
            reasons.append("{} phải là số hữu hạn.".format(field))
    if reasons:
        rejected.append({
            "row_index": row_index,
            "point_id": point_id,
            "reasons": reasons,
        })
    else:
        record["row_index"] = row_index
        accepted.append(record)

OUT = {
    "accepted": accepted,
    "rejected": rejected,
    "counts": {
        "input": len(rows), "accepted": len(accepted), "rejected": len(rejected),
    },
}
