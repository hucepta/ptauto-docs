---
{
  "id": "concept.gis-data-automation.shapely-is-valid",
  "slug": "shapely-is-valid",
  "title": "Shapely is_valid",
  "description": "Cờ tính hợp lệ hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely is_valid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.is_valid.html"
    }
  ],
  "searchableTerms": [
    "Shapely is_valid"
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
shapely.is_valid(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần kiểm.

## Kết quả

Cờ tính hợp lệ hình học.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.is_valid(shapely.box(0,0,1,1))) # True
```

## Dễ nhầm

Hợp lệ hình học không chứng minh đúng vị trí, ID hoặc mạng kết nối.
