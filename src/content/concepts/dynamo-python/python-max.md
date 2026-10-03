---
{
  "id": "concept.dynamo-python.python-max",
  "slug": "python-max",
  "title": "Python max",
  "description": "Giá trị lớn nhất.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python max",
      "url": "https://docs.python.org/3/library/functions.html#max"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "max"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
max(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable chứa các số cùng ý nghĩa.

## Kết quả

Giá trị lớn nhất.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(max([25,0,50])) # 50
```

## Dễ nhầm

So chuỗi số cho thứ tự từ điển, không phải thứ tự số.
