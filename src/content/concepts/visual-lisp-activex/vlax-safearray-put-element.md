---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-put-element",
  "slug": "vlax-safearray-put-element",
  "title": "vlax-safearray-put-element",
  "description": "Gán một phần tử SafeArray.",
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
      "title": "Autodesk — vlax-safearray-put-element",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D4D51BF6-E954-4EA8-9A8D-47FE61B860C6.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-put-element var index ... value)
```

## Tham số

var: SafeArray; index: chỉ số mỗi chiều; value: giá trị mới.

## Kết quả

Giá trị vừa gán cho phần tử.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-put-element sa 1 20.0)
```

## Lỗi thường gặp

Dữ liệu phải hợp kiểu phần tử và chỉ số trong cận.
