---
{
  "id": "concept.autolisp.repeat",
  "slug": "repeat",
  "title": "repeat",
  "description": "Lặp một số lần cố định.",
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
      "title": "Autodesk — repeat",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-413F72B4-BA37-4E5E-9D51-A0091130A317.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(repeat int [expr ...])
```

## Tham số

int: số lượt nguyên; expr: thân vòng lặp.

## Kết quả

Kết quả biểu thức cuối hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(repeat 3 (princ "\nKiem tra"))
```

## Lỗi thường gặp

Muốn dùng chỉ số phải tự tăng biến đếm.
