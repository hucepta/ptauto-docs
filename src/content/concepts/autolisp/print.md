---
{
  "id": "concept.autolisp.print",
  "slug": "print",
  "title": "print",
  "description": "In giá trị với dòng mới phía trước.",
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
      "title": "Autodesk — print",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4EE74BA9-6ED4-4734-9C47-90A81E0B0971.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(print [expr [file-desc]])
```

## Tham số

expr: giá trị; file-desc: đích tùy chọn.

## Kết quả

Giá trị đã in.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(print '(1 2 3))
```

## Lỗi thường gặp

Khác princ về dấu quote và xuống dòng; chọn đúng cho báo cáo.
