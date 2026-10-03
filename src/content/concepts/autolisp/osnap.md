---
{
  "id": "concept.autolisp.osnap",
  "slug": "osnap",
  "title": "osnap",
  "description": "Tính điểm bắt dính gần một điểm.",
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
      "title": "Autodesk — osnap",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-33498AA8-EDC0-45A3-9603-47A3F3510924.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(osnap pt mode)
```

## Tham số

pt: điểm UCS; mode: chuỗi chế độ bắt điểm.

## Kết quả

Điểm UCS hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(osnap '(1 1 0) "_end")
```

## Lỗi thường gặp

Không có đối tượng gần đủ sẽ trả nil.
