---
{
  "id": "concept.autolisp.tblnext",
  "slug": "tblnext",
  "title": "tblnext",
  "description": "Duyệt symbol table.",
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
      "title": "Autodesk — tblnext",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1720D8DC-5559-4AC1-8A75-3C932834D77C.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(tblnext table-name [rewind])
```

## Tham số

table-name: tên table; rewind: T bắt đầu lại, tùy chọn.

## Kết quả

List dữ liệu mục hoặc nil cuối bảng.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(tblnext "LAYER" T)
```

## Lỗi thường gặp

Lần tiếp theo bỏ T để tiến đến mục sau.
