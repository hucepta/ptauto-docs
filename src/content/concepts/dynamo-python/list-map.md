---
{
  "id": "concept.dynamo-python.list-map",
  "slug": "list-map",
  "title": "List.Map",
  "description": "Áp hàm lên từng phần tử ở cấp list đã chọn.",
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
List.Map(list, f(x))
```

## Đầu vào và đầu ra

f(x) là hàm; list có thể có nhiều level. List kết quả giữ cấu trúc theo phép ánh xạ.

## Cách dùng

Tính giá trị kiểm tra cho từng phần tử của nhóm station.

```text
list=[1,2,3], f(x)=x*2 → mapped=[2,4,6]
```

## Kiểm tra khi áp dụng

Trong graph mới, xem List@Level trước nếu chỉ cần điều khiển cấp đầu vào.
