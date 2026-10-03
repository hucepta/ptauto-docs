---
{
  "id": "lesson.dynamo-python.bat-dau-dynamo",
  "slug": "bat-dau-dynamo",
  "title": "Đồ thị đầu tiên",
  "description": "Mở Dynamo, nối Code Block và Watch để kiểm kết quả cộng lý trình.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.bat-dau",
  "order": 1,
  "difficulty": "co-ban",
  "sources": [
    {
      "title": "Dynamo Primer: Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"
    },
    {
      "title": "Dynamo Primer: giao diện",
      "url": "https://primer2.dynamobim.org/3_user_interface"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Node và Python engine thay đổi theo phiên bản Civil 3D",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---

## Bạn sẽ làm được gì

Tạo một tệp `.dyn` đưa ba lý trình 0, 25, 50 qua phép cộng 10. Kết quả nhìn thấy trong Watch là 10, 35, 60. Bài này chỉ tính dữ liệu, chưa tạo đối tượng trong bản vẽ.

## Mở đúng cửa sổ

1. Khởi động **Civil 3D**, mở một bản vẽ mới dùng để học. Trong dải công cụ trên cùng, chọn thẻ **Manage** (Quản lý).
2. Trong thẻ này, tìm nhóm **Visual Programming** (Lập trình trực quan). Bấm **Dynamo** để mở trình soạn đồ thị trong cửa sổ riêng. Nút **Dynamo Player** bên cạnh dùng chạy tệp có sẵn; bài này cần nút Dynamo.
3. Ở màn hình bắt đầu Dynamo, bấm **New** (Mới). Vùng trống ở giữa là nơi đặt node, tức khối nhận dữ liệu và tạo kết quả. **Library** ở bên trái là thư viện khối xử lý.
4. Ở vùng điều khiển chạy phía dưới, đổi chế độ **Automatic** (Tự động) thành **Manual** (Chạy thủ công). Sau mỗi thay đổi, ta sẽ bấm **Run** (Chạy) để biết rõ lúc nào dữ liệu được tính.

Nếu không có nhóm Visual Programming, kiểm tra đang dùng Civil 3D và không gian làm việc có dải công cụ đầy đủ. Dynamo for Civil 3D cần thành phần đi kèm Civil 3D; một phiên AutoCAD thông thường không tự có các node Civil 3D.

## Đặt ba khối xử lý

1. Bấm đúp vào khoảng trống giữa cửa sổ để tạo **Code Block** (Khối mã). Nhập đúng `stations = [0,25,50];`. Dấu chấm phẩy kết thúc biểu thức. Đây là DesignScript của Dynamo, chưa phải Python.
2. Bấm đúp ở khoảng trống bên phải khối đầu. Nhập `shifted = stations + 10;`. Khối này có cổng vào `stations` ở bên trái và cổng ra ở bên phải.
3. Bấm vào ô tìm kiếm trong Library, gõ **Watch**, rồi chọn khối Watch. Hoặc bấm chuột phải ở vùng trống, tìm Watch trong hộp tìm kiếm và chọn kết quả. Watch là cửa sổ xem dữ liệu chạy qua, không phải bước ghi vào DWG.
4. Kéo dây từ chấm cổng ra bên phải khối đầu tới cổng vào `stations` bên trái khối thứ hai. Kéo dây từ cổng ra khối thứ hai tới cổng `in` của Watch. Mỗi dây chuyển dữ liệu từ nguồn tới bước nhận.

```text
Code Block: [0,25,50] → Code Block: +10 → Watch
```

## Chạy và đọc kết quả

Bấm Run ở vùng dưới cửa sổ. Trong Watch, mở nhánh danh sách nếu đang thu gọn. Ba phần tử có chỉ số 0, 1, 2; các giá trị lần lượt là 10, 35, 60. Chỉ số bắt đầu từ 0; giá trị 10 là lý trình sau biến đổi, không phải số hàng.

Đổi 10 thành 20 ở khối thứ hai rồi bấm Run. Watch phải hiện 20, 45, 70. Đổi lại 10 và chạy lần nữa để giữ đầu ra chuẩn của bài. Nếu Watch vẫn hiện dữ liệu cũ, kiểm chế độ Manual và bấm Run; nếu node vàng, bấm biểu tượng cảnh báo trên node để đọc lỗi. Kiểm dấu ngoặc vuông và dấu chấm phẩy trước khi nối lại dây.

## Lưu và tự kiểm

Chọn **File > Save As** (Tệp > Lưu thành), lưu `ly-trinh-dau-tien.dyn` vào thư mục học. Đóng và mở lại tệp bằng File > Open, chạy và xác nhận cùng ba số. Tự thêm một lý trình 75 ở đầu vào: kết quả phải thêm 85 ở cuối. Giải thích được dây nào mang danh sách gốc và dây nào mang danh sách đã cộng là hoàn thành bài.
