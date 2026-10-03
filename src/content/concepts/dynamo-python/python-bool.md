---
{
  "id": "concept.dynamo-python.python-bool",
  "slug": "python-bool",
  "title": "Python bool",
  "description": "Giá trị True hoặc False.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python bool",
      "url": "https://docs.python.org/3/library/functions.html#bool"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "bool"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
bool(x)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

x là giá trị cần kiểm tính đúng/sai.

## Kết quả

Giá trị True hoặc False.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(bool('False')) # True
```

## Dễ nhầm

Chuỗi không rỗng luôn đúng; không dùng để đọc cột chữ True/False.
