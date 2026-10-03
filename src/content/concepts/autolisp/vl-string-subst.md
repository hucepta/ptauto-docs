---
{
  "id": "concept.autolisp.vl-string-subst",
  "slug": "vl-string-subst",
  "title": "vl-string-subst",
  "description": "Thay lần xuất hiện đầu tiên của chuỗi con.",
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
      "title": "Autodesk — vl-string-subst",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D8EE91DC-D4DB-43E0-9AFE-5FA166C0896D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-string-subst new-str pattern str [start-pos])
```

## Tham số

new-str: chuỗi mới; pattern: chuỗi cần thay; str: chuỗi gốc; start-pos: tùy chọn từ 0.

## Kết quả

Chuỗi đã thay.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-string-subst "02" "01" "ROAD-01") ; "ROAD-02"
```

## Lỗi thường gặp

Không tự thay mọi lần xuất hiện.
