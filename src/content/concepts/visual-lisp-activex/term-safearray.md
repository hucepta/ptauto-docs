---
{
  "id": "concept.visual-lisp-activex.term-safearray",
  "slug": "term-safearray",
  "title": "SafeArray",
  "description": "Cấu trúc mảng mà ActiveX trả hoặc nhận cho tọa độ và danh sách; thường cần chuyển sang list AutoLISP.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "co-ban",
  "kind": "term",
  "aliases": [
    "mảng COM"
  ],
  "sources": [
    {
      "title": "Tài liệu kỹ thuật chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ]
}
---

## Giải thích

Cấu trúc mảng mà ActiveX trả hoặc nhận cho tọa độ và danh sách; thường cần chuyển sang list AutoLISP.

**Cách hiểu trong khóa:** mảng COM.

## Ví dụ

```text
(vlax-safearray->list array)
```
