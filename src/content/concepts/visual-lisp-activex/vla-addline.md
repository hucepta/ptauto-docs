---
{
  "id": "concept.visual-lisp-activex.vla-addline",
  "slug": "vla-addline",
  "title": "vla-addline",
  "description": "Tạo LINE trong collection.",
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
      "title": "Autodesk — vla-addline",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-ActiveX-Reference/files/GUID-26C95029-14BB-40B9-9987-49EFC980CB9D.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vla-AddLine object StartPoint EndPoint)
```

## Tham số

object: ModelSpace/PaperSpace/Block; StartPoint, EndPoint: Variant điểm WCS ba double.

## Kết quả

VLA object LINE mới.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
(setq ms (vla-get-ModelSpace doc))
(vla-AddLine ms (vlax-3d-point '(0 0 0)) (vlax-3d-point '(10 0 0)))
```

## Lỗi thường gặp

Không truyền ename cho object; collection phải là VLA object.
