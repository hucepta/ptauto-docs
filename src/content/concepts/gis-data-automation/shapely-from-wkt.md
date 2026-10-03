---
{
  "id": "concept.gis-data-automation.shapely-from-wkt",
  "slug": "shapely-from-wkt",
  "title": "Shapely from_wkt",
  "description": "Hình học Shapely được giải mã.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely from_wkt",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.from_wkt.html"
    }
  ],
  "searchableTerms": [
    "Shapely from_wkt"
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
shapely.from_wkt(geometry, on_invalid='raise')
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là chuỗi WKT.

## Kết quả

Hình học Shapely được giải mã.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.from_wkt('POINT (10 20)'))
```

## Dễ nhầm

WKT hình học thông thường không chứa CRS; lưu CRS riêng.
