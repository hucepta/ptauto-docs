---
{
  "id": "concept.civil3d-dotnet.civil-document-cogo-points",
  "slug": "civil-document-cogo-points",
  "title": "CivilDocument.CogoPoints",
  "description": "Truy cập tập CogoPoint",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.CogoPoints",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/eb86a0a6-7cba-a55a-9d27-d7ec55a7102f.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Chữ ký theo tài liệu Civil 3D 2022; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "CivilDocument.CogoPoints"
  ]
}
---

## Cú pháp

```csharp
public CogoPointCollection CogoPoints { get; }
```

## Tham số và kết quả

Không nhận đối số; trả CogoPointCollection của bản vẽ.

## Ví dụ

Truy cập tập CogoPoint. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
ed.WriteMessage($"\nCogoPoint: {civilDoc.CogoPoints.Count}");
```

## Lỗi thường gặp

Đừng giả định PointNumber liên tục từ 1 đến Count.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
