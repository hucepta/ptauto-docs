---
{
  "id": "exercise.dynamo-python.du-doan-list",
  "slug": "du-doan-list",
  "title": "Dự đoán ghép list và giữ nhóm tuyến",
  "description": "Đối chiếu lacing với quy tắc ghép một–một và kiểm tra tác động của Flatten.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "expectedResult": "Hai list dài 2/3 cho Shortest=2, Longest=3, Cross Product=6 tổ hợp ở ví dụ list phẳng. Ghép nghiêm ngặt từ chối độ dài khác nhau; khi hai list bằng nhau tạo đúng từng cặp. Giữ được nhóm của hai tuyến.",
  "solutionExampleId": "example.dynamo-python.ghep-danh-sach",
  "conceptIds": [
    "concept.dynamo-python.list-lacing",
    "concept.dynamo-python.data-flow"
  ],
  "compatibility": [
    {
      "product": "Dynamo / Python",
      "version": "Bài tập dữ liệu; ghi môi trường thực tế khi chạy, không suy ra đã thử API CAD"
    }
  ]
}
---

## Dữ liệu và dự đoán

Chuẩn bị lý trình [0, 20] và cao độ [5, 6, 7]. Trước khi chạy graph, viết các cặp bạn kỳ vọng cho Shortest, Longest và Cross Product. Giải thích tại sao một quy tắc phù hợp tạo lưới chưa chắc phù hợp ghép lý trình với cao độ của cùng cọc. Dùng Watch để xem cả số lượng và cấu trúc kết quả; việc có sáu item không đủ nếu bạn không biết sáu item thuộc nhóm nào.

## Thực hiện

Dùng Python node của ví dụ ghép nghiêm ngặt với hai cổng vào. Với đầu vào khác độ dài, đọc thông báo ValueError; sau đó bỏ giá trị 7 để có hai list bằng nhau và so từng station_m/z_m. Thử list rỗng ở cả hai cổng và một giá trị NaN: trường hợp đầu cho count=0, trường hợp sau phải bị từ chối.

Tiếp tục tạo nested list cho tuyến A có hai cọc và tuyến B có ba cọc. Viết schema tuyến → cọc và quan sát sau Flatten. Không nối nested list trực tiếp vào script chỉ nhận list số; xử lý từng nhóm đúng hợp đồng.

## Đối chiếu

Lưu ảnh hoặc ghi lại các kết quả quan sát cùng bản Dynamo và engine. Liệt kê hai cách giữ quan hệ sau lọc: giữ nhóm hoặc lưu alignment_id trong bản ghi. Lời giải Python chỉ kiểm tra ghép dữ liệu thuần, không chứng minh mọi node hình học hoặc host sẽ xử lý cùng cấu trúc.
