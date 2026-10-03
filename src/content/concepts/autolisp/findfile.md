---
{
  "id": "concept.autolisp.findfile",
  "slug": "findfile",
  "title": "findfile",
  "description": "Tìm file theo đường dẫn hoặc đường dẫn hỗ trợ.",
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
      "title": "Autodesk — findfile",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D671F67D-F92B-41FF-B9FA-A48EF52CF607.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(findfile filename)
```

## Tham số

filename: chuỗi tên file.

## Kết quả

Đường dẫn đầy đủ hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(findfile "acad.pgp")
```

## Lỗi thường gặp

File tìm được không đồng nghĩa file được phép nạp theo TRUSTEDPATHS.
