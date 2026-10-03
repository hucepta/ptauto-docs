---
{
  "id": "concept.civil3d-dotnet.cogo-point-label-location",
  "slug": "cogo-point-label-location",
  "title": "CogoPoint.LabelLocation",
  "description": "Vị trí nhãn điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.LabelLocation",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/afe3dd2c-f5c6-2459-34a7-a6b46c513ea2.htm"
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
    "CogoPoint.LabelLocation"
  ]
}
---

## Cú pháp

```csharp
public Point3d LabelLocation { get; set; }
```

## Tham số và kết quả

Không nhận tham số khi đọc; Point3d xác định vị trí nhãn của CogoPoint.

## Ví dụ

Vị trí nhãn điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var p = point.LabelLocation;
ed.WriteMessage($"\nNhan: {p}");
```

## Lỗi thường gặp

Nhãn kéo lệch không thay Location hoặc tọa độ đo của CogoPoint.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
