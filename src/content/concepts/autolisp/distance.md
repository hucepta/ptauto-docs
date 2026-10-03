---
{
  "id": "concept.autolisp.distance",
  "slug": "distance",
  "title": "distance",
  "description": "Đo khoảng cách hai điểm.",
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
      "title": "Autodesk — distance",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-62F2AA98-1CE4-4E31-A2B7-E2C49A92E38F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(distance pt1 pt2)
```

## Tham số

pt1, pt2: điểm 2D hoặc 3D.

## Kết quả

Số thực khoảng cách.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(distance '(0 0 0) '(3 4 0)) ; 5.0
```

## Lỗi thường gặp

Trộn điểm 2D và 3D có thể làm phép đo bỏ chiều Z.
