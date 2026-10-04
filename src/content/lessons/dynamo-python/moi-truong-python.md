---
{
  "id": "lesson.dynamo-python.moi-truong-python",
  "slug": "moi-truong-python",
  "status": "published",
  "chapterId": "chapter.dynamo-python.bat-dau",
  "difficulty": "co-ban",
  "illustration": "graph",
  "title": "Chọn môi trường",
  "description": "Python độc lập là chương trình chạy ngoài Civil 3D. Python trong Dynamo là một node nằm trong đồ thị đang chạy cùng ứng dụng chủ. Chúng dùng cùng cú pháp cơ bản",
  "order": 3,
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
      "title": "Python: sys",
      "url": "https://docs.python.org/3/library/sys.html#sys.version"
    }
  ]
}
---
<span id="hai-nơi-chạy-python" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Python trong Dynamo và Python độc lập

Python độc lập là chương trình chạy ngoài Civil 3D. Python trong Dynamo là một node nằm trong đồ thị đang chạy cùng ứng dụng chủ. Chúng dùng cùng cú pháp cơ bản nhưng không mặc định có cùng thư viện, phiên bản hay quyền truy cập bản vẽ.

| Nơi chạy | Nhận dữ liệu | Quan sát kết quả |
| --- | --- | --- |
| Python độc lập | Biến, tệp CSV, đối số chương trình | print ra cửa sổ lệnh hoặc tệp |
| Python Script trong Dynamo | Cổng IN nối từ node khác | Gán OUT rồi nối Watch |

<span id="chuẩn-bị-một-đồ-thị-riêng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Chuẩn bị đồ thị

Trong Civil 3D, chọn Manage > Visual Programming > Dynamo. Bấm New. Chọn Manual ở vùng dưới. Không mở ngay đồ thị tải trên mạng vì nó có thể ghi vào bản vẽ hoặc cần thư viện ngoài.

Trong Library bên trái, tìm **Python Script**, chọn node kết quả có cổng `IN[0]`. Đặt node ở giữa vùng trống. Tùy phiên bản Dynamo, bộ máy chạy Python có thể hiện trên node hoặc trong trình sửa mã. Bấm đúp Python Script để mở cửa sổ sửa mã. Tìm bộ chọn engine, tức bộ máy thực thi Python; ghi lại tên đang được chọn. CPython3, PythonNet3 và IronPython không phải ba tên thay thế tùy ý cho một môi trường giống nhau.

<span id="kiểm-môi-trường-đang-dùng" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm tra môi trường

Thay nội dung mã bằng:

```python
import sys
OUT = [sys.version, sys.executable]
```

Bấm nút **Accept** (Chấp nhận) trong cửa sổ mã, hoặc nút lưu mã tương ứng của phiên bản đang dùng. Tìm Watch từ Library. Nối cổng ra Python Script sang Watch rồi bấm Run. Watch phải chứa hai chuỗi: thông tin phiên bản Python và đường dẫn trình thực thi do engine cung cấp. Đường dẫn có thể khác Python bạn cài ngoài Civil 3D; không dùng nó như hướng dẫn tự cài package vào thư mục chương trình.

Lưu đồ thị `kiem-python.dyn`. Ghi tên Civil 3D, phiên bản Dynamo và tên engine vào ghi chú của đồ thị. Khi gửi cho người khác, gửi kèm ba thông tin này để họ chọn đúng môi trường.

<span id="đừng-nhầm-việc-cài-thư-viện" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Cài thư viện Python

Một lệnh `pip install` chạy ở cửa sổ lệnh ngoài Civil 3D thường cài vào Python độc lập hoặc môi trường ảo được chọn. Nó không bảo đảm Python Script tìm thấy thư viện. Bài đầu chỉ dùng `sys` thuộc thư viện chuẩn; không cần cài package.

GeoPandas, Shapely hoặc package có thư viện nhị phân cần môi trường và phiên bản phù hợp. Nếu cần xử lý GIS, cách dễ kiểm soát là chạy Python GIS bên ngoài, xuất CSV/GeoPackage rồi đọc kết quả. Nếu cần AutoCAD/Civil API trong node, học riêng cách nạp assembly, mở transaction và đóng đối tượng; ví dụ Python thuần không tự cấp quyền đó.

<span id="kết-quả-cần-giữ" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Lưu kết quả

Chụp hoặc ghi lại hai dòng Watch và tên engine. Nếu `import sys` chạy nhưng không thấy kết quả, kiểm đã gán OUT chưa và Watch có dây nối không. Trong Python độc lập có thể viết `print(sys.version)`; trong Dynamo bài này dùng OUT. Có kết quả rõ ở Watch và phân biệt được hai môi trường là đạt.
