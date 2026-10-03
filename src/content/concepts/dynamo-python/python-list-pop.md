---
{
  "id": "concept.dynamo-python.python-list-pop",
  "slug": "python-list-pop",
  "title": "list: pop",
  "description": "Phần tử bị lấy ra.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: list: pop",
      "url": "https://docs.python.org/3/library/stdtypes.html#list.pop"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "list.pop"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
list.pop(index=-1)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

index là vị trí lấy và xóa.

## Kết quả

Phần tử bị lấy ra.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=['C01','C02']; print(a.pop()) # C02
```

## Dễ nhầm

Danh sách rỗng hoặc chỉ số ngoài phạm vi gây IndexError.
