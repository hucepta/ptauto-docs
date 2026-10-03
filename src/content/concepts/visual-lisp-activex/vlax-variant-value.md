---
{
  "id": "concept.visual-lisp-activex.vlax-variant-value",
  "slug": "vlax-variant-value",
  "title": "vlax-variant-value",
  "description": "Lấy dữ liệu bên trong Variant.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows only; not available on Mac OS or Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-variant-value",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D26E25ED-6D9A-4E0F-B7C3-CC10F95246F9.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-variant-value var)
```

## Tham số

var: Variant.

## Kết quả

Giá trị chứa trong Variant.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-variant-value (vlax-make-variant 12.5 vlax-vbDouble)) ; 12.5
```

## Lỗi thường gặp

Không gọi với số/chuỗi thường; kiểm tra type.
