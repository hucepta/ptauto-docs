---
{
  "id": "concept.civil3d-dotnet.cogo-point-elevation",
  "slug": "cogo-point-elevation",
  "title": "CogoPoint.Elevation",
  "description": "Đọc cao độ điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.Elevation",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/0635e649-71aa-e1b3-06e9-512ec59d0b57.htm"
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
    "CogoPoint.Elevation"
  ]
}
---

## Cú pháp

```csharp
public double Elevation { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; double là cao độ CogoPoint.

## Ví dụ

Đọc cao độ điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nZ: {point.Elevation:F3}");
```

## Lỗi thường gặp

Không tự đổi m sang mm; cao độ dùng đơn vị và quy ước của bản vẽ.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
