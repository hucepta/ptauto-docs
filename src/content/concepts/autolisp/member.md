---
{
  "id": "concept.autolisp.member",
  "slug": "member",
  "title": "member",
  "description": "Tìm phần tử trong list.",
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
      "title": "Autodesk — member",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A2B08751-D966-44F5-9B02-1AAC4DA6AF59.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(member expr lst)
```

## Tham số

expr: giá trị tìm; list: dữ liệu.

## Kết quả

Đuôi list bắt đầu tại phần tử tìm được hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(member 2 '(1 2 3)) ; (2 3)
```

## Lỗi thường gặp

Kết quả đúng là list, không phải T cố định.
