---
{
  "id": "concept.civil3d-dotnet.station-offset",
  "slug": "station-offset",
  "title": "Station và offset",
  "description": "Mô tả vị trí theo Alignment, khác tọa độ X/Y của bản vẽ.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "kind": "term",
  "relatedConceptIds": [
    "concept.civil3d-dotnet.civildocument"
  ],
  "exampleIds": [
    "example.civil3d-dotnet.tra-station-offset"
  ],
  "examplePlacements": [
    {
      "heading": "ví-dụ-đối-chiếu",
      "exampleIds": [
        "example.civil3d-dotnet.tra-station-offset"
      ]
    }
  ],
  "sources": [
    {
      "title": "Autodesk — StationOffset(Double, Double, ref Double, ref Double)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-API/files/html/c6fe2704-261c-3cbd-d159-4d3324963f6f.htm"
    },
    {
      "title": "Autodesk — Modifying Stations with Station Equations",
      "url": "https://help.autodesk.com/cloudhelp/2021/ENU/Civil3D-DevGuide/files/GUID-F23CC3E9-C29D-4B98-90A2-604C3D8BDC81.htm"
    }
  ],
  "aliases": [
    "lý trình",
    "độ lệch ngang"
  ],
  "tags": [],
  "searchableTerms": [
    "StationOffset",
    "easting",
    "northing",
    "station equation",
    "PointNotOnEntityException"
  ]
}
---

## Định nghĩa

Station mô tả vị trí dọc Alignment; offset mô tả độ lệch ngang đối với tuyến. Tọa độ easting/northing xác định một điểm trong hệ bản vẽ. Alignment.StationOffset chuyển mô tả X/Y thành station và offset, trả hai số qua tham số ref.

## Ví dụ đối chiếu

Tuyến thẳng dọc trục X từ (0,0) đến (100,0), lý trình đầu 0: điểm (50,10) có hình chiếu tại station 50 và độ lệch ngang 10. Mẫu nhập X/Y bằng số để phạm vi tọa độ rõ ràng. Kiểm tra dấu của offset bằng hai điểm trái/phải trong host trước khi dùng cho báo cáo.

Với lý trình đầu khác 0 hoặc station equation, station không còn đồng nhất với khoảng cách tính từ đỉnh đầu của một Polyline. Giữ thông tin Alignment cùng tọa độ khi lưu kết quả.

## Ngoại lệ và thực hành

Điểm ngoài phạm vi Alignment có thể phát PointNotOnEntityException. Báo trường hợp ngoài phạm vi; không trả station 0 như một kết quả hợp lệ. Với đoạn cong hoặc tuyến gần tự giao, đối chiếu inquiry để hiểu kết quả được chọn.

Thử điểm trên tuyến, hai bên và vượt đầu/cuối. Ghi đơn vị bản vẽ, quy ước dấu và tên tuyến. Mẫu chỉ đọc, không thêm cọc hay đổi geometry.
