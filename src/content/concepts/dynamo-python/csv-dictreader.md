---
{
  "id": "concept.dynamo-python.csv-dictreader",
  "slug": "csv-dictreader",
  "title": "csv.dictreader",
  "description": "Bộ duyệt mỗi hàng thành từ điển.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "co-ban",
  "kind": "api",
  "relatedConceptIds": [],
  "exampleIds": [],
  "sources": [
    {
      "title": "Tài liệu chính thức: csv.dictreader",
      "url": "https://docs.python.org/3/library/csv.html#csv.DictReader"
    }
  ],
  "aliases": [],
  "searchableTerms": [
    "csv.DictReader"
  ],
  "examplePlacements": []
}
---

## Cú pháp

```python
csv.DictReader(f, fieldnames=None, restkey=None, restval=None, dialect="excel", *args, **kwds)
```

Đây là dạng gọi dùng trong ví dụ; các đối số tùy chọn khác xem ở nguồn.

## Tham số

f là tệp; fieldnames=None lấy tên cột từ dòng đầu.

## Kết quả

Bộ duyệt mỗi hàng thành từ điển.

## Ví dụ

Các ví dụ Python thuần chạy trong trình thông dịch Python 3 độc lập. Trong Python Script của Dynamo, đưa kết quả vào OUT để xem ở Watch; IN và OUT chỉ có trong node này. Không cần nạp AutoCAD/Civil API cho các phép xử lý dữ liệu dưới đây.

```python
import csv, io
print(list(csv.DictReader(io.StringIO("id,x\nC01,10\n"))))
```

## Dễ nhầm

Tên cột trùng làm mất giá trị; kiểm tiêu đề trước.
