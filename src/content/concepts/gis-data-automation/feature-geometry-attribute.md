---
{
  "id": "concept.gis-data-automation.feature-geometry-attribute",
  "slug": "feature-geometry-attribute",
  "title": "Feature, Geometry và Attribute",
  "description": "Tách đối tượng nghiệp vụ, vị trí/hình dạng và bảng thuộc tính trong dữ liệu vector.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.geojson-geopackage"
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
    "đối tượng không gian",
    "hình học",
    "thuộc tính",
    "Layer"
  ],
  "searchableTerms": [
    "Point",
    "LineString",
    "Polygon",
    "vector"
  ],
  "examplePlacements": []
}
---

## Ba thành phần của đối tượng

Feature đại diện một đối tượng cần quản lý. Geometry mô tả vị trí và hình dạng như Point, LineString hoặc Polygon; Attribute mô tả mã, loại, nguồn và giá trị đo. Layer gom Feature theo cấu trúc trường và phạm vi công việc. Với cọc khảo sát, tọa độ là Geometry, còn mã cọc và lý trình là thuộc tính; chúng cần được giữ trong cùng bản ghi để đối chiếu.

## Hình vẽ không tự tạo quan hệ

Hai nhãn CAD gần một đường không đủ xác định nhãn nào thuộc đường đó. Khi chuyển sang GIS, phải có quy tắc liên kết dựa trên mã hoặc nghiệp vụ đã xác nhận. Màu hiển thị và style giúp đọc bản đồ nhưng không thay cho trường phân loại. Geometry đúng vị trí nhưng thiếu mã vẫn có thể không phù hợp quản lý hoặc cập nhật dữ liệu.

## Dùng trong trao đổi

Khai báo loại Geometry, trường bắt buộc và đơn vị trước khi xuất. Kiểm tra số Feature theo loại và các trường null; không biến mọi dữ liệu thiếu thành 0. Ví dụ lớp điểm GeoJSON đi kèm giữ point_id trong properties và Feature id để truy vết. Script chỉ nhận longitude/latitude đã được xác nhận; Geometry không tự biết các số X/Y từ CAD đang thuộc CRS nào.
