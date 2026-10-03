---
{
  "id": "concept.autolisp.start-dialog",
  "slug": "start-dialog",
  "title": "start_dialog",
  "description": "Hiển thị dialog và chờ người dùng đóng bằng done_dialog.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk AutoLISP Reference",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/AutoCAD-AutoLISP-Reference/files/GUID-A96C28B5-4B9A-4EE8-8C46-808F14217777.htm"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```lisp
(start_dialog)
```

## Tham số và kết quả

Không có đối số; cần new_dialog thành công. Trả status do done_dialog thiết lập.

## Cách dùng

Tách nhánh OK và Cancel trước khi ghi dữ liệu.

```lisp
(setq status (start_dialog))
(if (= status 1) (princ "OK") (princ "Cancel"))
```

## Kiểm tra khi áp dụng

Luôn unload_dialog sau khi kết thúc; không tái dùng giá trị nhập sau Cancel.
