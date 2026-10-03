---
{
  "id": "concept.civil3d-dotnet.cogo-point-point-name",
  "slug": "cogo-point-point-name",
  "title": "CogoPoint.PointName",
  "description": "Đọc tên điểm",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CogoPoint.PointName",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/a016ca12-5ddb-dd30-3fbb-8a0c3f212028.htm"
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
    "CogoPoint.PointName"
  ]
}
---

## Cú pháp

```csharp
public string PointName { get; set; }
```

## Tham số và kết quả

Không nhận đối số khi đọc; string là tên CogoPoint.

## Ví dụ

Đọc tên điểm. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `point` là `CogoPoint` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\nTên: " + point.PointName);
```

## Lỗi thường gặp

Tên có thể rỗng; báo cáo nên lưu cả số điểm.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
