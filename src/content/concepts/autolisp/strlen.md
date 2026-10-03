---
{
  "id": "concept.autolisp.strlen",
  "slug": "strlen",
  "title": "strlen",
  "description": "Đếm ký tự chuỗi.",
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
      "title": "Autodesk — strlen",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F16AAC5F-5C87-4DC5-A7B9-BDCD25DC507A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(strlen [str ...])
```

## Tham số

string: một hoặc nhiều chuỗi.

## Kết quả

Tổng số ký tự.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(strlen "ROAD") ; 4
```

## Lỗi thường gặp

Unicode chịu ảnh hưởng LISPSYS và phiên bản; không coi là số byte file.
