---
{
  "id": "concept.gis-data-automation.shapely-is-empty",
  "slug": "shapely-is-empty",
  "title": "Shapely is_empty",
  "description": "True nếu không có thành phần hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely is_empty",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.is_empty.html"
    }
  ],
  "searchableTerms": [
    "Shapely is_empty"
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
shapely.is_empty(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần kiểm rỗng.

## Kết quả

True nếu không có thành phần hình học.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.is_empty(shapely.GeometryCollection())) # True
```

## Dễ nhầm

None khác hình rỗng; kiểm cả dữ liệu thiếu.
