---
{
  "id": "concept.autolisp.min",
  "slug": "min",
  "title": "min",
  "description": "Tìm số nhỏ nhất.",
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
      "title": "Autodesk — min",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F401AD55-57B2-4B1A-9704-D7D8D45AE465.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(min [number number ...])
```

## Tham số

number: các số.

## Kết quả

Số nhỏ nhất.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(min 3 12 7) ; 3
```

## Lỗi thường gặp

Kiểm tra list rỗng trước khi apply.
