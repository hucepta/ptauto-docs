---
{
  "id": "concept.civil3d-dotnet.alignment-is-reference-stale",
  "slug": "alignment-is-reference-stale",
  "title": "Alignment.IsReferenceStale",
  "description": "Kiểm tra tham chiếu cũ",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsReferenceStale",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/68011554-3b75-81b6-8b4a-d44de36e91c2.htm"
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
    "Alignment.IsReferenceStale"
  ]
}
---

## Cú pháp

```csharp
public bool IsReferenceStale { get; }
```

## Tham số và kết quả

Không nhận đối số; bool cho biết tham chiếu stale.

## Ví dụ

Kiểm tra tham chiếu cũ. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
if (alignment.IsReferenceObject) ed.WriteMessage($"\nChưa cập nhật: {alignment.IsReferenceStale}");
```

## Lỗi thường gặp

Phải đồng bộ nguồn trước khi dùng báo cáo kiểm tra thiết kế.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
