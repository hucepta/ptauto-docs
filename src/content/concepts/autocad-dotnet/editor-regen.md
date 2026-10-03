---
{
  "id": "concept.autocad-dotnet.editor-regen",
  "slug": "editor-regen",
  "title": "Editor.Regen",
  "description": "Cập nhật màn hình",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Editor.Regen",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_EditorInput_Editor_Regen.html"
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
    "Editor.Regen"
  ]
}
---

## Cú pháp

```csharp
public void Regen();
```

## Tham số và kết quả

Không có tham số; yêu cầu tái sinh hiển thị.

## Ví dụ

Cập nhật màn hình. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ví dụ thực hiện trong command AutoCAD, với `doc` là tài liệu đang hoạt động và `ed` là `doc.Editor`.

```csharp
ed.Regen();
```

## Lỗi thường gặp

Regen không thay thế Commit và không lưu file.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
