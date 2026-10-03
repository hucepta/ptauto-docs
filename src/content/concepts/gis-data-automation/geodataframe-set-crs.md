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

## Cú pháp

```python
gdf.set_crs(crs=None, epsg=None, inplace=False, allow_override=False)
```

`crs` hoặc `epsg` mô tả hệ tọa độ đã xác minh của dữ liệu. Mặc định trả bản sao; `inplace=True` thay đổi bảng hiện có. `allow_override=True` cho phép thay nhãn CRS khác đang có. Phép này gán CRS cho cột hình học đang hoạt động và giữ nguyên các tọa độ. [Tài liệu GeoPandas: set_crs](https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.set_crs.html).

## Ví dụ tự tạo dữ liệu

Cần môi trường Python có GeoPandas. Dữ liệu giả lập dưới đây được định nghĩa là kinh độ/vĩ độ WGS84; không cần tệp người dùng.

```python
import geopandas as gpd

gdf = gpd.GeoDataFrame(
    {"id": ["C01", "C02"]},
    geometry=gpd.points_from_xy([0, 1], [0, 0]),
)
tagged = gdf.set_crs(epsg=4326)
print(gdf.crs)
print(tagged.crs.to_epsg())
print([(p.x, p.y) for p in tagged.geometry])
print(tagged["id"].tolist())
```

Kết quả mong đợi chính xác:

```text
None
4326
[(0.0, 0.0), (1.0, 0.0)]
['C01', 'C02']
```

`gdf` chưa có CRS vì phép gọi tạo bản sao. Hình học trong `tagged` vẫn có cùng giá trị số; chỉ thêm nhãn mô tả cách hiểu tọa độ.

## Kiểm tra khi áp dụng

Muốn chuyển từ độ sang tọa độ chiếu, dùng to_crs sau khi nguồn được gán đúng. Không gán EPSG:4326 cho số đo mét chỉ vì muốn xuất GeoJSON. Nếu có nhãn xung đột, xác minh tài liệu nguồn trước; allow_override chỉ thay nhãn, không sửa giá trị số và không thực hiện phép chiếu.

Ví dụ đã đối chiếu API chính thức; chưa chạy tại đây vì môi trường không có GeoPandas.
