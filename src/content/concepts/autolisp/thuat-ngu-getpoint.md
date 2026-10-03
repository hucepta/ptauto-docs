---
{"id": "concept.autolisp.thuat-ngu-getpoint", "slug": "thuat-ngu-getpoint", "title": "getpoint", "description": "Tạm dừng để người dùng nhập tọa độ hoặc chọn điểm trên màn hình. Trả list điểm 3D trong UCS hiện hành; có thể trả `nil` khi không cung cấp điểm.", "status": "published", "technology": "autolisp", "difficulty": "co-ban", "kind": "term", "aliases": ["hàm nhập hoặc chọn điểm `getpoint`"], "tags": ["Thuật ngữ AutoLISP"]}
---

## Giải thích

Tạm dừng để người dùng nhập tọa độ hoặc chọn điểm trên màn hình. Trả list điểm 3D trong UCS hiện hành; có thể trả `nil` khi không cung cấp điểm.

**Cách hiểu trong khóa:** hàm nhập hoặc chọn điểm `getpoint`.

## Ví dụ liên quan

```text
(setq p1 (getpoint "\nChon diem thu nhat: "))
```
