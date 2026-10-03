---
{
  "id": "concept.dynamo-python.list-lacing",
  "slug": "list-lacing",
  "title": "List, nested list và lacing",
  "description": "Cấu trúc nhóm và quy tắc ghép đầu vào quyết định số lượng, quan hệ kết quả.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.dynamo-python.data-flow",
    "concept.dynamo-python.in-out"
  ],
  "exampleIds": [
    "example.dynamo-python.ghep-danh-sach"
  ],
  "sources": [
    {
      "title": "Dynamo Primer — What's a List",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-4_designing-with-lists/1-whats-a-list"
    },
    {
      "title": "Dynamo Primer — Lists of Lists",
      "url": "https://primer2.dynamobim.org/5_essential_nodes_and_concepts/5-4_designing-with-lists/3-lists-of-lists"
    }
  ],
  "aliases": [
    "danh sách lồng",
    "List@Level",
    "replication",
    "Shortest",
    "Longest",
    "Cross Product"
  ],
  "searchableTerms": [
    "Flatten",
    "index",
    "lacing"
  ],
  "examplePlacements": [
    {
      "heading": "chọn-quy-tắc-theo-nghiệp-vụ",
      "exampleIds": [
        "example.dynamo-python.ghep-danh-sach"
      ]
    }
  ]
}
---

## List giữ thứ tự và nhóm

List chứa các item có chỉ số từ 0. Nested list chứa list con, dùng để giữ nhóm như tuyến → cọc. Hai nhóm dài khác nhau là dữ liệu hợp lệ nếu mỗi nhóm biểu diễn một tuyến khác. Flatten thay đổi cấu trúc; nếu bỏ lớp nhóm, cần một khóa tuyến trong mỗi bản ghi để còn biết cọc thuộc tuyến nào.

## Lacing ghép các đầu vào

Với hai danh sách phẳng dài 2 và 3, Shortest ghép theo vị trí thành 2 cặp. Longest tạo 3 cặp, lặp phần tử cuối của list ngắn. Cross Product tạo mọi tổ hợp, tổng 6 cặp. Kết quả cụ thể còn phụ thuộc chữ ký cổng và cấp list node xử lý. Lacing không kiểm tra hai item có thực sự cùng cọc hay cùng tuyến.

## Chọn quy tắc theo nghiệp vụ

Dữ liệu mã cọc và cao độ cần ghép một–một: độ dài khác nhau nên là lỗi, không phải lý do đổi sang Longest. Cross Product phù hợp tạo lưới thử, nhưng dễ tăng dữ liệu theo tích kích thước đầu vào. Ví dụ ghép nghiêm ngặt đi kèm chủ động từ chối list khác độ dài; nó minh họa kiểm tra dữ liệu bằng Python, không mô phỏng mọi chế độ replication của Dynamo.
