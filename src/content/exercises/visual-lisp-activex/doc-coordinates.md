---
{
  "id": "exercise.visual-lisp-activex.doc-coordinates",
  "slug": "doc-coordinates",
  "title": "Đọc Coordinates thành danh sách đỉnh",
  "description": "Bỏ lớp Variant, chia cặp XY và bổ sung elevation mà không sửa entity.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "expectedResult": "LWPolyline bốn đỉnh cho bốn record điểm; mỗi record có XY, elevation và ghi rõ OCS. Sau bài tập, số đỉnh và hình học giữ nguyên.",
  "conceptIds": [
    "concept.visual-lisp-activex.variant-safearray",
    "concept.visual-lisp-activex.object-model"
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ]
}
---

## Chuẩn bị trên Windows

Dùng PTA_VLA_RECT để tạo LWPolyline kín hoặc chọn polyline thử có bốn đỉnh. Lấy VLA-object từ entity name, kiểm tra property Coordinates và đọc giá trị. Trước khi chuyển, quan sát kiểu của Variant và SafeArray để hiểu dữ liệu API trả về.

## Tạo record đọc

Bỏ lớp Variant bằng `vlax-variant-value`, chuyển mảng sang list rồi lấy từng cặp XY. Đọc Elevation riêng, thêm vào record điểm OCS. Xác nhận số phần tử chẵn và không mặc định mảng bắt đầu ở một chỉ số cụ thể nếu dùng truy cập trực tiếp.

Viết hàm tính toán nhận list phẳng cùng elevation, trả list điểm. Hàm không nhận VLA-object để có thể thử với dữ liệu số tự tạo.

## Tiêu chí và bẫy

Bốn cặp XY phải tạo bốn record, không phải tám điểm. Thử elevation khác 0 và UCS xoay; không gọi setter Coordinates trong bài đọc. Với 3DPolyline, nhận diện quy ước XYZ/WCS khác và từ chối dùng bộ chia XY. Giải phóng tham chiếu khi kết thúc. Ghi các kết quả từ host thực tế trước khi dùng hàm đọc cho báo cáo tọa độ.
