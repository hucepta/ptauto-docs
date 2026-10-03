---
{
  "id": "concept.visual-lisp-activex.com-errors",
  "slug": "com-errors",
  "title": "COM error và vòng đời VLA-object",
  "description": "Kiểm tra member, giữ lỗi từng entity và giải phóng tham chiếu khi kết thúc.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "troubleshooting",
  "aliases": [
    "vl-catch-all-apply",
    "vl-catch-all-error-p",
    "vlax-release-object",
    "StartUndoMark"
  ],
  "relatedConceptIds": [
    "concept.visual-lisp-activex.object-model"
  ],
  "exampleIds": [
    "example.visual-lisp-activex.chuyen-layer-hang-loat"
  ],
  "sources": [
    {
      "title": "Autodesk — vl-catch-all-apply",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E08CC2A6-787A-422F-8BD3-18812996794C.htm"
    },
    {
      "title": "Autodesk — vlax-property-available-p",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E8A5B009-46D6-4BA7-9655-88104F8BE792.htm"
    },
    {
      "title": "Autodesk — About Releasing Objects and Freeing Memory",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-LT-AutoLISP/files/GUID-4A2C849B-C0E0-4991-905D-A916B2CD3F25.htm"
    },
    {
      "title": "Autodesk — StartUndoMark Method",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-ActiveX-Reference/files/GUID-7C669949-1327-4CFD-96CF-CE65EC38DAA8.htm"
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

## Nhận diện lỗi trả về

`vl-catch-all-apply` nhận hàm và list đối số. Khi thành công, nó trả kết quả hàm; khi lỗi, trả error object. Dùng `vl-catch-all-error-p` để phân biệt, rồi lấy thông báo bằng `vl-catch-all-error-message`. Một setter thành công có thể trả `nil`, nên không suy ra thất bại chỉ từ giá trị đó.

Kiểm tra property bằng `vlax-property-available-p`; đối số `T` yêu cầu khả năng ghi. Member tồn tại vẫn có thể lỗi do layer khóa hoặc trạng thái object. Batch nên ghi Handle, thao tác và lý do cho từng thất bại.

## Dọn dẹp đúng tài nguyên

`vlax-release-object` làm tham chiếu không còn sử dụng được; nó không xóa entity khỏi bản vẽ. Giữ Document và object chỉ trong phạm vi cần thiết, giải phóng ở đường thành công lẫn handler. Không tiếp tục dùng object của DWG đã đóng.

## Undo không thay cleanup

StartUndoMark/EndUndoMark gom thao tác trên Document. Đóng nhóm không tự hoàn tác, không đóng file và không tháo reactor. Mẫu đổi layer thống kê kết quả đã thực hiện rồi kết thúc nhóm. Thử nguồn khóa, layer đích không hợp lệ và Esc để kiểm tra trạng thái sau lệnh.
