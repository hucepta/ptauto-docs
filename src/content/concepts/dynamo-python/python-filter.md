---
{
  "id": "concept.dynamo-python.python-filter",
  "slug": "python-filter",
  "title": "Python filter",
  "description": "Bộ duyệt các phần tử thỏa điều kiện.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python filter",
      "url": "https://docs.python.org/3/library/functions.html#filter"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "filter"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
filter(function, iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

function trả điều kiện giữ một bản ghi.

## Kết quả

Bộ duyệt các phần tử thỏa điều kiện.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(filter(lambda x:x>=0,[-1,0,25])))
```

## Dễ nhầm

Giữ mã và tọa độ trong cùng bản ghi khi lọc.
