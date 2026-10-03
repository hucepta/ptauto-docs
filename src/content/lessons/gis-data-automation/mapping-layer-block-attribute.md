---
{
  "id": "lesson.gis-data-automation.mapping-layer-block-attribute",
  "slug": "mapping-layer-block-attribute",
  "title": "Mapping layer, block và thuộc tính khi chuyển CAD–GIS",
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

Trong DWG, tên layer có thể gợi loại đối tượng nhưng không chứa đủ mã cọc, loại ống hay lý trình. Block attribute, XData hoặc bảng ngoài có thể chứa phần còn lại. Trước khi xuất, lập mapping từng trường: nguồn ở đâu, kiểu dữ liệu gì, bắt buộc hay không, đơn vị là gì. Handle hữu ích để truy ngược DWG nguồn, nhưng một stable ID nghiệp vụ nên độc lập khi cần trao đổi lâu dài.

| Trường GIS | Nguồn CAD/Civil | Quy tắc |
| --- | --- | --- |
| `asset_id` | Attribute hoặc bảng mã | Không rỗng, duy nhất |
| `source_handle` | Handle entity | Giữ để truy vết bản vẽ |
| `diameter_mm` | Attribute/kích thước Civil | Chuyển số, xác nhận đơn vị |

## Thực hành

Lập mapping cho 5 block hố ga và 3 line ống. Cố ý để một block thiếu ID và hai ống trùng mã. Report cần chỉ rõ hai loại lỗi và số feature được phép xuất.
