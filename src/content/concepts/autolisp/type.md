---
{
  "id": "concept.autolisp.type",
  "slug": "type",
  "title": "type",
  "description": "Đọc tên kiểu giá trị.",
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
      "title": "Autodesk — type",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-506C9CC8-B0BD-4A4C-B4C2-006750504509.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(type item)
```

## Tham số

item: giá trị.

## Kết quả

Symbol kiểu như INT, REAL, STR, LIST, ENAME; nil cho nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(type '(10 20)) ; LIST
```

## Lỗi thường gặp

List chứa tọa độ và list DXF đều trả LIST; cần kiểm tra cấu trúc tiếp.
