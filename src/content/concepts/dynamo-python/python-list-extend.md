---
{
  "id": "concept.dynamo-python.python-list-extend",
  "slug": "python-list-extend",
  "title": "list: extend",
  "description": "Thay đổi danh sách, trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: extend",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.extend"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.extend"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.extend(iterable)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

iterable là nguồn phần tử cần thêm.

## Kết quả

Thay đổi danh sách, trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=[0]; a.extend([25,50]); print(a)
```

## Dễ nhầm

extend('C01') thêm từng ký tự; append giữ một chuỗi.
