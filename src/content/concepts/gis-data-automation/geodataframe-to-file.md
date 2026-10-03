---
{
  "id": "concept.gis-data-automation.geodataframe-to-file",
  "slug": "geodataframe-to-file",
  "title": "geopandas.GeoDataFrame.to_file",
  "description": "Ghi bảng và hình học ra tệp; trả None.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "sources": [
    {
      "title": "Tài liệu chính thức: geopandas.GeoDataFrame.to_file",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_file.html"
    }
  ],
  "searchableTerms": [
    "geopandas.GeoDataFrame.to_file"
  ]
}
---

## Cú pháp

```python
gdf.to_file(filename, driver=None, schema=None, index=None, **kwargs)
```

## Tham số

filename là tệp đích; driver chọn định dạng.

## Kết quả

Ghi bảng và hình học ra tệp; trả None.

## Ví dụ

```python
import geopandas as gpd
gdf=gpd.GeoDataFrame({"id":["C01"]},geometry=gpd.points_from_xy([106],[10]),crs="EPSG:4326")
gdf.to_file("coc.gpkg",layer="coc",driver="GPKG",index=False)
```

## Dễ nhầm

Có thể ghi đè tệp/lớp; dùng tên đầu ra riêng và đọc lại để kiểm.
