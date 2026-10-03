---
{
  "id": "concept.civil3d-dotnet.getsurfaceids",
  "slug": "getsurfaceids",
  "title": "CivilDocument.GetSurfaceIds",
  "description": "Liệt kê ID của các Surface trong bản vẽ Civil 3D.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.GetSurfaceIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/59b32dbe-7928-7fc4-cf12-2d16b1ce214f.htm"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm"
    },
    {
      "title": "Tài liệu chính thức — CivilDocument.GetSurfaceIds",
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

## Cú pháp và dữ liệu trả về

```csharp
public ObjectIdCollection GetSurfaceIds();
```

Không có đối số; trả collection ID của các Civil Surface trong bản vẽ, có thể rỗng. ID không phải object đã mở và không đảm bảo tất cả đều là `TinSurface`. [API Autodesk 2022, AeccDbMgd 13.4.208.0](https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/59b32dbe-7928-7fc4-cf12-2d16b1ce214f.htm) là nguồn chữ ký, không phải dependency cho mẫu 2025.

## Ví dụ có ngữ cảnh

Helper trong class DLL Civil 3D nhận `Database` của document đích. Tự lấy `CivilDocument` từ database này và tự mở transaction đọc. Alias tránh nhầm Civil Surface với AutoCAD Surface, như [hướng dẫn Autodesk](https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-DevGuide/files/GUID-655D3624-20DD-4E47-B0ED-484AA43FAB8B.htm).

```csharp
using System.Collections.Generic;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.Civil.ApplicationServices;
using CivSurface = Autodesk.Civil.DatabaseServices.Surface;

static string[] ReadSurfaceNames(Database db)
{
    var names = new List<string>();
    CivilDocument civilDoc = CivilDocument.GetCivilDocument(db);
    using (Transaction tr = db.TransactionManager.StartTransaction())
    {
        foreach (ObjectId id in civilDoc.GetSurfaceIds())
        {
            if (id.IsNull || !id.IsValid || id.IsErased) continue;
            if (tr.GetObject(id, OpenMode.ForRead) is CivSurface surface)
                names.Add(surface.Name);
        }
    }
    return names.ToArray();
}
```

## Kết quả và chọn surface

Hai surface EG, FG phải cho hai tên tương ứng; không dựa vào thứ tự collection. DWG không có surface trả mảng rỗng. Helper chỉ đọc và không thay đổi DWG; các chuỗi được sao chép trước khi transaction kết thúc.

Để tra cao độ, chọn theo tên/loại hoặc prompt chọn `TinSurface`; không mặc định `ids[0]`. Nếu prompt bao ngoài bị hủy, command dừng trước khi tra. Nếu gặp loại không phù hợp, báo tên/loại để người dùng chọn lại. Không lấy surface từ database A rồi mở nó bằng transaction của B.
