---
{
  "id": "concept.autolisp.term-host-autolisp",
  "slug": "term-host-autolisp",
  "title": "Host chạy AutoLISP",
  "description": "Ứng dụng có bộ thực thi AutoLISP; trình soạn LSP chỉ giữ mã nguồn, không thay cho host.",
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
  "kind": "term",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": []
}
---

## Định nghĩa và ví dụ

Host là ứng dụng thực thi mã trong ngữ cảnh của nó. Trong quy trình học này, AutoCAD mở DWG và chạy AutoLISP; VS Code mở file .lsp để biên tập. Lưu file trong VS Code không tương đương gọi lệnh trong AutoCAD.

Ví dụ: bạn mở **AutoCAD từ Windows Start**, chọn New, rồi nhập **(+ 2 3)** vào Command Line; kết quả số 5 được host tính. Gõ biểu thức vào một file trong VS Code chỉ tạo văn bản cho tới khi file được nạp vào môi trường phù hợp.

## Dấu hiệu cần phân biệt

File **kiem-tra.lsp** là mã nguồn; **PTA_READY** là tên lệnh do mã định nghĩa; **buoi-dau.dwg** là bản vẽ host đang mở. Một lệnh chưa được nạp trong phiên mới có thể báo Unknown command dù file LSP vẫn tồn tại trên đĩa.

Xem [quy trình chuẩn bị và nạp LSP](/hoc/autolisp/chuan-bi-cong-cu/) để làm theo lần đầu. Khi hỏi lỗi, ghi tên sản phẩm, năm, nền tảng, đường dẫn file và phản hồi đầu tiên.
