---
{
  "id": "lesson.autolisp.ham-dieu-kien-vong-lap",
  "slug": "ham-dieu-kien-vong-lap",
  "title": "Hàm và vòng lặp",
  "description": "Dùng defun, cond, vòng lặp, mapcar, lambda và apply để tách tính toán khỏi lệnh CAD.",
  "status": "published",
  "chapterId": "chapter.autolisp.ngon-ngu-co-ban",
  "order": 4,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.list-association-list"
  ],
  "conceptIds": [
    "concept.autolisp.ham-va-list"
  ],
  "exampleIds": [
    "example.autolisp.thong-ke-danh-sach"
  ],
  "exerciseIds": [
    "exercise.autolisp.thong-ke-danh-sach"
  ],
  "sources": [
    {
      "title": "Autodesk — defun (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-5269529D-A013-4AB4-AAB7-DBA1C7CA73EB.htm"
    },
    {
      "title": "Autodesk — cond (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-AutoLISP-Reference/files/GUID-7BA45202-D95F-4F2D-8D83-965024826074.htm"
    },
    {
      "title": "Autodesk — while (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-AutoLISP-Reference/files/GUID-E7C900DB-8B66-4109-BEF6-B0A18E8CF6B6.htm"
    },
    {
      "title": "Autodesk — repeat (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2018/ENU/AutoCAD-AutoLISP-Reference/files/GUID-413F72B4-BA37-4E5E-9D51-A0091130A317.htm"
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
      "version": "Có AutoLISP; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows / macOS"
    }
  ],
  "tags": [
    "AutoLISP"
  ],
  "examplePlacements": [
    {
      "heading": "biến-đổi-và-gom-kết-quả",
      "exampleIds": [
        "example.autolisp.thong-ke-danh-sach"
      ]
    }
  ],
  "illustration": "graph"
}
---

## Tách hàm tính toán khỏi lệnh

Hàm do `defun` định nghĩa nhận đối số, thực hiện các biểu thức rồi trả giá trị của biểu thức cuối. Phần sau dấu `/` khai báo biến cục bộ. Trong tiện ích đo chiều dài, hàm tính tổng nên nhận một list số và trả số; lệnh gọi hàm mới phụ trách chọn đối tượng, thông báo và ghi file. Cách chia này cho phép thử phép tính bằng dữ liệu nhỏ trước khi đụng bản vẽ.

Đừng kết thúc hàm tính toán bằng `princ` không đối số nếu người gọi cần kết quả số. Dùng tiền tố riêng như `pta:` cho hàm nội bộ để tránh ghi đè hàm có sẵn. Biến cấu hình cần giữ giữa các lần chạy có thể là biến toàn cục được đặt tên rõ, nhưng bộ đếm và kết quả trung gian phải cục bộ.

## Điều kiện và vòng lặp có điểm dừng

`if` chọn một trong hai nhánh; dùng `progn` nếu một nhánh cần nhiều biểu thức. `cond` thử lần lượt các điều kiện và dừng ở nhánh đầu tiên khác `nil`; nhánh `T` cuối cùng là trường hợp mặc định. Số 0 vẫn là giá trị đúng trong điều kiện AutoLISP, vì chỉ `nil` biểu thị sai.

`repeat` thích hợp khi biết số lần lặp dương. `while` thích hợp khi cần dừng theo điều kiện, chẳng hạn đọc cho đến hết danh sách. Mỗi vòng phải làm thay đổi bộ đếm hoặc phần dữ liệu còn lại. `foreach` giúp xử lý từng phần tử mà không tự quản lý chỉ số.

## Biến đổi và gom kết quả

`mapcar` gọi cùng một hàm trên các phần tử tương ứng rồi tạo list kết quả. `lambda` biểu diễn hàm ngắn ngay tại nơi dùng: tăng từng chiều dài thêm một hệ số hoặc cộng hai vector theo từng tọa độ. `apply` đưa cả list thành các đối số của một lời gọi, phù hợp để tính tổng bằng `+`.

Ví dụ đi kèm giữ lại số dương, dùng `mapcar` nhân hệ số và dùng `apply` tính tổng. Với dữ liệu `(12 -3 0 8)` và hệ số 2, kết quả biến đổi là `(24 16)`, tổng 40. Kiểm tra list rỗng trước khi chia để tính trung bình; không giả định mọi phần tử đều là số.

## Thực hành và lỗi cần phát hiện

Nạp file ví dụ bằng APPLOAD, chạy PTA_LIST_STATS và đối chiếu kết quả. Sau đó gọi hàm nội bộ với list rỗng, một phần tử và chuỗi lẫn số. Bài tập yêu cầu báo số phần tử hợp lệ và trung bình. Với chuỗi, dùng `strcat`, `itoa`, `rtos` đúng vai trò; chuyển chuỗi thành số phải được kiểm tra trước khi tính. Mẫu này chỉ tính toán và in kết quả, không sửa bản vẽ.
