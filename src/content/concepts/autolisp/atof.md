---
{
  "id": "concept.autolisp.atof",
  "slug": "atof",
  "title": "atof",
  "description": "Đổi chuỗi số sang số thực.",
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
      "title": "Autodesk — atof",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8618A388-E4CF-40E1-813B-057367DD1840.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(atof str)
```

## Tham số

string: chuỗi biểu diễn số.

## Kết quả

Số thực.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(atof "12.50") ; 12.5
```

## Lỗi thường gặp

Không dùng thay kiểm tra dữ liệu CSV có đơn vị hay dấu phẩy.
