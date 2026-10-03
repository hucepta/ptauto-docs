---
{"id":"lesson.autolisp.bat-dau-autolisp","slug":"bat-dau-autolisp","title":"Từ thao tác lặp đến lệnh AutoLISP đầu tiên","description":"Hiểu AutoLISP, Command Line, file LSP, VS Code/AutoLISP Extension và chạy một lệnh nhỏ trong AutoCAD.","status":"published","chapterId":"chapter.autolisp.bat-dau","order":1,"difficulty":"co-ban","sources":[{"title":"Autodesk — AutoLISP Developer's Guide","url":"https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"},{"title":"Autodesk — Getting Started with Visual Studio Code","url":"https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP/files/GUID-7BE00235-5D40-4789-9E34-D57685E83875.htm"}],"compatibility":[{"product":"AutoCAD","version":"Có hỗ trợ AutoLISP; thực hành tham chiếu AutoCAD 2026","platform":"Windows"}]}
---

## Bắt đầu từ một việc thật

Giả sử 500 ghi chú trong hồ sơ hạ tầng phải được kiểm tra layer. Nếu mỗi ghi chú đều cần cùng một thao tác, bạn có thể mô tả quy tắc một lần rồi để AutoCAD thực hiện lặp. Đó là chỗ AutoLISP hữu ích. Nó là ngôn ngữ chạy trong AutoCAD để tạo lệnh theo quy trình của bạn; nó không tự hiểu bản vẽ hay quyết định layer nào đúng.

| Câu hỏi | Ví dụ kiểm tra ghi chú |
| --- | --- |
| Đầu vào là gì? | Các đối tượng TEXT người dùng chọn |
| Quy tắc là gì? | Đọc layer của từng TEXT, so với layer quy định |
| Đầu ra là gì? | Danh sách đối tượng sai và số lượng cần xử lý |

Trước khi sửa bản vẽ bằng code, ta bắt đầu bằng lệnh chỉ in thông báo. Nhờ vậy bạn biết chắc file đã được soạn, nạp và chạy đúng nơi.

## Những nơi bạn sẽ làm việc

**VS Code** là trình soạn file `.lsp`. **AutoCAD AutoLISP Extension** giúp nhận diện cú pháp và gỡ lỗi trong môi trường được hỗ trợ. **VLIDE** là môi trường biên tập Visual LISP có trên AutoCAD Windows hỗ trợ tính năng này. **AutoCAD Command Line** là nơi gọi `APPLOAD`, gõ tên lệnh và xem phản hồi. Mã chạy trong AutoCAD, không chạy trong ô soạn thảo như một chương trình độc lập.

```text
Bạn viết hello.lsp → Save file → APPLOAD trong AutoCAD → gõ HELLO → đọc phản hồi
```

Save chỉ cập nhật file trên đĩa. Nếu AutoCAD đang giữ bản mã cũ, bạn phải nạp lại file sau khi Save.

## Tạo và chạy HELLO

Tạo thư mục học riêng, lưu đoạn sau thành `hello.lsp` bằng mã hóa UTF-8. Trong bài đầu, dùng chuỗi không dấu để loại trừ lỗi font khi kiểm tra việc nạp; các bài sau sẽ dùng tiếng Việt đúng môi trường.

```lisp
(defun c:HELLO ()
  (princ "\nXin chao AutoCAD!")
  (princ)
)
```

Mở một DWG thử. Gõ `APPLOAD`, chọn `hello.lsp`, sau đó gõ `HELLO` tại Command Line. Dòng `c:HELLO` định nghĩa lệnh, còn khi gọi bạn chỉ gõ `HELLO`. `princ` đầu in thông báo; `princ` cuối kết thúc gọn, không in giá trị trả về thừa.

## Tự kiểm tra

Đổi thông báo thành `Da nap ban moi`, Save và nạp lại. Nếu vẫn thấy dòng cũ, kiểm tra đường dẫn file đã nạp. Nếu AutoCAD báo không biết `HELLO`, kiểm tra tên file, việc nạp và dấu ngoặc. Ghi lại ba bước bạn thực hiện và phản hồi nhận được; đó là quy trình gỡ lỗi đầu tiên.
