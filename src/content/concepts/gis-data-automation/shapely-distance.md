---
{
  "id": "concept.gis-data-automation.shapely-distance",
  "slug": "shapely-distance",
  "title": "Shapely distance",
  "description": "Khoảng cách ngắn nhất trong mặt phẳng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely distance",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.distance.html"
    }
  ],
  "searchableTerms": [
    "Shapely distance"
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
shapely.distance(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hai hình học cùng hệ tọa độ.

## Kết quả

Khoảng cách ngắn nhất trong mặt phẳng.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.distance(Point(0,0),Point(3,4))) # 5
```

## Dễ nhầm

Không đo khoảng cách trên ellipsoid hoặc tự kiểm CRS.
