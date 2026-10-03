---
{
  "id": "lesson.autolisp.dcl-va-vong-doi-dialog",
  "slug": "dcl-va-vong-doi-dialog",
  "title": "DCL: từ hai file đến một hộp thoại có kiểm soát",
  "description": "Hiểu file LSP/DCL, vòng đời load_dialog/new_dialog/start_dialog/unload_dialog và xử lý Cancel.",
  "status": "published",
  "chapterId": "chapter.autolisp.xay-dung-tool",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.tool-error-undo-file-du-lieu"
  ],
  "flow": [
    {
      "label": "Chuẩn bị",
      "detail": "DCL mô tả tile, LSP chứa logic"
    },
    {
      "label": "Hiển thị",
      "detail": "Nạp DCL, mở dialog, đọc status"
    },
    {
      "label": "Dọn dẹp",
      "detail": "Unload dialog và kiểm tra dữ liệu trước khi sửa DWG"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoLISP Developer's Guide",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; thử lại trên phiên bản đang dùng",
      "platform": "Windows / macOS"
    }
  ]
}
---

## DCL làm việc gì

DCL mô tả hình thức hộp thoại; AutoLISP nạp DCL, đặt giá trị tile, bắt hành động nút bấm và quyết định xử lý bản vẽ. Đây là hai file khác nhau. Trong tool kiểm tra layer tuyến, dialog có thể nhận tên layer cần đối chiếu và nút OK/Cancel; logic đếm hoặc sửa vẫn phải ở LSP.

```text
tool.lsp → load_dialog("tool.dcl") → new_dialog → action_tile → start_dialog
                                      ↓ status OK/Cancel → unload_dialog
```

Nếu `load_dialog` trả ID không hợp lệ, dừng trước `new_dialog`. Nếu người dùng Cancel, không dùng lại dữ liệu nhập của lần trước. Callback của `action_tile` nên ngắn: nhận trạng thái, kiểm tra nhẹ và đóng dialog; không gọi `command` trực tiếp từ action expression. Tìm file bằng đường dẫn đã xác định, không mặc định thư mục hiện hành của AutoCAD là thư mục mã.

## Bài luyện

Viết bảng ba trạng thái: thiếu file DCL, người dùng OK với dữ liệu rỗng, người dùng Cancel. Với mỗi trạng thái, ghi thông báo, có sửa bản vẽ hay không và lúc nào gọi `unload_dialog`. Sau đó mới thiết kế dialog thật.
