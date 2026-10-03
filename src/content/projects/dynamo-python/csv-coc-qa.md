---
{
  "id": "project.dynamo-python.csv-coc-qa",
  "slug": "csv-coc-qa",
  "title": "Đồ thị QA dữ liệu cọc từ Civil 3D",
  "description": "Thiết kế graph đọc bảng cọc, kiểm tra dữ liệu và giao báo cáo cùng hồ sơ tọa độ.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "expectedResult": "Có graph với hợp đồng IN/OUT rõ, accepted/rejected/report_csv đối chiếu đủ số bản ghi, thử được mã trùng và điểm ngoài phạm vi. Có hồ sơ nguồn/CRS, nhật ký engine và phần kiểm chứng riêng cho bước đọc Civil.",
  "prerequisites": [
    "lesson.dynamo-python.doc-du-lieu-civil",
    "lesson.dynamo-python.python-in-out-engine",
    "lesson.dynamo-python.graph-csv-batch",
    "lesson.dynamo-python.qa-csv-coc-gis"
  ],
  "conceptIds": [
    "concept.dynamo-python.data-flow",
    "concept.dynamo-python.list-lacing",
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "exampleIds": [
    "example.dynamo-python.ghep-danh-sach",
    "example.dynamo-python.chuan-hoa-ban-ghi",
    "example.dynamo-python.qa-csv-coc"
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Graph Strategies",
      "url": "https://primer2.dynamobim.org/9_best_practices/1-graph-strategies"
    },
    {
      "title": "Autodesk — Samples for Dynamo for Autodesk Civil 3D 2026",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/Civil3D-Dynamo/files/Civil3D_Dynamo_Samples_for_Dynamo_for_Autodesk_Civil_3D_html.html"
    },
    {
      "title": "Python — csv",
      "url": "https://docs.python.org/3/library/csv.html"
    },
    {
      "title": "Python — math",
      "url": "https://docs.python.org/3/library/math.html"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo / Civil 3D",
      "version": "Logic bảng dùng Python 3; bước đọc Civil cần thử trên đúng phiên bản host"
    }
  ],
  "examplePlacements": [
    {
      "heading": "xây-graph-theo-ranh-giới",
      "exampleIds": [
        "example.dynamo-python.qa-csv-coc"
      ]
    }
  ]
}
---

## Sản phẩm và phạm vi

Tạo graph QA cho bảng cọc của một Alignment. Sản phẩm gồm bảng được nhận, danh sách lỗi và CSV báo cáo; chưa cập nhật đối tượng bản vẽ. Nguồn có thể là CSV đã xuất hoặc dữ liệu đọc trong đúng Civil 3D. Phần mẫu ở đây xử lý bảng thuần, vì vậy người chưa có host vẫn học được quy tắc QA. Khi bổ sung bước đọc API, giữ nhật ký riêng để xác nhận nó đã lấy đúng dữ liệu từ bản vẽ nào.

## Định nghĩa dữ liệu giao

Mỗi cọc giữ point_id, alignment_id, station_m, x_m, y_m, z_m và surface_z_m tùy chọn. Ghi lý trình theo quy ước tuyến, đơn vị mét và nguồn cao độ; không chuyển nhãn lý trình trình bày thành số bằng thao tác cắt chuỗi không được kiểm tra. Hồ sơ CRS ghi phép chiếu, tham số, đơn vị và hệ cao độ từ nguồn đã xác nhận. Thiếu hồ sơ vẫn cho phép QA thuộc tính nhưng chưa bàn giao lớp địa lý xác định.

Chuẩn bị hai bảng nhỏ: bảng đúng có cọc tại lý trình đầu, giữa và cuối; bảng lỗi có mã trùng, điểm ngoài phạm vi, số NaN và chênh cao lớn. Ghi kết quả mong đợi trước khi dựng graph. Mã trùng cần đưa toàn bộ các hàng cùng mã vào rejected để người kiểm duyệt quyết định.

## Xây graph theo ranh giới

Tách nhóm cấu hình, đọc nguồn, chuẩn hóa, QA và xuất. Cấu hình giữ tuyến, giới hạn lý trình và ngưỡng chênh cao. Với dữ liệu node trả hai list tương ứng, dùng ví dụ ghép nghiêm ngặt để phát hiện số hàng lệch trước khi tạo bản ghi. Với bảng hai chiều, dùng ví dụ chuẩn hóa; giữ mã như chuỗi và chỉ chuyển trường số.

Nối CSV của một tuyến vào node QA cùng các giới hạn đã xác nhận. Quan sát counts rồi xem từng lý do rejected. Graph xuất phải nhìn thấy cả dữ liệu lỗi, không chỉ accepted. Giữ output chưa đối chiếu bề mặt như một trạng thái riêng; báo cáo cần cho biết cọc nào thiếu phép so cao độ.

## Xác nhận bước đọc Civil

Nếu dùng API hoặc node host, chọn một Alignment, một Profile và một Surface đã biết. Đối chiếu thủ công ba cọc: lý trình, tọa độ, cao độ thiết kế và bề mặt. Kiểm tra lựa chọn rỗng, điểm ngoài miền Surface và quan hệ Profile–Alignment. Tên node theo đúng thư viện của bản cài đặt; không thay thiếu node bằng tên suy từ class. Ghi host, Dynamo, engine, package và kết quả; không gắn kết luận thử API vào kết quả chạy script CSV.

## Nghiệm thu và bàn giao

Bảng đúng được nhận đủ; bảng lỗi giữ đủ số hàng qua accepted cộng rejected. Mã, nguồn và đơn vị còn truy được sau sắp xếp. Ngưỡng chênh cao được ghi là cấu hình bài tập, không là tiêu chuẩn nghiệm thu. Chạy lại cùng nguồn cho cùng mã và quy tắc phân loại. Khi tăng batch, chia theo tuyến và phạm vi, tạo báo cáo riêng từng nguồn rồi tổng hợp.

Giao graph, schema, raw CSV, kết quả và nhật ký. Trước khi chuyển sang GIS, xác nhận hồ sơ CRS; không đưa x_m/y_m trực tiếp vào GeoJSON. Phần chưa kiểm chứng trên host phải được ghi rõ để người tiếp nhận biết thử tiếp bước nào.
