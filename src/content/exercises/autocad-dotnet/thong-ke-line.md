---
{
  "id": "exercise.autocad-dotnet.thong-ke-line",
  "slug": "thong-ke-line",
  "title": "Thống kê LINE có dữ liệu đối chiếu",
  "description": "Tạo bản vẽ thử nhỏ, kiểm tra filter, grouping và kết quả khi người dùng hủy chọn.",
  "status": "published",
  "technology": "autocad-dotnet",
  "difficulty": "trung-cap",
  "expectedResult": "A: 2 LINE, tổng 7; B: 1 LINE, tổng 5; CIRCLE bị filter loại. Esc kết thúc và bản vẽ giữ nguyên.",
  "conceptIds": [
    "concept.autocad-dotnet.selectionfilter",
    "concept.autocad-dotnet.transaction"
  ],
  "solutionExampleId": "example.autocad-dotnet.thong-ke-line-layer",
  "tags": [],
  "searchableTerms": [
    "PTA_LINE_SUMMARY",
    "GroupBy",
    "LINE"
  ]
}
---

## Chuẩn bị dữ liệu

Tạo bản sao DWG để thử. Trên layer A, dựng hai LINE dài 3 và 4; trên layer B, dựng một LINE dài 5. Thêm một CIRCLE ở vị trí dễ chọn. Ghi đơn vị bản vẽ; không gọi các giá trị là mét nếu chưa xác định đơn vị.

Tạo class library nhắm SDK AutoCAD 2025/.NET 8, tham chiếu thư viện AutoCAD đúng phiên bản và đưa source thống kê LINE vào project. Build, giữ DLL/PDB rồi NETLOAD trong AutoCAD 2025. Đây là các bước người học cần thực hiện; tài liệu chưa có kết quả chạy host của mẫu.

## Thao tác

Gọi PTA_LINE_SUMMARY, chọn cả ba LINE và CIRCLE. Ghi số LINE, tổng chiều dài theo layer và nội dung thông báo. Chạy lại chỉ chọn hai LINE của A. Sau đó gọi lệnh và nhấn Esc.

Mở code để theo dấu PromptStatus, danh sách snapshot và GroupBy. Chỉ ra vì sao việc nhóm sau khi transaction đóng vẫn dùng được dữ liệu.

## Tiêu chí đối chiếu

Lần chọn hỗn hợp phải có nhóm A: 2 LINE, tổng 7; nhóm B: 1 LINE, tổng 5. CIRCLE không làm tăng số lượng. Esc phải kết thúc, không báo một thống kê đã hoàn thành và không đổi layer, vị trí hoặc chiều dài entity.

So sánh với Properties, lưu phiên bản host và kết quả. Nếu đọc lỗi, giữ thông báo exception để chẩn đoán; không ghi “0 đối tượng” thay cho lỗi đọc.
