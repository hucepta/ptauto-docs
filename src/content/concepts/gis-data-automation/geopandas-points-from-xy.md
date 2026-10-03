---
{
  "id": "concept.gis-data-automation.geopandas-points-from-xy",
  "slug": "geopandas-points-from-xy",
  "title": "geopandas.points_from_xy",
  "description": "GeometryArray các điểm.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: geopandas.points_from_xy",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.points_from_xy.html"
    }
  ],
  "searchableTerms": [
    "geopandas.points_from_xy"
  ]
}
---

## Cú pháp

```python
geopandas.points_from_xy(x, y, z=None, crs=None)
```

## Tham số

x,y là cột số; z tùy chọn; crs là hệ nguồn đã biết.

## Kết quả

GeometryArray các điểm.

## Ví dụ

```python
import geopandas as gpd
pts=gpd.points_from_xy([106.0,106.1],[10.0,10.1],crs="EPSG:4326")
print(len(pts)) # 2
```

## Dễ nhầm

Kinh độ đi vào x, vĩ độ vào y; không tự suy CRS.
