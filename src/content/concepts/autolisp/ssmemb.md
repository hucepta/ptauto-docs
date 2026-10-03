---
{
  "id": "concept.autolisp.ssmemb",
  "slug": "ssmemb",
  "title": "ssmemb",
  "description": "Kiểm tra entity thuộc tập chọn.",
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
      "title": "Autodesk — ssmemb",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8F291146-6A1A-4A31-9380-C800590BF27D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(ssmemb ename ss)
```

## Tham số

ename: entity; ss: tập chọn.

## Kết quả

Ename nếu entity thuộc tập, nil nếu không.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(ssmemb (entlast) ss)
```

## Lỗi thường gặp

Kết quả thành công là ename, không phải số chỉ mục.
