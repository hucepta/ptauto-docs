---
{
  "id": "concept.visual-lisp-activex.vla-addxline",
  "slug": "vla-addxline",
  "title": "vla-AddXLine",
  "description": "Tạo đường dựng hình vô hạn qua hai điểm WCS.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "ActiveX có hỗ trợ",
      "platform": "Windows"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AddXLine Method",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-LT-ActiveX-Reference/files/GUID-53485293-880E-49B7-93C9-8C93E6F56625.htm"
    }
  ]
}
---

## Cú pháp

```lisp
(vla-AddXLine object Point1 Point2)
```

## Tham số

object: ModelSpace, PaperSpace hoặc Block collection. Point1 và Point2: hai Variant mảng ba double, chứa tọa độ WCS của hai điểm khác nhau trên đường.

## Kết quả

VLA object XLine vừa tạo, kéo dài vô hạn qua cả hai phía.

## Ví dụ

Thử trên DWG học; đoạn mã tạo entity mới.

```lisp
(vl-load-com)
(setq ms (vla-get-ModelSpace (vla-get-ActiveDocument (vlax-get-acad-object))))
(vla-AddXLine ms (vlax-3d-point '(0 0 0)) (vlax-3d-point '(10 0 0)))
```

## Lỗi thường gặp

Point2 là một điểm trên đường, không phải vector hướng. Hai điểm trùng nhau không xác định đường. Dùng LINE nếu cần đoạn hữu hạn.
