---
{
  "id": "concept.gis-data-automation.shapely-symmetric-difference",
  "slug": "shapely-symmetric-difference",
  "title": "Shapely symmetric_difference",
  "description": "Các phần chỉ thuộc một đầu vào.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely symmetric_difference",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.symmetric_difference.html"
    }
  ],
  "searchableTerms": [
    "Shapely symmetric_difference"
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
shapely.symmetric_difference(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hai hình nguồn.

## Kết quả

Các phần chỉ thuộc một đầu vào.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.symmetric_difference(shapely.box(0,0,2,2),shapely.box(1,1,3,3)).area) # 6
```

## Dễ nhầm

Không giống hợp; phần giao bị bỏ.
