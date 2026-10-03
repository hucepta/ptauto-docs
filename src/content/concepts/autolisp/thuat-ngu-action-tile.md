---
{"id": "concept.autolisp.thuat-ngu-action-tile", "slug": "thuat-ngu-action-tile", "title": "action_tile", "description": "Gán một action expression dạng chuỗi cho tile được nhận diện bằng key. Trả `T` khi tìm thấy key, ngược lại trả `nil`; không được gọi `command` từ action expression.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm gắn hành động cho tile `action_tile`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Gán một action expression dạng chuỗi cho tile được nhận diện bằng key. Trả `T` khi tìm thấy key, ngược lại trả `nil`; không được gọi `command` từ action expression.

**Cách hiểu trong khóa:** hàm gắn hành động cho tile `action_tile`.

## Ví dụ liên quan

```text
(action_tile "accept" "(p6:on-ok)")
```
