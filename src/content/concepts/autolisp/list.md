---
{
  "id": "concept.autolisp.list",
  "slug": "list",
  "title": "List",
  "description": "Danh sách có thứ tự; hàm list gom các giá trị thành một list.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "kind": "term",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "aliases": [
    "danh sách",
    "danh sach",
    "list"
  ],
  "searchableTerms": [
    "tọa độ",
    "point"
  ],
  "exampleIds": [
    "example.autolisp.tao-list"
  ],
  "relatedConceptIds": [
    "concept.autolisp.assoc"
  ],
  "sources": [
    {
      "title": "Autodesk — list (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2023/ENU/AutoCAD-MAC-AutoLISP-Reference/files/GUID-2BA66308-DE64-4BA6-8F57-6E3EC1A93141.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "khi-sử-dụng",
      "exampleIds": [
        "example.autolisp.tao-list"
      ]
    }
  ]
}
---

## Cú pháp

    (list [expr...])

Các biểu thức được đánh giá, sau đó các kết quả được gom thành list. Không có đối số thì trả nil.

## Khi sử dụng

Dùng list khi cần tạo một tập giá trị từ biến, chẳng hạn tọa độ điểm. Dùng quote cho dữ liệu literal cố định.

## Khác với Association List

List thông thường được đọc theo thứ tự. Association List tổ chức các mục có khóa để tra cứu bằng assoc. Hai cách tổ chức phục vụ nhu cầu truy cập dữ liệu khác nhau.

