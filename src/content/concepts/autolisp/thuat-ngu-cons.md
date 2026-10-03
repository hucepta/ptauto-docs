---
{"id": "concept.autolisp.thuat-ngu-cons", "slug": "thuat-ngu-cons", "title": "cons", "description": "Nếu đối số thứ hai là list, thêm phần tử mới vào đầu list; nếu đối số thứ hai là atom, tạo dotted pair. Không đồng nhất với `list`.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm ghép phần tử `cons`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Nếu đối số thứ hai là list, thêm phần tử mới vào đầu list; nếu đối số thứ hai là atom, tạo dotted pair. Không đồng nhất với `list`.

**Cách hiểu trong khóa:** hàm ghép phần tử `cons`.

## Ví dụ liên quan

```text
(cons 'a '(b c)) ; (A B C) (cons 8 "0") ; (8 . "0")
```
