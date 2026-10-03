---
{
  "id": "lesson.gis-data-automation.etl-spatial-qa",
  "slug": "etl-spatial-qa",
  "title": "Kiểm dữ liệu",
  "description": "Xây các lớp kiểm tra độc lập, giữ dữ liệu lỗi và tạo báo cáo batch có thể truy vết.",
  "status": "published",
  "chapterId": "chapter.gis-data-automation.qa-pipeline",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.gis-data-automation.dinh-dang-thu-vien"
  ],
  "conceptIds": [
    "concept.gis-data-automation.spatial-validity-topology",
    "concept.gis-data-automation.schema-stable-id"
  ],
  "exampleIds": [
    "example.gis-data-automation.qa-linework"
  ],
  "exerciseIds": [
    "exercise.gis-data-automation.kiem-tra-linework"
  ],
  "sources": [
    {
      "title": "Shapely — User Manual",
      "url": "https://shapely.readthedocs.io/en/stable/manual.html"
    },
    {
      "title": "Shapely — make_valid",
      "url": "https://shapely.readthedocs.io/en/stable/reference/shapely.make_valid.html"
    },
    {
      "title": "PostGIS — ST_IsValid",
      "url": "https://postgis.net/docs/ST_IsValid.html"
    },
    {
      "title": "PostGIS — ST_IsValidReason",
      "url": "https://postgis.net/docs/ST_IsValidReason.html"
    },
    {
      "title": "Python — math",
      "url": "https://docs.python.org/3/library/math.html"
    }
  ],
  "compatibility": [
    {
      "product": "GIS",
      "version": "Nguyên lý dữ liệu; CRS, driver và phiên bản thư viện cần xác nhận cho từng bộ dữ liệu"
    }
  ],
  "tags": [
    "GIS",
    "CAD–GIS",
    "dữ liệu không gian"
  ],
  "examplePlacements": [
    {
      "heading": "tách-kiểm-tra-thuộc-tính-khỏi-hình-học",
      "exampleIds": [
        "example.gis-data-automation.qa-linework"
      ]
    }
  ],
  "illustration": "network"
}
---

## ETL có đầu vào và đầu ra rõ ràng

ETL gồm Extract lấy dữ liệu nguồn, Transform chuẩn hóa theo quy tắc và Load đưa vào nơi đích. Trong CAD–GIS, Extract có thể là linework từ DXF hoặc bảng đã xuất từ Civil; Transform gồm ánh xạ, chuyển kiểu và xử lý tọa độ; Load có thể tạo GeoPackage. Mỗi bước cần cấu trúc trường và điều kiện chấp nhận. Một dòng bị loại cần lý do và đường dẫn truy lại đối tượng.

## Tách kiểm tra thuộc tính khỏi hình học

Kiểm tra thuộc tính phát hiện mã trống, mã trùng, số không hữu hạn, giá trị ngoài miền và khóa cha thiếu. Kiểm tra hình học phát hiện rỗng, sai loại, đường suy biến hoặc polygon không hợp lệ. Ví dụ đi kèm kiểm tra linework nhỏ bằng Python thuần: mỗi đường cần ít nhất hai đỉnh hữu hạn, không có đoạn liên tiếp trùng tọa độ và chiều dài đạt ngưỡng. Kiểm tra này không bao phủ tự cắt, polygon hay quan hệ toàn lớp; nó là bước sàng lọc trước công cụ chuyên dụng.

## Validity khác với topology nghiệp vụ

Một polygon hợp lệ theo mô hình hình học vẫn có thể chồng lên thửa bên cạnh, sai ranh dự án hoặc thiếu vùng phủ. Topology nghiệp vụ mô tả quan hệ giữa các Feature: pipe nối structure, đoạn đường nối đúng đầu hoặc các vùng không chồng lấn. Shapely phân tích trên mặt phẳng và bỏ qua Z trong phép phân tích hình học. PostGIS ST_IsValid kiểm tra tính hợp lệ trong 2D; cần quy tắc bổ sung cho quan hệ mạng và cao độ. Hai pipe cắt nhau trên XY không tự chứng minh chúng nối nhau trong không gian.

## Sửa lỗi phải giữ ý nghĩa

make_valid có thể làm Geometry đổi loại hoặc tách thành nhiều phần; xem kết quả trước khi chấp nhận. Snap theo dung sai có thể nối nhầm hai đối tượng gần nhau. Đặt dung sai theo đơn vị và mục đích đã được dự án quyết định; không dùng số 0,01 trên tọa độ độ để hiểu là một centimet. Giữ bản trước sửa, mã lỗi và quyết định người kiểm duyệt. Lỗi thiếu CRS nên dừng phép kiểm tra khoảng cách, thay vì gán CRS để pipeline chạy tiếp.

## Báo cáo cho theo lô và thử nghiệm

Mỗi lần chạy ghi nguồn, cấu trúc trường, CRS, cấu hình dung sai, phiên bản thư viện, số đối tượng và tổng lỗi theo quy tắc. Phân biệt lỗi làm dừng file với lỗi một Feature. Thử đường dài 3–4–5, đường có hai đỉnh trùng, mã trùng và số NaN. Đối chiếu số đầu vào với accepted/rejected, rồi dùng công cụ hình học để kiểm tra lớp hoàn chỉnh. Báo cáo tốt cho biết điều đã kiểm tra và phần còn cần kiểm tra.
