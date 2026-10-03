---
{
  "id": "lesson.dynamo-python.list-long-level-lacing",
  "slug": "list-long-level-lacing",
  "title": "List lồng, List@Level và lacing trên dữ liệu cọc",
  "description": "Dự đoán hình dạng list trước khi ghép lý trình với cao độ.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.du-lieu-va-do-thi",
  "order": 2,
  "difficulty": "co-ban",
  "prerequisites": [
    "lesson.dynamo-python.node-list-lacing"
  ],
  "flow": [
    {
      "label": "Đầu vào",
      "detail": "Hai danh sách station và elevation"
    },
    {
      "label": "Ghép",
      "detail": "Chọn level và lacing phù hợp"
    },
    {
      "label": "Đầu ra",
      "detail": "Một bản ghi cho mỗi cọc, không nhân sai số hàng"
    }
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Dynamo for Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Node/engine theo phiên bản host",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---

## Khi ba cọc biến thành chín kết quả

Station `[0, 20, 40]` và cao độ `[3.1, 3.2, 3.4]` cần ghép từng cặp. Nếu node dùng Cross Product, nó có thể tạo 3×3 cặp; đó là một lỗi lacing, không phải dữ liệu thật. Shortest ghép theo vị trí đến danh sách ngắn nhất, Longest có thể lặp phần tử cuối; phải chọn theo hợp đồng đầu vào.

List lồng xuất hiện khi mỗi tuyến có một danh sách cọc riêng. Trước khi dùng List@Level, ghi dạng dữ liệu mong muốn: `[[cọc A1,A2],[cọc B1,B2]]` khác `[A1,A2,B1,B2]`. Dùng Watch ở trước và sau mỗi node thay đổi cấp list. Nếu độ dài station và elevation không bằng nhau, dừng để báo lỗi thay vì để lacing tự quyết.

## Thực hành

Với 3 station và 2 elevation, dự đoán số hàng của Shortest, Longest và Cross Product. Sau đó chạy graph để kiểm chứng. Chọn quy tắc nào phù hợp cho báo cáo cọc và giải thích vì sao.
