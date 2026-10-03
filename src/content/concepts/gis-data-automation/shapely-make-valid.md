---
{
  "id": "concept.gis-data-automation.shapely-make-valid",
  "slug": "shapely-make-valid",
  "title": "Shapely make_valid",
  "description": "Hình học hợp lệ, có thể đổi kiểu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely make_valid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.make_valid.html"
    }
  ],
  "searchableTerms": [
    "Shapely make_valid"
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
shapely.make_valid(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình cần sửa theo GEOS.

## Kết quả

Hình học hợp lệ, có thể đổi kiểu.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.make_valid(shapely.box(0,0,1,1)))
```

## Dễ nhầm

Có thể trả GeometryCollection; kiểm kiểu và diện tích trước bàn giao.
