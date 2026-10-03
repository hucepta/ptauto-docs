---
{
  "id": "exercise.civil3d-dotnet.cao-do-tin",
  "slug": "cao-do-tin",
  "title": "Tra cao độ trong và ngoài TIN",
  "description": "Tạo một tam giác có phương trình cao độ rõ ràng và phân biệt cao độ thật với điểm ngoài miền.",
  "status": "published",
  "technology": "civil3d-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "TIN đúng ba đỉnh đã nêu cho cao độ 12 tại (2,3); (20,20) ngoài miền được báo riêng. Sai kiểu, Esc và inquiry không thay definition hoặc rebuild.",
  "conceptIds": [
    "concept.civil3d-dotnet.tinsurface"
  ],
  "solutionExampleId": "example.civil3d-dotnet.tra-cao-do-tin",
  "tags": [],
  "searchableTerms": [
    "PTA_TIN_ELEVATION",
    "FindElevationAtXY",
    "tolerance"
  ]
}
---

## Chuẩn bị surface

Trong bản sao DWG Civil 3D 2025, tạo TinSurface có đúng ba điểm (0,0,10), (10,0,20), (0,10,10). Đối chiếu TIN trong Prospector và hiển thị triangle bằng style phù hợp. Đảm bảo không có dữ liệu khác làm thay miền hoặc định nghĩa.

Ba điểm tạo mặt phẳng z=10+x. Điểm (2,3) nằm trong tam giác vì x, y dương và x+y nhỏ hơn 10; cao độ mong đợi là 12. Điểm (20,20) nằm ngoài miền.

## Chạy lệnh

Build source PTA_TIN_ELEVATION với .NET 8 và SDK Civil 3D 2025, rồi NETLOAD trong Civil 3D đầy đủ. Chọn surface và nhập hai cặp X/Y trên. Đối chiếu kết quả trong miền với inquiry của host; lưu thông báo ngoài miền.

Nhấn Esc khi chọn surface và trong bước nhập tọa độ. Thử chọn Alignment để kiểm tra rejection. Mẫu không nhận mọi loại Surface khi chức năng đang yêu cầu TinSurface.

## Tiêu chí kiểm tra

Cao độ tại (2,3) phải gần 12 trong tolerance số học đã chọn. Ngoài miền phải có thông báo riêng, không xuất cao độ bằng 0. Sau lệnh, definition và số điểm surface giữ nguyên; không gọi rebuild trong bước inquiry.

Ghi tên surface, X/Y, đơn vị, cao độ, tolerance và bản build host. Nếu kết quả khác, kiểm tra dữ liệu định nghĩa trước khi đổi công thức hoặc làm tròn nhiều hơn để che sai lệch.
