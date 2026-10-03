---
{
  "id": "concept.gis-data-automation.spatial-validity-topology",
  "slug": "spatial-validity-topology",
  "title": "Spatial validity và topology nghiệp vụ",
  "description": "Hình học hợp lệ từng đối tượng khác với quan hệ đúng giữa các đối tượng.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.crs-datum-projection"
  ],
  "exampleIds": [
    "example.gis-data-automation.qa-linework"
  ],
  "sources": [
    {
      "title": "Shapely — User Manual",
      "url": "https://shapely.readthedocs.io/en/stable/manual.html"
    },
    {
      "title": "Shapely — make_valid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.make_valid.html"
    },
    {
      "title": "PostGIS — ST_IsValid",
      "url": "https://postgis.net/docs/ST_IsValid.html"
    },
    {
      "title": "PostGIS — ST_IsValidReason",
      "url": "https://postgis.net/docs/ST_IsValidReason.html"
    }
  ],
  "aliases": [
    "tính hợp lệ hình học",
    "topology",
    "QA/QC"
  ],
  "searchableTerms": [
    "ST_IsValid",
    "ST_IsValidReason",
    "make_valid",
    "tolerance"
  ],
  "examplePlacements": [
    {
      "heading": "giữ-bản-trước-khi-sửa",
      "exampleIds": [
        "example.gis-data-automation.qa-linework"
      ]
    }
  ]
}
---

## Kiểm tra Geometry riêng lẻ

Spatial validity kiểm tra quy tắc của mô hình hình học, chẳng hạn polygon tự cắt có thể không hợp lệ. PostGIS ST_IsValid trả trạng thái 2D, còn ST_IsValidReason giải thích lý do. Kiểm tra loại, rỗng và giá trị hữu hạn trước xử lý. Đường có hai đỉnh trùng có thể suy biến dù số lượng đỉnh trông đủ.

## Kiểm tra quan hệ của lớp

Topology nghiệp vụ mô tả yêu cầu như ranh không chồng, đường nối đúng đầu hoặc pipe liên kết structure. Từng polygon hợp lệ không bảo đảm toàn lớp không chồng lấn. Shapely xử lý mặt phẳng và bỏ qua Z trong phân tích; hai đường cắt trên XY có thể khác cao độ. Dung sai phải theo đơn vị đã xác nhận và mục đích kiểm tra.

## Giữ bản trước khi sửa

make_valid có thể trả hình học khác loại hoặc nhiều phần. Snap và xóa trùng cũng có thể thay đổi ý nghĩa. Lưu mã lỗi, nguồn và quyết định sửa để đối chiếu. Ví dụ linework thuần Python chỉ sàng lọc đỉnh, chiều dài và mã trùng; nó chưa xác minh tự cắt hay quan hệ lớp. Báo cáo nên nêu cả kiểm tra đã làm và các kiểm tra còn cần công cụ hình học.
