---
{
  "id": "concept.dynamo-python.python-dict",
  "slug": "python-dict",
  "title": "Python dict",
  "description": "Từ điển ánh xạ theo khóa.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python dict",
      "url": "https://docs.python.org/3/library/functions.html#dict"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "dict"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
dict(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa các cặp khóa và giá trị.

## Kết quả

Từ điển ánh xạ theo khóa.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(dict([('id','C01'),('x',10)]))
```

## Dễ nhầm

Khóa trùng ghi đè giá trị trước; kiểm ID trước khi dựng bảng tra.
