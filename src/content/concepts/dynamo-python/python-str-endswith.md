---
{
  "id": "concept.dynamo-python.python-str-endswith",
  "slug": "python-str-endswith",
  "title": "Chuỗi: endswith",
  "description": "True nếu cuối chuỗi khớp.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: Chuỗi: endswith",
      "url": "https://docs.python.org/3/library/stdtypes.html#str.endswith"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "str.endswith"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
str.endswith(suffix, start=0, end=len(s))
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

suffix là hậu tố cần nhận diện.

## Kết quả

True nếu cuối chuỗi khớp.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
print('coc.csv'.endswith('.csv'))
```

## Dễ nhầm

Đuôi tệp không chứng minh nội dung đúng CSV.
