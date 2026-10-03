---
{
  "id": "concept.visual-lisp-activex.vla-item",
  "slug": "vla-item",
  "title": "vla-item",
  "description": "Lấy thành viên collection theo tên hoặc chỉ số.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Theo phạm vi hỗ trợ trong tài liệu hàm",
      "platform": "Windows"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vla-item",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-ActiveX-Reference/files/GUID-A5B6ACC4-DCD8-4FE2-AB06-D3C3C349475B.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vla-Item object Index)
```

## Tham số

object: collection, Group hoặc SelectionSet; Index: chuỗi tên hoặc số nguyên 0..Count-1.

## Kết quả

VLA object thành viên.

## Ví dụ

Nạp `(vl-load-com)` trong AutoCAD Windows. Các ví dụ dùng `obj`/`curve` cần VLA object hợp lệ; chọn một LINE bằng `(setq obj (vlax-ename->vla-object (car (entsel))))` trước khi thử. Biến `curve` dùng cùng đối tượng LINE.

```lisp
(setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
(vla-Item (vla-get-Layers doc) "0")
```

## Lỗi thường gặp

Tên không tồn tại gây lỗi COM; bắt lỗi khi tên lấy từ dữ liệu ngoài.
