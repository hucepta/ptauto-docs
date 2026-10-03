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
    },
    {
      "title": "Tài liệu chính thức — List.Flatten",
      "url": "https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html"
    }
  ],
  "compatibility": [],
  "aliases": [],
  "tags": [],
  "searchableTerms": []
}
---

## Cổng node

`List.Flatten` nhận danh sách tại `list` và mức làm phẳng tại `amt`. Đầu ra giảm số lớp lồng nhau; cấu trúc nhóm bị loại bỏ theo mức đã chọn.

## Dữ liệu và kết nối

Thêm Code Block chứa:

```text
[["C01", "C02"], ["C03"]];
```

Thêm Code Block `1;`, node List.Flatten và Watch. Nối dữ liệu → `list`, số `1` → `amt`, đầu ra → Watch. Để cổng ở cấu hình mặc định, không bật Use Levels. Chọn Manual và Run.

## Kết quả mong đợi

```text
["C01", "C02", "C03"]
```

Trong dữ liệu hai cấp này, `amt = 1` bỏ lớp nhóm con. Nối đầu ra vào List.Count để kiểm: kết quả là `3`, trong khi List.Count trên nguồn ban đầu trả `2`.

## Áp dụng và kiểm tra

Phù hợp khi cần một hàng đợi xử lý chung cho các nhóm kết quả. Nếu nhóm đầu là tuyến A và nhóm sau là tuyến B, sau phép này không còn biết C03 thuộc nhóm nào chỉ từ cấu trúc list. Giữ ID nhóm cùng mỗi phần tử trước khi làm phẳng nếu còn cần quan hệ đó. Với dữ liệu sâu hơn, quan sát Watch và chọn `amt` có chủ đích; không mặc định bỏ mọi cấp.

Đây là bài dựng graph, chưa kiểm thử trong Dynamo tại đây. [Dynamo Primer: chỉ mục node](https://primer.dynamobim.org/Appendix/A-2_index-of-nodes.html), [giải thích Flatten](https://primer.dynamobim.org/en/06_Designing-with-Lists/6-3_lists-of-lists.html).
