---
{
  "id": "concept.autolisp.initget",
  "slug": "initget",
  "title": "initget: ràng buộc và từ khóa nhập",
  "description": "Đặt điều kiện chỉ cho lần nhập kế tiếp và xử lý kết quả số hoặc từ khóa.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "api",
  "aliases": [
    "kiểm tra dữ liệu nhập",
    "getkword",
    "bit nhập liệu"
  ],
  "relatedConceptIds": [
    "concept.autolisp.error-undo"
  ],
  "exampleIds": [],
  "sources": [
    {
      "title": "Autodesk — initget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9ED8841B-5C1D-4B3F-9F3B-84A4408A6BBF.htm"
    },
    {
      "title": "Autodesk — About The Getxxx Functions",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-5D9F55C4-97FE-4FF1-81D2-C9F5905C2E25.htm"
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

## Cú pháp và phạm vi

`(initget [bits] [keywords])` cấu hình lần gọi hàm nhập kế tiếp rồi trả `nil`. Nó không lưu quy tắc cho toàn lệnh. Gọi lại trước mỗi bước cần ràng buộc; kiểm tra hàm nhận có hỗ trợ bit đã đặt hay không.

## Chọn bit theo yêu cầu

Bit 1 cấm Enter rỗng, 2 cấm 0, 4 cấm số âm. Với số đoạn chia, tổng 7 yêu cầu số dương bắt buộc; tổng 6 cho phép Enter để lấy mặc định do chương trình xử lý. Ràng buộc này không ngăn người dùng hủy bằng Esc.

Chuỗi từ khóa có các lựa chọn cách nhau bởi khoảng trắng. Khi đăng ký từ khóa cho `getreal` hay `getpoint`, kết quả có thể là chuỗi thay cho kiểu dữ liệu thông thường. Phân nhánh từ khóa trước khi thực hiện phép tính.

## Những lỗi hay gặp

`getstring` không dùng từ khóa của `initget`. Không suy ra bit cấm số âm sẽ kiểm tra mọi thành phần tọa độ của `getpoint`. Lời nhắc cần nêu lựa chọn và giá trị mặc định; Enter và Esc phải có hành vi riêng. Thực hành nhập 0, số âm, Enter và từ khóa ở từng bước để kiểm tra hợp đồng đầu vào.
