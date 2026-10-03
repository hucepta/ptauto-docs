---
{
  "id": "concept.gis-data-automation.gdal-ogrinfo",
  "slug": "gdal-ogrinfo",
  "status": "published",
  "technology": "gis-data-automation",
  "kind": "syntax",
  "difficulty": "trung-cap",
  "title": "ogrinfo",
  "description": "Thông tin lớp, số đối tượng, trường và CRS.",
  "sources": [
    {
      "title": "Tài liệu chính thức: ogrinfo",
      "url": "https://gdal.org/en/stable/programs/ogrinfo.html"
    }
  ]
}
---

## Cú pháp và cổng

```text
ogrinfo -ro -so datasource layer
```

## Tham số

datasource là tệp; layer là tên lớp; -so chỉ đọc tổng quan.

## Kết quả

Thông tin lớp, số đối tượng, trường và CRS.

## Thực hành

```text
ogrinfo -ro -so coc.gpkg coc
```
Với tệp bài đầu, số đối tượng phải bằng 3, kiểu Point và có trường stake_id.

## Dễ nhầm

Phải dùng GDAL đã cài và có driver thích hợp. -ro chọn chỉ đọc; không thêm câu SQL sửa dữ liệu.
