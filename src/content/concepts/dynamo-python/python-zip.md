---
{
  "id": "concept.dynamo-python.python-zip",
  "slug": "python-zip",
  "title": "Python zip",
  "description": "Bộ duyệt các bộ giá trị song song.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python zip",
      "url": "https://docs.python.org/3/library/functions.html#zip"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "zip"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
zip(*iterables)
```

Các iterable cung cấp giá trị cùng vị trí. Kết quả là iterator các tuple; dùng `list(...)` khi cần lưu hoặc xem toàn bộ. Mặc định zip dừng khi nguồn ngắn nhất hết phần tử. [Tài liệu Python: zip](https://docs.python.org/3/library/functions.html#zip).

## Ví dụ Python độc lập

Chạy đoạn sau bằng Python 3, không cần Dynamo hoặc API Autodesk:

```python
ids = ["C01", "C02"]
stations = [10, 20]
if len(ids) != len(stations):
    raise ValueError("So ID va station khong khop")
rows = list(zip(ids, stations))
print(rows)
print(list(zip(ids, [10])))
```

Kết quả chính xác:

```text
[('C01', 10), ('C02', 20)]
[('C01', 10)]
```

Dòng thứ hai minh họa dữ liệu bị cắt khi hai nguồn khác chiều dài. Kiểm chiều dài trước khi ghép các cột cần đầy đủ; `strict=True` là lựa chọn từ Python 3.10 nếu engine đang dùng hỗ trợ.

## Đưa vào Python Script của Dynamo

Tạo Code Block `["C01", "C02"];` → `IN[0]`, Code Block `[10, 20];` → `IN[1]` của Python Script; tăng số cổng đầu vào lên hai. Dùng:

```python
ids = IN[0]
stations = IN[1]
if len(ids) != len(stations):
    raise ValueError("So ID va station khong khop")
OUT = list(zip(ids, stations))
```

Nối đầu ra vào Watch, Run; mong đợi hai cặp C01–10 và C02–20. `IN`/`OUT` chỉ tồn tại trong Python Script. Tuple có thể được Watch biểu diễn như nhánh list. Phần Python độc lập đã kiểm tra; phần node chưa chạy trong host tại đây.

Iterator zip chỉ duyệt một lần. Lưu `rows` nếu cần dùng kết quả nhiều lần; ghép đúng vị trí không tự kiểm tra các ID có cùng ý nghĩa.
