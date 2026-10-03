export type LessonDecision = { after: 0 | 1; question: string; no: string; yes: string; noContinues?: boolean };

/** Authored decision points, used only where the lesson actually teaches a branch. */
export const lessonDecisions: Record<string, LessonDecision[]> = {
  'lesson.autolisp.command-line-file-lsp': [
    { after: 1, question: 'AutoCAD đã nạp đúng file LSP vừa lưu?', no: 'Dừng, kiểm đường dẫn rồi nạp lại bằng APPLOAD/load.', yes: 'Gọi tên lệnh và đọc phản hồi.' }
  ],
  'lesson.autolisp.vlide-ide-extension-debug': [
    { after: 0, question: 'File đã hết lỗi cú pháp và sẵn sàng nạp?', no: 'Sửa vị trí được đánh dấu rồi lưu; kiểm tra lại trước khi nạp.', yes: 'Nạp đúng file đã lưu và kiểm tra phản hồi trong Command Line.' }
  ],
  'lesson.autolisp.chuoi-so-va-kiem-tra-du-lieu': [
    { after: 0, question: 'Chuỗi nhập chuyển được thành số hợp lệ?', no: 'Báo lỗi và yêu cầu nhập lại; chưa tính hình học.', yes: 'Tính bằng số đã kiểm tra.' }
  ],
  'lesson.autolisp.co-kiem-tra-ly-trinh': [
    { after: 0, question: 'Tuyến hỗ trợ đo và bước cọc > 0?', no: 'Dừng trước khi tạo POINT.', yes: 'Sinh station trong phạm vi chiều dài tuyến.' }
  ],
  'lesson.autolisp.dcl-va-vong-doi-dialog': [
    { after: 0, question: 'load_dialog và new_dialog thành công?', no: 'Báo lỗi, unload nếu đã nạp và không sửa DWG.', yes: 'Đăng ký action_tile rồi mở start_dialog.' },
    { after: 1, question: 'status = 1 và dữ liệu tile hợp lệ?', no: 'Cancel hoặc dữ liệu lỗi: unload_dialog, giữ kết quả nil.', yes: 'Chuyển dữ liệu đã kiểm cho logic CAD sau dialog.', noContinues: true }
  ],
  'lesson.autolisp.entmake-entmod-an-toan': [
    { after: 0, question: 'Entity và mã DXF phù hợp thao tác?', no: 'Dừng; không gọi entmod/entmake với dữ liệu thiếu.', yes: 'Tạo mới hoặc sửa entity đúng nhánh.' }
  ],
  'lesson.autolisp.xdata-xrecord-va-attribute': [
    { after: 0, question: 'Đã xác định nơi lưu và vòng đời dữ liệu?', no: 'Làm rõ dữ liệu cần hiển thị, gắn đối tượng hay lưu trong từ điển.', yes: 'Chọn Attribute, XData hoặc Xrecord theo nhu cầu.' }
  ],
  'lesson.visual-lisp-activex.reactor-va-vong-doi': [
    { after: 1, question: 'Callback có đang tự gây lại cùng sự kiện?', no: 'Xử lý tối thiểu rồi thoát callback.', yes: 'Chặn tái nhập và chuyển việc nặng ra ngoài callback.' }
  ],
  'lesson.visual-lisp-activex.gioi-han-com-va-chon-net': [
    { after: 0, question: 'ActiveX có API và nền tảng phù hợp?', no: 'Đánh giá .NET hoặc API khác và host cần thiết.', yes: 'Giữ ActiveX với kiểm tra lỗi COM.' }
  ],
  'lesson.autocad-dotnet.reference-build-debug': [
    { after: 0, question: 'SDK, framework và host cùng thế hệ?', no: 'Sửa reference/build trước khi NETLOAD.', yes: 'Nạp DLL và debug trong host tương ứng.' }
  ],
  'lesson.autocad-dotnet.tao-entity-transaction': [
    { after: 1, question: 'Entity đã được append và đăng ký với transaction?', no: 'Không Commit; kiểm BlockTableRecord và AddNewlyCreatedDBObject.', yes: 'Commit và kiểm DWG/Undo.' }
  ],
  'lesson.civil3d-dotnet.dependency-rebuild-validation': [
    { after: 0, question: 'Đối tượng phụ thuộc đã rebuild/refresh?', no: 'Đọc trạng thái cũ; yêu cầu refresh trước khi QA.', yes: 'Kiểm kết quả và nguồn trong cùng bản vẽ.' }
  ],
  'lesson.civil3d-dotnet.profile-pvi-duong-do': [
    { after: 0, question: 'Hai PVI có station khác nhau?', no: 'Bỏ phép chia dốc và báo đoạn dữ liệu lỗi.', yes: 'Tính dốc từng đoạn theo chênh cao/chênh station.' }
  ],
  'lesson.dynamo-python.batch-report-kiem-soat': [
    { after: 0, question: 'Record đầu vào đủ trường bắt buộc?', no: 'Đưa vào danh sách lỗi kèm số dòng.', yes: 'Xử lý record và ghi trạng thái vào báo cáo.' }
  ],
  'lesson.gis-data-automation.vn2000-crs-reprojection': [
    { after: 0, question: 'CRS nguồn có chứng cứ về datum, múi, kinh tuyến và đơn vị?', no: 'Dừng; không đoán EPSG hoặc chuyển tọa độ.', yes: 'Gán CRS nguồn rồi chuyển sang CRS đích.' },
    { after: 1, question: 'Điểm khống chế đạt sai số chấp nhận?', no: 'Kiểm lại tham số và thứ tự trục; không bàn giao.', yes: 'Chấp nhận bộ dữ liệu đã đối chiếu.' }
  ],
  'lesson.gis-data-automation.topology-va-bao-cao-loi': [
    { after: 1, question: 'Đầu ống nằm trong tolerance của nút?', no: 'Đánh dấu đầu rời với ID và khoảng cách.', yes: 'Giữ kết nối hợp lệ trong kết quả QA.' }
  ]
};
