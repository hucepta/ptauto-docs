---
{
  "id": "concept.visual-lisp-activex.vlax-make-variant",
  "slug": "vlax-make-variant",
  "title": "vlax-make-variant",
  "description": "Tạo Variant với kiểu xác định.",
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
      "title": "Autodesk — vlax-make-variant",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A1B964E3-89B4-4655-9E37-B24401450CDA.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-make-variant [value [type]])
```

## Tham số

value: dữ liệu; type: mã kiểu COM tùy chọn.

## Kết quả

Variant.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-make-variant 12.5 vlax-vbDouble)
```

## Lỗi thường gặp

Số nguyên và double là hai kiểu COM khác nhau khi API yêu cầu cụ thể.
