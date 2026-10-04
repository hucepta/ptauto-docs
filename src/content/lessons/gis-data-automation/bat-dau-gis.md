---
{
  "id": "lesson.gis-data-automation.bat-dau-gis",
  "slug": "bat-dau-gis",
  "title": "Hiểu dữ liệu GIS",
  "description": "Hiểu hình học, thuộc tính và CRS qua ba điểm cọc minh họa.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.bat-dau",
  "order": 2,
  "difficulty": "co-ban",
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
  ],
  "compatibility": [
    {
      "product": "QGIS / Python GIS",
      "version": "Đối chiếu thư viện và CRS với dữ liệu dự án",
      "platform": "Windows / macOS / Linux"
    }
  ],
  "illustration": "map",
  "prerequisites": [
    "lesson.gis-data-automation.chuan-bi-cong-cu"
  ]
}
---

Nếu chưa cài hoặc chưa mở công cụ, làm bài [Chuẩn bị công cụ](/hoc/gis-data-automation/chuan-bi-cong-cu/) trước. Các bước bên dưới dùng lại môi trường và thư mục đã tạo ở bài đó.

<span id="một-điểm-cần-những-gì" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Dữ liệu điểm

Một đối tượng GIS gồm hình học và thuộc tính, được đặt trong hệ quy chiếu đã biết. Trước khi chọn thư viện Python, ta cần đọc được một hàng dữ liệu và giải thích vị trí của nó. Bài đầu dùng ba điểm mẫu tưởng tượng, không phải số liệu đo đạc để thiết kế.

| Phần | Ví dụ | Ý nghĩa |
| --- | --- | --- |
| Hình học | Point với hai số x/y | Vị trí điểm |
| Thuộc tính | stake_id=C01, elevation_m=2.5 | Mã và thông tin của cọc |
| CRS | EPSG:4326 | Kinh/vĩ độ WGS84, đơn vị góc |

**CRS** là hệ quy chiếu tọa độ; **EPSG** là danh mục mã hệ quy chiếu. Mã 4326 trong bài được chọn vì số mẫu được viết dưới dạng kinh/vĩ độ. Không dùng nó để gán cho dữ liệu dự án chưa rõ hệ nguồn.

## Điểm, tuyến, vùng và raster

Dữ liệu vector mô tả hình bằng điểm, tuyến và vùng. Point dùng cho cọc; LineString dùng cho tuyến ống; Polygon dùng cho ranh khu đất. Một dòng trong bảng thuộc tính thường ứng với một đối tượng hình học, gọi là feature. Một đối tượng nhiều phần vẫn có thể chỉ là một dòng.

Raster là lưới ô: mỗi ô giữ giá trị như cao độ hoặc màu ảnh. Bảng cọc không tự trở thành raster; đường đồng mức cũng không tự là mô hình cao độ đầy đủ. Chọn loại dữ liệu theo điều cần mô tả.

<span id="tạo-nguồn-mẫu-rõ-ràng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chuẩn bị dữ liệu mẫu

Mở trình soạn văn bản, sao chép nội dung sau và lưu `coc-mau.csv` bằng UTF-8. Chọn kiểu tất cả tệp nếu trình soạn tự thêm `.txt`; xác nhận tên thật là `.csv`.

```csv
stake_id,x,y,elevation_m
C01,106.7000,10.7700,2.5
C02,106.7005,10.7705,2.7
C03,106.7010,10.7710,2.6
```

Tệp có một dòng tiêu đề, ba dòng dữ liệu, bốn cột. x là kinh độ; y là vĩ độ. elevation_m là thuộc tính minh họa theo mét, không tự biến hình học thành điểm 3D hoặc xác định hệ cao độ.

<span id="đọc-trước-khi-mở-phần-mềm" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đọc hồ sơ nguồn

Mỗi ID C01/C02/C03 xuất hiện một lần. Các giá trị x/y dùng dấu chấm thập phân và dấu phẩy ngăn cột. Nếu đổi x/y cho nhau, bảng vẫn có số hợp lệ nhưng điểm sẽ sai vị trí. Nếu đổi CRS nguồn, phần mềm có thể hiểu cùng số theo nghĩa khác mà không báo lỗi.

CAD thường dùng đơn vị bản vẽ; GIS cần biết dữ liệu nằm ở đâu. Một nét đúng hình trên màn hình chưa đủ để chuyển sang vị trí thực địa. Với hồ sơ VN-2000, phải lấy datum, kinh tuyến trục, múi chiếu, đơn vị và thông tin chuyển đổi từ hồ sơ nguồn; tên VN-2000 một mình chưa đủ.

<span id="kết-quả-của-bài" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Bài tập

Giữ tệp CSV để dùng ở bài sau. Tự chỉ ra hàng của C02, giá trị cao độ và cặp kinh/vĩ độ của nó. Nếu bạn giải thích được vì sao elevation_m không phải CRS và vì sao ba ID phải đi cùng ba hình học, bạn đã có mô hình dữ liệu để bắt đầu QGIS.
