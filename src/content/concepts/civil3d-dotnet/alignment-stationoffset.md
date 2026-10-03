---
{
  "id": "concept.civil3d-dotnet.alignment-stationoffset",
  "slug": "alignment-stationoffset",
  "title": "Alignment.StationOffset",
  "description": "Từ Easting/Northing tính station và offset của điểm so với Alignment.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.StationOffset",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
    },
    {
      "title": "Tài liệu chính thức — Alignment.StationOffset",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
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

## Cú pháp

```csharp
public void StationOffset(double easting, double northing,
                          ref double station, ref double offset);
```

`easting` và `northing` là X/Y; hai biến `ref` nhận station và offset. [Chữ ký Autodesk 2022, AeccDbMgd 13.4.208.0](https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm) mô tả `PointNotOnEntityException` khi tọa độ ngoài phạm vi Alignment; SDK mẫu vẫn là 2025.

## Ví dụ có ngữ cảnh

Helper nằm trong class DLL, nhận `Alignment` đã mở `ForRead` bằng transaction còn sống và `Point3d` trong WCS của cùng DWG. Command chọn Alignment bằng `GetEntity`, kiểm `PromptStatus.OK`, mở ID, kiểm `is Alignment`, rồi gọi helper trước khi dispose transaction. Command cũng kiểm kết quả `GetPoint`; khi chuyển từ dữ liệu/UCS, xác định hệ tọa độ rõ ràng.

```csharp
using Autodesk.AutoCAD.Geometry;
using Autodesk.Civil;
using Autodesk.Civil.DatabaseServices;

static (double Station, double Offset)? TryStationOffset(
    Alignment alignment, Point3d pointWcs)
{
    double station = 0.0;
    double offset = 0.0;
    try
    {
        alignment.StationOffset(pointWcs.X, pointWcs.Y,
                                ref station, ref offset);
        return (station, offset);
    }
    catch (PointNotOnEntityException)
    {
        return null;
    }
}
```

## Kết quả và đối chiếu

Với tuyến thẳng thử theo trục X từ (0,0) đến (100,0), starting station 0, không station equation: điểm (40,0) kỳ vọng station 40, offset 0. Đối chiếu điểm lệch khỏi tim với công cụ Inquiry của Civil 3D và quy ước phía của tuyến; không tự suy dấu offset từ hướng màn hình.

Điểm ngoài phạm vi trả `null`, không xuất cặp 0/0 như kết quả thành công. Esc ở bước chọn Alignment/điểm kết thúc command; chọn sai kiểu yêu cầu chọn lại hoặc dừng trước khi gọi helper. Lỗi khác vẫn phải báo, không gom mọi lỗi vào nhánh ngoài tuyến. `PointLocation` thực hiện chiều biến đổi ngược; không nhầm station số với chuỗi station định dạng.
