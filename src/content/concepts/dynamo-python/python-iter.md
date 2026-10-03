---
{
  "id": "concept.dynamo-python.python-iter",
  "slug": "python-iter",
  "title": "Python iter",
  "description": "Bộ duyệt một lần.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python iter",
      "url": "https://docs.python.org/3/library/functions.html#iter"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "iter"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
iter(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable là nguồn dữ liệu cần duyệt.

## Kết quả

Bộ duyệt một lần.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
it=iter([10,20]); print(next(it)) # 10
```

## Dễ nhầm

Không dùng lại bộ duyệt đã cạn mà mong đọc từ đầu.
