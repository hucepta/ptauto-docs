---
{
  "id": "concept.gis-data-automation.shapely-convex-hull",
  "slug": "shapely-convex-hull",
  "title": "Shapely convex_hull",
  "description": "Bao lồi nhỏ nhất.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely convex_hull",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.convex_hull.html"
    }
  ],
  "searchableTerms": [
    "Shapely convex_hull"
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
shapely.convex_hull(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry chứa các điểm cần bao.

## Kết quả

Bao lồi nhỏ nhất.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.convex_hull(LineString([(0,0),(1,1),(2,0)])))
```

## Dễ nhầm

Bao lồi lấp vùng lõm; không giữ ranh gốc.
