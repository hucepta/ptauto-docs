---
{
  "id": "concept.civil3d-dotnet.alignment-get-alignment-label-ids",
  "slug": "alignment-get-alignment-label-ids",
  "title": "Alignment.GetAlignmentLabelIds",
  "description": "Lấy nhãn tuyến",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetAlignmentLabelIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/1926b0f6-7cca-c3e9-5f76-8e73b66d3340.htm"
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
    "Alignment.GetAlignmentLabelIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetAlignmentLabelIds()
```

## Tham số và kết quả

Không có tham số; trả ObjectIdCollection của các nhãn tuyến.

## Ví dụ

Lấy nhãn tuyến. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetAlignmentLabelIds();
ed.WriteMessage($"\nNhãn riêng: {ids.Count}");
```

## Lỗi thường gặp

Nhóm nhãn và nhãn riêng có API riêng; đừng cộng bừa hai tập.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
