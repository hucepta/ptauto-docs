---
{
  "id": "concept.autocad-dotnet.mtext-contents",
  "slug": "mtext-contents",
  "title": "MText.Contents",
  "description": "Nội dung MTEXT",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — MText.Contents",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_MText_Contents.html"
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
    "MText.Contents"
  ]
}
---

## Cú pháp

```csharp
public string Contents;
```

## Tham số và kết quả

Không có tham số; string chứa nội dung cùng mã định dạng MText.

## Ví dụ

Nội dung MTEXT. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `mtext` là `MText` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage("\n" + mtext.Contents);
```

## Lỗi thường gặp

Chuỗi có control codes; đừng xem như văn bản thuần khi xuất CSV.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
