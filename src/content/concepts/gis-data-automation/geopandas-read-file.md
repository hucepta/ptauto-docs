---
{
  "id": "concept.gis-data-automation.geopandas-read-file",
  "slug": "geopandas-read-file",
  "title": "geopandas.read_file",
  "description": "Đọc lớp vector từ GeoPackage, GeoJSON hoặc định dạng được backend hỗ trợ.",
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
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.read_file.html"
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
gdf = geopandas.read_file(path, layer=None)
```

## Tham số và kết quả

path là nguồn; layer dùng khi tệp có nhiều lớp. GeoDataFrame với geometry và thuộc tính.

## Cách dùng

Đọc bản sao dữ liệu, kiểm số feature, CRS và cấu trúc trường trước ETL.

```python
gdf = geopandas.read_file('source.gpkg', layer='pipe')
print(len(gdf), gdf.crs)
```

## Kiểm tra khi áp dụng

Không coi CRS trống là mặc nhiên WGS84.
