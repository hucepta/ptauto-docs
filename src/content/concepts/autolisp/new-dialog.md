---
{
  "id": "concept.autolisp.new-dialog",
  "slug": "new-dialog",
  "title": "new_dialog",
  "description": "Khởi tạo dialog theo tên định nghĩa trong DCL đã nạp.",
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
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C971FCB7-F552-455D-AC2B-4DCD8A0ADCC1.htm"
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
(new_dialog dlgname dcl-id)
```

## Tham số và kết quả

dlgname là tên dialog; dcl-id từ load_dialog. T khi thành công, nil khi thất bại.

## Cách dùng

Mở dialog rồi mới đăng ký action_tile/set_tile.

```lisp
(if (new_dialog "tool_dialog" dcl-id)
  (action_tile "accept" "(done_dialog 1)"))
```

## Kiểm tra khi áp dụng

Nếu nil, unload_dialog và dừng trước start_dialog.
