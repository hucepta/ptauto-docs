---
{
  "id": "concept.visual-lisp-activex.vlax-tmatrix",
  "slug": "vlax-tmatrix",
  "title": "vlax-tmatrix",
  "description": "Đóng gói ma trận 4x4 cho TransformBy.",
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
      "title": "Autodesk — vlax-tmatrix",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7B1BBCDD-69DD-40E6-81CB-370A05725431.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-tmatrix lst)
```

## Tham số

matrix: list bốn hàng, mỗi hàng bốn số.

## Kết quả

Variant ma trận double.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(vlax-tmatrix '((1 0 0 10) (0 1 0 0) (0 0 1 0) (0 0 0 1)))
```

## Lỗi thường gặp

Không nhầm vị trí phần tịnh tiến; thử trên bản sao trước khi TransformBy.
