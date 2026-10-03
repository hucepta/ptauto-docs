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

## Cú pháp

```text
ogrinfo -ro -so datasource layer
```

`datasource` là nguồn vector; `layer` là tên lớp. `-ro` mở chỉ đọc, `-so` hiện tổng quan, không liệt kê từng đối tượng. Dùng `-al` nếu cần xem mọi lớp mà chưa biết tên. [Tài liệu GDAL: ogrinfo](https://gdal.org/en/stable/programs/ogrinfo.html).

## Tự tạo dữ liệu và đọc

Cần ogrinfo đã cài, chạy được trên PATH và có driver GeoJSON. Mở PowerShell, chạy nguyên khối; mỗi lần tạo một thư mục tạm mới và không cần dữ liệu người dùng.

```powershell
$dir = Join-Path ([IO.Path]::GetTempPath()) ("ptauto-gdal-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $dir | Out-Null
$src = Join-Path $dir "coc.geojson"
@'
{"type":"FeatureCollection","name":"coc","features":[
{"type":"Feature","properties":{"stake_id":"C01"},"geometry":{"type":"Point","coordinates":[0,0]}},
{"type":"Feature","properties":{"stake_id":"C02"},"geometry":{"type":"Point","coordinates":[1,0]}}
]}
'@ | Set-Content -LiteralPath $src -Encoding Ascii
ogrinfo -ro -so $src coc
if ($LASTEXITCODE -ne 0) { throw "ogrinfo failed" }
```

## Kết quả mong đợi

Trong đầu ra tổng quan phải có các trường sau:

```text
Layer name: coc
Geometry: Point
Feature Count: 2
Extent: (0.000000, 0.000000) - (1.000000, 0.000000)
stake_id: String (0.0)
```

Driver mở nguồn là GeoJSON; mô tả CRS là WGS84, tương ứng EPSG:4326. Cách in WKT, thứ tự trục trong WKT và thông báo mở tệp có thể khác theo phiên bản GDAL. Dữ liệu fixture dùng tọa độ GeoJSON theo thứ tự kinh độ, vĩ độ. Muốn xem ID và hình học, chạy thêm `ogrinfo -ro $src coc`: phải có C01 tại POINT (0 0) và C02 tại POINT (1 0).

## Kiểm tra khi áp dụng

ogrinfo kiểm tra schema, số lượng, phạm vi và nhãn CRS, không tự chứng minh CRS nguồn thực sự đúng. Lệnh ở đây không ghi đè dữ liệu; chỉ Set-Content tạo fixture trong thư mục mới. Thư mục tạm được giữ lại để xem lại.

Ví dụ CLI đã đối chiếu tài liệu; chưa chạy tại đây vì không tìm thấy ogrinfo trên PATH.
