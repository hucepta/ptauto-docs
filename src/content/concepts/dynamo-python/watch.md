---
{
  "id": "concept.dynamo-python.watch",
  "slug": "watch",
  "title": "Watch",
  "description": "Hiển thị dữ liệu trung gian trong graph để kiểm kiểu, null và level.",
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
      "url": "https://primer.dynamobim.org/en/03_Anatomy-of-a-Dynamo-Definition/3-1_dynamo_nodes.html"
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
data → Watch
```

## Đầu vào và đầu ra

Nối output của node cần kiểm vào Watch. Hiển thị danh sách, nhánh lồng và giá trị hiện có.

## Cách dùng

Đặt Watch sau node đọc Civil và sau node lọc để đối chiếu số dòng.

```text
GetAlignmentIds → Watch → số lượng/nhóm ID
```

## Kiểm tra khi áp dụng

Watch không xác nhận dữ liệu đúng trong DWG; cần kiểm đối chiếu host.
