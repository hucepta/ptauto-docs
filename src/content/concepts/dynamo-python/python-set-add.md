---
{
  "id": "concept.dynamo-python.python-set-add",
  "slug": "python-set-add",
  "title": "set: add",
  "description": "Thêm phần tử duy nhất, trả None.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: set: add",
      "url": "https://docs.python.org/3/library/stdtypes.html#set.add"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "set.add"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
set.add(element)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

element phải băm được.

## Kết quả

Thêm phần tử duy nhất, trả None.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
a=set(); a.add('C01'); a.add('C01'); print(len(a)) # 1
```

## Dễ nhầm

Danh sách và từ điển không dùng làm phần tử set trực tiếp.
