---
{
  "id": "concept.visual-lisp-activex.vl-catch-all-error-p",
  "slug": "vl-catch-all-error-p",
  "title": "vl-catch-all-error-p",
  "description": "Nhận diện đối tượng lỗi được bắt.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vl-catch-all-error-p",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-14CADE53-54C6-437D-8F3C-14845E08591C.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vl-catch-all-error-p arg)
```

## Tham số

arg: kết quả vl-catch-all-apply.

## Kết quả

T nếu là catch-all error, nil nếu kết quả thường.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq r (vl-catch-all-apply '/ '(1 0))) (vl-catch-all-error-p r) ; T
```

## Lỗi thường gặp

Kết quả nil của hàm thường không đồng nghĩa lỗi.
