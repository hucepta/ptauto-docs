---
{
  "id": "concept.civil3d-dotnet.alignment-get-sample-line-group-ids",
  "slug": "alignment-get-sample-line-group-ids",
  "title": "Alignment.GetSampleLineGroupIds",
  "description": "Lấy nhóm mặt cắt",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetSampleLineGroupIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/5add2bfc-766e-049b-4588-230539cc5805.htm"
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
    "Alignment.GetSampleLineGroupIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetSampleLineGroupIds()
```

## Tham số và kết quả

Không có tham số; trả ID SampleLineGroup của tuyến.

## Ví dụ

Lấy nhóm mặt cắt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetSampleLineGroupIds();
ed.WriteMessage($"\nNhóm: {ids.Count}");
```

## Lỗi thường gặp

Một tuyến có nhiều nhóm; không chỉ xử lý phần tử đầu tiên.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
