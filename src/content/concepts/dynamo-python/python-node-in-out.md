---
{
  "id": "concept.dynamo-python.python-node-in-out",
  "slug": "python-node-in-out",
  "title": "Python Script: IN và OUT",
  "description": "Nhận dữ liệu từ cổng Python node và trả kết quả cho graph.",
  "status": "published",
  "technology": "dynamo-python",
  "difficulty": "trung-cap",
  "kind": "syntax",
  "relatedConceptIds": [],
  "exampleIds": [],
  "examplePlacements": [],
  "sources": [
    {
      "title": "Dynamo Primer",
      "url": "https://primer.dynamobim.org/en/10_Custom-Nodes/10-4_Python.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cú pháp hoặc cổng node

```text
input = IN[0]
OUT = input
```

## Đầu vào và đầu ra

IN là list theo thứ tự cổng; OUT nhận một giá trị hoặc list. Dynamo chuyển OUT tới node tiếp theo.

## Cách dùng

Tách dữ liệu Civil đầu vào khỏi Python xử lý; ghi rõ kiểu/độ sâu list.

```text
values = IN[0]
OUT = [v for v in values if v is not None]
```

## Kiểm tra khi áp dụng

Kiểm engine Python và package của host trước khi dùng API Civil trong script.
