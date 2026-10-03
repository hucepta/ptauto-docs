---
{
  "id": "concept.autolisp.entdel",
  "slug": "entdel",
  "title": "entdel",
  "description": "Xóa hoặc khôi phục entity trong phiên bản vẽ.",
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
      "title": "Autodesk — entdel",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-AF320BD5-C83C-4EA0-983E-1EC885F5FC70.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(entdel ename)
```

## Tham số

ename: entity cần xử lý.

## Kết quả

Ename nếu thành công, nil nếu thất bại.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq e (entlast)) (entdel e) (entdel e)
```

## Lỗi thường gặp

Lần gọi thứ hai cùng ename khôi phục entity đã xóa; không coi hàm luôn là xóa.
