---
{
  "id": "concept.civil3d-dotnet.alignment-length",
  "slug": "alignment-length",
  "title": "Alignment.Length",
  "description": "Đọc chiều dài tuyến",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.Length",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/24455a1d-ad50-26f2-5e50-422afca3d212.htm"
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
    "Alignment.Length"
  ]
}
---

## Cú pháp

```csharp
public double Length { get; }
```

## Tham số và kết quả

Không nhận đối số; double là chiều dài hình học theo đơn vị DWG.

## Ví dụ

Đọc chiều dài tuyến. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nChiều dài: {alignment.Length:F3}");
```

## Lỗi thường gặp

Khi có station equation, trừ hai nhãn lý trình không luôn bằng chiều dài.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
