---
{
  "id": "project.visual-lisp-activex.quan-ly-curve-layer",
  "slug": "quan-ly-curve-layer",
  "title": "Tiện ích ActiveX: báo cáo curve và quản lý layer",
  "description": "Kết hợp phép đo theo khoảng cách với batch property, Undo và báo cáo lỗi trên AutoCAD Windows.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "expectedResult": "Hai lệnh độc lập đo curve và đổi layer hoạt động với phạm vi đã chọn; có nhật ký ca WCS/curve/layer khóa, số lượng batch và một nhóm Undo cho phép sửa.",
  "prerequisites": [
    "lesson.visual-lisp-activex.project-activex-gioi-han"
  ],
  "conceptIds": [
    "concept.visual-lisp-activex.object-model",
    "concept.visual-lisp-activex.variant-safearray",
    "concept.visual-lisp-activex.curve-distance",
    "concept.visual-lisp-activex.com-errors",
    "concept.visual-lisp-activex.reactor"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chia-curve-theo-do-dai",
    "example.visual-lisp-activex.chuyen-layer-hang-loat",
    "example.visual-lisp-activex.tao-lwpolyline"
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
      "title": "Autodesk — Coordinates Property",
      "url": "https://help.autodesk.com/cloudhelp/2026/ITA/AutoCAD-LT-ActiveX-Reference/files/GUID-11CAC0D6-DFCF-4653-8403-CF5AFD689773.htm"
    },
    {
      "title": "Autodesk — vl-catch-all-apply",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
    },
    {
      "title": "Autodesk — LAYER (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-DXF/files/GUID-D94802B0-8BE8-4AC9-8054-17197688AFDB.htm"
    },
    {
      "title": "Autodesk — StartUndoMark Method",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-ActiveX-Reference/files/GUID-7C669949-1327-4CFD-96CF-CE65EC38DAA8.htm"
    },
    {
      "title": "Autodesk — About Reactor Guidelines",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-10123DBC-EA95-4300-A441-E028BB441477.htm"
    },
    {
      "title": "Autodesk — About Supported Programming Interfaces",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Customization/files/GUID-E6429154-36DF-4D84-8ABC-9FCA15B66158.htm"
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

## Phạm vi và điều kiện làm việc

Xây bộ tiện ích nhỏ trên AutoCAD Windows: một lệnh báo cáo điểm theo khoảng cách dọc curve và một lệnh chuyển layer cho entity được chọn. Giữ hai lệnh độc lập để phép đo chỉ đọc không tự kéo theo thay đổi bản vẽ. Đây là nền tảng cho Geometry Utility hoặc quản lý tuyến bằng hình học AutoCAD.

Dữ liệu báo cáo gồm mã đối chiếu curve, khoảng cách từ đầu và điểm WCS. Chiều dài theo đơn vị bản vẽ; hướng đầu curve là chiều tăng của khoảng cách. Với đường kín, quyết định giữ n+1 điểm có điểm cuối trùng đầu hay chỉ n điểm. Mẫu đang giữ n+1 để biểu thị cả hai biên.

ActiveX, SafeArray và Curve API trong project cần Windows. Chỉ dùng member được tài liệu công bố; chưa có lần chạy host được ghi nhận và không suy ra hỗ trợ của AutoCAD LT hoặc mọi phiên bản từ một ví dụ hoạt động.

## Bộ dữ liệu thử có thể đối chiếu

Tạo LINE từ (0,0,0) tới (120,0,0), một ARC và một LWPOLYLINE có đoạn cung. Thêm một TEXT và một LINE dài 0 nếu host cho phép để kiểm tra từ chối dữ liệu. Tạo hai layer nguồn, một layer đích thường và một layer khóa. Một entity đặt trên layer nguồn khóa để quan sát trường hợp bỏ qua.

Tạo thêm hình chữ nhật bằng PTA_VLA_RECT nếu muốn kiểm tra đường kín: bốn đỉnh, elevation 0 và tổng chiều dài 360. Xác nhận vị trí theo mặt phẳng OCS chuẩn trước khi sử dụng nó làm curve. Khi đang ở layout, nhận biết các mẫu nào chỉ định ModelSpace và mẫu nào dùng selection set của không gian đang thao tác.

## Hoàn thiện module đo curve

Nạp nguồn PTA_CURVE_DIVIDE_REPORT và chạy với LINE, n=4. Tổng L là 120; các khoảng cách 0, 30, 60, 90, 120 cho năm điểm WCS. Chạy ARC và polyline có cung để xác nhận khoảng cách đo theo đường, không theo đoạn nối hai đỉnh. Không dùng chia đều parameter để thay thế phép đo này.

Tách phần tạo record khỏi phần in khi muốn thêm xuất CSV. Hàm tính nên nhận một giao diện đọc curve hoặc list điểm đã có, trả record có trạng thái lỗi; module ghi file nhận dữ liệu thuần và không giữ VLA-object. Dùng lại quy tắc quote chuỗi, nhưng định nghĩa header riêng cho curve thay vì gọi hàm xuất LINE với dữ liệu khác kiểu.

Kiểm tra `nil` và error object tại từng lời gọi. Nếu một điểm không đánh giá được, record phải có trạng thái và lý do; không tự thay điểm đó bằng gốc WCS. Xoay UCS và chạy lại cùng curve để xác nhận tọa độ báo cáo được hiểu thống nhất.

## Hoàn thiện module batch property

Nạp PTA_VLA_SET_LAYER, nhập layer đích đã tồn tại rồi chọn nhóm entity thử. Mẫu từ chối layer đích khóa hoặc phụ thuộc xref, bỏ qua entity đã ở đích và nguồn khóa. Nó kiểm tra khả năng ghi Layer, bắt lỗi COM từng entity rồi đếm thành công, bỏ qua, thất bại.

Đối chiếu mỗi Handle lỗi với entity trong DWG. Tổng ba nhóm phải bằng số main entity được chọn. Các đối tượng không nằm trong selection set giữ layer cũ. Màu có thể còn override trên entity; việc đổi layer không tự đổi mọi property hiển thị sang ByLayer.

StartUndoMark/EndUndoMark gom phép sửa. Sau lượt thành công, dùng U và đối chiếu layer cũ. Khi lỗi giữa batch, đã có entity đổi thì báo cáo phải nói rõ; kết thúc mark không có nghĩa toàn bộ batch được rollback. Giải phóng object mỗi vòng và Document ở cuối, không sử dụng tham chiếu sau đóng DWG.

## Nghiệm thu và hướng nâng cấp

Nhật ký cần có các ca LINE, cung, curve kín, TEXT, đường dài 0, số đoạn vượt giới hạn, Esc, UCS xoay, layer đích sai và nguồn khóa. Ghi host, phiên bản, kết quả và số lượng batch. Chỉ đánh dấu runtime đã kiểm chứng sau khi các ca thực sự được chạy.

Khi bổ sung reactor, callback chỉ ghi nhận dữ liệu cần cập nhật; tránh input, dialog, command và sửa chính object phát sự kiện. Kiểm tra nạp lại không đăng ký đôi và tắt module tháo đúng reactor.

Nếu quy mô yêu cầu truy cập database sâu hơn hoặc kiến trúc plugin lớn, cân nhắc .NET với SDK/reference và host tương ứng. Giữ hợp đồng record, thuật toán và bộ ca nghiệm thu để so sánh kết quả; không thay nền tảng chỉ vì tên API mới.
