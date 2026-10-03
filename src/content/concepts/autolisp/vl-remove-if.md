---
{
  "id": "concept.autolisp.vl-remove-if",
  "slug": "vl-remove-if",
  "title": "vl-remove-if",
  "description": "Bỏ phần tử thỏa predicate.",
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
      "title": "Autodesk — vl-remove-if",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9934F630-4697-47BA-84E6-A0430A3346EE.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-remove-if predicate-function lst)
```

## Tham số

predicate: hàm một đối số; list: dữ liệu.

## Kết quả

List còn lại.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-remove-if 'zerop '(0 1 0 2)) ; (1 2)
```

## Lỗi thường gặp

Predicate đúng nghĩa là bỏ; đừng đảo điều kiện lọc.
