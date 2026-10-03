---
{
  "id": "concept.civil3d-dotnet.tinsurface",
  "slug": "tinsurface",
  "title": "TinSurface",
  "description": "Bề mặt mạng tam giác không đều và cách đọc cao độ tại X/Y.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.tra-cao-do-tin"
  ],
  "examplePlacements": [
    {
      "heading": "tra-cao-độ-và-sai-sót",
      "exampleIds": [
        "example.civil3d-dotnet.tra-cao-do-tin"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — About Surfaces (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-UserGuide/files/GUID-1BFB673D-F667-410A-9400-0FAABEB5951C.htm"
    },
    {
      "title": "Autodesk — Tutorial: Creating and Adding Data to a Surface",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENG/Civil3D-Tutorials/files/GUID-899731B5-0B6A-451E-9CF2-0DCF00FA9B64.htm"
    },
    {
      "title": "Autodesk — FindElevationAtXY Method",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    },
    {
      "title": "Autodesk — Surface Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/920bd60e-abec-8757-d031-b9acc5d4753a.htm"
    },
    {
      "title": "Tài liệu chính thức — TinSurface",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    },
    {
      "title": "Tài liệu chính thức — TinSurface",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    },
    {
      "title": "Tài liệu chính thức — TinSurface",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm"
    }
  ],
  "aliases": [
    "TIN surface",
    "bề mặt TIN"
  ],
  "tags": [],
  "searchableTerms": [
    "FindElevationAtXY",
    "boundary",
    "breakline",
    "contour",
    "Rebuild"
  ]
}
---

## Môi trường và phạm vi

Mẫu nhắm Civil 3D 2025 đầy đủ trên Windows x64, `net8.0-windows`, theo [hướng dẫn reference 2025](https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm). Reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll`, `AecBaseMgd.dll`, `AeccDbMgd.dll` từ cùng bộ cài 2025; `Copy Local = False`. Kiểm tra runtime của mức cập nhật thực tế trước khi build. Plain AutoCAD hoặc Object Enabler không phải host Civil 3D đầy đủ. Đây là mẫu đối chiếu tài liệu, chưa build hoặc chạy trong host.

## Định nghĩa

`TinSurface` là Civil Surface biểu diễn địa hình bằng mạng tam giác không đều. Cao độ bên trong một tam giác được nội suy từ các đỉnh. Contour hiển thị là cách biểu diễn surface; nó không thay nguồn dữ liệu cao độ của object.

## Nguồn định nghĩa

Điểm và contour có thể là đầu vào; breakline giữ đặc trưng tuyến tính như mép đường hoặc rãnh và tác động đến mạng tam giác. Boundary giới hạn miền tham gia tính toán; mask chủ yếu dùng để ẩn/hiện nhưng vẫn giữ vùng trong tính toán. [About Surfaces — Autodesk 2025](https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-UserGuide/files/GUID-1BFB673D-F667-410A-9400-0FAABEB5951C.htm).

Ba đỉnh (0,0,10), (10,0,20), (0,10,10) tạo mặt phẳng z=10+x. Tại (2,3), cao độ minh họa là 12. Dựng trên bản sao DWG và giữ definition chỉ gồm ba đỉnh để đối chiếu phép nội suy.

## Tra cao độ và sai sót

`FindElevationAtXY` nhận X/Y trong hệ tọa độ DWG. Điểm ngoài miền dữ liệu phát `PointNotOnEntityException`; không thay lỗi này bằng cao độ 0. Mẫu tra cao độ liên kết ở phần này giữ tên surface trong thông báo. [API FindElevationAtXY Autodesk](https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm).

Không đổi interval contour để chữa TIN sai. Kiểm tra definition, breakline, boundary và trạng thái cập nhật. Lệnh đọc không tự rebuild; ghi nhận tên và hiện trạng mô hình để người kiểm tra biết kết quả đến từ surface nào.

## Ví dụ chọn đúng loại

Helper trong class DLL Civil 3D được command tương tác gọi với `doc.Editor`. Nó chỉ trả ID; caller mở ID bằng transaction của `doc.Database`, kiểm `is TinSurface`, rồi gọi `FindElevationAtXY` trước khi kết thúc transaction. [Cách truy cập/chọn Surface Autodesk](https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm).

```csharp
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.Civil.DatabaseServices;

static ObjectId SelectTinSurface(Editor ed)
{
    var options = new PromptEntityOptions("\nChọn TIN Surface: ");
    options.SetRejectMessage("\nĐối tượng phải là TinSurface.");
    options.AddAllowedClass(typeof(TinSurface), true);
    PromptEntityResult result = ed.GetEntity(options);
    return result.Status == PromptStatus.OK
        ? result.ObjectId
        : ObjectId.Null;
}
```

## Kết quả và tình huống kiểm tra

Chọn TIN hiện có trả ID hợp lệ; chọn LINE hoặc GridSurface bị từ chối để chọn lại; Esc trả `ObjectId.Null`, caller dừng trước khi mở transaction. Với bộ ba đỉnh ở trên, điểm (2,3) kỳ vọng Z=12, điểm (20,20) phải được báo ngoài miền. Các kết quả này là ca kiểm tra đề nghị, chưa phải kết quả host đã chạy.
