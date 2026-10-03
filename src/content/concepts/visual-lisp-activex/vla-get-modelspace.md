---
{
  "id": "concept.visual-lisp-activex.vla-get-modelspace",
  "slug": "vla-get-modelspace",
  "title": "vla-get-ModelSpace",
  "description": "Lấy collection ModelSpace của Document.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-ActiveX-Reference/files/GUID-5A488EA7-C843-4994-8D66-03B7745EC80D.htm"
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
(vla-get-ModelSpace doc)
```

## Tham số và kết quả

doc là VLA Document hiện hành. VLA collection ModelSpace.

## Cách dùng

Duyệt đối tượng hoặc thêm entity bằng method Add* tương ứng.

```lisp
(setq ms (vla-get-ModelSpace doc))
(vlax-for obj ms (princ (vla-get-ObjectName obj)))
```

## Kiểm tra khi áp dụng

Không nhầm ModelSpace với PaperSpace hay block definition khác.
