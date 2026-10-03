---
{
  "id": "exercise.autolisp.thong-ke-danh-sach",
  "slug": "thong-ke-danh-sach",
  "title": "Thống kê danh sách chiều dài",
  "description": "Tách hàm tính toán, bỏ phần tử không hợp lệ và báo trung bình khi còn dữ liệu.",
  "status": "published",
  "technology": "autolisp",
  "difficulty": "co-ban",
  "expectedResult": "Với (12 -3 0 8 \"x\") và hệ số 2: count=2, total=40.0, average=20.0; list rỗng trả count=0 và average=nil.",
  "conceptIds": [
    "concept.autolisp.ham-va-list",
    "concept.autolisp.list"
  ],
  "compatibility": [
    {
      "product": "AutoCAD",
      "version": "Có AutoLISP; cần kiểm thử phiên bản sử dụng",
      "platform": "Windows / macOS"
    }
  ],
  "solutionExampleId": "example.autolisp.thong-ke-danh-sach"
}
---

## Dữ liệu và yêu cầu

Giả sử module đọc bản vẽ cung cấp list chiều dài nhưng dữ liệu thử còn chứa số âm, số 0 và chuỗi. Viết hàm nhận list cùng hệ số số học, giữ số dương, nhân hệ số rồi trả Association List có values, count, total, average. Hàm này không được gọi `ssget` hoặc thay system variable.

Dùng `foreach` hoặc `while` để lọc, `mapcar` cùng `lambda` để biến đổi và `apply` để cộng. Hàm lệnh riêng chỉ nhận kết quả và in thông báo.

## Các ca cần thử

Thử list `(12 -3 0 8 "x")` với hệ số 2, list rỗng, list chỉ gồm giá trị bị loại và list có một số dương. Chỉ chia trung bình khi count lớn hơn 0. Giữ thứ tự các số hợp lệ sau lọc để values có thể được đối chiếu với dữ liệu đầu.

## Tiêu chí hoàn thành

Kết quả chính là hai giá trị 24 và 16, tổng 40, trung bình 20. List rỗng có tổng 0 và trung bình `nil`. Chạy liên tiếp không để bộ đếm toàn cục làm sai lần sau. Đọc mã gợi ý rồi tự giải thích vì sao `mapcar` và `apply` không thể đổi chỗ cho nhau trong bài toán này.
