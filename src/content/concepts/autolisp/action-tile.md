---
{
  "id": "concept.autolisp.action-tile",
  "slug": "action-tile",
  "title": "action_tile",
  "description": "Gắn biểu thức callback cho tile trong dialog đang mở.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk AutoLISP Tutorial",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Tutorials/files/GUID-8715618D-FB61-4428-A4A5-32165A3D8E2F.htm"
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
(action_tile key action-expression)
```

## Tham số và kết quả

key là tên tile; action-expression là chuỗi biểu thức AutoLISP. Đăng ký hành động tile.

## Cách dùng

Đăng ký callback ngắn cho nút OK trước khi gọi `start_dialog`.

```lisp
(action_tile "accept" "(progn (setq value (get_tile \"name\")) (done_dialog 1))")
```

## Kiểm tra khi áp dụng

Callback nên ngắn; tránh gọi `command` hoặc logic sửa DWG từ action expression.
