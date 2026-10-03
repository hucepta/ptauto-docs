---
{
  "id": "concept.gis-data-automation.shapely-point-on-surface",
  "slug": "shapely-point-on-surface",
  "title": "Shapely point_on_surface",
  "description": "Điểm nằm trên/trong hình học không rỗng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely point_on_surface",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.point_on_surface.html"
    }
  ],
  "searchableTerms": [
    "Shapely point_on_surface"
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
shapely.point_on_surface(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần một điểm đại diện.

## Kết quả

Điểm nằm trên/trong hình học không rỗng.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.point_on_surface(shapely.box(0,0,10,10)))
```

## Dễ nhầm

Không phải trọng tâm hay tâm đường tròn nội tiếp.
