---
{
  "id": "lesson.dynamo-python.list-long-level-lacing",
  "slug": "list-long-level-lacing",
  "title": "Danh sách lồng",
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
<span id="khi-ba-cọc-biến-thành-chín-kết-quả" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Lacing và số kết quả

Station `[0, 20, 40]` và cao độ `[3.1, 3.2, 3.4]` cần ghép từng cặp. Nếu node dùng Cross Product, nó có thể tạo 3×3 cặp; đó là một lỗi lacing, không phải dữ liệu thật. Shortest ghép theo vị trí đến danh sách ngắn nhất, Longest có thể lặp phần tử cuối; phải chọn theo hợp đồng đầu vào.

danh sách lồng xuất hiện khi mỗi tuyến có một danh sách cọc riêng. Trước khi dùng List@Level, ghi dạng dữ liệu mong muốn: `[[cọc A1,A2],[cọc B1,B2]]` khác `[A1,A2,B1,B2]`. Dùng Watch ở trước và sau mỗi node thay đổi cấp list. Nếu độ dài station và elevation không bằng nhau, dừng để báo lỗi thay vì để lacing tự quyết.

## Thực hành

Với 3 station và 2 elevation, dự đoán số hàng của Shortest, Longest và Cross Product. Sau đó chạy đồ thị để kiểm chứng. Chọn quy tắc nào phù hợp cho báo cáo cọc và giải thích vì sao.

## Thử lacing bằng hai danh sách

Tạo Code Block `a = [0,25,50];` và một khối `b = [1,2];`. Tìm node `+` trong Library, nối a/b vào hai cổng rồi nối ra Watch. Bấm chuột phải node +, chọn **Lacing** (Quy tắc ghép phần tử). Với **Shortest** (Theo danh sách ngắn nhất), bấm Run: có 1 và 27. Với **Longest** (Theo danh sách dài nhất), phần tử cuối của nhánh ngắn được dùng tiếp: có 1, 27, 52. Với **Cross Product** (Mọi cặp), có sáu phép cộng, chia thành các nhánh. Quan sát cấu trúc Watch thay vì chỉ đếm số.

Quay về Shortest trước khi lưu. Trong dữ liệu thật, mã cọc và lý trình phải cùng số lượng; lacing Longest có thể che giấu một cột thiếu dữ liệu bằng cách lặp giá trị cuối. Việc có kết quả không chứng minh các hàng được ghép đúng.
