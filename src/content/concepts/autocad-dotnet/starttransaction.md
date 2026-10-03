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

## Cú pháp

```csharp
public virtual Transaction StartTransaction();
```

## Cách gọi

```csharp
using var tr = db.TransactionManager.StartTransaction();
```

## Tham số và kết quả

db là Database của Document hoặc bản vẽ đích. Trả Transaction; Commit xác nhận thay đổi, Dispose khi chưa Commit hủy thay đổi trong transaction.

## Cách dùng

Dùng khi đọc tập ObjectId hoặc tạo entity trong một lệnh.

```csharp
using (var tr = db.TransactionManager.StartTransaction()) {
  var entity = tr.GetObject(id, OpenMode.ForRead) as Entity;
  // đọc dữ liệu
  tr.Commit();
}
```

## Kiểm tra khi áp dụng

Transaction không thay cho DocumentLock ở lệnh modeless hoặc bản vẽ khác.
