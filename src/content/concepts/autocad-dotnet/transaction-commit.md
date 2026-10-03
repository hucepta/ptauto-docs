---
{
  "id": "concept.autocad-dotnet.transaction-commit",
  "slug": "transaction-commit",
  "title": "Transaction.Commit",
  "description": "Lưu thay đổi transaction",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Transaction.Commit",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_Commit.html"
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
    "Transaction.Commit"
  ]
}
---

## Cú pháp

```csharp
public virtual void Commit();
```

## Tham số và kết quả

Không có tham số; xác nhận thay đổi trong transaction.

## Ví dụ

Lưu thay đổi transaction. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ví dụ thực hiện trong command AutoCAD, với `doc` là tài liệu đang hoạt động và `ed` là `doc.Editor`.

```csharp
tr.Commit();
```

## Lỗi thường gặp

Commit không lưu file DWG ra ổ đĩa; người dùng vẫn cần Save.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
