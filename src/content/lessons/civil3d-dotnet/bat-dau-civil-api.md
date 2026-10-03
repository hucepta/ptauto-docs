---
{"id":"lesson.civil3d-dotnet.bat-dau-civil-api","slug":"bat-dau-civil-api","title":"Nhận diện mô hình Civil 3D trước khi viết lệnh","description":"Phân biệt AutoCAD Database với CivilDocument, chuẩn bị host đúng và đọc tuyến đầu tiên.","status":"published","chapterId":"chapter.civil3d-dotnet.bat-dau","order":1,"difficulty":"co-ban","sources":[{"title":"Autodesk — Civil 3D .NET API Developer's Guide","url":"https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"},{"title":"Autodesk — AutoCAD Document Object","url":"https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"}],"compatibility":[{"product":"Civil 3D .NET","version":"SDK và host Civil 3D cùng thế hệ API","platform":"Windows"}]}
---

## Vấn đề

Một DWG có thể mở được trong AutoCAD thường, nhưng lệnh đọc Alignment vẫn không chạy: đối tượng Civil cần **host Civil 3D** và các thư viện API phù hợp. Trước khi viết lệnh, hãy phân biệt các lớp chương trình tham gia.

Civil 3D dùng hạ tầng `Database` và `Transaction` của AutoCAD để lưu và đọc đối tượng. Trên đó là các đối tượng Civil: `Alignment` (tuyến), `Profile` (trắc dọc), `Surface` (bề mặt), `Corridor` và mạng ống. `CivilDocument` cho bạn lối vào các tập ID đối tượng Civil; muốn đọc thuộc tính của một tuyến cụ thể, bạn mở ID ấy trong một transaction.

| Thành phần | Việc thường làm |
| --- | --- |
| `Document` / `Editor` của AutoCAD | Nhận lệnh, chọn đối tượng và thông báo kết quả. Đây là phần giao tiếp với người dùng. |
| `Database` / `Transaction` của AutoCAD | Mở `ObjectId` ở chế độ `ForRead` hoặc `ForWrite` trong một phạm vi được kiểm soát. |
| `CivilDocument` của Civil 3D | Trả các ID của `Alignment`, `Surface` và những tập đối tượng Civil khác. |

Một bản vẽ mở được trong AutoCAD thường không đủ để chạy plugin Civil. Hãy dùng Civil 3D đầy đủ với SDK phù hợp, không dựa vào Object Enabler như môi trường chạy API.

## Thực hành

Tạo bản sao DWG Civil 3D có ít nhất một Alignment. Trước khi viết code, ghi tên tuyến và số lượng tuyến đang thấy trong Toolspace. Lệnh đọc đầu tiên có thể lấy `CivilApplication.ActiveDocument`, gọi `GetAlignmentIds()`, rồi trong transaction mở từng ID ở chế độ `ForRead` để lấy tên. Không sửa dữ liệu trong bài đầu. Nếu collection rỗng, đó là kết quả hợp lệ cần thông báo chứ không phải lý do để lấy phần tử `[0]` tùy tiện.

```text
DWG Civil → CivilDocument → Alignment IDs → Transaction ForRead → tên tuyến → đối chiếu Toolspace
```

## Kiểm tra

Thử với bản vẽ trống và bản vẽ có hai Alignment. Mô tả bạn sẽ thông báo thế nào khi không có tuyến. Ghi lại phiên bản Civil 3D và API đã dùng; chỉ sau khi kết quả đọc khớp Toolspace mới chuyển sang station, offset và Profile.
