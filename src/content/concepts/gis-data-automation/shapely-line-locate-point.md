---
{
  "id": "concept.gis-data-automation.shapely-line-locate-point",
  "slug": "shapely-line-locate-point",
  "title": "Shapely line_locate_point",
  "description": "Khoảng cách từ đầu tuyến tới vị trí gần nhất.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely line_locate_point",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.line_locate_point.html"
    }
  ],
  "searchableTerms": [
    "Shapely line_locate_point"
  ],
  "compatibility": [
    {
      "product": "Shapely",
      "version": "API dạng hàm của Shapely 2.x; kiểm phiên bản GEOS khi dùng tùy chọn mới."
    }
  ]
}
---

## Cú pháp

```python
shapely.line_locate_point(line, other, normalized=False)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

other là điểm được chiếu lên tuyến.

## Kết quả

Khoảng cách từ đầu tuyến tới vị trí gần nhất.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.line_locate_point(LineString([(0,0),(10,0)]),Point(3,2))) # 3
```

## Dễ nhầm

Khoảng cách dọc tuyến khác khoảng cách vuông góc từ điểm tới tuyến.
