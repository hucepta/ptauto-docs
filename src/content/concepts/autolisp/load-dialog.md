---
{
  "id": "concept.autolisp.load-dialog",
  "slug": "load-dialog",
  "title": "load_dialog",
  "description": "Nạp file DCL và trả ID để mở hộp thoại.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP-Reference/files/GUID-B5E4E72B-BD59-4E5E-8FBF-345DFC45A7EC.htm"
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
(load_dialog dclfile)
```

## Tham số và kết quả

dclfile là tên/đường dẫn file DCL. ID dương khi thành công, số âm khi không nạp được.

## Cách dùng

Nạp giao diện trước new_dialog.

```lisp
(setq dcl-id (load_dialog "tool.dcl"))
(if (< dcl-id 0) (princ "Không nạp được DCL"))
```

## Kiểm tra khi áp dụng

Kiểm ID âm và đường dẫn tìm kiếm, không gọi new_dialog mù.
