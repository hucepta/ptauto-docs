---
{
  "id": "lesson.autolisp.thu-muc-va-appload",
  "slug": "thu-muc-va-appload",
  "title": "Chuẩn bị file LSP",
  "description": "Soạn, lưu và nạp đúng file để tránh chạy bản mã cũ.",
  "status": "published",
  "chapterId": "chapter.autolisp.bat-dau",
  "order": 4,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — load",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F3639BAA-FD70-487C-AEB5-9E6096EC0255.htm"
    },
    {
      "title": "Autodesk — findfile",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-D671F67D-F92B-41FF-B9FA-A48EF52CF607.htm"
    },
    {
      "title": "Autodesk — Getting Started with Visual Studio Code",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP/files/GUID-7BE00235-5D40-4789-9E34-D57685E83875.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Phiên bản có hỗ trợ API được dùng",
      "platform": "Windows"
    }
  ]
}
---

## Tạo nơi lưu bài học

Chuẩn bị một thư mục riêng, ví dụ `C:/CAD-Hoc/Lisp` trên Windows. Lưu DWG học ở thư mục khác để phân biệt mã nguồn với dữ liệu bản vẽ. Một routine LSP được nạp vào bản vẽ hiện tại; lưu LSP không tự làm thay đổi routine đang có trong bộ nhớ AutoCAD.

## Soạn và lưu

1. Mở VS Code, chọn **File → Open Folder**, mở thư mục Lisp.
2. Chọn **File → New Text File**, dán đoạn dưới và dùng **File → Save As** lưu tên `pt-check.lsp`. Kiểm tra phần mở rộng là `.lsp`, không phải `.lsp.txt`.
3. Trong **Extensions**, tìm **AutoCAD AutoLISP Extension** của Autodesk và chọn **Install** nếu dùng VS Code để soạn/gỡ lỗi AutoLISP. Đọc yêu cầu phiên bản của extension; việc tô màu cú pháp chưa chứng minh mã đã nạp vào AutoCAD.

```lisp
(defun c:PTCHECK ()
  (princ "\nPTCHECK - ban 1")
  (princ)
)
```

## Nạp đúng file

Trong AutoCAD, gõ `APPLOAD`. Hộp **Load/Unload Applications** cho phép duyệt đến `pt-check.lsp`. Chọn file, bấm **Load**, đọc thông báo thành công rồi **Close**. Tại Command Line nhập `PTCHECK`. Bạn phải thấy `PTCHECK - ban 1`.

Nếu AutoCAD báo về vị trí không tin cậy, xác nhận nguồn file học của bạn. Trên Windows, mở **OPTIONS → Files → Trusted Locations** và thêm đúng thư mục mã của mình bằng **Add → Browse** theo giao diện phiên bản đang dùng. Giữ cơ chế kiểm tra mã của AutoCAD; thư mục tin cậy chỉ nên chứa mã bạn kiểm soát.

## Kiểm tra vòng sửa mã

Đổi `ban 1` thành `ban 2`, Save rồi gọi lại PTCHECK trước khi nạp. Kết quả vẫn là bản 1. Nạp lại bằng APPLOAD và chạy một lần nữa; lần này phải là bản 2. Đây là cách phân biệt lỗi file với lỗi routine đang chạy.

Bạn cũng có thể nạp bằng đường dẫn đầy đủ:

```lisp
(load "C:/CAD-Hoc/Lisp/pt-check.lsp")
```

Dấu `/` trong đường dẫn giúp tránh escape của dấu gạch chéo ngược. Dùng `findfile` để kiểm tra AutoCAD tìm được đường dẫn nào nếu có nhiều file cùng tên.

## Bài tập và xử lý lỗi

Tạo thêm file `pt-check-copy.lsp` với thông báo khác rồi nạp lần lượt. Tên hàm giống nhau sẽ nhận định nghĩa mới nhất; ghi đường dẫn mỗi lần nạp để nhận ra nguyên nhân. Nếu báo Unknown command, kiểm tra Load đã thành công, tên hàm là `c:PTCHECK` và bạn gọi `PTCHECK`. Nếu nạp báo lỗi cú pháp, xem dòng lỗi và kiểm tra dấu ngoặc trước khi thay đổi đường dẫn.
