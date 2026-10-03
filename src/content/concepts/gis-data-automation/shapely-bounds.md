---
{
  "id": "concept.gis-data-automation.shapely-bounds",
  "slug": "shapely-bounds",
  "title": "Shapely bounds",
  "description": "Mảng minx,miny,maxx,maxy.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely bounds",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.bounds.html"
    }
  ],
  "searchableTerms": [
    "Shapely bounds"
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
shapely.bounds(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình học cần khung bao.

## Kết quả

Mảng minx,miny,maxx,maxy.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.bounds(LineString([(1,2),(3,4)])))
```

## Dễ nhầm

Khung bao chỉ lọc sơ bộ, không thay kiểm giao hình học.
