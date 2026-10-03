---
{
  "id": "exercise.visual-lisp-activex.chia-curve",
  "slug": "chia-curve",
  "title": "Chia curve theo chiều dài thực",
  "description": "Báo n+1 điểm WCS và đối chiếu đường thẳng với polyline có cung.",
  "status": "published",
  "technology": "visual-lisp-activex",
  "difficulty": "trung-cap",
  "expectedResult": "LINE dài 120 chia 4 đoạn cho 5 điểm tại 0,30,60,90,120; ARC/polyline có cung được chia theo chiều dài đường, TEXT và đường dài 0 bị từ chối.",
  "conceptIds": [
    "concept.visual-lisp-activex.curve-distance",
    "concept.visual-lisp-activex.com-errors"
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có ActiveX; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows"
    }
  ],
  "solutionExampleId": "example.visual-lisp-activex.chia-curve-theo-do-dai"
}
---

## Dữ liệu thử

Tạo LINE WCS từ (0,0,0) tới (120,0,0). Tạo thêm một ARC và LWPOLYLINE có ít nhất một đoạn cung. Bài toán nhận một curve, số đoạn dương n và trả khoảng cách cùng điểm WCS cho i từ 0 tới n. Chỉ in dữ liệu, không tạo nhãn hoặc cọc.

## Cách thực hiện

Lấy EndParam để đo tổng chiều dài L. Lấy điểm bằng khoảng cách `i × L/n`, dùng giá trị L trực tiếp cho điểm cuối nhằm tránh vượt miền do sai số tích lũy. Bắt lỗi API, kiểm tra `nil`, giới hạn số đoạn và xử lý hủy.

## Nghiệm thu

Với LINE và n=4, có năm điểm với khoảng cách 0, 30, 60, 90, 120. Với đường có cung, khoảng cách giữa hai điểm theo đường khác khoảng cách thẳng. Thử TEXT, curve dài 0 và đường kín; quy định rõ có giữ điểm cuối trùng đầu hay không. Xoay UCS rồi đối chiếu lại WCS. Giải thích vì sao chia đều parameter không đáp ứng cùng yêu cầu.
