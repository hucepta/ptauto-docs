---
{
  "id": "concept.civil3d-dotnet.civil-active-document",
  "slug": "civil-active-document",
  "title": "CivilApplication.ActiveDocument",
  "description": "Lấy CivilDocument hiện hành để truy cập collection Civil 3D.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Tài liệu API chính thức",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
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
CivilDocument civilDoc = CivilApplication.ActiveDocument;
```

## Tham số và kết quả

Không có đối số; cần chạy trong Civil 3D host. Trả CivilDocument của bản vẽ đang hoạt động.

## Cách dùng

Bắt đầu truy vấn Alignment, Surface hoặc mạng ống.

```csharp
var civilDoc = CivilApplication.ActiveDocument;
var ids = civilDoc.GetAlignmentIds();
```

## Kiểm tra khi áp dụng

AutoCAD thường không có runtime Civil 3D; bản vẽ Civil không thay thế được host/API.
