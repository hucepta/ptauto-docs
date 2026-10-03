---
{
  "id": "lesson.autolisp.autolisp-trong-autocad",
  "slug": "autolisp-trong-autocad",
  "title": "AutoLISP trong AutoCAD",
  "description": "Xác định nơi mã chạy và chọn một bài toán tự động hóa vừa sức.",
  "status": "published",
  "chapterId": "chapter.autolisp.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "prerequisites": [],
  "sources": [
    {
      "title": "Autodesk — entlast",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-75DBA9B2-034B-4377-A4E2-21D37B298D86.htm"
    },
    {
      "title": "Autodesk — type",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-506C9CC8-B0BD-4A4C-B4C2-006750504509.htm"
    },
    {
      "title": "Autodesk — car",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-2DD1AF33-415C-4C1A-9631-DA958134C53A.htm"
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

## Bạn đang tự động hóa việc gì?

AutoCAD giữ bản vẽ DWG và cung cấp lệnh như LINE, LAYER, LIST. AutoLISP chạy bên trong AutoCAD để điều khiển một phần quy trình đó. Một file LSP có thể định nghĩa nhiều hàm; chỉ hàm có tên bắt đầu bằng `c:` trở thành lệnh tại Command Line. Không cần tạo một chương trình riêng để làm tiện ích nhỏ.

Ví dụ học là kiểm tra số lượng LINE trong bản vẽ. Đầu vào là DWG hiện tại; quy tắc là lấy entity có loại LINE; đầu ra là một số. Việc đếm không thay thế kiểm tra chất lượng hình học: LINE trùng nhau vẫn được đếm riêng.

## Quan sát ba nơi làm việc

1. Trong AutoCAD, mở bản vẽ mới bằng **New**, chọn một template thông thường và lưu thành `hoc-lisp.dwg`.
2. Bật Command Line bằng **Ctrl+9** nếu thanh lệnh bị ẩn. Nhấp vào ô có dấu nhắc `Command:`, nhập `LINE`, chọn hai điểm rồi Enter để kết thúc.
3. Nhập `LIST`, chọn LINE vừa tạo rồi Enter. Đọc loại entity và layer trong cửa sổ văn bản; **F2** giúp xem lịch sử lệnh trên AutoCAD Windows.
4. Gõ biểu thức sau vào cùng ô lệnh, không gõ trong hộp Properties:

```lisp
(setq e (entlast))
(type e)
(cdr (assoc 0 (entget e)))
```

Bạn sẽ thấy kiểu `ENAME` rồi chuỗi `"LINE"`. Biến `e` là tham chiếu đến entity, không phải đường dẫn file và cũng không phải tọa độ. Nếu sau khi vẽ LINE bạn tạo CIRCLE, `entlast` sẽ trỏ CIRCLE; vì vậy thứ tự thao tác quan trọng.

## Chọn cách tiếp cận

Dùng `command` khi muốn đi theo câu hỏi của lệnh AutoCAD. Dùng `entget` để đọc dữ liệu DXF có cấu trúc. Dùng ActiveX ở mảng tiếp theo khi cần property hoặc collection trên Windows. .NET phù hợp khi công cụ lớn cần class, Transaction và tích hợp plugin; chưa cần chuyển công nghệ để làm bài đếm LINE.

## Khi kết quả khác dự kiến

Nếu `e` là nil, tạo một entity trước khi thử. Nếu lịch sử báo lỗi dấu ngoặc, dán lại từng biểu thức hoàn chỉnh; mỗi dấu `(` phải có dấu `)` tương ứng. Nếu Command Line đang hỏi điểm của LINE, nhấn Escape trước khi dán biểu thức mới.

## Bài tập

Tạo hai LINE và một CIRCLE, gọi `entlast` rồi đọc mã DXF 0. Ghi tên entity nào là cuối. Xóa CIRCLE bằng ERASE và gọi lại. Kết quả cần giải thích được bằng thứ tự tạo và trạng thái entity, không bằng vị trí nhìn thấy trên màn hình.
