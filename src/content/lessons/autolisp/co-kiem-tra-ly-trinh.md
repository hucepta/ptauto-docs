---
{
  "id": "lesson.autolisp.co-kiem-tra-ly-trinh",
  "slug": "co-kiem-tra-ly-trinh",
  "title": "Bài thực hành: đặt mốc theo lý trình trên tim tuyến",
  "description": "Chọn polyline, tính điểm theo khoảng cách và tạo marker có kiểm tra giới hạn.",
  "status": "published",
  "chapterId": "chapter.autolisp.thuc-hanh-cad",
  "order": 2,
  "difficulty": "trung-cap",
  "exampleIds": ["example.autolisp.demo-stakes"],
  "prerequisites": [
    "lesson.autolisp.quy-trinh-cad-utility"
  ],
  "flow": [
    {
      "label": "Tuyến",
      "detail": "Chọn LWPOLYLINE và đo chiều dài"
    },
    {
      "label": "Lý trình",
      "detail": "Sinh dãy 0, bước, 2×bước đến cuối tuyến"
    },
    {
      "label": "Marker",
      "detail": "Lấy điểm trên curve, tạo đối tượng và đếm kết quả"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — AutoLISP Developer's Guide",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-265AADB3-FB89-4D34-AA9D-6ADF70FF7D4B.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; thử lại trên phiên bản đang dùng",
      "platform": "Windows / macOS"
    }
  ]
}
---

## Đề bài hạ tầng

Một tuyến được vẽ bằng LWPOLYLINE. Bạn cần marker tại mỗi 20 m dọc theo tuyến để phục vụ kiểm tra cọc. Nếu tuyến dài 95 m, các mốc chính là 0, 20, 40, 60, 80 m; điểm cuối 95 m chỉ thêm khi yêu cầu dự án quy định. Nói rõ chính sách điểm cuối trước khi code để tránh trùng mốc hoặc thiếu cọc.

## Chia bài toán

Chọn đúng một curve, xác minh độ dài và đơn vị DWG, rồi dùng `vlax-curve-getPointAtDist` lấy từng điểm. Mỗi điểm phải nằm trong miền `[0, chiều dài]`. Dùng `entmakex` tạo marker POINT hoặc block theo tiêu chuẩn dự án. Nếu bản vẽ dùng UCS khác World, kiểm tra hệ tọa độ mà hàm trả và hệ tọa độ cần lưu trước khi tạo entity.

## Nghiệm thu

Thử tuyến thẳng 95 m, tuyến gấp khúc 95 m, tuyến ngắn hơn 20 m, selection bị hủy và bước nhập bằng 0. Đối chiếu số marker và tọa độ điểm cuối với đo thủ công. Chỉ chạy trên bản sao DWG. Demo “Từ code đến bản vẽ” ở trang chủ dùng một biến thể của quy trình này để bạn xem từng bước.
