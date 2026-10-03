using System;
using System.Globalization;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

namespace PtautoDocs.CadExamples
{
    public sealed class XDataInspectionCommands
    {
        [CommandMethod("PTA_XDATA_READ", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void ReadApplicationXData()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                PromptEntityResult selected = editor.GetEntity("\nChọn entity cần đọc XData: ");
                if (selected.Status != PromptStatus.OK)
                {
                    editor.WriteMessage("\nĐã kết thúc chọn entity.");
                    return;
                }

                var appOptions = new PromptStringOptions(
                    "\nTên Registered Application (không có khoảng trắng): ")
                {
                    AllowSpaces = false
                };
                PromptResult appResult = editor.GetString(appOptions);
                if (appResult.Status != PromptStatus.OK
                    || string.IsNullOrWhiteSpace(appResult.StringResult))
                {
                    editor.WriteMessage("\nChưa có tên app hợp lệ; kết thúc thao tác.");
                    return;
                }

                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    var entity = tr.GetObject(selected.ObjectId, OpenMode.ForRead) as Entity;
                    if (entity == null)
                    {
                        editor.WriteMessage("\nObject được chọn không phải Entity.");
                        return;
                    }

                    using (ResultBuffer data = entity.GetXDataForApplication(appResult.StringResult))
                    {
                        if (data == null)
                        {
                            editor.WriteMessage("\nEntity không có XData cho app đã nhập.");
                            return;
                        }
                        foreach (TypedValue item in data)
                        {
                            editor.WriteMessage("\nDXF {0}: {1}",
                                item.TypeCode,
                                Convert.ToString(item.Value, CultureInfo.InvariantCulture));
                        }
                    }
                }
                editor.WriteMessage("\nĐã đọc XData; không tạo RegApp hoặc thay payload.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất đọc XData ({0}): {1}",
                    ex.GetType().Name, ex.Message);
            }
        }
    }
}
