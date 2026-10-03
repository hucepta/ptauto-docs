---
{
  "id": "concept.autolisp.getvar",
  "slug": "getvar",
  "title": "getvar",
  "description": "Đọc system variable.",
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
      "title": "Autodesk — getvar",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9C56BEA8-D473-4305-9E17-BEF7630C334D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getvar varname)
```

## Tham số

varname: tên biến chuỗi.

## Kết quả

Giá trị theo kiểu của biến.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(getvar "CLAYER")
```

## Lỗi thường gặp

Đọc tên sai trả nil; không đoán kiểu của mọi biến.
