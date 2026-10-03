---
{
  "id": "exercise.civil3d-dotnet.station-offset",
  "slug": "station-offset",
  "title": "Đối chiếu station và dấu offset",
  "description": "Tra ba vị trí trên Alignment thẳng và kiểm tra điểm vượt phạm vi trong Civil 3D.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Tuyến thẳng không có station equation: (50,0) cho station 50, offset 0; (50,±10) có độ lớn offset 10 và dấu được đối chiếu. Ngoài phạm vi và Esc được báo riêng.",
  "conceptIds": [
    "concept.civil3d-dotnet.station-offset"
  ],
  "solutionExampleId": "example.civil3d-dotnet.tra-station-offset",
  "tags": [],
  "searchableTerms": [
    "PTA_STATION_OFFSET",
    "StationOffset",
    "station equation"
  ]
}
---

## Chuẩn bị tuyến

Dùng bản sao DWG trong Civil 3D 2025, tạo Alignment thẳng từ (0,0) đến (100,0), lý trình đầu 0 và không có station equation. Ghi hệ tọa độ và đơn vị. Dựng điểm đối chiếu ở (50,0), (50,10), (50,−10) để dùng inquiry của host.

Build source PTA_STATION_OFFSET với target .NET 8 và reference AutoCAD/Civil 2025 đúng project mẫu. NETLOAD trong Civil 3D đầy đủ; ghi kết quả nạp trước khi kiểm tra command.

## Tra và đối chiếu

Gọi lệnh, chọn Alignment rồi nhập X/Y lần lượt cho ba điểm. Điểm trên tuyến cần có station 50 và offset 0; hai điểm còn lại có cùng station và độ lớn offset 10. Ghi dấu offset do host trả, đối chiếu với inquiry và ghi quy ước trái/phải của tuyến thử.

Thử tọa độ vượt đầu hoặc cuối, rồi nhấn Esc ở bước chọn và ở từng bước nhập. Phân biệt ngoài phạm vi với hủy thao tác; mẫu không trả số 0 để thay cho lỗi.

## Mở rộng có kiểm soát

Trong một bản sao khác, thêm station equation bằng UI. Quan sát sự khác nhau giữa giá trị số API và lý trình được định dạng trong giao diện. Không đổi quy tắc xuất báo cáo khi chưa đối chiếu cách SDK xử lý station.

Lưu tên Alignment, X/Y, station, offset, phiên bản host và kết quả inquiry. Không thêm cọc hoặc sửa hình học khi đang làm bài tra vị trí.
