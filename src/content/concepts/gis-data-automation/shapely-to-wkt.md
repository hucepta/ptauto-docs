---
{
  "id": "concept.gis-data-automation.shapely-to-wkt",
  "slug": "shapely-to-wkt",
  "title": "Shapely to_wkt",
  "description": "Chuỗi WKT.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely to_wkt",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.to_wkt.html"
    }
  ],
  "searchableTerms": [
    "Shapely to_wkt"
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
shapely.to_wkt(geometry, rounding_precision=6)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

rounding_precision là số chữ số thập phân xuất.

## Kết quả

Chuỗi WKT.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.to_wkt(Point(10,20)))
```

## Dễ nhầm

Làm tròn khi xuất có thể mất độ chính xác; không thay dữ liệu gốc.
