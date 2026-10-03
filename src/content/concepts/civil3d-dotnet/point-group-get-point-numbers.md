---
{
  "id": "concept.civil3d-dotnet.point-group-get-point-numbers",
  "slug": "point-group-get-point-numbers",
  "title": "PointGroup.GetPointNumbers",
  "description": "Lấy số điểm trong nhóm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — PointGroup.GetPointNumbers",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/d04972d0-ced7-26b3-6bd4-1f09641584af.htm"
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
    "PointGroup.GetPointNumbers"
  ]
}
---

## Cú pháp

```csharp
public uint[] GetPointNumbers()
```

## Tham số và kết quả

Không có tham số; uint[] chứa số CogoPoint thuộc nhóm.

## Ví dụ

Lấy số điểm trong nhóm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `group` là `PointGroup` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var numbers = group.GetPointNumbers();
ed.WriteMessage($"\nSố điểm nhóm: {numbers.Length}");
```

## Lỗi thường gặp

Các phần tử là số điểm, không phải ObjectId để gọi GetObject trực tiếp.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
