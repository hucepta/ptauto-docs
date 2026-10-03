---
{
  "id": "concept.visual-lisp-activex.vlax-invoke-method",
  "slug": "vlax-invoke-method",
  "title": "vlax-invoke-method",
  "description": "Gọi method COM theo tên.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "kind": "api",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Tham chiếu API 2026; xem trang nguồn cho phiên bản cụ thể",
      "platform": "Windows only; not available on Mac OS or Web"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — vlax-invoke-method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A8B097A2-CE86-4B38-B2A9-D6F53EACA8ED.htm"
    },
    {
      "title": "Autodesk — vlax-invoke-method",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-ActiveX-Reference/files/GUID-2D00EF00-0579-4424-85C3-BEABB329CBAD.htm"
    }
  ],
  "aliases": [],
  "relatedConceptIds": [],
  "exampleIds": []
}
---

## Cú pháp

```lisp
(vlax-invoke-method obj method arg [arg ...])
```

## Tham số và kết quả

`obj` là VLA-object; `method` là symbol hoặc chuỗi tên method. Số và kiểu đối số theo method được gọi. Kết quả cũng theo method; hàm không kiểm tra trước kiểu đối số.

## Ví dụ: đọc FILLMODE bằng GetVariable

Chuẩn bị AutoCAD Windows có DWG mở. Dán vào Command Line. Ví dụ chỉ đọc biến hệ thống, không di chuyển entity.

```lisp
(defun c:PTAGOIMETHOD (/ doc result)
  (vl-load-com)
  (setq doc (vla-get-ActiveDocument (vlax-get-acad-object))
        result
          (vl-catch-all-apply
            'vlax-invoke-method
            (list doc 'GetVariable "FILLMODE")))
  (if (vl-catch-all-error-p result)
    (princ (vl-catch-all-error-message result))
    (progn
      (princ "\nFILLMODE: ")
      (prin1 (vlax-variant-value result))))
  (princ))
(c:PTAGOIMETHOD)
```

GetVariable trả Variant; ví dụ lấy giá trị bên trong và in thiết lập FILLMODE hiện hành. Không có bước nhập hay nhánh Cancel; lỗi gọi method được in.

## Lỗi thường gặp

Method phải áp dụng cho object; có thể kiểm bằng `vlax-method-applicable-p`. Với method nhận điểm, kiểm yêu cầu WCS và kiểu Variant thay vì truyền list tùy ý. API này chỉ hỗ trợ Windows.

[Tham chiếu vlax-invoke-method](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP-Reference/files/GUID-A8B097A2-CE86-4B38-B2A9-D6F53EACA8ED.htm) và [GetVariable](https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-ActiveX-Reference/files/GUID-2D00EF00-0579-4424-85C3-BEABB329CBAD.htm).
