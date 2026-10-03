---
{
  "id": "concept.dynamo-python.python-all",
  "slug": "python-all",
  "title": "Python all",
  "description": "True khi mọi phần tử đúng, kể cả danh sách rỗng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python all",
      "url": "https://docs.python.org/3/library/functions.html#all"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "all"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
all(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa kết quả kiểm từng hàng.

## Kết quả

True khi mọi phần tử đúng, kể cả danh sách rỗng.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(all([True, False])) # False
```

## Dễ nhầm

Cần kiểm số hàng riêng; all([]) là True.
