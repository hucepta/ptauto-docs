---
{
  "id": "concept.autolisp.numberp",
  "slug": "numberp",
  "title": "numberp",
  "description": "Kiểm tra kiểu số.",
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
      "title": "Autodesk — numberp",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1E5B591C-F60B-43CB-8CD8-E729D72B12FC.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(numberp item)
```

## Tham số

item: giá trị.

## Kết quả

T với integer/real, ngược lại nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(numberp "12") ; nil
```

## Lỗi thường gặp

Chuỗi trông giống số vẫn chưa phải số.
