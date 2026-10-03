---
{
  "id": "concept.civil3d-dotnet.alignment-get-next-unique-name",
  "slug": "alignment-get-next-unique-name",
  "title": "Alignment.GetNextUniqueName",
  "description": "Tạo tên tuyến riêng",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Alignment.GetNextUniqueName",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/a7e027f2-5e6f-a4bb-ee5e-c3a5f9b0a3fe.htm"
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
    "Alignment.GetNextUniqueName"
  ]
}
---

## Cú pháp

```csharp
public static string GetNextUniqueName(
	string alignmentName
)
```

## Tham số và kết quả

Chuỗi đầu vào là tên hoặc mẫu tên; kết quả string chưa tạo Alignment.

## Ví dụ

Tạo tên tuyến riêng. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `alignment` là `Alignment` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
var name = Alignment.GetNextUniqueName("PT_TUYEN");
ed.WriteMessage("\n" + name);
```

## Lỗi thường gặp

Đây chỉ là đề xuất tên; không phải thao tác tạo tuyến trong DWG.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
