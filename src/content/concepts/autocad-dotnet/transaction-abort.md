---
{
  "id": "concept.autocad-dotnet.transaction-abort",
  "slug": "transaction-abort",
  "title": "Transaction.Abort",
  "description": "Hủy thay đổi transaction",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Transaction.Abort",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_Transaction_Abort.html"
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
    "Transaction.Abort"
  ]
}
---

## Cú pháp

```csharp
public virtual void Abort();
```

## Tham số và kết quả

Không có tham số; hủy các thay đổi của transaction.

## Ví dụ

Hủy thay đổi transaction. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ví dụ thực hiện trong command AutoCAD, với `doc` là tài liệu đang hoạt động và `ed` là `doc.Editor`.

```csharp
tr.Abort();
```

## Lỗi thường gặp

Đừng đọc wrapper tiếp sau khi transaction đã kết thúc.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
