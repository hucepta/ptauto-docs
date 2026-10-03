---
{
  "id": "concept.gis-data-automation.shapely-disjoint",
  "slug": "shapely-disjoint",
  "title": "Shapely disjoint",
  "description": "True nếu không có điểm chung.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely disjoint",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.disjoint.html"
    }
  ],
  "searchableTerms": [
    "Shapely disjoint"
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
shapely.disjoint(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hình cần kiểm tách biệt.

## Kết quả

True nếu không có điểm chung.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.disjoint(Point(0,0),Point(1,1))) # True
```

## Dễ nhầm

Sai CRS có thể làm hai đối tượng cùng vị trí trông tách biệt.
