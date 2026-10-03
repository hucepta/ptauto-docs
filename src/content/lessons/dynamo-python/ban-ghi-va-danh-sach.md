---
{
  "id": "lesson.dynamo-python.ban-ghi-va-danh-sach",
  "slug": "ban-ghi-va-danh-sach",
  "status": "published",
  "chapterId": "chapter.dynamo-python.bat-dau",
  "difficulty": "co-ban",
  "illustration": "graph",
  "title": "Giữ đúng bản ghi",
  "description": "Mã cọc và lý trình phải đi cùng nhau qua mọi bước lọc. Nếu lọc riêng danh sách số nhưng giữ nguyên danh sách mã, hai nhánh sẽ lệch vị trí và kết quả vẫn có thể ",
  "order": 3,
  "sources": [
    {
      "title": "Dynamo Primer: Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"
    },
    {
      "title": "Dynamo Primer: giao diện",
      "url": "https://primer2.dynamobim.org/3_user_interface"
    },
    {
      "title": "Python: vòng lặp",
      "url": "https://docs.python.org/3/tutorial/controlflow.html#for-statements"
    }
  ]
}
---

## Một hàng là một cọc

Mã cọc và lý trình phải đi cùng nhau qua mọi bước lọc. Nếu lọc riêng danh sách số nhưng giữ nguyên danh sách mã, hai nhánh sẽ lệch vị trí và kết quả vẫn có thể trông hợp lý. Ta sẽ giữ mỗi cọc thành một bản ghi gồm hai giá trị.

## Tạo dữ liệu có một lỗi

Mở Dynamo bằng Manage > Visual Programming > Dynamo trong Civil 3D. Bấm New và chọn Manual. Bấm đúp khoảng trống tạo Code Block, nhập:

```text
rows = [["C01",0],["C02",25],["C03",-1]];
```

Tìm Watch trong Library bên trái, đặt bên phải và nối cổng ra `rows` sang Watch. Bấm Run, mở các nhánh. Bạn phải thấy ba nhánh con; mỗi nhánh có mã tại chỉ số 0 và số tại chỉ số 1. Tổng ba cọc khác tổng sáu giá trị con. Đó là lý do mức danh sách ảnh hưởng các node List.

## Kiểm bằng Python ngắn

Tìm Python Script, đặt giữa Code Block và một Watch mới. Nối `rows` vào `IN[0]`; bấm đúp Python Script để sửa mã:

```python
rows = IN[0]
valid = []
errors = []
for row in rows:
    stake_id, station = row
    if station < 0:
        errors.append([stake_id, station, "Lý trình âm"])
    else:
        valid.append([stake_id, station])
OUT = [valid, errors]
```

Chấp nhận mã, nối cổng ra Python vào Watch thứ hai và bấm Run. Nhánh 0 phải giữ C01/0 và C02/25. Nhánh 1 phải có C03/-1 cùng lời giải thích Lý trình âm. Ta đã kiểm quy tắc của bài, chưa kiểm lý trình với chiều dài một tuyến Civil 3D.

## Đọc từng phần kết quả

Nhánh lỗi vẫn giữ ID nguồn nên bạn có thể quay lại đúng hàng cần sửa. Đổi -1 thành 50 trong Code Block, bấm Run. Nhánh hợp lệ phải có ba cọc; nhánh lỗi rỗng. Đổi lại -1 để lưu trường hợp kiểm lỗi.

`IN[0]` là dữ liệu cổng đầu tiên của node; `OUT` là giá trị node trả. Tên valid/errors do ta đặt; chúng không phải tên node hay hàm Civil API. Vòng lặp `for` duyệt từng hàng. So sánh `< 0` trả cờ đúng/sai để chọn nhánh giữ hoặc lỗi.

## Bài tự làm

Thêm `["C04",75]` vào dữ liệu. Kết quả phải có ba bản ghi hợp lệ và một bản ghi lỗi. Sau đó đưa chuỗi `"25"` vào vị trí lý trình C02: phép so với 0 sẽ lỗi kiểu dữ liệu. Đọc cảnh báo ở node; đổi lại thành số 25 rồi chạy. Bài sau mới thêm bước đọc chuỗi CSV thành số và báo lỗi từng hàng. Không bỏ cảnh báo bằng cách xóa ngẫu nhiên dữ liệu.

Lưu `kiem-ban-ghi.dyn`. Đạt khi bạn chỉ được chính xác mã nào lỗi, giải thích tại sao mã vẫn đi cùng số và đọc được danh sách phẳng khác danh sách lồng.
