---
{
  "id": "concept.autolisp.getpoint",
  "slug": "getpoint",
  "title": "getpoint",
  "description": "Yêu cầu nhập điểm.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
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
      "title": "Autodesk — getpoint",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-445F32F0-8A9D-4E1D-976F-DE87CC5267D0.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(getpoint [pt] [msg])
```

## Tham số và kết quả

`pt` tùy chọn là điểm gốc trong UCS hiện hành; `msg` là lời nhắc. Có điểm gốc thì hiển thị đường kéo từ gốc tới con trỏ. Hàm trả list điểm 3D trong UCS, hoặc `nil` khi Enter mà không nhập điểm.

Đối số `pt` dạng số dùng cơ chế nhập khoảng cách trực tiếp: dựa vào LASTPOINT và hướng con trỏ, không phải tọa độ X.

## Ví dụ: nhập và in một điểm

Chuẩn bị DWG mở. Dán khối vào Command Line AutoCAD, rồi chọn điểm trên màn hình hoặc nhập tọa độ.

```lisp
(defun c:PTADIEM (/ pt)
  (if (setq pt (getpoint "\nChon diem, Enter de bo qua: "))
    (progn
      (princ "\nDiem trong UCS: ")
      (prin1 pt))
    (princ "\nKhong nhap diem."))
  (princ))
(c:PTADIEM)
```

Kết quả là list ba tọa độ của điểm đã chọn; không tạo entity. Enter in `Khong nhap diem.`; Esc ngắt lệnh bằng lỗi hủy.

## Lỗi thường gặp

Không gửi trực tiếp điểm UCS vào API đòi WCS; chuyển bằng `(trans pt 1 0)` khi cần. Không nhập biểu thức AutoLISP tại lời nhắc của `getpoint`.

[Tham chiếu Autodesk về getpoint](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-445F32F0-8A9D-4E1D-976F-DE87CC5267D0.htm).
