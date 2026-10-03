---
{
  "id": "concept.autocad-dotnet.active-document",
  "slug": "active-document",
  "title": "Application.DocumentManager.MdiActiveDocument",
  "description": "Lấy Document đang hoạt động để truy cập Editor và Database.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Application.DocumentManager.MdiActiveDocument",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_ApplicationServices_DocumentCollection_MdiActiveDocument.html"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
    },
    {
      "title": "Tài liệu chính thức — Application.DocumentManager.MdiActiveDocument",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Đối chiếu chữ ký với SDK phiên bản đích.",
      "platform": "Windows"
    }
  ],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Môi trường và phạm vi

Mẫu nhắm SDK AutoCAD 2025 (API 25.0), `net8.0-windows`, Windows x64; bộ reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll` cùng phiên bản, `Copy Local = False`. Phạm vi .NET 8 là AutoCAD 2025 đến Update 1.3; Update 1.4 trở lên dùng .NET 10 theo [bảng tương thích Autodesk](https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm). Chưa build hoặc chạy các đoạn này trong host. Không suy rộng sang bản 2026/2027.

## Vai trò

`Application.DocumentManager.MdiActiveDocument` lấy `Document` của tab bản vẽ đang hoạt động. Từ đó lấy `doc.Database` và `doc.Editor`; hai đối tượng phải cùng tài liệu. [Document trong Autodesk .NET](https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm).

## Ví dụ có ngữ cảnh

Đặt phương thức sau trong class của DLL command đã nạp bằng `NETLOAD`; command gọi `PrintActiveDrawing()` khi đang ở document context. Đây là helper, không phải chương trình console hoặc một plugin hoàn chỉnh.

```csharp
using Autodesk.AutoCAD.ApplicationServices;
using AcApplication = Autodesk.AutoCAD.ApplicationServices.Core.Application;

static void PrintActiveDrawing()
{
    Document doc = AcApplication.DocumentManager.MdiActiveDocument;
    if (doc == null) return;
    doc.Editor.WriteMessage("\nBản vẽ hiện hành: " + doc.Name);
}
```

## Kết quả và kiểm tra

Mở A.dwg rồi chạy command gọi helper: dòng lệnh phải hiện tên A.dwg. Đổi tab sang B.dwg và chạy lại: phải hiện B.dwg. Khi không có document, helper kết thúc; không truy cập `Database` hoặc `Editor` qua giá trị null.

Không cache `Document` toàn cục cho các lần chạy sau. Trong callback modeless hoặc thao tác tài liệu khác, xác định lại document đích và cơ chế `DocumentLock` trước khi ghi. Việc lấy `MdiActiveDocument` chưa mở transaction và không tự cấp quyền ghi.
