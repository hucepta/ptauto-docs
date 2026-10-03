---
{
  "id": "concept.visual-lisp-activex.vla-get-activedocument",
  "slug": "vla-get-activedocument",
  "title": "vla-get-ActiveDocument",
  "description": "Lấy Document đang hoạt động từ Application.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-3221619A-85E4-470E-AF2E-34048BB3DED5.htm"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

```lisp
(vla-get-ActiveDocument app)
```

## Tham số và kết quả

`app` là VLA Application từ `vlax-get-acad-object`. Kết quả là VLA Document của DWG đang hoạt động. Đây là wrapper đọc property `ActiveDocument`, thuộc hỗ trợ ActiveX trên Windows.

## Ví dụ: xác nhận DWG đích

Chuẩn bị AutoCAD Windows có DWG mở. Dán vào Command Line.

```lisp
(defun c:PTADWGHIENTAI (/ app doc)
  (vl-load-com)
  (setq app (vlax-get-acad-object)
        doc (vla-get-ActiveDocument app))
  (princ "\nBan ve dich: ")
  (princ (vla-get-Name doc))
  (princ))
(c:PTADWGHIENTAI)
```

In tên DWG hiện hành, ví dụ `Drawing1.dwg`. Không cần chọn entity, không có nhánh Cancel và không đổi hình học.

## Kiểm tra khi áp dụng

Lấy lại Document khi bắt đầu thao tác nếu người dùng có thể đổi hoặc đóng bản vẽ. Không coi biến `doc` đã lưu từ lần trước là Document đích hiện tại. Lỗi ActiveX cần kiểm tra hỗ trợ nền tảng và vòng đời Document.

[Tham chiếu Autodesk về wrapper đọc property](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-3221619A-85E4-470E-AF2E-34048BB3DED5.htm).
