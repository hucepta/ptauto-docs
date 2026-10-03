---
{
  "id": "concept.dynamo-python.python-next",
  "slug": "python-next",
  "title": "Python next",
  "description": "Phần tử kế hoặc giá trị mặc định.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python next",
      "url": "https://docs.python.org/3/library/functions.html#next"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "next"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
next(iterator, default)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

default dùng khi hết phần tử.

## Kết quả

Phần tử kế hoặc giá trị mặc định.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
it=iter([]); print(next(it,None)) # None
```

## Dễ nhầm

Không truyền default sẽ nhận StopIteration khi cạn.
