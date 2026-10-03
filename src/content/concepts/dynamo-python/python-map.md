---
{
  "id": "concept.dynamo-python.python-map",
  "slug": "python-map",
  "title": "Python map",
  "description": "Bộ duyệt kết quả biến đổi.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python map",
      "url": "https://docs.python.org/3/library/functions.html#map"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "map"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
map(function, iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

function nhận từng phần tử của iterable.

## Kết quả

Bộ duyệt kết quả biến đổi.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(map(float,['10','20'])))
```

## Dễ nhầm

Chỉ chạy khi duyệt; lỗi một phần tử có thể dừng cả lần duyệt.
