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
    },
    {
      "title": "Tài liệu chính thức — ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogrinfo.html"
    }
  ]
}
---

## Cú pháp

```text
ogr2ogr -f GPKG destination.gpkg source.geojson
```

Đích đứng trước nguồn. `-f` chọn driver đích; `-nln` đặt tên lớp; `-t_srs` biến đổi tọa độ và gán CRS đích. Chuyển định dạng đơn thuần không tự sửa CRS nguồn. [Tài liệu GDAL: ogr2ogr](https://gdal.org/en/stable/programs/ogr2ogr.html).

## Tạo nguồn rồi chuyển đổi

Cần ogr2ogr, ogrinfo trên PATH, driver GeoJSON/GPKG và dữ liệu phép chiếu PROJ phù hợp. Chạy cả khối PowerShell; nguồn giả lập được định nghĩa là kinh độ/vĩ độ WGS84. Mỗi lần có thư mục mới nên tệp đích chưa tồn tại.

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
$dst = Join-Path $dir "coc-3857.gpkg"
ogr2ogr -f GPKG -nln coc -t_srs EPSG:3857 $dst $src
if ($LASTEXITCODE -ne 0) { throw "ogr2ogr failed" }
ogrinfo -ro -so $dst coc
if ($LASTEXITCODE -ne 0) { throw "ogrinfo failed" }
ogrinfo -ro $dst coc
if ($LASTEXITCODE -ne 0) { throw "ogrinfo failed" }
```

## Kết quả mong đợi

Tệp `coc-3857.gpkg` có lớp `coc`, kiểu Point, hai đối tượng và trường stake_id; CRS đích EPSG:3857. C01 giữ tọa độ `(0, 0)`; C02 có tọa độ x xấp xỉ `111319.490793`, y `0`. Làm tròn ba chữ số: `(111319.491, 0.000)`. ID vẫn là C01 và C02. Số chữ số và nội dung WKT in ra phụ thuộc bản GDAL; không so toàn bộ log như chuỗi cố định.

## CRS và ghi đè

Nguồn GeoJSON ở đây có nghĩa WGS84, không cần thêm `-s_srs`. Chỉ dùng -s_srs khi biết chắc CRS thực của nguồn cần khai báo lại. `-a_srs` gán nhãn CRS đích nhưng không biến đổi tọa độ; không thay cho -t_srs.

Khi đích đã tồn tại, chọn tệp mới hoặc dùng chế độ cập nhật có chủ đích. `-overwrite` xóa lớp đích rồi tạo lại, làm mất nội dung lớp đó; `-append` thêm đối tượng và chạy lại có thể gây trùng. Bài này không dùng hai tùy chọn ấy. EPSG:3857 chỉ minh họa phép chiếu, không phải lựa chọn mặc định cho đo đạc.

Chưa chạy CLI tại đây vì không có GDAL trên PATH; các kết quả là mốc mong đợi theo dữ liệu và phép biến đổi đã nêu.
