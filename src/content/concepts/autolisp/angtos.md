---
{
  "id": "concept.autolisp.angtos",
  "slug": "angtos",
  "title": "angtos",
  "description": "Định dạng góc thành chuỗi.",
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
      "title": "Autodesk — angtos",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C2D277B4-2F59-423F-9C56-E5A1DEFE0CCE.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(angtos angle [unit [precision]])
```

## Tham số

angle: radian; mode: kiểu góc; precision: số chữ số, hai tham số cuối tùy chọn.

## Kết quả

Chuỗi theo kiểu góc và độ chính xác.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(angtos (/ pi 2) 0 2) ; "90.00"
```

## Lỗi thường gặp

Bỏ mode làm kết quả phụ thuộc AUNITS.
