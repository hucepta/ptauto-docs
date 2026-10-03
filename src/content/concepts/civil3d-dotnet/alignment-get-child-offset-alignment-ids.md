---
{
  "id": "concept.civil3d-dotnet.alignment-get-child-offset-alignment-ids",
  "slug": "alignment-get-child-offset-alignment-ids",
  "title": "Alignment.GetChildOffsetAlignmentIds",
  "description": "Lấy tuyến offset con",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetChildOffsetAlignmentIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/37a87f5d-b9cd-bf49-5a1d-af41b048d318.htm"
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
    "Alignment.GetChildOffsetAlignmentIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetChildOffsetAlignmentIds()
```

## Tham số và kết quả

Overload không có tham số; trả ObjectIdCollection tuyến offset con.

## Ví dụ

Lấy tuyến offset con. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetChildOffsetAlignmentIds();
ed.WriteMessage($"\nTuyến con: {ids.Count}");
```

## Lỗi thường gặp

Tuyến vẽ độc lập gần tuyến mẹ không thuộc collection này.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
