---
{
  "id": "concept.gis-data-automation.shapely-intersects",
  "slug": "shapely-intersects",
  "title": "Shapely intersects",
  "description": "True nếu có ít nhất một điểm chung.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely intersects",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.intersects.html"
    }
  ],
  "searchableTerms": [
    "Shapely intersects"
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
shapely.intersects(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hình cần so.

## Kết quả

True nếu có ít nhất một điểm chung.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.intersects(Point(0,0),shapely.box(0,0,2,2))) # True
```

## Dễ nhầm

Chạm ranh cũng là giao; không chứng minh nằm hoàn toàn trong vùng.
