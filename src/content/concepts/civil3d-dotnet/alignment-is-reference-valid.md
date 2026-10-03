---
{
  "id": "concept.civil3d-dotnet.alignment-is-reference-valid",
  "slug": "alignment-is-reference-valid",
  "title": "Alignment.IsReferenceValid",
  "description": "Kiểm tra nguồn tham chiếu",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.IsReferenceValid",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/14ccd879-453f-ac71-9ee7-9ea6aa76f24f.htm"
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
    "Alignment.IsReferenceValid"
  ]
}
---

## Cú pháp

```csharp
public bool IsReferenceValid { get; }
```

## Tham số và kết quả

Không nhận đối số; bool có ý nghĩa khi IsReferenceObject là true.

## Ví dụ

Kiểm tra nguồn tham chiếu. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
if (alignment.IsReferenceObject) ed.WriteMessage($"\nNguồn hợp lệ: {alignment.IsReferenceValid}");
```

## Lỗi thường gặp

Đừng dùng kết quả để kết luận đối tượng native bị lỗi.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
