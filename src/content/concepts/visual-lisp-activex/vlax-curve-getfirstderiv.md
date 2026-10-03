---
{
  "id": "concept.visual-lisp-activex.vlax-curve-getfirstderiv",
  "slug": "vlax-curve-getfirstderiv",
  "title": "vlax-curve-getFirstDeriv",
  "description": "Lấy đạo hàm bậc nhất theo parameter.",
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
      "title": "Autodesk — vlax-curve-getFirstDeriv",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-37282EB1-D47C-4039-B1AF-744EB5B53F25.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-curve-getFirstDeriv curve-obj param)
```

## Tham số

curve-obj: curve; param: parameter.

## Kết quả

Vector WCS ba số hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq curve obj) (vlax-curve-getFirstDeriv curve (vlax-curve-getStartParam curve))
```

## Lỗi thường gặp

Đạo hàm không tự là vector đơn vị; chuẩn hóa trước khi dùng cho hướng.
