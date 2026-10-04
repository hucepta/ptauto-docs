---
{
  "id": "project.gis-data-automation.buoi-dau-mot-diem-gpkg",
  "slug": "buoi-dau-mot-diem-gpkg",
  "title": "Lưu một điểm vào GeoPackage",
  "description": "Mở lại project, kiểm tra số feature, CRS và đường dẫn nguồn của điểm thử bằng giao diện QGIS.",
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
      "title": "QGIS — Python Console",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/plugins/python_console.html"
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
  "expectedResult": "Một feature trong lớp GeoPackage vẫn mở được sau khi đóng project; nhật ký ghi QGZ, GPKG, CRS và số lượng.",
  "prerequisites": [
    "lesson.gis-data-automation.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.gis-data-automation.term-qgis-project"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Điều kiện và phạm vi

Hoàn thành [chuẩn bị QGIS và Python Console](/hoc/gis-data-automation/chuan-bi-cong-cu/), giữ ban-do-dau-tien.qgz và diem-dau-tien.gpkg. Bài này dùng dữ liệu đã tạo để luyện kiểm tra file lưu, không cần tải bản đồ nền hay cài Python riêng.

## Từng bước từ màn hình đầu

1. Nhấn Windows, mở **QGIS Desktop**. Chọn **Project > Open**, duyệt tới PTAutoHoc/ban-do-dau-tien.qgz. Layers phải có lớp diem từ GeoPackage; nếu thiếu panel, dùng **View > Panels > Layers**.
2. Bấm phải lớp diem, chọn **Properties**. Trong **Information/Source** theo bản cài, đọc đường dẫn nguồn và CRS. Mong đợi nguồn là diem-dau-tien.gpkg, CRS EPSG:4326. Ghi đúng đường dẫn bạn thấy; không đoán từ tên lớp.
3. Đóng Properties. Bấm phải lớp, chọn **Open Attribute Table**. Xác nhận một feature tổng cộng; không chỉ nhìn số feature được chọn. Đóng bảng rồi bấm phải lớp > **Zoom to Layer**, kiểm tra một điểm trong canvas.
4. Chọn **Plugins > Python Console**. Nhấp tên lớp diem trong Layers để đặt lớp đang hoạt động rồi nhập từng dòng:

~~~python
layer = iface.activeLayer()
print(layer.isValid(), layer.featureCount())
print(layer.crs().authid())
~~~

5. Mong đợi **True 1** và **EPSG:4326**. So Console với Attribute Table và Properties; các phép kiểm tra cần cùng trỏ tới lớp đang hoạt động.
6. **Project > Save**, rồi **Project > New**. Mở lại QGZ, làm lại bước 2–4 để chứng minh dữ liệu không chỉ tồn tại trong memory của phiên trước.

## Nghiệm thu

Nhật ký ghi tên QGZ, nguồn GPKG, CRS và số feature bằng 1 sau khi mở lại. Project giữ cách tổ chức bản đồ; GeoPackage chứa dữ liệu. Giữ hai file cùng folder khi học và kiểm tra lại liên kết sau khi di chuyển.

Nếu layer là None, nhấp đúng lớp trước khi chạy Console. Nếu source còn là memory, quay về bài chuẩn bị để Export > Save Features As. Nếu điểm ngoài vùng nhìn, Zoom to Layer. EPSG:4326 trong bài chỉ mô tả điểm thử; không dùng việc gán CRS để chữa tọa độ thiết kế không rõ hệ quy chiếu.
