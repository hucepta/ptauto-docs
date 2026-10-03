using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;

namespace PtautoDocs.CadExamples
{
    public sealed class LineLayerCommands
    {
        private sealed class LineSnapshot
        {
            public string Layer { get; }
            public double Length { get; }

            public LineSnapshot(string layer, double length)
            {
                Layer = layer;
                Length = length;
            }
        }

        [CommandMethod("PTA_LINE_SUMMARY", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void SummarizeSelectedLines()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                var filter = new SelectionFilter(new[]
                {
                    new TypedValue((int)DxfCode.Start, "LINE")
                });
                var options = new PromptSelectionOptions
                {
                    MessageForAdding = "\nChọn LINE cần thống kê: "
                };
                PromptSelectionResult selected = editor.GetSelection(options, filter);
                if (selected.Status != PromptStatus.OK)
                {
                    editor.WriteMessage("\nKhông có selection hợp lệ; kết thúc thao tác.");
                    return;
                }

                var rows = new List<LineSnapshot>();
                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    foreach (ObjectId id in selected.Value.GetObjectIds())
                    {
                        if (id.IsNull || !id.IsValid || id.IsErased) continue;
                        if (tr.GetObject(id, OpenMode.ForRead) is Line line)
                        {
                            rows.Add(new LineSnapshot(line.Layer, line.Length));
                        }
                    }
                }

                // Sau transaction, chỉ còn các giá trị C# độc lập với wrapper database.
                if (rows.Count == 0)
                {
                    editor.WriteMessage("\nKhông đọc được LINE nào trong selection.");
                    return;
                }
                foreach (var group in rows
                    .GroupBy(row => row.Layer, StringComparer.OrdinalIgnoreCase)
                    .OrderBy(group => group.Key, StringComparer.OrdinalIgnoreCase))
                {
                    editor.WriteMessage(string.Format(
                        CultureInfo.InvariantCulture,
                        "\nLayer {0}: {1} LINE; tổng chiều dài = {2:F3} đơn vị bản vẽ",
                        group.Key, group.Count(), group.Sum(row => row.Length)));
                }
                editor.WriteMessage("\nLệnh đã đọc dữ liệu; không sửa entity.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất thống kê LINE ({0}): {1}",
                    ex.GetType().Name, ex.Message);
            }
        }
    }
}
