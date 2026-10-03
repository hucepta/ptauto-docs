---
{
  "id": "concept.visual-lisp-activex.vlax-ename-to-vla-object",
  "slug": "vlax-ename-to-vla-object",
  "title": "vlax-ename->vla-object",
  "description": "Chuyển entity name từ ssget/entsel thành VLA-object.",
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
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BD451263-76D5-4A93-B50A-3C27E89A0AD4.htm"
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
(vlax-ename->vla-object ename)
```

## Tham số và kết quả

`ename` là entity name hợp lệ. Kết quả là VLA-object đại diện cùng entity để đọc property hoặc gọi method; không tạo bản sao entity. API này chỉ hỗ trợ Windows.

## Ví dụ: chuyển entity đã chọn và đọc ObjectName

Chuẩn bị AutoCAD Windows với LINE sẵn trong DWG. Dán vào Command Line rồi chọn LINE.

```lisp
(defun c:PTACHUYENOBJECT (/ picked obj)
  (vl-load-com)
  (if (setq picked (entsel "\nChon LINE de doc: "))
    (progn
      (setq obj (vlax-ename->vla-object (car picked)))
      (princ "\nObjectName: ")
      (princ (vla-get-ObjectName obj)))
    (princ "\nKhong co entity duoc chon."))
  (princ))
(c:PTACHUYENOBJECT)
```

Chọn LINE thì in `ObjectName: AcDbLine`. Ví dụ chỉ đọc. Enter khi không chọn in thông báo; Esc ngắt lệnh bằng lỗi hủy.

## Kiểm tra khi áp dụng

`entsel` trả list gồm entity name và điểm chọn: dùng `car` sau khi kiểm `nil`. Với `ssget`, lấy entity bằng `ssname`. Không dùng entity đã xóa hoặc VLA-object không còn hợp lệ.

[Tham chiếu Autodesk về vlax-ename->vla-object](https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-AutoLISP-Reference/files/GUID-BD451263-76D5-4A93-B50A-3C27E89A0AD4.htm).
