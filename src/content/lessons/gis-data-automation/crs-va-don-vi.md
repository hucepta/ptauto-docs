---
{
  "id": "lesson.gis-data-automation.crs-va-don-vi",
  "slug": "crs-va-don-vi",
  "chapterId": "chapter.gis-data-automation.bat-dau",
  "status": "published",
  "difficulty": "co-ban",
  "illustration": "map",
  "title": "CRS và đơn vị",
  "description": "Gán CRS nói cho phần mềm biết số tọa độ hiện có thuộc hệ nào, không thay số. Chuyển CRS tính tọa độ mới theo hệ đích. Hiểu khác biệt này trước khi đo khoảng các",
  "order": 3,
  "sources": [
    {
      "title": "QGIS: dữ liệu vector",
      "url": "https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/vector_data.html"
    },
    {
      "title": "QGIS: mở tệp và CSV",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/managing_data_source/opening_data.html"
    },
    {
      "title": "QGIS: dữ liệu vector",
      "url": "https://docs.qgis.org/3.44/en/docs/user_manual/working_with_vector/vector_properties.html"
    }
  ]
}
---

## Gán khác chuyển

Gán CRS nói cho phần mềm biết số tọa độ hiện có thuộc hệ nào, không thay số. Chuyển CRS tính tọa độ mới theo hệ đích. Hiểu khác biệt này trước khi đo khoảng cách hoặc xuất cho đơn vị khác.

Với lớp coc-mau, x/y là kinh/vĩ độ WGS84 nên nguồn là EPSG:4326. Nếu ta chỉ gán EPSG:3857, số 106.7000 sẽ bị hiểu như mét theo hệ khác và điểm sai vị trí. Muốn có tọa độ hệ đích cần phép chuyển đổi, dùng đúng nguồn ban đầu.

## Đọc CRS nguồn và CRS dự án

Trong bảng Layers của QGIS, bấm chuột phải coc-mau, chọn **Properties** (Thuộc tính). Mở trang **Information** (Thông tin) hoặc **Source** (Nguồn) để đọc hệ quy chiếu của lớp; phải có WGS 84 / EPSG:4326. Đóng cửa sổ sau khi kiểm.

CRS dự án hiện ở góc dưới bên phải cửa sổ QGIS. Bấm vào thông tin này để mở thuộc tính CRS dự án. Thay CRS dự án chủ yếu điều khiển cách các lớp được hiển thị cùng nhau; QGIS có thể chuyển tọa độ khi vẽ. Việc điểm còn xuất hiện đúng trên màn hình không có nghĩa tệp CSV đã được ghi số tọa độ mới.

## Tạo một bản chuyển đổi riêng

Bấm chuột phải coc-mau, chọn **Export > Save Features As** (Xuất > Lưu đối tượng thành). Chọn định dạng **GeoPackage**, tên tệp `coc-hien-thi.gpkg`, tên lớp `coc_3857`. Ở CRS, chọn EPSG:3857, rồi bấm OK để xuất và thêm lớp mới vào bản đồ nếu hộp thoại có tùy chọn này.

EPSG:3857 ở đây dùng để minh họa chuyển đổi cho hiển thị web. Nó không phải lựa chọn mặc định để đo chiều dài hoặc diện tích phục vụ thiết kế; tỷ lệ bị biến dạng theo vị trí. Với bài thực tế cần chọn CRS đo đạc phù hợp hồ sơ dự án.

## Quan sát cái gì đã đổi

Lớp gốc vẫn có CRS EPSG:4326; lớp mới mang EPSG:3857. Hai lớp có thể chồng đúng trên bản đồ vì QGIS chuyển về CRS hiển thị. Mở bảng thuộc tính lớp mới: các cột x/y sao chép từ CSV vẫn là 106.7000/10.7700. Chúng là thuộc tính thường và không tự đổi khi hình học được chuyển.

Để xem tọa độ hình học mới, mở **Field Calculator** (Máy tính trường) từ thanh công cụ bảng thuộc tính, chọn tạo trường ảo dạng số thập phân, tên `geom_x`, biểu thức `$x`. Xem giá trị lớn khác 106.7, rồi tạo `geom_y` bằng `$y` nếu cần. Trường ảo chỉ phục vụ quan sát trong dự án; không dùng thay một quy trình cập nhật thuộc tính bàn giao đã định nghĩa.

## Tự kiểm

Giải thích ba CRS có thể gặp: nguồn CSV, lớp đầu ra và dự án hiển thị. Chỉ rõ vì sao cột x/y cũ chưa phải tọa độ hình học mới. Với dữ liệu thật thiếu CRS, phải xác minh nguồn trước chuyển, không dùng bài mẫu để suy đoán VN-2000.
