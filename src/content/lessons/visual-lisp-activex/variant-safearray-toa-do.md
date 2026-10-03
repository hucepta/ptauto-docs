---
{
  "id": "lesson.visual-lisp-activex.variant-safearray-toa-do",
  "slug": "variant-safearray-toa-do",
  "title": "Dữ liệu COM",
  "description": "Đóng gói dữ liệu COM đúng kiểu, đọc Coordinates và tạo LWPolyline có quy ước rõ.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.du-lieu-hinh-hoc",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.object-model-collections",
    "lesson.autolisp.toa-do-trans-hinh-hoc"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.variant-safearray"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.tao-lwpolyline"
  ],
  "exerciseIds": [
    "exercise.visual-lisp-activex.doc-coordinates"
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
    },
    {
      "title": "Autodesk — AddLightWeightPolyline Method",
      "url": "https://help.autodesk.com/cloudhelp/2019/CHT/AutoCAD-ActiveX-Reference/files/GUID-2003E0A1-5FB5-48A7-8CDA-2804F7C61C1C.htm"
    },
    {
      "title": "Autodesk — trans (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1A316343-0B68-4DBE-8F49-B4D601CB8FCC.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ],
  "tags": [
    "Visual LISP",
    "ActiveX"
  ],
  "examplePlacements": [
    {
      "heading": "thực-hành-và-bẫy-khi-sửa",
      "exampleIds": [
        "example.visual-lisp-activex.tao-lwpolyline"
      ]
    }
  ],
  "illustration": "curve"
}
---

## Phân biệt ba lớp dữ liệu

List AutoLISP là chuỗi phần tử được xử lý bằng `car`, `cdr`, `mapcar`. SafeArray là mảng COM có kiểu phần tử và giới hạn chỉ số. Variant là lớp bọc mang thông tin kiểu cùng giá trị. Property ActiveX có thể trả Variant chứa SafeArray; bỏ qua lớp bọc rồi gọi hàm xử lý list sẽ gây lỗi kiểu.

Dùng `vlax-variant-value` để lấy giá trị bên trong Variant, rồi `vlax-safearray->list` nếu giá trị đó là SafeArray. Chiều gửi dữ liệu, tạo bằng `vlax-make-safearray`, điền bằng `vlax-safearray-fill`; dùng hằng `vlax-vbDouble` cho tọa độ thay vì số mã kiểu viết tay.

## Giới hạn mảng và cấu trúc điểm

Giới hạn `(0 . 7)` nghĩa là tám phần tử, không phải bảy. Mảng hai chiều có giới hạn riêng từng chiều; số hàng, cột và kiểu phải đúng hợp đồng API. Với một điểm 3D, `vlax-3D-point` tạo cấu trúc thích hợp để truyền cho method yêu cầu điểm.

Tám số XY có thể biểu diễn bốn đỉnh LWPolyline; chúng không phải tám điểm 3D. `AddLightWeightPolyline` nhận số phần tử chẵn, tối thiểu bốn số, theo OCS. Polyline kiểu cũ dùng bố trí khác. Khi lấy Coordinates, xác định ObjectName rồi chọn cách chia cặp XY hoặc bộ XYZ; không dùng một bộ chia cho mọi entity.

## Tọa độ thuộc property nào

Coordinates của LWPolyline chứa cặp XY trong OCS, còn 3DPolyline chứa XYZ trong WCS. Elevation và Normal bổ sung mặt phẳng cho dữ liệu 2D. Khi người dùng nhập điểm ở UCS, chuyển trước khi đóng gói; SafeArray chỉ lưu số, không tự chuyển hệ tọa độ.

Ví dụ PTA_VLA_RECT tạo bốn đỉnh (0,0), (120,0), (120,60), (0,60) trong ModelSpace, đặt Elevation bằng 0 và Closed bằng true. Mẫu dùng mặt phẳng OCS chuẩn; nó không đặt hình theo UCS hiện hành. Nếu bài toán cần mặt phẳng khác, xác định Normal, elevation và phép chuyển tọa độ trước khi tạo.

## Thực hành và bẫy khi sửa

Sau khi APPLOAD trên AutoCAD Windows, chạy PTA_VLA_RECT trong bản vẽ thử. Đối chiếu số đỉnh, chiều dài cạnh, trạng thái kín và cao độ; dùng Undo để kiểm tra nhóm sửa đổi. Mã có nhánh dọn dẹp, nhưng việc kết thúc Undo không tự xóa phần đã tạo nếu lỗi xảy ra giữa chừng.

Bài tập đọc Coordinates rồi dựng list điểm đầy đủ. Thử UCS xoay và polyline có elevation khác 0. Đừng ghi lại Coordinates chỉ để xem kết quả: số phần tử thay đổi có thể cắt bớt hoặc thêm đỉnh. Đối chiếu tọa độ với Properties trước khi ghép vào công cụ.
