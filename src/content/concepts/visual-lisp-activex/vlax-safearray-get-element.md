---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-get-element",
  "slug": "vlax-safearray-get-element",
  "title": "vlax-safearray-get-element",
  "description": "Đọc phần tử theo chỉ số.",
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
      "title": "Autodesk — vlax-safearray-get-element",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-09386E77-DBBF-4E4D-8D77-0066D1F11CBA.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-get-element var element ...)
```

## Tham số

var: SafeArray; index: một chỉ số cho mỗi chiều.

## Kết quả

Giá trị phần tử.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-fill sa '(10.0 20.0 0.0)) (vlax-safearray-get-element sa 1) ; 20.0
```

## Lỗi thường gặp

Không mặc định cận dưới luôn 0; đọc l-bound trước.
