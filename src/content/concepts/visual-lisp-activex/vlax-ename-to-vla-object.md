---
{
  "id": "concept.visual-lisp-activex.vlax-ename-to-vla-object",
  "slug": "vlax-ename-to-vla-object",
  "title": "vlax-ename->vla-object",
  "description": "Chuyển entity name từ ssget/entsel thành VLA-object.",
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
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BD451263-76D5-4A93-B50A-3C27E89A0AD4.htm"
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
(vlax-ename->vla-object ename)
```

## Tham số và kết quả

ename là entity name hợp lệ trong bản vẽ. VLA-object để đọc property hoặc gọi method.

## Cách dùng

Đọc Layer, ObjectName hoặc Coordinates của entity vừa chọn.

```lisp
(setq obj (vlax-ename->vla-object (car (entsel))))
```

## Kiểm tra khi áp dụng

Kiểm nil khi Cancel trước khi chuyển; không dùng object đã bị xóa.
