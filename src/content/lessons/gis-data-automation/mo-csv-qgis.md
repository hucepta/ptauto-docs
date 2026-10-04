---
{
  "id": "lesson.gis-data-automation.mo-csv-qgis",
  "slug": "mo-csv-qgis",
  "chapterId": "chapter.gis-data-automation.bat-dau",
  "status": "published",
  "difficulty": "co-ban",
  "illustration": "map",
  "title": "Mở điểm trong QGIS",
  "description": "Dùng coc-mau.csv đã tạo ở bài Hiểu dữ liệu GIS. Sau bài này, QGIS phải hiển thị ba điểm và bảng thuộc tính có ba hàng C01/C02/C03. Các bước dùng tên mục giao di",
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
## Đầu vào và kết quả

Dùng coc-mau.csv đã tạo ở bài Hiểu dữ liệu GIS. Sau bài này, QGIS phải hiển thị ba điểm và bảng thuộc tính có ba hàng C01/C02/C03. Các bước dùng tên mục giao diện tiếng Anh để bạn tìm đúng nút; phần trong ngoặc giải thích ý nghĩa.

<span id="chuẩn-bị-cửa-sổ" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Mở QGIS

Mở QGIS Desktop và chọn **Project > New** (Dự án > Mới). Vùng bản đồ ở giữa hiển thị hình học; bảng **Layers** (Các lớp) thường ở bên trái liệt kê nguồn dữ liệu. Nếu không thấy Layers, chọn **View > Panels > Layers Panel** (Xem > Các bảng > Bảng lớp).

Bài không cần bản đồ nền hoặc mạng Internet. Ba điểm và bảng thuộc tính đủ để kiểm kết quả; đừng dùng hình ảnh nền làm nguồn xác nhận hệ tọa độ dự án.

## Nạp CSV thành điểm

1. Trên thanh thực đơn, chọn **Layer > Add Layer > Add Delimited Text Layer** (Lớp > Thêm lớp > Thêm lớp văn bản phân cách). Cửa sổ quản lý nguồn dữ liệu mở tại mục Delimited Text.
2. Ở **File name** (Tên tệp), bấm nút chọn tệp rồi mở coc-mau.csv. Kiểu tệp chọn **CSV**; bảng xem trước phía dưới phải có bốn cột stake_id, x, y, elevation_m.
3. Trong **Geometry definition** (Định nghĩa hình học), chọn **Point coordinates** (Tọa độ điểm). Chọn **X field** là x và **Y field** là y.
4. Ở **Geometry CRS** (Hệ quy chiếu hình học), dùng nút chọn CRS để tìm `EPSG:4326`, chọn **WGS 84**. Đây là CRS nguồn của chính các số mẫu; không phải hệ đích tùy ý.
5. Bấm **Add** (Thêm), rồi **Close** (Đóng). Trong Layers phải có lớp coc-mau.
6. Bấm chuột phải coc-mau trong Layers, chọn **Zoom to Layer** (Thu tới lớp). Ba điểm phải nằm trên một hướng chéo; bấm biểu tượng phóng to nếu cần phân biệt.

<span id="kiểm-bằng-bảng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra bảng thuộc tính

Bấm chuột phải lớp, chọn **Open Attribute Table** (Mở bảng thuộc tính). Kiểm ba hàng, không phải bốn. Dòng tiêu đề CSV không được tính như cọc. Đọc C02: x=106.7005, y=10.7705, elevation_m=2.7. Tổng số đối tượng và số đang lọc/được chọn có thể hiện ở thanh trạng thái bảng; bỏ bộ lọc trước khi đếm tổng.

Bấm một hàng rồi dùng chức năng thu tới đối tượng đã chọn trong bảng để xem chính điểm đó. Cách này liên hệ một bản ghi với một hình học, thay vì chỉ thấy ba chấm không biết mã.

<span id="khi-không-ra-đúng-kết-quả" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Gỡ lỗi

Nếu không có điểm, kiểm đã chọn Point coordinates và đúng cột x/y. Nếu cả dòng gom vào một cột, kiểm dấu phân cách là dấu phẩy. Nếu vị trí vô lý, kiểm thứ tự x/y và CRS nguồn; không sửa bằng cách thử ngẫu nhiên các EPSG. Nếu chỉ thấy một chấm, Zoom to Layer và phóng to trước khi kết luận mất hàng.

Lưu dự án bằng Project > Save As với tên `ba-coc.qgz`. Tệp dự án lưu cách trình bày và đường dẫn nguồn; CSV vẫn là tệp riêng cần giữ cùng thư mục. Bài đạt khi bảng có ba ID duy nhất và bạn chọn được điểm tương ứng C02.
