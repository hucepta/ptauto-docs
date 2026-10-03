---
{
  "id": "concept.autolisp.vl-string-search",
  "slug": "vl-string-search",
  "title": "vl-string-search",
  "description": "Tìm chuỗi con.",
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
      "title": "Autodesk — vl-string-search",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4E7AE1DA-1ED5-4D96-A7D3-34241AA94AA6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-string-search pattern str [start-pos])
```

## Tham số

pattern: chuỗi cần tìm; str: chuỗi gốc; start-pos: vị trí từ 0 tùy chọn.

## Kết quả

Vị trí từ 0 hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-string-search "-" "ROAD-01") ; 4
```

## Lỗi thường gặp

Vị trí 0 là kết quả hợp lệ trong AutoLISP.
