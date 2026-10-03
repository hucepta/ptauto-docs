---
{
  "id": "concept.civil3d-dotnet.cogo-point-northing",
  "slug": "cogo-point-northing",
  "title": "CogoPoint.Northing",
  "description": "Đọc tọa độ Bắc",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.Northing",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/2e540147-e7a4-0a3e-256d-e2ddfc98fd1b.htm"
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
    "CogoPoint.Northing"
  ]
}
---

## Cú pháp

```csharp
public double Northing { get; set; }
```

## Tham số và kết quả

Không nhận đối số; double là tọa độ Northing của CogoPoint.

## Ví dụ

Đọc tọa độ Bắc. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nN: {point.Northing:F3}");
```

## Lỗi thường gặp

Không tự suy mã EPSG từ giá trị tọa độ; phải biết hệ tọa độ bản vẽ.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
