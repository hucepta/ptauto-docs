---
{
  "id": "concept.gis-data-automation.geodataframe-set-crs",
  "slug": "geodataframe-set-crs",
  "title": "GeoDataFrame.set_crs",
  "description": "Gán CRS nguồn đã được xác minh mà không đổi số tọa độ.",
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
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.set_crs.html"
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
gdf = gdf.set_crs('EPSG:xxxx')
```

## Tham số và kết quả

crs phải được chứng minh từ hồ sơ dữ liệu. GeoDataFrame có nhãn CRS; tọa độ giữ nguyên.

## Cách dùng

Dùng khi file thiếu metadata CRS nhưng nguồn có WKT/EPSG đáng tin.

```python
gdf = gdf.set_crs(source_crs)
```

## Kiểm tra khi áp dụng

Không dùng set_crs để chuyển tọa độ hoặc đoán hệ VN-2000.
