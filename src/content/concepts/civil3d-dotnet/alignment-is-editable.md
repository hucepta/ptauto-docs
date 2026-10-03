---
{
  "id": "concept.civil3d-dotnet.alignment-is-editable",
  "slug": "alignment-is-editable",
  "title": "Alignment.IsEditable",
  "description": "Kiểm tra quyền sửa Civil",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsEditable",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/60f1abfb-7e4b-4a8b-ab36-4bf7984b473d.htm"
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
    "Alignment.IsEditable"
  ]
}
---

## Cú pháp

```csharp
public bool IsEditable { get; }
```

## Tham số và kết quả

Không nhận đối số; bool phản ánh khả năng sửa Feature.

## Ví dụ

Kiểm tra quyền sửa Civil. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nCó thể sửa: {alignment.IsEditable}");
```

## Lỗi thường gặp

Không ép ForWrite để vượt giới hạn đối tượng tham chiếu.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
