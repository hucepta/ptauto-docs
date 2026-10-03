---
{"id": "concept.autolisp.thuat-ngu-getstring", "slug": "thuat-ngu-getstring", "title": "getstring", "description": "Tạm dừng để người dùng nhập chuỗi. Đối số đầu không `nil` cho phép chuỗi chứa khoảng trắng; nhấn Enter khi chưa nhập chuỗi trả `nil`.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm nhập chuỗi `getstring`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Tạm dừng để người dùng nhập chuỗi. Đối số đầu không `nil` cho phép chuỗi chứa khoảng trắng; nhấn Enter khi chưa nhập chuỗi trả `nil`.

**Cách hiểu trong khóa:** hàm nhập chuỗi `getstring`.

## Ví dụ liên quan

```text
(setq ten (getstring T "\nNhap ten layer: "))
```
