using System.Globalization;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using Autodesk.Civil.DatabaseServices;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

namespace PtautoDocs.CivilExamples
{
    public sealed class AlignmentInquiryCommands
    {
        [CommandMethod("PTA_STATION_OFFSET", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void QueryStationOffset()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                var options = new PromptEntityOptions("\nChọn Alignment: ");
                options.SetRejectMessage("\nCần chọn Alignment.");
                options.AddAllowedClass(typeof(Alignment), true);
                PromptEntityResult selected = editor.GetEntity(options);
                if (selected.Status != PromptStatus.OK)
                {
                    editor.WriteMessage("\nĐã kết thúc chọn Alignment.");
                    return;
                }

                if (!TryReadCoordinate(editor, "\nNhập X/easting trong hệ tọa độ bản vẽ: ", out double x)
                    || !TryReadCoordinate(editor, "\nNhập Y/northing trong hệ tọa độ bản vẽ: ", out double y))
                    return;

                string name;
                double station = 0.0;
                double offset = 0.0;
                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    var alignment = tr.GetObject(selected.ObjectId, OpenMode.ForRead) as Alignment;
                    if (alignment == null)
                    {
                        editor.WriteMessage("\nKhông đọc được Alignment đã chọn.");
                        return;
                    }
                    name = alignment.Name;
                    alignment.StationOffset(x, y, ref station, ref offset);
                }

                editor.WriteMessage(string.Format(
                    CultureInfo.InvariantCulture,
                    "\nAlignment {0}; X={1:F3}; Y={2:F3}; station từ API={3:F3}; offset={4:F3}",
                    name, x, y, station, offset));
                editor.WriteMessage("\nĐối chiếu station equations và quy ước dấu bằng inquiry của host.");
            }
            catch (Autodesk.Civil.PointNotOnEntityException)
            {
                editor.WriteMessage("\nTọa độ nằm ngoài phạm vi tra station/offset của Alignment.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất tra station/offset ({0}): {1}",
                    ex.GetType().Name, ex.Message);
            }
        }

        private static bool TryReadCoordinate(Editor editor, string message, out double value)
        {
            value = 0.0;
            var options = new PromptDoubleOptions(message)
            {
                AllowNegative = true,
                AllowZero = true,
                AllowNone = false
            };
            PromptDoubleResult result = editor.GetDouble(options);
            if (result.Status != PromptStatus.OK || !double.IsFinite(result.Value))
            {
                editor.WriteMessage("\nChưa có tọa độ số hợp lệ; kết thúc thao tác.");
                return false;
            }
            value = result.Value;
            return true;
        }
    }
}
