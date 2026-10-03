---
{
  "id": "concept.dynamo-python.list-filterbyboolmask",
  "slug": "list-filterbyboolmask",
  "title": "List.FilterByBoolMask",
  "description": "Tách phần tử theo mask true/false song song.",
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
      "url": "https://primer.dynamobim.org/Appendix/A-2_index-of-nodes.html"
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
List.FilterByBoolMask(list, mask)
```

## Đầu vào và đầu ra

list và mask cần tương ứng theo vị trí/độ sâu. Cổng in chứa phần tử true, cổng out chứa phần tử false.

## Cách dùng

Lọc station nằm trong phạm vi trước khi tạo marker.

```text
list=[A,B,C]; mask=[true,false,true] → in=[A,C], out=[B]
```

## Kiểm tra khi áp dụng

Kiểm độ dài mask và cấu trúc list trước khi nối sang tác vụ ghi.
