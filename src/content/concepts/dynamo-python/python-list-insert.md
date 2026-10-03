---
{
  "id": "concept.dynamo-python.python-list-insert",
  "slug": "python-list-insert",
  "title": "list: insert",
  "description": "Chèn vào danh sách tại chỗ.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: insert",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.insert"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.insert"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.insert(i, x)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

i là vị trí; x là phần tử thêm.

## Kết quả

Chèn vào danh sách tại chỗ.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=[0,50]; a.insert(1,25); print(a)
```

## Dễ nhầm

Chèn một cột riêng sẽ lệch các cột khác.
