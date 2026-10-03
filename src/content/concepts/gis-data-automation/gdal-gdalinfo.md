---
{
  "id": "concept.gis-data-automation.gdal-gdalinfo",
  "slug": "gdal-gdalinfo",
  "status": "published",
  "technology": "gis-data-automation",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "gdalinfo",
  "description": "Thông tin kích thước lưới, CRS, dải dữ liệu và NoData.",
  "sources": [
    {
      "title": "Tài liệu chính thức: gdalinfo",
      "url": "https://gdal.org/en/stable/programs/gdalinfo.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
gdalinfo dataset
```

## Tham số

dataset là đường dẫn raster.

## Kết quả

Thông tin kích thước lưới, CRS, dải dữ liệu và NoData.

## Thực hành

```text
gdalinfo cao-do.tif
```
Dùng raster của bạn và ghi kích thước, đơn vị và NoData đọc được; kết quả phụ thuộc tệp nguồn.

## Dễ nhầm

NoData không mặc định là cao độ 0; không suy đơn vị Z từ CRS ngang.
