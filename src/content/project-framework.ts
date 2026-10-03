/** Project-specific teaching notes. These describe intended workflows, not host-verified results. */
export type ProjectFramework = {
  workflow: string; ui: string; ux: string; data: string; state: string;
  validation: string; geometry: string; undo: string; integration: string;
  gate: string; reject: string; visual: 'report' | 'layers' | 'station' | 'curve' | 'metadata' | 'profile' | 'network' | 'graph' | 'map' | 'terminal' | 'dialog';
};

export const projectFramework: Record<string, ProjectFramework> = {
  'project.autolisp.cad-utility-bao-cao': {
    workflow: 'Chọn LINE → đọc dữ liệu WCS → tính chiều dài → ghi từng hàng CSV → đối chiếu với DWG.',
    ui: 'Lệnh hỏi tập LINE và đường dẫn CSV; Command Line báo số đối tượng đã xuất hoặc lý do dừng.',
    ux: 'Cho xem số LINE hợp lệ trước khi ghi; khi hủy chọn tệp, không để lại CSV dở.',
    data: 'Mỗi bản ghi giữ handle, layer, điểm đầu/cuối WCS và chiều dài 3D; CSV cần escape tên có dấu phẩy.',
    state: 'Giữ đơn vị bản vẽ, tập chọn và handle nguồn; file xuất chỉ được mở sau khi dữ liệu đã hợp lệ.',
    validation: 'Chỉ nhận LINE; kiểm lựa chọn rỗng, đơn vị và đường dẫn ghi được trước khi tạo file.',
    geometry: 'Tính chiều dài 3D từ hai đầu WCS; không thay bằng khoảng cách XY khi LINE có Z.',
    undo: 'Lệnh chỉ đọc DWG; đóng file ở mọi nhánh lỗi và xóa tệp chưa hoàn chỉnh nếu thao tác ghi thất bại.',
    integration: 'Dùng ssget và entget để đọc LINE trong DWG; báo handle để người dùng truy ngược đối tượng.',
    gate: 'LINE và đường dẫn xuất hợp lệ?', reject: 'Báo lỗi, không tạo CSV', visual: 'report'
  },
  'project.autolisp.cad-utility': {
    workflow: 'Xác định hợp đồng lệnh → chọn dữ liệu → tách hàm đọc/xử lý → chạy ca đúng, rỗng và hủy.',
    ui: 'Một lệnh c: rõ tên, thông báo ngắn về đầu vào và kết quả ở Command Line.',
    ux: 'Người dùng biết đối tượng nào được xử lý; nhánh hủy kết thúc sạch và có thể chạy lại ngay.',
    data: 'Selection set chuyển thành danh sách giá trị đã đọc; hàm xử lý không giữ entity name ngoài phạm vi cần thiết.',
    state: 'Các biến hệ thống và layer hiện hành được ghi trước khi đổi, rồi phục hồi khi hoàn tất hoặc lỗi.',
    validation: 'Kiểm loại entity, lựa chọn rỗng và nil trước khi gọi hàm tính hoặc sửa.',
    geometry: 'Lõi tính toán tách khỏi c:; dự án khung chưa áp một công thức hình học cố định.',
    undo: 'Nhóm thao tác sửa trong một lượt Undo; *error* phục hồi biến và đóng tài nguyên khi hủy.',
    integration: 'APPLOAD nạp .lsp; c: là điểm vào từ AutoCAD Command Line; thử trên bản sao DWG.',
    gate: 'Đầu vào đúng hợp đồng?', reject: 'Dừng và phục hồi trạng thái', visual: 'metadata'
  },
  'project.autolisp.kiem-tra-layer-ong-ho-ga': {
    workflow: 'Lập bảng layer chuẩn → lọc LINE/LWPOLYLINE và INSERT → so layer → liệt kê lỗi.',
    ui: 'Lệnh cho chọn phạm vi bản vẽ và in số ống, hố ga đúng/sai theo quy tắc.',
    ux: 'Báo handle và loại đối tượng sai để người kiểm tra tìm đúng vị trí; không đổi layer âm thầm.',
    data: 'Bảng quy tắc loại entity–layer; mỗi phát hiện lưu handle, loại và layer đang có.',
    state: 'Quy tắc layer phải được chốt trước khi quét; đối tượng ngoài phạm vi được bỏ qua có ghi số lượng.',
    validation: 'Kiểm INSERT là hố ga theo tên block và loại curve là ống trước khi đối chiếu layer.',
    geometry: 'Đọc điểm đặt block hoặc đoạn ống để định vị lỗi; không tính lại hình học mạng.',
    undo: 'Bản kiểm tra chỉ đọc; nhánh hủy không thay đổi DWG nên không tạo Undo thừa.',
    integration: 'ssget theo loại, entget lấy DXF layer/handle và block name; kết quả tham chiếu lại DWG.',
    gate: 'Đối tượng nằm trong phạm vi quy tắc?', reject: 'Bỏ qua, ghi số ngoài phạm vi', visual: 'layers'
  },
  'project.autolisp.moc-ly-trinh-tuyen': {
    workflow: 'Chọn tim tuyến → kiểm bước cọc → sinh lý trình → lấy điểm trên curve → tạo mốc và nhãn.',
    ui: 'Lệnh hỏi tuyến và bước cọc; trước khi vẽ cho biết số mốc dự kiến.',
    ux: 'Quy tắc cọc cuối rõ ràng; người dùng có thể hủy trước khi ghi và hoàn tác cả lượt tạo mốc.',
    data: 'Danh sách station và điểm XY tương ứng; giữ đơn vị DWG và ID tuyến nguồn.',
    state: 'Tuyến, bước cọc, layer mốc và chính sách chạy lại được chốt trước khi tạo POINT.',
    validation: 'Chỉ nhận curve hỗ trợ đo khoảng cách; bước > 0; tuyến ngắn và cọc cuối không được tạo mốc trùng.',
    geometry: 'Lấy điểm tại khoảng cách dọc polyline, không nội suy theo khoảng cách đường thẳng từ A đến B.',
    undo: 'Gom POINT/nhãn trong một lượt Undo và xử lý lỗi để không còn nửa bộ mốc.',
    integration: 'Dùng curve API/entmake phù hợp host AutoCAD; kiểm marker và station trên DWG thử.',
    gate: 'Curve hợp lệ và bước cọc > 0?', reject: 'Báo lý do, không tạo mốc', visual: 'station'
  },
  'project.visual-lisp-activex.quan-ly-curve-layer': {
    workflow: 'Chọn curve → đọc VLA Layer → đối chiếu quy tắc → ghi layer khi hợp lệ → báo trước/sau.',
    ui: 'Lệnh cho chọn curve và xem danh sách layer cần đổi trước khi xác nhận.',
    ux: 'Bỏ qua đối tượng không được hỗ trợ và báo lỗi COM riêng; không coi chọn rỗng là thành công.',
    data: 'Giữ handle, ObjectName, layer trước và layer đích cho từng curve.',
    state: 'ActiveDocument và tập curve phải thuộc bản vẽ hiện hành; layer khóa hoặc xref cần được nhận diện.',
    validation: 'Kiểm property Layer có thể ghi và layer đích tồn tại trước khi gọi setter.',
    geometry: 'Chỉ phân lớp; tọa độ và chiều dài curve phải giữ nguyên.',
    undo: 'Nhóm các lần ghi trong Undo của DWG; khi lỗi COM, báo phần đã xử lý và phần chưa xử lý.',
    integration: 'vl-load-com, chuyển ename sang VLA object, đọc/ghi property trong AutoCAD Windows hỗ trợ ActiveX.',
    gate: 'Curve và Layer có thể sửa?', reject: 'Bỏ qua và báo handle', visual: 'layers'
  },
  'project.visual-lisp-activex.kiem-ke-curve-tuyen': {
    workflow: 'Lọc curve → đọc chiều dài/layer/handle → cộng theo layer → xuất bảng kiểm kê.',
    ui: 'Lệnh hiển thị số curve đọc được và nơi xem bảng theo layer.',
    ux: 'Curve lỗi đọc không biến mất khỏi tổng im lặng; báo số lỗi và handle để kiểm tra.',
    data: 'Bản ghi gồm handle, ObjectName, layer, chiều dài và trạng thái đọc; bảng tổng hợp theo layer.',
    state: 'Đơn vị chiều dài và phạm vi chọn phải được giữ nhất quán xuyên suốt lần kiểm kê.',
    validation: 'Chỉ tính curve có Length/curve API phù hợp; bỏ qua đối tượng không hỗ trợ có ghi lý do.',
    geometry: 'Lấy chiều dài theo curve thực, không dùng khoảng cách giữa hai đầu cho arc/polyline cong.',
    undo: 'Chỉ đọc DWG; dọn đối tượng COM và file xuất khi thất bại.',
    integration: 'Dùng vlax-curve hoặc VLA property trong AutoCAD; đối chiếu một curve thẳng và một curve cong.',
    gate: 'Curve trả được chiều dài?', reject: 'Ghi lỗi đọc, không cộng vào tổng', visual: 'curve'
  },
  'project.visual-lisp-activex.doi-layer-hang-loat-co-preview': {
    workflow: 'Chọn curve → dựng preview layer trước/sau → xác nhận → đổi layer → báo kết quả.',
    ui: 'Bảng xem trước có handle, layer nguồn và đích; nút OK/Cancel rõ ràng.',
    ux: 'Cancel tại preview giữ DWG nguyên; sau OK người dùng thấy thành công, bỏ qua và lỗi riêng.',
    data: 'Danh sách thay đổi dự kiến là bản snapshot; không đọc lại layer nguồn sau khi bắt đầu sửa.',
    state: 'Lưu tập được duyệt và layer đích; khóa layer/xref có thể làm một số đối tượng không ghi được.',
    validation: 'Chỉ cho xác nhận khi layer đích hợp lệ và property ghi được.',
    geometry: 'Không đổi hình học; kiểm tọa độ và chiều dài trước/sau trên mẫu thử.',
    undo: 'Một nhóm Undo cho lần đổi layer; lỗi giữa chừng được báo rõ để người dùng Undo nếu cần.',
    integration: 'VLA put Layer chỉ sau khi xác nhận; đối tượng thuộc ActiveDocument hiện hành.',
    gate: 'Người dùng xác nhận và layer ghi được?', reject: 'Giữ nguyên DWG, báo lý do', visual: 'layers'
  },
  'project.autocad-dotnet.cad-utility-chi-doc': {
    workflow: 'NETLOAD plugin → gọi lệnh → duyệt object ForRead → tạo snapshot → báo cáo.',
    ui: 'CommandMethod có tên rõ; Editor in số object và loại được đọc.',
    ux: 'Bản vẽ rỗng trả kết quả rỗng hợp lệ; không hiện lỗi giả khi người dùng hủy chọn.',
    data: 'Snapshot lưu ObjectId/handle, loại và giá trị hình học; không giữ DBObject đã dispose.',
    state: 'Document và Database đúng bản vẽ hiện hành; transaction đóng trước khi hiển thị báo cáo.',
    validation: 'Kiểm ObjectId hợp lệ, không bị xóa và đúng loại trước khi ép kiểu.',
    geometry: 'Đọc chiều dài hoặc tọa độ đã lưu; không sửa entity khi lệnh chỉ đọc.',
    undo: 'Không commit thay đổi; transaction đọc được dispose và DWG không có bước Undo mới.',
    integration: 'Dùng AutoCAD .NET SDK đúng phiên bản, CommandMethod, Editor và Transaction trong host AutoCAD.',
    gate: 'ObjectId còn hợp lệ và đúng loại?', reject: 'Bỏ qua, báo ID', visual: 'report'
  },
  'project.autocad-dotnet.kiem-tra-hinh-hoc-tuyen': {
    workflow: 'Chọn Polyline → duyệt đỉnh → đo đoạn → so dung sai → liệt kê vị trí lỗi.',
    ui: 'Lệnh hỏi tuyến và dung sai, trả danh sách đỉnh/đoạn cần xem lại.',
    ux: 'Mỗi lỗi gắn ObjectId và chỉ số đỉnh để tìm lại trên DWG; tuyến sạch được báo rõ.',
    data: 'Danh sách đỉnh có thứ tự, độ dài từng đoạn, dung sai và phát hiện.',
    state: 'Hệ tọa độ, đơn vị và dung sai dùng một giá trị nhất quán trong toàn bộ lần chạy.',
    validation: 'Kiểm polyline đủ đỉnh, dung sai dương và đỉnh trùng trước khi tính hướng đoạn.',
    geometry: 'Tính chiều dài theo từng segment, nhận diện đỉnh trùng theo khoảng cách và số thứ tự.',
    undo: 'Chỉ đọc; transaction ForRead đóng sau khi snapshot dữ liệu.',
    integration: 'Editor.GetEntity chọn Polyline; Transaction mở ForRead; ObjectId giữ liên kết với DWG.',
    gate: 'Polyline đủ đỉnh và dung sai hợp lệ?', reject: 'Báo dữ liệu lỗi, không tính tiếp', visual: 'curve'
  },
  'project.autocad-dotnet.plugin-coc-xdata': {
    workflow: 'Chọn block cọc → kiểm RegApp/XData → thêm mã thiếu → lưu → mở lại để kiểm.',
    ui: 'Lệnh cho chọn block và báo số mã có, thiếu, đã cập nhật.',
    ux: 'Chạy lại không tạo mã trùng; người dùng xem được block nào bị bỏ qua.',
    data: 'Mỗi block có ObjectId, mã cọc và TypedValue XData theo RegApp đã đăng ký.',
    state: 'RegApp phải tồn tại trước khi ghi; trạng thái mã cũ/mới được chốt trong transaction.',
    validation: 'Kiểm block đúng loại, mã không rỗng và XData hiện có trước khi thêm.',
    geometry: 'Giữ nguyên vị trí block; dữ liệu XData không thay đổi tọa độ cọc.',
    undo: 'Commit chỉ khi toàn bộ bản ghi hợp lệ; không Commit thì transaction rollback thay đổi chưa chấp nhận.',
    integration: 'Dùng Database/Transaction của AutoCAD .NET; thử Save, Close, Open và đọc lại XData.',
    gate: 'Block và mã cọc hợp lệ?', reject: 'Không ghi XData, báo ObjectId', visual: 'metadata'
  },
  'project.civil3d-dotnet.kiem-ke-civil-qa-qc': {
    workflow: 'Mở DWG trong Civil 3D → lấy collection ID → đọc ForRead → nhóm loại và lỗi.',
    ui: 'Lệnh in số Alignment, Surface và đối tượng đọc lỗi theo từng nhóm.',
    ux: 'Collection rỗng được báo bình thường; kết quả có ObjectId để đối chiếu Toolspace.',
    data: 'Snapshot gồm loại Civil, tên, ObjectId và trạng thái đọc.',
    state: 'CivilDocument và Database phải thuộc cùng DWG; host/SDK đúng thế hệ API.',
    validation: 'Kiểm collection rỗng, ID bị xóa và kiểu đối tượng trước khi đọc thuộc tính.',
    geometry: 'Bài kiểm kê chỉ nhận diện đối tượng; không dựng lại Alignment hay Surface.',
    undo: 'Transaction ForRead không ghi; dispose đúng phạm vi, không tạo thay đổi DWG.',
    integration: 'Chạy trong Civil 3D đầy đủ với AeccDbMgd phù hợp; Object Enabler không thay host Civil.',
    gate: 'Host Civil và ObjectId hợp lệ?', reject: 'Báo mục không đọc được', visual: 'report'
  },
  'project.civil3d-dotnet.qa-mang-ong': {
    workflow: 'Chọn Pipe Network → đọc Pipe/Structure → kiểm kết nối và kích thước → xuất lớp lỗi.',
    ui: 'Báo số đầu rời, pipe thiếu kích thước và ObjectId liên quan.',
    ux: 'Tách lỗi kết nối khỏi lỗi kích thước để người thiết kế xử lý đúng nguyên nhân.',
    data: 'Quan hệ pipe–structure, ObjectId, kích thước và trạng thái mỗi đầu ống.',
    state: 'Network nguồn, đơn vị và tiêu chí kết nối được cố định trước khi quét.',
    validation: 'Kiểm network rỗng, structure bị thiếu và kích thước không hợp lệ.',
    geometry: 'Đối chiếu đầu pipe với structure kết nối; không tự kéo hoặc snap đầu ống.',
    undo: 'Chỉ đọc và báo lỗi; không sửa network nên không tạo Undo mới.',
    integration: 'Mở đối tượng Civil ForRead trong transaction của AutoCAD/Civil 3D đúng phiên bản.',
    gate: 'Pipe Network và các đối tượng cần kiểm đọc được?', reject: 'Báo mạng rỗng hoặc ObjectId không đọc được', visual: 'network'
  },
  'project.civil3d-dotnet.qa-profile-thiet-ke': {
    workflow: 'Chọn Alignment/Profile → đọc PVI → tính dốc đoạn → so ngưỡng → báo station.',
    ui: 'Lệnh cho chọn Profile thiết kế và ngưỡng độ dốc, báo từng đoạn vượt.',
    ux: 'Mỗi dòng kết quả có station đầu/cuối và dốc đo được để kiểm trong Profile View.',
    data: 'PVI theo station/elevation, ngưỡng và danh sách đoạn giữa PVI liên tiếp.',
    state: 'Profile phải thuộc Alignment đã chọn; đơn vị station/elevation không đổi giữa phép tính.',
    validation: 'Kiểm PVI đủ hai điểm và khoảng station khác 0 trước khi chia.',
    geometry: 'Độ dốc = chênh cao / chênh station; báo dấu và trị số theo quy ước dự án.',
    undo: 'Chỉ đọc Profile; transaction ForRead đóng sau khi lấy snapshot PVI.',
    integration: 'Dùng CivilDocument lấy Profile/Alignment và đối chiếu kết quả bằng Profile View trong Civil 3D.',
    gate: 'PVI đủ và station tăng?', reject: 'Báo Profile lỗi, không chia dốc', visual: 'profile'
  },
  'project.dynamo-python.trac-ngang-hang-loat': {
    workflow: 'Nhập danh sách station → loại trùng → lấy mặt cắt → ghép trạng thái theo từng station.',
    ui: 'Dynamo graph nhận station và Civil object; Watch hiển thị kết quả/lỗi theo hàng.',
    ux: 'Station ngoài phạm vi có lý do riêng, không làm hỏng cả lô.',
    data: 'List station có thứ tự, ID tuyến/mặt cắt và record kết quả tương ứng.',
    state: 'List@Level/lacing phải giữ ghép một station với một kết quả; Object Binding được kiểm khi chạy lại.',
    validation: 'Kiểm station hợp lệ, không trùng và trong phạm vi Alignment.',
    geometry: 'Lấy Section theo station bằng node/API đúng host; không nội suy mặt cắt ngoài dữ liệu.',
    undo: 'Xem trước dữ liệu trước khi tạo object; nếu graph ghi vào Civil, chạy trên DWG thử và kiểm Undo/Binding.',
    integration: 'Dynamo chạy trong Civil 3D; node Civil và Python engine phải tương thích phiên bản host.',
    gate: 'Station nằm trong phạm vi tuyến?', reject: 'Ghi lỗi cho station đó', visual: 'graph'
  },
  'project.dynamo-python.kiem-tra-coc-tu-civil': {
    workflow: 'Đọc cọc CSV → chuẩn hóa station/đơn vị → tra tọa độ Civil → đo sai lệch → xuất QA.',
    ui: 'Graph nhận CSV, Alignment và dung sai; Watch xem các cọc đạt/không đạt.',
    ux: 'Cọc lỗi giữ số dòng gốc; người dùng biết phải sửa CSV hay kiểm lại tuyến.',
    data: 'Mã cọc, station, XY nguồn, XY Civil, sai lệch và trạng thái từng dòng.',
    state: 'CRS, đơn vị, Alignment và dung sai phải được xác nhận trước khi so tọa độ.',
    validation: 'Kiểm station ngoài tuyến, số không đọc được, mã trùng và tọa độ thiếu.',
    geometry: 'Lấy XY theo station/offset trên Alignment rồi tính khoảng cách với cọc CSV.',
    undo: 'Pipeline kiểm tra chỉ đọc Civil; file báo cáo ghi sang tệp mới và giữ CSV gốc.',
    integration: 'Chạy Dynamo trong Civil 3D với node/API tuyến đúng phiên bản; so một cọc trong bản vẽ.',
    gate: 'Station và XY đọc được?', reject: 'Ghi lỗi theo dòng CSV', visual: 'station'
  },
  'project.dynamo-python.csv-coc-qa': {
    workflow: 'Đọc CSV → kiểm header/kiểu → phát hiện trùng và đảo station → ghi báo cáo lỗi.',
    ui: 'Graph có input đường dẫn CSV và Watch hiển thị số dòng đạt/lỗi.',
    ux: 'Lỗi có số dòng nguồn và tên cột để người dùng sửa trực tiếp.',
    data: 'Record mã, station, XY, số dòng, danh sách lỗi và dữ liệu sạch.',
    state: 'Delimiter, dấu thập phân và encoding được xác định trước khi parse cả file.',
    validation: 'Kiểm header, file rỗng, mã trùng, station đảo và tọa độ thiếu.',
    geometry: 'Không tính hình học mới; chỉ kiểm cột tọa độ có thể đọc và đơn vị nhất quán.',
    undo: 'Không sửa CSV gốc; xuất báo cáo sang file mới để có thể bỏ kết quả và chạy lại.',
    integration: 'Phần parse có thể chạy độc lập Python; chỉ dùng AutoCAD/Civil khi nối dữ liệu sạch vào bản vẽ.',
    gate: 'Header và dữ liệu đọc được?', reject: 'Dừng parse, báo cột/dòng lỗi', visual: 'report'
  },
  'project.gis-data-automation.cad-gis-qa': {
    workflow: 'Kiểm CRS/schema nguồn → chuyển đổi → so khóa đối chiếu → kiểm hình học và số lượng.',
    ui: 'Bảng ánh xạ trường và báo cáo lỗi theo lớp dữ liệu, khóa đối tượng.',
    ux: 'Người dùng thấy rõ đối tượng mất, sai tọa độ hoặc sai thuộc tính, không chỉ một tổng lỗi.',
    data: 'Feature nguồn/đích, CRS, schema, khóa ổn định và bảng sai lệch.',
    state: 'CRS nguồn/đích và phép biến đổi được ghi vào hồ sơ trước khi xử lý.',
    validation: 'Kiểm CRS có chứng cứ, trường bắt buộc, hình học hợp lệ và số lượng trước/sau.',
    geometry: 'Biến đổi tọa độ bằng phép CRS được khai báo; so điểm khống chế thay vì chỉ nhìn bản đồ.',
    undo: 'Ghi lớp đích mới theo giai đoạn; nếu QA không đạt, bỏ gói xuất và giữ nguồn nguyên.',
    integration: 'DWG là nguồn CAD; GIS xử lý dữ liệu đã xuất, không giả định script GIS chạy trong AutoCAD.',
    gate: 'CRS và schema đã xác minh?', reject: 'Dừng chuyển đổi, yêu cầu hồ sơ nguồn', visual: 'map'
  },
  'project.gis-data-automation.qa-topology-thoat-nuoc': {
    workflow: 'Nạp ống/nút → chuẩn hóa CRS → đo đầu ống–nút → phát hiện đầu rời → xuất lớp lỗi.',
    ui: 'Bản đồ đánh dấu đầu rời, bảng có ID ống, nút gần nhất và khoảng cách.',
    ux: 'Người kiểm tra bấm một lỗi để thấy vị trí và không tự snap sai nút.',
    data: 'Feature ống, hố ga, ID, topology và tolerance có đơn vị.',
    state: 'CRS và snap tolerance cố định cho lượt QA; giữ cả hình học trước/sau chuyển đổi.',
    validation: 'Kiểm CRS, ID trùng, nút thiếu và khoảng cách đầu ống tới nút.',
    geometry: 'Tính khoảng cách trong hệ tọa độ có đơn vị thích hợp; không dùng độ kinh/vĩ làm mét.',
    undo: 'QA chỉ tạo lớp lỗi mới; lớp ống/nút nguồn không bị chỉnh sửa.',
    integration: 'Bản đồ lỗi có thể đối chiếu với DWG theo ID; phép QA GIS chạy ngoài AutoCAD.',
    gate: 'CRS, tolerance và lớp ống/nút đủ để đối chiếu?', reject: 'Dừng kiểm topology, ghi dữ liệu nguồn còn thiếu', visual: 'network'
  },
  'project.gis-data-automation.ban-giao-cad-gis-tuyen': {
    workflow: 'Chốt CRS/layer → ánh xạ thuộc tính → xuất tuyến → kiểm mã, mốc và số lượng.',
    ui: 'Bảng ánh xạ layer–trường và báo cáo trước/sau cho từng tuyến.',
    ux: 'Người nhận mở gói GIS độc lập, đọc được mã tuyến, CRS và vị trí mốc mà không cần DWG.',
    data: 'Polyline tuyến, mã tuyến, station, CRS, trường bắt buộc và khóa đối chiếu.',
    state: 'Phiên bản DWG nguồn, ánh xạ schema và CRS đích được cố định trong gói bàn giao.',
    validation: 'Kiểm số tuyến, trường bắt buộc, mã trùng và sai lệch điểm khống chế.',
    geometry: 'Chuyển hình học tuyến theo CRS xác nhận; không gán EPSG phỏng đoán.',
    undo: 'Xuất gói mới và chỉ bàn giao khi QA đạt; giữ bản DWG và gói trước để rollback.',
    integration: 'AutoCAD cung cấp tuyến/layer nguồn; GIS nhận gói dữ liệu và kiểm độc lập.',
    gate: 'CRS, mã tuyến và điểm khống chế đạt?', reject: 'Giữ bản nguồn, sửa ánh xạ rồi xuất lại', visual: 'map'
  }
};
