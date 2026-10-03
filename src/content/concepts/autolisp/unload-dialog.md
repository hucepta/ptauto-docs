---
{
  "id": "concept.autolisp.unload-dialog",
  "slug": "unload-dialog",
  "title": "unload_dialog",
  "description": "Giải phóng DCL đã nạp.",
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
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-101DA923-3246-4518-A45E-22B0E4B84192.htm"
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
(unload_dialog dcl-id)
```

## Tham số và kết quả

dcl-id hợp lệ từ load_dialog. Giải phóng tài nguyên DCL.

## Cách dùng

Giải phóng DCL sau khi `start_dialog` trả status và sau nhánh lỗi nạp dialog.

```lisp
(if (and dcl-id (>= dcl-id 0)) (unload_dialog dcl-id))
```

## Kiểm tra khi áp dụng

Thực hiện ở mọi nhánh sau khi DCL đã nạp thành công.
