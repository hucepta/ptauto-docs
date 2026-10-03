---
{
  "id": "concept.visual-lisp-activex.vlax-invoke-method",
  "slug": "vlax-invoke-method",
  "title": "vlax-invoke-method",
  "description": "Gọi method COM theo tên.",
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
      "title": "Autodesk — vlax-invoke-method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A8B097A2-CE86-4B38-B2A9-D6F53EACA8ED.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-invoke-method obj method arg [arg ...])
```

## Tham số

obj: VLA object; method: tên; arg: các đối số theo method.

## Kết quả

Kết quả method, có thể không có giá trị.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-invoke-method obj 'Move (vlax-3d-point '(0 0 0)) (vlax-3d-point '(10 0 0)))
```

## Lỗi thường gặp

Truyền đúng Variant cho điểm; list LISP không luôn được tự đổi kiểu.
