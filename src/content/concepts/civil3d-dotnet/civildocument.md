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

## Định nghĩa

CivilDocument là root truy cập đối tượng thiết kế, collections, styles và settings của bản vẽ Civil. CivilApplication.ActiveDocument lấy tài liệu Civil hiện hành. AutoCAD Document vẫn cung cấp Editor và Database; CivilApplication không kế thừa AutoCAD Application.

## Collections và dữ liệu

Các phương thức GetAlignmentIds, GetSurfaceIds và CorridorCollection cung cấp ID để mở object trong transaction. Collection rỗng là tình trạng hợp lệ. Không lấy phần tử đầu tiên để giả định mọi DWG đều có tuyến hoặc surface.

Mẫu kiểm kê liệt kê tên và loại trong Document hiện tại. Hai Alignment và một Surface tạo các mục tương ứng; phần đọc không tạo style, label hay object thiết kế mới.

## Database và môi trường

Khi xử lý một tài liệu cụ thể, CivilDocument phải gắn với cùng Database dùng để mở transaction. Đừng lấy root của tab hiện hành rồi mở ID trong một database khác.

Ví dụ yêu cầu Civil 3D đầy đủ và reference đúng SDK. Object Enabler hỗ trợ trao đổi hình thức hiển thị và thao tác AutoCAD giới hạn; đây không phải môi trường nghiệm thu command CivilDocument của tài liệu này. Nếu DLL không nạp được, kiểm tra dependency trước khi kết luận collection không tồn tại.
