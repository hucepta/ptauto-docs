---
{
  "id": "concept.autolisp.max",
  "slug": "max",
  "title": "max",
  "description": "Tìm số lớn nhất.",
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
      "title": "Autodesk — max",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-057C56D3-8A15-406B-95CA-68DD859E64FB.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(max [number number ...])
```

## Tham số

number: các số.

## Kết quả

Số lớn nhất.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(max 3 12 7) ; 12
```

## Lỗi thường gặp

List số cần apply; (max list) không hợp lệ.
