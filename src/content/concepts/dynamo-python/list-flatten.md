---
{
  "id": "concept.dynamo-python.list-flatten",
  "slug": "list-flatten",
  "title": "List.Flatten",
  "description": "Giảm độ sâu của list lồng nhau.",
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
List.Flatten(list, amt)
```

## Đầu vào và đầu ra

amt điều khiển số level làm phẳng; bỏ qua mức này có thể phá nhóm. List với mức lồng giảm theo amt.

## Cách dùng

Gộp các nhánh kết quả sau khi đã giữ ID nhóm trong cột riêng.

```text
[[A,B],[C]] → [A,B,C]
```

## Kiểm tra khi áp dụng

Không Flatten sớm khi quan hệ Alignment → Profile còn cần giữ.
