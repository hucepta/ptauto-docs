---
{
  "id": "concept.gis-data-automation.shapely-envelope",
  "slug": "shapely-envelope",
  "title": "Shapely envelope",
  "description": "Khung bao song song trục dưới dạng hình học.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely envelope",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.envelope.html"
    }
  ],
  "searchableTerms": [
    "Shapely envelope"
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
shapely.envelope(geometry)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

geometry là hình nguồn.

## Kết quả

Khung bao song song trục dưới dạng hình học.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.envelope(LineString([(1,2),(3,4)])))
```

## Dễ nhầm

Không phải hình chữ nhật nhỏ nhất có thể xoay.
