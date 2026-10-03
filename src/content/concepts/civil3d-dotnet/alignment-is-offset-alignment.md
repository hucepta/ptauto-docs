---
{
  "id": "concept.civil3d-dotnet.alignment-is-offset-alignment",
  "slug": "alignment-is-offset-alignment",
  "title": "Alignment.IsOffsetAlignment",
  "description": "Nhận diện tuyến offset",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsOffsetAlignment",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/5e4cfcf7-62ae-395b-29c1-37a76e81c67a.htm"
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
    "Alignment.IsOffsetAlignment"
  ]
}
---

## Cú pháp

```csharp
public bool IsOffsetAlignment { get; }
```

## Tham số và kết quả

Không nhận đối số; bool xác định tuyến offset.

## Ví dụ

Nhận diện tuyến offset. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nOffset: {alignment.IsOffsetAlignment}");
```

## Lỗi thường gặp

Polyline song song không tự trở thành offset alignment có quan hệ cha.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
