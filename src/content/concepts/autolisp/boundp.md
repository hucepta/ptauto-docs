---
{
  "id": "concept.autolisp.boundp",
  "slug": "boundp",
  "title": "boundp",
  "description": "Kiểm tra symbol đã có giá trị khác nil.",
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
      "title": "Autodesk — boundp",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F8491426-8505-4390-825F-CACE15EBB48F.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(boundp sym)
```

## Tham số

sym: symbol cần kiểm tra.

## Kết quả

T nếu symbol có giá trị; nil nếu chưa có hoặc bằng nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(setq count 3) (boundp 'count) ; T
```

## Lỗi thường gặp

Không dùng để phân biệt biến chưa gán với biến được gán nil.
