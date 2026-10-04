---
{
  "id": "lesson.dynamo-python.python-in-out-engine",
  "slug": "python-in-out-engine",
  "title": "Đầu vào Python",
  "description": "Tạo ranh giới dữ liệu rõ ràng, chọn engine đúng host và kiểm soát lỗi khi dùng Python hoặc .NET.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.python-va-workflow",
  "order": 1,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.node-list-lacing",
    "lesson.dynamo-python.doc-du-lieu-civil"
  ],
  "conceptIds": [
    "concept.dynamo-python.in-out",
    "concept.dynamo-python.python-dotnet-host"
  ],
  "exampleIds": [
    "example.dynamo-python.chuan-hoa-ban-ghi"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "DynamoDS — Python and Civil 3D",
      "url": "https://github.com/DynamoDS/DynamoPrimerNew/blob/master/dynamo-for-civil-3d/advanced-topics/python-and-civil-3d.md"
    },
    {
      "title": "Dynamo — PythonNet3 và khác biệt với CPython3",
      "url": "https://dynamobim.org/pythonnet3-a-new-dynamo-python-to-fix-everything/"
    },
    {
      "title": "Dynamo — Hướng dẫn chuyển graph sang PythonNet3",
      "url": "https://dynamobim.org/dynamo-pythonnet3-upgrade-a-practical-guide-to-migrating-your-dynamo-graphs/"
    },
    {
      "title": "Python — Data Structures",
      "url": "https://docs.python.org/3/tutorial/datastructures.html"
    },
    {
      "title": "Python — Errors and Exceptions",
      "url": "https://docs.python.org/3/tutorial/errors.html"
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
      "heading": "đầu-vào-in-và-đầu-ra-out",
      "exampleIds": [
        "example.dynamo-python.chuan-hoa-ban-ghi"
      ]
    }
  ],
  "illustration": "graph"
}
---
<span id="xem-in-và-out-như-một-hợp-đồng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đầu vào IN và đầu ra OUT

Trong Python node, IN chứa dữ liệu từ các cổng vào theo chỉ số: IN[0] là cổng đầu tiên. OUT là giá trị trả về đồ thị. Đặt tên biến theo ý nghĩa ngay khi đọc cổng, chẳng hạn rows và headers; ghi kiểu, đơn vị và cách xử lý rỗng trong ghi chú đồ thị. Một đầu vào là list các hàng khác với một list chứa tọa độ của một điểm. Ví dụ đi kèm nhận bảng hai chiều, kiểm tra số cột rồi tạo các bản ghi; lỗi cấu trúc được trả riêng để người dùng tìm đúng hàng.

<span id="chọn-list-hay-dictionary" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## List và dictionary

List giữ thứ tự, phù hợp với chuỗi lý trình hoặc các đỉnh đường. Dictionary tra cứu bằng khóa, phù hợp bản ghi có point_id, station_m và x_m. Không lấy giá trị dictionary theo thứ tự để suy cột CSV; dùng danh sách tên trường rõ ràng. Khi xây chỉ mục theo mã, kiểm tra trùng khóa trước vì phép gán có thể thay giá trị cũ. Giữ mã như chuỗi để không mất số 0 đầu. Chuyển số tại ranh giới đầu vào, kiểm tra giá trị hữu hạn và giữ thông tin hàng nguồn khi báo lỗi.

<span id="engine-là-một-phần-của-môi-trường" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Python engine

IronPython triển khai Python trên .NET; khả năng dùng thư viện có C extension khác CPython. CPython3 trong Dynamo và PythonNet3 đều nối CPython với .NET nhưng dựa trên các thế hệ Python.NET khác nhau. PythonNet3 xuất hiện dưới dạng package trong Dynamo 3.4; tài liệu Dynamo 4.0 mô tả engine mới dựa trên CPython 3.11 và Python.NET 3. Các mốc này thuộc Dynamo Core, không tự xác định bản Dynamo đi kèm Civil 3D của bạn. Ghi engine của từng node và thử lại khi đổi; không coi đổi engine là chuyển đổi tự động thành công.

## Tách dữ liệu thuần khỏi .NET

Ví dụ của bài dùng Python 3 và thư viện chuẩn, không cần assembly Civil. Khi gọi API thật, cần assembly đúng phiên bản ứng dụng chủ, namespace, chuyển kiểu và cách chọn overload tương ứng engine. đối tượng bao Dynamo, ObjectId và DBObject không thay thế nhau. Để phần gọi API trả số, chuỗi và collection thuần; phần làm sạch phía sau sẽ dễ thử độc lập. Không thêm import clr vào script CSV nếu script không dùng .NET.

## Báo lỗi theo phạm vi

Lỗi cấu hình như thiếu cổng vào nên dừng node với thông báo rõ. Lỗi một hàng dữ liệu nên được thu vào danh sách rejected có mã và lý do. Chỉ bắt exception dự kiến; tránh except trống che lỗi lập trình. Thử list rỗng, thiếu cột, số không hợp lệ và mã trùng trước khi nối lại đồ thị có ứng dụng chủ.
