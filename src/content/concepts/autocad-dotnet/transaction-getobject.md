---
{
  "id": "concept.autocad-dotnet.transaction-getobject",
  "slug": "transaction-getobject",
  "title": "Transaction.GetObject",
  "description": "Mở DBObject từ ObjectId bằng chế độ ForRead hoặc ForWrite.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Transaction.GetObject",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_GetObject_ObjectId_OpenMode.html"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    },
    {
      "title": "Tài liệu chính thức — Transaction.GetObject",
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

## Cú pháp

```csharp
public virtual DBObject GetObject(ObjectId id, OpenMode mode);
```

`id` xác định đối tượng; `mode` chọn `ForRead` hoặc `ForWrite`. Kết quả là `DBObject`, cần kiểm tra kiểu trước khi đọc thuộc tính riêng. [Chữ ký Autodesk 2026](https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_GetObject_ObjectId_OpenMode.html).

## Ví dụ có ngữ cảnh

Helper dưới đây nhận transaction đang mở và ID đã được command chọn thành công trong cùng database. Caller chịu trách nhiệm vòng đời transaction; helper không mở hoặc commit transaction khác.

```csharp
using Autodesk.AutoCAD.DatabaseServices;

static double? GetLineLength(Transaction tr, ObjectId id)
{
    if (id.IsNull || !id.IsValid || id.IsErased) return null;
    DBObject obj = tr.GetObject(id, OpenMode.ForRead);
    if (obj is not Line line) return null;
    return line.Length;
}
```

Caller lấy `doc.Database`, mở `using (Transaction tr = db.TransactionManager.StartTransaction())`, rồi gọi `GetLineLength(tr, id)` bên trong khối đó. Caller phải kiểm `id.Database == db`; helper không chuyển ID giữa DWG.

## Kết quả và lỗi thường gặp

Với LINE từ (0,0,0) đến (3,4,0), giá trị kỳ vọng là `5` đơn vị bản vẽ. Với polyline, kết quả là `null`, không phải chiều dài 0. ID rỗng hoặc bị xóa cũng trả `null`; lỗi database/transaction vẫn cần được command báo rõ.

Nếu hủy prompt, không gọi `GetObject`. Đọc dùng `ForRead`; muốn sửa phải mở `ForWrite` hoặc nâng chế độ mở phù hợp. Không sử dụng `DBObject` sau khi transaction kết thúc. [Quy tắc transaction Autodesk](https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm).
