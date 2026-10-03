---
{
  "id": "concept.dynamo-python.python-list-sort",
  "slug": "python-list-sort",
  "title": "list: sort",
  "description": "Danh sách thay đổi tại chỗ, trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: sort",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.sort"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.sort"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.sort(key=None, reverse=False)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

key tạo khóa sắp xếp; reverse đảo chiều.

## Kết quả

Danh sách thay đổi tại chỗ, trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=[50,0,25]; a.sort(); print(a)
```

## Dễ nhầm

Không gán kết quả sort; dùng sorted nếu muốn danh sách mới.
