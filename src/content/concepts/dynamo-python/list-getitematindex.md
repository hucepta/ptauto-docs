---
{
  "id": "concept.dynamo-python.list-getitematindex",
  "slug": "list-getitematindex",
  "title": "List.GetItemAtIndex",
  "description": "Lấy phần tử ở vị trí chỉ định trong list.",
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
List.GetItemAtIndex(list, index)
```

## Đầu vào và đầu ra

index bắt đầu từ 0; list có thể là danh sách lồng nhau. Phần tử hoặc danh sách con tại index theo level đang chọn.

## Cách dùng

Lấy một nhóm station từ dữ liệu đã xem qua Watch.

```text
List.GetItemAtIndex(["A", "B"], 0) → "A"
```

## Kiểm tra khi áp dụng

Không giả định index 0 là phần tử đầu của mọi danh sách con; xem list level.
