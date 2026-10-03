# Kiểm chứng ví dụ kỹ thuật

Các ví dụ AutoLISP/ActiveX/.NET/Civil chưa có bản ghi chạy trong host tại workspace này. Sáu ví dụ Python/Dynamo và GIS đã được kiểm tra cú pháp và chạy fixture với Python bundled 3.12.14; chúng chưa được chạy trong Dynamo hoặc API CAD/GIS thực tế. Build web không chứng minh code CAD đã chạy. Metadata không có `verifiedWith`; giao diện hiển thị “Mã để thực hành · Chưa có bản ghi chạy trong môi trường đích.”

| File | Kiểm tra cần thực hiện | Kết quả cần đối chiếu |
|---|---|---|
| `tao-list.lsp` | Nạp trong AutoCAD có AutoLISP; đọc `point` | `(10.0 20.0 0.0)` |
| `doc-assoc.lsp` | Chạy với khóa `layer` rồi khóa `missing` | `"WALL"`, sau đó `nil` |
| `dem-line.lsp` | APPLOAD; gọi `PTA_COUNT_LINES`; thử 2 LINE + 1 CIRCLE, chỉ CIRCLE và lựa chọn rỗng | Đếm 2; xử lý nil; bản vẽ không thay đổi |
| `nap-activex.lsp` | AutoCAD Windows; chạy `(vl-load-com)` hai lần; thử bước gọi hàm mở rộng tiếp theo | Khởi tạo được; lời gọi trả nil; không suy diễn hỗ trợ macOS |

Nguồn chính thức Autodesk nằm trong metadata từng Example/Concept/Lesson. Các giải thích là nội dung biên soạn; tên API và cú pháp được giữ nguyên.

## Ghi nhận một lần chạy

1. Đọc source và nguồn Autodesk phù hợp với phiên bản host. Dùng bản vẽ thử nhỏ.
2. Ghi tên sản phẩm, phiên bản đầy đủ, hệ điều hành, ngày chạy và kết quả từng trường hợp.
3. Đối chiếu kết quả mong đợi và thay đổi bản vẽ. Sửa source canonical nếu cần; tất cả trang dùng lại cập nhật qua build.
4. Chỉ thêm `verifiedWith` sau khi có bản ghi thật:

```json
{
  "verifiedWith": {
    "product": "AutoCAD",
    "version": "phiên bản đã chạy thực tế",
    "platform": "hệ điều hành đã chạy",
    "checkedAt": "timestamp ISO UTC của lần kiểm tra"
  }
}
```

Đây là mẫu field, không phải bằng chứng chạy. Không điền thời gian/phiên bản giả. Khi thay code, bỏ nhãn kiểm chứng cũ cho tới khi chạy lại. Bản ghi chạy cần được lưu cùng review nội dung của lần phát hành.

## Nội dung bổ sung

MOVE cần bản vẽ thử, UCS = World và đối chiếu hai entity mới dịch 30 đơn vị. AutoCAD .NET và Civil 3D dùng SDK/host đúng phiên bản được nêu; cần biên dịch DLL riêng và thử trong đúng sản phẩm. Civil 3D Object Enabler không thay thế runtime Civil 3D. Python node cần kiểm tra engine của Dynamo; pipeline GIS cần CRS và dữ liệu kiểm soát đã biết. Mọi example có nguồn và kết quả mong đợi, không gắn nhãn chạy host khi chưa có bằng chứng.
