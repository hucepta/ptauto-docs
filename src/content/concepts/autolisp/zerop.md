---
{
  "id": "concept.autolisp.zerop",
  "slug": "zerop",
  "title": "zerop",
  "description": "Kiểm tra bằng 0.",
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
      "title": "Autodesk — zerop",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-3D509EE1-A809-4B78-915C-28ECF483BB72.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(zerop number)
```

## Tham số

number: số.

## Kết quả

T nếu bằng 0, ngược lại nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(zerop 0.0) ; T
```

## Lỗi thường gặp

Kết quả số thực gần 0 nên kiểm tra equal với dung sai.
