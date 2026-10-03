---
{
  "id": "lesson.gis-data-automation.geojson-geopackage-shp-landxml",
  "slug": "geojson-geopackage-shp-landxml",
  "title": "Chọn GeoJSON, GeoPackage, Shapefile và LandXML đúng mục đích",
  "description": "So phạm vi dữ liệu, CRS, thuộc tính và quan hệ trước khi chọn định dạng bàn giao.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.dinh-dang-cong-cu",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.gis-data-automation.dinh-dang-thu-vien"
  ],
  "flow": [
    {
      "label": "Nhu cầu",
      "detail": "Xác định bên nhận và dữ liệu cần giữ"
    },
    {
      "label": "Định dạng",
      "detail": "Chọn format theo hỗ trợ/giới hạn"
    },
    {
      "label": "Thử",
      "detail": "Round-trip một mẫu và so schema"
    }
  ],
  "sources": [
    {
      "title": "GeoPandas — Projections",
      "url": "https://docs.geopandas.org/en/stable/docs/user_guide/projections.html"
    }
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Thư viện/CRS theo dự án",
      "platform": "Windows / macOS / Linux"
    }
  ]
}
---

## Đuôi file không quyết định chất lượng

GeoJSON thuận tiện cho trao đổi feature đơn giản nhưng theo RFC 7946 cần tọa độ địa lý WGS84 khi xuất chuẩn. GeoPackage chứa nhiều lớp trong một file và lưu CRS/thuộc tính tốt cho dữ liệu GIS. Shapefile gồm nhiều file đi kèm và có giới hạn tên trường/kiểu dữ liệu; không nên chọn chỉ vì quen thuộc. LandXML phục vụ trao đổi đối tượng hạ tầng như tuyến/surface theo khả năng của phần mềm, không thay thế một cơ sở dữ liệu GIS.

| Mục tiêu | Định dạng nên thử |
| --- | --- |
| Feature điểm/đường với bảng thuộc tính nhiều lớp | GeoPackage |
| Trao đổi đơn giản với web/GIS đã biết CRS | GeoJSON |
| Bàn giao cho hệ thống cũ yêu cầu | Shapefile, kiểm tra giới hạn |
| Hình học thiết kế Civil theo luồng hỗ trợ | LandXML |

## Thực hành

Xuất 3 cọc sang hai định dạng rồi nhập lại. So ID, chữ tiếng Việt, số thập phân, CRS và số đối tượng. Ghi khác biệt vào bảng QA, không xem “mở được file” là đủ.
