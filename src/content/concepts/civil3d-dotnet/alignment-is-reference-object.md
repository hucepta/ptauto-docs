---
{
  "id": "concept.civil3d-dotnet.alignment-is-reference-object",
  "slug": "alignment-is-reference-object",
  "title": "Alignment.IsReferenceObject",
  "description": "Nhận diện Data Shortcut",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsReferenceObject",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/fe937bd1-a2fb-247f-77dd-bc9792126591.htm"
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
    "Alignment.IsReferenceObject"
  ]
}
---

## Cú pháp

```csharp
public bool IsReferenceObject { get; }
```

## Tham số và kết quả

Không nhận đối số; bool nhận diện Civil Entity tham chiếu.

## Ví dụ

Nhận diện Data Shortcut. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nTham chiếu: {alignment.IsReferenceObject}");
```

## Lỗi thường gặp

Xref AutoCAD và Data Shortcut là cơ chế khác nhau.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
