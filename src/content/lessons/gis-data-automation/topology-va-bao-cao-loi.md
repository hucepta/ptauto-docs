---
{
  "id": "lesson.gis-data-automation.topology-va-bao-cao-loi",
  "slug": "topology-va-bao-cao-loi",
  "title": "Topology: kiểm tra mạng ống và tuyến sau chuyển đổi",
  "description": "Xác định quy tắc kết nối, khoảng hở, giao cắt và báo cáo lỗi có vị trí.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.qa-pipeline",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.etl-spatial-qa"
  ],
  "flow": [
    {
      "label": "Quy tắc",
      "detail": "Định nghĩa đầu ống phải nối node nào"
    },
    {
      "label": "Kiểm tra",
      "detail": "Tìm gap/overlap/invalid geometry"
    },
    {
      "label": "Sửa và thử lại",
      "detail": "Lưu ID, vị trí, mức độ và so kết quả"
    }
  ],
  "sources": [
    {
      "title": "GeoPandas — Projections",
      "url": "https://docs.geopandas.org/en/stable/docs/user_guide/projections.html"
    }
  ],
  "compatibility": [
    {
      "product": "GIS / Python",
      "version": "Thư viện/CRS theo dự án",
      "platform": "Windows / macOS / Linux"
    }
  ],
  "illustration": "network"
}
---

## Hình học hợp lệ chưa chắc là mạng đúng

Một LINE có tọa độ hợp lệ vẫn có thể dừng cách hố ga 0,2 m. Trong GIS, kiểm tra topology cần quy tắc nghiệp vụ: đầu ống phải chạm một structure, tuyến không tự giao ngoài nút cho phép, polygon khu đất không chồng lấn nếu thiết kế yêu cầu. Khoảng dung sai phải theo đơn vị CRS và tiêu chuẩn dự án; không dùng cùng 0,01 cho mọi hệ đơn vị.

```text
Feature nguồn → geometry validity → quy tắc topology → danh sách lỗi có ID/tọa độ → sửa → chạy lại
```

Không tự snap và ghi đè dữ liệu gốc khi chưa có quyền và quy tắc. Lưu bản lỗi và bản sau sửa để kiểm tra tác động. Report gồm `feature_id`, `rule`, `location`, `severity`, `suggestion`; lỗi không có ID rất khó trả về đội thiết kế.

## Thực hành

Tạo ba đoạn ống: hai đoạn nối đúng, một đoạn hở 0,2 m. Dự đoán số lỗi khi dung sai 0,05 m và 0,25 m; giải thích vì sao chọn ngưỡng phải dựa vào yêu cầu dự án.
