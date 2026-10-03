---
{
  "id": "concept.autolisp.equal",
  "slug": "equal",
  "title": "equal",
  "description": "So sánh giá trị, có thể dùng sai số.",
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
      "title": "Autodesk — equal",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7E85CB8F-B4DA-42F3-ABD3-89342A11EF9B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(equal expr1 expr2 [fuzz])
```

## Tham số

expr1, expr2: giá trị; fuzz: sai số số học tùy chọn.

## Kết quả

T hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(equal 1.0 1.000001 0.00001) ; T
```

## Lỗi thường gặp

Không so số thực tính toán bằng độ bằng tuyệt đối khi cần dung sai.
