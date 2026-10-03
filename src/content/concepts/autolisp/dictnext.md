---
{
  "id": "concept.autolisp.dictnext",
  "slug": "dictnext",
  "title": "dictnext",
  "description": "Duyệt mục của dictionary.",
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
      "title": "Autodesk — dictnext",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8596E2E9-FEB5-4995-ADE4-31287864C0CB.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(dictnext ename [rewind])
```

## Tham số

ename: dictionary; rewind: T để bắt đầu lại, tùy chọn.

## Kết quả

Dữ liệu DXF của mục kế tiếp hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(dictnext (namedobjdict) T)
```

## Lỗi thường gặp

Lần gọi sau bỏ rewind; luôn T sẽ quay về mục đầu.
