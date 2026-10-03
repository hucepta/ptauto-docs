---
{
  "id": "concept.dynamo-python.python-type",
  "slug": "python-type",
  "title": "Python type",
  "description": "Lớp của đối tượng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python type",
      "url": "https://docs.python.org/3/library/functions.html#type"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "type"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
type(object)
```

Đầu vào là một giá trị; đầu ra là đối tượng lớp của giá trị đó. `.__name__` lấy tên lớp để dễ đọc. Bài này dùng dạng một đối số để chẩn đoán, không dùng dạng ba đối số để tạo lớp. [Tài liệu Python: type](https://docs.python.org/3/library/functions.html#type).

## Ví dụ Python độc lập

Chạy bằng Python 3:

```python
values = [1, 1.5, "C01", [1, 2], None]
names = [type(value).__name__ for value in values]
print(names)
print(type(True) is int)
print(isinstance(True, int))
```

Kết quả chính xác:

```text
['int', 'float', 'str', 'list', 'NoneType']
False
True
```

Hai dòng cuối phân biệt kiểm tra lớp chính xác với kiểm tra có tính đến kế thừa: bool là lớp riêng, đồng thời kế thừa int.

## Đưa vào Python Script của Dynamo

Code Block `[1, 2];` → cổng `IN[0]` của Python Script. Trong node dùng:

```python
value = IN[0]
OUT = type(value).__name__
```

Nối đầu ra → Watch và Run. Đây là phép chẩn đoán đối tượng thực tế engine nhận được; tên có thể là `list` hoặc tên wrapper do engine/host chuyển vào. Không coi kết quả Python độc lập là cam kết về kiểu wrapper trong Dynamo. Muốn kiểm rõ các lớp Python thuần ngay trong node, dùng `OUT = [type(x).__name__ for x in [1, 1.5, "C01", [1, 2], None]]`.

## Kiểm tra khi áp dụng

Dùng khi dữ liệu số đang bị đọc thành chuỗi hoặc giá trị có thể là None. Khi xử lý kế thừa, thường dùng isinstance thay vì so sánh tên lớp. Tên lớp đối tượng CAD không chứng minh đối tượng còn tồn tại hoặc giao dịch truy cập hợp lệ.

Ví dụ Python độc lập đã kiểm tra; node Dynamo và đối tượng CAD chưa được kiểm thử trong host tại đây.
