---
{
  "id": "concept.autolisp.error-undo",
  "slug": "error-undo",
  "title": "Khôi phục trạng thái và nhóm Undo",
  "description": "Dọn tài nguyên ở mọi đường thoát và phân biệt Undo bản vẽ với file ngoài.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "troubleshooting",
  "aliases": [
    "*error*",
    "command-s",
    "hủy lệnh",
    "cleanup"
  ],
  "relatedConceptIds": [
    "concept.autolisp.initget"
  ],
  "exampleIds": [
    "example.autolisp.xuat-line-csv"
  ],
  "sources": [
    {
      "title": "Autodesk — command-s (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-AutoLISP-Reference/files/GUID-5C9DC003-3DD2-4770-95E7-7E19A4EE19A1.htm"
    },
    {
      "title": "Autodesk — About Undoing Changes Made by a Routine",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-4481039B-77DA-4500-AE8B-3D2AD6951115.htm"
    },
    {
      "title": "Autodesk — open (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-089A323F-21FF-4337-99A9-375758E23BA4.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows / macOS"
    }
  ]
}
---

## Những gì cần khôi phục

Lệnh thay CMDECHO, OSMODE, DIMZIN hoặc layer hiện hành phải lưu giá trị ban đầu. File descriptor cần được đóng. Handler `*error*` nên có phạm vi của lệnh; cùng đường dọn dẹp phải hoạt động khi thành công, nhấn Esc hoặc gặp dữ liệu lỗi.

Nếu dọn dẹp tự gây lỗi, người dùng mất thông báo nguyên nhân đầu. Chỉ đóng tài nguyên đã mở và đánh dấu trạng thái sau khi mở thành công. Mẫu CSV giữ file descriptor và DIMZIN cục bộ, đóng file rồi khôi phục biến.

## Undo có phạm vi bản vẽ

Undo Begin/End gom nhiều sửa đổi thành một thao tác người dùng có thể hoàn tác. Kết thúc nhóm không tự rollback. File CSV đã ghi không được phục hồi bằng Undo của DWG; thông báo cần mô tả điều gì đã hoàn thành trước lỗi.

## Gọi lệnh trong handler

`command-s` cho phép chuỗi token hoàn chỉnh trong handler và không dùng PAUSE. Thu dữ liệu người dùng trước khi gửi chuỗi đó. Không tự gọi Undo rollback khi một lệnh khác đang chạy. Thực hành hủy ở từng lời nhắc, dùng đường dẫn không ghi được và xác nhận các biến môi trường vẫn bằng giá trị trước khi chạy.
