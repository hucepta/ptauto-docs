---
{
  "id": "concept.autocad-dotnet.database-transaction-manager",
  "slug": "database-transaction-manager",
  "title": "Database.TransactionManager",
  "description": "Bộ quản lý transaction",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Database.TransactionManager",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Database_TransactionManager.html"
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
    "Database.TransactionManager"
  ]
}
---

## Cú pháp

```csharp
public Autodesk.AutoCAD.DatabaseServices.TransactionManager TransactionManager;
```

## Tham số và kết quả

Không có tham số; trả TransactionManager gắn với Database.

## Ví dụ

Bộ quản lý transaction. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `db` là `doc.Database` của tài liệu đang hoạt động.

```csharp
using var tr = db.TransactionManager.StartTransaction();
```

## Lỗi thường gặp

Lấy manager từ đúng DWG sở hữu ObjectId.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
