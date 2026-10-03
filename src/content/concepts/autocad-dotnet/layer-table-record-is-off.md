---
{
  "id": "concept.autocad-dotnet.layer-table-record-is-off",
  "slug": "layer-table-record-is-off",
  "title": "LayerTableRecord.IsOff",
  "description": "Layer đang tắt",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — LayerTableRecord.IsOff",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_DatabaseServices_LayerTableRecord_IsOff.html"
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
    "LayerTableRecord.IsOff"
  ]
}
---

## Cú pháp

```csharp
public bool IsOff;
```

## Tham số và kết quả

Không có tham số khi đọc; bool là trạng thái Off.

## Ví dụ

Layer đang tắt. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. Ở đây `layer` là `LayerTableRecord` đã mở từ ObjectId hợp lệ bằng `tr.GetObject(id, OpenMode.ForRead)`; kiểm tra kiểu thực tế trước khi ép kiểu.

```csharp
ed.WriteMessage($"\nTắt: {layer.IsOff}");
```

## Lỗi thường gặp

Off và Frozen khác nhau; entity vẫn tồn tại khi layer tắt.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
