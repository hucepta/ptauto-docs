---
{
  "id": "concept.dynamo-python.python-list",
  "slug": "python-list",
  "title": "Python list",
  "description": "Danh sách mới giữ thứ tự duyệt.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python list",
      "url": "https://docs.python.org/3/library/functions.html#list"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable là nguồn có thể duyệt.

## Kết quả

Danh sách mới giữ thứ tự duyệt.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list(range(3))) # [0,1,2]
```

## Dễ nhầm

list('C01') thành từng ký tự, không phải một mã cọc.
