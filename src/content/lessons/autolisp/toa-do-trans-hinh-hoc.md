---
{
  "id": "lesson.autolisp.toa-do-trans-hinh-hoc",
  "slug": "toa-do-trans-hinh-hoc",
  "title": "Hệ tọa độ, trans và phép tính hình học",
  "description": "Phân biệt điểm với vector và chuyển WCS, UCS, OCS trước khi đọc, sửa hoặc gọi lệnh.",
  "status": "published",
  "chapterId": "chapter.autolisp.tuong-tac-ban-ve",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.autolisp.command-input-initget"
  ],
  "conceptIds": [
    "concept.autolisp.trans",
    "concept.autolisp.entity-dxf"
  ],
  "exampleIds": [
    "example.autolisp.bao-cao-toa-do"
  ],
  "exerciseIds": [
    "exercise.autolisp.chuyen-he-toa-do"
  ],
  "sources": [
    {
      "title": "Autodesk — trans (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP-Reference/files/GUID-1A316343-0B68-4DBE-8F49-B4D601CB8FCC.htm"
    },
    {
      "title": "Autodesk — About Coordinate System Transformations",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-AutoLISP/files/GUID-0F0B833D-78ED-4491-9918-9481793ED10B.htm"
    },
    {
      "title": "Autodesk — angle (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2017/ENU/AutoCAD-AutoLISP-Reference/files/GUID-F28755D4-E89F-43EF-8E76-40518C7E2728.htm"
    },
    {
      "title": "Autodesk — LINE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-DXF/files/GUID-FCEF5726-53AE-4C43-B4EA-C84EB8686A66.htm"
    },
    {
      "title": "Autodesk — CIRCLE (DXF)",
      "url": "https://help.autodesk.com/cloudhelp/2016/ENU/AutoCAD-DXF/files/GUID-8663262B-222C-414D-B133-4A8506A27C18.htm"
    },
    {
      "title": "Autodesk — Object Coordinate Systems (OCS) in DXF",
      "url": "https://help.autodesk.com/cloudhelp/2024/ENU/AutoCAD-DXF/files/GUID-D99F1509-E4E4-47A3-8691-92EA07DC88F5.htm"
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
      "heading": "thực-hành-với-ucs-xoay",
      "exampleIds": [
        "example.autolisp.bao-cao-toa-do"
      ]
    }
  ],
  "illustration": "station"
}
---

## Gắn hệ tọa độ vào dữ liệu

Một list ba số chưa đủ mô tả vị trí: cần biết nó thuộc hệ tọa độ nào. WCS là hệ tham chiếu cố định của bản vẽ; UCS là hệ làm việc hiện hành. OCS gắn với mặt phẳng entity và hướng extrusion. DCS phục vụ hiển thị theo viewport, không thay thế WCS cho báo cáo tọa độ.

Điểm nhập bởi `getpoint` thuộc UCS; điểm truyền cho lệnh CAD cũng được hiểu theo UCS. Dữ liệu DXF phụ thuộc loại entity: hai đầu LINE dùng WCS, tâm CIRCLE dùng OCS. Đừng suy luận mọi group 10 đều cùng hệ. Đặt tên như `pt-ucs`, `pt-wcs` để thấy nơi cần chuyển.

## Dùng trans đúng cho điểm và vector

`trans` nhận dữ liệu, hệ nguồn, hệ đích và tùy chọn displacement. Mã 0 là WCS, 1 là UCS, 2 là DCS; mã 3 là Paper Space DCS và chỉ phối hợp với mã 2. Truyền entity name cho hệ nguồn hoặc đích để dùng OCS của entity đó.

Lời gọi `(trans pt-ucs 1 0)` chuyển điểm sang WCS. Với vector dịch chuyển, đối số cuối `T` ngăn phần tịnh tiến của gốc tọa độ tác động vào vector. Chuyển hướng dịch UCS sang OCS của CIRCLE trước khi cộng vào tâm; chuyển tâm OCS sang UCS trước khi dùng nó làm điểm của `command`.

## Tính khoảng cách, góc và điểm mới

Hai điểm phải được đưa về cùng hệ trước khi trừ tọa độ hoặc tính khoảng cách. Vector từ A tới B là B trừ A theo từng thành phần, có thể viết bằng `mapcar`. Độ dài vector giúp phát hiện đoạn bằng 0 trước khi chuẩn hóa hướng.

`angle` trả radian và chiếu điểm 3D lên mặt phẳng dựng hiện hành. Bởi vậy góc 2D không phải độ dốc 3D. `polar` phục vụ dựng điểm từ gốc, góc và khoảng cách; `inters` phục vụ giao điểm hai đường với lựa chọn giới hạn đoạn. Khi xây Geometry Utility, ghi rõ bài toán phẳng hay không gian và dung sai so sánh; tránh kiểm tra hai số thực bằng dấu bằng tuyệt đối.

## Thực hành với UCS xoay

Ví dụ PTA_COORD_REPORT in điểm vừa chọn ở UCS, điểm WCS và vector trục X của UCS trong WCS. Chạy một lần với UCS World, rồi đặt UCS xoay 90 độ và chạy lại ở cùng vị trí hình học. Tọa độ WCS của vị trí phải ổn định; số UCS và vector hướng có thể đổi.

Bài tập yêu cầu chuyển qua lại UCS–WCS, kiểm tra sai số nhỏ và giữ đủ ba thành phần. Khi lấy điểm OCS 2D của polyline, bổ sung elevation đúng trước khi chuyển. Kết quả mong đợi là tiêu chí thực hành, chưa phải bản ghi kiểm thử host.
