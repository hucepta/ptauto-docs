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
    },
    {
      "title": "Autodesk — vl-load-com",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-3221619A-85E4-470E-AF2E-34048BB3DED5.htm"
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

```lisp
(vl-load-com)
```

Không nhận đối số, luôn trả `nil`. Khi các phần mở rộng đã nạp, gọi lại không nạp thêm.

## Khi sử dụng

Gọi trước các hàm ActiveX cần phần mở rộng. Autodesk giới hạn hỗ trợ này trên Windows; cần kiểm tra API của sản phẩm và phiên bản đang dùng.

## Ví dụ: nạp rồi đọc tên DWG

Chuẩn bị AutoCAD Windows có DWG đang mở. Dán toàn bộ vào Command Line.

```lisp
(defun c:PTACOM (/ app doc)
  (vl-load-com)
  (setq app (vlax-get-acad-object)
        doc (vla-get-ActiveDocument app))
  (princ "\nDWG dang hoat dong: ")
  (princ (vla-get-Name doc))
  (princ))
(c:PTACOM)
```

Kết quả là tên DWG hiện hành, chẳng hạn `Drawing1.dwg`; không tạo entity. Ví dụ không có bước nhập nên không có nhánh Enter/Cancel.

## Lỗi thường gặp

`nil` từ `vl-load-com` là bình thường. Nạp LSP không thay thế lời gọi này. Nếu không nhận diện hàm hoặc có lỗi ActiveX, kiểm tra nền tảng, hỗ trợ phiên bản và DWG hiện hành.

[Tham chiếu vl-load-com](https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-6C7A8632-C12F-42BD-909E-68D804863AE2.htm) và [đọc property ActiveX](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-3221619A-85E4-470E-AF2E-34048BB3DED5.htm).
