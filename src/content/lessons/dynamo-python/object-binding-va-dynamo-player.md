---
{
  "id": "lesson.dynamo-python.object-binding-va-dynamo-player",
  "slug": "object-binding-va-dynamo-player",
  "title": "Chạy lại đồ thị",
  "description": "Hiểu vì sao chạy lại graph có thể cập nhật hoặc tạo thêm đối tượng trong cùng DWG.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.python-va-workflow",
  "order": 4,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.python-in-out-engine"
  ],
  "flow": [
    {
      "label": "Chạy lần đầu",
      "detail": "Graph tạo đối tượng và ghi binding"
    },
    {
      "label": "Đổi input",
      "detail": "Chạy lại trên cùng document"
    },
    {
      "label": "So sánh",
      "detail": "Cập nhật object cũ hay thêm object mới?"
    }
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Object Binding for Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/advanced-topics/object-binding"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Kiểm tra phiên bản Dynamo/Civil; tùy chọn Binding Data Storage có từ Civil 3D 2022.1",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---
<span id="bài-toán-tạo-20-cọc-từ-bảng-lý-trình" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Tạo cọc từ bảng lý trình

đồ thị tạo marker ở 20 vị trí. Bạn sửa khoảng cách rồi chạy lại. Nếu không hiểu Object Binding, có thể tưởng đồ thị luôn tạo thêm 20 marker, trong khi node có thể “nhớ” đối tượng nó đã tạo và cập nhật chính đối tượng đó. Cũng có cấu hình khiến đồ thị tạo mới mỗi lần. Hãy quan sát số ObjectId và tổng số marker trước khi dùng trên hồ sơ thật.

<span id="thí-nghiệm-có-thể-lặp-lại" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra object binding

1. Dùng một DWG thử và một đồ thị chỉ tạo 2 marker. Ghi lại ObjectId/handle và tọa độ sau lần chạy đầu.
2. Đổi một tọa độ đầu vào, chạy lại trên cùng document. Đếm marker và so ID: **cùng ID, tọa độ mới** nghĩa là cập nhật; **ID mới** nghĩa là tạo thêm.
3. Lưu/đóng/mở DWG rồi chạy qua Dynamo Player. Lặp phép so; không suy đoán rằng Player có hành vi giống lúc mở đồ thị trong Dynamo.
4. Nếu thay cấu hình Binding Data Storage, ghi rõ cấu hình trong nhật ký thử nghiệm và thử lại từ một bản DWG sạch.

<span id="lỗi-dễ-gặp" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Lỗi thường gặp

Đếm marker sau lần đầu rồi dùng con số đó làm nghiệm thu cho mọi lần chạy là chưa đủ. Cần kiểm tra danh tính đối tượng, dữ liệu cũ bị thay thế hay giữ lại, và cách đồ thị xử lý hàng đầu vào bị xóa. Với đồ thị hàng loạt, tách một bước **preview/kiểm tra đầu vào** trước bước ghi đối tượng bản vẽ.
