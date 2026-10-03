---
{
  "id": "concept.visual-lisp-activex.variant-safearray",
  "slug": "variant-safearray",
  "title": "Variant và SafeArray",
  "description": "Nhận diện lớp bọc COM, kiểu phần tử, giới hạn mảng và cấu trúc tọa độ.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "term",
  "aliases": [
    "vlax-make-variant",
    "vlax-variant-value",
    "vlax-vbDouble",
    "Coordinates"
  ],
  "relatedConceptIds": [],
  "exampleIds": [
    "example.visual-lisp-activex.tao-lwpolyline"
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-make-safearray (AutoLISP/ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-MAC-AutoLISP-Reference/files/GUID-E0D40331-096B-4A52-A0D7-10204829C4A6.htm"
    },
    {
      "title": "Autodesk — About Safearrays",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-986313E1-0AEB-41DA-BC8B-093437F42B6A.htm"
    },
    {
      "title": "Autodesk — Data Conversion Functions Reference",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-042A3895-D875-4FD2-A1E1-A3B565B27DE5.htm"
    },
    {
      "title": "Autodesk — Coordinates Property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ITA/AutoCAD-LT-ActiveX-Reference/files/GUID-11CAC0D6-DFCF-4653-8403-CF5AFD689773.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ]
}
---

## List, mảng và lớp bọc

SafeArray là mảng COM có kiểu phần tử, số chiều và giới hạn chỉ số. Variant mang thông tin kiểu cùng giá trị; giá trị có thể là SafeArray. List AutoLISP là cấu trúc khác nên không được xem hai kiểu này là thay thế trực tiếp cho nhau.

Nếu property trả Variant chứa mảng, dùng `vlax-variant-value` rồi `vlax-safearray->list`. Khi gửi tọa độ, tạo SafeArray bằng `vlax-make-safearray` với hằng `vlax-vbDouble`, điền bằng `vlax-safearray-fill`.

## Đếm phần tử và điểm

Khoảng `(0 . 7)` chứa tám số. LWPolyline dùng các cặp XY trong OCS; 3DPolyline dùng các bộ XYZ trong WCS. Tám số XY là bốn đỉnh, không phải tám điểm. Elevation và Normal phải được xét khi phục hồi điểm 3D từ dữ liệu phẳng.

## Điều cần kiểm tra

Xác nhận kiểu, giới hạn mảng, ObjectName và quy ước của property trước khi đọc hoặc ghi. SafeArray không tự chuyển UCS sang WCS. Thay Coordinates với số phần tử ít hơn có thể cắt đỉnh, nhiều hơn có thể thêm đỉnh. Bài thực hành chỉ đọc mảng trước khi thử bất kỳ phép sửa nào.
