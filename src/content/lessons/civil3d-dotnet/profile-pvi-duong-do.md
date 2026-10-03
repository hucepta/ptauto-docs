---
{
  "id": "lesson.civil3d-dotnet.profile-pvi-duong-do",
  "slug": "profile-pvi-duong-do",
  "title": "Đường đỏ và PVI",
  "description": "Phân biệt profile mặt đất với profile thiết kế, đọc PVI và kiểm tra phạm vi lý trình.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.tuyen-va-trac-doc",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.alignment-profile-station"
  ],
  "flow": [
    {
      "label": "Tuyến",
      "detail": "Alignment định nghĩa trục và miền station"
    },
    {
      "label": "Trắc dọc",
      "detail": "Profile gắn với tuyến, chứa cao độ theo station"
    },
    {
      "label": "Kiểm tra",
      "detail": "So PVI, độ dốc và cao độ tại mốc"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — Civil 3D .NET Developer Guide",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/Civil3D-DevGuide/files/GUID-E486351E-EECE-4A87-B148-08B98AEE2B21.htm"
    }
  ],
  "compatibility": [
    {
      "product": "Civil 3D .NET",
      "version": "Build và thử với SDK/host Civil 3D cùng phiên bản",
      "platform": "Windows"
    }
  ],
  "illustration": "profile"
}
---

## Trắc dọc không phải một polyline 2D thông thường

Profile gắn với một Alignment. **Surface profile** lấy cao độ từ bề mặt dọc tuyến; **layout profile** thể hiện thiết kế với các PVI và đoạn cong đứng. Khi kiểm tra độ dốc, phải biết đang đọc profile nào. Cùng station có thể có cao độ mặt đất và cao độ thiết kế khác nhau.

```text
Alignment station → Profile mặt đất (EG) và Profile thiết kế (FG) → chênh cao → báo cáo đào/đắp sơ bộ
```

Đầu vào cần miền station và đơn vị. Không truy vấn ngoài phạm vi profile hoặc dùng station tăng dần khi alignment có phương chạy khác dự kiến. Khi profile phụ thuộc surface, lưu ý trạng thái cập nhật; bản báo cáo phải nêu thời điểm và nguồn surface.

## Thực hành

Tạo bảng 0+000, 0+020, 0+040 với EG, FG và chênh cao dự kiến. Chạy tool chỉ đọc và so từng hàng với Civil 3D. Thử station ngoài miền để xem plugin từ chối thế nào.
