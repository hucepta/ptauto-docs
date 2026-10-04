// Hướng dẫn nghiệm thu theo từng dự án; sơ đồ là minh họa, không thay thế kiểm thử trong host CAD.
export const projectGuides: Record<string, { input: string; steps: [string, string, string]; output: string; check: string }> = {
  'project.autolisp.cad-utility-bao-cao': { input: 'Bản sao DWG có LINE 2D, LINE lệch Z và layer khác nhau.', steps: ['Lọc tập LINE, kiểm tra lựa chọn và đơn vị DWG.', 'Đọc handle, layer, hai đầu WCS; tính chiều dài 3D.', 'Ghi CSV UTF-8, đóng file và phục hồi trạng thái khi hủy.'], output: 'CSV có một hàng cho mỗi LINE hợp lệ và thông báo số dòng.', check: 'Đối chiếu từng handle với DWG, thử tên chứa dấu phẩy và hủy khi đang chọn file.' },
  'project.autolisp.cad-utility': { input: 'Bản sao DWG với đối tượng đúng, sai loại và lựa chọn rỗng.', steps: ['Viết hợp đồng đầu vào và thông báo lỗi.', 'Tách hàm đọc dữ liệu khỏi lệnh c: và xử lý nil.', 'Chạy ca đúng, ca rỗng và ca hủy; kiểm trạng thái bản vẽ.'], output: 'Lệnh tiện ích trả kết quả kiểm được, không để lại thay đổi khi lỗi.', check: 'Lặp lại lệnh sau khi hủy, kiểm layer hiện hành và Undo.' },
  'project.autolisp.kiem-tra-layer-ong-ho-ga': { input: 'DWG thoát nước có LINE/LWPOLYLINE ống và INSERT hố ga.', steps: ['Lập bảng layer chuẩn của ống, hố ga và đối tượng bỏ qua.', 'Lọc đối tượng theo loại rồi đối chiếu tên layer.', 'Tô hoặc liệt kê vị trí sai mà không tự ý đổi dữ liệu.'], output: 'Danh sách handle, loại và layer sai cho người kiểm tra.', check: 'Thử layer đúng, sai và đối tượng ngoài phạm vi; số lỗi phải khớp kiểm đếm tay.' },
  'project.autolisp.moc-ly-trinh-tuyen': { input: 'Tim tuyến LWPOLYLINE dài 95 m và bước cọc 20 m.', steps: ['Kiểm curve, đơn vị, bước > 0 và quy tắc cọc cuối.', 'Sinh lý trình 0, 20, 40, 60, 80; lấy điểm trên curve.', 'Tạo POINT/nhãn có lớp rõ ràng và gom một lượt Undo.'], output: 'Năm mốc và bảng lý trình–XY trên bản vẽ thử.', check: 'Đo lại vị trí trên tuyến gấp khúc, thử tuyến 10 m và chạy lại để phát hiện trùng.' },
  'project.visual-lisp-activex.quan-ly-curve-layer': { input: 'Các đường cong CAD trên nhiều layer của bản sao DWG.', steps: ['Lấy ActiveDocument và chọn curve đúng phạm vi.', 'Đọc thuộc tính/layer bằng VLA, chặn COM error.', 'Chỉ ghi khi quy tắc hợp lệ; giải phóng đối tượng.'], output: 'Curve được phân lớp theo quy tắc và có báo cáo trước/sau.', check: 'Thử curve bị khóa layer, lựa chọn rỗng và Undo.' },
  'project.visual-lisp-activex.kiem-ke-curve-tuyen': { input: 'Các curve của tuyến trên nhiều layer.', steps: ['Lọc curve và đọc chiều dài, layer, handle.', 'Gom số lượng/chiều dài theo layer với sai số xác định.', 'Xuất bảng kiểm kê và ghi lỗi đọc riêng.'], output: 'Bảng tổng chiều dài từng layer và số curve.', check: 'So một curve thẳng, một curve cong và tổng cộng bằng đo thủ công.' },
  'project.visual-lisp-activex.doi-layer-hang-loat-co-preview': { input: 'Bản sao DWG có curve thuộc layer nguồn và layer đích.', steps: ['Lọc curve, dựng bảng trước/sau để người dùng duyệt.', 'Chỉ sau xác nhận mới đổi Layer trong một nhóm Undo.', 'Ghi số thành công, bỏ qua và lỗi COM.'], output: 'Các curve được chuyển layer đúng danh sách đã duyệt.', check: 'Hủy ở màn xem trước phải giữ DWG nguyên vẹn; thử layer khóa.' },
  'project.autocad-dotnet.cad-utility-chi-doc': { input: 'DWG có LINE, polyline và bản vẽ rỗng.', steps: ['Đăng ký CommandMethod và lấy Document/Editor.', 'Trong transaction ForRead duyệt đúng loại đối tượng.', 'Báo kết quả, đóng transaction và không ghi Database.'], output: 'Bảng đọc hình học có ID, loại và kết quả kiểm tra.', check: 'So trước/sau DWG và thử bản vẽ rỗng, object đã xóa.' },
  'project.autocad-dotnet.kiem-tra-hinh-hoc-tuyen': { input: 'Polyline tim tuyến có đoạn ngắn và đỉnh trùng thử nghiệm.', steps: ['Chọn polyline và đọc các đỉnh trong transaction.', 'Tính chiều dài đoạn, phát hiện đỉnh trùng theo dung sai.', 'Gắn ObjectId và lý trình vào từng phát hiện.'], output: 'Danh sách vị trí hình học cần xem lại.', check: 'Thử tuyến sạch và tuyến lỗi; đối chiếu chỉ số đỉnh trên DWG.' },
  'project.autocad-dotnet.plugin-coc-xdata': { input: 'Các block cọc có/không có XData mã cọc.', steps: ['Đăng ký RegApp và xác định khóa dữ liệu.', 'Đọc/ghi XData qua transaction phù hợp, tránh ghi lặp.', 'Báo block thiếu mã và lưu đối chiếu ObjectId.'], output: 'Block cọc có dữ liệu đồng nhất và báo cáo thiếu.', check: 'Lưu, đóng/mở DWG rồi đọc lại; chạy lệnh lần hai không tăng dữ liệu trùng.' },
  'project.civil3d-dotnet.kiem-ke-civil-qa-qc': { input: 'DWG Civil 3D có Alignment, Surface và đối tượng trống thử nghiệm.', steps: ['Mở bằng Civil 3D đúng phiên bản SDK.', 'Lấy collection ID và mở từng đối tượng ForRead.', 'Gom loại, tên, ObjectId và lỗi đọc vào báo cáo.'], output: 'Báo cáo kiểm kê Civil theo từng loại đối tượng.', check: 'So số lượng với Toolspace; collection rỗng được báo bình thường.' },
  'project.civil3d-dotnet.qa-mang-ong': { input: 'Pipe Network có đầu ống rời và pipe thiếu kích thước.', steps: ['Lấy network được chọn, mở Pipe/Structure ForRead.', 'Đối chiếu kết nối, kích thước và ID hố ga.', 'Xuất lỗi theo loại cùng ObjectId; không tự nối mạng.'], output: 'Hai lỗi tách biệt: kết nối rời và kích thước thiếu.', check: 'So vị trí/ID từng lỗi trong Toolspace; thử mạng rỗng.' },
  'project.civil3d-dotnet.qa-profile-thiet-ke': { input: 'Alignment có Profile thiết kế và bộ quy tắc độ dốc.', steps: ['Chọn đúng Alignment/Profile theo tên hoặc ObjectId.', 'Đọc PVI, station/elevation và tính dốc từng đoạn.', 'Đánh dấu đoạn vượt ngưỡng, không sửa Profile.'], output: 'Báo cáo đoạn dốc bất thường theo station.', check: 'Đối chiếu ít nhất một PVI và đoạn dốc với Profile View.' },
  'project.dynamo-python.trac-ngang-hang-loat': { input: 'Danh sách station và tuyến Civil 3D trong bản sao.', steps: ['Đọc danh sách station và loại bỏ rỗng/trùng.', 'Lấy hình học mặt cắt qua node/API tương ứng.', 'Gom kết quả và báo station không tìm thấy.'], output: 'Tập mặt cắt theo từng station có trạng thái xử lý.', check: 'Thử station ngoài phạm vi và so một trắc ngang thủ công.' },
  'project.dynamo-python.kiem-tra-coc-tu-civil': { input: 'Danh sách cọc CSV và Alignment nguồn Civil 3D.', steps: ['Chuẩn hóa station, đơn vị và hệ tọa độ.', 'Tra tọa độ Civil tại từng station; tính sai lệch.', 'Xuất dòng đạt/không đạt cùng lý do.'], output: 'Bảng QA cọc có station, tọa độ Civil và sai lệch.', check: 'Thử cọc ngoài chiều dài tuyến, số thập phân sai và một cọc chuẩn.' },
  'project.dynamo-python.csv-coc-qa': { input: 'CSV cọc với mã, station, XY và bản ghi lỗi.', steps: ['Đọc CSV, kiểm header và kiểu số.', 'Phát hiện mã trùng, station đảo và tọa độ thiếu.', 'Xuất báo cáo sạch/lỗi kèm số dòng nguồn.'], output: 'Danh sách lỗi có thể sửa trực tiếp trong CSV gốc.', check: 'Đối chiếu số dòng thực, thử dấu phẩy thập phân và tệp rỗng.' },
  'project.gis-data-automation.cad-gis-qa': { input: 'Dữ liệu CAD/GIS cùng khu vực nhưng khác schema hoặc CRS.', steps: ['Ghi CRS, đơn vị và ánh xạ trường nguồn.', 'Chuyển tọa độ bằng phép biến đổi được khai báo.', 'Kiểm hình học, topology và số lượng trước/sau.'], output: 'Báo cáo sai lệch/đối tượng mất với khóa đối chiếu.', check: 'Kiểm vài điểm khống chế, CRS nguồn/đích và dữ liệu rỗng.' },
  'project.gis-data-automation.qa-topology-thoat-nuoc': { input: 'Mạng ống và nút hố ga GIS có đầu rời thử nghiệm.', steps: ['Chuẩn hóa CRS và snap tolerance theo dự án.', 'Kiểm điểm đầu/cuối ống gần nút và phát hiện mạng rời.', 'Xuất lớp lỗi có ID ống, nút gần nhất, khoảng cách.'], output: 'Bản đồ/lớp lỗi topology và bảng kiểm tra.', check: 'So đầu rời có chủ đích; không tự snap sai nút.' },
  'project.gis-data-automation.ban-giao-cad-gis-tuyen': { input: 'Tim tuyến và thuộc tính CAD chuẩn bị bàn giao GIS.', steps: ['Xác nhận CRS và ánh xạ layer–thuộc tính.', 'Chuyển hình học, mã tuyến và lý trình.', 'Kiểm số đối tượng, trường bắt buộc và tọa độ mốc.'], output: 'Gói dữ liệu GIS kèm báo cáo đối chiếu với DWG.', check: 'Mở kết quả trong GIS độc lập, kiểm điểm khống chế và mã tuyến.' },
};

Object.assign(projectGuides, {
  "project.autolisp.buoi-dau-loi-chao-dwg": {
    "input": "DWG mới xin-chao.dwg và file loi-chao-dwg.lsp do bạn viết.",
    "steps": [
      "Mở DWG thử, lưu tên và mở LSP trong VS Code.",
      "Save LSP, APPLOAD trong DWG hiện tại và đọc kết quả nạp.",
      "Gọi PTA_HELLO_DWG rồi lưu bản sao DWG với tên khác."
    ],
    "output": "Thông báo Xin chao kèm tên DWG hiện tại.",
    "check": "Đóng/mở DWG, APPLOAD lại rồi đối chiếu hai tên; chức năng không lưu trong DWG."
  },
  "project.visual-lisp-activex.buoi-dau-ten-ban-ve": {
    "input": "Hai DWG phieu-a và phieu-b đã lưu trên AutoCAD Windows có ActiveX.",
    "steps": [
      "Mở và lưu DWG thứ nhất; bật COM rồi lấy ptaApp, ptaDoc.",
      "Đọc Name, FullName và ghi kết quả vào phiếu.",
      "Mở DWG thứ hai; tạo lại các biến trong DWG đó và đọc thuộc tính."
    ],
    "output": "Phiếu tên và đường dẫn của hai DWG.",
    "check": "Mỗi tên khớp tab DWG; biến được khởi tạo riêng ở từng bản vẽ."
  },
  "project.autocad-dotnet.buoi-dau-ten-dwg-csharp": {
    "input": "Solution PtaFirst từ bài chuẩn bị và DWG ten-dwg-csharp.dwg.",
    "steps": [
      "Mở solution, thêm method đọc Document.Name và lưu.",
      "Build, đọc Output, kiểm tra đúng DLL và host/update.",
      "NETLOAD trong AutoCAD, gọi PTA_DWG_NAME và đọc F2."
    ],
    "output": "Tên hoặc đường dẫn của DWG hiện tại trong Command Line.",
    "check": "Ghi riêng kết quả build và chạy; đối chiếu tên với tab, lưu DWG rồi chạy lại."
  },
  "project.civil3d-dotnet.buoi-dau-kiem-ke-alignment": {
    "input": "DWG Civil 3D thử không có Alignment và project C# có references đúng năm.",
    "steps": [
      "Mở Civil 3D đầy đủ và DWG thử; kiểm collection Alignments trong Prospector.",
      "Build lệnh chỉ đọc CivilDocument và Alignment IDs.",
      "NETLOAD trong đúng Civil 3D, gọi lệnh kiểm kê và đọc số lượng."
    ],
    "output": "So Alignment: 0 trên DWG không có tuyến.",
    "check": "Đối chiếu collection rỗng trong Prospector; số 0 là kết quả hợp lệ."
  },
  "project.dynamo-python.buoi-dau-cong-hai-so": {
    "input": "Graph Dynamo for Civil 3D ở chế độ Manual.",
    "steps": [
      "Mở Civil 3D rồi Dynamo; tạo graph trống và chọn Manual.",
      "Đặt Code Block tính tổng và nối output tới Watch.",
      "Run, thay đầu vào, Run lại và lưu file DYN."
    ],
    "output": "Watch hiển thị 5 rồi 7 theo đầu vào thử.",
    "check": "Mở lại DYN và Run; so giá trị Watch, không cần thay đổi đối tượng Civil."
  },
  "project.gis-data-automation.buoi-dau-mot-diem-gpkg": {
    "input": "QGZ và GPKG chứa một điểm đã tạo từ bài chuẩn bị QGIS.",
    "steps": [
      "Mở QGIS, mở project và kiểm Layers.",
      "Kiểm feature count, CRS và Source của lớp GeoPackage.",
      "Đóng/mở project, đọc lại dữ liệu và ghi nhật ký."
    ],
    "output": "Một feature còn tồn tại trong GPKG sau mở lại.",
    "check": "Source trỏ GPKG đã lưu; CRS và số feature giữ nguyên; không chỉ dựa vào điểm nhìn thấy."
  }
});
