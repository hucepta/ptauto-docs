---
{
  "id": "concept.civil3d-dotnet.civildocument",
  "slug": "civildocument",
  "title": "CivilDocument",
  "description": "Điểm truy cập Civil objects, styles và settings gắn với AutoCAD Database.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.tinsurface",
    "concept.civil3d-dotnet.corridor"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.kiem-ke-doi-tuong"
  ],
  "examplePlacements": [
    {
      "heading": "collections-và-dữ-liệu",
      "exampleIds": [
        "example.civil3d-dotnet.kiem-ke-doi-tuong"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — Accessing Application and Document Objects (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-16B1A3F9-35F7-4703-B5FD-F2AC00E6AB57.htm"
    },
    {
      "title": "Autodesk — Using Collections Within the Document Object (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-5676A992-E881-4467-A1A7-4412425B5F36.htm"
    },
    {
      "title": "Autodesk — CivilDocument Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm"
    },
    {
      "title": "Autodesk — About Using the Object Enabler (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-UserGuide/files/GUID-14B478FB-81E2-44A5-808C-5546D61B5697.htm"
    },
    {
      "title": "Tài liệu chính thức — CivilDocument",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm"
    }
  ],
  "aliases": [
    "tài liệu Civil"
  ],
  "tags": [],
  "searchableTerms": [
    "CivilApplication",
    "GetCivilDocument",
    "GetAlignmentIds",
    "GetSurfaceIds",
    "Styles",
    "Settings"
  ]
}
---

## Môi trường và phạm vi

Mẫu nhắm Civil 3D 2025 đầy đủ trên Windows x64, `net8.0-windows`, theo [hướng dẫn reference 2025](https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-267E68C8-AD2D-4F7F-87DF-831018D56CDB.htm). Reference `AcCoreMgd.dll`, `AcMgd.dll`, `AcDbMgd.dll`, `AecBaseMgd.dll`, `AeccDbMgd.dll` từ cùng bộ cài 2025; `Copy Local = False`. Kiểm tra runtime của mức cập nhật thực tế trước khi build. Plain AutoCAD hoặc Object Enabler không phải host Civil 3D đầy đủ. Đây là mẫu đối chiếu tài liệu, chưa build hoặc chạy trong host.

## Định nghĩa

`CivilDocument` là điểm truy cập đối tượng thiết kế, styles và settings gắn với database Civil. `CivilApplication.ActiveDocument` lấy tài liệu Civil đang hoạt động. AutoCAD `Document` vẫn cung cấp `Editor` và `Database`; `CivilApplication` không kế thừa AutoCAD `Application`. [Tài liệu Autodesk 2025](https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-16B1A3F9-35F7-4703-B5FD-F2AC00E6AB57.htm).

## Collections và dữ liệu

`GetAlignmentIds()`, `GetSurfaceIds()` và `CorridorCollection` cung cấp ID để mở object trong transaction. Collection rỗng là hợp lệ. Không lấy phần tử đầu tiên và giả định mọi DWG đều có tuyến hoặc surface. `Styles` và `Settings` là các điểm truy cập dữ liệu cấu hình của tài liệu. [Danh sách thành viên Autodesk](https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/6b21bf2d-709c-3fc8-5133-abded01ec6ed.htm).

Mẫu kiểm kê liên kết ở phần này liệt kê tên và loại trong Document hiện tại. Hai Alignment và một Surface phải tạo các mục tương ứng; phần đọc không tạo style, label hoặc object thiết kế mới.

## Database và môi trường

`CivilDocument` phải gắn với cùng `Database` dùng để mở transaction. Dùng `CivilDocument.GetCivilDocument(db)` khi đã xác định database đích, tránh lấy root của tab hiện hành rồi mở ID trong database khác.

Nếu DLL không nạp được, kiểm tra dependency trước khi kết luận collection không tồn tại. Không coi việc có Object Enabler hoặc reference DLL là bằng chứng runtime Civil 3D đã hoạt động.

## Ví dụ có ngữ cảnh

Helper nằm trong class của DLL Civil 3D; command gọi với `doc.Database` của AutoCAD Document hiện hành. Không phải plugin hoàn chỉnh. Các ID chỉ được dùng trong database đã truyền vào; số lượng là dữ liệu giá trị nên an toàn sau khi helper kết thúc.

```csharp
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.Civil.ApplicationServices;

static (int Alignments, int Surfaces) CountCivilObjects(Database db)
{
    CivilDocument civilDoc = CivilDocument.GetCivilDocument(db);
    return (civilDoc.GetAlignmentIds().Count,
            civilDoc.GetSurfaceIds().Count);
}
```

## Kết quả và kiểm tra

DWG thử có hai Alignment và một Surface phải trả `(2, 1)`; DWG không có chúng trả `(0, 0)`. Đếm ID không cần mở object; đọc tên cần transaction và `GetObject(id, ForRead)`. Hàm không có prompt nên không có nhánh Esc; command bao ngoài phải dừng nếu bước chọn tài liệu/đối tượng bị hủy. Nếu database đích không dùng được cho Civil, báo lỗi thực tế thay vì đổi ngoại lệ thành số 0.
