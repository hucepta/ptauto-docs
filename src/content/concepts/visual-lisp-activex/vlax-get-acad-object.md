---
{
  "id": "concept.visual-lisp-activex.vlax-get-acad-object",
  "slug": "vlax-get-acad-object",
  "title": "vlax-get-acad-object",
  "description": "Lấy đối tượng Application của phiên AutoCAD hiện hành.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/CHT/AutoCAD-AutoLISP/files/GUID-62F07541-9663-4D83-B5EE-24D562351FCE.htm"
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
(vlax-get-acad-object)
```

## Tham số và kết quả

Không có đối số. VLA-object Application.

## Cách dùng

Bắt đầu đi từ Application tới ActiveDocument và ModelSpace.

```lisp
(vl-load-com)
(setq app (vlax-get-acad-object))
```

## Kiểm tra khi áp dụng

Chỉ dùng ActiveX trên AutoCAD Windows; không giữ app giữa các phiên.
