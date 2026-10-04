---
{
  "id": "concept.gis-data-automation.term-qgis-project",
  "slug": "term-qgis-project",
  "title": "Project QGIS và nguồn dữ liệu",
  "description": "QGZ giữ cấu hình bản đồ và liên kết tới dữ liệu; lưu project không tự lưu mọi lớp memory.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "QGIS — giao diện ứng dụng",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/qgis_gui.html"
    },
    {
      "title": "QGIS — Getting Started",
      "url": "https://doc.qgis.org/3.44/en/docs/user_manual/introduction/getting_started.html"
    },
    {
      "title": "QGIS — PyQGIS Developer Cookbook: Introduction",
      "url": "https://docs.qgis.org/3.44/en/docs/pyqgis_developer_cookbook/intro.html"
    }
  ],
  "compatibility": [
    {
      "product": "QGIS",
      "version": "3.x; giao diện đối chiếu tài liệu 3.44, chưa thử ứng dụng",
      "platform": "Windows"
    }
  ],
  "technology": "gis-data-automation",
  "difficulty": "co-ban",
  "kind": "term",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Định nghĩa

Project QGIS giữ cách tổ chức bản đồ, lớp, style và những thông tin cấu hình liên quan. Trong buổi đầu, file .qgz dẫn tới lớp được lưu trong .gpkg. GeoPackage chứa feature; project giúp mở lại cách bạn xem và tổ chức feature đó.

## Phép thử từ giao diện

Mở **QGIS Desktop từ Windows Start**, chọn **Project > Open** để mở QGZ. Bấm phải lớp > **Properties > Information/Source** để kiểm tra nguồn. Nếu nguồn là memory, hãy dùng **Export > Save Features As** để lưu lớp xuống đĩa trước khi đóng phiên; Ctrl+S project không thay thế bước này.

Theo [bài chuẩn bị QGIS](/hoc/gis-data-automation/chuan-bi-cong-cu/), lưu điểm thành GeoPackage, giữ lớp đã lưu, rồi Save As project. Đóng project và mở lại để kiểm tra một feature vẫn có trong Attribute Table.

## Khi bàn giao

Giữ dữ liệu nguồn cùng project hoặc bảo đảm đường dẫn vẫn phân giải đúng. Đổi tên lớp hiển thị không đổi tên file nguồn. Một canvas đẹp chưa chứng minh dữ liệu tồn tại bền vững; kiểm tra đường dẫn và mở lại mới làm rõ được điều đó.
