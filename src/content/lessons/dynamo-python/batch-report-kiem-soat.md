---
{
  "id": "lesson.dynamo-python.batch-report-kiem-soat",
  "slug": "batch-report-kiem-soat",
  "title": "Báo cáo theo lô",
  "description": "Thiết kế một graph chạy nhiều bản ghi cọc nhưng vẫn cho biết hàng nào lỗi.",
  "status": "published",
  "chapterId": "chapter.dynamo-python.thuc-hanh-du-lieu",
  "order": 2,
  "difficulty": "trung-cap",
  "prerequisites": [
    "lesson.dynamo-python.qa-csv-coc-gis"
  ],
  "flow": [
    {
      "label": "Nhập",
      "detail": "CSV có ID, station, elevation"
    },
    {
      "label": "Kiểm tra",
      "detail": "Tách hợp lệ/lỗi theo từng hàng"
    },
    {
      "label": "Xuất",
      "detail": "Bảng sạch và báo cáo lỗi có ID"
    }
  ],
  "sources": [
    {
      "title": "Dynamo Primer — Dynamo for Civil 3D",
      "url": "https://primer2.dynamobim.org/dynamo-for-civil-3d"
    }
  ],
  "compatibility": [
    {
      "product": "Dynamo for Civil 3D",
      "version": "Node/engine theo phiên bản host",
      "platform": "Windows"
    }
  ],
  "illustration": "report"
}
---

## “Chạy xong” chưa đủ

Một đồ thị có thể trả 498 hàng từ CSV 500 cọc mà không ai biết 2 hàng nào bị mất. Đầu ra nên gồm cả dữ liệu hợp lệ và **báo cáo lỗi**: số dòng, ID, lý do, giá trị gốc. Giữ thứ tự và stable ID để so với CSV nguồn. Trước khi tạo đối tượng Civil, chạy đồ thị ở chế độ chỉ kiểm tra trên tập nhỏ.

Đối với file Excel/CSV, xác định encoding, dấu thập phân, đơn vị và tên cột. Đừng cho `null` chảy sâu vào node hình học rồi mới tìm lỗi. Tách bước normalize, validate, transform và export; Watch hoặc log ở ranh giới từng bước. đồ thị chạy lặp phải tránh tạo trùng đối tượng ngoài ý muốn; kiểm tra object binding của version Dynamo.

## Thực hành

Tạo CSV 5 hàng: 3 hợp lệ, 1 thiếu ID, 1 station dạng chữ. Thiết kế hai đầu ra có 3 và 2 hàng, đối chiếu tổng vẫn là 5. Sau đó chạy lại đồ thị và kiểm tra có nhân đôi dữ liệu hay không.

## Thiết kế báo cáo có thể kiểm

Tạo ba đầu vào có ID C01, C02, C03; cố ý để C02 có lý trình âm. Nối dữ liệu vào bước kiểm, rồi đưa cả nhánh hợp lệ và nhánh lỗi tới Watch. Chạy Manual trước khi nối bước ghi tệp. Báo cáo phải ghi C02 cùng giá trị gốc và lý do, không chỉ ghi tổng một lỗi.

Mỗi lần chạy dùng tên tệp báo cáo mới hoặc một cột mã lần chạy. Ghi số hàng nguồn, số hàng hợp lệ, số hàng lỗi; với quy tắc phân loại một hàng vào đúng một nhánh, tổng hai nhánh phải bằng số nguồn. Chạy lại cùng đầu vào: số dòng không tăng gấp đôi. Nếu bước xuất đang mở tệp ở chế độ thêm, đổi thiết kế ghi để tránh nhân bản báo cáo.

Khi mở nhiều DWG, ghi rõ tệp đang đọc và tệp xuất; một đồ thị lấy active document chỉ đọc bản vẽ đang hoạt động, không tự lặp tất cả DWG trong thư mục. Kiểm từng tệp và đóng tài nguyên sau mỗi lần chạy.
