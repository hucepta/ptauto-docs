---
{
  "id": "concept.civil3d-dotnet.tinsurface",
  "slug": "tinsurface",
  "title": "TinSurface",
  "description": "Bề mặt mạng tam giác không đều và cách đọc cao độ tại X/Y.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.tra-cao-do-tin"
  ],
  "examplePlacements": [
    {
      "heading": "tra-cao-độ-và-sai-sót",
      "exampleIds": [
        "example.civil3d-dotnet.tra-cao-do-tin"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — About Surfaces (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENG/Civil3D-UserGuide/files/GUID-1BFB673D-F667-410A-9400-0FAABEB5951C.htm"
    },
    {
      "title": "Autodesk — Tutorial: Creating and Adding Data to a Surface",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENG/Civil3D-Tutorials/files/GUID-899731B5-0B6A-451E-9CF2-0DCF00FA9B64.htm"
    },
    {
      "title": "Autodesk — FindElevationAtXY Method",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/Civil3D-API/files/html/d280ff4f-4c4b-f910-7a27-0e787a43448f.htm"
    },
    {
      "title": "Autodesk — Surface Members",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/920bd60e-abec-8757-d031-b9acc5d4753a.htm"
    }
  ],
  "aliases": [
    "TIN surface",
    "bề mặt TIN"
  ],
  "tags": [],
  "searchableTerms": [
    "FindElevationAtXY",
    "boundary",
    "breakline",
    "contour",
    "Rebuild"
  ]
}
---

## Định nghĩa

TinSurface là surface dùng mạng tam giác không đều để biểu diễn địa hình. Cao độ bên trong một tam giác được nội suy từ đỉnh. Đường contour hiển thị là cách biểu diễn surface; nó không thay nguồn dữ liệu cao độ của object.

## Nguồn định nghĩa

Điểm và contour có thể làm dữ liệu đầu vào. Breakline giữ đặc trưng tuyến tính như mép đường hoặc rãnh trong mạng tam giác. Boundary xác định miền surface; mask phục vụ hiển thị có tác động khác với giới hạn dùng trong tính toán.

Ví dụ ba đỉnh (0,0,10), (10,0,20), (0,10,10) cho mặt phẳng z=10+x. Tại (2,3), cao độ minh họa là 12. Đây là bộ dữ liệu nhỏ có thể dựng trên bản sao DWG để đối chiếu phép nội suy.

## Tra cao độ và sai sót

FindElevationAtXY nhận X/Y trong hệ tọa độ bản vẽ. Điểm ngoài miền dữ liệu phát ngoại lệ thay vì một cao độ bằng 0. Mẫu xử lý tình huống này và giữ tên surface trong thông báo.

Không đổi interval contour để chữa dữ liệu TIN sai. Kiểm tra definition, breakline, boundary và trạng thái cập nhật. Lệnh đọc không tự rebuild; ghi nhận hiện trạng để người kiểm tra biết kết quả lấy từ mô hình nào.
