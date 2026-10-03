---
{
  "id": "concept.gis-data-automation.geojson-geopackage",
  "slug": "geojson-geopackage",
  "title": "GeoJSON và GeoPackage trong bàn giao",
  "description": "Chọn văn bản trao đổi web hoặc container dữ liệu theo loại CRS và thông tin cần giữ.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.gis-data-automation.feature-geometry-attribute",
    "concept.gis-data-automation.assign-reproject"
  ],
  "exampleIds": [
    "example.gis-data-automation.points-to-geojson"
  ],
  "sources": [
    {
      "title": "IETF — RFC 7946: The GeoJSON Format",
      "url": "https://datatracker.ietf.org/doc/html/rfc7946"
    },
    {
      "title": "OGC — GeoPackage Standard",
      "url": "https://www.ogc.org/standards/geopackage/"
    }
  ],
  "aliases": [
    "GeoJSON",
    "GeoPackage",
    "RFC 7946",
    "GPKG"
  ],
  "searchableTerms": [
    "FeatureCollection",
    "longitude",
    "latitude",
    "SQLite"
  ],
  "examplePlacements": []
}
---

## GeoJSON có quy ước tọa độ

GeoJSON mô tả Feature và Geometry bằng JSON. RFC 7946 dùng WGS84 với longitude rồi latitude, đơn vị độ; không dùng tùy ý CRS chiếu trong cùng hợp đồng. Thêm một thuộc tính tên crs không biến tọa độ mét thành GeoJSON tương thích chuẩn. Giữ lý trình, mã và cao độ nghiệp vụ trong properties khi chúng không phải thành phần tọa độ được xác định.

## GeoPackage là container

GeoPackage tuân quy tắc OGC trên SQLite, lưu lớp vector, bảng và các dạng dữ liệu khác theo chuẩn hoặc extension. Nó có cơ chế lưu thông tin CRS của dữ liệu, nên phù hợp bàn giao lớp trong hệ chiếu đã xác nhận. Một file .gpkg vẫn cần được kiểm tra lớp, kiểu trường và extension mà bên nhận hỗ trợ; đuôi file không bảo đảm chất lượng nội dung.

## Lựa chọn và đối chiếu

Dùng GeoJSON khi cần dữ liệu WGS84 dễ đọc và trao đổi web; dùng GeoPackage khi cần nhiều lớp hoặc giữ dữ liệu kỹ thuật trong CRS nguồn. Với cả hai, kiểm tra mã, số Feature và hồ sơ phép chuyển. Ví dụ tạo GeoJSON ở đây chỉ nhận CSV longitude/latitude đã xác nhận. Nó giữ z_m trong properties để tránh coi cao độ Civil chưa rõ mốc là độ cao trên ellipsoid WGS84.
