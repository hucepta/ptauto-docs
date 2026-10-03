---
{
  "id": "lesson.gis-data-automation.mapping-layer-block-attribute",
  "slug": "mapping-layer-block-attribute",
  "title": "Ánh xạ thuộc tính",
  "description": "Giữ ID và quan hệ giữa đối tượng thiết kế và feature GIS.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.ket-noi-cad-gis",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.schema-cad-gis"
  ],
  "flow": [
    {
      "label": "CAD",
      "detail": "Đọc layer, handle, block attribute"
    },
    {
      "label": "Mapping",
      "detail": "Chuẩn hóa schema và ID ổn định"
    },
    {
      "label": "GIS",
      "detail": "Tạo feature, so bản ghi và truy ngược nguồn"
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
  ],
  "illustration": "layers"
}
---

## Một layer không phải một bảng thuộc tính

Trong DWG, tên layer có thể gợi loại đối tượng nhưng không chứa đủ mã cọc, loại ống hay lý trình. Block attribute, XData hoặc bảng ngoài có thể chứa phần còn lại. Trước khi xuất, lập ánh xạ từng trường: nguồn ở đâu, kiểu dữ liệu gì, bắt buộc hay không, đơn vị là gì. Handle hữu ích để truy ngược DWG nguồn, nhưng một stable ID nghiệp vụ nên độc lập khi cần trao đổi lâu dài.

| Trường GIS | Nguồn CAD/Civil | Quy tắc |
| --- | --- | --- |
| `asset_id` | Attribute hoặc bảng mã | Không rỗng, duy nhất |
| `source_handle` | Handle đối tượng bản vẽ | Giữ để truy vết bản vẽ |
| `diameter_mm` | Attribute/kích thước Civil | Chuyển số, xác nhận đơn vị |

## Thực hành

Lập ánh xạ cho 5 block hố ga và 3 line ống. Cố ý để một block thiếu ID và hai ống trùng mã. Report cần chỉ rõ hai loại lỗi và số feature được phép xuất.

## Lập bảng ánh xạ trước khi xuất

Tạo bảng ba dòng minh họa: layer ONG_MUA -> lớp pipe, block GA -> lớp manhole, layer RANH -> lớp boundary. Với pipe ghi rõ nguồn pipe_id, đường kính và đơn vị; với manhole ghi nguồn mã hố ga/cao độ; với boundary ghi ID vùng. Không lấy tên layer làm ID duy nhất vì một layer có nhiều đối tượng.

Chọn ba đối tượng nguồn và ghi handle/ID nguồn, loại hình, giá trị thuộc tính. Trong đầu ra GIS, giữ source_id để tìm lại. Mở bảng thuộc tính QGIS và so từng hàng; nếu một block có attribute thiếu, báo bản ghi lỗi thay vì suy giá trị từ tên block. Hình học và bảng thuộc tính phải cùng số hàng sau lọc.

Khi đường cong thành chuỗi đoạn thẳng, lưu dung sai lấy mẫu. Khi nhiều đối tượng CAD gộp thành một feature, lưu quan hệ các ID nguồn, không âm thầm giữ một ID bất kỳ.
