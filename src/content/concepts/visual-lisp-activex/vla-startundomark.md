---
{
  "id": "concept.visual-lisp-activex.vla-startundomark",
  "slug": "vla-startundomark",
  "title": "vla-startundomark",
  "description": "Bắt đầu nhóm thao tác Undo.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Theo phạm vi hỗ trợ trong tài liệu hàm",
      "platform": "Windows"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vla-startundomark",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/AutoCAD-ActiveX-Reference/files/GUID-7C669949-1327-4CFD-96CF-CE65EC38DAA8.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vla-StartUndoMark document)
```

## Tham số

document: VLA Document hiện tại.

## Kết quả

Không có giá trị trả về có ý nghĩa.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
(vla-StartUndoMark doc)
(vla-AddCircle (vla-get-ModelSpace doc) (vlax-3d-point '(0 0 0)) 5.0)
(vla-EndUndoMark doc)
```

## Lỗi thường gặp

Luôn kết thúc nhóm bằng EndUndoMark, kể cả trong nhánh lỗi.
