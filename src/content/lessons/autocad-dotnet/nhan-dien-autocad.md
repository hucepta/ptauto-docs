---
{
  "id": "lesson.autocad-dotnet.nhan-dien-autocad",
  "slug": "nhan-dien-autocad",
  "status": "published",
  "chapterId": "chapter.autocad-dotnet.bat-dau",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [],
  "conceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "exerciseIds": [],
  "tags": [],
  "searchableTerms": [],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Ví dụ môi trường 2025/.NET 8; dùng SDK khớp phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "title": "Nhận diện AutoCAD",
  "description": "Làm quen Command Line, Model, Layout, layer và Properties trước khi đọc API.",
  "sources": [
    {
      "title": "Autodesk — Command definition",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/OARX-DevGuide-Managed/files/GUID-F77E8FE0-8034-4704-93BD-F717608F8223.htm"
    },
    {
      "title": "Autodesk — Document object",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
    }
  ]
}
---

## Mục tiêu trước khi viết mã

Một plugin có thể thống kê sai phạm vi khi chọn Paper space trong khi người dùng muốn Model space, hoặc bỏ đối tượng trên layer tắt. Ta tạo bản vẽ có số liệu biết trước để hiểu các tình huống này bằng giao diện.

## Chuẩn bị bản vẽ

1. Mở AutoCAD → **New** → chọn template metric của máy. **Save As** thành `PT_OBJECTS.dwg`. Gõ `UCS` → Enter → `World` để đặt hệ tọa độ về WCS. Nhấn F12 tắt Dynamic Input để nhập tọa độ tuyệt đối ở Command Line.
2. Chọn tab **Model** dưới vùng vẽ. Gõ `LAYER` để mở **Layer Properties Manager**. Nhấn **New Layer**, đặt tên `PT_LINE`; tạo thêm `PT_CIRCLE`. Nhấp đôi `PT_LINE` để đặt layer hiện hành rồi đóng cửa sổ.
3. Gõ `LINE`, nhập `0,0`, `3,0` rồi Enter kết thúc. Tạo LINE thứ hai từ `0,0` tới `0,4`. Gõ `ZOOM` → `Extents` nếu chưa thấy.
4. Mở LAYER, đặt `PT_CIRCLE` hiện hành. Gõ `CIRCLE`, nhập tâm `10,0`, nhập bán kính `2`. Ta có hai LINE và một CIRCLE.

## Chọn và xem Properties

1. Nhấn **Esc** hai lần để kết thúc lệnh và bỏ lựa chọn cũ. Nhấp LINE nằm ngang. Nhấn **Ctrl+1** để hiện **Properties**. Xem loại `Line`, Layer `PT_LINE`, điểm đầu/cuối và Length `3`.
2. Chọn LINE thẳng đứng, Length phải là `4`. Tổng hai LINE là `7` đơn vị DWG, làm đáp án cho lệnh thống kê sau này.
3. Chọn CIRCLE. Properties phải cho Layer `PT_CIRCLE`, Radius `2`. Length của LINE không có cùng nghĩa với Radius; chương trình phải kiểm tra kiểu entity trước khi lấy property.
4. Gõ `LIST`, chọn một LINE rồi Enter. Đọc Handle trong lịch sử F2. Handle nhận diện đối tượng trong bản vẽ; ObjectId dùng khi database đang nạp sẽ được học ở bài mô hình.

## Model và Layout

Nhấp **Layout1**, đặt con trỏ ngoài viewport để làm việc trong Paper space. Vẽ một LINE dài 5 tại đây; nếu đang ở trong viewport, nhấp đôi vùng giấy trước. Trở lại Model và thấy ba đối tượng ban đầu. LINE trên giấy thuộc record khác; lệnh thống kê Model space không nên cộng nó.

Trong Model, mở LAYER và nhấp bóng đèn của `PT_LINE` để tắt. Hai LINE biến khỏi màn hình nhưng không bị xóa. Bật lại layer. Sau đó nhấp khóa của layer; thử chọn vẫn được nhưng sửa bị hạn chế. Phân biệt ẩn, khóa và xóa để thiết kế phản hồi của plugin.

## Kết quả và bài tập

Lưu DWG. Ghi bảng: Model có hai LINE tổng 7 và một CIRCLE; Paper space có một LINE dài 5. Dùng cửa sổ chọn bao cả Model rồi Shift+nhấp để bỏ CIRCLE. Số đối tượng chọn còn 2. Trong plugin, SelectionSet nhận lựa chọn; BlockTableRecord quyết định record duyệt khi không dùng selection.

Đổi layer của một LINE sang PT_CIRCLE bằng Properties. Kết quả vẫn có hai LINE; nhóm theo layer thay đổi nhưng nhóm theo kiểu không thay đổi. Undo để trở lại mẫu gốc. Bài tập giải thích vì sao type filter và layer filter phải được nêu riêng.
