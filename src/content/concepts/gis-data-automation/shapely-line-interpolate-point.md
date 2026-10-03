---
{
  "id": "concept.gis-data-automation.shapely-line-interpolate-point",
  "slug": "shapely-line-interpolate-point",
  "title": "Shapely line_interpolate_point",
  "description": "Điểm tại khoảng cách dọc tuyến.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Shapely line_interpolate_point",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.line_interpolate_point.html"
    }
  ],
  "searchableTerms": [
    "Shapely line_interpolate_point"
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
shapely.line_interpolate_point(line, distance, normalized=False)
```

Dạng gọi dưới đây chọn các đối số cần cho ví dụ; xem nguồn để biết toàn bộ tùy chọn.

## Tham số

line là tuyến; distance là chiều dài hoặc tỷ phần khi normalized=True.

## Kết quả

Điểm tại khoảng cách dọc tuyến.

## Ví dụ

```python
import shapely
from shapely import Point, LineString
print(shapely.line_interpolate_point(LineString([(0,0),(10,0)]),3)) # POINT (3 0)
```

## Dễ nhầm

Khoảng cách vượt tuyến bị chặn ở đầu/cuối; không tự báo lỗi lý trình.
