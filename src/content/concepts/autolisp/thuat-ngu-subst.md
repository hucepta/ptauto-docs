---
{"id": "concept.autolisp.thuat-ngu-subst", "slug": "thuat-ngu-subst", "title": "subst", "description": "Trả một bản sao của list trong đó mọi phần tử khớp old item được thay bằng new item; nếu không tìm thấy thì trả list không đổi. `subst` tự nó không sửa bản vẽ.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm thay phần tử trong list `subst`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Trả một bản sao của list trong đó mọi phần tử khớp old item được thay bằng new item; nếu không tìm thấy thì trả list không đổi. `subst` tự nó không sửa bản vẽ.

**Cách hiểu trong khóa:** hàm thay phần tử trong list `subst`.

## Ví dụ liên quan

```text
(subst (cons 8 "0") (assoc 8 edata) edata)
```
