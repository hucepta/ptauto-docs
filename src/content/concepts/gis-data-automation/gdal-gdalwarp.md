---
{
  "id": "concept.gis-data-automation.gdal-gdalwarp",
  "slug": "gdal-gdalwarp",
  "status": "published",
  "technology": "gis-data-automation",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "gdalwarp",
  "description": "Raster lấy mẫu lại theo CRS đích.",
  "sources": [
    {
      "title": "Tài liệu chính thức: gdalwarp",
      "url": "https://gdal.org/en/stable/programs/gdalwarp.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
gdalwarp -t_srs EPSG:4326 source.tif destination.tif
```

## Tham số

-t_srs là hệ đích; nguồn phải có CRS đúng; tệp đích mới.

## Kết quả

Raster lấy mẫu lại theo CRS đích.

## Thực hành

```text
gdalwarp -t_srs EPSG:4326 cao-do.tif cao-do-wgs84.tif
gdalinfo cao-do-wgs84.tif
```
Kiểm CRS mới và giữ tệp nguồn để đối chiếu.

## Dễ nhầm

Độ phân giải và thuật toán lấy mẫu lại ảnh hưởng giá trị; chọn theo bài toán raster, không mặc định cho mọi DEM.
