---
{
  "id": "lesson.visual-lisp-activex.curve-parameter-distance",
  "slug": "curve-parameter-distance",
  "title": "Curve API: parameter, khoảng cách và điểm",
  "description": "Đo chiều dài, lấy điểm theo khoảng cách và hiểu giới hạn closest point, derivative.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.du-lieu-hinh-hoc",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.variant-safearray-toa-do"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.curve-distance",
    "concept.visual-lisp-activex.com-errors"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chia-curve-theo-do-dai"
  ],
  "exerciseIds": [
    "exercise.visual-lisp-activex.chia-curve"
  ],
  "sources": [
    {
      "title": "Autodesk — Curve Measurement Functions Reference",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4684C76F-02F7-4989-AA53-C886E528350A.htm"
    },
    {
      "title": "Autodesk — vlax-curve-getDistAtParam",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8FF6D3D5-7EA5-4E9A-8A61-295C0562E7AE.htm"
    },
    {
      "title": "Autodesk — vlax-curve-getPointAtDist",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F41FB58A-4645-404E-98B7-D4978A9A790B.htm"
    },
    {
      "title": "Autodesk — vl-catch-all-apply",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
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
      "heading": "chia-đường-theo-khoảng-cách",
      "exampleIds": [
        "example.visual-lisp-activex.chia-curve-theo-do-dai"
      ]
    }
  ]
}
---

## Parameter khác khoảng cách dọc đường

Curve là hình học có thể đánh giá điểm theo tham số. Parameter phụ thuộc kiểu đường: nó không phải tọa độ X, số mét hay mặc nhiên là lý trình. Lấy giới hạn bằng `vlax-curve-getStartParam` và `vlax-curve-getEndParam`. Độ dài toàn đường được lấy bằng `vlax-curve-getDistAtParam` tại tham số cuối.

Với polyline gồm nhiều đoạn có chiều dài khác nhau, lấy parameter ở giữa không bảo đảm điểm ở nửa chiều dài. Dùng `vlax-curve-getPointAtDist` với khoảng cách L/2 nếu cần trung điểm theo đường. API này trả điểm WCS hoặc `nil` nếu không đánh giá được.

## Chia đường theo khoảng cách

Ví dụ PTA_CURVE_DIVIDE_REPORT nhận một curve được hỗ trợ và số đoạn dương n. Nó tính L rồi lần lượt lấy điểm tại `i × L/n`, với i từ 0 tới n, để in n+1 điểm WCS. Mẫu chỉ đọc và không tạo cọc.

Với LINE dài 120 và n bằng 4, khoảng cách báo cáo là 0, 30, 60, 90, 120. Khi đường có cung, khoảng cách tăng dọc hình học thực thay vì nội suy thẳng giữa các đỉnh. Khi chạy trên đường kín, điểm cuối có thể trùng điểm đầu; phải định nghĩa trước việc giữ hay bỏ bản ghi trùng.

## Closest point và hướng tiếp tuyến

`vlax-curve-getClosestPointTo` tìm điểm gần một điểm WCS trên curve; tùy chọn extend có thể cho phép tìm trên phần kéo dài. Sau khi tìm điểm trên đường, dùng `getDistAtPoint` để chuyển thành khoảng cách từ đầu. Khoảng cách vuông góc từ điểm ngoài tới đường không phải khoảng cách dọc đường.

`getFirstDeriv` trả vector đạo hàm tại parameter. Chuẩn hóa nó khi cần hướng tiếp tuyến; kiểm tra độ dài bằng 0. Tại góc gãy polyline, phải quy định lấy hướng đoạn trước, đoạn sau hay hướng trung bình. Không đặt mũi tên hoặc nhãn theo một đạo hàm chưa được đánh giá ở đúng parameter.

## Kiểm tra đầu vào và thực hành

Chuyển lựa chọn thành VLA-object, chỉ nhận loại curve mẫu hỗ trợ và bọc lời gọi có thể lỗi bằng `vl-catch-all-apply`. Phân biệt error object với kết quả `nil`. Đường dài 0 không thể dùng để chia khoảng cách; giới hạn số đoạn tránh in quá nhiều kết quả ngoài ý muốn.

Thử LINE, ARC, polyline có một đoạn cung và một TEXT. Xoay UCS nhưng vẫn đối chiếu WCS. Với quản lý tuyến, ghi hướng đầu đường và mốc bắt đầu do ứng dụng định nghĩa. Tính toán này mô tả khoảng cách dọc curve AutoCAD, không tự cung cấp phương trình lý trình hoặc dữ liệu tuyến chuyên ngành.
