---
{
  "id": "lesson.gis-data-automation.gdal-postgis-va-raster",
  "slug": "gdal-postgis-va-raster",
  "title": "GDAL và PostGIS",
  "description": "Biết khi nào dùng file, cơ sở dữ liệu không gian và dữ liệu ô lưới; phân biệt gán CRS với chuyển tọa độ.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.dinh-dang-cong-cu",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.geojson-geopackage-shp-landxml",
    "lesson.gis-data-automation.vn2000-crs-reprojection"
  ],
  "flow": [
    {
      "label": "Nguồn",
      "detail": "Vector tuyến/ống hoặc raster địa hình"
    },
    {
      "label": "Chuyển",
      "detail": "GDAL/OGR xử lý file, PostGIS lưu và hỏi đáp"
    },
    {
      "label": "QA",
      "detail": "Đối chiếu CRS, số feature, geometry và schema"
    }
  ],
  "sources": [
    {
      "title": "GDAL — ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"
    },
    {
      "title": "PostGIS — ST_IsValid",
      "url": "https://postgis.net/docs/ST_IsValid.html"
    },
    {
      "title": "QGIS — Raster Data",
      "url": "https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/raster_data.html"
    },
    {
      "title": "GDAL: ogrinfo",
      "url": "https://gdal.org/en/stable/programs/ogrinfo.html"
    },
    {
      "title": "GDAL: gdalinfo",
      "url": "https://gdal.org/en/stable/programs/gdalinfo.html"
    },
    {
      "title": "PostGIS: version",
      "url": "https://postgis.net/docs/PostGIS_Full_Version.html"
    }
  ],
  "compatibility": [
    {
      "product": "GDAL / PostGIS / QGIS",
      "version": "Ghi phiên bản công cụ và CRS thực tế của dự án",
      "platform": "Windows / macOS / Linux"
    }
  ],
  "illustration": "map"
}
---
<span id="ba-loại-việc-ba-cách-xử-lý" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## GDAL, PostGIS và raster

**Vector** biểu diễn tuyến ống, hố ga và ranh giới bằng feature có geometry + thuộc tính. **Raster** là lưới ô giá trị, thích hợp cho ảnh nền hoặc dữ liệu liên tục như cao độ. `ogr2ogr` của GDAL chuyển định dạng vector và có thể chọn trường, lọc feature hoặc reproject. PostGIS giữ dữ liệu không gian trong cơ sở dữ liệu để truy vấn và QA nhiều lần.

| Câu hỏi | Công cụ phù hợp | Bẫy thường gặp |
|---|---|---|
| “Xuất một lớp ống sang GeoPackage” | GDAL/OGR | Mất tên trường, kiểu trường hoặc CRS nếu không round-trip. |
| “Tìm geometry lỗi trong kho dữ liệu” | PostGIS `ST_IsValid` | Geometry hợp lệ chưa có nghĩa mạng ống nối đúng. |
| “Chồng ảnh địa hình với tuyến” | QGIS/raster tool | Ảnh không có georeference hoặc độ phân giải không phù hợp. |

<span id="thử-một-lô-nhỏ-trước" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra trên lô mẫu

Chọn 3 feature tuyến với ID ổn định, một geometry lỗi và một raster mẫu. Ghi CRS gốc từ metadata hoặc hồ sơ nguồn; nếu không biết CRS, dừng để xác minh. **Gán CRS** chỉ mô tả tọa độ đang có; **reprojection** biến đổi số tọa độ. Trong `ogr2ogr`, `-a_srs` và `-t_srs` tương ứng hai mục đích khác nhau. Sau chuyển đổi, mở đầu ra để so số feature, ID, kiểu geometry, đơn vị và bounding box.

## Thực hành

Lập báo cáo trước/sau cho một GeoPackage: số feature, CRS, năm trường quan trọng và số geometry không hợp lệ. Đưa raster vào cùng canvas, chỉ kiểm tra vị trí tương đối sau khi CRS của cả hai nguồn đã được xác nhận. Nếu một đối tượng mất ID hoặc lệch vị trí, ghi lỗi và không tự động sửa bằng cách chọn EPSG theo cảm tính.

## Kiểm một tệp bằng GDAL

Mở cửa sổ lệnh của môi trường có GDAL. Chạy `ogrinfo -so coc.gpkg coc` để đọc thông tin lớp coc: loại hình, số đối tượng, CRS và các trường. Nếu báo không tìm lệnh, dùng môi trường GDAL đã cài thay vì đưa lệnh này vào Python Script của Dynamo. Kiểm danh sách driver bằng `ogrinfo --formats` trước khi chọn một định dạng.

Với raster, `gdalinfo cao-do.tif` đọc kích thước lưới, CRS, dải dữ liệu và NoData. NoData biểu thị không có mẫu, không tự bằng cao độ 0. Chưa chạy phép chuyển hoặc ghi đè tệp gốc khi chưa kiểm metadata.

PostGIS yêu cầu PostgreSQL có extension PostGIS; SQL `SELECT PostGIS_Full_Version();` kiểm phiên bản. Hàm ST_ là hàm cơ sở dữ liệu SQL, không phải phương thức Shapely. Đặt dữ liệu trong cấu trúc trường thử và dùng truy vấn SELECT trước khi UPDATE/DELETE. Kết quả bài là bảng ghi công cụ/phiên bản, số đối tượng hoặc kích thước raster và thông tin CRS đọc từ nguồn.
