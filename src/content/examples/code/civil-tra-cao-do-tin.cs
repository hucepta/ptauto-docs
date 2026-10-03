using System.Globalization;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using Autodesk.Civil.DatabaseServices;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

namespace PtautoDocs.CivilExamples
{
    public sealed class SurfaceInquiryCommands
    {
        [CommandMethod("PTA_TIN_ELEVATION", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void QueryTinElevation()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                var options = new PromptEntityOptions("\nChọn TinSurface: ");
                options.SetRejectMessage("\nCần chọn TinSurface.");
                options.AddAllowedClass(typeof(TinSurface), true);
                PromptEntityResult selected = editor.GetEntity(options);
                if (selected.Status != PromptStatus.OK)
                {
                    editor.WriteMessage("\nĐã kết thúc chọn TinSurface.");
                    return;
                }

                if (!TryReadCoordinate(editor, "\nNhập X trong hệ tọa độ bản vẽ: ", out double x)
                    || !TryReadCoordinate(editor, "\nNhập Y trong hệ tọa độ bản vẽ: ", out double y))
                    return;

                string name;
                double elevation;
                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    var surface = tr.GetObject(selected.ObjectId, OpenMode.ForRead) as TinSurface;
                    if (surface == null)
                    {
                        editor.WriteMessage("\nKhông đọc được TinSurface đã chọn.");
                        return;
                    }
                    name = surface.Name;
                    elevation = surface.FindElevationAtXY(x, y);
                }

                editor.WriteMessage(string.Format(
                    CultureInfo.InvariantCulture,
                    "\nTinSurface {0}; X={1:F3}; Y={2:F3}; cao độ={3:F3} đơn vị bản vẽ",
                    name, x, y, elevation));
                editor.WriteMessage("\nLệnh không đổi definition hoặc rebuild surface.");
            }
            catch (Autodesk.Civil.PointNotOnEntityException)
            {
                editor.WriteMessage("\nĐiểm nằm ngoài miền tra cao độ của surface.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất tra cao độ TIN ({0}): {1}",
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
