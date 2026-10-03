---
{
  "id": "concept.dynamo-python.python-isinstance",
  "slug": "python-isinstance",
  "title": "Python isinstance",
  "description": "True nếu đối tượng thuộc kiểu yêu cầu.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python isinstance",
      "url": "https://docs.python.org/3/library/functions.html#isinstance"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "isinstance"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
isinstance(object, classinfo)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

classinfo là kiểu hoặc tuple các kiểu.

## Kết quả

True nếu đối tượng thuộc kiểu yêu cầu.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(isinstance(12.5,(int,float))) # True
```

## Dễ nhầm

bool là lớp con của int; kiểm riêng nếu loại cờ khỏi dữ liệu số.
