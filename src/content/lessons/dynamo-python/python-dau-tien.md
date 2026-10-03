---
{
  "id": "lesson.dynamo-python.python-dau-tien",
  "slug": "python-dau-tien",
  "status": "published",
  "chapterId": "chapter.dynamo-python.bat-dau",
  "difficulty": "co-ban",
  "illustration": "graph",
  "title": "Python đầu tiên",
  "description": "Nhận đầu vào, lọc lý trình lỗi và trả hai nhánh kết quả vào Watch.",
  "order": 4,
  "sources": [
    {
      "title": "Dynamo Primer: Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d/getting-started"
    },
    {
      "title": "Dynamo Primer: giao diện",
      "url": "https://primer2.dynamobim.org/3_user_interface"
    },
    {
      "title": "Python: xử lý ngoại lệ",
      "url": "https://docs.python.org/3/tutorial/errors.html"
    },
    {
      "title": "Python: math.isfinite",
      "url": "https://docs.python.org/3/library/math.html#math.isfinite"
    }
  ]
}
---

## Biến một quy tắc thành kết quả

Ta nhận các lý trình, giữ số không âm, cộng 10 và đưa bản ghi lỗi ra nhánh riêng. Kết quả cần nhìn thấy: `[10,35,60]` ở nhánh hợp lệ và một lời giải thích cho chuỗi `"abc"`. Bài dùng Python 3 thuần, không cần AutoCAD/Civil API.

## Nối đầu vào

Trong Civil 3D, mở Manage > Visual Programming > Dynamo, bấm New và chọn Manual. Bấm đúp vùng trống tạo Code Block:

```text
values = [0,25,50,"abc"];
```

Tìm Python Script trong Library bên trái, đặt bên phải. Nối cổng ra values sang IN[0]. Tìm Watch, đặt sau Python Script và nối cổng ra Python tới cổng vào Watch. Bấm đúp Python Script mở trình sửa mã; xác nhận engine Python 3 theo bài Chọn môi trường.

## Viết và chạy

```python
import math
valid = []
errors = []
for index, value in enumerate(IN[0]):
    try:
        station = float(value)
        if not math.isfinite(station) or station < 0:
            raise ValueError("Lý trình phải hữu hạn và không âm")
        valid.append(station + 10)
    except (TypeError, ValueError) as error:
        errors.append([index, str(value), str(error)])
OUT = [valid, errors]
```

Bấm Accept để áp dụng mã, rồi Run ở vùng dưới cửa sổ đồ thị. Mở nhánh 0 trong Watch: ba số là 10.0, 35.0, 60.0. Nhánh 1 có chỉ số 3, chuỗi abc và lý do không chuyển được sang số. Nội dung ngoại lệ Python có thể khác theo engine; điều phải giữ là giá trị gốc và chỉ số để tìm lại.

## Hiểu các dòng quan trọng

`float` chuyển chuỗi số thành số thực; nó không đọc dấu phẩy thập phân như `"25,5"`. `math.isfinite` loại NaN/vô cực trước khi dùng như lý trình. `append` thêm phần tử vào danh sách và trả None; không viết `valid = valid.append(...)`. `try/except` bắt hai loại lỗi dữ liệu đã nêu để còn đọc được hàng khác. Không bắt mọi lỗi rồi trả danh sách rỗng vì khi đó lỗi chương trình sẽ giống một báo cáo không có lỗi.

## Thử cả hai nhánh

Đổi abc thành `"75"`, bấm Run: nhánh 0 thêm 85.0, nhánh lỗi rỗng. Đổi nó thành -5: có lỗi lý trình âm. Đổi thành `"nan"`: vẫn phải có lỗi, không được xuất NaN. Lưu đồ thị khi đã thử đủ ba trường hợp.

Trong Python độc lập, IN không tồn tại. Để chạy cùng thuật toán ngoài Dynamo, thay `IN[0]` bằng một biến `values=[0,25,50,"abc"]` và dùng `print([valid,errors])` thay dòng OUT. Thư viện chuẩn math có ở cả hai nơi; truy cập đối tượng bản vẽ cần quy trình riêng.

## Hoàn thành

Lưu `python-ly-trinh.dyn` và ghi bốn giá trị đầu vào trong ghi chú. Bạn hoàn thành khi đọc được nhánh thành công, tìm được vị trí dữ liệu lỗi và tự giải thích vì sao -5, abc và nan bị loại bằng ba lý do khác nhau.
