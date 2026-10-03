---
{
  "id": "lesson.dynamo-python.qa-csv-coc-gis",
  "slug": "qa-csv-coc-gis",
  "title": "Kiểm CSV cọc",
  "description": "Kiểm tra mã cọc, lý trình, tọa độ và chênh cao trên bảng xuất từ Civil mà không suy đoán CRS.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.thuc-hanh-du-lieu",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.doc-du-lieu-civil",
    "lesson.dynamo-python.graph-csv-batch"
  ],
  "conceptIds": [
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "exampleIds": [
    "example.dynamo-python.qa-csv-coc"
  ],
  "exerciseIds": [
    "exercise.dynamo-python.kiem-tra-csv-coc"
  ],
  "sources": [
    {
      "title": "Python — csv",
      "url": "https://docs.python.org/3/library/csv.html"
    },
    {
      "title": "Python — math",
      "url": "https://docs.python.org/3/library/math.html"
    },
    {
      "title": "Autodesk — Samples for Dynamo for Autodesk Civil 3D 2026",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-Dynamo/files/Civil3D_Dynamo_Samples_for_Dynamo_for_Autodesk_Civil_3D_html.html"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo",
      "version": "Nguyên lý và Python 3; thư viện node, engine và host phải đối chiếu theo bản cài đặt"
    }
  ],
  "tags": [
    "Dynamo",
    "Python",
    "dữ liệu"
  ],
  "examplePlacements": [
    {
      "heading": "phân-loại-lỗi-trước-khi-tính-toán",
      "exampleIds": [
        "example.dynamo-python.qa-csv-coc"
      ]
    }
  ],
  "illustration": "report"
}
---

## Xác định bảng đầu vào

Bài thực hành bắt đầu sau bước xuất dữ liệu đọc từ Civil 3D. Mỗi hàng có point_id, alignment_id, station_m, x_m, y_m và z_m; surface_z_m là trường tùy chọn để đối chiếu bề mặt. Các hậu tố _m là hợp đồng của bài: số đã theo mét. Lý trình là giá trị số theo quy ước tuyến đã ghi, không phải chuỗi “Km1+200”. Với nhiều tuyến, kiểm tra từng nhóm theo phạm vi tương ứng; không dùng phạm vi của tuyến A cho tuyến B. Script minh họa xử lý một phạm vi đã được người dùng xác nhận.

## Phân loại lỗi trước khi tính toán

Mã cọc phải có và duy nhất trong bảng giao. Quy tắc ở đây loại mọi hàng mang mã trùng, tránh giữ hàng đầu rồi âm thầm bỏ hàng sau. Trường số phải chuyển được sang float và hữu hạn: NaN không phải cao độ thiếu hợp lệ. Kiểm tra station_m nằm trong khoảng đóng từ lý trình đầu đến cuối. Điểm ngoài Surface cần lỗi nguồn ở bước đọc; CSV trống surface_z_m giữ trạng thái chưa đối chiếu, không thay bằng 0. Số dòng trong báo cáo theo bản ghi CSV, giúp tìm lại cả dữ liệu có quoting.

## So chênh cao theo mục đích

Khi có đủ cao độ, tính delta_z_m bằng z_m trừ surface_z_m. Ngưỡng tuyệt đối do người dùng đặt theo mục đích QA, không phải một tiêu chuẩn mặc định. Ví dụ ngưỡng 0,05 m được dùng để tập phân loại; nó không chứng minh mô hình đạt nghiệm thu công trình. Chênh cao lớn có thể do chọn nhầm Surface, đơn vị hoặc loại Profile. Giữ cả hai cao độ và hiệu số trong báo cáo để điều tra, thay vì tự sửa z_m bằng cao độ bề mặt.

## Chuẩn bị bàn giao tọa độ

Bảng accepted vẫn mang tọa độ của nguồn. Giao kèm hồ sơ CRS, đơn vị, quy ước X/Y, hệ cao độ và phiên bản xuất. Chữ “VN-2000” chưa đủ chọn một EPSG: cần phép chiếu, kinh tuyến trục, múi chiếu và tham số dự án đã xác nhận. Khi chưa rõ, giữ bảng để QA thuộc tính và dừng bước chuyển không gian. Không đưa X/Y dạng mét trực tiếp vào GeoJSON RFC 7946; phần GIS sẽ xử lý CRS và thứ tự trục bằng công cụ phù hợp.

## Thử các trường hợp biên

Nối chuỗi CSV vào IN[0], phạm vi vào IN[1] và IN[2], ngưỡng vào IN[3]. Ví dụ trả accepted, rejected và report_csv; nó không đọc DWG hoặc gọi Civil API. Thử lý trình đúng hai đầu, ngoài phạm vi, mã trùng, NaN và thiếu cao độ bề mặt. Tổng accepted cộng rejected phải bằng số bản ghi đầu vào. Sau đó đối chiếu một cọc với bản vẽ nguồn trên đúng ứng dụng chủ.
