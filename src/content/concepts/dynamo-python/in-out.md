---
{
  "id": "concept.dynamo-python.in-out",
  "slug": "in-out",
  "title": "IN và OUT trong Python node",
  "description": "Nhận dữ liệu theo cổng và trả một kết quả có cấu trúc rõ ràng cho graph.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "relatedConceptIds": [
    "concept.dynamo-python.data-flow",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "exampleIds": [
    "example.dynamo-python.chuan-hoa-ban-ghi",
    "example.dynamo-python.qa-csv-coc"
  ],
  "sources": [
    {
      "title": "DynamoDS — Python and Civil 3D",
      "url": "https://github.com/DynamoDS/DynamoPrimerNew/blob/master/dynamo-for-civil-3d/advanced-topics/python-and-civil-3d.md"
    },
    {
      "title": "Python — Data Structures",
      "url": "https://docs.python.org/3/tutorial/datastructures.html"
    },
    {
      "title": "Python — Errors and Exceptions",
      "url": "https://docs.python.org/3/tutorial/errors.html"
    }
  ],
  "aliases": [
    "cổng Python",
    "Python Script",
    "IN[0]",
    "OUT"
  ],
  "searchableTerms": [
    "list",
    "dictionary",
    "accepted",
    "rejected"
  ],
  "examplePlacements": [
    {
      "heading": "trả-dữ-liệu-có-cấu-trúc",
      "exampleIds": [
        "example.dynamo-python.chuan-hoa-ban-ghi"
      ]
    }
  ]
}
---

## Đọc cổng theo chỉ số

IN là collection đầu vào do Python node cung cấp; IN[0] lấy cổng đầu tiên. Đặt tên biến theo nghiệp vụ ngay sau khi đọc, rồi kiểm tra kiểu và cấu trúc. Một cổng có thể mang cả bảng hai chiều, không phải mỗi hàng ứng với một cổng. Thiếu cổng hoặc thiếu cấu hình là lỗi của hợp đồng graph và nên dừng với thông báo rõ.

## Trả dữ liệu có cấu trúc

Gán OUT bằng giá trị muốn đưa về graph. Dùng list cho chuỗi có thứ tự và dictionary cho bản ghi theo khóa. Báo cáo có thể gồm accepted, rejected và counts để phía sau quyết định có xuất hay không. Không trả xen lẫn DBObject và số vào một list nếu các node sau chỉ hiểu dữ liệu thuần.

## Chọn phạm vi lỗi

Lỗi một hàng cần giữ số hàng, mã nguồn và lý do; lỗi toàn bảng như thiếu header cần dừng trước vòng lặp. Tránh bắt mọi exception rồi trả list rỗng, vì người đọc sẽ tưởng nguồn không có dữ liệu. Các ví dụ kèm bài dùng Python 3 và thư viện chuẩn. Chúng cần IN trong Dynamo; để thử ngoài host, người thử phải cấp cùng dữ liệu đầu vào, không suy rằng script đã đọc bản vẽ.
