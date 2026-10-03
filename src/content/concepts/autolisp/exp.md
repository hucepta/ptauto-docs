---
{
  "id": "concept.autolisp.exp",
  "slug": "exp",
  "title": "exp",
  "description": "Tính e mũ một số.",
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
      "title": "Autodesk — exp",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-FD0C918B-A162-4939-9F4E-FFE8863C3FC8.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(exp num)
```

## Tham số

num: số mũ.

## Kết quả

Số thực.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(exp 0) ; 1.0
```

## Lỗi thường gặp

Số mũ lớn có thể vượt miền số; kiểm tra dữ liệu.
