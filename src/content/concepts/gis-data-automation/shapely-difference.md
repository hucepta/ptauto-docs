---
{
  "id": "concept.gis-data-automation.shapely-difference",
  "slug": "shapely-difference",
  "title": "Shapely difference",
  "description": "Phần a ngoài b.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely difference",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.difference.html"
    }
  ],
  "searchableTerms": [
    "Shapely difference"
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
shapely.difference(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a là hình giữ; b là vùng loại.

## Kết quả

Phần a ngoài b.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.difference(shapely.box(0,0,2,2),shapely.box(1,1,3,3)).area) # 3
```

## Dễ nhầm

Đảo a,b cho kết quả khác.
