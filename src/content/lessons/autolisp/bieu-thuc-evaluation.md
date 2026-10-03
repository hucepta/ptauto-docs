---
{
  "id": "lesson.autolisp.bieu-thuc-evaluation",
  "slug": "bieu-thuc-evaluation",
  "title": "Biểu thức và evaluation",
  "description": "Đọc cú pháp dạng tiền tố, hiểu lúc nào AutoLISP tính biểu thức và lúc nào giữ dữ liệu nguyên dạng.",
  "status": "published",
  "chapterId": "chapter.autolisp.ngon-ngu-co-ban",
  "order": 1,
  "difficulty": "co-ban",
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có hỗ trợ AutoLISP",
      "platform": "Windows / macOS"
    }
  ],
  "conceptIds": [
    "concept.autolisp.bieu-thuc"
  ],
  "sources": [
    {
      "title": "Autodesk — quote (AutoLISP)",
      "url": "https://help.autodesk.com/cloudhelp/2022/ENU/AutoCAD-AutoLISP-Reference/files/GUID-18F7E287-CB2F-4150-9A07-CE23C3F9E604.htm"
    }
  ],
  "aliases": [
    "expression",
    "evaluation"
  ],
  "illustration": "graph"
}
---


## Đọc một biểu thức

AutoLISP viết lời gọi hàm trong cặp ngoặc: tên hàm trước, các đối số sau. Hãy thử trong dòng lệnh AutoCAD:

    (+ 6 4)

Kết quả mong đợi là 10. Với biểu thức lồng nhau, đọc từ trong ra ngoài:

    (* (+ 6 4) 2)

Phần cộng tạo ra 10; phần nhân dùng giá trị đó để tạo ra 20. Khoảng trắng giúp dễ đọc, còn cặp ngoặc quyết định cấu trúc. Khi kiểm tra một dòng dài, hãy tìm từng cặp ngoặc trước khi đoán kết quả.

## Code hay dữ liệu?

Một list thường được hiểu như lời gọi hàm. Để giữ nó làm dữ liệu, dùng quote hoặc dấu nháy đơn:

    '(6 4 2)

Bạn nhận một danh sách ba số, thay vì yêu cầu AutoLISP gọi số 6 như một hàm. Đây là khác biệt cần nắm trước khi làm việc với điểm, danh sách thuộc tính và bộ lọc đối tượng.

## Kiểm tra

Dự đoán kết quả của (+ 3 (* 2 5)), rồi nhập vào dòng lệnh. Kết quả mong đợi: 13. Tiếp theo so sánh (+ 3 5) với '(+ 3 5): một biểu thức được tính, một biểu thức được giữ làm dữ liệu.

Nếu dòng lệnh vẫn chờ nhập, kiểm tra ngoặc đóng. Nếu gặp lỗi gọi hàm, kiểm tra phần tử đầu và xem bạn có định dùng quote hay không.

