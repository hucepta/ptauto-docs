---
{
  "id": "concept.autolisp.cvunit",
  "slug": "cvunit",
  "title": "cvunit",
  "description": "Đổi đơn vị theo tệp acad.unt.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows and Mac OS only"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — cvunit",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-253E72F1-09B8-473E-A51B-B97BE2E29019.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(cvunit value from-unit to-unit)
```

## Tham số

value: số hoặc list số; from, to: tên đơn vị nguồn và đích.

## Kết quả

Giá trị đổi được hoặc nil nếu đơn vị không hợp lệ.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(cvunit 1.0 "meter" "millimeter") ; 1000.0
```

## Lỗi thường gặp

Kiểm tra nil trước khi dùng kết quả làm kích thước.
