---
{
  "id": "concept.civil3d-dotnet.alignment-get-superelevation-view-ids",
  "slug": "alignment-get-superelevation-view-ids",
  "title": "Alignment.GetSuperelevationViewIds",
  "description": "Lấy khung siêu cao",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetSuperelevationViewIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/738d26e2-c8ca-63ce-3c30-1824b1563962.htm"
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
    "Alignment.GetSuperelevationViewIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetSuperelevationViewIds()
```

## Tham số và kết quả

Không có tham số; trả ID các SuperelevationView.

## Ví dụ

Lấy khung siêu cao. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var ids = alignment.GetSuperelevationViewIds();
ed.WriteMessage($"\nKhung siêu cao: {ids.Count}");
```

## Lỗi thường gặp

Tập rỗng không khẳng định tuyến không có dữ liệu siêu cao.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
