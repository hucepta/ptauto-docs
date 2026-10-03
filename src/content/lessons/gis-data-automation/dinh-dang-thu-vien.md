---
{
  "id": "lesson.gis-data-automation.dinh-dang-thu-vien",
  "slug": "dinh-dang-thu-vien",
  "title": "Chọn tệp và công cụ",
  "description": "So sánh định dạng trao đổi và xác định công cụ theo hình học, thuộc tính, CRS và dữ liệu cần giữ.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.dinh-dang-cong-cu",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.schema-cad-gis"
  ],
  "conceptIds": [
    "concept.gis-data-automation.geojson-geopackage",
    "concept.gis-data-automation.assign-reproject"
  ],
  "exampleIds": [
    "example.gis-data-automation.points-to-geojson"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "GDAL — CAD: AutoCAD DWG",
      "url": "https://gdal.org/en/stable/drivers/vector/cad.html"
    },
    {
      "title": "GDAL — AutoCAD DXF",
      "url": "https://gdal.org/en/stable/drivers/vector/dxf.html"
    },
    {
      "title": "GDAL — ESRI Shapefile / DBF",
      "url": "https://gdal.org/en/stable/drivers/vector/shapefile.html"
    },
    {
      "title": "OGC — GeoPackage Standard",
      "url": "https://www.ogc.org/standards/geopackage/"
    },
    {
      "title": "IETF — RFC 7946: The GeoJSON Format",
      "url": "https://datatracker.ietf.org/doc/html/rfc7946"
    },
    {
      "title": "GDAL — KML",
      "url": "https://gdal.org/en/stable/drivers/vector/kml.html"
    },
    {
      "title": "GDAL — GeoTIFF File Format",
      "url": "https://gdal.org/en/stable/drivers/raster/gtiff.html"
    },
    {
      "title": "Autodesk — Civil 3D 2026: LandXML Export Settings",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-UserGuide/files/GUID-6B18C936-2397-4583-9EB5-481DB08C69CD.htm"
    },
    {
      "title": "Shapely — User Manual",
      "url": "https://shapely.readthedocs.io/en/stable/manual.html"
    },
    {
      "title": "pyproj — Transformer",
      "url": "https://pyproj4.github.io/pyproj/stable/api/transformer.html"
    },
    {
      "title": "GDAL — ogr2ogr",
      "url": "https://gdal.org/en/stable/programs/ogr2ogr.html"
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
      "heading": "thực-hành-xuất-một-lớp-điểm",
      "exampleIds": [
        "example.gis-data-automation.points-to-geojson"
      ]
    }
  ],
  "illustration": "report"
}
---

## Chọn theo thông tin cần giữ

Một định dạng thuận tiện cho hiển thị chưa chắc giữ được mô hình thiết kế. Lập danh sách Geometry, Attribute, CRS, đơn vị, cao độ và quan hệ cha–con phải bàn giao. Sau chuyển đổi, kiểm tra những mục đó thay vì chỉ mở file thấy có hình. Với đường cong được lấy mẫu thành đoạn thẳng, ghi quy tắc lấy mẫu và sai số cho phép. Dữ liệu nguồn vẫn cần được lưu để đối chiếu khi định dạng đích không biểu diễn được toàn bộ.

## Hiểu nhóm định dạng phổ biến

| Định dạng | Vai trò và điểm cần kiểm tra |
| --- | --- |
| DWG / DXF | DWG giữ cấu trúc CAD; DXF trao đổi đối tượng bản vẽ. Khả năng đọc DWG phụ thuộc driver. DXF qua OGR không cung cấp sẵn georeferencing. |
| SHP | Bộ file vector, đi cùng DBF và thường có PRJ. Kiểm tra giới hạn tên trường, kiểu dữ liệu và encoding. |
| GeoJSON | Văn bản Feature/Geometry/Attribute thuận tiện trao đổi web; RFC 7946 quy định WGS84 và longitude/latitude. |
| GeoPackage | Container SQLite có quy tắc OGC cho dữ liệu không gian và bảng; phù hợp giao nhiều lớp có metadata CRS. |
| CSV | Bảng đơn giản; cần cấu trúc trường và hồ sơ tọa độ riêng nếu chứa X/Y. |
| KML / KMZ | KML thường phục vụ trình bày địa lý; KMZ đóng gói KML và tài nguyên. Kiểm tra khả năng bảo toàn thuộc tính. |
| GeoTIFF | Raster có thông tin địa lý; kiểm tra band, NoData, độ phân giải và hệ cao độ. |
| LandXML | Trao đổi một số dữ liệu kỹ thuật Civil; phạm vi và tùy chọn xuất/import phụ thuộc sản phẩm. |

## Phân công thư viện đúng phạm vi

GDAL/OGR đọc, ghi và chuyển nhiều định dạng; driver có trong bản cài đặt quyết định khả năng thực tế. GeoPandas quản lý bảng gắn Geometry và các thao tác theo lớp. Shapely xử lý hình học phẳng; pyproj dùng PROJ cho CRS và biến đổi tọa độ. PostGIS đưa dữ liệu không gian và truy vấn vào PostgreSQL. Các công cụ bổ sung nhau, không thay thế toàn bộ Civil API. Thư viện chuẩn Python đủ làm CSV/JSON nhưng không tự đọc DWG hoặc xác minh đầy đủ topology.

## Thực hành xuất một lớp điểm

Ví dụ đi kèm nhận CSV đã được xác nhận là WGS84 longitude/latitude, kiểm tra mã, số hữu hạn và khoảng giá trị rồi tạo FeatureCollection. Cao độ Civil được giữ trong properties vì chưa biết hệ cao độ để dùng làm tọa độ thứ ba của GeoJSON. Script không reprojection. Thử đổi cột sang x_m/y_m: phải dừng vì sai cấu trúc trường. Với nguồn VN-2000, hoàn thành hồ sơ CRS và chọn phép biến đổi trước khi đưa dữ liệu vào ví dụ.
