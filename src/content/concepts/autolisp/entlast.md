---
{
  "id": "concept.autolisp.entlast",
  "slug": "entlast",
  "title": "entlast",
  "description": "Lấy entity chính cuối bản vẽ.",
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
      "title": "Autodesk — entlast",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-75DBA9B2-034B-4377-A4E2-21D37B298D86.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(entlast)
```

## Tham số

Không có tham số.

## Kết quả

Ename entity cuối chưa bị xóa hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(entlast)
```

## Lỗi thường gặp

Không trả mọi subentity như ATTRIB cuối block.
