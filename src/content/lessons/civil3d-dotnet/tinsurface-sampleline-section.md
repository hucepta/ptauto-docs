---
{
  "id": "lesson.civil3d-dotnet.tinsurface-sampleline-section",
  "slug": "tinsurface-sampleline-section",
  "title": "Mặt và trắc ngang",
  "description": "Đọc cao độ bề mặt, hiểu boundary/breakline/contour và theo quan hệ nguồn dữ liệu trắc ngang.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.surface-va-trac-ngang",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.alignment-profile-station"
  ],
  "conceptIds": [
    "concept.civil3d-dotnet.tinsurface",
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.tra-cao-do-tin"
  ],
  "examplePlacements": [
    {
      "heading": "tinsurface-và-nội-suy-cao-độ",
      "exampleIds": [
        "example.civil3d-dotnet.tra-cao-do-tin"
      ]
    }
  ],
  "exerciseIds": [
    "exercise.civil3d-dotnet.cao-do-tin"
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
      "title": "Autodesk — Sample Lines (2025)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/Civil3D-DevGuide/files/GUID-6A1012A4-1B8B-4109-9515-EBBE8121842F.htm"
    },
    {
      "title": "Autodesk — Understanding Sections",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/Civil3D-UserGuide/files/GUID-BD9BAD97-EEBC-4965-9FC0-5FC2CDE16609.htm"
    },
    {
      "title": "Autodesk — About Sample Line Objects",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENG/Civil3D-UserGuide/files/GUID-D7FEC6E9-1494-446E-80B8-B55F8ECA01FD.htm"
    }
  ],
  "tags": [
    "surface",
    "trắc ngang"
  ],
  "searchableTerms": [
    "TinSurface",
    "FindElevationAtXY",
    "boundary",
    "breakline",
    "contour",
    "Sample Line Group",
    "Section",
    "Section View"
  ],
  "illustration": "profile"
}
---

## TinSurface và nội suy cao độ

TinSurface biểu diễn địa hình bằng mạng tam giác không đều. Cao độ tại X/Y bên trong tam giác được nội suy từ các đỉnh, không lấy từ đường contour đang nhìn thấy. Ví dụ ba đỉnh (0,0,10), (10,0,20), (0,10,10) tạo mặt phẳng z=10+x; điểm (2,3) có cao độ 12. Đối chiếu phép tính này với surface thử.

Ví dụ đi kèm chọn TinSurface, nhập X/Y trong hệ tọa độ bản vẽ rồi gọi `FindElevationAtXY`. Điểm ngoài miền surface không có cao độ hợp lệ; exception không được đổi thành số 0 vì 0 có thể là cao độ thật.

## Boundary, breakline và contour

Boundary xác định miền của surface; outer boundary giới hạn phạm vi, hide boundary loại vùng cần bỏ. Mask có mục đích trình bày khác boundary và không nên dùng như quy tắc cắt khối lượng.

Breakline ràng buộc hướng tam giác theo mép đường, rãnh hoặc đỉnh dốc, giúp giữ đặc trưng địa hình khi nội suy. Điểm đúng cao độ vẫn có thể tạo surface sai hình dạng khi thiếu breakline. Kiểm tra đỉnh Z, đoạn giao nhau và tessellation của cung trước khi thêm dữ liệu.

Contour có thể là dữ liệu đầu vào hoặc đường biểu diễn sinh từ surface. Đổi interval/style contour thay cách hiển thị; không tự chứng minh rằng dữ liệu định nghĩa chính xác hơn. Ghi nguồn và thứ tự thao tác trong definition.

## Sample Line và Section

Sample Line nằm trên một Alignment và xác định hướng, vị trí lấy mặt cắt. Sample Line Group quản lý các sample line cùng nguồn được lấy mẫu. Section chứa dữ liệu trắc ngang từ source được chọn; Section View trình bày section trong bản vẽ.

Với sample line tại station 50 và bề rộng trái/phải 20, cần kiểm tra surface phủ toàn phạm vi đó. Section bị thiếu ở một phía có thể do miền dữ liệu không phủ, không phải lỗi style. Lấy mẫu surface địa hình và corridor surface phải giữ tên source để so sánh đúng.

## Quan hệ và cập nhật

Theo chuỗi Alignment → Sample Line Group → Sample Line → Section → Section View. API có collection ID ở từng cấp; mở object trong transaction và xử lý collection rỗng. Đừng suy rằng tạo sample line đã tạo đầy đủ mọi section cần dùng: danh sách nguồn lấy mẫu quyết định dữ liệu.

Nếu dữ liệu gốc thay đổi, xem chế độ cập nhật và trạng thái surface/section trước khi dùng kết quả. Lệnh chỉ đọc không tự rebuild để che mất tình trạng ban đầu.

## Thực hành

Chạy tra cao độ tại điểm trong TIN, gần boundary và ngoài miền. Đối chiếu inquiry và lưu X/Y, tên surface, đơn vị, kết quả. Trong bản sao DWG, tạo sample line bằng UI, chọn hai nguồn và quan sát section khi một nguồn không phủ. Mẫu không thay definition của surface.
