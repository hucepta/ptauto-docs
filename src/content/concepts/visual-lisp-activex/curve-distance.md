---
{
  "id": "concept.visual-lisp-activex.curve-distance",
  "slug": "curve-distance",
  "title": "Khoảng cách dọc curve và parameter",
  "description": "Đo chiều dài và lấy điểm theo đường hình học, giữ tọa độ trả về trong WCS.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "aliases": [
    "vlax-curve-getDistAtParam",
    "vlax-curve-getPointAtDist",
    "closest point",
    "derivative",
    "lý trình"
  ],
  "relatedConceptIds": [
    "concept.visual-lisp-activex.com-errors"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chia-curve-theo-do-dai"
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-curve-getDistAtParam",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8FF6D3D5-7EA5-4E9A-8A61-295C0562E7AE.htm"
    },
    {
      "title": "Autodesk — vlax-curve-getPointAtDist",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F41FB58A-4645-404E-98B7-D4978A9A790B.htm"
    },
    {
      "title": "Autodesk — Curve Measurement Functions Reference",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-4684C76F-02F7-4989-AA53-C886E528350A.htm"
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

## Hai đại lượng khác nhau

Parameter dùng để đánh giá hình học và phụ thuộc loại curve. Khoảng cách là chiều dài tính từ đầu đường đến điểm đang xét. Không đặt parameter bằng số mét hoặc chia đôi miền parameter rồi gọi đó là trung điểm theo chiều dài.

Lấy EndParam, dùng `vlax-curve-getDistAtParam` để có tổng L. `vlax-curve-getPointAtDist` với L/2 trả điểm ở nửa đường trong WCS, hoặc `nil` nếu không đánh giá được.

## Gắn điểm vào khoảng cách

Closest point nhận điểm WCS và tìm vị trí gần nhất trên curve; tùy chọn extend có thể xét phần kéo dài. GetDistAtPoint đổi điểm trên đường thành khoảng cách từ đầu. FirstDeriv dùng parameter để lấy hướng tiếp tuyến, cần kiểm tra và chuẩn hóa vector trước khi dùng cho ký hiệu.

## Điều kiện biên

Đường dài 0, khoảng cách ngoài miền và loại object không phải curve cần được xử lý. Đường kín có điểm đầu và cuối trùng; polyline có góc gãy cần quy ước hướng tiếp tuyến. Khoảng cách dọc curve chỉ thành lý trình theo quy ước khi ứng dụng định nghĩa mốc bắt đầu và chiều tăng. Mẫu chia đường báo n+1 điểm để dễ đối chiếu.
