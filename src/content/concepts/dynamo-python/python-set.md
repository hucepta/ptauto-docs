---
{
  "id": "concept.dynamo-python.python-set",
  "slug": "python-set",
  "title": "Python set",
  "description": "Tập giá trị duy nhất.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python set",
      "url": "https://docs.python.org/3/library/functions.html#set"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "set"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
set(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable là chuỗi giá trị có thể băm.

## Kết quả

Tập giá trị duy nhất.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(sorted(set(['C02','C01','C01']))) # ['C01','C02']
```

## Dễ nhầm

Set không giữ thứ tự phục vụ ghép hàng.
