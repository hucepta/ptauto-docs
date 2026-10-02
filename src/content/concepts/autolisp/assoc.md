---
{
  "id": "concept.autolisp.assoc",
  "slug": "assoc",
  "title": "assoc",
  "description": "Tìm mục có khóa tương ứng trong Association List.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "aliases": [
    "association list",
    "alist",
    "dotted pair"
  ],
  "exampleIds": [
    "example.autolisp.doc-assoc"
  ],
  "relatedConceptIds": [
    "concept.autolisp.list"
  ],
  "sources": [
    {
      "title": "Autodesk — assoc (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2016/ENU/AutoCAD-AutoLISP/files/GUID-46309786-DAF6-4C28-8448-599FBC8A4F6A.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "giá-trị-trả-về",
      "exampleIds": [
        "example.autolisp.doc-assoc"
      ]
    }
  ]
}
---

## Cú pháp

    (assoc element alist)

element là khóa cần tìm; alist là danh sách các mục.

## Giá trị trả về

Trả mục tìm được, hoặc nil nếu không có khóa. Với dữ liệu dạng dotted pair, cdr của mục trả về cho bạn phần giá trị.

## Kiểm tra đầu vào

Giữ thống nhất kiểu khóa giữa nơi tạo dữ liệu và nơi tra cứu. Trước khi sử dụng kết quả như số hoặc chuỗi, kiểm tra việc tìm mục có thành công hay không.

