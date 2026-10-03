---
{
  "id": "lesson.autolisp.chon-doi-tuong-ssget",
  "slug": "chon-doi-tuong-ssget",
  "title": "Chọn đối tượng",
  "description": "Tạo selection set, lọc LINE và xử lý trường hợp không có đối tượng phù hợp.",
  "status": "published",
  "chapterId": "chapter.autolisp.tuong-tac-ban-ve",
  "order": 1,
  "difficulty": "co-ban",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "prerequisites": [
    "lesson.autolisp.list-association-list"
  ],
  "conceptIds": [
    "concept.autolisp.ssget"
  ],
  "exampleIds": [
    "example.autolisp.dem-line"
  ],
  "sources": [
    {
      "title": "Autodesk — ssget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0F37CC5E-1559-4011-B8CF-A3BA0973B2C3.htm"
    }
  ],
  "searchableTerms": [
    "ssget",
    "đối tượng",
    "selection set",
    "LINE"
  ],
  "examplePlacements": [
    {
      "heading": "bắt-đầu-bằng-thao-tác-chọn",
      "exampleIds": [
        "example.autolisp.dem-line"
      ]
    }
  ],
  "illustration": "metadata"
}
---

## Bắt đầu bằng thao tác chọn

Gọi (ssget) để người dùng chọn đối tượng. Hàm trả selection set hoặc nil. Trước khi gọi sslength, kiểm tra kết quả bằng if.

Ví dụ “Đếm LINE được chọn” đi kèm tạo lệnh PTA_COUNT_LINES. Lệnh cho phép chọn trong bản vẽ, chỉ giữ LINE, rồi in số lượng. Nó không chỉnh sửa đối tượng.

## Bộ lọc và phạm vi

Bộ lọc '((0 . "LINE")) giữ entity có loại LINE. Một polyline không phải LINE nên không được đếm trong ví dụ này.

Chế độ "_X" tìm trong toàn bộ database và có thể lấy đối tượng trên layer tắt hoặc đóng băng. Chỉ dùng nó khi phạm vi toàn bản vẽ đúng với yêu cầu. Lệnh trong bài dùng thao tác chọn tương tác để bạn kiểm soát phạm vi.

## Thử trên bản vẽ nhỏ

Tạo hai LINE và một CIRCLE. Nạp file ví dụ bằng APPLOAD, gọi PTA_COUNT_LINES rồi chọn cả ba: số lượng mong đợi là 2. Thử chọn chỉ CIRCLE để kiểm tra nhánh không có LINE.

Ghi lại phiên bản AutoCAD, hệ điều hành và kết quả khi kiểm chứng. Trang này cung cấp mã nguồn để thực hành; chưa có bản ghi chạy trong AutoCAD cho ví dụ.

