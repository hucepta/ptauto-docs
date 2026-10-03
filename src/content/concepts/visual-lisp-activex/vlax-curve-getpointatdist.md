---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getpointatdist",
  "slug": "vlax-curve-getpointatdist",
  "title": "vlax-curve-getPointAtDist",
  "description": "Lấy điểm WCS tại khoảng cách dọc curve.",
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
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-F41FB58A-4645-404E-98B7-D4978A9A790B-htm.html"
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
(vlax-curve-getPointAtDist curve-obj dist)
```

## Tham số và kết quả

curve-obj là VLA curve; dist đo từ đầu curve. List điểm 3D hoặc nil.

## Cách dùng

Đặt mốc cách nhau 20 đơn vị dọc polyline.

```lisp
(setq p (vlax-curve-getPointAtDist curve 20.0))
```

## Kiểm tra khi áp dụng

Khoảng cách dọc curve khác khoảng cách thẳng từ đầu tuyến.
