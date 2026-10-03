---
{
  "id": "lesson.civil3d-dotnet.moi-truong-civil",
  "slug": "moi-truong-civil",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.bat-dau",
  "order": 1,
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
      "product": "Civil 3D .NET",
      "version": "Ví dụ môi trường 2025/.NET 8; dùng SDK khớp phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "title": "Môi trường Civil",
  "description": "Chọn phiên bản, tạo project và nạp DLL trong Civil 3D.",
  "sources": [
    {
      "title": "Autodesk — Civil 3D developer guide",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
    },
    {
      "title": "Autodesk — CivilDocument members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    },
    {
      "title": "Autodesk — Add library references",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    }
  ]
}
---

## Chuẩn bị cùng một bộ công cụ

Trong Civil 3D chọn Help → **About Autodesk Civil 3D**, đọc năm phiên bản trước khi chọn project. Bài dùng Civil 3D 2025/.NET 8 làm ví dụ. AutoCAD nền và Civil references phải từ cùng bộ cài/SDK tương ứng; không ghép AcDbMgd của một năm với AeccDbMgd năm khác.

Visual Studio soạn/build DLL. Civil 3D chạy lệnh. Toolspace liệt kê mô hình DWG, không liệt kê assembly đã nạp. Hiểu ba cửa sổ giúp tránh tìm lỗi reference trong Prospector hoặc tìm tuyến trong Solution Explorer.

## Tạo project

1. Visual Studio → **Create a new project** → tìm **Class Library**, chọn C#/.NET → **Next**. Đặt tên PTCivilRead, chọn thư mục → **Next**, chọn .NET 8.0 → **Create**.
2. Nhấp phải project trong Solution Explorer → **Properties → Build**, chọn x64. Với ví dụ này, `.csproj` dùng `<TargetFramework>net8.0-windows</TargetFramework>`. Các năm Civil khác cần framework theo Autodesk.
3. Nhấp phải **Dependencies → Add Project Reference → Browse → Browse...**. Thêm AcCoreMgd.dll, AcDbMgd.dll, AcMgd.dll, AecBaseMgd.dll và AeccDbMgd.dll từ cài đặt/SDK Civil đúng năm. Thư viện nền có thể ở thư mục nền AutoCAD, Civil assemblies ở thư mục Civil; chọn đường dẫn thực tế bộ cài.
4. Chọn từng reference → **Properties → Copy Local = False**. Không phân phối Autodesk assemblies như DLL tiện ích.
5. Thay Class1.cs bằng code PT_CIVIL_NAMES trong bài Đọc tuyến đầu tiên. **Ctrl+S**, **Build → Build Solution**, **View → Output → Build**. DLL project nằm trong bin/Debug của target.

## Nạp đúng ứng dụng

1. Khởi chạy shortcut Autodesk Civil 3D 2025, mở PT_CIVIL_01.dwg. Ctrl+9 bật Command Line.
2. Gõ NETLOAD, chọn PTCivilRead.dll → **Open**. Nếu thư mục không đáng tin cậy, thêm thư mục học được quản lý qua **OPTIONS → Files → Trusted Locations** theo chính sách máy.
3. Gõ PT_CIVIL_NAMES, F2 đọc kết quả. DWG không có tuyến phải báo 0.
4. Sau khi sửa mã, lưu/build; đóng tiến trình Civil 3D đã nạp bản cũ rồi mở lại và NETLOAD DLL mới. Assembly đã nạp thường tồn tại đến lúc ứng dụng đóng.

## Chẩn đoán theo triệu chứng

Autodesk.Civil không tìm thấy khi build: xem AeccDbMgd reference và namespace. Application mơ hồ: dùng alias AcApp tách khỏi CivilApplication. Không tìm được assembly khi NETLOAD: kiểm tra đúng Civil 3D và target framework/API. Collection rỗng: quay về Prospector xem đúng DWG có tuyến, thay vì thêm reference.

Plugin đọc tuyến chưa cần thư viện Pressure Pipes. Chỉ thêm assembly mà API cụ thể yêu cầu để hiểu từng phụ thuộc.

## Bài tập

Thêm PT_CIVIL_HELLO in doc.Name và `CivilApplication.ActiveDocument.GetSurfaceIds().Count`. DWG chưa có mặt cho count 0. Ghi tên project, đường dẫn DLL và phiên bản đích vào README riêng để lần build sau chọn đúng file.
