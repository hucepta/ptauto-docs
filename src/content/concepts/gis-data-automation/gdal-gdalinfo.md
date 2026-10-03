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

## Cú pháp

```text
gdalinfo dataset
gdalinfo -json dataset
```

`dataset` là raster. Đầu ra mô tả kích thước, vị trí lưới, các band, CRS nếu có và giá trị NoData. `-json` thuận tiện để kiểm các trường dữ liệu trong script. [Tài liệu GDAL: gdalinfo](https://gdal.org/en/stable/programs/gdalinfo.html).

## Tự tạo raster nhỏ rồi đọc

Cần gdalinfo trên PATH với driver AAIGrid. Chạy PowerShell; raster ASCII có hai cột, hai hàng, kích thước ô bằng 1 và một ô thiếu dữ liệu. Không cần tệp cao độ người dùng.

```powershell
$dir = Join-Path ([IO.Path]::GetTempPath()) ("ptauto-raster-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $dir | Out-Null
$src = Join-Path $dir "tiny.asc"
@'
ncols 2
nrows 2
xllcorner 0
yllcorner 0
cellsize 1
NODATA_value -9999
1 2
3 -9999
'@ | Set-Content -LiteralPath $src -Encoding Ascii
$raw = gdalinfo -json $src
if ($LASTEXITCODE -ne 0) { throw "gdalinfo failed" }
$info = ($raw -join "`n") | ConvertFrom-Json
"Size=" + ($info.size -join ",")
"Bands=" + @($info.bands).Count
"NoData=" + $info.bands[0].noDataValue
"UpperLeft=" + ($info.cornerCoordinates.upperLeft -join ",")
"LowerRight=" + ($info.cornerCoordinates.lowerRight -join ",")
"HasCRS=" + ($null -ne $info.coordinateSystem)
```

## Kết quả mong đợi

```text
Size=2,2
Bands=1
NoData=-9999
UpperLeft=0,2
LowerRight=2,0
HasCRS=False
```

Hàng dữ liệu đầu nằm phía trên. Fixture không có tệp .prj nên chưa khai báo CRS; không được suy ra EPSG từ các số 0–2. Kích thước ô 1 cũng chưa có đơn vị vật lý được xác nhận.

## Kiểm tra khi áp dụng

NoData -9999 đánh dấu ô thiếu; không phải cao độ và không được đổi thành 0 khi tính thống kê. CRS ngang nếu có không tự xác định đơn vị giá trị band. Khối này chỉ tạo tệp mới trong thư mục riêng và đọc thông tin, không dùng tùy chọn thống kê có thể tạo metadata phụ. Muốn kiểm đầu ra đầy đủ, chạy `gdalinfo $src` sau khối trên.

Ví dụ chưa chạy tại đây vì không tìm thấy gdalinfo trên PATH. Thư mục fixture được giữ lại để kiểm tra, không ghi đè raster của người dùng.
