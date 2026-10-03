---
{
  "id": "lesson.visual-lisp-activex.gioi-han-com-va-chon-net",
  "slug": "gioi-han-com-va-chon-net",
  "title": "Khi nào giữ ActiveX, khi nào chuyển sang .NET",
  "description": "Đánh giá phạm vi API, tốc độ, phụ thuộc Windows và nhu cầu bảo trì của tool.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.ung-dung",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.project-activex-gioi-han"
  ],
  "flow": [
    {
      "label": "Yêu cầu",
      "detail": "Liệt kê dữ liệu và thao tác cần có"
    },
    {
      "label": "Giới hạn",
      "detail": "Kiểm tra API/host và thử trên bản vẽ thật"
    },
    {
      "label": "Quyết định",
      "detail": "Giữ LISP/COM hoặc thiết kế plugin .NET"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — VLA Functions with ActiveX",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD ActiveX",
      "version": "COM/VLA có hỗ trợ",
      "platform": "Windows"
    }
  ],
  "illustration": "graph"
}
---

## Chọn công cụ theo bài toán

Một routine kiểm tra Layer và chiều dài vài trăm polyline có thể đủ với AutoLISP/ActiveX. Khi cần giao diện lớn, nhiều module C#, dữ liệu Civil 3D chuyên sâu hoặc xử lý dài hạn theo version SDK, .NET thường thuận lợi hơn. ActiveX không tự mở quyền truy cập vào mọi đối tượng Civil 3D và chỉ có trên Windows.

| Câu hỏi | Nếu câu trả lời là có |
| --- | --- |
| Mọi API cần dùng đều có trong ActiveX? | Giữ tool nhỏ nếu kết quả và tốc độ đạt |
| Cần Transaction/DocumentLock và nhiều bản vẽ? | Xem xét .NET |
| Cần Civil 3D Alignment/Profile/Surface chuyên sâu? | Dùng Civil 3D .NET API đúng phiên bản |

Đừng chuyển ngôn ngữ chỉ vì code dài. Trước hết tách logic tính toán, đầu vào và truy cập bản vẽ. Khi đổi sang .NET, giữ bộ dữ liệu thử và tiêu chí nghiệm thu cũ để so kết quả hai bản.

## Thực hành

Lập bảng cho tool “đếm và báo cáo layer của 5.000 LINE”: API, độ trễ chấp nhận, hệ điều hành, cách triển khai, cách thử. Viết quyết định bằng một đoạn ngắn có điều kiện thay đổi quyết định.
