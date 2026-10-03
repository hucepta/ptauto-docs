---
{
  "id": "concept.autolisp.entget",
  "slug": "entget",
  "title": "entget",
  "description": "Đọc association list DXF của entity.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-12540DAE-C84B-4BDB-AEEC-DDFE5BE3C42A.htm"
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
(entget ename [applist])
```

## Tham số và kết quả

ename là entity name; applist tùy chọn chọn XData theo ứng dụng. Association list mã DXF và giá trị.

## Cách dùng

Đọc layer mã 8 và handle mã 5 trước khi kiểm quy tắc.

```lisp
(setq ed (entget ename))
(setq layer (cdr (assoc 8 ed)))
```

## Kiểm tra khi áp dụng

Kiểm ename trước khi gọi; mã trong entget không hoàn toàn giống DXF file.
