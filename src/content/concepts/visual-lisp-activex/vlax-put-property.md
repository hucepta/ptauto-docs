---
{
  "id": "concept.visual-lisp-activex.vlax-put-property",
  "slug": "vlax-put-property",
  "title": "vlax-put-property",
  "description": "Ghi property COM.",
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
      "title": "Autodesk — vlax-put-property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-C56E4AF5-A763-4B9D-AB35-C863D02FB93B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-put-property obj property arg)
```

## Tham số

obj: VLA object; property: tên; value: giá trị mới; một số property cần đối số bổ sung.

## Kết quả

nil khi thành công; nếu thất bại phát sinh lỗi. Bản vẽ có thể thay đổi.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-put-property obj 'Layer "0")
```

## Lỗi thường gặp

Kiểm tra layer tồn tại và đối tượng cho phép ghi trước khi sửa.
