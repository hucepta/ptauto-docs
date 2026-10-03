---
{
  "id": "concept.dynamo-python.lacing",
  "slug": "lacing",
  "title": "Lacing: Shortest, Longest, Cross Product",
  "description": "Quy định cách ghép nhiều list đầu vào của node.",
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
      "url": "https://primer.dynamobim.org/06_Designing-with-Lists/6-1_whats-a-list.html"
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
Node inputs A, B → Lacing mode
```

## Đầu vào và đầu ra

Shortest dừng theo list ngắn; Longest kéo dài; Cross Product tạo mọi cặp. Số và cấu trúc kết quả thay đổi theo mode.

## Cách dùng

Ghép mỗi station với một offset hoặc tạo toàn bộ tổ hợp kiểm tra.

```text
A=[1,2], B=[10,20,30]: Cross Product tạo 6 cặp.
```

## Kiểm tra khi áp dụng

Trước khi tạo entity, dự đoán số kết quả để tránh nhân bản ngoài ý muốn.
