---
{
  "id": "concept.gis-data-automation.shapely-touches",
  "slug": "shapely-touches",
  "title": "Shapely touches",
  "description": "True nếu chỉ có điểm chung ở ranh, không giao phần trong.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely touches",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.touches.html"
    }
  ],
  "searchableTerms": [
    "Shapely touches"
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
shapely.touches(a, b)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

a,b là hai hình cần kiểm tiếp xúc.

## Kết quả

True nếu chỉ có điểm chung ở ranh, không giao phần trong.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.touches(shapely.box(0,0,1,1),shapely.box(1,0,2,1))) # True
```

## Dễ nhầm

Không thay điều kiện khoảng cách gần nhau theo dung sai.
