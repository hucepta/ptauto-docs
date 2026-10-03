---
{
  "id": "concept.civil3d-dotnet.cogo-point-is-locked",
  "slug": "cogo-point-is-locked",
  "title": "CogoPoint.IsLocked",
  "description": "Đọc khóa điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.IsLocked",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6c452eaa-e344-adc4-694d-a24269671d33.htm"
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
    "CogoPoint.IsLocked"
  ]
}
---

## Cú pháp

```csharp
public bool IsLocked { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; bool phản ánh trạng thái khóa.

## Ví dụ

Đọc khóa điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nKhóa: {point.IsLocked}");
```

## Lỗi thường gặp

Đọc được một điểm không có nghĩa được phép sửa tọa độ của nó.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
