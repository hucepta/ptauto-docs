---
{
  "id": "lesson.gis-data-automation.luu-va-kiem-lai",
  "slug": "luu-va-kiem-lai",
  "chapterId": "chapter.gis-data-automation.bat-dau",
  "status": "published",
  "difficulty": "co-ban",
  "illustration": "map",
  "title": "Lưu và kiểm lại",
  "description": "Bài này xuất lớp ba cọc từ CSV ra GeoPackage, mở lại từ tệp và đối chiếu ID. Kết quả phải là một tệp coc.gpkg có lớp coc và ba đối tượng. Đếm trên lớp nguồn chư",
  "order": 5,
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
<span id="bàn-giao-một-tệp-có-thể-mở-lại" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Lưu và kiểm tra tệp

Bài này xuất lớp ba cọc từ CSV ra GeoPackage, mở lại từ tệp và đối chiếu ID. Kết quả phải là một tệp coc.gpkg có lớp coc và ba đối tượng. Đếm trên lớp nguồn chưa đủ để chứng minh bước ghi thành công.

<span id="xuất-đúng-lớp" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Xuất lớp dữ liệu

1. Trong Layers của QGIS, chọn lớp coc-mau từ CSV, có CRS nguồn EPSG:4326. Bấm chuột phải, chọn **Export > Save Features As** (Xuất > Lưu đối tượng thành).
2. Chọn **Format: GeoPackage**. Ở File name, dùng nút chọn tệp để lưu vào thư mục bài học với tên `coc.gpkg`; ở Layer name (Tên lớp), nhập `coc`.
3. Ở CRS giữ EPSG:4326 cho bài này. Kiểm không bật **Save only selected features** (Chỉ lưu đối tượng đã chọn). Nếu còn chọn C02 từ bài trước mà bật tùy chọn này, đầu ra sẽ chỉ có một đối tượng.
4. Bật **Add saved file to map** (Thêm tệp đã lưu vào bản đồ) nếu có. Bấm OK. Nếu tệp đã tồn tại, chọn tên mới để giữ lần xuất trước cho đối chiếu.

GeoPackage có thể lưu nhiều lớp trong một tệp. Tên tệp và tên lớp là hai thứ khác nhau. Lưu `.qgz` chỉ lưu dự án; nó không thay bước xuất dữ liệu `.gpkg`.

## Đọc lại từ tệp

Bỏ chọn hiển thị lớp CSV gốc bằng ô vuông cạnh tên trong Layers. Dùng **Layer > Add Layer > Add Vector Layer** (Thêm lớp vector), chọn tệp coc.gpkg, bấm Add; nếu có danh sách lớp thì chọn coc. Bạn cũng có thể tìm tệp trong Browser (Bộ duyệt dữ liệu) bên trái rồi kéo lớp coc vào bản đồ.

Bấm chuột phải lớp mới, chọn Zoom to Layer. Mở Attribute Table, kiểm đúng ba dòng C01/C02/C03, cao độ 2.5/2.7/2.6 và không thêm dòng trống. Mở Properties > Information để xác nhận CRS EPSG:4326 và kiểu hình học Point.

<span id="kiểm-lỗi-có-chủ-đích" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra lỗi xuất dữ liệu

Quay lại lớp CSV, chọn chỉ C02, xuất ra một tệp khác `coc-chi-c02.gpkg` với tùy chọn Save only selected features bật. Mở lại: phải có một hàng C02. Thao tác này giúp hiểu vì sao một lần xuất không lỗi vẫn có thể thiếu dữ liệu. Xóa lựa chọn trên lớp nguồn và giữ coc.gpkg ba hàng làm kết quả chuẩn.

Mã cọc cần duy nhất và không rỗng. Số lượng bằng nhau không chứng minh đúng dữ liệu: cần so tập ID, kiểu trường, CRS và vài tọa độ kiểm soát. Một hình hợp lệ cũng có thể sai vị trí do gán CRS nguồn nhầm.

<span id="hồ-sơ-nhỏ-của-bài" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Hồ sơ bàn giao

Giữ coc-mau.csv, coc.gpkg và ba-coc.qgz trong cùng thư mục. Tạo ghi chú nêu nguồn là điểm minh họa WGS84, ba ID mong đợi, ngày xuất và định dạng. Khi mở lại dự án ở máy khác, kiểm đường dẫn nguồn; nếu chỉ gửi .qgz thì người nhận có thể thấy lớp mất nguồn.

Đạt khi bạn mở coc.gpkg trực tiếp, đọc được đúng ba ID và giải thích được phép kiểm nào bắt lỗi chỉ xuất một hàng. Sau đó mới học tự động hóa cùng quy trình bằng GeoPandas.
