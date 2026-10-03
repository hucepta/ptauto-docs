---
{
  "id": "concept.autolisp.log",
  "slug": "log",
  "title": "log",
  "description": "Tính logarithm tự nhiên.",
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
      "title": "Autodesk — log",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4B1B6364-B1CB-4CE7-8C8F-706EA829780F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(log num)
```

## Tham số

num: số dương.

## Kết quả

Số thực.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(log 1.0) ; 0.0
```

## Lỗi thường gặp

Không truyền 0 hay số âm.
