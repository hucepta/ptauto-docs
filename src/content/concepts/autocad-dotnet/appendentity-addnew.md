---
{
  "id": "concept.autocad-dotnet.appendentity-addnew",
  "slug": "appendentity-addnew",
  "title": "AppendEntity và AddNewlyCreatedDBObject",
  "description": "Đưa entity mới vào BlockTableRecord rồi đăng ký với transaction.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — AppendEntity và AddNewlyCreatedDBObject",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_AddNewlyCreatedDBObject_DBObject__MarshalAsUnmanagedType_U1__bool.html"
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
public virtual void AddNewlyCreatedDBObject(
    DBObject obj,
    [MarshalAs(UnmanagedType.U1)] bool add
);
```

## Cách gọi

```csharp
ObjectId id = space.AppendEntity(entity);
tr.AddNewlyCreatedDBObject(entity, true);
```

## Tham số và kết quả

space phải mở ForWrite; entity vừa tạo và chưa từng đóng. Trả ObjectId từ AppendEntity; đối tượng sẽ tồn tại sau Commit.

## Cách dùng

Tạo LINE, Circle hoặc marker trong ModelSpace.

```csharp
var line = new Line(a, b);
space.AppendEntity(line);
tr.AddNewlyCreatedDBObject(line, true);
tr.Commit();
```

## Kiểm tra khi áp dụng

Chỉ gọi constructor không ghi đối tượng vào DWG.
