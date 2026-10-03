---
{
  "id": "concept.visual-lisp-activex.vlax-variant-type",
  "slug": "vlax-variant-type",
  "title": "vlax-variant-type",
  "description": "Đọc mã kiểu Variant.",
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
      "title": "Autodesk — vlax-variant-type",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-14029CC8-2839-432B-ABFC-F470AFA7606B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-variant-type var)
```

## Tham số

var: Variant.

## Kết quả

Số nguyên mã kiểu COM.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-variant-type (vlax-make-variant 12.5 vlax-vbDouble)) ; 5
```

## Lỗi thường gặp

Variant chứa mảng có thêm bit mảng; không so với mã scalar.
