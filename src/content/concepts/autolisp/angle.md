---
{
  "id": "concept.autolisp.angle",
  "slug": "angle",
  "title": "angle",
  "description": "Đo góc giữa hai điểm trong mặt phẳng dựng hình hiện tại.",
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
      "title": "Autodesk — angle",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F28755D4-E89F-43EF-8E76-40518C7E2728.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(angle pt1 pt2)
```

## Tham số

pt1, pt2: hai list điểm.

## Kết quả

Góc radian từ trục X dương.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(angle '(0 0) '(0 10)) ; pi/2
```

## Lỗi thường gặp

Góc trả về là radian, không phải độ.
