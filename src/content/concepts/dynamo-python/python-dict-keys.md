---
{
  "id": "concept.dynamo-python.python-dict-keys",
  "slug": "python-dict-keys",
  "title": "dict: keys",
  "description": "Khung nhìn các khóa.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: dict: keys",
      "url": "https://docs.python.org/3/library/stdtypes.html#dict.keys"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "dict.keys"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
dict.keys()
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Không nhận tham số.

## Kết quả

Khung nhìn các khóa.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list({'id':'C01','x':10}.keys()))
```

## Dễ nhầm

Khóa cần ổn định; không dựa thứ tự khóa để ghép cột từ nguồn khác.
