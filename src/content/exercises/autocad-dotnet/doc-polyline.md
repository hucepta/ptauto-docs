---
{
  "id": "exercise.autocad-dotnet.doc-polyline",
  "slug": "doc-polyline",
  "title": "Đọc Polyline mở, đóng và có cung",
  "description": "Đối chiếu Length và Area mà không tự đóng hoặc sửa Polyline của người dùng.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "Polyline đóng 10×5: Length 30, Area 50. Polyline mở không báo Area; segment cung được đo bằng Length; sai kiểu và Esc không sửa dữ liệu.",
  "conceptIds": [
    "concept.autocad-dotnet.objectid",
    "concept.autocad-dotnet.transaction"
  ],
  "solutionExampleId": "example.autocad-dotnet.doc-polyline",
  "tags": [],
  "searchableTerms": [
    "PTA_POLYLINE_INFO",
    "Length",
    "Area",
    "bulge",
    "Closed"
  ]
}
---

## Chuẩn bị ba trường hợp

Trong DWG thử, tạo Polyline hình chữ nhật 10×5 đã đóng. Tạo bản sao rồi mở cạnh cuối để có Polyline mở. Tạo thêm một Polyline có segment cung bằng bulge. Giữ cả ba ở vị trí dễ phân biệt và ghi tên layer.

Build source PTA_POLYLINE_INFO với SDK AutoCAD 2025/.NET 8 đúng mẫu, rồi NETLOAD trong host mục tiêu. Chưa coi việc DLL biên dịch được là chứng cứ công thức hoặc hành vi selection đã đúng.

## Đọc và giải thích

Chọn lần lượt từng Polyline; ghi NumberOfVertices, Closed, Length và phần diện tích. Với bản đóng 10×5, tự tính chu vi 2×(10+5)=30 và diện tích 10×5=50. Với bản mở, mẫu không in diện tích. Đối chiếu Polyline có cung bằng Properties; giải thích vì sao tổng khoảng cách thẳng giữa đỉnh có thể khác Length.

Thử chọn CIRCLE, Polyline3d nếu có, và nhấn Esc khi đang chọn. Filter kiểu trong PromptEntityOptions chỉ nhận lightweight Polyline.

## Kiểm tra phạm vi

Mẫu phải đọc đúng object được chọn, không tự đóng Polyline mở hoặc chuyển đổi kiểu. Đo lại chiều dài, cờ Closed và layer sau lệnh. Nếu Area phát lỗi trên dữ liệu bất thường, ghi lỗi thay vì sửa hình học âm thầm.

Lưu phiên bản host, số liệu trước/sau và ba ảnh chụp Properties để một người khác có thể đối chiếu cùng dữ liệu.
