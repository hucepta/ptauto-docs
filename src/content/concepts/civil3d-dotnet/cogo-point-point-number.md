---
{
  "id": "concept.civil3d-dotnet.cogo-point-point-number",
  "slug": "cogo-point-point-number",
  "title": "CogoPoint.PointNumber",
  "description": "Đọc số điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.PointNumber",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/95dfc9a4-73b6-3c14-d665-5774a85a3eec.htm"
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
    "CogoPoint.PointNumber"
  ]
}
---

## Cú pháp

```csharp
public uint PointNumber { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; uint là số điểm trong bản vẽ.

## Ví dụ

Đọc số điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nSố: {point.PointNumber}");
```

## Lỗi thường gặp

Không dùng PointNumber như ObjectId; đổi số có thể xung đột với điểm khác.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
