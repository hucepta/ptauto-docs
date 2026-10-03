---
{
  "id": "concept.autolisp.abs",
  "slug": "abs",
  "title": "abs",
  "description": "Lấy trị tuyệt đối.",
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
      "title": "Autodesk — abs",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-3AF854D7-9B75-4A4B-ABA4-E47DB90FB2F6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(abs number)
```

## Tham số

number: số nguyên hoặc thực.

## Kết quả

Số không âm cùng kiểu đầu vào.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(abs -12.5) ; 12.5
```

## Lỗi thường gặp

Không dùng để đổi chuỗi số; cần atof trước.
