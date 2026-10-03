---
{
  "id": "concept.civil3d-dotnet.cogo-point-raw-description",
  "slug": "cogo-point-raw-description",
  "title": "CogoPoint.RawDescription",
  "description": "Đọc mô tả gốc điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.RawDescription",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/51eccb47-c97e-800d-97b7-17ce8551b12e.htm"
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
    "CogoPoint.RawDescription"
  ]
}
---

## Cú pháp

```csharp
public string RawDescription { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; string là mô tả nhập ban đầu.

## Ví dụ

Đọc mô tả gốc điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\nMô tả gốc: " + point.RawDescription);
```

## Lỗi thường gặp

Description Key có thể làm FullDescription khác RawDescription.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
