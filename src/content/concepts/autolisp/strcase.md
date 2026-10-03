---
{
  "id": "concept.autolisp.strcase",
  "slug": "strcase",
  "title": "strcase",
  "description": "Đổi hoa hoặc thường.",
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
      "title": "Autodesk — strcase",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-108DCD2C-6597-4548-856D-937787AFE5E0.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(strcase string [which])
```

## Tham số

string: chuỗi; which: T đổi thường, bỏ qua/nil đổi hoa.

## Kết quả

Chuỗi mới.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(strcase "road") ; "ROAD"
```

## Lỗi thường gặp

Không dùng đổi hoa làm mất cách viết tên gốc trong báo cáo.
