---
{
  "id": "concept.civil3d-dotnet.surface-findelevationatxy",
  "slug": "surface-findelevationatxy",
  "title": "Surface.FindElevationAtXY",
  "description": "Đọc cao độ Surface tại tọa độ XY.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Surface.FindElevationAtXY",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    },
    {
      "title": "Tài liệu chính thức — Surface.FindElevationAtXY",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Tài liệu chính thức — Surface.FindElevationAtXY",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm"
    },
    {
      "title": "Tài liệu chính thức — Surface.FindElevationAtXY",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-UserGuide/files/GUID-1BFB673D-F667-410A-9400-0FAABEB5951C.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
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

Mẫu nhắm Civil 3D 2025 đầy đủ trên Windows x64, `net8.0-windows`, theo [hướng dẫn reference 2025](https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm). Reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll`, `AecBaseMgd.dll`, `AeccDbMgd.dll` từ cùng bộ cài 2025; `Copy Local = False`. Kiểm tra runtime của mức cập nhật thực tế trước khi build. Plain AutoCAD hoặc Object Enabler không phải host Civil 3D đầy đủ. Đây là mẫu đối chiếu tài liệu, chưa build hoặc chạy trong host.

## Cú pháp và kết quả

```csharp
public double FindElevationAtXY(double x, double y);
```

Trả cao độ tại X/Y trong hệ tọa độ bản vẽ. Tọa độ ngoài miền Surface phát `Autodesk.Civil.PointNotOnEntityException`. [API Autodesk 2022, AeccDbMgd 13.4.208.0](https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm) là nguồn chữ ký; mẫu dùng reference 2025.

## Ví dụ có ngữ cảnh

Helper đặt trong class DLL Civil 3D. Caller chọn Civil Surface, kiểm prompt `OK`, mở ID `ForRead` trong transaction của cùng database và kiểm kiểu. Truyền object khi transaction còn sống; `xWcs/yWcs` là tọa độ WCS đã xác định, không phải tọa độ màn hình hoặc điểm ngoài hệ tọa độ DWG.

```csharp
using Autodesk.Civil;
using CivSurface = Autodesk.Civil.DatabaseServices.Surface;

static double? TryReadElevation(
    CivSurface surface, double xWcs, double yWcs)
{
    try
    {
        return surface.FindElevationAtXY(xWcs, yWcs);
    }
    catch (PointNotOnEntityException)
    {
        return null;
    }
}
```

## Kết quả và thử trên dữ liệu nhỏ

Với TIN đã dựng từ ba đỉnh (0,0,10), (10,0,20), (0,10,10), không thêm dữ liệu khác hoặc boundary loại điểm: tại (2,3), cao độ kỳ vọng 12. So sánh với Inquiry tại đúng X/Y. Đây là kết quả tính toán minh họa cần đối chiếu trong host.

Điểm (20,20) ngoài tam giác phải đi vào nhánh `null`. Hiển thị “ngoài miền surface” cùng tên surface; không thay bằng 0 vì cao độ 0 có thể hợp lệ. Surface rỗng hoặc miền bị boundary loại bỏ cần xử lý dựa trên dữ liệu thực tế, không coi việc chọn object thành công là đủ để có cao độ.

Esc ở prompt chọn surface/điểm kết thúc command. Chọn AutoCAD Surface hoặc entity khác không được gọi helper này. Không catch mọi ngoại lệ để giả thành ngoài miền. Lệnh đọc không tự rebuild surface; kiểm tra definition và trạng thái cập nhật khi kết quả bất ngờ.
