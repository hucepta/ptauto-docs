---
{
  "id": "lesson.autolisp.list-association-list",
  "slug": "list-association-list",
  "title": "List và cặp khóa",
  "description": "Tạo list từ giá trị đang có và đọc dữ liệu theo khóa bằng assoc.",
  "status": "published",
  "chapterId": "chapter.autolisp.ngon-ngu-co-ban",
  "order": 3,
  "difficulty": "co-ban",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "prerequisites": [
    "lesson.autolisp.bien-kieu-du-lieu"
  ],
  "conceptIds": [
    "concept.autolisp.list",
    "concept.autolisp.assoc"
  ],
  "exampleIds": [
    "example.autolisp.tao-list",
    "example.autolisp.doc-assoc"
  ],
  "exerciseIds": [
    "exercise.autolisp.doc-assoc"
  ],
  "sources": [
    {
      "title": "Autodesk — list (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-MAC-AutoLISP-Reference/files/GUID-2BA66308-DE64-4BA6-8F57-6E3EC1A93141.htm"
    },
    {
      "title": "Autodesk — assoc (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2016/ENU/AutoCAD-AutoLISP/files/GUID-46309786-DAF6-4C28-8448-599FBC8A4F6A.htm"
    }
  ],
  "aliases": [
    "danh sách",
    "association list",
    "alist"
  ],
  "examplePlacements": [
    {
      "heading": "tạo-list-từ-biến",
      "exampleIds": [
        "example.autolisp.tao-list"
      ]
    },
    {
      "heading": "đọc-dữ-liệu-theo-khóa",
      "exampleIds": [
        "example.autolisp.doc-assoc"
      ]
    }
  ],
  "illustration": "metadata"
}
---
## Tạo list từ biến

Một điểm 3D có thể được biểu diễn bằng ba tọa độ. Khi tọa độ nằm trong biến, dùng list để gom các giá trị đã được tính. Dấu quote giữ tên biến nguyên dạng, nên không thay thế cho list trong trường hợp này.

Ví dụ “Tạo tọa độ” đi kèm kết hợp x, y và z thành một điểm. Kết quả mong đợi là (10.0 20.0 0.0).

## Đọc dữ liệu theo khóa

Association List là một list gồm các mục có khóa. Với cặp dotted pair như ("layer" . "WALL"), assoc trả cả mục; cdr lấy phần giá trị.

Ví dụ “Đọc thuộc tính theo khóa” đi kèm dùng dữ liệu tự tạo để bạn tập cách tra cứu trước khi đọc dữ liệu thật của bản vẽ. Khóa trong ví dụ là chuỗi; hãy dùng đúng kiểu khóa khi tra cứu.

<span id="kiểm-tra-trường-hợp-không-có-dữ-liệu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Xử lý dữ liệu rỗng

Tra cứu khóa không tồn tại trả nil. Hãy kiểm tra mục tìm được trước khi dùng giá trị trong phép tính hoặc hàm xử lý chuỗi. Bài thực hành đi kèm yêu cầu bạn thử cả khóa có và khóa thiếu.

