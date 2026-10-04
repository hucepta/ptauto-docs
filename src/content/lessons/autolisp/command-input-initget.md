---
{
  "id": "lesson.autolisp.command-input-initget",
  "slug": "command-input-initget",
  "title": "Nhập dữ liệu cho lệnh",
  "description": "Thiết kế lời nhắc, kiểm tra hủy và truyền đúng chuỗi đối số cho command.",
  "status": "published",
  "chapterId": "chapter.autolisp.tuong-tac-ban-ve",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.chon-doi-tuong-ssget",
    "lesson.autolisp.ham-dieu-kien-vong-lap"
  ],
  "conceptIds": [
    "concept.autolisp.initget",
    "concept.autolisp.error-undo",
    "concept.autolisp.move"
  ],
  "exampleIds": [
    "example.autolisp.demo-move"
  ],
  "exerciseIds": [],
  "sources": [
    {
      "title": "Autodesk — About Defining Commands",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-LT-AutoLISP/files/GUID-EF910176-86D2-4158-A7C3-E926A002F421.htm"
    },
    {
      "title": "Autodesk — About The Getxxx Functions",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-5D9F55C4-97FE-4FF1-81D2-C9F5905C2E25.htm"
    },
    {
      "title": "Autodesk — initget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2020/ENU/AutoCAD-AutoLISP-Reference/files/GUID-9ED8841B-5C1D-4B3F-9F3B-84A4408A6BBF.htm"
    },
    {
      "title": "Autodesk — About Foreign Language Support",
      "url": "https://help.autodesk.com/view/ACD/2026/ENU/?caas=caas%2Fdocumentation%2FCIV3D%2F2014%2FENU%2FfilesACD%2FGUID-D156B6ED-B1B4-42CB-BE1D-CA251BFC08C3-htm.html"
    },
    {
      "title": "Autodesk — command-s (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2024/CHS/AutoCAD-AutoLISP-Reference/files/GUID-5C9DC003-3DD2-4770-95E7-7E19A4EE19A1.htm"
    },
    {
      "title": "Autodesk — About Undoing Changes Made by a Routine",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP/files/GUID-4481039B-77DA-4500-AE8B-3D2AD6951115.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows / macOS"
    }
  ],
  "tags": [
    "AutoLISP"
  ],
  "examplePlacements": [
    {
      "heading": "đối-số-của-command",
      "exampleIds": [
        "example.autolisp.demo-move"
      ]
    }
  ],
  "illustration": "terminal"
}
---
<span id="thiết-kế-lệnh-như-một-luồng-dữ-liệu" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Luồng dữ liệu của lệnh

Tên hàm có tiền tố `c:` tạo lệnh người dùng có thể gọi trực tiếp tại Command prompt. Lệnh nên không nhận đối số hàm; nó thu dữ liệu bằng `getpoint`, `getdist`, `getint`, `getstring` hoặc `ssget`, rồi chuyển dữ liệu sang hàm xử lý. Trước khi viết code, liệt kê từng lời nhắc, kiểu kết quả và nhánh hủy.

`getpoint` trả điểm trong UCS hiện hành. `getdist` trả khoảng cách; `getangle` trả góc dạng radian. `getstring T` cho phép khoảng trắng. Enter có thể trả `nil` với nhiều hàm nhập; nhấn Esc gây đường xử lý lỗi. Cả hai phải kết thúc gọn và không tiếp tục dùng dữ liệu chưa có.

<span id="initget-kiểm-soát-lần-nhập-kế-tiếp" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Kiểm soát đầu vào bằng initget

`initget` đặt ràng buộc và từ khóa cho đúng lời gọi nhập tiếp theo. Các bit 1, 2, 4 lần lượt cấm Enter rỗng, số 0 và số âm. Tổng 7 phù hợp khi yêu cầu số đoạn chia là số nguyên dương; tổng 6 cho phép Enter để dùng giá trị mặc định dương.

Nếu đăng ký từ khóa như `"Giua Cuoi"`, kết quả có thể là chuỗi từ khóa thay vì số hoặc điểm. Vì vậy kiểm tra nhánh bằng `cond` trước khi tính toán. `getstring` không sử dụng từ khóa của `initget`; không đặt ràng buộc một lần rồi mong chúng tồn tại cho mọi lời nhắc.

<span id="truyền-đối-số-đúng-cho-command" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Đối số của command

`command` đưa từng đối số vào chuỗi lời nhắc của lệnh AutoCAD. Chuỗi rỗng tương đương Enter. Dùng tên quốc tế có dấu gạch dưới và dấu chấm, chẳng hạn `"._MOVE"`, cùng từ khóa `"_non"` để điểm do chương trình cung cấp không bị Object Snap thay đổi. Dấu chấm gọi lệnh chuẩn nếu tên lệnh đã bị định nghĩa lại.

Ví dụ PTDEMO giả định UCS World: tạo LINE từ (0,0) tới (120,0), tạo CIRCLE tâm (60,0), bán kính 24, rồi dịch đúng hai đối tượng lên 30 đơn vị. Sau mỗi lần tạo, lấy `entlast` và thêm vào selection set bằng `ssadd`; không dùng lựa chọn toàn bản vẽ vì có thể kéo nhầm đối tượng cũ.

<span id="trạng-thái-môi-trường-và-thực-hành" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Trạng thái môi trường

Nếu thay CMDECHO hoặc OSMODE, lưu giá trị cũ và khôi phục ở đường thành công lẫn đường lỗi. Nhóm các sửa đổi bằng Undo Begin/End. Khi cần gọi lệnh trong `*error*`, `command-s` phù hợp với chuỗi đối số hoàn chỉnh và không chứa PAUSE.

Chạy PTDEMO trên bản vẽ thử có sẵn một LINE khác. Kiểm tra LINE cũ giữ vị trí, hai đối tượng mới dịch đúng và Undo hoạt động theo thiết kế. Ghi UCS và kết quả của từng lượt thử để so sánh khi chỉnh sửa mã.
