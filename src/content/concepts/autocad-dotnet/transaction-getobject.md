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
public virtual DBObject GetObject(
    ObjectId id,
    OpenMode mode
);
```

## Cách gọi

```csharp
DBObject obj = tr.GetObject(id, OpenMode.ForRead);
```

## Tham số và kết quả

id thuộc Database tương ứng; OpenMode.ForWrite chỉ khi thật sự sửa. Trả DBObject phải ép kiểu sau khi kiểm tra loại.

## Cách dùng

Đọc Layer, hình học hoặc dữ liệu mở rộng của entity.

```csharp
if (tr.GetObject(id, OpenMode.ForRead) is Line line)
  length = line.Length;
```

## Kiểm tra khi áp dụng

Không giữ tham chiếu DBObject để dùng sau khi transaction kết thúc.
