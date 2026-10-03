---
{
  "id": "concept.gis-data-automation.crs-datum-projection",
  "slug": "crs-datum-projection",
  "title": "CRS, datum và projection",
  "description": "Thông tin quy chiếu làm tọa độ có ý nghĩa; tên datum không đủ mô tả một bản vẽ chiếu.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.gis-data-automation.assign-reproject",
    "concept.gis-data-automation.feature-geometry-attribute"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "PROJ — Cartographic projection",
      "url": "https://proj.org/en/stable/usage/projections.html"
    },
    {
      "title": "PROJ — Geodetic transformation",
      "url": "https://proj.org/en/stable/usage/transformation.html"
    },
    {
      "title": "PROJ — Web Mercator / Pseudo Mercator",
      "url": "https://proj.org/en/stable/operations/projections/webmerc.html"
    },
    {
      "title": "GeoPandas — Projections",
      "url": "https://geopandas.org/en/stable/docs/user_guide/projections.html"
    }
  ],
  "aliases": [
    "hệ tọa độ",
    "VN-2000",
    "WGS84",
    "EPSG",
    "phép chiếu"
  ],
  "searchableTerms": [
    "datum",
    "kinh tuyến trục",
    "đơn vị",
    "hệ cao độ"
  ],
  "examplePlacements": []
}
---

## Phân biệt vai trò

CRS mô tả cách diễn giải tọa độ bằng cơ sở quy chiếu, trục và đơn vị. Datum gắn hệ với Trái Đất; projection biến biểu diễn địa lý thành mặt phẳng. EPSG là mã cho định nghĩa cụ thể. Hai bộ dữ liệu cùng dùng mét vẫn có thể khác CRS, nên trùng đơn vị không đủ để chồng lớp.

## Hồ sơ tối thiểu cho CAD

Với nguồn VN-2000, cần biết phép chiếu, kinh tuyến trục, múi, hệ số tỷ lệ, đơn vị và quy ước X/Y. Bản vẽ cục bộ có thể còn có dịch/quay so với lưới đo đạc. Không chọn một EPSG chung chỉ từ nhãn “VN-2000” hoặc độ lớn tọa độ. Ghi rõ điều chưa xác định và yêu cầu hồ sơ nguồn trước chuyển đổi không gian.

## Chọn phép đo phù hợp

Kinh độ/vĩ độ dùng đơn vị góc; chiều dài tính trực tiếp trên các số đó không mặc nhiên là mét. CRS chiếu có biến dạng tùy vị trí và mục đích. Web Mercator không tự đem lại độ chính xác công trình. Hệ cao độ cũng cần xác nhận riêng: CRS ngang đúng chưa chứng minh z_m dùng cùng mốc. Đối chiếu điểm khống chế và dung sai dự án trước khi nhận kết quả.
