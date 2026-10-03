---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-get-dim",
  "slug": "vlax-safearray-get-dim",
  "title": "vlax-safearray-get-dim",
  "description": "Đếm chiều SafeArray.",
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
      "title": "Autodesk — vlax-safearray-get-dim",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-FA24BF36-D548-44E2-B945-76445CE7BEB7.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-get-dim var)
```

## Tham số

var: SafeArray.

## Kết quả

Số nguyên số chiều.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-get-dim sa) ; 1
```

## Lỗi thường gặp

Không truyền Variant chứa mảng; tháo Variant trước.
