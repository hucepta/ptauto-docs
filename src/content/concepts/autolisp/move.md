---
{
  "id": "concept.autolisp.move",
  "slug": "move",
  "title": "MOVE và vector dịch chuyển",
  "description": "Lệnh MOVE dùng điểm gốc và điểm đích để dịch các entity trong selection set.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "tags": [
    "MOVE",
    "selection set",
    "UCS"
  ],
  "aliases": [
    "dịch chuyển"
  ],
  "exampleIds": [
    "example.autolisp.demo-move"
  ],
  "examplePlacements": [
    {
      "heading": "ví-dụ-với-hai-entity-mới",
      "exampleIds": [
        "example.autolisp.demo-move"
      ]
    }
  ],
  "relatedConceptIds": [
    "concept.autolisp.ssget"
  ],
  "sources": [
    {
      "title": "Autodesk — MOVE",
      "url": "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Core/files/GUID-47CE7325-84C0-4414-80A3-29DC98392709.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ]
}
---

## Điểm gốc, điểm đích và vector

MOVE giữ hình dạng đối tượng và thay đổi vị trí. Hai điểm truyền cho lệnh xác định vector dịch chuyển: điểm đích trừ điểm gốc. Với điểm gốc (0, 0, 0) và điểm đích (0, 30, 0), mỗi điểm của đối tượng tăng 30 đơn vị trên trục Y của UCS hiện hành.

Các tọa độ đi vào lệnh qua `command` được hiểu theo UCS. Minh họa trên trang chủ dùng UCS = World để trục Y trên hình cũng là trục Y của WCS. Nếu bản vẽ đang dùng UCS xoay, cùng đoạn mã có thể dịch theo một hướng khác trên màn hình.

## Ví dụ với hai entity mới

Nạp file rồi gọi PTDEMO trong bản vẽ thử. Lệnh tạo LINE dài 120 và CIRCLE bán kính 24. Sau mỗi lệnh tạo hình, `entlast` giữ entity vừa tạo. `ssadd` đưa đúng hai entity này vào selection set; các đối tượng có sẵn trong bản vẽ không bị chọn.

Đối số rỗng kết thúc phần chọn đối tượng của MOVE. Từ khóa `_non` trước mỗi điểm vô hiệu hóa bắt điểm cho lần nhập đó, tránh OSNAP kéo tọa độ sang điểm gần một đối tượng khác. Dấu gạch dưới ở tên lệnh hỗ trợ tên lệnh quốc tế.

## Kiểm tra kết quả

Trước khi chạy, đặt UCS = World và kiểm tra bản vẽ thử không có lệnh đang chờ nhập. Sau khi chạy, LINE có hai đầu (0, 30, 0) và (120, 30, 0); tâm CIRCLE là (60, 30, 0). Độ dài và bán kính giữ nguyên.

Thử đổi điểm đích thành (20, 30, 0) rồi quan sát cả hai trục. Không dùng selection set quét toàn bản vẽ cho bài thử này: phạm vi thao tác phải là hai entity do lệnh vừa tạo.
