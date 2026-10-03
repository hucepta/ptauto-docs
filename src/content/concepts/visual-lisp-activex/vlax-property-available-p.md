---
{
  "id": "concept.visual-lisp-activex.vlax-property-available-p",
  "slug": "vlax-property-available-p",
  "title": "vlax-property-available-p",
  "description": "Kiểm tra property có sẵn hoặc ghi được.",
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
      "title": "Autodesk — vlax-property-available-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E8A5B009-46D6-4BA7-9655-88104F8BE792.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-property-available-p obj prop [check-modify])
```

## Tham số

obj: VLA object; property: tên; check-modify: T để kiểm tra ghi, tùy chọn.

## Kết quả

T hoặc nil.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-property-available-p obj 'Layer T)
```

## Lỗi thường gặp

Bỏ check-modify chỉ xác nhận đọc, không xác nhận ghi.
