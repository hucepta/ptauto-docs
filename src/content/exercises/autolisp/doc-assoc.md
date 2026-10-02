---
{
  "id": "exercise.autolisp.doc-assoc",
  "slug": "doc-assoc",
  "title": "Đọc dữ liệu theo khóa",
  "description": "Áp dụng assoc và xử lý trường hợp không tìm thấy dữ liệu.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "expectedResult": "Lấy được \"WALL\" cho khóa \"layer\"; khóa \"missing\" trả nil, không gây lỗi.",
  "solutionExampleId": "example.autolisp.doc-assoc",
  "conceptIds": [
    "concept.autolisp.assoc"
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ]
}
---


Tạo Association List chứa ("layer" . "WALL") và ("color" . 3). Viết biểu thức tìm khóa "layer" rồi lấy giá trị.

Thử lại với khóa "missing". Kiểm tra mục tìm được trước khi sử dụng. Đối chiếu hai kết quả với tiêu chí bên dưới, rồi mở lời giải để so sánh cách xử lý nil.

