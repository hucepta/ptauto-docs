---
{
  "id": "concept.dynamo-python.python-list-append",
  "slug": "python-list-append",
  "title": "list: append",
  "description": "Thay đổi danh sách tại chỗ và trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: append",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.append"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.append"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.append(x)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

x là một phần tử thêm vào cuối.

## Kết quả

Thay đổi danh sách tại chỗ và trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=[0,25]; a.append(50); print(a) # [0,25,50]
```

## Dễ nhầm

Không viết a=a.append(50); a sẽ thành None.
