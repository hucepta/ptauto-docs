---
{
  "id": "concept.civil3d-dotnet.alignment-entities",
  "slug": "alignment-entities",
  "title": "Alignment.Entities",
  "description": "Đọc hình học tuyến",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.Entities",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/fbdaed84-8acb-ac4a-2e1e-d87aec3883b5.htm"
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
    "Alignment.Entities"
  ]
}
---

## Cú pháp

```csharp
public AlignmentEntityCollection Entities { get; }
```

## Tham số và kết quả

Không nhận đối số; trả AlignmentEntityCollection gồm đoạn thẳng, cong và chuyển tiếp.

## Ví dụ

Đọc hình học tuyến. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nPhần tử hình học: {alignment.Entities.Count}");
```

## Lỗi thường gặp

EntityId của phần tử hình học không phải ObjectId của đối tượng DWG.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
