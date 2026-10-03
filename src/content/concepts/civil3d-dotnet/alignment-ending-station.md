---
{
  "id": "concept.civil3d-dotnet.alignment-ending-station",
  "slug": "alignment-ending-station",
  "title": "Alignment.EndingStation",
  "description": "Đọc lý trình cuối",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.EndingStation",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/8da8c15e-d06e-ccc1-3352-f9745dcddc7a.htm"
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
    "Alignment.EndingStation"
  ]
}
---

## Cú pháp

```csharp
public double EndingStation { get; }
```

## Tham số và kết quả

Không nhận đối số; double là lý trình cuối của tuyến.

## Ví dụ

Đọc lý trình cuối. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nKết thúc: {alignment.EndingStation:F3}");
```

## Lỗi thường gặp

Không dùng chuỗi nhãn đã định dạng để tính toán.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
