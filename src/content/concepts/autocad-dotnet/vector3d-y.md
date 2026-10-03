---
{
  "id": "concept.autocad-dotnet.vector3d-y",
  "slug": "vector3d-y",
  "title": "Vector3d.Y",
  "description": "Thành phần Y của vector",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — Vector3d.Y",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/OARX-ManagedRefGuide/files/OARX-ManagedRefGuide-Autodesk_AutoCAD_Geometry_Vector3d_Y.html"
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
    "Vector3d.Y"
  ]
}
---

## Cú pháp

```csharp
public double Y;
```

## Tham số và kết quả

Không nhận tham số; double là thành phần Y của vector.

## Ví dụ

Thành phần Y của vector. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `vector` là `new Vector3d(3, 4, 0)`; độ dài bằng 5, các thành phần X/Y lần lượt 3 và 4.

```csharp
double dy = vector.Y;
```

## Lỗi thường gặp

Vector là hướng và độ lớn, không phải một vị trí trong DWG.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
