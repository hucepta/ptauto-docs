---
{
  "id": "concept.autolisp.ssdel",
  "slug": "ssdel",
  "title": "ssdel",
  "description": "Bỏ entity khỏi selection set.",
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
      "title": "Autodesk — ssdel",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F84DB8CE-B535-453D-977D-AE9D7AD2D7AA.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ssdel ename ss)
```

## Tham số

ename: entity; ss: selection set.

## Kết quả

Tập đã sửa hoặc nil nếu entity không thuộc tập.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(ssdel (ssname ss 0) ss)
```

## Lỗi thường gặp

Chỉ bỏ khỏi tập chọn, không xóa entity trong DWG.
