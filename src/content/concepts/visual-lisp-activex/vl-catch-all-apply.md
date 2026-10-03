---
{
  "id": "concept.visual-lisp-activex.vl-catch-all-apply",
  "slug": "vl-catch-all-apply",
  "title": "vl-catch-all-apply",
  "description": "Bắt lỗi khi gọi hàm COM hoặc hàm có thể thất bại.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
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
(vl-catch-all-apply 'function argument-list)
```

## Tham số và kết quả

function là symbol/lambda; argument-list là list đối số. Kết quả hàm hoặc đối tượng lỗi để kiểm bằng vl-catch-all-error-p.

## Cách dùng

Gọi getter/setter COM mà không làm cả batch dừng đột ngột.

```lisp
(setq r (vl-catch-all-apply 'vla-get-Layer (list obj)))
(if (vl-catch-all-error-p r) (princ "Lỗi COM") (princ r))
```

## Kiểm tra khi áp dụng

Bắt lỗi không có nghĩa giao dịch CAD tự rollback; ghi rõ phần đã xử lý.
