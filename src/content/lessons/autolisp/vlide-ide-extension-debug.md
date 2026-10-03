---
{"id":"lesson.autolisp.vlide-ide-extension-debug","slug":"vlide-ide-extension-debug","title":"VLIDE, AutoLISP Extension và cách khoanh vùng lỗi","description":"Biết vai trò của IDE/debugger và sửa lỗi theo nơi chạy, file nạp, cú pháp, dữ liệu, luồng.","status":"published","chapterId":"chapter.autolisp.bat-dau","order":3,"difficulty":"co-ban","prerequisites":["lesson.autolisp.command-line-file-lsp"],"flow":[{"label":"Quan sát","detail":"Ghi prompt và phản hồi lỗi thực tế"},{"label":"Khoanh vùng","detail":"Kiểm file, nơi chạy, biểu thức và giá trị"},{"label":"Thử lại","detail":"Sửa một điểm, nạp lại và so kết quả"}],"sources":[{"title":"Autodesk — AutoLISP Developer's Guide","url":"https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"},{"title":"Autodesk — Getting Started with AutoLISP Extension","url":"https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP/files/GUID-7BE00235-5D40-4789-9E34-D57685E83875.htm"}],"compatibility":[{"product":"AutoCAD","version":"VLIDE và một số tính năng debug phụ thuộc nền tảng/phiên bản","platform":"Windows / macOS"}]}
---

## IDE là công cụ hỗ trợ, không phải nơi AutoCAD tự chạy mã

**IDE** là môi trường để soạn, xem và gỡ lỗi. VS Code cùng **AutoCAD AutoLISP Extension** giúp tô cú pháp và, ở môi trường được hỗ trợ, kết nối debug với AutoCAD. **VLIDE** là môi trường Visual LISP của AutoCAD trên Windows có hỗ trợ. Tên “Visual LISP” ở đây liên quan công cụ và phần mở rộng ngôn ngữ; bài đầu không cần dùng COM/ActiveX.

## Một thứ tự tìm lỗi hữu ích

1. **Nơi chạy:** bạn đang gõ biểu thức ở AutoCAD Command Line hay ở cửa sổ editor?
2. **Bản mã:** file `.lsp` nào đã Save và nạp? Dòng phản hồi có phải bản mới?
3. **Cú pháp:** ngoặc, dấu nháy, tên hàm/lệnh có đúng không?
4. **Dữ liệu:** biến đang là số, chuỗi, list hay `nil`?
5. **Luồng:** điều kiện nào được vào; vòng lặp có điểm dừng không?

Debugger hỗ trợ đặt breakpoint, xem Variables/Watch và đi từng bước. Nhưng ngay cả khi chưa thiết lập debugger, bạn vẫn có thể thử biểu thức nhỏ tại Command Line, in một giá trị trung gian rồi đối chiếu kết quả mong đợi. Tránh sửa nhiều chỗ một lượt vì sẽ mất dấu nguyên nhân.

## Bài luyện

Cố ý bỏ một dấu ngoặc đóng trong bản sao `hello.lsp`; ghi thông báo lỗi. Trả ngoặc về, Save và nạp lại. Sau đó đổi tên hàm `c:HELLO` nhưng vẫn gõ `HELLO`; xác định lỗi lúc nạp hay lúc gọi. Hoàn tác các thay đổi thử trước khi học bài tiếp.
