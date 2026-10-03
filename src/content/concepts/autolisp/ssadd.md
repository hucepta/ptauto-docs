---
{
  "id": "concept.autolisp.ssadd",
  "slug": "ssadd",
  "title": "ssadd",
  "description": "Tạo selection set hoặc thêm entity.",
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
      "title": "Autodesk — ssadd",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-22337977-82F2-4394-B209-39DE2B4B9E86.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ssadd [ename [ss]])
```

## Tham số

ename: entity tùy chọn; ss: tập có sẵn tùy chọn.

## Kết quả

Selection set.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq ss (ssadd)) (ssadd (entlast) ss)
```

## Lỗi thường gặp

Không thêm nil khi bản vẽ chưa có entity.
