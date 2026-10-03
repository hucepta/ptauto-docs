---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-get-l-bound",
  "slug": "vlax-safearray-get-l-bound",
  "title": "vlax-safearray-get-l-bound",
  "description": "Đọc cận dưới của một chiều.",
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
      "title": "Autodesk — vlax-safearray-get-l-bound",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8ABBA8A8-D421-48D2-BCBC-34DA1C728A78.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-get-l-bound var dim)
```

## Tham số

var: SafeArray; dim: số thứ tự chiều từ 1.

## Kết quả

Số nguyên cận dưới.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-get-l-bound sa 1) ; 0
```

## Lỗi thường gặp

dim bắt đầu 1, dù chỉ số phần tử có thể bắt đầu 0.
