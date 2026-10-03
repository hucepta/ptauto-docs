---
{
  "id": "concept.gis-data-automation.geodataframe-to-crs",
  "slug": "geodataframe-to-crs",
  "title": "GeoDataFrame.to_crs",
  "description": "Bảng có tọa độ hình học mới trong CRS đích.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: GeoDataFrame.to_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_crs.html"
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
gdf.to_crs(crs=None, epsg=None, inplace=False)
```

## Tham số

crs/epsg là hệ đích; gdf phải có CRS nguồn đúng.

## Kết quả

Bảng có tọa độ hình học mới trong CRS đích.

## Thực hành

```python
import geopandas as gpd
gdf=gpd.GeoDataFrame({"id":["C01"]},geometry=gpd.points_from_xy([106.7],[10.77]),crs="EPSG:4326")
converted=gdf.to_crs(epsg=3857)
print(converted.crs) # EPSG:3857
print(converted.geometry.x.iloc[0] != 106.7) # True
```

## Dễ nhầm

3857 dùng minh họa hiển thị, không mặc định cho đo đạc. Cột thuộc tính x/y không tự chuyển theo hình học.
