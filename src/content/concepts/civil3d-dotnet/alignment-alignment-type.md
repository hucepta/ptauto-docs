---
{
  "id": "concept.civil3d-dotnet.alignment-alignment-type",
  "slug": "alignment-alignment-type",
  "title": "Alignment.AlignmentType",
  "description": "Đọc loại tuyến",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.AlignmentType",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/19218b6f-ef81-9cf4-04f9-07b373a8905e.htm"
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
    "Alignment.AlignmentType"
  ]
}
---

## Cú pháp

```csharp
public AlignmentType AlignmentType { get; }
```

## Tham số và kết quả

Không nhận đối số; trả enum AlignmentType.

## Ví dụ

Đọc loại tuyến. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nLoại: {alignment.AlignmentType}");
```

## Lỗi thường gặp

Loại tuyến không được suy từ tên do người dùng đặt.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
