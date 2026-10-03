---
{
  "id": "concept.visual-lisp-activex.vlax-for",
  "slug": "vlax-for",
  "title": "vlax-for",
  "description": "Lặp qua collection COM.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows only; not available on Mac OS or Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-for",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9CB1C7DD-7E25-4F8C-8858-D79FEC043BEC.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-for symbol collection [expression1 [expression2 ...]])
```

## Tham số

symbol: biến nhận từng object; collection: COM collection; expression: thân lặp.

## Kết quả

Kết quả biểu thức cuối.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-for lay (vla-get-Layers (vla-get-ActiveDocument (vlax-get-acad-object))) (princ (vla-get-Name lay)))
```

## Lỗi thường gặp

Không xóa phần tử collection ngay khi đang duyệt; gom danh sách trước.
