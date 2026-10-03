---
{
  "id": "concept.autocad-dotnet.starttransaction",
  "slug": "starttransaction",
  "title": "TransactionManager.StartTransaction",
  "description": "Mở phạm vi đọc/ghi DBObject có kiểm soát.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — TransactionManager.StartTransaction",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_TransactionManager_StartTransaction.html"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    },
    {
      "title": "Tài liệu chính thức — TransactionManager.StartTransaction",
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

## Cú pháp và vòng đời

```csharp
public virtual Transaction StartTransaction();
```

Không có đối số; trả transaction mới từ `db.TransactionManager`. [Chữ ký Autodesk 2026](https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_TransactionManager_StartTransaction.html).

## Ví dụ có ngữ cảnh

Helper đặt trong class của DLL. Command truyền `doc.Database` của tài liệu đang làm việc và một `ObjectId` do `GetEntity`/selection trả về sau khi kiểm `PromptStatus.OK`. ID phải còn hợp lệ và thuộc database này. Không gọi helper trên transaction khác đang quản lý cùng đối tượng.

```csharp
using Autodesk.AutoCAD.DatabaseServices;

static double? ReadLineLength(Database db, ObjectId id)
{
    if (id.IsNull || !id.IsValid || id.IsErased || id.Database != db)
        return null;
    using (Transaction tr = db.TransactionManager.StartTransaction())
    {
        if (tr.GetObject(id, OpenMode.ForRead) is not Line line)
            return null;
        return line.Length;
    }
}
```

## Kết quả và kết thúc transaction

LINE dài 10 đơn vị trả `10`; CIRCLE hoặc ID bị xóa trả `null`. Helper chỉ đọc nên kết thúc bằng `Dispose` qua `using`; không tạo thay đổi cần commit. Nếu người dùng hủy chọn, command không gọi helper.

Để sửa dữ liệu, mở đối tượng `ForWrite`, gọi `Commit()` sau khi hoàn tất. Theo [vòng đời transaction](https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm), thay đổi chưa commit được rollback khi dispose. Chỉ trả giá trị đã sao chép; không trả `Line` đã đóng. Transaction không thay thế `DocumentLock` trong ngữ cảnh cần khóa.
