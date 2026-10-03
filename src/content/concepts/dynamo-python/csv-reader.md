---
{
  "id": "concept.dynamo-python.csv-reader",
  "slug": "csv-reader",
  "title": "csv.reader",
  "description": "Bộ duyệt hàng; mỗi hàng là list chuỗi.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: csv.reader",
      "url": "https://docs.python.org/3/library/csv.html#csv.reader"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "csv.reader"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
csv.reader(csvfile, dialect="excel", **fmtparams)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

csvfile là bộ duyệt dòng văn bản; delimiter chọn dấu ngăn.

## Kết quả

Bộ duyệt hàng; mỗi hàng là list chuỗi.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import csv, io
print(list(csv.reader(io.StringIO("id,x\nC01,10\n"))))
```

## Dễ nhầm

Không tự chuyển chuỗi số thành số; dùng newline="" khi mở tệp.
