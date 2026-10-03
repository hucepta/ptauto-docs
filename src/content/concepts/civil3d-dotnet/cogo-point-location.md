---
{
  "id": "concept.civil3d-dotnet.cogo-point-location",
  "slug": "cogo-point-location",
  "title": "CogoPoint.Location",
  "description": "Đọc vị trí điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.Location",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/4c1b9c73-5745-4f73-a35d-257db38d3d23.htm"
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
    "CogoPoint.Location"
  ]
}
---

## Cú pháp

```csharp
public Point3d Location { get; }
```

## Tham số và kết quả

Không nhận đối số; Point3d chứa vị trí CogoPoint.

## Ví dụ

Đọc vị trí điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var p = point.Location;
ed.WriteMessage($"\n({p.X:F3}, {p.Y:F3}, {p.Z:F3})");
```

## Lỗi thường gặp

Đừng lấy vị trí nhãn kéo lệch làm vị trí điểm đo.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
