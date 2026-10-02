---
{
  "id": "concept.autolisp.ssget",
  "slug": "ssget",
  "title": "ssget",
  "description": "Tạo selection set bằng thao tác chọn hoặc bộ lọc đối tượng.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "aliases": [
    "selection set",
    "đối tượng",
    "doi tuong"
  ],
  "exampleIds": [
    "example.autolisp.dem-line"
  ],
  "relatedConceptIds": [
    "concept.autolisp.list"
  ],
  "sources": [
    {
      "title": "Autodesk — ssget (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-0F37CC5E-1559-4011-B8CF-A3BA0973B2C3.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "giá-trị-trả-về",
      "exampleIds": [
        "example.autolisp.dem-line"
      ]
    }
  ]
}
---

## Cú pháp thường dùng

    (ssget)
    (ssget '((0 . "LINE")))

Lời gọi thứ hai cho người dùng chọn, rồi giữ các entity loại LINE.

## Giá trị trả về

Selection set hoặc nil. Chỉ gọi sslength sau khi đã kiểm tra kết quả.

## Phạm vi toàn bản vẽ

Chế độ "_X" có thể lấy đối tượng ngoài vùng nhìn, trên layer tắt hoặc đóng băng. Hãy chọn phạm vi theo yêu cầu xử lý thay vì mặc định quét toàn bộ database.

