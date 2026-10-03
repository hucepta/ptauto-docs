---
{
  "id": "concept.dynamo-python.python-dict-get",
  "slug": "python-dict-get",
  "title": "dict: get",
  "description": "Giá trị hoặc mặc định.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: dict: get",
      "url": "https://docs.python.org/3/library/stdtypes.html#dict.get"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "dict.get"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
dict.get(key, default=None)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

key là khóa cần đọc; default khi không có khóa.

## Kết quả

Giá trị hoặc mặc định.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print({'id':'C01'}.get('z',None))
```

## Dễ nhầm

Khóa có giá trị None không được thay bằng default.
