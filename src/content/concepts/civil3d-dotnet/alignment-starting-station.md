---
{
  "id": "concept.civil3d-dotnet.alignment-starting-station",
  "slug": "alignment-starting-station",
  "title": "Alignment.StartingStation",
  "description": "Đọc lý trình đầu",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.StartingStation",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/09924487-3529-2d05-b39b-22daeccadcd0.htm"
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
    "Alignment.StartingStation"
  ]
}
---

## Cú pháp

```csharp
public double StartingStation { get; }
```

## Tham số và kết quả

Không nhận đối số; double là lý trình đầu của tuyến.

## Ví dụ

Đọc lý trình đầu. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nBắt đầu: {alignment.StartingStation:F3}");
```

## Lỗi thường gặp

Không mặc định tuyến bắt đầu bằng 0; lý trình đầu được thiết lập trong Properties.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
