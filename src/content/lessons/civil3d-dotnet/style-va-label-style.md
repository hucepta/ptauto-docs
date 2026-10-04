---
{
  "id": "lesson.civil3d-dotnet.style-va-label-style",
  "slug": "style-va-label-style",
  "title": "Style và nhãn",
  "description": "Tách dữ liệu thiết kế khỏi cách trình bày trước khi tạo hoặc sửa đối tượng.",
  "status": "published",
  "chapterId": "chapter.civil3d-dotnet.doi-tuong-thiet-ke",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.civil3d-dotnet.civildocument-object-model"
  ],
  "flow": [
    {
      "label": "Dữ liệu",
      "detail": "Alignment/Profile/Surface có hình học"
    },
    {
      "label": "Trình bày",
      "detail": "Style và Label Style quyết định cách hiển thị"
    },
    {
      "label": "Kiểm tra",
      "detail": "Đối chiếu ID style tồn tại trước khi áp dụng"
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
  "illustration": "layers"
}
---
<span id="vấn-đề" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Hình học, style và nhãn

**Một tuyến có thể đúng mà nhìn sai.**

Alignment lưu hình học và dữ liệu thiết kế; Alignment Style quyết định nét/hiển thị, Label Style quyết định nhãn lý trình hoặc hình học. Nếu plugin tạo tuyến nhưng chọn nhầm style, người dùng có thể tưởng dữ liệu bị lỗi. Style là đối tượng có ID trong document, không phải chuỗi màu tùy ý.

Trước khi thêm đối tượng, liệt kê style có trong DWG mẫu và chọn theo tên/ID đã kiểm tra. Không lấy phần tử đầu của collection nếu nó có thể rỗng hoặc khác giữa template dự án. Đọc Settings để biết giá trị mặc định của host, nhưng ghi lại những thiết lập thực sự ảnh hưởng kết quả.

## Thực hành

Với cùng một Alignment, áp dụng hai style trong bản sao DWG và so hình học/số liệu lý trình. Ghi điều gì đổi, điều gì giữ nguyên. Thiết kế thông báo khi template thiếu style yêu cầu thay vì âm thầm dùng style đầu tiên.
