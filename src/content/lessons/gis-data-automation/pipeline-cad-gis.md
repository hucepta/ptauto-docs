---
{
  "id": "lesson.gis-data-automation.pipeline-cad-gis",
  "slug": "pipeline-cad-gis",
  "title": "Quy trình CAD–GIS",
  "description": "Ghép hồ sơ CRS, mapping, sàng lọc hình học và bàn giao để tạo quy trình nhỏ có thể kiểm tra.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.qa-pipeline",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.schema-cad-gis",
    "lesson.gis-data-automation.etl-spatial-qa"
  ],
  "conceptIds": [
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.assign-reproject",
    "concept.gis-data-automation.spatial-validity-topology",
    "concept.gis-data-automation.geojson-geopackage"
  ],
  "exampleIds": [
    "example.gis-data-automation.map-cad-records",
    "example.gis-data-automation.qa-linework",
    "example.gis-data-automation.points-to-geojson"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "GDAL — AutoCAD DXF",
      "url": "https://gdal.org/en/stable/drivers/vector/dxf.html"
    },
    {
      "title": "GDAL — ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"
    },
    {
      "title": "GeoPandas — GeoDataFrame.set_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.set_crs.html"
    },
    {
      "title": "GeoPandas — GeoDataFrame.to_crs",
      "url": "https://geopandas.org/en/stable/docs/reference/api/geopandas.GeoDataFrame.to_crs.html"
    },
    {
      "title": "pyproj — Transformer",
      "url": "https://pyproj4.github.io/pyproj/stable/api/transformer.html"
    },
    {
      "title": "OGC — GeoPackage Standard",
      "url": "https://www.ogc.org/standards/geopackage/"
    }
  ],
  "compatibility": [
    {
      "product": "GIS",
      "version": "Nguyên lý dữ liệu; CRS, driver và phiên bản thư viện cần xác nhận cho từng bộ dữ liệu"
    }
  ],
  "tags": [
    "GIS",
    "CAD–GIS",
    "dữ liệu không gian"
  ],
  "examplePlacements": [
    {
      "heading": "chuẩn-bị-hồ-sơ-và-cấu-trúc-trường",
      "exampleIds": [
        "example.gis-data-automation.map-cad-records"
      ]
    },
    {
      "heading": "chạy-qa-trước-chuyển-hệ",
      "exampleIds": [
        "example.gis-data-automation.qa-linework"
      ]
    },
    {
      "heading": "biến-đổi-và-xuất-có-kiểm-soát",
      "exampleIds": [
        "example.gis-data-automation.points-to-geojson"
      ]
    }
  ],
  "illustration": "map"
}
---

## Đặt phạm vi cho một lớp trước

Bắt đầu với lớp tim tuyến gồm đường và mã nguồn từ một bản vẽ. Xác định ModelSpace, layer được chọn và cách xử lý block hoặc đường cong trước bước trích xuất. Dùng công cụ CAD hoặc driver đã đối chiếu để xuất DXF/bảng; ghi phiên bản và những đối tượng bản vẽ bị bỏ qua. File chuyển đổi không đủ để chứng minh đã giữ trọn mô hình Corridor hoặc trắc dọc.

## Chuẩn bị hồ sơ và cấu trúc trường

Tạo hồ sơ nguồn gồm source_id, ngày xuất, đơn vị, loại Geometry và định nghĩa CRS đã xác nhận. Với nguồn VN-2000, yêu cầu tham số đầy đủ thay vì chọn một EPSG chung. Định nghĩa ánh xạ từ handle/layer sang mã nguồn và lớp nghiệp vụ; giữ bảng liên kết để lần xuất sau đối chiếu được. Mẫu ánh xạ dùng bản ghi dictionary đã trích xuất, tạo feature_id ổn định trong cùng nguồn. Thay đổi tên file không nên tự tạo source_id mới nếu bộ nguồn vẫn là cùng một bản vẽ quản lý.

## Chạy QA trước chuyển hệ

Kiểm tra trường bắt buộc, mã trùng, các đỉnh và chiều dài trên đơn vị đã biết. Đưa hàng lỗi vào rejected với mã quy tắc; không bỏ hàng khỏi báo cáo. Bước sàng lọc Python đi kèm chỉ kiểm tra đường ở mức cơ bản. Dùng Shapely hoặc PostGIS cho validity và quy tắc không gian cần thêm. Đối chiếu số Feature theo lớp, tổng chiều dài và mẫu đối tượng với CAD, lưu ý chiều dài đã lấy mẫu đường cong có thể khác giá trị thiết kế.

## Biến đổi và xuất có kiểm soát

Nếu nguồn đã có tọa độ đúng nhưng thiếu metadata, gán CRS đã xác minh. Nếu đích khác CRS nguồn, dùng to_crs hoặc Transformer để tính tọa độ mới; ghi phép biến đổi, thứ tự trục và dữ liệu phụ trợ cần thiết. always_xy điều khiển thứ tự tham số, không xác nhận CRS hay chất lượng chuyển. Kiểm tra điểm khống chế và khu vực áp dụng của phép biến đổi. Giao GeoPackage khi cần giữ lớp chiếu phục vụ kỹ thuật; chỉ tạo GeoJSON WGS84 sau chuyển đổi phù hợp. Không dùng Web Mercator để suy ra độ chính xác công trình.

## Đối chiếu bộ bàn giao

Bộ giao gồm dữ liệu accepted, rejected, hồ sơ CRS/cấu trúc trường và báo cáo tổng. Mở đầu ra bằng công cụ GIS khác và so mã, phạm vi, đơn vị cùng vài vị trí đã biết. Thử lại cùng đầu vào để xác nhận ID không đổi; thêm một đối tượng bản vẽ và kiểm tra chỉ xuất hiện mã mới tương ứng. Ghi rõ bước nào đã chạy trong CAD, bước nào chỉ xử lý bảng và kiểm tra nào còn thiếu. Thực hành đạt khi có thể giải thích từng Feature từ nguồn tới đích.
