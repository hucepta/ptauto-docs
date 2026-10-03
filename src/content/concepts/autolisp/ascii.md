---
{
  "id": "concept.autolisp.ascii",
  "slug": "ascii",
  "title": "ascii",
  "description": "Lấy mã ký tự đầu chuỗi.",
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
      "title": "Autodesk — ascii",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-03E1B586-72CB-4AB6-A151-B581AE530318.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ascii str)
```

## Tham số

string: chuỗi có ký tự cần đọc.

## Kết quả

Số nguyên mã ký tự; Unicode phụ thuộc LISPSYS.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(ascii "A") ; 65
```

## Lỗi thường gặp

Không dùng ascii để lấy toàn bộ ký tự của chuỗi.
