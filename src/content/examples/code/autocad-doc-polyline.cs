using System.Globalization;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

namespace PtautoDocs.CadExamples
{
    public sealed class PolylineInspectionCommands
    {
        [CommandMethod("PTA_POLYLINE_INFO", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void InspectPolyline()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                var options = new PromptEntityOptions("\nChọn lightweight Polyline: ");
                options.SetRejectMessage("\nCần chọn đối tượng Polyline (LWPOLYLINE).");
                options.AddAllowedClass(typeof(Polyline), true);
                PromptEntityResult selected = editor.GetEntity(options);
                if (selected.Status != PromptStatus.OK)
                {
                    editor.WriteMessage("\nĐã kết thúc chọn Polyline.");
                    return;
                }

                string report;
                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    var polyline = tr.GetObject(selected.ObjectId, OpenMode.ForRead) as Polyline;
                    if (polyline == null)
                    {
                        editor.WriteMessage("\nObject được chọn không đọc được như Polyline.");
                        return;
                    }
                    report = string.Format(
                        CultureInfo.InvariantCulture,
                        "\nLayer: {0}; số đỉnh: {1}; Closed: {2}; chiều dài: {3:F3}",
                        polyline.Layer, polyline.NumberOfVertices,
                        polyline.Closed ? "Có" : "Không", polyline.Length);

                    if (polyline.Closed && polyline.NumberOfVertices >= 3)
                    {
                        report += string.Format(
                            CultureInfo.InvariantCulture,
                            "\nDiện tích từ API: {0:F3} đơn vị bản vẽ bình phương",
                            polyline.Area);
                    }
                    else
                    {
                        report += "\nKhông báo diện tích: Polyline chưa đóng hoặc thiếu đỉnh.";
                    }
                }
                editor.WriteMessage(report);
                editor.WriteMessage("\nLệnh chỉ đọc; không đóng hay chỉnh sửa Polyline.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất đọc Polyline ({0}): {1}",
                    ex.GetType().Name, ex.Message);
            }
        }
    }
}
