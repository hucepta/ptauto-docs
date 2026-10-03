---
{
  "id": "concept.autolisp.dictadd",
  "slug": "dictadd",
  "title": "dictadd",
  "description": "Gắn đối tượng vào dictionary.",
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
      "title": "Autodesk — dictadd",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5931D6D8-7F6E-4773-B08C-DEC5F9C4A22E.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(dictadd ename symbol newobj)
```

## Tham số

ename: dictionary; sym: khóa chuỗi; newobj: ename đối tượng đã tạo.

## Kết quả

Ename đối tượng thêm thành công hoặc nil.

## Ví dụ

Thử biểu thức tại Command Line của DWG học. Với ví dụ dùng `ss`, `record` hoặc đường dẫn file, tạo dữ liệu tương ứng trước khi chạy.

```lisp
(dictadd (namedobjdict) "MY_DATA" record)
```

## Lỗi thường gặp

record phải là đối tượng thích hợp; không dùng entity LINE làm XRecord.

## Chuẩn bị XRecord

Để tạo biến record trong ví dụ, dùng DWG thử và khóa riêng chưa tồn tại:

```lisp
(setq record (entmakex '((0 . "XRECORD")
                         (100 . "AcDbXrecord")
                         (280 . 1)
                         (1 . "ROAD"))))
(if record (dictadd (namedobjdict) "PTA_LEARN_RECORD" record))
```

Trước lần chạy sau, dùng dictsearch kiểm tra khóa đã có. Không thêm cùng đối tượng dưới nhiều khóa; mỗi mục cần thuộc dictionary thích hợp.
