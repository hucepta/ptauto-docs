"""Python node: IN[0] = stations, IN[1] = elevations.
Ví dụ học tập: [0, 20] và [5, 6]. Không truy cập API host.
"""
import math


def finite_number(value, field):
    if isinstance(value, bool):
        raise ValueError("{} không nhận Boolean.".format(field))
    number = float(value)
    if not math.isfinite(number):
        raise ValueError("{} phải là số hữu hạn.".format(field))
    return number


if len(IN) < 2:
    raise ValueError("Cần cổng lý trình IN[0] và cao độ IN[1].")

stations, elevations = IN[0], IN[1]
if not isinstance(stations, (list, tuple)):
    raise TypeError("IN[0] phải là list hoặc tuple lý trình.")
if not isinstance(elevations, (list, tuple)):
    raise TypeError("IN[1] phải là list hoặc tuple cao độ.")
if len(stations) != len(elevations):
    raise ValueError("Số lý trình và số cao độ phải bằng nhau.")

pairs = []
for index, (station, elevation) in enumerate(zip(stations, elevations)):
    pairs.append({
        "row_index": index + 1,
        "station_m": finite_number(station, "station_m"),
        "z_m": finite_number(elevation, "z_m"),
    })

OUT = {"pairs": pairs, "count": len(pairs)}
