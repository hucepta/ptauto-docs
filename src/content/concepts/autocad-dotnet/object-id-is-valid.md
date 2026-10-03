---
{
  "id": "concept.autocad-dotnet.object-id-is-valid",
  "slug": "object-id-is-valid",
  "title": "ObjectId.IsValid",
  "description": "ID hợp lệ",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — ObjectId.IsValid",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_ObjectId_IsValid.html"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD .NET",
      "version": "Chữ ký theo tài liệu AutoCAD 2026; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "ObjectId.IsValid"
  ]
}
---

## Cú pháp

```csharp
public bool IsValid;
```

## Tham số và kết quả

Không có tham số; bool về tính hợp lệ ObjectId.

## Ví dụ

ID hợp lệ. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `id` là ObjectId lấy từ selection hoặc bảng trong đúng Database; kiểm tra trước khi gọi GetObject.

```csharp
if (!id.IsValid) return;
```

## Lỗi thường gặp

Vẫn cần kiểm tra erased và kiểu trước khi xử lý.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
