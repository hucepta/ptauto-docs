---
{
  "id": "concept.civil3d-dotnet.cogo-point-full-description",
  "slug": "cogo-point-full-description",
  "title": "CogoPoint.FullDescription",
  "description": "Đọc mô tả đầy đủ",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.FullDescription",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/f0265e29-66fa-6aec-c6e4-d01596e6979a.htm"
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
    "CogoPoint.FullDescription"
  ]
}
---

## Cú pháp

```csharp
public string FullDescription { get; }
```

## Tham số và kết quả

Không nhận đối số; string là mô tả đầy đủ sau xử lý.

## Ví dụ

Đọc mô tả đầy đủ. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\nMô tả: " + point.FullDescription);
```

## Lỗi thường gặp

Không ghi đè RawDescription bằng FullDescription khi cần giữ mã khảo sát gốc.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
