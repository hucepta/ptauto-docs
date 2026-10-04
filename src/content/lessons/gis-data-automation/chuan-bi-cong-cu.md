---
{
  "id": "lesson.gis-data-automation.chuan-bi-cong-cu",
  "slug": "chuan-bi-cong-cu",
  "title": "Cài QGIS và Python Console",
  "description": "Cài QGIS, nhận diện map/layer, tạo một điểm bằng Python có sẵn rồi lưu cả dữ liệu và project.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "QGIS — tải bộ cài chính thức",
      "url": "https://qgis.org/download/"
    },
    {
      "title": "QGIS — Getting Started",
      "url": "https://doc.qgis.org/3.44/en/docs/user_manual/introduction/getting_started.html"
    },
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
    },
    {
      "title": "Python — bài mở đầu của Python Tutorial",
      "url": "https://docs.python.org/3/tutorial/introduction.html"
    }
  ],
  "compatibility": [
    {
      "product": "QGIS",
      "version": "3.x; giao diện đối chiếu tài liệu 3.44, chưa thử ứng dụng",
      "platform": "Windows"
    }
  ],
  "chapterId": "chapter.gis-data-automation.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [
    "concept.gis-data-automation.term-qgis-project",
    "concept.gis-data-automation.loi-khoi-dong-qgis-python"
  ],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "illustration": "map",
  "flow": [
    {
      "label": "Chuẩn bị",
      "detail": "Chọn đúng ứng dụng, phiên bản và thư mục học."
    },
    {
      "label": "Mở và lưu",
      "detail": "Nhận diện cửa sổ, tạo đầu vào thử và lưu file."
    },
    {
      "label": "Kiểm tra",
      "detail": "Chạy thao tác nhỏ rồi đối chiếu kết quả quan sát được."
    }
  ]
}
---
## Mục tiêu

Bạn sẽ tạo một điểm thử trong QGIS, nhìn thấy nó ở Layers và trên bản đồ, rồi lưu dữ liệu thành GeoPackage và project thành QGZ. Đây là hai loại file khác nhau. Tập thói quen kiểm tra việc mở lại từ đầu giúp tránh tình trạng có project nhưng mất dữ liệu tạm.

## Tải QGIS; phân biệt Python đi kèm

Mở trình duyệt từ Windows Start, vào [QGIS Download](https://qgis.org/download/). Chọn mục Windows và bộ cài standalone phù hợp. QGIS là phần mềm mã nguồn mở; không cần giấy phép Autodesk để học phần này. Nếu trang cung cấp bản ổn định hoặc LTR, đọc mô tả rồi chọn bản phù hợp với máy; ghi lại số phiên bản sau cài thay vì đoán từ tên nút Download. Kiểm tra dung lượng và Windows được bộ cài hỗ trợ trước khi bắt đầu.

Bộ QGIS cung cấp môi trường Python dùng cho Python Console/PyQGIS. **Không cần cài Python riêng** để tạo điểm trong bài này. Python cài độc lập hữu ích cho script CSV chạy ngoài QGIS, nhưng không tự nhận module qgis; đó là phần cấu hình khác. Bạn chưa cần GDAL riêng, database server, plugin cộng đồng hay VS Code để hoàn thành buổi đầu.

## Mở ứng dụng và nhận diện màn hình

1. Nhấn Windows, gõ **QGIS Desktop**, chọn biểu tượng của bản đã cài. Chờ cửa sổ ứng dụng hiện ra. Từ menu **Project > New**, tạo project trống.
2. Nhận diện menu ở trên; toolbar có biểu tượng folder để mở và đĩa mềm để lưu; **Layers** là danh sách lớp, **Browser** để duyệt nguồn dữ liệu; **Map Canvas** ở giữa để xem hình. Status bar phía dưới thể hiện tọa độ, tỷ lệ và CRS của project.
3. Nếu thiếu Layers, chọn **View > Panels > Layers**. Trong bài này không cần bản đồ nền Internet. Canvas trống không phải lỗi khi chưa có lớp dữ liệu.

## Mở Python Console

Chọn **Plugins > Python Console**, hoặc Ctrl+Alt+P. Console có ô input để gõ và vùng output để đọc. Dấu nhắc **>>>** thuộc giao diện; không sao chép nó vào mã. Mã dưới chạy trong QGIS, không dán vào Command Line của AutoCAD hoặc Terminal PowerShell.

Nhập từng dòng rồi Enter. Dòng tạo layer quy định điểm và CRS EPSG:4326; tọa độ thử dùng kinh độ trước, vĩ độ sau. Đây chỉ là điểm minh họa, không phải vị trí thiết kế hay dữ liệu khảo sát được xác nhận.

~~~python
from qgis.core import QgsVectorLayer, QgsFeature, QgsGeometry, QgsPointXY, QgsProject
layer = QgsVectorLayer("Point?crs=EPSG:4326", "Diem thu", "memory")
point = QgsFeature()
point.setGeometry(QgsGeometry.fromPointXY(QgsPointXY(106.7, 10.8)))
layer.dataProvider().addFeatures([point])
layer.updateExtents()
QgsProject.instance().addMapLayer(layer)
print(layer.isValid(), layer.featureCount())
~~~

Mong đợi Console in **True 1** và Layers có **Diem thu**. Bấm phải Diem thu, chọn **Zoom to Layer** để đưa điểm vào vùng nhìn. Bấm phải tiếp và chọn **Open Attribute Table**; bảng phải có một feature. Không đoán dữ liệu đã đúng chỉ vì nhìn thấy một chấm trên canvas.

## Lưu dữ liệu trước, lưu project sau

Layer hiện tại là **memory**, nên không coi Ctrl+S project là đã lưu điểm lâu dài. Bấm phải Diem thu trong Layers, chọn **Export > Save Features As**. Trong Format chọn **GeoPackage**, dùng nút duyệt bên cạnh File name, tạo folder Documents/PTAutoHoc rồi đặt **diem-dau-tien.gpkg**. Giữ CRS đầu ra EPSG:4326 cho bài thử, đặt tên layer **diem**, bật thêm layer đã lưu vào map nếu có tùy chọn, rồi bấm OK.

Trong Layers, kiểm tra lớp từ GeoPackage xuất hiện. Bấm phải lớp memory cũ, chọn **Remove Layer** để tránh nhầm hai lớp trùng hình. Chỉ làm việc này sau khi lớp đã lưu có đủ một feature. Chọn **Project > Save As**, lưu **ban-do-dau-tien.qgz** cùng folder. QGZ giữ cấu hình project và liên kết đến dữ liệu; GeoPackage giữ feature.

## Mở lại và đối chiếu

Chọn Project > New, rồi Project > Open, chọn ban-do-dau-tien.qgz. Bấm phải lớp diem > Zoom to Layer, mở Attribute Table và xác nhận một feature. Trong Python Console, nhập **print(QgsProject.instance().fileName())** để xem đường dẫn project hiện tại. Lưu ghi chú về phiên bản QGIS, tên file và CRS.

## Gỡ lỗi

Console báo NameError: nhập lại dòng import. Báo No module named qgis trong Terminal khác: quay về Python Console của QGIS. Có layer nhưng không thấy điểm: Zoom to Layer rồi kiểm tra số feature. Mở lại project thấy lớp lỗi: kiểm tra đường dẫn GeoPackage và việc đã export trước khi đóng. Hướng dẫn đối chiếu tài liệu QGIS, không khẳng định đã thử trên bản cài của bạn.

Tiếp tục với [phiếu kiểm tra một điểm đã lưu](/du-an/gis-data-automation/buoi-dau-mot-diem-gpkg/).
