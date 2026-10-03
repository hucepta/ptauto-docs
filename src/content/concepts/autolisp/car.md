---
{
  "id": "concept.autolisp.car",
  "slug": "car",
  "title": "car",
  "description": "Lấy phần tử đầu list.",
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
      "title": "Autodesk — car",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-2DD1AF33-415C-4C1A-9631-DA958134C53A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(car list)
```

## Tham số

list: list hoặc nil.

## Kết quả

Phần tử đầu, nil nếu rỗng.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(car '(10 20 30)) ; 10
```

## Lỗi thường gặp

Lấy car của kết quả entsel khi nó nil cần nhánh kiểm tra.
