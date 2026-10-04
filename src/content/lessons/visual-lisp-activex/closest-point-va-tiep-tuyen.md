---
{
  "id": "lesson.visual-lisp-activex.closest-point-va-tiep-tuyen",
  "slug": "closest-point-va-tiep-tuyen",
  "title": "Điểm gần và tiếp tuyến",
  "description": "Lấy điểm nằm trên tim tuyến và tiếp tuyến để đặt nhãn/cọc đúng hướng.",
  "status": "published",
  "chapterId": "chapter.visual-lisp-activex.du-lieu-hinh-hoc",
  "order": 3,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.visual-lisp-activex.variant-safearray-toa-do"
  ],
  "flow": [
    {
      "label": "Điểm yêu cầu",
      "detail": "Lấy điểm khảo sát gần tuyến"
    },
    {
      "label": "Chiếu lên tuyến",
      "detail": "Closest point và parameter trên curve"
    },
    {
      "label": "Hướng",
      "detail": "Derivative tại parameter cho tiếp tuyến"
    }
  ],
  "sources": [
    {
      "title": "Autodesk — VLA Functions with ActiveX",
      "url": "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-AutoLISP/files/GUID-A0459510-CE7A-4206-9EAA-E25AAB569B20.htm"
    }
  ],
  "compatibility": [
    {
      "product": "AutoCAD ActiveX",
      "version": "COM/VLA có hỗ trợ",
      "platform": "Windows"
    }
  ],
  "illustration": "curve"
}
---
<span id="tại-sao-không-dùng-khoảng-cách-xy-đơn-giản" class="anchor-alias" aria-hidden="true" data-pagefind-ignore></span>

## Khoảng cách đến curve

Một hố ga khảo sát có thể nằm lệch khỏi tim tuyến. Muốn báo vị trí dọc tuyến, trước hết tìm điểm gần nhất trên curve bằng `vlax-curve-getClosestPointTo`, rồi lấy parameter hoặc distance tại điểm đó. `vlax-curve-getFirstDeriv` cho vector tiếp tuyến tại parameter, hữu ích khi định hướng nhãn hoặc tính offset có dấu.

```text
Điểm khảo sát P → điểm Q gần nhất trên tim tuyến → lý trình của Q + khoảng cách lệch P–Q
```

Với polyline gấp khúc, điểm gần nhất có thể ở đỉnh. Hướng tại đỉnh cần quy tắc riêng: hướng đoạn trước, đoạn sau hoặc trung bình tùy yêu cầu; đừng khẳng định một vector duy nhất có nghĩa thiết kế. Hàm Curve API có thể không áp dụng cho mọi loại entity, nên kiểm tra loại và bắt lỗi COM.

## Thực hành

Vẽ polyline chữ L và đặt P gần một đoạn thẳng, rồi gần đúng đỉnh. Dự đoán vị trí Q trước khi chạy. Ghi rõ trường hợp nào bạn sẽ từ chối xuất hướng nhãn vì tiếp tuyến không ổn định.
