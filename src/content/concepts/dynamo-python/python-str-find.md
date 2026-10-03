---
{
  "id": "concept.dynamo-python.python-str-find",
  "slug": "python-str-find",
  "title": "Chuỗi: find",
  "description": "Chỉ số đầu tiên hoặc -1 nếu không thấy.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: find",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.find"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.find"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.find(sub, start=0, end=len(s))
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

sub là chuỗi con cần tìm.

## Kết quả

Chỉ số đầu tiên hoặc -1 nếu không thấy.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('C01_A'.find('_')) # 3
```

## Dễ nhầm

-1 là chỉ số hợp lệ khi cắt chuỗi; kiểm trước khi dùng.
