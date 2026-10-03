---
{
  "id": "concept.visual-lisp-activex.vla-addcircle",
  "slug": "vla-addcircle",
  "title": "vla-addcircle",
  "description": "Tạo CIRCLE trên mặt phẳng XY WCS.",
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
      "title": "Autodesk — vla-addcircle",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-ActiveX-Reference/files/GUID-837C702F-91A7-445B-8713-3099B94664BE.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vla-AddCircle object Center Radius)
```

## Tham số

object: ModelSpace/PaperSpace/Block; Center: Variant điểm WCS; Radius: double dương.

## Kết quả

VLA object CIRCLE mới.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq ms (vla-get-ModelSpace (vla-get-ActiveDocument (vlax-get-acad-object))))
(vla-AddCircle ms (vlax-3d-point '(0 0 0)) 5.0)
```

## Lỗi thường gặp

Bán kính phải dương; UCS xoay không tự xoay mặt phẳng circle.
