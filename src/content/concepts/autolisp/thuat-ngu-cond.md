---
{"id": "concept.autolisp.thuat-ngu-cond", "slug": "thuat-ngu-cond", "title": "cond", "description": "Đánh giá lần lượt các test; chạy nhóm biểu thức của nhánh đầu tiên có test khác `nil`, nếu không có nhánh phù hợp thì trả `nil`.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["biểu thức điều kiện nhiều nhánh `cond`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Đánh giá lần lượt các test; chạy nhóm biểu thức của nhánh đầu tiên có test khác `nil`, nếu không có nhánh phù hợp thì trả `nil`.

**Cách hiểu trong khóa:** biểu thức điều kiện nhiều nhánh `cond`.

## Ví dụ liên quan

```text
(cond ((null p) ...) (T ...))
```
