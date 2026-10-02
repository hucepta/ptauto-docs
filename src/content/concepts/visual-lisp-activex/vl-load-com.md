---
{
  "id": "concept.visual-lisp-activex.vl-load-com",
  "slug": "vl-load-com",
  "title": "vl-load-com",
  "description": "Nạp hỗ trợ ActiveX và các hàm mở rộng AutoLISP trên Windows.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "co-ban",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ ActiveX",
      "platform": "Windows"
    }
  ],
  "exampleIds": [
    "example.visual-lisp-activex.nap-activex"
  ],
  "sources": [
    {
      "title": "Autodesk — vl-load-com (AutoLISP/ActiveX)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6C7A8632-C12F-42BD-909E-68D804863AE2.htm"
    }
  ],
  "examplePlacements": [
    {
      "heading": "khi-sử-dụng",
      "exampleIds": [
        "example.visual-lisp-activex.nap-activex"
      ]
    }
  ]
}
---

## Cú pháp

    (vl-load-com)

Không có đối số, luôn trả nil. Nếu đã nạp các hàm mở rộng, lời gọi không làm gì thêm.

## Khi sử dụng

Gọi ở phần khởi tạo trước khi dùng các hàm mở rộng ActiveX. Chỉ áp dụng trên Windows; không dùng bước này để khẳng định code chạy trên macOS hoặc Web.

