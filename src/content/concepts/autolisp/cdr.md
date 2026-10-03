---
{
  "id": "concept.autolisp.cdr",
  "slug": "cdr",
  "title": "cdr",
  "description": "Lấy phần còn lại hoặc giá trị dotted pair.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — cdr",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F9CD8FF3-022A-4323-BAE7-390174451537.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(cdr list)
```

## Tham số

list: list hoặc dotted pair.

## Kết quả

List bỏ phần tử đầu; với pair là phần sau dấu chấm.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(cdr '(8 . "ROAD")) ; "ROAD"
```

## Lỗi thường gặp

cdr list điểm trả list, không phải tung độ; dùng cadr.
