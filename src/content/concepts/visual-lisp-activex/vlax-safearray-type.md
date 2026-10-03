---
{
  "id": "concept.visual-lisp-activex.vlax-safearray-type",
  "slug": "vlax-safearray-type",
  "title": "vlax-safearray-type",
  "description": "Đọc mã kiểu phần tử SafeArray.",
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
      "title": "Autodesk — vlax-safearray-type",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-64051CE8-BDDF-4AFF-A440-B93F1E24AF78.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-safearray-type var)
```

## Tham số

var: SafeArray.

## Kết quả

Số nguyên mã kiểu.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq sa (vlax-make-safearray vlax-vbDouble '(0 . 2))) (vlax-safearray-type sa) ; 5
```

## Lỗi thường gặp

Không dùng type LISP để suy ra mã kiểu COM bên trong mảng.
