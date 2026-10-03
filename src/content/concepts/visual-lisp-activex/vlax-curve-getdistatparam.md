---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getdistatparam",
  "slug": "vlax-curve-getdistatparam",
  "title": "vlax-curve-getDistAtParam",
  "description": "Đổi tham số trên curve thành khoảng cách từ đầu curve.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/PTB/AutoCAD-AutoLISP-Reference/files/GUID-8FF6D3D5-7EA5-4E9A-8A61-295C0562E7AE.htm"
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
(vlax-curve-getDistAtParam curve-obj param)
```

## Tham số và kết quả

param là tham số hợp lệ trong miền curve. Real hoặc nil.

## Cách dùng

Lấy tổng chiều dài qua end parameter của curve.

```lisp
(setq end (vlax-curve-getEndParam curve))
(setq len (vlax-curve-getDistAtParam curve end))
```

## Kiểm tra khi áp dụng

Tham số không phải chiều dài; đừng cộng tham số như mét.
