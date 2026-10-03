---
{"id": "concept.autolisp.thuat-ngu-getint", "slug": "thuat-ngu-getint", "title": "getint", "description": "Tạm dừng để người dùng nhập một số nguyên. Trả số nguyên hợp lệ; trả `nil` nếu người dùng nhấn Enter mà không nhập giá trị.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm nhập số nguyên `getint`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Tạm dừng để người dùng nhập một số nguyên. Trả số nguyên hợp lệ; trả `nil` nếu người dùng nhấn Enter mà không nhập giá trị.

**Cách hiểu trong khóa:** hàm nhập số nguyên `getint`.

## Ví dụ liên quan

```text
(setq n (getint "\nNhap so luong: "))
```
