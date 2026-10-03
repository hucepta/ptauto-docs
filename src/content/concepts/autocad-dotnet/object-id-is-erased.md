---
{
  "id": "concept.autocad-dotnet.object-id-is-erased",
  "slug": "object-id-is-erased",
  "title": "ObjectId.IsErased",
  "description": "ID trỏ object đã xóa",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — ObjectId.IsErased",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_ObjectId_IsErased.html"
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
    "ObjectId.IsErased"
  ]
}
---

## Cú pháp

```csharp
public bool IsErased;
```

## Tham số và kết quả

Không có tham số; bool cho trạng thái erase.

## Ví dụ

ID trỏ object đã xóa. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `id` là ObjectId lấy từ selection hoặc bảng trong đúng Database; kiểm tra trước khi gọi GetObject.

```csharp
if (id.IsErased) return;
```

## Lỗi thường gặp

Không tự mở erased object để đưa vào thống kê thông thường.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
