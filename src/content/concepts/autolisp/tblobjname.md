---
{
  "id": "concept.autolisp.tblobjname",
  "slug": "tblobjname",
  "title": "tblobjname",
  "description": "Lấy ename của mục symbol table.",
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
      "title": "Autodesk — tblobjname",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B75D58C9-8ED9-4025-906A-76B243CD5D8D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(tblobjname table-name symbol)
```

## Tham số

table-name: bảng; symbol: tên mục.

## Kết quả

Ename hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(tblobjname "LAYER" "0")
```

## Lỗi thường gặp

Không dùng ename layer như entity hình học.
