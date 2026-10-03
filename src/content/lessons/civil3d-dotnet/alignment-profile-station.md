---
{
  "id": "lesson.civil3d-dotnet.alignment-profile-station",
  "slug": "alignment-profile-station",
  "title": "Alignment, station/offset và Profile",
  "description": "Phân biệt hình học tuyến, trắc dọc, PVI, đường cong đứng và hình thức hiển thị trong Profile View.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.tuyen-va-trac-doc",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.civildocument-object-model"
  ],
  "conceptIds": [
    "concept.civil3d-dotnet.station-offset",
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.tra-station-offset"
  ],
  "examplePlacements": [
    {
      "heading": "tra-tọa-độ-có-kiểm-tra-input",
      "exampleIds": [
        "example.civil3d-dotnet.tra-station-offset"
      ]
    }
  ],
  "exerciseIds": [
    "exercise.civil3d-dotnet.station-offset"
  ],
  "sources": [
    {
      "title": "Autodesk — StationOffset(Double, Double, ref Double, ref Double)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
    },
    {
      "title": "Autodesk — About Creating Layout Profiles",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/Civil3D-UserGuide/files/GUID-49C6EA06-84FF-4358-850C-2C462DF542C3.htm"
    },
    {
      "title": "Autodesk — To Create Profile Geometry Points on Alignments",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/Civil3D-UserGuide/files/GUID-02175AB9-4C31-480C-99AD-B4C28815531D.htm"
    },
    {
      "title": "Autodesk — Modifying Stations with Station Equations",
      "url": "https://help.autodesk.com/cloudhelp/2021/ENU/Civil3D-DevGuide/files/GUID-F23CC3E9-C29D-4B98-90A2-604C3D8BDC81.htm"
    }
  ],
  "tags": [
    "tuyến",
    "trắc dọc"
  ],
  "searchableTerms": [
    "Alignment",
    "StationOffset",
    "easting",
    "northing",
    "Profile",
    "PVI",
    "vertical curve",
    "Profile View",
    "BVC",
    "EVC"
  ]
}
---

## Alignment và hệ station/offset

Alignment mô tả hình học tuyến trong mặt bằng. Station xác định vị trí dọc tuyến; offset biểu diễn độ lệch ngang đối với tuyến tại vị trí liên quan. Tọa độ X/Y bản vẽ và station/offset là hai cách mô tả khác nhau. Khi có station equation hoặc lý trình đầu khác 0, không coi station là khoảng cách từ đỉnh đầu Polyline.

`Alignment.StationOffset` nhận easting, northing và ghi station, offset qua tham số `ref`. Ví dụ tuyến thẳng từ (0,0) đến (100,0), lý trình đầu 0: điểm (50,10) có hình chiếu tại station 50 và độ lệch ngang 10. Kiểm tra dấu offset bằng dữ liệu trái/phải trong host trước khi lập quy tắc xuất báo cáo.

## Tra tọa độ có kiểm tra input

Ví dụ chọn Alignment, nhập X và Y trong hệ tọa độ bản vẽ, rồi gọi overload bốn tham số. Không dùng Z để thay tọa độ ngang. Khi điểm vượt phạm vi tuyến, API có thể phát `PointNotOnEntityException`; báo tình huống này thay vì trả station 0.

Với tuyến có đoạn cong hoặc gần tự giao, cần đối chiếu kết quả với công cụ inquiry của Civil 3D. Ghi tuyến và tọa độ đầu vào để đối chiếu.

## Profile, PVI và đường cong đứng

Profile mô tả quan hệ station–cao độ theo Alignment. Surface profile lấy dữ liệu địa hình; layout profile chứa ý đồ thiết kế. PVI là điểm giao của các tiếp tuyến trắc dọc. Khi thêm đường cong đứng, điểm trên đường cong không nhất thiết trùng cao độ giao của hai tiếp tuyến.

Trên một tiếp tuyến từ station 100, cao độ 100 đến station 300, cao độ 105, độ dốc là (105−100)/(300−100)=2,5%. Phép nội suy tuyến tính chỉ đúng cho tiếp tuyến đó; không áp dụng nguyên xi qua đường cong đứng. Kiểm tra thứ tự PVI, chiều dài curve và các đoạn chuyển tiếp trước khi tự động tạo profile.

## Profile View và workflow

Profile View là khung hiển thị một hoặc nhiều Profile với tỷ lệ, style và band. Một Profile có thể được trình bày nhiều nơi; xóa view và xóa dữ liệu profile là hai thao tác khác nhau. Không đọc cao độ từ vị trí đồ họa trên giấy vì tỷ lệ đứng/ngang có thể khác nhau.

Workflow đọc dữ liệu bắt đầu từ Alignment, xác định Profile cần xét, kiểm tra loại và phạm vi station, rồi mới truy vấn cao độ hoặc so sánh thiết kế với địa hình. Nhãn là phương tiện đối chiếu, không phải nguồn số liệu thay cho object.

## Thực hành

Chạy mẫu tại điểm trên tuyến, hai bên tuyến và ngoài đầu/cuối. Đối chiếu station/offset bằng inquiry. Với Profile thử, tính độ dốc một tiếp tuyến và đánh dấu BVC, PVI, EVC trong Profile View. Ghi đơn vị cùng quy ước dấu; chưa tạo hoặc sửa hình học trong mẫu.
