---
{
  "id": "concept.gis-data-automation.loi-khoi-dong-qgis-python",
  "slug": "loi-khoi-dong-qgis-python",
  "title": "Python QGIS báo thiếu module hoặc mất điểm sau mở lại",
  "description": "Phân biệt Python Console với terminal ngoài QGIS và dữ liệu memory với GeoPackage đã lưu.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "QGIS — Python Console",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/plugins/python_console.html"
    },
    {
      "title": "QGIS — PyQGIS Developer Cookbook: Introduction",
      "url": "https://docs.qgis.org/3.44/en/docs/pyqgis_developer_cookbook/intro.html"
    },
    {
      "title": "QGIS — giao diện ứng dụng",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/introduction/qgis_gui.html"
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
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.gis-data-automation.term-qgis-project"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Hai nhóm triệu chứng

**No module named qgis** thường xuất hiện khi chạy bằng Python ngoài môi trường QGIS. **Project mở lại mất lớp** có thể do lớp memory chưa được lưu thành dữ liệu bền vững. Cài Python riêng không giải quyết cả hai tình huống.

## Kiểm tra từ giao diện

1. Từ Windows Start mở **QGIS Desktop**, Project > Open mở QGZ thử. Chọn **Plugins > Python Console**. Chạy import trong Console này theo [bài chuẩn bị](/hoc/gis-data-automation/chuan-bi-cong-cu/), không trong PowerShell hoặc Python độc lập.
2. Nếu iface.activeLayer() là None, nhấp đúng tên lớp trong Layers rồi đọc lại. Bấm phải lớp > Open Attribute Table để xác nhận số feature.
3. Trong Properties > Information/Source, kiểm tra source có là memory không. Nếu có, dùng **Export > Save Features As > GeoPackage**, thêm lớp đã lưu vào project, xác nhận dữ liệu rồi bỏ lớp memory thử.
4. Project > Save As lưu QGZ, đóng project và mở lại. Nếu nguồn bị lỗi, kiểm tra file GPKG và đường dẫn; đừng sửa CRS để chữa file không tồn tại.

## Kết quả cần thấy

Một feature còn tồn tại sau mở lại; nguồn chỉ tới GeoPackage trên đĩa; Console đọc đúng lớp hoạt động. Ghi phiên bản QGIS và đường dẫn hai file để người hỗ trợ có thể phân biệt vấn đề môi trường với vấn đề lưu dữ liệu.
