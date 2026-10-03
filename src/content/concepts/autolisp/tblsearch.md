---
{
  "id": "concept.autolisp.tblsearch",
  "slug": "tblsearch",
  "title": "tblsearch",
  "description": "Tìm mục symbol table.",
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
      "title": "Autodesk — tblsearch",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-2AEB84A6-E3D0-4DD9-A29C-54D4099ED925.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(tblsearch table-name symbol [setnext])
```

## Tham số

table-name: bảng; symbol: tên mục; setnext: tùy chọn.

## Kết quả

List DXF hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(tblsearch "LAYER" "0")
```

## Lỗi thường gặp

Tìm thấy tên layer chưa có nghĩa layer cho phép ghi.
