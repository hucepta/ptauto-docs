---
{
  "id": "concept.dynamo-python.python-any",
  "slug": "python-any",
  "title": "Python any",
  "description": "True nếu có ít nhất một phần tử đúng.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python any",
      "url": "https://docs.python.org/3/library/functions.html#any"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "any"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
any(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa các cờ lỗi.

## Kết quả

True nếu có ít nhất một phần tử đúng.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(any([False, True])) # True
```

## Dễ nhầm

any([]) là False; không chứng minh đã đọc được dữ liệu.
