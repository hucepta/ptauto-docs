---
{
  "id": "lesson.dynamo-python.graph-csv-batch",
  "slug": "graph-csv-batch",
  "title": "Làm sạch CSV",
  "description": "Chia graph theo trách nhiệm, giữ nguồn dữ liệu và đo chi phí trước khi tối ưu workflow.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.python-va-workflow",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.python-in-out-engine"
  ],
  "conceptIds": [
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.list-lacing"
  ],
  "exampleIds": [
    "example.dynamo-python.chuan-hoa-ban-ghi",
    "example.dynamo-python.qa-csv-coc"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Dynamo Primer — Graph Strategies",
      "url": "https://primer2.dynamobim.org/9_best_practices/1-graph-strategies"
    },
    {
      "title": "Python — csv",
      "url": "https://docs.python.org/3/library/csv.html"
    },
    {
      "title": "Python — io",
      "url": "https://docs.python.org/3/library/io.html"
    },
    {
      "title": "Python — json",
      "url": "https://docs.python.org/3/library/json.html"
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
      "heading": "chuẩn-hóa-và-lưu-nguồn-dữ-liệu",
      "exampleIds": [
        "example.dynamo-python.chuan-hoa-ban-ghi"
      ]
    },
    {
      "heading": "kiểm-soát-csv-và-excel",
      "exampleIds": [
        "example.dynamo-python.qa-csv-coc"
      ]
    }
  ],
  "illustration": "report"
}
---
<span id="chia-đồ-thị-theo-trách-nhiệm" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Cấu trúc đồ thị

Một đồ thị bảo trì được cần cho biết đầu vào đến từ đâu, quy tắc nào đã áp dụng và kết quả nào sẽ được giao. Tổ chức nhóm đọc nguồn, chuẩn hóa, kiểm tra, xuất và báo cáo theo luồng trái sang phải. Ghi cấu trúc trường và đơn vị bên cạnh các ranh giới. Dùng node cho thao tác người đọc cần nhìn trực tiếp; dùng Python khi nhiều quy tắc liên quan thành một hàm rõ nghĩa. Không gom toàn bộ lựa chọn bản vẽ, kiểm tra dữ liệu và ghi file vào một node khó kiểm tra.

<span id="chuẩn-hóa-mà-vẫn-truy-vết" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chuẩn hóa và lưu nguồn dữ liệu

Giữ một bản dữ liệu nguồn và tạo bản ghi chuẩn riêng. Cắt khoảng trắng ở mã, chuyển trường số theo quy ước đã thống nhất, nhưng không tự bỏ dấu hay đổi mã nghiệp vụ. Mỗi rejected row cần số dòng hoặc mã nguồn. Ví dụ mã “0012” phải còn là chuỗi sau khi Excel mở file; nếu đã mất số 0 thì không thể đoán lại an toàn. Chỉ xử lý mã trùng sau khi xác định khóa nghiệp vụ; hai cọc cùng tọa độ có thể phục vụ hai mục đích khác nhau.

## Kiểm soát CSV và Excel

CSV là văn bản dạng bảng; dấu phân cách, quoting và encoding cần được quy định. Dùng csv.reader hoặc DictReader thay vì split dấu phẩy, vì tên có dấu phẩy có thể nằm trong dấu nháy. Khi đọc file bằng Python 3, chỉ rõ encoding và newline. Excel workbook có sheet, kiểu ô và công thức; xuất CSV chỉ giữ bảng giá trị của sheet được chọn. Kiểm tra các trường ngày, số thập phân và mã sau khi xuất. Không giả định một dấu phẩy luôn là dấu thập phân hay dấu chia cột.

<span id="chạy-theo-lô-có-ranh-giới" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Phạm vi xử lý theo lô

Với nhiều file, lập danh sách nguồn, phiên bản cấu trúc trường và thư mục đầu ra trước khi chạy. Mỗi file tạo kết quả cùng báo cáo riêng; tổng hợp số hàng accepted/rejected ở cuối. Lỗi cấu trúc trường toàn file khác lỗi một hàng và cần trạng thái khác nhau. Chạy lại phải cho cùng mã và cùng dữ liệu nếu đầu vào không đổi. Với bước ghi bản vẽ, tách khỏi bước đọc và kiểm tra, chạy Manual trên bản sao sau khi đã xem báo cáo.

<span id="đo-trước-khi-tối-ưu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đo hiệu năng

Ghi thời gian đọc, xử lý và xuất theo từng giai đoạn. Giảm gọi API lặp bằng cách đọc các giá trị cần thiết một lần; giữ bộ nhớ trong giới hạn bằng từng lô phù hợp. Tránh Cross Product vô tình tạo hàng triệu tổ hợp. Tắt preview hình học nặng khi nó không giúp kiểm tra. Trước khi tăng theo lô, thử hai file nhỏ: một đúng và một thiếu cột, rồi xác nhận lỗi của file thứ hai không làm mất báo cáo file thứ nhất.
