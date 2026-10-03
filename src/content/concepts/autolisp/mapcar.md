---
{
  "id": "concept.autolisp.mapcar",
  "slug": "mapcar",
  "title": "mapcar",
  "description": "Áp dụng hàm theo phần tử các list.",
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
      "title": "Autodesk — mapcar",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8802AE73-1A05-457E-8A51-09677C23E26E.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(mapcar function list1... listn)
```

## Tham số

function: hàm; list: một hoặc nhiều list đầu vào.

## Kết quả

List kết quả, dừng theo list ngắn nhất.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(mapcar '+ '(1 2) '(10 20)) ; (11 22)
```

## Lỗi thường gặp

List không cùng chiều dài làm mất phần tử ở cuối list dài.
