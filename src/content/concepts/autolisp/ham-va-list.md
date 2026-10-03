---
{
  "id": "concept.autolisp.ham-va-list",
  "slug": "ham-va-list",
  "title": "defun, mapcar, lambda và apply",
  "description": "Chọn giữa định nghĩa hàm, biến đổi từng phần tử và gọi hàm từ list đối số.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "aliases": [
    "hàm cục bộ",
    "hàm vô danh",
    "biến đổi list"
  ],
  "relatedConceptIds": [
    "concept.autolisp.list"
  ],
  "exampleIds": [
    "example.autolisp.thong-ke-danh-sach"
  ],
  "sources": [
    {
      "title": "Autodesk — defun (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5269529D-A013-4AB4-AAB7-DBA1C7CA73EB.htm"
    },
    {
      "title": "Autodesk — mapcar (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-AutoLISP-Reference/files/GUID-8802AE73-1A05-457E-8A51-09677C23E26E.htm"
    },
    {
      "title": "Autodesk — apply (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0574ADA0-0950-456A-9330-A2518421536E.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows, Mac OS, and Web"
    }
  ]
}
---

## Định nghĩa và kết quả

`defun` đặt tên cho nhóm biểu thức. Đối số đứng trước dấu `/`, biến cục bộ đứng sau; kết quả hàm là giá trị biểu thức cuối. Hàm tính toán nên trả dữ liệu, còn hàm có tiền tố `c:` điều phối lời nhắc và thông báo. Không dùng tên của hàm có sẵn để đặt tên module.

## Hai cách dùng list

`mapcar` tạo list kết quả bằng cách áp dụng hàm vào các phần tử tương ứng. `lambda` cung cấp hàm ngắn ngay tại lời gọi, phù hợp khi công thức chỉ dùng tại một chỗ. Cộng hai vector bằng `mapcar` yêu cầu cùng số tọa độ.

`apply` mở list thành các đối số của một lần gọi hàm. Tổng chiều dài dùng `apply` với `+`; nhân hệ số từng chiều dài dùng `mapcar`. Đây là hai hợp đồng dữ liệu khác nhau.

## Kiểm tra trước khi gọi

Không gọi phép nhân trên chuỗi và không chia trung bình cho số phần tử bằng 0. Ví dụ thống kê lọc số dương, biến đổi rồi cộng; thử thêm list rỗng để xác nhận hàm trả kết quả đã định nghĩa. Nếu logic dài hoặc cần tái sử dụng, tách `lambda` thành hàm có tên để dễ kiểm tra và đọc.
