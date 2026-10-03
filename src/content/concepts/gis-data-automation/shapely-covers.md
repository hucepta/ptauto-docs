---
{
  "id": "concept.gis-data-automation.shapely-covers",
  "slug": "shapely-covers",
  "title": "Shapely covers",
  "description": "True nếu không có điểm của b nằm ngoài a.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely covers",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.covers.html"
    }
  ],
  "searchableTerms": [
    "Shapely covers"
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
shapely.covers(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a là hình phủ; b là hình kiểm.

## Kết quả

True nếu không có điểm của b nằm ngoài a.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.covers(shapely.box(0,0,2,2),Point(0,0))) # True
```

## Dễ nhầm

covers có tính hướng; a covers b khác b covers a.
