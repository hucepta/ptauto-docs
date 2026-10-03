---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-get-u-bound",
  "slug": "vlax-safearray-get-u-bound",
  "title": "vlax-safearray-get-u-bound",
  "description": "Đọc cận trên của một chiều.",
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
      "title": "Autodesk — vlax-safearray-get-u-bound",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-07070F34-A919-4BF5-BBC9-6D940A93F765.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-get-u-bound var dim)
```

## Tham số

var: SafeArray; dim: thứ tự chiều từ 1.

## Kết quả

Số nguyên cận trên.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-get-u-bound sa 1) ; 2
```

## Lỗi thường gặp

Số phần tử là u-bound trừ l-bound cộng 1.
