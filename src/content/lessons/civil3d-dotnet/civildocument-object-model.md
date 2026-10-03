---
{
  "id": "lesson.civil3d-dotnet.civildocument-object-model",
  "slug": "civildocument-object-model",
  "title": "CivilDocument và Object Model",
  "description": "Truy cập Civil objects qua Database, collections, styles, labels và settings đúng tài liệu.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.doi-tuong-thiet-ke",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [],
  "conceptIds": [
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.kiem-ke-doi-tuong"
  ],
  "examplePlacements": [
    {
      "heading": "collections-và-kiểu-đối-tượng",
      "exampleIds": [
        "example.civil3d-dotnet.kiem-ke-doi-tuong"
      ]
    }
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — Accessing Application and Document Objects (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-16B1A3F9-35F7-4703-B5FD-F2AC00E6AB57.htm"
    },
    {
      "title": "Autodesk — Using Collections Within the Document Object (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-5676A992-E881-4467-A1A7-4412425B5F36.htm"
    },
    {
      "title": "Autodesk — CivilDocument Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    },
    {
      "title": "Autodesk — Add Library References in the Reference Manager (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Autodesk — About Using the Object Enabler (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-UserGuide/files/GUID-14B478FB-81E2-44A5-808C-5546D61B5697.htm"
    }
  ],
  "tags": [
    "mô hình đối tượng",
    "dependency"
  ],
  "searchableTerms": [
    "CivilDocument",
    "CivilApplication",
    "ObjectIdCollection",
    "Styles",
    "Label Styles",
    "Settings",
    "AeccDbMgd"
  ]
}
---

## CivilDocument và Database

CivilDocument là điểm truy cập các đối tượng, styles và settings của bản vẽ Civil. `CivilApplication.ActiveDocument` lấy CivilDocument hiện hành; AutoCAD Document vẫn cung cấp Editor và Database. Hai lớp Application không phải một cây kế thừa chung. Khi xử lý nhiều DWG, lấy CivilDocument gắn với Database đích, tránh ghép collection của tab này với transaction của tab khác.

Các đối tượng như Alignment và TinSurface được lưu trong Database. ObjectId chỉ dẫn đến object trong database đang nạp; mở chúng qua transaction của Database tương ứng. Transaction còn sống là phạm vi truy cập wrapper, không phải nơi lưu kết quả báo cáo lâu dài.

## Collections và kiểu đối tượng

`GetAlignmentIds` và `GetSurfaceIds` trả collection ID; `CorridorCollection` cho phép duyệt các Corridor ID. Một collection rỗng là bản vẽ chưa có đối tượng thuộc nhóm đó, không phải exception. Không lấy phần tử đầu tiên khi chưa kiểm tra số lượng.

Ví dụ kiểm kê đọc tên và loại của Alignment, Surface, Corridor. Trên DWG có hai Alignment và một TinSurface, báo cáo phải có ba dòng tương ứng; Corridor rỗng không được tạo tên giả. Collection của Surface có thể chứa loại surface khác TIN, nên kiểm tra kiểu nếu bước sau chỉ hỗ trợ TinSurface.

## Style, Label Style và Settings

Style điều khiển biểu diễn của đối tượng; Label Style định nghĩa nội dung và trình bày nhãn. Chúng không thay thế dữ liệu hình học. Hai tuyến có cùng tên style không nhất thiết cùng hình học; đổi cách hiển thị contour không thay cao độ TIN.

Settings chứa mặc định và quy tắc hành vi theo phạm vi drawing, feature hoặc command. Template có thể không có style tên “Standard”; khi tạo đối tượng, kiểm tra tên và ID thực tế trước. Plugin chỉ đọc nên ghi nhận style hiện có, không thêm style để “sửa” một bản vẽ đang thiếu cấu hình.

## Dependency và môi trường mẫu

Ví dụ ở đây nhắm Civil 3D 2025, .NET 8, Windows x64. Reference nền theo Autodesk gồm `AcCoreMgd.dll`, `AcDbMgd.dll`, `AcMgd.dll`, `AecBaseMgd.dll` và `AeccDbMgd.dll`; đặt Copy Local thành False. Dùng file từ SDK/cài đặt đúng phiên bản, không chép DLL Civil vào thư mục tiện ích AutoCAD để giả lập host.

Cần Civil 3D đầy đủ cho bài thực hành. Object Enabler hỗ trợ xem và thao tác giới hạn qua AutoCAD, không được coi là môi trường nghiệm thu Civil API. Các mẫu chưa được biên dịch hay chạy trong host.

## Thực hành

Build DLL với reference đã chọn, mở bản sao DWG trong Civil 3D, dùng NETLOAD rồi gọi `PTA_CIVIL_INVENTORY`. Đối chiếu với Prospector, thử DWG rỗng và chuyển tab. Ghi bản build host, số dòng, tên object và lỗi dependency nếu có; không dùng kết quả build thay kết quả chạy.
