---
{
  "id": "concept.dynamo-python.python-min",
  "slug": "python-min",
  "title": "Python min",
  "description": "Giá trị nhỏ nhất.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python min",
      "url": "https://docs.python.org/3/library/functions.html#min"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "min"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
min(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa giá trị có thể so sánh.

## Kết quả

Giá trị nhỏ nhất.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(min([25,0,50])) # 0
```

## Dễ nhầm

Danh sách rỗng gây ValueError nếu không có default.
