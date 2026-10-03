---
{
  "id": "concept.civil3d-dotnet.alignment-get-alignment-label-group-ids",
  "slug": "alignment-get-alignment-label-group-ids",
  "title": "Alignment.GetAlignmentLabelGroupIds",
  "description": "Lấy nhóm nhãn tuyến",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetAlignmentLabelGroupIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/bcbfebdd-ae69-e8f6-2c5c-821b9df12253.htm"
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
    "Alignment.GetAlignmentLabelGroupIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetAlignmentLabelGroupIds()
```

## Tham số và kết quả

Không có tham số; trả ID các nhóm nhãn.

## Ví dụ

Lấy nhóm nhãn tuyến. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetAlignmentLabelGroupIds();
ed.WriteMessage($"\nNhóm nhãn: {ids.Count}");
```

## Lỗi thường gặp

Một nhóm sinh nhiều nhãn hiển thị; Count không phải số chữ trên màn hình.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
