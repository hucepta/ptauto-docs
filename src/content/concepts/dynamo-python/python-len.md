---
{
  "id": "concept.dynamo-python.python-len",
  "slug": "python-len",
  "title": "Python len",
  "description": "Số phần tử, không phải số nhánh sâu nhất.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Python len",
      "url": "https://docs.python.org/3/library/functions.html#len"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "len"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
len(s)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

s là danh sách, chuỗi hoặc tập hợp có độ dài.

## Kết quả

Số phần tử, không phải số nhánh sâu nhất.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print(len([[1,2],[3]])) # 2
```

## Dễ nhầm

len không đếm đệ quy các phần tử danh sách lồng.
