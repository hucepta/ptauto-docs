---
{
  "id": "concept.gis-data-automation.shapely-centroid",
  "slug": "shapely-centroid",
  "title": "Shapely centroid",
  "description": "Điểm trọng tâm hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely centroid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.centroid.html"
    }
  ],
  "searchableTerms": [
    "Shapely centroid"
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
shapely.centroid(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần tâm trọng số.

## Kết quả

Điểm trọng tâm hình học.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.centroid(shapely.box(0,0,10,10))) # POINT (5 5)
```

## Dễ nhầm

Tâm có thể nằm ngoài vùng lõm; cần điểm bên trong thì dùng point_on_surface.
