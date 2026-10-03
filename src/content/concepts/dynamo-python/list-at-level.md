---
{
  "id": "concept.dynamo-python.list-at-level",
  "slug": "list-at-level",
  "title": "List@Level",
  "description": "Chỉ định cấp list mà node xử lý ngay tại cổng đầu vào.",
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
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html"
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
input @L1 / @L2 / ...
```

## Đầu vào và đầu ra

Chọn Use Levels và cấp phù hợp; Keep list structure khi cần giữ nhóm. Node xử lý phần tử tại cấp chọn.

## Cách dùng

Tính cao độ theo từng station trong từng Alignment mà vẫn giữ nhóm tuyến.

```text
Chọn @L2 ở cổng list khi muốn xử lý từng sublist cấp 2.
```

## Kiểm tra khi áp dụng

L1/L2 không mô tả cùng lớp dữ liệu ở mọi đồ thị; xem Preview thực tế.
