---
{
  "id": "concept.autolisp.caddr",
  "slug": "caddr",
  "title": "caddr",
  "description": "Lấy phần tử thứ ba.",
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
      "title": "Autodesk — caddr",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0E81B9F0-7AAD-4BB4-98EB-378AEBE5C4CF.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(caddr list)
```

## Tham số

list: list cần đọc.

## Kết quả

Phần tử thứ ba hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(caddr '(10 20 5)) ; 5
```

## Lỗi thường gặp

List điểm 2D không có thành phần Z.
