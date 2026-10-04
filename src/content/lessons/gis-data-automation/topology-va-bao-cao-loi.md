---
{
  "id": "lesson.gis-data-automation.topology-va-bao-cao-loi",
  "slug": "topology-va-bao-cao-loi",
  "title": "Quan hệ và lỗi",
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
<span id="hình-học-hợp-lệ-chưa-chắc-là-mạng-đúng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Hình học và topology

Một LINE có tọa độ hợp lệ vẫn có thể dừng cách hố ga 0,2 m. Trong GIS, kiểm tra topology cần quy tắc nghiệp vụ: đầu ống phải chạm một structure, tuyến không tự giao ngoài nút cho phép, polygon khu đất không chồng lấn nếu thiết kế yêu cầu. Khoảng dung sai phải theo đơn vị CRS và tiêu chuẩn dự án; không dùng cùng 0,01 cho mọi hệ đơn vị.

```text
Feature nguồn → geometry validity → quy tắc topology → danh sách lỗi có ID/tọa độ → sửa → chạy lại
```

Không tự snap và ghi đè dữ liệu gốc khi chưa có quyền và quy tắc. Lưu bản lỗi và bản sau sửa để kiểm tra tác động. Report gồm `feature_id`, `rule`, `location`, `severity`, `suggestion`; lỗi không có ID rất khó trả về đội thiết kế.

## Thực hành

Tạo ba đoạn ống: hai đoạn nối đúng, một đoạn hở 0,2 m. Dự đoán số lỗi khi dung sai 0,05 m và 0,25 m; giải thích vì sao chọn ngưỡng phải dựa vào yêu cầu dự án.

## Phân biệt lỗi hình và lỗi mạng

Hai đoạn ống có LineString hợp lệ vẫn có thể không nối được: đầu đoạn thứ nhất là (10,0), đầu đoạn sau là (10.01,0). Hãy chọn CRS mét, đặt dung sai kiểm theo yêu cầu dự án và báo khoảng cách 0.01 m. Đừng tự nối chỉ vì nhìn trên màn hình thấy chạm nhau.

Tạo bảng lỗi gồm source_id, loại lỗi, vị trí, giá trị/dung sai và hành động đề nghị. Kiểm hình học riêng bằng is_valid hoặc ST_IsValid; kiểm mạng riêng bằng quan hệ đầu/cuối và quy tắc cao độ. Với tuyến ống giao trên mặt phẳng nhưng khác cao độ, giao 2D không có nghĩa kết nối thực.

Trước khi sửa, giữ bản nguồn. Sau sửa, so số phần hình, chiều dài và ID, ghi những hình đã đổi loại. Bài đạt khi chỉ được một lỗi hình học và một lỗi nghiệp vụ, với báo cáo giúp người khác tìm đúng đối tượng.
