---
{
  "id": "concept.autocad-dotnet.transaction-commit",
  "slug": "transaction-commit",
  "title": "Transaction.Commit",
  "description": "Lưu thay đổi transaction",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Transaction.Commit",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_Commit.html"
    },
    {
      "title": "Tài liệu chính thức — Transaction.Commit",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm"
    },
    {
      "title": "Tài liệu chính thức — Transaction.Commit",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Chữ ký theo tài liệu AutoCAD 2026; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "Transaction.Commit"
  ]
}
---

## Môi trường và phạm vi

Mẫu nhắm SDK AutoCAD 2025 (API 25.0), `net8.0-windows`, Windows x64; bộ reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll` cùng phiên bản, `Copy Local = False`. Phạm vi .NET 8 là AutoCAD 2025 đến Update 1.3; Update 1.4 trở lên dùng .NET 10 theo [bảng tương thích Autodesk](https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Customization/files/GUID-A6C680F2-DE2E-418A-A182-E4884073338A.htm). Chưa build hoặc chạy các đoạn này trong host. Không suy rộng sang bản 2026/2027.

## Cú pháp và ý nghĩa

```csharp
public virtual void Commit();
```

Không có tham số hoặc giá trị trả về. Xác nhận thay đổi của các `DBObject` đã mở trong transaction và đóng chúng. [Chữ ký Autodesk 2026](https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_Commit.html).

## Ví dụ có ngữ cảnh

Helper trong DLL command; truyền database hiện hành và ID của một LINE đã chọn thành công. Chạy trên bản sao DWG; LINE cần cho phép chỉnh sửa, không thuộc layer khóa. Nếu prompt bị hủy, command kết thúc trước khi gọi helper.

```csharp
using Autodesk.AutoCAD.DatabaseServices;

static bool SetLineColor(Database db, ObjectId id)
{
    if (id.IsNull || !id.IsValid || id.IsErased || id.Database != db)
        return false;
    using (Transaction tr = db.TransactionManager.StartTransaction())
    {
        if (tr.GetObject(id, OpenMode.ForRead) is not Line line)
            return false;
        line.UpgradeOpen();
        line.ColorIndex = 1; // ACI đỏ
        tr.Commit();
        return true;
    }
}
```

## Kết quả và đối chiếu

Sau khi helper trả `true`, Properties của LINE phải có Color là ACI 1 (đỏ). Chọn CIRCLE trả `false` và không sửa. Nếu lỗi xảy ra trước `Commit`, `using` dispose transaction, rollback thay đổi chưa xác nhận theo [hướng dẫn transaction](https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm).

`Commit` cập nhật database đang mở; không tương đương `SAVE`/ghi DWG ra ổ đĩa. Caller vẫn cần xử lý lỗi khóa/layer và quyền ghi của ngữ cảnh. Chỉ thông báo thành công sau khi commit hoàn tất, không commit trong `finally`.
