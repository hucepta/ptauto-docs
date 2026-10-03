---
{
  "id": "concept.autocad-dotnet.dbobject-upgrade-open",
  "slug": "dbobject-upgrade-open",
  "title": "DBObject.UpgradeOpen",
  "description": "Nâng object sang ghi",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — DBObject.UpgradeOpen",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_DBObject_UpgradeOpen.html"
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
    "DBObject.UpgradeOpen"
  ]
}
---

## Cú pháp

```csharp
public void UpgradeOpen();
```

## Tham số và kết quả

Không có tham số; đổi object đang ForRead sang quyền ghi.

## Ví dụ

Nâng object sang ghi. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `obj` là `DBObject` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForWrite)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
obj.UpgradeOpen();
```

## Lỗi thường gặp

Chỉ nâng khi cần thay đổi; không nâng mọi object trong báo cáo đọc.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
