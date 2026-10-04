---
{
  "id": "lesson.autolisp.command-line-file-lsp",
  "slug": "command-line-file-lsp",
  "title": "Nạp file LSP",
  "description": "Biết nơi viết, nơi chạy, và vì sao Save chưa cập nhật lệnh đang được AutoCAD giữ.",
  "status": "published",
  "chapterId": "chapter.autolisp.bat-dau",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.autolisp.bat-dau-autolisp"
  ],
  "flow": [
    {
      "label": "Soạn",
      "detail": "Chỉnh file .lsp trong editor và Save"
    },
    {
      "label": "Nạp",
      "detail": "APPLOAD hoặc load đưa mã mới vào AutoCAD"
    },
    {
      "label": "Gọi",
      "detail": "Gõ tên command tại Command Line và đọc phản hồi"
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
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "illustration": "terminal"
}
---
<span id="hai-cửa-sổ-làm-hai-việc-khác-nhau" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Soạn và chạy mã

Editor lưu **mã nguồn**; AutoCAD thực thi bản mã đã **nạp**. Command Line là nơi người dùng đưa yêu cầu và thấy prompt/kết quả. Nếu sửa file nhưng chưa nạp lại, AutoCAD vẫn có thể chạy định nghĩa lệnh cũ. Đây là nguyên nhân thường gặp khi mới học.

| Hành động | Thay đổi ở đâu? | Điều chưa tự xảy ra |
| --- | --- | --- |
| Save `hello.lsp` | File trên đĩa | AutoCAD chưa nạp lại |
| APPLOAD | Bộ nhớ phiên AutoCAD | File trên đĩa không tự sửa |
| Gõ `HELLO` | Command Line gọi `c:HELLO` | Không tự mở editor |

<span id="thử-nhận-biết-bản-mã-đang-chạy" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra phiên bản mã

Trong file thử, sửa chuỗi phản hồi thành `Ban B`. Save nhưng chưa APPLOAD lại và gọi `HELLO`; ghi dòng hiện ra. Sau đó APPLOAD lại và gọi một lần nữa. Nếu kết quả không đổi, kiểm tra bạn có hai file cùng tên ở hai thư mục khác nhau không. Ghi đường dẫn tuyệt đối của file đã nạp vào nhật ký thử.

Có thể dùng `(load "đường-dẫn")` tại Command Line khi bạn hiểu chuỗi đường dẫn; APPLOAD dễ bắt đầu hơn vì có giao diện chọn file. Khi xây tool cho nhóm, cần quản lý đường dẫn và cách nạp ổn định, không dựa vào thư mục hiện hành tình cờ.

## Thực hành

Vẽ sơ đồ bốn ô: editor, file trên đĩa, AutoCAD đã nạp, Command Line. Đặt mũi tên cho Save, APPLOAD và gọi lệnh. Giải thích lỗi “Unknown command” bằng sơ đồ đó trước khi sửa code.
