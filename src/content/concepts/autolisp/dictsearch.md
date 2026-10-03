---
{
  "id": "concept.autolisp.dictsearch",
  "slug": "dictsearch",
  "title": "dictsearch",
  "description": "Tìm mục dictionary theo khóa.",
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
      "title": "Autodesk — dictsearch",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-FCB62959-7C51-41B6-8A0E-1350580F8364.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(dictsearch ename symbol [setnext])
```

## Tham số

ename: dictionary; sym: chuỗi khóa; setnext: tùy chọn điều chỉnh con trỏ dictnext.

## Kết quả

List DXF hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(dictsearch (namedobjdict) "ACAD_GROUP")
```

## Lỗi thường gặp

Khóa trong dictionary khác tên layer trong symbol table.
