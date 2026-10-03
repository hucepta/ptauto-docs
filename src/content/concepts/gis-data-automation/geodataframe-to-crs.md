---
{
  "id": "concept.gis-data-automation.geodataframe-to-crs",
  "slug": "geodataframe-to-crs",
  "title": "GeoDataFrame.to_crs",
  "description": "Biến đổi tọa độ geometry từ CRS nguồn đã biết sang CRS đích.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_crs.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```python
converted = gdf.to_crs(target_crs)
```

## Tham số và kết quả

gdf.crs phải đúng; target_crs là CRS đích hợp lệ. GeoDataFrame mới có geometry đã biến đổi.

## Cách dùng

Đưa dữ liệu GIS về cùng CRS với lớp đích trước khi spatial join.

```python
converted = gdf.to_crs('EPSG:3857')
```

## Kiểm tra khi áp dụng

Kiểm vị trí mẫu, đơn vị và khu vực áp dụng; không dùng Web Mercator cho phép đo chính xác tùy tiện.
