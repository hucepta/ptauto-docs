---
{
  "id": "lesson.autolisp.vlide-ide-extension-debug",
  "slug": "vlide-ide-extension-debug",
  "title": "Soạn và gỡ lỗi LSP",
  "description": "Biết vai trò của IDE/debugger và sửa lỗi theo nơi chạy, file nạp, cú pháp, dữ liệu, luồng.",
  "status": "published",
  "chapterId": "chapter.autolisp.bat-dau",
  "order": 5,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.autolisp.command-line-file-lsp"
  ],
  "flow": [
    {
      "label": "Quan sát",
      "detail": "Ghi prompt và phản hồi lỗi thực tế"
    },
    {
      "label": "Khoanh vùng",
      "detail": "Kiểm file, nơi chạy, biểu thức và giá trị"
    },
    {
      "label": "Thử lại",
      "detail": "Sửa một điểm, nạp lại và so kết quả"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoLISP Developer's Guide",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"
    },
    {
      "title": "Autodesk — Getting Started with AutoLISP Extension",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-AutoLISP/files/GUID-7BE00235-5D40-4789-9E34-D57685E83875.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "VLIDE và một số tính năng debug phụ thuộc nền tảng/phiên bản",
      "platform": "Windows / macOS"
    }
  ],
  "illustration": "terminal"
}
---

## Vấn đề

Bạn đã tạo `hello.lsp`, nhưng khi gõ `HELLO` trong AutoCAD thì không thấy câu chào mới. Có ít nhất ba khả năng: file chưa lưu, AutoCAD đang giữ phiên bản cũ đã nạp, hoặc mã có lỗi. Bài này giúp phân biệt nơi **viết mã**, nơi **nạp mã** và nơi **chạy lệnh** trước khi tìm lỗi.

## IDE là gì?

**IDE** viết tắt của *Integrated Development Environment*, tiếng Việt là **môi trường phát triển tích hợp**. Một IDE gom các việc thường dùng khi lập trình vào một chỗ: mở file, tô màu cú pháp, tìm kiếm, gợi ý, chạy hoặc gỡ lỗi. Hãy hình dung bàn vẽ của kỹ sư: giấy, thước và bút đặt cạnh nhau để làm việc thuận tiện; bản thân bàn vẽ không thay thế công trình ngoài hiện trường. Tương tự, editor giúp bạn viết AutoLISP, còn AutoCAD là môi trường thực thi và tạo đối tượng trong DWG.

| Công cụ | Dùng để làm gì? | Đầu ra bạn nhìn thấy |
| --- | --- | --- |
| VS Code | Soạn và lưu file `.lsp`; cài AutoCAD AutoLISP Extension để có hỗ trợ ngôn ngữ và gỡ lỗi ở môi trường phù hợp | Nội dung file và dấu báo lỗi trong editor |
| VLIDE | Môi trường Visual LISP tích hợp trong AutoCAD bản Windows có hỗ trợ | Cửa sổ viết mã, kiểm tra biểu thức và debugger |
| AutoCAD Command Line | Nạp file bằng `APPLOAD` hoặc `(load "...")`, rồi gọi tên lệnh | Prompt, thông báo, đối tượng mới trong DWG |

**Extension** là phần mở rộng thêm khả năng cho một ứng dụng. AutoCAD AutoLISP Extension là phần mở rộng cho VS Code; nó không phải một file Lisp của bạn và không tự chạy lệnh trong bản vẽ. Autodesk hiện hướng người mới dùng VS Code với extension này. VLIDE vẫn hữu ích khi làm việc trong bản AutoCAD Windows hỗ trợ nó; đường đi và tính năng cụ thể phụ thuộc phiên bản AutoCAD.

## Một vòng viết và chạy lệnh

1. **Viết:** mở `hello.lsp` trong VS Code hoặc VLIDE, sửa câu trong `(princ "...")`.
2. **Lưu:** nhấn Save. Kiểm tên và đường dẫn file đang mở; dấu chấm ở tab editor thường cho biết nội dung chưa lưu.
3. **Nạp:** trong AutoCAD dùng `APPLOAD` chọn đúng `hello.lsp`. Việc lưu file không tự cập nhật hàm đã nạp ở phiên AutoCAD đang mở.
4. **Chạy:** gõ `HELLO` ở Command Line, rồi Enter. Tên lệnh đến từ hàm `c:HELLO`; trong editor bạn không gõ `HELLO` để tạo đối tượng trong DWG.
5. **Đối chiếu:** so prompt và hình trên bản vẽ với điều bạn mong đợi. Khi đổi mã, quay lại bước lưu và nạp.

```text
hello.lsp trong editor → Save → APPLOAD trong AutoCAD → gõ HELLO → xem Command Line/DWG
```

## Tìm lỗi từ nơi gần nhất

Nếu `HELLO` vẫn hiện thông báo cũ, trước tiên kiểm **file đã Save và đã APPLOAD lại chưa**. Nếu AutoCAD báo không biết lệnh, kiểm tên hàm `c:HELLO`, tên file và kết quả nạp. Nếu nạp file báo lỗi, kiểm dấu ngoặc, dấu nháy và biểu thức gần vị trí được nêu. Nếu lệnh chạy nhưng kết quả sai, kiểm kiểu dữ liệu (số, chuỗi, list hay `nil`) rồi điều kiện và vòng lặp.

Debugger cho phép đặt *breakpoint* (điểm tạm dừng), đi từng biểu thức và xem giá trị biến. Chỉ cần dùng nó khi đã xác định được bản mã mới đã nạp. Ở bài đầu, bạn cũng có thể thêm `(princ "đã tới đây")` vào một vị trí rồi Save, nạp lại, chạy để biết chương trình có đi qua đó không. Xóa dòng dò lỗi sau khi tìm được nguyên nhân.

## Thực hành

Tạo **bản sao** `hello.lsp`. Lần thứ nhất, sửa câu chào nhưng chưa Save, nạp lại và ghi kết quả; sau đó Save, nạp lại, so kết quả. Lần thứ hai, bỏ một dấu ngoặc đóng rồi Save và APPLOAD: ghi thông báo lỗi, sửa ngoặc, Save, nạp lại. Lần thứ ba, đổi `c:HELLO` thành `c:CHAO`, nạp lại và thử cả hai tên trong một phiên AutoCAD mới để tránh nhầm với định nghĩa cũ đã lưu trong bộ nhớ.

## Kiểm tra

Bạn chỉ đúng vị trí của file `.lsp`, VS Code/VLIDE, APPLOAD và Command Line trong vòng làm việc. Giải thích được vì sao **Save** chưa đủ để AutoCAD chạy bản mã vừa sửa và cho biết bước nào cần lặp lại khi sửa lỗi.
