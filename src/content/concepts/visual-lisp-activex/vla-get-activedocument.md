---
{
  "id": "concept.visual-lisp-activex.vla-get-activedocument",
  "slug": "vla-get-activedocument",
  "title": "vla-get-ActiveDocument",
  "description": "Lấy Document đang hoạt động từ Application.",
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
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-3221619A-85E4-470E-AF2E-34048BB3DED5.htm"
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
(vla-get-ActiveDocument app)
```

## Tham số và kết quả

app là VLA Application. VLA Document hiện hành.

## Cách dùng

Đọc ModelSpace hoặc tên bản vẽ đang dùng.

```lisp
(setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
```

## Kiểm tra khi áp dụng

Đừng lưu doc làm biến lâu dài khi người dùng có thể đổi bản vẽ.
