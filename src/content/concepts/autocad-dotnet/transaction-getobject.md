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
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-50FD6118-B2D1-4313-A7D6-830794DFDEFA.htm"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp

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
