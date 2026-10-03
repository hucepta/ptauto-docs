---
{
  "id": "concept.autocad-dotnet.active-document",
  "slug": "active-document",
  "title": "Application.DocumentManager.MdiActiveDocument",
  "description": "Lấy Document đang hoạt động để truy cập Editor và Database.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Application.DocumentManager.MdiActiveDocument",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_ApplicationServices_DocumentCollection_MdiActiveDocument.html"
    },
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2026/DEU/OARX-DevGuide-Managed/files/GUID-A43A20B7-A73A-4BBC-B871-B8E6B9D1006C.htm"
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
public Document MdiActiveDocument;
```

## Cách gọi

```csharp
Document? doc = Application.DocumentManager.MdiActiveDocument;
```

## Tham số và kết quả

Không có đối số; có thể không có bản vẽ hiện hành trong một số ngữ cảnh. Trả Document hiện hành khi có tài liệu mở.

## Cách dùng

Lấy doc.Database để đọc DWG và doc.Editor để hỏi hoặc thông báo người dùng.

```csharp
var doc = Application.DocumentManager.MdiActiveDocument;
if (doc is null) return;
var db = doc.Database;
```

## Kiểm tra khi áp dụng

Không giữ Document toàn cục rồi dùng lại sau khi người dùng đổi bản vẽ.
