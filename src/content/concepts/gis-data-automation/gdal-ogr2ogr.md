---
{
  "id": "concept.gis-data-automation.gdal-ogr2ogr",
  "slug": "gdal-ogr2ogr",
  "status": "published",
  "technology": "gis-data-automation",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "ogr2ogr",
  "description": "Một tệp dữ liệu mới theo driver đích.",
  "sources": [
    {
      "title": "Tài liệu chính thức: ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
ogr2ogr -f GPKG destination.gpkg source.gpkg layer
```

## Tham số

Tệp đích đứng trước nguồn; layer chỉ lớp cần sao chép.

## Kết quả

Một tệp dữ liệu mới theo driver đích.

## Thực hành

```text
ogr2ogr -f GPKG coc-copy.gpkg coc.gpkg coc
ogrinfo -ro -so coc-copy.gpkg coc
```
Mở tệp mới và kiểm ba ID như nguồn.

## Dễ nhầm

Chọn đích mới; không dùng -overwrite trên bản gốc. Chuyển định dạng không tự xác minh nguồn CRS.
