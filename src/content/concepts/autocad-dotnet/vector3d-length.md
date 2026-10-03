---
{
  "id": "concept.autocad-dotnet.vector3d-length",
  "slug": "vector3d-length",
  "title": "Vector3d.Length",
  "description": "Độ dài vector",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Vector3d.Length",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Vector3d_Length.html"
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
    "Vector3d.Length"
  ]
}
---

## Cú pháp

```csharp
public double Length;
```

## Tham số và kết quả

Không có tham số; double độ lớn vector.

## Ví dụ

Độ dài vector. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `vector` là `new Vector3d(3, 4, 0)`; độ dài bằng 5, các thành phần X/Y lần lượt 3 và 4.

```csharp
ed.WriteMessage($"\nĐộ dài: {vector.Length:F3}");
```

## Lỗi thường gặp

Vector có độ dài 0 không thể chuẩn hóa thành hướng hợp lệ.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
