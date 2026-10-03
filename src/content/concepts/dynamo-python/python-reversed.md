---
{
  "id": "concept.dynamo-python.python-reversed",
  "slug": "python-reversed",
  "title": "Python reversed",
  "description": "Bộ duyệt theo chiều ngược.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python reversed",
      "url": "https://docs.python.org/3/library/functions.html#reversed"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "reversed"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
reversed(seq)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

seq là chuỗi tuần tự có thứ tự.

## Kết quả

Bộ duyệt theo chiều ngược.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(reversed([0,25,50])))
```

## Dễ nhầm

Đảo hướng tuyến có thể đổi ý nghĩa lý trình; không chỉ đổi hiển thị.
