---
{
  "id": "concept.autolisp.loi-khoi-dong-lsp",
  "slug": "loi-khoi-dong-lsp",
  "title": "APPLOAD xong nhưng lệnh chưa chạy",
  "description": "Tra đường dẫn LSP, tên lệnh và lỗi nạp đầu tiên khi AutoCAD báo Unknown command.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — cài và cấu hình AutoLISP Extension",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Tutorials/files/GUID-8EADDE55-CD92-422A-8493-9C7A19880629.htm"
    },
    {
      "title": "Autodesk — Managed .NET Compatibility 2025",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD bản đầy đủ",
      "version": "Hướng dẫn tham chiếu 2026; cần thử trên bản cài thực tế",
      "platform": "Windows"
    }
  ],
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "troubleshooting",
  "relatedConceptIds": [
    "concept.autolisp.term-host-autolisp"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Triệu chứng

Bạn lưu file LSP nhưng AutoCAD báo Unknown command khi gọi lệnh, hoặc vẫn in thông báo cũ. Save chỉ ghi file trên đĩa; host cần nạp lại phiên bản mã mới.

## Kiểm tra theo thứ tự

1. Từ Start mở AutoCAD đúng năm, mở DWG thử và dùng Ctrl+9 hiện Command Line.
2. Gõ APPLOAD; kiểm tra đường dẫn file thực sự được chọn. File phải là .lsp, không phải .lsp.txt. Bấm Load và đọc trạng thái trước khi Close.
3. Mở F2, tìm lỗi xuất hiện lúc nạp. Sửa lỗi ngoặc/chuỗi trong VS Code, Ctrl+S rồi APPLOAD lại. Đừng chỉ đọc dòng Unknown command cuối cùng.
4. Gọi tên sau **c:** trong defun; mã **c:PTA_READY** được gọi bằng **PTA_READY**, không kèm c:.

Nếu có cảnh báo bảo mật, xác minh file do chính bạn viết và vị trí học được quản lý. Không tắt bảo mật toàn cục để chữa lỗi đường dẫn.

## Kết quả cần thấy

Thông báo mới xuất hiện sau Save → nạp lại → gọi lệnh. Làm đầy đủ lần đầu tại [chuẩn bị AutoLISP](/hoc/autolisp/chuan-bi-cong-cu/); lưu đường dẫn và phản hồi để so sánh.
