---
{
  "id": "concept.gis-data-automation.schema-stable-id",
  "slug": "schema-stable-id",
  "title": "Schema, field mapping và mã ổn định",
  "description": "Kiểu trường và khóa liên kết giúp dữ liệu còn truy vết được sau lọc, sắp xếp và xuất lại.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.gis-data-automation.feature-geometry-attribute",
    "concept.gis-data-automation.spatial-validity-topology"
  ],
  "exampleIds": [
    "example.gis-data-automation.map-cad-records"
  ],
  "sources": [
    {
      "title": "GDAL — AutoCAD DXF",
      "url": "https://gdal.org/en/stable/drivers/vector/dxf.html"
    },
    {
      "title": "Python — uuid",
      "url": "https://docs.python.org/3/library/uuid.html"
    },
    {
      "title": "Python — json",
      "url": "https://docs.python.org/3/library/json.html"
    }
  ],
  "aliases": [
    "lược đồ dữ liệu",
    "ánh xạ trường",
    "stable identifier"
  ],
  "searchableTerms": [
    "source_id",
    "handle",
    "UUID",
    "foreign key"
  ],
  "examplePlacements": [
    {
      "heading": "định-danh-theo-nguồn-hoặc-nghiệp-vụ",
      "exampleIds": [
        "example.gis-data-automation.map-cad-records"
      ]
    }
  ]
}
---

## cấu trúc trường là hợp đồng dữ liệu

cấu trúc trường quy định tên trường, kiểu, giá trị thiếu và quy tắc chấp nhận. Field ánh xạ chỉ rõ trường nguồn nào tạo trường đích nào và phép chuyển áp dụng. Với station_m, cần số và đơn vị mét; station_label giữ cách trình bày. Mã “0007” là chuỗi, không nên bị chuyển thành 7 rồi dùng làm khóa.

## Định danh theo nguồn hoặc nghiệp vụ

Số hàng không ổn định khi lọc hay sắp xếp. Trong một bản vẽ quản lý, source_id cùng handle giúp truy dấu đối tượng bản vẽ. Handle không tự bền qua tạo lại hoặc sao chép, nên mã tài sản nghiệp vụ vẫn cần quản lý riêng. UUID xác định từ khóa nguồn giúp xuất lại cùng bản ghi ra cùng mã; đầu vào cho khóa phải được chuẩn hóa bằng quy tắc cố định.

## Bảo toàn liên kết

Bảng cọc mang alignment_id thay vì phụ thuộc thứ tự bảng tuyến. Kiểm tra khóa cha tồn tại, mã trùng và trường bắt buộc trước ghi dữ liệu. Giữ schema_version và bảng đối chiếu khi thay đổi cấu trúc trường. Ví dụ ánh xạ đi kèm dùng dictionary đã trích xuất; nó không đọc DWG. Thử đổi thứ tự bản ghi và xác nhận feature_id giữ nguyên, đồng thời hàng trùng khóa được đưa vào rejected.
