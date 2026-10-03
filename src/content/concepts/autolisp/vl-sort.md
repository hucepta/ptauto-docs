---
{
  "id": "concept.autolisp.vl-sort",
  "slug": "vl-sort",
  "title": "vl-sort",
  "description": "Sắp list bằng hàm so sánh.",
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
      "title": "Autodesk — vl-sort",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F3B27BD2-27FA-4185-B22C-85509175C171.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-sort lst comparison-function)
```

## Tham số

list: dữ liệu; comparison-function: hàm trả đúng khi phần tử thứ nhất đứng trước.

## Kết quả

List đã sắp; có thể loại phần tử trùng.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(vl-sort '(3 1 2) '<) ; (1 2 3)
```

## Lỗi thường gặp

Không dùng khi phải giữ mọi bản ghi trùng; xem vl-sort-i.
