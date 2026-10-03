---
{
  "id": "concept.gis-data-automation.geodataframe-set-crs",
  "slug": "geodataframe-set-crs",
  "title": "GeoDataFrame.set_crs",
  "description": "Bảng có nhãn CRS; tọa độ không đổi.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: GeoDataFrame.set_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.set_crs.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp và cổng

```python
gdf.set_crs(crs=None, epsg=None, inplace=False, allow_override=False)
```

## Tham số

crs/epsg là hệ nguồn đã xác minh; allow_override cho ghi đè nhãn cũ.

## Kết quả

Bảng có nhãn CRS; tọa độ không đổi.

## Thực hành

```python
import geopandas as gpd
gdf=gpd.GeoDataFrame({"id":["C01"]},geometry=gpd.points_from_xy([106.7],[10.77]))
gdf=gdf.set_crs(epsg=4326)
print(gdf.geometry.x.iloc[0]) # 106.7
```

## Dễ nhầm

Chỉ gán 4326 vì nguồn minh họa được biết là WGS84. Không dùng allow_override để che xung đột CRS thật.
