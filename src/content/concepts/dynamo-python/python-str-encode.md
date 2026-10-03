---
{
  "id": "concept.dynamo-python.python-str-encode",
  "slug": "python-str-encode",
  "title": "Chuỗi: encode",
  "description": "Dãy bytes đã mã hóa.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: encode",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.encode"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.encode"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.encode(encoding='utf-8', errors='strict')
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

encoding là bảng mã; errors chọn cách xử lý lỗi.

## Kết quả

Dãy bytes đã mã hóa.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('cọc'.encode('utf-8'))
```

## Dễ nhầm

Bytes khác str; viết sang tệp nhị phân hoặc giải mã trước.
