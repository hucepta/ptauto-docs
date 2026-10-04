---
{
  "id": "project.autocad-dotnet.buoi-dau-ten-dwg-csharp",
  "slug": "buoi-dau-ten-dwg-csharp",
  "title": "Đọc tên DWG bằng C#",
  "description": "Viết một CommandMethod chỉ đọc Document.Name rồi kiểm tra DLL và DWG đang nạp.",
  "status": "published",
  "tags": [
    "buoi-dau",
    "cong-cu"
  ],
  "aliases": [],
  "searchableTerms": [],
  "sources": [
    {
      "title": "Autodesk — Managed .NET Compatibility 2025",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Microsoft — cài .NET trên Windows và phiên bản Visual Studio",
      "url": "https://learn.microsoft.com/en-us/dotnet/core/install/windows"
    },
    {
      "title": "Microsoft — Visual Studio Community và điều kiện sử dụng",
      "url": "https://visualstudio.microsoft.com/vs/community/"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "2025, managed API 25.0 / .NET 8; hướng dẫn cấu hình, chưa thử host",
      "platform": "Windows x64"
    }
  ],
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "expectedResult": "PTA_DWG_NAME in đường dẫn/tên của DWG hiện tại trong AutoCAD 2025; nhật ký tách kết quả build và kết quả chạy.",
  "prerequisites": [
    "lesson.autocad-dotnet.chuan-bi-cong-cu"
  ],
  "conceptIds": [
    "concept.autocad-dotnet.term-build-host"
  ],
  "exampleIds": [],
  "examplePlacements": []
}
---
## Chuẩn bị

Hoàn thành [chuẩn bị Visual Studio và AutoCAD](/hoc/autocad-dotnet/chuan-bi-cong-cu/) theo mốc AutoCAD 2025/.NET 8. Dùng project PtaFirst với references đúng năm, Copy Local=False. Dự án đọc Document.Name; không mở Transaction hay sửa hình học.

## Thực hành

1. Nhấn Windows, mở **Visual Studio 2022**. Chọn **Open a project or solution**, duyệt tới solution PtaFirst. Mở Class1.cs trong Solution Explorer. Thêm method dưới vào bên trong class FirstCommands đã có, trước dấu ngoặc đóng class; giữ các using hiện tại.

~~~csharp
[CommandMethod("PTA_DWG_NAME")]
public void DrawingName()
{
    var doc = Application.DocumentManager.MdiActiveDocument;
    if (doc != null)
        doc.Editor.WriteMessage("\nDWG hien tai: " + doc.Name);
}
~~~

2. Ctrl+S; chọn **Build > Build Solution**. Nếu DLL cũ đang bị host giữ, đóng phiên AutoCAD thử trước khi build lại. Ghi kết quả Build succeeded và đường dẫn DLL output, chưa ghi đã chạy.
3. Nhấn Windows, mở **AutoCAD 2025**. Tại Start chọn New rồi Ctrl+S lưu **ten-dwg-csharp.dwg** trong PTAutoHoc. Ctrl+9 hiện dòng lệnh.
4. Gõ **NETLOAD**, chọn DLL mới build đúng đường dẫn. Gõ **PTA_DWG_NAME**, Enter, rồi F2. Dòng phản hồi phải chứa ten-dwg-csharp.dwg; Document.Name của bản vẽ đã lưu có thể gồm đường dẫn đầy đủ.
5. Ctrl+Shift+S lưu bản sao **ten-dwg-csharp-2.dwg**, chạy lại lệnh. Đối chiếu phản hồi mới với tab DWG hiện tại; không hard-code tên trong code để làm phép thử vượt qua.

## Nghiệm thu

Nhật ký cần hai dòng tách biệt: build thành công bằng SDK nào, và lệnh chạy trong host nào với tên DWG nào. Cả hai DWG giữ hình học ban đầu. Ctrl+S lưu file sau thử.

Nếu namespace Autodesk không nhận diện, kiểm tra references. Nếu NETLOAD thất bại, đọc lỗi trước khi gọi lệnh; kiểm tra đúng host 2025 và target .NET 8. Nếu Unknown command, chắc rằng bạn đã thêm method vào class, build lại và nạp DLL mới trong phiên phù hợp.
