---
{
  "id": "exercise.gis-data-automation.kiem-tra-linework",
  "slug": "kiem-tra-linework",
  "title": "Sàng lọc linework và nhận diện phần QA còn thiếu",
  "description": "Thử mã trùng, đường suy biến, ngưỡng chiều dài và giao cắt chưa được kiểm tra.",
  "status": "published",
  "technology": "gis-data-automation",
  "difficulty": "trung-cap",
  "expectedResult": "Bộ bảy đường L01/L02/DUP/DUP/L05/L06/L07 có accepted=2 (L01, L07), rejected=5 với đơn vị m và ngưỡng 0,01 m. L01 dài 5 m. L07 có thể cắt L01 nhưng vẫn qua sàng lọc này; cần quy tắc/công cụ bổ sung cho topology.",
  "solutionExampleId": "example.gis-data-automation.qa-linework",
  "conceptIds": [
    "concept.gis-data-automation.spatial-validity-topology",
    "concept.gis-data-automation.schema-stable-id",
    "concept.gis-data-automation.crs-datum-projection"
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Bài tập dữ liệu; ghi môi trường thực tế khi chạy, không suy ra đã thử API CAD"
    }
  ]
}
---

## Chuẩn bị bảy đường

Dùng dictionary với feature_id và Geometry LineString 2D. L01 có đỉnh (0,0) → (3,4); L02 có (3,4) → (3,4). Hai hàng cùng mã DUP có (0,0) → (1,0) và (1,0) → (2,0). L05 có (1,1) → (1,001;1,001), trong đó hai thành phần dùng 1.001 khi nhập Python/JSON. L06 có (0,0) → (NaN,1). L07 có (0,4) → (4,0). Các số chỉ là dữ liệu học tập trong một hệ mặt phẳng đã xác nhận đơn vị mét.

## Sàng lọc và báo cáo

Gọi qa_linework với coordinate_unit="m", min_length_m=0.01. Đối chiếu counts và lý do của mỗi hàng. Hai hàng DUP đều phải bị loại; đường L02 có đỉnh liên tiếp trùng; L05 ngắn hơn ngưỡng; L06 có số không hữu hạn. Với dữ liệu chứa NaN, thử trực tiếp dictionary Python; JSON chuẩn không cho phép NaN.

## Kiểm tra phần chưa bao phủ

Vẽ L01 và L07 để thấy giao cắt trong mặt bằng. Script vẫn nhận L07 vì chưa kiểm tra giao cắt hoặc yêu cầu mạng. Đề xuất quy tắc riêng: giao cắt có cần chia đoạn, phải nối nút hay chỉ là cầu vượt? Cần thêm thông tin nghiệp vụ và cao độ để trả lời.

## Thử cấu hình

Thay coordinate_unit thành "degree" và xác nhận script dừng trước phép đo. Không đổi nhãn đơn vị sang m để làm thử qua. Ghi checked_rules/not_checked trong báo cáo; việc counts đúng chỉ xác minh bộ quy tắc sàng lọc đã mô tả.
