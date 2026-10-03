---
{
  "id": "concept.dynamo-python.python-dict-items",
  "slug": "python-dict-items",
  "title": "dict: items",
  "description": "Khung nhìn các cặp khóa/giá trị.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: dict: items",
      "url": "https://docs.python.org/3/library/stdtypes.html#dict.items"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "dict.items"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
dict.items()
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Không nhận tham số.

## Kết quả

Khung nhìn các cặp khóa/giá trị.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(list({'id':'C01'}.items()))
```

## Dễ nhầm

Không thêm/xóa khóa trong khi duyệt trực tiếp khung nhìn.
