---
{
  "id": "lesson.autolisp.bien-kieu-du-lieu",
  "slug": "bien-kieu-du-lieu",
  "title": "Biến và kiểu dữ liệu",
  "description": "Gán giá trị bằng setq, phân biệt số, chuỗi, list và nil khi xử lý dữ liệu CAD.",
  "status": "published",
  "chapterId": "chapter.autolisp.ngon-ngu-co-ban",
  "order": 2,
  "difficulty": "co-ban",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "prerequisites": [
    "lesson.autolisp.bieu-thuc-evaluation"
  ],
  "conceptIds": [
    "concept.autolisp.setq"
  ],
  "sources": [
    {
      "title": "Autodesk — setq (AutoLISP)",
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-2F4B7A7B-7B6F-4E1C-B32E-677506094EAA-htm.html"
    },
    {
      "title": "Autodesk — Data Types (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-AutoLISP/files/GUID-7E568541-F1D0-49C4-B878-15880486825F.htm"
    }
  ],
  "illustration": "metadata"
}
---


## Gán và đọc giá trị

Dùng setq để gắn giá trị cho một symbol. Sau khi gán, nhập tên biến để đọc giá trị hiện tại.

    (setq radius 12.5)
    radius

Cả hai dòng đều có kết quả mong đợi 12.5. Tên biến nên thể hiện dữ liệu đang giữ: radius dễ hiểu hơn a. Trong bài này, biến tồn tại trong phiên làm việc; khi viết hàm riêng, bạn sẽ cần quản lý biến cục bộ.

## Chọn kiểu dữ liệu phù hợp

Số nguyên phù hợp với số lượng; số thực phù hợp với kích thước. Chuỗi có dấu ngoặc kép, chẳng hạn "WALL". List giữ nhiều giá trị theo thứ tự, chẳng hạn '(0.0 0.0 0.0).

Không đặt dấu ngoặc kép quanh số chỉ để dễ nhìn: "12.5" là chuỗi, không phải kích thước dạng số. Khi dữ liệu đi từ file hoặc hộp thoại vào chương trình, kiểm tra kiểu trước khi tính toán.

## nil là một kết quả cần xử lý

nil có thể biểu diễn trạng thái sai hoặc list rỗng. Một hàm tra cứu không tìm thấy dữ liệu cũng có thể trả nil. Đừng mặc định rằng mọi lần tra cứu đều thành công.

Thử gán (setq label "WALL" count 3), sau đó đọc từng biến. setq trả giá trị của biểu thức cuối, nên kết quả của lời gọi trên là 3, không phải cả hai giá trị.

