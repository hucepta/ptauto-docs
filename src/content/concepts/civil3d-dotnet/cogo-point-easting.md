---
{
  "id": "concept.civil3d-dotnet.cogo-point-easting",
  "slug": "cogo-point-easting",
  "title": "CogoPoint.Easting",
  "description": "Đọc tọa độ Đông",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.Easting",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/8996caa4-d51b-bf47-e734-874c1547e025.htm"
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
    "CogoPoint.Easting"
  ]
}
---

## Cú pháp

```csharp
public double Easting { get; set; }
```

## Tham số và kết quả

Không nhận đối số; double là tọa độ Easting của CogoPoint.

## Ví dụ

Đọc tọa độ Đông. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nE: {point.Easting:F3}");
```

## Lỗi thường gặp

Không đảo Easting/Northing khi xuất CSV; ghi tên cột rõ ràng.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
