---
{
  "id": "concept.autolisp.lambda",
  "slug": "lambda",
  "title": "lambda",
  "description": "Tạo hàm vô danh.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "syntax",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — lambda",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-3B8BB020-1E1A-4FA3-B7B3-B5B20BA04CD9.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(lambda arguments expr ...)
```

## Tham số

arguments: tham số; expr: thân hàm.

## Kết quả

Biểu thức lambda dùng với apply/mapcar.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(mapcar '(lambda (x) (* x x)) '(2 3)) ; (4 9)
```

## Lỗi thường gặp

Truyền biểu thức lambda vào mapcar cần quote theo mẫu.
