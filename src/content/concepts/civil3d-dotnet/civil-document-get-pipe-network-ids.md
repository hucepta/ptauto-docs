---
{
  "id": "concept.civil3d-dotnet.civil-document-get-pipe-network-ids",
  "slug": "civil-document-get-pipe-network-ids",
  "title": "CivilDocument.GetPipeNetworkIds",
  "description": "Lấy mạng thoát nước",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Autodesk — CivilDocument.GetPipeNetworkIds",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/8029ff33-58ee-b0f4-2d98-2728b388b033.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Chữ ký theo tài liệu Civil 3D 2022; đối chiếu SDK đích.",
      "platform": "Windows"
    }
  ],
  "tags": [],
  "aliases": [],
  "searchableTerms": [
    "CivilDocument.GetPipeNetworkIds"
  ]
}
---

## Cú pháp

```csharp
public ObjectIdCollection GetPipeNetworkIds()
```

## Tham số và kết quả

Không có tham số; ObjectIdCollection xác định các Network.

## Ví dụ

Lấy mạng thoát nước. Đoạn dưới đặt trong lệnh C#; `ed` là Editor của Document đang làm việc, `tr` là Transaction còn mở. `civilDoc` được lấy bằng `CivilApplication.ActiveDocument` của DWG đang hoạt động.

```csharp
var ids = civilDoc.GetPipeNetworkIds();
ed.WriteMessage($"\nMạng: {ids.Count}");
```

## Lỗi thường gặp

Không dùng tập này để suy ra số mạng áp lực; đó là API khác.

## Thực hành

Chạy trên bản sao DWG, ghi giá trị hoặc số lượng trước khi thực hiện và đối chiếu trong bảng Properties hoặc Toolspace. Nếu sửa dữ liệu, mở đối tượng ForWrite và Commit transaction; nếu chỉ đọc, giữ ForRead và sao chép giá trị trước khi transaction kết thúc.
