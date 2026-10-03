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

## Cú pháp

```python
gdf.to_crs(crs=None, epsg=None, inplace=False)
```

`crs` hoặc `epsg` là hệ đích; cột hình học đang hoạt động phải có CRS nguồn đúng. Mặc định trả bảng mới với hình học đã biến đổi. [Tài liệu GeoPandas: to_crs](https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_crs.html).

## Ví dụ tự tạo dữ liệu

Cần Python có GeoPandas. Hai điểm giả lập là kinh độ/vĩ độ WGS84, với cột thuộc tính lưu kinh độ gốc:

```python
import geopandas as gpd

gdf = gpd.GeoDataFrame(
    {"id": ["C01", "C02"], "longitude": [0, 1]},
    geometry=gpd.points_from_xy([0, 1], [0, 0]),
    crs="EPSG:4326",
)
converted = gdf.to_crs(epsg=3857)
print(converted.crs.to_epsg())
print([(round(p.x, 3), round(p.y, 3)) for p in converted.geometry])
print(converted["longitude"].tolist())
print(gdf.crs.to_epsg())
```

Kết quả mong đợi sau làm tròn ba chữ số thập phân:

```text
3857
[(0.0, 0.0), (111319.491, 0.0)]
[0, 1]
4326
```

Điểm thứ hai đổi tọa độ hình học từ độ sang đơn vị mét của EPSG:3857. Cột `longitude` vẫn giữ số ban đầu vì là thuộc tính thông thường. Bảng nguồn giữ CRS 4326.

## Kiểm tra khi áp dụng

EPSG:3857 phục vụ minh họa; không mặc định dùng cho đo đạc kỹ thuật vì có biến dạng. Chọn CRS phù hợp vị trí và yêu cầu dự án. Với đường qua ranh giới phép chiếu hoặc kinh tuyến đổi ngày, cần xử lý hình học trước; to_crs không diễn giải đoạn nối như đường trắc địa. Gán nhãn bằng set_crs không thay thế phép biến đổi này.

Đã đối chiếu API; chưa chạy GeoPandas tại đây do thiếu thư viện. Giá trị mong đợi là mốc kiểm tra khi chạy trong môi trường có dependencies.
