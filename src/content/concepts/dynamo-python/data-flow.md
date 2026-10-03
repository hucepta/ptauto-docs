---
{
  "id": "concept.dynamo-python.data-flow",
  "slug": "data-flow",
  "title": "Node và data flow",
  "description": "Đầu vào, đầu ra và kiểu dữ liệu tạo nên hợp đồng giữa các node.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.dynamo-python.list-lacing",
    "concept.dynamo-python.in-out"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "Dynamo Primer — Data",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-3_the-building-blocks-of-programs/1-data"
    },
    {
      "title": "Dynamo Primer — Graph Strategies",
      "url": "https://primer2.dynamobim.org/9_best_practices/1-graph-strategies"
    }
  ],
  "aliases": [
    "luồng dữ liệu",
    "node",
    "visual programming"
  ],
  "searchableTerms": [
    "Watch",
    "Boolean",
    "null",
    "Geometry"
  ],
  "examplePlacements": []
}
---

## Ý nghĩa của node và dây

Node biểu diễn một phép xử lý; cổng mô tả giá trị nhận hoặc trả. Dây nối đưa kết quả của node trước thành đầu vào phụ thuộc của node sau. Canvas là cách trình bày chương trình: kéo node sang phải không đổi thứ tự dữ liệu nếu dây vẫn giữ nguyên. Tách nhóm theo đọc, kiểm tra và xuất giúp thấy nơi lỗi bắt đầu.

## Kiểu dữ liệu tại ranh giới

Một số 12, chuỗi “12” và list chứa 12 là ba đầu vào khác nhau. Boolean mô tả điều kiện, còn null biểu thị thiếu kết quả tùy thao tác. Hình học Dynamo và đối tượng ứng dụng chủ có vai trò khác: Point dùng để tính hình học không tự mang mã cọc hay CRS. Khi gặp lỗi, đọc cổng yêu cầu loại gì và quan sát giá trị thực tế bằng Watch.

## Cách kiểm tra

Đặt ba câu hỏi tại mỗi ranh giới: mỗi phần tử nghĩa là gì, có bao nhiêu phần tử và đơn vị nào được dùng? Ví dụ bảng cọc cần cùng số mã và tọa độ; nếu một nhánh lọc mất hàng, các list có thể còn nhìn hợp lý nhưng ghép sai. Giữ bản ghi nguyên khối và quan sát cả dữ liệu hợp lệ lẫn lỗi trước khi xuất.
