---
{"id":"lesson.dynamo-python.bat-dau-dynamo","slug":"bat-dau-dynamo","title":"Tạo graph Dynamo đầu tiên trong Civil 3D","description":"Nhận diện node, dây, Watch và cơ chế dữ liệu đi từ đầu vào đến kết quả.","status":"published","chapterId":"chapter.dynamo-python.bat-dau","order":1,"difficulty":"co-ban","sources":[{"title":"Dynamo Primer — Getting Started with Dynamo for Civil 3D","url":"https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"},{"title":"Dynamo Primer — Node Library","url":"https://primer2.dynamobim.org/dynamo-for-civil-3d/node-library"}],"compatibility":[{"product":"Dynamo for Civil 3D","version":"Node và Python engine thay đổi theo phiên bản Civil 3D","platform":"Windows"}]}
---

## Đồ thị là một quy trình nhìn thấy được

Một **node** nhận dữ liệu, xử lý rồi đưa kết quả qua dây sang node khác. Ví dụ, danh sách lý trình đầu vào đi qua bước nhân tỉ lệ hoặc lọc giá trị sai, sau đó `Watch` hiển thị danh sách đầu ra. Các node Civil 3D có thể đọc Alignment, Profile hoặc Surface; node cơ bản xử lý số, chuỗi, list và hình học. Bạn không cần bắt đầu bằng Python.

```text
Danh sách lý trình → kiểm tra giá trị → biến đổi → Watch → (sau này) ghi báo cáo
```

## Thử bằng dữ liệu không đụng bản vẽ

Trong Civil 3D, mở Dynamo và tạo graph mới. Thêm các Number hoặc Code Block đại diện cho `0`, `25`, `50`; ghép thành list rồi nối vào Watch. Thêm bước cộng `10` cho mỗi giá trị và xem Watch đổi từ `[0,25,50]` sang `[10,35,60]`. Tên node và giao diện có thể khác theo phiên bản, nên hãy đối chiếu loại dữ liệu hiện ra thay vì chép nguyên vị trí nút trong ảnh.

| Bạn nhìn thấy | Câu hỏi cần tự trả lời |
| --- | --- |
| Cổng vào/ra trên node | Node nhận loại dữ liệu nào và trả loại nào? |
| Dây nối | Kết quả của bước nào đang nuôi bước nào? |
| Watch | Dữ liệu là một số, list phẳng hay list lồng? |

## Python xuất hiện khi nào

Khi node có sẵn không diễn đạt gọn một quy tắc, Python node nhận dữ liệu qua `IN` và trả qua `OUT`. Nếu cần gọi AutoCAD/Civil API trong Python, engine và assembly phải phù hợp với host. Bài đầu chưa cần truy cập host; ta sẽ học list/lacing trước để không đưa một lỗi dữ liệu vào script.

## Tự kiểm tra

Ngắt một dây và quan sát Watch; nối lại rồi đổi một đầu vào. Ghi rõ node nào đổi đầu tiên và kết quả nào đổi theo. Lưu graph cùng phiên bản Civil 3D/Dynamo để người khác có thể tái hiện.
