---
{
  "id": "concept.dynamo-python.python-list-copy",
  "slug": "python-list-copy",
  "title": "list: copy",
  "description": "Bản sao nông của danh sách.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: copy",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.copy"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.copy"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.copy()
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

Không nhận tham số.

## Kết quả

Bản sao nông của danh sách.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=[1,2]; b=a.copy(); b.append(3); print(a)
```

## Dễ nhầm

Danh sách con vẫn dùng chung; cần deepcopy khi sửa cấu trúc lồng.
