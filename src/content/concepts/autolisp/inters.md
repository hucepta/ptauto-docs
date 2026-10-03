---
{
  "id": "concept.autolisp.inters",
  "slug": "inters",
  "title": "inters",
  "description": "Tìm giao hai đường thẳng.",
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
      "title": "Autodesk — inters",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A181D474-F817-4550-86E9-87649262FA8A.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(inters pt1 pt2 pt3 pt4 [onseg])
```

## Tham số

pt1, pt2: đường thứ nhất; pt3, pt4: đường thứ hai; onseg: T hoặc bỏ qua để giới hạn đoạn, nil để kéo dài.

## Kết quả

Điểm giao hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(inters '(0 0) '(10 10) '(0 10) '(10 0)) ; (5 5)
```

## Lỗi thường gặp

Hai đường song song không có điểm giao; phải kiểm tra nil.
