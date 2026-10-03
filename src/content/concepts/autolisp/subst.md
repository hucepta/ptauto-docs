---
{
  "id": "concept.autolisp.subst",
  "slug": "subst",
  "title": "subst",
  "description": "Thay phần tử bằng giá trị mới.",
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
      "title": "Autodesk — subst",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-25214E69-090A-45C3-8210-6D9801255E44.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(subst newitem olditem lst)
```

## Tham số

new: giá trị mới; old: giá trị tìm; list: list gốc.

## Kết quả

List sau thay thế.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(subst 99 20 '(10 20 30)) ; (10 99 30)
```

## Lỗi thường gặp

Không sửa list gốc nếu không setq nhận lại kết quả.
