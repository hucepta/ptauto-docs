---
{
  "id": "concept.autolisp.done-dialog",
  "slug": "done-dialog",
  "title": "done_dialog",
  "description": "Đóng dialog và đặt status cho start_dialog trả về.",
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
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A150544E-ACE5-415F-AAB4-930E2715FDC7.htm"
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
(done_dialog [status])
```

## Tham số và kết quả

status tùy chọn: quy ước 1 cho OK, giá trị khác cho nhánh khác. Hàm trả vị trí X/Y của dialog khi đóng; `start_dialog` trả status đã đặt.

## Cách dùng

Nút Cancel gọi done_dialog 0; nút OK chỉ đóng sau khi kiểm dữ liệu.

```lisp
(action_tile "cancel" "(done_dialog 0)")
```

## Kiểm tra khi áp dụng

Kiểm kết quả start_dialog, không suy trạng thái từ text của nút.
