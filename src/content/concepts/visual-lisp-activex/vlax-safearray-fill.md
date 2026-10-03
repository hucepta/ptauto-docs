---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-fill",
  "slug": "vlax-safearray-fill",
  "title": "vlax-safearray-fill",
  "description": "Điền toàn bộ SafeArray.",
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
      "title": "Autodesk — vlax-safearray-fill",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7C2331B4-1A4D-40FF-B59A-D35F7942936B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-fill var 'element-values)
```

## Tham số

var: SafeArray; element-values: list đúng kích thước, list lồng với nhiều chiều.

## Kết quả

SafeArray đã điền.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-fill sa '(10.0 20.0 0.0))
```

## Lỗi thường gặp

Số phần tử hoặc số chiều không khớp gây lỗi.
