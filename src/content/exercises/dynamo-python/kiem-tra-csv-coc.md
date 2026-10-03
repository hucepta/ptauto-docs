---
{
  "id": "exercise.dynamo-python.kiem-tra-csv-coc",
  "slug": "kiem-tra-csv-coc",
  "title": "Kiểm tra CSV cọc với lỗi biên",
  "description": "Phân loại lỗi lý trình, mã trùng, số không hữu hạn và cao độ chưa đối chiếu.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "expectedResult": "Bộ bảy bản ghi được mô tả có accepted=2 (P01, P03), rejected=5. Hai hàng DUP đều bị loại; P03 giữ elevation_check='chua-doi-chieu'. Lý trình 0 và 40 nằm trong phạm vi đóng; report_csv có một hàng cho mỗi bản ghi.",
  "solutionExampleId": "example.dynamo-python.qa-csv-coc",
  "conceptIds": [
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "compatibility": [
    {
      "product": "Dynamo / Python",
      "version": "Bài tập dữ liệu; ghi môi trường thực tế khi chạy, không suy ra đã thử API CAD"
    }
  ]
}
---

## Chuẩn bị CSV

Tạo header point_id,alignment_id,station_m,x_m,y_m,z_m,surface_z_m và bảy bản ghi, tất cả thuộc tuyến A. P01: lý trình 0, cao độ 2 và bề mặt 2,01. P02: lý trình 20, cao độ 2,08 và bề mặt 2. P03: lý trình 40, cao độ 3 và bề mặt trống. P04: lý trình 41, cao độ 3 và bề mặt 3. Hai hàng mã DUP có lý trình 10 và 30, cao độ 3 và bề mặt 3. P07 có lý trình 15 và x_m là NaN. Các tọa độ còn lại chọn số hữu hạn; dùng dấu chấm thập phân trong CSV.

## Chạy và truy vết

Đưa chuỗi CSV vào IN[0], giới hạn 0/40 vào IN[1]/IN[2], ngưỡng 0,05 vào IN[3]. Kiểm tra counts trước khi đọc accepted. Tìm từng rejected theo row_index và xác nhận lý do. P03 chưa đối chiếu Surface là trạng thái phải được giữ; không điền surface_z_m=0 để vượt kiểm tra.

## Thử hợp đồng lỗi

Thay một alignment_id thành B và xác nhận script yêu cầu chia bảng theo tuyến. Đảo phạm vi thành 40/0 để kiểm tra lỗi cấu hình. Thêm dấu phẩy vào một mã cọc bằng quoting hợp lệ để kiểm tra csv.reader, không dùng split dấu phẩy. Các thử bổ sung có tổng số hàng riêng, không so với counts của bộ bảy hàng.

## Tiêu chí tự đánh giá

Giải thích vì sao loại cả hai hàng trùng mã và vì sao QA bảng chưa chứng minh điểm đã khớp vị trí trong Civil 3D. Ghi riêng kết quả thử Python và việc đối chiếu bản vẽ nếu có host phù hợp.
