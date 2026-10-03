---
{
  "id": "concept.visual-lisp-activex.vlax-get-property",
  "slug": "vlax-get-property",
  "title": "vlax-get-property",
  "description": "Đọc property COM.",
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
      "title": "Autodesk — vlax-get-property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-B3F22E35-4666-452F-89C8-5BC15B9E9463.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-get-property object property)
```

## Tham số

obj: VLA object; property: tên symbol/chuỗi; các đối số tiếp theo nếu property cần chỉ số.

## Kết quả

Giá trị property, có thể là Variant, SafeArray hoặc object.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-get-property obj 'Layer)
```

## Lỗi thường gặp

Không coi mọi property đều trả chuỗi; kiểm tra kiểu trước khi dùng.
