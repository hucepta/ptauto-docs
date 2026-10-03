---
{
  "id": "lesson.gis-data-automation.gdal-postgis-va-raster",
  "slug": "gdal-postgis-va-raster",
  "title": "GDAL, PostGIS và raster trong chuỗi bàn giao GIS",
  "description": "Biết khi nào dùng file, cơ sở dữ liệu không gian và dữ liệu ô lưới; phân biệt gán CRS với chuyển tọa độ.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.dinh-dang-cong-cu",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": ["lesson.gis-data-automation.geojson-geopackage-shp-landxml", "lesson.gis-data-automation.vn2000-crs-reprojection"],
  "flow": [
    {"label": "Nguồn", "detail": "Vector tuyến/ống hoặc raster địa hình"},
    {"label": "Chuyển", "detail": "GDAL/OGR xử lý file, PostGIS lưu và hỏi đáp"},
    {"label": "QA", "detail": "Đối chiếu CRS, số feature, geometry và schema"}
  ],
  "sources": [
    {"title": "GDAL — ogr2ogr", "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"},
    {"title": "PostGIS — ST_IsValid", "url": "https://postgis.net/docs/ST_IsValid.html"},
    {"title": "QGIS — Raster Data", "url": "https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/raster_data.html"}
  ],
  "compatibility": [{"product": "GDAL / PostGIS / QGIS", "version": "Ghi phiên bản công cụ và CRS thực tế của dự án", "platform": "Windows / macOS / Linux"}]
}
---

## Ba loại việc, ba cách xử lý

**Vector** biểu diễn tuyến ống, hố ga và ranh giới bằng feature có geometry + thuộc tính. **Raster** là lưới ô giá trị, thích hợp cho ảnh nền hoặc dữ liệu liên tục như cao độ. `ogr2ogr` của GDAL chuyển định dạng vector và có thể chọn trường, lọc feature hoặc reproject. PostGIS giữ dữ liệu không gian trong cơ sở dữ liệu để truy vấn và QA nhiều lần.

| Câu hỏi | Công cụ phù hợp | Bẫy thường gặp |
|---|---|---|
| “Xuất một lớp ống sang GeoPackage” | GDAL/OGR | Mất tên trường, kiểu trường hoặc CRS nếu không round-trip. |
| “Tìm geometry lỗi trong kho dữ liệu” | PostGIS `ST_IsValid` | Geometry hợp lệ chưa có nghĩa mạng ống nối đúng. |
| “Chồng ảnh địa hình với tuyến” | QGIS/raster tool | Ảnh không có georeference hoặc độ phân giải không phù hợp. |

## Thử một lô nhỏ trước

Chọn 3 feature tuyến với ID ổn định, một geometry lỗi và một raster mẫu. Ghi CRS gốc từ metadata hoặc hồ sơ nguồn; nếu không biết CRS, dừng để xác minh. **Gán CRS** chỉ mô tả tọa độ đang có; **reprojection** biến đổi số tọa độ. Trong `ogr2ogr`, `-a_srs` và `-t_srs` tương ứng hai mục đích khác nhau. Sau chuyển đổi, mở output để so số feature, ID, kiểu geometry, đơn vị và bounding box.

## Bài luyện

Lập báo cáo trước/sau cho một GeoPackage: số feature, CRS, năm trường quan trọng và số geometry không hợp lệ. Đưa raster vào cùng canvas, chỉ kiểm tra vị trí tương đối sau khi CRS của cả hai nguồn đã được xác nhận. Nếu một đối tượng mất ID hoặc lệch vị trí, ghi lỗi và không tự động sửa bằng cách chọn EPSG theo cảm tính.
